/* db */


module.exports = {
    productDetail:(req,res)=>{
        res.render('product',{
            title : "Productos-KDDS"
        })
    },
    products:(req,res)=>{
        res.render('searchResults',{
            title : ""
        })
    }
}
