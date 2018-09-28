'use strict'

import { expect } from 'chai'
import buildPayloads from './build-payloads'

describe('Payload builder', function () {
  describe('Without a Content Type payload', function () {
    it('returns the expected payload', async function () {
      const requests = await buildPayloads(function up (migration) {
        const person = migration.createContentType('person', {
          name: 'bar',
          description: 'A content type for a person'
        })

        person.createField('age', {
          name: 'Age',
          type: 'Number',
          required: true
        })

        person.createField('fullName', {
          name: 'Full Name',
          type: 'Symbol',
          required: true,
          localized: true
        })
      }, [])

      expect(requests).to.eql([[{
        url: '/content_types/person',
        method: 'PUT',
        headers: {
          'X-Contentful-Version': 0
        },
        data: {
          name: 'bar',
          description: 'A content type for a person',
          displayField: undefined,
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
      }, {
        url: '/content_types/person/published',
        method: 'PUT',
        headers: {
          'X-Contentful-Version': 1
        }
      }]])
    })
  })

  describe('when deleting a field', function () {
    it('returns the expected payload', async function () {
      const contentTypes = [{
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
      }]

      const requests = await buildPayloads(function up (migration) {
        const dog = migration.editContentType('dog')
        dog.deleteField('favoriteFood')

        dog.createField('foo').name('A foo').type('Symbol')
      }, contentTypes)

      expect(requests).to.eql([[{
        url: '/content_types/dog',
        method: 'PUT',
        headers: {
          'X-Contentful-Version': 2
        },
        data: {
          name: 'Very dangerous dog',
          description: 'Woof woof',
          displayField: undefined,
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
              required: true,
              omitted: true
            }
          ]
        }
      }, {
        url: '/content_types/dog/published',
        method: 'PUT',
        headers: {
          'X-Contentful-Version': 3
        }
      }, {
        url: '/content_types/dog',
        method: 'PUT',
        headers: {
          'X-Contentful-Version': 4
        },
        data: {
          name: 'Very dangerous dog',
          description: 'Woof woof',
          displayField: undefined,
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
              required: true,
              omitted: true,
              deleted: true
            }
          ]
        }
      }, {
        url: '/content_types/dog/published',
        method: 'PUT',
        headers: {
          'X-Contentful-Version': 5
        }
      }], [
        {
          url: '/content_types/dog',
          method: 'PUT',
          headers: {
            'X-Contentful-Version': 6
          },
          data: {
            name: 'Very dangerous dog',
            description: 'Woof woof',
            displayField: undefined,
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
        }, {
          url: '/content_types/dog/published',
          method: 'PUT',
          headers: {
            'X-Contentful-Version': 7
          }
        }
      ]])
    })
  })

  describe('when referring to a field by its new id in the same migration', function () {
    it('builds the correct requests', async function () {
      const migration = function (migration) {
        const book = migration.editContentType('book')
        book.editField('title').type('Text')
        book.changeFieldId('title', 'newTitle')
        book.editField('newTitle').name('new Title')
      }

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
      ]

      const requests = await buildPayloads(migration, existingCts)
      expect(requests).to.eql([[{
        url: '/content_types/book',
        method: 'PUT',
        headers: {
          'X-Contentful-Version': 1
        },
        data: {
          name: 'Book',
          description: undefined,
          displayField: undefined,
          fields: [{
            id: 'title',
            name: 'Title',
            type: 'Text'
          }]
        }
      }, {
        url: '/content_types/book/published',
        method: 'PUT',
        headers: {
          'X-Contentful-Version': 2
        }
      }
      ], [{
        url: '/content_types/book',
        method: 'PUT',
        headers: {
          'X-Contentful-Version': 3
        },
        data: {
          name: 'Book',
          description: undefined,
          displayField: undefined,
          fields: [{
            id: 'title',
            newId: 'newTitle',
            name: 'Title',
            type: 'Text'
          }]
        }
      }, {
        url: '/content_types/book/published',
        method: 'PUT',
        headers: {
          'X-Contentful-Version': 4
        }
      }, {
        url: '/content_types/book/editor_interface',
        method: 'PUT',
        headers: {
          'X-Contentful-Version': 3
        },
        data: {
          controls: []
        }
      }], [{
        url: '/content_types/book',
        method: 'PUT',
        headers: {
          'X-Contentful-Version': 5
        },
        data: {
          name: 'Book',
          description: undefined,
          displayField: undefined,
          fields: [{
            id: 'newTitle',
            name: 'new Title',
            type: 'Text'
          }]
        }
      }, {
        url: '/content_types/book/published',
        method: 'PUT',
        headers: {
          'X-Contentful-Version': 6
        }
      }]])
    })
  })

  describe('when reordering a field', function () {
    it('returns the expected payload', async function () {
      const contentTypes = [{
        name: 'Very dangerous dog',
        description: 'Woof woof',
        displayField: undefined,
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
      }]

      const requests = await buildPayloads(function up (migration) {
        const dog = migration.editContentType('dog')

        dog.moveField('favoriteFood').toTheTop()
        dog.moveField('kills').toTheBottom()
        dog.moveField('legs').beforeField('kills')
        dog.moveField('age').afterField('legs')
      }, contentTypes)

      expect(requests).to.eql([[{
        url: '/content_types/dog',
        method: 'PUT',
        headers: {
          'X-Contentful-Version': 2
        },
        data: {
          name: 'Very dangerous dog',
          description: 'Woof woof',
          displayField: undefined,
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
      }, {
        url: '/content_types/dog/published',
        method: 'PUT',
        headers: {
          'X-Contentful-Version': 3
        }
      }]])
    })
  })

  describe('when deleting a content type', function () {
    it('returns the expected payload', async function () {
      const contentTypes = [{
        name: 'Very dangerous dog',
        description: 'Woof woof',
        displayField: undefined,
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
      }]

      const requests = await buildPayloads(function up (migration) {
        migration.deleteContentType('dog')
      }, contentTypes)

      expect(requests).to.eql([[{
        url: '/content_types/dog/published',
        method: 'DELETE',
        headers: {
          'X-Contentful-Version': 2
        }
      }, {
        url: '/content_types/dog',
        method: 'DELETE',
        headers: {
          'X-Contentful-Version': 3
        }
      }]])
    })
  })
})
