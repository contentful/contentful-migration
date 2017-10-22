'use strict';

const { expect } = require('chai');
const Bluebird = require('bluebird');

const validatePayloads = require('./validate-payloads');

describe('payload validation (type change)', function () {
  describe('when changing the type of a field', function () {
    it('returns an error', Bluebird.coroutine(function * () {
      const existingCts = [{
        sys: { id: 'lunch' },
        name: 'Lunch',
        fields: [
          { id: 'mainCourse', name: 'Main Course', type: 'Symbol' }
        ]
      }];

      const errors = yield validatePayloads(function (migration) {
        const lunch = migration.editContentType('lunch');

        lunch.editField('mainCourse').type('Date');
      }, existingCts);

      expect(errors).to.eql([
        [
          {
            type: 'InvalidAction',
            message: 'Cannot change the type of field "mainCourse" on content type "lunch" from "Symbol" to "Date". Field types cannot be changed.'
          }
        ]
      ]);
    }));
  });
});
