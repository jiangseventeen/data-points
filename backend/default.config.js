var path = require('path');

module.exports = {
  // 运行端口
  port: 3000,

  // 文件上传
  upload: {
    // 存储路径，确保对具有该路径的访问权限
    // docker方式运行时需挂载该路径
    path: '/public/uploads/',
    // 用于文件访问的域名
    // publicOrigin: '',
    // 资源前缀
    publicPath: '/public/fs',
    // 上传文件大小限制，单位 M
    fileLimit: '5'
  }
}