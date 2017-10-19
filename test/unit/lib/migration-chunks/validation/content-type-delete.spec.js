'use strict';

const { expect } = require('chai');
const Bluebird = require('bluebird');

const migrationPlan = require('../../../../../src/lib/migration-chunks');
const migrationSteps = require('../../../../../src/lib/migration-steps').migration;
const validatePlan = require('../../../../../src/lib/migration-chunks/validation');

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
              type: 'contentType/delete',
              meta: {
                contentTypeInstanceId: 'contentType/foo/1'
              },
              payload: {
                contentTypeId: 'foo'
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
              type: 'contentType/delete',
              meta: {
                contentTypeInstanceId: 'contentType/foo/1'
              },
              payload: {
                contentTypeId: 'foo'
              }
            }
          }
        },
        {
          type: 'InvalidAction',
          message: 'Content type with id "foo" cannot be deleted more than once.',
          details: {
            step: {
              type: 'contentType/delete',
              meta: {
                contentTypeInstanceId: 'contentType/foo/2'
              },
              payload: {
                contentTypeId: 'foo'
              }
            }
          }
        },
        {
          type: 'InvalidAction',
          message: 'Content type with id "bar" cannot be deleted more than once.',
          details: {
            step: {
              type: 'contentType/delete',
              meta: {
                contentTypeInstanceId: 'contentType/bar/1'
              },
              payload: {
                contentTypeId: 'bar'
              }
            }
          }
        },
        {
          type: 'InvalidAction',
          message: 'Content type with id "bar" cannot be deleted more than once.',
          details: {
            step: {
              type: 'contentType/delete',
              meta: {
                contentTypeInstanceId: 'contentType/bar/2'
              },
              payload: {
                contentTypeId: 'bar'
              }
            }
          }
        },
        {
          type: 'InvalidAction',
          message: 'Content type with id "baz" cannot be deleted more than once.',
          details: {
            step: {
              type: 'contentType/delete',
              meta: {
                contentTypeInstanceId: 'contentType/baz/1'
              },
              payload: {
                contentTypeId: 'baz'
              }
            }
          }
        },
        {
          type: 'InvalidAction',
          message: 'Content type with id "baz" cannot be deleted more than once.',
          details: {
            step: {
              type: 'contentType/delete',
              meta: {
                contentTypeInstanceId: 'contentType/baz/2'
              },
              payload: {
                contentTypeId: 'baz'
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
              type: 'contentType/delete',
              meta: {
                contentTypeInstanceId: 'contentType/baz/0'
              },
              payload: {
                contentTypeId: 'baz'
              }
            }
          }
        }
      ]);
    }));
  });

  describe('when editing a content type that has been deleted earlier', function () {
    it('returns an error', Bluebird.coroutine(function * () {
      const steps = yield migrationSteps(function up (migration) {
        migration.deleteContentType('foo');
        migration.editContentType('foo').editField('bar').type('Number');
      });

      const contentTypes = [{
        sys: { id: 'foo' },
        fields: [{
          id: 'bar',
          type: 'Symbol'
        }]
      }];

      const plan = stripCallsites(migrationPlan(steps));
      const errors = validatePlan(plan, contentTypes);

      expect(errors).to.eql([
        {
          type: 'InvalidAction',
          message: 'Content type with id "foo" cannot be edited because it was deleted before.',
          details: {
            step: {
              type: 'field/update',
              meta: {
                contentTypeInstanceId: 'contentType/foo/1',
                fieldInstanceId: 'fields/bar/0'
              },
              payload: {
                contentTypeId: 'foo',
                fieldId: 'bar',
                props: {
                  type: 'Number'
                }
              }
            }
          }
        }
      ]);
    }));

    it('returns an error also when several edits after several deletes', Bluebird.coroutine(function * () {
      const steps = yield migrationSteps(function up (migration) {
        migration.editContentType('bar').editField('bar').name('confusedYet?');
        migration.deleteContentType('foo');
        migration.editContentType('foo').editField('bar').type('Number');
        migration.deleteContentType('bar');
        migration.editContentType('foo').editField('baz').type('Number');
        migration.editContentType('bar').editField('foo').type('Number');
        migration.editContentType('bar').editField('bar').type('Number');
      });

      const contentTypes = [{
        sys: { id: 'foo' },
        fields: [{
          id: 'bar',
          type: 'Symbol'
        }, {
          id: 'baz',
          type: 'Symbol'
        }]
      }, {
        sys: { id: 'bar' },
        fields: [{
          id: 'bar',
          type: 'Symbol'
        }, {
          id: 'foo',
          type: 'Symbol'
        }]
      }];

      const plan = stripCallsites(migrationPlan(steps));
      const errors = validatePlan(plan, contentTypes);

      expect(errors).to.eql([
        {
          type: 'InvalidAction',
          message: 'Content type with id "foo" cannot be edited because it was deleted before.',
          details: {
            step: {
              type: 'field/update',
              meta: {
                contentTypeInstanceId: 'contentType/foo/1',
                fieldInstanceId: 'fields/bar/0'
              },
              payload: {
                contentTypeId: 'foo',
                fieldId: 'bar',
                props: {
                  type: 'Number'
                }
              }
            }
          }
        },
        {
          type: 'InvalidAction',
          message: 'Content type with id "foo" cannot be edited because it was deleted before.',
          details: {
            step: {
              type: 'field/update',
              meta: {
                contentTypeInstanceId: 'contentType/foo/2',
                fieldInstanceId: 'fields/baz/0'
              },
              payload: {
                contentTypeId: 'foo',
                fieldId: 'baz',
                props: {
                  type: 'Number'
                }
              }
            }
          }
        },
        {
          type: 'InvalidAction',
          message: 'Content type with id "bar" cannot be edited because it was deleted before.',
          details: {
            step: {
              type: 'field/update',
              meta: {
                contentTypeInstanceId: 'contentType/bar/2',
                fieldInstanceId: 'fields/foo/0'
              },
              payload: {
                contentTypeId: 'bar',
                fieldId: 'foo',
                props: {
                  type: 'Number'
                }
              }
            }
          }
        },
        {
          type: 'InvalidAction',
          message: 'Content type with id "bar" cannot be edited because it was deleted before.',
          details: {
            step: {
              type: 'field/update',
              meta: {
                contentTypeInstanceId: 'contentType/bar/3',
                fieldInstanceId: 'fields/bar/0'
              },
              payload: {
                contentTypeId: 'bar',
                fieldId: 'bar',
                props: {
                  type: 'Number'
                }
              }
            }
          }
        }
      ]);
    }));
  });

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
              type: 'contentType/delete',
              meta: {
                contentTypeInstanceId: 'contentType/foo/1'
              },
              payload: {
                contentTypeId: 'foo'
              }
            }
          }
        }
      ]);
    }));
  });

  describe('when deleting a content type that still has entries', function () {
    it('returns an error', Bluebird.coroutine(function * () {
      const steps = yield migrationSteps(function up (migration) {
        migration.deleteContentType('foo');
        migration.deleteContentType('bar');
      });

      const contentTypes = [{
        sys: { id: 'foo' },
        hasEntries: true,
        fields: []
      }, {
        sys: { id: 'bar' },
        hasEntries: true,
        fields: []
      }];

      const plan = stripCallsites(migrationPlan(steps));
      const errors = validatePlan(plan, contentTypes);

      expect(errors).to.eql([
        {
          type: 'InvalidAction',
          message: 'Content type "foo" cannot be deleted because it has entries.',
          details: {
            step: {
              type: 'contentType/delete',
              meta: {
                contentTypeInstanceId: 'contentType/foo/0'
              },
              payload: {
                contentTypeId: 'foo'
              }
            }
          }
        },
        {
          type: 'InvalidAction',
          message: 'Content type "bar" cannot be deleted because it has entries.',
          details: {
            step: {
              type: 'contentType/delete',
              meta: {
                contentTypeInstanceId: 'contentType/bar/0'
              },
              payload: {
                contentTypeId: 'bar'
              }
            }
          }
        }
      ]);
    }));
  });
});
