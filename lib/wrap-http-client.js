import rateLimit from './rate-limit'

export default function wrapHttp (http, concurrency, delay) {
  ['get', 'post', 'put', 'delete', 'patch', 'head'].forEach((methodName) => {
    http[methodName] = rateLimit(http[methodName].bind(http), concurrency, delay)
  })
  return http
}
