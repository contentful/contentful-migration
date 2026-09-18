import { describe, it, expect } from 'vitest'

import ContentTransformIntentValidator from '../../../../src/lib/intent-validator/content-transform'
import createValidator from './validate-steps'
const validateSteps = createValidator([ContentTransformIntentValidator])
import lodash from 'lodash'
const { omit } = lodash

describe('Content transformation', () => {
  describe('when providing the required properties', () => {
    it('returns no validation errors', async () => {
      const properties = {
        contentType: 'person',
        from: ['information'],
        to: ['address'],
        transformEntryForLocale: function () {
          console.log('transfom!')
        }
      }
      const validationErrors = await validateSteps(function up(migration) {
        migration.transformEntries(properties)
      })

      expect(validationErrors).toEqual([])
    })

    describe('when using the wrong type for the properties', () => {
      it('returns all validation errors', async () => {
        const properties = {
          contentType: 'person',
          from: 'information',
          to: 'address',
          transformEntryForLocale: {}
        }
        const validationErrors = await validateSteps(function up(migration) {
          migration.transformEntries(properties)
        })

        expect(validationErrors).toEqual([
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
            message:
              '"string" is not a valid type for the content transformation property "from". Expected "array".',
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
            message:
              '"string" is not a valid type for the content transformation property "to". Expected "array".',
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
            message:
              '"object" is not a valid type for the content transformation property "transformEntryForLocale". Expected "function".',
            type: 'InvalidType'
          }
        ])
      })
    })
  })

  describe('when providing optional arguments', () => {
    describe('shouldPublish', () => {
      it('returns no validation errors', async () => {
        const properties = {
          from: ['information'],
          to: ['address'],
          shouldPublish: true,
          transformEntryForLocale: function () {
            console.log('transfom!')
          }
        }
        const validationErrors = await validateSteps(function up(migration) {
          const person = migration.editContentType('person')

          person.transformEntries(properties)
        })

        expect(validationErrors).toEqual([])
      })
    })

    describe('when using an invalid type', () => {
      it('returns validation errors', async () => {
        const transformationFunc = () => {
          console.log('transform!')
        }
        const properties = {
          contentType: 'person',
          from: ['information'],
          to: ['address'],
          shouldPublish: 'yes please',
          transformEntryForLocale: transformationFunc
        }
        const validationErrors = await validateSteps(function up(migration) {
          migration.transformEntries(properties)
        })
        expect(validationErrors).toEqual([
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
            message:
              '"yes please" is not a valid value for the content transformation property "shouldPublish". Expected boolean or preserve.',
            type: 'InvalidType'
          }
        ])
      })
    })
  })

  describe('when spelling a property wrong', () => {
    it('returns all validation errors', async () => {
      const properties = {
        contentType: 'person',
        from: ['information'],
        to: ['address'],
        transformEntrForLocale: function () {
          console.log('transfom!')
        }
      }
      const validationErrors = await validateSteps(function up(migration) {
        migration.transformEntries(properties)
      })

      expect(validationErrors).toEqual([
        {
          type: 'InvalidProperty',
          message:
            '"transformEntrForLocale" is not a valid property name for a content transformation. Did you mean "transformEntryForLocale"?',
          details: {
            step: {
              type: 'contentType/transformEntries',
              meta: {
                contentTypeInstanceId: 'contentType/person/0'
              },
              payload: {
                contentTypeId: 'person',
                transformation: omit(properties, 'contentType')
              }
            }
          }
        }
      ])
    })
  })
})
