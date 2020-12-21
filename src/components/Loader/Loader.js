import React from 'react';
import { Spinner } from 'react-bootstrap';
import './Loader.scss'

export const Loader = () => {
   return (
      <div className="loader-box">
         <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
         </Spinner>
      </div>
   )
}