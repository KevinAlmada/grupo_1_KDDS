const fs = require('fs');
const path = require('path');
const db = require('../database/models')
const {validationResult}=require('express-validator')
const bcrypt = require('bcryptjs')
const { Op } = require("sequelize");
const { productImages } = require('./api/apiProducts');

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
        let productPromise = db.Products.findAll({
            include:[{association:"category"},{association:"productImages"}]
        })
            .then(productdb => {
                res.render('adminIndex',{
                    title:"Admin Index",
                    productdb,
                    productImages
                })
            })
       
    },
    adminIndexSearch:(req,res)=>{
        
        let busqueda = req.query.buscador.trim().toLowerCase();

        db.Products.findAll({
            include:[{association:"category"},{association:"productImages"}],
            where: {
                [Op.or]: [
                    {name: {[Op.like]:`%${busqueda}%`}},
                    {description: {[Op.like]:`%${busqueda}%`}},
                    {price: {[Op.like]:`%${busqueda}%`}},
                ]
                }
        })
        .then(productdb => {
            res.render('adminIndex',{
                title:"Resultados de tu busqueda",
                productdb,
                admin:req.session.user
            })
            })
    },
    adminUser:(req,res)=>{
        db.Users.findAll()
            .then((usersdb) => {
                res.render('adminUser',{
                    title:"Usuarios",
                    usersdb,
                    admin:req.session.user
                })
            })
       
    },
    adminUserSearch:(req,res)=>{
        let busqueda = req.query.buscador.trim().toLowerCase();

        db.Users.findAll({
            where: {
                [Op.or]: [
                    {first_name: {[Op.like]:`%${busqueda}%`}},
                    {last_name: {[Op.like]:`%${busqueda}%`}},
                    {email: {[Op.like]:`%${busqueda}%`}},
                ]
              }
        })
            .then(usersdb => {
                res.render('adminUser',{
                    title:"Usuarios",
                    usersdb,
                    admin:req.session.user
                })
            })
    },
    agregarProducto:(req,res)=>{
        res.render('newproduct',{
            title : "KDDS"
        })
    },
    guardarProducto:(req,res)=>{
        const {nombre,descripcion,precio,discount,categorias,forma,material,lente} = req.body
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
            categoryId:categorias,
            shape:forma,
            material:material,
            lente:lente
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
        db.Products.findByPk(+req.params.id, {include: {association:"productImages"}, where:{id:req.params.id}})
            .then(productoAModificar => {
                let imagenes = productoAModificar.productImages;
                res.render('changeproduct',{
                    title : "KDDS",
                    productoAModificar,
                    imagenes,
                    admin:req.session.user
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
        let { nombre,precio,descripcion,discount,categorias,forma,material,lente} = req.body;
        let imgProd = []
        if (req.files) {
            req.files.forEach(img =>{imgProd.push(img.filename)})
        }

        db.Products.update({
            name:nombre,
            description:descripcion,
            discount:discount,
            price:precio,
            categoryId:categorias,
            shape:forma,
            material:material,
            lente:lente
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
        db.ProductImages.findAll({where:{productId:+req.params.id}})
            .then( imagenes => {
                let productDestroy = db.Products.destroy({where:{id:+req.params.id}})
                Promise.all([productDestroy])
                .then(() => {
                    imagenes.forEach(imagen => {
                        if(imagen.imagen != 'default-image.png'){
                            fs.unlinkSync('public/images/product/' + imagen.imgName)
                        }
                    })
                    res.redirect("/admin/index")   
                })
            })
        
    },
    eliminarUser:(req,res) => {
        db.Users.findByPk(req.params.id)
            .then(user => {
                if (user.image !== null) {
                    fs.unlinkSync('public/images/usersProfilePictures/' + user.image)
                }
                db.Users.destroy({where:{id:user.id}})
                .then(() => {
                    res.redirect("/admin/users")
                })
                .catch(err => console.log(err))
            })
    }

}


/* 
res.redirect(`/admin/products#${product.id}`))
 */