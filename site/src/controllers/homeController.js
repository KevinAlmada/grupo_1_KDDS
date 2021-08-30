/* db */
let {productdb,userdb} = require('../database/productDb')
module.exports = {
    index:(req,res)=>{
        const cardUp = [];
        const cardDown = [];
        
        for(let i = 0; i < 4; i++){
            let aleatorio = Math.floor((Math.random() * (19-1))+1);; 
            cardUp.push(productdb[aleatorio]);
        }
        for(let i = 0; i < 4; i++){
            let aleatorio = Math.floor((Math.random() * (19-1))+1);; 
            cardDown.push(productdb[aleatorio]);
        }

        res.render('home',{
            title : "KDDS",
            db:productdb,
            cardUp,
            cardDown,
            usuario:req.session.user?req.session.user:""
        })
    },
    aboutUs: (req,res)=>{
        res.render('about',{
            title: "Sobre Nosotros",
            usuario:req.session.user?req.session.user:""
        })
    }
}

