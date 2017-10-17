'use strict';

import * as _ from 'lodash';

export default async function fetcher (plan, request) {
  const ids: Array<string> = _.uniq(plan.map((chunk) => chunk[0].payload.contentTypeId));

  if (ids.length === 0) {
    return [];
  }

  const response = await request({
    method: 'GET',
    url: `/content_types?sys.id[in]=${ids.join(',')}`
  });

  return response.items;
};
