'use strict';

const Bluebird = require('bluebird');
const co = Bluebird.coroutine;

module.exports = co(function * executor (requests, makeRequest) {
  for (const request of requests) {
    yield makeRequest(request);
  }
});
