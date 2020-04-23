const path = require("path");

const config = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "dist"),
  },
  mode: "none", // https://webpack.js.org/configuration/mode/ development | production | none
};

module.exports = config;
