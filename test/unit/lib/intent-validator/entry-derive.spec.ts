'use strict'

import { expect } from 'chai'
import { omit } from 'lodash'

import EntryDeriveIntentValidator from '../../../../src/lib/intent-validator/entry-derive'
import createValidator from './validate-steps'
const validateSteps = createValidator([EntryDeriveIntentValidator])

describe('Entry derivation', function () {
  describe('when providing the required properties', function () {
    it('returns no validation errors', async function () {
      const validationErrors = await validateSteps(function up (migration) {
        migration.deriveLinkedEntries({
          contentType: 'dog',
          derivedContentType: 'owner',
          from: ['owner'],
          toReferenceField: 'ownerRef',
          derivedFields: ['firstName', 'lastName'],
          identityKey: async (fromFields) => {
            return fromFields.owner['en-US'].toLowerCase().replace(' ', '-')
          },
          shouldPublish: true,
          deriveEntryForLocale: async (inputFields, locale) => {
            if (locale !== 'en-US') {
              return
            }
            const [firstName, lastName] = inputFields.owner[locale].split(' ')

            return {
              firstName,
              lastName
            }
          }
        })
      })

      expect(validationErrors).to.eql([])
    })
  })

  describe('when using the wrong type for the properties', function () {
    it('returns all validation errors', async function () {
      const validationErrors = await validateSteps(function up (migration) {
        migration.deriveLinkedEntries({
          contentType: ['dog'],
          derivedContentType: 1232,
          from: 'owner',
          toReferenceField: [],
          derivedFields: null,
          identityKey: {},
          shouldPublish: 48,
          deriveEntryForLocale: {}
        })
      })

      expect(validationErrors).to.eql([
        {
          type: 'InvalidType',
          message: '\"number\" is not a valid type for the entry derivation property \"derivedContentType\". Expected \"string\".',
          details: {
            step: {
              type: 'contentType/deriveEntries',
              meta: {
                contentTypeInstanceId: 'contentType/dog/0'
              },
              payload: {
                derivation: {
                  derivedContentType: 1232,
                  from: 'owner',
                  toReferenceField: [],
                  derivedFields: null,
                  identityKey: {},
                  shouldPublish: 48,
                  deriveEntryForLocale: {}
                },
                contentTypeId: [
                  'dog'
                ]
              }
            }
          }
        },
        {
          type: 'InvalidType',
          message: '\"string\" is not a valid type for the entry derivation property \"from\". Expected \"array\".',
          details: {
            step: {
              type: 'contentType/deriveEntries',
              meta: {
                contentTypeInstanceId: 'contentType/dog/0'
              },
              payload: {
                derivation: {
                  derivedContentType: 1232,
                  from: 'owner',
                  toReferenceField: [],
                  derivedFields: null,
                  identityKey: {},
                  shouldPublish: 48,
                  deriveEntryForLocale: {}
                },
                contentTypeId: [
                  'dog'
                ]
              }
            }
          }
        },
        {
          type: 'InvalidType',
          message: '\"array\" is not a valid type for the entry derivation property \"toReferenceField\". Expected \"string\".',
          details: {
            step: {
              type: 'contentType/deriveEntries',
              meta: {
                contentTypeInstanceId: 'contentType/dog/0'
              },
              payload: {
                derivation: {
                  derivedContentType: 1232,
                  from: 'owner',
                  toReferenceField: [],
                  derivedFields: null,
                  identityKey: {},
                  shouldPublish: 48,
                  deriveEntryForLocale: {}
                },
                contentTypeId: [
                  'dog'
                ]
              }
            }
          }
        },
        {
          type: 'InvalidType',
          message: '\"null\" is not a valid type for the entry derivation property \"derivedFields\". Expected \"array\".',
          details: {
            step: {
              type: 'contentType/deriveEntries',
              meta: {
                contentTypeInstanceId: 'contentType/dog/0'
              },
              payload: {
                derivation: {
                  derivedContentType: 1232,
                  from: 'owner',
                  toReferenceField: [],
                  derivedFields: null,
                  identityKey: {},
                  shouldPublish: 48,
                  deriveEntryForLocale: {}
                },
                contentTypeId: [
                  'dog'
                ]
              }
            }
          }
        },
        {
          type: 'InvalidType',
          message: '\"object\" is not a valid type for the entry derivation property \"identityKey\". Expected \"function\".',
          details: {
            step: {
              type: 'contentType/deriveEntries',
              meta: {
                contentTypeInstanceId: 'contentType/dog/0'
              },
              payload: {
                derivation: {
                  derivedContentType: 1232,
                  from: 'owner',
                  toReferenceField: [],
                  derivedFields: null,
                  identityKey: {},
                  shouldPublish: 48,
                  deriveEntryForLocale: {}
                },
                contentTypeId: [
                  'dog'
                ]
              }
            }
          }
        },
        {
          type: 'InvalidType',
          message: '"48" is not a valid value for the entry derivation property "shouldPublish". Expected boolean or preserve.',
          details: {
            step: {
              type: 'contentType/deriveEntries',
              meta: {
                contentTypeInstanceId: 'contentType/dog/0'
              },
              payload: {
                derivation: {
                  derivedContentType: 1232,
                  from: 'owner',
                  toReferenceField: [],
                  derivedFields: null,
                  identityKey: {},
                  shouldPublish: 48,
                  deriveEntryForLocale: {}
                },
                contentTypeId: [
                  'dog'
                ]
              }
            }
          }
        },
        {
          type: 'InvalidType',
          message: '\"object\" is not a valid type for the entry derivation property \"deriveEntryForLocale\". Expected \"function\".',
          details: {
            step: {
              type: 'contentType/deriveEntries',
              meta: {
                contentTypeInstanceId: 'contentType/dog/0'
              },
              payload: {
                derivation: {
                  derivedContentType: 1232,
                  from: 'owner',
                  toReferenceField: [],
                  derivedFields: null,
                  identityKey: {},
                  shouldPublish: 48,
                  deriveEntryForLocale: {}
                },
                contentTypeId: [
                  'dog'
                ]
              }
            }
          }
        }
      ])
    })
  })

  describe('when spelling a property wrong', function () {
    it('returns all validation errors', async function () {
      const properties = {
        contentType: 'dog',
        derivedContentType: 'owner',
        from: ['owner'],
        toReferenceField: 'ownerRef',
        derivedFields: ['firstName', 'lastName'],
        identityKey: async (fromFields) => {
          return fromFields.owner['en-US'].toLowerCase().replace(' ', '-')
        },
        shouldPublish: true,
        driveEntryForLocale: async (inputFields, locale) => {
          if (locale !== 'en-US') {
            return
          }
          const [firstName, lastName] = inputFields.owner[locale].split(' ')

          return {
            firstName,
            lastName
          }
        }
      }

      const validationErrors = await validateSteps(function up (migration) {
        migration.deriveLinkedEntries(properties)
      })

      expect(validationErrors).to.eql([
        {
          type: 'InvalidProperty',
          message: '"driveEntryForLocale" is not a valid property name for an entry derivation. Did you mean "deriveEntryForLocale"?',
          details: {
            step: {
              'type': 'contentType/deriveEntries',
              'meta': {
                'contentTypeInstanceId': 'contentType/dog/0'
              },
              'payload': {
                'contentTypeId': 'dog',
                'derivation': omit(properties, 'contentType')
              }
            }
          }
        }
      ])
    })
  })
})
