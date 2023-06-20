export const MAX_ALLOWED_RESOURCES = 3
export const MAX_RESOURCE_LINKS = 3

export const RICH_TEXT_RESOURCE_LINK_NODES = ['embedded-resource-block']

export const isResourceLink = (field) =>
  field.type === 'ResourceLink' || (field.type === 'Array' && field.items?.type === 'ResourceLink')

export const getEnabledResourceLinkNodes = (field): string[] | undefined => {
  if (field.type !== 'RichText' || !Array.isArray(field.validations)) {
    return undefined
  }

  for (const { enabledNodeTypes } of field.validations) {
    if (Array.isArray(enabledNodeTypes)) {
      return RICH_TEXT_RESOURCE_LINK_NODES.filter((nodeType) => enabledNodeTypes.includes(nodeType))
    }
  }
}
