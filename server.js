'use strict';

//开发工具
process.env.NODE_ENV = 'development';

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var port = process.env.PORT || 3000;

//也会用webpack.config.js文件 只不过相当于用webpack-dev-server
new WebpackDevServer(webpack(config), {
  //假定publicPath是assets,则
  //浏览器可以直接访问打包后的bundle：localhost:8080/assets/bundle.js或者页面
  //要使用bundle.js必须在assets里面创建静态页面引用bundle。
  //直接node server.js启动默认端口是3000
  //然后浏览器可以直接访问这个静态页面
  publicPath: config.output.publicPath,
  //监听目录：文件改变了后会重新编译打包 相当于webpack的--watch命令
  //打包后的bundle是在内存中的
  //HMR 如果是react组件会自动将更新映射到浏览器
  //(works with any file that is required with Webpack) 
  //但是html静态页面(webpack没有require过的)更改不会自动将更新映射到浏览器
  //@see https://webpack.github.io/docs/webpack-dev-server.html
  hot: true,
  stats: {
    //控制台输出是否要打印chunk的信息
    chunkModules: false,
    //是webpack-dev-server --colors命令
    //控制台输出是否有颜色
    colors: true,
  }
}).listen(port, '0.0.0.0', function (err) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at 0.0.0.0:' + port);
});