// Dependencies ---------------------------------------------------------------
const express = require('express'),
    homeController = require('./controller/home.js'),
    docsController = require('./controller/docs.js'),
    libraryController = require('./controller/library.js');

module.exports = () => {
    const router = express.Router();
    router.use('/', homeController());
    router.use('/docs', docsController());
    router.use('/libraries', libraryController());
    return router;
};
