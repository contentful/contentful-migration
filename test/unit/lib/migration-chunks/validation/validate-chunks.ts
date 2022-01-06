import { migration as migrationSteps } from '../../../../../src/lib/migration-steps'
import IntentList from '../../../../../src/lib/intent-list'
import validate from '../../../../../src/lib/migration-chunks/validation'
import { ContentType, EditorInterfaces } from '../../../../../src/lib/entities/content-type'
import { Tag } from '../../../../../src/lib/entities/tag'

const noOp = () => undefined

const stripCallsites = (errors) => {
  return errors.map((error) => {
    delete error.details.intent.package
    error.details.step = error.details.intent
    delete error.details.intent
    delete error.details.step.meta.callsite
    return error
  })
}

const validateChunks = async function (migration, testCts: any[], testTags: any[] = [], testEis: Record<string, any> = {}) {
  const intents = await migrationSteps(migration, noOp, {})
  const list = new IntentList(intents)

  const existingCts: ContentType[] = testCts.map((ct) => {
    const contentType = new ContentType(ct)
    contentType.hasEntries = ct.hasEntries
    return contentType
  })

  const existingEis: Map<string, EditorInterfaces> = new Map()
  for (const [contentTypeId, apiEi] of Object.entries(testEis)) {
    const editorInterfaces = new EditorInterfaces(apiEi)
    existingEis.set(contentTypeId, editorInterfaces)
  }

  const existingTags: Tag[] = testTags.map((tag) => {
    return new Tag(tag)
  })

  let errors = validate(list, existingCts, existingEis, existingTags)
  const stripped = stripCallsites(errors)
  return stripped
}

export default validateChunks
