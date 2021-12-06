'use strict';

const { expect } = require('chai');
const Bluebird = require('bluebird');

const validateChunks = require('../validate-chunks').default;

describe('field movement plan validation', function () {
  describe('when moving a field that does not exist', function () {
    it('returns an error', Bluebird.coroutine(function * () {
      const contentTypes = [];
      const errors = yield validateChunks(function up (migration) {
        const person = migration.createContentType('person', {
          description: 'A content type for a person',
          name: 'foo'
        });

        person.moveField('name').toTheTop();
      }, contentTypes);

      expect(errors).to.eql([
        {
          type: 'InvalidAction',
          message: 'You cannot move the field with id "name" because it does not exist.',
          details: {
            step: {
              type: 'field/move',
              meta: {
                contentTypeInstanceId: 'contentType/person/0',
                fieldInstanceId: 'fields/name/0'
              },
              payload: {
                contentTypeId: 'person',
                fieldId: 'name',
                movement: {
                  direction: 'toTheTop',
                  pivot: undefined
                }
              }
            }
          }
        }
      ]);
    }));
  });

  describe('when moving a field that was deleted', function () {
    it('returns an error', Bluebird.coroutine(function * () {
      const contentTypes = [];
      const errors = yield validateChunks(function up (migration) {
        const person = migration.createContentType('person', {
          description: 'A content type for a person',
          name: 'foo'
        });

        person.createField('name').type('Symbol');
        person.deleteField('name');
        person.moveField('name').toTheTop();
      }, contentTypes);

      expect(errors).to.eql([
        {
          type: 'InvalidAction',
          message: 'You cannot move the field with id "name" because it has already been deleted.',
          details: {
            step: {
              type: 'field/move',
              meta: {
                contentTypeInstanceId: 'contentType/person/0',
                fieldInstanceId: 'fields/name/2'
              },
              payload: {
                contentTypeId: 'person',
                fieldId: 'name',
                movement: {
                  direction: 'toTheTop',
                  pivot: undefined
                }
              }
            }
          }
        }
      ]);
    }));
  });

  describe('when moving a field multiple times', function () {
    it('returns all the validation errors', Bluebird.coroutine(function * () {
      const contentTypes = [];
      const errors = yield validateChunks(function up (migration) {
        const person = migration.createContentType('person', {
          description: 'A content type for a person',
          name: 'Person'
        });

        person.createField('fullName', {
          name: 'Full Name',
          type: 'Symbol'
        });

        person.moveField('fullName').toTheTop();
        person.moveField('fullName').toTheTop();
      }, contentTypes);

      expect(errors).to.eql([
        {
          type: 'InvalidAction',
          message: 'You cannot move the field with id "fullName" more than once per migration.',
          details: {
            step: {
              type: 'field/move',
              meta: {
                contentTypeInstanceId: 'contentType/person/0',
                fieldInstanceId: 'fields/fullName/2'
              },
              payload: {
                contentTypeId: 'person',
                fieldId: 'fullName',
                movement: {
                  direction: 'toTheTop',
                  pivot: undefined
                }
              }
            }
          }
        }
      ]);
    }));
  });

  describe('when moving a field multiple times in different chunks', function () {
    it('returns all the validation errors', Bluebird.coroutine(function * () {
      const contentTypes = [];
      const errors = yield validateChunks(function up (migration) {
        const person = migration.createContentType('person', {
          description: 'A content type for a person',
          name: 'Person'
        });

        person.createField('fullName', {
          name: 'Full Name',
          type: 'Symbol'
        });

        person.moveField('fullName').toTheTop();

        const dog = migration.createContentType('dog', {
          description: 'A content type for a dog',
          name: 'Dog'
        });

        dog.createField('age', {
          name: 'age',
          type: 'Number'
        });

        person.moveField('fullName').toTheBottom();
      }, contentTypes);

      expect(errors).to.eql([
        {
          type: 'InvalidAction',
          message: 'You cannot move the field with id "fullName" more than once per migration.',
          details: {
            step: {
              type: 'field/move',
              meta: {
                contentTypeInstanceId: 'contentType/person/0',
                fieldInstanceId: 'fields/fullName/2'
              },
              payload: {
                contentTypeId: 'person',
                fieldId: 'fullName',
                movement: {
                  direction: 'toTheBottom',
                  pivot: undefined
                }
              }
            }
          }
        }
      ]);
    }));
  });

  describe('whe moving a field in a non existing Content Type', function () {
    it('returns all validation errors', Bluebird.coroutine(function * () {
      const contentTypes = [];
      const errors = yield validateChunks(function up (migration) {
        const person = migration.editContentType('person');

        person.moveField('fullName').toTheTop();
      }, contentTypes);

      expect(errors).to.eql([
        {
          type: 'InvalidAction',
          message: 'You cannot move a field on content type "person" because it does not exist.',
          details: {
            step: {
              type: 'field/move',
              meta: {
                contentTypeInstanceId: 'contentType/person/0',
                fieldInstanceId: 'fields/fullName/0'
              },
              payload: {
                contentTypeId: 'person',
                fieldId: 'fullName',
                movement: {
                  direction: 'toTheTop',
                  pivot: undefined
                }
              }
            }
          }
        }
      ]);
    }));
  });

  describe('when moving a field relative to a non existing field', function () {
    it('returns all validation errors', Bluebird.coroutine(function * () {
      const contentTypes = [];
      const errors = yield validateChunks(function up (migration) {
        const person = migration.createContentType('person');

        person.createField('fullName').type('Symbol').name('Full name');
        person.moveField('fullName').afterField('i-do-not-exist');

        person.createField('age').type('Number').name('Full name');
        person.moveField('age').beforeField('i-do-not-exist');
      }, contentTypes);

      expect(errors).to.eql([
        {
          type: 'InvalidAction',
          message: 'You cannot move a field after the field "i-do-not-exist" because it doesn\'t exist',
          details: {
            step: {
              type: 'field/move',
              meta: {
                contentTypeInstanceId: 'contentType/person/0',
                fieldInstanceId: 'fields/fullName/1'
              },
              payload: {
                contentTypeId: 'person',
                fieldId: 'fullName',
                movement: {
                  direction: 'afterField',
                  pivot: 'i-do-not-exist'
                }
              }
            }
          }
        },
        {
          type: 'InvalidAction',
          message: 'You cannot move a field before the field "i-do-not-exist" because it doesn\'t exist',
          details: {
            step: {
              type: 'field/move',
              meta: {
                contentTypeInstanceId: 'contentType/person/0',
                fieldInstanceId: 'fields/age/1'
              },
              payload: {
                contentTypeId: 'person',
                fieldId: 'age',
                movement: {
                  direction: 'beforeField',
                  pivot: 'i-do-not-exist'
                }
              }
            }
          }
        }
      ]);
    }));
  });

  describe('when moving a field relative to a removed field', function () {
    it('returns all validation errors', Bluebird.coroutine(function * () {
      const contentTypes = [];
      const errors = yield validateChunks(function up (migration) {
        const person = migration.createContentType('person');

        person.createField('fullName').type('Symbol').name('Full name');

        person.deleteField('fullName');

        person.createField('age').type('Number').name('Full name');
        person.moveField('age').beforeField('fullName');
      }, contentTypes);

      expect(errors).to.eql([
        {
          type: 'InvalidAction',
          message: 'You cannot move a field before the field "fullName" because it has been already deleted',
          details: {
            step: {
              type: 'field/move',
              meta: {
                contentTypeInstanceId: 'contentType/person/0',
                fieldInstanceId: 'fields/age/1'
              },
              payload: {
                contentTypeId: 'person',
                fieldId: 'age',
                movement: {
                  direction: 'beforeField',
                  pivot: 'fullName'
                }
              }
            }
          }
        }
      ]);
    }));
  });
});
