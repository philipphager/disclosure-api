// Dependencies ---------------------------------------------------------------
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema ---------------------------------------------------------------------
const libraryFeatureSchema = new Schema({
    libraryId: {
        type: mongoose.Schema.ObjectId,
        ref: 'Library'
    }, 
    featureId: {
        type: mongoose.Schema.ObjectId,
        ref: 'Feature'
    },
    createdAt: Date,
    updatedAt: Date
});

libraryFeatureSchema.pre('save', function (next) {
    let now = new Date();
    this.updatedAt = now;

    if (!this.createdAt) {
        this.createdAt = now;
    }
    next();
});

// Create second level db index to insure, that a combination
// of library / feature is only saved once.
libraryFeatureSchema.index({ libraryId: 1, featureId: 1 }, { unique: true });

module.exports = mongoose.model('LibraryFeature', libraryFeatureSchema);
