'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    userid: DataTypes.INTEGER,
    username: DataTypes.STRING,
    userpw: DataTypes.STRING,
    user_firstname: DataTypes.STRING,
    user_lastname: DataTypes.STRING,
    user_email: DataTypes.STRING,
    userpw_update_date: DataTypes.DATE,
    user_isactive: DataTypes.BOOLEAN
  }, {});
  user.associate = function(models) {
    // associations can be defined here
    user.belongsTo(model.user_application);
  };
  return user;
};