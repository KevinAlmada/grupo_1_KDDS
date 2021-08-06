var express = require('express');
var router = express.Router();
var path = require('path')
var controller = require('../controllers/productController')
/* GET home page. */

router.get('/productDetail', controller.productDetail);
router.get('/', controller.products);


module.exports = router;