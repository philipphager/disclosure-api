# Bachelorarbeit Server API - Disclosure

## Setup and usage
Install all dependencies with npm by running `npm install`. Afterwards you can 
start the server with `npm start`. Please be aware, that you need a local 
mongodb for debugging purposes. Check out the mongodb installation guide 
(here)[https://docs.mongodb.com/manual/installation/?jmp=footer].
After starting the local mongodb, set the mongodb url in your environment.

### Environment
$PORT, used to change the server port. Default port 3000.
$MONGODB_URL, used to connect to a MongoDB database. Defaults to 
'mongodb://localhost/test'. Change to your local mongodb instance.
