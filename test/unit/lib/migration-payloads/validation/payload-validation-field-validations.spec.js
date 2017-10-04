'use strict';

const { expect } = require('chai');
const Bluebird = require('bluebird');

const migrationPayloads = require('../../../../../lib/migration-payloads');
const migrationPlan = require('../../../../../lib/migration-plan');
const migrationChunks = require('../../../../../lib/migration-chunks');
const migrationSteps = require('../../../../../lib/migration-steps');
const validatePayloads = require('../../../../../lib/migration-payloads/validation');

describe('payload validation', function () {
  describe('fieldValidations', function () {
    it('errors on duplicate validation', Bluebird.coroutine(function * () {
      const steps = yield migrationSteps(function up (migration) {
        const person = migration.createContentType('person')
          .name('Person')
          .description('A Person');

        person.createField('fullName')
          .name('Full Name')
          .type('Symbol')
          .validations([{ unique: true }, { unique: true }]);
      });
      const chunks = migrationChunks(steps);
      const plan = migrationPlan(chunks);
      const payloads = migrationPayloads(plan);
      const errors = validatePayloads(payloads);

      expect(errors).to.eql([
        [
          {
            type: 'InvalidPayload',
            message: `A field can't have duplicates in the validations array. Duplicate: "{"unique":true}"`
          }
        ]
      ]);
    }));

    it('errors on unknown validations key', Bluebird.coroutine(function * () {
      const steps = yield migrationSteps(function up (migration) {
        const person = migration.createContentType('person')
          .name('Person')
          .description('A Person');

        person.createField('fullName')
          .name('Full Name')
          .type('Symbol')
          .validations([{ unique: true }, { size: { min: 5, max: 10 } }, { foo: true }]);
      });
      const chunks = migrationChunks(steps);
      const plan = migrationPlan(chunks);
      const payloads = migrationPayloads(plan);
      const errors = validatePayloads(payloads);

      expect(errors).to.eql([
        [
          {
            type: 'InvalidPayload',
            message: `A field can't have "foo" as a validation.`
          }
        ]
      ]);
    }));

    it('errors with correct invalid key on unknown validations key', Bluebird.coroutine(function * () {
      const steps = yield migrationSteps(function up (migration) {
        const person = migration.createContentType('person')
          .name('Person')
          .description('A Person');

        person.createField('fullName')
          .name('Full Name')
          .type('Symbol')
          .validations([{ unique: true }, { size: { min: 5, max: 10 }, somethingUnknown: 'foo', message: 'error' }]);
      });
      const chunks = migrationChunks(steps);
      const plan = migrationPlan(chunks);
      const payloads = migrationPayloads(plan);
      const errors = validatePayloads(payloads);

      expect(errors).to.eql([
        [
          {
            type: 'InvalidPayload',
            message: `A field can't have the combination "size", "somethingUnknown" and "message" as a validation.`
          }
        ]
      ]);
    }));

    it('errors on wrong validation parameter (object)', Bluebird.coroutine(function * () {
      const steps = yield migrationSteps(function up (migration) {
        const person = migration.createContentType('person')
          .name('Person')
          .description('A Person');

        person.createField('fullName')
          .name('Full Name')
          .type('Symbol')
          .validations([{ size: 2 }]);
      });
      const chunks = migrationChunks(steps);
      const plan = migrationPlan(chunks);
      const payloads = migrationPayloads(plan);
      const errors = validatePayloads(payloads);

      expect(errors).to.eql([
        [
          {
            type: 'InvalidPayload',
            message: `"size" validation expected to be "object", but got "number"`
          }
        ]
      ]);
    }));

    it('errors on wrong validation parameter (primitive)', Bluebird.coroutine(function * () {
      const steps = yield migrationSteps(function up (migration) {
        const person = migration.createContentType('person')
          .name('Person')
          .description('A Person');

        person.createField('fullName')
          .name('Full Name')
          .type('Symbol')
          .validations([{ unique: 'nope' }]);
      });
      const chunks = migrationChunks(steps);
      const plan = migrationPlan(chunks);
      const payloads = migrationPayloads(plan);
      const errors = validatePayloads(payloads);

      expect(errors).to.eql([
        [
          {
            type: 'InvalidPayload',
            message: `"unique" validation expected to be "boolean", but got "string"`
          }
        ]
      ]);
    }));
  });
});
