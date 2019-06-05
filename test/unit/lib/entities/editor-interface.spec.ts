import { expect } from 'chai'

import { EditorInterfaces } from '../../../../src/lib/entities/content-type'
import { APIEditorInterfaceSidebar } from '../../../../src/lib/interfaces/content-type'

describe('EditorInterfaces', () => {
  const testWidget: APIEditorInterfaceSidebar = {
    widgetId: 'test',
    widgetNamespace: 'builtin',
    settings: { set: 1 },
    disabled: true
  }

  const existingWidget: APIEditorInterfaceSidebar = {
    widgetId: 'existing',
    widgetNamespace: 'extension',
    settings: { set: 3 },
    disabled: false
  }

  const makeEditorInterface = (sidebar?) => new EditorInterfaces({
    sys: {
      version: 1
    },
    controls: [],
    sidebar
  })

  it('adds sidebar widget with default sidebar', () => {
    const editorInterface = makeEditorInterface()

    editorInterface.addSidebarWidget(
      testWidget.widgetId,
      testWidget.widgetNamespace,
      testWidget.settings,
      testWidget.disabled
    )

    expect(editorInterface.getSidebar()).to.eql([testWidget])
  })

  it('adds sidebar widget at the end of custom sidebar', () => {
    const editorInterface = makeEditorInterface([existingWidget])

    editorInterface.addSidebarWidget(
      testWidget.widgetId,
      testWidget.widgetNamespace,
      testWidget.settings,
      testWidget.disabled
    )

    expect(editorInterface.getSidebar()).to.eql([
      existingWidget,
      testWidget
    ])
  })

  it('removes sidebar widget', () => {
    const editorInterface = makeEditorInterface([existingWidget, testWidget])

    editorInterface.removeSidebarWidget(testWidget.widgetId)

    expect(editorInterface.getSidebar()).to.eql([
      existingWidget
    ])
  })

  it('does not fail when removing non-existing sidebar widget', () => {
    const editorInterface = makeEditorInterface([existingWidget])

    editorInterface.removeSidebarWidget(testWidget.widgetId)

    expect(editorInterface.getSidebar()).to.eql([
      existingWidget
    ])
  })

  it('resets custom sidebar to default', () => {
    const editorInterface = makeEditorInterface([existingWidget, testWidget])

    editorInterface.resetSidebarToDefault()

    expect(editorInterface.getSidebar()).to.eql(undefined)
  })
})
