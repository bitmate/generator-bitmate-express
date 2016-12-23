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

test('Set framework and call this.bitmatePrompts', t => {
    context.bitmatePrompts = () => {};
    const spy = chai.spy.on(context, 'bitmatePrompts');
    TestUtils.call(context, 'prompting.bitmate');
    t.is(context.options.server, 'express');
    t.is(context.options.client, 'none');
    expect(spy).to.have.been.called.once();
});

test('Set client to passed client if it exists', t => {
    context.bitmatePrompts = () => {};
    context.options.client = 'angular1';
    TestUtils.call(context, 'prompting.bitmate');
    t.is(context.options.client, 'angular1');
});