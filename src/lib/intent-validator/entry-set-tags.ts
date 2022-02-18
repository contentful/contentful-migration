import Intent from '../intent/base-intent'
import SchemaValidator from './schema-validator'
import * as Joi from 'joi'

class EntrySetTagsIntentValidator extends SchemaValidator {
  protected article = 'a'
  protected displayName = 'tags update for entry'

  appliesTo(step: Intent) {
    return step.isEntrySetTags()
  }

  // TODO The propertyNameToValidate method is supposed to be
  // refactored, see other intents.
  get propertyNameToValidate() {
    return 'entryTransformationForTags'
  }

  get schema() {
    return {
      contentType: Joi.string().required(),
      from: Joi.array().items(Joi.string()).required(),
      setTagsForEntry: Joi.func().required()
    }
  }
}

export default EntrySetTagsIntentValidator
