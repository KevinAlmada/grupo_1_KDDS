let db = require('../database/productDb')


module.exports = {
    productDetail:(req,res)=>{
        let idProd = req.params.id
        let product = db.find(producto => producto.id === idProd)
        let productsSim = db.filter(producto => producto.category === product.category)
        productsSim.splice(0,2)
        if (product) {
            res.render('product',{
                db:product,
                title:product.name,
                productsSim
            })
        }else{
            res.render('error',{
                title:`${idProd}no existe`
            })
        }
    },
    products:(req,res)=>{
        res.render('searchResults',{
            title : "Productos",
            db
        })
    },
    category:(req,res)=>{
        let categoria = req.params.category
        let filtrado = db.filter(producto=>producto.category == categoria)
        if (filtrado) {
            res.render('searchResults',
            {db : filtrado,
            title :`Anteojos de ${categoria}`})
        }else{
            res.render('error',{
                title:`${categoria}no existe`
            })
        }
    },ofertas:(req,res)=>{
        let productsOfert = db.filter(producto => producto.discount >= 10)
        if(productsOfert){
            res.render('searchResults',
            {db : productsOfert,
            title :"ofertas"})
        }else{
            res.render('error')
        }
    }
}
