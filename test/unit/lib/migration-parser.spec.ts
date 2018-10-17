'use strict'

const { expect } = require('chai')
import createMigrationParser from '../../../src/lib/migration-parser'

describe('Migration parser', function () {
  describe('when transforming content', function () {
    it('returns all collected errors', async function () {
      const fakeMakeRequest = (config) => {
        if (config.url === '/content_types?sys.id[in]=foo,cat') {
          return {
            items: [
              {
                sys: { id: 'foo' },
                fields: [{ name: 'name', type: 'Symbol', id: 'name' }]
              },
              {
                sys: { id: 'cat' },
                fields: [{ name: 'name', type: 'Symbol', id: 'name' }]
              }
            ],
            total: 2
          }
        }

        if (config.url.indexOf('/entries?sys.contentType.sys.id[in]=foo,cat') !== -1) {
          return {
            total: 2,
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

        if (config.url === '/locales') {
          return {items: [{code: 'en-US'}]}
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

      expect(result[0].requests.length).to.eql(2)
      expect(result[0].requests[0].url).to.eql('/entries/456')
      expect(result[0].requests[1].url).to.eql('/entries/456/published')
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
        console.log(config.url)
        if (config.url === '/content_types?sys.id[in]=foo') {
          return {
            total: 1,
            items: [
              {
                sys: { id: 'foo' },
                fields: [{ name: 'name', type: 'Symbol', id: 'name' }]
              }
            ]
          }
        }

        if (config.url === '/entries?sys.contentType.sys.id[in]=foo&skip=0') {
          return {
            total: 2,
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

        if (config.url === '/locales') {
          return {items: [{code: 'en-US'}]}
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
