const createError = require('http-errors');

const errorHandler = () => {
    /**
     * Application error handler.
     * 
     * @param {object} req
     * @param {object} res
     * @return {object} 
     */
    return (err, req, res) => {
        return res
            .status(err.status)
            .json(createError(err.status, err.message));
    };
};

module.exports = {
    errorHandler,
};
