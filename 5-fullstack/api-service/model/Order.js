
let mongoose = require('mongoose');
let Schema = require('mongoose').Schema;

var OrderSchema = new mongoose.Schema({
    id: String,
    date: Date,
    total: Number,
    status: Boolean,
});

module.exports=mongoose.model('Order',OrderSchema)