'use strict'

const { expect } = require('chai')
import createMigrationParser from '../../../src/lib/migration-parser'

describe('Migration parser', function () {
  describe('when transforming content', function () {
    it('returns all collected errors', async function () {
      const fakeFetcher = {
        getContentTypesInChunks: () => {
          return [
            {
              sys: { id: 'foo' },
              fields: [{ name: 'name', type: 'Symbol', id: 'name' }]
            },
            {
              sys: { id: 'cat' },
              fields: [{ name: 'name', type: 'Symbol', id: 'name' }]
            }
          ]
        },
        getEntriesInIntents: () => {
          return [
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
        },
        checkContentTypesForDeletedCts: (_, contentTypes) => {
          return contentTypes
        },
        getLocalesForSpace: () => ['en-US']
      }

      const migrationParser = createMigrationParser(fakeFetcher)

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

      const result = await migrationParser(throws)
      expect(result.batches.length).to.eql(2)

      expect(result.batches[0].requests.length).to.eql(2)
      expect(result.batches[0].errors.length).to.eql(1)
      expect(result.batches[0].errors).to.eql([fooError])

      expect(result.batches[0].requests[0].url).to.eql('/entries/456')
      expect(result.batches[0].requests[1].url).to.eql('/entries/456/published')

      expect(result.batches[1].requests.length).to.eql(0)
      expect(result.batches[1].errors.length).to.eql(1)
      expect(result.batches[1].errors).to.eql([catError])
    })
  })

  describe('when shouldPublish is false', function () {
    it('does not produce publish requests', async function () {
      const fakeFetcher = {
        getContentTypesInChunks: () => {
          return [
            {
              sys: { id: 'foo' },
              fields: [{ name: 'name', type: 'Symbol', id: 'name' }]
            }
          ]
        },
        getEntriesInIntents: () => {
          return [
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
        },
        checkContentTypesForDeletedCts: (_, contentTypes) => {
          return contentTypes
        },
        getLocalesForSpace: () => ['en-US']
      }

      const migrationParser = createMigrationParser(fakeFetcher)

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

      const result = await migrationParser(transformFunction)
      expect(result.batches.length).to.eql(1)
      expect(result.batches[0].requests.length).to.eql(2)
      expect(result.batches[0].requests[0].url).to.eql('/entries/123')
      expect(result.batches[0].requests[1].url).to.eql('/entries/456')
      expect(result.batches[0].errors).to.eql([])
    })
  })
})
