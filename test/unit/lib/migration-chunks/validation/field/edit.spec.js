'use strict';

const { expect } = require('chai');
const Bluebird = require('bluebird');

const validateChunks = require('../validate-chunks').default;

describe('field editing plan validation', function () {
  describe('when editing a field that does not exist', function () {
    it('returns an error', Bluebird.coroutine(function * () {
      const contentTypes = [];
      const errors = yield validateChunks(function up (migration) {
        const person = migration.createContentType('person', {
          description: 'A content type for a person',
          name: 'foo'
        });

        person.editField('name').name('foo').required(true);
      }, contentTypes);

      expect(errors).to.eql([
        {
          type: 'InvalidAction',
          message: 'You cannot edit field "name" because it does not exist.',
          details: {
            step: {
              type: 'field/update',
              meta: {
                contentTypeInstanceId: 'contentType/person/0',
                fieldInstanceId: 'fields/name/0'
              },
              payload: {
                contentTypeId: 'person',
                fieldId: 'name',
                props: {
                  name: 'foo'
                }
              }
            }
          }
        },
        {
          type: 'InvalidAction',
          message: 'You cannot edit field "name" because it does not exist.',
          details: {
            step: {
              type: 'field/update',
              meta: {
                contentTypeInstanceId: 'contentType/person/0',
                fieldInstanceId: 'fields/name/0'
              },
              payload: {
                contentTypeId: 'person',
                fieldId: 'name',
                props: {
                  required: true
                }
              }
            }
          }
        }
      ]);
    }));
  });

  describe('when editing a field that was deleted', function () {
    it('returns an error', Bluebird.coroutine(function * () {
      const contentTypes = [];
      const errors = yield validateChunks(function up (migration) {
        const person = migration.createContentType('person', {
          description: 'A content type for a person',
          name: 'foo'
        });

        const nameField = person.createField('name').type('Symbol');

        person.deleteField('name');

        nameField.required(true);
      }, contentTypes);

      expect(errors).to.eql([
        {
          type: 'InvalidAction',
          message: 'You cannot edit field "name" because it has already been deleted.',
          details: {
            step: {
              type: 'field/update',
              meta: {
                contentTypeInstanceId: 'contentType/person/0',
                fieldInstanceId: 'fields/name/0'
              },
              payload: {
                contentTypeId: 'person',
                fieldId: 'name',
                props: {
                  required: true
                }
              }
            }
          }
        }
      ]);
    }));
  });

  describe('when editing a field on a content type that does not exist', function () {
    it('returns an error', Bluebird.coroutine(function * () {
      const contentTypes = [];
      const errors = yield validateChunks(function up (migration) {
        const person = migration.editContentType('person');

        person.editField('name').type('Symbol');
      }, contentTypes);

      expect(errors).to.eql([
        {
          type: 'InvalidAction',
          message: 'You cannot edit field "name" on content type "person" because it does not exist.',
          details: {
            step: {
              type: 'field/update',
              meta: {
                contentTypeInstanceId: 'contentType/person/0',
                fieldInstanceId: 'fields/name/0'
              },
              payload: {
                contentTypeId: 'person',
                fieldId: 'name',
                props: {
                  type: 'Symbol'
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
      const contentTypes = [];
      const errors = yield validateChunks(function up (migration) {
        const person = migration.createContentType('person');

        person.createField('name').type('Symbol');
        person.editField('name').required(false);
        person.editField('name').localized(false);
        person.editField('name').validations();
        person.editField('name').required(true);
        person.editField('name').type('Text');
        person.editField('name').type('Number');
      }, contentTypes);

      expect(errors).to.eql([
        {
          type: 'InvalidAction',
          message: 'You are setting the property "required" on field "name" more than once. Please set it only once.',
          details: {
            step: {
              type: 'field/update',
              meta: {
                contentTypeInstanceId: 'contentType/person/0',
                fieldInstanceId: 'fields/name/4'
              },
              payload: {
                contentTypeId: 'person',
                fieldId: 'name',
                props: {
                  required: true
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
              type: 'field/update',
              meta: {
                contentTypeInstanceId: 'contentType/person/0',
                fieldInstanceId: 'fields/name/5'
              },
              payload: {
                contentTypeId: 'person',
                fieldId: 'name',
                props: {
                  type: 'Text'
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
              type: 'field/update',
              meta: {
                contentTypeInstanceId: 'contentType/person/0',
                fieldInstanceId: 'fields/name/6'
              },
              payload: {
                contentTypeId: 'person',
                fieldId: 'name',
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

  describe('when setting the same prop more than once but in separate chunks', function () {
    it('does not return errors', Bluebird.coroutine(function * () {
      const contentTypes = [];
      const errors = yield validateChunks(function up (migration) {
        const person = migration.createContentType('person');

        person.createField('name').type('Symbol');
        migration.createContentType('chunkSeparator');
        person.editField('name').type('Text');
      }, contentTypes);

      expect(errors).to.eql([]);
    }));
  });
});
