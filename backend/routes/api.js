var express = require('express');
var api = require('../controllers/api');
var middleware = require('../api/middleware');

var router = express.Router();

// upload a file
router.post('/upload', middleware.upload, api.upload)

module.exports = router;
