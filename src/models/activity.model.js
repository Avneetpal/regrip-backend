const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const User = require("./user.model");

const Activity = sequelize.define("Activity", {
  id: {
    type: DataTypes.STRING,
    primaryKey: true
  },
  action: DataTypes.STRING
});

Activity.belongsTo(User, { foreignKey: "userId" });

module.exports = Activity;
