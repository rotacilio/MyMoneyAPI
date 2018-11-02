var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var mongoose = require('mongoose');
mongoose.connect('mongodb://ds249123.mlab.com:49123/mymoneydb', {
        auth: {
            user: 'mymoneyadmin',
            password: 'fl@m3ng0'
        }, 
        useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("we're connected!");
});

var cardsRouter = require('./routes/cards.routes');
var expenseTypesRouter = require('./routes/expenseTypes.routes');
var paymentTypesRouter = require('./routes/paymentTypes.routes');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/cards', cardsRouter);
app.use('/expenseTypes', expenseTypesRouter);
app.use('/paymentTypes', paymentTypesRouter);

module.exports = app;
