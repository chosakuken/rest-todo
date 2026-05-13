"use strict";
const { Task } = require("../models/task");

async function createTask({ name, detail="", deadline }) {
  // データの作成
  return await Task.create({
    name: name,
    detail: detail,
    deadline: deadline,
    done: false,
  });
}

module.exports = { createTask };
