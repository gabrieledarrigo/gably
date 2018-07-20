const mongoose = require('mongoose');

module.exports = mongoose.model('url', new mongoose.Schema({
    shortId: String,
    original: String,
    short: String,
}, {
    timestamps: true
}));