'use strict';
module.exports = (sequelize, DataTypes) => {
  const User_Application = sequelize.define('User_Application', {
    user_id: DataTypes.INTEGER,
    application_id: DataTypes.INTEGER,
    role_id: DataTypes.INTEGER
  }, {});
  User_Application.associate = function(models) {
    // associations can be defined here
  };
  return User_Application;
};