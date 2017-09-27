'use strict';

const _ = require('lodash');
const Bluebird = require('bluebird');

const co = Bluebird.coroutine;

module.exports = co(function * fetcher (plan, request) {
  const ids = _.uniq(plan.map((chunk) => chunk[0].payload.contentTypeId));

  if (ids.length === 0) {
    return [];
  }

  const response = yield request({
    method: 'GET',
    url: `/content_types?sys.id[in]=${ids.join(',')}`
  });

  return response.items;
});
