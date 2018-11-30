'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        allowNull: false,
        type: Sequelize.STRING
      },
      userpw: {
        allowNull: false,
        type: Sequelize.STRING
      },
      user_firstname: {
        allowNull: false,
        type: Sequelize.STRING
      },
      user_lastname: {
        allowNull: false,
        type: Sequelize.STRING
      },
      user_email: {
        allowNull: false,
        type: Sequelize.STRING
      },
      userpw_update_date: {
        allowNull: false,
        type: Sequelize.DATE
      },
      user_isactive: {
        allowNull: false,
        type: Sequelize.BOOLEAN
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
    return queryInterface.dropTable('Users');
  }
};