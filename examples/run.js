const runMigration = require("../built/bin/cli").runMigration

const options = {
  spaceId: process.env.CONTENTFUL_INTEGRATION_SOURCE_SPACE,
  accessToken: process.env.CONTENTFUL_INTEGRATION_MANAGEMENT_TOKEN,
  yes: true
}

const migrations = async () => {
  await runMigration({
    ...options,
    ...{ filePath: "../../examples/26-reset-entry-editor" }
  })
}

migrations()
