// Dependency -----------------------------------------------------------------
const express = require('express'),
    Library = require('../model/library'),
    querymen = require('querymen');

// Routes ---------------------------------------------------------------------
module.exports = () => {
    const router = express.Router();

    // List all libraries
    router.route('/').get(querymen.middleware({
        updatedSince: {
            type: Date,
            paths: ['updatedSince'],
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
    router.route('/')
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
        .patch((req, res, next) => {
            let id = req.params.libraryId;

            Library.findByIdAndUpdate(id, req.body, { new: true })
                .then((library) => {
                    res.json(library);
                })
                .catch((err) => {
                    res.status(500).send(err);
                });
        });

    // Delete a library
    router.route('/:libraryId')
        .delete((req, res, next) => {
            let id = req.params.libraryId;

            Library.findByIdAndRemove(id)
                .then(() => {
                    res.status(204).send();
                })
                .catch((err) => {
                    res.status(500).send(err);
                });
        });

    return router;
};
