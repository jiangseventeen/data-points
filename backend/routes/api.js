var express = require('express');
var multer  = require('multer');
var config = require('../default.config');
var api = require('../controllers/api');

var router = express.Router();
var upload = multer({ dest: config.upload.path });

// upload a file
router.post('/upload', upload.single('file'), api.upload)

module.exports = router;
