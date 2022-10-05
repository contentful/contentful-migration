'use strict'

import { expect } from 'chai'
import validateBatches from './validate-batches'
import { MAX_RESOURCE_LINKS } from '../../../../../src/lib/utils/resource-links'

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
            message: 'Allowed resources on the field "mainCourse" must not be empty.'
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
          .allowedResources([
            {
              ...VALID_ALLOWED_RESOURCE,
              source: 'crn:contentful:::content:spaces/cooking-space-1'
            },
            {
              ...VALID_ALLOWED_RESOURCE,
              source: 'crn:contentful:::content:spaces/cooking-space-2'
            },
            {
              ...VALID_ALLOWED_RESOURCE,
              source: 'crn:contentful:::content:spaces/cooking-space-3'
            },
            { ...VALID_ALLOWED_RESOURCE, source: 'crn:contentful:::content:spaces/cooking-space-4' }
          ])
      }, existingCts)

      expect(errors).to.eql([
        [
          {
            type: 'InvalidPayload',
            message: 'Allowed resources on the field "mainCourse" must have at most 3 items.'
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
    it('returns errors', async function () {
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
            },
            {
              type: 'Contentful:Asset',
              source: 'crn:contentful:::content:spaces/cooking-space-2',
              contentTypes: ['cookingMethod'],
              unexpectedProperty: 'someValue'
            }
          ])
      }, existingCts)

      expect(errors).to.eql([
        [
          {
            type: 'InvalidPayload',
            message:
              'Allowed resource at index 0 on the field "mainCourse" has an invalid property: "contentTypes" must contain at least 1 items.'
          },
          {
            type: 'InvalidPayload',
            message:
              'Allowed resource at index 1 on the field "mainCourse" has an invalid property: "type" must be [Contentful:Entry].'
          },
          {
            message:
              'Allowed resource at index 1 on the field "mainCourse" has an invalid property: "unexpectedProperty" is not allowed.',
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
              'Allowed resources on the field "mainCourse" contains duplicate source "crn:contentful:::content:spaces/cooking-space".',
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
