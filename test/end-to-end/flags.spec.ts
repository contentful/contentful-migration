import { describe, it, expect } from 'vitest'
import path from 'path'
import assert from './assertions'
import cli from './cli'

const SOURCE_TEST_SPACE = process.env.CONTENTFUL_SPACE_ID

describe('contentful-migration CLI flags', () => {
  it('"--help" outputs the help message', (done) => {
    cli().run('-- --help').expect(assert.help.message()).end(done)
  })
  it('"no args" outputs the help message', (done) => {
    cli().run('').expect(assert.help.message()).expect(assert.help.noArgsWithSuggestion()).end(done)
  })
  it('"wrong arg" outputs the help message', (done) => {
    cli()
      .run('foo')
      .expect(assert.help.message())
      .expect(assert.help.wrongArgsWithSuggestion())
      .end(done)
  })
  it('"--yes" skips the validation', (done) => {
    cli()
      .run(
        `--yes --space-id ${SOURCE_TEST_SPACE} ./test/end-to-end/migration-scripts/empty-migration.js`
      )
      .expect(assert.confirmation.noConfirmationMessage())
      .end(done)
  })
  it('includes "--quiet, -q" as options in the help message', (done) => {
    cli().run(`-- --help`).expect(assert.logs.helpMessage()).end(done)
  })

  describe('file path resolution', () => {
    // Use the Travis build dir for integration tests, fallback to cwd for local tests
    const buildDir = process.env.TRAVIS_BUILD_DIR || process.cwd()

    it('does not treat absolute script path as relative', (done) => {
      const scriptPath = path.join(
        buildDir,
        'test/end-to-end/migration-scripts/non-existing-migration.js'
      )

      cli()
        .run(`--space-id ${SOURCE_TEST_SPACE} ${scriptPath}`)
        .expect(assert.help.nonExistingMigrationScript(scriptPath))
        .end(done)
    })

    it('resolves relative script path to cwd', (done) => {
      const scriptPath = 'test/end-to-end/migration-scripts/non-existing-migration.js'
      const resolvedPath = path.join(buildDir, scriptPath)

      cli()
        .run(`--space-id ${SOURCE_TEST_SPACE} ${scriptPath}`)
        .expect(assert.help.nonExistingMigrationScript(resolvedPath))
        .end(done)
    })
  })
})
