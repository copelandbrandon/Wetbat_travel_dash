DROP TABLE IF EXISTS contact_info CASCADE;
DROP TABLE IF EXISTS transportation_options CASCADE;
DROP TABLE IF EXISTS flights CASCADE;
DROP TABLE IF EXISTS qoutes CASCADE;

CREATE TABLE contact_info(
  id SERIAL PRIMARY KEY,
  phone_number VARCHAR(255),
  email VARCHAR(255),
  name VARCHAR(255)
);

CREATE TABLE transportation_options(
 id SERIAL PRIMARY KEY,
 type VARCHAR(255)
);

CREATE TABLE flights(
  id SERIAL PRIMARY KEY,
  departure VARCHAR(255),
  destination VARCHAR(255),
  departure_date TIMESTAMP,
  return_date TIMESTAMP,
  number_of_travellers INTEGER
);

CREATE TABLE qoutes(
  id SERIAL PRIMARY KEY,
  contact_id INTEGER REFERENCES contact_info(id) ON DELETE CASCADE,
  transportation_id INTEGER REFERENCES transportation_options(id) ON DELETE CASCADE,
  flight_to INTEGER REFERENCES flights(id) ON DELETE CASCADE,
  flight_from INTEGER REFERENCES flights(id) ON DELETE CASCADE
);