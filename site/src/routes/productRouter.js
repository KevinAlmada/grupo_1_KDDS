var express = require('express');
var router = express.Router();
var path = require('path')
var controller = require('../controllers/productController')
/* GET home page. */

// router.get('/product', controller.product);
router.get('/cart', controller.cart);

module.exports = router;