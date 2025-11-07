import { migration as createSteps } from '../../../../src/lib/migration-steps'
import IntentList from '../../../../src/lib/intent-list'

const stripCallsites = (errors: any[]) => {
  return errors.map((error) => {
    delete error.details.intent.package
    error.details.step = error.details.intent
    delete error.details.intent
    delete error.details.step.meta.callsite
    return error
  })
}

export default async function validateSteps(validators: any[], migration: any) {
  const steps = await createSteps(migration)

  const stepList = new IntentList(steps)

  for (const Validator of validators) {
    stepList.addValidator(new Validator())
  }

  const errors = stepList.validate()
  const stripped = stripCallsites(errors)
  return stripped
}
