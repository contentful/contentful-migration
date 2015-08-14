'use strict';

require('es6-promise').polyfill()
var buster = require('buster')

var rateLimit = require('../../lib/rate-limit');
var wait = require('../../lib/wait');

buster.spec.expose()

describe('Rate limiting', function () {
  it('works', function () {
    var count = 0
    var inc = rateLimit(1, 5, function () { count++ })

    // Queue up 10 calls
    for (var i = 0; i < 10; i++) {
      inc()
    }

    return wait(14).then(function () {
      buster.expect(count).toEqual(2)
      return wait(14).then(function () {
        buster.expect(count).toEqual(5)
        return wait(60).then(function () {
          buster.expect(count).toEqual(10)
        })
      })
    })
  })
})

