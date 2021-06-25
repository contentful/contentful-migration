import { editorInterfaceDefaults } from 'contentful-management'

export interface SidebarWidget {
  widgetId: string,
  widgetNamespace?: SidebarWidgetNamespace,
  disabled?: boolean,
  settings?: SidebarWidgetSettings
}

type SidebarWidgetSettingValue = number | boolean | string

export interface SidebarWidgetSettings {
  [key: string]: SidebarWidgetSettingValue
}

export type SidebarWidgetNamespace = 'sidebar-builtin' | 'extension'

export const DEFAULT_SIDEBAR_LIST = editorInterfaceDefaults.default.SidebarEntryConfiguration.map(({ widgetId, widgetNamespace }) => ({
  widgetId,
  widgetNamespace
})) as SidebarWidget[]
