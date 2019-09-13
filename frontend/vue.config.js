const path = require('path');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/',
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
      },
      '/public/fs': {
        target: 'http://localhost:3000'
      }
    }
  },
  productionSourceMap: false,
  configureWebpack: {
    resolve: {
      alias: {
        'src': path.resolve(__dirname, 'src/'),
      }
    },
    plugins: [
      new MonacoWebpackPlugin({
        languages: ['json']
      })
    ]
  }
}