每次要编译代码时，手动运行 npm run build 就会变得很麻烦。

webpack 中有几个不同的选项，可以帮助你在代码发生变化后自动编译代码：

- webpack's Watch Mode
- webpack-dev-server
- webpack-dev-middleware

# 使用观察模式

指示 webpack "watch" 依赖图中的所有文件以进行更改。如果其中一个文件被更新，代码将被重新编译，所以你不必手动运行整个构建

./package.json

```
"scripts": {
    "watch": "webpack --watch",
},
```

现在,保存文件并检查终端窗口。应该可以看到 webpack 自动重新编译修改后的模块！

唯一的缺点是，为了看到修改后的实际效果，需要刷新浏览器。

# 使用 webpack-dev-server

```
npm install --save-dev webpack-dev-server
```

./webpack.config.js 修改配置文件，告诉开发服务器(dev server)，在哪里查找文件
从打包入口开始设计的文件一旦更新即可刷新打包后的资源看到效果
怎么理解开启的服务器访问的是 dist 下的资源？ 这个 dist 是虚拟的 dist，同时也是实际的 dist？

```
devServer: {
    contentBase: './dist1', // 如果不定义，启动的时候会进行选择操作 可以试试
},
```

./package.json

```
"scripts": {
    "start": "webpack-dev-server --open",
}
```

# 热重载

“热重载”不只是当你修改文件的时候简单重新加载页面。启用热重载后，当你修改 .vue 文件时，该组件的所有实例将在不刷新页面的情况下被替换。它甚至保持了应用程序和被替换组件的当前状态！当你调整模版或者修改样式时，这极大地提高了开发体验。

# 状态保留规则

- 当编辑一个组件的 < template > 时，这个组件实例将就地重新渲染，并保留当前所有的私有状态。能够做到这一点是因为模板被编译成了新的无副作用的渲染函数。
- 当编辑一个组件的 < script >时，这个组件实例将就地销毁并重新创建。(应用中其它组件的状态将会被保留) 是因为 < script > 可能包含带有副作用的生命周期钩子，所以将重新渲染替换为重新加载是必须的，这样做可以确保组件行为的一致性。这也意味着，如果你的组件带有全局副作用，则整个页面将会被重新加载。
- < style > 会通过 vue-style-loader 自行热重载，所以它不会影响应用的状态。
