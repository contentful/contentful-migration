'use strict';

require('es6-promise').polyfill()
var buster = require('buster')

var createBackoff = require('../../lib/backoff');

buster.spec.expose()

describe('createBackoff', function () {
  it('works', function () {
    var requestedWaits = [];

    var fakeWait = function (delay) {
      requestedWaits.push(delay)
      return Promise.resolve()
    }

    var backoff = createBackoff(3, fakeWait);
    var error = new Error('thrown after 3 tries')
    var attempt = function () {
      return backoff(error, attempt)
    }

    return attempt().then(function () {
      throw new Error('should not succeed')
    }).catch(function (error) {
      buster.expect(requestedWaits).toEqual([1000, 2000, 4000])
      buster.expect(error.message).toEqual('thrown after 3 tries')
    });
  })
})

