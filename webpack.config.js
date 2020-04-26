const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const config = {
  entry: {
    app: "./src/index.js",
    print: "./src/print.js",
  },
  output: {
    filename: "[name].bundle.[chunkhash].js",
    path: path.join(__dirname, "dist"),
  },
  mode: "none", // https://webpack.js.org/configuration/mode/ development | production | none
  plugins: [
    new HtmlWebpackPlugin({
      title: "管理输出",
    }),
    new CleanWebpackPlugin(),
  ],
};

module.exports = config;
