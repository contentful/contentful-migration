'use strict'
import IntentList from './intent-list'

import * as _ from 'lodash'
import APIContentType from './interfaces/content-type'

export async function fetcher (intentList: IntentList, request: any): Promise<APIContentType[]> {
  const ids: string[] = _.uniq(_.flatten(intentList.getIntents().map((intent) => intent.getRelatedContentTypeIds())))

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
