'use strict';

const { expect } = require('chai');
const Bluebird = require('bluebird');

const migrationPayloads = require('../../../../../lib/migration-payloads/content-type');
const migrationPlan = require('../../../../../lib/migration-plan');
const migrationChunks = require('../../../../../lib/migration-chunks');
const migrationSteps = require('../../../../../lib/migration-steps');
const validatePayloads = require('../../../../../lib/migration-payloads/validation');

describe('payload validation', function () {
  describe('when missing required properties', function () {
    it('returns the errors', Bluebird.coroutine(function * () {
      const steps = yield migrationSteps(function (migration) {
        const lunch = migration.createContentType('lunch');

        lunch.createField('menu');
      });
      const chunks = migrationChunks(steps);
      const plan = migrationPlan(chunks);
      const payloads = migrationPayloads(plan);
      const errors = validatePayloads(payloads);

      expect(errors).to.eql([
        [
          {
            type: 'InvalidPayload',
            message: 'The property "name" is required on a content type.'
          },
          {
            type: 'InvalidPayload',
            message: 'The property "name" is required on the field "menu".'
          },
          {
            type: 'InvalidPayload',
            message: 'The property "type" is required on the field "menu".'
          }
        ]
      ]);
    }));
  });

  describe('when adding more than 50 fields', function () {
    it('returns the errors', Bluebird.coroutine(function * () {
      const steps = yield migrationSteps(function (migration) {
        const lunch = migration.createContentType('lunch');
        lunch.name('A lunch');

        for (let i = 0; i < 51; i++) {
          lunch.createField(`menu${i}`)
            .type('Symbol')
            .name(`menu${i}`);
        }
      });
      const chunks = migrationChunks(steps);
      const plan = migrationPlan(chunks);
      const payloads = migrationPayloads(plan);
      const errors = validatePayloads(payloads);
      expect(errors).to.eql([
        [
          {
            type: 'InvalidPayload',
            message: 'Content type "lunch" cannot have more than 50 fields.'
          }
        ]
      ]);
    }));
  });

  describe('when using a valid type', function () {
    it('returns no error', Bluebird.coroutine(function * () {
      // Link and Array are excluded
      // since they need extra properties
      // and are tested explicitly in another test
      const types = [
        'Symbol',
        'Text',
        'Integer',
        'Number',
        'Date',
        'Boolean',
        'Object',
        'Location'
      ];

      for (const type of types) {
        const steps = yield migrationSteps(function (migration) {
          const lunch = migration.createContentType('lunch');
          lunch.name('A lunch');

          lunch.createField(type)
            .type(type)
            .name(type);
        });
        const chunks = migrationChunks(steps);
        const plan = migrationPlan(chunks);
        const payloads = migrationPayloads(plan);
        const errors = validatePayloads(payloads);
        expect(errors).to.eql([[]]);
      }
    }));
  });

  describe('when using an invalid type', function () {
    it('returns the errors', Bluebird.coroutine(function * () {
      const steps = yield migrationSteps(function (migration) {
        const lunch = migration.createContentType('lunch');
        lunch.name('A lunch');

        lunch.createField('invalid')
          .type('Invalid')
          .name('invalid');
      });
      const chunks = migrationChunks(steps);
      const plan = migrationPlan(chunks);
      const payloads = migrationPayloads(plan);
      const errors = validatePayloads(payloads);
      const valid = `["Symbol", "Text", "Integer", "Number", "Date", "Boolean", "Object", "Link", "Array", "Location"]`;
      expect(errors).to.eql([
        [
          {
            type: 'InvalidPayload',
            message: `The property "type" on the field "invalid" must be one of ${valid}.`
          }
        ]
      ]);
    }));
  });
});
