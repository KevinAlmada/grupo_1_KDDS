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
            title : "Login - KDDS"
        })
    },
    register:(req,res)=>{
        res.render('register',{
            title : "Register - KDDS"
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
                password:bcrypt.hashSync(pass1,10)
            }

            userdb.push(newUser)
            WriteUserJSON(userdb)

            res.redirect('/users/login')
        } else {
            res.render('register',{
                title : "Register - KDDS",
                errors : errors.mapped(),
                old:req.body
            }) 
        }
    },
    cart:(req,res)=>{
        res.render('cart',{
            title : "tu Carrito - KDDS"
        })
    }
}
