interface SimpleEntry {
  id: string
  contentTypeId: string
  version: number
  fields: object
}

const makeApiEntry = function (simpleEntry: SimpleEntry) {
  const sys = {
    id: simpleEntry.id,
    version: simpleEntry.version,
    contentType: {
      sys: {
        type: 'Link',
        linkType: 'ContentType',
        id: simpleEntry.contentTypeId
      }
    }
  }

  return {
    sys,
    fields: simpleEntry.fields
  }
}

export {
  makeApiEntry as default,
  SimpleEntry
}
