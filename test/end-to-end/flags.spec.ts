import { describe, it, expect } from 'vitest'
import path from 'path'
import assert from './assertions'
import cli from './cli'

const SOURCE_TEST_SPACE = process.env.CONTENTFUL_SPACE_ID

describe('contentful-migration CLI flags', () => {
  it('"--help" outputs the help message', async () => {
    await new Promise<void>((resolve, reject) => {
      cli()
        .run('-- --help')
        .expect(assert.help.message())
        .end((err?: Error) => {
          if (err) reject(err)
          else resolve()
        })
    })
  })
  it('"no args" outputs the help message', async () => {
    await new Promise<void>((resolve, reject) => {
      cli()
        .run('')
        .expect(assert.help.message())
        .expect(assert.help.noArgsWithSuggestion())
        .end((err?: Error) => {
          if (err) reject(err)
          else resolve()
        })
    })
  })
  it('"wrong arg" outputs the help message', async () => {
    await new Promise<void>((resolve, reject) => {
      cli()
        .run('foo')
        .expect(assert.help.message())
        .expect(assert.help.wrongArgsWithSuggestion())
        .end((err?: Error) => {
          if (err) reject(err)
          else resolve()
        })
    })
  })
  it('"--yes" skips the validation', async () => {
    await new Promise<void>((resolve, reject) => {
      cli()
        .run(
          `--yes --space-id ${SOURCE_TEST_SPACE} ./test/end-to-end/migration-scripts/empty-migration.js`
        )
        .expect(assert.confirmation.noConfirmationMessage())
        .end((err?: Error) => {
          if (err) reject(err)
          else resolve()
        })
    })
  })
  it('includes "--quiet, -q" as options in the help message', async () => {
    await new Promise<void>((resolve, reject) => {
      cli()
        .run(`-- --help`)
        .expect(assert.logs.helpMessage())
        .end((err?: Error) => {
          if (err) reject(err)
          else resolve()
        })
    })
  })

  describe('file path resolution', () => {
    // Use the Travis build dir for integration tests, fallback to cwd for local tests
    const buildDir = process.env.TRAVIS_BUILD_DIR || process.cwd()

    it('does not treat absolute script path as relative', async () => {
      const scriptPath = path.join(
        buildDir,
        'test/end-to-end/migration-scripts/non-existing-migration.js'
      )

      await new Promise<void>((resolve, reject) => {
        cli()
          .run(`--space-id ${SOURCE_TEST_SPACE} ${scriptPath}`)
          .expect(assert.help.nonExistingMigrationScript(scriptPath))
          .end((err?: Error) => {
            if (err) reject(err)
            else resolve()
          })
      })
    })

    it('resolves relative script path to cwd', async () => {
      const scriptPath = 'test/end-to-end/migration-scripts/non-existing-migration.js'
      const resolvedPath = path.join(buildDir, scriptPath)

      await new Promise<void>((resolve, reject) => {
        cli()
          .run(`--space-id ${SOURCE_TEST_SPACE} ${scriptPath}`)
          .expect(assert.help.nonExistingMigrationScript(resolvedPath))
          .end((err?: Error) => {
            if (err) reject(err)
            else resolve()
          })
      })
    })
  })
})
