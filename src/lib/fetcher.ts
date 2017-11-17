import IntentList from './intent-list'
import APIContentType from '../lib/interfaces/content-type'
import { ContentType } from '../lib/entities/content-type'
import * as _ from 'lodash'
import * as Bluebird from 'bluebird'

export default class Fetcher {
  private makeRequest: any

  constructor (makeRequest) {
    this.makeRequest = makeRequest
  }

  async getEntriesInIntents (intentList: IntentList) {
    const ids: string[] = _.uniq(intentList.getIntents().map((intent) => intent.getContentTypeId()))

    if (ids.length === 0) {
      return []
    }

    const response = await this.makeRequest({
      method: 'GET',
      url: `/entries?sys.contentType.sys.id[in]=${ids.join(',')}`
    })

    return response.items
  }

  async getContentTypesInChunks (intentList: IntentList) {
    const ids: string[] = _.uniq(intentList.getIntents().map((intent) => intent.getContentTypeId()))

    if (ids.length === 0) {
      return []
    }

    const response = await this.makeRequest({
      method: 'GET',
      url: `/content_types?sys.id[in]=${ids.join(',')}`
    })

    let contentTypes: APIContentType[] = response.items
    return contentTypes
  }

  async getLocalesForSpace () {
    const response = await this.makeRequest({
      method: 'GET',
      url: `/locales`
    })

    let locales: string[] = response.items.map((i) => i.code)
    return locales
  }

  async checkContentTypesForDeletedCts (intentList: IntentList, contentTypes: ContentType[]): Promise<ContentType[]> {
    const deletedCtIds: Set<string> = new Set(intentList.getIntents()
      .filter((intent) => intent.isContentTypeDelete())
      .map((intent) => intent.getContentTypeId())
    )

    if (deletedCtIds.size === 0) {
      return contentTypes
    }

    const self = this
    return Bluebird.map(contentTypes, async function (ct: any): Promise<ContentType> {
      if (deletedCtIds.has(ct.id)) {
        const response = await self.makeRequest({
          method: 'GET',
          url: `/entries?sys.contentType.sys.id=${ct.id}`
        })

        if (response.items.length > 0) {
          ct.hasEntries = true
        }
      }

      return ct
    })
  }
}
