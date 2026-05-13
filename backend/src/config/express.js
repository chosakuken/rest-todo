"use strict";
const express = require("express");

// アプリの実体を定義する
const setupExpress = () => {
  const app = express();
  app.get("/", (req, res) => {
    res.send("Hello World");
  });
  return app;
};

module.exports = { setupExpress };
