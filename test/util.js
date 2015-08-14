'use strict';

var contentful = require('..');

if (process.env.CONTENTFUL_ACCESS_TOKEN === undefined) {
    throw new ReferenceError('Environment variable must be defined: CONTENTFUL_ACCESS_TOKEN');
}
if (process.env.CONTENTFUL_MANAGEMENT_HOSTNAME === undefined) {
    throw new ReferenceError('Environment variable must be defined: CONTENTFUL_MANAGEMENT_HOSTNAME');
}

exports.wait = require('../lib/wait');

exports.client = contentful.createClient({
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  host: process.env.CONTENTFUL_MANAGEMENT_HOSTNAME,
  secure: true
});

