// Dependency -----------------------------------------------------------------
const express = require('express');
const Feature = require('../model/feature');
const querymen = require('querymen');

// Routes ---------------------------------------------------------------------
module.exports = () => {
    const router = express.Router();

    // List all feature
    router.route('/').get(querymen.middleware({
        updatedSince: {
            type: Date,
            paths: ['updatedAt'],
            operator: '$gt'
        }
    }), (req, res, next) => {
        let query = req.querymen;

        Feature.find(query.query, query.select, query.cursor)
            .then((features) => {
                res.json(features);
            })
            .catch((err) => {
                res.status(500).send(err);
            });
    });

    // Find a single feature by id
    router.route('/:featureId')
        .get((req, res, next) => {
            Feature.findById(req.params.featureId)
                .then((feature) => {
                    res.json(feature);
                })
                .catch((err) => {
                    res.status(500).send(err);
                });
        });


    // Create a new feature
    router.route('/new')
        .post((req, res, next) => {
            let feature = new Feature(req.body);

            feature.save()
                .then((feature) => {
                    res.json(feature);
                })
                .catch((err) => {
                    res.status(500).send(err);
                });
        });

    // Update a feature
    router.route('/:featureId')
        .put((req, res, next) => {
            let id = req.params.featureId;

            Feature.findByIdAndUpdate(id, req.body, { new: true })
                .then((feature) => {
                    res.json(feature);
                })
                .catch((err) => {
                    res.status(500).send(err);
                });
        });

    // Delete a library
    router.route('/:featureId')
        .delete((req, res, next) => {
            Feature.remove({ _id: req.params.featureId })
                .then(() => {
                    res.status(200).send();
                })
                .catch((err) => {
                    res.status(500).send(err);
                });
        });

    return router;
};
