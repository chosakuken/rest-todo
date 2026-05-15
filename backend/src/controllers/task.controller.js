"use strict";

const {
  createTask,
  findOneTask,
  findAllTask,
  deleteTask,
  updateTask,
} = require("../services/task.service");

const taskController = {
  // GET /task -> 条件(クエリパラメータ)に合うタスクを返す
  async getTasks(req, res) {
    try {
      const resTasks = await findAllTask({
        done: req.query.done,
      });
      return res.status(200).json(resTasks);
    } catch (e) {
      return res.status(400).json(e);
    }
  },
  // GET /task/:id -> id に対応するタスクを返す
  async getTask(req, res) {
    // 今回は try-catch で握りつぶしているが
    // 本来はこのタイミングでのバリデーションが必要
    try {
      const resTask = await findOneTask(req.params.id);
      if (!resTask) {
        return res.status(404).json({
          error: "指定された id に対応するリソースが存在しません",
        });
      }
      res.status(200).json(resTask);
    } catch (e) {
      return res.status(400).json(e);
    }
  },
  // POST /task -> タスクの新規作成
  async postTask(req, res) {
    // 今回は try-catch で握りつぶしているが
    // 本来はこのタイミングでのバリデーションが必要
    try {
      const createdData = await createTask({
        name: req.body.name,
        detail: req.body.detail,
        deadline: req.body.deadline,
        done: false, // タスク作成時に完了していることはない
      });
      return res.status(200).json(createdData);
    } catch (e) {
      return res.status(400).json(e);
    }
  },
  // PATCH /task/:id -> id に対応するタスクを更新
  async patchTask(req, res) {
    try {
      const updateData = await updateTask(req.params.id, req.body);
      return res.status(200).json(updateData);
    } catch (e) {
      return res.status(400).json(e);
    }
  },
  // DELETE /task/:id -> id に対応するタスクを削除
  async deleteTask(req, res) {
    try {
      const deletedRow = await deleteTask(req.params.id);
      res.status(200).json(deletedRow);
    } catch (e) {
      return res.status(400).json(e);
    }
  },
};

module.exports = { taskController };
