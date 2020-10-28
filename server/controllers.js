const models = require('../database/models.js');

const randomNum = () => Math.ceil(Math.random() * Math.ceil(10000000));

const controllers = {
  getOne: (req, res) => {
    models.getOne(req.params.id)
      .then(results => res.status(200).json(results))
      .catch(err => res.status(400).send(err));
  },

  getRandom: (req, res) => {
    const num = randomNum();
    models.getOne(num)
      .then(results => res.status(200).json(results))
      .catch(err => res.status(400).send(err));
  }

  addOne: (req, res) => {
    models.addOne(req.body, (err, results) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).json(results);
      }
    });
  },

  updateOne: (req, res) => {
    models.updateOne(req.params.id, req.body, (err, results) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).json(results);
      }
    });
  },

  deleteOne: (req, res) => {
    models.deleteOne(req.params.id, (err, results) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).json(results);
      }
    })
  }

};

module.exports = controllers;