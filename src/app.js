// Dependencies ---------------------------------------------------------------
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./env/config.js');
const router = require('./router');

// Database -------------------------------------------------------------------
mongoose.Promise = global.Promise;
mongoose.connect(config.db.url, (err) => {
    if (err) {
        return console.log('Error while connecting to mongodb');
    }
    console.log(`Successfully connected with ${config.db.url}`);
});

// Express App ----------------------------------------------------------------
const app = express();

// Middleware, Routing --------------------------------------------------------
app.use(router());
app.use(bodyParser.json());

// Start Server ---------------------------------------------------------------
app.listen(config.server.port, (err) => {
    if (!err) {
        console.log(`Disclosure listening on port ${config.server.port}`);
    }
});

