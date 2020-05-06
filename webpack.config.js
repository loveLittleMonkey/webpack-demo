const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ManifestPlugin = require('webpack-manifest-plugin');

const utils = require('./utils');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const SkeletonWebpackPlugin = require('vue-skeleton-webpack-plugin');
const RemoveCommentsPlugin = require('./remove-comments-plugin')

const config = {
  entry: {
    print: "./src/print.js",
    vue: "./src/index.js",
  },
  output: {
    filename: "[name].bundle.[chunkhash].js",
    path: path.join(__dirname, "dist"),
  },
  devtool: 'inline-source-map',
  externals: {
    Vue: 'Vue'
  },
  mode: "development",
    module: {
        rules: [
          {
            test: /\.vue$/,
            loader: "vue-loader",
          }
        ].concat(
          utils.styleLoaders({
            sourceMap: false,
            extract: true
          })
        )
    },
    plugins: [
        new RemoveCommentsPlugin(),
        new MiniCssExtractPlugin({
            filename: utils.assetsPath('css/[name].css')
        }),
        new HtmlWebpackPlugin({
            template: './template/index.html',
            inject: true,
            minify: {
              removeComments: true,
              collapseWhitespace: true,
              removeAttributeQuotes: true,
              minifyCSS: true // 压缩内联的 CSS
            },
            chunksSortMode: 'dependency'
        }),
        new SkeletonWebpackPlugin({
            webpackConfig: {
                entry: {
                  vue: './src/skeleton/entry-skeleton.js' // 这里的入口要符合 打包的入口名册，不能默认的 SkeletonWebpackPlugin 的 app
                }
            },
            quiet: true
        }),
        new CleanWebpackPlugin(),
        new VueLoaderPlugin(),
        new ManifestPlugin(),
    ],
    devServer: {
      contentBase: "./dist",
      host: "0.0.0.0",
    },
};

module.exports = config;
