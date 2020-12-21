import { QUOTES_TICK_START, QUOTES_TICK_SUCCES, QUOTES_TICK_ERROR } from '../types'

export const QuotesTickReducer = (state, action) => {
   switch (action.type) {
      case QUOTES_TICK_START:
         return {
            ...state, loader: true
         }
      case QUOTES_TICK_SUCCES:
         return {
            ...state, loader: false, quotesTick: action.quotesTick
         }
      case QUOTES_TICK_ERROR:
         return {
            ...state, loader: false, error: action.error
         }
      default:
         return state
   }
}