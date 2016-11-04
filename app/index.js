// Dependencies ---------------------------------------------------------------
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Library = require('./models/library');

const app = express();
app.use(bodyParser.json());

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/test');

// Routes ---------------------------------------------------------------------
app.get('/libraries', (req, res) => {
    Library.find((err, library) => {
        if (err) res.send(err);
        
        res.json(library);
    });
});

app.post('/libraries', (req, res) => {
    let library = new Library(req.body);

    library.save(function (err) {
        if (err) res.send(err);

        res.send(200);
    });
});

app.listen(3000);
