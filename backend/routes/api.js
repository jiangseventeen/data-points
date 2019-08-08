var express = require('express');
var multer  = require('multer');
var path = require('path');
var config = require('../default.config');

var router = express.Router();
var upload = multer({ dest: config.upload.path });

// upload a file
router.post('/upload', upload.single('file'), function (req, res, next) {
  var extend = path.extname(req.file.originalname)

  res.send({url: req.file.filename + extend})
})

module.exports = router;
