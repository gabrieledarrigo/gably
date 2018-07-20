const shortid = require('shortid');
const mongoose = require('mongoose');

module.exports = mongoose.model('shortUrl', new mongoose.Schema({
    _id: {
        type: String,
        default: shortid.generate
    },
    originalUrl: String,
    value: String,
}, {
    timestamps: true
}));