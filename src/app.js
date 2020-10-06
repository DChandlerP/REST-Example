exports['SINGLETON app'] = (config, router) => {
    const express = require('express');
    const app = express();
    const path = require('path');
    const cookieParser = require('cookie-parser');
    const morgan = require('morgan');
    const passport = require('passport');

    if (config.NODE_ENV === 'dev') {
        app.use(morgan('dev'));
    } else if (config.NODE_ENV !== 'test') {
        app.use(morgan('combined'));
    }

    app.use(express.static(path.join(__dirname, 'static')));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(passport.initialize());

    app.use('/', router);

    return app;
}