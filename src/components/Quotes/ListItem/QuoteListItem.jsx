import React from 'react';
import './QuoteListItem.css';
export default function QuoteListItem(props) {

  return (
    <tr className='quote-list-item' onClick={props.onClick} key={props.id}>
      <td className={props.id}>{props.id}</td>
      <td className={props.id}>{props.name}</td>
      <td className={props.id}>{props.destination}</td>
      <td className={props.id}>{props.price}</td>
    </tr>
  );
};