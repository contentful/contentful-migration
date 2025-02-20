interface SimpleEntry {
  id: string
  contentTypeId: string
  version: number
  publishedVersion?: number
  fields: object
  fieldStatus?: {
    '*': {
      [key: string]: 'draft' | 'published' | 'changed'
    }
  }
}

const makeApiEntry = function (simpleEntry: SimpleEntry) {
  const sys = {
    id: simpleEntry.id,
    version: simpleEntry.version,
    publishedVersion: simpleEntry.publishedVersion,
    contentType: {
      sys: {
        type: 'Link',
        linkType: 'ContentType',
        id: simpleEntry.contentTypeId
      }
    },
    fieldStatus: simpleEntry.fieldStatus
  }

  return {
    sys,
    fields: simpleEntry.fields
  }
}

export { makeApiEntry as default, SimpleEntry }
