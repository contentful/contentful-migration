'use strict'

const { expect } = require('chai')
const Bluebird = require('bluebird')

const ContentTransformIntentValidator = require('../../../../src/lib/intent-validator/content-transform').default
const validateSteps = require('./validate-steps').bind(null, [ContentTransformIntentValidator])

describe('Content transformation', function () {
  describe('when providing the required properties', function () {
    it('returns no validation errors', Bluebird.coroutine(function* () {
      const properties = {
        contentType: 'person',
        from: ['information'],
        to: ['address'],
        transformEntryForLocale: function () {
          console.log('transfom!')
        }
      }
      const validationErrors = yield validateSteps(function up (migration) {
        migration.transformEntries(properties)
      })

      expect(validationErrors).to.eql([])
    }))

    describe('when using the wrong type for the properties', function () {
      it('returns all validation errors', async function () {
        const properties = {
          contentType: 'person',
          from: 'information',
          to: 'address',
          transformEntryForLocale: {}
        }
        const validationErrors = await validateSteps(function up (migration) {
          migration.transformEntries(properties)
        })

        expect(validationErrors).to.eql([
          {
            details: {
              step: {
                meta: {
                  contentTypeInstanceId: 'contentType/person/0'
                },
                payload: {
                  contentTypeId: 'person',
                  transformation: {
                    from: 'information',
                    to: 'address',
                    transformEntryForLocale: {}
                  }
                },
                type: 'contentType/transformEntries'
              }
            },
            message: '"string" is not a valid type for the content transformation property "from". Expected "array".',
            type: 'InvalidType'
          },
          {
            details: {
              step: {
                meta: {
                  contentTypeInstanceId: 'contentType/person/0'
                },
                payload: {
                  contentTypeId: 'person',
                  transformation: {
                    from: 'information',
                    to: 'address',
                    transformEntryForLocale: {}
                  }
                },
                type: 'contentType/transformEntries'
              }
            },
            message: '"string" is not a valid type for the content transformation property "to". Expected "array".',
            type: 'InvalidType'
          }
        ])
      })
    })
  })

  describe('when providing optional arguments', function () {
    describe('shouldPublish', function () {
      it('returns no validation errors', Bluebird.coroutine(function* () {
        const properties = {
          from: ['information'],
          to: ['address'],
          shouldPublish: true,
          transformEntryForLocale: function () {
            console.log('transfom!')
          }
        }
        const validationErrors = yield validateSteps(function up (migration) {
          const person = migration.editContentType('person')

          person.transformEntries(properties)
        })

        expect(validationErrors).to.eql([])
      }))
    })

    describe('when using an invalid type', function () {
      it('returns validation errors', Bluebird.coroutine(function* () {
        const transformationFunc = () => { console.log('transform!') }
        const properties = {
          contentType: 'person',
          from: ['information'],
          to: ['address'],
          shouldPublish: 'yes please',
          transformEntryForLocale: transformationFunc
        }
        const validationErrors = yield validateSteps(function up (migration) {
          migration.transformEntries(properties)
        })

        expect(validationErrors).to.eql([
          {
            details: {
              step: {
                meta: {
                  contentTypeInstanceId: 'contentType/person/0'
                },
                payload: {
                  contentTypeId: 'person',
                  transformation: {
                    from: ['information'],
                    shouldPublish: 'yes please',
                    to: ['address'],
                    transformEntryForLocale: transformationFunc
                  }
                },
                type: 'contentType/transformEntries'
              }
            },
            message: '"string" is not a valid type for the content transformation property "shouldPublish". Expected "boolean".',
            type: 'InvalidType'
          }
        ])
      }))
    })
  })

  describe('when not providing the required properties', function () {
    it('returns all validation errors', Bluebird.coroutine(function * () {
      const properties = {
        contentType: 'person',
        from: ['information'],
        to: ['address'],
        transformEntrForLocale: function () {
          console.log('transfom!')
        }
      }
      const validationErrors = yield validateSteps(function up (migration) {
        migration.transformEntries(properties)
      })

      expect(validationErrors).to.eql([
        {
          type: 'InvalidProperty',
          message: '"transformEntrForLocale" is not a valid property name for a content transformation. Did you mean "transformEntryForLocale"?',
          details: {
            step: {
              'type': 'contentType/transformEntries',
              'meta': {
                'contentTypeInstanceId': 'contentType/person/0'
              },
              'payload': {
                'contentTypeId': 'person',
                'transformation': properties
              }
            }
          }
        }
      ])
    }))
  })

})
