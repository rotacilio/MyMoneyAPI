var errorsController = require('./errors.controller');
var Card = require('../models/card.model');

module.exports.getAllCards = (req, res) => {
    Card.find({}, (err, cards) => {
        res.status(200).json(cards);
    });
};

module.exports.findByPk = (req, res) => {
    Card.findById(req.params.cardId, (err, card) => {
        res.status(200).json(card);
    });
};

module.exports.createNewCard = (req, res) => {
    let card = new Card(req.body);
    card.createdAt = new Date().toString();
    card.save((err) => {
        if (err) throw err;
        res.status(201).json(card);
    });
};

module.exports.updateCard = (req, res) => {
    Card.findById(req.params.cardId, (err, card) => {
        if (err) throw err;
        if (req.body._id) {
            delete req.body._id;
        }
        for (let c in req.body) {
            card[c] = req.body[c];
        }
        card.updatedAt = new Date().toString();
        card.save((error) => {
            if (error) throw error;
            res.status(201).json(card);
        });
    });
};

module.exports.deleteCard = (req, res) => {
    Card.findById(req.params.cardId, (err, card) => {
        if (!card) {
            errorsController.sendMessageError(err, "Falha ao tentar apagar o cartão!");
        } 
        // if (err) throw err;
        // card.remove(error => {
        //     if (error) { 
        //         res.status(500).json(error); 
        //     } else {
        //         res.status(201).json({ result: true});
        //     }
        // });
    });
};