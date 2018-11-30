'use strict';
module.exports = (sequelize, DataTypes) => {
  const Car = sequelize.define('Car', {
    car_make: DataTypes.STRING,
    car_model: DataTypes.STRING,
    car_submodel: DataTypes.STRING,
    car_year: DataTypes.INTEGER,
    car_variant: DataTypes.STRING,
    car_engine: DataTypes.STRING,
    car_body: DataTypes.STRING,
    car_type: DataTypes.STRING
  }, {});
  Car.associate = function(models) {
    // associations can be defined here
  };
  return Car;
};