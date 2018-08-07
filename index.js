const config = require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const {
    APPLICATION_HTTP_PORT,
    MONGO_APPLICATION_URI,
    MONGO_APPLICATION_USERNAME,
    MONGO_APPLICATION_PASSWORD
} = config.parsed;

const connection = mongoose.connect(MONGO_APPLICATION_URI, {
    keepAlive: true,
    user: MONGO_APPLICATION_USERNAME,
    pass: MONGO_APPLICATION_PASSWORD
})
.catch(err => {
    console.log(err);
});

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.end('Gab.ly'); 
});

app.listen(APPLICATION_HTTP_PORT, () => {
    console.log(`Gab.ly application up and running on port ${APPLICATION_HTTP_PORT}`)
});
