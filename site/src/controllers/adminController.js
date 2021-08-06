/* db */


module.exports = {
    agregarProducto:(req,res)=>{
        res.render('newproduct',{
            title : "KDDS"
        })
    },
    modificarProducto:(req,res)=>{
        res.render('changeproduct',{
            title : "KDDS"
        })
    }
}
