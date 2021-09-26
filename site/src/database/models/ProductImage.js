module.exports = (sequelize,dataTypes) => {
    let alias = "ProductImages"
    let cols = {
        id: {
            type: dataTypes.INTEGER(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false 
        },
        imgName:{
            type:dataTypes.STRING(100),
            allowNull:false
        },
        productId:{
            type:dataTypes.INTEGER(11),
            allowNull:false
        }
    }
    let config={
        tablename:"productimages",
        timestamps:false
    }

    const ProductImages = sequelize.define(alias,cols,config)

        ProductImages.associate= models => {
            ProductImages.belongsTo(models.Products,{
                as:"products",
                foreignKey:"productId"
            })

        }

    return ProductImages
}