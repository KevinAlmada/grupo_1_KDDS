var express = require('express');
var router = express.Router();
var path = require('path')
var controller = require('../controllers/userController')
/* GET home page. */

router.get('/login', controller.login);
router.get('/register', controller.register);

module.exports = router;

