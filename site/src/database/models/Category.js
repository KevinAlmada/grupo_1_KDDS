module.exports = (sequelize,dataTypes) => {
    let alias = "Categories"
    let cols = {
        id: {
            type: dataTypes.INTEGER(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false 
        },
        name:{
            type:dataTypes.STRING(50),
            allowNull:false
        }
    }
    let config={
        tablename:"categories",
        timestamps:false
    }

    const Category = sequelize.define(alias,cols,config)

        Category.associate= models => {
            Category.hasMany(models.Products,{
                as:"products",
                foreignKey:"categoryId"
            })

        }

    return Category
}