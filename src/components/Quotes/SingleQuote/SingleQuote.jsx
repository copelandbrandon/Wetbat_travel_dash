import React from 'react';
import './SingleQuote.css';
export default function SingleQuote(props) {

  return (
    <div className='details-widget'>
      <header className='single-title'>
        <p>Qoute ID# {props.data.id}</p>
      </header>
      <body className='all-details'>
      <div className='contact-info'>
        <th className='sub-title'>Contact Info:</th>
        <tr>
          <b>Name: </b> {props.data.name}
        </tr>
        <tr>
          <b>Phone Number: </b> {props.data.phone_number}
        </tr>
        <tr>
          <b>Email: </b> {props.data.email}
        </tr>
      </div>
      <div className='flight-info'>
        <th className='sub-title'>Flight Info:</th>
        <tr>
          <b>Departing: </b> {props.data.departure}
        </tr>
        <tr>
          <b>Destination: </b> {props.data.destination}
        </tr>
        <tr>
          <b>Number of Travellers: </b> {props.data.number_of_travellers}
        </tr>
        <tr>
          <b>Departure Date: </b> {props.data.departure_date}
        </tr>
        <tr>
          <b>Return_Date: </b> {props.data.return_date}
        </tr>
      </div>
      <div className='details'>
        <th className='sub-title'>Details: </th>
        <tr>
          <b>Transportation: </b> {props.data.transportation}
        </tr>
        <tr>
          <b>Cost: </b> {props.data.quoted_price}
        </tr>
      </div>
      </body>
      <button className="back-btn" onClick={props.onClick}>Back</button>
    </div>
  );
};