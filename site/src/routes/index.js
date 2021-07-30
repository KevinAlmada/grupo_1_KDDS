var express = require('express');
var router = express.Router();
var path = require('path')

/* GET home page. */

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, ".././views/home.html"))
});


router.get('/cart', (req, res) => {
  res.sendFile(path.join(__dirname, ".././views/cart.html"))
});

router.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, ".././views/login.html"))
});

router.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, ".././views/register.html"))
});

router.get('/product', (req, res) => {
  res.sendFile(path.join(__dirname, ".././views/product.html"))
});

module.exports = router;

