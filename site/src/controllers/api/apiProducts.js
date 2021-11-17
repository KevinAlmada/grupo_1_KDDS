/* db */
const db = require('../../database/models')
const path = require('path')
const getUrl = (req) =>
  req.protocol + "://" + req.get("host") + req.originalUrl;

module.exports = {
    allProducts:(req,res)=>{
         db.Products.findAll({
            include:[{association:"category"},{association:"productImages"}],
        })
        .then((productos) =>
         res.status(200).json({
          meta: {
            endPoint: getUrl(req),
            total: productos.length,
          },
          data: productos,
        })
      )
      .catch((error) => res.status(400).send(error));
    },
    allCategories: (req, res)=> {
        db.Products.findAll({include:[{association:"category"},{association:"productImages"}],where:{categoryId:req.params.idCategory}})
        .then(db => {
                    res.status(200).json({
                        meta: {
                          endPoint: getUrl(req),
                          total: db.length,
                        },
                        data: db})
            })
        .catch((error) => res.status(400).send(error));
    },
    productImages: (req, res)=> {
        db.ProductImages.findAll({include:[{association:"products"}],where:{productId:+req.params.id}})
        .then(db => {
                    
                        if (db.length > 0) {
                          let imagen = `../../../public/images/product/${db[+req.params.imgposition].imgName}`
                          res.sendFile(path.join(__dirname,imagen))
                        }else{
                          res.status(404).json({
                            meta: {
                              errmsg:"not found"
                            }})
                        }
            })
        .catch((error) => res.status(400).send(error));
    }
}

