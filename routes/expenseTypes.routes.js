var express = require('express');
var router = express.Router();
var controller = require('../controllers/expenseTypes.controller');

router.route('/')
    .get(controller.findAll)
    .post(controller.create);

router.route('/:id')
    .get(controller.findById);

module.exports = router;