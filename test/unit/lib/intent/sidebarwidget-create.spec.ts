import { migration as migrationSteps } from '../../../../src/lib/migration-steps'
import { expect } from 'chai'
import IntentList from '../../../../src/lib/intent-list'
import { Intent } from '../../../../src/lib/interfaces/intent'
import { SaveEditorInterfaceAction } from '../../../../src/lib/action/editorinterface-save'
import { SidebarWidgetAddAction } from '../../../../src/lib/action/sidebarwidget-add'

const noOp = () => undefined

const composedIntent = async function (migration): Promise<Intent[]> {
  const intents = await migrationSteps(migration, noOp, {})
  const list = new IntentList(intents)

  return list.compressed().getIntents()
}

describe('SidebarWidgetAddIntent', function () {
  const ctId = 'test'

  describe('when adding a sidebar widget to the editor interface', function () {
    it('creates the necessary actions to add the widget', async function () {
      const intents = await composedIntent((migration) => {
        const ct = migration.createContentType(ctId)
        ct.name('Test CT')
        ct.description('This is a test CT')

        const name = ct.createField('name')
        name.type('Symbol')
        const desc = ct.createField('description')
        desc.type('Text')

        ct.addSidebarWidget(
          'widgetId',
          'extension',
          'test',
          {
            setting: 'set-1'
          }
        )
      })

      const intent: Intent = intents[1]
      const actions = intent.toActions()

      expect(actions[0]).to.eql(
        new SidebarWidgetAddAction(
          ctId,
          'widgetId',
          'extension',
          'test',
          {setting: 'set-1'},
          false
        )
      )

      expect(actions[1]).to.eql(
        new SaveEditorInterfaceAction(ctId)
      )
    })
  })
})
