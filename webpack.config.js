const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const config = {
  entry: {
    print: "./src/print.js",
    vue: "./src/index.js",
  },
  output: {
    filename: "[name].bundle.[chunkhash].js",
    path: path.join(__dirname, "dist"),
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "管理输出",
      template: './template/index.html'
    }),
    new CleanWebpackPlugin(),
    new VueLoaderPlugin()],
  devServer: {
    contentBase: "./dist",
    host: "0.0.0.0",
  },
};

module.exports = config;
