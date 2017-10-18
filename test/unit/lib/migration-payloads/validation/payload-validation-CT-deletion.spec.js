'use strict';

const { expect } = require('chai');
const Bluebird = require('bluebird');

const migrationPayloads = require('../../../../../src/lib/migration-payloads');
const migrationPlan = require('../../../../../src/lib/migration-plan');
const migrationChunks = require('../../../../../src/lib/migration-chunks');
const migrationSteps = require('../../../../../src/lib/migration-steps');
const validatePayloads = require('../../../../../src/lib/migration-payloads/validation');

describe('payload validation (content type deletion)', function () {
  it('skips ct delete payloads', Bluebird.coroutine(function * () {
    const steps = yield migrationSteps(function (migration) {
      const lunch = migration.createContentType('lunch').name('lunch');
      lunch.createField('mainCourse').name('mainCourse').type('Symbol');
      migration.deleteContentType('breakfast');
    });
    const chunks = migrationChunks(steps);
    const plan = migrationPlan(chunks);
    const payloads = migrationPayloads(plan);
    const errors = validatePayloads(payloads);
    expect(errors).to.eql([
      [],
      []
    ]);
  }));
});
