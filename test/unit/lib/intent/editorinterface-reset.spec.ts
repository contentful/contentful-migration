import { describe, it, expect } from 'vitest'
import { migration as migrationSteps } from '../../../../src/lib/migration-steps'
import { PlanMessage } from '../../../../src/lib/interfaces/plan-message'
import IntentList from '../../../../src/lib/intent-list'
import { Intent } from '../../../../src/lib/interfaces/intent'
import chalk from 'chalk'

const noOp = () => undefined

const composedIntent = async function (migration): Promise<Intent[]> {
  const intents = await migrationSteps(migration, noOp, {})
  const list = new IntentList(intents)

  return list.compressed().getIntents()
}
describe('EditorInterfaceResetIntent', () => {
  describe('when reseting one editorInterface', () => {
    it('resets the editor interface', async () => {
      const intents = await composedIntent((migration) => {
        const ct = migration.createContentType('test')
        ct.name('Test CT')
        ct.description('This is a test CT')

        const name = ct.createField('name')
        name.type('Text')
        const desc = ct.createField('description')
        desc.type('Text')

        ct.resetEditorInterface('name')
      })
      const message: PlanMessage = intents[1].toPlanMessage()
      expect(message.heading).toBe(chalk`Reset field control for Content Type {bold.yellow test}`)
    })
  })
})
