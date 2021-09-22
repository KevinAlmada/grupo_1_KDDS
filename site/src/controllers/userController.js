const {userdb}=require('../data/productDb')
const {validationResult}=require('express-validator')
const bcrypt = require('bcryptjs')
const fs = require('fs');
const path = require('path');
const db = require('../database/models');
const { rejects } = require('assert');
const WriteUserJSON = (data) =>{
    fs.writeFileSync(path.join(__dirname,'../data/users.json'),JSON.stringify(data),'utf-8')
}

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
                rol:"USER"
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
        db.Users.findOne({where:{email:req.session.user.email}})
            .then((usuario) => {
                res.render('userProfileEdit',{
                    title : "Edita tu perfil - KDDS",
                    usuario:usuario
                })  
            })      
    },
    updateProfile:(req,res)=> {
        const {first_name,last_name,direction,cp,province,location} = req.body
        db.Users.update({
           first_name:first_name,
           last_name:last_name,
           direction:direction,
           cp:cp,
           province:province,
           location:location
        },{where:{email:req.session.user.email}})
            .then((user) => {
                /* req.session.user = {
                    id: user.id,
                    first_name: user.first_name,
                    last_name: user.last_name,
                    email: user.email,
                    rol:user.rol
                } *///los cambios se ven reflejados al loguearse , como actualizar session
                res.redirect("/users/profile")})
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
    }
}
