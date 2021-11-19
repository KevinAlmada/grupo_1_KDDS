const { check ,body} = require('express-validator');

module.exports = [
    check('password')
    .notEmpty()
    .withMessage('Debes escribir tu contraseña'),
    check('pass1')
    .notEmpty()
    .withMessage('Debes escribir tu contraseña'),
    check('pass2')
    .notEmpty()
    .withMessage('Debes escribir tu contraseña'),
    check('pass1')
    .isLength({min:8}).withMessage("Este campo debe tener minimo 8 caracteres"),
    body('pass2').custom((value, {req})=> value == req.body.pass1?true:false).withMessage('Las contraseñas no coinciden')
]
