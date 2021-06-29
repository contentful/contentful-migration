import { expect } from 'chai'

import { EditorInterfaces } from '../../../../src/lib/entities/content-type'
import { APIEditorInterfaceSidebar } from '../../../../src/lib/interfaces/content-type'
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

  const makeEditorInterface = (sidebar?, controls = []) => new EditorInterfaces({
    sys: {
      version: 1
    },
    controls,
    sidebar
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

    expect(editorInterface.getSidebar()).to.eql([...DEFAULT_SIDEBAR_LIST, testWidget])
  })

  it('avoid adding duplicates to default sidebar', () => {
    const editorInterface = makeEditorInterface()

    editorInterface.addSidebarWidget(
      'translation-widget',
      'sidebar-builtin',
      null,
      null,
      false
    )

    expect(editorInterface.getSidebar()).to.eql(DEFAULT_SIDEBAR_LIST)
  })

  it('adds sidebar widget at the end of custom sidebar', () => {
    const editorInterface = makeEditorInterface([existingWidget])

    editorInterface.addSidebarWidget(
      testWidget.widgetId,
      testWidget.widgetNamespace,
      testWidget.settings,
      null,
      testWidget.disabled
    )

    expect(editorInterface.getSidebar()).to.eql([
      existingWidget,
      testWidget
    ])
  })

  it('adds sidebar widget before another widget in the custom sidebar', () => {
    const beforeWidget = {
      ...existingWidget,
      widgetId: 'beforeThis'
    }

    const editorInterface = makeEditorInterface([
      existingWidget,
      beforeWidget
    ])

    editorInterface.addSidebarWidget(
      testWidget.widgetId,
      testWidget.widgetNamespace,
      testWidget.settings,
      beforeWidget.widgetId,
      testWidget.disabled
    )

    expect(editorInterface.getSidebar()).to.eql([
      existingWidget,
      testWidget,
      beforeWidget
    ])
  })

  it('removes sidebar widget', () => {
    const editorInterface = makeEditorInterface([existingWidget, testWidget])

    editorInterface.removeSidebarWidget(testWidget.widgetId, testWidget.widgetNamespace)

    expect(editorInterface.getSidebar()).to.eql([
      existingWidget
    ])
  })

  it('allows removing built-in sidebar widgets with default settings', () => {
    const editorInterface = makeEditorInterface()
    const sidebarWidgets = [...DEFAULT_SIDEBAR_LIST]
    const translationWidget = sidebarWidgets.find(widget => widget.widgetId === 'translation-widget')
    const expectedWidgets = sidebarWidgets.filter(widget => widget.widgetId !== translationWidget.widgetId)

    editorInterface.removeSidebarWidget(translationWidget.widgetId, translationWidget.widgetNamespace)

    expect(editorInterface.getSidebar()).to.eql(expectedWidgets)
  })

  it('does not fail when removing non-existing sidebar widget', () => {
    const editorInterface = makeEditorInterface([existingWidget])

    editorInterface.removeSidebarWidget(testWidget.widgetId, testWidget.widgetNamespace)

    expect(editorInterface.getSidebar()).to.eql([
      existingWidget
    ])
  })

  it('resets custom sidebar to default', () => {
    const editorInterface = makeEditorInterface([existingWidget, testWidget])

    editorInterface.resetSidebarToDefault()

    expect(editorInterface.getSidebar()).to.eql(undefined)
  })

  it('resets editor to default', () => {
    const editorInterface = makeEditorInterface([existingWidget, testWidget])

    editorInterface.resetEditorToDefault()

    expect(editorInterface.getEditor()).to.eql(undefined)
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

    const editorInterface = makeEditorInterface([], [control])
    editorInterface.update(
      control.fieldId,
      control.widgetId,
      null,
      'extension'
    )

    expect(editorInterface.getControls()).to.eql([{
      ...control,
      widgetNamespace: 'extension'
    }])

  })

  it('configures editor', () => {
    const editorInterface = makeEditorInterface([existingWidget, testWidget])

    editorInterface.setEditor({
      widgetId: 'test-widget-id',
      widgetNamespace: 'extension',
      settings: { key: 'value' }
    })

    expect(editorInterface.getEditor().widgetId).to.eql('test-widget-id')
    expect(editorInterface.getEditor().widgetNamespace).to.eql('extension')
    expect(editorInterface.getEditor().settings.key).to.eql('value')
  })

  it('configures editors', () => {
    const editorInterface = makeEditorInterface([existingWidget, testWidget])

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

    expect(editorInterface.getEditors().length).to.eql(2)
    expect(editorInterface.getEditors()[0]).to.eql({
      widgetId: 'test-widget-id',
      widgetNamespace: 'extension',
      settings: { key: 'value' }
    })
    expect(editorInterface.getEditors()[1]).to.eql({
      widgetId: 'builtin-editor',
      widgetNamespace: 'builtin'
    })
  })

})
