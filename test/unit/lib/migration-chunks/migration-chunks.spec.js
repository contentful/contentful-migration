'use strict';

const { expect } = require('chai');
const Bluebird = require('bluebird');

const migrationChunks = require('../../../../src/lib/migration-chunks');
const migrationSteps = require('../../../../src/lib/migration-steps').migration;

const stripCallsite = require('../../../helpers/strip-callsite');
const stripCallsites = (plan) => plan.map((chunk) => chunk.map(stripCallsite));

describe('migration-chunks', function () {
  describe('when creating a field', function () {
    it('chunks', Bluebird.coroutine(function * () {
      const steps = yield migrationSteps(function up (migration) {
        const person = migration.createContentType('person', {
          description: 'A content type for a person',
          name: 'foo'
        });

        const fullName = person.createField('fullName', {
          name: 'Full Name',
          type: 'Symbol'
        });

        person.editField('lastName', {
          name: 'New Last Name'
        });

        person.editField('fullName').localized(true);
        fullName.required(true);

        person.name('bar');


        const address = migration.editContentType('address', {
          name: 'the new name'
        });
        person.name('a person');

        address.editField('houseNumber').omitted(true);
        address.createField('houseExtension', {
          type: 'Symbol'
        });
      });

      const chunks = stripCallsites(migrationChunks(steps));


      expect(chunks).to.eql([
        [{
          meta: {
            contentTypeInstanceId: 'contentType/person/0'
          },
          type: 'contentType/create',
          payload: {
            contentTypeId: 'person'
          }
        }, {
          meta: {
            contentTypeInstanceId: 'contentType/person/0'
          },
          type: 'contentType/update',
          payload: {
            contentTypeId: 'person',
            props: {
              description: 'A content type for a person'
            }
          }
        }, {
          meta: {
            contentTypeInstanceId: 'contentType/person/0'
          },
          type: 'contentType/update',
          payload: {
            contentTypeId: 'person',
            props: {
              name: 'foo'
            }
          }
        },
        {
          type: 'field/create',
          meta: {
            contentTypeInstanceId: 'contentType/person/0',
            fieldInstanceId: 'fields/fullName/0'
          },
          payload: {
            contentTypeId: 'person',
            fieldId: 'fullName'
          }
        },
        {
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
        },
        {
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
        },
        {
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
        },
        {
          type: 'field/update',
          meta: {
            contentTypeInstanceId: 'contentType/person/0',
            fieldInstanceId: 'fields/fullName/1'
          },
          payload: {
            contentTypeId: 'person',
            fieldId: 'fullName',
            props: {
              localized: true
            }
          }
        },
        {
          type: 'field/update',
          meta: {
            contentTypeInstanceId: 'contentType/person/0',
            fieldInstanceId: 'fields/fullName/0'
          },
          payload: {
            contentTypeId: 'person',
            fieldId: 'fullName',
            props: {
              required: true
            }
          }
        }, {
          meta: {
            contentTypeInstanceId: 'contentType/person/0'
          },
          type: 'contentType/update',
          payload: {
            contentTypeId: 'person',
            props: {
              name: 'bar'
            }
          }
        }
        ],
        [{
          type: 'contentType/update',
          meta: {
            contentTypeInstanceId: 'contentType/address/0'
          },
          payload: {
            contentTypeId: 'address',
            props: {
              name: 'the new name'
            }
          }
        }],
        [{
          meta: {
            contentTypeInstanceId: 'contentType/person/0'
          },
          type: 'contentType/update',
          payload: {
            contentTypeId: 'person',
            props: {
              name: 'a person'
            }
          }
        }],
        [
          {
            type: 'field/update',
            meta: {
              contentTypeInstanceId: 'contentType/address/0',
              fieldInstanceId: 'fields/houseNumber/0'
            },
            payload: {
              contentTypeId: 'address',
              fieldId: 'houseNumber',
              props: {
                omitted: true
              }
            }
          },
          {
            type: 'field/create',
            meta: {
              contentTypeInstanceId: 'contentType/address/0',
              fieldInstanceId: 'fields/houseExtension/0'
            },
            payload: {
              contentTypeId: 'address',
              fieldId: 'houseExtension'
            }
          },
          {
            type: 'field/update',
            meta: {
              contentTypeInstanceId: 'contentType/address/0',
              fieldInstanceId: 'fields/houseExtension/0'
            },
            payload: {
              contentTypeId: 'address',
              fieldId: 'houseExtension',
              props: {
                type: 'Symbol'
              }
            }
          }
        ]
      ]);
    }));
  });
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

      const plan = stripCallsites(migrationChunks(steps));

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
        }],
        [{
          type: 'field/delete',
          meta: {
            contentTypeInstanceId: 'contentType/person/0',
            fieldInstanceId: 'fields/favoriteColor/0'
          },
          payload: {
            contentTypeId: 'person',
            fieldId: 'favoriteColor'
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

  describe('when changing the id of a field', function () {
    it('puts it in a separate chunk', Bluebird.coroutine(function * () {
      const steps = yield migrationSteps(function up (migration) {
        const book = migration.editContentType('book');
        book.editField('pages').name('new pages title');
        book.changeFieldId('title', 'newTitle');
        book.editField('newTitle').name('new Title');
      });

      const plan = stripCallsites(migrationChunks(steps));

      expect(plan).to.eql([
        [{
          type: 'field/update',
          meta: {
            contentTypeInstanceId: 'contentType/book/0',
            fieldInstanceId: 'fields/pages/0'
          },
          payload: {
            contentTypeId: 'book',
            fieldId: 'pages',
            props: {
              name: 'new pages title'
            }
          }
        }],
        [{
          type: 'field/rename',
          meta: {
            contentTypeInstanceId: 'contentType/book/0',
            fieldInstanceId: 'fields/title/0'
          },
          payload: {
            contentTypeId: 'book',
            fieldId: 'title',
            props: {
              newId: 'newTitle'
            }
          }
        }],
        [{
          type: 'field/update',
          meta: {
            contentTypeInstanceId: 'contentType/book/0',
            fieldInstanceId: 'fields/newTitle/0'
          },
          payload: {
            contentTypeId: 'book',
            fieldId: 'newTitle',
            props: {
              name: 'new Title'
            }
          }
        }]
      ]);
    }));
  });
  describe('when deleting a content type', function () {
    it('includes it in the plan', Bluebird.coroutine(function * () {
      const steps = yield migrationSteps(function up (migration) {
        const person = migration.editContentType('person');
        migration.deleteContentType('recipe');

        person.editField('lastName', {
          name: 'New Last Name'
        });
      });

      const plan = stripCallsites(migrationChunks(steps));

      expect(plan).to.eql([
        [{
          type: 'contentType/delete',
          meta: {
            contentTypeInstanceId: 'contentType/recipe/0'
          },
          payload: {
            contentTypeId: 'recipe'
          }
        }], [{
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

  describe('when transforming content', function () {
    it('goes into a separate chunk', Bluebird.coroutine(function * () {
      const transformFunction = function (sourceFields) {
        const [firstName, lastName] = sourceFields;
        return firstName + ' ' + lastName;
      };
      const steps = yield migrationSteps(function (migration) {
        const person = migration.editContentType('person');
        person.createField('fullName').name('Full name').type('Text');
        person.transformContent({
          from: ['firstName', 'lastName'],
          to: ['fullName'],
          transform: transformFunction
        });
        const animal = migration.editContentType('animal');
        animal.transformContent({
          from: ['firstName', 'lastName'],
          to: ['fullName'],
          transform: transformFunction
        });
      });

      const plan = stripCallsites(migrationChunks(steps));
      expect(plan).to.eql([
        [{
          'type': 'field/create',
          'meta': {
            'contentTypeInstanceId': 'contentType/person/0',
            'fieldInstanceId': 'fields/fullName/0'
          },
          'payload': {
            'contentTypeId': 'person',
            'fieldId': 'fullName'
          }
        },
        {
          'type': 'field/update',
          'meta': {
            'contentTypeInstanceId': 'contentType/person/0',
            'fieldInstanceId': 'fields/fullName/0'
          },
          'payload': {
            'contentTypeId': 'person',
            'fieldId': 'fullName',
            'props': {
              'name': 'Full name'
            }
          }
        },
        {
          'type': 'field/update',
          'meta': {
            'contentTypeInstanceId': 'contentType/person/0',
            'fieldInstanceId': 'fields/fullName/0'
          },
          'payload': {
            'contentTypeId': 'person',
            'fieldId': 'fullName',
            'props': {
              'type': 'Text'
            }
          }
        }],
        [{
          type: 'contentType/transformContent',
          meta: {
            contentTypeInstanceId: 'contentType/person/0'
          },
          payload: {
            transformation: {
              from: ['firstName', 'lastName'],
              to: ['fullName'],
              transform: transformFunction
            },
            contentTypeId: 'person'
          }
        }],
        [{
          type: 'contentType/transformContent',
          meta: {
            contentTypeInstanceId: 'contentType/animal/0'
          },
          payload: {
            transformation: {
              from: ['firstName', 'lastName'],
              to: ['fullName'],
              transform: transformFunction
            },
            contentTypeId: 'animal'
          }
        }]
      ]);
    }));
  });
});
