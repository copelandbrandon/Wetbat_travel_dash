INSERT INTO contact_info(phone_number, email, name)
VALUES ('403-667-2859', 'jeb@gmail.com', 'Jeb Bungus'),
('687-824-9087', 'stan@hotmail.com', 'Stanley Gibson'),
('403-142-8703', 'gordohems@gmail.com', 'Gordon Hemsley'),
('867-213-9678', 'Sbears@hotmail.com', 'Sarah Hamilton');

INSERT INTO transportation_options(type)
VALUES ('Town Car'),
('Rental Car'),
('Public Transportation');

INSERT INTO flights(departure, destination, departure_date, return_date, number_of_travellers)
VALUES ('YYC', 'YVR', '2021-08-15 13:15:00', '2021-09-7 9:30:00', 3),
('YSK', 'YVR', '2021-10-01 12:00:00', '2021-10-21 17:00:00', 8),
('YVR', 'YSK', '2022-01-25 15:00:00', '2021-02-17 1:00:00', 2),
('YSK', 'YYC', '2022-03-05 12:00:00', '2022-04-05 12:00:00', 1);

INSERT INTO quotes(contact_id, transportation_id, flight_id, quoted_price)
VALUES (1, 1, 1, 1500),
(2, 1, 2, 1000),
(3, 2, 3, 800),
(4, 1, 4, 750),
(1, 3, 2, 2000);