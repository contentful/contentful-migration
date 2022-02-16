'use strict'

import { expect } from 'chai'
import validateBatches from './validate-batches'

describe('payload validation (dependencies)', function () {
  describe('when setting a field to Array but not specifying the items', function () {
    it('returns an error', async function () {
      const existingCts = []
      const errors = await validateBatches(function (migration) {
        const lunch = migration.createContentType('lunch').name('Lunch').description('A Lunch')

        lunch.createField('mainCourse').name('Main Course').type('Array')
      }, existingCts)

      expect(errors).to.eql([
        [
          {
            type: 'InvalidPayload',
            message:
              'The property "items" is required on the field "mainCourse" because "type" is "Array".'
          }
        ]
      ])
    })
  })

  describe('when setting a field to Symbol but specifying the items', function () {
    it('returns an error', async function () {
      const existingCts = []
      const errors = await validateBatches(function (migration) {
        const lunch = migration.createContentType('lunch').name('Lunch').description('A Lunch')

        lunch.createField('mainCourse').name('Main Course').type('Symbol').items('Entry')
      }, existingCts)

      expect(errors).to.eql([
        [
          {
            type: 'InvalidPayload',
            message:
              'The property "items" is forbidden on the field "mainCourse" because "type" is not "Array".'
          }
        ]
      ])
    })
  })

  describe('when setting a field to Array but specifying a wrong items type', function () {
    it('returns an error', async function () {
      const existingCts = []
      const errors = await validateBatches(function (migration) {
        const lunch = migration.createContentType('lunch').name('Lunch').description('A Lunch')

        lunch.createField('mainCourse').name('Main Course').type('Array').items({
          type: 'Hermann'
        })
      }, existingCts)

      expect(errors).to.eql([
        [
          {
            type: 'InvalidPayload',
            message:
              'The property "items.type" on the field "mainCourse" must be one of ["Symbol", "Link"].'
          }
        ]
      ])
    })
  })

  describe('when setting a field to Array and the type to Link but not specifying a link type', function () {
    it('returns an error', async function () {
      const existingCts = []
      const errors = await validateBatches(function (migration) {
        const lunch = migration.createContentType('lunch').name('Lunch').description('A Lunch')

        lunch.createField('mainCourse').name('Main Course').type('Array').items({
          type: 'Link'
        })
      }, existingCts)

      expect(errors).to.eql([
        [
          {
            type: 'InvalidPayload',
            message:
              'The property "items.linkType" is required on the field "mainCourse" because "items.type" is "Link".'
          }
        ]
      ])
    })
  })

  describe('when setting a field to Array and the type to Link but specifying a wrong link type', function () {
    it('returns an error', async function () {
      const existingCts = []
      const errors = await validateBatches(function (migration) {
        const lunch = migration.createContentType('lunch').name('Lunch').description('A Lunch')

        lunch.createField('mainCourse').name('Main Course').type('Array').items({
          type: 'Link',
          linkType: 'Hermann'
        })
      }, existingCts)

      expect(errors).to.eql([
        [
          {
            type: 'InvalidPayload',
            message:
              'The property "items.linkType" on the field "mainCourse" must be one of ["Asset", "Entry"].'
          }
        ]
      ])
    })
  })

  describe('when setting a field to Array and the type to Link and specifying a correct link type', function () {
    it('returns no errors', async function () {
      const existingCts = []
      const errors = await validateBatches(function (migration) {
        const lunch = migration.createContentType('lunch').name('Lunch').description('A Lunch')

        lunch.createField('mainCourse').name('Main Course').type('Array').items({
          type: 'Link',
          linkType: 'Asset'
        })
      }, existingCts)

      expect(errors).to.eql([[]])
    })
  })
})
