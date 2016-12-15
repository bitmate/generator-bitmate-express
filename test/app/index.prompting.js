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

test('Set framework and call this.serverPrompts', t => {
    context.serverPrompts = () => {};
    const spy = chai.spy.on(context, 'serverPrompts');
    TestUtils.call(context, 'prompting.bitmate');
    t.is(context.options.server, 'express');
    expect(spy).to.have.been.called.once();
});
