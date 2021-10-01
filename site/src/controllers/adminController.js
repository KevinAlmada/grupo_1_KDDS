const fs = require('fs');
const path = require('path');
const db = require('../database/models')
const {validationResult}=require('express-validator')
const bcrypt = require('bcryptjs')

module.exports = {
    adminLogin:(req,res)=>{
        res.render('adminLogin',{
            title : "Login Admin"
        })
    },
    adminLoginProcess:(req,res)=>{
        let errors = validationResult(req)
        if (errors.isEmpty()) {
            db.Users.findOne({where:{email:req.body.email}})
                .then(user => {
                    if(bcrypt.compareSync(req.body.password, user.password)){
                        req.session.user = {
                            id: user.id,
                            first_name: user.first_name,
                            last_name: user.last_name,
                            email: user.email,
                            rol:user.rol
                        }
                        if (req.body.remember) {
                            res.cookie('cookieKDDS',req.session.user,{maxAge : 1000*60*5})
                        }
                        res.redirect("/admin/index")
                    }
                }).catch(err => console.log(err))
        }else{
            
            res.render('adminLogin',{
                title : "Login Admin",
                errors:errors.mapped()
            })
        }
    },
    adminIndex:(req,res)=>{
        db.Products.findAll({
            include:[{association:"category"}]
        })
            .then(productdb => {
                res.render('adminIndex',{
                    title:"Admin Index",
                    productdb 
                })
            })
       
    }, 


    agregarProducto:(req,res)=>{
        res.render('newproduct',{
            title : "KDDS"
        })
    },
    guardarProducto:(req,res)=>{
        const {nombre,descripcion,precio,discount,categorias} = req.body
        let imagenesProd = []
        if (req.files.length > 0) {
            req.files.forEach(imagen =>{
                imagenesProd.push(imagen.filename)
            })
        }else{
            imagenesProd.push("default-image.png")
        }
        db.Products.create({
            name:nombre,
            description:descripcion,
            images:`['default-image.png']`,
            discount:discount,
            price:precio,
            categoryId:categorias
        })
            .then((producto)=> {
                let images = imagenesProd.map(imagen => {
                    return {
                        imgName:imagen,
                        productId:producto.id
                    }
                })
                db.ProductImages.bulkCreate(images)
                res.redirect("/admin/index")
            })
            .catch(err => console.log(err))
            },
    modificarProducto:(req,res)=>{
        db.Products.findByPk(+req.params.id)
            .then(productoAModificar => {
                res.render('changeproduct',{
                    title : "KDDS",
                    productoAModificar
                })
            })
            .catch(err => console.log(err))

         /* let productoAModificar = productdb.find(producto=>{
           return producto.id === +req.params.id;

        })
        res.render('changeproduct',{
            title : "KDDS",
            productoAModificar
        })
         */
    },

    editarProducto:(req,res)=>{
        let { nombre,precio,descripcion,discount,categorias } = req.body;
        let imgProd = []
        if (req.files) {
            req.files.forEach(img =>{imgProd.push(img.filename)})
        }

        db.Products.update({
            name:nombre,
            description:descripcion,
            discount:discount,
            price:precio,
            categoryId:categorias
        },{
            where:{id:+req.params.id},
            include:[{association:"category"},{association:"productImages"}]
        })
            .then((producto)=> {
                if(req.files){
                    if (imgProd.length = 1) {
                        db.ProductImages.update({imgName:imgProd[0]},{where:{productId:+req.params.id}})
                    }else if (imgProd.length > 2){
                        db.ProductImages.destroy({where:{productId:+req.params.id}})
                            .then(()=>{
                                 let images = imgProd.map(imagen => {
                                    return {
                                        imgName:imagen,
                                        productId:+req.params.id
                                        }})
                        db.ProductImages.bulkCreate(images)
                            })
                    }
            
                    
                    
                    
                }


                res.redirect("/admin/index")
            })
            .catch(err => console.log(err))
        
    },
    
    eliminarProducto:(req,res)=>{
        db.Products.destroy({where:{id:+req.params.id}})
            .then(()=> res.redirect("/admin/index"))
            .catch(err => console.log(err))
    }

}
