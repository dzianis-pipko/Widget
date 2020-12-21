import React, { useReducer } from 'react';
import { QuotesTickContext } from './QuotesTickContext'
import { QUOTES_TICK_START, QUOTES_TICK_SUCCES, QUOTES_TICK_ERROR } from '../types'
import { QuotesTickReducer } from './QuotesTickReducer'
import axios from 'axios';

export const QuotesTickState = ({ children }) => {
   const initialState = {
      quotesTick: [],
      loader: false,
      error: null
   }
   const [state, dispatch] = useReducer(QuotesTickReducer, initialState)


   const fetchTick = async (item) => {
      try {
         dispatch(fetchQuotesTickStart())
         const response = await axios.get(`https://quotes.instaforex.com/api/quotesTick?q=${item.symbol}`)
         const newQuotesTick = [];
         response.data.map((item, index) => {
            return newQuotesTick.push({
               key: index + Math.random(),
               symbol: item.symbol,
               digits: item.digits,
               ask: item.ask,
               bid: item.bid,
               change: item.change,
               lasttime: item.lasttime,
               change24h: item.change24h
            })
         })
         dispatch(fetchQuotesTickSuccess(newQuotesTick))
      } catch (e) {
         fetchQuotesTickError(e)
      }
   }

   const fetchQuotesTickStart = () => {
      return {
         type: QUOTES_TICK_START
      }
   }

   const fetchQuotesTickSuccess = (quotesTick) => {
      return {
         type: QUOTES_TICK_SUCCES,
         quotesTick
      }
   }

   const fetchQuotesTickError = (e) => {
      return {
         type: QUOTES_TICK_ERROR,
         e
      }
   }

   const { loader, quotesTick, error } = state

   return (
      <QuotesTickContext.Provider value={{
         fetchTick, loader, quotesTick, error
      }}>
         {children}
      </QuotesTickContext.Provider>
   )
}