import APIContentType from '../../../../src/lib/interfaces/content-type'
import IntentList from '../../../../src/lib/intent-list'
import { ContentType, EditorInterfaces } from '../../../../src/lib/entities/content-type'
import { OfflineAPI } from '../../../../src/lib/offline-api/index'
import { migration } from '../../../../src/lib/migration-steps'

const buildPayloads = async function (runMigration, contentTypes: APIContentType[]) {
  const intents = await migration(runMigration, () => {}, {})
  const list = new IntentList(intents)

  const existingCTs: Map<String, ContentType> = new Map()

  const ei = new EditorInterfaces({
    sys: {
      version: 1
    },
    controls: []
  })
  const editorInterfacesByContentType: Map<String, EditorInterfaces> = new Map()

  for (const ct of contentTypes) {
    const contentType = new ContentType(ct)
    editorInterfacesByContentType.set(contentType.id, ei)
    existingCTs.set(contentType.id, contentType)
  }

  const api = new OfflineAPI(existingCTs, [], [], editorInterfacesByContentType)

  await list.compressed().applyTo(api)

  const batches = await api.getRequestBatches()

  return batches.map((batch) => batch.requests)
}

export default buildPayloads
