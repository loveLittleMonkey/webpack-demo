const path = require("path");

const config = {
  entry: {
    app: "./src/index.js",
    print: "./src/print.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.join(__dirname, "dist"),
  },
  mode: "none", // https://webpack.js.org/configuration/mode/ development | production | none
};

module.exports = config;
