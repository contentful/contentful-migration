'use strict';

const { expect } = require('chai');
const Bluebird = require('bluebird');

const migrationPayloads = require('../../../../../lib/migration-payloads/content-type');
const migrationPlan = require('../../../../../lib/migration-plan');
const migrationChunks = require('../../../../../lib/migration-chunks');
const migrationSteps = require('../../../../../lib/migration-steps');
const validatePayloads = require('../../../../../lib/migration-payloads/validation');

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
