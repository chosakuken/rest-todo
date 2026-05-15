"use strict";
const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const { rootRouter } = require("../routes/root.route");
const { taskRouter } = require("../controllers/task.controller");

// アプリの実体を定義する
const setupExpress = () => {
  const app = express();
  // POST 経由でメソッドを上書きできるように
  app.use(methodOverride("_method"));
  // リクエストボディの取得
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  // コントローラ定義
  app.use("/", rootRouter);
  app.use("/task", taskRouter);
  return app;
};

module.exports = { setupExpress };
