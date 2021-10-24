var express = require('express');
var router = express.Router();
var controller = require('../controllers/userController')
var registerValidation = require('../middlewares/registerValidation')
var loginValidation = require('../middlewares/loginValidation')
var userSessionCheck = require('../middlewares/userSessionCheck');
var deleteProfileValidation = require('../middlewares/deleteUser')

/* GET home page. */
router.get('/profile', userSessionCheck, controller.profile);

router.get('/login',loginValidation, controller.login);
router.post('/login', controller.processLogin);

router.get('/register', controller.register);
router.post('/register',registerValidation, controller.processRegister);
router.get('/logout', controller.logout)

router.get('/cart',controller.cart);

router.get('/useredit/:id', userSessionCheck,controller.editProfile);
router.put('/useredit/:id',controller.updateProfile);

router.get('/deleteUser', userSessionCheck, controller.deleteProfile);
router.delete('/userdelete',deleteProfileValidation,controller.processDeleteProfile);

module.exports = router;