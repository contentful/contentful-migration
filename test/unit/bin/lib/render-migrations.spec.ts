import { describe, it, beforeEach, afterEach, beforeAll, expect, vi } from 'vitest'
import renderSetup from './render-setup'

import { renderPlan } from '../../../../src/bin/lib/render-migration'

describe('Rendering', () => {
  let requestBatches

  beforeAll(async () => {
    requestBatches = await renderSetup()
  })

  describe('Render Plan ', () => {
    let logSpy

    beforeEach(() => {
      logSpy = vi.spyOn(console, 'log')
    })

    afterEach(() => {
      vi.restoreAllMocks()
    })

    describe('when --quiet option is passed', () => {
      it('logs less verbose information of the execution', () => {
        renderPlan(requestBatches, 'env-unit', true)

        expect(logSpy).toHaveBeenCalled()
        const callArgs = logSpy.mock.calls[2].join(' ')
        expect(callArgs).not.toMatch(/from:/)
        expect(callArgs).not.toMatch(/to:/)
        expect(callArgs).not.toMatch(/via:/)
      })
    })

    describe('when --quiet option is not passed', () => {
      it('logs verbose information of the execution', () => {
        renderPlan(requestBatches, 'env-unit')

        expect(logSpy).toHaveBeenCalled()
        const callArgs = logSpy.mock.calls[2].join(' ')
        expect(callArgs).toMatch(/from:/)
        expect(callArgs).toMatch(/to:/)
        expect(callArgs).toMatch(/via:/)
      })
    })
  })
})
