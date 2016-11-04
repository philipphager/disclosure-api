// Dependencies ---------------------------------------------------------------
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema ---------------------------------------------------------------------
const librarySchema = new Schema({
    packageName: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    subtitle: String,
    description: String,
    type: String,
    createdAt: Date,
    updatedAt: Date
});

var Library = mongoose.model('Library', librarySchema);
module.exports = Library;
