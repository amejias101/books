module.exports = function() {
    var express = require('express'); // is it needed?
    var app = express();
    var bodyParser = require('body-parser');
    var logger = require('morgan');
    var path = require('path');
    var db = require('./db');

    var apiRoutes = require('./routes/api');
    var appRoutes = require('./routes/app');

    app.set('views', path.join(__dirname, 'views'));

    app.use(logger('dev'));
    app.use(bodyParser());
    app.use(express.static(path.join(__dirname, 'assets')));

    app.use('/api', apiRoutes);
    app.use('/', appRoutes);

    return app;
}
