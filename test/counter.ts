/// <reference path="../typings/mocha/mocha.d.ts" />
/// <reference path="../typings/chai/chai.d.ts" />
/// <reference path="../build/src/ni-sched.d.ts" />

import chai = require('chai');

var expect = chai.expect;

import Counter = require('../src/counter');

describe('Counter', () => {
    var c: Counter;
    before(() => {
        c = new Counter();
    })
    it('starts with 0', (done) => {
        expect(c.val()).to.equals(0);
        done();
    });
});