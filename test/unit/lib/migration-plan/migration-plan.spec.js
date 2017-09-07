'use strict';

const { expect } = require('chai');
const Bluebird = require('bluebird');

const migrationPlan = require('../../../../lib/migration-plan');
const migrationChunks = require('../../../../lib/migration-chunks');
const migrationSteps = require('../../../../lib/migration-steps');

const stripCallsite = require('../../../helpers/strip-callsite');
const stripCallsites = (plan) => plan.map((chunk) => chunk.map(stripCallsite));

describe('migration-plan', function () {
  describe('when deleting a field', function () {
    it('includes it in the plan', Bluebird.coroutine(function * () {
      const steps = yield migrationSteps(function up (migration) {
        const person = migration.editContentType('person');
        person.createField('fullName', {
          name: 'Full Name',
          type: 'Symbol'
        });

        person.deleteField('favoriteColor');

        person.editField('lastName', {
          name: 'New Last Name'
        });
      });

      const chunks = stripCallsites(migrationChunks(steps));
      const plan = migrationPlan(chunks);

      expect(plan).to.eql([
        [{
          type: 'field/create',
          meta: {
            contentTypeInstanceId: 'contentType/person/0',
            fieldInstanceId: 'fields/fullName/0'
          },
          payload: {
            contentTypeId: 'person',
            fieldId: 'fullName'
          }
        }, {
          type: 'field/update',
          meta: {
            contentTypeInstanceId: 'contentType/person/0',
            fieldInstanceId: 'fields/fullName/0'
          },
          payload: {
            contentTypeId: 'person',
            fieldId: 'fullName',
            props: {
              name: 'Full Name'
            }
          }
        }, {
          type: 'field/update',
          meta: {
            contentTypeInstanceId: 'contentType/person/0',
            fieldInstanceId: 'fields/fullName/0'
          },
          payload: {
            contentTypeId: 'person',
            fieldId: 'fullName',
            props: {
              type: 'Symbol'
            }
          }
        }], [{
          type: 'field/update',
          meta: {
            contentTypeInstanceId: 'contentType/person/0',
            fieldInstanceId: 'fields/favoriteColor/0'
          },
          payload: {
            contentTypeId: 'person',
            fieldId: 'favoriteColor',
            props: {
              omitted: true
            }
          }
        }],
        [{
          type: 'field/update',
          meta: {
            contentTypeInstanceId: 'contentType/person/0',
            fieldInstanceId: 'fields/favoriteColor/0'
          },
          payload: {
            contentTypeId: 'person',
            fieldId: 'favoriteColor',
            props: {
              deleted: true
            }
          }
        }],
        [{
          type: 'field/update',
          meta: {
            contentTypeInstanceId: 'contentType/person/0',
            fieldInstanceId: 'fields/lastName/0'
          },
          payload: {
            contentTypeId: 'person',
            fieldId: 'lastName',
            props: {
              name: 'New Last Name'
            }
          }
        }]
      ]);
    }));
  });
});
