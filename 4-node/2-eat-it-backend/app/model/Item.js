
let mongoose = require('mongoose');
let Schema = require('mongoose').Schema;
let Review = require('./Review')

var ItemSchema = new mongoose.Schema({
    id: String,
    name: String,
    price: Number,
    canBuy: Boolean,
    imgPath: String,
    description: String,
    reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }]
});

ItemSchema.virtual('vReviews', {
    ref: 'Review',
    localField: '_id',
    foreignField: 'item'
});

let Item = mongoose.model('Item', ItemSchema, 'Item')


module.exports = Item;