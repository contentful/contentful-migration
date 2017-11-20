import * as fs from 'fs'
import * as util from 'util'

const appendFile = util.promisify(fs.appendFile)

const writeErrorsToLog = (errors: Error | Error[], filename: string): Promise<void> => {
  if (!Array.isArray(errors)) {
    errors = [errors]
  }

  const json = errors.map((err) => {
    const errObj = {}
    Object.getOwnPropertyNames(err).forEach((key) => errObj[key] = err[key])
    return JSON.stringify(errObj)
  })

  const nljson = json.join('\n')
  return appendFile(filename, nljson)
}

export default writeErrorsToLog
