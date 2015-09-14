'use strict';

var Promise = require('es6-promise').Promise;
var buster = require('buster')

var rateLimit = require('../../lib/rate-limit');
var wait = require('../../lib/wait');

buster.spec.expose()

describe('Rate limiting', function () {
  it('works', function () {
    var count = 0
    var inc = rateLimit(1, 5, function () { return count++ })
    var results = []

    // Queue up 10 calls
    for (var i = 0; i < 10; i++) {
      inc().then(results.push.bind(results))
    }

    return wait(14).then(function () {
      buster.expect(count).toEqual(2)
      return wait(14).then(function () {
        buster.expect(count).toEqual(5)
        return wait(60).then(function () {
          buster.expect(count).toEqual(10)
          buster.expect(results).toEqual([ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ])
        })
      })
    })
  })
})

