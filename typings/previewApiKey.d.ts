import { MetaSys, MetaSysProps } from './meta'
import { DefaultElements } from './defaultElements'

export interface PreviewApiKeyProps {
  name: string,
  description: string
}

export interface PreviewApiKey extends PreviewApiKeyProps, MetaSys<MetaSysProps>, DefaultElements<PreviewApiKeyProps & MetaSys<MetaSysProps>>{}
