let fs = require('fs')
let path = require('path')

let productdb = fs.readFileSync(path.join(__dirname,"/product.json"))

module.exports = JSON.parse(productdb)
