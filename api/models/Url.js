const mongoose = require('mongoose');
const Schema = { mongoose };

module.export = mongoose.model('url', new Schema({
    shortId: String,
    original: String,
    short: String,
}, {
    timestamps: true
}));