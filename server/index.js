const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const router = require('./router.js');

const app = express();
const PORT = 3002;

app.use(express.static(path.join(__dirname + '/../client/public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/', router);



app.listen(PORT, ()=> {
  console.log(`Listening on http://localhost/${PORT}`);
})