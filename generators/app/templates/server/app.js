'use strict';

const express = require('express');
const http = require('http');

// Setup server
const app = express();
const server = http.createServer(app);

require('./config/express')(app);
require('./routes')(app);

// Start server
const startServer = () => {
  app.bitmate = server.listen('9000', '0.0.0.0', () => {
    console.log('Express server listening');
  });
};

startServer();
// Expose app
exports = module.exports = app;
