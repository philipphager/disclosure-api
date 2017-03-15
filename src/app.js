// Dependencies ---------------------------------------------------------------
const express = require('express'),
    compression = require('compression'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    config = require('./env/config.js'),
    router = require('./router');

// Database -------------------------------------------------------------------
mongoose.Promise = global.Promise;
mongoose.connect(config.db.url)
    .then(() => {
        console.log(`Successfully connected with ${config.db.url}`);
    })
    .catch((err) => {
        console.log(`Error while connecting to mongodb with ${config.db.url}`);
    });

// Express App ----------------------------------------------------------------
const app = express();

// Middleware -----------------------------------------------------------------
app.use(bodyParser.json());
app.use(router());
app.use(compression());

// Start Server ---------------------------------------------------------------
app.listen(config.server.port, (err) => {
    if (!err) {
        console.log(`Disclosure listening on port ${config.server.port}`);
    }
});
