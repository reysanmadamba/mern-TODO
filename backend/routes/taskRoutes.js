const express = require("express");
const {
  CreateTask,
  getTask,
  getOneTask,
} = require("../controller/taskController");
const routes = express.Router();

routes.post("/tasks", CreateTask);
routes.get("/tasks", getTask);
routes.get("/tasks/:id", getOneTask);

module.exports = routes;
