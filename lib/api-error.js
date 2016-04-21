var inherits = require('inherits')

inherits(APIError, Error)
module.exports = APIError
function APIError (error, request) {
  if (!(this instanceof APIError)) {
    return new APIError(error)
  }
  this.name = error ? error.sys.id : 'Unknown error'
  this.message = [request.method, request.uri, formatMessage(error)].join(' ')
  this.error = error
  this.request = request
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor)
  }
}

var customFormatters = {
  ValidationFailed: function (error) {
    if (!(error.details && error.details.errors)) {
      return JSON.stringify(error)
    }
    return error.details.errors.reduce(function (messages, validationError) {
      var message = '(' + validationError.name +
        ' path=' + validationError.path.join('.') +
        ' value=' + JSON.stringify(validationError.value) + ')'
      return messages.concat(message)
    }, []).join(', ')
  }
}

function formatMessage (error) {
  if ('message' in error) {
    return error.message + ' ' + JSON.stringify(error)
  }

  if (customFormatters[error.sys.id]) {
    return customFormatters[error.sys.id](error)
  }

  // stringify on one line
  return JSON.stringify(error)
}
