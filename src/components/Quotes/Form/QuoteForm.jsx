import React from 'react';
import './QuoteForm.css';
import {Select, MenuItem, InputLabel, TextField} from '@material-ui/core';
export default function QuoteForm(props) {

  return (
    <form className='whole-form'>
      <header className='form-title'>
        Quick Quote
      </header>
      <tr className='row'>
        <td>
        <InputLabel>Departure</InputLabel>
        <Select variant='filled'>
          <MenuItem value={'YVR'}>
          YVR
          </MenuItem>
          <MenuItem value={'YYC'}>
          YYC
          </MenuItem>
        </Select>
        </td>
        <td>
        <InputLabel>Destination</InputLabel>
        <Select variant='filled'>
          <MenuItem value={'YVR'}>
          YVR
          </MenuItem>
          <MenuItem value={'YYC'}>
          YYC
          </MenuItem>
        </Select>
        </td>
      </tr>
      <tr className='row'>
      <td>
        <InputLabel>Departure Date</InputLabel>
        <TextField type="datetime-local" variant='filled'/>
      </td>
      <td>
        <InputLabel>Return Date</InputLabel>
        <TextField type="datetime-local" variant='filled'/>
      </td>
      </tr>
      <tr className='row'>
        <td>
          <InputLabel>Number of Travellers</InputLabel>
          <TextField type='number' variant='filled'/>
        </td>
        <td>
          <InputLabel>Transportation</InputLabel>
          <Select variant='filled'>
          <MenuItem value={1}>
          Town Car
          </MenuItem>
          <MenuItem value={2}>
          Car Rental
          </MenuItem>
        </Select>
        </td>
      </tr>
      <tr className='row'>
        <td>
          <InputLabel>Full Name</InputLabel>
          <TextField variant='filled'/>
        </td>
        <td>
        <button className='create-btn' type='submit'>Create a Quote</button>
        </td>
      </tr>
    </form>
  );
};