'use strict';

const { expect } = require('chai');
const Bluebird = require('bluebird');

const migrationPayloads = require('../../../../../src/lib/migration-payloads');
const migrationPlan = require('../../../../../src/lib/migration-plan');
const migrationChunks = require('../../../../../src/lib/migration-chunks');
const migrationSteps = require('../../../../../src/lib/migration-steps').migration;
const validatePayloads = require('../../../../../src/lib/migration-payloads/validation').default;

describe('payload validation (type change)', function () {
  describe('when changing the type of a field', function () {
    it('returns an error', Bluebird.coroutine(function * () {
      const steps = yield migrationSteps(function (migration) {
        const lunch = migration.editContentType('lunch');

        lunch.editField('mainCourse').type('Date');
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
            message: 'Cannot change the type of field "mainCourse" on content type "lunch" from "Symbol" to "Date". Field types cannot be changed.'
          }
        ]
      ]);
    }));
  });
});
