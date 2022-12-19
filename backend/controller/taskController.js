const express = require("express");
const Task = require("../model/taskModel");

const CreateTask = async (req, res) => {
  try {
    const task = await Task.create(get.body);
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const addAnotherFeature = () => {
  // test
};

const getTask = async (req, res) => {
  try {
    const task = await Task.find();
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const getOneTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);
    if (!task) {
      return res.status(404).json(`no id found ${id}`);
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = {
  CreateTask,
  getTask,
  getOneTask,
};
