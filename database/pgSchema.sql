DROP TABLE IF EXISTS campsites;

CREATE TABLE IF NOT EXISTS campsites(
  id serial primary key,
  States varchar(100) NOT NULL,
  Farms varchar(100) NOT NULL,
  Camps varchar(100) NOT NULL,
  minimumNights varchar(100) NOT NULL,
  acceptsBookings varchar(100) NOT NULL,
  checkIn varchar(100) NOT NULL,
  checkOut varchar(100) NOT NULL,
  onArrival varchar(100) NOT NULL,
  costs int NOT NULL,
  description varchar(500) NOT NULL,
  responses varchar(100) NOT NULL,
  recommended varchar(100) NOT NULL,
  Parks varchar(100) NOT NULL,
  Lodging varchar(100) NOT NULL,
  Essentials varchar(100) NOT NULL,
  Amentities varchar(100) NOT NULL,
  Owners varchar(100) NOT NULL,
  photosOfResponsers varchar(1000) NOT NULL,
  cancellation varchar(100) NOT NULL,
  checkmark varchar(100) NOT NULL
);