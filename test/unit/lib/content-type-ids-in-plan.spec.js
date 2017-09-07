'use strict';

const Bluebird = require('bluebird');
const { expect } = require('chai');

const migrationPlan = require('../../../lib/migration-chunks');
const migrationSteps = require('../../../lib/migration-steps');
const contentTypeIdsInPlan = require('../../../lib/content-type-ids-in-plan');

const co = Bluebird.coroutine;

describe('contentTypeIdsInPlan', function () {
  it('returns a list of all the Content Type ids on the plan', co(function * () {
    const steps = yield migrationSteps(function up (migration) {
      const person = migration.createContentType('person', {
        name: 'bar',
        description: 'A content type for a person'
      });

      person.createField('name', {
        name: 'Name',
        type: 'Symbol'
      });

      migration.editContentType('dog', {
        name: 'Doggo',
        description: 'A shepard dog'
      });
    });

    const plan = migrationPlan(steps);

    const { updated, created } = contentTypeIdsInPlan(plan);

    expect(updated).to.eql(['dog']);
    expect(created).to.eql(['person']);
  }));
});
