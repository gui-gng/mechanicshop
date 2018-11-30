const Car = require('../models').Car;
module.exports = {
  list(req, res) {
    return Car
      .findAll()
      .then((cars) => res.status(200).send(cars))
      .catch((error) => { res.status(400).send(error); });
  },

  getById(req, res) {
    return Car
      .findById(req.params.id)
      .then((Car) => {
        if (!Car) {
          return res.status(404).send({
            message: 'Car Not Found',
          });
        }
        return res.status(200).send(car);
      })
      .catch((error) => res.status(400).send(error));
  },

  add(req, res) {
    return Car
      .create({
        class_name: req.body.class_name,
      })
      .then((Car) => res.status(201).send(car))
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return Car
      .findById(req.params.id)
      .then(Car => {
        if (!Car) {
          return res.status(404).send({
            message: 'Car Not Found',
          });
        }
        return Car
          .update({
            class_name: req.body.class_name || car.class_name,
          })
          .then(() => res.status(200).send(car))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return Car
      .findById(req.params.id)
      .then(car => {
        if (!car) {
          return res.status(400).send({
            message: 'Car Not Found',
          });
        }
        return Car
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};