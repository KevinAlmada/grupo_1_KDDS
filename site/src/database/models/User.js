module.exports = (sequelize,dataTypes) => {
    let alias = "Users"
    let cols = {
        id: {
            type: dataTypes.INTEGER(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false 
        },
        first_name:{
            type:dataTypes.STRING(50),
            allowNull:false
        },
        last_name:{
            type:dataTypes.STRING(50),
            allowNull:false
        },
        email:{
            type:dataTypes.STRING(100),
            allowNull:false,
            unique:true
        },
        password:{
            type:dataTypes.STRING(100),
            allowNull:false
        },
        rol:{
            type:dataTypes.INTEGER(20),
            allowNull:false
        },
        direction:{
            type:dataTypes.STRING(120)
        },
        cp:{
            type:dataTypes.INTEGER(20)
        },
        province:{
            type:dataTypes.STRING(50)
        },
        location:{
            type:dataTypes.STRING(50)
        },
        image:{
            type:dataTypes.STRING(50)
        }
    }
    let config={
        tablename:"users",
    }

    const User = sequelize.define(alias,cols,config)

    return User
}