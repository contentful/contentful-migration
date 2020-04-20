import { DefaultElements } from './defaultElements'
import { MetaSys, MetaSysProps } from './meta'
import { ApiKey, CreateApiKeyProps } from './apiKey'
import { Collection } from './collection'
import { Environment, EnvironmentProps } from './environment'
import { Asset, AssetProps, AssetFileProp } from './asset'
import { ContentType, ContentTypeProps } from './contentType'
import { EntryProp, Entry } from './entry'
import { LocaleProps, Locale } from './locale'
import { SpaceMember } from './spaceMember'
import { Role, RoleProps } from './role'
import { SpaceMembershipProps, SpaceMembership } from './spaceMembership'
import { TeamSpaceMembershipProps, TeamSpaceMembership } from './teamSpaceMembership'
import { UIExtension, UIExtensionProps } from './uiExtension'
import { Upload } from './upload'
import { Stream } from 'stream'
import { QueryOptions } from './queryOptions'
import { Snapshot } from './snapshot'
import { EditorInterface } from './editorInterface'
import { WebhookProps, WebHooks } from './webhook'
import { PreviewApiKey } from './previewApiKey'

export interface SpaceProps {
  name: string
}

export interface EnvironmentAlias extends MetaSys<MetaSysProps> {
  environment: Environment
  update(): Promise<EnvironmentAlias>
}

export interface ContentfulSpaceAPI {
  delete(): Promise<void>,
  update(): Promise<void>,
  createApiKey(data: CreateApiKeyProps): Promise<ApiKey>,
  createApiKeyWithId(id: string, data: CreateApiKeyProps): Promise<ApiKey>,
  createAsset(data: AssetProps): Promise<Asset>,
  createAssetFromFiles(data: AssetFileProp): Promise<Asset>,
  createAssetWithId(id: string, data: AssetProps): Promise<Asset>,
  createContentType(data: ContentTypeProps): Promise<ContentType>,
  createContentTypeWithId(id: string, data: ContentTypeProps): Promise<ContentType>,
  getEnvironments(): Promise<Collection<Environment>>,
  getEnvironment(id: string): Promise<Environment>,
  createEntry(contentTypeID: string, data: EntryProp): Promise<Entry>,
  createEntryWithId(contentTypeID: string, id: string, data: EntryProp): Promise<Entry>,
  createEnvironment(data: EnvironmentProps): Promise<Environment>,
  createEnvironmentWithId(id: string, data: EnvironmentProps, sourceEnvironmentId: string): Promise<Environment>,
  createLocale(data: LocaleProps): Promise<Locale>,
  createRole(data: RoleProps): Promise<Role>,
  createRoleWithId(id: string, ata: RoleProps): Promise<Role>,
  createSpaceMembership(data: SpaceMembershipProps): Promise<SpaceMembership>,
  createSpaceMembershipWithId(id: string, data: SpaceMembershipProps): Promise<SpaceMembership>,
  createTeamSpaceMembership(data: TeamSpaceMembershipProps): Promise<TeamSpaceMembership>,
  createUiExtension(data: UIExtensionProps): Promise<UIExtension>,
  createUiExtensionWithId(id: string, data: UIExtensionProps): Promise<UIExtension>,
  createUpload(data: {
    file: string | ArrayBuffer | Stream
  }): Promise<Upload>,
  getApiKey(id: string): Promise<ApiKey>,
  getApiKeys(): Promise<Collection<ApiKey>>,
  getAsset(id: string, query?: QueryOptions): Promise<Asset>,
  getAssets(query?: QueryOptions): Promise<Collection<Asset>>,
  getContentTypes(object?: QueryOptions): Promise<Collection<ContentType>>,
  getContentType(id: string): Promise<ContentType>,
  getContentTypeSnapshots(contentTypeId: string, query?: QueryOptions): Promise<Collection<Snapshot<ContentTypeProps>>>,
  getEditorInterfaceForContentType(contentTypeId: string): Promise<EditorInterface>,
  getEntry(id: string): Promise<Entry>,
  getEntries(object?: QueryOptions): Promise<Collection<Entry>>,
  getEntrySnapshots(id: string): Promise<Collection<Snapshot<EntryProp>>>,
  getEnvironmentAlias(name: string): Promise<EnvironmentAlias>,
  getLocale(id: string): Promise<Locale>,
  getLocales(): Promise<Collection<Locale>>,
  getUiExtension(id: string): Promise<UIExtension>,
  getUiExtensions(): Promise<Collection<UIExtension>>,
  getUpload(id: string): Promise<Upload>,
  createWebhook(data: WebhookProps): Promise<WebHooks>,
  createWebhookWithId(id:string, data: WebhookProps): Promise<any>,
  getPreviewApiKey(id: string): Promise<PreviewApiKey>,
  getPreviewApiKeys(): Promise<Collection<PreviewApiKey>>,
  getWebhook(id: string): Promise<WebHooks>,
  getWebhook(): Promise<Collection<WebHooks>>,
  getSpaceMember(id: string): Promise<SpaceMember>,
  getSpaceMembers(): Promise<Collection<SpaceMember>>,
  getTeamSpaceMembership(id: string): Promise<TeamSpaceMembership>,
  getTeamSpaceMemberships(): Promise<Collection<TeamSpaceMembership>>,
}

export interface Space extends SpaceProps, DefaultElements<SpaceProps & MetaSys>, MetaSys, ContentfulSpaceAPI {}
