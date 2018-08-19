const createError = require('http-errors');

const errorHandler = () => {
    /**
     * Application error handler.
     * 
     * @param {object} req
     * @param {object} res
     * @return {object} 
     */
    return async (err, req, res, next) => res
        .status(err.status)
        .json({ status: err.status, message: err.message })
};

module.exports = {
    errorHandler,
};
