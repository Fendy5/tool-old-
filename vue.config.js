module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  productionSourceMap: false,
  pluginOptions: {
    quasar: {
      importStrategy: 'manual',
      rtlSupport: true
    }
  },

  transpileDependencies: [
    'quasar'
  ],
  devServer: {
    port: 8089
  }
}
