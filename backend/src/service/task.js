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

async function findOneTask(id) {
  // このタイミングでもバリデーションが要ります
  // 1つのデータの探索
  const task = await Task.findByPk(id);
  if (!task) {
    return null;
  }
  return task;
}

async function findAllTask({ done }) {
  // フィルタが掛かっていない場合
  if (done === "true" || done === "false") {
    return await Task.findAll({
      where: {
        done: done === "true",
      },
    });
  }
  return await Task.findAll();
}

module.exports = { createTask, findOneTask, findAllTask };
