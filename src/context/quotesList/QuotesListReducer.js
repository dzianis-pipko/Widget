import { FILTER_SEARCH_NULL, FILTER_SEARCH, QUOTES_LIST_ERROR, QUOTES_LIST_START, QUOTES_LIST_SUCCESS } from "../types"

export const QuotesListReducer = (state, action) => {
   switch (action.type) {
      case QUOTES_LIST_START:
         return {
            ...state, loader: true,
         }
      case QUOTES_LIST_SUCCESS:
         return {
            ...state, quotesList: action.quotesList, filterQuotesList: action.quotesList, loader: false
         }
      case QUOTES_LIST_ERROR:
         return {
            ...state, error: action.error, loader: false
         }
      case FILTER_SEARCH:
         return {
            ...state, filterQuotesList: action.filterQuotesList
         }
      case FILTER_SEARCH_NULL:
         return {
            ...state, filterQuotesList: action.filterQuotesList
         }
      default:
         return state
   }
}