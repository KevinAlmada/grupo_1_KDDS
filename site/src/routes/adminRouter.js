const express = require('express');
const router = express.Router();
const controller = require('../controllers/adminController')
const uploadFile = require('../middlewares/uploadFiles')
/* GET home page. */
router.get('/', controller.adminIndex);

/* Agregar producto */
router.get('/addProduct', controller.agregarProducto);
router.post('/addProduct',uploadFile.array('imagenProducto'), controller.guardarProducto);

/* Editar */
router.get('/changeProduct/:id', controller.modificarProducto);
router.put('/changeProduct/:id',uploadFile.array('imagenProducto'), controller.editarProducto);
/* Delete */
router.delete('/deleteProduct/:id', controller.eliminarProducto);




module.exports = router;
