/* eslint-disable unicorn/filename-case */
/* eslint-disable no-undef */

/*
 Alternative 1: assignments handled as a single list

 This is the easiest one to implement and probably maintain, but not the most expressive
 */

let dog = migration.editContentType('dog')
dog.assignAnnotations(['Contentful:AggregateRoot', 'ACME:UltimateAnnotation'])
dog.editField('link').assignAnnotations(['Contentful:AggregateComponent'])

// to clear annotations
dog.assignAnnotations([])
dog.editField('link').assignAnnotations()

// variant
dog.clearAnnotations()

/*
  Alternative 2: assignments handled individually
*/
dog = migration.editContentType('dog')
dog.assignAnnotation('Contentful:AggregateRoot')
dog.assignAnnotation('ACME:UltimateAnnotation')
dog.editField('link').assignAnnotation('Contentful:AggregateComponent')

// to clear annotations
dog.unassignAnnotation('Contentful:AggregateRoot')
dog.unassignAnnotation('ACME:UltimateAnnotation')
dog.editField('link').unassignAnnotation('Contentful:AggregateComponent')

/*
  In future we might have assignment linked properties. They could be handled expanding the 
  parameter type for both alternatives
*/
dog.assignAnnotations([
  { id: 'Contentful:AggregateRoot', properties: { a: 'a', b: 'b' } },
  'ACME:UltimateAnnotation'
])
dog.assignAnnotation({ id: 'Contentful:AggregateRoot', properties: { a: 'a', b: 'b' } })
