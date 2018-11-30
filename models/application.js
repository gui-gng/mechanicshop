'use strict';
module.exports = (sequelize, DataTypes) => {
  const application = sequelize.define('application', {
    application_name: DataTypes.STRING,
    application_desc: DataTypes.STRING
  }, {});
  application.associate = function(models) {
    // associations can be defined here
    application.belongsTo(model.user_application);
  };
  return application;
};