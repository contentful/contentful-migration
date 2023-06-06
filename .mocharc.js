'use strict'

module.exports = {
  checkLeaks: true,
  timeout: 10000,
  slow: 5000,
  exit: true,
  recursive: true,
  file: ['./test/setup.js'],
  require: 'source-map-support/register'
}

/*
--require test/setup
--require source-map-support/register
--check-leaks
--timeout 5000
 */
