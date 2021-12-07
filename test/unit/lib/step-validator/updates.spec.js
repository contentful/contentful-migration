'use strict';

const { expect } = require('chai');
const Bluebird = require('bluebird');

const FieldUpdateValidator = require('../../../../src/lib/intent-validator/field-update').default;
const ContentTypeUpdateValidator = require('../../../../src/lib/intent-validator/content-type-update').default;
const TagUpdateValidator = require('../../../../src/lib/intent-validator/tag-update').default;
const validateSteps = require('./validate-steps').bind(null, [
  FieldUpdateValidator,
  ContentTypeUpdateValidator,
  TagUpdateValidator
]);

describe('migration-steps validation', function () {
  describe('when invoking methods for invalid props', function () {
    it('returns all the validation errors for content types and fields', Bluebird.coroutine(function * () {
      const validationErrors = yield validateSteps(function up (migration) {
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

      expect(validationErrors).to.eql([
        {
          type: 'InvalidProperty',
          message: '"invalidProp" is not a valid property name for a content type.',
          details: {
            step: {
              type: 'contentType/update',
              meta: {
                contentTypeInstanceId: 'contentType/person/0'
              },
              payload: {
                contentTypeId: 'person',
                props: {
                  invalidProp: 'Totally invalid'
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
              type: 'contentType/update',
              meta: {
                contentTypeInstanceId: 'contentType/person/0'
              },
              payload: {
                contentTypeId: 'person',
                props: {
                  somethingElse: 'Also invalid'
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
              type: 'field/update',
              meta: {
                contentTypeInstanceId: 'contentType/person/0',
                fieldInstanceId: 'fields/fullName/0'
              },
              payload: {
                contentTypeId: 'person',
                fieldId: 'fullName',
                props: {
                  anotherInvalidProp: 'Symbol'
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
              type: 'field/update',
              meta: {
                contentTypeInstanceId: 'contentType/person/0',
                fieldInstanceId: 'fields/fullName/0'
              },
              payload: {
                contentTypeId: 'person',
                fieldId: 'fullName',
                props: {
                  bla: 'a person'
                }
              }
            }
          }
        }
      ]);
    }));

    it('returns validation errors for tags', Bluebird.coroutine(function * () {
      const validationErrors = yield validateSteps(function up (migration) {
        const marketing = migration.createTag('marketing', {
          name: 'marketing tag',
          invalidProp: 'Totally invalid'
        });
        marketing.somethingElse('Also invalid');
      });

      expect(validationErrors).to.eql([
        {
          type: 'InvalidProperty',
          message: '"invalidProp" is not a valid property name for a tag.',
          details: {
            step: {
              type: 'tag/update',
              meta: {
                tagInstanceId: 'tag/marketing/0'
              },
              payload: {
                tagId: 'marketing',
                props: {
                  invalidProp: 'Totally invalid'
                }
              }
            }
          }
        },
        {
          type: 'InvalidProperty',
          message: '"somethingElse" is not a valid property name for a tag.',
          details: {
            step: {
              type: 'tag/update',
              meta: {
                tagInstanceId: 'tag/marketing/0'
              },
              payload: {
                tagId: 'marketing',
                props: {
                  somethingElse: 'Also invalid'
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
      /* tslint:disable */
      const invalidFunction = function () {};
      /* tslint:enable */
      const validationErrors = yield validateSteps(function up (migration) {
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

      expect(validationErrors).to.eql([
        {
          type: 'InvalidType',
          message: '"array" is not a valid type for the content type property "description". Expected "string".',
          details: {
            step: {
              type: 'contentType/update',
              meta: {
                contentTypeInstanceId: 'contentType/person/0'
              },
              payload: {
                contentTypeId: 'person',
                props: {
                  description: ['Array']
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
              type: 'contentType/update',
              meta: {
                contentTypeInstanceId: 'contentType/person/0'
              },
              payload: {
                contentTypeId: 'person',
                props: {
                  displayField: 1234
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
              type: 'field/update',
              meta: {
                contentTypeInstanceId: 'contentType/person/0',
                fieldInstanceId: 'fields/fullName/0'
              },
              payload: {
                contentTypeId: 'person',
                fieldId: 'fullName',
                props: {
                  validations: 'Symbol'
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
              type: 'field/update',
              meta: {
                contentTypeInstanceId: 'contentType/person/0',
                fieldInstanceId: 'fields/fullName/0'
              },
              payload: {
                contentTypeId: 'person',
                fieldId: 'fullName',
                props: {
                  omitted: 1
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
              type: 'field/update',
              meta: {
                contentTypeInstanceId: 'contentType/person/0',
                fieldInstanceId: 'fields/fullName/0'
              },
              payload: {
                contentTypeId: 'person',
                fieldId: 'fullName',
                props: {
                  localized: invalidFunction
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
              type: 'field/update',
              meta: {
                contentTypeInstanceId: 'contentType/person/0',
                fieldInstanceId: 'fields/fullName/0'
              },
              payload: {
                contentTypeId: 'person',
                fieldId: 'fullName',
                props: {
                  required: undefined
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
              type: 'field/update',
              meta: {
                contentTypeInstanceId: 'contentType/person/0',
                fieldInstanceId: 'fields/fullName/0'
              },
              payload: {
                contentTypeId: 'person',
                fieldId: 'fullName',
                props: {
                  deleted: null
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
      const validationErrors = yield validateSteps(function up (migration) {
        const person = migration.createContentType('person', {
          description: 'A content type for a person',
          nmae: 'Totally invalid'
        });

        person.createField('fullName', {
          name: 'Full Name',
          lodalised: true
        });
      });

      expect(validationErrors).to.eql([
        {
          type: 'InvalidProperty',
          message: '"nmae" is not a valid property name for a content type. Did you mean "name"?',
          details: {
            step: {
              type: 'contentType/update',
              meta: {
                contentTypeInstanceId: 'contentType/person/0'
              },
              payload: {
                contentTypeId: 'person',
                props: {
                  nmae: 'Totally invalid'
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
              type: 'field/update',
              meta: {
                contentTypeInstanceId: 'contentType/person/0',
                fieldInstanceId: 'fields/fullName/0'
              },
              payload: {
                contentTypeId: 'person',
                fieldId: 'fullName',
                props: {
                  lodalised: true
                }
              }
            }
          }
        }
      ]);
    }));
  });
});
