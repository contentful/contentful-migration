// Basic example: update existing content type
module.exports = function (migration) {
  const initialValueCT = migration.createContentType('initialValueCt').name("Initial value CT");
  const shortTextField = initialValueCT.createField('shortText').name("Short Text Field")
  shortTextField.type("Symbol")
  shortTextField.initialValue({
    'en-US': 5
  })
};
