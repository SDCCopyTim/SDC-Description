const PASSWORD = require('./config.js');
const { Client } = require('pg');

const db = new Client({
  user: 'alvin',
  host: 'localhost',
  database: 'sdcdescription',
  password: PASSWORD,
  port: 5432,
});
db.connect();


module.exports = db;