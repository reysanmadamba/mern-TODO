const dotenv = require("dotenv").config();
const express = require("express");
const connectDB = require("./config/connectDB");
const taskRoutes = require("./routes/taskRoutes");
const mongoose = require("mongoose");

const app = express();
// app.use(express.Router);
app.use(express.json());
app.use("/api", taskRoutes);

// //routes
// app.get("/", (req, res) => {
//   res.send("<h2> Homepage </h2>");
// });

// app.post("/api/task", async (req, res) => {
//   try {
//     const task = await Task.create(req.body);
//     res.status(200).json(task);
//   } catch (error) {
//     res.status(500).json({ msg: error.msg });
//   }
// });

// app.get("/api/tasks", async (req, res) => {
//   try {
//     const tasks = await Task.find();
//     res.status(200).json(tasks);
//   } catch (error) {
//     res.status(500).json({ msg: error.message });
//   }
// });

const PORT = process.env.PORT || 3000;
connectDB();
app.listen(8080, () => {
  console.log(`port running at ${PORT}`);
});
