'use strict'

import * as _ from 'lodash'
import APIContentType from './interfaces/content-type'

export async function fetcher (plan: any, request: any): Promise<any[]> {
  const ids: Array<string> = _.uniq(plan.map((chunk) => chunk[0].payload.contentTypeId))

  if (ids.length === 0) {
    return []
  }

  const response = await request({
    method: 'GET',
    url: `/content_types?sys.id[in]=${ids.join(',')}`
  })

  let contentTypes: APIContentType[] = response.items
  return contentTypes
}
