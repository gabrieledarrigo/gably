const express = require('express');
const mongoose = require('mongoose');
const HTTP_PORT = 8080;

const connection = mongoose.connect('mongodb://localhost/gably', {
    keepAlive: true
})
.catch(err => {
    console.log(err);
});

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.end('Gab.ly'); 
});

app.listen(HTTP_PORT, () => {
    console.log(`Gab.ly application up and running on port ${HTTP_PORT}`)
});
