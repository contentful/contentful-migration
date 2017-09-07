'use strict';

const _ = require('lodash');

const stripCallsite = function (step) {
  const strippedMeta = _.omit(step.meta, ['callsite']);

  return Object.assign({}, step, {
    meta: strippedMeta
  });
};

module.exports = stripCallsite;
