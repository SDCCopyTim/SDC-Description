const express = require('express');
const router = express.Router();
const controllers = require('./controllers.js');

router
  .route('/one')
  .post(controllers.addOne)

  router
  .route('/one/:id')
  .get(controllers.getOne)
  .put(controllers.updateOne)
  .delete(controllers.deleteOne)

module.exports = router;