var express = require('express');
var router = express.Router();
var controller = require('../controllers/userController')
var registerValidation = require('../middlewares/registerValidation')
var loginValidation = require('../middlewares/loginValidation')


/* GET home page. */
router.get('/profile', controller.profile);

router.get('/login', controller.login);
router.post('/login',loginValidation, controller.processLogin);

router.get('/register', controller.register);
router.post('/register',registerValidation, controller.processRegister);


router.get('/cart',controller.cart);

module.exports = router;

