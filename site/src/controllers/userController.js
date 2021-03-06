
const {validationResult}=require('express-validator')
const bcrypt = require('bcryptjs')
const fs = require('fs');
const path = require('path');
const db = require('../database/models');

module.exports = {
    login:(req,res)=>{
        res.render('login',{
            title : "Login - KDDS",
            usuario:req.session.user?req.session.user:""
        })
    },

    processLogin:(req,res)=>{
        let errors = validationResult(req)
        if(errors.isEmpty()){
            db.Users.findOne({where:{email:req.body.email}})
                .then(user => {
                    if(user && bcrypt.compareSync(req.body.password, user.password)){
                        req.session.user = {
                            id: user.id,
                            first_name: user.first_name,
                            last_name: user.last_name,
                            email: user.email,
                            rol:user.rol,
                            test:0
                        }
                        if (req.body.remember) {
                            res.cookie('cookieKDDS',req.session.user,{maxAge : 1000*60*5})
                        }
                        res.redirect("/")
                    }else{
                        res.render('login', {
                            title : "Login - KDDS",
                            errors: errors.mapped(),
                            errorMsg: "Credenciales inválidas",
                            usuario:req.session.user?req.session.user:""
                        })
                    }
                })        
        }else{
            res.render('login', {
                /* categories, */
                title : "Login - KDDS",
                errors: errors.mapped(),
                usuario:req.session.user?req.session.user:""
            })
        }        

    },



    register:(req,res)=>{
        res.render('register',{
            title : "Register - KDDS",
            usuario:req.session.user?req.session.user:""
        })
    },
    processRegister:(req,res)=>{
        let errors = validationResult(req)

        if (errors.isEmpty()) {
            
            let {nombre,apellido,email,pass1} = req.body

            db.Users.create({
                first_name : nombre,
                last_name : apellido,
                email:email,
                password:bcrypt.hashSync(pass1,10),
                rol:0
            })
                .then((user) => {
                    req.session.user = {
                        id: user.id,
                        first_name: user.first_name,
                        last_name: user.last_name,
                        email: user.email,
                        rol:user.rol,
                        test:0,
                        image:""
                    }
                    console.log(user);
                    res.redirect('/users/login') 
                })
        } else {
            res.render('register',{
                title : "Register - KDDS",
                errors : errors.mapped(),
                old:req.body,
                usuario:req.session.user?req.session.user:""
            }) 
        }
    },
    /* User profile */
    profile: (req, res) =>{
        db.Users.findByPk(+req.session.user.id)
            .then((userData)=>{
                res.render('userProfile', {
                    title : "tu perfil - KDDS",
                    usuario:req.session.user?req.session.user:"",
                    userData
                })
            })
    },
    editProfile:(req,res)=>{
        db.Users.findOne({where:{id:req.params.id}})
            .then((usuario) => {
                res.render('userProfileEdit',{
                    title : "Edita tu perfil - KDDS",
                    usuario:usuario,
                    useronline:req.session.user
                })  
            })      
    },
    updateProfile:(req,res)=> {
        const {first_name,last_name,direccion,codigo,provincia,localidad,rol} = req.body
        if (req.files[0]) {
            db.Users.findByPk(req.params.id)
            .then(user => {
                 if (user.image) {
                    fs.unlinkSync('public/images/usersProfilePictures/' + user.image)
                } 
                db.Users.update({
                    first_name:first_name,
                    last_name:last_name,
                    direction:direccion,
                    cp:codigo,
                    province:provincia,
                    location:localidad,
                    rol : rol,
                    image:req.files[0]? req.files[0].filename :""
                 },{where:{id:req.params.id}})
                     .then((user) => {
                         console.log("por aca");
                         if (req.session.user.rol == 2) {
                             res.redirect("/admin/users")
                         } else {
                             res.redirect("/users/profile")
                         }
                         })
                     .catch(err => console.log(err))
            })
        }else{
            db.Users.update({
                first_name:first_name,
                last_name:last_name,
                direction:direccion,
                cp:codigo,
                province:provincia,
                location:localidad,
                rol : rol
             },{where:{id:req.params.id}})
                 .then((user) => {
                     if (req.session.user.rol == 2) {
                         res.redirect("/admin/index")
                     } else {
                         res.redirect("/users/profile")
                     }
                     })
                 .catch(err => console.log(err))
        }
        
    },
    cart:(req,res)=>{
        res.render('cart',{
            title : "tu Carrito - KDDS",
            usuario:req.session.user?req.session.user:""
        })
    },
    logout:(req,res)=>{
        req.session.destroy()
        if (req.cookies.cookieKDDS) {
            res.cookie('cookieKDDS','',{maxAge : -1})
        }
        res.redirect('/')
    },
    deleteProfile:(req,res)=>{
        res.render('deleteUser',{
            title : "Eliminar usuario",
            usuario:req.session.user?req.session.user:"",
            update:false,
            errPass:""
        })
    },
    processDeleteProfile:(req,res) => {
        let errors = validationResult(req)
        if(errors.isEmpty() && req.body.email == req.session.user.email){
            db.Users.findOne({where:{email:req.body.email}})
                .then(user => {
                    if(user && bcrypt.compareSync(req.body.password, user.password)){
                        db.Users.destroy({where:{email:req.body.email}})
                            .then(() => {
                                if (req.session.user && req.session.user.rol == 0) {
                                    req.session.destroy()
                                    if (req.cookies.cookieKDDS) {
                                        res.cookie('cookieKDDS','',{maxAge : -1})
                                    }
                                    res.redirect('/')
                                }
                                if (req.session.user && req.session.user.rol == 1) {
                                    req.session.destroy()
                                    if (req.cookies.cookieKDDS) {
                                        res.cookie('cookieKDDS','',{maxAge : -1})
                                    }
                                    res.redirect('/admin/index')
                                }
                            }) 
                        res.redirect("/")
                    }else{
                        req.session.user.test = ++req.session.user.test 
                        if (req.session.user.test >= 3) {
                            res.redirect("/users/logout")
                        } else {
                            res.render('login', {
                                title : "Login - KDDS",
                                errors: errors.mapped(),
                                errorMsg: "Credenciales inválidas",
                                usuario:req.session.user?req.session.user:""
                            })
                        } 
                    }
                })        
        }else{
            res.render('deleteUser', {
                /* categories, */
                title : "Eliminar usuario",
                errors: errors.mapped(),
                usuario:req.session.user?req.session.user:""
            })
        }       
        
    },
    updatePassword:(req,res)=>{
        res.render('deleteUser',{
            title : "updatePassword",
            usuario:req.session.user?req.session.user:"",
            update:true,
            errPass:""
        })
    },
    processUpdatePassword:(req,res) => {
        let errors = validationResult(req)
        if(errors.isEmpty()){
              db.Users.findOne({where:{id:req.params.id}})
                .then(user => {
                   if(user && bcrypt.compareSync(req.body.password, user.password)){
                    let pass = bcrypt.hashSync(req.body.pass1,10)
                    db.Users.update({
                        password:pass
                     },{where:{id:req.params.id}})
                     .then(() => {
                         res.redirect("/users/profile")
                     })
                    }else{
                        req.session.user.test = ++req.session.user.test 
                        if (req.session.user.test >= 3) {
                            res.redirect("/users/logout")
                        } else {
                            res.render('deleteUser', {
                                title : "Editar pass",
                                errors: "Credenciales invalidas",
                                usuario:req.session.user?req.session.user:"",
                                update:true,
                                errPass:"Debes ingresar tu contraseña actual"
                            })
                        }
                    } 
                })      
        }else{
            res.render('deleteUser', {
                title : "Editar pass",
                errors: errors.mapped(),
                usuario:req.session.user?req.session.user:"",
                update:true,
                errPass:""
            }) 
        }  
    },
    cam : (req,res) => {
        res.render('takeAPicture', {
            title : "Editar pass",
            usuario:req.session.user?req.session.user:"",
        }) 
    }
}
