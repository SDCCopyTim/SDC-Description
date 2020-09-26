DROP DATABASE IF EXISTS FecGOTIM;

CREATE DATABASE FecGOTIM;

USE FecGOTIM;

CREATE TABLE CampSites(
  id int auto_increment not null primary key,
  States TEXT not null,
  Farms TEXT not null,
  Camps TEXT not null,
  minimumNights TEXT not Null,
  acceptsBookings TEXT not Null,
  checkIn TEXT not Null,
  checkOut TEXT not Null,
  onArrival TEXT not Null,
  costs int not Null,
  description LONGBLOB not Null
);