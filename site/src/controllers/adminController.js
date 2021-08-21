const fs = require('fs');
const path = require('path');
let {productdb,userdb} = require('../database/productDb')
const WriteProductJSON = (data) =>{
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
        categorias,
        discount} = req.body
        
        let imagenesProd = []
        if (req.files.length > 0) {
            req.files.forEach(imagen =>{
                imagenesProd.push(imagen.filename)
            })
        }else{
            imagenesProd.push("default-image.png")
        }
        let newproduct = {
            id : lastId + 1 ,
            name:nombre,
            category:categorias,
            description:descripcion,
            img:imagenesProd,
            discount: +discount,
            price: +precio
        }
        
        productdb.push(newproduct)

        WriteProductJSON(productdb)

        res.redirect(`/products/${newproduct.category}`)
    },
    modificarProducto:(req,res)=>{
         let productoAModificar = productdb.find(producto=>{
           return producto.id === +req.params.id;

        })
        res.render('changeproduct',{
            title : "KDDS",
            productoAModificar
        })
        
    },

    editarProducto:(req,res)=>{
        let { nombre,precio,descripcion,descuento,categoria } = req.body;
        let imgProd = []
        if (req.files) {
            
            req.files.forEach(img =>{imgProd.push(img.filename)})
        }
        
        productdb.forEach(producto => {
            if(producto.id === +req.params.id){
                producto.name = nombre,
                producto.price = precio,
                producto.description = descripcion,
                producto.img = imgProd.length > 0? imgProd : producto.img,
                producto.discount = descuento,
                producto.category = categoria
            }
        })

        WriteProductJSON(productdb);

        res.redirect(`/products/productDetail/${req.params.id}`)
    },
    
    eliminarProducto:(req,res)=>{
        productdb.forEach( producto =>{
            if(producto.id === +req.params.id){
                
                productdb.splice(productdb.indexOf(producto),1)
            }
        }
        
        )
        WriteProductJSON(productdb);

        res.redirect('/')
    }

}
