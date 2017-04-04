'use strict';

const test = require('ava');
const chai = require('chai');
const spies = require('chai-spies');
chai.use(spies);
const TestUtils = require('@oligibson/bitmate-generator').TestUtils;

let context;

test.before(() => {
  context = TestUtils.mock('app');
  require('../../generators/app/index');
});

test.beforeEach(() => {
  context.mergeJson['package.json'] = {};
});

test(`Add express deps to package.json dependencies`, t => {
  context.props = {};
  TestUtils.call(context, 'configuring');
  t.is(context.mergeJson['package.json'].dependencies.express, '^4.14.0');
});

test(`Add serve-favicon to package.json dependencies if client exists`, t => {
  context.props = {
    client: 'angular1'
  };
  TestUtils.call(context, 'configuring');
  t.is(context.mergeJson['package.json'].dependencies['serve-favicon'], '^2.3.2');
});

test(`Don't add serve-favicon to package.json dependencies if client is none`, t => {
  context.props = {
    client: 'none'
  };
  TestUtils.call(context, 'configuring');
  t.is(context.mergeJson['package.json'].dependencies['serve-favicon'], undefined);
});
