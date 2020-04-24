// ./markdown-loader.js
// step 1 demo
/**
module.exports = (source) => {
  // 加载到的模块内容 => '# About\n\nthis is a markdown file.'
  console.log(source);
  // 返回值就是最终被打包的内容
  return "hello loader ~";
};
 */
/**
 * You may need an additional loader to handle the result of these loaders.
 * 还需要一个额外的加载器来处理当前加载器的结果
 * Webpack 加载资源文件的过程类似于一个工作管道，在这个过程中依次使用多个 Loader，但是最终这个管道结束过后的结果必须是一段标准的 JS 代码字符串
 */

// step 2 demo
/*
module.exports = (source) => {
  // 加载到的模块内容 => '# About\n\nthis is a markdown file.'
  console.log(source);
  // 返回值就是最终被打包的内容
  return 'console.log("hello loader ~")'; // 直接在这个 Loader 的最后返回一段 JS 代码字符串
};
*/
/**
 * 查看打包后的代码，返回值最终被打包进模块中
 */

// step 3 demo
const marked = require("marked");
module.exports = (source) => {
  // 1. 将 markdown 转换为 html 字符串
  const html = marked(source);
  // html => '<h1>About</h1><p>this is a markdown file.</p>'
  // 2. 将 html 字符串拼接为一段导出字符串的 JS 代码
  const code = `module.exports = ${JSON.stringify(html)}`;
  return code;
  // code => 'export default "<h1>About</h1><p>this is a markdown file.</p>"'
};

// step 4 demo
// Webpack 还允许在返回的代码中使用 ES Modules 的方式导出
// const code = `export default ${JSON.stringify(html)}`;

// step 5 demo
// webpack.config.js 配置 html-loader
// const marked = require("marked");
// module.exports = (source) => {
//   const html = marked(source);
//   return html;
// };
