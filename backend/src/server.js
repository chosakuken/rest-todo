"use strict";
// .env ファイルの読み込み
require("dotenv").config();
// セットアップ用関数
const { setupExpress } = require("./config/express.js");

// 起動用コマンド
const main = async () => {
  const app = setupExpress();
  app.listen(process.env.PORT, () => {
    console.log("App listening on PORT:" + process.env.PORT);
  });
};
// サーバーの起動
main().catch(console.error);
