const product = require('../dataBase/db')

module.exports = {
    index:(req,res)=>{
        res.render('product',{
            title : "Productos-KDDS"
        })
    },
    cart:(req,res)=>{
        res.render('cart',{
            title : "tu Carrito - KDDS"
        })
    }
}
