import { MetaSys, MetaSysProps } from './meta'
import { DefaultElements } from './defaultElements'

export interface WebhookProps {
  name: string,
  url: string,
  httpBasicUsername: string,
  httpBasicPassword: string,
  headers: {
    [key: string]: any
  },
  topics: string[]
  transformation?: {
    method?: string,
    contentType?: string,
    includeContentLength?: boolean,
    body?: any
  }
}

export interface WebHooks extends WebhookProps, MetaSys<MetaSysProps>, DefaultElements<WebhookProps & MetaSys<MetaSysProps>> {
  delete(): Promise<void>,
  getCalls(): Promise<Object>,
  getHealth(): Promise<Object>,
  update(): Promise<WebHooks>,
}
