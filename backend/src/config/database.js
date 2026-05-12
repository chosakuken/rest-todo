"use strict";
const { Sequelize } = require("sequelize");

// データベースの実体を定義する
const sequelize = new Sequelize({
  dialect: "sqlite", // 使うミドルウェア
  storage: process.env.DATABASE_PATH, // データベースの実体の部分
});

// データベースをセッティングする関数
async function setupDatabase() {
  try {
    await sequelize.authenticate();
  } catch (e) {
    console.error(e);
  }
  await sequelize.sync();
}

module.exports = { sequelize, setupDatabase };
