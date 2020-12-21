import React, { Fragment, useContext } from 'react';
import './Product.scss';
import { Table } from 'antd';
import { Loader } from '../../components/Loader/Loader'
import { QuotesTickContext } from '../../context/quotesTick/QuotesTickContext'

export const Product = () => {

   const { loader, quotesTick } = useContext(QuotesTickContext)

   const columns = [
      {
         title: 'symbol',
         dataIndex: 'symbol',
         key: 'symbol'
      },
      {
         title: 'digits',
         dataIndex: 'digits',
         key: 'digits'
      },
      {
         title: 'ask',
         dataIndex: 'ask',
         key: 'ask'
      },
      {
         title: 'bid',
         dataIndex: 'bid',
         key: 'bid'
      },
      {
         title: 'change',
         dataIndex: 'change',
         key: 'change'
      },
      {
         title: 'lasttime',
         dataIndex: 'lasttime',
         key: 'lasttime'
      },
      {
         title: 'change24h',
         dataIndex: 'change24h',
         key: 'change24h'
      },
   ];

   return (
      <Fragment>
         {
            loader
               ? <Loader />
               : <Table columns={columns} dataSource={quotesTick} />
         }
      </Fragment>
   )
}
