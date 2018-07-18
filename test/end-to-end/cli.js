'use strict';

const nixt = require('nixt');

const ACCESS_TOKEN = process.env.CONTENTFUL_INTEGRATION_MANAGEMENT_TOKEN;

const cli = () => {
  return nixt()
    .env('CONTENTFUL_MANAGEMENT_ACCESS_TOKEN', ACCESS_TOKEN)
    .env('TEST_ENVIRONMENT', 'env-end-2-end')
    .base('./bin/contentful-migration ').clone();
};

module.exports = cli;
