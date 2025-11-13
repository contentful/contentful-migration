const { defineConfig, globalIgnores } = require('eslint/config')

const js = require('@eslint/js')

const contentfulBackend = require('@contentful/eslint-config-backend')

const { FlatCompat } = require('@eslint/eslintrc')

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
})

module.exports = defineConfig([
  {
    ...contentfulBackend.default,
    extends: compat.extends('prettier'),
    files: ['examples/**/*.js', 'test/**/*.js', 'src/**/*.js'],
    rules: {
      'max-len': [
        2,
        120,
        {
          ignoreStrings: true,
          ignoreTemplateLiterals: true
        }
      ]
    }
  },
  globalIgnores(['test/fixtures/', 'dist/', 'coverage/'])
])
