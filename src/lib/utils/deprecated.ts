export function deprecatedMethod (method, alternative) {
  console.warn(`(deprecated) Method ${method} is deprecated and will be removed, use ${alternative} instead`)
}
