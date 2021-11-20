const { check, body } = require('express-validator');
const db = require('../database/models')
module.exports = [
    check('email')
    .isEmail()
    .withMessage('Debes ingresar un email válido'),

    check('password')
    .notEmpty()
    .withMessage('Debes escribir tu contraseña'),
    body('email').custom(value => {
        let user = db.Users.findOne({where:{email:value}})
        .then(()=>{
            if (user && (user.rol == 1 || user.rol == 2)) {
                return true
            }else{
                return false
            }
        })
        .catch(err => console.log(err))

        return user
    }).withMessage("aca esta el error")
]