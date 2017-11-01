import * as Bluebird from 'bluebird'
import ContentType from './entities/content-type'

export default async function checkEntriesForDeletedCts (chunks, contentTypes: ContentType[], request): Promise<any> {
  const deletedCtIds: Set<string> = new Set(chunks
    .filter((chunk) => chunk[0].type === 'contentType/delete')
    .map((chunk) => chunk[0].payload.contentTypeId)
  )

  if (deletedCtIds.size === 0) {
    return contentTypes
  }

  return Bluebird.map(contentTypes, async function (ct: any): Promise<any> {
    console.log(ct)
    if (deletedCtIds.has(ct.id)) {
      const response = await request({
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
