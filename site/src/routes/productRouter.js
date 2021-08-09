var express = require('express');
var router = express.Router();
var path = require('path')
var controller = require('../controllers/productController')
/* GET home page. */

router.get('/productDetail/:id', controller.productDetail);
router.get('/', controller.products);
router.get('/ofertas', controller.ofertas);
router.get('/:category', controller.category);


module.exports = router;