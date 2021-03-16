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

export const DEFAULT_SIDEBAR_LIST = [
  {
    'widgetId': 'publication-widget',
    'widgetNamespace': 'sidebar-builtin',
    'settings': {},
    'disabled': false
  },
  {
    'widgetId': 'content-workflows-tasks-widget',
    'widgetNamespace': 'sidebar-builtin',
    'settings': {},
    'disabled': false
  },
  {
    'widgetId': 'content-preview-widget',
    'widgetNamespace': 'sidebar-builtin',
    'settings': {},
    'disabled': false
  },
  {
    'widgetId': 'incoming-links-widget',
    'widgetNamespace': 'sidebar-builtin',
    'settings': {},
    'disabled': false
  },
  {
    'widgetId': 'translation-widget',
    'widgetNamespace': 'sidebar-builtin',
    'settings': {},
    'disabled': false
  },
  {
    'widgetId': 'versions-widget',
    'widgetNamespace': 'sidebar-builtin',
    'settings': {},
    'disabled': false
  },
  {
    'widgetId': 'users-widget',
    'widgetNamespace': 'sidebar-builtin',
    'settings': {},
    'disabled': false
  }
]
