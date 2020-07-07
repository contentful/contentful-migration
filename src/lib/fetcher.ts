import IntentList from './intent-list'
import { APIContentType, APIEditorInterfaces } from '../lib/interfaces/content-type'
import APIEntry from '../lib/interfaces/api-entry'
import APITag from '../lib/interfaces/api-tag'
import { ContentType } from '../lib/entities/content-type'
import * as _ from 'lodash'
import Bluebird from 'bluebird'
import APIFetcher from './interfaces/api-fetcher'

export default class Fetcher implements APIFetcher {
  static perRequestLimit = 100
  private makeRequest: Function

  constructor (makeRequest: Function) {
    this.makeRequest = makeRequest
  }

  async getEntriesInIntents (intentList: IntentList): Promise<APIEntry[]> {
    const loadAllEntries = intentList.getIntents().some((intent) => intent.requiresAllEntries())

    const ids: string[] = _.uniq(
      intentList.getIntents()
      .filter((intent) => intent.isContentTransform() || intent.isEntryDerive() || intent.isEntryTransformToType())
      .map((intent) => intent.getContentTypeId())
    )

    if (!loadAllEntries && ids.length === 0) {
      return []
    }

    const filter = {
      'sys.archivedAt[exists]': 'false'
    }

    // If we want to load all entries, we do not need to add the filter specification
    // that loads just the entries for related content types
    // If we do, then we specify the list of CTs that we want entries for
    if (!loadAllEntries) {
      filter['sys.contentType.sys.id[in]'] = ids.join(',')
    }

    const entries = await this.fetchAllPaginatedItems<APIEntry>('/entries', filter)

    return entries
  }

  async getContentTypesInChunks (intentList: IntentList): Promise<APIContentType[]> {
    // Excluding editor interface intents here since, API-wise, editor interfaces don't require
    // to know the full details about the associated content type.
    // Also excluding tags here as they are independent of cts.
    const ids: string[] = _.uniq(intentList.getIntents()
      .filter((intent) => (!intent.isEditorInterfaceIntent()))
      .filter((intent) => (!intent.isTagIntent()))
      .reduce((ids, intent) => {
        const intentIds = intent.getRelatedContentTypeIds()
        return ids.concat(intentIds)
      }, [])
    )

    if (ids.length === 0) {
      return []
    }

    const filter = {
      'sys.id[in]': ids.join(',')
    }

    const contentTypes = await this.fetchAllPaginatedItems<APIContentType>('/content_types', filter)

    return contentTypes
  }

  async getEditorInterfacesInIntents (intentList: IntentList): Promise<Map<string, APIEditorInterfaces>> {
    const contentTypeIds: string[] = _.uniq(
      intentList.getIntents()
        .filter((intent) => intent.isFieldRename() ||
          intent.isEditorInterfaceIntent()
        )
        .reduce((ids, intent) => {
          const intentIds = intent.getRelatedContentTypeIds()
          return ids.concat(intentIds)
        }, [])
    )

    let editorInterfaces = new Map<string, APIEditorInterfaces>()

    if (contentTypeIds.length === 0) {
      return editorInterfaces
    }
    for (let id of contentTypeIds) {
      await this.fetchEditorInterface(id, editorInterfaces)
    }
    return editorInterfaces
  }

  async getLocalesForSpace (): Promise<string[]> {
    type Locale = { code: string }
    const locales = await this.fetchAllPaginatedItems<Locale>('/locales')

    return locales.map((i) => i.code)
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

  async getTagsForEnvironment (intentList: IntentList): Promise<APITag[]> {
    // Don't fetch tags if migration does not use any:
    if (!(intentList.getIntents().some((intent) => intent.isTagIntent()))) {
      return []
    }

    const tags = await this.fetchAllPaginatedItems<APITag>('/tags')
    return tags
  }

  private async fetchEditorInterface (id: string, editorInterfaces: Map<string, APIEditorInterfaces>) {
    try {
      const response = await this.makeRequest({
        method: 'GET',
        url: `/content_types/${id}/editor_interface`
      })
      editorInterfaces.set(id, response)
    } catch (error) {
      if (error.name === 'NotFound') {  // TODO: expose status codes and use that instead.
        // Initialize a default structure for newly created content types.
        editorInterfaces.set(id, {
          sys: {
            version: 0
          },
          controls: []
        })
      } else {
        throw error
      }
    }
  }

  private async fetchAllPaginatedItems<ResponseType> (url: string, params: { [key: string]: string } = {}): Promise<ResponseType[]> {
    let entities: ResponseType[] = []
    let skip: number = 0

    while (true) {
      const paramsWithSkip = {
        limit: Fetcher.perRequestLimit,
        order: 'sys.createdAt',
        ...params,
        skip: skip.toString(10)
      }

      let urlParams = ''
      for (const [key, value] of Object.entries(paramsWithSkip)) {
        urlParams = `${urlParams}&${key}=${value}`
      }

      const response = await this.makeRequest({
        method: 'GET',
        url: `${url}?${urlParams.substr(1)}`
      })

      entities = entities.concat(response.items)
      skip += response.items.length

      if (skip >= response.total) {
        break
      }
    }

    return entities
  }

}
