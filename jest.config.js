process.env.NODE_CONFIG_DIR = `${__dirname}/api/config`;

module.exports = {
    verbose: true,
    coverageReporters: ['json'],
    testMatch: [
        '<rootDir>/test/**/?(*.)+(spec|test).js' 
    ]
};