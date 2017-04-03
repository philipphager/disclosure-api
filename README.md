Disclosure Server API
=====================

Setup
-----
Install all dependencies with npm by running `npm install`. Afterwards you can 
start the server with `npm start`. Please be aware, that you need a local 
mongodb for debugging purposes. Check out the mongodb installation guide 
[here](https://docs.mongodb.com/manual/installation/?jmp=footer).
After starting the local mongodb, set the mongodb url in your environment.

Environment
-----------
* `$PORT`, used to change the server port. Default port 3000.
* `$MONGODB_URL`, used to connect to a MongoDB database. Defaults to 
'mongodb://localhost/test'. Change to your local mongodb instance.

License
-------
    Copyright 2017 Philipp Hager

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
