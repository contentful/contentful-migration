import IntentList from '../../../../../src/lib/intent-list'
import {
  ContentType,
  EditorInterfaces
} from '../../../../../src/lib/entities/content-type'
import { Tag } from '../../../../../src/lib/entities/tag'
import { OfflineAPI } from '../../../../../src/lib/offline-api/index'
import { migration } from '../../../../../src/lib/migration-steps'

const noOp = () => undefined

const validateBatches = async function (
  runMigration,
  contentTypes,
  tags = [],
  entries = [],
  locales = [],
  editorInterfaces: Record<string, any> = {}
) {
  const intents = await migration(runMigration, noOp, {})
  const list = new IntentList(intents)

  const existingCTs: Map<String, ContentType> = new Map()

  for (const ct of contentTypes) {
    const contentType = new ContentType(ct)
    existingCTs.set(contentType.id, contentType)
  }

  const existingEIs: Map<string, EditorInterfaces> = new Map()
  for (const [contentTypeId, apiEI] of Object.entries(editorInterfaces)) {
    const editorInterfaces = new EditorInterfaces(apiEI)
    existingEIs.set(contentTypeId, editorInterfaces)
  }

  const existingTags: Map<String, Tag> = new Map()

  for (const tagPayload of tags) {
    const tag = new Tag(tagPayload)
    existingTags.set(tag.id, tag)
  }

  const api = new OfflineAPI({
    contentTypes: existingCTs,
    tags: existingTags,
    entries,
    locales,
    editorInterfacesByContentType: existingEIs
  })

  await list.compressed().applyTo(api)

  const batches = await api.getRequestBatches()

  return batches.map((batch) => batch.validationErrors)
}

export default validateBatches
