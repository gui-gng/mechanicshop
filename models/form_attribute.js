'use strict';
module.exports = (sequelize, DataTypes) => {
  const form_attribute = sequelize.define('form_attribute', {
    form_attribute_name: DataTypes.STRING,
    form_attribute_alias: DataTypes.STRING,
    form_attribute_type_id: DataTypes.INTEGER
  }, {});
  form_attribute.associate = function(models) {
    // associations can be defined here
  };
  return form_attribute;
};