import { MetaSysProps, MetaSys } from './meta'
import { DefaultElements } from './defaultElements'

export interface LocaleProps {
  name: string,
  code: string,
  fallbackCode: string,
  contentDeliveryApi: boolean,
  contentManagementApi: boolean,
  default: boolean,
  optional: boolean,
}

export interface Locale
  extends LocaleProps,
    DefaultElements<LocaleProps & MetaSys<MetaSysProps>>,
    MetaSys<MetaSysProps> {
  delete(): Promise<void>,
  update(): Promise<Locale>,
}

export interface CreateLocaleProps {
  name: string,
  code: string,
  fallbackCode: string,
  contentDeliveryApi?: boolean,
  contentManagementApi?: boolean,
  default?: boolean,
  optional?: boolean,
}
