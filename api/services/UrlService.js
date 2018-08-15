const config = require('dotenv').config();
const shortid = require('shortid');
const ShortUrl = require('../models/ShortUrl.js');

/**
 * Implements various url domain logic,
 * such query, persistence etc.
 */
class UrlService {

    /**
     * Return the server base url
     * 
     * @return {string}
     */
    baseUrl() {
        return config.parsed.APPLICATION_BASE_URL;
    }

    /**
     * Return a short url: 
     * the gab.ly base url with the unique short id
     * 
     * @param {string} _id
     * @return {object} 
     */
    shortUrl(_id = '') {
        return `${this.baseUrl()}${_id}`;
    }

    /**
     * Create and return a shortUrl object
     * 
     * @param {string} originalUrl 
     */
    createShortUrlObject(originalUrl) {
        const _id = shortid.generate();
        const url = this.shortUrl(_id);

        return {
            _id,
            originalUrl,
            url
        };
    }

    /**
     * Save a shortUrl into the persistence layer
     * 
     * @param {string} originalUrl 
     */
    async save(originalUrl) {
        const model = new ShortUrl(
            this.createShortUrlObject(originalUrl)
        );

        try {
            return await model.save();
        } catch(e) {
            throw new Error(`Error during shortUrl persistence: ${e.message}`);
        }
    }

    /**
     * Get a shortUrl by its unique _id
     * 
     * @param {string} _id 
     */
    async getShortUrlById(_id) {
        return await ShortUrl.findById(_id);
    }
}

module.exports = UrlService;
