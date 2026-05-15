"use strict";
const { Task } = require("../models/task.model");

async function createTask({ name, detail = "", deadline, done }) {
  // このタイミングでもバリデーションが要ります
  // データの作成
  return await Task.create({
    name: name,
    detail: detail,
    deadline: deadline,
    done: done,
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

async function updateTask(id, { name, detail, deadline, done } = {}) {
  // 更新用データの作成 (他FWだとdtoで一発)
  const updateData = {};
  if (name !== undefined) {
    updateData.name = name;
  }
  if (detail !== undefined) {
    updateData.detail = detail;
  }
  if (deadline !== undefined) {
    updateData.deadline = deadline;
  }
  if (done !== undefined) {
    updateData.done = done;
  }
  // 更新
  return await Task.update(updateData, {
    where: {
      id: id,
    },
  });
}

async function deleteTask(id) {
  return await Task.destroy({
    where: {
      id: id,
    },
  });
}

module.exports = {
  createTask,
  findOneTask,
  findAllTask,
  updateTask,
  deleteTask,
};
