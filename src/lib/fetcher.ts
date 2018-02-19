import IntentList from './intent-list'
import APIContentType from '../lib/interfaces/content-type'
import { ContentType } from '../lib/entities/content-type'
import { MigrationHistory } from '../lib/entities/migration-history'
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

  async getContentTypesInChunks (intentList: IntentList): Promise<APIContentType[]> {
    const ids: string[] = _.uniq(intentList.getIntents().reduce((ids, intent) => {
      const intentIds = intent.getRelatedContentTypeIds()
      return ids.concat(intentIds)
    }, []))

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

  async getMigrationHistory (): Promise<MigrationHistory[]> {

    try {
      const response = await this.makeRequest({
        method: 'GET',
        url: '/entries?content_type=migrationHistory'
      })
      return response.items.map(item => new MigrationHistory(item.sys.id, item.fields))
    }catch(e) {
      if (e.name != 'InvalidQuery') {
        throw(e)
      }
      const msg = JSON.parse(e.message)

      const errors = msg.details && msg.details.errors
      if (errors && errors.length > 0 && errors[0].name == 'unknownContentType') {
        // No migration history
        return []
      } else {
        throw(e)
      }
    }
  }
}