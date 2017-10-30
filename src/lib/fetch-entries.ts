'use strict'

import * as _ from 'lodash'

async function fetcher (plan: any, request: any): Promise<any[]> {
  const ids: Array<string> = _.uniq(plan.map((chunk) => chunk[0].payload.contentTypeId))

  if (ids.length === 0) {
    return []
  }

  const response = await request({
    method: 'GET',
    url: `/entries?sys.contentType.sys.id[in]=${ids.join(',')}`
  })

  return response.items
}

export {
  fetcher as default,
  fetcher
}
