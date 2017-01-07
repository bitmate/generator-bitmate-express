/**
 * Main application routes
 */

'use strict';

const express = require('express');
const errors = require('./components/errors');
const path = require('path');

module.exports = function(app) {

    // All undefined asset or api routes should return a 404
    app.route('/:url(api|auth|components|app|bower_components|assets)/*')
      .get(errors[404]);

<% if (client !== 'none') { -%>
    // All other routes should redirect to the index.html
    app.route('/*')
        .get((req, res) => {
            res.sendFile(path.resolve('../client/index.html'));
        });
<% } -%>
};
