import { migration as migrationSteps } from '../../../../src/lib/migration-steps'
import IntentList from '../../../../src/lib/intent-list'
import ContentTypeUpdateIntent from '../../../../src/lib/intent/content-type-update'
import ComposedIntent from '../../../../src/lib/intent/composed-intent'
import actionCreators from '../../../../src/lib/migration-steps/action-creators'
import FieldDeleteIntent from '../../../../src/lib/intent/field-delete'
import { expect } from 'chai'
import runIntent from './run-intent'
import fakeCallsite from '../../../helpers/fake-callsite'
import makeApiEntry from '../../../helpers/make-api-entry'
import { PlanMessage } from '../../../../src/lib/interfaces/plan-message'
import chalk from 'chalk'

const composedIntent = async function (migration): Promise<ComposedIntent> {
  const intents = await migrationSteps(migration)
  const list = new IntentList(intents)

  return list.compressed().getIntents()[0] as ComposedIntent
}

describe('ComposedIntent', function () {
  describe('making a composed intent', function () {
    it('creates the right plan message', async function () {
      const intent = await composedIntent((migration) => {
        const ct = migration.createContentType('test')
        ct.name('Test CT')
        ct.description('This is a test CT')

        const name = ct.createField('name')
        name.type('Symbol')
        name.required(true)

        const description = ct.createField('description')
        description.type('Text')
        description.required(false)

        const data = ct.editField('data')
        data.required(true)
        data.name('Random data')

        ct.moveField('description').toTheTop()
      })

      const message: PlanMessage = intent.toPlanMessage()

      expect(message).to.eql({
        heading: chalk`Create Content Type {bold.yellow test}`,
        details: [
          chalk`{italic name}: "Test CT"`,
          chalk`{italic description}: "This is a test CT"`
        ],
        sections: [
          {
            heading: chalk`Create field {yellow name}`,
            details: [
              chalk`{italic type}: "Symbol"`,
              chalk`{italic required}: true`
            ]
          },
          {
            heading: chalk`Create field {yellow description}`,
            details: [
              chalk`{italic type}: "Text"`,
              chalk`{italic required}: false`
            ]
          },
          {
            heading: chalk`Update field {yellow data}`,
            details: [
              chalk`{italic required}: true`,
              chalk`{italic name}: "Random data"`
            ]
          },
          {
            heading: chalk`{bold Move field {yellow description} to the first position}`
          }
        ]
      })
    })
  })
})
