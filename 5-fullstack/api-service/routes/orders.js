var express = require('express');
var router = express.Router();
let Order = require('../model/Order')

router
  .post('/', function (req, res, next) {
    let body = req.body
    let { cart } = body;
    let keys = Object.keys(cart)
    let total = 0;
    keys.forEach(key => {
      let cartLine = cart[key];
      total += (cartLine.item.price * cartLine.qty)
    })
    let order = new Order({
      date: new Date(),
      total
    });
    order.save((err, result) => {
      if (err) {
        next(err); return
      }
      res.json(result)
    })
  })


module.exports = router;
