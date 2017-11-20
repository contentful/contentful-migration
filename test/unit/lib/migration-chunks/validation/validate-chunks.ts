import { migration as migrationSteps } from '../../../../../src/lib/migration-steps'
import IntentList from '../../../../../src/lib/intent-list'
import validate from '../../../../../src/lib/migration-chunks/validation'
import { ContentType } from '../../../../../src/lib/entities/content-type'

const stripCallsites = (errors) => {
  return errors.map((error) => {
    delete error.details.intent.package
    error.details.step = error.details.intent
    delete error.details.intent
    delete error.details.step.meta.callsite
    return error
  })
}

const validateChunks = async function (migration, testCts: any[]) {
  const intents = await migrationSteps(migration)
  const list = new IntentList(intents)

  const existingCts: ContentType[] = testCts.map((ct) => {
    const contentType = new ContentType(ct)
    contentType.hasEntries = ct.hasEntries

    return contentType
  })

  let errors = validate(list, existingCts)
  const stripped = stripCallsites(errors)
  return stripped
}

export default validateChunks
