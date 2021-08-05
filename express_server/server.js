const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8080;
require("dotenv").config();
const {Pool} = require('pg');
const dbParams = require('./lib/db.js');
const db = new Pool(dbParams);
console.log(dbParams);
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
// db.connect();

app.get('/', (req, res) => {
  res.json({info: 'this is the home page'})
})

app.get('/quotes', (req, res) => {
  return db.query('SELECT * FROM quotes;')
    .then((data) => {
      res.json(data.rows);
    })
    .catch(err => res.status(500).json({error: err.message}));
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
});