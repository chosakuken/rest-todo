# rest-todo/backend

## 概要

rest-todo アプリのバックエンド部

## ディレクトリ構成

```console
.
├── .env # 環境設定ファイル (非追跡)
├── .env.template # 環境設定のテンプレート
├── .gitignore　# gitに追跡させないファイルを明記
├── README.md #本ファイル
├── db # db用のディレクトリ(非追跡)
├── dist # ビルド後のソースが格納されるディレクトリ(非追跡)
├── eslint.config.mjs # eslint の設定ファイル
├── node_modules # パッケージの実体ディレクトリ(非追跡)
├── package-lock.json # パッケージのバージョンが明記されたファイル
├── package.json # パッケージの設定ファイル
└── src # ソースコードが格納されたディレクトリ
    ├── config # フレームワークの設定等を行うファイル
    ├── models # DBのスキーマ定義を行うディレクトリ
    └── server.js # サーバー本体のプログラム
```

## 起動方法

```bash
# 本ディレクトリに移動した後
$ cp .env.template .env # 環境設定ファイルのコピー
$ npm i # パッケージのインストール
$ npm run build # ビルド
$ npm run start # サーバー起動
# localhost:3000/ にアクセス
```
