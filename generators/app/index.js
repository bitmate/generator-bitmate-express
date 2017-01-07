'use strict';

const bitmate = require('bitmate-generator');

module.exports = bitmate.Base.extend({
  prompting: {
    bitmate() {
      this.options.server = 'express';
      this.options.client = (this.options.client) ? this.options.client : 'none';
      return this.bitmatePrompts('client');
    }
  },

  configuring() {
    this.mergeJson('package.json', {
      dependencies: {
        'express': '^4.14.0',
        'body-parser': '^1.15.2',
        'compression': '^1.6.2',
        'connect-livereload': '^0.6.0',
        'cookie-parser': '^1.4.3',
        'ejs': '^2.5.5',
        'errorhandler': '^1.5.0',
        'express-session': '^1.14.2',
        'lusca': '^1.4.1',
        'method-override': '^2.3.7',
        'morgan': '^1.7.0'
      }
    });

    if (this.props.client !== 'none') {
      this.mergeJson('package.json', {
        dependencies: {
          'serve-favicon': '^2.3.2'
        }
      });
    }
  },

  writing() {
    const files = [
      'server/app.js',
      'server/routes.js',
      'server/index.js',
      'server/components/errors/index.js',
      'server/views/404.html',
      'server/config/express.js',
      'server/config/environment/index.js',
      'server/config/environment/development.js',
      'server/config/environment/production.js',
      'server/config/environment/shared.js',
      'server/config/environment/test.js'
    ];

    files.forEach(file => {
      this.copyTemplate(file, file, this.options);
    });
  }
});
