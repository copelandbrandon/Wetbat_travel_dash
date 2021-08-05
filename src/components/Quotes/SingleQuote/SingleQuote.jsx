import React from 'react';
import './SingleQuote.css';
export default function SingleQuote(props) {

  return (
    <div>
      <header className='single-title'>
        <p>Qoute ID# {props.id}</p>
      </header>
      <body className='all-details'>
      <div className='contact-info'>
        <th className='sub-title'>Contact Info:</th>
        <tr>
          <b>Name: </b> {props.name}
        </tr>
        <tr>
          <b>Phone Number: </b> {props.phone_num}
        </tr>
        <tr>
          <b>Email: </b> {props.email}
        </tr>
      </div>
      <div className='flight-info'>
        <th className='sub-title'>Flight Info:</th>
        <tr>
          <b>Departing: </b> {props.departure}
        </tr>
        <tr>
          <b>Destination: </b> {props.destination}
        </tr>
        <tr>
          <b>Number of Travellers: </b> {props.number_of_travellers}
        </tr>
        <tr>
          <b>Departure Date: </b> {props.departure_date}
        </tr>
        <tr>
          <b>Return_Date: </b> {props.return_date}
        </tr>
      </div>
      <div className='details'>
        <th className='sub-title'>Details: </th>
        <tr>
          <b>Transportation: </b> {props.transport}
        </tr>
        <tr>
          <b>Cost: </b> {props.price}
        </tr>
      </div>
      </body>
    </div>
  );
};