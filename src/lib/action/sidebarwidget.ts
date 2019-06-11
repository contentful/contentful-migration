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

export type SidebarWidgetNamespace = 'builtin' | 'extension'
