/* db */
const db = require('../../database/models')

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
    }
}

