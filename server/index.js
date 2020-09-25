const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const react = require('react');
//const router = require('router');

const app = express();
const PORT = 3002;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.listen(PORT, ()=> {
  console.log(`Listening on http://localhost/${PORT}`);
})

