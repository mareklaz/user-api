const User = require('../model/User.model');
const createError = require('http-errors');

module.exports.list = (req, res, next) => {
  User.find()
    .then(users => {
      res.json(users);
    })
    .catch(next);
}

module.exports.detail = (req, res, next) => {
  const { id } = req.params;
  User.findById(id)
    .then(user => {
      res.json(user);
    })
    .catch(next);
}

module.exports.create = (req, res, next) => {
  User.create(req.body)
    .then(user => res.status(201).json(user))
    .catch(next);
}

