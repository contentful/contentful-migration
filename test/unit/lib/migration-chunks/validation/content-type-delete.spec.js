'use strict';

const { expect } = require('chai');
const Bluebird = require('bluebird');

const migrationPlan = require('../../../../../lib/migration-chunks');
const migrationSteps = require('../../../../../lib/migration-steps');
const validatePlan = require('../../../../../lib/migration-chunks/validation');

const stripCallsite = require('../../../../helpers/strip-callsite');
const stripCallsites = (plan) => plan.map((chunk) => chunk.map(stripCallsite));

describe('content type delete validation', function () {
  describe('when deleting a content type twice', function () {
    it('returns an error', Bluebird.coroutine(function * () {
      const steps = yield migrationSteps(function up (migration) {
        migration.deleteContentType('foo');
        migration.deleteContentType('foo');
      });

      const contentTypes = [{
        sys: { id: 'foo' }
      }];

      const plan = stripCallsites(migrationPlan(steps));
      const errors = validatePlan(plan, contentTypes);

      expect(errors).to.eql([
        {
          type: 'InvalidAction',
          message: 'Content type with id "foo" cannot be deleted more than once.',
          details: {
            step: {
              'type': 'contentType/delete',
              'meta': {
                'contentTypeInstanceId': 'contentType/foo/1'
              },
              'payload': {
                'contentTypeId': 'foo'
              }
            }
          }
        }
      ]);
    }));
  });

  describe('when deleting several content types several times', function () {
    it('returns the right errors', Bluebird.coroutine(function * () {
      const steps = yield migrationSteps(function up (migration) {
        migration.deleteContentType('foo');
        migration.deleteContentType('bar');
        migration.deleteContentType('baz');
        migration.deleteContentType('foo');
        migration.deleteContentType('bar');
        migration.deleteContentType('baz');
        migration.deleteContentType('foo');
        migration.deleteContentType('bar');
        migration.deleteContentType('baz');
      });

      const contentTypes = [
        { sys: { id: 'foo' } },
        { sys: { id: 'bar' } },
        { sys: { id: 'baz' } }
      ];

      const plan = stripCallsites(migrationPlan(steps));
      const errors = validatePlan(plan, contentTypes);

      expect(errors).to.eql([
        {
          type: 'InvalidAction',
          message: 'Content type with id "foo" cannot be deleted more than once.',
          details: {
            step: {
              'type': 'contentType/delete',
              'meta': {
                'contentTypeInstanceId': 'contentType/foo/1'
              },
              'payload': {
                'contentTypeId': 'foo'
              }
            }
          }
        },
        {
          type: 'InvalidAction',
          message: 'Content type with id "foo" cannot be deleted more than once.',
          details: {
            step: {
              'type': 'contentType/delete',
              'meta': {
                'contentTypeInstanceId': 'contentType/foo/2'
              },
              'payload': {
                'contentTypeId': 'foo'
              }
            }
          }
        },
        {
          type: 'InvalidAction',
          message: 'Content type with id "bar" cannot be deleted more than once.',
          details: {
            step: {
              'type': 'contentType/delete',
              'meta': {
                'contentTypeInstanceId': 'contentType/bar/1'
              },
              'payload': {
                'contentTypeId': 'bar'
              }
            }
          }
        },
        {
          type: 'InvalidAction',
          message: 'Content type with id "bar" cannot be deleted more than once.',
          details: {
            step: {
              'type': 'contentType/delete',
              'meta': {
                'contentTypeInstanceId': 'contentType/bar/2'
              },
              'payload': {
                'contentTypeId': 'bar'
              }
            }
          }
        },
        {
          type: 'InvalidAction',
          message: 'Content type with id "baz" cannot be deleted more than once.',
          details: {
            step: {
              'type': 'contentType/delete',
              'meta': {
                'contentTypeInstanceId': 'contentType/baz/1'
              },
              'payload': {
                'contentTypeId': 'baz'
              }
            }
          }
        },
        {
          type: 'InvalidAction',
          message: 'Content type with id "baz" cannot be deleted more than once.',
          details: {
            step: {
              'type': 'contentType/delete',
              'meta': {
                'contentTypeInstanceId': 'contentType/baz/2'
              },
              'payload': {
                'contentTypeId': 'baz'
              }
            }
          }
        }
      ]);
    }));
  });

  describe('when deleting a content type that does not exist', function () {
    it('returns an error', Bluebird.coroutine(function * () {
      const steps = yield migrationSteps(function up (migration) {
        migration.deleteContentType('baz');
      });

      const contentTypes = [{
        sys: { id: 'foo' }
      }, {
        sys: { id: 'bar' }
      }];

      const plan = stripCallsites(migrationPlan(steps));
      const errors = validatePlan(plan, contentTypes);

      expect(errors).to.eql([
        {
          type: 'InvalidAction',
          message: 'You cannot delete content type "baz" because it does not exist.',
          details: {
            step: {
              'type': 'contentType/delete',
              'meta': {
                'contentTypeInstanceId': 'contentType/baz/0'
              },
              'payload': {
                'contentTypeId': 'baz'
              }
            }
          }
        }
      ]);
    }));
  });
});
