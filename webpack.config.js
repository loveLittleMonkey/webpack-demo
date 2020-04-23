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
    filename: "bundle.js",
    path: path.join(__dirname, "dist"),
  },
  mode: "none", // https://webpack.js.org/configuration/mode/ development | production | none
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
    // webpack 根据正则表达式，来确定应该查找哪些文件，并将其提供给指定的 loader。在这个示例中，所有以 .css 结尾的文件，都将被提供给 style-loader 和 css-loader。
  },
};

module.exports = config;
