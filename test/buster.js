'use strict';

var config = module.exports;

config.integration = {
  environment: 'node',
  rootPath: '../',
  sources: [
    'index.js'
  ],
  tests: [
    'test/**/*-test.js'
  ]
};

