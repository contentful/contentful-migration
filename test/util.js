'use strict';

var _ = require('underscore-contrib');
var contentful = require('..');
var q = require('q');

exports.client = contentful.createClient({
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  host: process.env.CONTENTFUL_MANAGEMENT_HOSTNAME,
  secure: false
});

exports.wait = wait;
function wait(ms) {
  if (!ms) { ms = 5000; }
  return q.delay(ms);
}
