DROP TABLE IF EXISTS campsites;

CREATE TABLE IF NOT EXISTS campsites(
  id int primary key,
  States varchar(2550) NOT NULL,
  Farms varchar(2550) NOT NULL,
  Camps varchar(2550) NOT NULL,
  minimumNights varchar(2550) NOT NULL,
  acceptsBookings varchar(2550) NOT NULL,
  checkIn varchar(2550) NOT NULL,
  checkOut varchar(2550) NOT NULL,
  onArrival varchar(2550) NOT NULL,
  costs int NOT NULL,
  description varchar(10000) NOT NULL,
  review varchar(10000) NOT NULL,
  responses varchar(2550) NOT NULL,
  recommended varchar(2550) NOT NULL,
  Parks varchar(2550) NOT NULL,
  Lodging varchar(2550) NOT NULL,
  Essentials varchar(2550) NOT NULL,
  Amentities varchar(2550) NOT NULL,
  Owners varchar(2550) NOT NULL,
  photosOfResponsers varchar(2550) NOT NULL,
  cancellation varchar(2550) NOT NULL,
  checkmark varchar(2550) NOT NULL
);