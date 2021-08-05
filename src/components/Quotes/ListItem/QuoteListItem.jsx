import React from 'react';
import './QuoteListItem.css';
export default function QuoteListItem(props) {

  return (
    <tr className='quote-list-item'>
      <td>{props.id}</td>
      <td>{props.name}</td>
      <td>{props.destination}</td>
      <td>{props.price}</td>
    </tr>
  );
};