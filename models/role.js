'use strict';
module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define('Role', {
    role_name: DataTypes.STRING,
    role_des: DataTypes.STRING
  }, {});
  Role.associate = function(models) {
    // associations can be defined here
  };
  return Role;
};