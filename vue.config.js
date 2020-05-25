const CopyWebpackPlugin = require('copy-webpack-plugin')// npm install --save-dev copy-webpack-plugin


module.exports = {
  devServer: {
    https: true
  },
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  configureWebpack: config => {
    config.plugins.push(
      new CopyWebpackPlugin([
        {
          from: './static/layui-src/src', // 新增可以被index.html访问的静态文件目录,支持多个
          to: this.outputDir,
          ignore: ['.*']
        }
      ])
    )

  },
  chainWebpack: config => {
    // config.module.rule('vue')
    //   .test(/\.vue$/)
    //   .use('tran-loader')
    //   .loader('tran-loader')
    config.plugin('define').tap(args => {
      args[1] = { jSW: 'window.jSW' } 
      return args
    })
  },
  lintOnSave: false,
  publicPath: '',
  outputDir: undefined,
  assetsDir: undefined,
  runtimeCompiler: undefined,
  productionSourceMap: undefined,
  parallel: undefined
}
