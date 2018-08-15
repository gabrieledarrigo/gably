const createError = require('http-errors');
const UrlService = require('../services/UrlService');
const service = new UrlService();

const shorten = (req, res, next) => {
    return async () => {
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

const redirect = (req, res, next) => {
    return async () => {
        const { id } = req.params;

        try {
            const result = await service.getShortUrlById(id);

            return res.redirect(result.originalUrl);

        } catch (e) {

        }
    };
};

module.exports = {
    shorten,
    redirect
};
