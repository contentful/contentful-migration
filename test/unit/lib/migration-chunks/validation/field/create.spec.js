'use strict';

const { expect } = require('chai');
const Bluebird = require('bluebird');

const migrationPlan = require('../../../../../../src/lib/migration-chunks');
const migrationSteps = require('../../../../../../src/lib/migration-steps');
const validatePlan = require('../../../../../../src/lib/migration-chunks/validation');

const stripCallsite = require('../../../../../helpers/strip-callsite');
const stripCallsites = (plan) => plan.map((chunk) => chunk.map(stripCallsite));

describe('field creation plan validation', function () {
  describe('when creating a field twice in one chunk', function () {
    it('returns an error', Bluebird.coroutine(function * () {
      const steps = yield migrationSteps(function up (migration) {
        const person = migration.createContentType('person', {
          description: 'A content type for a person',
          name: 'foo'
        });

        person.createField('name').type('Symbol');
        person.createField('name').type('Decimal');
        person.createField('name').type('Array');
      });

      const contentTypes = [];

      const plan = stripCallsites(migrationPlan(steps));
      const errors = validatePlan(plan, contentTypes);

      expect(errors).to.eql([
        {
          type: 'InvalidAction',
          message: 'Field with id "name" cannot be created more than once.',
          details: {
            step: {
              'type': 'field/create',
              'meta': {
                'contentTypeInstanceId': 'contentType/person/0',
                'fieldInstanceId': 'fields/name/1'
              },
              'payload': {
                'contentTypeId': 'person',
                'fieldId': 'name'
              }
            }
          }
        },
        {
          type: 'InvalidAction',
          message: 'Field with id "name" cannot be created more than once.',
          details: {
            step: {
              'type': 'field/create',
              'meta': {
                'contentTypeInstanceId': 'contentType/person/0',
                'fieldInstanceId': 'fields/name/2'
              },
              'payload': {
                'contentTypeId': 'person',
                'fieldId': 'name'
              }
            }
          }
        },
        {
          type: 'InvalidAction',
          message: 'You are setting the property "type" on field "name" more than once. Please set it only once.',
          details: {
            step: {
              'type': 'field/update',
              'meta': {
                'contentTypeInstanceId': 'contentType/person/0',
                'fieldInstanceId': 'fields/name/1'
              },
              'payload': {
                'contentTypeId': 'person',
                'fieldId': 'name',
                'props': {
                  'type': 'Decimal'
                }
              }
            }
          }
        },
        {
          type: 'InvalidAction',
          message: 'You are setting the property "type" on field "name" more than once. Please set it only once.',
          details: {
            step: {
              'type': 'field/update',
              'meta': {
                'contentTypeInstanceId': 'contentType/person/0',
                'fieldInstanceId': 'fields/name/2'
              },
              'payload': {
                'contentTypeId': 'person',
                'fieldId': 'name',
                'props': {
                  'type': 'Array'
                }
              }
            }
          }
        }
      ]);
    }));
  });

  describe('when creating a field three times in two chunks', function () {
    it('returns an error', Bluebird.coroutine(function * () {
      const steps = yield migrationSteps(function up (migration) {
        const person = migration.createContentType('person', {
          description: 'A content type for a person',
          name: 'foo'
        });

        person.createField('name').type('Symbol');
        person.createField('name').type('Decimal');

        migration.createContentType('animal').name('animal').description('An animal');

        person.createField('name').type('Array');
      });

      const contentTypes = [];

      const plan = stripCallsites(migrationPlan(steps));
      const errors = validatePlan(plan, contentTypes);

      expect(errors).to.eql([
        {
          type: 'InvalidAction',
          message: 'Field with id "name" cannot be created more than once.',
          details: {
            step: {
              'type': 'field/create',
              'meta': {
                'contentTypeInstanceId': 'contentType/person/0',
                'fieldInstanceId': 'fields/name/1'
              },
              'payload': {
                'contentTypeId': 'person',
                'fieldId': 'name'
              }
            }
          }
        },
        {
          type: 'InvalidAction',
          message: 'Field with id "name" cannot be created more than once.',
          details: {
            step: {
              'type': 'field/create',
              'meta': {
                'contentTypeInstanceId': 'contentType/person/0',
                'fieldInstanceId': 'fields/name/2'
              },
              'payload': {
                'contentTypeId': 'person',
                'fieldId': 'name'
              }
            }
          }
        },
        {
          type: 'InvalidAction',
          message: 'You are setting the property "type" on field "name" more than once. Please set it only once.',
          details: {
            step: {
              'type': 'field/update',
              'meta': {
                'contentTypeInstanceId': 'contentType/person/0',
                'fieldInstanceId': 'fields/name/1'
              },
              'payload': {
                'contentTypeId': 'person',
                'fieldId': 'name',
                'props': {
                  'type': 'Decimal'
                }
              }
            }
          }
        }
      ]);
    }));
  });
  describe('when creating a field that already exists', function () {
    it('returns an error', Bluebird.coroutine(function * () {
      const steps = yield migrationSteps(function up (migration) {
        const person = migration.editContentType('person');

        person.createField('name').type('Symbol');
      });

      const contentTypes = [{
        sys: { id: 'person' },
        fields: [{ id: 'name' }]
      }];

      const chunks = stripCallsites(migrationPlan(steps, contentTypes));
      const errors = validatePlan(chunks, contentTypes);

      expect(errors).to.eql([
        {
          type: 'InvalidAction',
          message: 'Field with id "name" cannot be created more than once.',
          details: {
            step: {
              'type': 'field/create',
              'meta': {
                'contentTypeInstanceId': 'contentType/person/0',
                'fieldInstanceId': 'fields/name/0'
              },
              'payload': {
                'contentTypeId': 'person',
                'fieldId': 'name'
              }
            }
          }
        }]);
    }));
  });

  describe('when creating a field on a CT that does not exist', function () {
    it('returns an error', Bluebird.coroutine(function * () {
      const steps = yield migrationSteps(function up (migration) {
        const person = migration.editContentType('person');

        person.createField('name');
      });

      const contentTypes = [];

      const chunks = stripCallsites(migrationPlan(steps, contentTypes));
      const errors = validatePlan(chunks, contentTypes);

      expect(errors).to.eql([
        {
          type: 'InvalidAction',
          message: 'You cannot create a field with id "name" on content type "person" because it does not exist.',
          details: {
            step: {
              'type': 'field/create',
              'meta': {
                'contentTypeInstanceId': 'contentType/person/0',
                'fieldInstanceId': 'fields/name/0'
              },
              'payload': {
                'contentTypeId': 'person',
                'fieldId': 'name'
              }
            }
          }
        }]);
    }));
  });
});
