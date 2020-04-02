import { MetaSys, MetaLinkProps, MetaSysProps } from './meta'
import { DefaultElements } from './defaultElements'

export interface ApiKeyProps {
  name: string,
  description: string
}

export interface ApiKey
  extends ApiKeyProps,
    DefaultElements<ApiKeyProps & MetaSys<MetaSysProps>>,
    MetaSys<MetaSysProps> {
  accessToken: string,
  policies: { effect: string; action: string }[],
  preview_api_key: MetaSys<MetaLinkProps>,
  delete(): Promise<void>,
  update(): Promise<ApiKey>,
  environments: MetaSys<MetaLinkProps>[]
}

export interface CreateApiKeyProps extends ApiKeyProps {
  environments: MetaSys<MetaLinkProps>[]
}
