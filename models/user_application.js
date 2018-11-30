'use strict';
module.exports = (sequelize, DataTypes) => {
  const user_application = sequelize.define('user_application', {
    userid: DataTypes.INTEGER,
    applicationid: DataTypes.INTEGER,
    roleid: DataTypes.INTEGER
  }, {});
  user_application.associate = function(models) {
    // associations can be defined here
    user_application.hasMany(model.user,{
      foreingKey: "userid",
      as: 'users'
    });

    user_application.hasMany(model.application,{
      foreingKey: "applicationid",
      as: 'applications'
    });

  };
  return user_application;
};