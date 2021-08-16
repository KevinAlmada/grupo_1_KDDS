const express = require('express');
const router = express.Router();
const controller = require('../controllers/adminController')
const multer = require('multer');
const  path  = require('path');

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null , path.join(__dirname,'../../public/images/product'))
    },
    filename:function(req,file,cb){
        cb(null,`${Date.now()}_img_${path.extname(file.originalname)}`)
    }
})

const uploadFile = multer({storage})
/* GET home page. */

/* Agregar producto */
router.get('/addProduct', controller.agregarProducto);
router.post('/addProduct',uploadFile.single('imagenProducto'), controller.guardarProducto);

/* Editar */
router.get('/changeProduct', controller.modificarProducto);



module.exports = router;
