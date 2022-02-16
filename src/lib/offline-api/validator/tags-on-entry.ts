import { ApiHook } from '../'
import { EntryValidator } from './entry'
import { InvalidActionError, PayloadValidationError } from '../../interfaces/errors'
import { Entry } from '../../entities/entry'
import { Tag } from '../../entities/tag'
import errorMessages from './errors'

export default class TagsOnEntryValidator implements EntryValidator {
  public hooks = [ApiHook.SaveEntry]
  private tags: Map<String, Tag>

  constructor (tags: Map<String, Tag>) {
    this.tags = tags
  }

  public validate (entry: Entry): PayloadValidationError[] | InvalidActionError[] {
    const errors: InvalidActionError[] = []
    const tagsOnEntry = entry.tags
    const allTags = this.tags

    if (!tagsOnEntry) {
      return errors
    }

    // TODO: Make this more verbose and collect one error for every
    // missing tag
    const allTagsOnEntryExist = tagsOnEntry.every((tag) => {
      const tagId = tag.sys.id
      return allTags.has(tagId)
    })

    if (!allTagsOnEntryExist) {
      errors.push({
        type: 'InvalidAction',
        message: errorMessages.entry.TAGS_DO_NOT_EXIST(entry.id)
      })
    }

    return errors
  }
}
