// Dependency -----------------------------------------------------------------
const Library = require('../model/library');

// Routes ---------------------------------------------------------------------
module.exports = (router) => {
    router.route('/libraries')
    .get((req, res, next) => {
        Library.find((err, library) => {
            if (err) res.send(err);
            
            res.json(library);
        });
    });

    router.route('/libraries')
    .post((req, res, next) => {
        let library = new Library(req.body);

        library.save(function (err) {
            if (err) res.send(err);

            res.send(200);
        });
    });
};
