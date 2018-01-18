import chalk from 'chalk'
import { RequestBatch } from '../../lib/offline-api/index'

const renderBatch = function (batch: RequestBatch) {
  const planMessage = batch.intent.toPlanMessage()
  const message = []
  message.push(chalk`{bold.underline ${planMessage.heading}}`)
  for (const detail of planMessage.details) {
    message.push(chalk`  - ${detail}`)
  }
  for (const section of planMessage.sections) {
    message.push(chalk`\n  {bold ${section.heading}}`)
    for (const sectionDetail of section.details) {
      message.push(chalk`    - ${sectionDetail}`)
    }
  }

  console.log(message.join('\n'))
}

const renderPlan = (batches: RequestBatch[]) => {
  console.log(chalk`{bold.green The following migration has been planned}\n`)
  for (const batch of batches) {
    renderBatch(batch)

    if (batch.validationErrors.length > 0) {
      console.log('\n')
    }

    for (const error of batch.validationErrors) {
      console.error(chalk`{red.bold Error: ${error.message}}`)
    }

    if (batch.intent.shouldPublish()) {
      console.error(chalk`\n{bold.underline Publish Content Type} {bold.yellow ${batch.intent.getContentTypeId()}}`)
    }
  }
}

const renderValidationErrors = (batches: RequestBatch[]) => {
  console.error(chalk`{bold.red The following migration has been planned but cannot be run because it contains errors}\n\n`)
  renderPlan(batches)
  console.error(chalk`🚨  {bold.red Migration unsuccessful}`)
}

const renderRuntimeErrors = (batches: RequestBatch[], filename: string) => {
  for (const batch of batches) {
    renderBatch(batch)

    const errorCount = batch.runtimeErrors.length
    console.error(chalk`\n{red ${errorCount.toString()} errors while transforming this content. Please check the errors log for details: ${filename}}\n`)
    console.error(chalk`🚨  {bold.red Migration unsuccessful}`)
  }
}

export {
  renderPlan,
  renderValidationErrors,
  renderRuntimeErrors
}
