'use strict';

const { expect } = require('chai');
const Bluebird = require('bluebird');

const validatePayloads = require('./validate-payloads');

describe('payload validation (display field)', function () {
  describe('when setting a display field that does not (yet) exist', function () {
    it('returns an error', Bluebird.coroutine(function * () {
      const errors = yield validatePayloads(function (migration) {
        const lunch = migration.createContentType('lunch').name('lunch');
        lunch.createField('mainCourse').name('mainCourse').type('Symbol');

        lunch.deleteField('mainCourse');

        lunch.displayField('dessert');
        migration.createContentType('dinner').name('dinner');
        lunch.createField('dessert').name('dessert').type('Symbol');
      }, []);

      expect(errors).to.eql([
        [],
        [],
        [],
        [
          {
            type: 'InvalidAction',
            message: 'Cannot set "dessert" as displayField on content type "lunch" because it does not exist'
          }
        ],
        [],
        []
      ]);
    }));
  });

  describe('when setting a display field that does exist', function () {
    it('does not return any errors', Bluebird.coroutine(function * () {
      const errors = yield validatePayloads(function (migration) {
        const lunch = migration.createContentType('lunch').name('lunch');
        lunch.createField('dessert').name('dessert').type('Symbol');
        lunch.createField('mainCourse').name('mainCourse').type('Symbol');
        lunch.displayField('dessert');
      }, []);

      expect(errors).to.eql([
        []
      ]);
    }));
  });

  describe('when deleting a field that is set as the display field', function () {
    it('returns an error', Bluebird.coroutine(function * () {
      const errors = yield validatePayloads(function (migration) {
        const lunch = migration.createContentType('lunch').name('lunch');
        lunch.createField('mainCourse').name('mainCourse').type('Symbol');
        lunch.createField('dessert').name('dessert').type('Symbol');
        lunch.displayField('dessert');

        migration.createContentType('dinner').name('dinner');

        lunch.deleteField('dessert');
      }, []);

      expect(errors).to.eql([
        [],
        [],
        [],
        [
          {
            type: 'InvalidAction',
            message: 'Cannot delete field "dessert" on content type "lunch" because it is set as the display field'
          }
        ]
      ]);
    }));
  });
});
