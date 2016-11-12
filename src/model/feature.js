// Dependencies ---------------------------------------------------------------
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema ---------------------------------------------------------------------
const featureSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    createdAt: Date,
    updatedAt: Date
});

featureSchema.pre('save', function (next) {
    let now = new Date();
    this.updatedAt = now;

    if (!this.createdAt) {
        this.createdAt = now;
    }
    next();
});

module.exports = mongoose.model('Feature', featureSchema); 
