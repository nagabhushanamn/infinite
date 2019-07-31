
let mongoose = require('mongoose');
let Schema = require('mongoose').Schema;

var ReviewSchema = new mongoose.Schema({
    author: String,
    stars: Number,
    body: String,
    item: [{ type: Schema.Types.ObjectId, ref: 'Item' }]
});

ReviewSchema.virtual('vItem', {
    ref: 'Item',
    localField: '_id',
    foreignField: 'reviews'
});

let Review = mongoose.model('Review', ReviewSchema, 'Review')

module.exports = Review