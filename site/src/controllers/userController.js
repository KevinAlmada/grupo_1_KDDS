const {userdb}=require('../database/productDb')
const {validationResult}=require('express-validator')
const bcrypt = require('bcryptjs')
const fs = require('fs');
const path = require('path');
const WriteUserJSON = (data) =>{
    fs.writeFileSync(path.join(__dirname,'../database/users.json'),JSON.stringify(data),'utf-8')
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
            userdb.forEach(user => {
                if(user.email == req.body.email){
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
                    } 
                        res.redirect("/")
                }
            })

            if(req.session.user == undefined){
                res.render('login', {
                    title : "Login - KDDS",
                    /* categories, */
                    errorMsg: "Credenciales inválidas",
                    usuario:req.session.user?req.session.user:""
                })
            }
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
            let lastId = 1;

            userdb.forEach(product => {
                if(product.id > lastId){
                    lastId = product.id
                }
            });
            
            let {nombre,apellido,email,pass1} = req.body

            let newUser = {
                id : lastId + 1,
                first_name : nombre,
                last_name : apellido,
                email,
                password:bcrypt.hashSync(pass1,10),
                rol:"USER"
            }

            userdb.push(newUser)
            WriteUserJSON(userdb)

            res.redirect('/users/login')
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
        res.render('userProfile', {
            title : "tu perfil - KDDS",
            usuario:req.session.user?req.session.user:""
        })
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
