import React, { useState } from 'react';
import { FormControl } from 'react-bootstrap'
import './Search.scss';

export const Search = () => {
   const [value, setValue] = useState('');
   const onSubmit = (event) => {
      if (event.key !== 'Enter') {
         return
      }
      if (value.trim()) {
         console.log(value);
      } else {
         alert('Введите корректное значение')
      }
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