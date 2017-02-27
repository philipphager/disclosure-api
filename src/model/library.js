// Dependencies ---------------------------------------------------------------
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema ---------------------------------------------------------------------
const librarySchema = new Schema({
    packageName: {
        type: String,
        required: true,
        unique: true
    },
    sourceDir: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    subtitle: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    websiteUrl: {
        type: String
    },
    type: {
        type: String,
        enum: ['ANALYTICS', 'ADVERTISEMENT', 'DEVELOPER', 'SOCIAL'],
        required: true
    },
    createdAt: Date,
    updatedAt: Date
});

librarySchema.pre('save', function (next) {
    let now = new Date();
    this.updatedAt = now;

    if (!this.createdAt) {
        this.createdAt = now;
    }
    next();
});

librarySchema.pre('update', function (next) {
    let now = new Date();
    this.updatedAt = now;

    if (!this.createdAt) {
        this.createdAt = now;
    }
    next();
});

module.exports = mongoose.model('Library', librarySchema);
