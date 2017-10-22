'use strict';

const { expect } = require('chai');
const Bluebird = require('bluebird');

const validatePayloads = require('./validate-payloads');

describe('payload validation (content type deletion)', function () {
  it('skips ct delete payloads', Bluebird.coroutine(function * () {
    const errors = yield validatePayloads(function (migration) {
      const lunch = migration.createContentType('lunch').name('lunch');
      lunch.createField('mainCourse').name('mainCourse').type('Symbol');
      migration.deleteContentType('breakfast');
    }, []);

    expect(errors).to.eql([
      [],
      []
    ]);
  }));
});
