var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/cart', (req, res) => {
  res.sendFile(path.join(__dirname, ".././views/cart.html"))
});

module.exports = router;
