var path = require('path');
var config = require('../default.config');

exports.upload = function (req, res, next) {
  var pathname = path.resolve(
    config.upload.publicUrl,
    req.file.filename
  );
  var url = new URL(pathname, config.upload.publicOrigin);

  res.send({ url });
}