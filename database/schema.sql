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
  description TEXT (10000) not Null,
  review TEXT (10000) not Null,
  responses TEXT not Null,
  recommended TEXT not Null,
  Parks TEXT not Null,
  Lodging TEXT not Null,
  Essentials TEXT not Null,
  Amentities TEXT not Null,
  Owners TEXT not Null,
  photosOfResponsers TEXT not Null,
  cancellation TEXT not Null,
  checkmark TEXT not Null
);