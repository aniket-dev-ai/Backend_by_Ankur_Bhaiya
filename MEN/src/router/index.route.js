const express = require('express');
const router = express.Router()

const indexcontroller = require('../controllers/index.controller');


router.get('/', indexcontroller.indexController)

module.exports = router;