const path = require('path');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/',
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