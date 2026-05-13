"use strict";
const { Task } = require("../models/task");

async function createTask({ name, detail = "", deadline }) {
  // このタイミングでもバリデーションが要ります
  // データの作成
  return await Task.create({
    name: name,
    detail: detail,
    deadline: deadline,
    done: false,
  });
}

module.exports = { createTask };
