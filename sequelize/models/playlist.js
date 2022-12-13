const sequelize = require('../../database/sequelize')
const { DataTypes } = require("sequelize");

module.exports = sequelize.define('playlist', {
  id: {
    type: DataTypes.INTEGER(11),
    primaryKey: true,
    allowNull: true,
    autoIncrement: true,
  },
  name: {
    name: 'name',
    type: DataTypes.STRING,
  },
}, {
  timestamps: false
});