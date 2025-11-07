import { describe, it, expect } from 'vitest'
import assert from './assertions'
import cliAsLib from './cli-as-lib'

describe('cli-as-lib', () => {
  describe('04-steps-errors.js', () => {
    it('should throw and allow for cleanup code to execute', (done) => {
      cliAsLib()
        .run(require.resolve(`../../examples/04-steps-errors.js`))
        .expect(assert.errors.recovery)
        .end(done)
    })
  })
})
