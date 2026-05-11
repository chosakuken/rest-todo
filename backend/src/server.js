"use strict";
// モジュールのインポート
const express = require("express");
const { hoge } = require("./other/somefunc");
const app = express();

app.get("/", (req, res) => {
  console.log(hoge());
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("listening...");
});
