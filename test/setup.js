'use strict';

const chai = require('chai');
const dirtyChai = require('dirty-chai');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);
chai.use(dirtyChai);

const requiredEnvVars = [
  'CONTENTFUL_INTEGRATION_SOURCE_SPACE',
  'CONTENTFUL_INTEGRATION_MANAGEMENT_TOKEN'
];

const undefinedEnvVar = (key) => typeof process.env[key] === 'undefined';

if (requiredEnvVars.some(undefinedEnvVar)) {
  throw new Error('Please define all necessary "CONTENTFUL_INTEGRATION_*" environment variables');
}
