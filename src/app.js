const express = require("express");
const dotenv = require("dotenv");
const sequelize = require("./config/db");

dotenv.config();
const app = express();

app.use(express.json());

app.use("/auth", require("./routes/auth.routes"));
app.use("/tasks", require("./routes/task.routes"));

sequelize.sync().then(() => {
  console.log("DB Connected");
});

module.exports = app;
