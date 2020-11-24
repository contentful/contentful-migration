'use strict';

const requiredEnvVars = [
  'CONTENTFUL_INTEGRATION_SOURCE_SPACE',
  'CONTENTFUL_INTEGRATION_MANAGEMENT_TOKEN'
];

const undefinedEnvVar = (key) => typeof process.env[key] === 'undefined';

if (requiredEnvVars.some(undefinedEnvVar)) {
  console.error('Please define all necessary "CONTENTFUL_INTEGRATION_*" environment variables');
  process.exit(1);
}
