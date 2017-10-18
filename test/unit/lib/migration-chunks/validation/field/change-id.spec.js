'use strict';

const { expect } = require('chai');
const Bluebird = require('bluebird');

const migrationPlan = require('../../../../../../src/lib/migration-chunks');
const migrationSteps = require('../../../../../../src/lib/migration-steps');
const validatePlan = require('../../../../../../src/lib/migration-chunks/validation');

const stripCallsite = require('../../../../../helpers/strip-callsite');
const stripCallsites = (plan) => plan.map((chunk) => chunk.map(stripCallsite));

describe('chunks validation when changing field ids', () => {
  it('returns an error when referring to a field by its old id in the same migration', Bluebird.coroutine(function * () {
    const steps = yield migrationSteps(function up (migration) {
      const book = migration.editContentType('book');
      book.changeFieldId('title', 'newTitle');
      book.editField('title').name('new Title');
    });
    const plan = stripCallsites(migrationPlan(steps));
    const contentTypes = [{
      sys: { id: 'book' },
      fields: [{
        id: 'title'
      }]
    }];

    const validationErrors = validatePlan(plan, contentTypes);
    expect(validationErrors).to.eql([
      {
        type: 'InvalidAction',
        message: 'You cannot edit the field "title" because its ID was changed to "newTitle" earlier in the migration.',
        details: {
          step: {
            'type': 'field/update',
            'meta': {
              'contentTypeInstanceId': 'contentType/book/0',
              'fieldInstanceId': 'fields/title/1'
            },
            'payload': {
              'contentTypeId': 'book',
              'fieldId': 'title',
              'props': {
                'name': 'new Title'
              }
            }
          }
        }
      }
    ]);
  }));

  it('does not return errors when switching ids for several fields', Bluebird.coroutine(function * () {
    const steps = yield migrationSteps(function up (migration) {
      const book = migration.editContentType('book');
      book.changeFieldId('title', 'newTitle');
      migration.editContentType('movie').changeFieldId('title', 'newTitle');
      book.editField('newTitle').name('new Title');
      book.changeFieldId('pages', 'numberOfPages');
    });
    const plan = stripCallsites(migrationPlan(steps));
    const contentTypes = [{
      sys: { id: 'book' },
      fields: [{
        id: 'title'
      }, {
        id: 'pages'
      }]
    }, {
      sys: { id: 'movie' },
      fields: [{
        id: 'title'
      }]
    }];

    const validationErrors = validatePlan(plan, contentTypes);
    expect(validationErrors).to.eql([]);
  }));

  it('does not return errors when switching the id for a field and then creating a field with the same id later on', Bluebird.coroutine(function * () {
    const steps = yield migrationSteps(function up (migration) {
      const book = migration.editContentType('book');
      book.changeFieldId('title', 'newTitle');
      book.createField('title', {
        name: 'titulo',
        type: 'Symbol'
      });
    });
    const plan = stripCallsites(migrationPlan(steps));
    const contentTypes = [{
      sys: { id: 'book' },
      fields: [{
        id: 'title'
      }]
    }];

    const validationErrors = validatePlan(plan, contentTypes);
    expect(validationErrors).to.eql([]);
  }));

  it('does return an error when switching the id of a field to an already existing one', Bluebird.coroutine(function * () {
    const steps = yield migrationSteps(function up (migration) {
      const book = migration.editContentType('book');
      book.changeFieldId('title', 'pages');
    });
    const plan = stripCallsites(migrationPlan(steps));
    const contentTypes = [{
      sys: { id: 'book' },
      fields: [{
        id: 'title'
      }, {
        id: 'pages'
      }]
    }];

    const validationErrors = validatePlan(plan, contentTypes);
    expect(validationErrors).to.eql([
      {
        type: 'InvalidAction',
        message: 'Cannot rename field "title" to "pages" because a field with this ID already exists on content type "book".',
        details: {
          step: {
            'type': 'field/rename',
            'meta': {
              'contentTypeInstanceId': 'contentType/book/0',
              'fieldInstanceId': 'fields/title/0'
            },
            'payload': {
              'contentTypeId': 'book',
              'fieldId': 'title',
              'props': {
                'newId': 'pages'
              }
            }
          }
        }
      }
    ]);
  }));

  it('does return an error when switching the id of 2 fields to the same id', Bluebird.coroutine(function * () {
    const steps = yield migrationSteps(function up (migration) {
      const book = migration.editContentType('book');
      book.changeFieldId('title', 'newTitle');
      book.changeFieldId('pages', 'title');
      book.changeFieldId('someThingElse', 'title');
    });
    const plan = stripCallsites(migrationPlan(steps));
    const contentTypes = [{
      sys: { id: 'book' },
      fields: [{
        id: 'title'
      }, {
        id: 'pages'
      }, {
        id: 'someThingElse'
      }]
    }];

    const validationErrors = validatePlan(plan, contentTypes);
    expect(validationErrors).to.eql([
      {
        type: 'InvalidAction',
        message: 'Cannot rename field "someThingElse" to "title" because a field with this ID already exists on content type "book".',
        details: {
          step: {
            'type': 'field/rename',
            'meta': {
              'contentTypeInstanceId': 'contentType/book/0',
              'fieldInstanceId': 'fields/someThingElse/0'
            },
            'payload': {
              'contentTypeId': 'book',
              'fieldId': 'someThingElse',
              'props': {
                'newId': 'title'
              }
            }
          }
        }
      }
    ]);
  }));

  it('returns an error when setting a new id but it is the same as the old', Bluebird.coroutine(function * () {
    const steps = yield migrationSteps(function up (migration) {
      const book = migration.editContentType('book');
      book.changeFieldId('title', 'title');
    });
    const plan = stripCallsites(migrationPlan(steps));
    const contentTypes = [{
      sys: { id: 'book' },
      fields: [{
        id: 'title'
      }]
    }];

    const validationErrors = validatePlan(plan, contentTypes);
    expect(validationErrors).to.eql([
      {
        type: 'InvalidAction',
        message: 'The new ID for the field "title" contains the same value as the existing ID. The new ID must be different from the old.',
        details: {
          step: {
            'type': 'field/rename',
            'meta': {
              'contentTypeInstanceId': 'contentType/book/0',
              'fieldInstanceId': 'fields/title/0'
            },
            'payload': {
              'contentTypeId': 'book',
              'fieldId': 'title',
              'props': {
                'newId': 'title'
              }
            }
          }
        }
      }
    ]);
  }));

  it('returns an error when changing the ID of a field more than once', Bluebird.coroutine(function * () {
    const steps = yield migrationSteps(function up (migration) {
      const school = migration.editContentType('student');
      school.changeFieldId('school', 'primarySchool');
      school.changeFieldId('primarySchool', 'preSchool');
    });
    const plan = stripCallsites(migrationPlan(steps));
    const contentTypes = [{
      sys: { id: 'student' },
      fields: [{
        id: 'school'
      }]
    }];

    const validationErrors = validatePlan(plan, contentTypes);

    expect(validationErrors).to.eql([
      {
        type: 'InvalidAction',
        message: 'The ID of "primarySchool" was already changed in this migration. You cannot change the ID of a field more than once.',
        details: {
          step: {
            'type': 'field/rename',
            'meta': {
              'contentTypeInstanceId': 'contentType/student/0',
              'fieldInstanceId': 'fields/primarySchool/0'
            },
            'payload': {
              'contentTypeId': 'student',
              'fieldId': 'primarySchool',
              'props': {
                'newId': 'preSchool'
              }
            }
          }
        }
      }
    ]);
  }));

  it('when changing the ID of a field but that field does not exist', Bluebird.coroutine(function * () {
    const steps = yield migrationSteps(function up (migration) {
      const school = migration.editContentType('student');
      school.changeFieldId('primarySchool', 'preSchool');
    });
    const plan = stripCallsites(migrationPlan(steps));
    const contentTypes = [{
      sys: { id: 'student' },
      fields: [{
        id: 'school'
      }]
    }];

    const validationErrors = validatePlan(plan, contentTypes);

    expect(validationErrors).to.eql([
      {
        type: 'InvalidAction',
        message: 'You cannot edit field "primarySchool" because it does not exist.',
        details: {
          step: {
            'type': 'field/rename',
            'meta': {
              'contentTypeInstanceId': 'contentType/student/0',
              'fieldInstanceId': 'fields/primarySchool/0'
            },
            'payload': {
              'contentTypeId': 'student',
              'fieldId': 'primarySchool',
              'props': {
                'newId': 'preSchool'
              }
            }
          }
        }
      }
    ]);
  }));
});
