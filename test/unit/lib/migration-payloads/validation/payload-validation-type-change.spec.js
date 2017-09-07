'use strict';

const { expect } = require('chai');
const Bluebird = require('bluebird');

const migrationPayloads = require('../../../../../lib/migration-payloads');
const migrationPlan = require('../../../../../lib/migration-plan');
const migrationChunks = require('../../../../../lib/migration-chunks');
const migrationSteps = require('../../../../../lib/migration-steps');
const validatePayloads = require('../../../../../lib/migration-payloads/validation');

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
