const Task = require("../models/task.model");
const { v4: uuidv4 } = require("uuid");

exports.createTask = async (req, res) => {
  const task = await Task.create({
    id: uuidv4(),
    title: req.body.title,
    description: req.body.description,
    userId: req.user.id
  });

  res.json(task);
};

exports.getTasks = async (req, res) => {
  const tasks = await Task.findAll({
    where: { userId: req.user.id }
  });

  res.json(tasks);
};

exports.updateTask = async (req, res) => {
  const task = await Task.findOne({
    where: { id: req.params.id, userId: req.user.id }
  });

  if (!task) return res.status(404).json({ message: "Not found" });

  task.title = req.body.title || task.title;
  task.description = req.body.description || task.description;
  task.status = req.body.status || task.status;

  await task.save();

  res.json(task);
};

exports.deleteTask = async (req, res) => {
  const task = await Task.findOne({
    where: { id: req.params.id, userId: req.user.id }
  });

  if (!task) return res.status(404).json({ message: "Not found" });

  await task.destroy();

  res.json({ message: "Deleted" });
};
