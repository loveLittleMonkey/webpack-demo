const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

const config = {
  entry: {
    vue: "./src/index.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.join(__dirname, "dist"),
  },
  mode: "none",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["css-loader"],
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
  resolve: {
    alias: {},
  },
};

module.exports = config;
