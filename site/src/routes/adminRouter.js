var express = require('express');
var router = express.Router();
var controller = require('../controllers/adminController')
/* GET home page. */

router.get('/addProduct', controller.agregarProducto);
router.get('/changeProduct', controller.modificarProducto);



module.exports = router;
