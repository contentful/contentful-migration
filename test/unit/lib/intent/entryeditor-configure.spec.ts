import { migration as migrationSteps } from "../../../../src/lib/migration-steps"
import { expect } from "chai"
import IntentList from "../../../../src/lib/intent-list"
import { Intent } from "../../../../src/lib/interfaces/intent"
import { SaveEditorInterfaceAction } from "../../../../src/lib/action/editorinterface-save"
import { EntryEditorConfigureAction } from "../../../../src/lib/action/entryeditor-configure"

const noOp = () => undefined

const composedIntent = async function(migration): Promise<Intent[]> {
  const intents = await migrationSteps(migration, noOp, {})
  const list = new IntentList(intents)

  return list.compressed().getIntents()
}

describe("EntryEditorConfigureIntent", function() {
  const ctId = "test"

  it("configures editor", async function() {
    const intents = await composedIntent(migration => {
      const ct = migration.createContentType(ctId)
      ct.name("Test CT")
      ct.description("This is a test CT")

      const name = ct.createField("name")
      name.type("Text")
      const desc = ct.createField("description")
      desc.type("Text")

      ct.configureEntryEditor("widgetId", "extension", { key: "value" })
    })

    const intent: Intent = intents[1]
    const actions = intent.toActions()

    expect(actions[0]).to.eql(
      new EntryEditorConfigureAction(ctId, "widgetId", "extension", {
        key: "value"
      })
    )
    expect(actions[1]).to.eql(new SaveEditorInterfaceAction(ctId))
  })
})
