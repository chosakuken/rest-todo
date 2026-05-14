"use strict";

const {
  createTask,
  findOneTask,
  findAllTask,
  deleteTask,
  updateTask,
} = require("../service/task");

const taskRouter = require("express").Router();

// 仮実装
taskRouter.get("/", async (req, res) => {
  try {
    const resTasks = await findAllTask({
      done: req.query.done,
    });
    return res.status(200).json(resTasks);
  } catch (e) {
    return res.status(400).json(e);
  }
});

taskRouter.get("/:id", async (req, res) => {
  // 今回は try-catch で握りつぶしているが
  // 本来はこのタイミングでのバリデーションが必要
  try {
    const resTask = await findOneTask(req.params.id);
    if (!resTask) {
      return res.status(404).json({
        error: "指定された id に対応するリソースが存在しません",
      });
    }
    res.status(200).json(resTask);
  } catch (e) {
    return res.status(400).json(e);
  }
});

taskRouter.post("/", async (req, res) => {
  // 今回は try-catch で握りつぶしているが
  // 本来はこのタイミングでのバリデーションが必要
  try {
    const createdData = await createTask({
      name: req.body.name,
      detail: req.body.detail,
      deadline: req.body.deadline,
    });
    return res.status(200).json(createdData);
  } catch (e) {
    return res.status(400).json(e);
  }
});

taskRouter.patch("/:id", async (req, res) => {
  try {
    const updateData = await updateTask(req.params.id, req.body);
    return res.status(200).json(updateData);
  } catch (e) {
    return res.status(400).json(e);
  }
});

taskRouter.delete("/:id", async (req, res) => {
  try {
    const deletedRow = await deleteTask(req.params.id);
    res.status(200).json(deletedRow);
  } catch (e) {
    return res.status(400).json(e);
  }
});

module.exports = { taskRouter };
