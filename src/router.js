// Dependencies ---------------------------------------------------------------
const express = require('express');
const homeController = require('./controller/home.js');
const libraryController = require('./controller/library.js');

module.exports = () => {
    const router = express.Router();
    router.use('/',  homeController());
    router.use('/libraries',  libraryController());
    return router;
};
