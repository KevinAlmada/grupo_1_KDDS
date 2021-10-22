const { check } = require('express-validator');

module.exports = [
    check('email')
    .isEmail()
    .withMessage('Debes ingresar tu email'),
    
    check('password')
    .notEmpty()
    .withMessage('Debes escribir tu contraseña')
]
