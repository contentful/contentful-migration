import { describe, it, expect } from 'vitest'

import { EditorInterfaces } from '../../../../src/lib/entities/content-type'
import {
  APIEditorInterfaceControl,
  APIEditorInterfaces,
  APIEditorInterfaceSidebar,
  APIEditorLayoutFieldGroupItem
} from '../../../../src/lib/interfaces/content-type'
import { DEFAULT_SIDEBAR_LIST } from '../../../../src/lib/action/sidebarwidget'

describe('EditorInterfaces', () => {
  const testWidget: APIEditorInterfaceSidebar = {
    widgetId: 'test',
    widgetNamespace: 'sidebar-builtin',
    settings: { set: 1 },
    disabled: true
  }

  const existingWidget: APIEditorInterfaceSidebar = {
    widgetId: 'existing',
    widgetNamespace: 'extension',
    settings: { set: 3 },
    disabled: false
  }

  const makeEditorInterface = (props: Partial<APIEditorInterfaces> = {}) =>
    new EditorInterfaces({
      sys: {
        version: 1
      },
      controls: [],
      ...props
    })

  it('adds sidebar widget with default sidebar', () => {
    const editorInterface = makeEditorInterface()

    editorInterface.addSidebarWidget(
      testWidget.widgetId,
      testWidget.widgetNamespace,
      testWidget.settings,
      null,
      testWidget.disabled
    )

    expect(editorInterface.getSidebar()).toEqual([...DEFAULT_SIDEBAR_LIST, testWidget])
  })

  it('avoid adding duplicates to default sidebar', () => {
    const editorInterface = makeEditorInterface()

    editorInterface.addSidebarWidget('translation-widget', 'sidebar-builtin', null, null, false)

    expect(editorInterface.getSidebar()).toEqual(DEFAULT_SIDEBAR_LIST)
  })

  it('adds sidebar widget at the end of custom sidebar', () => {
    const editorInterface = makeEditorInterface({ sidebar: [existingWidget] })

    editorInterface.addSidebarWidget(
      testWidget.widgetId,
      testWidget.widgetNamespace,
      testWidget.settings,
      null,
      testWidget.disabled
    )

    expect(editorInterface.getSidebar()).toEqual([existingWidget, testWidget])
  })

  it('adds sidebar widget before another widget in the custom sidebar', () => {
    const beforeWidget = {
      ...existingWidget,
      widgetId: 'beforeThis'
    }

    const editorInterface = makeEditorInterface({ sidebar: [existingWidget, beforeWidget] })

    editorInterface.addSidebarWidget(
      testWidget.widgetId,
      testWidget.widgetNamespace,
      testWidget.settings,
      beforeWidget.widgetId,
      testWidget.disabled
    )

    expect(editorInterface.getSidebar()).toEqual([existingWidget, testWidget, beforeWidget])
  })

  it('removes sidebar widget', () => {
    const editorInterface = makeEditorInterface({ sidebar: [existingWidget, testWidget] })

    editorInterface.removeSidebarWidget(testWidget.widgetId, testWidget.widgetNamespace)

    expect(editorInterface.getSidebar()).toEqual([existingWidget])
  })

  it('allows removing built-in sidebar widgets with default settings', () => {
    const editorInterface = makeEditorInterface()
    const sidebarWidgets = [...DEFAULT_SIDEBAR_LIST]
    const translationWidget = sidebarWidgets.find(
      (widget) => widget.widgetId === 'translation-widget'
    )
    const expectedWidgets = sidebarWidgets.filter(
      (widget) => widget.widgetId !== translationWidget.widgetId
    )

    editorInterface.removeSidebarWidget(
      translationWidget.widgetId,
      translationWidget.widgetNamespace
    )

    expect(editorInterface.getSidebar()).toEqual(expectedWidgets)
  })

  it('does not fail when removing non-existing sidebar widget', () => {
    const editorInterface = makeEditorInterface({ sidebar: [existingWidget] })

    editorInterface.removeSidebarWidget(testWidget.widgetId, testWidget.widgetNamespace)

    expect(editorInterface.getSidebar()).toEqual([existingWidget])
  })

  it('resets custom sidebar to default', () => {
    const editorInterface = makeEditorInterface({ sidebar: [existingWidget, testWidget] })

    editorInterface.resetSidebarToDefault()

    expect(editorInterface.getSidebar()).toEqual(undefined)
  })

  it('resets editor to default', () => {
    const editorInterface = makeEditorInterface({ sidebar: [existingWidget, testWidget] })

    editorInterface.resetEditorToDefault()

    expect(editorInterface.getEditor()).toEqual(undefined)
  })

  it('updates field control namespace', () => {
    const control = {
      fieldId: 'name',
      widgetNamespace: 'builtin',
      widgetId: 'singleLine',
      settings: {
        my: 'setting'
      }
    }

    const editorInterface = makeEditorInterface({
      controls: [control as APIEditorInterfaceControl]
    })
    editorInterface.update(control.fieldId, control.widgetId, null, 'extension')

    expect(editorInterface.getControls()).toEqual([
      {
        ...control,
        widgetNamespace: 'extension'
      }
    ])

    expect(editorInterface.getEditorLayout()).toEqual(undefined)
  })

  it('adds field id to editorLayout on field control namespace update for interfaces with editorLayout', () => {
    const control = {
      fieldId: 'name',
      widgetNamespace: 'builtin',
      widgetId: 'singleLine',
      settings: {
        my: 'setting'
      }
    }

    const editorInterface = makeEditorInterface({
      controls: [control as APIEditorInterfaceControl],
      editorLayout: [
        {
          groupId: 'tab',
          items: [
            { fieldId: 'a' },
            { groupId: 'fieldSet', items: [{ fieldId: 'b' }, { fieldId: 'c' }] },
            { fieldId: 'd' }
          ]
        }
      ]
    })

    editorInterface.createFieldInEditorLayout(control.fieldId)

    expect(editorInterface.getEditorLayout()[0].items.length).toEqual(4)
    expect(editorInterface.getEditorLayout()[0].items[3]).toEqual({ fieldId: control.fieldId })
  })

  it('will not add duplicate field id to editorLayout if id already exists', () => {
    const control = {
      fieldId: 'c',
      widgetNamespace: 'builtin',
      widgetId: 'singleLine',
      settings: {
        my: 'setting'
      }
    }

    const editorInterface = makeEditorInterface({
      controls: [control as APIEditorInterfaceControl],
      editorLayout: [
        {
          groupId: 'tab',
          items: [
            { fieldId: 'a' },
            { groupId: 'fieldSet', items: [{ fieldId: 'b' }, { fieldId: 'c' }] },
            { fieldId: 'd' }
          ]
        }
      ]
    })

    editorInterface.createFieldInEditorLayout(control.fieldId)

    expect(editorInterface.getEditorLayout()[0].items.length).toEqual(3)
  })

  it('will delete field id from editor layout if id already exists', () => {
    const control = {
      fieldId: 'c',
      widgetNamespace: 'builtin',
      widgetId: 'singleLine',
      settings: {
        my: 'setting'
      }
    }

    const editorInterface = makeEditorInterface({
      controls: [control as APIEditorInterfaceControl],
      editorLayout: [
        {
          groupId: 'tab',
          items: [
            { fieldId: 'a' },
            { groupId: 'fieldSet', items: [{ fieldId: 'b' }, { fieldId: 'c' }] },
            { fieldId: 'd' }
          ]
        }
      ]
    })

    editorInterface.deleteFieldFromEditorLayout('a')

    expect(editorInterface.getEditorLayout()[0].items.length).toEqual(2)
  })

  it('will update field id in editor layout if id already exists', () => {
    const control = {
      fieldId: 'c',
      widgetNamespace: 'builtin',
      widgetId: 'singleLine',
      settings: {
        my: 'setting'
      }
    }

    const editorInterface = makeEditorInterface({
      controls: [control as APIEditorInterfaceControl],
      editorLayout: [
        {
          groupId: 'tab',
          items: [
            { fieldId: 'a' },
            { groupId: 'fieldSet', items: [{ fieldId: 'b' }, { fieldId: 'c' }] },
            { fieldId: 'd' }
          ]
        }
      ]
    })

    editorInterface.updateFieldIdInEditorLayout('a', 'u')

    expect(editorInterface.getEditorLayout()[0].items.length).toEqual(3)
    expect(editorInterface.getEditorLayout()[0].items[0]).toEqual({ fieldId: 'u' })
  })

  it('configures editor', () => {
    const editorInterface = makeEditorInterface({ sidebar: [existingWidget, testWidget] })

    editorInterface.setEditor({
      widgetId: 'test-widget-id',
      widgetNamespace: 'extension',
      settings: { key: 'value' }
    })

    expect(editorInterface.getEditor().widgetId).toEqual('test-widget-id')
    expect(editorInterface.getEditor().widgetNamespace).toEqual('extension')
    expect(editorInterface.getEditor().settings.key).toEqual('value')
  })

  it('configures editors', () => {
    const editorInterface = makeEditorInterface({ sidebar: [existingWidget, testWidget] })

    editorInterface.setEditors([
      {
        widgetId: 'test-widget-id',
        widgetNamespace: 'extension',
        settings: { key: 'value' }
      },
      {
        widgetId: 'builtin-editor',
        widgetNamespace: 'builtin'
      }
    ])

    expect(editorInterface.getEditors().length).toEqual(2)
    expect(editorInterface.getEditors()[0]).toEqual({
      widgetId: 'test-widget-id',
      widgetNamespace: 'extension',
      settings: { key: 'value' }
    })
    expect(editorInterface.getEditors()[1]).toEqual({
      widgetId: 'builtin-editor',
      widgetNamespace: 'builtin'
    })
  })

  describe('createEditorLayoutFieldGroup', () => {
    it('creates tab if no parent is passed', () => {
      const editorInterface = makeEditorInterface({
        editorLayout: [
          { fieldId: 'a' },
          { fieldId: 'b' }
        ] as unknown as APIEditorLayoutFieldGroupItem[]
      })

      editorInterface.createEditorLayoutFieldGroup('tab')

      expect(editorInterface.getEditorLayout()).toEqual([
        {
          groupId: 'tab',
          items: [{ fieldId: 'a' }, { fieldId: 'b' }]
        }
      ])
    })

    it('adds new tab to the end of the tab list', () => {
      const editorInterface = makeEditorInterface({
        editorLayout: [
          { fieldId: 'a' },
          { fieldId: 'b' }
        ] as unknown as APIEditorLayoutFieldGroupItem[]
      })

      editorInterface.createEditorLayoutFieldGroup('tab1')
      editorInterface.createEditorLayoutFieldGroup('tab2')

      expect(editorInterface.getEditorLayout()).toEqual([
        {
          groupId: 'tab1',
          items: [{ fieldId: 'a' }, { fieldId: 'b' }]
        },
        {
          groupId: 'tab2',
          items: []
        }
      ])
    })

    it('creates field set if parent is passed', () => {
      const editorInterface = makeEditorInterface({
        editorLayout: [
          { groupId: 'parentId', items: [{ fieldId: 'a' }, { fieldId: 'b' }] }
        ] as APIEditorLayoutFieldGroupItem[]
      })

      editorInterface.createEditorLayoutFieldGroup('groupId', 'parentId')

      expect(editorInterface.getEditorLayout()).toEqual([
        {
          groupId: 'parentId',
          items: [
            { fieldId: 'a' },
            { fieldId: 'b' },
            {
              groupId: 'groupId',
              items: []
            }
          ]
        }
      ])
    })
  })

  describe('createEditorLayoutFieldGroup', () => {
    it('has no effect if field group is not present', () => {
      const editorInterface = makeEditorInterface({
        editorLayout: [
          {
            groupId: 'tab',
            items: [{ fieldId: 'a' }, { fieldId: 'b' }]
          }
        ]
      })

      editorInterface.deleteEditorLayoutFieldGroup('tab2')

      expect(editorInterface.getEditorLayout()).toEqual([
        {
          groupId: 'tab',
          items: [{ fieldId: 'a' }, { fieldId: 'b' }]
        }
      ])
    })

    it('deletes tab', () => {
      const editorInterface = makeEditorInterface({
        editorLayout: [
          {
            groupId: 'tab',
            items: [{ fieldId: 'a' }, { fieldId: 'b' }]
          },
          { groupId: 'tab2', items: [] }
        ]
      })

      editorInterface.deleteEditorLayoutFieldGroup('tab2')

      expect(editorInterface.getEditorLayout()).toEqual([
        {
          groupId: 'tab',
          items: [{ fieldId: 'a' }, { fieldId: 'b' }]
        }
      ])
    })

    it('appends contents of deleted tab to first tab', () => {
      const editorInterface = makeEditorInterface({
        editorLayout: [
          { groupId: 'tab', items: [{ fieldId: 'a' }] },
          {
            groupId: 'tab2',
            items: [{ fieldId: 'b' }, { groupId: 'fieldSet', items: [] }]
          }
        ]
      })

      editorInterface.deleteEditorLayoutFieldGroup('tab2')

      expect(editorInterface.getEditorLayout()).toEqual([
        {
          groupId: 'tab',
          items: [{ fieldId: 'a' }, { fieldId: 'b' }, { groupId: 'fieldSet', items: [] }]
        }
      ])
    })

    it('deletes field set', () => {
      const editorInterface = makeEditorInterface({
        editorLayout: [
          { groupId: 'tab', items: [] },
          {
            groupId: 'tab2',
            items: [{ fieldId: 'a' }, { groupId: 'fieldSet', items: [] }, { fieldId: 'b' }]
          }
        ]
      })

      editorInterface.deleteEditorLayoutFieldGroup('fieldSet')

      expect(editorInterface.getEditorLayout()).toEqual([
        { groupId: 'tab', items: [] },
        {
          groupId: 'tab2',
          items: [{ fieldId: 'a' }, { fieldId: 'b' }]
        }
      ])
    })

    it('replaces deleted field set with its contents', () => {
      const editorInterface = makeEditorInterface({
        editorLayout: [
          {
            groupId: 'tab',
            items: [
              { fieldId: 'a' },
              { groupId: 'fieldSet', items: [{ fieldId: 'b' }, { fieldId: 'c' }] },
              { fieldId: 'd' }
            ]
          }
        ]
      })

      editorInterface.deleteEditorLayoutFieldGroup('fieldSet')

      expect(editorInterface.getEditorLayout()).toEqual([
        {
          groupId: 'tab',
          items: [{ fieldId: 'a' }, { fieldId: 'b' }, { fieldId: 'c' }, { fieldId: 'd' }]
        }
      ])
    })
  })

  describe('updateGroupControl', () => {
    it('creates group control if none existed', () => {
      const editorInterface = makeEditorInterface({
        groupControls: []
      })

      editorInterface.updateGroupControl('fieldSetId', {
        widgetId: 'customWidgetId',
        widgetNamespace: 'customWidgetNamespace',
        settings: { helpText: 'help text' }
      })

      expect(editorInterface.getGroupControls()).toEqual([
        {
          groupId: 'fieldSetId',
          widgetId: 'customWidgetId',
          widgetNamespace: 'customWidgetNamespace',
          settings: { helpText: 'help text' }
        }
      ])
    })

    it('updates group control if it exists', () => {
      const editorInterface = makeEditorInterface({
        groupControls: [
          {
            groupId: 'fieldSetId',
            widgetId: 'fieldset',
            widgetNamespace: 'builtin',
            settings: {}
          }
        ]
      })

      editorInterface.updateGroupControl('fieldSetId', {
        widgetId: 'customWidgetId',
        widgetNamespace: 'customWidgetNamespace',
        settings: { helpText: 'help text' }
      })

      expect(editorInterface.getGroupControls()).toEqual([
        {
          groupId: 'fieldSetId',
          widgetId: 'customWidgetId',
          widgetNamespace: 'customWidgetNamespace',
          settings: { helpText: 'help text' }
        }
      ])
    })

    it('keeps old settings if not passed', () => {
      const editorInterface = makeEditorInterface({
        groupControls: [
          {
            groupId: 'fieldSetId',
            widgetId: 'fieldset',
            widgetNamespace: 'builtin',
            settings: { helpText: 'help text' }
          }
        ]
      })

      editorInterface.updateGroupControl('fieldSetId', {
        widgetId: 'customWidgetId',
        widgetNamespace: 'customWidgetNamespace'
      })

      expect(editorInterface.getGroupControls()).toEqual([
        {
          groupId: 'fieldSetId',
          widgetId: 'customWidgetId',
          widgetNamespace: 'customWidgetNamespace',
          settings: { helpText: 'help text' }
        }
      ])
    })
  })
})
