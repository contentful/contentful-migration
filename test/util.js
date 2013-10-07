'use strict';

var _ = require('underscore-contrib');
var contentful = require('..');
var Promise = require('pacta').Promise;

exports.client = contentful.createClient({
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  host: process.env.CONTENTFUL_MANAGEMENT_HOSTNAME,
  secure: false
});

exports.wait = wait;
function wait(ms) {
  if (!ms) { ms = 5000; }
  var promise = new Promise();
  setTimeout(_.bound(promise, 'resolve'), ms);
  return promise;
}
