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

module.exports = mongoose.model('LibraryFeature', libraryFeatureSchema);
