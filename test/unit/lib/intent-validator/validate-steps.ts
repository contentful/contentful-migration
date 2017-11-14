'use strict'

import { migration as createSteps } from '../../../../src/lib/migration-steps'
import IntentList from '../../../../src/lib/intent-list'

const stripCallsites = (errors) => {
  return errors.map((error) => {
    delete error.details.intent.package
    error.details.step = error.details.intent
    delete error.details.intent
    delete error.details.step.meta.callsite
    return error
  })
}

export default function createValidator (validators) {
  return async function (migration) {
    const steps = await createSteps(migration)

    const stepList = new IntentList(steps)

    for (const Validator of validators) {
      stepList.addValidator(new Validator())
    }

    let errors = []

    try {
      stepList.validate()
    } catch (err) {
      if (!err.errors) {
        throw err
      }
      errors = err.errors
      const stripped = stripCallsites(errors)
      errors = stripped
    }
    return errors
  }
}
