'use strict';

const { expect } = require('chai');
const Bluebird = require('bluebird');

const FieldMovementValidator = require('../../../../src/lib/intent-validator/field-movement').default;
const validateSteps = require('./validate-steps').bind(null, [FieldMovementValidator]);

describe('field-movement validation', function () {
  describe('when doing an invalid movement', function () {
    it('returns all validation errors', Bluebird.coroutine(function * () {
      const validationErrors = yield validateSteps(function up (migration) {
        const person = migration.editContentType('person', {
          description: 'A content type for a person',
          name: 'Person'
        });

        person.moveField('field').somewhere();
      });

      expect(validationErrors).to.eql([
        {
          type: 'InvalidMovement',
          message: '"somewhere" is not a valid field movement.',
          details: {
            step: {
              type: 'field/move',
              meta: {
                contentTypeInstanceId: 'contentType/person/0',
                fieldInstanceId: 'fields/field/0'
              },
              payload: {
                contentTypeId: 'person',
                fieldId: 'field',
                movement: {
                  direction: 'somewhere',
                  pivot: undefined
                }
              }
            }
          }
        }
      ]);
    }));
  });

  describe('when moving a field relative to itself', function () {
    it('returns all validation errors', Bluebird.coroutine(function * () {
      const validationErrors = yield validateSteps(function up (migration) {
        const person = migration.editContentType('person', {
          description: 'A content type for a person',
          name: 'Person'
        });

        person.moveField('name').afterField('name');
      });

      expect(validationErrors).to.eql([
        {
          type: 'InvalidMovement',
          message: 'You cannot move the field "name" relative to itself.',
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
                  direction: 'afterField',
                  pivot: 'name'
                }
              }
            }
          }
        }
      ]);
    }));
  });

  describe('when doing an almost valid movement', function () {
    it('returns all validation errors', Bluebird.coroutine(function * () {
      const validationErrors = yield validateSteps(function up (migration) {
        const person = migration.editContentType('person', {
          description: 'A content type for a person',
          name: 'Person'
        });

        person.moveField('field').toTheTp();
      });

      expect(validationErrors).to.eql([
        {
          type: 'InvalidMovement',
          message: '"toTheTp" is not a valid field movement. Did you mean "toTheTop"?',
          details: {
            step: {
              type: 'field/move',
              meta: {
                contentTypeInstanceId: 'contentType/person/0',
                fieldInstanceId: 'fields/field/0'
              },
              payload: {
                contentTypeId: 'person',
                fieldId: 'field',
                movement: {
                  direction: 'toTheTp',
                  pivot: undefined
                }
              }
            }
          }
        }
      ]);
    }));
  });

  describe('when doing a movement with an invalid type', function () {
    it('does not error on invalid types for toTheTop and toTheBottom', Bluebird.coroutine(function * () {
      const validationErrors = yield validateSteps(function up (migration) {
        const person = migration.editContentType('person', {
          description: 'A content type for a person',
          name: 'Person'
        });

        person.moveField('field').toTheTop(true);
        person.moveField('field').toTheBottom('pivot-field');
      });

      expect(validationErrors).to.eql([]);
    }));

    it('returns all validation errors', Bluebird.coroutine(function * () {
      const validationErrors = yield validateSteps(function up (migration) {
        const person = migration.editContentType('person', {
          description: 'A content type for a person',
          name: 'Person'
        });

        person.moveField('field').afterField(true);
      });

      expect(validationErrors).to.eql([
        {
          type: 'InvalidType',
          message: '"boolean" is not a valid type for field movement. Expected "string".',
          details: {
            step: {
              type: 'field/move',
              meta: {
                contentTypeInstanceId: 'contentType/person/0',
                fieldInstanceId: 'fields/field/0'
              },
              payload: {
                contentTypeId: 'person',
                fieldId: 'field',
                movement: {
                  direction: 'afterField',
                  pivot: true
                }
              }
            }
          }
        }
      ]);
    }));
  });
});
