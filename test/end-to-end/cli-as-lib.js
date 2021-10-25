'use strict';

const nixt = require('nixt');

const SPACE_ID = process.env.CONTENTFUL_SPACE_ID;
const ACCESS_TOKEN = process.env.CONTENTFUL_INTEGRATION_TEST_CMA_TOKEN;
const cli = () => {
  return nixt()
    .env('CONTENTFUL_SPACE_ID', SPACE_ID)
    .env('CONTENTFUL_MANAGEMENT_ACCESS_TOKEN', ACCESS_TOKEN)
    .base('node ./examples/usage-as-lib.js ')
    .clone();
};

module.exports = cli;
