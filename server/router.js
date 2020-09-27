const express = require('express');
const router = express.Router();
const controllers = require('./controllers.js');

router
  .route('/camp')
  .get(controllers.getOne)

module.exports = router;