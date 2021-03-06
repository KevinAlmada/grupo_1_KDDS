const express = require('express');
const router = express.Router();
const controller = require('../controllers/adminController')
const uploadFile = require('../middlewares/uploadFiles')
const userAdminCheck = require('../middlewares/userAdminCheck');
const userSuperAdminCheck = require('../middlewares/userSuperAdminCheck');
const loginAdminValidator = require('../middlewares/loginAdminValidation');

/* GET home page. */
router.get('/', controller.adminLogin);
router.post('/',loginAdminValidator, controller.adminLoginProcess);


router.get('/index', userAdminCheck, controller.adminIndex);
router.get('/users', userAdminCheck, controller.adminUser);
/* BUSQUEDAS DE ADMIN */
router.get('/index/search', userAdminCheck, controller.adminIndexSearch);
router.get('/users/search', userAdminCheck, controller.adminUserSearch);
/* Agregar producto */
router.get('/addProduct', userAdminCheck, controller.agregarProducto);
router.post('/addProduct',uploadFile.array('imagenProducto'), controller.guardarProducto);

/* Editar */
router.get('/changeProduct/:id', userAdminCheck, controller.modificarProducto);
router.put('/changeProduct/:id',uploadFile.array('imagenProducto'), controller.editarProducto);
/* Delete */
router.delete('/deleteProduct/:id', userAdminCheck, controller.eliminarProducto);

router.delete('/deleteUser/:id', userSuperAdminCheck, controller.eliminarUser);




module.exports = router;
