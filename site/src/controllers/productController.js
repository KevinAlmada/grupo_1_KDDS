let db = require('../database/productDb')


module.exports = {
    productDetail:(req,res)=>{
        res.render('product',{
            title : "Productos-KDDS"
        })
    },
    products:(req,res)=>{
        res.render('searchResults',{
            title : "Productos",
            db
        })
    }
}
