const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const User = sequelize.define("User", {
  id: {
    type: DataTypes.STRING,
    primaryKey: true
  },
  email: {
    type: DataTypes.STRING,
    unique: true
  },
  otp: DataTypes.STRING,
  otp_expiry: DataTypes.DATE
});

module.exports = User;
