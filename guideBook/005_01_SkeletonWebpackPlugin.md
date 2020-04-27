# 踩坑指南

1. VueSkeletonWebpackPlugin must be placed after HtmlWebpackPlugin inplugins
+ 不支持 html-webpack-plugin 4.x导致的，短时间的解决方案看能不能先把 html-webpack-plugin 先降到 3.x 来使用

2. 低版本的node不支持import导入
3. VueSkeletonWebpackPlugin 需要配置的加载点有两个，1个是template的插入节点，1个是webpack.config.js中的entry要作为 VueSkeletonWebpackPlugin.webpackConfig.entry

