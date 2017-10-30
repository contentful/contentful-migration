'use strict'
import Package from '../../lib/package'

import * as chalk from 'chalk'
import * as _ from 'lodash'

const renderPackage = (pkg: Package, errors?: any) => {
  const message = []
  const contentType = pkg.getContentTypeId()

  if (pkg.createsContentType) {
    message.push(chalk`{bold.underline Create Content Type} {bold.yellow ${contentType}}`)
  } else if (pkg.updatesContentType) {
    message.push(chalk`{bold.underline Update Content Type} {bold.yellow ${contentType}}`)
  } else if (pkg.deletesContentType) {
    message.push(chalk`{bold.underline Delete Content Type} {bold.yellow ${contentType}}`)
  } else if (pkg.transformsContent) {
    message.push(chalk`{bold.underline Transform Content} {bold.yellow ${contentType}}`)
  }

  if (pkg.updatesContentType) {
    for (const ctChangeIntent of pkg.getIntents()) {
      if (ctChangeIntent.isContentTypeUpdate()) {
        const rawPayload = ctChangeIntent.toRaw().payload
        for (const key of Object.keys(rawPayload.props)) {
          const value = rawPayload.props[key]
          message.push(chalk`  - {italic ${key}:} ${value}`)
        }
      }
    }
  }

  const fieldChangeIntents = pkg.getIntents().filter((i) => i.isAboutField())
  const fieldChanges = _.flatten(fieldChangeIntents.map((i) => i.toRaw()))
  const fieldChangesByField = _.groupBy(fieldChanges, (step) => step.payload.fieldId)

  for (const fieldId of Object.keys(fieldChangesByField)) {
    const fieldChanges = fieldChangesByField[fieldId]
    const firstChange = fieldChanges[0]

    if (firstChange.type === 'field/create') {
      message.push(chalk`\n  {bold Create field {yellow ${firstChange.payload.fieldId}}}`)
    }

    if (firstChange.type === 'field/update') {
      message.push(chalk`\n  {bold Update field {yellow ${firstChange.payload.fieldId}}}`)
    }

    for (const fieldChange of fieldChanges) {
      if (fieldChange.payload.props) {
        for (const key of Object.keys(fieldChange.payload.props)) {
          const value = JSON.stringify(fieldChange.payload.props[key])
          message.push(chalk`    - {italic ${key}:} ${value}`)
        }
      }

      if (fieldChange.type === 'field/move') {
        const movement = fieldChange.payload.movement
        let humanizedMovement

        if (movement.direction === 'toTheTop') {
          humanizedMovement = `to the first position`
        }

        if (movement.direction === 'toTheBottom') {
          humanizedMovement = `to the last position`
        }

        if (movement.direction === 'afterField') {
          humanizedMovement = chalk`after field {yellow ${movement.pivot}}`
        }

        if (movement.direction === 'beforeField') {
          humanizedMovement = chalk`before field {yellow ${movement.pivot}}`
        }

        message.push(chalk`  {bold Move field {yellow ${fieldChange.payload.fieldId}} ${humanizedMovement}}`)
      }
    }
  }

  if (errors) {
    message.push('\n')
    for (const error of errors) {
      message.push(chalk`{red.bold Error: ${error.message}}`)
    }
  }

  if (!pkg.deletesContentType) {
    message.push(chalk`\n{bold.underline Publish Content Type} {bold.yellow ${contentType}}`)
  }
  return message.join('\n')
}

const withErrors = (planAndErrors) => {
  const messages = planAndErrors.map(([chunk, errors]) => {
    return renderPackage(chunk, errors)
  })

  const prefix = chalk`{bold.red The following migration has been planned but cannot be run because it contains errors}\n\n`
  const renderedPlan = messages.join('\n\n')
  return prefix + renderedPlan + '\n'
}

const withoutErrors = (packages: Package[]) => {
  const messages = packages.map((pkg) => {
    return renderPackage(pkg)
  })

  return messages.join('\n\n')
}

export {
  withErrors as renderWithErrors,
  withoutErrors as renderWithoutErrors
}
