const path = require('path');

const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
	res.render('index', { title: 'Home' });
});

module.exports = router;
