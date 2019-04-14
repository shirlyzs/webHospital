module.exports = {
  // baseUrl  type:{string} default:'/'
  // 基本路径
  publicPath: '/',
  // baseUrl: process.env.NODE_ENV === 'production' ? '/' : '/',
  //   lintOnSave：{ type:Boolean default:true } 问你是否使用eslint
  lintOnSave: true,
  // productionSourceMap：{ type:Bollean,default:true } 生产源映射
  // 如果您不需要生产时的源映射，那么将此设置为false可以加速生产构建
  productionSourceMap: false,
  // 关闭eslint
  lintOnSave: false,
  // devServer:{type:Object} 3个属性host,port,https
  // 它支持webPack-dev-server的所有选项
  devServer: {
    port: 8081, // 端口号
    host: 'localhost',
    https: false, // https:{type:Boolean}
    open: true, //配置自动启动浏览器
    // proxy: 'http://localhost:8080'
    proxy: {
      '/api': {
        // target: 'https://www.easy-mock.com/mock/5cadf50329a8d421825174fd/example',
        target: 'http://192.168.1.143:8080',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      },
      '/mock': {
        target: 'https://www.easy-mock.com/mock/5cadf50329a8d421825174fd/example',
        changeOrigin: true,
        pathRewrite: {
          '^/mock': ''
        }
      }
    }
  }
}
