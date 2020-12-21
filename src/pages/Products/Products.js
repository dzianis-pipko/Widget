import React, { useContext, useEffect, Fragment } from 'react';
import { Loader } from '../../components/Loader/Loader';
import { QuotesListContext } from '../../context/quotesList/QuotesListContext';
import './Products.scss';
import { Table } from 'antd';
import { Link } from 'react-router-dom'

export const Products = () => {
   const { fetchQuotesList, loader, filterQuotesList, quotesTickChange } = useContext(QuotesListContext)
   useEffect(() => {
      fetchQuotesList()
   }, []);

   const btnChange = (event) => {
      quotesTickChange(event.target.id);
   }

   const columns = [
      {
         title: 'description',
         dataIndex: 'description',
         key: 'description'
      },
      {
         title: 'digits',
         dataIndex: 'digits',
         key: 'digits'
      },
      {
         title: 'symbol',
         dataIndex: 'symbol',
         key: 'symbol'
      },
      {
         title: 'trade',
         dataIndex: 'trade',
         key: 'trade'
      },
      {
         title: 'type',
         dataIndex: 'type',
         key: 'type'
      },
      {
         title: 'action',
         dataindex: 'action',
         key: 'action',
         render: (fetchQuotesList) => (
            <Link
               id={fetchQuotesList.key} type="button"
               className="btn btn-secondary"
               onClick={btnChange}
               to={`/product/`}
            >Action</Link>
         ),
      }
   ];

   return (
      <Fragment>
         {
            loader
               ? <Loader />
               : <Table columns={columns} dataSource={filterQuotesList} />
         }
      </Fragment>
   )
}