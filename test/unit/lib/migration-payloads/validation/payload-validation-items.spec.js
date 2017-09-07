'use strict';

const { expect } = require('chai');
const Bluebird = require('bluebird');

const migrationPayloads = require('../../../../../lib/migration-payloads');
const migrationPlan = require('../../../../../lib/migration-plan');
const migrationChunks = require('../../../../../lib/migration-chunks');
const migrationSteps = require('../../../../../lib/migration-steps');
const validatePayloads = require('../../../../../lib/migration-payloads/validation');

describe('payload validation (dependencies)', function () {
  describe('when setting a field to Array but not specifying the items', function () {
    it('returns an error', Bluebird.coroutine(function * () {
      const steps = yield migrationSteps(function (migration) {
        const lunch = migration.createContentType('lunch')
          .name('Lunch')
          .description('A Lunch');

        lunch.createField('mainCourse')
          .name('Main Course')
          .type('Array');
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
            message: 'The property "items" is required on the field "mainCourse" because "type" is "Array".'
          }
        ]
      ]);
    }));
  });

  describe('when setting a field to Symbol but specifying the items', function () {
    it('returns an error', Bluebird.coroutine(function * () {
      const steps = yield migrationSteps(function (migration) {
        const lunch = migration.createContentType('lunch')
          .name('Lunch')
          .description('A Lunch');

        lunch.createField('mainCourse')
          .name('Main Course')
          .type('Symbol')
          .items('Entry');
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
            message: 'The property "items" is forbidden on the field "mainCourse" because "type" is not "Array".'
          }
        ]
      ]);
    }));
  });

  describe('when setting a field to Array but specifying a wrong items type', function () {
    it('returns an error', Bluebird.coroutine(function * () {
      const steps = yield migrationSteps(function (migration) {
        const lunch = migration.createContentType('lunch')
          .name('Lunch')
          .description('A Lunch');

        lunch.createField('mainCourse')
          .name('Main Course')
          .type('Array')
          .items({
            type: 'Hermann'
          });
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
            message: 'The property "items.type" on the field "mainCourse" must be one of ["Symbol", "Link"].'
          }
        ]
      ]);
    }));
  });

  describe('when setting a field to Array and the type to Link but not specifying a link type', function () {
    it('returns an error', Bluebird.coroutine(function * () {
      const steps = yield migrationSteps(function (migration) {
        const lunch = migration.createContentType('lunch')
          .name('Lunch')
          .description('A Lunch');

        lunch.createField('mainCourse')
          .name('Main Course')
          .type('Array')
          .items({
            type: 'Link'
          });
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
            message: 'The property "items.linkType" is required on the field "mainCourse" because "items.type" is "Link".'
          }
        ]
      ]);
    }));
  });

  describe('when setting a field to Array and the type to Link but specifying a wrong link type', function () {
    it('returns an error', Bluebird.coroutine(function * () {
      const steps = yield migrationSteps(function (migration) {
        const lunch = migration.createContentType('lunch')
          .name('Lunch')
          .description('A Lunch');

        lunch.createField('mainCourse')
          .name('Main Course')
          .type('Array')
          .items({
            type: 'Link',
            linkType: 'Hermann'
          });
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
            message: 'The property "items.linkType" on the field "mainCourse" must be one of ["Asset", "Entry"].'
          }
        ]
      ]);
    }));
  });

  describe('when setting a field to Array and the type to Link and specifying a correct link type', function () {
    it('returns no errors', Bluebird.coroutine(function * () {
      const steps = yield migrationSteps(function (migration) {
        const lunch = migration.createContentType('lunch')
          .name('Lunch')
          .description('A Lunch');

        lunch.createField('mainCourse')
          .name('Main Course')
          .type('Array')
          .items({
            type: 'Link',
            linkType: 'Asset'
          });
      });

      const existingCts = [];

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
