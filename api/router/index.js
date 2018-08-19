const express = require('express');
const { shorten, redirect, notFound } = require('../controllers');
const router = express.Router();

// define the redirect route
router.get('/:id', redirect());

// define the create short url route
router.post('/shorten', shorten());

// define the not found route
router.all('*', notFound());

module.exports = () => router;