// webpack.config.js 是运行在 Node.js 环境中的代码，所以直接可以使用 path 之类的 Node.js 内置模块。
const path = require("path");

// 一定记得运行 Webpack 前先注释掉这里。
// import { Configuration } from "webpack";

/**
 * @type {Configuration}
 */
const config = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.join(__dirname, "dist"),
  },
  mode: "none", // https://webpack.js.org/configuration/mode/ development | production | none
};

module.exports = config;
