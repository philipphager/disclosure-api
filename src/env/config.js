module.exports = {
    db: {
        url: process.env.MONGOLAB_URI || 'mongodb://localhost/test'
    },
    server: {
        port: process.env.SERVER_PORT || 3000
    }
};
