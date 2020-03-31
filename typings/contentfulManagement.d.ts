import { Agent as httpAgent } from 'http'
import { Agent as httpsAgent } from 'https'
import { AxiosProxyConfig, AxiosRequestConfig, AxiosResponse } from 'axios'
import { Stream } from 'stream'
import { User } from './user'
import { DefaultElements } from './defaultElements'
import { PersonalAccessToken, PersonalAccessTokenProp } from './personalAccessToken'
import { Space, SpaceProps } from './space'
import { Collection } from './collection'
import { Organization } from './organization'
import * as Usage from './usage'

export as namespace contentfulManagementStatic

declare function createClient(params: ClientParams): ClientAPI

export interface ClientParams {
  accessToken: string,
  insecure?: boolean | null,
  retryOnError?: boolean | null,
  host?: null | string,
  hostUpload?: null | string,
  httpAgent?: null | httpAgent,
  httpsAgent?: null | httpsAgent,
  proxy?: null | AxiosProxyConfig,
  headers?: null | { [key: string]: any },
  logHandler?: (level: string, data: Error | string) => void,
  application?: null | string,
  integration?: null | string,
  timeout?: number,
  retryLimit?: number,
}

export interface getSpacesParams {
  limit?: number,
  skip?: number
}

export interface ClientAPI {
  createPersonalAccessToken(data: PersonalAccessTokenProp): Promise<PersonalAccessToken>,
  createSpace(data: SpaceProps, organizationId: string): Promise<Space>,
  getCurrentUser(): Promise<User>,
  getOrganization(id: string): Promise<Organization>,
  getOrganizations(): Promise<Collection<Organization>>,
  getPersonalAccessToken(data: PersonalAccessTokenProp): Promise<void>,
  getPersonalAccessTokens(): Promise<Collection<PersonalAccessToken>>,
  getSpace(id: string): Promise<Space>,
  getSpaces(params?: getSpacesParams): Promise<Collection<Space>>,
  getOrganizationUsage(organizationId: string, query: Usage.UsageQuery): Promise<Collection<Usage.Usage>>,
  getSpaceUsage(organizationId: string, query: Usage.UsageQuery): Promise<Collection<Usage.Usage>>,
  rawRequest(Opts: AxiosRequestConfig): Promise<AxiosResponse>,
}
