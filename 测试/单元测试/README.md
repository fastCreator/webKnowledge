参考文献:https://segmentfault.com/a/1190000006895064
1，全局安装karma
2，安装模块
karma-chai
karma-cli
karma-mocha
karma-phantomjs-launcher

3,代码覆盖率
coverage

4,es6模块
npm i --save-dev karma-webpack  添加到插件plugins
npm i --save-dev babel-loader babel-core babel-preset-es2015



3,在生成的conf文件里面添加插件依赖
  plugins: [
      'karma-mocha',
      'karma-chai',
      'karma-chrome-launcher',
      'karma-phantomjs-launcher',
      'karma-webpack'
    ],


4,karma start