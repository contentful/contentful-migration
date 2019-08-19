import { ContentFields } from './contentFields'
import { MetaSys, MetaSysProps } from './meta'
import { DefaultElements } from './defaultElements'
import { Collection } from './collection'
import { EditorInterface } from './editorInterface'

export interface ContentTypeProps {
  name: string,
  description: string,
  displayField: string,
  fields: ContentFields[],
}

export interface ContentType
  extends ContentTypeProps,
    MetaSys<MetaSysProps>,
    DefaultElements<ContentTypeProps & MetaSysProps> {
  delete(): Promise<void>,
  isDraft(): boolean,
  isPublished(): boolean,
  isUpdated(): boolean,
  omitAndDeleteField(): Promise<ContentType>,
  publish(): Promise<ContentType>,
  unpublish(): Promise<ContentType>,
  update(): Promise<ContentType>,
  getEditorInterface(): Promise<EditorInterface>,
  getSnapshot(id: string): Promise<any>,
  getSnapshots(): Promise<Collection<any>>,
}
