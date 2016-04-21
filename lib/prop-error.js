var inherits = require('inherits')

inherits(PropError, Error)
module.exports = PropError
function PropError (error, obj) {
  if (!(this instanceof PropError)) {
    return new PropError(error, obj)
  }
  this.name = 'PropMissingError'
  this.message = error + '\n' + JSON.stringify(obj)
  this.obj = obj
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor)
  }
}
