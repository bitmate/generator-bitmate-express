'use strict';

const test = require('ava');
const chai = require('chai');
const expect = chai.expect;
const spies = require('chai-spies');
chai.use(spies);
const TestUtils = require('bitmate-generator').TestUtils;

let context;

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

test.before(() => {
  context = TestUtils.mock('app');
  require('../../generators/app/index');
  process.chdir('../../');
});

test(`Call this.copyTemplate 11 times`, t => {
  const spy = chai.spy.on(context, 'copyTemplate');
  TestUtils.call(context, 'writing', {
    client: 'angular1'
  });
  expect(spy).to.have.been.called.exactly(files.length);
  files.forEach(file => t.true(context.copyTemplate[file].length > 0));
});
