const nock = require('nock');

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin')
  .reply(200, {
  "name":"Migrations CLI Test",
  "sys":{
    "type":"Space",
    "id":"bohepdihyxin",
    "version":10,
    "createdBy":{
      "sys":{
        "type":"Link",
        "linkType":"User",
        "id":"33kZDXNajFNmbngiu5MvUa"
      }
    },
    "createdAt":"2017-09-04T10:02:24Z",
    "updatedBy":{
      "sys":{
        "type":"Link",
        "linkType":"User",
        "id":"33kZDXNajFNmbngiu5MvUa"
      }
    },
    "updatedAt":"2020-06-25T11:37:46Z",
    "organization":{
      "sys":{
        "type":"Link",
        "linkType":"Organization",
        "id":"3ubGFD1MWA6VgVYbIwSBg8"
      }
    }
  }
}

, [
  'accept-ranges',
  'bytes',
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cache-control',
  'max-age=0',
  'cf-organization-id',
  '3ubGFD1MWA6VgVYbIwSBg8',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 15:59:31 GMT',
  'etag',
  'W/"9f8886bb475af980f12a1a32fbc74d55"',
  'referrer-policy',
  'strict-origin-when-cross-origin',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'x-content-type-options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'd6435e071f7e6f2be3206d9d85e95823',
  'x-download-options',
  'noopen',
  'x-frame-options',
  'ALLOWALL',
  'x-permitted-cross-domain-policies',
  'none',
  'x-xss-protection',
  '1; mode=block',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=BW4VHShsTrOLVOtQIeS/dWPWDV8AAAAAQUIPAAAAAACApH2+h6v/NIRTynQmA0IF; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=X1LbFWSoqRtUgI4kKsJtVwAAAADD2AKyPU9IHQ01M1+ZJe3h; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=wJ6dIDWAbxxxtflMOoVtA2PWDV8AAAAA4Jl2krP+lLLEGiic5pujYg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '9-5255586-5255587 NNYN CT(90 90 0) RT(1594742370761 41) q(0 0 1 -1) r(3 3) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration', {"name":"env-integration"})
  .reply(201, {"name":"env-integration","sys":{"type":"Environment","id":"env-integration","version":1,"space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"status":{"sys":{"type":"Link","linkType":"Status","id":"queued"}},"createdBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"createdAt":"2020-07-14T15:59:32Z","updatedBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"updatedAt":"2020-07-14T15:59:32Z"}}, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cache-control',
  'max-age=0',
  'cf-organization-id',
  '3ubGFD1MWA6VgVYbIwSBg8',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 15:59:32 GMT',
  'etag',
  'W/"4f05bbd781578a262c5dfe3e24b0ce22"',
  'referrer-policy',
  'strict-origin-when-cross-origin',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'x-content-type-options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  'dea219f2244834711e05121a1a79f22c',
  'x-download-options',
  'noopen',
  'x-frame-options',
  'ALLOWALL',
  'x-permitted-cross-domain-policies',
  'none',
  'x-xss-protection',
  '1; mode=block',
  'Content-Length',
  '707',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=wutDcZboRgWJnel0gjhEUWTWDV8AAAAAQUIPAAAAAAA/aPftnwhIcRuE+o70SdhY; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=8hqEcq/wRxAymsiqKsJtVwAAAABCrGkRQbfgqn6+frly1SRt; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=bmXuSz6OO2qYtvlMOoVtA2TWDV8AAAAAc5I8vgPIReO8JAWC7XFDBg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '9-5255625-5255627 NNNN CT(88 88 0) RT(1594742371337 30) q(0 0 2 -1) r(11 11) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration')
  .reply(200, {
  "name":"env-integration",
  "sys":{
    "type":"Environment",
    "id":"env-integration",
    "version":3,
    "space":{
      "sys":{
        "type":"Link",
        "linkType":"Space",
        "id":"bohepdihyxin"
      }
    },
    "status":{
      "sys":{
        "type":"Link",
        "linkType":"Status",
        "id":"ready"
      }
    },
    "createdBy":{
      "sys":{
        "type":"Link",
        "linkType":"User",
        "id":"1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "createdAt":"2020-07-14T15:59:32Z",
    "updatedBy":{
      "sys":{
        "type":"Link",
        "linkType":"User",
        "id":"1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "updatedAt":"2020-07-14T15:59:33Z"
  }
}

, [
  'accept-ranges',
  'bytes',
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cache-control',
  'max-age=0',
  'cf-organization-id',
  '3ubGFD1MWA6VgVYbIwSBg8',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 15:59:33 GMT',
  'etag',
  'W/"13e0007531e699aec6e7033be00b9b51"',
  'referrer-policy',
  'strict-origin-when-cross-origin',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'x-content-type-options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'bd4cae807cd58264b4df716fa62963f9',
  'x-download-options',
  'noopen',
  'x-frame-options',
  'ALLOWALL',
  'x-permitted-cross-domain-policies',
  'none',
  'x-xss-protection',
  '1; mode=block',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=AUHdWSwXQbqVRRB/Lk2qeWXWDV8AAAAAQUIPAAAAAABgCWp3GEXL7Avlm2whN0iW; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=LgogV+yfhmVvvG/BKsJtVwAAAABpRsGcy4rFr3xJxm+qP1+/; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=sDKXFS0k5RqAt/lMOoVtA2XWDV8AAAAAODr+KeBnpMAYIvXuUuE3cg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '13-20307479-20307503 NNYN CT(96 100 0) RT(1594742372649 38) q(0 0 2 -1) r(9 9) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/content_types')
  .query({"limit":"100","order":"sys.createdAt","sys.id%5Bin%5D":"dog","skip":"0"})
  .reply(200, {
  "sys": {
    "type": "Array"
  },
  "total": 0,
  "skip": 0,
  "limit": 100,
  "items": []
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 15:59:34 GMT',
  'etag',
  '"10440568906820546102"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '1218f2bb40d8f8b4af2e412919ba51d3',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=Z2A1VxiLQiSIGCIrBXwDbGbWDV8AAAAAQUIPAAAAAACDqKOsxTCeJnX9wdX5yKUG; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=aU3PPLPbZ1ipsK+VKsJtVwAAAAB9vpdsAX6qBzQxrw6PPQBt; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=fEWSGk1BYlpHuPlMOoVtA2bWDV8AAAAAtit6BtYKRYghqbgx4p/RUg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '13-20307723-20307738 NNYN CT(87 87 0) RT(1594742373651 34) q(0 0 2 -1) r(7 7) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/locales')
  .query({"limit":"100","order":"sys.createdAt","skip":"0"})
  .reply(200, {
  "total":1,
  "limit":100,
  "skip":0,
  "sys":{
    "type":"Array"
  },
  "items":[
    {
      "name":"U.S. English",
      "internal_code":"en-US",
      "code":"en-US",
      "fallbackCode":null,
      "default":true,
      "contentManagementApi":true,
      "contentDeliveryApi":true,
      "optional":false,
      "sys":{
        "type":"Locale",
        "id":"0zK7OynpqVdcSetOBfe5P8",
        "version":1,
        "space":{
          "sys":{
            "type":"Link",
            "linkType":"Space",
            "id":"bohepdihyxin"
          }
        },
        "environment":{
          "sys":{
            "type":"Link",
            "linkType":"Environment",
            "id":"env-integration"
          }
        },
        "createdAt":"2020-07-14T15:59:32Z",
        "updatedAt":"2020-07-14T15:59:32Z"
      }
    }
  ]
}

, [
  'accept-ranges',
  'bytes',
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cache-control',
  'max-age=0',
  'cf-organization-id',
  '3ubGFD1MWA6VgVYbIwSBg8',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 15:59:35 GMT',
  'etag',
  'W/"f22cb9b177121e851327f03346d48b93"',
  'referrer-policy',
  'strict-origin-when-cross-origin',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'x-content-type-options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '7c8aa55353358ef7668ce95b19775036',
  'x-download-options',
  'noopen',
  'x-frame-options',
  'ALLOWALL',
  'x-permitted-cross-domain-policies',
  'none',
  'x-xss-protection',
  '1; mode=block',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=oUofq5vLQ1idHx8tget/vmfWDV8AAAAAQUIPAAAAAAA7zSn6dVQz4m78c6Xgieyp; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=dlsTf5FfGn5tyvnrKsJtVwAAAACpEQxxMOQ/v0RgwjSpOX2E; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=3srvUFE5R3o2uflMOoVtA2fWDV8AAAAA3bCQAw2tPM5o5DsJ4LAiJQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '12-17393592-17393601 NNYN CT(93 95 0) RT(1594742374483 47) q(0 0 2 -1) r(8 8) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/dog', {"name":"angry dog","fields":[{"id":"woofs","name":"woof woof","type":"Number","required":true}],"description":"super angry"})
  .reply(201, {"sys":{"space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"id":"dog","type":"ContentType","createdAt":"2020-07-14T15:59:36.539Z","updatedAt":"2020-07-14T15:59:36.539Z","environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}},"createdBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"updatedBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"publishedCounter":0,"version":1},"displayField":null,"name":"angry dog","description":"super angry","fields":[{"id":"woofs","name":"woof woof","type":"Number","localized":false,"required":true,"validations":[],"disabled":false,"omitted":false}]}, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 15:59:36 GMT',
  'etag',
  '"8051465262240085603"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'be1fc046553b3b419999029db1343090',
  'Content-Length',
  '1051',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=xt2bD6SCS2K+PQm41Awxl2jWDV8AAAAAQUIPAAAAAABzyi8ePgNd2JOWwU56O/ip; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=y3OjZMifsTj3bQPCKsJtVwAAAAB3cstwOFwYeJelVP1ak5Xl; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=mO7pORgmrGUbuvlMOoVtA2jWDV8AAAAA7xgG5414nmqPhHqTcSRn5Q==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '14-26987702-26987714 NNNN CT(93 93 0) RT(1594742375529 36) q(0 0 2 -1) r(10 10) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/dog/published')
  .reply(200, {
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "bohepdihyxin"
      }
    },
    "id": "dog",
    "type": "ContentType",
    "createdAt": "2020-07-14T15:59:36.539Z",
    "updatedAt": "2020-07-14T15:59:37.439Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "createdBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "publishedCounter": 1,
    "version": 2,
    "firstPublishedAt": "2020-07-14T15:59:37.439Z",
    "publishedAt": "2020-07-14T15:59:37.439Z",
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "publishedVersion": 1
  },
  "displayField": null,
  "name": "angry dog",
  "description": "super angry",
  "fields": [
    {
      "id": "woofs",
      "name": "woof woof",
      "type": "Number",
      "localized": false,
      "required": true,
      "validations": [],
      "disabled": false,
      "omitted": false
    }
  ]
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 15:59:37 GMT',
  'etag',
  'W/"7761196522538835660"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '3f3396b1354164ef2d4c3aeb13e62055',
  'Content-Length',
  '441',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=M60Gv1RiQ3uXwmhpfdr6gmnWDV8AAAAAQUIPAAAAAADTc+ecL/HUb/m1l3Xs6PQB; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=hG9CC9nLO3Tx9FIrKsJtVwAAAAAT/3OkWshYLAU3u0NekiuX; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=SCG+NlAo7R/yuvlMOoVtA2nWDV8AAAAA/oxLfQXACS3Z/TaTjiFYMQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '12-17394102-17394114 NNNN CT(93 93 0) RT(1594742376737 32) q(0 0 2 -1) r(8 8) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/content_types/dog')
  .reply(200, {
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "bohepdihyxin"
      }
    },
    "id": "dog",
    "type": "ContentType",
    "createdAt": "2020-07-14T15:59:36.539Z",
    "updatedAt": "2020-07-14T15:59:37.439Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 1,
    "publishedAt": "2020-07-14T15:59:37.439Z",
    "firstPublishedAt": "2020-07-14T15:59:37.439Z",
    "createdBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "publishedCounter": 1,
    "version": 2,
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    }
  },
  "displayField": null,
  "name": "angry dog",
  "description": "super angry",
  "fields": [
    {
      "id": "woofs",
      "name": "woof woof",
      "type": "Number",
      "localized": false,
      "required": true,
      "validations": [],
      "disabled": false,
      "omitted": false
    }
  ]
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 15:59:38 GMT',
  'etag',
  'W/"6448194171137651990"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '38f1f736a9467dd6dea2ffd5d6707dba',
  'Content-Length',
  '442',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=RQb12jjUSmyzy+h5HNF01GrWDV8AAAAAQUIPAAAAAABEs9yPl8ALtVi69ZZLq0fr; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=gOPgNthJpx38X0IoKsJtVwAAAACjLq9A+l65VWHkuBunh7sQ; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=0oanIKDgdEVzu/lMOoVtA2rWDV8AAAAAGiz+fuy6f3e/kFexe6DcDA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '14-26988438-26988449 NNNN CT(93 93 0) RT(1594742377640 35) q(0 0 2 -1) r(4 4) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/content_types')
  .query({"limit":"100","order":"sys.createdAt","sys.id%5Bin%5D":"dog","skip":"0"})
  .reply(200, {
  "sys": {
    "type": "Array"
  },
  "total": 1,
  "skip": 0,
  "limit": 100,
  "items": [
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "bohepdihyxin"
          }
        },
        "id": "dog",
        "type": "ContentType",
        "createdAt": "2020-07-14T15:59:36.539Z",
        "updatedAt": "2020-07-14T15:59:37.439Z",
        "environment": {
          "sys": {
            "id": "env-integration",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 1,
        "publishedAt": "2020-07-14T15:59:37.439Z",
        "firstPublishedAt": "2020-07-14T15:59:37.439Z",
        "createdBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "1Y7O5FbAkPYgNvD0MpQoAE"
          }
        },
        "updatedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "1Y7O5FbAkPYgNvD0MpQoAE"
          }
        },
        "publishedCounter": 1,
        "version": 2,
        "publishedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "1Y7O5FbAkPYgNvD0MpQoAE"
          }
        }
      },
      "displayField": null,
      "name": "angry dog",
      "description": "super angry",
      "fields": [
        {
          "id": "woofs",
          "name": "woof woof",
          "type": "Number",
          "localized": false,
          "required": true,
          "validations": [],
          "disabled": false,
          "omitted": false
        }
      ]
    }
  ]
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 15:59:43 GMT',
  'etag',
  'W/"13692349416730014677"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '2c25490411a2f5274c0b587295fad6c3',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=8pgkA6JNSJSNwmbyvWuebW/WDV8AAAAAQUIPAAAAAAC141GqaA9Z0mwL4tje+hV/; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=8Xy/QysRmUpj75hjKsJtVwAAAAAvRozKcRNlCBqID4EDUE49; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=nXqtGpkzcz/GwflMOoVtA2/WDV8AAAAAwvSciVT3bAHHfT2VIimEow==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '11-13770450-13770453 NNNN CT(91 91 0) RT(1594742383161 33) q(0 0 2 -1) r(4 4) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/locales')
  .query({"limit":"100","order":"sys.createdAt","skip":"0"})
  .reply(200, {
  "total":1,
  "limit":100,
  "skip":0,
  "sys":{
    "type":"Array"
  },
  "items":[
    {
      "name":"U.S. English",
      "internal_code":"en-US",
      "code":"en-US",
      "fallbackCode":null,
      "default":true,
      "contentManagementApi":true,
      "contentDeliveryApi":true,
      "optional":false,
      "sys":{
        "type":"Locale",
        "id":"0zK7OynpqVdcSetOBfe5P8",
        "version":1,
        "space":{
          "sys":{
            "type":"Link",
            "linkType":"Space",
            "id":"bohepdihyxin"
          }
        },
        "environment":{
          "sys":{
            "type":"Link",
            "linkType":"Environment",
            "id":"env-integration"
          }
        },
        "createdAt":"2020-07-14T15:59:32Z",
        "updatedAt":"2020-07-14T15:59:32Z"
      }
    }
  ]
}

, [
  'accept-ranges',
  'bytes',
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cache-control',
  'max-age=0',
  'cf-organization-id',
  '3ubGFD1MWA6VgVYbIwSBg8',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 15:59:45 GMT',
  'etag',
  'W/"f22cb9b177121e851327f03346d48b93"',
  'referrer-policy',
  'strict-origin-when-cross-origin',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'x-content-type-options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '397be94a0c89e7cd868c0d4309403b35',
  'x-download-options',
  'noopen',
  'x-frame-options',
  'ALLOWALL',
  'x-permitted-cross-domain-policies',
  'none',
  'x-xss-protection',
  '1; mode=block',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=WvetzpFrTyyJoEF8iX4J5HHWDV8AAAAAQUIPAAAAAACcBqF5wTFRp4v9nkDd/yQs; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=B8DEOLkjsBWHyMOiKsJtVwAAAACy00VjC+uwoLurtAEfCdlh; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=7F5qEpUj43iaxPlMOoVtA3HWDV8AAAAA3zXCqzDhzLc0Jo9cADwNmQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '14-26990724-26990733 NNYN CT(88 87 0) RT(1594742384689 34) q(0 0 1 -1) r(8 8) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/dog', {"name":"angry dog","displayField":null,"fields":[{"id":"woofs","name":"woof woof","type":"Number","localized":false,"required":true,"validations":[],"disabled":false,"omitted":true}],"description":"super angry"})
  .reply(200, {
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "bohepdihyxin"
      }
    },
    "id": "dog",
    "type": "ContentType",
    "createdAt": "2020-07-14T15:59:36.539Z",
    "updatedAt": "2020-07-14T15:59:46.518Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 1,
    "publishedAt": "2020-07-14T15:59:37.439Z",
    "firstPublishedAt": "2020-07-14T15:59:37.439Z",
    "createdBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "publishedCounter": 1,
    "version": 3,
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    }
  },
  "displayField": null,
  "name": "angry dog",
  "description": "super angry",
  "fields": [
    {
      "id": "woofs",
      "name": "woof woof",
      "type": "Number",
      "localized": false,
      "required": true,
      "validations": [],
      "disabled": false,
      "omitted": true
    }
  ]
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 15:59:46 GMT',
  'etag',
  'W/"17009879483529396695"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '41b955b2e0c9409aabe01cd293841ecd',
  'Content-Length',
  '446',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=3ERSb8OpTvG9RANrWps2pHLWDV8AAAAAQUIPAAAAAADtKcJakwPDwp+AbPyNmwNS; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=ypG+B6/uw3F24DXBKsJtVwAAAADuD0bzF74TeNJ2NgS9q6RN; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=KQD1aMYM7C1DxflMOoVtA3LWDV8AAAAApcxeN7NjwiTzGDXptdmGWQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '7-7154761-7154763 NNNN CT(86 88 0) RT(1594742385781 31) q(0 0 1 -1) r(4 4) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/dog/published')
  .reply(200, {
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "bohepdihyxin"
      }
    },
    "id": "dog",
    "type": "ContentType",
    "createdAt": "2020-07-14T15:59:36.539Z",
    "updatedAt": "2020-07-14T15:59:47.040Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 3,
    "publishedAt": "2020-07-14T15:59:47.040Z",
    "firstPublishedAt": "2020-07-14T15:59:37.439Z",
    "createdBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "publishedCounter": 2,
    "version": 4,
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    }
  },
  "displayField": null,
  "name": "angry dog",
  "description": "super angry",
  "fields": [
    {
      "id": "woofs",
      "name": "woof woof",
      "type": "Number",
      "localized": false,
      "required": true,
      "validations": [],
      "disabled": false,
      "omitted": true
    }
  ]
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 15:59:47 GMT',
  'etag',
  'W/"13834337006343995036"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  'a9853d2f0afa74d2a3c6c2ddfa97b676',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=lpXKQe4HR+6BhvfZZ8891XLWDV8AAAAAQUIPAAAAAADig+8DhVUepIlLWCP/x05I; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=ORSaXiJNon9rKlofKsJtVwAAAAA3BaGgb87KcTLCTbLHArPp; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=H6R3e03VBwzExflMOoVtA3LWDV8AAAAAq7Aita1oM5u5K4qFGoL//Q==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '14-26991273-26991283 NNNN CT(92 94 0) RT(1594742386357 35) q(0 0 2 -1) r(5 5) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/dog', {"name":"angry dog","displayField":null,"fields":[],"description":"super angry"})
  .reply(200, {
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "bohepdihyxin"
      }
    },
    "id": "dog",
    "type": "ContentType",
    "createdAt": "2020-07-14T15:59:36.539Z",
    "updatedAt": "2020-07-14T15:59:47.823Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 3,
    "publishedAt": "2020-07-14T15:59:47.040Z",
    "firstPublishedAt": "2020-07-14T15:59:37.439Z",
    "createdBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "publishedCounter": 2,
    "version": 5,
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    }
  },
  "displayField": null,
  "name": "angry dog",
  "description": "super angry",
  "fields": []
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 15:59:47 GMT',
  'etag',
  'W/"2112654971627075758"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'f8155733774fa2a8b49688cff150c7ea',
  'Content-Length',
  '374',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=YPDr0YzNTCaAmaiN+4tREnPWDV8AAAAAQUIPAAAAAACQN0uszW2afzKu8fXLFoId; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=zHrrM8f6ZEmHEhBOKsJtVwAAAACD+KuvT8ZU36S2dw6bQjey; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=ok2/dF+ZDHBVxvlMOoVtA3PWDV8AAAAARVP4UhTp6Q1eQKs2uiS+8Q==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '3-6341568-6341570 NNNN CT(87 88 0) RT(1594742386962 58) q(0 0 1 -1) r(5 5) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/dog/published')
  .reply(200, {
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "bohepdihyxin"
      }
    },
    "id": "dog",
    "type": "ContentType",
    "createdAt": "2020-07-14T15:59:36.539Z",
    "updatedAt": "2020-07-14T15:59:48.344Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 5,
    "publishedAt": "2020-07-14T15:59:48.344Z",
    "firstPublishedAt": "2020-07-14T15:59:37.439Z",
    "createdBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "publishedCounter": 3,
    "version": 6,
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    }
  },
  "displayField": null,
  "name": "angry dog",
  "description": "super angry",
  "fields": []
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 15:59:48 GMT',
  'etag',
  'W/"11539890348999363549"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'd8c3b23bc8db1af197a68f26a74d9369',
  'Content-Length',
  '370',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=L6D0y1thSaOEI3HiH3WHUXTWDV8AAAAAQUIPAAAAAABTR1HjLF53HPmpJDhf+9FM; expires=Wed, 14 Jul 2021 14:42:27 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=clEEX3X2ahRuCAh1KsJtVwAAAAASiHXfoRJSAIDaWWGrLBK7; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=4zyaQHLis0D2xvlMOoVtA3TWDV8AAAAAG0GbbeNX5857/PMGekRokw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '5-13522032-13522037 NNNN CT(86 89 0) RT(1594742387685 33) q(0 0 1 -1) r(4 4) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/content_types/dog')
  .reply(200, {
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "bohepdihyxin"
      }
    },
    "id": "dog",
    "type": "ContentType",
    "createdAt": "2020-07-14T15:59:36.539Z",
    "updatedAt": "2020-07-14T15:59:48.344Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 5,
    "publishedAt": "2020-07-14T15:59:48.344Z",
    "firstPublishedAt": "2020-07-14T15:59:37.439Z",
    "createdBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "publishedCounter": 3,
    "version": 6,
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    }
  },
  "displayField": null,
  "name": "angry dog",
  "description": "super angry",
  "fields": []
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 15:59:48 GMT',
  'etag',
  'W/"11539890348999363549"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  '06eee3f8cca4c0f2724eb1267e3a7224',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=RfQT7OpWQCqJjS3RQGXZDnTWDV8AAAAAQUIPAAAAAAAj2cAy6Pr0xu6nvvDXmnhT; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=einhHP9sCyWkAv+yKsJtVwAAAADckfOrH4npyWnL++0kJDin; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=LwAfIAXfRThUx/lMOoVtA3TWDV8AAAAABGSIDti7bpy5AHY3/+THKg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '13-20311444-20311449 NNNN CT(93 95 0) RT(1594742388231 30) q(0 0 2 -1) r(4 4) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/content_types')
  .query({"limit":"100","order":"sys.createdAt","sys.id%5Bin%5D":"dog","skip":"0"})
  .reply(200, {
  "sys": {
    "type": "Array"
  },
  "total": 1,
  "skip": 0,
  "limit": 100,
  "items": [
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "bohepdihyxin"
          }
        },
        "id": "dog",
        "type": "ContentType",
        "createdAt": "2020-07-14T15:59:36.539Z",
        "updatedAt": "2020-07-14T15:59:48.344Z",
        "environment": {
          "sys": {
            "id": "env-integration",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 5,
        "publishedAt": "2020-07-14T15:59:48.344Z",
        "firstPublishedAt": "2020-07-14T15:59:37.439Z",
        "createdBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "1Y7O5FbAkPYgNvD0MpQoAE"
          }
        },
        "updatedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "1Y7O5FbAkPYgNvD0MpQoAE"
          }
        },
        "publishedCounter": 3,
        "version": 6,
        "publishedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "1Y7O5FbAkPYgNvD0MpQoAE"
          }
        }
      },
      "displayField": null,
      "name": "angry dog",
      "description": "super angry",
      "fields": []
    }
  ]
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 15:59:49 GMT',
  'etag',
  'W/"18429099488360793111"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'bbfe6999bef951562523222dac723811',
  'Content-Length',
  '435',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=auzuvkEMRxSIo/wRTjdqCXXWDV8AAAAAQUIPAAAAAACSlLeu6USKSgd/AevFofX6; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=ewLBaU5rnTrositlKsJtVwAAAAB/9aEhhVsdyZCo0psas50t; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=vZ0HaVDSMCLNx/lMOoVtA3XWDV8AAAAAHOdwsgvl56r92Wql83wqsQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '11-13771248-13771253 NNNN CT(92 91 0) RT(1594742388763 32) q(0 0 2 -1) r(4 4) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/locales')
  .query({"limit":"100","order":"sys.createdAt","skip":"0"})
  .reply(200, {
  "total":1,
  "limit":100,
  "skip":0,
  "sys":{
    "type":"Array"
  },
  "items":[
    {
      "name":"U.S. English",
      "internal_code":"en-US",
      "code":"en-US",
      "fallbackCode":null,
      "default":true,
      "contentManagementApi":true,
      "contentDeliveryApi":true,
      "optional":false,
      "sys":{
        "type":"Locale",
        "id":"0zK7OynpqVdcSetOBfe5P8",
        "version":1,
        "space":{
          "sys":{
            "type":"Link",
            "linkType":"Space",
            "id":"bohepdihyxin"
          }
        },
        "environment":{
          "sys":{
            "type":"Link",
            "linkType":"Environment",
            "id":"env-integration"
          }
        },
        "createdAt":"2020-07-14T15:59:32Z",
        "updatedAt":"2020-07-14T15:59:32Z"
      }
    }
  ]
}

, [
  'accept-ranges',
  'bytes',
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cache-control',
  'max-age=0',
  'cf-organization-id',
  '3ubGFD1MWA6VgVYbIwSBg8',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 15:59:49 GMT',
  'etag',
  'W/"f22cb9b177121e851327f03346d48b93"',
  'referrer-policy',
  'strict-origin-when-cross-origin',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'x-content-type-options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  '0eb6e6c3b63f1364a29b0c8c58108c51',
  'x-download-options',
  'noopen',
  'x-frame-options',
  'ALLOWALL',
  'x-permitted-cross-domain-policies',
  'none',
  'x-xss-protection',
  '1; mode=block',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=rNbJHEqRTICUxqYsMyNRG3XWDV8AAAAAQUIPAAAAAADuBfgyz3/31kt2KsxjY+1r; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=nHE6fw01SG1BO2o7KsJtVwAAAABHdgwWhFfWvWGKG+gUMpjG; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=5SnncTPNYH49yPlMOoVtA3XWDV8AAAAALL9qxm+5qygmSOTzciVidA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '3-6341732-6341735 NNYN CT(92 92 0) RT(1594742389219 34) q(0 0 2 -1) r(3 3) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/dog', {"name":"Friendly dog","displayField":null,"fields":[{"id":"goodboys","type":"Number","name":"number of times he has been called a good boy","required":false}],"description":"Who's a good boy? He is!"})
  .reply(200, {
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "bohepdihyxin"
      }
    },
    "id": "dog",
    "type": "ContentType",
    "createdAt": "2020-07-14T15:59:36.539Z",
    "updatedAt": "2020-07-14T15:59:50.328Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 5,
    "publishedAt": "2020-07-14T15:59:48.344Z",
    "firstPublishedAt": "2020-07-14T15:59:37.439Z",
    "createdBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "publishedCounter": 3,
    "version": 7,
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    }
  },
  "displayField": null,
  "name": "Friendly dog",
  "description": "Who's a good boy? He is!",
  "fields": [
    {
      "id": "goodboys",
      "name": "number of times he has been called a good boy",
      "type": "Number",
      "localized": false,
      "required": false,
      "validations": [],
      "disabled": false,
      "omitted": false
    }
  ]
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 15:59:50 GMT',
  'etag',
  'W/"7991568740491863076"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'a980d805eee771b0a8ddc43126a16820',
  'Content-Length',
  '496',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=NUFd+Il5RTG2qVcFcpBWrnbWDV8AAAAAQUIPAAAAAADoHmWv2BNV5WJQPzi5MQVF; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=VMo5AF5IChMOpZSfKsJtVwAAAAByoQX3G6jHXL1V6bFTm2ep; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=Elf7ZP9ueU7FyPlMOoVtA3bWDV8AAAAAa804YrQyvlmnJBGhrZlBpw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '3-6341754-6341759 NNNN CT(94 102 0) RT(1594742389636 33) q(0 0 2 -1) r(4 4) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/dog/published')
  .reply(200, {
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "bohepdihyxin"
      }
    },
    "id": "dog",
    "type": "ContentType",
    "createdAt": "2020-07-14T15:59:36.539Z",
    "updatedAt": "2020-07-14T15:59:50.905Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 7,
    "publishedAt": "2020-07-14T15:59:50.905Z",
    "firstPublishedAt": "2020-07-14T15:59:37.439Z",
    "createdBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "publishedCounter": 4,
    "version": 8,
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    }
  },
  "displayField": null,
  "name": "Friendly dog",
  "description": "Who's a good boy? He is!",
  "fields": [
    {
      "id": "goodboys",
      "name": "number of times he has been called a good boy",
      "type": "Number",
      "localized": false,
      "required": false,
      "validations": [],
      "disabled": false,
      "omitted": false
    }
  ]
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 15:59:51 GMT',
  'etag',
  'W/"7028925680526682898"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  '746bd488b2df027216de0b1e7572ce03',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=WblmqFUuSE2tOttOUb4ZcHbWDV8AAAAAQUIPAAAAAABENUh2TnyVkfkucf5SLjDA; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=YCsnHt8pykLUCgUAKsJtVwAAAAAZCJWbojGNw3ZLcGWl04qE; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=NEFEKfe93R5syflMOoVtA3bWDV8AAAAAZA1h/l+31hWyJnR9KBTiWQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '14-26992502-26992513 NNNN CT(87 94 0) RT(1594742390251 32) q(0 0 2 -1) r(5 5) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/content_types/dog')
  .reply(200, {
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "bohepdihyxin"
      }
    },
    "id": "dog",
    "type": "ContentType",
    "createdAt": "2020-07-14T15:59:36.539Z",
    "updatedAt": "2020-07-14T15:59:50.905Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 7,
    "publishedAt": "2020-07-14T15:59:50.905Z",
    "firstPublishedAt": "2020-07-14T15:59:37.439Z",
    "createdBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "publishedCounter": 4,
    "version": 8,
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    }
  },
  "displayField": null,
  "name": "Friendly dog",
  "description": "Who's a good boy? He is!",
  "fields": [
    {
      "id": "goodboys",
      "name": "number of times he has been called a good boy",
      "type": "Number",
      "localized": false,
      "required": false,
      "validations": [],
      "disabled": false,
      "omitted": false
    }
  ]
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 15:59:51 GMT',
  'etag',
  'W/"7028925680526682898"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '7bb76a067437bd26a399ef7057239821',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=LaRCNvVGQnKioux+gWUUJ3fWDV8AAAAAQUIPAAAAAADKaggsNQn4XnApWoDAKwXg; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=60n7J5R6b091w7I0KsJtVwAAAAAcsz6hrJCdiChshRXZZMnb; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=FgeFQKqnOkfCyflMOoVtA3fWDV8AAAAAxvIwZ10NeOsB8JY4lMSWnw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '4-9009661-9009667 NNNN CT(93 94 0) RT(1594742390787 31) q(0 0 2 -1) r(3 3) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/content_types')
  .query({"limit":"100","order":"sys.createdAt","sys.id%5Bin%5D":"dog","skip":"0"})
  .reply(200, {
  "sys": {
    "type": "Array"
  },
  "total": 1,
  "skip": 0,
  "limit": 100,
  "items": [
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "bohepdihyxin"
          }
        },
        "id": "dog",
        "type": "ContentType",
        "createdAt": "2020-07-14T15:59:36.539Z",
        "updatedAt": "2020-07-14T15:59:50.905Z",
        "environment": {
          "sys": {
            "id": "env-integration",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 7,
        "publishedAt": "2020-07-14T15:59:50.905Z",
        "firstPublishedAt": "2020-07-14T15:59:37.439Z",
        "createdBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "1Y7O5FbAkPYgNvD0MpQoAE"
          }
        },
        "updatedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "1Y7O5FbAkPYgNvD0MpQoAE"
          }
        },
        "publishedCounter": 4,
        "version": 8,
        "publishedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "1Y7O5FbAkPYgNvD0MpQoAE"
          }
        }
      },
      "displayField": null,
      "name": "Friendly dog",
      "description": "Who's a good boy? He is!",
      "fields": [
        {
          "id": "goodboys",
          "name": "number of times he has been called a good boy",
          "type": "Number",
          "localized": false,
          "required": false,
          "validations": [],
          "disabled": false,
          "omitted": false
        }
      ]
    }
  ]
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 15:59:51 GMT',
  'etag',
  'W/"9386130412272337565"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  '262a9f8a928cc0e6be573b443edc4cfa',
  'Content-Length',
  '554',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=pLbLjKtpT3ab6WiZJJlqInfWDV8AAAAAQUIPAAAAAADG4WmZu2j7d6mJa/1xrSOe; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=uIhrRWdD6l+rUeB8KsJtVwAAAACbllGV8+3dHzi1YakHnp/i; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=0xCxKEO2szwmyvlMOoVtA3fWDV8AAAAAwAPcF1qSUMiqOa2CklRAcA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '14-26992803-26992809 NNNN CT(89 90 0) RT(1594742391249 29) q(0 0 2 -1) r(4 4) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/content_types/dog/editor_interface')
  .reply(200, {
  "sys": {
    "id": "default",
    "type": "EditorInterface",
    "space": {
      "sys": {
        "id": "bohepdihyxin",
        "type": "Link",
        "linkType": "Space"
      }
    },
    "version": 4,
    "createdAt": "2020-07-14T15:59:37.648Z",
    "createdBy": {
      "sys": {
        "id": "1Y7O5FbAkPYgNvD0MpQoAE",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2020-07-14T15:59:50.994Z",
    "updatedBy": {
      "sys": {
        "id": "1Y7O5FbAkPYgNvD0MpQoAE",
        "type": "Link",
        "linkType": "User"
      }
    },
    "contentType": {
      "sys": {
        "id": "dog",
        "type": "Link",
        "linkType": "ContentType"
      }
    },
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    }
  },
  "controls": [
    {
      "fieldId": "goodboys"
    }
  ]
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 15:59:52 GMT',
  'etag',
  '"15450428136113776622"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'dbf9419de9d6d7a2c18c902a2534b8a1',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=cZWbMZXWQdi6dFkA9nQTynjWDV8AAAAAQUIPAAAAAABhDl46ZJtXwXVXVtjlQGwx; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=JHzffeAaeDw0Q8jXKsJtVwAAAABNHvAkhgMK0SZgUqnKi0E4; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=4kUbTuNI5W/zyvlMOoVtA3jWDV8AAAAALEvSTg9AxioBIVRgIIWjqA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '3-6341882-6341886 NNYN CT(85 88 0) RT(1594742391883 34) q(0 0 1 -1) r(6 6) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/locales')
  .query({"limit":"100","order":"sys.createdAt","skip":"0"})
  .reply(200, {
  "total":1,
  "limit":100,
  "skip":0,
  "sys":{
    "type":"Array"
  },
  "items":[
    {
      "name":"U.S. English",
      "internal_code":"en-US",
      "code":"en-US",
      "fallbackCode":null,
      "default":true,
      "contentManagementApi":true,
      "contentDeliveryApi":true,
      "optional":false,
      "sys":{
        "type":"Locale",
        "id":"0zK7OynpqVdcSetOBfe5P8",
        "version":1,
        "space":{
          "sys":{
            "type":"Link",
            "linkType":"Space",
            "id":"bohepdihyxin"
          }
        },
        "environment":{
          "sys":{
            "type":"Link",
            "linkType":"Environment",
            "id":"env-integration"
          }
        },
        "createdAt":"2020-07-14T15:59:32Z",
        "updatedAt":"2020-07-14T15:59:32Z"
      }
    }
  ]
}

, [
  'accept-ranges',
  'bytes',
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cache-control',
  'max-age=0',
  'cf-organization-id',
  '3ubGFD1MWA6VgVYbIwSBg8',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 15:59:53 GMT',
  'etag',
  'W/"f22cb9b177121e851327f03346d48b93"',
  'referrer-policy',
  'strict-origin-when-cross-origin',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'x-content-type-options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'a2a9ccdbb76bc98d5eb2419ffaba1671',
  'x-download-options',
  'noopen',
  'x-frame-options',
  'ALLOWALL',
  'x-permitted-cross-domain-policies',
  'none',
  'x-xss-protection',
  '1; mode=block',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=9KK7gnHJTHu4VAAyqP8O5HnWDV8AAAAAQUIPAAAAAACxDPRZ7RIgoxzIQevBtOc2; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=RK8xQa0wql2FlS+nKsJtVwAAAADGHGkS0FA9sEx+5vsS96xS; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=fVvyHS/b8Fhky/lMOoVtA3nWDV8AAAAATPPNg/VfYzgdty23GMy1IA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '14-26993287-26993296 NNYN CT(87 87 0) RT(1594742392713 33) q(0 0 2 -1) r(3 3) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/dog', {"name":"Friendly dog","displayField":null,"fields":[{"id":"goodboys","name":"number of times he has been called a good boy","type":"Number","localized":false,"required":false,"validations":[],"disabled":false,"omitted":false,"newId":"aDifferentId"}],"description":"Who's a good boy? He is!"})
  .reply(200, {
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "bohepdihyxin"
      }
    },
    "id": "dog",
    "type": "ContentType",
    "createdAt": "2020-07-14T15:59:36.539Z",
    "updatedAt": "2020-07-14T15:59:53.832Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 7,
    "publishedAt": "2020-07-14T15:59:50.905Z",
    "firstPublishedAt": "2020-07-14T15:59:37.439Z",
    "createdBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "publishedCounter": 4,
    "version": 9,
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    }
  },
  "displayField": null,
  "name": "Friendly dog",
  "description": "Who's a good boy? He is!",
  "fields": [
    {
      "id": "aDifferentId",
      "name": "number of times he has been called a good boy",
      "type": "Number",
      "localized": false,
      "required": false,
      "validations": [],
      "disabled": false,
      "omitted": false
    }
  ]
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 15:59:53 GMT',
  'etag',
  'W/"15185963368281600899"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  'c1d23ed915eb9fb089984b9ab4b645da',
  'Content-Length',
  '501',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=wmPzWPcCRKC8MyCVTZbYRHnWDV8AAAAAQUIPAAAAAABCEPz6+BOV9bIrzl8g28lf; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=GYm1d87YTHCRJf+CKsJtVwAAAAB3WC0BgeWDBiYk/uMUUG91; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=9aWgXfRnJnXsy/lMOoVtA3nWDV8AAAAANmrmWOh1/wsSVRHA4i9TqQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '14-26993392-26993400 NNNN CT(87 88 0) RT(1594742393149 32) q(0 0 2 -1) r(4 4) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/dog/published')
  .reply(200, {
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "bohepdihyxin"
      }
    },
    "id": "dog",
    "type": "ContentType",
    "createdAt": "2020-07-14T15:59:36.539Z",
    "updatedAt": "2020-07-14T15:59:54.396Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 9,
    "publishedAt": "2020-07-14T15:59:54.396Z",
    "firstPublishedAt": "2020-07-14T15:59:37.439Z",
    "createdBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "publishedCounter": 5,
    "version": 10,
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    }
  },
  "displayField": null,
  "name": "Friendly dog",
  "description": "Who's a good boy? He is!",
  "fields": [
    {
      "id": "aDifferentId",
      "name": "number of times he has been called a good boy",
      "type": "Number",
      "localized": false,
      "required": false,
      "validations": [],
      "disabled": false,
      "omitted": false
    }
  ]
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 15:59:54 GMT',
  'etag',
  'W/"842318945658093321"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'e82def8b65f9bd38a6288c8f6b3bcd63',
  'Content-Length',
  '497',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=IPjUYtalR2yRQbTEquKDDnrWDV8AAAAAQUIPAAAAAABPdMlG+JQd7m2Ro+F9A94Z; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=CJIwBUR5uRFNQJhqKsJtVwAAAAC3FDFQ2d+94tq6vwKhPhXJ; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=ro3tXk1MIQN1zPlMOoVtA3rWDV8AAAAAB1Qa0kIsw9zPLip1RjxLLA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '14-26993562-26993574 NNNN CT(92 92 0) RT(1594742393737 32) q(0 0 2 -1) r(5 5) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/dog/editor_interface', {"controls":[{"fieldId":"aDifferentId"}]})
  .reply(200, {"controls":[{"fieldId":"aDifferentId"}],"sys":{"id":"default","type":"EditorInterface","space":{"sys":{"id":"bohepdihyxin","type":"Link","linkType":"Space"}},"version":6,"createdAt":"2020-07-14T15:59:37.648Z","createdBy":{"sys":{"id":"1Y7O5FbAkPYgNvD0MpQoAE","type":"Link","linkType":"User"}},"updatedAt":"2020-07-14T15:59:55.024Z","updatedBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"contentType":{"sys":{"id":"dog","type":"Link","linkType":"ContentType"}},"environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}}}}, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 15:59:55 GMT',
  'etag',
  '"15999300434070215171"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  'cd9a472c99d7a23a083beb45ae36454e',
  'Content-Length',
  '922',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=BpL5xxg8Sv6LoBV2Zlyz5nrWDV8AAAAAQUIPAAAAAADgevRrfHs8UeiJePYQq0vA; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=M7n+GhRN0jnsD2gJKsJtVwAAAABM26uZzYYevZL6sVQurZor; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=4gD2NW2a+XEAzflMOoVtA3rWDV8AAAAAiWNwa5kTMtjXxsw2Wu61hg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '13-20312908-20312918 NNNN CT(94 102 0) RT(1594742394334 28) q(0 0 2 -1) r(4 4) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/dog', {"name":"Friendly dog","displayField":null,"fields":[{"id":"aDifferentId","name":"ID switching is fun!","type":"Number","localized":false,"required":false,"validations":[],"disabled":false,"omitted":false}],"description":"Who's a good boy? He is!"})
  .reply(200, {
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "bohepdihyxin"
      }
    },
    "id": "dog",
    "type": "ContentType",
    "createdAt": "2020-07-14T15:59:36.539Z",
    "updatedAt": "2020-07-14T15:59:55.496Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 9,
    "publishedAt": "2020-07-14T15:59:54.396Z",
    "firstPublishedAt": "2020-07-14T15:59:37.439Z",
    "createdBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "publishedCounter": 5,
    "version": 11,
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    }
  },
  "displayField": null,
  "name": "Friendly dog",
  "description": "Who's a good boy? He is!",
  "fields": [
    {
      "id": "aDifferentId",
      "name": "ID switching is fun!",
      "type": "Number",
      "localized": false,
      "required": false,
      "validations": [],
      "disabled": false,
      "omitted": false
    }
  ]
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 15:59:55 GMT',
  'etag',
  'W/"8017555108429248175"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '701abbe551cb748aa335ec02e2c23fb8',
  'Content-Length',
  '493',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=MgRhAcsyQxWxqnDOxFXWWXvWDV8AAAAAQUIPAAAAAADd0J5RfrGnObOZWIxSvdBA; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=89lKGunVH3/9vKSCKsJtVwAAAAC8wLMmtpGE0VcTIXU95YRy; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=LS3IGQbk62ZtzflMOoVtA3vWDV8AAAAA+y9PYCkY1PhA7g33DujqaQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '6-4138283-4138288 NNNN CT(86 88 0) RT(1594742394805 29) q(0 0 2 -1) r(4 4) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/dog/published')
  .reply(200, {
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "bohepdihyxin"
      }
    },
    "id": "dog",
    "type": "ContentType",
    "createdAt": "2020-07-14T15:59:36.539Z",
    "updatedAt": "2020-07-14T15:59:56.033Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 11,
    "publishedAt": "2020-07-14T15:59:56.033Z",
    "firstPublishedAt": "2020-07-14T15:59:37.439Z",
    "createdBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "publishedCounter": 6,
    "version": 12,
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    }
  },
  "displayField": null,
  "name": "Friendly dog",
  "description": "Who's a good boy? He is!",
  "fields": [
    {
      "id": "aDifferentId",
      "name": "ID switching is fun!",
      "type": "Number",
      "localized": false,
      "required": false,
      "validations": [],
      "disabled": false,
      "omitted": false
    }
  ]
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 15:59:56 GMT',
  'etag',
  'W/"3439410942897877923"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  'a4dae81709efd7f5aa6a741c6c58916b',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=EEIjoBdOTvWWkz7f9w2TGnvWDV8AAAAAQUIPAAAAAADNnpjY+CdyZa/h5LA4o76/; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=jeriRwxUeB6Qrm1bKsJtVwAAAACEt01HsMwiCxoeS6K2cjHe; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=pdQaOFAZRBnxzflMOoVtA3vWDV8AAAAAsb1P8d4QHbj7lkZru9NOfQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '11-13772113-13772118 NNNN CT(92 92 0) RT(1594742395369 35) q(0 0 1 -1) r(4 4) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/content_types/dog')
  .reply(200, {
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "bohepdihyxin"
      }
    },
    "id": "dog",
    "type": "ContentType",
    "createdAt": "2020-07-14T15:59:36.539Z",
    "updatedAt": "2020-07-14T15:59:56.033Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 11,
    "publishedAt": "2020-07-14T15:59:56.033Z",
    "firstPublishedAt": "2020-07-14T15:59:37.439Z",
    "createdBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "publishedCounter": 6,
    "version": 12,
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    }
  },
  "displayField": null,
  "name": "Friendly dog",
  "description": "Who's a good boy? He is!",
  "fields": [
    {
      "id": "aDifferentId",
      "name": "ID switching is fun!",
      "type": "Number",
      "localized": false,
      "required": false,
      "validations": [],
      "disabled": false,
      "omitted": false
    }
  ]
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 15:59:56 GMT',
  'etag',
  'W/"3439410942897877923"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '49b82039f6ad20656b651e8e84fbf6c1',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=IUFOpOcVTxWdPWt4uy08enzWDV8AAAAAQUIPAAAAAAC5TwgT2cHCOPZciXXy4uNg; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=SXc5Dp+qjiWE3rSSKsJtVwAAAAD8gO0r/Gjuhh1aUK+Ivbin; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=06LmLfLFriNVzvlMOoVtA3zWDV8AAAAAGDV3RU8IWpVHVXbs3bhtOw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '14-26993985-26993999 NNNN CT(92 93 0) RT(1594742395985 34) q(0 0 2 -1) r(3 3) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/content_types')
  .query({"limit":"100","order":"sys.createdAt","sys.id%5Bin%5D":"dog","skip":"0"})
  .reply(200, {
  "sys": {
    "type": "Array"
  },
  "total": 1,
  "skip": 0,
  "limit": 100,
  "items": [
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "bohepdihyxin"
          }
        },
        "id": "dog",
        "type": "ContentType",
        "createdAt": "2020-07-14T15:59:36.539Z",
        "updatedAt": "2020-07-14T15:59:56.033Z",
        "environment": {
          "sys": {
            "id": "env-integration",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 11,
        "publishedAt": "2020-07-14T15:59:56.033Z",
        "firstPublishedAt": "2020-07-14T15:59:37.439Z",
        "createdBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "1Y7O5FbAkPYgNvD0MpQoAE"
          }
        },
        "updatedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "1Y7O5FbAkPYgNvD0MpQoAE"
          }
        },
        "publishedCounter": 6,
        "version": 12,
        "publishedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "1Y7O5FbAkPYgNvD0MpQoAE"
          }
        }
      },
      "displayField": null,
      "name": "Friendly dog",
      "description": "Who's a good boy? He is!",
      "fields": [
        {
          "id": "aDifferentId",
          "name": "ID switching is fun!",
          "type": "Number",
          "localized": false,
          "required": false,
          "validations": [],
          "disabled": false,
          "omitted": false
        }
      ]
    }
  ]
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 15:59:57 GMT',
  'etag',
  'W/"8887087949937762504"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '003fca335606a3442a12b33a769de32d',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=QhRs+4/sRZyf94zshQDrLX3WDV8AAAAAQUIPAAAAAADTbk79E8unF/qoFKyY+9s1; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=sp7dWrIEVTrLhWOQKsJtVwAAAACR6iZuekECsii71TSVQ6Gv; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=dCIQGCxh9hDtzvlMOoVtA33WDV8AAAAA+Jysg08/uR8qo5gqVb/5HA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '14-26994187-26994197 NNNN CT(89 89 0) RT(1594742396597 33) q(0 0 2 -1) r(4 4) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/entries')
  .query({"sys.contentType.sys.id":"dog"})
  .reply(200, {
  "sys": {
    "type": "Array"
  },
  "total": 0,
  "skip": 0,
  "limit": 100,
  "items": []
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 15:59:58 GMT',
  'etag',
  '"10440568906820546102"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'fe026f330bf11ffc85d25817ea16edb8',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=tDEUiu1aTca4umAn4cU6in7WDV8AAAAAQUIPAAAAAADMh0WrAaDwrzZruIJsOtN4; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=+TvIadbkLzpbjWTRKsJtVwAAAAAiylykoapWoQ2iJblQfQJW; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=Y/+Cc/RJAnj+z/lMOoVtA37WDV8AAAAAUf1EyBlajdwHRDtcAgYbyw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '3-6342343-6342346 NNYN CT(93 92 0) RT(1594742397999 33) q(0 0 2 -1) r(4 4) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/locales')
  .query({"limit":"100","order":"sys.createdAt","skip":"0"})
  .reply(200, {
  "total":1,
  "limit":100,
  "skip":0,
  "sys":{
    "type":"Array"
  },
  "items":[
    {
      "name":"U.S. English",
      "internal_code":"en-US",
      "code":"en-US",
      "fallbackCode":null,
      "default":true,
      "contentManagementApi":true,
      "contentDeliveryApi":true,
      "optional":false,
      "sys":{
        "type":"Locale",
        "id":"0zK7OynpqVdcSetOBfe5P8",
        "version":1,
        "space":{
          "sys":{
            "type":"Link",
            "linkType":"Space",
            "id":"bohepdihyxin"
          }
        },
        "environment":{
          "sys":{
            "type":"Link",
            "linkType":"Environment",
            "id":"env-integration"
          }
        },
        "createdAt":"2020-07-14T15:59:32Z",
        "updatedAt":"2020-07-14T15:59:32Z"
      }
    }
  ]
}

, [
  'accept-ranges',
  'bytes',
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cache-control',
  'max-age=0',
  'cf-organization-id',
  '3ubGFD1MWA6VgVYbIwSBg8',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 15:59:59 GMT',
  'etag',
  'W/"f22cb9b177121e851327f03346d48b93"',
  'referrer-policy',
  'strict-origin-when-cross-origin',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'x-content-type-options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '58e984e0646233224b931f6459a33d5f',
  'x-download-options',
  'noopen',
  'x-frame-options',
  'ALLOWALL',
  'x-permitted-cross-domain-policies',
  'none',
  'x-xss-protection',
  '1; mode=block',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=AWTr5EwjTXW0mJousuQUR37WDV8AAAAAQUIPAAAAAABblnV8G8amFvwF81mot5w1; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=U5UVSNzcMDEYlgDqKsJtVwAAAAAgK93uPh+3/d2Xir5+RpxP; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=y3PzQOJSJy2G0PlMOoVtA37WDV8AAAAAsKnBpzD+M07K5j4z6yzu9g==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '14-26994692-26994698 NNYN CT(91 94 0) RT(1594742398665 33) q(0 0 2 -1) r(3 3) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .delete('/spaces/bohepdihyxin/environments/env-integration/content_types/dog/published')
  .reply(200, {
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "bohepdihyxin"
      }
    },
    "id": "dog",
    "type": "ContentType",
    "createdAt": "2020-07-14T15:59:36.539Z",
    "updatedAt": "2020-07-14T15:59:59.855Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "firstPublishedAt": "2020-07-14T15:59:37.439Z",
    "createdBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "publishedCounter": 6,
    "version": 13
  },
  "displayField": null,
  "name": "Friendly dog",
  "description": "Who's a good boy? He is!",
  "fields": [
    {
      "id": "aDifferentId",
      "name": "ID switching is fun!",
      "type": "Number",
      "localized": false,
      "required": false,
      "validations": [],
      "disabled": false,
      "omitted": false
    }
  ]
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 15:59:59 GMT',
  'etag',
  'W/"66922666318594733"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  'b8cfd56f6b59904bb00fa656b80af780',
  'Content-Length',
  '464',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=kr3ZSEDBT/+l2465hCEOGn/WDV8AAAAAQUIPAAAAAAAvS/Ew3URZMuF88X+sOXMa; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=pKKIB3S5tVXdYbR5KsJtVwAAAAB2oEtAiyuu1E+4GJVYdt/D; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=QfpvEcnvnDQr0flMOoVtA3/WDV8AAAAAymuvfkaZIJLBWGWVJsiMUw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '13-20314000-20314008 NNNN CT(95 94 0) RT(1594742399157 35) q(0 0 2 -1) r(5 5) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .delete('/spaces/bohepdihyxin/environments/env-integration/content_types/dog')
  .reply(204, "", [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 16:00:00 GMT',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'a9ae1b2ceee0d7d1a9b9f3829f3eaadf',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=vfxlVFFER82m1tgwReV9P4DWDV8AAAAAQUIPAAAAAAAOvJezPnjkv4nrR0WE6s47; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=8mUIVLTGTiFS37KAKsJtVwAAAADddc5CLyaoPKyXomU00czQ; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=AcrNf+laxAvf0flMOoVtA4DWDV8AAAAAaolQU+F2PupOeXbi5KB9DQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '10-8159648-8159651 NNNN CT(86 89 0) RT(1594742399883 28) q(0 0 1 -1) r(3 3) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/content_types/dog')
  .reply(404, {
  "sys": {
    "type": "Error",
    "id": "NotFound"
  },
  "message": "The resource could not be found.",
  "details": {
    "type": "ContentType",
    "id": "dog",
    "environment": "env-integration",
    "space": "bohepdihyxin"
  },
  "requestId": "5a99d8971677027743d159b16ebe2dce"
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 16:00:01 GMT',
  'etag',
  '"11653283982414078269"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  '5a99d8971677027743d159b16ebe2dce',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=Cp8otIDRQIK684BgrX3TCoHWDV8AAAAAQUIPAAAAAACcZoxveZOKIO6gE8HKSe3S; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=GpenVaAI109Cb3+QKsJtVwAAAABtkpG/t5Kg1WXWIbAjz+6r; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=20u2GNf7ETe/0vlMOoVtA4HWDV8AAAAA1QeyymRCgn4VSYIce2Mo+Q==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '14-26995266-26995275 NNYN CT(95 114 0) RT(1594742400355 32) q(0 0 2 -1) r(8 8) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/content_types')
  .query({"limit":"100","order":"sys.createdAt","sys.id%5Bin%5D":"dieatary-food","skip":"0"})
  .reply(200, {
  "sys": {
    "type": "Array"
  },
  "total": 0,
  "skip": 0,
  "limit": 100,
  "items": []
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 16:00:02 GMT',
  'etag',
  '"10440568906820546102"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'becf84e251588beefdb8b326714ab917',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=a2w6rRupTbK2RBq2YQIa74HWDV8AAAAAQUIPAAAAAACDfLNxLbfZA6D5iRjwXaeT; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=l2ktGyBKITz8BNLRKsJtVwAAAABDzRw3aIFOg8rLhReyPPrV; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=T3TMFgLlwBF80/lMOoVtA4HWDV8AAAAAcjM1xWTQ3fl5jsAQgr95GQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '9-5257053-5257059 NNYN CT(89 98 0) RT(1594742401299 32) q(0 0 2 -1) r(4 4) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/locales')
  .query({"limit":"100","order":"sys.createdAt","skip":"0"})
  .reply(200, {
  "total":1,
  "limit":100,
  "skip":0,
  "sys":{
    "type":"Array"
  },
  "items":[
    {
      "name":"U.S. English",
      "internal_code":"en-US",
      "code":"en-US",
      "fallbackCode":null,
      "default":true,
      "contentManagementApi":true,
      "contentDeliveryApi":true,
      "optional":false,
      "sys":{
        "type":"Locale",
        "id":"0zK7OynpqVdcSetOBfe5P8",
        "version":1,
        "space":{
          "sys":{
            "type":"Link",
            "linkType":"Space",
            "id":"bohepdihyxin"
          }
        },
        "environment":{
          "sys":{
            "type":"Link",
            "linkType":"Environment",
            "id":"env-integration"
          }
        },
        "createdAt":"2020-07-14T15:59:32Z",
        "updatedAt":"2020-07-14T15:59:32Z"
      }
    }
  ]
}

, [
  'accept-ranges',
  'bytes',
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cache-control',
  'max-age=0',
  'cf-organization-id',
  '3ubGFD1MWA6VgVYbIwSBg8',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 16:00:02 GMT',
  'etag',
  'W/"f22cb9b177121e851327f03346d48b93"',
  'referrer-policy',
  'strict-origin-when-cross-origin',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'x-content-type-options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '230767b423139ffe7ad6cd1b8c46ac33',
  'x-download-options',
  'noopen',
  'x-frame-options',
  'ALLOWALL',
  'x-permitted-cross-domain-policies',
  'none',
  'x-xss-protection',
  '1; mode=block',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=kOObGLkIQK2AZ0adYZ8PYYLWDV8AAAAAQUIPAAAAAACtGNokjhvrJlI3KBx8+RZf; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=IA2aX1vV4gXzputJKsJtVwAAAABDV6X/y1jI8AcjnW1HWsFl; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=I3trKVwJT1GF1PlMOoVtA4LWDV8AAAAA7Xt54Wds0QO020oJ0luWOQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '10-8159833-8159834 NNYN CT(96 191 0) RT(1594742401948 43) q(0 0 3 -1) r(5 5) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/dieatary-food', {"name":"Dieatary Food","fields":[{"id":"name","type":"Symbol","name":"name of the food","validations":[{"unique":true},{"prohibitRegexp":{"pattern":"foo","flags":null},"message":"asdf"}]},{"id":"calories","type":"Link","linkType":"Asset","name":"amount of calories the food contains","validations":[{"assetImageDimensions":{"width":{"min":1199,"max":null},"height":{"min":1343}}}]}],"description":"Food with up to 500 calories"})
  .reply(201, {"sys":{"space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"id":"dieatary-food","type":"ContentType","createdAt":"2020-07-14T16:00:03.504Z","updatedAt":"2020-07-14T16:00:03.504Z","environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}},"createdBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"updatedBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"publishedCounter":0,"version":1},"displayField":null,"name":"Dieatary Food","description":"Food with up to 500 calories","fields":[{"id":"name","name":"name of the food","type":"Symbol","localized":false,"required":false,"validations":[{"unique":true},{"prohibitRegexp":{"pattern":"foo","flags":null},"message":"asdf"}],"disabled":false,"omitted":false},{"id":"calories","name":"amount of calories the food contains","type":"Link","localized":false,"required":false,"validations":[{"assetImageDimensions":{"width":{"min":1199,"max":null},"height":{"min":1343}}}],"disabled":false,"omitted":false,"linkType":"Asset"}]}, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 16:00:03 GMT',
  'etag',
  '"15413338736341783902"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '0b97b16ec3277d4f1a0fa048e6b0be2c',
  'Content-Length',
  '1783',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=ADyB8FhITRyP8qmSwvP8/4PWDV8AAAAAQUIPAAAAAADhCIAlSsAJVLbDGmKArqRu; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=6o6XO6xNvGzC+UwMKsJtVwAAAAAYwuWwrdUdXVEU1yR8Q9P0; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=j/qcJntJlW1z1flMOoVtA4PWDV8AAAAASKgtjZERqImYFDcGSL3V5g==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '8-2535089-2535091 NNNN CT(93 93 0) RT(1594742402528 34) q(0 0 2 -1) r(7 7) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/dieatary-food/published')
  .reply(200, {
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "bohepdihyxin"
      }
    },
    "id": "dieatary-food",
    "type": "ContentType",
    "createdAt": "2020-07-14T16:00:03.504Z",
    "updatedAt": "2020-07-14T16:00:04.219Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "createdBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "publishedCounter": 1,
    "version": 2,
    "firstPublishedAt": "2020-07-14T16:00:04.219Z",
    "publishedAt": "2020-07-14T16:00:04.219Z",
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "publishedVersion": 1
  },
  "displayField": null,
  "name": "Dieatary Food",
  "description": "Food with up to 500 calories",
  "fields": [
    {
      "id": "name",
      "name": "name of the food",
      "type": "Symbol",
      "localized": false,
      "required": false,
      "validations": [
        {
          "unique": true
        },
        {
          "prohibitRegexp": {
            "pattern": "foo",
            "flags": null
          },
          "message": "asdf"
        }
      ],
      "disabled": false,
      "omitted": false
    },
    {
      "id": "calories",
      "name": "amount of calories the food contains",
      "type": "Link",
      "localized": false,
      "required": false,
      "validations": [
        {
          "assetImageDimensions": {
            "width": {
              "min": 1199,
              "max": null
            },
            "height": {
              "min": 1343
            }
          }
        }
      ],
      "disabled": false,
      "omitted": false,
      "linkType": "Asset"
    }
  ]
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 16:00:04 GMT',
  'etag',
  'W/"4656321227028868333"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'df68e3150365081b05877238f5c20d75',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=Ht6TNMdrQ7qyqjrYCAkViITWDV8AAAAAQUIPAAAAAAD9y1xEfB66m0dZS1GFMDWf; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=qrMcS+D7+DpGGsvYKsJtVwAAAAAWB4Azx+960RAb8F94un45; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=oXkCcl5e2VU41vlMOoVtA4TWDV8AAAAAQ8ACF4F5ae8Jb3oblfl7xg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '14-26996189-26996199 NNNN CT(85 89 0) RT(1594742403567 37) q(0 0 1 -1) r(4 4) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/content_types/dieatary-food')
  .reply(200, {
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "bohepdihyxin"
      }
    },
    "id": "dieatary-food",
    "type": "ContentType",
    "createdAt": "2020-07-14T16:00:03.504Z",
    "updatedAt": "2020-07-14T16:00:04.219Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 1,
    "publishedAt": "2020-07-14T16:00:04.219Z",
    "firstPublishedAt": "2020-07-14T16:00:04.219Z",
    "createdBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "publishedCounter": 1,
    "version": 2,
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    }
  },
  "displayField": null,
  "name": "Dieatary Food",
  "description": "Food with up to 500 calories",
  "fields": [
    {
      "id": "name",
      "name": "name of the food",
      "type": "Symbol",
      "localized": false,
      "required": false,
      "validations": [
        {
          "unique": true
        },
        {
          "prohibitRegexp": {
            "pattern": "foo",
            "flags": null
          },
          "message": "asdf"
        }
      ],
      "disabled": false,
      "omitted": false
    },
    {
      "id": "calories",
      "name": "amount of calories the food contains",
      "type": "Link",
      "localized": false,
      "required": false,
      "validations": [
        {
          "assetImageDimensions": {
            "width": {
              "min": 1199,
              "max": null
            },
            "height": {
              "min": 1343
            }
          }
        }
      ],
      "disabled": false,
      "omitted": false,
      "linkType": "Asset"
    }
  ]
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 16:00:04 GMT',
  'etag',
  'W/"16093084401735594068"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  '8012195717abd244f9a240d4d99f2596',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=ivAfQPC+RjWrGHcZljI5BoTWDV8AAAAAQUIPAAAAAAB2q1DCiEl9GeHwoKQmgqno; expires=Wed, 14 Jul 2021 14:42:27 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=JQLxA2LikS+K8UUrKsJtVwAAAADJuMhH2dSYim0jBHwADrPH; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=D7BRIZix6XPM1vlMOoVtA4TWDV8AAAAA2CP3FRDuOIpkA+977hGeoQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '5-13524477-13524480 NNNN CT(93 94 0) RT(1594742404175 29) q(0 0 1 -1) r(3 3) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/content_types')
  .query({"limit":"100","order":"sys.createdAt","sys.id%5Bin%5D":"food","skip":"0"})
  .reply(200, {
  "sys": {
    "type": "Array"
  },
  "total": 0,
  "skip": 0,
  "limit": 100,
  "items": []
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 16:00:05 GMT',
  'etag',
  '"10440568906820546102"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'a563163d440e1209d748070a5b1e2e05',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=7WCgrfj5TuSYTq3biJ0KF4XWDV8AAAAAQUIPAAAAAACbJi28u9sFs2ESX6nLaWr8; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=XozpKkFt02BK3e/hKsJtVwAAAABk+eRDy0e2E3LiVVO8j1KJ; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=hBeMCy4AzTyT1/lMOoVtA4XWDV8AAAAATsdnMh2+V7bVFf+v/N3DZA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '14-26996563-26996576 NNYN CT(94 95 0) RT(1594742404777 33) q(0 0 2 -1) r(3 3) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/locales')
  .query({"limit":"100","order":"sys.createdAt","skip":"0"})
  .reply(200, {
  "total":1,
  "limit":100,
  "skip":0,
  "sys":{
    "type":"Array"
  },
  "items":[
    {
      "name":"U.S. English",
      "internal_code":"en-US",
      "code":"en-US",
      "fallbackCode":null,
      "default":true,
      "contentManagementApi":true,
      "contentDeliveryApi":true,
      "optional":false,
      "sys":{
        "type":"Locale",
        "id":"0zK7OynpqVdcSetOBfe5P8",
        "version":1,
        "space":{
          "sys":{
            "type":"Link",
            "linkType":"Space",
            "id":"bohepdihyxin"
          }
        },
        "environment":{
          "sys":{
            "type":"Link",
            "linkType":"Environment",
            "id":"env-integration"
          }
        },
        "createdAt":"2020-07-14T15:59:32Z",
        "updatedAt":"2020-07-14T15:59:32Z"
      }
    }
  ]
}

, [
  'accept-ranges',
  'bytes',
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cache-control',
  'max-age=0',
  'cf-organization-id',
  '3ubGFD1MWA6VgVYbIwSBg8',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 16:00:05 GMT',
  'etag',
  'W/"f22cb9b177121e851327f03346d48b93"',
  'referrer-policy',
  'strict-origin-when-cross-origin',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'x-content-type-options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  '8d8b1facc92aae56f5907e0d2eb6a6c3',
  'x-download-options',
  'noopen',
  'x-frame-options',
  'ALLOWALL',
  'x-permitted-cross-domain-policies',
  'none',
  'x-xss-protection',
  '1; mode=block',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=kL7/myIoQl+ryqlCr9R3YoXWDV8AAAAAQUIPAAAAAABHlYFqUrmp8Ihc8PZ+Nkyn; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=N8rXDewtdH+7Ysf1KsJtVwAAAAAUnMbDvRMdn8hAVAq2DpMI; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=vdDndbIhhRHv1/lMOoVtA4XWDV8AAAAAwzjL8gKzCtQNZujA1vCFRQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '9-5257277-5257278 NNYN CT(93 94 0) RT(1594742405255 32) q(0 0 2 -1) r(3 3) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/food', {"name":"foooood","displayField":"taste","fields":[{"id":"taste","type":"Symbol","name":"what it tastes like"}],"description":" well, food"})
  .reply(201, {"sys":{"space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"id":"food","type":"ContentType","createdAt":"2020-07-14T16:00:06.759Z","updatedAt":"2020-07-14T16:00:06.759Z","environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}},"createdBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"updatedBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"publishedCounter":0,"version":1},"displayField":"taste","name":"foooood","description":" well, food","fields":[{"id":"taste","name":"what it tastes like","type":"Symbol","localized":false,"required":false,"validations":[],"disabled":false,"omitted":false}]}, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 16:00:07 GMT',
  'etag',
  '"15268465080734638946"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '30ef18e9d880dd5b959bd6ae8d50f749',
  'Content-Length',
  '1064',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=JKPWlgyVSsu8ZEuqlL1Ki4bWDV8AAAAAQUIPAAAAAACpXBeLRhM9Adt9D8CvMKCe; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=WPfqTgIe3luQwUbAKsJtVwAAAACNx3bD5vax9JW5Y+TqXoD2; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=VA+obCIayiwD2flMOoVtA4bWDV8AAAAAWOQ20itC2nwJ9ABbBkb6Mg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '10-8160343-8160345 NNNN CT(100 101 0) RT(1594742405817 36) q(0 0 2 -1) r(9 9) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/food/published')
  .reply(200, {
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "bohepdihyxin"
      }
    },
    "id": "food",
    "type": "ContentType",
    "createdAt": "2020-07-14T16:00:06.759Z",
    "updatedAt": "2020-07-14T16:00:07.633Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "createdBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "publishedCounter": 1,
    "version": 2,
    "firstPublishedAt": "2020-07-14T16:00:07.633Z",
    "publishedAt": "2020-07-14T16:00:07.633Z",
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "publishedVersion": 1
  },
  "displayField": "taste",
  "name": "foooood",
  "description": " well, food",
  "fields": [
    {
      "id": "taste",
      "name": "what it tastes like",
      "type": "Symbol",
      "localized": false,
      "required": false,
      "validations": [],
      "disabled": false,
      "omitted": false
    }
  ]
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 16:00:07 GMT',
  'etag',
  'W/"16233065968810141319"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'fd3730b89ee7485dfc4df3f6f86c1788',
  'Content-Length',
  '447',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=06xmQA4FRLSjHjYk0LhA1YfWDV8AAAAAQUIPAAAAAABiS7r7st3EQ0SWX4oMhwFl; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=aETrZGv9GSt9GcPrKsJtVwAAAAAHP7woNzqxTxlyZCNzNKSC; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=LybBUEUbT0Ip2vlMOoVtA4fWDV8AAAAArQjoHkjS5og/fJI2ib6eMw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '7-7156655-7156659 NNNN CT(93 94 0) RT(1594742406825 27) q(0 0 2 -1) r(7 7) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/content_types')
  .query({"limit":"100","order":"sys.createdAt","sys.id%5Bin%5D":"food","skip":"0"})
  .reply(200, {
  "sys": {
    "type": "Array"
  },
  "total": 1,
  "skip": 0,
  "limit": 100,
  "items": [
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "bohepdihyxin"
          }
        },
        "id": "food",
        "type": "ContentType",
        "createdAt": "2020-07-14T16:00:06.759Z",
        "updatedAt": "2020-07-14T16:00:07.633Z",
        "environment": {
          "sys": {
            "id": "env-integration",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 1,
        "publishedAt": "2020-07-14T16:00:07.633Z",
        "firstPublishedAt": "2020-07-14T16:00:07.633Z",
        "createdBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "1Y7O5FbAkPYgNvD0MpQoAE"
          }
        },
        "updatedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "1Y7O5FbAkPYgNvD0MpQoAE"
          }
        },
        "publishedCounter": 1,
        "version": 2,
        "publishedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "1Y7O5FbAkPYgNvD0MpQoAE"
          }
        }
      },
      "displayField": "taste",
      "name": "foooood",
      "description": " well, food",
      "fields": [
        {
          "id": "taste",
          "name": "what it tastes like",
          "type": "Symbol",
          "localized": false,
          "required": false,
          "validations": [],
          "disabled": false,
          "omitted": false
        }
      ]
    }
  ]
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 16:00:08 GMT',
  'etag',
  'W/"7080602346270485044"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '96e4d0ba759ca5ea968d45207cafa9f8',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=1dxme0LlQwOdzFjnTX4RaIjWDV8AAAAAQUIPAAAAAAACRjHDtnM8W7HNtgm+sG+7; expires=Wed, 14 Jul 2021 14:42:27 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=Wi7/MFFTmUUOv8PGKsJtVwAAAAAtXXvGZ2SddrCe7XlFBQLE; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=NwwXNgILCWXT2vlMOoVtA4jWDV8AAAAAWm+MfFz0unPSOb2IJS/wsA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '5-13525235-13525239 NNNN CT(87 87 0) RT(1594742407657 28) q(0 0 2 -1) r(5 5) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/locales')
  .query({"limit":"100","order":"sys.createdAt","skip":"0"})
  .reply(200, {
  "total":1,
  "limit":100,
  "skip":0,
  "sys":{
    "type":"Array"
  },
  "items":[
    {
      "name":"U.S. English",
      "internal_code":"en-US",
      "code":"en-US",
      "fallbackCode":null,
      "default":true,
      "contentManagementApi":true,
      "contentDeliveryApi":true,
      "optional":false,
      "sys":{
        "type":"Locale",
        "id":"0zK7OynpqVdcSetOBfe5P8",
        "version":1,
        "space":{
          "sys":{
            "type":"Link",
            "linkType":"Space",
            "id":"bohepdihyxin"
          }
        },
        "environment":{
          "sys":{
            "type":"Link",
            "linkType":"Environment",
            "id":"env-integration"
          }
        },
        "createdAt":"2020-07-14T15:59:32Z",
        "updatedAt":"2020-07-14T15:59:32Z"
      }
    }
  ]
}

, [
  'accept-ranges',
  'bytes',
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cache-control',
  'max-age=0',
  'cf-organization-id',
  '3ubGFD1MWA6VgVYbIwSBg8',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 16:00:08 GMT',
  'etag',
  'W/"f22cb9b177121e851327f03346d48b93"',
  'referrer-policy',
  'strict-origin-when-cross-origin',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'x-content-type-options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  '2e5c3d430b56c87773777ab44bcd2e6e',
  'x-download-options',
  'noopen',
  'x-frame-options',
  'ALLOWALL',
  'x-permitted-cross-domain-policies',
  'none',
  'x-xss-protection',
  '1; mode=block',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=a3sUPWjtQyexnkRrTiMBrojWDV8AAAAAQUIPAAAAAAAuOK/0FOOSuy3N7IRCYK+t; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=u/LuHsFLLy0iVFiIKsJtVwAAAACI84jHJdhUQMFgTVMfL2Uq; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=0HZCT6Gx3HRp2/lMOoVtA4jWDV8AAAAAPcj3yxYnkcd3WMpWTjbmVg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '6-4139267-4139269 NNYN CT(94 94 0) RT(1594742408293 34) q(0 0 2 -1) r(3 3) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/food', {"name":"foooood","displayField":"taste","fields":[{"id":"calories","type":"Number","name":"How many calories does it have?"},{"id":"taste","name":"what it tastes like","type":"Symbol","localized":false,"required":false,"validations":[],"disabled":false,"omitted":false},{"id":"producer","type":"Symbol","name":"Food producer"},{"id":"vegan","type":"Boolean","name":"Vegan friendly"},{"id":"gmo","type":"Boolean","name":"Genetically modified food"},{"id":"sugar","type":"Number","name":"Amount of sugar"}],"description":" well, food"})
  .reply(200, {
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "bohepdihyxin"
      }
    },
    "id": "food",
    "type": "ContentType",
    "createdAt": "2020-07-14T16:00:06.759Z",
    "updatedAt": "2020-07-14T16:00:09.600Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 1,
    "publishedAt": "2020-07-14T16:00:07.633Z",
    "firstPublishedAt": "2020-07-14T16:00:07.633Z",
    "createdBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "publishedCounter": 1,
    "version": 3,
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    }
  },
  "displayField": "taste",
  "name": "foooood",
  "description": " well, food",
  "fields": [
    {
      "id": "calories",
      "name": "How many calories does it have?",
      "type": "Number",
      "localized": false,
      "required": false,
      "validations": [],
      "disabled": false,
      "omitted": false
    },
    {
      "id": "taste",
      "name": "what it tastes like",
      "type": "Symbol",
      "localized": false,
      "required": false,
      "validations": [],
      "disabled": false,
      "omitted": false
    },
    {
      "id": "producer",
      "name": "Food producer",
      "type": "Symbol",
      "localized": false,
      "required": false,
      "validations": [],
      "disabled": false,
      "omitted": false
    },
    {
      "id": "vegan",
      "name": "Vegan friendly",
      "type": "Boolean",
      "localized": false,
      "required": false,
      "validations": [],
      "disabled": false,
      "omitted": false
    },
    {
      "id": "gmo",
      "name": "Genetically modified food",
      "type": "Boolean",
      "localized": false,
      "required": false,
      "validations": [],
      "disabled": false,
      "omitted": false
    },
    {
      "id": "sugar",
      "name": "Amount of sugar",
      "type": "Number",
      "localized": false,
      "required": false,
      "validations": [],
      "disabled": false,
      "omitted": false
    }
  ]
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 16:00:09 GMT',
  'etag',
  'W/"9911136001177961075"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '38d6b0fd12646a626f3fc42bd442a7c7',
  'Content-Length',
  '592',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=LXPHq1caQ3iSPvK70XZAhonWDV8AAAAAQUIPAAAAAADBSphDazpGxai2EKUVmGYc; expires=Wed, 14 Jul 2021 14:42:27 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=PSAhE4IgQF9AqkRRKsJtVwAAAADtlaVVUxF2o3VUr0MmfoSv; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=i+nHUfGZnFMU3PlMOoVtA4nWDV8AAAAA2eSlWFksXrSire7aorQEtg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '2-3148398-3148400 NNNN CT(91 92 0) RT(1594742408883 34) q(0 0 2 -1) r(4 4) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/food/published')
  .reply(200, {
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "bohepdihyxin"
      }
    },
    "id": "food",
    "type": "ContentType",
    "createdAt": "2020-07-14T16:00:06.759Z",
    "updatedAt": "2020-07-14T16:00:10.150Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 3,
    "publishedAt": "2020-07-14T16:00:10.150Z",
    "firstPublishedAt": "2020-07-14T16:00:07.633Z",
    "createdBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "publishedCounter": 2,
    "version": 4,
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    }
  },
  "displayField": "taste",
  "name": "foooood",
  "description": " well, food",
  "fields": [
    {
      "id": "calories",
      "name": "How many calories does it have?",
      "type": "Number",
      "localized": false,
      "required": false,
      "validations": [],
      "disabled": false,
      "omitted": false
    },
    {
      "id": "taste",
      "name": "what it tastes like",
      "type": "Symbol",
      "localized": false,
      "required": false,
      "validations": [],
      "disabled": false,
      "omitted": false
    },
    {
      "id": "producer",
      "name": "Food producer",
      "type": "Symbol",
      "localized": false,
      "required": false,
      "validations": [],
      "disabled": false,
      "omitted": false
    },
    {
      "id": "vegan",
      "name": "Vegan friendly",
      "type": "Boolean",
      "localized": false,
      "required": false,
      "validations": [],
      "disabled": false,
      "omitted": false
    },
    {
      "id": "gmo",
      "name": "Genetically modified food",
      "type": "Boolean",
      "localized": false,
      "required": false,
      "validations": [],
      "disabled": false,
      "omitted": false
    },
    {
      "id": "sugar",
      "name": "Amount of sugar",
      "type": "Number",
      "localized": false,
      "required": false,
      "validations": [],
      "disabled": false,
      "omitted": false
    }
  ]
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 16:00:10 GMT',
  'etag',
  'W/"12096556430046982097"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'e9beb2f7392adb01e33090e566807fc8',
  'Content-Length',
  '598',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=497Aur0kT2SLI7+BRKu4i4nWDV8AAAAAQUIPAAAAAADPOD/QeXUtCSzuSSRRFWLL; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=t3acSRz55xnPeXGeKsJtVwAAAAA+GQZBVoc3JsaeAOkZMHTo; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=Ho2MXUq51TGm3PlMOoVtA4nWDV8AAAAAK03vMW6e+xIuBeVDgxGyxQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '13-20316599-20316603 NNNN CT(87 90 0) RT(1594742409499 32) q(0 0 2 -1) r(4 4) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/content_types/food')
  .reply(200, {
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "bohepdihyxin"
      }
    },
    "id": "food",
    "type": "ContentType",
    "createdAt": "2020-07-14T16:00:06.759Z",
    "updatedAt": "2020-07-14T16:00:10.150Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 3,
    "publishedAt": "2020-07-14T16:00:10.150Z",
    "firstPublishedAt": "2020-07-14T16:00:07.633Z",
    "createdBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "publishedCounter": 2,
    "version": 4,
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    }
  },
  "displayField": "taste",
  "name": "foooood",
  "description": " well, food",
  "fields": [
    {
      "id": "calories",
      "name": "How many calories does it have?",
      "type": "Number",
      "localized": false,
      "required": false,
      "validations": [],
      "disabled": false,
      "omitted": false
    },
    {
      "id": "taste",
      "name": "what it tastes like",
      "type": "Symbol",
      "localized": false,
      "required": false,
      "validations": [],
      "disabled": false,
      "omitted": false
    },
    {
      "id": "producer",
      "name": "Food producer",
      "type": "Symbol",
      "localized": false,
      "required": false,
      "validations": [],
      "disabled": false,
      "omitted": false
    },
    {
      "id": "vegan",
      "name": "Vegan friendly",
      "type": "Boolean",
      "localized": false,
      "required": false,
      "validations": [],
      "disabled": false,
      "omitted": false
    },
    {
      "id": "gmo",
      "name": "Genetically modified food",
      "type": "Boolean",
      "localized": false,
      "required": false,
      "validations": [],
      "disabled": false,
      "omitted": false
    },
    {
      "id": "sugar",
      "name": "Amount of sugar",
      "type": "Number",
      "localized": false,
      "required": false,
      "validations": [],
      "disabled": false,
      "omitted": false
    }
  ]
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 16:00:10 GMT',
  'etag',
  'W/"12096556430046982097"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  'd5ccddd28526754a9ca5207ddbbd87a1',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=WIqLlSzwTIeYLyrtkzxqEYrWDV8AAAAAQUIPAAAAAABax6W89IulkYAqvvIlbwRw; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=zMeWeTXBNypk2eXNKsJtVwAAAAA1YKEXRqQT8g3UJ+LNZbpL; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=hlBkW/JGGwwa3flMOoVtA4rWDV8AAAAAzJNEiDzNU0POE8jfYgJiWw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '12-17400737-17400746 NNNN CT(86 87 0) RT(1594742410119 29) q(0 0 2 -1) r(3 3) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/content_types')
  .query({"limit":"100","order":"sys.createdAt","sys.id%5Bin%5D":"person%2Canimal","skip":"0"})
  .reply(200, {
  "sys": {
    "type": "Array"
  },
  "total": 0,
  "skip": 0,
  "limit": 100,
  "items": []
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 16:00:11 GMT',
  'etag',
  '"10440568906820546102"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'f1605e9f522a2546c91b245389e4e5a9',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=3/tEWI+eR7iIqaSdkJe42YrWDV8AAAAAQUIPAAAAAAAfPLh7Rc0ef26m0IF84rx7; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=lRj7N2P7WAlXZTatKsJtVwAAAADB+X1vzVCfumlcfYwTHCVW; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=p1eMc07YpjiI3flMOoVtA4rWDV8AAAAAQdaZbqraYsYtrdbmZbuniA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '10-8160816-8160824 NNYN CT(86 86 0) RT(1594742410556 34) q(0 0 2 -1) r(4 4) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/locales')
  .query({"limit":"100","order":"sys.createdAt","skip":"0"})
  .reply(200, {
  "total":1,
  "limit":100,
  "skip":0,
  "sys":{
    "type":"Array"
  },
  "items":[
    {
      "name":"U.S. English",
      "internal_code":"en-US",
      "code":"en-US",
      "fallbackCode":null,
      "default":true,
      "contentManagementApi":true,
      "contentDeliveryApi":true,
      "optional":false,
      "sys":{
        "type":"Locale",
        "id":"0zK7OynpqVdcSetOBfe5P8",
        "version":1,
        "space":{
          "sys":{
            "type":"Link",
            "linkType":"Space",
            "id":"bohepdihyxin"
          }
        },
        "environment":{
          "sys":{
            "type":"Link",
            "linkType":"Environment",
            "id":"env-integration"
          }
        },
        "createdAt":"2020-07-14T15:59:32Z",
        "updatedAt":"2020-07-14T15:59:32Z"
      }
    }
  ]
}

, [
  'accept-ranges',
  'bytes',
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cache-control',
  'max-age=0',
  'cf-organization-id',
  '3ubGFD1MWA6VgVYbIwSBg8',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 16:00:12 GMT',
  'etag',
  'W/"f22cb9b177121e851327f03346d48b93"',
  'referrer-policy',
  'strict-origin-when-cross-origin',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'x-content-type-options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  '76f3c68a18346ad72cd1752273ab6ade',
  'x-download-options',
  'noopen',
  'x-frame-options',
  'ALLOWALL',
  'x-permitted-cross-domain-policies',
  'none',
  'x-xss-protection',
  '1; mode=block',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=HPt8k8MeTbG8EFD/C1edWozWDV8AAAAAQUIPAAAAAACC2MJe+hRCyFv/iXiWwWWv; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=4LIMS21oXWk7lTs+KsJtVwAAAAB4csAv/cy3MrVpS6hSVR/4; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=AtebUKSRyFaH3vlMOoVtA4zWDV8AAAAAq5HfNUgbGZAo1h4cMkLVPA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '12-17400958-17400971 NNYN CT(93 94 0) RT(1594742411129 35) q(0 0 2 -1) r(9 9) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/person', {"name":"Person","fields":[{"id":"age","name":"Age","type":"Number","required":true},{"id":"fullName","name":"Full name","type":"Symbol","required":true,"localized":true}],"description":"A content type for a person"})
  .reply(201, {"sys":{"space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"id":"person","type":"ContentType","createdAt":"2020-07-14T16:00:12.848Z","updatedAt":"2020-07-14T16:00:12.848Z","environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}},"createdBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"updatedBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"publishedCounter":0,"version":1},"displayField":null,"name":"Person","description":"A content type for a person","fields":[{"id":"age","name":"Age","type":"Number","localized":false,"required":true,"validations":[],"disabled":false,"omitted":false},{"id":"fullName","name":"Full name","type":"Symbol","localized":true,"required":true,"validations":[],"disabled":false,"omitted":false}]}, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 16:00:12 GMT',
  'etag',
  '"16330242251810075220"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '707cf28120102d166b5fb7633bf265c6',
  'Content-Length',
  '1269',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=xcMrXgt8Rz6FUQN/chubs4zWDV8AAAAAQUIPAAAAAABj+k4ow0Q38XG09/yIRpxD; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=UgpJYo+sZzxM+MbsKsJtVwAAAACKPbCoeVjk6jWn3fto0Gjq; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=uQA8YASQIw463/lMOoVtA4zWDV8AAAAAkIeGWsgs5nApWRDnYWeJvA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '14-26998752-26998757 NNNN CT(89 89 0) RT(1594742412175 26) q(0 0 1 -1) r(4 4) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/person/published')
  .reply(200, {
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "bohepdihyxin"
      }
    },
    "id": "person",
    "type": "ContentType",
    "createdAt": "2020-07-14T16:00:12.848Z",
    "updatedAt": "2020-07-14T16:00:13.465Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "createdBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "publishedCounter": 1,
    "version": 2,
    "firstPublishedAt": "2020-07-14T16:00:13.465Z",
    "publishedAt": "2020-07-14T16:00:13.465Z",
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "publishedVersion": 1
  },
  "displayField": null,
  "name": "Person",
  "description": "A content type for a person",
  "fields": [
    {
      "id": "age",
      "name": "Age",
      "type": "Number",
      "localized": false,
      "required": true,
      "validations": [],
      "disabled": false,
      "omitted": false
    },
    {
      "id": "fullName",
      "name": "Full name",
      "type": "Symbol",
      "localized": true,
      "required": true,
      "validations": [],
      "disabled": false,
      "omitted": false
    }
  ]
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 16:00:13 GMT',
  'etag',
  'W/"14016083358203130093"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '90268f4e860104b16199403a8e06799f',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=ns2KsNr/R6Wi9K6TGaK0W43WDV8AAAAAQUIPAAAAAADmoVzykeeOxcgSPDUt97y5; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=Z3ACWAONkFHdn8kuKsJtVwAAAACBzbC7rDdshXN3T8rdziea; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=yFo3NlT9ymL13/lMOoVtA43WDV8AAAAA6spzvyi+iCwX9IDwe+0PrQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '14-26998913-26998924 NNNN CT(93 94 0) RT(1594742412771 31) q(0 0 1 -1) r(4 4) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/animal', {"name":"Animal","fields":[{"id":"species","name":"The species of the animal","type":"Symbol","required":true},{"id":"isFurry","name":"Is this a furry animal","type":"Boolean","required":false}],"description":"An animal"})
  .reply(201, {"sys":{"space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"id":"animal","type":"ContentType","createdAt":"2020-07-14T16:00:14.117Z","updatedAt":"2020-07-14T16:00:14.117Z","environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}},"createdBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"updatedBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"publishedCounter":0,"version":1},"displayField":null,"name":"Animal","description":"An animal","fields":[{"id":"species","name":"The species of the animal","type":"Symbol","localized":false,"required":true,"validations":[],"disabled":false,"omitted":false},{"id":"isFurry","name":"Is this a furry animal","type":"Boolean","localized":false,"required":false,"validations":[],"disabled":false,"omitted":false}]}, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 16:00:14 GMT',
  'etag',
  '"14484180835877969120"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  '50f3e549b4854cc05a6800508180a741',
  'Content-Length',
  '1292',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=kg74E1ARROOp5VIim20Oo43WDV8AAAAAQUIPAAAAAADLBnizTyimLap9PCPmUwdz; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=KlWQRrtYNzG8Sx9sKsJtVwAAAACoGFsFV3Vq4xNFz8qnApi9; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=yRhgQAMBZk7I4PlMOoVtA43WDV8AAAAAw3n31VGGUyNvgSScrj2wwg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '12-17401368-17401373 NNNN CT(86 88 0) RT(1594742413395 34) q(0 0 2 -1) r(5 5) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/animal/published')
  .reply(200, {
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "bohepdihyxin"
      }
    },
    "id": "animal",
    "type": "ContentType",
    "createdAt": "2020-07-14T16:00:14.117Z",
    "updatedAt": "2020-07-14T16:00:14.874Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "createdBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "publishedCounter": 1,
    "version": 2,
    "firstPublishedAt": "2020-07-14T16:00:14.874Z",
    "publishedAt": "2020-07-14T16:00:14.874Z",
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "publishedVersion": 1
  },
  "displayField": null,
  "name": "Animal",
  "description": "An animal",
  "fields": [
    {
      "id": "species",
      "name": "The species of the animal",
      "type": "Symbol",
      "localized": false,
      "required": true,
      "validations": [],
      "disabled": false,
      "omitted": false
    },
    {
      "id": "isFurry",
      "name": "Is this a furry animal",
      "type": "Boolean",
      "localized": false,
      "required": false,
      "validations": [],
      "disabled": false,
      "omitted": false
    }
  ]
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 16:00:14 GMT',
  'etag',
  'W/"12875455613032629404"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '2abdc21340d407c8243487cab8489834',
  'Content-Length',
  '484',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=TgH49ixFRUqH4JZQy1gnLY7WDV8AAAAAQUIPAAAAAADXCaENFQXeiEQbI/incNW8; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=kfrUclZMFkp4OMnxKsJtVwAAAAAeEDHIvRMgOsQUD1i7yha/; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=5r23HhlUMgwz4vlMOoVtA47WDV8AAAAAwk9G8ChJJJSoh5gco4iahg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '11-13775311-13775316 NNNN CT(87 87 0) RT(1594742414212 34) q(0 0 2 -1) r(4 4) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/person', {"name":"Person","fields":[{"id":"age","name":"Age","type":"Number","required":true},{"id":"fullName","name":"Full name","type":"Symbol","required":true,"localized":true},{"id":"pet","name":"Their pet","type":"Link","linkType":"Entry","required":false}],"description":"A content type for a person"})
  .reply(200, {
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "bohepdihyxin"
      }
    },
    "id": "person",
    "type": "ContentType",
    "createdAt": "2020-07-14T16:00:12.848Z",
    "updatedAt": "2020-07-14T16:00:15.536Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 1,
    "publishedAt": "2020-07-14T16:00:13.465Z",
    "firstPublishedAt": "2020-07-14T16:00:13.465Z",
    "createdBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "publishedCounter": 1,
    "version": 3,
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    }
  },
  "displayField": null,
  "name": "Person",
  "description": "A content type for a person",
  "fields": [
    {
      "id": "age",
      "name": "Age",
      "type": "Number",
      "localized": false,
      "required": true,
      "validations": [],
      "disabled": false,
      "omitted": false
    },
    {
      "id": "fullName",
      "name": "Full name",
      "type": "Symbol",
      "localized": true,
      "required": true,
      "validations": [],
      "disabled": false,
      "omitted": false
    },
    {
      "id": "pet",
      "name": "Their pet",
      "type": "Link",
      "localized": false,
      "required": false,
      "validations": [],
      "disabled": false,
      "omitted": false,
      "linkType": "Entry"
    }
  ]
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 16:00:15 GMT',
  'etag',
  'W/"10179108162775744838"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '16465dc163700b20f806e5b33655ce25',
  'Content-Length',
  '519',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=b8gchYpfSmKy3gW34rzV84/WDV8AAAAAQUIPAAAAAABGmg4Xcwl4WNIYoWvE3XJG; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=Sjt0ZLd1J0mqzYfPKsJtVwAAAADCHqhNqadw97Cut32sW7ss; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=dGMeJ9GN6R7+4vlMOoVtA4/WDV8AAAAAkhC4iPPwgxntlGEW1KEviw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '12-17401776-17401784 NNNN CT(86 88 0) RT(1594742414823 31) q(0 0 2 -1) r(4 4) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/person/published')
  .reply(200, {
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "bohepdihyxin"
      }
    },
    "id": "person",
    "type": "ContentType",
    "createdAt": "2020-07-14T16:00:12.848Z",
    "updatedAt": "2020-07-14T16:00:16.138Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 3,
    "publishedAt": "2020-07-14T16:00:16.138Z",
    "firstPublishedAt": "2020-07-14T16:00:13.465Z",
    "createdBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "publishedCounter": 2,
    "version": 4,
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    }
  },
  "displayField": null,
  "name": "Person",
  "description": "A content type for a person",
  "fields": [
    {
      "id": "age",
      "name": "Age",
      "type": "Number",
      "localized": false,
      "required": true,
      "validations": [],
      "disabled": false,
      "omitted": false
    },
    {
      "id": "fullName",
      "name": "Full name",
      "type": "Symbol",
      "localized": true,
      "required": true,
      "validations": [],
      "disabled": false,
      "omitted": false
    },
    {
      "id": "pet",
      "name": "Their pet",
      "type": "Link",
      "localized": false,
      "required": false,
      "validations": [],
      "disabled": false,
      "omitted": false,
      "linkType": "Entry"
    }
  ]
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 16:00:16 GMT',
  'etag',
  'W/"7048743671037706340"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '812345aae0553a6336c09b99727ac57a',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=u/O1/pm+Sz6ZaGnlc8cM/o/WDV8AAAAAQUIPAAAAAADwj4TbtmKJo2ubm/Hc8dDa; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=3FlwRBOFYQeFNKR0KsJtVwAAAAClRVqElxvmxJ4CVXlLQ+AV; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=3wXNR8dSjUZW5PlMOoVtA4/WDV8AAAAAUndMH/ImwCSgcU3QyxoRPA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '11-13775587-13775595 NNNN CT(100 98 0) RT(1594742415437 47) q(0 0 2 -1) r(5 5) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/animal', {"name":"Animal","fields":[{"id":"species","name":"The species of the animal","type":"Symbol","required":true},{"id":"isFurry","name":"Is this a furry animal","type":"Boolean","required":false},{"id":"name","name":"The name of the animal","type":"Symbol","required":true,"localized":true}],"description":"An animal"})
  .reply(200, {
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "bohepdihyxin"
      }
    },
    "id": "animal",
    "type": "ContentType",
    "createdAt": "2020-07-14T16:00:14.117Z",
    "updatedAt": "2020-07-14T16:00:16.856Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 1,
    "publishedAt": "2020-07-14T16:00:14.874Z",
    "firstPublishedAt": "2020-07-14T16:00:14.874Z",
    "createdBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "publishedCounter": 1,
    "version": 3,
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    }
  },
  "displayField": null,
  "name": "Animal",
  "description": "An animal",
  "fields": [
    {
      "id": "species",
      "name": "The species of the animal",
      "type": "Symbol",
      "localized": false,
      "required": true,
      "validations": [],
      "disabled": false,
      "omitted": false
    },
    {
      "id": "isFurry",
      "name": "Is this a furry animal",
      "type": "Boolean",
      "localized": false,
      "required": false,
      "validations": [],
      "disabled": false,
      "omitted": false
    },
    {
      "id": "name",
      "name": "The name of the animal",
      "type": "Symbol",
      "localized": true,
      "required": true,
      "validations": [],
      "disabled": false,
      "omitted": false
    }
  ]
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 16:00:16 GMT',
  'etag',
  'W/"4762994068728274015"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  'ea7a26c65fa4151ee7f04bfa09dd5b35',
  'Content-Length',
  '510',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=46vK9mjhR7GSshgBeX3gIpDWDV8AAAAAQUIPAAAAAADgUf49qaZicPKQcSxYJ72d; expires=Wed, 14 Jul 2021 14:42:27 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=S7S8LvHztA4xkxjsKsJtVwAAAADcy5x/tuN2uFAV16rPAyKE; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=6k/LJg3fAzXq5PlMOoVtA5DWDV8AAAAAdKJKVXnnYIwAVMAjL20KCw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '5-13526433-13526437 NNNN CT(92 92 0) RT(1594742416139 32) q(0 0 2 -1) r(5 5) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/animal/published')
  .reply(200, {
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "bohepdihyxin"
      }
    },
    "id": "animal",
    "type": "ContentType",
    "createdAt": "2020-07-14T16:00:14.117Z",
    "updatedAt": "2020-07-14T16:00:17.562Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 3,
    "publishedAt": "2020-07-14T16:00:17.562Z",
    "firstPublishedAt": "2020-07-14T16:00:14.874Z",
    "createdBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "publishedCounter": 2,
    "version": 4,
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    }
  },
  "displayField": null,
  "name": "Animal",
  "description": "An animal",
  "fields": [
    {
      "id": "species",
      "name": "The species of the animal",
      "type": "Symbol",
      "localized": false,
      "required": true,
      "validations": [],
      "disabled": false,
      "omitted": false
    },
    {
      "id": "isFurry",
      "name": "Is this a furry animal",
      "type": "Boolean",
      "localized": false,
      "required": false,
      "validations": [],
      "disabled": false,
      "omitted": false
    },
    {
      "id": "name",
      "name": "The name of the animal",
      "type": "Symbol",
      "localized": true,
      "required": true,
      "validations": [],
      "disabled": false,
      "omitted": false
    }
  ]
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 16:00:17 GMT',
  'etag',
  'W/"14583803251784325129"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '912142cc064cd46080e078a78c4e1507',
  'Content-Length',
  '516',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=AdHiHH0rTcOeaZA7j18HUJHWDV8AAAAAQUIPAAAAAAC+8rgieflXfyFd8x6xXbuo; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=hxuVGngSnXfHLcbpKsJtVwAAAADLkzlZZoPJaxAu3sezZLda; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=ejTILsyxy0V25flMOoVtA5HWDV8AAAAAY5TXX/oA1En2DxfZVlUepg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '14-27000130-27000142 NNNN CT(92 93 0) RT(1594742416872 33) q(0 0 1 -1) r(4 4) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/content_types/person')
  .reply(200, {
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "bohepdihyxin"
      }
    },
    "id": "person",
    "type": "ContentType",
    "createdAt": "2020-07-14T16:00:12.848Z",
    "updatedAt": "2020-07-14T16:00:16.138Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 3,
    "publishedAt": "2020-07-14T16:00:16.138Z",
    "firstPublishedAt": "2020-07-14T16:00:13.465Z",
    "createdBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "publishedCounter": 2,
    "version": 4,
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    }
  },
  "displayField": null,
  "name": "Person",
  "description": "A content type for a person",
  "fields": [
    {
      "id": "age",
      "name": "Age",
      "type": "Number",
      "localized": false,
      "required": true,
      "validations": [],
      "disabled": false,
      "omitted": false
    },
    {
      "id": "fullName",
      "name": "Full name",
      "type": "Symbol",
      "localized": true,
      "required": true,
      "validations": [],
      "disabled": false,
      "omitted": false
    },
    {
      "id": "pet",
      "name": "Their pet",
      "type": "Link",
      "localized": false,
      "required": false,
      "validations": [],
      "disabled": false,
      "omitted": false,
      "linkType": "Entry"
    }
  ]
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 16:00:18 GMT',
  'etag',
  'W/"7048743671037706340"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '9c4bbd3ea52bb4652f3d827405211039',
  'Content-Length',
  '524',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=IoGlsfAVRhSgiv9KKBn0+5HWDV8AAAAAQUIPAAAAAADtoFYMzy3TYtM0Qo6dkDQU; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=Z0O1UlYJRmZNMpqqKsJtVwAAAADcFZUnaYPsrXe1KLcoO69i; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=S5v1Bp9ecQAK5vlMOoVtA5HWDV8AAAAAZn04Wnmmvu+Yxp6AeiTctQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '13-20318797-20318803 NNNN CT(94 93 0) RT(1594742417481 30) q(0 0 1 -1) r(4 4) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/content_types/animal')
  .reply(200, {
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "bohepdihyxin"
      }
    },
    "id": "animal",
    "type": "ContentType",
    "createdAt": "2020-07-14T16:00:14.117Z",
    "updatedAt": "2020-07-14T16:00:17.562Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 3,
    "publishedAt": "2020-07-14T16:00:17.562Z",
    "firstPublishedAt": "2020-07-14T16:00:14.874Z",
    "createdBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "publishedCounter": 2,
    "version": 4,
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    }
  },
  "displayField": null,
  "name": "Animal",
  "description": "An animal",
  "fields": [
    {
      "id": "species",
      "name": "The species of the animal",
      "type": "Symbol",
      "localized": false,
      "required": true,
      "validations": [],
      "disabled": false,
      "omitted": false
    },
    {
      "id": "isFurry",
      "name": "Is this a furry animal",
      "type": "Boolean",
      "localized": false,
      "required": false,
      "validations": [],
      "disabled": false,
      "omitted": false
    },
    {
      "id": "name",
      "name": "The name of the animal",
      "type": "Symbol",
      "localized": true,
      "required": true,
      "validations": [],
      "disabled": false,
      "omitted": false
    }
  ]
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 16:00:18 GMT',
  'etag',
  'W/"14583803251784325129"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  'b2ffa317593bcad6a2c0beac001a3e6a',
  'Content-Length',
  '516',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=tbfa9gVIR92nF53Az6o42pLWDV8AAAAAQUIPAAAAAACkox6V+boqwZSnQhERNDJH; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=krubaZJD4WfFgXOmKsJtVwAAAAB3s8JVRSbTBDkjR/wO7wan; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=et11Zac2KSGX5vlMOoVtA5LWDV8AAAAAgsMa/jDTFQT+IlZSfcvIpw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '14-27000433-27000443 NNNN CT(93 93 0) RT(1594742418093 37) q(0 0 2 -1) r(4 4) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/content_types')
  .query({"limit":"100","order":"sys.createdAt","sys.id%5Bin%5D":"person%2CsomethingElse","skip":"0"})
  .reply(200, {
  "sys": {
    "type": "Array"
  },
  "total": 1,
  "skip": 0,
  "limit": 100,
  "items": [
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "bohepdihyxin"
          }
        },
        "id": "person",
        "type": "ContentType",
        "createdAt": "2020-07-14T16:00:12.848Z",
        "updatedAt": "2020-07-14T16:00:16.138Z",
        "environment": {
          "sys": {
            "id": "env-integration",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 3,
        "publishedAt": "2020-07-14T16:00:16.138Z",
        "firstPublishedAt": "2020-07-14T16:00:13.465Z",
        "createdBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "1Y7O5FbAkPYgNvD0MpQoAE"
          }
        },
        "updatedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "1Y7O5FbAkPYgNvD0MpQoAE"
          }
        },
        "publishedCounter": 2,
        "version": 4,
        "publishedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "1Y7O5FbAkPYgNvD0MpQoAE"
          }
        }
      },
      "displayField": null,
      "name": "Person",
      "description": "A content type for a person",
      "fields": [
        {
          "id": "age",
          "name": "Age",
          "type": "Number",
          "localized": false,
          "required": true,
          "validations": [],
          "disabled": false,
          "omitted": false
        },
        {
          "id": "fullName",
          "name": "Full name",
          "type": "Symbol",
          "localized": true,
          "required": true,
          "validations": [],
          "disabled": false,
          "omitted": false
        },
        {
          "id": "pet",
          "name": "Their pet",
          "type": "Link",
          "localized": false,
          "required": false,
          "validations": [],
          "disabled": false,
          "omitted": false,
          "linkType": "Entry"
        }
      ]
    }
  ]
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 16:00:19 GMT',
  'etag',
  'W/"3162401999013364753"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'c865830763402fd810e4943326864000',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=cmT/QXc8SPSXeMDmI+O/5JPWDV8AAAAAQUIPAAAAAAD91tdhjq8CRM0+WHT/XOuj; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=xoWZGmt2s23To4n9KsJtVwAAAADTCveOD1SZDUTaZQQaakIm; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=27jcUX0eoRs95/lMOoVtA5PWDV8AAAAAeDocZ1OV+QYvyMEbO1n0RQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '14-27000579-27000592 NNNN CT(93 93 0) RT(1594742418728 34) q(0 0 2 -1) r(4 4) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/blogpost', {"name":"blog post","fields":[{"name":"title","id":"title","type":"Symbol"},{"name":"category","id":"category","type":"Symbol"}]})
  .reply(201, {"sys":{"space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"id":"blogpost","type":"ContentType","createdAt":"2020-07-14T16:00:20.040Z","updatedAt":"2020-07-14T16:00:20.040Z","environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}},"createdBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"updatedBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"publishedCounter":0,"version":1},"displayField":null,"name":"blog post","description":null,"fields":[{"id":"title","name":"title","type":"Symbol","localized":false,"required":false,"validations":[],"disabled":false,"omitted":false},{"id":"category","name":"category","type":"Symbol","localized":false,"required":false,"validations":[],"disabled":false,"omitted":false}]}, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 16:00:20 GMT',
  'etag',
  '"8259321137694976203"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  '29e5b60fc76930e61af4405eb7ed82e2',
  'Content-Length',
  '1255',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=9Yo1ytbWSa2zyPsATu/gG5PWDV8AAAAAQUIPAAAAAACGFcorESTbPXz541JbVDNN; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=SWRrSQHVCBSh5jMEKsJtVwAAAADhVHNMyfkWAwTHQRbrbvE5; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=R66mIo6TiXjm5/lMOoVtA5PWDV8AAAAAosASahfamJnAO5mpj3lXwA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '14-27000723-27000730 NNNN CT(90 97 0) RT(1594742419229 33) q(0 0 2 -1) r(6 6) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/blogpost/published')
  .reply(200, {
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "bohepdihyxin"
      }
    },
    "id": "blogpost",
    "type": "ContentType",
    "createdAt": "2020-07-14T16:00:20.040Z",
    "updatedAt": "2020-07-14T16:00:20.617Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "createdBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "publishedCounter": 1,
    "version": 2,
    "firstPublishedAt": "2020-07-14T16:00:20.617Z",
    "publishedAt": "2020-07-14T16:00:20.617Z",
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "publishedVersion": 1
  },
  "displayField": null,
  "name": "blog post",
  "description": null,
  "fields": [
    {
      "id": "title",
      "name": "title",
      "type": "Symbol",
      "localized": false,
      "required": false,
      "validations": [],
      "disabled": false,
      "omitted": false
    },
    {
      "id": "category",
      "name": "category",
      "type": "Symbol",
      "localized": false,
      "required": false,
      "validations": [],
      "disabled": false,
      "omitted": false
    }
  ]
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 16:00:20 GMT',
  'etag',
  'W/"10082589985409053526"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '507ecd1e6e07df3b1db4bb1b7b0295ad',
  'Content-Length',
  '442',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=/vi8cm9oRgKrVG7sCMV3npTWDV8AAAAAQUIPAAAAAACX/J8R6JClwqpoPx5hpBkv; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=Ld7qcXhqCBOM4ccOKsJtVwAAAABGpNJa9j3ThfGtDZgNeza3; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=EOIlI2fqJxmn6PlMOoVtA5TWDV8AAAAAUSgHYye+OBk8nBV22hbVeg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '13-20319435-20319443 NNNN CT(98 93 0) RT(1594742419951 29) q(0 0 2 -1) r(4 4) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .post('/spaces/bohepdihyxin/environments/env-integration/entries', {"fields":{"title":{"en-US":"hello!"}}})
  .reply(201, {
  "metadata": {
    "tags": []
  },
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "bohepdihyxin"
      }
    },
    "id": "2qjlQ6dEAo5bEW5SI1PAKv",
    "type": "Entry",
    "createdAt": "2020-07-14T16:00:21.438Z",
    "updatedAt": "2020-07-14T16:00:21.438Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "createdBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "publishedCounter": 0,
    "version": 1,
    "contentType": {
      "sys": {
        "type": "Link",
        "linkType": "ContentType",
        "id": "blogpost"
      }
    }
  },
  "fields": {
    "title": {
      "en-US": "hello!"
    }
  }
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 16:00:21 GMT',
  'etag',
  '"12179876388851723368"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '8608cf34d658268a20f1edb9abe2ff5e',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=hFKfw897Q22NPI8hXGNlvJXWDV8AAAAAQUIPAAAAAACuwMsOPesuTA7dPLfvv5ZB; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=PKg8eJZnul1922IFKsJtVwAAAADuoocFNlgHjEZFLPmFGl9f; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=iwzeXZ0Kug2A6flMOoVtA5XWDV8AAAAACoKP3Uyx1cxp6Z2XkH9/qQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '13-20319608-20319615 NNYN CT(86 87 0) RT(1594742420559 41) q(0 1 2 -1) r(8 8) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .post('/spaces/bohepdihyxin/environments/env-integration/entries', {"fields":{"title":{"en-US":"hello!"}}})
  .reply(201, {
  "metadata": {
    "tags": []
  },
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "bohepdihyxin"
      }
    },
    "id": "4FiuEf8CqgsbY1ZI4wBg0X",
    "type": "Entry",
    "createdAt": "2020-07-14T16:00:22.276Z",
    "updatedAt": "2020-07-14T16:00:22.276Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "createdBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "publishedCounter": 0,
    "version": 1,
    "contentType": {
      "sys": {
        "type": "Link",
        "linkType": "ContentType",
        "id": "blogpost"
      }
    }
  },
  "fields": {
    "title": {
      "en-US": "hello!"
    }
  }
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 16:00:22 GMT',
  'etag',
  '"11652420770846934910"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '99ac7c3d2ef272d8201ff37376a17788',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=l/TSLR9oR7WORW/jJ6afOpbWDV8AAAAAQUIPAAAAAAAfBXqDcMkKaZXWR0AWwGIC; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=ZfEKD3vtZ0hkiOpiKsJtVwAAAAA0x1e/NDzZ5H+xTNMEmElV; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=7tyaa7uPmAkj6vlMOoVtA5bWDV8AAAAAKFJ6DiUhgHqVeoPbv6W3kg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '14-27001504-27001510 NNYN CT(95 93 0) RT(1594742421585 32) q(0 0 2 -1) r(4 4) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/content_types')
  .query({"limit":"100","order":"sys.createdAt","sys.id%5Bin%5D":"blogpost","skip":"0"})
  .reply(200, {
  "sys": {
    "type": "Array"
  },
  "total": 1,
  "skip": 0,
  "limit": 100,
  "items": [
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "bohepdihyxin"
          }
        },
        "id": "blogpost",
        "type": "ContentType",
        "createdAt": "2020-07-14T16:00:20.040Z",
        "updatedAt": "2020-07-14T16:00:20.617Z",
        "environment": {
          "sys": {
            "id": "env-integration",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 1,
        "publishedAt": "2020-07-14T16:00:20.617Z",
        "firstPublishedAt": "2020-07-14T16:00:20.617Z",
        "createdBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "1Y7O5FbAkPYgNvD0MpQoAE"
          }
        },
        "updatedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "1Y7O5FbAkPYgNvD0MpQoAE"
          }
        },
        "publishedCounter": 1,
        "version": 2,
        "publishedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "1Y7O5FbAkPYgNvD0MpQoAE"
          }
        }
      },
      "displayField": null,
      "name": "blog post",
      "description": null,
      "fields": [
        {
          "id": "title",
          "name": "title",
          "type": "Symbol",
          "localized": false,
          "required": false,
          "validations": [],
          "disabled": false,
          "omitted": false
        },
        {
          "id": "category",
          "name": "category",
          "type": "Symbol",
          "localized": false,
          "required": false,
          "validations": [],
          "disabled": false,
          "omitted": false
        }
      ]
    }
  ]
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 16:00:22 GMT',
  'etag',
  'W/"16271660349285021501"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  '4e0f1768b91321ffe436665c9b1c5dd8',
  'Content-Length',
  '513',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=EGmNxaXjRtCir90iMqUp35bWDV8AAAAAQUIPAAAAAACGMCNYn8i7cVp2VCuzJH7Q; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=2i05LQ+zuAMVym1XKsJtVwAAAAA68YVWqud0EwOz0g2iUsLc; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=djRbN8jZ3xCl6vlMOoVtA5bWDV8AAAAAzzNbfy1jV0JrCTfRitx/tQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '13-20319989-20320008 NNNN CT(96 97 0) RT(1594742422200 32) q(0 0 2 -1) r(3 3) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/entries')
  .query({"limit":"100","order":"sys.createdAt","sys.archivedAt%5Bexists%5D":"false","sys.contentType.sys.id%5Bin%5D":"blogpost","skip":"0"})
  .reply(200, {
  "sys": {
    "type": "Array"
  },
  "total": 2,
  "skip": 0,
  "limit": 100,
  "items": [
    {
      "metadata": {
        "tags": []
      },
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "bohepdihyxin"
          }
        },
        "id": "2qjlQ6dEAo5bEW5SI1PAKv",
        "type": "Entry",
        "createdAt": "2020-07-14T16:00:21.438Z",
        "updatedAt": "2020-07-14T16:00:21.438Z",
        "environment": {
          "sys": {
            "id": "env-integration",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "createdBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "1Y7O5FbAkPYgNvD0MpQoAE"
          }
        },
        "updatedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "1Y7O5FbAkPYgNvD0MpQoAE"
          }
        },
        "publishedCounter": 0,
        "version": 1,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "blogpost"
          }
        }
      },
      "fields": {
        "title": {
          "en-US": "hello!"
        }
      }
    },
    {
      "metadata": {
        "tags": []
      },
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "bohepdihyxin"
          }
        },
        "id": "4FiuEf8CqgsbY1ZI4wBg0X",
        "type": "Entry",
        "createdAt": "2020-07-14T16:00:22.276Z",
        "updatedAt": "2020-07-14T16:00:22.276Z",
        "environment": {
          "sys": {
            "id": "env-integration",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "createdBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "1Y7O5FbAkPYgNvD0MpQoAE"
          }
        },
        "updatedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "1Y7O5FbAkPYgNvD0MpQoAE"
          }
        },
        "publishedCounter": 0,
        "version": 1,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "blogpost"
          }
        }
      },
      "fields": {
        "title": {
          "en-US": "hello!"
        }
      }
    }
  ]
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 16:00:23 GMT',
  'etag',
  'W/"15682920442187095777"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '9bd30e17cd926e6c97c87915bbbcb821',
  'Content-Length',
  '480',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=1zv9t5FQTn+Q4nDivGs23JfWDV8AAAAAQUIPAAAAAADNv1RND3igPJNiLAih4U/D; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=MbQDSAC8EG4gxxDiKsJtVwAAAAA7l5K6SNGIFhC+civsUIje; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=2UzSR98WWQ8L6/lMOoVtA5fWDV8AAAAArISDhwAqwKr3umMCuxo+Gw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '12-17403377-17403384 NNNN CT(91 91 0) RT(1594742422802 28) q(0 0 2 -1) r(3 3) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/locales')
  .query({"limit":"100","order":"sys.createdAt","skip":"0"})
  .reply(200, {
  "total":1,
  "limit":100,
  "skip":0,
  "sys":{
    "type":"Array"
  },
  "items":[
    {
      "name":"U.S. English",
      "internal_code":"en-US",
      "code":"en-US",
      "fallbackCode":null,
      "default":true,
      "contentManagementApi":true,
      "contentDeliveryApi":true,
      "optional":false,
      "sys":{
        "type":"Locale",
        "id":"0zK7OynpqVdcSetOBfe5P8",
        "version":1,
        "space":{
          "sys":{
            "type":"Link",
            "linkType":"Space",
            "id":"bohepdihyxin"
          }
        },
        "environment":{
          "sys":{
            "type":"Link",
            "linkType":"Environment",
            "id":"env-integration"
          }
        },
        "createdAt":"2020-07-14T15:59:32Z",
        "updatedAt":"2020-07-14T15:59:32Z"
      }
    }
  ]
}

, [
  'accept-ranges',
  'bytes',
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cache-control',
  'max-age=0',
  'cf-organization-id',
  '3ubGFD1MWA6VgVYbIwSBg8',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 16:00:23 GMT',
  'etag',
  'W/"f22cb9b177121e851327f03346d48b93"',
  'referrer-policy',
  'strict-origin-when-cross-origin',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'x-content-type-options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  '87497f5eae995c7049637bc6915000b5',
  'x-download-options',
  'noopen',
  'x-frame-options',
  'ALLOWALL',
  'x-permitted-cross-domain-policies',
  'none',
  'x-xss-protection',
  '1; mode=block',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=XbhF9m3KQKG5V+PEie9tKpfWDV8AAAAAQUIPAAAAAADxJEvg+c7EIo2PiiR/yeWA; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=+BjiHLVBIiv2T16wKsJtVwAAAADK30NbV+VH81bZrbmLIfHw; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=Kf3fJj0kkxJi6/lMOoVtA5fWDV8AAAAAys3SuUL9RIyrbqYgvNX7Gw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '13-20320282-20320292 NNYN CT(92 93 0) RT(1594742423323 27) q(0 0 2 -1) r(3 3) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/entries/2qjlQ6dEAo5bEW5SI1PAKv', {"sys":{"id":"2qjlQ6dEAo5bEW5SI1PAKv","version":1,"contentType":{"sys":{"type":"Link","linkType":"ContentType","id":"blogpost"}}},"fields":{"title":{"en-US":"hello!"},"category":{"en-US":"hello!"}}})
  .reply(200, {
  "metadata": {
    "tags": []
  },
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "bohepdihyxin"
      }
    },
    "id": "2qjlQ6dEAo5bEW5SI1PAKv",
    "type": "Entry",
    "createdAt": "2020-07-14T16:00:21.438Z",
    "updatedAt": "2020-07-14T16:00:25.435Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "createdBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "publishedCounter": 0,
    "version": 2,
    "contentType": {
      "sys": {
        "type": "Link",
        "linkType": "ContentType",
        "id": "blogpost"
      }
    }
  },
  "fields": {
    "title": {
      "en-US": "hello!"
    },
    "category": {
      "en-US": "hello!"
    }
  }
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 16:00:25 GMT',
  'etag',
  'W/"14136653011521110968"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '0c80431b6a62b2e865ded6bf7443258e',
  'Content-Length',
  '388',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=oTStHoA8T9i7eOjydXrmYZnWDV8AAAAAQUIPAAAAAACF2VPRy5ifp6/nAtNxd8UL; expires=Wed, 14 Jul 2021 14:42:27 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=8qRsU9I43UxFZDbwKsJtVwAAAAA4Lh5vwVk+ZvqBgzD/ajZN; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=Nu80exeLD04G7flMOoVtA5nWDV8AAAAA7dF6UXsr8p3uht6U1BbpWw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '5-13527812-13527814 NNNN CT(88 89 0) RT(1594742424725 33) q(0 0 2 -1) r(4 4) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/entries/2qjlQ6dEAo5bEW5SI1PAKv/published')
  .reply(200, {
  "metadata": {
    "tags": []
  },
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "bohepdihyxin"
      }
    },
    "id": "2qjlQ6dEAo5bEW5SI1PAKv",
    "type": "Entry",
    "createdAt": "2020-07-14T16:00:21.438Z",
    "updatedAt": "2020-07-14T16:00:25.937Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 2,
    "publishedAt": "2020-07-14T16:00:25.937Z",
    "firstPublishedAt": "2020-07-14T16:00:25.937Z",
    "createdBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "publishedCounter": 1,
    "version": 3,
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "contentType": {
      "sys": {
        "type": "Link",
        "linkType": "ContentType",
        "id": "blogpost"
      }
    }
  },
  "fields": {
    "title": {
      "en-US": "hello!"
    },
    "category": {
      "en-US": "hello!"
    }
  }
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 16:00:26 GMT',
  'etag',
  'W/"17433361460839943386"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  'de193f6889634667eb4fbee7910fa2e2',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=vWm3EeYnTDOW/L4R9BSB15nWDV8AAAAAQUIPAAAAAAAHPUw/sQobSItBOvWpUQkR; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=BK2yQZsntHqdp8qmKsJtVwAAAADGau+rX/ekoPWN6ejVG6J1; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=uAKqYjoJxHWb7flMOoVtA5nWDV8AAAAA3riaz6+ICDAOUAizUVIJzA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '12-17403866-17403871 NNNN CT(87 88 0) RT(1594742425275 40) q(0 0 1 -1) r(4 4) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/entries/4FiuEf8CqgsbY1ZI4wBg0X', {"sys":{"id":"4FiuEf8CqgsbY1ZI4wBg0X","version":1,"contentType":{"sys":{"type":"Link","linkType":"ContentType","id":"blogpost"}}},"fields":{"title":{"en-US":"hello!"},"category":{"en-US":"hello!"}}})
  .reply(200, {
  "metadata": {
    "tags": []
  },
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "bohepdihyxin"
      }
    },
    "id": "4FiuEf8CqgsbY1ZI4wBg0X",
    "type": "Entry",
    "createdAt": "2020-07-14T16:00:22.276Z",
    "updatedAt": "2020-07-14T16:00:26.581Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "createdBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "publishedCounter": 0,
    "version": 2,
    "contentType": {
      "sys": {
        "type": "Link",
        "linkType": "ContentType",
        "id": "blogpost"
      }
    }
  },
  "fields": {
    "title": {
      "en-US": "hello!"
    },
    "category": {
      "en-US": "hello!"
    }
  }
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 16:00:26 GMT',
  'etag',
  'W/"18207385812785737405"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'b646ad90e571e8b1e5b1cbb51b293226',
  'Content-Length',
  '388',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=LbikgXKqRMecMscsno2dMprWDV8AAAAAQUIPAAAAAABqP1obzHERyQrJt/hqS5Ol; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=atkAViFUkAfG5LAqKsJtVwAAAACPM40uQetAlM6H5SrCOESL; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=gg45FpI6CiUs7vlMOoVtA5rWDV8AAAAAHJZQthT6NeH/IlDQZbjMBw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '6-4140346-4140349 NNNN CT(94 94 0) RT(1594742425886 34) q(0 0 2 -1) r(4 4) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/entries/4FiuEf8CqgsbY1ZI4wBg0X/published')
  .reply(200, {
  "metadata": {
    "tags": []
  },
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "bohepdihyxin"
      }
    },
    "id": "4FiuEf8CqgsbY1ZI4wBg0X",
    "type": "Entry",
    "createdAt": "2020-07-14T16:00:22.276Z",
    "updatedAt": "2020-07-14T16:00:27.168Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 2,
    "publishedAt": "2020-07-14T16:00:27.168Z",
    "firstPublishedAt": "2020-07-14T16:00:27.168Z",
    "createdBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "publishedCounter": 1,
    "version": 3,
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "contentType": {
      "sys": {
        "type": "Link",
        "linkType": "ContentType",
        "id": "blogpost"
      }
    }
  },
  "fields": {
    "title": {
      "en-US": "hello!"
    },
    "category": {
      "en-US": "hello!"
    }
  }
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 16:00:27 GMT',
  'etag',
  'W/"16244480329112468108"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'b804595fe31d40f3c3fb1d9b160c41f0',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=VHXrfMKGQsWZftSMjTm8jZrWDV8AAAAAQUIPAAAAAABExbX9oUDGgRPkDfY+NVv7; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=ZyNoDQGnOXCOlK8ZKsJtVwAAAAAa5ZJH2jIeNM7AA4dSDb/Y; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=3RrdDlGY5gTv7vlMOoVtA5rWDV8AAAAA1RzzSIdKl9eYAvzdyaE8Hg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '6-4140409-4140417 NNNN CT(93 94 0) RT(1594742426494 36) q(0 0 2 -1) r(4 4) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/entries')
  .query({"content_type":"blogpost"})
  .reply(200, {
  "sys": {
    "type": "Array"
  },
  "total": 2,
  "skip": 0,
  "limit": 100,
  "items": [
    {
      "metadata": {
        "tags": []
      },
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "bohepdihyxin"
          }
        },
        "id": "4FiuEf8CqgsbY1ZI4wBg0X",
        "type": "Entry",
        "createdAt": "2020-07-14T16:00:22.276Z",
        "updatedAt": "2020-07-14T16:00:27.168Z",
        "environment": {
          "sys": {
            "id": "env-integration",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 2,
        "publishedAt": "2020-07-14T16:00:27.168Z",
        "firstPublishedAt": "2020-07-14T16:00:27.168Z",
        "createdBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "1Y7O5FbAkPYgNvD0MpQoAE"
          }
        },
        "updatedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "1Y7O5FbAkPYgNvD0MpQoAE"
          }
        },
        "publishedCounter": 1,
        "version": 3,
        "publishedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "1Y7O5FbAkPYgNvD0MpQoAE"
          }
        },
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "blogpost"
          }
        }
      },
      "fields": {
        "title": {
          "en-US": "hello!"
        },
        "category": {
          "en-US": "hello!"
        }
      }
    },
    {
      "metadata": {
        "tags": []
      },
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "bohepdihyxin"
          }
        },
        "id": "2qjlQ6dEAo5bEW5SI1PAKv",
        "type": "Entry",
        "createdAt": "2020-07-14T16:00:21.438Z",
        "updatedAt": "2020-07-14T16:00:25.937Z",
        "environment": {
          "sys": {
            "id": "env-integration",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 2,
        "publishedAt": "2020-07-14T16:00:25.937Z",
        "firstPublishedAt": "2020-07-14T16:00:25.937Z",
        "createdBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "1Y7O5FbAkPYgNvD0MpQoAE"
          }
        },
        "updatedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "1Y7O5FbAkPYgNvD0MpQoAE"
          }
        },
        "publishedCounter": 1,
        "version": 3,
        "publishedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "1Y7O5FbAkPYgNvD0MpQoAE"
          }
        },
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "blogpost"
          }
        }
      },
      "fields": {
        "title": {
          "en-US": "hello!"
        },
        "category": {
          "en-US": "hello!"
        }
      }
    }
  ]
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 16:00:27 GMT',
  'etag',
  'W/"12336269207667690128"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  '16ba8cf930617e25968f8d0a5c780949',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=bmye7nzuQdae9KN3UYTec5vWDV8AAAAAQUIPAAAAAADKZuf24gdDkfuJ5+QCb1Fr; expires=Wed, 14 Jul 2021 14:42:27 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=puwRIeuiRQN3USAFKsJtVwAAAAAfrn3dtstLlEcr/Rl2XBXc; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=TCprP1SUF21V7/lMOoVtA5vWDV8AAAAAoyWY9HSGQHFjLqsiDR83pA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '2-3148973-3148974 NNNN CT(93 95 0) RT(1594742427110 30) q(0 0 2 -1) r(3 3) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/content_types')
  .query({"limit":"100","order":"sys.createdAt","sys.id%5Bin%5D":"blogPost","skip":"0"})
  .reply(200, {
  "sys": {
    "type": "Array"
  },
  "total": 0,
  "skip": 0,
  "limit": 100,
  "items": []
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 16:00:28 GMT',
  'etag',
  '"10440568906820546102"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '902cbc61fd10f77cf11d5bf2689e0d5d',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=Mfe98czcQl+MJeT1PiuAyJzWDV8AAAAAQUIPAAAAAADrK8GcM1Fasyua5ljJqlUA; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=c5P4SQWVNC1s+3WNKsJtVwAAAADDUxDyrQHCBGyqBfIZX6fn; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=/0NqRRYYwjzB7/lMOoVtA5zWDV8AAAAAcWPVSBTKcETMKlJ/lGv+LA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '13-20321262-20321274 NNYN CT(95 87 0) RT(1594742427631 37) q(0 0 2 -1) r(4 4) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/content_types/blogPost/editor_interface')
  .reply(404, {
  "sys": {
    "type": "Error",
    "id": "NotFound"
  },
  "message": "The resource could not be found.",
  "details": {
    "type": "ContentType",
    "id": "blogPost",
    "environment": "env-integration",
    "space": "bohepdihyxin"
  },
  "requestId": "0050b204b4a09ee50189f93e52f60a67"
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 16:00:28 GMT',
  'etag',
  '"10792275763360566336"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  '0050b204b4a09ee50189f93e52f60a67',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=fGKLT+7HSQ2mv+NljeSWapzWDV8AAAAAQUIPAAAAAACo2Cox9gryCwCddRFLF01U; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=pqg7cFtfmjEUCHxdKsJtVwAAAACm7fCcVOAs7Hk3AduLEqCs; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=AxwWPhzpojQ38PlMOoVtA5zWDV8AAAAAJadFZynPrwyR+quZFZ6Spg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '10-8162607-8162617 NNYN CT(97 101 0) RT(1594742428131 32) q(0 0 2 -1) r(4 4) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/locales')
  .query({"limit":"100","order":"sys.createdAt","skip":"0"})
  .reply(200, {
  "total":1,
  "limit":100,
  "skip":0,
  "sys":{
    "type":"Array"
  },
  "items":[
    {
      "name":"U.S. English",
      "internal_code":"en-US",
      "code":"en-US",
      "fallbackCode":null,
      "default":true,
      "contentManagementApi":true,
      "contentDeliveryApi":true,
      "optional":false,
      "sys":{
        "type":"Locale",
        "id":"0zK7OynpqVdcSetOBfe5P8",
        "version":1,
        "space":{
          "sys":{
            "type":"Link",
            "linkType":"Space",
            "id":"bohepdihyxin"
          }
        },
        "environment":{
          "sys":{
            "type":"Link",
            "linkType":"Environment",
            "id":"env-integration"
          }
        },
        "createdAt":"2020-07-14T15:59:32Z",
        "updatedAt":"2020-07-14T15:59:32Z"
      }
    }
  ]
}

, [
  'accept-ranges',
  'bytes',
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cache-control',
  'max-age=0',
  'cf-organization-id',
  '3ubGFD1MWA6VgVYbIwSBg8',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 16:00:29 GMT',
  'etag',
  'W/"f22cb9b177121e851327f03346d48b93"',
  'referrer-policy',
  'strict-origin-when-cross-origin',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'x-content-type-options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '14915318fc930a5866139fb2e7efb138',
  'x-download-options',
  'noopen',
  'x-frame-options',
  'ALLOWALL',
  'x-permitted-cross-domain-policies',
  'none',
  'x-xss-protection',
  '1; mode=block',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=xyPnZJpjQxCRwT4tagHZvp3WDV8AAAAAQUIPAAAAAAC3n8HbgGeMlMLlMNoI1udq; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=p1A0Nrnpj0+niCPiKsJtVwAAAAAK2RTDgoCvKvX6RlQ/ZICV; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=7i2fHJ08aVCv8PlMOoVtA53WDV8AAAAAEoEiZpmOd5IdLNVoqjkA+A==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '3-6344394-6344397 NNYN CT(87 88 0) RT(1594742428745 28) q(0 0 2 -1) r(3 3) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/blogPost', {"name":"Blog post","fields":[{"id":"slug","name":"URL Slug","type":"Symbol","required":true}],"description":"super angry"})
  .reply(201, {"sys":{"space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"id":"blogPost","type":"ContentType","createdAt":"2020-07-14T16:00:29.878Z","updatedAt":"2020-07-14T16:00:29.878Z","environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}},"createdBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"updatedBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"publishedCounter":0,"version":1},"displayField":null,"name":"Blog post","description":"super angry","fields":[{"id":"slug","name":"URL Slug","type":"Symbol","localized":false,"required":true,"validations":[],"disabled":false,"omitted":false}]}, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 16:00:29 GMT',
  'etag',
  '"14285541248354921546"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  '53e07a8b1e199fc1f84f4731c2809c81',
  'Content-Length',
  '1054',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=jzc+GF6CRX2lvm1QRNtHu53WDV8AAAAAQUIPAAAAAAD6mdLmdnrunEQslrL/SVeK; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=SOsqIb7X5Rec+BLPKsJtVwAAAACWW92r+c+2tJGlSLLeUSo3; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=+wImL6QERHk78flMOoVtA53WDV8AAAAAdjbHIruGocGLYHySjkUa/Q==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '10-8162789-8162801 NNNN CT(86 87 0) RT(1594742429165 32) q(0 0 2 -1) r(5 5) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/blogPost/published')
  .reply(200, {
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "bohepdihyxin"
      }
    },
    "id": "blogPost",
    "type": "ContentType",
    "createdAt": "2020-07-14T16:00:29.878Z",
    "updatedAt": "2020-07-14T16:00:30.418Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "createdBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "publishedCounter": 1,
    "version": 2,
    "firstPublishedAt": "2020-07-14T16:00:30.418Z",
    "publishedAt": "2020-07-14T16:00:30.418Z",
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "publishedVersion": 1
  },
  "displayField": null,
  "name": "Blog post",
  "description": "super angry",
  "fields": [
    {
      "id": "slug",
      "name": "URL Slug",
      "type": "Symbol",
      "localized": false,
      "required": true,
      "validations": [],
      "disabled": false,
      "omitted": false
    }
  ]
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 16:00:30 GMT',
  'etag',
  'W/"6828217408317239309"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'fd0964184f8587396253deb701dd7e83',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=5Rwupq9XSYmANLewNIyfRJ7WDV8AAAAAQUIPAAAAAACV7viHzyyHxXsqbJa8j8dT; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=XgTSJOw2KV3a13UHKsJtVwAAAAArPc3QeMOMzGYzSBvuY2J0; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=3fGsGaS8TCvv8flMOoVtA57WDV8AAAAAh/jwcW1EidIiX7N8MlRodQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '14-27003733-27003744 NNNN CT(88 88 0) RT(1594742429771 30) q(0 0 1 -1) r(4 4) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/blogPost/editor_interface', {"controls":[{"fieldId":"slug","widgetId":"slugEditor","settings":{"setting":"value"},"widgetNamespace":"builtin"}]})
  .reply(200, {
  "controls": [
    {
      "fieldId": "slug",
      "widgetId": "slugEditor",
      "settings": {
        "setting": "value"
      },
      "widgetNamespace": "builtin"
    }
  ],
  "sys": {
    "id": "default",
    "type": "EditorInterface",
    "space": {
      "sys": {
        "id": "bohepdihyxin",
        "type": "Link",
        "linkType": "Space"
      }
    },
    "version": 2,
    "createdAt": "2020-07-14T16:00:30.513Z",
    "createdBy": {
      "sys": {
        "id": "1Y7O5FbAkPYgNvD0MpQoAE",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2020-07-14T16:00:31.070Z",
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "contentType": {
      "sys": {
        "id": "blogPost",
        "type": "Link",
        "linkType": "ContentType"
      }
    },
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    }
  }
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 16:00:31 GMT',
  'etag',
  'W/"12431943504097401511"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  '035225c93d25c14f48124b72b0ea6cc1',
  'Content-Length',
  '383',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=ptOdz+bIRpu5Ob6KPLiRaZ7WDV8AAAAAQUIPAAAAAACdZa69o2wpvpZkRUwLeJ8h; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=xzDLZYpdvHUw5JPcKsJtVwAAAABVuhxenlvViAFcJuAq0Q4F; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=tHI+VjxlaVZi8vlMOoVtA57WDV8AAAAAEbn8qSRweacFE0gk1fVzvw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '12-17404847-17404861 NNNN CT(88 88 0) RT(1594742430391 33) q(0 0 2 -1) r(4 4) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/content_types/blogPost/editor_interface')
  .reply(200, {
  "sys": {
    "id": "default",
    "type": "EditorInterface",
    "space": {
      "sys": {
        "id": "bohepdihyxin",
        "type": "Link",
        "linkType": "Space"
      }
    },
    "version": 2,
    "createdAt": "2020-07-14T16:00:30.513Z",
    "createdBy": {
      "sys": {
        "id": "1Y7O5FbAkPYgNvD0MpQoAE",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2020-07-14T16:00:31.070Z",
    "updatedBy": {
      "sys": {
        "id": "1Y7O5FbAkPYgNvD0MpQoAE",
        "type": "Link",
        "linkType": "User"
      }
    },
    "contentType": {
      "sys": {
        "id": "blogPost",
        "type": "Link",
        "linkType": "ContentType"
      }
    },
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    }
  },
  "controls": [
    {
      "fieldId": "slug",
      "settings": {
        "setting": "value"
      },
      "widgetId": "slugEditor",
      "widgetNamespace": "builtin"
    }
  ]
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 16:00:31 GMT',
  'etag',
  'W/"4178674710576013527"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '0acebafaa9789ae827c4419e9d721c83',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=2wYvZepAQRigtSUz3CiFhZ/WDV8AAAAAQUIPAAAAAACggh9koRylZym4jtwJzgu/; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=PqMLa79ukjw2MoJnKsJtVwAAAAAT70apzpx/4IliPy/C2oxk; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=noFJFYAKB0Tw8vlMOoVtA5/WDV8AAAAAzhs5/Uq84wUBJYmeC3yKBA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '13-20322125-20322141 NNNN CT(92 92 0) RT(1594742430999 34) q(0 0 2 -1) r(3 3) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/content_types')
  .query({"limit":"100","order":"sys.createdAt","sys.id%5Bin%5D":"blogPost","skip":"0"})
  .reply(200, {
  "sys": {
    "type": "Array"
  },
  "total": 1,
  "skip": 0,
  "limit": 100,
  "items": [
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "bohepdihyxin"
          }
        },
        "id": "blogPost",
        "type": "ContentType",
        "createdAt": "2020-07-14T16:00:29.878Z",
        "updatedAt": "2020-07-14T16:00:30.418Z",
        "environment": {
          "sys": {
            "id": "env-integration",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 1,
        "publishedAt": "2020-07-14T16:00:30.418Z",
        "firstPublishedAt": "2020-07-14T16:00:30.418Z",
        "createdBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "1Y7O5FbAkPYgNvD0MpQoAE"
          }
        },
        "updatedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "1Y7O5FbAkPYgNvD0MpQoAE"
          }
        },
        "publishedCounter": 1,
        "version": 2,
        "publishedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "1Y7O5FbAkPYgNvD0MpQoAE"
          }
        }
      },
      "displayField": null,
      "name": "Blog post",
      "description": "super angry",
      "fields": [
        {
          "id": "slug",
          "name": "URL Slug",
          "type": "Symbol",
          "localized": false,
          "required": true,
          "validations": [],
          "disabled": false,
          "omitted": false
        }
      ]
    }
  ]
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 16:00:32 GMT',
  'etag',
  'W/"15466410452043374031"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'b9eb039e75a5eab8094d8c8a84f078d1',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=ScSNCA5PTjW0qrmEB+sB/KDWDV8AAAAAQUIPAAAAAAAAv6DDO7k2IGI7Rcwa9pR0; expires=Wed, 14 Jul 2021 14:42:27 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=QZ/IQ5pUcQgvJuAGKsJtVwAAAADuIfV712h6eqULWNFL+TR8; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=+dMZI7KYeWJ98/lMOoVtA6DWDV8AAAAAC64TzCkLyG9I7Ly9Lo+6fw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '5-13528833-13528840 NNNN CT(94 93 0) RT(1594742431645 34) q(0 0 2 -1) r(4 4) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/content_types/blogPost/editor_interface')
  .reply(200, {
  "sys": {
    "id": "default",
    "type": "EditorInterface",
    "space": {
      "sys": {
        "id": "bohepdihyxin",
        "type": "Link",
        "linkType": "Space"
      }
    },
    "version": 2,
    "createdAt": "2020-07-14T16:00:30.513Z",
    "createdBy": {
      "sys": {
        "id": "1Y7O5FbAkPYgNvD0MpQoAE",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2020-07-14T16:00:31.070Z",
    "updatedBy": {
      "sys": {
        "id": "1Y7O5FbAkPYgNvD0MpQoAE",
        "type": "Link",
        "linkType": "User"
      }
    },
    "contentType": {
      "sys": {
        "id": "blogPost",
        "type": "Link",
        "linkType": "ContentType"
      }
    },
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    }
  },
  "controls": [
    {
      "fieldId": "slug",
      "settings": {
        "setting": "value"
      },
      "widgetId": "slugEditor",
      "widgetNamespace": "builtin"
    }
  ]
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 16:00:32 GMT',
  'etag',
  'W/"4178674710576013527"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  '1f41fa50686c9833c2a0da84cef404ae',
  'Content-Length',
  '370',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=rovvk8E1RLG4dhLnRlSa5aDWDV8AAAAAQUIPAAAAAAAcnibvenUaF5BC9cyn6b7G; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=pAW6UGVHvEy5tqpcKsJtVwAAAACXpd7i67D1+TWj7M3nS/CR; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=RHlfK1XWczQA9PlMOoVtA6DWDV8AAAAAJvqAg8TpNLM2Tcf+rgX2lA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '13-20322459-20322468 NNNN CT(89 89 0) RT(1594742432237 30) q(0 0 2 -1) r(4 4) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/locales')
  .query({"limit":"100","order":"sys.createdAt","skip":"0"})
  .reply(200, {
  "total":1,
  "limit":100,
  "skip":0,
  "sys":{
    "type":"Array"
  },
  "items":[
    {
      "name":"U.S. English",
      "internal_code":"en-US",
      "code":"en-US",
      "fallbackCode":null,
      "default":true,
      "contentManagementApi":true,
      "contentDeliveryApi":true,
      "optional":false,
      "sys":{
        "type":"Locale",
        "id":"0zK7OynpqVdcSetOBfe5P8",
        "version":1,
        "space":{
          "sys":{
            "type":"Link",
            "linkType":"Space",
            "id":"bohepdihyxin"
          }
        },
        "environment":{
          "sys":{
            "type":"Link",
            "linkType":"Environment",
            "id":"env-integration"
          }
        },
        "createdAt":"2020-07-14T15:59:32Z",
        "updatedAt":"2020-07-14T15:59:32Z"
      }
    }
  ]
}

, [
  'accept-ranges',
  'bytes',
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cache-control',
  'max-age=0',
  'cf-organization-id',
  '3ubGFD1MWA6VgVYbIwSBg8',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 16:00:33 GMT',
  'etag',
  'W/"f22cb9b177121e851327f03346d48b93"',
  'referrer-policy',
  'strict-origin-when-cross-origin',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'x-content-type-options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'd944676f0205147ae93b8f0436956683',
  'x-download-options',
  'noopen',
  'x-frame-options',
  'ALLOWALL',
  'x-permitted-cross-domain-policies',
  'none',
  'x-xss-protection',
  '1; mode=block',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=jlstKOAKQIG4zNVAt5hWyKHWDV8AAAAAQUIPAAAAAACtMxIb/IZ6t3f7GjiNHVf5; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=NRERW0/MhGpiWOaqKsJtVwAAAACNlTLkmuPDAFXCznGP4pya; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=/8obA85aGQGR9PlMOoVtA6HWDV8AAAAATxSEHYmMAcNCRZuHRVcCtg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '10-8163414-8163420 NNYN CT(99 100 0) RT(1594742432871 26) q(0 0 2 -1) r(4 4) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/blogPost', {"name":"Blog post","displayField":null,"fields":[{"id":"slug","name":"URL Slug","type":"Symbol","localized":false,"required":true,"validations":[],"disabled":false,"omitted":false}],"description":"super angry"})
  .reply(200, {
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "bohepdihyxin"
      }
    },
    "id": "blogPost",
    "type": "ContentType",
    "createdAt": "2020-07-14T16:00:29.878Z",
    "updatedAt": "2020-07-14T16:00:33.981Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 1,
    "publishedAt": "2020-07-14T16:00:30.418Z",
    "firstPublishedAt": "2020-07-14T16:00:30.418Z",
    "createdBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "publishedCounter": 1,
    "version": 3,
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    }
  },
  "displayField": null,
  "name": "Blog post",
  "description": "super angry",
  "fields": [
    {
      "id": "slug",
      "name": "URL Slug",
      "type": "Symbol",
      "localized": false,
      "required": true,
      "validations": [],
      "disabled": false,
      "omitted": false
    }
  ]
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 16:00:34 GMT',
  'etag',
  'W/"854256650927920123"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  '2d9236aba9250c0585499eb2f76773af',
  'Content-Length',
  '454',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=mARuKgzRS+yLnuuXl84jC6HWDV8AAAAAQUIPAAAAAABxLi4bCSmkMY8/fUBt/HSY; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=afHYT0U4Bx5yaxPaKsJtVwAAAADjUJAHgxoixE4lQIWfFc4K; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=GbocL2HAOi8A9flMOoVtA6HWDV8AAAAAd30TKFsKj9nXstD3vTobeA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '14-27004736-27004743 NNNN CT(94 97 0) RT(1594742433281 37) q(0 0 2 -1) r(4 4) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/blogPost/published')
  .reply(200, {
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "bohepdihyxin"
      }
    },
    "id": "blogPost",
    "type": "ContentType",
    "createdAt": "2020-07-14T16:00:29.878Z",
    "updatedAt": "2020-07-14T16:00:34.458Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 3,
    "publishedAt": "2020-07-14T16:00:34.458Z",
    "firstPublishedAt": "2020-07-14T16:00:30.418Z",
    "createdBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "publishedCounter": 2,
    "version": 4,
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    }
  },
  "displayField": null,
  "name": "Blog post",
  "description": "super angry",
  "fields": [
    {
      "id": "slug",
      "name": "URL Slug",
      "type": "Symbol",
      "localized": false,
      "required": true,
      "validations": [],
      "disabled": false,
      "omitted": false
    }
  ]
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 16:00:34 GMT',
  'etag',
  'W/"17196034623532127127"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'dc3ede0a328f16a30f5d1480446b14b7',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=zpc3NAcGSLuFvFBUa4gHTKLWDV8AAAAAQUIPAAAAAAD4XhaW0em6p8wxcFVSIehP; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=y05NQCS/DhYTcJhBKsJtVwAAAABWTcAW+K2ncRb1jDZIfXpR; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=3jfbH+2kxkeB9flMOoVtA6LWDV8AAAAAufwNAjmrdgA9S4NXWXUTaQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '12-17405670-17405680 NNNN CT(93 96 0) RT(1594742433793 32) q(0 0 2 -1) r(4 4) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/blogPost/editor_interface', {"controls":[]})
  .reply(200, {"controls":[],"sys":{"id":"default","type":"EditorInterface","space":{"sys":{"id":"bohepdihyxin","type":"Link","linkType":"Space"}},"version":4,"createdAt":"2020-07-14T16:00:30.513Z","createdBy":{"sys":{"id":"1Y7O5FbAkPYgNvD0MpQoAE","type":"Link","linkType":"User"}},"updatedAt":"2020-07-14T16:00:35.152Z","updatedBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"contentType":{"sys":{"id":"blogPost","type":"Link","linkType":"ContentType"}},"environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}}}}, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 16:00:35 GMT',
  'etag',
  '"15152394975435498389"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'ce90bc3f77df1c46fedcc972bff09cd0',
  'Content-Length',
  '880',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=zxR/xCXhQ7qvrNqiN9LeOKLWDV8AAAAAQUIPAAAAAACzFxgCqfjkDsjR9h2CmFq4; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=/MSNMuKKSTdEG7S1KsJtVwAAAACAiR7PZ2OCJ17Y2KG2xqIS; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=XDBTPx5yUDws9vlMOoVtA6LWDV8AAAAAg3rP7z0tuUoCHhmNT8rf3Q==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '4-9014074-9014079 NNNN CT(88 88 0) RT(1594742434484 35) q(0 0 1 -1) r(3 3) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/blogPost/editor_interface', {"controls":[{"fieldId":"slug","widgetId":"singleLine","widgetNamespace":"builtin"}]})
  .reply(200, {"controls":[{"fieldId":"slug","widgetId":"singleLine","widgetNamespace":"builtin"}],"sys":{"id":"default","type":"EditorInterface","space":{"sys":{"id":"bohepdihyxin","type":"Link","linkType":"Space"}},"version":5,"createdAt":"2020-07-14T16:00:30.513Z","createdBy":{"sys":{"id":"1Y7O5FbAkPYgNvD0MpQoAE","type":"Link","linkType":"User"}},"updatedAt":"2020-07-14T16:00:35.801Z","updatedBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"contentType":{"sys":{"id":"blogPost","type":"Link","linkType":"ContentType"}},"environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}}}}, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 16:00:35 GMT',
  'etag',
  '"1836674219385494909"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  '27d61c3e66984a0f9eca111bc9cbccc4',
  'Content-Length',
  '987',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=YwRD8gtqQI6J2VKehjYasaPWDV8AAAAAQUIPAAAAAAB59WVtTHKjp01CKM8jPaxW; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=HESsL5fGPG4b2PKpKsJtVwAAAABcN913ue9LicqIc6TzD/Sa; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=cF06Wd4z2W4V9/lMOoVtA6PWDV8AAAAAO2cW4xTQzoDqVF7QNCarRg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '14-27005258-27005266 NNNN CT(91 89 0) RT(1594742435098 34) q(0 0 2 -1) r(4 4) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/content_types/blogPost/editor_interface')
  .reply(200, {
  "sys": {
    "id": "default",
    "type": "EditorInterface",
    "space": {
      "sys": {
        "id": "bohepdihyxin",
        "type": "Link",
        "linkType": "Space"
      }
    },
    "version": 5,
    "createdAt": "2020-07-14T16:00:30.513Z",
    "createdBy": {
      "sys": {
        "id": "1Y7O5FbAkPYgNvD0MpQoAE",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2020-07-14T16:00:35.801Z",
    "updatedBy": {
      "sys": {
        "id": "1Y7O5FbAkPYgNvD0MpQoAE",
        "type": "Link",
        "linkType": "User"
      }
    },
    "contentType": {
      "sys": {
        "id": "blogPost",
        "type": "Link",
        "linkType": "ContentType"
      }
    },
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    }
  },
  "controls": [
    {
      "fieldId": "slug",
      "widgetId": "singleLine",
      "widgetNamespace": "builtin"
    }
  ]
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 16:00:36 GMT',
  'etag',
  '"15837268598995971550"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '2902406d9f48ed75a4852be5bd046277',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=GWUwtFVORuurx0ud4B7uhKPWDV8AAAAAQUIPAAAAAADJuB/28ppbxq6iiFvwpF9A; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=L75pe12yUAFqLJyGKsJtVwAAAADwU5/Z9UoJ7yFb6bPPqGfy; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=A7qeEIYdT0+L9/lMOoVtA6PWDV8AAAAALIVwtyahFABiGRBcW4OFpw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '14-27005410-27005414 NNYN CT(95 98 0) RT(1594742435617 33) q(0 0 2 -1) r(3 3) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/content_types')
  .query({"limit":"100","order":"sys.createdAt","sys.id%5Bin%5D":"blogPost","skip":"0"})
  .reply(200, {
  "sys": {
    "type": "Array"
  },
  "total": 1,
  "skip": 0,
  "limit": 100,
  "items": [
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "bohepdihyxin"
          }
        },
        "id": "blogPost",
        "type": "ContentType",
        "createdAt": "2020-07-14T16:00:29.878Z",
        "updatedAt": "2020-07-14T16:00:34.458Z",
        "environment": {
          "sys": {
            "id": "env-integration",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 3,
        "publishedAt": "2020-07-14T16:00:34.458Z",
        "firstPublishedAt": "2020-07-14T16:00:30.418Z",
        "createdBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "1Y7O5FbAkPYgNvD0MpQoAE"
          }
        },
        "updatedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "1Y7O5FbAkPYgNvD0MpQoAE"
          }
        },
        "publishedCounter": 2,
        "version": 4,
        "publishedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "1Y7O5FbAkPYgNvD0MpQoAE"
          }
        }
      },
      "displayField": null,
      "name": "Blog post",
      "description": "super angry",
      "fields": [
        {
          "id": "slug",
          "name": "URL Slug",
          "type": "Symbol",
          "localized": false,
          "required": true,
          "validations": [],
          "disabled": false,
          "omitted": false
        }
      ]
    }
  ]
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 16:00:36 GMT',
  'etag',
  'W/"10849270469145892691"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  'eda89647889b39aaabdd4ba4b92bc350',
  'Content-Length',
  '525',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=bzVklE49R0OIyr0LJWc72aTWDV8AAAAAQUIPAAAAAAB5beg/1BP/p4VQ2P7XQuAY; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=JxkpLVc1ckMUKy0lKsJtVwAAAACt+ZFQ/gnFIZHbfAd8ePku; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=1lQPDhharxEd+PlMOoVtA6TWDV8AAAAA2jXpQmeDVXsNpKGqMaz/Nw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '10-8163897-8163903 NNNN CT(93 93 0) RT(1594742436131 30) q(0 0 2 -1) r(5 5) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/content_types/blogPost/editor_interface')
  .reply(200, {
  "sys": {
    "id": "default",
    "type": "EditorInterface",
    "space": {
      "sys": {
        "id": "bohepdihyxin",
        "type": "Link",
        "linkType": "Space"
      }
    },
    "version": 5,
    "createdAt": "2020-07-14T16:00:30.513Z",
    "createdBy": {
      "sys": {
        "id": "1Y7O5FbAkPYgNvD0MpQoAE",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2020-07-14T16:00:35.801Z",
    "updatedBy": {
      "sys": {
        "id": "1Y7O5FbAkPYgNvD0MpQoAE",
        "type": "Link",
        "linkType": "User"
      }
    },
    "contentType": {
      "sys": {
        "id": "blogPost",
        "type": "Link",
        "linkType": "ContentType"
      }
    },
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    }
  },
  "controls": [
    {
      "fieldId": "slug",
      "widgetId": "singleLine",
      "widgetNamespace": "builtin"
    }
  ]
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 16:00:37 GMT',
  'etag',
  '"15837268598995971550"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'd73423319c549b0cab63ac95b0cb2dfd',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=Ob++oSnLTQSkhBDjzQA/EqXWDV8AAAAAQUIPAAAAAAAd2TppK/Bu/Tzz8DrUVCAX; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=Jp+9EqK94VCWUSA+KsJtVwAAAAA1t0ni4MD90bmAJ17YuIwP; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=Y0XpQ5qx/D6Z+PlMOoVtA6XWDV8AAAAAUx6Lbi1oe/yGW66VlkMGiQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '13-20323590-20323603 NNYN CT(94 98 0) RT(1594742436735 36) q(0 0 2 -1) r(4 4) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/locales')
  .query({"limit":"100","order":"sys.createdAt","skip":"0"})
  .reply(200, {
  "total":1,
  "limit":100,
  "skip":0,
  "sys":{
    "type":"Array"
  },
  "items":[
    {
      "name":"U.S. English",
      "internal_code":"en-US",
      "code":"en-US",
      "fallbackCode":null,
      "default":true,
      "contentManagementApi":true,
      "contentDeliveryApi":true,
      "optional":false,
      "sys":{
        "type":"Locale",
        "id":"0zK7OynpqVdcSetOBfe5P8",
        "version":1,
        "space":{
          "sys":{
            "type":"Link",
            "linkType":"Space",
            "id":"bohepdihyxin"
          }
        },
        "environment":{
          "sys":{
            "type":"Link",
            "linkType":"Environment",
            "id":"env-integration"
          }
        },
        "createdAt":"2020-07-14T15:59:32Z",
        "updatedAt":"2020-07-14T15:59:32Z"
      }
    }
  ]
}

, [
  'accept-ranges',
  'bytes',
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cache-control',
  'max-age=0',
  'cf-organization-id',
  '3ubGFD1MWA6VgVYbIwSBg8',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 16:00:37 GMT',
  'etag',
  'W/"f22cb9b177121e851327f03346d48b93"',
  'referrer-policy',
  'strict-origin-when-cross-origin',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'x-content-type-options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  '707a1e6185245e4fab58c9ba7feb7521',
  'x-download-options',
  'noopen',
  'x-frame-options',
  'ALLOWALL',
  'x-permitted-cross-domain-policies',
  'none',
  'x-xss-protection',
  '1; mode=block',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=crCXehEoQiustGcPeFpMdKXWDV8AAAAAQUIPAAAAAADZduyiG3uL7WCRXmU3WSNI; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=3yTbVD298zc8XeJhKsJtVwAAAAAd5kX/VLOGglcJloX4ADjq; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=DAluPA6IjRb8+PlMOoVtA6XWDV8AAAAAWPMmxEKN1ccKXvwd1pLn6A==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '11-13779077-13779080 NNYN CT(85 86 0) RT(1594742437227 26) q(0 0 2 -1) r(3 3) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/blogPost', {"name":"Blog post","displayField":null,"fields":[{"id":"slug","name":"URL Slug","type":"Symbol","localized":false,"required":true,"validations":[],"disabled":false,"omitted":false}],"description":"super angry"})
  .reply(200, {
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "bohepdihyxin"
      }
    },
    "id": "blogPost",
    "type": "ContentType",
    "createdAt": "2020-07-14T16:00:29.878Z",
    "updatedAt": "2020-07-14T16:00:38.470Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 3,
    "publishedAt": "2020-07-14T16:00:34.458Z",
    "firstPublishedAt": "2020-07-14T16:00:30.418Z",
    "createdBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "publishedCounter": 2,
    "version": 5,
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    }
  },
  "displayField": null,
  "name": "Blog post",
  "description": "super angry",
  "fields": [
    {
      "id": "slug",
      "name": "URL Slug",
      "type": "Symbol",
      "localized": false,
      "required": true,
      "validations": [],
      "disabled": false,
      "omitted": false
    }
  ]
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 16:00:38 GMT',
  'etag',
  'W/"13334694213749400769"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'e539ce06f55bac72820697204e67a161',
  'Content-Length',
  '462',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=T9er0W/bQJaTwmP8t7LQDabWDV8AAAAAQUIPAAAAAABZ3mPu43hMdUlrxBy9wDfx; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=IvGQF12yDHHza8HnKsJtVwAAAAA+IYTAk4uXpzuJz6WnHbqX; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=E3pWdP9pkgK4+flMOoVtA6bWDV8AAAAAXRE6LB1MJs3Vb0+rS7sxFQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '12-17406609-17406615 NNNN CT(92 93 0) RT(1594742437677 24) q(0 0 1 -1) r(5 5) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/blogPost/published')
  .reply(200, {
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "bohepdihyxin"
      }
    },
    "id": "blogPost",
    "type": "ContentType",
    "createdAt": "2020-07-14T16:00:29.878Z",
    "updatedAt": "2020-07-14T16:00:39.059Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 5,
    "publishedAt": "2020-07-14T16:00:39.059Z",
    "firstPublishedAt": "2020-07-14T16:00:30.418Z",
    "createdBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "publishedCounter": 3,
    "version": 6,
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    }
  },
  "displayField": null,
  "name": "Blog post",
  "description": "super angry",
  "fields": [
    {
      "id": "slug",
      "name": "URL Slug",
      "type": "Symbol",
      "localized": false,
      "required": true,
      "validations": [],
      "disabled": false,
      "omitted": false
    }
  ]
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 16:00:39 GMT',
  'etag',
  'W/"13656252347462647717"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '2d05768074ca20815163a9e44e2d90d5',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=SOcAZ6CKSUuJGrYuG+UMZKbWDV8AAAAAQUIPAAAAAABctIE/Lx74kO6NEnTgOaji; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=yMDhT3duvimbq3BaKsJtVwAAAABkG9gZyW7ZaNDMzH0MvHXa; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=qv73aPwoMUBo+vlMOoVtA6bWDV8AAAAAvKW1jdN5OkSWlxVqErLCJw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '14-27006284-27006293 NNNN CT(107 95 0) RT(1594742438382 34) q(0 0 2 -1) r(5 5) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/blogPost/editor_interface', {"controls":[{"fieldId":"slug","widgetId":"slugEditor","settings":{"helpText":"This is the slug for the entry, it will be used for the URL"},"widgetNamespace":"builtin"}]})
  .reply(200, {
  "controls": [
    {
      "fieldId": "slug",
      "widgetId": "slugEditor",
      "settings": {
        "helpText": "This is the slug for the entry, it will be used for the URL"
      },
      "widgetNamespace": "builtin"
    }
  ],
  "sys": {
    "id": "default",
    "type": "EditorInterface",
    "space": {
      "sys": {
        "id": "bohepdihyxin",
        "type": "Link",
        "linkType": "Space"
      }
    },
    "version": 7,
    "createdAt": "2020-07-14T16:00:30.513Z",
    "createdBy": {
      "sys": {
        "id": "1Y7O5FbAkPYgNvD0MpQoAE",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2020-07-14T16:00:40.068Z",
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "contentType": {
      "sys": {
        "id": "blogPost",
        "type": "Link",
        "linkType": "ContentType"
      }
    },
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    }
  }
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 16:00:40 GMT',
  'etag',
  'W/"3859509757060937986"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  '30c6651bb0189021329c458409022b06',
  'Content-Length',
  '421',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=On9OlifOS2OIAtLXUjK2HafWDV8AAAAAQUIPAAAAAAAvwdRa6kBiXrVPLNgnD1bJ; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=XLVTYNqHpV+JYcdnKsJtVwAAAACD9ew0gw+MB+pEFoIXv2eW; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=2j82DjotymZQ+/lMOoVtA6fWDV8AAAAAXgw+K8DH+ZZqLwLFUL5dVw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '11-13779327-13779339 NNNN CT(86 175 0) RT(1594742439191 35) q(0 0 2 -1) r(5 5) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/content_types/blogPost/editor_interface')
  .reply(200, {
  "sys": {
    "id": "default",
    "type": "EditorInterface",
    "space": {
      "sys": {
        "id": "bohepdihyxin",
        "type": "Link",
        "linkType": "Space"
      }
    },
    "version": 7,
    "createdAt": "2020-07-14T16:00:30.513Z",
    "createdBy": {
      "sys": {
        "id": "1Y7O5FbAkPYgNvD0MpQoAE",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2020-07-14T16:00:40.068Z",
    "updatedBy": {
      "sys": {
        "id": "1Y7O5FbAkPYgNvD0MpQoAE",
        "type": "Link",
        "linkType": "User"
      }
    },
    "contentType": {
      "sys": {
        "id": "blogPost",
        "type": "Link",
        "linkType": "ContentType"
      }
    },
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    }
  },
  "controls": [
    {
      "fieldId": "slug",
      "settings": {
        "helpText": "This is the slug for the entry, it will be used for the URL"
      },
      "widgetId": "slugEditor",
      "widgetNamespace": "builtin"
    }
  ]
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 16:00:40 GMT',
  'etag',
  'W/"6791806466301085612"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '0cb4f57e2b0bac6b2483225c28244bd1',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=vDHmBAB3TkigYYWRanHa/KjWDV8AAAAAQUIPAAAAAAD3OAgIxVjz0PNS+UmCTgvv; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=NzwjY/jC+Esm8qpaKsJtVwAAAABH3N9wx5+9Eu1wLMPrP796; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=G2bGa5j9vjrt+/lMOoVtA6jWDV8AAAAA0WyD/o74K3vzvCJvJLcVqg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '14-27006733-27006752 NNNN CT(94 95 0) RT(1594742439911 44) q(0 0 2 -1) r(4 4) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/content_types')
  .query({"limit":"100","order":"sys.createdAt","sys.id%5Bin%5D":"customSidebar","skip":"0"})
  .reply(200, {
  "sys": {
    "type": "Array"
  },
  "total": 0,
  "skip": 0,
  "limit": 100,
  "items": []
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 16:00:41 GMT',
  'etag',
  '"10440568906820546102"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '7d7ae1fd6721ef698d02fbf5034c1fd5',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=YnFNJDrJQ+mmC9J2bQM1U6jWDV8AAAAAQUIPAAAAAACZlH7sLhesKaMIPXQXwjRy; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=bfOAFJGcwSe5XFhDKsJtVwAAAAAkFPJXI5c6HXDhEbU76dDO; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=chCODLg1+mGT/PlMOoVtA6jWDV8AAAAAOUZynaXaeXpxd47Br8axHQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '13-20324575-20324581 NNYN CT(98 100 0) RT(1594742440555 34) q(0 0 2 -1) r(4 4) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/content_types/customSidebar/editor_interface')
  .reply(404, {
  "sys": {
    "type": "Error",
    "id": "NotFound"
  },
  "message": "The resource could not be found.",
  "details": {
    "type": "ContentType",
    "id": "customSidebar",
    "environment": "env-integration",
    "space": "bohepdihyxin"
  },
  "requestId": "68d305ba68ce7a4e228c7a1343716a77"
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 16:00:41 GMT',
  'etag',
  '"8464795426721667471"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  '68d305ba68ce7a4e228c7a1343716a77',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=FItN/2pYSNGr/KcBjQGjCqnWDV8AAAAAQUIPAAAAAACPyECBP10hLKOdHAworgtA; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=nEwPP1lRYmwPyE3QKsJtVwAAAAAFuyv0x4lGq4sfnOo5UJXu; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=YhKAFNvBzBYa/flMOoVtA6nWDV8AAAAArK0hgtu0GGQJZpxTT1eeQw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '4-9014683-9014685 NNYN CT(88 89 0) RT(1594742441141 27) q(0 0 2 -1) r(3 3) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/locales')
  .query({"limit":"100","order":"sys.createdAt","skip":"0"})
  .reply(200, {
  "total":1,
  "limit":100,
  "skip":0,
  "sys":{
    "type":"Array"
  },
  "items":[
    {
      "name":"U.S. English",
      "internal_code":"en-US",
      "code":"en-US",
      "fallbackCode":null,
      "default":true,
      "contentManagementApi":true,
      "contentDeliveryApi":true,
      "optional":false,
      "sys":{
        "type":"Locale",
        "id":"0zK7OynpqVdcSetOBfe5P8",
        "version":1,
        "space":{
          "sys":{
            "type":"Link",
            "linkType":"Space",
            "id":"bohepdihyxin"
          }
        },
        "environment":{
          "sys":{
            "type":"Link",
            "linkType":"Environment",
            "id":"env-integration"
          }
        },
        "createdAt":"2020-07-14T15:59:32Z",
        "updatedAt":"2020-07-14T15:59:32Z"
      }
    }
  ]
}

, [
  'accept-ranges',
  'bytes',
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cache-control',
  'max-age=0',
  'cf-organization-id',
  '3ubGFD1MWA6VgVYbIwSBg8',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 16:00:42 GMT',
  'etag',
  'W/"f22cb9b177121e851327f03346d48b93"',
  'referrer-policy',
  'strict-origin-when-cross-origin',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'x-content-type-options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '5a8ed060348bc9cb03da373f4e1950d5',
  'x-download-options',
  'noopen',
  'x-frame-options',
  'ALLOWALL',
  'x-permitted-cross-domain-policies',
  'none',
  'x-xss-protection',
  '1; mode=block',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=z2nvAtTxSPi0JY78Z8/PtqrWDV8AAAAAQUIPAAAAAACuyxgJI8hsZAdyTcr7XYYw; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=mQT5NyJHXFa5Ba1IKsJtVwAAAADn2srJooGptCzR0Ovf03oF; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=tIfeMBiED2a2/flMOoVtA6rWDV8AAAAAfP1x4gyGACKFWNdFszF9BQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '11-13779920-13779922 NNYN CT(86 88 0) RT(1594742441787 30) q(0 0 1 -1) r(2 2) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/customSidebar', {"name":"Custom sidebar","fields":[],"description":"How to add, remove and update widgets"})
  .reply(201, {"sys":{"space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"id":"customSidebar","type":"ContentType","createdAt":"2020-07-14T16:00:43.116Z","updatedAt":"2020-07-14T16:00:43.116Z","environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}},"createdBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"updatedBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"publishedCounter":0,"version":1},"displayField":null,"name":"Custom sidebar","description":"How to add, remove and update widgets","fields":[]}, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 16:00:43 GMT',
  'etag',
  '"7387142411929750360"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  'd3cd5aea114da5173dab30b20c8790bd',
  'Content-Length',
  '882',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=sTzgawnmQTWo/5bhA028q6rWDV8AAAAAQUIPAAAAAABna803mK+UDqrificw7B3H; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=lKrQB1hofUVuV0vOKsJtVwAAAAABrg3wHSzCErNG1dqMiH3X; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=Y0xDSXHNhw6X/vlMOoVtA6rWDV8AAAAAPtJJt5uGAi4bEJ//Kdvv4g==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '13-20325012-20325025 NNNN CT(86 87 0) RT(1594742442379 32) q(0 0 1 -1) r(5 5) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/customSidebar/published')
  .reply(200, {
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "bohepdihyxin"
      }
    },
    "id": "customSidebar",
    "type": "ContentType",
    "createdAt": "2020-07-14T16:00:43.116Z",
    "updatedAt": "2020-07-14T16:00:43.752Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "createdBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "publishedCounter": 1,
    "version": 2,
    "firstPublishedAt": "2020-07-14T16:00:43.752Z",
    "publishedAt": "2020-07-14T16:00:43.752Z",
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "publishedVersion": 1
  },
  "displayField": null,
  "name": "Custom sidebar",
  "description": "How to add, remove and update widgets",
  "fields": []
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 16:00:43 GMT',
  'etag',
  'W/"10531551812988891727"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'b2580325890e8241cd75c36f41d40c72',
  'Content-Length',
  '387',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=5Nj9/3XmQlGb4FkRkgFhuavWDV8AAAAAQUIPAAAAAAA0Bw2jecjpfjEgIdU84xAe; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=Rt/OYrzAegfKyXGZKsJtVwAAAAAblZ4H9zG5kVGfI/WOoMfB; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=qHkXBJfLfQgx//lMOoVtA6vWDV8AAAAATcE1AzqdHSxPzayvMtLcmA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '3-6345453-6345454 NNNN CT(94 90 0) RT(1594742443081 35) q(0 0 2 -1) r(4 4) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/customSidebar/editor_interface', {"controls":[],"sidebar":[{"disabled":false,"settings":{},"widgetId":"not-needed","widgetNamespace":"sidebar-builtin"},{"disabled":false,"settings":{},"widgetId":"publication-widget","widgetNamespace":"sidebar-builtin"},{"disabled":false,"settings":{"tagField":"tags","imageField":"image"},"widgetId":"imageTaggingExtensionId","widgetNamespace":"extension"}]})
  .reply(200, {
  "controls": [],
  "sidebar": [
    {
      "disabled": false,
      "settings": {},
      "widgetId": "not-needed",
      "widgetNamespace": "sidebar-builtin"
    },
    {
      "disabled": false,
      "settings": {},
      "widgetId": "publication-widget",
      "widgetNamespace": "sidebar-builtin"
    },
    {
      "disabled": false,
      "settings": {
        "tagField": "tags",
        "imageField": "image"
      },
      "widgetId": "imageTaggingExtensionId",
      "widgetNamespace": "extension"
    }
  ],
  "sys": {
    "id": "default",
    "type": "EditorInterface",
    "space": {
      "sys": {
        "id": "bohepdihyxin",
        "type": "Link",
        "linkType": "Space"
      }
    },
    "version": 2,
    "createdAt": "2020-07-14T16:00:43.831Z",
    "createdBy": {
      "sys": {
        "id": "1Y7O5FbAkPYgNvD0MpQoAE",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2020-07-14T16:00:45.389Z",
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "contentType": {
      "sys": {
        "id": "customSidebar",
        "type": "Link",
        "linkType": "ContentType"
      }
    },
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    }
  }
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 16:00:45 GMT',
  'etag',
  'W/"2482464552590765206"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'af312b889f8312fbe9733d2dde1e35c1',
  'Content-Length',
  '461',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=fdDt6IDeR6W5uqt+cikJGq3WDV8AAAAAQUIPAAAAAAA1uRVXusTMqu6iy8Y08G1S; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=kuqML+yhI3BjamjUKsJtVwAAAAC9iJ3HjgivC7BwCXblqgA5; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=QsuEY/W9OSfWAPpMOoVtA63WDV8AAAAA5A4Px3jFp+mgPZumd6+E4g==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '10-8165076-8165091 NNNN CT(93 94 0) RT(1594742444703 31) q(0 0 2 -1) r(4 4) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/customSidebar/editor_interface', {"controls":[],"sidebar":[{"disabled":false,"settings":{},"widgetId":"not-needed","widgetNamespace":"sidebar-builtin"},{"disabled":false,"settings":{},"widgetId":"publication-widget","widgetNamespace":"sidebar-builtin"},{"disabled":false,"settings":{"tagField":"tags","imageField":"image"},"widgetId":"imageTaggingExtensionId","widgetNamespace":"extension"}]})
  .reply(200, {
  "controls": [],
  "sidebar": [
    {
      "disabled": false,
      "settings": {},
      "widgetId": "not-needed",
      "widgetNamespace": "sidebar-builtin"
    },
    {
      "disabled": false,
      "settings": {},
      "widgetId": "publication-widget",
      "widgetNamespace": "sidebar-builtin"
    },
    {
      "disabled": false,
      "settings": {
        "tagField": "tags",
        "imageField": "image"
      },
      "widgetId": "imageTaggingExtensionId",
      "widgetNamespace": "extension"
    }
  ],
  "sys": {
    "id": "default",
    "type": "EditorInterface",
    "space": {
      "sys": {
        "id": "bohepdihyxin",
        "type": "Link",
        "linkType": "Space"
      }
    },
    "version": 3,
    "createdAt": "2020-07-14T16:00:43.831Z",
    "createdBy": {
      "sys": {
        "id": "1Y7O5FbAkPYgNvD0MpQoAE",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2020-07-14T16:00:46.032Z",
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "contentType": {
      "sys": {
        "id": "customSidebar",
        "type": "Link",
        "linkType": "ContentType"
      }
    },
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    }
  }
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 16:00:46 GMT',
  'etag',
  'W/"7655125878187309121"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  'acafc61738a0e4e60c8d9e58c67bc12b',
  'Content-Length',
  '461',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=b66eXn4oS8yzpEolIkH5AK3WDV8AAAAAQUIPAAAAAADzYuUjimzcxKc6qQLICM7F; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=h8xvevImHFt6pyZ5KsJtVwAAAACqchDcgK1+orXOaOwwCzo7; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=0t62THh7KDYDAvpMOoVtA63WDV8AAAAAdTN5VXZQNWUSxr5MImHS3w==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '14-27008259-27008270 NNNN CT(97 97 0) RT(1594742445215 39) q(0 0 2 -1) r(5 5) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/customSidebar/editor_interface', {"controls":[],"sidebar":[{"disabled":false,"settings":{},"widgetId":"not-needed","widgetNamespace":"sidebar-builtin"},{"disabled":false,"settings":{},"widgetId":"publication-widget","widgetNamespace":"sidebar-builtin"},{"disabled":false,"settings":{"tagField":"tags","imageField":"image"},"widgetId":"imageTaggingExtensionId","widgetNamespace":"extension"}]})
  .reply(200, {
  "controls": [],
  "sidebar": [
    {
      "disabled": false,
      "settings": {},
      "widgetId": "not-needed",
      "widgetNamespace": "sidebar-builtin"
    },
    {
      "disabled": false,
      "settings": {},
      "widgetId": "publication-widget",
      "widgetNamespace": "sidebar-builtin"
    },
    {
      "disabled": false,
      "settings": {
        "tagField": "tags",
        "imageField": "image"
      },
      "widgetId": "imageTaggingExtensionId",
      "widgetNamespace": "extension"
    }
  ],
  "sys": {
    "id": "default",
    "type": "EditorInterface",
    "space": {
      "sys": {
        "id": "bohepdihyxin",
        "type": "Link",
        "linkType": "Space"
      }
    },
    "version": 4,
    "createdAt": "2020-07-14T16:00:43.831Z",
    "createdBy": {
      "sys": {
        "id": "1Y7O5FbAkPYgNvD0MpQoAE",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2020-07-14T16:00:46.514Z",
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "contentType": {
      "sys": {
        "id": "customSidebar",
        "type": "Link",
        "linkType": "ContentType"
      }
    },
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    }
  }
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 16:00:46 GMT',
  'etag',
  'W/"344986861367895499"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '606baf6261cdbaf6d9efb3a38738ef41',
  'Content-Length',
  '461',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=aW94RbaRQiaOUfM3J9ilda7WDV8AAAAAQUIPAAAAAADXb1m9z8WjwYlQKtD5E5GY; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=fsbfXt+MnxqBJbYBKsJtVwAAAACSNOp0R5SMPPEHoGe/NI8t; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=2unoSQpIw1u1AvpMOoVtA67WDV8AAAAAJRtaI2HvrLR6pnBzs9GkPg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '10-8165271-8165284 NNNN CT(93 95 0) RT(1594742445837 27) q(0 0 2 -1) r(4 4) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/customSidebar/editor_interface', {"controls":[],"sidebar":[{"disabled":false,"settings":{},"widgetId":"not-needed","widgetNamespace":"sidebar-builtin"},{"disabled":false,"settings":{},"widgetId":"publication-widget","widgetNamespace":"sidebar-builtin"},{"disabled":false,"settings":{"tagField":"tags","imageField":"image"},"widgetId":"imageTaggingExtensionId","widgetNamespace":"extension"}]})
  .reply(200, {
  "controls": [],
  "sidebar": [
    {
      "disabled": false,
      "settings": {},
      "widgetId": "not-needed",
      "widgetNamespace": "sidebar-builtin"
    },
    {
      "disabled": false,
      "settings": {},
      "widgetId": "publication-widget",
      "widgetNamespace": "sidebar-builtin"
    },
    {
      "disabled": false,
      "settings": {
        "tagField": "tags",
        "imageField": "image"
      },
      "widgetId": "imageTaggingExtensionId",
      "widgetNamespace": "extension"
    }
  ],
  "sys": {
    "id": "default",
    "type": "EditorInterface",
    "space": {
      "sys": {
        "id": "bohepdihyxin",
        "type": "Link",
        "linkType": "Space"
      }
    },
    "version": 5,
    "createdAt": "2020-07-14T16:00:43.831Z",
    "createdBy": {
      "sys": {
        "id": "1Y7O5FbAkPYgNvD0MpQoAE",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2020-07-14T16:00:47.108Z",
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "contentType": {
      "sys": {
        "id": "customSidebar",
        "type": "Link",
        "linkType": "ContentType"
      }
    },
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    }
  }
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 16:00:47 GMT',
  'etag',
  'W/"6499892780095129292"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  '1e6ecd55ad8c9193eafc5efe873f2d01',
  'Content-Length',
  '461',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=CFtzQI2RQlGhqSL4QoyGzK7WDV8AAAAAQUIPAAAAAAAdZWAm8d6Kv5PUXy+5kZVK; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=MmwjOoxuVzaq3D2wKsJtVwAAAABamVCXEE8Vz1UKe/B0BV7U; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=ut93HuEz5m1ZA/pMOoVtA67WDV8AAAAAO7sjBT7G8al9/V8D9+4AxA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '14-27008599-27008613 NNNN CT(86 87 0) RT(1594742446358 33) q(0 0 2 -1) r(5 5) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/customSidebar/editor_interface', {"controls":[],"sidebar":[{"disabled":false,"settings":{},"widgetId":"publication-widget","widgetNamespace":"sidebar-builtin"},{"disabled":false,"settings":{"tagField":"tags","imageField":"image"},"widgetId":"imageTaggingExtensionId","widgetNamespace":"extension"}]})
  .reply(200, {
  "controls": [],
  "sidebar": [
    {
      "disabled": false,
      "settings": {},
      "widgetId": "publication-widget",
      "widgetNamespace": "sidebar-builtin"
    },
    {
      "disabled": false,
      "settings": {
        "tagField": "tags",
        "imageField": "image"
      },
      "widgetId": "imageTaggingExtensionId",
      "widgetNamespace": "extension"
    }
  ],
  "sys": {
    "id": "default",
    "type": "EditorInterface",
    "space": {
      "sys": {
        "id": "bohepdihyxin",
        "type": "Link",
        "linkType": "Space"
      }
    },
    "version": 6,
    "createdAt": "2020-07-14T16:00:43.831Z",
    "createdBy": {
      "sys": {
        "id": "1Y7O5FbAkPYgNvD0MpQoAE",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2020-07-14T16:00:47.669Z",
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "contentType": {
      "sys": {
        "id": "customSidebar",
        "type": "Link",
        "linkType": "ContentType"
      }
    },
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    }
  }
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 16:00:47 GMT',
  'etag',
  'W/"7549707802854929659"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '49fac64db3e645b3be8d6dcb5d1c8a7f',
  'Content-Length',
  '449',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=/7YyC9T+RUGISVXy7CCwQK/WDV8AAAAAQUIPAAAAAAA/WRPlIgIN/7FG0cE3RxqQ; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=0BucTNOROwmlRz4FKsJtVwAAAADPh6EDNinG3B71c/uX4NNk; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=pKw2cIGQg3XfA/pMOoVtA6/WDV8AAAAA7bJdfm4/xwAbiV/teoQpUA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '14-27008802-27008812 NNNN CT(96 95 0) RT(1594742446992 36) q(0 0 2 -1) r(3 3) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/content_types/customSidebar/editor_interface')
  .reply(200, {
  "sys": {
    "id": "default",
    "type": "EditorInterface",
    "space": {
      "sys": {
        "id": "bohepdihyxin",
        "type": "Link",
        "linkType": "Space"
      }
    },
    "version": 6,
    "createdAt": "2020-07-14T16:00:43.831Z",
    "createdBy": {
      "sys": {
        "id": "1Y7O5FbAkPYgNvD0MpQoAE",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2020-07-14T16:00:47.669Z",
    "updatedBy": {
      "sys": {
        "id": "1Y7O5FbAkPYgNvD0MpQoAE",
        "type": "Link",
        "linkType": "User"
      }
    },
    "contentType": {
      "sys": {
        "id": "customSidebar",
        "type": "Link",
        "linkType": "ContentType"
      }
    },
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    }
  },
  "sidebar": [
    {
      "disabled": false,
      "settings": {},
      "widgetId": "publication-widget",
      "widgetNamespace": "sidebar-builtin"
    },
    {
      "disabled": false,
      "settings": {
        "tagField": "tags",
        "imageField": "image"
      },
      "widgetId": "imageTaggingExtensionId",
      "widgetNamespace": "extension"
    }
  ],
  "controls": []
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 16:00:48 GMT',
  'etag',
  'W/"12305616659862115590"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '0d999dd39e75a2df282b6c5f77be8ba6',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=zIou199FQfK4YE5r9ZRWXK/WDV8AAAAAQUIPAAAAAACKgNYyCottj8IQTCxaaiB0; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=5VfAVdmwjwFG5zgOKsJtVwAAAABYn0ilXdvkTCNaIKGGzAF2; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=/nkYC99lfU1VBPpMOoVtA6/WDV8AAAAAIlh5L2V2zIioh3L2dCse6g==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '11-13780889-13780896 NNNN CT(98 99 0) RT(1594742447493 35) q(0 0 2 -1) r(3 3) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/content_types/richTextTest/editor_interface')
  .reply(200, {
  "sys": {
    "id": "default",
    "type": "EditorInterface",
    "space": {
      "sys": {
        "id": "bohepdihyxin",
        "type": "Link",
        "linkType": "Space"
      }
    },
    "version": 2,
    "createdAt": "2020-04-03T10:12:44.192Z",
    "createdBy": {
      "sys": {
        "id": "6c10tlsIDlE3qvnNoTwYa5",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2020-04-03T10:12:45.651Z",
    "updatedBy": {
      "sys": {
        "id": "6c10tlsIDlE3qvnNoTwYa5",
        "type": "Link",
        "linkType": "User"
      }
    },
    "contentType": {
      "sys": {
        "id": "richTextTest",
        "type": "Link",
        "linkType": "ContentType"
      }
    },
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    }
  },
  "controls": [
    {
      "fieldId": "simpleField",
      "widgetId": "singleLine",
      "widgetNamespace": "builtin"
    },
    {
      "fieldId": "richTextField",
      "widgetId": "richTextEditor",
      "widgetNamespace": "builtin"
    }
  ]
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 16:00:48 GMT',
  'etag',
  'W/"9102674631899357591"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  '92bef8e3b0a6f59b975cba34c08c37a5',
  'Content-Length',
  '375',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=GoKMLXDFSvKxuGPFv1+sWbDWDV8AAAAAQUIPAAAAAAAGVS9CEdSGZXpXb9fkz+Yk; expires=Wed, 14 Jul 2021 14:42:27 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=qM2EYTD4MAuzL1bDKsJtVwAAAAD7EmxNlFdEB7h07tyOAclm; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=zlOZLDkM6UHKBPpMOoVtA7DWDV8AAAAA5mHftDWO/pzVXC7UZE3v8w==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '5-13531135-13531146 NNNN CT(88 87 0) RT(1594742448007 37) q(0 0 2 -1) r(3 3) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/locales')
  .query({"limit":"100","order":"sys.createdAt","skip":"0"})
  .reply(200, {
  "total":1,
  "limit":100,
  "skip":0,
  "sys":{
    "type":"Array"
  },
  "items":[
    {
      "name":"U.S. English",
      "internal_code":"en-US",
      "code":"en-US",
      "fallbackCode":null,
      "default":true,
      "contentManagementApi":true,
      "contentDeliveryApi":true,
      "optional":false,
      "sys":{
        "type":"Locale",
        "id":"0zK7OynpqVdcSetOBfe5P8",
        "version":1,
        "space":{
          "sys":{
            "type":"Link",
            "linkType":"Space",
            "id":"bohepdihyxin"
          }
        },
        "environment":{
          "sys":{
            "type":"Link",
            "linkType":"Environment",
            "id":"env-integration"
          }
        },
        "createdAt":"2020-07-14T15:59:32Z",
        "updatedAt":"2020-07-14T15:59:32Z"
      }
    }
  ]
}

, [
  'accept-ranges',
  'bytes',
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cache-control',
  'max-age=0',
  'cf-organization-id',
  '3ubGFD1MWA6VgVYbIwSBg8',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 16:00:49 GMT',
  'etag',
  'W/"f22cb9b177121e851327f03346d48b93"',
  'referrer-policy',
  'strict-origin-when-cross-origin',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'x-content-type-options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '47b814f6947c0d248062268ac41f8f4b',
  'x-download-options',
  'noopen',
  'x-frame-options',
  'ALLOWALL',
  'x-permitted-cross-domain-policies',
  'none',
  'x-xss-protection',
  '1; mode=block',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=hpO70gvVRIufZNEpMq1ABrDWDV8AAAAAQUIPAAAAAADUp15JxwjlXyxvGbO39LUB; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=qSI/JIt/nA71OcoxKsJtVwAAAADaujKPZVrXya3Ejps11mIT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=RX/tKBn+tn0sBfpMOoVtA7DWDV8AAAAA31Ozf0oNLsLf64ZK7+zdhA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '9-5259612-5259618 NNYN CT(100 99 0) RT(1594742448445 30) q(0 0 2 -1) r(3 3) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/richTextTest/editor_interface', {"controls":[{"fieldId":"simpleField","widgetId":"singleLine","widgetNamespace":"builtin"},{"fieldId":"richTextField","widgetId":"richTextEditor","widgetNamespace":"builtin"}],"sidebar":[{"disabled":false,"settings":{},"widgetId":"not-needed","widgetNamespace":"sidebar-builtin"},{"disabled":false,"settings":{},"widgetId":"publication-widget","widgetNamespace":"sidebar-builtin"},{"disabled":false,"settings":{"tagField":"tags","imageField":"image"},"widgetId":"imageTaggingExtensionId","widgetNamespace":"extension"}]})
  .reply(200, {
  "controls": [
    {
      "fieldId": "simpleField",
      "widgetId": "singleLine",
      "widgetNamespace": "builtin"
    },
    {
      "fieldId": "richTextField",
      "widgetId": "richTextEditor",
      "widgetNamespace": "builtin"
    }
  ],
  "sidebar": [
    {
      "disabled": false,
      "settings": {},
      "widgetId": "not-needed",
      "widgetNamespace": "sidebar-builtin"
    },
    {
      "disabled": false,
      "settings": {},
      "widgetId": "publication-widget",
      "widgetNamespace": "sidebar-builtin"
    },
    {
      "disabled": false,
      "settings": {
        "tagField": "tags",
        "imageField": "image"
      },
      "widgetId": "imageTaggingExtensionId",
      "widgetNamespace": "extension"
    }
  ],
  "sys": {
    "id": "default",
    "type": "EditorInterface",
    "space": {
      "sys": {
        "id": "bohepdihyxin",
        "type": "Link",
        "linkType": "Space"
      }
    },
    "version": 3,
    "createdAt": "2020-04-03T10:12:44.192Z",
    "createdBy": {
      "sys": {
        "id": "6c10tlsIDlE3qvnNoTwYa5",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2020-07-14T16:00:49.773Z",
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "contentType": {
      "sys": {
        "id": "richTextTest",
        "type": "Link",
        "linkType": "ContentType"
      }
    },
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    }
  }
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 16:00:49 GMT',
  'etag',
  'W/"16455332812432625297"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  '9cbe2e4001f27d43c27f9e5837f8e6e2',
  'Content-Length',
  '541',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=vSmK3CBtSSqslBQjt+DXdbHWDV8AAAAAQUIPAAAAAAAuglF1HrfCHy9zoLvMNXAS; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=AjwVFq/QPGKlnxunKsJtVwAAAACrAoX4i7t44n3wMYayhdqX; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=kv9Tev+xGn/QBfpMOoVtA7HWDV8AAAAASKOtANeZdy3CPpoehqRaeA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '14-27009426-27009433 NNNN CT(87 179 0) RT(1594742449022 33) q(0 0 3 -1) r(4 4) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/richTextTest/editor_interface', {"controls":[{"fieldId":"simpleField","widgetId":"singleLine","widgetNamespace":"builtin"},{"fieldId":"richTextField","widgetId":"richTextEditor","widgetNamespace":"builtin"}],"sidebar":[{"disabled":false,"settings":{},"widgetId":"not-needed","widgetNamespace":"sidebar-builtin"},{"disabled":false,"settings":{},"widgetId":"publication-widget","widgetNamespace":"sidebar-builtin"},{"disabled":false,"settings":{"tagField":"tags","imageField":"image"},"widgetId":"imageTaggingExtensionId","widgetNamespace":"extension"}]})
  .reply(200, {
  "controls": [
    {
      "fieldId": "simpleField",
      "widgetId": "singleLine",
      "widgetNamespace": "builtin"
    },
    {
      "fieldId": "richTextField",
      "widgetId": "richTextEditor",
      "widgetNamespace": "builtin"
    }
  ],
  "sidebar": [
    {
      "disabled": false,
      "settings": {},
      "widgetId": "not-needed",
      "widgetNamespace": "sidebar-builtin"
    },
    {
      "disabled": false,
      "settings": {},
      "widgetId": "publication-widget",
      "widgetNamespace": "sidebar-builtin"
    },
    {
      "disabled": false,
      "settings": {
        "tagField": "tags",
        "imageField": "image"
      },
      "widgetId": "imageTaggingExtensionId",
      "widgetNamespace": "extension"
    }
  ],
  "sys": {
    "id": "default",
    "type": "EditorInterface",
    "space": {
      "sys": {
        "id": "bohepdihyxin",
        "type": "Link",
        "linkType": "Space"
      }
    },
    "version": 4,
    "createdAt": "2020-04-03T10:12:44.192Z",
    "createdBy": {
      "sys": {
        "id": "6c10tlsIDlE3qvnNoTwYa5",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2020-07-14T16:00:50.308Z",
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "contentType": {
      "sys": {
        "id": "richTextTest",
        "type": "Link",
        "linkType": "ContentType"
      }
    },
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    }
  }
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 16:00:50 GMT',
  'etag',
  'W/"3525807837851847895"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '85f9e3bb28cddee8bf62a33b88d3b9aa',
  'Content-Length',
  '541',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=C38tHGtDTGy2vRDd1QBLRbLWDV8AAAAAQUIPAAAAAAAfT63sAdwryO434CKNe+aX; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=ayGrEejbLwGNC9yDKsJtVwAAAAB4N1dPFBjmml/50qVW1HOd; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=vInWZ+CvE2pBBvpMOoVtA7LWDV8AAAAAtWWKzNR3IKne6FL1Gez1rw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '14-27009592-27009608 NNNN CT(95 95 0) RT(1594742449631 33) q(0 0 2 -1) r(4 4) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/richTextTest/editor_interface', {"controls":[{"fieldId":"simpleField","widgetId":"singleLine","widgetNamespace":"builtin"},{"fieldId":"richTextField","widgetId":"richTextEditor","widgetNamespace":"builtin"}],"sidebar":[{"disabled":false,"settings":{},"widgetId":"not-needed","widgetNamespace":"sidebar-builtin"},{"disabled":false,"settings":{},"widgetId":"publication-widget","widgetNamespace":"sidebar-builtin"},{"disabled":false,"settings":{"tagField":"tags","imageField":"image"},"widgetId":"imageTaggingExtensionId","widgetNamespace":"extension"}]})
  .reply(200, {
  "controls": [
    {
      "fieldId": "simpleField",
      "widgetId": "singleLine",
      "widgetNamespace": "builtin"
    },
    {
      "fieldId": "richTextField",
      "widgetId": "richTextEditor",
      "widgetNamespace": "builtin"
    }
  ],
  "sidebar": [
    {
      "disabled": false,
      "settings": {},
      "widgetId": "not-needed",
      "widgetNamespace": "sidebar-builtin"
    },
    {
      "disabled": false,
      "settings": {},
      "widgetId": "publication-widget",
      "widgetNamespace": "sidebar-builtin"
    },
    {
      "disabled": false,
      "settings": {
        "tagField": "tags",
        "imageField": "image"
      },
      "widgetId": "imageTaggingExtensionId",
      "widgetNamespace": "extension"
    }
  ],
  "sys": {
    "id": "default",
    "type": "EditorInterface",
    "space": {
      "sys": {
        "id": "bohepdihyxin",
        "type": "Link",
        "linkType": "Space"
      }
    },
    "version": 5,
    "createdAt": "2020-04-03T10:12:44.192Z",
    "createdBy": {
      "sys": {
        "id": "6c10tlsIDlE3qvnNoTwYa5",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2020-07-14T16:00:51.119Z",
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "contentType": {
      "sys": {
        "id": "richTextTest",
        "type": "Link",
        "linkType": "ContentType"
      }
    },
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    }
  }
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 16:00:51 GMT',
  'etag',
  'W/"11550344503687094556"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  '18daa1924ddb54df1c4e43ce402d0928',
  'Content-Length',
  '541',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=lyCiSGJmRuG/xVBVYWYgvrLWDV8AAAAAQUIPAAAAAAC9NbqJPzGd7cTLpmKlaf7R; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=/2GEHlsvak5z0SK0KsJtVwAAAAAsmPSOyfk/pn5ojqODJFYh; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=VfhiN72bXBmOB/pMOoVtA7LWDV8AAAAA6jtvHHE+mDc0DdwygVRGSw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '13-20327131-20327141 NNNN CT(97 97 0) RT(1594742450249 33) q(0 0 2 -1) r(6 6) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/richTextTest/editor_interface', {"controls":[{"fieldId":"simpleField","widgetId":"singleLine","widgetNamespace":"builtin"},{"fieldId":"richTextField","widgetId":"richTextEditor","widgetNamespace":"builtin"}],"sidebar":[{"disabled":false,"settings":{},"widgetId":"not-needed","widgetNamespace":"sidebar-builtin"},{"disabled":false,"settings":{},"widgetId":"publication-widget","widgetNamespace":"sidebar-builtin"},{"disabled":false,"settings":{"tagField":"tags","imageField":"image"},"widgetId":"imageTaggingExtensionId","widgetNamespace":"extension"}]})
  .reply(200, {
  "controls": [
    {
      "fieldId": "simpleField",
      "widgetId": "singleLine",
      "widgetNamespace": "builtin"
    },
    {
      "fieldId": "richTextField",
      "widgetId": "richTextEditor",
      "widgetNamespace": "builtin"
    }
  ],
  "sidebar": [
    {
      "disabled": false,
      "settings": {},
      "widgetId": "not-needed",
      "widgetNamespace": "sidebar-builtin"
    },
    {
      "disabled": false,
      "settings": {},
      "widgetId": "publication-widget",
      "widgetNamespace": "sidebar-builtin"
    },
    {
      "disabled": false,
      "settings": {
        "tagField": "tags",
        "imageField": "image"
      },
      "widgetId": "imageTaggingExtensionId",
      "widgetNamespace": "extension"
    }
  ],
  "sys": {
    "id": "default",
    "type": "EditorInterface",
    "space": {
      "sys": {
        "id": "bohepdihyxin",
        "type": "Link",
        "linkType": "Space"
      }
    },
    "version": 6,
    "createdAt": "2020-04-03T10:12:44.192Z",
    "createdBy": {
      "sys": {
        "id": "6c10tlsIDlE3qvnNoTwYa5",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2020-07-14T16:00:51.727Z",
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "contentType": {
      "sys": {
        "id": "richTextTest",
        "type": "Link",
        "linkType": "ContentType"
      }
    },
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    }
  }
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 16:00:51 GMT',
  'etag',
  'W/"107759787027299487"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '972abc471f40cb5a5e5fd73077394e0f',
  'Content-Length',
  '541',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=Xbto6qZxRECOj2VmkoZvZ7PWDV8AAAAAQUIPAAAAAAB88rWzGGwvjYKQQN18IL5U; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=udGbb7v3RFPJHAy3KsJtVwAAAAC6kfLQWyktWrlJB6NuS+2+; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=+aSIFIeumytuCPpMOoVtA7PWDV8AAAAAixtFzInuyZGidLXwCfcA/Q==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '8-2536479-2536480 NNNN CT(85 86 0) RT(1594742451085 31) q(0 0 1 -1) r(3 3) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/richTextTest/editor_interface', {"controls":[{"fieldId":"simpleField","widgetId":"singleLine","widgetNamespace":"builtin"},{"fieldId":"richTextField","widgetId":"richTextEditor","widgetNamespace":"builtin"}],"sidebar":[{"disabled":false,"settings":{},"widgetId":"publication-widget","widgetNamespace":"sidebar-builtin"},{"disabled":false,"settings":{"tagField":"tags","imageField":"image"},"widgetId":"imageTaggingExtensionId","widgetNamespace":"extension"}]})
  .reply(200, {
  "controls": [
    {
      "fieldId": "simpleField",
      "widgetId": "singleLine",
      "widgetNamespace": "builtin"
    },
    {
      "fieldId": "richTextField",
      "widgetId": "richTextEditor",
      "widgetNamespace": "builtin"
    }
  ],
  "sidebar": [
    {
      "disabled": false,
      "settings": {},
      "widgetId": "publication-widget",
      "widgetNamespace": "sidebar-builtin"
    },
    {
      "disabled": false,
      "settings": {
        "tagField": "tags",
        "imageField": "image"
      },
      "widgetId": "imageTaggingExtensionId",
      "widgetNamespace": "extension"
    }
  ],
  "sys": {
    "id": "default",
    "type": "EditorInterface",
    "space": {
      "sys": {
        "id": "bohepdihyxin",
        "type": "Link",
        "linkType": "Space"
      }
    },
    "version": 7,
    "createdAt": "2020-04-03T10:12:44.192Z",
    "createdBy": {
      "sys": {
        "id": "6c10tlsIDlE3qvnNoTwYa5",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2020-07-14T16:00:52.345Z",
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "contentType": {
      "sys": {
        "id": "richTextTest",
        "type": "Link",
        "linkType": "ContentType"
      }
    },
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    }
  }
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 16:00:52 GMT',
  'etag',
  'W/"10720502177319649590"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'e0c626065cd19438f49327f41cbf9615',
  'Content-Length',
  '524',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=Yiq4OlLwT16DUOmGwEI0r7TWDV8AAAAAQUIPAAAAAACwDCV8FE7FzHmoQsZ0h8kU; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=VH40CIFl5lskt5dYKsJtVwAAAACi57WNzkf1unYLQApo0Kpi; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=Y5bFeCoJq3ICCfpMOoVtA7TWDV8AAAAAPsCn4YsgB4oIMzV+6ZcNiA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '3-6346023-6346026 NNNN CT(87 88 0) RT(1594742451689 37) q(0 0 2 -1) r(3 3) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/content_types/richTextTest/editor_interface')
  .reply(200, {
  "sys": {
    "id": "default",
    "type": "EditorInterface",
    "space": {
      "sys": {
        "id": "bohepdihyxin",
        "type": "Link",
        "linkType": "Space"
      }
    },
    "version": 7,
    "createdAt": "2020-04-03T10:12:44.192Z",
    "createdBy": {
      "sys": {
        "id": "6c10tlsIDlE3qvnNoTwYa5",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2020-07-14T16:00:52.345Z",
    "updatedBy": {
      "sys": {
        "id": "1Y7O5FbAkPYgNvD0MpQoAE",
        "type": "Link",
        "linkType": "User"
      }
    },
    "contentType": {
      "sys": {
        "id": "richTextTest",
        "type": "Link",
        "linkType": "ContentType"
      }
    },
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    }
  },
  "sidebar": [
    {
      "disabled": false,
      "settings": {},
      "widgetId": "publication-widget",
      "widgetNamespace": "sidebar-builtin"
    },
    {
      "disabled": false,
      "settings": {
        "tagField": "tags",
        "imageField": "image"
      },
      "widgetId": "imageTaggingExtensionId",
      "widgetNamespace": "extension"
    }
  ],
  "controls": [
    {
      "fieldId": "simpleField",
      "widgetId": "singleLine",
      "widgetNamespace": "builtin"
    },
    {
      "fieldId": "richTextField",
      "widgetId": "richTextEditor",
      "widgetNamespace": "builtin"
    }
  ]
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 16:00:52 GMT',
  'etag',
  'W/"11545231734773879195"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  '393c4ae688b081a3697ade13c23ac845',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=MP2Ahrs7TCWdFhLIWrwlb7TWDV8AAAAAQUIPAAAAAAAoqQLBN07ymmUqDUF12G5Q; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=jz5QOY1w2HoSXcDxKsJtVwAAAACaTTHPgLodJrOciN6G7rMp; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=0T8yKhkEwSmlCfpMOoVtA7TWDV8AAAAA0ijTsON3kwvYfWwfRaVuIA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '6-4142188-4142190 NNNN CT(92 93 0) RT(1594742452293 34) q(0 0 2 -1) r(3 3) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/tags')
  .query({"limit":"100","order":"sys.createdAt","skip":"0"})
  .reply(200, {
  "sys": {
    "type": "Array"
  },
  "total": 0,
  "items": []
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 16:00:53 GMT',
  'etag',
  '"9177491833369070274"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '6256ce44c5aab0ad4c8a7008a8c98ace',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=f2+bAQBARleh9JVbCf4kyLXWDV8AAAAAQUIPAAAAAABbwpxWqHilB8ibaSHP+5pR; expires=Wed, 14 Jul 2021 14:42:27 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=2M6CC4OOuiavMGydKsJtVwAAAADlhpt63B8FHMS6ylg1IiCX; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=ysktQDCoTSQpCvpMOoVtA7XWDV8AAAAA9O+rYJZRDBtGdJQsPSzPVA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '1-1685440-1685442 NNYN CT(93 95 0) RT(1594742452906 30) q(0 0 2 -1) r(3 3) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/locales')
  .query({"limit":"100","order":"sys.createdAt","skip":"0"})
  .reply(200, {
  "total":1,
  "limit":100,
  "skip":0,
  "sys":{
    "type":"Array"
  },
  "items":[
    {
      "name":"U.S. English",
      "internal_code":"en-US",
      "code":"en-US",
      "fallbackCode":null,
      "default":true,
      "contentManagementApi":true,
      "contentDeliveryApi":true,
      "optional":false,
      "sys":{
        "type":"Locale",
        "id":"0zK7OynpqVdcSetOBfe5P8",
        "version":1,
        "space":{
          "sys":{
            "type":"Link",
            "linkType":"Space",
            "id":"bohepdihyxin"
          }
        },
        "environment":{
          "sys":{
            "type":"Link",
            "linkType":"Environment",
            "id":"env-integration"
          }
        },
        "createdAt":"2020-07-14T15:59:32Z",
        "updatedAt":"2020-07-14T15:59:32Z"
      }
    }
  ]
}

, [
  'accept-ranges',
  'bytes',
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cache-control',
  'max-age=0',
  'cf-organization-id',
  '3ubGFD1MWA6VgVYbIwSBg8',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 16:00:54 GMT',
  'etag',
  'W/"f22cb9b177121e851327f03346d48b93"',
  'referrer-policy',
  'strict-origin-when-cross-origin',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'x-content-type-options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '4aa49e0a0b3de8bb10e98ddf7c6282a8',
  'x-download-options',
  'noopen',
  'x-frame-options',
  'ALLOWALL',
  'x-permitted-cross-domain-policies',
  'none',
  'x-xss-protection',
  '1; mode=block',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=QNWWgjuZTkSa5YvAgov8mbXWDV8AAAAAQUIPAAAAAADCUTlDmTywUj1x1a6V2HvV; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=EQJSeZvDWDyHwUMuKsJtVwAAAADzP/+7DnAcw3ZV5Kd6HHwX; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=XdDRfK56ukmaCvpMOoVtA7XWDV8AAAAAtoomzapbR7nJYUryAvnbHQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '3-6346144-6346148 NNYN CT(94 94 0) RT(1594742453437 32) q(0 0 2 -1) r(3 3) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/tags/sampletag', {"sys":{"id":"sampletag","version":0},"name":"marketing"})
  .reply(201, {"sys":{"id":"sampletag","version":1,"space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}},"type":"Tag","createdAt":"2020-07-14T16:00:54.593Z","createdBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"updatedAt":"2020-07-14T16:00:54.593Z","updatedBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}}},"name":"marketing"}, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 16:00:54 GMT',
  'etag',
  '"5757577779022189902"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  '99e8557b70d0a66cbaa8511a62167f99',
  'Content-Length',
  '740',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=+3YR17zkRN+8nRJQNa6cOrbWDV8AAAAAQUIPAAAAAABJqqdupzsHC6ZmRmb5VMkq; expires=Wed, 14 Jul 2021 14:42:27 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=yZ/AI0ykfWNfXtdIKsJtVwAAAABz9FOrz0cNMMW+7aDBn+Nw; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=GaHNdTAfcmMPC/pMOoVtA7bWDV8AAAAA2UdBE6e+R1YHY5JL6OwGNg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '5-13532020-13532025 NNNN CT(87 88 0) RT(1594742453945 31) q(0 0 2 -1) r(4 4) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/tags/sampletag')
  .reply(200, {
  "sys": {
    "type": "Tag",
    "id": "sampletag",
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "bohepdihyxin"
      }
    },
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "createdBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "createdAt": "2020-07-14T16:00:54.593Z",
    "updatedAt": "2020-07-14T16:00:54.593Z",
    "version": 1
  },
  "name": "marketing"
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 16:00:55 GMT',
  'etag',
  '"4053287262629635354"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '5889a1845e37c956085ef9a01345ea0d',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=asNiN9qORx6sQXmIRGIyhrbWDV8AAAAAQUIPAAAAAABCtjt8sJBBLcPwejojjjl5; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=a5qANjYlkmvGuqoIKsJtVwAAAABkA0XvR3bIWdyseT45K6AB; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=iXRKfjD8pVyaC/pMOoVtA7bWDV8AAAAAxT7tiyBExViey6SENP4b4g==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '9-5259881-5259882 NNYN CT(93 94 0) RT(1594742454401 26) q(0 0 2 -1) r(4 4) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/tags')
  .query({"limit":"100","order":"sys.createdAt","skip":"0"})
  .reply(200, {
  "sys": {
    "type": "Array"
  },
  "total": 1,
  "items": [
    {
      "sys": {
        "type": "Tag",
        "id": "sampletag",
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "bohepdihyxin"
          }
        },
        "environment": {
          "sys": {
            "id": "env-integration",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "createdBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "1Y7O5FbAkPYgNvD0MpQoAE"
          }
        },
        "updatedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "1Y7O5FbAkPYgNvD0MpQoAE"
          }
        },
        "createdAt": "2020-07-14T16:00:54.593Z",
        "updatedAt": "2020-07-14T16:00:54.593Z",
        "version": 1
      },
      "name": "marketing"
    }
  ]
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 16:00:55 GMT',
  'etag',
  '"14463358499897617033"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  '76008b1ff6485fef4b4dde11b92c4db0',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=lRy5wnckRKCaoIXhkMh0qrfWDV8AAAAAQUIPAAAAAABw3491D+1lAHCzomPeFgqI; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=bWh6fdM+NXQK2XNbKsJtVwAAAABmdFzto1CQLOlgqnJV5bw4; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=0TrGUCxjcz4lDPpMOoVtA7fWDV8AAAAA338nxRcJCh6XJCd6mJjN1w==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '4-9016182-9016189 NNYN CT(93 93 0) RT(1594742454968 38) q(0 0 1 -1) r(3 3) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/locales')
  .query({"limit":"100","order":"sys.createdAt","skip":"0"})
  .reply(200, {
  "total":1,
  "limit":100,
  "skip":0,
  "sys":{
    "type":"Array"
  },
  "items":[
    {
      "name":"U.S. English",
      "internal_code":"en-US",
      "code":"en-US",
      "fallbackCode":null,
      "default":true,
      "contentManagementApi":true,
      "contentDeliveryApi":true,
      "optional":false,
      "sys":{
        "type":"Locale",
        "id":"0zK7OynpqVdcSetOBfe5P8",
        "version":1,
        "space":{
          "sys":{
            "type":"Link",
            "linkType":"Space",
            "id":"bohepdihyxin"
          }
        },
        "environment":{
          "sys":{
            "type":"Link",
            "linkType":"Environment",
            "id":"env-integration"
          }
        },
        "createdAt":"2020-07-14T15:59:32Z",
        "updatedAt":"2020-07-14T15:59:32Z"
      }
    }
  ]
}

, [
  'accept-ranges',
  'bytes',
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cache-control',
  'max-age=0',
  'cf-organization-id',
  '3ubGFD1MWA6VgVYbIwSBg8',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 16:00:56 GMT',
  'etag',
  'W/"f22cb9b177121e851327f03346d48b93"',
  'referrer-policy',
  'strict-origin-when-cross-origin',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'x-content-type-options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '8df42ad93ee56e3723012761d6c8fb65',
  'x-download-options',
  'noopen',
  'x-frame-options',
  'ALLOWALL',
  'x-permitted-cross-domain-policies',
  'none',
  'x-xss-protection',
  '1; mode=block',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=yb0AyFZ1TP2eO543foe1xLfWDV8AAAAAQUIPAAAAAAAI5d2CxCQy+qMHVw14u93u; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=7Mg5JZwzliV053eZKsJtVwAAAADqy3Ce7KAJC2/7iUVw5/Pu; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=q/0GOyOMI0m6DPpMOoVtA7fWDV8AAAAALRC6+FPkIZGxrUUEWPhLQw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '13-20328637-20328648 NNYN CT(87 87 0) RT(1594742455574 33) q(0 0 1 -1) r(2 2) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/tags/sampletag', {"sys":{"id":"sampletag","version":1},"name":"better marketing"})
  .reply(200, {"sys":{"type":"Tag","id":"sampletag","space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}},"createdBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"updatedBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"createdAt":"2020-07-14T16:00:54.593Z","updatedAt":"2020-07-14T16:00:56.672Z","version":2},"name":"better marketing"}, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 16:00:56 GMT',
  'etag',
  '"17387467672040922824"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  '195b6ee5a5e6ee204f350ce78f5489af',
  'Content-Length',
  '747',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=Y9YyQWp7S2apz9xidpAITbjWDV8AAAAAQUIPAAAAAACY/5sjemPVj3HAE5G1Vsyk; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=8oj6WrL1IyYRudjNKsJtVwAAAADLd/FdRLn6TGPH4+MbWEuM; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=A/9rGd6WczooDfpMOoVtA7jWDV8AAAAA3WfUJ6JR9wtCudzP0mgWwA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '14-27011475-27011492 NNNN CT(99 103 0) RT(1594742455995 35) q(0 0 2 -1) r(4 4) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/tags/sampletag')
  .reply(200, {
  "sys": {
    "type": "Tag",
    "id": "sampletag",
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "bohepdihyxin"
      }
    },
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "createdBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "createdAt": "2020-07-14T16:00:54.593Z",
    "updatedAt": "2020-07-14T16:00:56.672Z",
    "version": 2
  },
  "name": "better marketing"
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 16:00:57 GMT',
  'etag',
  '"17387467672040922824"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '96310ea522d2f052a225eb5aff7989e5',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=eNPUAkvkT2+u0DmuJ38xxLnWDV8AAAAAQUIPAAAAAAAUNf0+Lwx9NRDzKwttym3a; expires=Wed, 14 Jul 2021 14:42:27 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=CCwRMBmy3TOVH/BaKsJtVwAAAABBS9Z09bnED4ihiwbRl6G0; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=ybLnFBdJOC6mDfpMOoVtA7nWDV8AAAAAeN+6UXyhPJKxvCdaDcjizQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '2-3149832-3149835 NNYN CT(89 96 0) RT(1594742456595 34) q(0 0 2 -1) r(4 4) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/tags')
  .query({"limit":"100","order":"sys.createdAt","skip":"0"})
  .reply(200, {
  "sys": {
    "type": "Array"
  },
  "total": 1,
  "items": [
    {
      "sys": {
        "type": "Tag",
        "id": "sampletag",
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "bohepdihyxin"
          }
        },
        "environment": {
          "sys": {
            "id": "env-integration",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "createdBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "1Y7O5FbAkPYgNvD0MpQoAE"
          }
        },
        "updatedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "1Y7O5FbAkPYgNvD0MpQoAE"
          }
        },
        "createdAt": "2020-07-14T16:00:54.593Z",
        "updatedAt": "2020-07-14T16:00:56.672Z",
        "version": 2
      },
      "name": "better marketing"
    }
  ]
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 16:00:57 GMT',
  'etag',
  '"17120536850921208281"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  'fac4edf1cd90965fff630b236da40b99',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=tBU3uTCqR2ykL4KHZ2pqA7nWDV8AAAAAQUIPAAAAAACMzed+ujSBKbpaJfYX/mb8; expires=Wed, 14 Jul 2021 14:42:27 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=WI4KQgUUnz6TGVUsKsJtVwAAAAA8GzodjQPv1c4Y88Bgxc3v; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=4XfCXajwTFBLDvpMOoVtA7nWDV8AAAAA68AdyPMdGbWxsol8gW629Q==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '5-13532562-13532569 NNYN CT(113 93 0) RT(1594742457217 32) q(0 0 2 -1) r(4 4) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/locales')
  .query({"limit":"100","order":"sys.createdAt","skip":"0"})
  .reply(200, {
  "total":1,
  "limit":100,
  "skip":0,
  "sys":{
    "type":"Array"
  },
  "items":[
    {
      "name":"U.S. English",
      "internal_code":"en-US",
      "code":"en-US",
      "fallbackCode":null,
      "default":true,
      "contentManagementApi":true,
      "contentDeliveryApi":true,
      "optional":false,
      "sys":{
        "type":"Locale",
        "id":"0zK7OynpqVdcSetOBfe5P8",
        "version":1,
        "space":{
          "sys":{
            "type":"Link",
            "linkType":"Space",
            "id":"bohepdihyxin"
          }
        },
        "environment":{
          "sys":{
            "type":"Link",
            "linkType":"Environment",
            "id":"env-integration"
          }
        },
        "createdAt":"2020-07-14T15:59:32Z",
        "updatedAt":"2020-07-14T15:59:32Z"
      }
    }
  ]
}

, [
  'accept-ranges',
  'bytes',
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cache-control',
  'max-age=0',
  'cf-organization-id',
  '3ubGFD1MWA6VgVYbIwSBg8',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 16:00:58 GMT',
  'etag',
  'W/"f22cb9b177121e851327f03346d48b93"',
  'referrer-policy',
  'strict-origin-when-cross-origin',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'x-content-type-options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'f02ae2401ea2dfd7fb699fd7150ac655',
  'x-download-options',
  'noopen',
  'x-frame-options',
  'ALLOWALL',
  'x-permitted-cross-domain-policies',
  'none',
  'x-xss-protection',
  '1; mode=block',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=47cQT+PZTZSgLeLndDuLFrrWDV8AAAAAQUIPAAAAAAB2tX8UN9VFOCvOhM7dLCmg; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=AD5qHjm1F3YekBfcKsJtVwAAAABakQor/742E1Cbwx9jj5Vd; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=18NbdX1G9S6eDvpMOoVtA7rWDV8AAAAAU8kTM8YfPIlaTjkzJBZpEw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '14-27011931-27011943 NNYN CT(93 93 0) RT(1594742457693 31) q(0 0 2 -1) r(3 3) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .delete('/spaces/bohepdihyxin/environments/env-integration/tags/sampletag', {"sys":{"id":"sampletag","version":2},"name":"better marketing"})
  .reply(204, "", [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 16:00:58 GMT',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  'a6bb1391ca251e7857c67ed0f666e50e',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=aTGj1L6KSQKyEJaX+aeKErrWDV8AAAAAQUIPAAAAAACuppY3ZQDescn0yY4qpU72; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=eIP4IfqoumEy7s4MKsJtVwAAAADUDMEHbFqUKOj3SZ5oxT9W; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=okWvVOwCInEuD/pMOoVtA7rWDV8AAAAAyPzsyygulO0/rRJHNsjIwg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '9-5260112-5260117 NNNN CT(88 89 0) RT(1594742458241 57) q(0 0 2 -1) r(4 4) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/tags/sampletag')
  .reply(404, {
  "sys": {
    "type": "Error",
    "id": "NotFound"
  },
  "message": "The resource could not be found.",
  "details": {
    "type": "Tag",
    "id": "sampletag",
    "environment": "env-integration",
    "space": "bohepdihyxin"
  },
  "requestId": "6fe00046935559ccd9213ac4bf591acd"
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 16:00:59 GMT',
  'etag',
  '"6451860625274420159"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '6fe00046935559ccd9213ac4bf591acd',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=DULghJTrQaeHLg772dqudLvWDV8AAAAAQUIPAAAAAAAo/6AkxJnaTBKMYe0Vc5XZ; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=KkIqHoz9j3ZQ3xZRKsJtVwAAAABvN9t76xcndICy2i6p57D2; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=yS+3GvPnNlO9D/pMOoVtA7vWDV8AAAAAUuti997LJXSB9ouVobWR+A==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '6-4142610-4142611 NNYN CT(87 87 0) RT(1594742458860 31) q(0 0 2 -1) r(4 4) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .delete('/spaces/bohepdihyxin/environments/env-integration')
  .reply(204, "", [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cache-control',
  'max-age=0',
  'cf-organization-id',
  '3ubGFD1MWA6VgVYbIwSBg8',
  'cf-space-id',
  'bohepdihyxin',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 14 Jul 2020 16:01:00 GMT',
  'referrer-policy',
  'strict-origin-when-cross-origin',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'x-content-type-options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  '1c5595c56d33e78c0c9f3c34530186e7',
  'x-download-options',
  'noopen',
  'x-frame-options',
  'ALLOWALL',
  'x-permitted-cross-domain-policies',
  'none',
  'x-xss-protection',
  '1; mode=block',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=XJ1aGDjZQky6kc/JvHtxYbzWDV8AAAAAQUIPAAAAAABuSSC0AR8CzLSwklnv4j2n; expires=Wed, 14 Jul 2021 14:42:27 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=j9o8dqKOKTOunMhhKsJtVwAAAAAQ5zPyKnyrLV4liJsazJwG; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=vwvxDPtO9FM+EfpMOoVtA7zWDV8AAAAAbGUqwAUc8dC2RQi+YC5OoQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '2-3149926-3149927 NNNN CT(92 93 0) RT(1594742459369 37) q(0 0 1 -1) r(10 10) U5'
]);