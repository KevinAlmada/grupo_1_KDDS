const { check, body } = require('express-validator');
const {userdb} =require('../database/productDb')
module.exports = [
    check('email')
    .isEmail()
    .withMessage('Debes ingresar un email válido'),

    check('password')
    .notEmpty()
    .withMessage('Debes escribir tu contraseña'),
    body('email').custom(value => {
        let user = userdb.find(usuario => usuario.email == value)
        if (user && user.rol == "ADMIN") {
            return true
        }else{
            return false
        }
    }).withMessage("aca esta el error")
]