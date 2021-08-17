const { runMigration } = require('../built/bin/cli');

function migrationFunction (migration) {
  const dog = migration.createContentType('dog', {
    name: 'angry dog',
    description: 'super angry'
  });

  dog.createField('woofs', {
    name: 'woof woof',
    type: 'Number',
    required: true
  });
}

async function main () {
  let statusCode = 0;

  try {
    await runMigration({
      migrationFunction,
      spaceId: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_MANAGEMENT_ACCESS_TOKEN,
      environmentId: 'master',
      yes: true
    });
  } catch (e) {
    statusCode = 1;
    console.log('Catching Error');
  } finally {
    console.log('Cleaning Up');
  }

  process.exit(statusCode);
}

main();
