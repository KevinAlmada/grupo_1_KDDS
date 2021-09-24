module.exports = (sequelize,dataTypes) => {
    let alias = "Products"
    let cols = {
        id: {
            type: dataTypes.INTEGER(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false 
        },
        name:{
            type:dataTypes.STRING(60),
            allowNull:false
        },
        description:{
            type:dataTypes.TEXT,
            allowNull:false
        },
        discount:{
            type:dataTypes.INTEGER(11),
            allowNull:false
        },
        price:{
            type:dataTypes.INTEGER(11),
            allowNull:false
        },
        categoryId:{
            type:dataTypes.INTEGER(11),
            allowNull:false
        },
        createdAt:{
            type:dataTypes.DATE,
            allowNull:false
        },
        updatedAt:{
            type:dataTypes.DATE
        }
    }
    let config={
        tablename:"products",
    }

    const Product = sequelize.define(alias,cols,config)

        Product.associate= models => {
            Product.belongsTo(models.Categories,{
                as:"category",
                foreignKey:"categoryId"
            })
            Product.hasMany(models.ProductImages,{
                as:"productImages",
                foreignKey:"productId"
            })
        }

    return Product
}