const Application = require('../models').Application;
module.exports = {
  list(req, res) {
    return Application
      .findAll()
      .then((applications) => res.status(200).send(applications))
      .catch((error) => { res.status(400).send(error); });
  },

  getById(req, res) {
    return Application
      .findById(req.params.id)
      .then((Application) => {
        if (!Application) {
          return res.status(404).send({
            message: 'Application Not Found',
          });
        }
        return res.status(200).send(application);
      })
      .catch((error) => res.status(400).send(error));
  },

  add(req, res) {
    return Application
      .create({
        class_name: req.body.class_name,
      })
      .then((Application) => res.status(201).send(application))
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return Application
      .findById(req.params.id)
      .then(Application => {
        if (!Application) {
          return res.status(404).send({
            message: 'Application Not Found',
          });
        }
        return Application
          .update({
            class_name: req.body.class_name || application.class_name,
          })
          .then(() => res.status(200).send(application))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return Application
      .findById(req.params.id)
      .then(application => {
        if (!application) {
          return res.status(400).send({
            message: 'Application Not Found',
          });
        }
        return Application
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};