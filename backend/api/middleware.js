var path = require('path');
var multer = require('multer');
var config = require('../default.config');
var crypto = require('crypto');

// set extend to a upload file
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, config.upload.path)
  },
  filename: function (req, file, cb) {
    var extend = path.extname(file.originalname)

    crypto.pseudoRandomBytes(16, function (err, raw) {
      cb(err, err ? undefined : raw.toString('hex') + extend)
    })
  }
})

exports.upload = multer({ storage }).single('file')