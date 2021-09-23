const express = require('express');
const router = express.Router();
const controller = require('../controllers/adminController')
const uploadFile = require('../middlewares/uploadFiles')
const userAdminCheck = require('../middlewares/userAdminCheck');
const loginAdminValidator = require('../middlewares/loginAdminValidation');

/* GET home page. */
router.get('/', controller.adminLogin);
router.post('/',loginAdminValidator, controller.adminLoginProcess);


router.get('/index', userAdminCheck, controller.adminIndex);
/* Agregar producto */
router.get('/addProduct', userAdminCheck, controller.agregarProducto);
router.post('/addProduct',uploadFile.array('imagenProducto'), controller.guardarProducto);

/* Editar */
router.get('/changeProduct/:id', userAdminCheck, controller.modificarProducto);
router.put('/changeProduct/:id',uploadFile.array('imagenProducto'), controller.editarProducto);
/* Delete */
router.delete('/deleteProduct/:id', controller.eliminarProducto);




module.exports = router;
