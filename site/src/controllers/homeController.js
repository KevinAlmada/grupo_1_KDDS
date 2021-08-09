/* db */
const db = require('../database/productDb');

module.exports = {
    index:(req,res)=>{
        const cardUp = [];
        const cardDown = [];
        
        for(let i = 0; i < 4; i++){
            let aleatorio = Math.floor((Math.random() * (14-11))+11);; 
            cardUp.push(db[aleatorio]);
        }
        for(let i = 0; i < 4; i++){
            let aleatorio = Math.floor((Math.random() * (18-14))+14);; 
            cardDown.push(db[aleatorio]);
        }

        res.render('home',{
            title : "KDDS",
            db,
            cardUp,
            cardDown,
        })
    }
}

