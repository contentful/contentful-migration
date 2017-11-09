import chalk from 'chalk'
import { RequestBatch } from '../../lib/offline-api/index'

const renderBatch = function (batch: RequestBatch) {
  const planMessage = batch.intent.toPlanMessage()
  console.log(planMessage)
}

const renderPlan = (batches: RequestBatch[]) => {
  let hadError = false
  for (const batch of batches) {
    renderBatch(batch)
    for (const error of batch.errors) {
      hadError = true
      console.log(chalk`{red.bold Error: ${error.message}}`)

    }

    if (hadError) {
      console.log(chalk`{bold.red The following migration has been planned but cannot be run because it contains errors}\n\n`)
      return
    }

    if (batch.intent.shouldPublish()) {
      console.log(chalk`\n{bold.underline Publish Content Type} {bold.yellow ${batch.intent.getContentTypeId()}}`)
    }

  }
}

export default renderPlan
