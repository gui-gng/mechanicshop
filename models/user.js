'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    userpw: DataTypes.STRING,
    user_firstname: DataTypes.STRING,
    user_lastname: DataTypes.STRING,
    user_email: DataTypes.STRING,
    userpw_update_date: DataTypes.DATE,
    user_isactive: DataTypes.BOOLEAN
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};