// Dependency -----------------------------------------------------------------
const express = require('express'),
    path = require('path');

// Routes ---------------------------------------------------------------------
module.exports = () => {
    const router = express.Router();

    router.use(express.static(path.join(__dirname, '../public')));

    return router;
};
