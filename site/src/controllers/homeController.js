/* db */
const db = require('../database/productDb');

module.exports = {
    index:(req,res)=>{

        res.render('home',{
            title : "KDDS",
            db,
        })
    }
}

