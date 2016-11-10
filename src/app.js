// Dependencies ---------------------------------------------------------------
const express = require('express'),
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

// Middleware, Routing --------------------------------------------------------
app.use(bodyParser.json());
app.use(router());

// Start Server ---------------------------------------------------------------
app.listen(config.server.port, (err) => {
    if (!err) {
        console.log(`Disclosure listening on port ${config.server.port}`);
    }
});
