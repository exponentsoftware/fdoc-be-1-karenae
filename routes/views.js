const express = require('express');
const { todoViews } = require('../controller/views');

const router = express.Router()

router.post('/createviews',todoViews);

module.exports = router;