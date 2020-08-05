import { ApiHook } from '../'
import { Entry } from '../../entities/entry'
import { PayloadValidationError, InvalidActionError } from '../../interfaces/errors'

export interface EntryValidator {
  hooks: ApiHook[]
  validate (entry: Entry): (InvalidActionError | PayloadValidationError)[]
}
