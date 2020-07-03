import IntentList from '../intent-list/index'
import { ContentType } from '../entities/content-type'

export default interface APIFetcher {
  getEntriesInIntents (intentList: IntentList)
  getContentTypesInChunks (intentList: IntentList)
  getEditorInterfacesInIntents (intentList: IntentList)
  getLocalesForSpace ()
  checkContentTypesForDeletedCts (intentList: IntentList, contentTypes: ContentType[])
  // TODO: Add a fetcher for tags
}
