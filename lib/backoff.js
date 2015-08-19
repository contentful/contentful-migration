'use strict';

var Promise = require('es6-promise');
var wait_ = require('./wait');

module.exports = function (maxRetries, wait) {
  wait = wait || wait_;
  var attempt = 0
  return function maybeRetry (error, retry) {
    if (attempt < maxRetries) {
      return wait(Math.pow(2, attempt++) * 1000).then(retry)
    } else {
      return Promise.reject(error)
    }
  }
}
