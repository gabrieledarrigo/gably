const shortid = require('shortid');
const Url = require('../models/Url.js');

class UrlService {
    createShortUrl(original) {
        const BASE_URL = 'http://gab.ly/';
        return {
            original,
            shortId: shortid.generate()
        };
    }

    save(original) {
     
    }
}

module.exports = UrlService;
