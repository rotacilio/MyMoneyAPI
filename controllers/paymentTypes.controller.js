var PaymentType = require('../models/paymentType.model');

module.exports.findAll = (req, res) => {
    PaymentType.find({}, (err, paymentTypes) => {
        if (err) throw err;
        res.status(200).json(paymentTypes);
    });
};

module.exports.findById = (req, res) => {
    PaymentType.findById(req.params.id, (err, paymentType) => {
        if (err) throw err;
        res.status(200).json(paymentType);
    });
};

module.exports.create = (req, res) => {
    var paymentType = new PaymentType(req.body);
    paymentType.createdAt = new Date();
    paymentType.save(err => {
        if (err) throw err;
        res.status(201).json(paymentType);
    });
};
