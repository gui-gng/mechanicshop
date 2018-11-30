'use strict';
module.exports = (sequelize, DataTypes) => {
  const Application = sequelize.define('Application', {
    application_name: DataTypes.STRING,
    application_desc: DataTypes.STRING
  }, {});
  Application.associate = function(models) {
    // associations can be defined here
  };
  return Application;
};