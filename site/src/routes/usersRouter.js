var express = require('express');
var router = express.Router();
var controller = require('../controllers/userController')
var registerValidation = require('../middlewares/registerValidation')
var loginValidation = require('../middlewares/loginValidation')
var userSessionCheck = require('../middlewares/userSessionCheck');

/* GET home page. */
router.get('/profile', userSessionCheck, controller.profile);

router.get('/login', controller.login);
router.post('/login',loginValidation, controller.processLogin);

router.get('/register', controller.register);
router.post('/register',registerValidation, controller.processRegister);
router.get('/logout', controller.logout)

router.get('/cart',controller.cart);

module.exports = router;