import * as fs from 'fs'
import * as url from 'url'
import * as cardinal from 'cardinal'
import * as _ from 'lodash'
import chalk from 'chalk'
import ValidationError from '../../lib/interfaces/errors'

interface LineContext {
  before: string[]
  line: string
  after: string[]
}

const getLineWithContext = function (lines, lineNumber, context): LineContext {
  // Lines start at 1, arrays at 0
  const line = lineNumber - 1

  const firstLine = line > context ? line - context : 0
  const lastLine = line + context < lines.length ? line + context : lines.length

  return {
    before: lines.slice(firstLine, line),
    line: lines[line],
    after: lines.slice(line + 1, lastLine + 1)
  }
}

const renderStepsErrors = function (errors: ValidationError[]) {
  const errorsByFile = _.groupBy(errors, (error) => {
    const intent = error.details.intent
    return intent.toRaw().meta.callsite.file
  })

  const messages = []

  for (const file of Object.keys(errorsByFile)) {
    const filePath = file.startsWith(`file://`) ? url.fileURLToPath(file) : file;
    const fileContents = fs.readFileSync(filePath, 'utf-8')
    const highlightedCode = cardinal.highlight(fileContents, { linenos: true })
    const lines = highlightedCode.split('\n')

    const fileErrorsMessage = chalk`{red Errors in ${filePath}}\n\n`
    const errorMessages = errorsByFile[file]
      .map((error) => {
        const intent = error.details.intent
        const callsite = intent.toRaw().meta.callsite
        const context = 2
        const { before, line, after } = getLineWithContext(lines, callsite.line, context)

        const beforeLines = before.map((line) => chalk`${line}\n`).join('')
        const afterLines = after.map((line) => chalk`${line}\n`).join('')
        const highlightedLine = chalk`{bold ${line}}\n`

        const formattedCode = beforeLines + highlightedLine + afterLines

        return chalk`{red Line ${String(callsite.line)}:} {bold ${error.message}}\n${formattedCode}`
      })
      .join('\n')

    messages.push(`${fileErrorsMessage}${errorMessages}`)
  }

  console.error(chalk`{red.bold Validation failed}\n\n`)
  console.error(messages.join('\n'))
  console.error(chalk`🚨  {bold.red Migration unsuccessful}`)
}

export default renderStepsErrors
