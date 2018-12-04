'use strict';
module.exports = (sequelize, DataTypes) => {
  const form_component = sequelize.define('form_component', {
    form_id: DataTypes.INTEGER,
    form_component_name: DataTypes.STRING,
    form_component_attribute: DataTypes.STRING,
    form_component_type: DataTypes.STRING
  }, {});
  form_component.associate = function(models) {
    // associations can be defined here
  };
  return form_component;
};