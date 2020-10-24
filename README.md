# SDC-Description

1. To create database, copy paste the schema.js file into your mysql.
2. To seed the database, input command "npm run seed"
3. Run npm run start on terminal to start server
4. Add your password to config.example.js and then rename the file to config.js
5. Go to package.json. Change "nodemon server/index.js" to "node server/index.js" and "webpack -d --watch" to "webpack"

## CRUD API using REST

| CRUD   | REST   | PATH     | DATA TO PASS                                                                                                                                                                                                                                                                                                                                                                                                          |
|--------|--------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| CREATE | POST   | /one     | States (STRING)<br />Farms (STRING)<br />Camps (STRING)<br />minimumNights (STRING)<br />acceptsBookings (STRING)<br />checkIn (STRING)<br />checkOut (STRING)<br />onArrival (STRING)<br />costs (NUMBER)<br />description (STRING)<br />responses (STRING)<br />recommended (STRING)<br />Parks(STRING)<br />Lodging (STRING)<br />Essentials (STRING)<br />Amentities (STRING)<br />Owners (STRING)<br />photosofResponsers (STRING)<br />cancellation (STRING)<br />checkmark (BOOLEAN |
| READ   | GET    | /one/:id |                                                                                                                                                                                                                                                                                                                                                                                                                       |
| UPDATE | PUT    | /one/:id | ```<name of data column you want to change>: <new data>```                                                                                                                                                                                                                                                                                                                                                                  |
| DELETE | DELETE | /one/:id |                                                                                                                                                                                                                                                                                                                                                                                                                       |
