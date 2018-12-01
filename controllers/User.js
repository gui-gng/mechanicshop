const User = require('../models').User;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = {
  list(req, res) {
    return User
      .findAll()
      .then((users) => res.status(200).send(users))
      .catch((error) => { res.status(400).send(error); });
  },

  getById(req, res) {
    console.log("Get user ID:" + req.params.id);
    return User
      .findById(req.params.id)
      .then((user) => {
        if (!user) {
          return res.status(404).send({
            message: 'User Not Found',
          });
        }
        return res.status(200).send(user);
      })
      .catch((error) => res.status(400).send(error));
  },
  auth(req, res) {
    console.log("-------------auth");
    return User
    .findOne({ where: {[Op.and]: [{username: req.body.username}, {userpw: req.body.password}]} })
    .then(user => {
      if (!user) {
        return res.status(401).send({
          message: 'User or password invalid',
        });
      }
      return res.status(200).send(user);
    })
  },
  add(req, res) {
    return User
      .create({
        class_name: req.body.class_name,
      })
      .then((User) => res.status(201).send(user))
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return User
      .findById(req.params.id)
      .then(User => {
        if (!User) {
          return res.status(404).send({
            message: 'User Not Found',
          });
        }
        return User
          .update({
            class_name: req.body.class_name || user.class_name,
          })
          .then(() => res.status(200).send(user))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return User
      .findById(req.params.id)
      .then(user => {
        if (!user) {
          return res.status(400).send({
            message: 'User Not Found',
          });
        }
        return User
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};