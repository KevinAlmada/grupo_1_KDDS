let fs = require('fs')
let path = require('path')

let productdb = fs.readFileSync(path.join(__dirname,"/product.json"))
let userdb = fs.readFileSync(path.join(__dirname,"/users.json"))

module.exports = {
    productdb:JSON.parse(productdb) ,
    userdb:JSON.parse(userdb)
}
