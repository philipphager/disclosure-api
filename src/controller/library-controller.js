// Dependency -----------------------------------------------------------------
const express = require('express');
const Library = require('../model/library');

// Routes ---------------------------------------------------------------------
module.exports = () => {
    const router = express.Router();

    // List all libraries
    router.route('/')
        .get((req, res, next) => {
            Library.find((err, libraries) => {
                if (err) res.status(500).send(err);

                res.json(libraries);
            });
        });

    // Find a single library by id
    router.route('/:library_id')
        .get((req, res, next) => {
            Library.findById(req.params.library_id, (err, library) => {
                if (err) res.status(500).send(err);

                res.json(library);
            });
        });

    // Create a new library
    router.route('/new')
        .post((req, res, next) => {
            let library = new Library(req.body);

            library.save(function (err) {
                if (err) res.status(500).send(err);

                res.sendStatus(200);
            });
        });

    // Update a library
    router.route('/:library_id')
        .put((req, res, next) => {
            Library.findOneAndUpdate(req.params.library_id, req.body, { new: true }, (err, library) => {
                if (err) res.status(500).send(err);

                res.json(library);
            });
        });

    // Delete a library
    router.route('/:library_id')
        .delete((req, res, next) => {
            Library.remove({
                _id: req.params.library_id
            }, (err) => {
                if (err) res.status(500).send(err);

                res.json({ message: 'successfully deleted' });
            });
        });

    return router;
};
