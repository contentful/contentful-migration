import { migration as migrationSteps } from '../../../../src/lib/migration-steps'
import { expect } from 'chai'
import IntentList from '../../../../src/lib/intent-list'
import { Intent } from '../../../../src/lib/interfaces/intent'
import { SaveEditorInterfaceAction } from '../../../../src/lib/action/editorinterface-save'
import { SidebarWidgetAddAction } from '../../../../src/lib/action/sidebarwidget-add'
import { SidebarWidgetUpdateAction } from '../../../../src/lib/action/sidebarwidget-update'
import { SidebarWidgetRemoveAction } from '../../../../src/lib/action/sidebarwidget-remove'

const noOp = () => undefined

const composedIntent = async function (migration): Promise<Intent[]> {
  const intents = await migrationSteps(migration, noOp, {})
  const list = new IntentList(intents)

  return list.compressed().getIntents()
}

const ctId = 'test'

const withCreatedContentType = (block: (ContentType) => void) => (migration) => {
  const ct = migration.createContentType(ctId)
  ct.name('Test CT')
  ct.description('This is a test CT')

  const name = ct.createField('name')
  name.type('Symbol')
  const desc = ct.createField('description')
  desc.type('Text')

  return block(ct)
}

describe('SidebarWidgetAddIntent', function () {
  describe('when adding a sidebar widget to the editor interface', function () {
    it('creates the necessary actions to add the widget', async function () {
      const intents = await composedIntent(
        withCreatedContentType((ct) => {
          ct.addSidebarWidget(
            'extension',
            'widgetId',
            {
              setting: 'set-1'
            },
            'test'
          )
        })
      )

      const actions = intents[1].toActions()

      expect(actions[0]).to.eql(
        new SidebarWidgetAddAction(
          ctId,
          'widgetId',
          'extension',
          'test',
          { setting: 'set-1' },
          false
        )
      )

      expect(actions[1]).to.eql(new SaveEditorInterfaceAction(ctId))
    })
  })
})

describe('SidebarWidgetUpdateIntent', function () {
  it('creates the necessary actions to update the widget', async function () {
    const intents = await composedIntent(
      withCreatedContentType((ct) => {
        ct.updateSidebarWidget('extension', 'widgetId', {
          setting: 'set-2'
        })
      })
    )

    const actions = intents[1].toActions()

    expect(actions[0]).to.eql(
      new SidebarWidgetUpdateAction(ctId, 'widgetId', 'extension', { setting: 'set-2' }, undefined)
    )

    expect(actions[1]).to.eql(new SaveEditorInterfaceAction(ctId))
  })
})

describe('SidebarWidgetRemoveIntent', function () {
  it('creates the necessary actions to remove the widget', async function () {
    const intents = await composedIntent(
      withCreatedContentType((ct) => {
        ct.removeSidebarWidget('extension', 'widgetId')
      })
    )

    const actions = intents[1].toActions()

    expect(actions[0]).to.eql(new SidebarWidgetRemoveAction(ctId, 'widgetId', 'extension'))

    expect(actions[1]).to.eql(new SaveEditorInterfaceAction(ctId))
  })
})
