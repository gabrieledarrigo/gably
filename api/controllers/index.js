const config = require('config');
const createError = require('http-errors');
const UrlService = require('../services/UrlService');
const { APPLICATION_BASE_URL } = config;
const service = new UrlService();

const shorten = () => {
    /**
     * Handle the creation of a new short url.
     * 
     * @param {object} req
     * @param {object} res
     * @return {object} 
     */
    return async (req, res, next) => {
        const { url } = req.body;

        if (!url) {
            return next(createError(400, 'Invalid url value'));
        }

        try {
            const result = await service.save(url);
            return res.json(result);
        } catch (e) {
            return next(createError(500, e.message));
        }
    };
};

const redirect = () => {
    /**
     * Redirect the user to shortened url or
     * to the application index
     * 
     * @param {object} req
     * @param {object} res
     * @return {object} 
     */
    return async (req, res, next) => {
        const { id } = req.params;

        try {
            const result = await service.getShortUrlById(id);

            if (!result) {
                return res.redirect(APPLICATION_BASE_URL);
            }

            return res.redirect(result.originalUrl);
        } catch (e) {
            return next(createError(500, e.message));
        }
    };
};

const notFound = () => {
    /**
     * Return a 404 Not Found error.
     * 
     * @param {object} req
     * @param {object} res
     * @return {object} 
     */
    return async (req, res, next) => {
        return next(createError(404, 'Not found'));
    };
};

module.exports = {
    shorten,
    redirect,
    notFound
};
