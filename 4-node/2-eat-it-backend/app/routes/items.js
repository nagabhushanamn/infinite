var express = require('express');
var router = express.Router();
let Item = require('../model/Item')
let Review = require('../model/Review')

router
  .get('/', function (req, res, next) {
    Item.find((err, result) => {
      if (err) {
        next(err); return;
      }
      res.json(result);
    })
  })
  .get('/:id', function (req, res, next) {
    let id = req.params.id;
    Item.findById(id, (err, result) => {
      if (err) {
        next(err); return;
      }
      res.json(result);
    });
  })
  .get('/:id/reviews', function (req, res, next) {
    let id = req.params.id;
    Review.find({item:id}).exec(function (error, item) {
      if (error) { next(error); return }
      res.json(item)
    });
  })
  .post('/:id/reviews', function (req, res, next) {
    let id = req.params.id;
    let body = req.body;
    let review = new Review({ ...body, item: id })
    review.save((error, result) => {
      if (error) { next(error); return }
      res.json(result)
    })
  })

module.exports = router;
