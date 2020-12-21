import React, { useState, useContext } from 'react';
import { FormControl } from 'react-bootstrap'
import './Search.scss';
import { QuotesListContext } from '../../context/quotesList/QuotesListContext';

export const Search = () => {
   const [value, setValue] = useState('');
   const { search } = useContext(QuotesListContext)

   const onSubmit = (event) => {
      if (event.key !== 'Enter') {
         return
      }
      search(value.trim())
   }

   return (
      <FormControl
         type="text"
         placeholder="Search"
         className="mr-sm-2 search"
         value={value}
         onChange={event => setValue(event.target.value)}
         onKeyPress={onSubmit}
      />
   )
}