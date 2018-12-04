'use strict';
module.exports = (sequelize, DataTypes) => {
  const form_attribute_type = sequelize.define('form_attribute_type', {
    form_attribute_type: DataTypes.STRING
  }, {});
  form_attribute_type.associate = function(models) {
    // associations can be defined here
  };
  return form_attribute_type;
};