import { describe, it, expect } from 'vitest'
import { migration as migrationSteps } from '../../../../src/lib/migration-steps'
import IntentList from '../../../../src/lib/intent-list'
import { Intent } from '../../../../src/lib/interfaces/intent'
import { SaveEditorInterfaceAction } from '../../../../src/lib/action/editorinterface-save'
import { EntryEditorResetToDefaultAction } from '../../../../src/lib/action/entryeditor-reset-to-default'

const noOp = () => undefined

const composedIntent = async function (migration): Promise<Intent[]> {
  const intents = await migrationSteps(migration, noOp, {})
  const list = new IntentList(intents)

  return list.compressed().getIntents()
}

describe('EntryEditorResetIntent', () => {
  const ctId = 'test'

  it('resets editor property', async () => {
    const intents = await composedIntent((migration) => {
      const ct = migration.createContentType(ctId)
      ct.name('Test CT')
      ct.description('This is a test CT')

      const name = ct.createField('name')
      name.type('Text')
      const desc = ct.createField('description')
      desc.type('Text')

      ct.resetEntryEditor(ctId)
    })

    const intent: Intent = intents[1]

    const actions = intent.toActions()

    expect(actions[0]).toEqual(new EntryEditorResetToDefaultAction(ctId))

    expect(actions[1]).toEqual(new SaveEditorInterfaceAction(ctId))
  })
})
