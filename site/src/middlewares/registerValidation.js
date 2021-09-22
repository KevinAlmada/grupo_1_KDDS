const {check,body} = require('express-validator')
const {userdb} =require('../data/productDb')
module.exports =[
    check('nombre')
    .notEmpty().withMessage("Debes llenar el campo nombre"),
    check('apellido')
    .notEmpty().withMessage("Debes llenar el campo apellido"),
    check('email')
    .isEmail().withMessage("Debes llenar el campo email"),
    body('email').custom(value=>{
        let user = userdb.find(usuario => usuario.email == value)
        if (user) {
            return false
        }else{
            return true
        }
    }).withMessage('Ya hay un usuario registrado con este email'),
    check('pass1')
    .isLength({min:8}).withMessage("Este campo debe tener minimo 8 caracteres"),
    check('pass2')
    .notEmpty().withMessage("Debes llenar el campo confirmar contraseña"),
    body('pass2').custom((value, {req})=> value == req.body.pass1?true:false).withMessage('Las contraseñas no coinciden')
]