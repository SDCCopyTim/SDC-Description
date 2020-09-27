const express = require('express');
const router = express.Router();
const controllers = require('./controllers.js');

router
  .route('/:id')
  .get(controllers.getOne)

router
  .route('/all')
  .get(controllers.getAll)

module.exports = router;