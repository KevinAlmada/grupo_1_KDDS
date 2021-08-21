var express = require('express');
var router = express.Router();
var controller = require('../controllers/homeController')
/* GET home page. */

router.get('/', controller.index);

router.get('/about', controller.aboutUs);

module.exports = router;

