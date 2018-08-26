const loaded = require('dotenv').load();
const config = require('config');
const express = require('express');
const mongoose = require('mongoose');
const compression = require('compression');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const router = require('./api/router');
const { errorHandler } = require('./api/controllers/error-handler');
const {
    MONGO_APPLICATION_URI,
    MONGO_APPLICATION_USERNAME,
    MONGO_APPLICATION_PASSWORD,
    PORT,
} = config;

mongoose.connect(MONGO_APPLICATION_URI, {
    keepAlive: true,
    useNewUrlParser: true,
    user: MONGO_APPLICATION_USERNAME,
    pass: MONGO_APPLICATION_PASSWORD
})
.catch(e => console.log(e));

const app = express();

app.use(bodyParser.json());
app.use(compression());
app.use(morgan('tiny'));
app.use(express.static('public'));
app.use(router());
app.use(errorHandler());

app.listen(PORT, () => {
    console.log(`Gab.ly application up and running on port ${PORT}`)
});
