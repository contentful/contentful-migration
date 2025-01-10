'use strict'

import { expect } from 'chai'
import validateBatches from './validate-batches'
import {
  MAX_ALLOWED_RESOURCES,
  MAX_RESOURCE_LINKS
} from '../../../../../src/lib/utils/resource-links'

const VALID_ALLOWED_RESOURCE = {
  type: 'Contentful:Entry',
  source: 'crn:contentful:::content:spaces/cooking-space',
  contentTypes: ['cookingMethod', 'recipe']
}

describe('payload validation (dependencies)', function () {
  describe('when setting a field to ResourceLink but not specifying allowedResources', function () {
    it('returns an error', async function () {
      const existingCts = []
      const errors = await validateBatches(function (migration) {
        const lunch = migration.createContentType('lunch').name('Lunch').description('A Lunch')

        lunch.createField('mainCourse').name('Main Course').type('ResourceLink')
      }, existingCts)

      expect(errors).to.eql([
        [
          {
            type: 'InvalidPayload',
            message:
              'The property "allowedResources" is required on the field "mainCourse" because "type" is "ResourceLink".'
          }
        ]
      ])
    })
  })

  describe('when setting a field to ResourceLink Array but not specifying allowedResources', function () {
    it('returns an error', async function () {
      const existingCts = []
      const errors = await validateBatches(function (migration) {
        const lunch = migration.createContentType('lunch').name('Lunch').description('A Lunch')

        lunch.createField('mainCourse').name('Main Course').type('Array').items({
          type: 'ResourceLink'
        })
      }, existingCts)

      expect(errors).to.eql([
        [
          {
            type: 'InvalidPayload',
            message:
              'The property "allowedResources" is required on the field "mainCourse" because "type" is "ResourceLink".'
          }
        ]
      ])
    })
  })

  describe('when setting a field to Symbol but specifying allowedResources', function () {
    it('returns an error', async function () {
      const existingCts = []
      const errors = await validateBatches(function (migration) {
        const lunch = migration.createContentType('lunch').name('Lunch').description('A Lunch')

        lunch.createField('mainCourse').name('Main Course').type('Symbol').allowedResources([{}])
      }, existingCts)

      expect(errors).to.eql([
        [
          {
            type: 'InvalidPayload',
            message:
              'The property "allowedResources" is forbidden on the field "mainCourse" because "type" is not "ResourceLink".'
          }
        ]
      ])
    })
  })

  describe('when setting a field to Symbol Array but specifying allowedResources', function () {
    it('returns an error', async function () {
      const existingCts = []
      const errors = await validateBatches(function (migration) {
        const lunch = migration.createContentType('lunch').name('Lunch').description('A Lunch')

        lunch
          .createField('mainCourse')
          .name('Main Course')
          .type('Array')
          .items({ type: 'Symbol' })
          .allowedResources([{}])
      }, existingCts)

      expect(errors).to.eql([
        [
          {
            type: 'InvalidPayload',
            message:
              'The property "allowedResources" is forbidden on the field "mainCourse" because "type" is not "ResourceLink".'
          }
        ]
      ])
    })
  })

  describe('when setting a field to ResourceLink but specifying empty allowedResources', function () {
    it('returns an error', async function () {
      const existingCts = []
      const errors = await validateBatches(function (migration) {
        const lunch = migration.createContentType('lunch').name('Lunch').description('A Lunch')

        lunch
          .createField('mainCourse')
          .name('Main Course')
          .type('ResourceLink')
          .allowedResources([])
      }, existingCts)

      expect(errors).to.eql([
        [
          {
            type: 'InvalidPayload',
            message: 'The property "allowedResources" on the field "mainCourse" must not be empty.'
          }
        ]
      ])
    })
  })

  describe('when setting a field to ResourceLink but specifying too many allowedResources', function () {
    it('returns an error', async function () {
      const existingCts = []
      const errors = await validateBatches(function (migration) {
        const lunch = migration.createContentType('lunch').name('Lunch').description('A Lunch')

        lunch
          .createField('mainCourse')
          .name('Main Course')
          .type('ResourceLink')
          .allowedResources(
            [...Array(MAX_ALLOWED_RESOURCES + 1).keys()].map((value) => ({
              ...VALID_ALLOWED_RESOURCE,
              source: `crn:contentful:::content:spaces/cooking-space-${value + 1}`
            }))
          )
      }, existingCts)

      expect(errors).to.eql([
        [
          {
            type: 'InvalidPayload',
            message: `The property "allowedResources" on the field "mainCourse" must have at most ${MAX_ALLOWED_RESOURCES} items.`
          }
        ]
      ])
    })
  })

  describe('when setting a field to ResourceLink but specifying non-object allowedResources', function () {
    it('returns an error', async function () {
      const existingCts = []
      const errors = await validateBatches(function (migration) {
        const lunch = migration.createContentType('lunch').name('Lunch').description('A Lunch')

        lunch
          .createField('mainCourse')
          .name('Main Course')
          .type('ResourceLink')
          .allowedResources(['invalid'])
      }, existingCts)

      expect(errors).to.eql([
        [
          {
            type: 'InvalidPayload',
            message:
              'Allowed resource at index 0 on the field "mainCourse" expected to be "object", but got "string".'
          }
        ]
      ])
    })
  })

  describe('when setting a field to ResourceLink but specifying wrong resource properties', function () {
    it('returns errors when an invalid ResourceType is provided for the Contentful: ResourceProvider', async function () {
      const existingCts = []
      const errors = await validateBatches(function (migration) {
        const lunch = migration.createContentType('lunch').name('Lunch').description('A Lunch')

        lunch
          .createField('mainCourse')
          .name('Main Course')
          .type('ResourceLink')
          .allowedResources([
            {
              type: 'Contentful:Asset',
              source: 'crn:contentful:::content:spaces/cooking-space-2',
              contentTypes: ['cookingMethod']
            }
          ])
      }, existingCts)

      expect(errors).to.eql([
        [
          {
            type: 'InvalidPayload',
            message:
              'Allowed resource at index 0 on the field "mainCourse" has an invalid property: "type" must be [Contentful:Entry].'
          }
        ]
      ])
    })

    it('returns errors when the allowedResources of the Contentful: Provider contains additional fields', async function () {
      const existingCts = []
      const errors = await validateBatches(function (migration) {
        const lunch = migration.createContentType('lunch').name('Lunch').description('A Lunch')

        lunch
          .createField('mainCourse')
          .name('Main Course')
          .type('ResourceLink')
          .allowedResources([
            {
              type: 'Contentful:Entry',
              source: 'crn:contentful:::content:spaces/cooking-space-1',
              contentTypes: ['cookingMethod'],
              unexpectedProperty: 'someValue'
            }
          ])
      }, existingCts)

      expect(errors).to.eql([
        [
          {
            message:
              'Allowed resource at index 0 on the field "mainCourse" has an invalid property: "unexpectedProperty" is not allowed.',
            type: 'InvalidPayload'
          }
        ]
      ])
    })

    it('returns errors when the contentTypes array is empty', async function () {
      const existingCts = []
      const errors = await validateBatches(function (migration) {
        const lunch = migration.createContentType('lunch').name('Lunch').description('A Lunch')

        lunch
          .createField('mainCourse')
          .name('Main Course')
          .type('ResourceLink')
          .allowedResources([
            {
              type: 'Contentful:Entry',
              source: 'crn:contentful:::content:spaces/cooking-space-1',
              contentTypes: []
            }
          ])
      }, existingCts)

      expect(errors).to.eql([
        [
          {
            type: 'InvalidPayload',
            message:
              'Allowed resource at index 0 on the field "mainCourse" has an invalid property: "contentTypes" must contain at least 1 items.'
          }
        ]
      ])
    })

    it('returns an error when the type value is referencing a invalid type', async function () {
      const existingCts = []
      const errors = await validateBatches(function (migration) {
        const lunch = migration.createContentType('lunch').name('Lunch').description('A Lunch')

        lunch
          .createField('mainCourse')
          .name('Main Course')
          .type('ResourceLink')
          .allowedResources([
            {
              type: 'Foo'
            }
          ])
      }, existingCts)

      expect(errors).to.eql([
        [
          {
            message:
              'Allowed resource at index 0 on the field "mainCourse" has an invalid property: "type" with value "Foo" fails to match the required pattern: /^[A-Z][a-z]*:[A-Z][a-z]*$/.',
            type: 'InvalidPayload'
          }
        ]
      ])
    })

    it('returns an error when the type value is referencing custom ResourceProvider:ResourceType pair with additional properties', async function () {
      const existingCts = []
      const errors = await validateBatches(function (migration) {
        const lunch = migration.createContentType('lunch').name('Lunch').description('A Lunch')

        lunch
          .createField('mainCourse')
          .name('Main Course')
          .type('ResourceLink')
          .allowedResources([
            {
              type: 'Foo:Bar',
              source: 'crn:contentful:::content:spaces/cooking-space-2'
            }
          ])
      }, existingCts)

      expect(errors).to.eql([
        [
          {
            message:
              'Allowed resource at index 0 on the field "mainCourse" has an invalid property: "source" is not allowed.',
            type: 'InvalidPayload'
          }
        ]
      ])
    })
  })

  describe('when setting a field to ResourceLink with valid allowedResources', function () {
    it('does not return an error', async function () {
      const existingCts = []
      const errors = await validateBatches(function (migration) {
        const lunch = migration.createContentType('lunch').name('Lunch').description('A Lunch')

        lunch
          .createField('mainCourse')
          .name('Main Course')
          .type('ResourceLink')
          .allowedResources([VALID_ALLOWED_RESOURCE])
      }, existingCts)

      expect(errors).to.eql([[]])
    })

    it('should not return an error when the type value is referencing a custom ResourceProvider:ResourceType pair', async function () {
      const existingCts = []
      const errors = await validateBatches(function (migration) {
        const lunch = migration.createContentType('lunch').name('Lunch').description('A Lunch')

        lunch
          .createField('mainCourse')
          .name('Main Course')
          .type('ResourceLink')
          .allowedResources([
            {
              type: 'Foo:Bar'
            }
          ])
      }, existingCts)

      expect(errors).to.eql([[]])
    })
  })

  describe('when setting a field to ResourceLink with duplicate sources in allowedResources', function () {
    it('returns an error', async function () {
      const existingCts = []
      const errors = await validateBatches(function (migration) {
        const lunch = migration.createContentType('lunch').name('Lunch').description('A Lunch')

        lunch
          .createField('mainCourse')
          .name('Main Course')
          .type('ResourceLink')
          .allowedResources([VALID_ALLOWED_RESOURCE, VALID_ALLOWED_RESOURCE])
      }, existingCts)

      expect(errors).to.eql([
        [
          {
            message:
              'The property "allowedResources" on the field "mainCourse" contains duplicate source "crn:contentful:::content:spaces/cooking-space".',
            type: 'InvalidPayload'
          }
        ]
      ])
    })
  })

  describe(`when adding more than ${MAX_RESOURCE_LINKS} resource links`, function () {
    it('returns an error', async function () {
      const existingCts = []
      const errors = await validateBatches(function (migration) {
        const lunch = migration.createContentType('lunch').name('Lunch').description('A Lunch')

        for (let i = 0; i <= MAX_RESOURCE_LINKS + 1; i++) {
          lunch
            .createField('course' + i)
            .name('Course ' + i)
            .type('ResourceLink')
            .allowedResources([VALID_ALLOWED_RESOURCE])
        }
      }, existingCts)

      expect(errors).to.eql([
        [
          {
            message: 'Content type "lunch" cannot have more than 3 resource link fields.',
            type: 'InvalidPayload'
          }
        ]
      ])
    })
  })
})
