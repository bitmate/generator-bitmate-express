/**
 * Main application routes
 */

'use strict';

const express = require('express');
const path = require('path');

module.exports = function(app) {

<% if (client !== 'none') { -%>
    app.use(express.static(path.resolve('.tmp')));
    app.use(express.static(path.resolve('client')));

    // All other routes should redirect to the index.html
    app.route('/*')
        .get((req, res) => {
            res.sendFile(path.resolve('../client/index.html'));
        });
<% } -%>
};
