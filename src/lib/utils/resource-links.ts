export const MAX_ALLOWED_RESOURCES = 3
export const MAX_RESOURCE_LINKS = 3

export const isResourceLink = (field) =>
  field.type === 'ResourceLink' || (field.type === 'Array' && field.items?.type === 'ResourceLink')
