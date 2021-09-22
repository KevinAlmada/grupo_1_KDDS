var express = require('express');
var router = express.Router();
var controller = require('../controllers/userController')
var registerValidation = require('../middlewares/registerValidation')
var loginValidation = require('../middlewares/loginValidation')
var userSessionCheck = require('../middlewares/userSessionCheck');

/* GET home page. */
router.get('/profile', userSessionCheck, controller.profile);

router.get('/login',loginValidation, controller.login);
router.post('/login', controller.processLogin);

router.get('/register', controller.register);
router.post('/register',registerValidation, controller.processRegister);
router.get('/logout', controller.logout)

router.get('/cart',controller.cart);

router.get('/useredit', userSessionCheck,controller.editProfile);
router.put('/useredit',controller.updateProfile);

module.exports = router;