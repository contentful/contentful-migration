'use strict';

const nixt = require('nixt');

// TODO: Why don't these work?

const ACCESS_TOKEN = process.env.CONTENTFUL_INTEGRATION_MANAGEMENT_TOKEN;
console.log('ACCESS_TOKEN: ', ACCESS_TOKEN);
process.env.TEST_ENVIRONMENT = 'end-to-end-tests';
const cli = () => {
  return nixt()
    .env('CONTENTFUL_MANAGEMENT_ACCESS_TOKEN', ACCESS_TOKEN)
    .base('./bin/contentful-migration ')
    .clone();
};

module.exports = cli;
