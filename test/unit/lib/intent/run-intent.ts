import APIEntry from '../../../../src/lib/interfaces/api-entry'
import APIContentType from '../../../../src/lib/interfaces/content-type'
import IntentList from '../../../../src/lib/intent-list'
import { ContentType, Field } from '../../../../src/lib/entities/content-type'
import { OfflineAPI } from '../../../../src/lib/offline-api/index'
import { Entry } from '../../../../src/lib/entities/entry'

const runIntent = async function (intent, contentTypes: APIContentType[], entries: APIEntry[]): Promise<OfflineAPI> {
  const list = new IntentList([intent])
  const packages = list.toPackages()

  const existingCTs: Map<String, ContentType> = new Map()
  const existingEntries: Entry[] = []

  for (const ct of contentTypes) {
    const contentType = new ContentType({
      id: ct.sys.id,
      version: ct.sys.version,
      name: ct.name,
      description: ct.description,
      fields: ct.fields as Field[]
    })

    existingCTs.set(contentType.id, contentType)
  }

  for (const apiEntry of entries) {
    existingEntries.push(new Entry(apiEntry))
  }

  const api = new OfflineAPI(existingCTs, existingEntries)

  for (const pkg of packages) {
    await pkg.applyTo(api)
  }

  return api
}

export default runIntent
