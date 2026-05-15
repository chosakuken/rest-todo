"use strict";
const { sequelize } = require("../config/database.js");
const { DataTypes } = require("sequelize");

const Task = sequelize.define("Task", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  detail: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  deadline: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  done: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

module.exports = { Task };
