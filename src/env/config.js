module.exports = {
    db: {
        url: process.env.MONGOLAB_URI || 'mongodb://localhost/test'
    },
    server: {
        port: process.env.PORT || 3000
    }
};
