var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var cardModel = new Schema({
    name: { type: String },
    payDay: { type: Number },
    isEnabled: { type: Boolean },
    createdAt: { type: Date },
    updatedAt: { type: Date }
});
module.exports = mongoose.model('cards', cardModel);