// Dependencies ---------------------------------------------------------------
const express = require('express');
const homeController = require('./controller/home.js');
const libraryController = require('./controller/library.js');
const featureController = require('./controller/feature.js');
const libraryFeatureController = require('./controller/library-feature.js');

module.exports = () => {
    const router = express.Router();
    router.use('/', homeController());
    router.use('/libraries', libraryController());
    router.use('/features', featureController());
    router.use('/libraryFeatures', libraryFeatureController()); // TODO: rename
    return router;
};
