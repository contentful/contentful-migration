'use strict';

var contentful = require('..');
var Promise = require('bluebird');

if (process.env.CONTENTFUL_ACCESS_TOKEN === undefined) {
    throw new ReferenceError('Environment variable must be defined: CONTENTFUL_ACCESS_TOKEN');
}
if (process.env.CONTENTFUL_MANAGEMENT_HOSTNAME === undefined) {
    throw new ReferenceError('Environment variable must be defined: CONTENTFUL_MANAGEMENT_HOSTNAME');
}
exports.client = contentful.createClient({
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  host: process.env.CONTENTFUL_MANAGEMENT_HOSTNAME,
  secure: true
});

exports.wait = wait;
function wait(ms) {
  if (!ms) { ms = 5000; }
  return Promise.delay(ms);
}
