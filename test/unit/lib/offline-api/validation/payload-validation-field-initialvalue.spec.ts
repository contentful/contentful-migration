'use strict'

import { expect } from 'chai'
import validateBatches from './validate-batches'

  // locales are invalid
  // type of values is correct > string, number, integer, boolean
  // field type allowes initial values > [ShortText, "Text ..."]

describe('payload validation (initial value)', function () {
  // describe('when setting a display field that does not (yet) exist', function () {
  //   it('returns an error', async function () {
  //     const errors = await validateBatches(function (migration) {
  //       const lunch = migration.createContentType('lunch').name('lunch')
  //       lunch.createField('mainCourse').name('mainCourse').type('Symbol')

  //       lunch.deleteField('mainCourse')

  //       lunch.displayField('dessert')
  //       migration.createContentType('dinner').name('dinner')
  //       lunch.createField('dessert').name('dessert').type('Symbol')
  //     }, [])

  //     expect(errors).to.eql([
  //       [],
  //       [],
  //       [
  //         {
  //           type: 'InvalidAction',
  //           message: 'Cannot set "dessert" as displayField on content type "lunch" because it does not exist'
  //         }
  //       ],
  //       [],
  //       []
  //     ])
  //   })
  // })

  // describe('when setting a display field that does exist', function () {
  //   it('does not return any errors', async function () {
  //     const errors = await validateBatches(function (migration) {
  //       const lunch = migration.createContentType('lunch').name('lunch')
  //       lunch.createField('dessert').name('dessert').type('Symbol')
  //       lunch.createField('mainCourse').name('mainCourse').type('Symbol')
  //       lunch.displayField('dessert')
  //     }, [])

  //     expect(errors).to.eql([
  //       []
  //     ])
  //   })
  // })

  // describe('when deleting a field that is set as the display field', function () {
  //   it('returns an error', async function () {
  //     const errors = await validateBatches(function (migration) {
  //       const lunch = migration.createContentType('lunch').name('lunch')
  //       lunch.createField('mainCourse').name('mainCourse').type('Symbol')
  //       lunch.createField('dessert').name('dessert').type('Symbol')
  //       lunch.displayField('dessert')

  //       migration.createContentType('dinner').name('dinner')

  //       lunch.deleteField('dessert')
  //     }, [])

  //     expect(errors).to.eql([
  //       [],
  //       [],
  //       [
  //         {
  //           type: 'InvalidAction',
  //           message: 'Cannot delete field "dessert" on content type "lunch" because it is set as the display field'
  //         }
  //       ]
  //     ])
  //   })
  // })
})
