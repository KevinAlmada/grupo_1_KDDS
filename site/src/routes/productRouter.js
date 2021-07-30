var express = require('express');
var router = express.Router();
var path = require('path')
var controller = require('../controllers/productController')
/* GET home page. */

router.get('/', controller.index);
router.get('/cart', controller.cart);

module.exports = router;