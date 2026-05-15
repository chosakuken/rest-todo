"use strict";

const { taskController } = require("../controllers/task.controller");

// ルーターの定義
const taskRouter = require("express").Router();

// 飛んだリクエストに対して、どのコントローラの関数を使うのかを記載
taskRouter.get("/", taskController.getTasks);
taskRouter.get("/:id", taskController.getTask);
taskRouter.post("/", taskController.postTask);
taskRouter.patch("/:id", taskController.patchTask);
taskRouter.delete("/:id", taskController.deleteTask);

module.exports = { taskRouter };
