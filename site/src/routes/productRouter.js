var express = require('express');
var router = express.Router();
var path = require('path')
var controller = require('../controllers/productController')
/* GET home page. */

router.get('/productDetail/:id', controller.productDetail);
router.get('/search', controller.busqueda);
router.get('/', controller.products);
// router.get('/ofertas', controller.ofertas);
// router.get('/filter', controller.filter);
// router.get('/:category', controller.category);


module.exports = router;