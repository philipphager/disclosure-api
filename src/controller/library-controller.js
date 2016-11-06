// Dependency -----------------------------------------------------------------
const express = require('express');
const Library = require('../model/library');

// Routes ---------------------------------------------------------------------
module.exports = () => {
    const router = express.Router();

    router.route('/')
        .get((req, res, next) => {
            Library.find((err, library) => {
                if (err) res.status(500).send(err);

                res.json(library);
            });
        });

    router.route('/')
        .post((req, res, next) => {
            let library = new Library(req.body);

            library.save(function (err) {
                if (err) res.status(500).send(err);

                res.sendStatus(200);
            });
        });

    return router;
};
