const express = require('express');
const router = express.Router();
const controller = require('../controllers/api/apiProducts')

router.get('/products', controller.allProducts);
router.get('/category/:idCategory', controller.allCategories);
router.get('/products/img/:id/:imgposition', controller.productImages);



module.exports = router