'use strict';

const Bluebird = require('bluebird');

const contentTypeIdsInPlan = require('./content-type-ids-in-plan');

const co = Bluebird.coroutine;

module.exports = co(function * fetcher (plan, request) {
  const { created, updated } = contentTypeIdsInPlan(plan);
  const ids = created.concat(updated);

  if (ids.length === 0) {
    return [];
  }

  const response = yield request({
    method: 'GET',
    url: `/content_types?sys.id[in]=${ids.join(',')}`
  });

  return response.items;
});
