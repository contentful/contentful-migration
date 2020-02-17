import isDefined from './is-defined'

export type PublishBehavior = boolean | 'preserve'

export const shouldPublishOrDefault = (shouldPublish?: PublishBehavior): PublishBehavior => (isDefined(shouldPublish) ? shouldPublish : false)

export const preservedOrForcedPublish = (shouldPublish: PublishBehavior, isPublished: boolean): boolean =>
  shouldPublish === true || (shouldPublish === 'preserve' && isPublished)
