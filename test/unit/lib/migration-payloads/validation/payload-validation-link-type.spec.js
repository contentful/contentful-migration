'use strict';

const { expect } = require('chai');
const Bluebird = require('bluebird');

const migrationPayloads = require('../../../../../lib/migration-payloads/content-type');
const migrationPlan = require('../../../../../lib/migration-plan');
const migrationChunks = require('../../../../../lib/migration-chunks');
const migrationSteps = require('../../../../../lib/migration-steps');
const validatePayloads = require('../../../../../lib/migration-payloads/validation');

describe('payload validation (dependencies)', function () {
  describe('when setting a field to Link but not specifying the linkType', function () {
    it('returns an error', Bluebird.coroutine(function * () {
      const steps = yield migrationSteps(function (migration) {
        const lunch = migration.createContentType('lunch')
          .name('Lunch')
          .description('A Lunch');

        lunch.createField('mainCourse')
          .name('Main Course')
          .type('Link');
      });

      const existingCts = [];

      const chunks = migrationChunks(steps);
      const plan = migrationPlan(chunks);
      const payloads = migrationPayloads(plan, existingCts);
      const errors = validatePayloads(payloads);

      expect(errors).to.eql([
        [
          {
            type: 'InvalidPayload',
            message: 'The property "linkType" is required on the field "mainCourse" because "type" is "Link".'
          }
        ]
      ]);
    }));
  });

  describe('when setting a field to Symbol but specifying the linkType', function () {
    it('returns an error', Bluebird.coroutine(function * () {
      const steps = yield migrationSteps(function (migration) {
        const lunch = migration.createContentType('lunch')
          .name('Lunch')
          .description('A Lunch');

        lunch.createField('mainCourse')
          .name('Main Course')
          .type('Symbol')
          .linkType('Entry');
      });

      const existingCts = [];

      const chunks = migrationChunks(steps);
      const plan = migrationPlan(chunks);
      const payloads = migrationPayloads(plan, existingCts);
      const errors = validatePayloads(payloads);

      expect(errors).to.eql([
        [
          {
            type: 'InvalidPayload',
            message: 'The property "linkType" is forbidden on the field "mainCourse" because "type" is not "Link".'
          }
        ]
      ]);
    }));
  });

  describe('when setting a field to Link but specifying a wrong linkType', function () {
    it('returns an error', Bluebird.coroutine(function * () {
      const steps = yield migrationSteps(function (migration) {
        const lunch = migration.createContentType('lunch')
          .name('Lunch')
          .description('A Lunch');

        lunch.createField('mainCourse')
          .name('Main Course')
          .type('Link')
          .linkType('Hermann');
      });

      const existingCts = [];

      const chunks = migrationChunks(steps);
      const plan = migrationPlan(chunks);
      const payloads = migrationPayloads(plan, existingCts);
      const errors = validatePayloads(payloads);

      expect(errors).to.eql([
        [
          {
            type: 'InvalidPayload',
            message: 'The property "linkType" on the field "mainCourse" must be one of ["Asset", "Entry"].'
          }
        ]
      ]);
    }));
  });
});
