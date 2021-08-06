import React from 'react';
import './QuoteForm.css';
import {Select, MenuItem, InputLabel, TextField} from '@material-ui/core';

export default function QuoteForm(props) {

  return (
    <div className='whole-form'>
      <header className='form-title'>
        Quick Quote
      </header>
      <span className='row'>
        <span className='cell'>
          <InputLabel>Departure</InputLabel>
          <Select variant='filled'>
            <MenuItem value={'YVR'}>
              YVR
            </MenuItem>
            <MenuItem value={'YYC'}>
              YYC
            </MenuItem>
            <MenuItem value={'YSK'}>
              YSK
            </MenuItem>
          </Select>
        </span>
        <span className='cell'>
          <InputLabel>Destination</InputLabel>
          <Select variant='filled'>
            <MenuItem value={'YVR'}>
              YVR
            </MenuItem>
            <MenuItem value={'YYC'}>
              YYC
            </MenuItem>
            <MenuItem value={'YSK'}>
              YSK
            </MenuItem>
          </Select>
        </span>
      </span>
      <span className='row'>
        <span className='cell'>
          <InputLabel>Departure Date</InputLabel>
          <TextField type="datetime-local" variant='filled'/>
        </span>
        <span className='cell'>
          <InputLabel>Return Date</InputLabel>
          <TextField type="datetime-local" variant='filled'/>
        </span>
      </span>
      <span className='row'>
        <span className='cell'>
          <InputLabel>Number of Travellers</InputLabel>
          <TextField type='number' variant='filled'/>
        </span>
        <span className='cell'>
          <InputLabel>Transportation</InputLabel>
          <Select variant='filled'>
            <MenuItem value={1}>
              Town Car
            </MenuItem>
            <MenuItem value={2}>
              Car Rental
            </MenuItem>
          </Select>
        </span>
      </span>
      <span className='row'>
        <span className='cell'>
          <InputLabel>Full Name</InputLabel>
          <TextField variant='filled'/>
        </span>
        <span>
          <button className='create-btn' type='submit'>Create a Quote</button>
        </span>
      </span>
    </div>
  );
};