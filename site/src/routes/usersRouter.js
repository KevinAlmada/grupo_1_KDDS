var express = require('express');
var router = express.Router();
var controller = require('../controllers/userController')
var registerValidation = require('../middlewares/registerValidation')

/* GET home page. */
router.get('/login', controller.login);

router.get('/register', controller.register);
router.post('/register',registerValidation, controller.processRegister);


router.get('/cart',controller.cart);

module.exports = router;

