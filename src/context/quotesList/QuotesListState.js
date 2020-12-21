import React, { useReducer, useContext } from 'react';
import { QuotesListContext } from './QuotesListContext';
import { QuotesListReducer } from './QuotesListReducer';
import axios from 'axios';
import { QUOTES_LIST_START, QUOTES_LIST_SUCCESS, FILTER_SEARCH, FILTER_SEARCH_NULL } from '../types';
import { QuotesTickContext } from '../quotesTick/QuotesTickContext'
export const QuotesListState = ({ children }) => {

   const initialState = {
      quotesList: [],
      filterQuotesList: [],
      loader: false,
      error: null
   }
   const [state, dispatch] = useReducer(QuotesListReducer, initialState)
   const { fetchTick } = useContext(QuotesTickContext)

   const fetchQuotesList = async () => {
      try {
         dispatch(fetchQuotesListStart())
         const response = await axios.get(`https://quotes.instaforex.com/api/quotesList`)
         const newQuotesList = [];
         response.data.quotesList.map((item, index) => {
            return newQuotesList.push({
               key: index + Math.random(),
               description: item.description,
               digits: item.digits,
               symbol: item.symbol,
               trade: item.trade,
               type: item.type
            })
         })
         dispatch(fetchQuotesListSuccess(newQuotesList))
      } catch (e) {
         dispatch(fetchQuotesListError(e))
      }
   }

   const search = async (value) => {
      if (value !== '') {
         const filterQuotesList = quotesList.filter(item => item.description.toLowerCase().indexOf(value.toLowerCase()) > -1)
         dispatch({
            type: FILTER_SEARCH,
            filterQuotesList
         });

      } else {
         const filterQuotesList = quotesList
         dispatch({
            type: FILTER_SEARCH_NULL,
            filterQuotesList
         });
      }
   }

   const quotesTickChange = (idBtn) => {
      filterQuotesList.find(item => {
         if (item.key == idBtn) {
            fetchTick(item)
         }
      })
   }

   const fetchQuotesListStart = () => {
      return {
         type: QUOTES_LIST_START
      }
   }
   const fetchQuotesListSuccess = (quotesList) => {
      return {
         type: QUOTES_LIST_SUCCESS,
         quotesList
      }
   }
   const fetchQuotesListError = (e) => {
      return {
         type: QUOTES_LIST_START,
         e
      }
   }

   const { quotesList, filterQuotesList, loader, error } = state;


   return (
      <QuotesListContext.Provider value={{
         fetchQuotesList, quotesList, filterQuotesList, loader, error, quotesTickChange, search
      }}>
         {children}
      </QuotesListContext.Provider>
   )
}