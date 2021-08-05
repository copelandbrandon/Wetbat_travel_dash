INSERT INTO contact_info(phone_number, email, name)
VALUES ('403-667-2859', 'jeb@gmail.com', 'Jeb Bungus');

INSERT INTO transportation_options(type)
VALUES ('Town Car');

INSERT INTO flights(departure, destination, departure_date, return_date, number_of_travellers)
VALUES ('YYC', 'YVR', '2021-08-15 13:15:00', '2021-09-7 9:30:00', 3);

INSERT INTO quotes(contact_id, transportation_id, flight_id, quoted_price)
VALUES (1, 1, 1, 1500);