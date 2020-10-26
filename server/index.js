require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const router = require('./router.js');

const app = express();
const PORT = 3002;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/loaderio-600b374bf14da763710ad04b1af32b6f', (req, res) => {
  res.status(200).send('loaderio-600b374bf14da763710ad04b1af32b6f');
});

app.use('/', router);


app.use(express.static(path.join(__dirname, '../client/public')));

app.listen(PORT, ()=> {
  console.log(`Listening on http://localhost/${PORT}`);
})
