"use strict";
const express = require("express");
const { rootRouter } = require("../controller/root");

// アプリの実体を定義する
const setupExpress = () => {
  const app = express();
  // コントローラ定義
  app.use("/", rootRouter);
  return app;
};

module.exports = { setupExpress };
