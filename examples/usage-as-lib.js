const { runMigration } = require('../src/bin/cli')

async function main(filePath) {
  let statusCode = 0

  try {
    await runMigration({
      spaceId: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_MANAGEMENT_ACCESS_TOKEN,
      environmentId: 'master',
      yes: true,
      filePath
    })
  } catch (e) {
    statusCode = 1
    console.log('Catching Error')
  } finally {
    console.log('Cleaning Up')
  }

  process.exit(statusCode)
}

main(process.argv[2])
