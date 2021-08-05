DROP TABLE IF EXISTS contact_info CASCADE;
DROP TABLE IF EXISTS transportation_options CASCADE;
DROP TABLE IF EXISTS flights CASCADE;
DROP TABLE IF EXISTS quotes CASCADE;

CREATE TABLE contact_info(
  id SERIAL PRIMARY KEY,
  phone_number VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE transportation_options(
 id SERIAL PRIMARY KEY,
 type VARCHAR(255) NOT NULL
);

CREATE TABLE flights(
  id SERIAL PRIMARY KEY,
  departure VARCHAR(255) NOT NULL,
  destination VARCHAR(255) NOT NULL,
  departure_date TIMESTAMP NOT NULL,
  return_date TIMESTAMP NOT NULL,
  number_of_travellers INTEGER NOT NULL
);

CREATE TABLE quotes(
  id SERIAL PRIMARY KEY,
  contact_id INTEGER REFERENCES contact_info(id) ON DELETE CASCADE NOT NULL,
  transportation_id INTEGER REFERENCES transportation_options(id) ON DELETE CASCADE NOT NULL,
  flight_id INTEGER REFERENCES flights(id) ON DELETE CASCADE NOT NULL,
  quoted_price INTEGER NOT NULL
);