"use strict";
const express = require("express");
const bodyParser = require("body-parser");
const { rootRouter } = require("../controller/root");
const { taskRouter } = require("../controller/task");

// アプリの実体を定義する
const setupExpress = () => {
  const app = express();
  // リクエストボディの取得
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  // コントローラ定義
  app.use("/", rootRouter);
  app.use("/task", taskRouter);
  return app;
};

module.exports = { setupExpress };
