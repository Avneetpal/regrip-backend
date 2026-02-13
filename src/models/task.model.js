const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const User = require("./user.model");

const Task = sequelize.define("Task", {
  id: {
    type: DataTypes.STRING,
    primaryKey: true
  },
  title: DataTypes.STRING,
  description: DataTypes.TEXT,
  status: {
    type: DataTypes.STRING,
    defaultValue: "pending"
  }
});

Task.belongsTo(User, { foreignKey: "userId" });

module.exports = Task;
