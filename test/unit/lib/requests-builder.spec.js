'use strict';

const { expect } = require('chai');
const Bluebird = require('bluebird');

const migrationPayloads = require('../../../lib/migration-payloads/content-type');
const migrationChunks = require('../../../lib/migration-chunks');
const migrationPlan = require('../../../lib/migration-plan');
const migrationSteps = require('../../../lib/migration-steps');
const builder = require('../../../lib/requests-builder');

describe('Executor', function () {
  describe('With just one Content Type', function () {
    it('creates a Content Type', Bluebird.coroutine(function * () {
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
      const payloads = migrationPayloads(plan);
      const requests = builder(payloads);

      // Note: we are assuming that the 'request' has
      // been already configured with the space
      // ('foo' on this case)
      expect(requests).to.eql([{
        url: '/content_types/person',
        method: 'PUT',
        headers: {
          'X-Contentful-Version': 0
        },
        data: {
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
      },
      {
        url: '/content_types/person/published',
        method: 'PUT',
        headers: {
          'X-Contentful-Version': 1
        }
      }]);
    }));

    it('updates a Content Type', Bluebird.coroutine(function * () {
      const steps = yield migrationSteps(function up (migration) {
        const dog = migration.editContentType('dog', {
          description: 'Woof woof',
          name: 'Very nice dog'
        });

        dog.editField('kills', {
          required: false
        });

        dog.createField('goodboys', {
          name: 'Who is a good boy',
          type: 'Number',
          required: true
        });
      });

      const chunks = migrationChunks(steps);
      const plan = migrationPlan(chunks);
      const payloads = migrationPayloads(plan, [{
        sys: { id: 'dog', version: 10 },
        fields: [
          {
            id: 'kills',
            type: 'Number',
            name: 'kills',
            required: false
          }
        ]
      }]);
      const requests = builder(payloads);

      // Note: we are assuming that the 'request' has
      // been already configured with the space
      // ('foo' on this case)
      expect(requests).to.eql([{
        url: '/content_types/dog',
        method: 'PUT',
        headers: {
          'X-Contentful-Version': 10
        },
        data: {
          name: 'Very nice dog',
          description: 'Woof woof',
          fields: [
            {
              id: 'kills',
              type: 'Number',
              name: 'kills',
              required: false
            },
            {
              id: 'goodboys',
              type: 'Number',
              name: 'Who is a good boy',
              required: true
            }
          ]
        }
      },
      {
        url: '/content_types/dog/published',
        method: 'PUT',
        headers: {
          'X-Contentful-Version': 11
        }
      }]);
    }));
  });

  describe('When creating and editing multiple CTs in sequence', function () {
    it('runs the requests', Bluebird.coroutine(function * () {
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

        const dog = migration.editContentType('dog', {
          description: 'Woof woof',
          name: 'Very nice dog'
        });

        dog.editField('kills', {
          required: false
        });

        dog.createField('goodboys', {
          name: 'Who is a good boy',
          type: 'Number',
          required: true
        });

        person.createField('lastName', {
          name: 'Last Name',
          type: 'Symbol',
          localized: true
        });

        dog.createField('barks', {
          name: 'Bark Bark',
          type: 'Number',
          required: false
        });
      });

      const chunks = migrationChunks(steps);
      const plan = migrationPlan(chunks);
      const payloads = migrationPayloads(plan, [{
        sys: { id: 'dog', version: 10 },
        fields: [
          {
            id: 'kills',
            type: 'Number',
            name: 'kills',
            required: false
          }
        ]
      }]);
      const requests = builder(payloads);

      expect(requests).to.eql([
        {
          url: '/content_types/person',
          method: 'PUT',
          headers: {
            'X-Contentful-Version': 0
          },
          data: {
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
        },
        {
          url: '/content_types/person/published',
          method: 'PUT',
          headers: {
            'X-Contentful-Version': 1
          }
        },
        {
          url: '/content_types/dog',
          method: 'PUT',
          headers: {
            'X-Contentful-Version': 10
          },
          data: {
            name: 'Very nice dog',
            description: 'Woof woof',
            fields: [
              {
                id: 'kills',
                type: 'Number',
                name: 'kills',
                required: false
              },
              {
                id: 'goodboys',
                type: 'Number',
                name: 'Who is a good boy',
                required: true
              }
            ]
          }
        },
        {
          url: '/content_types/dog/published',
          method: 'PUT',
          headers: {
            'X-Contentful-Version': 11
          }
        },
        {
          url: '/content_types/person',
          method: 'PUT',
          headers: {
            'X-Contentful-Version': 2
          },
          data: {
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
              },
              {
                id: 'lastName',
                name: 'Last Name',
                type: 'Symbol',
                localized: true
              }
            ]
          }
        },
        {
          url: '/content_types/person/published',
          method: 'PUT',
          headers: {
            'X-Contentful-Version': 3
          }
        },
        {
          url: '/content_types/dog',
          method: 'PUT',
          headers: {
            'X-Contentful-Version': 12
          },
          data: {
            name: 'Very nice dog',
            description: 'Woof woof',
            fields: [
              {
                id: 'kills',
                type: 'Number',
                name: 'kills',
                required: false
              },
              {
                id: 'goodboys',
                type: 'Number',
                name: 'Who is a good boy',
                required: true
              },
              {
                id: 'barks',
                name: 'Bark Bark',
                type: 'Number',
                required: false
              }
            ]
          }
        },
        {
          url: '/content_types/dog/published',
          method: 'PUT',
          headers: {
            'X-Contentful-Version': 13
          }
        }
      ]);
    }));

    it('deletes a field', Bluebird.coroutine(function * () {
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

        person.deleteField('age');
      });

      const chunks = migrationChunks(steps);
      const plan = migrationPlan(chunks);
      const payloads = migrationPayloads(plan);
      const requests = builder(payloads);

      // Note: we are assuming that the 'request' has
      // been already configured with the space
      // ('foo' on this case)
      expect(requests).to.eql([{
        url: '/content_types/person',
        method: 'PUT',
        headers: {
          'X-Contentful-Version': 0
        },
        data: {
          name: 'bar',
          description: 'A content type for a person',
          fields: [{
            id: 'age',
            name: 'Age',
            type: 'Number',
            required: true
          }]
        }
      },
      {
        url: '/content_types/person/published',
        method: 'PUT',
        headers: {
          'X-Contentful-Version': 1
        }
      }, {
        url: '/content_types/person',
        method: 'PUT',
        headers: {
          'X-Contentful-Version': 2
        },
        data: {
          name: 'bar',
          description: 'A content type for a person',
          fields: [{
            id: 'age',
            name: 'Age',
            type: 'Number',
            required: true,
            omitted: true
          }]
        }
      },
      {
        url: '/content_types/person/published',
        method: 'PUT',
        headers: {
          'X-Contentful-Version': 3
        }
      }, {
        url: '/content_types/person',
        method: 'PUT',
        headers: {
          'X-Contentful-Version': 4
        },
        data: {
          name: 'bar',
          description: 'A content type for a person',
          fields: [{
            id: 'age',
            name: 'Age',
            type: 'Number',
            required: true,
            omitted: true,
            deleted: true
          }]
        }
      },
      {
        url: '/content_types/person/published',
        method: 'PUT',
        headers: {
          'X-Contentful-Version': 5
        }
      }
      ]);
    }));
  });

  it('makes correct requests when deleting a content type', Bluebird.coroutine(function * () {
    const steps = yield migrationSteps(function up (migration) {
      migration.deleteContentType('recipe');
    });

    const chunks = migrationChunks(steps);
    const plan = migrationPlan(chunks);
    const payloads = migrationPayloads(plan);
    const requests = builder(payloads);

    expect(requests).to.eql([{
      url: '/content_types/recipe/published',
      method: 'DELETE',
      headers: {
        'X-Contentful-Version': 0
      }
    },
    {
      url: '/content_types/recipe',
      method: 'DELETE',
      headers: {
        'X-Contentful-Version': 1
      }
    }]);
  }));
});
