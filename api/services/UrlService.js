const shortid = require('shortid');
const config = require('config');
const ShortUrl = require('../models/ShortUrl.js');

class UrlService {
    createShortUrl(originalUrl) {
        const _id = shortid.generate();

        return {
            _id,
            originalUrl,
            url: `${config.get('BASE_URL')}${_id}`
        };
    }

    save(originalUrl) {
     
    }
}

module.exports = UrlService;
