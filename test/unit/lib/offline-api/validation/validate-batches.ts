import IntentList from '../../../../../src/lib/intent-list'
import { ContentType } from '../../../../../src/lib/entities/content-type'
import { Tag } from '../../../../../src/lib/entities/tag'
import { OfflineAPI } from '../../../../../src/lib/offline-api/index'
import { migration } from '../../../../../src/lib/migration-steps'

const noOp = () => undefined

const validateBatches = async function (
  runMigration,
  contentTypes,
  tags = [],
  entries = [],
  locales = []
) {
  const intents = await migration(runMigration, noOp, {})
  const list = new IntentList(intents)

  const existingCTs: Map<String, ContentType> = new Map()

  for (const ct of contentTypes) {
    const contentType = new ContentType(ct)
    existingCTs.set(contentType.id, contentType)
  }

  const existingTags: Map<String, Tag> = new Map()

  for (const tagPayload of tags) {
    const tag = new Tag(tagPayload)
    existingTags.set(tag.id, tag)
  }

  const api = new OfflineAPI({ contentTypes: existingCTs, tags: existingTags, entries, locales })

  await list.compressed().applyTo(api)

  const batches = await api.getRequestBatches()

  return batches.map((batch) => batch.validationErrors)
}

export default validateBatches
