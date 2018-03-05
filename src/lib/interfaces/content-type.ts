interface Field {
  id: string
  newId?: string
  name?: string
  type?: string
  linkType?: string
  items?: {
    type: string
    linkType?: string
    validations?: any[]
  }
  omitted?: boolean
  deleted?: boolean
  localized?: boolean
  required?: boolean
  validations?: any[]
  disabled?: boolean
}

interface APIContentType {
  sys: {
    id: string,
    version: number
  },
  fields: Field[],
  name: string,
  description?: string,
  displayField?: string
}

interface APIEditorInterface {
  fieldId: string,
  widgetId: string,
  settings?: object
}

interface APIEditorInterfaces {
  sys: {
    version: number
  }
  controls: APIEditorInterface[]
}

export {
  APIContentType as default,
  APIContentType,
  Field,
  APIEditorInterfaces,
  APIEditorInterface
}
