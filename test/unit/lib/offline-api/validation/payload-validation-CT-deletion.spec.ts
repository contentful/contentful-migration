'use strict'

import { expect } from 'chai'
import validateBatches from './validate-batches'

describe('payload validation (content type deletion)', function () {
  it('skips ct delete payloads', async function () {
    const existingCts = [{
      sys: { id: 'breakfast' },
      name: 'breakfast',
      fields: []
    }]

    const errors = await validateBatches(function (migration) {
      const lunch = migration.createContentType('lunch').name('lunch')
      lunch.createField('mainCourse').name('mainCourse').type('Symbol')
      migration.deleteContentType('breakfast')
    }, existingCts)

    expect(errors).to.eql([
      [],
      []
    ])
  })
})
