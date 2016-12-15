'use strict';

const test = require('ava');
const chai = require('chai');
const expect = chai.expect;
const spies = require('chai-spies');
chai.use(spies);
const TestUtils = require('bitmate-generator').TestUtils;

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