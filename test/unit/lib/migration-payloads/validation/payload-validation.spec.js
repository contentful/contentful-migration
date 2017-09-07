'use strict';

const { expect } = require('chai');
const Bluebird = require('bluebird');

const migrationPayloads = require('../../../../../lib/migration-payloads');
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
});
