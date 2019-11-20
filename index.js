const express = require('express');

const dotenv = require('dotenv');
dotenv.config();

// Create a new express application and use
// the express static middleware, to serve all files
// inside the public directory
const app = express();
app.use(express.static(__dirname + '/public'));

// Start the server on port 8080
app.listen(8080);
