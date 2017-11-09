import chalk from 'chalk'
import * as _ from 'lodash'
import { Package } from '../../lib/package/index'
import ValidationError from '../../lib/interfaces/errors'

const renderPackage = (pkg: Package, errors?: ValidationError[]) => {
  const message = []
  const contentType = pkg.getContentTypeId()

  if (pkg.createsContentType) {
    message.push(chalk`{bold.underline Create Content Type} {bold.yellow ${contentType}}`)
  } else if (pkg.updatesContentType || pkg.modifiesFields) {
    message.push(chalk`{bold.underline Update Content Type} {bold.yellow ${contentType}}`)
  } else if (pkg.deletesContentType) {
    message.push(chalk`{bold.underline Delete Content Type} {bold.yellow ${contentType}}`)
  }

  const packageIntents = pkg.getIntents()
  const contentTypeIntents = packageIntents.filter((i) => i.isAboutContentType())
  for (const intent of contentTypeIntents) {
    if (intent.toRaw().payload.props) {
      const props = intent.toRaw().payload.props
      for (const key of Object.keys(props)) {
        const value = props[key]
        message.push(chalk`  - {italic ${key}:} ${value}`)
      }
    }
  }

  const fieldIntents = packageIntents.filter((i) => i.isAboutField())
  const fieldIntentsByField = _.groupBy(fieldIntents, (i) => i.getFieldId())

  for (const fieldChanges of _.values(fieldIntentsByField)) {
    const firstChange = fieldChanges[0]

    if (firstChange.isFieldCreate()) {
      message.push(chalk`\n  {bold Create field {yellow ${firstChange.getFieldId()}}}`)
    }

    if (firstChange.isFieldUpdate() || firstChange.isFieldRename()) {
      message.push(chalk`\n  {bold Update field {yellow ${firstChange.getFieldId()}}}`)
    }

    if (firstChange.isFieldDelete()) {
      message.push(chalk`\n  {bold Delete field {yellow ${firstChange.getFieldId()}}}`)
    }

    for (const fieldChange of fieldChanges) {
      if (fieldChange.toRaw().payload.props) {
        const props = fieldChange.toRaw().payload.props
        for (const key of Object.keys(props)) {
          const value = JSON.stringify(props[key])
          message.push(chalk`    - {italic ${key}:} ${value}`)
        }
      }

      if (fieldChange.isFieldMove()) {
        let humanizedMovement

        if (fieldChange.getDirection() === 'toTheTop') {
          humanizedMovement = `to the first position`
        }

        if (fieldChange.getDirection() === 'toTheBottom') {
          humanizedMovement = `to the last position`
        }

        if (fieldChange.getDirection() === 'afterField') {
          humanizedMovement = chalk`after field {yellow ${fieldChange.getPivotId()}}`
        }

        if (fieldChange.getDirection() === 'beforeField') {
          humanizedMovement = chalk`before field {yellow ${fieldChange.getPivotId()}}`
        }

        message.push(chalk`\n  {bold Move field {yellow ${fieldChange.getFieldId()}} ${humanizedMovement}}`)
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

const withErrors = (errors) => {
  const messages = errors.map((error) => {
    const pkg = error.details.intent.getPackage()
    return renderPackage(pkg, errors)
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

export { withErrors, withoutErrors }
