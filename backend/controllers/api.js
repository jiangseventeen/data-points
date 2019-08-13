
var path = require('path');

exports.upload = function (req, res, next) {
  var extend = path.extname(req.file.originalname)

  res.send({url: req.file.filename + extend})
}