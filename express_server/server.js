const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8080;
require("dotenv").config();
const {Pool} = require('pg');
const dbParams = require('./lib/db.js');
const db = new Pool(dbParams);
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
  res.json({info: 'this is the home page'})
})

app.get('/api/quotes', (req, res) => {
  console.log("hit api/quotes");
  return db.query('SELECT quotes.id, quotes.quoted_price, flights.destination, contact_info.name FROM quotes INNER JOIN flights ON flights.id = quotes.flight_id INNER JOIN contact_info ON contact_info.id = quotes.contact_id GROUP BY quotes.id, flights.destination, contact_info.name ORDER BY quotes.id;')
    .then((data) => {
      return res.json(data.rows);
    })
    .catch(err => res.status(500).json({error: err.message}));
});

app.get('/api/quote/details/:id', (req, res) => {
  console.log("hit api/quote/details");
  let quoteId = req.params.id;
  return db.query(`SELECT quotes.*, flights.*, contact_info.*, transportation_options.type as transportation FROM quotes INNER JOIN flights ON quotes.flight_id = flights.id INNER JOIN contact_info ON contact_info.id = quotes.contact_id INNER JOIN transportation_options ON transportation_options.id = quotes.transportation_id WHERE quotes.id=${quoteId} GROUP BY quotes.id, flights.id, contact_info.id, transportation_options.id;`)
    .then((data) => {
      return res.json(data.rows);
    })
    .catch((err) => res.status(500).json({error: err.message}));
})

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
});