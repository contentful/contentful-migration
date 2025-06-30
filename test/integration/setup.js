'use strict'

const requiredEnvVars = [
  'CONTENTFUL_SPACE_ID',
  'CONTENTFUL_INTEGRATION_TEST_CMA_TOKEN',
  'CONTENTFUL_ORGANIZATION_ID'
]

const undefinedEnvVar = (key) => typeof process.env[key] === 'undefined'

if (requiredEnvVars.some(undefinedEnvVar)) {
  console.error('Please define all necessary "CONTENTFUL_INTEGRATION_*" environment variables')
  process.exit(1)
}
