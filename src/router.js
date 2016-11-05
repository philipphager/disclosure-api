// Dependencies ---------------------------------------------------------------
const express = require('express');
const LibraryController = require('./controller/library-controller.js');

module.exports = () => {
    const router = new express.Router();
    const libraryController = LibraryController(router);
    return router;
};
