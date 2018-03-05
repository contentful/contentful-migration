import { migration as migrationSteps } from '../../../../src/lib/migration-steps'
import { expect } from 'chai'
import chalk from 'chalk'
import { PlanMessage } from '../../../../src/lib/interfaces/plan-message'
import IntentList from '../../../../src/lib/intent-list'
import { Intent } from '../../../../src/lib/interfaces/intent'

const composedIntent = async function (migration): Promise<Intent[]> {
  const intents = await migrationSteps(migration)
  const list = new IntentList(intents)

  return list.compressed().getIntents()
}

describe('EditorInterfaceUpdateIntent', function () {
  describe('when updating the editor interface of a field part of a content type', function () {
    it('updates the editor interface', async function () {
      const intents = await composedIntent((migration) => {
        const ct = migration.createContentType('test')
        ct.name('Test CT')
        ct.description('This is a test CT')

        const name = ct.createField('name')
        name.type('Symbol')
        const desc = ct.createField('description')
        desc.type('Text')

        ct.changeEditorInterface('name', 'markdown')
          .changeEditorInterface('description', 'singleLine')
      })

      const message1: PlanMessage = intents[1].toPlanMessage()
      expect(message1).to.eql({
        heading: chalk`Update editor interface for Content Type {bold.yellow test}`,
        details: [
          chalk`Field {italic name}: markdown`
        ],
        sections: []
      })
      const message2: PlanMessage = intents[2].toPlanMessage()
      expect(message2).to.eql({
        heading: chalk`Update editor interface for Content Type {bold.yellow test}`,
        details: [
          chalk`Field {italic description}: singleLine`
        ],
        sections: []
      })
    })
  })
})
