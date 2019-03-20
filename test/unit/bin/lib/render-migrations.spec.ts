import { expect } from 'chai'
import renderSetup from './renderSetup'

import { renderPlan } from '../../../../src/bin/lib/render-migration'

describe('Rendering', async () => {

  const requestBatches = await renderSetup()
  let prev = console.log
  let value = []

  beforeEach(function () {
    console.log = function (arg) {
      value.push(arg)
    }
  })

  afterEach(function () {
    console.log = prev
  })

  describe('Render Plan ', () => {
    describe('when --quiet option is passed', () => {
      it ('logs less verbose information of the execution', () => {
        renderPlan(requestBatches,'env-unit', true)

        expect(value).not.to.match(/from:/)
        expect(value).not.to.match(/to:/)
        expect(value).not.to.match(/via:/)
      })
    })

    describe('when --quiet option is not passed', () => {
      it ('logs verbose information of the execution', () => {
        renderPlan(requestBatches,'env-unit')

        expect(value).to.match(/from:/)
        expect(value).to.match(/to:/)
        expect(value).to.match(/via:/)
      })
    })
  })
})
