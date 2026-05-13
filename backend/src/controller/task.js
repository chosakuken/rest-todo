"use strict";

const {
  createTask,
  findOneTask,
  findAllTask,
  deleteTask,
} = require("../service/task");

const taskRouter = require("express").Router();

// 仮実装
taskRouter.get("/", async (req, res) => {
  try {
    const resTasks = await findAllTask({
      done: req.query.done,
    });
    return res.status(200).send({
      tasks: resTasks,
    });
  } catch (e) {
    return res.status(400).send({
      errors: [
        {
          status: 400,
          type: "bad request",
          detail: e,
        },
      ],
    });
  }
});

taskRouter.get("/:id", async (req, res) => {
  // 今回は try-catch で握りつぶしているが
  // 本来はこのタイミングでのバリデーションが必要
  try {
    const resTask = await findOneTask(req.params.id);
    if (!resTask) {
      return res.status(404).send({
        errors: [
          {
            status: 404,
            type: "not found",
            detail: "指定された id に対応するリソースが見つかりません",
          },
        ],
      });
    }
    res.status(200).send(resTask.toJSON());
  } catch (e) {
    return res.status(400).send({
      errors: [
        {
          status: 400,
          type: "bad request",
          detail: e,
        },
      ],
    });
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
    return res.status(200).send(createdData.toJSON());
  } catch (e) {
    return res.status(400).send({
      errors: [
        {
          status: 400,
          type: "bad request",
          detail: e,
        },
      ],
    });
  }
});

taskRouter.delete("/:id", async (req, res) => {
  try {
    const deletedRow = await deleteTask(req.params.id);
    console.log("deleted");
    res.status(200).json(deletedRow);
  } catch (e) {
    return res.status(400).send({
      errors: [
        {
          status: 400,
          type: "bad request",
          detail: e,
        },
      ],
    });
  }
});

module.exports = { taskRouter };
