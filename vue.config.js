const { defineConfig } = require('@vue/cli-service')
const path = require('path');

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production'
    ? '/JavaScript-Dungeon/'
    : '/',
  // filenameHashing: false,
  transpileDependencies: true,
  chainWebpack: config => {
    const oneOfsMap = config.module.rule('scss').oneOfs.store
    oneOfsMap.forEach(item => {
      item
        .use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({
          // 單隻檔案引入
          resources: [path.resolve(__dirname, './src/assets/style/main.scss')],

          // 多檔案引入
          // resources: ['./path/to/vars.scss', './path/to/mixins.scss']
        })
        .end()
    })
  }
})
