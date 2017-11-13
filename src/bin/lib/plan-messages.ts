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
  for (const batch of batches) {
    renderBatch(batch)

    if (batch.errors.length > 0 || batch.contentTransformErrors.length > 0) {
      console.log('\n')
    }

    for (const error of batch.errors) {
      console.log(chalk`{red.bold Error: ${error.message}}`)
    }

    for (const transformError of batch.contentTransformErrors) {
      console.log(transformError)
      console.log('\n')
    }

    if (batch.intent.shouldPublish()) {
      console.log(chalk`\n{bold.underline Publish Content Type} {bold.yellow ${batch.intent.getContentTypeId()}}`)
    }

  }
}

export default renderPlan
