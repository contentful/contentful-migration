module.exports = function (migration) {
  const experienceType = migration.createContentType('experienceType').name('Experience')

  experienceType
    .createField('title')
    .name('Title')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false)

  experienceType.displayField('title')

  experienceType
    .createField('slug')
    .name('Slug')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([{ unique: true }])
    .disabled(false)
    .omitted(false)

  experienceType
    .createField('componentTree')
    .name('Component Tree')
    .type('Object')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false)

  experienceType
    .createField('dataSource')
    .name('Data Source')
    .type('Object')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false)

  experienceType
    .createField('unboundValues')
    .name('Unbound Values')
    .type('Object')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false)

  experienceType
    .createField('componentSettings')
    .name('Component Settings')
    .type('Object')
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false)

  experienceType
    .createField('usedComponents')
    .name('Used Components')
    .type('Array')
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false)
    .items({
      type: 'Link',
      validations: [{ linkContentType: ['experienceType'] }],
      linkType: 'Entry'
    })

  experienceType.changeFieldControl('title', 'builtin', 'singleLine')
  experienceType.changeFieldControl('slug', 'builtin', 'slugEditor')
  experienceType.changeFieldControl('componentTree', 'builtin', 'objectEditor')
  experienceType.changeFieldControl('dataSource', 'builtin', 'objectEditor')
  experienceType.changeFieldControl('unboundValues', 'builtin', 'objectEditor')
  experienceType.changeFieldControl('componentSettings', 'builtin', 'objectEditor')
  experienceType.changeFieldControl('usedComponents', 'builtin', 'entryLinksEditor')

  experienceType.setAnnotations(['Contentful:ExperienceType'])
}
