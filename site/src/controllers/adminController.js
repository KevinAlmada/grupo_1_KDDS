const fs = require('fs');
const path = require('path');
const db = require('../database/models')
const {validationResult}=require('express-validator')
const bcrypt = require('bcryptjs')
let {userdb} = require('../data/productDb');
const WriteProductJSON = (data) =>{
    fs.writeFileSync(path.join(__dirname,'../data/product.json'),JSON.stringify(data),'utf-8')
}
const WriteUserJSON = (data) =>{
    fs.writeFileSync(path.join(__dirname,'../data/user.json'),JSON.stringify(data),'utf-8')
}

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
                })
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
        db.Products.create({
            name:nombre,
            description:descripcion,
            images:`['default-image.png']`,
            discount:discount,
            price:precio,
            categoryId:categorias
        })
            .then(()=> res.redirect("/admin/index"))
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
            images:`['default-image.png']`,
            discount:discount,
            price:precio,
            categoryId:categorias
        },{
            where:{id:+req.params.id}
        })
            .then(()=> res.redirect("/admin/index"))
            .catch(err => console.log(err))
        
    },
    
    eliminarProducto:(req,res)=>{
        db.Products.destroy({where:{id:+req.params.id}})
            .then(()=> res.redirect("/admin/index"))
            .catch(err => console.log(err))
    }

}
