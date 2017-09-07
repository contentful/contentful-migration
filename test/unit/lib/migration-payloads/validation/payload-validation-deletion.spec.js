'use strict';

const { expect } = require('chai');
const Bluebird = require('bluebird');

const migrationPayloads = require('../../../../../lib/migration-payloads');
const migrationPlan = require('../../../../../lib/migration-plan');
const migrationChunks = require('../../../../../lib/migration-chunks');
const migrationSteps = require('../../../../../lib/migration-steps');
const validatePayloads = require('../../../../../lib/migration-payloads/validation');

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
});
