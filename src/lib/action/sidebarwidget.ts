export interface SidebarWidget {
  widgetId: string,
  widgetNamespace?: SidebarWidgetNamespace,
  disabled?: boolean,
  settings?: SidebarWidgetSettings
}

export interface SidebarWidgetSettings {
  [key: string]: any
}

export type SidebarWidgetNamespace = 'builtin' | 'extension'
