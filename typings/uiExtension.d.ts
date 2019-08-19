import { DefaultElements } from './defaultElements'
import { MetaSys, MetaSysProps } from './meta'
import { EntryFields } from './entryFields'

export interface UIExtensionProps {
  extension: {
    name: string,
    fieldTypes: EntryFields[],
    src?: string,
    srcdoc?: string,
    sidebar: boolean,
  }
}

export interface UIExtension
  extends UIExtensionProps,
    DefaultElements<UIExtensionProps & MetaSys<MetaSysProps>>,
    MetaSys<MetaSysProps> {
  update(): Promise<UIExtension>,
  delete(): Promise<void>,
}
