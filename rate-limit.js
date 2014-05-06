/**
 * Promise-based rate limiting of a function. Assumes that the passed in
 * function will return a Promise.
 */
'use strict';

var Bluebird = require('bluebird');

module.exports = function (concurrency, delay, fn) {
  concurrency = positiveInteger('concurrency', concurrency);
  delay       = positiveInteger('delay', delay);

  var inFlight  = 0;
  var callQueue = [];

  function shift () {
    if (inFlight >= concurrency) {
      return;
    }

    if (callQueue.length) {
      var call = callQueue.shift();
      inFlight++;

      try {
        var start = new Date().getTime();

        call.resolve(fn.apply(call.self, call.args))
            .finally(function () {
              var duration = start - new Date().getTime();

              // If this request completed faster than our rate-limit would
              // allow, wait the appropriate amount of time before marking the
              // request as finished.
              if (duration < delay) {
                return Bluebird.delay(delay - duration);
              }
            })
            .finally(onRequestFinished);

      } catch (err) {
        call.reject(err);
      }
    }
  }

  function onRequestFinished () {
    inFlight--;
    shift();
  }

  return function () {
    var self = this;
    var args = Array.prototype.slice.call(arguments);
    return new Bluebird(function (resolve, reject) {
      callQueue.push({
        reject: reject,
        resolve: resolve,
        self: self,
        args: args
      });
      shift();
    });
  };
};

function positiveInteger (name, value) {
  value = parseInt(value, 10);
  if (isNaN(value) || value < 1) {
    throw new TypeError(name + ' must be a positive integer');
  }
}
