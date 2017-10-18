'use strict';

const { expect } = require('chai');
const Bluebird = require('bluebird');

const migrationPayloads = require('../../../../../src/lib/migration-payloads');
const migrationPlan = require('../../../../../src/lib/migration-plan');
const migrationChunks = require('../../../../../src/lib/migration-chunks');
const migrationSteps = require('../../../../../src/lib/migration-steps');
const validatePayloads = require('../../../../../src/lib/migration-payloads/validation');

describe('payload validation (deletion)', function () {
  describe('when setting a field to deleted that is not omitted', function () {
    it('returns an error', Bluebird.coroutine(function * () {
      const steps = yield migrationSteps(function (migration) {
        const lunch = migration.editContentType('lunch');

        lunch.editField('mainCourse').deleted(true);
      });

      const existingCts = [{
        sys: { id: 'lunch' },
        name: 'Lunch',
        fields: [
          { id: 'mainCourse', name: 'Main Course', type: 'Symbol' }
        ]
      }];

      const chunks = migrationChunks(steps);
      const plan = migrationPlan(chunks);
      const payloads = migrationPayloads(plan, existingCts);
      const errors = validatePayloads(payloads);
      expect(errors).to.eql([
        [
          {
            type: 'InvalidAction',
            message: 'Cannot set "deleted" to "true" on field "mainCourse" on content type "lunch". It needs to be omitted first. Consider using "deleteField".'
          }
        ]
      ]);
    }));
  });

  describe('when setting a field to deleted and omitted in one step', function () {
    it('returns an error', Bluebird.coroutine(function * () {
      const steps = yield migrationSteps(function (migration) {
        const lunch = migration.editContentType('lunch');

        lunch.editField('mainCourse').deleted(true).omitted(true);
      });

      const existingCts = [{
        sys: { id: 'lunch' },
        name: 'Lunch',
        fields: [
          { id: 'mainCourse', name: 'Main Course', type: 'Symbol' }
        ]
      }];

      const chunks = migrationChunks(steps);
      const plan = migrationPlan(chunks);
      const payloads = migrationPayloads(plan, existingCts);
      const errors = validatePayloads(payloads);
      expect(errors).to.eql([
        [
          {
            type: 'InvalidAction',
            message: 'Cannot set "deleted" to "true" on field "mainCourse" on content type "lunch". It needs to be omitted first. Consider using "deleteField".'
          }
        ]
      ]);
    }));
  });

  describe('when setting a field to omitted and then deleted', function () {
    it('returns an error', Bluebird.coroutine(function * () {
      const steps = yield migrationSteps(function (migration) {
        const lunch = migration.editContentType('lunch');

        lunch.editField('mainCourse').deleted(true);
      });

      const existingCts = [{
        sys: { id: 'lunch' },
        name: 'Lunch',
        fields: [
          { id: 'mainCourse', name: 'Main Course', type: 'Symbol', omitted: true }
        ]
      }];

      const chunks = migrationChunks(steps);
      const plan = migrationPlan(chunks);
      const payloads = migrationPayloads(plan, existingCts);
      const errors = validatePayloads(payloads);
      expect(errors).to.eql([
        []
      ]);
    }));
  });

  describe('when deleting and then recreating a field', function () {
    it('does not return any error', Bluebird.coroutine(function * () {
      const steps = yield migrationSteps(function up (migration) {
        const dog = migration.editContentType('dog');

        dog.deleteField('owner');

        dog.createField('owner')
          .type('Symbol')
          .name('Owner name')
          .required(false);
      });

      const existingCts = [{
        sys: { id: 'dog', version: 3 },
        name: 'dog',
        fields: [
          { id: 'owner', name: 'owner', type: 'Symbol' }
        ]
      }];

      const chunks = migrationChunks(steps);
      const plan = migrationPlan(chunks);
      const payloads = migrationPayloads(plan, existingCts);
      const errors = validatePayloads(payloads);
      expect(errors).to.eql([
        [], [], []
      ]);
    }));
  });
});
