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
        enum: ['ANALYTICS', 'ADVERTISMENT', 'DEVELOPER', 'SOCIAL'],
        required: true
    },
    createdAt: Date,
    updatedAt: Date
});

librarySchema.pre('save', (next) => {
    let now = new Date();
    this.updatedAt = now;

    if (!this.createdAt) {
        this.createdAt = now;
    }
    next();
});

const Library = mongoose.model('Library', librarySchema);
module.exports = Library;
