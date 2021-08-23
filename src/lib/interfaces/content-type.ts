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
  defaultValue?: { [locale: string]: any }
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

type APIParameterValue = number | boolean | string

interface APIEditorInterfaceSettings {
  [setting: string]: APIParameterValue
}

type APISidebarWidgetNamespace = 'sidebar-builtin' | 'extension' | 'app'
type APIControlWidgetNamespace = 'builtin' | 'extension' | 'app'

interface APIEditorInterfaceControl {
  fieldId: string,
  widgetId?: string,
  widgetNamespace?: APIControlWidgetNamespace,
  settings?: APIEditorInterfaceSettings
}

interface APISidebarWidgetSettings {
  [key: string]: APIParameterValue
}

interface APIEditorInterfaceSidebar {
  widgetId: string,
  widgetNamespace: APISidebarWidgetNamespace,
  disabled?: boolean,
  settings?: APISidebarWidgetSettings
}

interface APIEditorIntefaceEditor {
  widgetId: string,
  widgetNamespace: APIControlWidgetNamespace,
  settings?: { [key: string]: APIParameterValue }
}

interface APIEditorInterfaces {
  sys: {
    version: number
  },
  controls: APIEditorInterfaceControl[],
  sidebar?: APIEditorInterfaceSidebar[],
  editor?: APIEditorIntefaceEditor
  editors?: APIEditorIntefaceEditor[]
}

export {
  APIContentType as default,
  APIContentType,
  Field,
  APIEditorInterfaces,
  APIEditorInterfaceControl,
  APIEditorInterfaceSettings,
  APIEditorInterfaceSidebar,
  APIEditorIntefaceEditor,
  APISidebarWidgetSettings,
  APIControlWidgetNamespace,
  APISidebarWidgetNamespace
}
