let express = require('express');
let router = express.Router();
let controller = require('../controllers/userController')
let registerValidation = require('../middlewares/registerValidation')
let loginValidation = require('../middlewares/loginValidation')
let userSessionCheck = require('../middlewares/userSessionCheck');
let deleteProfileValidation = require('../middlewares/deleteUser')
let updatePassValidation = require('../middlewares/updatePass')
let uploadProfilePicture = require('../middlewares/uploadProfilePictures')

/* GET home page. */
router.get('/profile', userSessionCheck, controller.profile);

router.get('/login',loginValidation, controller.login);
router.post('/login', controller.processLogin);

router.get('/register', controller.register);
router.post('/register',registerValidation, controller.processRegister);
router.get('/logout', controller.logout)

router.get('/cart',controller.cart);

router.get('/useredit/:id', userSessionCheck,controller.editProfile);
router.put('/useredit/:id',uploadProfilePicture.any(),controller.updateProfile);

router.get('/deleteUser', userSessionCheck, controller.deleteProfile);
router.delete('/userdelete',deleteProfileValidation,controller.processDeleteProfile);

router.get('/passUpdate/:id', userSessionCheck, controller.updatePassword);
router.put('/passUpdate/:id',updatePassValidation,controller.processUpdatePassword);

router.get('/cam', controller.cam)

module.exports = router;