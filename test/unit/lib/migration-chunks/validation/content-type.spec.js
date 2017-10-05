'use strict';

const { expect } = require('chai');
const Bluebird = require('bluebird');

const migrationPlan = require('../../../../../lib/migration-chunks');
const migrationSteps = require('../../../../../lib/migration-steps');
const validatePlan = require('../../../../../lib/migration-chunks/validation');

const stripCallsite = require('../../../../helpers/strip-callsite');
const stripCallsites = (plan) => plan.map((chunk) => chunk.map(stripCallsite));

describe('content type plan validation', function () {
  describe('when creating a content type twice', function () {
    it('returns an error', Bluebird.coroutine(function * () {
      const steps = yield migrationSteps(function up (migration) {
        migration.createContentType('person', {
          description: 'A content type for a person',
          name: 'foo'
        });

        migration.editContentType('somethingElse', {
          description: 'bar'
        });

        migration.createContentType('person', {
          name: 'the new name'
        });

        migration.createContentType('person', {
          name: 'once again'
        });
      });

      const contentTypes = [{
        sys: { id: 'somethingElse' }
      }];

      const plan = stripCallsites(migrationPlan(steps));
      const errors = validatePlan(plan, contentTypes);

      expect(errors).to.eql([
        {
          type: 'InvalidAction',
          message: 'Content type with id "person" cannot be created more than once.',
          details: {
            step: {
              'type': 'contentType/create',
              'meta': {
                'contentTypeInstanceId': 'contentType/person/1'
              },
              'payload': {
                'contentTypeId': 'person'
              }
            }
          }
        },
        {
          type: 'InvalidAction',
          message: 'Content type with id "person" cannot be created more than once.',
          details: {
            step: {
              'type': 'contentType/create',
              'meta': {
                'contentTypeInstanceId': 'contentType/person/2'
              },
              'payload': {
                'contentTypeId': 'person'
              }
            }
          }
        }
      ]);
    }));
  });

  describe('when editing a content type before creating it', function () {
    it('returns an error', Bluebird.coroutine(function * () {
      const steps = yield migrationSteps(function up (migration) {
        migration.editContentType('person', {
          description: 'A content type for a person',
          name: 'foo'
        });

        migration.editContentType('somethingElse', {
          description: 'bar'
        });

        migration.createContentType('person', {
          name: 'the new name'
        });
      });

      const contentTypes = [{
        sys: { id: 'somethingElse' }
      }];

      const plan = stripCallsites(migrationPlan(steps));
      const errors = validatePlan(plan, contentTypes);

      expect(errors).to.eql([
        {
          type: 'InvalidAction',
          message: 'You cannot set a property on content type "person" because it has not yet been created.',
          details: {
            step: {
              'type': 'contentType/update',
              'meta': {
                'contentTypeInstanceId': 'contentType/person/0'
              },
              'payload': {
                'contentTypeId': 'person',
                'props': {
                  'description': 'A content type for a person'
                }
              }
            }
          }
        },
        {
          type: 'InvalidAction',
          message: 'You cannot set a property on content type "person" because it has not yet been created.',
          details: {
            step: {
              'type': 'contentType/update',
              'meta': {
                'contentTypeInstanceId': 'contentType/person/0'
              },
              'payload': {
                'contentTypeId': 'person',
                'props': {
                  'name': 'foo'
                }
              }
            }
          }
        }
      ]);
    }));
  });

  describe('when editing a content type that already exists and creating it again later on', function () {
    it('returns an error', Bluebird.coroutine(function * () {
      const steps = yield migrationSteps(function up (migration) {
        migration.editContentType('person', {
          description: 'A content type for a person',
          name: 'foo'
        });

        migration.editContentType('somethingElse', {
          description: 'bar'
        });

        migration.createContentType('person', {
          name: 'the new name'
        });
      });

      const contentTypes = [{
        sys: { id: 'somethingElse' }
      }, {
        sys: { id: 'person' }
      }];

      const plan = stripCallsites(migrationPlan(steps));
      const errors = validatePlan(plan, contentTypes);

      expect(errors).to.eql([
        {
          type: 'InvalidAction',
          message: 'Content type with id "person" already exists.',
          details: {
            step: {
              'type': 'contentType/create',
              'meta': {
                'contentTypeInstanceId': 'contentType/person/1'
              },
              'payload': {
                'contentTypeId': 'person'
              }
            }
          }
        }
      ]);
    }));
  });

  describe('when creating a content type that already exists', function () {
    it('returns an error', Bluebird.coroutine(function * () {
      const steps = yield migrationSteps(function up (migration) {
        migration.createContentType('person', {
          description: 'A content type for a person',
          name: 'foo'
        });

        migration.editContentType('somethingElse', {
          description: 'bar'
        });

        migration.createContentType('person', {
          name: 'the new name'
        });

        migration.createContentType('person', {
          name: 'once again'
        });
      });

      const contentTypes = [{
        sys: { id: 'somethingElse' }
      }, {
        sys: { id: 'person' }
      }];

      const plan = stripCallsites(migrationPlan(steps));
      const errors = validatePlan(plan, contentTypes);

      expect(errors).to.eql([
        {
          type: 'InvalidAction',
          message: 'Content type with id "person" already exists.',
          details: {
            step: {
              'type': 'contentType/create',
              'meta': {
                'contentTypeInstanceId': 'contentType/person/0'
              },
              'payload': {
                'contentTypeId': 'person'
              }
            }
          }
        },
        {
          type: 'InvalidAction',
          message: 'Content type with id "person" already exists.',
          details: {
            step: {
              'type': 'contentType/create',
              'meta': {
                'contentTypeInstanceId': 'contentType/person/1'
              },
              'payload': {
                'contentTypeId': 'person'
              }
            }
          }
        },
        {
          type: 'InvalidAction',
          message: 'Content type with id "person" already exists.',
          details: {
            step: {
              'type': 'contentType/create',
              'meta': {
                'contentTypeInstanceId': 'contentType/person/2'
              },
              'payload': {
                'contentTypeId': 'person'
              }
            }
          }
        }
      ]);
    }));
  });

  describe('when editing a content type that does not exist', function () {
    it('returns an error', Bluebird.coroutine(function * () {
      const steps = yield migrationSteps(function up (migration) {
        migration.editContentType('person', {
          description: 'A content type for a person',
          name: 'foo'
        });

        migration.editContentType('somethingElse', {
          description: 'bar'
        });

        migration.editContentType('person', {
          name: 'the new name'
        });
      });

      const contentTypes = [{
        sys: { id: 'somethingElse' }
      }];

      const plan = stripCallsites(migrationPlan(steps));
      const errors = validatePlan(plan, contentTypes);

      expect(errors).to.eql([
        {
          type: 'InvalidAction',
          message: 'You cannot set a property on content type "person" because it does not exist.',
          details: {
            step: {
              'type': 'contentType/update',
              'meta': {
                'contentTypeInstanceId': 'contentType/person/0'
              },
              'payload': {
                'contentTypeId': 'person',
                'props': {
                  'description': 'A content type for a person'
                }
              }
            }
          }
        },
        {
          type: 'InvalidAction',
          message: 'You cannot set a property on content type "person" because it does not exist.',
          details: {
            step: {
              'type': 'contentType/update',
              'meta': {
                'contentTypeInstanceId': 'contentType/person/0'
              },
              'payload': {
                'contentTypeId': 'person',
                'props': {
                  'name': 'foo'
                }
              }
            }
          }
        },
        {
          type: 'InvalidAction',
          message: 'You cannot set a property on content type "person" because it does not exist.',
          details: {
            step: {
              'type': 'contentType/update',
              'meta': {
                'contentTypeInstanceId': 'contentType/person/1'
              },
              'payload': {
                'contentTypeId': 'person',
                'props': {
                  'name': 'the new name'
                }
              }
            }
          }
        }
      ]);
    }));
  });

  describe('when setting the same prop more than once in one chunk', function () {
    it('returns an error', Bluebird.coroutine(function * () {
      const steps = yield migrationSteps(function up (migration) {
        const person = migration.createContentType('person').name('Person');
        person.name('Person McPersonface');
      });

      const contentTypes = [];

      const plan = stripCallsites(migrationPlan(steps));
      const errors = validatePlan(plan, contentTypes);

      expect(errors).to.eql([
        {
          type: 'InvalidAction',
          message: 'You are setting the property "name" on content type "person" more than once. Please set it only once.',
          details: {
            step: {
              'type': 'contentType/update',
              'meta': {
                'contentTypeInstanceId': 'contentType/person/0'
              },
              'payload': {
                'contentTypeId': 'person',
                'props': {
                  'name': 'Person McPersonface'
                }
              }
            }
          }
        }
      ]);
    }));
  });
});
