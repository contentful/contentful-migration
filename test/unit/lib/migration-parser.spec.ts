'use strict'

const { expect } = require('chai')
import Fetcher from '../../../src/lib/fetcher'
import createMigrationParser from '../../../src/lib/migration-parser'

describe('Migration parser', function () {
  describe('when transforming content', function () {
    it('returns all collected errors', async function () {
      const fakeMakeRequest = (config) => {
        if (config.url === `/content_types?limit=100&order=sys.createdAt&sys.id[in]=foo,cat&skip=0`) {
          return {
            total: 2,
            skip: 0,
            limit: 0,
            items: [
              {
                sys: { id: 'foo' },
                fields: [{ name: 'name', type: 'Symbol', id: 'name' }]
              },
              {
                sys: { id: 'cat' },
                fields: [{ name: 'name', type: 'Symbol', id: 'name' }]
              }
            ]
          }
        }

        if (config.url.indexOf(`/entries?limit=100&order=sys.createdAt&sys.archivedAt[exists]=false&sys.contentType.sys.id[in]=foo,cat&skip=0`) !== -1) {
          return {
            total: 2,
            skip: 0,
            limit: 0,
            items: [
              {
                sys: {
                  contentType: { sys: { id: 'foo' } },
                  id: '123'
                },
                fields: { name: { 'en-US': 'Mary' } }
              },
              {
                sys: {
                  contentType: { sys: { id: 'foo' } },
                  id: '456'
                },
                fields: { name: { 'en-US': 'Rose' } }
              },
              {
                sys: {
                  contentType: { sys: { id: 'cat' } },
                  id: '123'
                },
                fields: { name: { 'en-US': 'Puss' } }
              }
            ]
          }
        }

        if (config.url === `/locales?limit=100&order=sys.createdAt&skip=0`) {
          return {
            total: 1,
            skip: 0,
            limit: 0,
            items: [{ code: 'en-US' }]
          }
        }

        if (config.url === `/tags?limit=100&order=sys.createdAt&skip=0`) {
          return {
            total: 0,
            skip: 0,
            limit: 0,
            items: []
          }
        }
      }
      const migrationParser = createMigrationParser(fakeMakeRequest, {})

      // make this something that throws the second time
      const fooError = new Error('bang')
      const catError = new Error('meow')
      const throws = (migration) => {
        migration.transformEntries({
          contentType: 'foo',
          from: ['name'],
          to: ['name'],
          transformEntryForLocale: (fields, locale) => {
            if (fields.name[locale] === 'Mary') {
              throw fooError
            }
            return {
              name: 'I am now called Gladys!'
            }
          }
        })

        migration.transformEntries({
          contentType: 'cat',
          from: ['name'],
          to: ['name'],
          transformEntryForLocale: () => {
            throw catError
          }
        })

      }

      const parseResult = await migrationParser(throws)
      const result = parseResult.batches

      expect(result.length).to.eql(2)

      expect(result[0].requests.length).to.eql(1)
      expect(result[0].requests[0].url).to.eql('/entries/456')
      expect(result[0].runtimeErrors.length).to.eql(1)
      expect(result[0].runtimeErrors).to.eql([fooError])

      expect(result[1].requests.length).to.eql(0)
      expect(result[1].runtimeErrors.length).to.eql(1)
      expect(result[1].runtimeErrors).to.eql([catError])
    })
  })

  describe('when shouldPublish is false', function () {
    it('does not produce publish requests', async function () {
      const fakeMakeRequest = (config) => {
        if (config.url === `/content_types?limit=100&order=sys.createdAt&sys.id[in]=foo&skip=0`) {
          return {
            total: 1,
            skip: 0,
            limit: 0,
            items: [
              {
                sys: { id: 'foo' },
                fields: [{ name: 'name', type: 'Symbol', id: 'name' }]
              }
            ]
          }
        }

        if (config.url === `/entries?limit=100&order=sys.createdAt&sys.archivedAt[exists]=false&sys.contentType.sys.id[in]=foo&skip=0`) {
          return {
            total: 2,
            skip: 0,
            limit: 0,
            items: [
              {
                sys: {
                  contentType: { sys: { id: 'foo' } },
                  id: '123'
                },
                fields: { name: { 'en-US': 'Mary' } }
              },
              {
                sys: {
                  contentType: { sys: { id: 'foo' } },
                  id: '456'
                },
                fields: { name: { 'en-US': 'Rose' } }
              }
            ]
          }
        }

        if (config.url === `/locales?limit=100&order=sys.createdAt&skip=0`) {
          return {
            total: 1,
            skip: 0,
            limit: 0,
            items: [{ code: 'en-US' }]
          }
        }

        if (config.url === `/tags?limit=100&order=sys.createdAt&skip=0`) {
          return {
            total: 0,
            skip: 0,
            limit: 0,
            items: []
          }
        }
      }

      const migrationParser = createMigrationParser(fakeMakeRequest, {})

      // make this something that throws the second time
      const transformFunction = (migration) => {
        migration.transformEntries({
          contentType: 'foo',
          from: ['name'],
          to: ['name'],
          transformEntryForLocale: () => {
            return {
              name: 'I am now called Gladys!'
            }
          },
          shouldPublish: false
        })
      }

      const parseResult = await migrationParser(transformFunction)
      const result = parseResult.batches

      expect(result.length).to.eql(1)
      expect(result[0].requests.length).to.eql(2)
      expect(result[0].requests[0].url).to.eql('/entries/123')
      expect(result[0].requests[1].url).to.eql('/entries/456')
      expect(result[0].validationErrors).to.eql([])
    })
  })
})
