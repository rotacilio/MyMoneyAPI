var express = require('express');
var router = express.Router();
var cardsController = require('../controllers/cards.controller');

router.route('/')
    .get(cardsController.getAllCards)
    .post(cardsController.createNewCard);

router.route('/:cardId')
    .get(cardsController.findByPk)
    .put(cardsController.updateCard)
    .delete(cardsController.deleteCard);

module.exports = router;
