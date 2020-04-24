// webpack.config.js 是运行在 Node.js 环境中的代码，所以直接可以使用 path 之类的 Node.js 内置模块。
const path = require("path");

// 一定记得运行 Webpack 前先注释掉这里。
// import { Configuration } from "webpack";

/**
 * @type {Configuration}
 */
const config = {
  entry: {
    css: "./src/style.css",
    md: "./src/index.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.join(__dirname, "dist"),
  },
  mode: "none", // https://webpack.js.org/configuration/mode/ development | production | none
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["css-loader"],
        /**
         * css-loader 的作用是将 CSS 模块转换为一个 JS 模块，具体的实现方法是将我们的 CSS 代码 push 到一个数组中，这个数组是由 css-loader 内部的一个模块提供的，但是整个过程并没有任何地方使用到了这个数组。
         * 样式没有生效的原因是： css-loader 只会把 CSS 模块加载到 JS 代码中，而并不会使用这个模块。
         * 所以这里我们还需要在 css-loader 的基础上再使用一个 style-loader，把 css-loader 转换后的结果通过 style 标签追加到页面上。
         * 安装完 style-loader 之后，我们将配置文件中的 use 属性修改为一个数组，将 style-loader 也放进去。这里需要注意的是，一旦配置多个 Loader，执行顺序是从后往前执行的，所以这里一定要将 css-loader 放在最后，因为必须要 css-loader 先把 CSS 代码转换为 JS 模块，才可以正常打包
         */
        // use: ["style-loader", "css-loader"],
      },
      {
        test: /\.md$/,
        // 直接使用相对路径
        use: "./markdown-loader",
        // use: ["html-loader", "./markdown-loader"],
      },
    ],
  },
};

module.exports = config;
