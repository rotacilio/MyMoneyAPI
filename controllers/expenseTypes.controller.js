var ExpenseType = require('../models/expenseType.model');

module.exports.findAll = (req, res) => {
    ExpenseType.find({}, (err, expenseTypes) => {
        res.status(200).json(expenseTypes);
    });
};

module.exports.findById = (req, res) => {
    ExpenseType.findById(req.params.id, (err, expenseType) => {
        if (err) throw err;
        res.status(200).json(expenseType);
    });
};

module.exports.create = (req, res) => {
    var expenseType = new ExpenseType(req.body);
    expenseType.createdAt = new Date();
    expenseType.save(err => {
        if (err) throw err;
        res.status(201).json(expenseType);
    });
}