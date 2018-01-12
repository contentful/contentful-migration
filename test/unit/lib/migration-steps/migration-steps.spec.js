'use strict';

const { expect } = require('chai');
const Bluebird = require('bluebird');

const migration = require('../../../../src/lib/migration-steps').migration;
const stripCallsite = require('../../../helpers/strip-callsite');
const stripCallsites = (steps) => steps.map(stripCallsite);

describe('migration-steps', function () {
  describe('when executing a migration', function () {
    it('makes a plan', Bluebird.coroutine(function * () {
      const plan = yield migration(function up (migration) {
        const person = migration.createContentType('person', {
          description: 'A content type for a person'
        });

        person.createField('fullName', {
          name: 'Full Name',
          type: 'Symbol'
        });

        person.name('a person');

        const address = migration.editContentType('address', {
          name: 'the new name'
        });

        address.editField('houseNumber').omitted(true);
        address.createField('houseExtension', {
          type: 'Symbol'
        });
      });

      expect(stripCallsites(plan)).to.eql([
        {
          'type': 'contentType/create',
          'meta': {
            'contentTypeInstanceId': 'contentType/person/0'
          },
          'payload': {
            'contentTypeId': 'person'
          }
        },
        {
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
        },
        {
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
              'name': 'Full Name'
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
              'type': 'Symbol'
            }
          }
        },
        {
          'type': 'contentType/update',
          'meta': {
            'contentTypeInstanceId': 'contentType/person/0'
          },
          'payload': {
            'contentTypeId': 'person',
            'props': {
              'name': 'a person'
            }
          }
        },
        {
          'type': 'contentType/update',
          'meta': {
            'contentTypeInstanceId': 'contentType/address/0'
          },
          'payload': {
            'contentTypeId': 'address',
            'props': {
              'name': 'the new name'
            }
          }
        },
        {
          'type': 'field/update',
          'meta': {
            'contentTypeInstanceId': 'contentType/address/0',
            'fieldInstanceId': 'fields/houseNumber/0'
          },
          'payload': {
            'contentTypeId': 'address',
            'fieldId': 'houseNumber',
            'props': {
              'omitted': true
            }
          }
        },
        {
          'type': 'field/create',
          'meta': {
            'contentTypeInstanceId': 'contentType/address/0',
            'fieldInstanceId': 'fields/houseExtension/0'
          },
          'payload': {
            'contentTypeId': 'address',
            'fieldId': 'houseExtension'
          }
        },
        {
          'type': 'field/update',
          'meta': {
            'contentTypeInstanceId': 'contentType/address/0',
            'fieldInstanceId': 'fields/houseExtension/0'
          },
          'payload': {
            'contentTypeId': 'address',
            'fieldId': 'houseExtension',
            'props': {
              'type': 'Symbol'
            }
          }
        }
      ]);
    }));
  });

  describe('when calling methods for props that do not exist', function () {
    it('creates the steps anyway', Bluebird.coroutine(function * () {
      const plan = yield migration(function up (migration) {
        const person = migration.createContentType('person', {
          foo: 'This is an invalid prop'
        });

        person.createField('fullName', {
          bar: 'Full Name',
          type: 'Symbol'
        });

        person.fussel('a person');
      });

      expect(stripCallsites(plan)).to.eql([
        {
          'type': 'contentType/create',
          'meta': {
            'contentTypeInstanceId': 'contentType/person/0'
          },
          'payload': {
            'contentTypeId': 'person'
          }
        },
        {
          'type': 'contentType/update',
          'meta': {
            'contentTypeInstanceId': 'contentType/person/0'
          },
          'payload': {
            'contentTypeId': 'person',
            'props': {
              'foo': 'This is an invalid prop'
            }
          }
        },
        {
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
              'bar': 'Full Name'
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
              'type': 'Symbol'
            }
          }
        },
        {
          'type': 'contentType/update',
          'meta': {
            'contentTypeInstanceId': 'contentType/person/0'
          },
          'payload': {
            'contentTypeId': 'person',
            'props': {
              'fussel': 'a person'
            }
          }
        }
      ]);
    }));
  });

  describe('when dealing with multiple instances', function () {
    it('makes a plan', Bluebird.coroutine(function * () {
      const plan = yield migration(function up (migration) {
        const person1 = migration.editContentType('person', {
          description: 'A content type for a person'
        });

        const person2 = migration.createContentType('person', {
          description: 'A content type for a person'
        });

        person2.createField('fullName', {
          name: 'Full Name',
          type: 'Symbol'
        });

        person1.createField('fullName', {
          name: 'Full Name',
          type: 'Symbol'
        });
      });

      expect(stripCallsites(plan)).to.eql([
        {
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
        },
        {
          'type': 'contentType/create',
          'meta': {
            'contentTypeInstanceId': 'contentType/person/1'
          },
          'payload': {
            'contentTypeId': 'person'
          }
        },
        {
          'type': 'contentType/update',
          'meta': {
            'contentTypeInstanceId': 'contentType/person/1'
          },
          'payload': {
            'contentTypeId': 'person',
            'props': {
              'description': 'A content type for a person'
            }
          }
        },
        {
          'type': 'field/create',
          'meta': {
            'contentTypeInstanceId': 'contentType/person/1',
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
            'contentTypeInstanceId': 'contentType/person/1',
            'fieldInstanceId': 'fields/fullName/0'
          },
          'payload': {
            'contentTypeId': 'person',
            'fieldId': 'fullName',
            'props': {
              'name': 'Full Name'
            }
          }
        },
        {
          'type': 'field/update',
          'meta': {
            'contentTypeInstanceId': 'contentType/person/1',
            'fieldInstanceId': 'fields/fullName/0'
          },
          'payload': {
            'contentTypeId': 'person',
            'fieldId': 'fullName',
            'props': {
              'type': 'Symbol'
            }
          }
        },
        {
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
              'name': 'Full Name'
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
              'type': 'Symbol'
            }
          }
        }
      ]);
    }));
  });

  describe('when deleting a content type', function () {
    it('includes it in the steps', Bluebird.coroutine(function * () {
      const plan = yield migration(function up (migration) {
        migration.deleteContentType('recipe');
      });

      expect(stripCallsites(plan)).to.eql([
        {
          'type': 'contentType/delete',
          'meta': {
            'contentTypeInstanceId': 'contentType/recipe/0'
          },
          'payload': {
            'contentTypeId': 'recipe'
          }
        }
      ]);
    }));
  });

  describe('when defining the display field', function () {
    it('sets the display field', Bluebird.coroutine(function * () {
      const plan = yield migration(function up (migration) {
        const person = migration.createContentType('person', {
          description: 'A content type for a person',
          displayField: 'favorite'
        });
        person.createField('favorite', {
          name: 'favorite color',
          type: 'Symbol'
        });
      });

      expect(stripCallsites(plan)).to.eql([
        {
          'type': 'contentType/create',
          'meta': {
            'contentTypeInstanceId': 'contentType/person/0'
          },
          'payload': {
            'contentTypeId': 'person'
          }
        },
        {
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
        },
        {
          'type': 'contentType/update',
          'meta': {
            'contentTypeInstanceId': 'contentType/person/0'
          },
          'payload': {
            'contentTypeId': 'person',
            'props': {
              'displayField': 'favorite'
            }
          }
        },
        {
          'type': 'field/create',
          'meta': {
            'contentTypeInstanceId': 'contentType/person/0',
            'fieldInstanceId': 'fields/favorite/0'
          },
          'payload': {
            'contentTypeId': 'person',
            'fieldId': 'favorite'
          }
        },
        {
          'type': 'field/update',
          'meta': {
            'contentTypeInstanceId': 'contentType/person/0',
            'fieldInstanceId': 'fields/favorite/0'
          },
          'payload': {
            'contentTypeId': 'person',
            'fieldId': 'favorite',
            'props': {
              'name': 'favorite color'
            }
          }
        },
        {
          'type': 'field/update',
          'meta': {
            'contentTypeInstanceId': 'contentType/person/0',
            'fieldInstanceId': 'fields/favorite/0'
          },
          'payload': {
            'contentTypeId': 'person',
            'fieldId': 'favorite',
            'props': {
              'type': 'Symbol'
            }
          }
        }
      ]);
    }));

    it('sets the display field also when chaining', Bluebird.coroutine(function * () {
      const plan = yield migration(function up (migration) {
        const person = migration.createContentType('person', {
          description: 'A content type for a person'
        });
        person.createField('favorite', {
          name: 'favorite color',
          type: 'Symbol'
        });
        person.displayField('favorite');
      });

      expect(stripCallsites(plan)).to.eql([
        {
          'type': 'contentType/create',
          'meta': {
            'contentTypeInstanceId': 'contentType/person/0'
          },
          'payload': {
            'contentTypeId': 'person'
          }
        },
        {
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
        },
        {
          'type': 'field/create',
          'meta': {
            'contentTypeInstanceId': 'contentType/person/0',
            'fieldInstanceId': 'fields/favorite/0'
          },
          'payload': {
            'contentTypeId': 'person',
            'fieldId': 'favorite'
          }
        },
        {
          'type': 'field/update',
          'meta': {
            'contentTypeInstanceId': 'contentType/person/0',
            'fieldInstanceId': 'fields/favorite/0'
          },
          'payload': {
            'contentTypeId': 'person',
            'fieldId': 'favorite',
            'props': {
              'name': 'favorite color'
            }
          }
        },
        {
          'type': 'field/update',
          'meta': {
            'contentTypeInstanceId': 'contentType/person/0',
            'fieldInstanceId': 'fields/favorite/0'
          },
          'payload': {
            'contentTypeId': 'person',
            'fieldId': 'favorite',
            'props': {
              'type': 'Symbol'
            }
          }
        },
        {
          'type': 'contentType/update',
          'meta': {
            'contentTypeInstanceId': 'contentType/person/0'
          },
          'payload': {
            'contentTypeId': 'person',
            'props': {
              'displayField': 'favorite'
            }
          }
        }
      ]);
    }));
  });
  describe('when deleting a field', function () {
    it('a delete step is included in the plan', Bluebird.coroutine(function * () {
      const plan = yield migration(function up (migration) {
        migration.editContentType('person').deleteField('age');
      });

      expect(stripCallsites(plan)).to.eql([
        {
          type: 'field/delete',
          meta: {
            contentTypeInstanceId: 'contentType/person/0',
            fieldInstanceId: 'fields/age/0'
          },
          payload: {
            contentTypeId: 'person',
            fieldId: 'age'
          }
        }
      ]);
    }));
  });

  describe('when setting a new id and it is ok', function () {
    it('returns the right steps', Bluebird.coroutine(function * () {
      const plan = yield migration(function (migration) {
        migration
          .editContentType('book')
          .changeFieldId('title', 'bookTitle');
      });

      expect(stripCallsites(plan)).to.eql([
        {
          type: 'field/rename',
          meta: {
            contentTypeInstanceId: 'contentType/book/0',
            fieldInstanceId: 'fields/title/0'
          },
          payload: {
            contentTypeId: 'book',
            fieldId: 'title',
            props: {
              newId: 'bookTitle'
            }
          }
        }]);
    }));
  });

  describe('when using Promises within migration scripts', function () {
    it('returns the right steps', Bluebird.coroutine(function * () {
      const plan = yield migration(function (migration) {
        return Bluebird.delay(1).then(() => migration
          .editContentType('book')
          .changeFieldId('title', 'bookTitle')
        );
      });

      expect(stripCallsites(plan)).to.eql([
        {
          type: 'field/rename',
          meta: {
            contentTypeInstanceId: 'contentType/book/0',
            fieldInstanceId: 'fields/title/0'
          },
          payload: {
            contentTypeId: 'book',
            fieldId: 'title',
            props: {
              newId: 'bookTitle'
            }
          }
        }
      ]);
    }));
  });

  describe('when transforming content', function () {
    it('returns the right steps', Bluebird.coroutine(function * () {
      const transformFunction = function (sourceFields) {
        const [firstName, lastName] = sourceFields;
        return firstName + ' ' + lastName;
      };
      const plan = yield migration(function (migration) {
        migration.transformEntries({
          contentType: 'author',
          from: ['firstName', 'lastName'],
          to: ['fullName'],
          transform: transformFunction
        });
      });

      expect(stripCallsites(plan)).to.eql([
        {
          type: 'contentType/transformEntries',
          meta: {
            contentTypeInstanceId: 'contentType/author/0'
          },
          payload: {
            contentTypeId: 'author',
            transformation: {
              from: ['firstName', 'lastName'],
              to: ['fullName'],
              transform: transformFunction
            }
          }
        }
      ]);
    }));
  });

  describe('when updating an editor interface', function () {
    it('returns the right steps', Bluebird.coroutine(function * () {
      const plan = yield migration(function (migration) {
        migration
          .editContentType('book')
          .changeEditorInterface('title', 'markdown')
          .changeEditorInterface('desc', 'singleLine');
      });

      expect(stripCallsites(plan)).to.eql([
        {
          type: 'contentType/changeEditorInterface',
          meta: {
            contentTypeInstanceId: 'contentType/book/0'
          },
          payload: {
            contentTypeId: 'book',
            editorInterface: {
              fieldId: 'title',
              widgetId: 'markdown'
            }
          }
        },
        {
          type: 'contentType/changeEditorInterface',
          meta: {
            contentTypeInstanceId: 'contentType/book/0'
          },
          payload: {
            contentTypeId: 'book',
            editorInterface: {
              fieldId: 'desc',
              widgetId: 'singleLine'
            }
          }
        }]);
    }));
  });
});
