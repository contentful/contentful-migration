'use strict'

import { expect } from 'chai'
import validateBatches from './validate-batches'

describe('payload validation (deletion)', function () {
  describe('when setting a field to deleted that is not omitted', function () {
    it('returns an error', async function () {
      const existingCts = [
        {
          sys: { id: 'lunch' },
          name: 'Lunch',
          fields: [{ id: 'mainCourse', name: 'Main Course', type: 'Symbol' }]
        }
      ]

      const errors = await validateBatches(function (migration) {
        const lunch = migration.editContentType('lunch')

        lunch.editField('mainCourse').deleted(true)
      }, existingCts)

      expect(errors).to.eql([
        [
          {
            type: 'InvalidAction',
            message:
              'Cannot set "deleted" to "true" on field "mainCourse" on content type "lunch". It needs to be omitted first. Consider using "deleteField".'
          }
        ]
      ])
    })
  })

  describe('when setting a field to deleted and omitted in one step', function () {
    it('returns an error', async function () {
      const existingCts = [
        {
          sys: { id: 'lunch' },
          name: 'Lunch',
          fields: [{ id: 'mainCourse', name: 'Main Course', type: 'Symbol' }]
        }
      ]

      const errors = await validateBatches(function (migration) {
        const lunch = migration.editContentType('lunch')

        lunch.editField('mainCourse').deleted(true).omitted(true)
      }, existingCts)

      expect(errors).to.eql([
        [
          {
            type: 'InvalidAction',
            message:
              'Cannot set "deleted" to "true" on field "mainCourse" on content type "lunch". It needs to be omitted first. Consider using "deleteField".'
          }
        ]
      ])
    })
  })

  describe('when setting a field to omitted and then deleted', function () {
    it('returns an error', async function () {
      const existingCts = [
        {
          sys: { id: 'lunch' },
          name: 'Lunch',
          fields: [{ id: 'mainCourse', name: 'Main Course', type: 'Symbol', omitted: true }]
        }
      ]

      const errors = await validateBatches(function (migration) {
        const lunch = migration.editContentType('lunch')

        lunch.editField('mainCourse').deleted(true)
      }, existingCts)

      expect(errors).to.eql([[]])
    })
  })

  describe('when deleting and then recreating a field', function () {
    it('does not return any error', async function () {
      const existingCts = [
        {
          sys: { id: 'dog', version: 3 },
          name: 'dog',
          fields: [{ id: 'owner', name: 'owner', type: 'Symbol' }]
        }
      ]

      const errors = await validateBatches(function up (migration) {
        const dog = migration.editContentType('dog')

        dog.deleteField('owner')

        dog.createField('owner').type('Symbol').name('Owner name').required(false)
      }, existingCts)

      expect(errors).to.eql([[], []])
    })
  })
})
