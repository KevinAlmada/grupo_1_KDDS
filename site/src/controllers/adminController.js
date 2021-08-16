const fs = require('fs');
const path = require('path');
let {productdb,userdb} = require('../database/productDb')
const WriteProducJSON = (data) =>{
    fs.writeFileSync(path.join(__dirname,'../database/product.json'),JSON.stringify(data),'utf-8')
}
const WriteUserJSON = (data) =>{
    fs.writeFileSync(path.join(__dirname,'../database/user.json'),JSON.stringify(data),'utf-8')
}

module.exports = {
    agregarProducto:(req,res)=>{
        res.render('newproduct',{
            title : "KDDS"
        })
    },
    guardarProducto:(req,res)=>{
        let lastId = 1;

		productdb.forEach(product => {
			if(product.id > lastId){
				lastId = product.id
			}
		});


        let {nombre,
        descripcion,
        precio,
        categorias} = req.body
        
        let newproduct = {
            id : lastId + 1 ,
            name:nombre,
            category:categorias,
            description:descripcion,
            img:["default-image.png"],
            price:precio
        }

        productdb.push(newproduct)

        WriteProducJSON(productdb)

        res.redirect(`/products/${newproduct.category}`)
    },
    modificarProducto:(req,res)=>{
        res.render('changeproduct',{
            title : "KDDS"
        })
    }
}
