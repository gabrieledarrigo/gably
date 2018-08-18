const config = require('config');
const createError = require('http-errors');
const UrlService = require('../services/UrlService');
const { APPLICATION_BASE_URL } = config;
const service = new UrlService();

const shorten = () => {
    return async (req, res) => {
        const { url } = req.body;

        if (!url) {
            return res.status(400)
                .json(createError(400, 'Invalid url value'));
        }

        try {
            const result = await service.save(url);

            return res.json(result);
        } catch (e) {
            return res.json({
                status: 500,
                error: e.message
            });
        }
    };
};

const redirect = () => {
    return async (req, res) => {
        const { id } = req.params;

        try {
            const result = await service.getShortUrlById(id);

            console.log(result);
            if (!result) {
                return res.redirect(APPLICATION_BASE_URL);
            }

            return res.redirect(result.originalUrl);
        } catch (e) {
            return res.json({
                status: 500,
                error: e.message
            });
        }
    };
};

module.exports = {
    shorten,
    redirect
};
