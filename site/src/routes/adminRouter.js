var express = require('express');
var router = express.Router();
var controller = require('../controllers/adminController')
/* GET home page. */

/* Agregar producto */
router.get('/addProduct', controller.agregarProducto);
router.post('/addProduct', controller.guardarProducto);

/* Editar */
router.get('/changeProduct', controller.modificarProducto);



module.exports = router;
