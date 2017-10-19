import ValidationError from './errors'
import Intent from './intent'

export default interface IntentValidator {
  appliesTo (intent: Intent): boolean
  validate (intent: Intent): ValidationError[]
}