// Dependency -----------------------------------------------------------------
const express = require('express');

// Routes ---------------------------------------------------------------------
module.exports = () => {
    const router = express.Router();
    
    router.route('/')
        .get((req, res, next) => {
            res.json({ message: 'hello' });
        });

    return router;
};
