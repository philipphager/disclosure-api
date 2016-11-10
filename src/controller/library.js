// Dependency -----------------------------------------------------------------
const express = require('express');
const Library = require('../model/library');
const querymen = require('querymen');

// Routes ---------------------------------------------------------------------
module.exports = () => {
    const router = express.Router();

    // List all libraries
    router.route('/').get(querymen.middleware({
        updatedSince: {
            type: Date,
            paths: ['updatedAt'],
            operator: '$gt'
        }
    }), (req, res, next) => {
        let query = req.querymen;

        Library.find(query.query, query.select, query.cursor)
            .then((libraries) => {
                res.json(libraries);
            })
            .catch((err) => {
                res.status(500).send(err);
            });
    });

    // Find a single library by id
    router.route('/:libraryId')
        .get((req, res, next) => {
            Library.findById(req.params.libraryId)
                .then((library) => {
                    res.json(library);
                })
                .catch((err) => {
                    res.status(500).send(err);
                });
        });


    // Create a new library
    router.route('/new')
        .post((req, res, next) => {
            let library = new Library(req.body);

            library.save()
                .then((library) => {
                    res.json(library);
                })
                .catch((err) => {
                    res.status(500).send(err);
                });
        });

    // Update a library
    router.route('/:libraryId')
        .put((req, res, next) => {
            Library.findById(req.params.libraryId)
                .then((library) => {
                    library.title = req.body.title;
                    library.subtitle = req.body.subtitle;
                    library.description = req.body.description;
                    library.websiteUrl = req.body.websiteUrl;
                    library.type = req.body.type;
                    library.save()
                        .then((library) => {
                            res.json(library);
                        })
                        .catch((err) => {
                            res.status(500).send(err);
                        });
                })
                .catch((err) => {
                    res.status(500).send(err);
                });
        });

    // Delete a library
    router.route('/:libraryId')
        .delete((req, res, next) => {
            Library.remove({ _id: req.params.libraryId })
                .then(() => {
                    res.status(200).send();
                })
                .catch((err) => {
                    res.status(500).send(err);
                });
        });

    return router;
};
