"use strict";
const taskRouter = require("express").Router();

// 仮実装
taskRouter.get("/", (req, res) => {
  res.send("Taskテーブルからデータが取れる予定");
});

module.exports = { taskRouter };
