'use strict';

const { expect } = require('chai');
const _ = require('lodash');
const Bluebird = require('bluebird');

const migrationPlan = require('../../../../src/lib/migration-plan');
const migrationChunks = require('../../../../src/lib/migration-chunks');
const migrationSteps = require('../../../../src/lib/migration-steps');
const builder = require('../../../../src/lib/migration-payloads/index');

describe('Payload builder', function () {
  describe('Without a Content Type payload', function () {
    it('returns the expected payload', Bluebird.coroutine(function * () {
      const steps = yield migrationSteps(function up (migration) {
        const person = migration.createContentType('person', {
          name: 'bar',
          description: 'A content type for a person'
        });

        person.createField('age', {
          name: 'Age',
          type: 'Number',
          required: true
        });

        person.createField('fullName', {
          name: 'Full Name',
          type: 'Symbol',
          required: true,
          localized: true
        });
      });

      const chunks = migrationChunks(steps);
      const plan = migrationPlan(chunks);
      const payload = builder(plan);

      expect(payload).to.eql([{
        meta: {
          contentTypeId: 'person',
          version: 1,
          parentVersion: 0
        },
        payload: {
          name: 'bar',
          description: 'A content type for a person',
          fields: [
            {
              id: 'age',
              name: 'Age',
              type: 'Number',
              required: true
            },
            {
              id: 'fullName',
              name: 'Full Name',
              type: 'Symbol',
              required: true,
              localized: true
            }
          ]
        }
      }]);
    }));
  });

  describe('when deleting a field', function () {
    it('returns the expected payload', Bluebird.coroutine(function * () {
      const contentType = {
        name: 'Very dangerous dog',
        description: 'Woof woof',
        fields: [
          {
            id: 'kills',
            type: 'Number',
            name: 'kills',
            required: true
          },
          {
            id: 'favoriteFood',
            type: 'Symbol',
            name: 'food',
            required: true
          }
        ],
        sys: {
          version: 2,
          id: 'dog'
        }
      };

      const steps = yield migrationSteps(function up (migration) {
        const dog = migration.editContentType('dog');
        dog.deleteField('favoriteFood');

        dog.createField('foo').name('A foo').type('Symbol');
      });

      const chunks = migrationChunks(steps);
      const plan = migrationPlan(chunks);
      const payloads = builder(plan, [contentType]);

      const basePayload = {
        meta: {
          contentTypeId: 'dog',
          version: 2,
          parentVersion: 1
        },
        payload: _.omit(contentType, ['sys'])
      };

      const firstPayload = {
        meta: {
          contentTypeId: 'dog',
          version: 3,
          parentVersion: 2,
          parent: basePayload
        },
        payload: {
          name: 'Very dangerous dog',
          description: 'Woof woof',
          fields: [
            {
              id: 'kills',
              type: 'Number',
              name: 'kills',
              required: true
            }, {
              id: 'favoriteFood',
              type: 'Symbol',
              name: 'food',
              required: true,
              omitted: true
            }
          ]
        }
      };

      const secondPayload = {
        meta: {
          contentTypeId: 'dog',
          version: 5,
          parentVersion: 4,
          parent: firstPayload
        },
        payload: {
          name: 'Very dangerous dog',
          description: 'Woof woof',
          fields: [
            {
              id: 'kills',
              type: 'Number',
              name: 'kills',
              required: true
            }, {
              id: 'favoriteFood',
              type: 'Symbol',
              name: 'food',
              required: true,
              omitted: true,
              deleted: true
            }
          ]
        }
      };

      const thirdPayload = {
        meta: {
          contentTypeId: 'dog',
          version: 7,
          parentVersion: 6,
          parent: secondPayload
        },
        payload: {
          name: 'Very dangerous dog',
          description: 'Woof woof',
          fields: [
            {
              id: 'kills',
              type: 'Number',
              name: 'kills',
              required: true
            }, {
              id: 'favoriteFood',
              type: 'Symbol',
              name: 'food',
              required: true,
              omitted: true,
              deleted: true
            }, {
              id: 'foo',
              type: 'Symbol',
              name: 'A foo'
            }
          ]
        }
      };

      expect(payloads).to.eql([firstPayload, secondPayload, thirdPayload]);
    }));
  });
  describe('when referring to a field by its new id in the same migration', function () {
    it('builds the correct payloads', Bluebird.coroutine(function * () {
      const migration = function (migration) {
        const book = migration.editContentType('book');
        book.editField('title').type('Text');
        book.changeFieldId('title', 'newTitle');
        book.editField('newTitle').name('new Title');
      };

      const existingCts = [
        {
          sys: {
            version: 1,
            id: 'book'
          },
          name: 'Book',
          fields: [{
            id: 'title',
            name: 'Title',
            type: 'Symbol'
          }]
        }
      ];

      const steps = yield migrationSteps(migration);
      const chunks = migrationChunks(steps);
      const plan = migrationPlan(chunks);
      const payloads = builder(plan, existingCts);

      const basePayload = {
        meta: {
          contentTypeId: 'book',
          version: 1,
          parentVersion: 0
        },
        payload: _.omit(existingCts[0], ['sys'])
      };

      const firstPayload = {
        meta: {
          contentTypeId: 'book',
          version: 2,
          parentVersion: 1,
          parent: basePayload
        },
        payload: {
          name: 'Book',
          fields: [{
            id: 'title',
            name: 'Title',
            type: 'Text'
          }]
        }
      };

      const secondPayload = {
        meta: {
          contentTypeId: 'book',
          version: 4,
          parentVersion: 3,
          parent: firstPayload
        },
        payload: {
          name: 'Book',
          fields: [{
            id: 'title',
            newId: 'newTitle',
            name: 'Title',
            type: 'Text'
          }]
        }
      };

      const thirdPayload = {
        meta: {
          contentTypeId: 'book',
          version: 6,
          parentVersion: 5,
          parent: secondPayload
        },
        payload: {
          name: 'Book',
          fields: [{
            id: 'newTitle',
            name: 'new Title',
            type: 'Text'
          }]
        }
      };

      expect(payloads).to.eql([firstPayload, secondPayload, thirdPayload]);
    }));
  });

  describe('when reordering a field', function () {
    it('returns the expected payload', Bluebird.coroutine(function * () {
      const contentType = {
        name: 'Very dangerous dog',
        description: 'Woof woof',
        fields: [
          {
            id: 'kills',
            type: 'Number',
            name: 'kills',
            required: true
          },
          {
            id: 'teeth',
            type: 'Number',
            name: 'teeth'
          },
          {
            id: 'age',
            type: 'Number',
            name: 'age'
          },
          {
            id: 'legs',
            type: 'Number',
            name: 'legs'
          },
          {
            id: 'favoriteFood',
            type: 'Symbol',
            name: 'food',
            required: true
          }
        ],
        sys: {
          version: 2,
          id: 'dog'
        }
      };

      const steps = yield migrationSteps(function up (migration) {
        const dog = migration.editContentType('dog');

        dog.moveField('favoriteFood').toTheTop();
        dog.moveField('kills').toTheBottom();
        dog.moveField('legs').beforeField('kills');
        dog.moveField('age').afterField('legs');
      });

      const chunks = migrationChunks(steps);
      const plan = migrationPlan(chunks);
      const payloads = builder(plan, [contentType]);

      const basePayload = {
        meta: {
          contentTypeId: 'dog',
          version: 2,
          parentVersion: 1
        },
        payload: _.omit(contentType, ['sys'])
      };

      const firstPayload = {
        meta: {
          contentTypeId: 'dog',
          version: 3,
          parentVersion: 2,
          parent: basePayload
        },
        payload: {
          name: 'Very dangerous dog',
          description: 'Woof woof',
          fields: [
            {
              id: 'favoriteFood',
              type: 'Symbol',
              name: 'food',
              required: true
            },
            {
              id: 'teeth',
              type: 'Number',
              name: 'teeth'
            },
            {
              id: 'legs',
              type: 'Number',
              name: 'legs'
            },
            {
              id: 'age',
              type: 'Number',
              name: 'age'
            },
            {
              id: 'kills',
              type: 'Number',
              name: 'kills',
              required: true
            }
          ]
        }
      };

      expect(payloads).to.eql([firstPayload]);
    }));
  });

  describe('when deleting a content type', function () {
    it('returns the expected payload', Bluebird.coroutine(function * () {
      const contentType = {
        name: 'Very dangerous dog',
        description: 'Woof woof',
        fields: [
          {
            id: 'kills',
            type: 'Number',
            name: 'kills',
            required: true
          },
          {
            id: 'favoriteFood',
            type: 'Symbol',
            name: 'food',
            required: true
          }
        ],
        sys: {
          version: 2,
          id: 'dog'
        }
      };

      const steps = yield migrationSteps(function up (migration) {
        migration.deleteContentType('dog');
      });

      const chunks = migrationChunks(steps);
      const plan = migrationPlan(chunks);
      const payloads = builder(plan, [contentType]);

      const basePayload = {
        meta: {
          contentTypeId: 'dog',
          version: 2,
          parentVersion: 1
        },
        payload: _.omit(contentType, ['sys'])
      };

      const deletePayload = {
        meta: {
          contentTypeId: 'dog',
          version: 3,
          parentVersion: 2,
          parent: basePayload
        },
        isDelete: true
      };

      expect(payloads).to.eql([deletePayload]);
    }));
  });
});
