import React from 'react';
import QuoteListItem from '../ListItem/QuoteListItem';
import './QuoteList.css';
import { Card, CardContent } from '@material-ui/core';
import HistoryIcon from '@material-ui/icons/History';
import ReplayIcon from '@material-ui/icons/Replay';
import ZoomOutMapIcon from '@material-ui/icons/ZoomOutMap';

export default function QuoteList(props) {

  const composeQuoteList = props.data.map(quote => {
    return (
      <QuoteListItem
        key={quote.id}
        id={quote.id}
        name={quote.name}
        destination={quote.destination}
        price={quote.quoted_price}
        onClick={props.onClick}
      />
    )
  })
  return (
    <Card>
      <CardContent>
        <header className='quote-widget'>
          <span className='left-header'>
          <HistoryIcon className='left-icon'/>
          Pending Quotes
          </span>
          <span className='right-icons'>
          <ReplayIcon/>
          <ZoomOutMapIcon/>
          </span>
        </header>
        <table>
          <tbody>
            <tr className='table-head'>
              <th>ID #</th>
              <th>NAME:</th>
              <th>DESTINATION:</th>
              <th>PRICE:</th>
            </tr>
            {composeQuoteList}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
};