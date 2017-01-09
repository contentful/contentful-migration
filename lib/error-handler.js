import get from 'lodash/get'

/**
 * @typedef {ErrorResponse} ErrorResponse
 * @property {string} name - Error name. Usually refers to the sys.id returned on the
 * error server response. If that's not available or is unknown, it defaults to
 * the HTTP error code and status text.
 * @property {string} message - Stringified JSON object with request information,
 * HTTP response details and error details payload (if available). The `requestId`
 * property is internal to Contentful and it can be used when contacting support
 * about unusual errors.
 */

/**
 * Handles errors received from the server. Parses the error into a more useful
 * format, places it in an exception and throws it.
 * See https://www.contentful.com/developers/docs/references/content-management-api/#/introduction/errors
 * for more details on the data received on the errorResponse.data property
 * and the expected error codes.
 * @private
 * @param {Object} errorResponse - Error received from an axios request
 * @throws {ErrorResponse}
 */
export default function errorHandler (errorResponse) {
  const {data, status, statusText, config} = errorResponse
  const errorData = {
    request: {
      url: config.url,
      headers: config.headers,
      method: config.method,
      payloadData: config.data
    },
    status: status,
    statusText: statusText
  }
	if(data.requestId){
    errorData.requestId = data.requestId
	}	
	if (get(data, 'sys.type') === 'Error') {
    errorData.message = data.message
    if (data.details) {
      errorData.details = data.details
    }
  }
  const error = new Error()
  const errorName = get(data, 'sys.id')
  error.name = errorName && errorName !== 'Unknown' ? errorName : `${status} ${statusText}`
  error.message = JSON.stringify(errorData, null, '  ')
  throw error
}
