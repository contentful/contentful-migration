import * as fs from 'fs'
import * as util from 'bluebird'

const appendFile = util.promisify(fs.appendFile)

const writeErrorsToLog = async (errors: Error | Error[], filename: string): Promise<void> => {
  if (!Array.isArray(errors)) {
    errors = [errors]
  }

  const stacks = errors.map((err) => err.stack)
  return appendFile(filename, stacks.join('\n\n'))
}

export default writeErrorsToLog
