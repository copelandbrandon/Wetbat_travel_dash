# Getting Started
- Clone this repo to your local machine
- install dependencies at the root level with
```js
npm install
```
- Navigate to express_server and install server dependencies with
```js
npm install
```
- run this script in psql
```sql
CREATE DATABASE wetbat_travel;
```
- Navigate to db/schema and run the schema file in psql with
```sql
\i 01_schema.sql
```

- Navigate to db/seeds and seed the database with
```sql
\i 01_seeds.sql
```

- Copy the .env.example inside of express_server and plug in details for your database
  if you wish to use the same .env as I have been, use 
  (
DB_HOST=localhost
DB_USER=vagrant
DB_PASS=123
DB_NAME=wetbat_travel
DB_PORT=5432
)
- in a terminal run the server within express_server with
```js
node server.js
```
- in a terminal run the react app with
```js
npm start
```

# Comments

- Most components are non functional and only there to more accurately depict the dashboard from the challenge document.

- click on a quote within the quote list to view the details page for that quote.