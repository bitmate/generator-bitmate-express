/**
 * Main application file
 */

'use strict';

const express = require('express');
const http = require('http');
const path = require('path');

// Setup server
var app = express();
var server = http.createServer(app);

require('./config/express')(app);
require('./routes')(app);


// Start server
function startServer() {
    app.angularFullstack = server.listen('9000', '0.0.0.0', function() {
        console.log('Express server listening');
    });
}

startServer();
// Expose app
exports = module.exports = app;
