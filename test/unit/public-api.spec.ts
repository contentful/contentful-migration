import { describe, it, expect } from 'vitest'

describe('Public API exports', () => {
  describe('built/bin/cli exports', () => {
    it('should export runMigration function as documented in README', () => {
      // This tests the exact import pattern documented in the README
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const { runMigration } = require('../../built/bin/cli')

      expect(runMigration).toBeDefined()
      expect(typeof runMigration).toBe('function')
    })

    it('should export createMakeRequest function', () => {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const { createMakeRequest } = require('../../built/bin/cli')

      expect(createMakeRequest).toBeDefined()
      expect(typeof createMakeRequest).toBe('function')
    })

    it('should be importable via the documented path', () => {
      // This ensures the path structure matches what's documented
      expect(() => {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        require('../../built/bin/cli')
      }).not.toThrow()
    })
  })

  describe('built/bin/lib/contentful-client exports', () => {
    it('should export createManagementClient function', () => {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const { createManagementClient } = require('../../built/bin/lib/contentful-client')

      expect(createManagementClient).toBeDefined()
      expect(typeof createManagementClient).toBe('function')
    })
  })
})
