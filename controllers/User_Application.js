const User_Application = require('../models').User_Application;
module.exports = {
  list(req, res) {
    return User_Application
      .findAll()
      .then((user_applications) => res.status(200).send(user_applications))
      .catch((error) => { res.status(400).send(error); });
  },

  getById(req, res) {
    return User_Application
      .findById(req.params.id)
      .then((User_Application) => {
        if (!User_Application) {
          return res.status(404).send({
            message: 'User_Application Not Found',
          });
        }
        return res.status(200).send(user_application);
      })
      .catch((error) => res.status(400).send(error));
  },

  add(req, res) {
    return User_Application
      .create({
        class_name: req.body.class_name,
      })
      .then((User_Application) => res.status(201).send(user_application))
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return User_Application
      .findById(req.params.id)
      .then(User_Application => {
        if (!User_Application) {
          return res.status(404).send({
            message: 'User_Application Not Found',
          });
        }
        return User_Application
          .update({
            class_name: req.body.class_name || user_application.class_name,
          })
          .then(() => res.status(200).send(user_application))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return User_Application
      .findById(req.params.id)
      .then(user_application => {
        if (!user_application) {
          return res.status(400).send({
            message: 'User_Application Not Found',
          });
        }
        return User_Application
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};