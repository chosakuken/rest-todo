"use strict";
const rootRouter = require("express").Router();

rootRouter.get("/", (req, res) => {
  res.send("This is Application Root");
});

module.exports = { rootRouter };
