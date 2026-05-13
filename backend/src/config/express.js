"use strict";
const express = require("express");
const { rootRouter } = require("../controller/root");
const { taskRouter } = require("../controller/task");

// アプリの実体を定義する
const setupExpress = () => {
  const app = express();
  // コントローラ定義
  app.use("/", rootRouter);
  app.use("/task", taskRouter);
  return app;
};

module.exports = { setupExpress };
