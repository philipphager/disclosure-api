// Dependency -----------------------------------------------------------------
const express = require('express');
const path    = require('path');

// Routes ---------------------------------------------------------------------
module.exports = () => {
    const router = express.Router();
    
    router.use(express.static(path.join(__dirname, '../public')));

    return router;
};
