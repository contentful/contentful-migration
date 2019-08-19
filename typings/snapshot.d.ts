import { MetaSys, MetaSysProps } from './meta'
import { ContentTypeProps } from './contentType'
import { EntryProp } from './entry';

export interface Snapshot<T extends ContentTypeProps | EntryProp> {
  sys: MetaSys<MetaSysProps & {snapshotType: string, snapshotEntityType: string}>,
  snapshot: T & MetaSys<MetaSysProps>
}
