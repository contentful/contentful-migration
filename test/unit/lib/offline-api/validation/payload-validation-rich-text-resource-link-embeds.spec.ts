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
  describe('when setting a field to ResourceLink with valid allowedResources', function () {
    it('does not return an error', async function () {
      const existingCts = []
      const errors = await validateBatches(function (migration) {
        const lunch = migration.createContentType('lunch').name('Lunch').description('A Lunch')

        lunch
          .createField('menu')
          .name('Menu')
          .type('RichText')
          .validations([
            { enabledNodeTypes: ['embedded-resource-block'] },
            {
              nodes: {
                'embedded-resource-block': {
                  validations: [],
                  allowedResources: [VALID_ALLOWED_RESOURCE]
                }
              }
            }
          ])
      }, existingCts)

      expect(errors).to.eql([[]])
    })
  })

  describe('when setting a field to RichText with embedded-resource-block node enabled but not specifying allowedResources', function () {
    it('returns an error if node validations do not exist', async function () {
      const existingCts = []
      const errors = await validateBatches(function (migration) {
        const lunch = migration.createContentType('lunch').name('Lunch').description('A Lunch')

        lunch
          .createField('menu')
          .name('Menu')
          .type('RichText')
          .validations([{ enabledNodeTypes: ['embedded-resource-block'] }])
      }, existingCts)

      expect(errors).to.eql([
        [
          {
            type: 'InvalidPayload',
            message:
              'The property "validations[].nodes" is required on the field "menu" because "type" is "RichText".'
          }
        ]
      ])
    })

    it('returns an error if embedded-resource-block node validations do not exist', async function () {
      const existingCts = []
      const errors = await validateBatches(function (migration) {
        const lunch = migration.createContentType('lunch').name('Lunch').description('A Lunch')

        lunch
          .createField('menu')
          .name('Menu')
          .type('RichText')
          .validations([{ enabledNodeTypes: ['embedded-resource-block'] }, { nodes: {} }])
      }, existingCts)

      expect(errors).to.eql([
        [
          {
            type: 'InvalidPayload',
            message:
              'The property "validations[].nodes.embedded-resource-block.allowedResources" is required on the field "menu" because "validations[].enabledNodeTypes[]" is "embedded-resource-block".'
          }
        ]
      ])
    })

    it('returns an error if allowedResources is empty', async function () {
      const existingCts = []
      const errors = await validateBatches(function (migration) {
        const lunch = migration.createContentType('lunch').name('Lunch').description('A Lunch')

        lunch
          .createField('menu')
          .name('Menu')
          .type('RichText')
          .validations([
            { enabledNodeTypes: ['embedded-resource-block'] },
            { nodes: { 'embedded-resource-block': { validations: [], allowedResources: [] } } }
          ])
      }, existingCts)

      expect(errors).to.eql([
        [
          {
            type: 'InvalidPayload',
            message:
              'The property "validations.1.nodes.embedded-resource-block.allowedResources" on the field "menu" must not be empty.'
          }
        ]
      ])
    })
  })

  describe('when setting a field to RichText with embedded-resource-link node but specifying non-object allowedResources', function () {
    it('returns an error', async function () {
      const existingCts = []
      const errors = await validateBatches(function (migration) {
        const lunch = migration.createContentType('lunch').name('Lunch').description('A Lunch')

        lunch
          .createField('menu')
          .name('Menu')
          .type('RichText')
          .validations([
            { enabledNodeTypes: ['embedded-resource-block'] },
            {
              nodes: { 'embedded-resource-block': { validations: [], allowedResources: 'invalid' } }
            }
          ])
      }, existingCts)

      expect(errors).to.eql([
        [
          {
            type: 'InvalidPayload',
            message: '"allowedResources" validation expected to be "array", but got "string"'
          }
        ]
      ])
    })
  })

  describe('when setting a field to RichText with embedded-resource-block node but specifying wrong resource properties', function () {
    it('should return an error when the contentTypes array is empty', async function () {
      const existingCts = []
      const errors = await validateBatches(function (migration) {
        const lunch = migration.createContentType('lunch').name('Lunch').description('A Lunch')

        lunch
          .createField('menu')
          .name('Menu')
          .type('RichText')
          .validations([
            { enabledNodeTypes: ['embedded-resource-block'] },
            {
              nodes: {
                'embedded-resource-block': {
                  validations: [],
                  allowedResources: [
                    {
                      type: 'Contentful:Entry',
                      source: 'crn:contentful:::content:spaces/cooking-space-1',
                      contentTypes: []
                    }
                  ]
                }
              }
            }
          ])
      }, existingCts)

      expect(errors).to.eql([
        [
          {
            type: 'InvalidPayload',
            message:
              'Allowed resource at index 0 on the field "menu" has an invalid property: "contentTypes" must contain at least 1 items.'
          }
        ]
      ])
    })

    it('should return an error when the type value is not one of the supported values', async function () {
      const existingCts = []
      const errors = await validateBatches(function (migration) {
        const lunch = migration.createContentType('lunch').name('Lunch').description('A Lunch')

        lunch
          .createField('menu')
          .name('Menu')
          .type('RichText')
          .validations([
            { enabledNodeTypes: ['embedded-resource-block'] },
            {
              nodes: {
                'embedded-resource-block': {
                  validations: [],
                  allowedResources: [
                    {
                      type: 'Contentful:Asset',
                      source: 'crn:contentful:::content:spaces/cooking-space-2',
                      contentTypes: ['cookingMethod']
                    }
                  ]
                }
              }
            }
          ])
      }, existingCts)

      expect(errors).to.eql([
        [
          {
            type: 'InvalidPayload',
            message:
              'Allowed resource at index 0 on the field "menu" has an invalid property: "type" must be [Contentful:Entry].'
          }
        ]
      ])
    })

    it('should return an error when the allowedResources configuration contains unknown properties', async function () {
      const existingCts = []
      const errors = await validateBatches(function (migration) {
        const lunch = migration.createContentType('lunch').name('Lunch').description('A Lunch')

        lunch
          .createField('menu')
          .name('Menu')
          .type('RichText')
          .validations([
            { enabledNodeTypes: ['embedded-resource-block'] },
            {
              nodes: {
                'embedded-resource-block': {
                  validations: [],
                  allowedResources: [
                    {
                      type: 'Contentful:Entry',
                      source: 'crn:contentful:::content:spaces/cooking-space-2',
                      contentTypes: ['cookingMethod'],
                      unexpectedProperty: 'someValue'
                    }
                  ]
                }
              }
            }
          ])
      }, existingCts)

      expect(errors).to.eql([
        [
          {
            message:
              'Allowed resource at index 0 on the field "menu" has an invalid property: "unexpectedProperty" is not allowed.',
            type: 'InvalidPayload'
          }
        ]
      ])
    })
  })

  describe('when setting a field to RichText with embedded-resource-block node with valid allowedResources values that do not follow the constraints', function () {
    it('should return an error when allowedResources contains duplicate source values', async function () {
      const existingCts = []
      const errors = await validateBatches(function (migration) {
        const lunch = migration.createContentType('lunch').name('Lunch').description('A Lunch')

        lunch
          .createField('menu')
          .name('Menu')
          .type('RichText')
          .validations([
            { enabledNodeTypes: ['embedded-resource-block'] },
            {
              nodes: {
                'embedded-resource-block': {
                  validations: [],
                  allowedResources: [VALID_ALLOWED_RESOURCE, VALID_ALLOWED_RESOURCE]
                }
              }
            }
          ])
      }, existingCts)

      expect(errors).to.eql([
        [
          {
            message:
              'The property "validations.1.nodes.embedded-resource-block.allowedResources.1" on the field "menu" contains duplicate source "crn:contentful:::content:spaces/cooking-space".',
            type: 'InvalidPayload'
          }
        ]
      ])
    })

    it(`should return an error when the amount of allowedResources values exceeds ${MAX_ALLOWED_RESOURCES}`, async function () {
      const existingCts = []
      const errors = await validateBatches(function (migration) {
        const lunch = migration.createContentType('lunch').name('Lunch').description('A Lunch')

        lunch
          .createField('menu')
          .name('Menu')
          .type('RichText')
          .validations([
            { enabledNodeTypes: ['embedded-resource-block'] },
            {
              nodes: {
                'embedded-resource-block': {
                  validations: [],
                  allowedResources: new Array(MAX_ALLOWED_RESOURCES + 1).fill(null).map((_, i) => ({
                    ...VALID_ALLOWED_RESOURCE,
                    source: `${VALID_ALLOWED_RESOURCE.source}_${i}`
                  }))
                }
              }
            }
          ])
      }, existingCts)

      expect(errors).to.eql([
        [
          {
            message:
              'The property "validations.1.nodes.embedded-resource-block.allowedResources" on the field "menu" must have at most 3 items.',
            type: 'InvalidPayload'
          }
        ]
      ])
    })
  })

  describe(`when adding more than ${MAX_RESOURCE_LINKS} RichText fields`, function () {
    it(`should return an error if the RichText fields have embedded-resource-blocks enabled`, async function () {
      const existingCts = []
      const errors = await validateBatches(function (migration) {
        const lunch = migration.createContentType('lunch').name('Lunch').description('A Lunch')

        for (let i = 0; i < MAX_RESOURCE_LINKS + 1; i++) {
          lunch
            .createField(`menu_${i}`)
            .name('Menu')
            .type('RichText')
            .validations([
              { enabledNodeTypes: ['embedded-resource-block'] },
              {
                nodes: {
                  'embedded-resource-block': {
                    validations: [],
                    allowedResources: [VALID_ALLOWED_RESOURCE]
                  }
                }
              }
            ])
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

    it(`should not return an error if the RichText fields do not have embedded-resource-blocks enabled`, async function () {
      const existingCts = []
      const errors = await validateBatches(function (migration) {
        const lunch = migration.createContentType('lunch').name('Lunch').description('A Lunch')

        for (let i = 0; i < MAX_RESOURCE_LINKS + 1; i++) {
          lunch
            .createField(`menu_${i}`)
            .name('Menu')
            .type('RichText')
            .validations([{ enabledNodeTypes: ['heading-1'] }])
        }
      }, existingCts)

      expect(errors).to.eql([[]])
    })
  })
})
