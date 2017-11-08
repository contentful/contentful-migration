'use strict'
import APIEntry from './interfaces/api-entry'
import IntentList from './intent-list'

import * as _ from 'lodash'

async function fetcher (intentList: IntentList, request: any): Promise<APIEntry[]> {
  const ids: string[] = _.uniq(intentList.getIntents().map((intent) => intent.getContentTypeId()))

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
