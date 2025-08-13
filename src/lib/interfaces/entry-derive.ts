export default interface EntryDerive {
  derivedContentType: string
  from: string[]
  toReferenceField: string
  derivedFields: string[]
  identityKey: (fromFields: any) => Promise<string>
  shouldPublish?: boolean | 'preserve'
  useLocaleBasedPublishing?: boolean
  /**
   * Single-entry mode: generate field values for a single derived entry for a given locale.
   * If multi-entry mode is used (deriveEntriesForLocale), this function is ignored.
   */
  deriveEntryForLocale?(inputFields: any, locale: string): Promise<any>

  /**
   * Multi-entry mode: generate zero or more derived child entries for a given locale.
   * If provided, overrides deriveEntryForLocale.
   */
  deriveEntriesForLocale?: (
    inputFields: any,
    locale: string,
    context: { id: string }
  ) => Promise<Array<{ fields: Record<string, any> }>> | Array<{ fields: Record<string, any> }>

  /**
   * Optional custom ID generator for each derived child entry.
   * Defaults to `${sourceId}-${toReferenceField}-${locale}-${index}` (truncated to 64 chars with a short hash suffix if needed).
   */
  derivedEntryId?: (params: {
    sourceId: string
    locale: string
    index: number
    candidate: { fields: Record<string, any> }
  }) => string

  /**
   * Optional publish behavior for derived child entries only.
   * If omitted, falls back to shouldPublish.
   */
  publishDerived?: 'always' | 'never' | 'preserve'
}
