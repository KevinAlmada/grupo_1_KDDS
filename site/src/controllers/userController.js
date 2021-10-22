
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
                            rol:user.rol
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
                .then(() => {
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
                
                if (req.session.user.rol == 1) {
                    res.redirect("/admin/index")
                } else {
                    res.redirect("/users/profile")
                }
                })
            .catch(err => console.log(err))
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
    deleteProfile:(req,res) => {
        db.Users.destroy({where:{id:req.params.id}})
            .then(() => {
                if (req.session.user && req.session.user.rol == 0) {
                    req.session.destroy()
                    if (req.cookies.cookieKDDS) {
                        res.cookie('cookieKDDS','',{maxAge : -1})
                    }
                    res.redirect('/')
                }
                if (req.session.user && req.session.user.rol == 1) {
                    res.redirect('/admin/index')
                }
            })
    }
}
