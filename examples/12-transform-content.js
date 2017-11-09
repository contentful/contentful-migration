module.exports = function (migration) {
  migration.editContentType('dog')
    .transformContent({
      from: ['owner'],
      to: ['owner'],
      transform: function (fromFields) {
        const owner = fromFields[0]['en-US'];
        return [{ 'en-US': owner + '!' }];
      }
    });
};
