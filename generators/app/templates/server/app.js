'use strict';

const express = require('express');
const http = require('http');
const config = require('./config/environment');

// Setup server
const app = express();
const server = http.createServer(app);

require('./config/express')(app);
require('./routes')(app);

// Start server
const startServer = () => {
  app.bitmate = server.listen(config.port, '0.0.0.0', () => {
    console.log(`Express server listening on ${config.port}`);
  });
};

startServer();
// Expose app
exports = module.exports = app;
