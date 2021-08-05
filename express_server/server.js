const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.DB_PORT;
require("dotenv").config();
const Pool = require('pg').Pool;
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: port
});

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
  res.json({info: "this is a page"})
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
});