'use strict';

const { expect } = require('chai');
const Bluebird = require('bluebird');

const createSteps = require('../../../../lib/migration-steps');
const validateSteps = require('../../../../lib/migration-steps/validation');
const stripCallsite = require('../../../helpers/strip-callsite');
const stripCallsites = (errors) => errors.map((error) => {
  const step = error.details.step;
  const strippedStep = stripCallsite(step);

  const strippedDetails = Object.assign({}, error.details, {
    step: strippedStep
  });

  return Object.assign({}, error, {
    details: strippedDetails
  });
});

describe('migration-steps validation', function () {
  describe('when invoking methods for invalid props', function () {
    it('returns all the validation errors', Bluebird.coroutine(function * () {
      const steps = yield createSteps(function up (migration) {
        const person = migration.createContentType('person', {
          description: 'A content type for a person',
          invalidProp: 'Totally invalid'
        });

        person.somethingElse('Also invalid');

        const fullName = person.createField('fullName', {
          name: 'Full Name',
          anotherInvalidProp: 'Symbol'
        });

        fullName.bla('a person');
      });

      const validationErrors = stripCallsites(validateSteps(steps));

      expect(validationErrors).to.eql([
        {
          type: 'InvalidProperty',
          message: '"invalidProp" is not a valid property name for a content type.',
          details: {
            step: {
              'type': 'contentType/update',
              'meta': {
                'contentTypeInstanceId': 'contentType/person/0'
              },
              'payload': {
                'contentTypeId': 'person',
                'props': {
                  'invalidProp': 'Totally invalid'
                }
              }
            }
          }
        },
        {
          type: 'InvalidProperty',
          message: '"somethingElse" is not a valid property name for a content type.',
          details: {
            step: {
              'type': 'contentType/update',
              'meta': {
                'contentTypeInstanceId': 'contentType/person/0'
              },
              'payload': {
                'contentTypeId': 'person',
                'props': {
                  'somethingElse': 'Also invalid'
                }
              }
            }
          }
        },
        {
          type: 'InvalidProperty',
          message: '"anotherInvalidProp" is not a valid property name for a field.',
          details: {
            step: {
              'type': 'field/update',
              'meta': {
                'contentTypeInstanceId': 'contentType/person/0',
                'fieldInstanceId': 'fields/fullName/0'
              },
              'payload': {
                'contentTypeId': 'person',
                'fieldId': 'fullName',
                'props': {
                  'anotherInvalidProp': 'Symbol'
                }
              }
            }
          }
        },
        {
          type: 'InvalidProperty',
          message: '"bla" is not a valid property name for a field.',
          details: {
            step: {
              'type': 'field/update',
              'meta': {
                'contentTypeInstanceId': 'contentType/person/0',
                'fieldInstanceId': 'fields/fullName/0'
              },
              'payload': {
                'contentTypeId': 'person',
                'fieldId': 'fullName',
                'props': {
                  'bla': 'a person'
                }
              }
            }
          }
        }
      ]);
    }));
  });

  describe('when doing an invalid movement', function () {
    it('returns all validation errors', Bluebird.coroutine(function * () {
      const steps = yield createSteps(function up (migration) {
        const person = migration.editContentType('person', {
          description: 'A content type for a person',
          name: 'Person'
        });

        person.moveField('field').somewhere();
      });

      const validationErrors = stripCallsites(validateSteps(steps));

      expect(validationErrors).to.eql([
        {
          type: 'InvalidMovement',
          message: '"somewhere" is not a valid field movement.',
          details: {
            step: {
              'type': 'field/move',
              'meta': {
                'contentTypeInstanceId': 'contentType/person/0',
                'fieldInstanceId': 'fields/field/0'
              },
              'payload': {
                'contentTypeId': 'person',
                'fieldId': 'field',
                'movement': {
                  'direction': 'somewhere',
                  'pivot': undefined
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
      const steps = yield createSteps(function up (migration) {
        const person = migration.editContentType('person', {
          description: 'A content type for a person',
          name: 'Person'
        });

        person.moveField('name').afterField('name');
      });

      const validationErrors = stripCallsites(validateSteps(steps));

      expect(validationErrors).to.eql([
        {
          type: 'InvalidMovement',
          message: 'You cannot move the field "name" relative to itself.',
          details: {
            step: {
              'type': 'field/move',
              'meta': {
                'contentTypeInstanceId': 'contentType/person/0',
                'fieldInstanceId': 'fields/name/0'
              },
              'payload': {
                'contentTypeId': 'person',
                'fieldId': 'name',
                'movement': {
                  'direction': 'afterField',
                  'pivot': 'name'
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
      const steps = yield createSteps(function up (migration) {
        const person = migration.editContentType('person', {
          description: 'A content type for a person',
          name: 'Person'
        });

        person.moveField('field').toTheTp();
      });

      const validationErrors = stripCallsites(validateSteps(steps));

      expect(validationErrors).to.eql([
        {
          type: 'InvalidMovement',
          message: '"toTheTp" is not a valid field movement. Did you mean "toTheTop"?',
          details: {
            step: {
              'type': 'field/move',
              'meta': {
                'contentTypeInstanceId': 'contentType/person/0',
                'fieldInstanceId': 'fields/field/0'
              },
              'payload': {
                'contentTypeId': 'person',
                'fieldId': 'field',
                'movement': {
                  'direction': 'toTheTp',
                  'pivot': undefined
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
      const steps = yield createSteps(function up (migration) {
        const person = migration.editContentType('person', {
          description: 'A content type for a person',
          name: 'Person'
        });

        person.moveField('field').toTheTop(true);
        person.moveField('field').toTheBottom('pivot-field');
      });

      const validationErrors = stripCallsites(validateSteps(steps));

      expect(validationErrors).to.eql([]);
    }));

    it('returns all validation errors', Bluebird.coroutine(function * () {
      const steps = yield createSteps(function up (migration) {
        const person = migration.editContentType('person', {
          description: 'A content type for a person',
          name: 'Person'
        });

        person.moveField('field').afterField(true);
      });

      const validationErrors = stripCallsites(validateSteps(steps));

      expect(validationErrors).to.eql([
        {
          type: 'InvalidType',
          message: '"boolean" is not a valid type for field movement. Expected "string".',
          details: {
            step: {
              'type': 'field/move',
              'meta': {
                'contentTypeInstanceId': 'contentType/person/0',
                'fieldInstanceId': 'fields/field/0'
              },
              'payload': {
                'contentTypeId': 'person',
                'fieldId': 'field',
                'movement': {
                  'direction': 'afterField',
                  'pivot': true
                }
              }
            }
          }
        }
      ]);
    }));
  });

  describe('when passing the wrong type for a prop', function () {
    it('returns all the validation errors', Bluebird.coroutine(function * () {
      const invalidFunction = function () {};
      const steps = yield createSteps(function up (migration) {
        const person = migration.createContentType('person', {
          description: ['Array']
        });

        person.displayField(1234);

        const fullName = person.createField('fullName', {
          name: 'Full Name',
          validations: 'Symbol',
          omitted: 1,
          localized: invalidFunction,
          required: undefined
        });

        fullName.deleted(null);
      });

      const validationErrors = stripCallsites(validateSteps(steps));
      expect(validationErrors).to.eql([
        {
          type: 'InvalidType',
          message: '"array" is not a valid type for the content type property "description". Expected "string".',
          details: {
            step: {
              'type': 'contentType/update',
              'meta': {
                'contentTypeInstanceId': 'contentType/person/0'
              },
              'payload': {
                'contentTypeId': 'person',
                'props': {
                  'description': ['Array']
                }
              }
            }
          }
        },
        {
          type: 'InvalidType',
          message: '"number" is not a valid type for the content type property "displayField". Expected "string".',
          details: {
            step: {
              'type': 'contentType/update',
              'meta': {
                'contentTypeInstanceId': 'contentType/person/0'
              },
              'payload': {
                'contentTypeId': 'person',
                'props': {
                  'displayField': 1234
                }
              }
            }
          }
        },
        {
          type: 'InvalidType',
          message: '"string" is not a valid type for the field property "validations". Expected "array".',
          details: {
            step: {
              'type': 'field/update',
              'meta': {
                'contentTypeInstanceId': 'contentType/person/0',
                'fieldInstanceId': 'fields/fullName/0'
              },
              'payload': {
                'contentTypeId': 'person',
                'fieldId': 'fullName',
                'props': {
                  'validations': 'Symbol'
                }
              }
            }
          }
        },
        {
          type: 'InvalidType',
          message: '"number" is not a valid type for the field property "omitted". Expected "boolean".',
          details: {
            step: {
              'type': 'field/update',
              'meta': {
                'contentTypeInstanceId': 'contentType/person/0',
                'fieldInstanceId': 'fields/fullName/0'
              },
              'payload': {
                'contentTypeId': 'person',
                'fieldId': 'fullName',
                'props': {
                  'omitted': 1
                }
              }
            }
          }
        },
        {
          type: 'InvalidType',
          message: '"function" is not a valid type for the field property "localized". Expected "boolean".',
          details: {
            step: {
              'type': 'field/update',
              'meta': {
                'contentTypeInstanceId': 'contentType/person/0',
                'fieldInstanceId': 'fields/fullName/0'
              },
              'payload': {
                'contentTypeId': 'person',
                'fieldId': 'fullName',
                'props': {
                  'localized': invalidFunction
                }
              }
            }
          }
        },
        {
          type: 'InvalidType',
          message: '"undefined" is not a valid type for the field property "required". Expected "boolean".',
          details: {
            step: {
              'type': 'field/update',
              'meta': {
                'contentTypeInstanceId': 'contentType/person/0',
                'fieldInstanceId': 'fields/fullName/0'
              },
              'payload': {
                'contentTypeId': 'person',
                'fieldId': 'fullName',
                'props': {
                  'required': undefined
                }
              }
            }
          }
        },
        {
          type: 'InvalidType',
          message: '"null" is not a valid type for the field property "deleted". Expected "boolean".',
          details: {
            step: {
              'type': 'field/update',
              'meta': {
                'contentTypeInstanceId': 'contentType/person/0',
                'fieldInstanceId': 'fields/fullName/0'
              },
              'payload': {
                'contentTypeId': 'person',
                'fieldId': 'fullName',
                'props': {
                  'deleted': null
                }
              }
            }
          }
        }
      ]);
    }));
  });

  describe('when invoking methods for invalid props that are very close to valid props', function () {
    it('returns all the validation errors', Bluebird.coroutine(function * () {
      const steps = yield createSteps(function up (migration) {
        const person = migration.createContentType('person', {
          description: 'A content type for a person',
          nmae: 'Totally invalid'
        });

        person.createField('fullName', {
          name: 'Full Name',
          lodalised: true
        });
      });

      const validationErrors = stripCallsites(validateSteps(steps));
      expect(validationErrors).to.eql([
        {
          type: 'InvalidProperty',
          message: '"nmae" is not a valid property name for a content type. Did you mean "name"?',
          details: {
            step: {
              'type': 'contentType/update',
              'meta': {
                'contentTypeInstanceId': 'contentType/person/0'
              },
              'payload': {
                'contentTypeId': 'person',
                'props': {
                  'nmae': 'Totally invalid'
                }
              }
            }
          }
        },
        {
          type: 'InvalidProperty',
          message: '"lodalised" is not a valid property name for a field. Did you mean "localized"?',
          details: {
            step: {
              'type': 'field/update',
              'meta': {
                'contentTypeInstanceId': 'contentType/person/0',
                'fieldInstanceId': 'fields/fullName/0'
              },
              'payload': {
                'contentTypeId': 'person',
                'fieldId': 'fullName',
                'props': {
                  'lodalised': true
                }
              }
            }
          }
        }
      ]);
    }));
  });

  describe('when setting an empty description for a content type', function () {
    it('does not return any errors', Bluebird.coroutine(function * () {
      const steps = yield createSteps(function up (migration) {
        migration.createContentType('person', {
          description: ''
        });
      });

      const validationErrors = stripCallsites(validateSteps(steps));

      expect(validationErrors).to.eql([]);
    }));
  });
});
