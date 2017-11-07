import APIContentType from '../../../../src/lib/interfaces/content-type'
import IntentList from '../../../../src/lib/intent-list'
import { ContentType, Field } from '../../../../src/lib/entities/content-type'
import { OfflineAPI } from '../../../../src/lib/offline-api/index'
import { migration } from '../../../../src/lib/migration-steps'

const buildPayloads = async function (runMigration, contentTypes: APIContentType[]) {
  const intents = await migration(runMigration)
  const list = new IntentList(intents)

  const packages = list.toPackages()

  const existingCTs: Map<String, ContentType> = new Map()

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

  const state = new OfflineAPI(existingCTs, [])

  for (const pkg of packages) {
    await pkg.applyTo(state)
  }
  const batches = await state.getRequestBatches()

  return batches.map((batch) => batch.requests)
}

export default buildPayloads
