import { describe, it, expect } from 'vitest'
import assert from './assertions'
import cliAsLib from './cli-as-lib'
import stripAnsi from 'strip-ansi'

describe('cli-as-lib', () => {
  describe('04-steps-errors.js', () => {
    it('should throw and allow for cleanup code to execute', async () => {
      await new Promise<void>((resolve, reject) => {
        cliAsLib()
          .run(require.resolve(`../../examples/04-steps-errors.js`))
          .expect((err) => {
            assert.errors.recovery(err)
          })
          .end((err?: Error) => {
            if (err) reject(err)
            else resolve()
          })
      })
    })
  })
})
