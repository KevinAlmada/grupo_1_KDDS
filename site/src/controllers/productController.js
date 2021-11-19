const db = require('../database/models')
const { Op } = require("sequelize");

module.exports = {
    productDetail:(req,res)=>{
        db.Products.findByPk(req.params.id,{include:[{association:"category"},{association:"productImages"}]})
            .then(product => {
                db.Products.findAll({where:{categoryId:product.categoryId},include:[{association:"category"},{association:"productImages"}]})
                .then(productsSim => {
                    if (product) {
                        
                        res.render('product',{
                            db:product,
                            title:product.name,
                            productsSim,
                            usuario:req.session.user?req.session.user:""
                        })
                    }else{
                        res.render('error',{
                            title:`${req.params.id}no existe`,
                            usuario:req.session.user?req.session.user:""
                        })
                    }
                })
            })
            .catch(err => console.log(err))
    },
    products:(req,res)=>{
        // db.Products.findAll({include:[{association:"category"},{association:"productImages"}]})
        let {
            categoria ,
            forma,
            material,
            lente,
            oferta
        } = req.query;

        let queryObject = {};
        queryObject.where = {};
        queryObject.include = [{association:"category"},{association:"productImages"}];

        if(categoria != null){
            categoria = categoria == "sol" ? 1 : 2;
            queryObject.where.categoryId = categoria;
        }
        
        // queryObject.where.price = {[Op.gt]: 8750}
        if(forma != null){
            queryObject.where.shape = forma
        }
        
        if(material != null){
            queryObject.where.material = material
        }

        if(lente != null){
            queryObject.where.lente = lente
        }

        if(oferta != null){
            queryObject.where.discount = {[Op.gt]: 0}
        }

        db.Products.findAll(
            queryObject
        )
        .then(db => {
            res.render('searchResults',{
                title : "Productos", 
                db,
                usuario:req.session.user?req.session.user:""
            })
        })
    // },
    // category:(req,res)=>{
    //     db.Products.findAll({include:[{association:"category"},{association:"productImages"}],where:{categoryId:req.params.category}})
    //     .then(db => {
    //             if (db) {
    //                 res.render('searchResults',
    //                 {db,
    //                 title :`Anteojos de ${db[0].category.name}`,
    //                 usuario:req.session.user?req.session.user:""})
    //             }else{
    //                 res.render('error',{
    //                     title:`${req.params.category}no existe`,
    //                     usuario:req.session.user?req.session.user:""
    //                 })
    //             }
    //         })
        
    // },ofertas:(req,res)=>{
    //     db.Products.findAll({include:[{association:"category"},{association:"productImages"}],where:{discount:{[Op.gt]:10}}})
    //     .then(db => {
    //         if(db){
    //             res.render('searchResults',
    //             {db,
    //             title :"ofertas",
    //             usuario:req.session.user?req.session.user:""})
    //         }else{
    //             res.render('error',
    //             {usuario:req.session.user?req.session.user:""})
    //         }
    //     })
    },
    busqueda:(req,res)=>{
        let busqueda = req.query.buscador.trim().toLowerCase();
        let {
            categoria ,
            forma,
            material,
            lente,
            oferta
        } = req.query;
    
        let queryObject = {};
        queryObject.where = {};
        queryObject.include = [{association:"category"},{association:"productImages"}];

        queryObject.where.description = {[Op.like]: `%${busqueda}%`};

        if(categoria != null){
            categoria = categoria == "sol" ? 1 : 2;
            queryObject.where.categoryId = categoria;
        }
        
        // queryObject.where.price = {[Op.gt]: 8750}
        if(forma != null){
            queryObject.where.shape = forma
        }
        
        if(material != null){
            queryObject.where.material = material
        }

        if(lente != null){
            queryObject.where.lente = lente
        }

        if(oferta != null){
            queryObject.where.discount = {[Op.gt]: 0}
        }

        db.Products.findAll(
            queryObject
        )
        // db.Products.findAll({include:[{association:"category"},{association:"productImages"}],where:{description:{[Op.like]:`%${busqueda}%`}}})
        .then(db => {
            // if (db.length > 0) {
            //     res.render('searchResults',
            //     {db ,
            //     title : `resultado de busqueda de ${busqueda}`,
            //     usuario:req.session.user?req.session.user:""})
            // } else {
            //     res.render('error', {title : `No hay resultados para la busqueda de ${busqueda} `,
            //     usuario:req.session.user?req.session.user:""} )
            // } 
            res.render('searchResults',
                {db ,
                title : `resultado de busqueda de ${busqueda}`,
                usuario:req.session.user?req.session.user:""})
        }) 
    }
}
