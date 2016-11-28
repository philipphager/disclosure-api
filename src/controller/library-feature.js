// Dependency -----------------------------------------------------------------
const express = require('express');
const LibraryFeature = require('../model/library-feature');
const querymen = require('querymen');

// Routes ---------------------------------------------------------------------
module.exports = () => {
    const router = express.Router();

    // List all relations between libraries and features
    router.route('/').get(querymen.middleware({
        updatedSince: {
            type: Date,
            paths: ['updatedAt'],
            operator: '$gt'
        }
    }), (req, res, next) => {
        let query = req.querymen;

        LibraryFeature.find(query.query, query.select, query.cursor)
            .then((libraryFeature) => {
                res.json(libraryFeature);
            })
            .catch((err) => {
                res.status(500).send(err);
            });
    });

    // Find a single relation by id
    router.route('/:id')
        .get((req, res, next) => {
            LibraryFeature.findById(req.params.id)
                .then((libraryFeature) => {
                    res.json(libraryFeature);
                })
                .catch((err) => {
                    res.status(500).send(err);
                });
        });


    // Create a new relation
    router.route('/new')
        .post((req, res, next) => {
            let libraryFeature = new LibraryFeature(req.body);

            libraryFeature.save()
                .then((libraryFeature) => {
                    res.json(libraryFeature);
                })
                .catch((err) => {
                    res.status(500).send(err);
                });
        });

    // Update a relation
    router.route('/:id')
        .put((req, res, next) => {
            let id = req.params.id;

            LibraryFeature.findByIdAndUpdate(id, req.body, { new: true })
                .then((libraryFeature) => {
                    res.json(libraryFeature);
                })
                .catch((err) => {
                    res.status(500).send(err);
                });
        });

    // Delete a relation
    router.route('/:id')
        .delete((req, res, next) => {
            LibraryFeature.remove({ _id: req.params.id })
                .then(() => {
                    res.status(200).send();
                })
                .catch((err) => {
                    res.status(500).send(err);
                });
        });

    return router;
};
