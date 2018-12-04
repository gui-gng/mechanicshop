'use strict';
module.exports = (sequelize, DataTypes) => {
  const form = sequelize.define('form', {
    application_id: DataTypes.INTEGER,
    form_name: DataTypes.STRING,
    form_background: DataTypes.STRING
  }, {});
  form.associate = function(models) {
    // associations can be defined here
  };
  return form;
};