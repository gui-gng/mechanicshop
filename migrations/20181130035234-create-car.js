'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Cars', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      car_make: {
        type: Sequelize.STRING
      },
      car_model: {
        type: Sequelize.STRING
      },
      car_submodel: {
        type: Sequelize.STRING
      },
      car_year: {
        type: Sequelize.INTEGER
      },
      car_variant: {
        type: Sequelize.STRING
      },
      car_engine: {
        type: Sequelize.STRING
      },
      car_body: {
        type: Sequelize.STRING
      },
      car_type: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Cars');
  }
};