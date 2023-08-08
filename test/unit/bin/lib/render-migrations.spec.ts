import { expect } from 'chai'
import sinon from 'sinon'
import renderSetup from './render-setup'

import { renderPlan } from '../../../../src/bin/lib/render-migration'

describe('Rendering', async () => {
  const requestBatches = await renderSetup()

  describe('Render Plan ', () => {
    let logSpy

    beforeEach(function () {
      logSpy = sinon.spy(console, 'log')
    })

    afterEach(function () {
      logSpy.restore()
    })

    describe('when --quiet option is passed', () => {
      it('logs less verbose information of the execution', () => {
        renderPlan(requestBatches, 'env-unit', true)

        expect(logSpy.called).to.eq(true)
        expect(logSpy.getCall(2).args).not.to.match(/from:/)
        expect(logSpy.getCall(2).args).not.to.match(/to:/)
        expect(logSpy.getCall(2).args).not.to.match(/via:/)
      })
    })

    describe('when --quiet option is not passed', () => {
      it('logs verbose information of the execution', () => {
        renderPlan(requestBatches, 'env-unit')

        expect(logSpy.called).to.eq(true)
        expect(logSpy.getCall(2).args).to.match(/from:/)
        expect(logSpy.getCall(2).args).to.match(/to:/)
        expect(logSpy.getCall(2).args).to.match(/via:/)
      })
    })
  })
})
