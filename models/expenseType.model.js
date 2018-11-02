var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ExpenseType = new Schema({
    description: { type: String },
    createdAt: { type: Date },
    updatedAt: { type: Date }
});
module.exports = mongoose.model('expenseTypes', ExpenseType);