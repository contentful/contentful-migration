import IntentList from '../../../../../src/lib/intent-list'
import { ContentType } from '../../../../../src/lib/entities/content-type'
import { OfflineAPI } from '../../../../../src/lib/offline-api/index'
import { migration } from '../../../../../src/lib/migration-steps'

const validateBatches = async function (runMigration, contentTypes) {
  const intents = await migration(runMigration)
  const list = new IntentList(intents)

  const existingCTs: Map<String, ContentType> = new Map()

  for (const ct of contentTypes) {
    const contentType = new ContentType(ct)

    existingCTs.set(contentType.id, contentType)
  }

  const api = new OfflineAPI(existingCTs, [], [])

  await list.compressed().applyTo(api)

  const batches = await api.getRequestBatches()

  return batches.map((batch) => batch.errors)
}

export default validateBatches
