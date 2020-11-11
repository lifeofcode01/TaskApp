const express = require("express");
const router = express.Router();
const UserTask = require("../models/user_task_model");
router.post("/createUserTask", async (req, res) => {
  const userTask = new UserTask({
    taskTitle: req.body.myTaskTitle,
    taskDescription: req.body.myTaskDescription,
  });
  try {
    const newUserTask = await userTask.save();
    // res.status(201).json(newUserTask);
    res.json(newUserTask);
  } catch (error) {
    res.json({ mssssg: error });
  }
});

//getting all userTasks
router.get("/getUserTask", async (req, res) => {
  try {
    let userTask = await UserTask.find();
    res.json(userTask);
  } catch (e) {
    res.json({ msg: e });
  }
});

module.exports = router;
