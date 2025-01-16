const express = require('express');
const app = express();
const route = require('./routes/index.route');

app.use('/', route)

module.exports = app;