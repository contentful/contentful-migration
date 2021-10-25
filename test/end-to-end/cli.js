'use strict';

const nixt = require('nixt');

const ACCESS_TOKEN = process.env.CONTENTFUL_INTEGRATION_TEST_CMA_TOKEN;
process.env.TEST_ENVIRONMENT = 'end-to-end-tests';
const cli = () => {
  return nixt()
    .env('CONTENTFUL_MANAGEMENT_ACCESS_TOKEN', ACCESS_TOKEN)
    .base('./bin/contentful-migration ')
    .clone();
};

module.exports = cli;
