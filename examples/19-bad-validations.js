module.exports = function (migration) {
  const dog = migration.createContentType('dogAsset', {
    name: 'angry dog',
    description: 'super angry'
  });

  dog.createField('assetTest', {
    type: 'Link',
    name: 'AssetTestName',
    linkType: 'Asset',
    validations: [
      {
        assetImageDimensions: {
          width: {
            min: 1100
          }
        }
      }
    ]
  });
};
