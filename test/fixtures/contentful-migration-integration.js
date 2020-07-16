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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:12:58 GMT',
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
  '47621202094a77b2bdaada1f6b9640a8',
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
  'visid_incap_673446=LN7JQnVHTIG/YKWOOt83ppngI18AAAAAQUIPAAAAAACxAVI/6hh51sRbRXLrK62c; expires=Fri, 30 Jul 2021 16:27:06 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=FxlFRdw8YGHWnN3eKsJtVwAAAADlXgAF34tk4A8+XHiHbjH/; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=ui40FGMUgHNmk1j4PoVtA5ngI18AAAAA1MlP8mNZSXasQR8ydkamtA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '14-84956861-84956869 NNYY CT(0 0 0) RT(1596186777460 61) q(0 0 0 -1) r(1 1) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration', {"name":"env-integration"})
  .reply(201, {"name":"env-integration","sys":{"type":"Environment","id":"env-integration","version":1,"space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"status":{"sys":{"type":"Link","linkType":"Status","id":"queued"}},"createdBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"createdAt":"2020-07-31T09:12:59Z","updatedBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"updatedAt":"2020-07-31T09:12:59Z"}}, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:12:59 GMT',
  'etag',
  'W/"2326509fe88a6b4545b20bcb87aa9f60"',
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
  '7e9f83abdba315313a7d22103d31f74e',
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
  'visid_incap_673446=fynMV9vpQeeN9CKs4ztdBprgI18AAAAAQUIPAAAAAADdG26kjV4Cdua2fERyxIs5; expires=Fri, 30 Jul 2021 16:27:06 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=8l30VT0M6zqPfgvDKsJtVwAAAAAuYSzBC5cJa/FGWh2dzP+m; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=jYi7ICRdpzY2lFj4PoVtA5rgI18AAAAAYZkB4A2awpKkYMMqGOg4vg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '14-84956932-84956938 NNNY CT(0 0 0) RT(1596186777817 31) q(0 0 0 -1) r(9 9) U5'
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
    "createdAt":"2020-07-31T09:12:59Z",
    "updatedBy":{
      "sys":{
        "type":"Link",
        "linkType":"User",
        "id":"1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "updatedAt":"2020-07-31T09:12:59Z"
  }
}

, [
  'accept-ranges',
  'bytes',
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:00 GMT',
  'etag',
  'W/"e9298f44e6bac3bc82926acf667d73e7"',
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
  'eb6271e505f62d6a12c4bd5867dd6061',
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
  'visid_incap_673446=IjPl/gY7Sk+j4YTd5RykE5vgI18AAAAAQUIPAAAAAAB4NCL1C6NgVj4LLgmrDgCA; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=yhkwRd54bTMEqCf5KsJtVwAAAADeR7uK6BWju7ESXi80DweW; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=hHnHbmPxkygBlVj4PoVtA5vgI18AAAAAjHQfmVF2LrgvTgt1XbeXhg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '12-52241746-52241749 NNYN CT(93 94 0) RT(1596186778925 30) q(0 0 2 -1) r(9 9) U5'
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:01 GMT',
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
  'fcf7a40e89808c86a7416236e5e860ea',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=Cz0+QTzqTSqPWrgQq4HoeJzgI18AAAAAQUIPAAAAAACVYUl8/BVagti4XTn/0G6Z; expires=Fri, 30 Jul 2021 16:27:06 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=naVTUy2zyzUmQhocKsJtVwAAAABq32DpwlJ71oR3n5dkRF1E; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=n7JiI0PEAFOdlVj4PoVtA5zgI18AAAAAtPaShrqaSXxIu1aSJDsYWA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '14-84957358-84957362 NNYY CT(0 0 0) RT(1596186779974 51) q(0 0 0 -1) r(5 5) U5'
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
        "createdAt":"2020-07-31T09:12:59Z",
        "updatedAt":"2020-07-31T09:12:59Z"
      }
    }
  ]
}

, [
  'accept-ranges',
  'bytes',
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:01 GMT',
  'etag',
  'W/"3a66d930e1a85f4903a09c66833fed74"',
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
  '4181f6441030a153c600400d83ce854d',
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
  'visid_incap_673446=25U8t7bQRXGp1O/ILMOmhp3gI18AAAAAQUIPAAAAAABbatWI9QXkV60kYyoASVEf; expires=Fri, 30 Jul 2021 16:27:18 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=kWuoGMS3Vn8eelTyKsJtVwAAAAD9DIjNUbE39YMmf45hgN7h; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=YpX9F3YpNX/illj4PoVtA53gI18AAAAAKn5WudiehkHes9Pv0Cwr5Q==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '10-24863480-24863483 NNYY CT(0 0 0) RT(1596186780648 30) q(0 0 0 -1) r(7 7) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/dog', {"name":"angry dog","fields":[{"id":"woofs","name":"woof woof","type":"Number","required":true}],"description":"super angry"})
  .reply(201, {"sys":{"space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"id":"dog","type":"ContentType","createdAt":"2020-07-31T09:13:02.525Z","updatedAt":"2020-07-31T09:13:02.525Z","environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}},"createdBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"updatedBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"publishedCounter":0,"version":1},"displayField":null,"name":"angry dog","description":"super angry","fields":[{"id":"woofs","name":"woof woof","type":"Number","localized":false,"required":true,"validations":[],"disabled":false,"omitted":false}]}, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:02 GMT',
  'etag',
  '"1066703735907245828"',
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
  '233721b04424787448cfff887fb01529',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:id',
  'Content-Length',
  '1051',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=6AClcS58S6+E/g2Q8PgZMp7gI18AAAAAQUIPAAAAAAB4zQPLOPMKpNjcQAPkNT+L; expires=Fri, 30 Jul 2021 16:27:12 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=nH/yaH/U5wwTClt9KsJtVwAAAADvfpVvYyl+b7Ho1McIJwnJ; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=h2DgZ/6D1DOOl1j4PoVtA57gI18AAAAABqTEeIDcphPg3mFP9RExpA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '6-14115101-14115106 NNNY CT(0 0 0) RT(1596186781586 34) q(0 0 0 -1) r(5 5) U5'
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
    "createdAt": "2020-07-31T09:13:02.525Z",
    "updatedAt": "2020-07-31T09:13:03.067Z",
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
    "firstPublishedAt": "2020-07-31T09:13:03.067Z",
    "publishedAt": "2020-07-31T09:13:03.067Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:03 GMT',
  'etag',
  'W/"3464884685710388186"',
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
  'a2b8f493fe345da6f0e2406327a2789b',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:id/published',
  'Content-Length',
  '442',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=Gy9xA8EMRRG4+NxHakhYk5/gI18AAAAAQUIPAAAAAAAs3f+JrSRrKbq+oBRZvm8H; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=JwoHDsQRyBD/ddXvKsJtVwAAAABULUoxnycxl77N7Q7UMNOR; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=fiFiasTq7ylSmFj4PoVtA5/gI18AAAAAO1WxUoTGZNScPrxqMXwYpQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '7-23310374-23310376 NNNY CT(0 0 0) RT(1596186782404 26) q(0 0 0 -1) r(6 6) U5'
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
    "createdAt": "2020-07-31T09:13:02.525Z",
    "updatedAt": "2020-07-31T09:13:03.067Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 1,
    "publishedAt": "2020-07-31T09:13:03.067Z",
    "firstPublishedAt": "2020-07-31T09:13:03.067Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:03 GMT',
  'etag',
  'W/"4270853064719175240"',
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
  'e892c6d558db8db088dc4de96adf4681',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:id',
  'Content-Length',
  '443',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=qpWelIkFS1KYnwHyuBh+tZ/gI18AAAAAQUIPAAAAAAD/VcD3FOtLfhSMKVHZU5Qr; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=M6SBBh+og1VxdL5UKsJtVwAAAACA3ZTpXXOhzmLkDF4jiNof; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=TU7rDXYhEASzmFj4PoVtA5/gI18AAAAAd9zHTIIHW1iO0F+eXtfdTw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '11-39453981-39453988 NNNY CT(0 0 0) RT(1596186783230 33) q(0 0 0 -1) r(2 2) U5'
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
        "createdAt": "2020-07-31T09:13:02.525Z",
        "updatedAt": "2020-07-31T09:13:03.067Z",
        "environment": {
          "sys": {
            "id": "env-integration",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 1,
        "publishedAt": "2020-07-31T09:13:03.067Z",
        "firstPublishedAt": "2020-07-31T09:13:03.067Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:09 GMT',
  'etag',
  'W/"18151869007220568876"',
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
  '89f4b08fc045c3e3ef81384daa6484e1',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=mOxZgOBzSli6aAruLoXI7qTgI18AAAAAQUIPAAAAAADjyz0fwys2DKVYSGYBHUEl; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=JHg7Ay0tSRjmJx91KsJtVwAAAACK00SSFZIQAGzHM83VEWWE; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=DdqZWTsDOmHqnFj4PoVtA6TgI18AAAAAWK+8PPx7FSrD02hpb0/E9Q==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '5-40680952-40680957 NNNY CT(0 0 0) RT(1596186788557 34) q(0 0 0 -1) r(2 2) U5'
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
        "createdAt":"2020-07-31T09:12:59Z",
        "updatedAt":"2020-07-31T09:12:59Z"
      }
    }
  ]
}

, [
  'accept-ranges',
  'bytes',
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:09 GMT',
  'etag',
  'W/"3a66d930e1a85f4903a09c66833fed74"',
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
  '607c32f9f10b305f6f9c0ead2bced64a',
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
  'visid_incap_673446=yHcVWw6wRTqeh4q0QP/77KXgI18AAAAAQUIPAAAAAADKaoN/K3NXOCZYTB6azF8x; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=fuQkQrrIXATx7TK9KsJtVwAAAABPgTQMEnMVzqPbKsHDidp9; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=d/VuAZcPmwApnVj4PoVtA6XgI18AAAAAkIrfkDauvEgDJ6ye1Jad+Q==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '13-65870659-65870663 NNYY CT(0 0 0) RT(1596186788962 31) q(0 0 0 -1) r(1 1) U5'
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
    "createdAt": "2020-07-31T09:13:02.525Z",
    "updatedAt": "2020-07-31T09:13:09.898Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 1,
    "publishedAt": "2020-07-31T09:13:03.067Z",
    "firstPublishedAt": "2020-07-31T09:13:03.067Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:09 GMT',
  'etag',
  'W/"8945996135394594755"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35997',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '7',
  'X-Contentful-Request-Id',
  '4ca5287989e76a971eae46e5ef3da878',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:id',
  'Content-Length',
  '447',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=sbkeiOG1RWKmYAc7EL5ulqXgI18AAAAAQUIPAAAAAABp4dyClBvNxDmNnr4hgg8I; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=xrWvO3BepAqU+QGqKsJtVwAAAABgEY4D4/fB+vrEFpoRdoGh; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=2vlzSIH8c0N9nVj4PoVtA6XgI18AAAAAKb3sesBw92AmS7p7cyF2/A==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '12-52243360-52243366 NNNY CT(0 0 0) RT(1596186789182 38) q(0 0 0 -1) r(2 2) U5'
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
    "createdAt": "2020-07-31T09:13:02.525Z",
    "updatedAt": "2020-07-31T09:13:10.235Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 3,
    "publishedAt": "2020-07-31T09:13:10.235Z",
    "firstPublishedAt": "2020-07-31T09:13:03.067Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:10 GMT',
  'etag',
  'W/"14412875651369357544"',
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
  'ab7c71b5ca070ab93dc58e2ff45f6683',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:id/published',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=w3N7wiq7SO6YcgQEEQpIbKXgI18AAAAAQUIPAAAAAABRJL0aJXehOPJPUMryFuXX; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=ZFbxIgSfAEibUChyKsJtVwAAAAAEUgtCSF5ghrAhWg0q54/N; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=Y2UgWMn3yEPjnVj4PoVtA6XgI18AAAAA8JzQ22kql/+qDiqQs2oxqw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '9-17461936-17461940 NNNY CT(0 0 0) RT(1596186789580 26) q(0 0 0 -1) r(2 2) U5'
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
    "createdAt": "2020-07-31T09:13:02.525Z",
    "updatedAt": "2020-07-31T09:13:10.933Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 3,
    "publishedAt": "2020-07-31T09:13:10.235Z",
    "firstPublishedAt": "2020-07-31T09:13:03.067Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:10 GMT',
  'etag',
  'W/"4381499095398015401"',
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
  'ee33401b80e1c59ecbf31bb7f3a858b5',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:id',
  'Content-Length',
  '373',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=qf67o5dmRvSfM2L9LHOsPqbgI18AAAAAQUIPAAAAAAAq+9L8OlYNvCWrUW9X+5ga; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=QO+Jai9C4xP+WLTnKsJtVwAAAAC84VZwwSseEyQg4TeXdaXC; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=PVMxOc9kJUmWnlj4PoVtA6bgI18AAAAAXBSLvAMZm7n1P4cOQflw1w==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '13-65870781-65870785 NNNN CT(87 178 0) RT(1596186789982 30) q(0 0 2 -1) r(4 4) U5'
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
    "createdAt": "2020-07-31T09:13:02.525Z",
    "updatedAt": "2020-07-31T09:13:11.265Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 5,
    "publishedAt": "2020-07-31T09:13:11.265Z",
    "firstPublishedAt": "2020-07-31T09:13:03.067Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:11 GMT',
  'etag',
  'W/"8865197780353085298"',
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
  '9e7c16bd4f0db725c1cd2d66130c3515',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:id/published',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=XP0pxGFWS4aWiZ/49T8h7abgI18AAAAAQUIPAAAAAAAOK5jo2DKp2h3t2DW6PWDB; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=yVX0IfBkvChQ2X+xKsJtVwAAAADyj3rBYMoAgbMY+CSf+YNX; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=V0zHcAtETg7vnlj4PoVtA6bgI18AAAAAnpV9gquE4yD/UyscPJVy+g==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '12-52243571-52243580 NNNY CT(0 0 0) RT(1596186790600 39) q(0 0 0 -1) r(2 2) U5'
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
    "createdAt": "2020-07-31T09:13:02.525Z",
    "updatedAt": "2020-07-31T09:13:11.265Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 5,
    "publishedAt": "2020-07-31T09:13:11.265Z",
    "firstPublishedAt": "2020-07-31T09:13:03.067Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:11 GMT',
  'etag',
  'W/"8865197780353085298"',
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
  '633cf7c828d792b689d20d00698301a0',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:id',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=CrkeByp7TdK3S7+jCfIRgqfgI18AAAAAQUIPAAAAAACMnZusNHVyQCPcOGJgpSH6; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=THrgVQsJbwMlPxRGKsJtVwAAAABq9Ud9ebRD5T4COHdwpI5B; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=ElULWHeFvQs2n1j4PoVtA6fgI18AAAAAo0PEemkiL7BlX1HMkTa88A==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '11-39454545-39454550 NNNY CT(0 0 0) RT(1596186791004 28) q(0 0 0 -1) r(2 2) U5'
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
        "createdAt": "2020-07-31T09:13:02.525Z",
        "updatedAt": "2020-07-31T09:13:11.265Z",
        "environment": {
          "sys": {
            "id": "env-integration",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 5,
        "publishedAt": "2020-07-31T09:13:11.265Z",
        "firstPublishedAt": "2020-07-31T09:13:03.067Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:12 GMT',
  'etag',
  'W/"13484815716348489365"',
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
  'f6b5a31596cbd329c2a8c3afc1f548b3',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types',
  'Content-Length',
  '434',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=lPhzJbs+RLmOV2flEw4hl6fgI18AAAAAQUIPAAAAAAD4crwDYK6S/+0j1dvxoIC7; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=5H74WwLXOQlrEjNwKsJtVwAAAACME/ijdum080fHwPnbs6Y9; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=bP3tSY7o/mGHn1j4PoVtA6fgI18AAAAA+OsNounYtgmGiMaXjaMiOQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '12-52243683-52243686 NNNY CT(0 0 0) RT(1596186791420 30) q(0 0 0 -1) r(2 2) U5'
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
        "createdAt":"2020-07-31T09:12:59Z",
        "updatedAt":"2020-07-31T09:12:59Z"
      }
    }
  ]
}

, [
  'accept-ranges',
  'bytes',
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:12 GMT',
  'etag',
  'W/"3a66d930e1a85f4903a09c66833fed74"',
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
  '0dd7349f378fc5a50ae49961125c80d9',
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
  'visid_incap_673446=9FgJxJFrRJS2SxUALd1+4KjgI18AAAAAQUIPAAAAAAAJe8RGO8aukAhIxgc2EYTH; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=6XGHIsm8nn0vlY6GKsJtVwAAAAA4vt/eU1QnsTCArpBPqOPZ; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=CCEUNdIKokUhoFj4PoVtA6jgI18AAAAADgNPeJ2iiDgUd9Fvd5cb6A==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '7-23310832-23310833 NNYY CT(0 0 0) RT(1596186791682 28) q(0 0 0 -1) r(7 7) U5'
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
    "createdAt": "2020-07-31T09:13:02.525Z",
    "updatedAt": "2020-07-31T09:13:13.239Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 5,
    "publishedAt": "2020-07-31T09:13:11.265Z",
    "firstPublishedAt": "2020-07-31T09:13:03.067Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:13 GMT',
  'etag',
  'W/"3277070948305370559"',
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
  '62aae86f47861545330aaa451cca521b',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:id',
  'Content-Length',
  '496',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=3s2GcPU9T9mckxP8Q6pUaKjgI18AAAAAQUIPAAAAAACQ+gP0NOEVtMcR8G2+cWTw; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=QTRTGubLQ39aV1oqKsJtVwAAAAB2wq/3r7L84wkotbXqFskR; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=rmqaV+9QhBRnoFj4PoVtA6jgI18AAAAAxh9NArN5rFHOrWW4ULuqNw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '13-65871247-65871264 NNNY CT(0 0 0) RT(1596186792544 32) q(0 0 0 -1) r(3 3) U5'
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
    "createdAt": "2020-07-31T09:13:02.525Z",
    "updatedAt": "2020-07-31T09:13:13.914Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 7,
    "publishedAt": "2020-07-31T09:13:13.914Z",
    "firstPublishedAt": "2020-07-31T09:13:03.067Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:14 GMT',
  'etag',
  'W/"908674734835717879"',
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
  '38dcab1f7c9d2e67fb39fc560e84f2d9',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:id/published',
  'Content-Length',
  '493',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=6T8V/g12SnWxl8nEViZKDqngI18AAAAAQUIPAAAAAABjcthuNnHw6Yh/olVC8r2z; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=HwVpS2OBh0znqP7cKsJtVwAAAABNDtI9wCFbrHIbaiKrgWpz; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=sCGhb4pe8BEuoVj4PoVtA6ngI18AAAAAPZDtLA41Hr+3N3vge2cW7g==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '12-52244027-52244032 NNNN CT(85 87 0) RT(1596186793068 31) q(0 0 2 -1) r(6 6) U5'
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
    "createdAt": "2020-07-31T09:13:02.525Z",
    "updatedAt": "2020-07-31T09:13:13.914Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 7,
    "publishedAt": "2020-07-31T09:13:13.914Z",
    "firstPublishedAt": "2020-07-31T09:13:03.067Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:14 GMT',
  'etag',
  'W/"908674734835717879"',
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
  '7ad40fc0ef6c66c2c5df1e71dd45a5bb',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:id',
  'Content-Length',
  '493',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=SliuIwBcRPy8E/Fo2nAe26rgI18AAAAAQUIPAAAAAABYiThSOb0GF/rqrirzYSf1; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=832Ocs70VVcv9/jOKsJtVwAAAADZcXxBLAzfhmEsRFSh0P1b; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=vCx7b3AU81ewoVj4PoVtA6rgI18AAAAAQE4PJDghm8zsilZv0Ccz+Q==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '9-17462069-17462070 NNNN CT(86 88 0) RT(1596186793866 29) q(0 0 2 -1) r(4 4) U5'
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
        "createdAt": "2020-07-31T09:13:02.525Z",
        "updatedAt": "2020-07-31T09:13:13.914Z",
        "environment": {
          "sys": {
            "id": "env-integration",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 7,
        "publishedAt": "2020-07-31T09:13:13.914Z",
        "firstPublishedAt": "2020-07-31T09:13:03.067Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:15 GMT',
  'etag',
  'W/"17731423971348924036"',
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
  'ba7fb03879b459fbc8acef4ffeab790e',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types',
  'Content-Length',
  '556',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=LZ6FaY9vQxmI+gMwAXRYLargI18AAAAAQUIPAAAAAABN1h8ExBdZnm96+Z1rQh0D; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=7wmaKaB7a3LJthf8KsJtVwAAAACCzQBB7MzshbxqNY5SHrb0; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=0wxPIGty7w0Eolj4PoVtA6rgI18AAAAA9p0BtqLIldQxFq/gxUHgYg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '12-52244185-52244188 NNNY CT(0 0 0) RT(1596186794408 33) q(0 0 0 -1) r(2 2) U5'
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
    "createdAt": "2020-07-31T09:13:03.539Z",
    "createdBy": {
      "sys": {
        "id": "1Y7O5FbAkPYgNvD0MpQoAE",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2020-07-31T09:13:14.043Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:15 GMT',
  'etag',
  '"15816042221565723500"',
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
  '7168247d6b3393e78ab6b673ce5fdc7f',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:content_type/editor_interface',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=q48I1pM2Q5yyhteZETgQsavgI18AAAAAQUIPAAAAAADSgoytpCUE46V80MmeoyWM; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=fJrJblXtxks/DmuuKsJtVwAAAAC0cWQohn+lTlxEO3zdr7fd; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=XhnXZdOo+xuaolj4PoVtA6vgI18AAAAARduJcOk/r9Aikn5gOgzsjw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '12-52244279-52244287 NNYY CT(0 0 0) RT(1596186795010 41) q(0 0 0 -1) r(4 4) U5'
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
        "createdAt":"2020-07-31T09:12:59Z",
        "updatedAt":"2020-07-31T09:12:59Z"
      }
    }
  ]
}

, [
  'accept-ranges',
  'bytes',
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:16 GMT',
  'etag',
  'W/"3a66d930e1a85f4903a09c66833fed74"',
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
  'a0991a23f954e74958d6f661bd3c09aa',
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
  'visid_incap_673446=pR8MrV7eStySSDd3kZJ0KKvgI18AAAAAQUIPAAAAAADO7T6RMeIb9YXs/ILAO8gB; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=dZONENhB/iqe5EinKsJtVwAAAAA47obIFxw+f56q0hu7TRvc; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=8Ivhax98hW76olj4PoVtA6vgI18AAAAA7Msdq/2lfvfv+0OxFyUlsA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '13-65871785-65871793 NNYY CT(0 0 0) RT(1596186795722 32) q(0 0 0 -1) r(1 1) U5'
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
    "createdAt": "2020-07-31T09:13:02.525Z",
    "updatedAt": "2020-07-31T09:13:16.647Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 7,
    "publishedAt": "2020-07-31T09:13:13.914Z",
    "firstPublishedAt": "2020-07-31T09:13:03.067Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:16 GMT',
  'etag',
  'W/"5488626824726417732"',
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
  'bd0cfe3f218896f79eb215737b34a0d9',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:id',
  'Content-Length',
  '501',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=fbFOuDKgTSe58I1TW2ggaKzgI18AAAAAQUIPAAAAAABNp5Q6nJ/3T0n+ewXw60xN; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=7daIZ/kqlm/N160UKsJtVwAAAAC8VjUypE9qkalhrEWONPlu; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=2k3hC79QfzxJo1j4PoVtA6zgI18AAAAAfcrJj4L7C/V7+mHfhlaK7w==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '4-27595812-27595814 NNNY CT(0 0 0) RT(1596186795950 32) q(0 0 0 -1) r(3 3) U5'
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
    "createdAt": "2020-07-31T09:13:02.525Z",
    "updatedAt": "2020-07-31T09:13:17.185Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 9,
    "publishedAt": "2020-07-31T09:13:17.185Z",
    "firstPublishedAt": "2020-07-31T09:13:03.067Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:17 GMT',
  'etag',
  'W/"15480938015989161103"',
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
  '70af88b13ef7ac97187e0ea29251ff5a',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:id/published',
  'Content-Length',
  '497',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=/z4sRbupSeKp//qIX3ciiKzgI18AAAAAQUIPAAAAAABD4D+wNam7Bv8BRQ0m1Hua; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=OMrDf92kCVmOPYYLKsJtVwAAAADlAOx6w+6Ck7pioqg6wLqE; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=NnlvZYdNSU6lo1j4PoVtA6zgI18AAAAADMYu/YSpt2TUjJ1liPiIhQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '5-40681635-40681644 NNNN CT(93 93 0) RT(1596186796344 34) q(0 0 2 -1) r(5 5) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/dog/editor_interface', {"controls":[{"fieldId":"aDifferentId"}]})
  .reply(200, {"controls":[{"fieldId":"aDifferentId"}],"sys":{"id":"default","type":"EditorInterface","space":{"sys":{"id":"bohepdihyxin","type":"Link","linkType":"Space"}},"version":6,"createdAt":"2020-07-31T09:13:03.539Z","createdBy":{"sys":{"id":"1Y7O5FbAkPYgNvD0MpQoAE","type":"Link","linkType":"User"}},"updatedAt":"2020-07-31T09:13:17.621Z","updatedBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"contentType":{"sys":{"id":"dog","type":"Link","linkType":"ContentType"}},"environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}}}}, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:17 GMT',
  'etag',
  '"15587206916449136394"',
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
  'ea61d91cb23a6d2d9ad6a230b59537cc',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:content_type/editor_interface',
  'Content-Length',
  '922',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=QYUF1FcwTvy5/awyg+Al/q3gI18AAAAAQUIPAAAAAACkHM+hExv19PW4OrMXGi3p; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=6hSvWiDK8mMSp2v4KsJtVwAAAABLP2VqTkL2jV/GVfYH7Gss; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=AIwUdNIMoXDso1j4PoVtA63gI18AAAAA81cKw4+MDmYOcAbtX1aQZg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '5-40681701-40681705 NNNY CT(0 0 0) RT(1596186796954 34) q(0 0 0 -1) r(2 2) U5'
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
    "createdAt": "2020-07-31T09:13:02.525Z",
    "updatedAt": "2020-07-31T09:13:17.941Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 9,
    "publishedAt": "2020-07-31T09:13:17.185Z",
    "firstPublishedAt": "2020-07-31T09:13:03.067Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:17 GMT',
  'etag',
  'W/"14538435452168522087"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35997',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '7',
  'X-Contentful-Request-Id',
  '08e94d58d7ee042de5fb8becd3ff97a2',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:id',
  'Content-Length',
  '494',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=BnBCOJRGSCC2FVlqU8ric63gI18AAAAAQUIPAAAAAABLMPEUKlS0Zbqi6N+U4cXW; expires=Fri, 30 Jul 2021 16:27:18 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=g7iEbuvtIlxdvVkYKsJtVwAAAACE07/bmxJQmnDYyIcLnsEO; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=dlE+OWuN5RMspFj4PoVtA63gI18AAAAASYtmn1EERQpygnmv8ikdog==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '10-24864446-24864450 NNNY CT(0 0 0) RT(1596186797249 34) q(0 0 0 -1) r(3 3) U5'
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
    "createdAt": "2020-07-31T09:13:02.525Z",
    "updatedAt": "2020-07-31T09:13:18.399Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 11,
    "publishedAt": "2020-07-31T09:13:18.399Z",
    "firstPublishedAt": "2020-07-31T09:13:03.067Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:18 GMT',
  'etag',
  'W/"12792316609727034275"',
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
  '307daf8475862d7f6332780c61cda3b4',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:id/published',
  'Content-Length',
  '491',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=q0OkZKdPRtuFaYuK7/XEua7gI18AAAAAQUIPAAAAAAC2YOCj23KMrLxdJ/3lJzGB; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=3FleOlcvpjQQG4AIKsJtVwAAAACJeRPw3gVYbiW/rgjy9L4b; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=iWf/Yv8jnTKEpFj4PoVtA67gI18AAAAAnB9GlD4x3m4vd5qVbFRA8g==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '5-40681765-40681776 NNNN CT(88 88 0) RT(1596186797565 35) q(0 0 1 -1) r(4 4) U5'
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
    "createdAt": "2020-07-31T09:13:02.525Z",
    "updatedAt": "2020-07-31T09:13:18.399Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 11,
    "publishedAt": "2020-07-31T09:13:18.399Z",
    "firstPublishedAt": "2020-07-31T09:13:03.067Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:18 GMT',
  'etag',
  'W/"12792316609727034275"',
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
  'e4fd1c00a64b15ca689358ab0e918f8b',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:id',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=6BhIPH6kSOWLCQZzm5TraK7gI18AAAAAQUIPAAAAAAAsUedMkyVspsLr7CZla1lU; expires=Fri, 30 Jul 2021 16:27:12 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=FoA/Hwa1LGiumnIiKsJtVwAAAAAOvAyxbekbviZbDwkk8N9P; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=vkRYP8YlwmSppFj4PoVtA67gI18AAAAAEMSUK3Zix76xm/2z2vYNwQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '6-14115551-14115552 NNNY CT(0 0 0) RT(1596186798116 31) q(0 0 0 -1) r(2 2) U5'
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
        "createdAt": "2020-07-31T09:13:02.525Z",
        "updatedAt": "2020-07-31T09:13:18.399Z",
        "environment": {
          "sys": {
            "id": "env-integration",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 11,
        "publishedAt": "2020-07-31T09:13:18.399Z",
        "firstPublishedAt": "2020-07-31T09:13:03.067Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:19 GMT',
  'etag',
  'W/"14268794399567566900"',
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
  '23b0459fb42a957e3185d0ceaf3ec25c',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types',
  'Content-Length',
  '556',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=TH8u1/MrRjCcDtIpOf0IZa7gI18AAAAAQUIPAAAAAADXjC4IaaBhpudOgYNwpyRo; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=BMzDOlMuikmuDdk5KsJtVwAAAADQhGP+uwiVmEtdTDiVKgMc; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=nLAaV+YXq3P4pFj4PoVtA67gI18AAAAAMlaK3Ttu4Gtsb6TfGlsHng==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '5-40681877-40681882 NNNY CT(0 0 0) RT(1596186798588 33) q(0 0 0 -1) r(1 1) U5'
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:19 GMT',
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
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  'c181cd01969fc616247af1bd9f3a8275',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/entries',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=sb6jBaMPQeKW0nSlOIVeQK/gI18AAAAAQUIPAAAAAAB+Gmvco9WYMPC0+93V6XB9; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=piLJds1jmR6BQsdZKsJtVwAAAAA7Z7Q6ZI/2L5jmNaz8nrI2; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=c5EdZLIzVWpgpVj4PoVtA6/gI18AAAAAAlqcp7OED6CsKHyVwg72lw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '12-52244802-52244806 NNYY CT(0 0 0) RT(1596186798886 362) q(0 0 0 -1) r(2 2) U5'
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
        "createdAt":"2020-07-31T09:12:59Z",
        "updatedAt":"2020-07-31T09:12:59Z"
      }
    }
  ]
}

, [
  'accept-ranges',
  'bytes',
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:20 GMT',
  'etag',
  'W/"3a66d930e1a85f4903a09c66833fed74"',
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
  'ea28ee181b23353097cc9dd8f11cedfb',
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
  'visid_incap_673446=GXcC5ugiTNmjVXs0T9oa2q/gI18AAAAAQUIPAAAAAAC58GJaZ0COjUAdUNmqZFTD; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=JiA/GDoH6TGoYxmMKsJtVwAAAABxgq7MGzaTvqqcOfIHFiMw; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=BvcML48lqlvdpVj4PoVtA6/gI18AAAAABbfbUqukslMLB7RXOq4Upw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '5-40681972-40681974 NNYN CT(86 87 0) RT(1596186799620 31) q(0 0 2 -1) r(3 3) U5'
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
    "createdAt": "2020-07-31T09:13:02.525Z",
    "updatedAt": "2020-07-31T09:13:20.890Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "firstPublishedAt": "2020-07-31T09:13:03.067Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:20 GMT',
  'etag',
  'W/"11761035856391935177"',
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
  '4aa74550bf834d7c2c2a1afd9d58d551',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:id/published',
  'Content-Length',
  '465',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=MP43o+YlRSu3Tk0qBE9N27DgI18AAAAAQUIPAAAAAAAOa4YThtA1Q109lwx5Tz+N; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=3d3WCjMcFHIwdF79KsJtVwAAAAACG2j68HQGL/I5ZKyUBrDU; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=Aa6HOI9h8G1dplj4PoVtA7DgI18AAAAAu/cBC23aLICX53T+fm4eqw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '5-40682032-40682034 NNNN CT(93 93 0) RT(1596186800020 32) q(0 0 2 -1) r(4 4) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .delete('/spaces/bohepdihyxin/environments/env-integration/content_types/dog')
  .reply(204, "", [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:21 GMT',
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
  '5de6ea0647753f6f127f027cf0d75657',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:id',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=JjkTtvWERSivy1nrCOpLC7DgI18AAAAAQUIPAAAAAACPQW2geFFjgvHTwWgN1EJc; expires=Fri, 30 Jul 2021 16:27:06 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=SNTxQEuaXhdaX+u2KsJtVwAAAAA/x4lXkOakW3lElAKEGXMc; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=jxWWGzuYXUuiplj4PoVtA7DgI18AAAAAoZArxAVxDU0oTcwuJskxNQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '14-84961559-84961565 NNNY CT(0 0 0) RT(1596186800560 30) q(0 0 0 -1) r(2 2) U5'
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
  "requestId": "45ea5f7194f99df9629cb0d7990b835f"
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:21 GMT',
  'etag',
  '"10345218039453879145"',
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
  '45ea5f7194f99df9629cb0d7990b835f',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:id',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=Qycz9tVKQ+G/8BmYnIV6BLHgI18AAAAAQUIPAAAAAADb06Bm8AdjjrF7780Lc0/2; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=CrFacix2p3gl10pqKsJtVwAAAACXExEV2XP6VAMBoL65LmTw; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=f+0cBhVQO3b2plj4PoVtA7HgI18AAAAAToXibhbgCTSc3HLr6KACxQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '7-23311418-23311423 NNYY CT(0 0 0) RT(1596186801040 33) q(0 0 0 -1) r(2 2) U5'
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:22 GMT',
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
  '31ef02c5203c20579145840105614f9c',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=nI/8Pz1oSkGSKkMgvS3ydbHgI18AAAAAQUIPAAAAAAAetJtHNy46lSQPO0sy3uy6; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=S9WNOUWoAn4kAupvKsJtVwAAAACHLWhHURFMepILgs+PGfyh; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=i4bJUBJOOyq2p1j4PoVtA7HgI18AAAAAaPQqbkSdANvCnSzOAUHSNQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '11-39455712-39455722 NNYY CT(0 0 0) RT(1596186801566 30) q(0 0 0 -1) r(2 2) U5'
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
        "createdAt":"2020-07-31T09:12:59Z",
        "updatedAt":"2020-07-31T09:12:59Z"
      }
    }
  ]
}

, [
  'accept-ranges',
  'bytes',
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:22 GMT',
  'etag',
  'W/"3a66d930e1a85f4903a09c66833fed74"',
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
  '5f568ed5fbb05c43933a29d01156f74b',
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
  'visid_incap_673446=9QZwq6WVRYqFbDlZFh7KD7HgI18AAAAAQUIPAAAAAAB6k/PzLmFd5ijSY9QGh1FA; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=9ozcfilHWElmOq+8KsJtVwAAAAD9KSgICtP/AlkzrH4akKSp; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=21ONT0t5jHY7qFj4PoVtA7HgI18AAAAAGO8+c5enl0AS0zEZfWHfPg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '3-19363858-19363862 NNYY CT(0 0 0) RT(1596186801856 34) q(0 0 0 -1) r(1 1) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/dieatary-food', {"name":"Dieatary Food","fields":[{"id":"name","type":"Symbol","name":"name of the food","validations":[{"unique":true},{"prohibitRegexp":{"pattern":"foo","flags":null},"message":"asdf"}]},{"id":"calories","type":"Link","linkType":"Asset","name":"amount of calories the food contains","validations":[{"assetImageDimensions":{"width":{"min":1199,"max":null},"height":{"min":1343}}}]}],"description":"Food with up to 500 calories"})
  .reply(201, {"sys":{"space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"id":"dieatary-food","type":"ContentType","createdAt":"2020-07-31T09:13:22.879Z","updatedAt":"2020-07-31T09:13:22.879Z","environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}},"createdBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"updatedBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"publishedCounter":0,"version":1},"displayField":null,"name":"Dieatary Food","description":"Food with up to 500 calories","fields":[{"id":"name","name":"name of the food","type":"Symbol","localized":false,"required":false,"validations":[{"unique":true},{"prohibitRegexp":{"pattern":"foo","flags":null},"message":"asdf"}],"disabled":false,"omitted":false},{"id":"calories","name":"amount of calories the food contains","type":"Link","localized":false,"required":false,"validations":[{"assetImageDimensions":{"width":{"min":1199,"max":null},"height":{"min":1343}}}],"disabled":false,"omitted":false,"linkType":"Asset"}]}, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:22 GMT',
  'etag',
  '"3507421490040615732"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35997',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '7',
  'X-Contentful-Request-Id',
  'c61a3eb055494b69a7d85d573b47e35b',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:id',
  'Content-Length',
  '1783',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=BoD4p++9S+Cg0tMM0YsPPbLgI18AAAAAQUIPAAAAAACFBMHU9uvf8eyeimYGTpPd; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=B4qAZKa5LgIYm+V5KsJtVwAAAAAll9YIJECStKu6fRAZ1C0h; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=HK1rcC5jijObqFj4PoVtA7LgI18AAAAAOYTZlk/TprkTqLhvoTAD/g==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '7-23311517-23311522 NNNY CT(0 0 0) RT(1596186802067 36) q(0 0 0 -1) r(3 3) U5'
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
    "createdAt": "2020-07-31T09:13:22.879Z",
    "updatedAt": "2020-07-31T09:13:23.329Z",
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
    "firstPublishedAt": "2020-07-31T09:13:23.329Z",
    "publishedAt": "2020-07-31T09:13:23.329Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:23 GMT',
  'etag',
  'W/"11244028606068785774"',
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
  '4294a57407f31fc23ce15daebe173e6f',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:id/published',
  'Content-Length',
  '653',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=pYonsFgWTA6JHw1aluMAMrLgI18AAAAAQUIPAAAAAAAto0D0cAmodtzYiDCbI5Ib; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=j3tsY/BBmFszfzhrKsJtVwAAAACRM0tXqoDbVJzyJfo07DUd; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=sh9NVtj9sEz4qFj4PoVtA7LgI18AAAAAmdRKDtRRCTmhi4g1VzFbnA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '9-17462565-17462566 NNNY CT(0 0 0) RT(1596186802674 29) q(0 0 0 -1) r(2 2) U5'
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
    "createdAt": "2020-07-31T09:13:22.879Z",
    "updatedAt": "2020-07-31T09:13:23.329Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 1,
    "publishedAt": "2020-07-31T09:13:23.329Z",
    "firstPublishedAt": "2020-07-31T09:13:23.329Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:23 GMT',
  'etag',
  'W/"16213154424132223713"',
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
  'b2ea00e3b90ef10b74ad236b38ff2dd3',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:id',
  'Content-Length',
  '653',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=fXH57fEzRJCMyhcS0C5qvrPgI18AAAAAQUIPAAAAAAD97H2xX7gxdfAccyopTDe3; expires=Fri, 30 Jul 2021 16:27:06 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=JyRMGAW57UlmfFosKsJtVwAAAABGMuLAv5FNqalYPcpksgJo; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=+fSlevFq+hxeqVj4PoVtA7PgI18AAAAAnh4DpBlDzryD5XpPwMqnxw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '14-84962063-84962070 NNNN CT(92 87 0) RT(1596186803090 31) q(0 0 2 -1) r(3 3) U5'
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:24 GMT',
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
  'c6f5a3a904e7bcd2a1c11702c7da9f9e',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=P0GtyENgT1eBuhqZaCm4irPgI18AAAAAQUIPAAAAAADlaVYrRupedZZojKWttlpD; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=ERvVG/UJRBGyfEGoKsJtVwAAAAClISxLiMcXL/yAN+iXowc7; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=rn8EHHAHqUuhqVj4PoVtA7PgI18AAAAAD/mwL5Ppf1k3JKUAqjuKKA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '5-40682432-40682439 NNYY CT(0 0 0) RT(1596186803528 29) q(0 0 0 -1) r(2 2) U5'
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
        "createdAt":"2020-07-31T09:12:59Z",
        "updatedAt":"2020-07-31T09:12:59Z"
      }
    }
  ]
}

, [
  'accept-ranges',
  'bytes',
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:25 GMT',
  'etag',
  'W/"3a66d930e1a85f4903a09c66833fed74"',
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
  '5ecc5175a9b657705c21caffaff1bb36',
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
  'visid_incap_673446=POU2Xtt6QxehMR0NqxG15LTgI18AAAAAQUIPAAAAAACMYJzwKGJBErHRU2zSD+VJ; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=NfYUcqWCcVGaY1r0KsJtVwAAAAASkZjvHzFIrZ4bcuGijhM0; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=eMFoBc3KtBBWqlj4PoVtA7TgI18AAAAAhK8jTo0WZWjKbJIHsORVRg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '3-19363932-19363933 NNYY CT(0 0 0) RT(1596186803812 27) q(0 0 0 -1) r(7 7) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/food', {"name":"foooood","displayField":"taste","fields":[{"id":"taste","type":"Symbol","name":"what it tastes like"}],"description":" well, food"})
  .reply(201, {"sys":{"space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"id":"food","type":"ContentType","createdAt":"2020-07-31T09:13:25.544Z","updatedAt":"2020-07-31T09:13:25.544Z","environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}},"createdBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"updatedBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"publishedCounter":0,"version":1},"displayField":"taste","name":"foooood","description":" well, food","fields":[{"id":"taste","name":"what it tastes like","type":"Symbol","localized":false,"required":false,"validations":[],"disabled":false,"omitted":false}]}, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:25 GMT',
  'etag',
  '"15814188941054989928"',
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
  'a1a21ed4a60dd7d65418c7a74e1379a9',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:id',
  'Content-Length',
  '1064',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=6QOFsGcqQmuCub3VI7t1VLXgI18AAAAAQUIPAAAAAACE369L0GyHfghfyoidgMir; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=0e33KsZT0SzGOjEMKsJtVwAAAAAKKYEI4GLmGLA/dDjsZ5J9; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=+IxHQiJWsiABq1j4PoVtA7XgI18AAAAAWdhDxs4mV+rQAPDFFU1Gbw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '13-65873201-65873204 NNNY CT(0 0 0) RT(1596186804730 24) q(0 0 0 -1) r(4 4) U5'
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
    "createdAt": "2020-07-31T09:13:25.544Z",
    "updatedAt": "2020-07-31T09:13:26.003Z",
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
    "firstPublishedAt": "2020-07-31T09:13:26.003Z",
    "publishedAt": "2020-07-31T09:13:26.003Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:26 GMT',
  'etag',
  'W/"2922171258966467655"',
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
  '7cec7df941c69b4135257d1e4a9afebe',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:id/published',
  'Content-Length',
  '447',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=37qHwlI4Qcq2/PYHf998LLXgI18AAAAAQUIPAAAAAADNx0nnBdXejvcUE5+6mCrX; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=M3+4JK/qVHp1pW7XKsJtVwAAAAC7iJuedodZY/CnaXH6qCSu; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=iGFAX/OnZExrq1j4PoVtA7XgI18AAAAARddkLOvTW89DS8DopYYDjg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '9-17462673-17462677 NNNY CT(0 0 0) RT(1596186805348 34) q(0 0 0 -1) r(3 3) U5'
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
        "createdAt": "2020-07-31T09:13:25.544Z",
        "updatedAt": "2020-07-31T09:13:26.003Z",
        "environment": {
          "sys": {
            "id": "env-integration",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 1,
        "publishedAt": "2020-07-31T09:13:26.003Z",
        "firstPublishedAt": "2020-07-31T09:13:26.003Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:26 GMT',
  'etag',
  'W/"9394757073582230157"',
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
  '5b6bbf36c7808b6d31c0374a4c35cc1b',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types',
  'Content-Length',
  '515',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=inTQXMCMTSSW3L+qyB49E7bgI18AAAAAQUIPAAAAAADPzvGfett2TIFtKeUaVfPW; expires=Fri, 30 Jul 2021 16:27:06 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=7tTRLEqTECIS1r7kKsJtVwAAAABoSs77H7Q9zDbRj0lLlo+8; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=cjb1O8SYAAXYq1j4PoVtA7bgI18AAAAAsnbCwkVD8NBm6YXSezjklQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '14-84962716-84962727 NNNN CT(88 89 0) RT(1596186805774 30) q(0 0 1 -1) r(3 3) U5'
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
        "createdAt":"2020-07-31T09:12:59Z",
        "updatedAt":"2020-07-31T09:12:59Z"
      }
    }
  ]
}

, [
  'accept-ranges',
  'bytes',
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:27 GMT',
  'etag',
  'W/"3a66d930e1a85f4903a09c66833fed74"',
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
  '407d5c857715f8e78f6a3a9cd884ca7e',
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
  'visid_incap_673446=ufd1A0ncTjKYJhtGgQONTbbgI18AAAAAQUIPAAAAAABzIVAlRspSB7SqOWXClxDL; expires=Fri, 30 Jul 2021 16:27:06 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=+odGaIvXKX5uCP9HKsJtVwAAAACINIiF8WL09sbXTIHim2up; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=QcmrW1BkkQExrFj4PoVtA7bgI18AAAAA3FR7Qq/aKKO220VyyMAxxA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '14-84962810-84962818 NNYN CT(101 98 0) RT(1596186806224 30) q(0 0 2 -1) r(3 3) U5'
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
    "createdAt": "2020-07-31T09:13:25.544Z",
    "updatedAt": "2020-07-31T09:13:27.339Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 1,
    "publishedAt": "2020-07-31T09:13:26.003Z",
    "firstPublishedAt": "2020-07-31T09:13:26.003Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:27 GMT',
  'etag',
  'W/"8613720853692478860"',
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
  '9d73816976955cc4b49fdb9225cf78bb',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:id',
  'Content-Length',
  '592',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=rNdXH63bQNGJDnaGND3DZbbgI18AAAAAQUIPAAAAAACpA6JgPkCgBvsL9vDmsbGS; expires=Fri, 30 Jul 2021 16:27:18 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=CrH2IJ7Sfk59/F+DKsJtVwAAAAB+9QBg+mKyVg9CJThlX2jz; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=NzaRPRRHw1ZurFj4PoVtA7bgI18AAAAAUoC9MMCyFIFrlwMKcZ8rqA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '10-24865164-24865167 NNNY CT(0 0 0) RT(1596186806650 29) q(0 0 0 -1) r(3 3) U5'
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
    "createdAt": "2020-07-31T09:13:25.544Z",
    "updatedAt": "2020-07-31T09:13:27.619Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 3,
    "publishedAt": "2020-07-31T09:13:27.619Z",
    "firstPublishedAt": "2020-07-31T09:13:26.003Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:27 GMT',
  'etag',
  'W/"10265578383722191532"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35997',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '7',
  'X-Contentful-Request-Id',
  '3f624b526d35ca08de5d534f4b9dbafb',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:id/published',
  'Content-Length',
  '598',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=iuAky2nLQd25lQthXsyi5bfgI18AAAAAQUIPAAAAAADuIvnDHxLLTlT/VNhNODSj; expires=Fri, 30 Jul 2021 16:27:06 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=L4U0RMp1ZlGxO6lSKsJtVwAAAAAHEDZdDuBhu9mYb0ErrVP5; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=nYZdMFYkyyu2rFj4PoVtA7fgI18AAAAAsqbNDQF9R0dAQkudo8TlrA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '14-84962960-84962973 NNNY CT(0 0 0) RT(1596186806978 31) q(0 0 0 -1) r(2 2) U5'
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
    "createdAt": "2020-07-31T09:13:25.544Z",
    "updatedAt": "2020-07-31T09:13:27.619Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 3,
    "publishedAt": "2020-07-31T09:13:27.619Z",
    "firstPublishedAt": "2020-07-31T09:13:26.003Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:28 GMT',
  'etag',
  'W/"10265578383722191532"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35996',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '6',
  'X-Contentful-Request-Id',
  '6c2a9bc3790aa724537a08eff1c1563f',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:id',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=CG8UluZiQJqoXueN3I+nYLfgI18AAAAAQUIPAAAAAACKYcz49J2Ecsx69J6GY839; expires=Fri, 30 Jul 2021 16:27:12 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=+4ydXufkX3icfWvBKsJtVwAAAACIZzOQLagqxIy4ZNJFq3ve; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=fd49dQ22+gbkrFj4PoVtA7fgI18AAAAA8oQ4+9FTCrkC/fZtulEGcA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '6-14115858-14115861 NNNY CT(0 0 0) RT(1596186807358 31) q(0 0 0 -1) r(2 2) U5'
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:28 GMT',
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
  'e183490ce6dc2a4893440227735cdcce',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=ZOyep3xvSOOizpsKan2UnrjgI18AAAAAQUIPAAAAAABGZR8ktFqPiKRXT61oZmuX; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=5QymKu3uZxVEgS0tKsJtVwAAAABoW1HRt/JPX+QDBPKVAUEp; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=DvZwRnp54BkzrVj4PoVtA7jgI18AAAAATvVTS5m8NwdsNO9Yl9dfAg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '12-52245955-52245960 NNYY CT(0 0 0) RT(1596186807830 35) q(0 0 0 -1) r(2 2) U5'
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:28 GMT',
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
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  'd2249881dcda9af05692a9e9b3c45e19',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/tags',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=f08Y4WVRQbi01xHFICwvWbjgI18AAAAAQUIPAAAAAACixh+FsBZtvlGZ00nvlGDi; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=EeVTVML3vGpDccsIKsJtVwAAAADIwtBJGCyeaE3gktF+nRGU; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=cPLzSf93Ugx9rVj4PoVtA7jgI18AAAAAcBALSo73+R1Sxk6HrX1chw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '3-19364073-19364075 NNYY CT(0 0 0) RT(1596186808102 33) q(0 0 0 -1) r(1 1) U5'
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
        "createdAt":"2020-07-31T09:12:59Z",
        "updatedAt":"2020-07-31T09:12:59Z"
      }
    }
  ]
}

, [
  'accept-ranges',
  'bytes',
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:29 GMT',
  'etag',
  'W/"3a66d930e1a85f4903a09c66833fed74"',
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
  '8e6b87df04fedb86e7b0f9a3c359162d',
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
  'visid_incap_673446=oWYxoj0NQ4iU+mXNySMPObjgI18AAAAAQUIPAAAAAAComMB2FLcGN49LP/6ZcjYc; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=TFSKCkXDqhVRIedTKsJtVwAAAABcTyL3mFVjV9RtDyBwwDrr; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=9i3gU1GgQl+5rVj4PoVtA7jgI18AAAAArWWUe1grXgyj8nuyF0V43Q==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '8-8209588-8209594 NNYY CT(0 0 0) RT(1596186808420 27) q(0 0 0 -1) r(1 1) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/person', {"name":"Person","fields":[{"id":"age","name":"Age","type":"Number","required":true},{"id":"fullName","name":"Full name","type":"Symbol","required":true,"localized":true}],"description":"A content type for a person"})
  .reply(201, {"sys":{"space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"id":"person","type":"ContentType","createdAt":"2020-07-31T09:13:29.482Z","updatedAt":"2020-07-31T09:13:29.482Z","environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}},"createdBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"updatedBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"publishedCounter":0,"version":1},"displayField":null,"name":"Person","description":"A content type for a person","fields":[{"id":"age","name":"Age","type":"Number","localized":false,"required":true,"validations":[],"disabled":false,"omitted":false},{"id":"fullName","name":"Full name","type":"Symbol","localized":true,"required":true,"validations":[],"disabled":false,"omitted":false}]}, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:29 GMT',
  'etag',
  '"13648739930836122924"',
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
  '44e4ba82b87f2ca17997ef734729ad3f',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:id',
  'Content-Length',
  '1269',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=GaSNgesvRa+zmbF/7Ho0u7ngI18AAAAAQUIPAAAAAABp0bPisxcmtRVnqTtNMmMo; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=0S1eJlHrhU9vaoFxKsJtVwAAAAA23S57K7g9OBxRDquaplMM; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=v26+OMjYETAvrlj4PoVtA7ngI18AAAAAgN0Ky6noXu11IPEx+WYscQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '5-40683044-40683048 NNNN CT(86 87 0) RT(1596186808636 27) q(0 0 2 -1) r(5 5) U5'
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
    "createdAt": "2020-07-31T09:13:29.482Z",
    "updatedAt": "2020-07-31T09:13:29.889Z",
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
    "firstPublishedAt": "2020-07-31T09:13:29.889Z",
    "publishedAt": "2020-07-31T09:13:29.889Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:29 GMT',
  'etag',
  'W/"4505723387120697273"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35997',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '7',
  'X-Contentful-Request-Id',
  'ce5b7a2bb9bd5b81b21f794ed35572cf',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:id/published',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=DdPby6F5TruK52VoIYp3G7ngI18AAAAAQUIPAAAAAACnaZ3fGtpUiUcfFQOHlUrM; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=khcnbKweEgcmbfheKsJtVwAAAADF9pC/okVibj9Q825h/Bye; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=0FctRDUx9zBtrlj4PoVtA7ngI18AAAAAssCWnK0hO9wC3TMdogIA3g==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '13-65874065-65874073 NNNY CT(0 0 0) RT(1596186809238 36) q(0 0 0 -1) r(2 2) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/animal', {"name":"Animal","fields":[{"id":"species","name":"The species of the animal","type":"Symbol","required":true},{"id":"isFurry","name":"Is this a furry animal","type":"Boolean","required":false}],"description":"An animal"})
  .reply(201, {"sys":{"space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"id":"animal","type":"ContentType","createdAt":"2020-07-31T09:13:30.348Z","updatedAt":"2020-07-31T09:13:30.348Z","environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}},"createdBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"updatedBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"publishedCounter":0,"version":1},"displayField":null,"name":"Animal","description":"An animal","fields":[{"id":"species","name":"The species of the animal","type":"Symbol","localized":false,"required":true,"validations":[],"disabled":false,"omitted":false},{"id":"isFurry","name":"Is this a furry animal","type":"Boolean","localized":false,"required":false,"validations":[],"disabled":false,"omitted":false}]}, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:30 GMT',
  'etag',
  '"8881201910345126301"',
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
  'aa2c425dc4b81d0635b38e53f23b5312',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:id',
  'Content-Length',
  '1292',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=LD7BxDbZQFWcOivqXXEiHbngI18AAAAAQUIPAAAAAABvoWvvaPobgqY/Wtx3zOHF; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=lXOTc68x6XAtVkRGKsJtVwAAAABHlnZbEt3TW/Gqi5G6NJS5; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=YqgZStEmdFO5rlj4PoVtA7ngI18AAAAAgLklA8THaME8Al/3NDnRBA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '5-40683133-40683138 NNNY CT(0 0 0) RT(1596186809648 32) q(0 0 0 -1) r(3 3) U5'
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
    "createdAt": "2020-07-31T09:13:30.348Z",
    "updatedAt": "2020-07-31T09:13:30.720Z",
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
    "firstPublishedAt": "2020-07-31T09:13:30.720Z",
    "publishedAt": "2020-07-31T09:13:30.720Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:30 GMT',
  'etag',
  'W/"16152029567065384055"',
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
  '65bb9b95133a70204abd8e0a7ca7ec80',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:id/published',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=AE24R1mPT5SiYE9p3yvaKLrgI18AAAAAQUIPAAAAAABV1ONY2zCv/0egP7CXAKE0; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=/8VZXWImJgnh027aKsJtVwAAAABKAn6PwNV13TujWWdpBhvh; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=Gm5RB7IXJyj4rlj4PoVtA7rgI18AAAAAqJeJc6IKx+QYAIk+ytaFZw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '11-39456882-39456884 NNNY CT(0 0 0) RT(1596186810054 34) q(0 0 0 -1) r(3 3) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/tags/longexampletag', {"sys":{"id":"longexampletag","version":0},"name":"long example marketing"})
  .reply(201, {"sys":{"id":"longexampletag","version":1,"space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}},"type":"Tag","createdAt":"2020-07-31T09:13:31.138Z","createdBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"updatedAt":"2020-07-31T09:13:31.138Z","updatedBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}}},"name":"long example marketing"}, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:31 GMT',
  'etag',
  '"6705420793186716123"',
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
  '2514a1274bdfc606a06055c89b56e6f4',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/tags/:id',
  'Content-Length',
  '758',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=2aMAIky8Sa+0SVEyIcEdlrrgI18AAAAAQUIPAAAAAAASgLotRzbNiP9HDhQdNcjV; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=P3q8DjeGajxzBLkBKsJtVwAAAAACsEv1/LvU0BIeuSKbDJVZ; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=KPbKHpciTjxLr1j4PoVtA7rgI18AAAAAhaaNW4GJhkCq5WLLiQ25RA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '13-65874345-65874359 NNNY CT(0 0 0) RT(1596186810464 34) q(0 0 0 -1) r(4 4) U5'
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
    "createdAt": "2020-07-31T09:13:29.482Z",
    "updatedAt": "2020-07-31T09:13:31.950Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 1,
    "publishedAt": "2020-07-31T09:13:29.889Z",
    "firstPublishedAt": "2020-07-31T09:13:29.889Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:31 GMT',
  'etag',
  'W/"14232054846049809605"',
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
  '2f306a25cfdf492555d8fa001b18eb33',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:id',
  'Content-Length',
  '518',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=I06XQtbcTsyGItpVg10Fp7vgI18AAAAAQUIPAAAAAADadw+x+UvmGSPWxIHzVSua; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=TGz3VtGsm1qfSdmnKsJtVwAAAAA2woUZ5vTOwEW4Eg/ms00y; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=RLCpFvCFNivhr1j4PoVtA7vgI18AAAAAtgDfCAQrIGPO9Cd/jNte4A==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '11-39456950-39456953 NNNN CT(94 87 0) RT(1596186811082 30) q(0 0 1 -1) r(4 4) U5'
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
    "createdAt": "2020-07-31T09:13:29.482Z",
    "updatedAt": "2020-07-31T09:13:32.457Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 3,
    "publishedAt": "2020-07-31T09:13:32.457Z",
    "firstPublishedAt": "2020-07-31T09:13:29.889Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:32 GMT',
  'etag',
  'W/"15756459895754253683"',
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
  '07fa1ed053fa42775febb0e822a313b4',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:id/published',
  'Content-Length',
  '525',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=8ErXPfxcRQaXESBsm5sCvbzgI18AAAAAQUIPAAAAAADfDyNPNGtkq7fV3lw/yqqe; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=u/IrGP4IITs6eIQGKsJtVwAAAACS5r3tV/9l+BtA0XxEfcFy; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=NlrtXO8VrSlDsVj4PoVtA7zgI18AAAAAi7XcnPGg9RN+IvnDSNYzdw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '13-65874599-65874620 NNNY CT(0 0 0) RT(1596186811682 31) q(0 0 0 -1) r(3 3) U5'
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
    "createdAt": "2020-07-31T09:13:30.348Z",
    "updatedAt": "2020-07-31T09:13:33.046Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 1,
    "publishedAt": "2020-07-31T09:13:30.720Z",
    "firstPublishedAt": "2020-07-31T09:13:30.720Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:33 GMT',
  'etag',
  'W/"8592166327416371371"',
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
  'e0b61080f029d784573d5bbc14bf4c65',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:id',
  'Content-Length',
  '510',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=h+s38M9hRDWvPWiRSCbJ8bzgI18AAAAAQUIPAAAAAABam2zlyQUGL9kIDxvy8AZN; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=o9FMFJBa5g8ubtwuKsJtVwAAAAAQivlIdRsVJwCdqe6kBgqA; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=owTEQcoW7UWksVj4PoVtA7zgI18AAAAAEEWTwsLpbriTXrWwCilzTQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '11-39457080-39457082 NNNY CT(0 0 0) RT(1596186812313 42) q(0 0 0 -1) r(3 3) U5'
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
    "createdAt": "2020-07-31T09:13:30.348Z",
    "updatedAt": "2020-07-31T09:13:33.552Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 3,
    "publishedAt": "2020-07-31T09:13:33.552Z",
    "firstPublishedAt": "2020-07-31T09:13:30.720Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:33 GMT',
  'etag',
  'W/"16512635581848584191"',
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
  '17a9547118cf3cb8be74d0533849a66c',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:id/published',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=gZCwdp4SR8KYT/t9rCRY573gI18AAAAAQUIPAAAAAADadxrVJK0uQYYzAjQeoeii; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=GJ99VmCtqWxO8NfXKsJtVwAAAADg/QWaGA1krrAJZkXaqg/I; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=QN4tIxDqnBZDslj4PoVtA73gI18AAAAAV4c7HEjDAays13rLcRv+FQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '3-19364303-19364307 NNNN CT(93 93 0) RT(1596186812710 29) q(0 0 2 -1) r(5 5) U5'
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
    "createdAt": "2020-07-31T09:13:29.482Z",
    "updatedAt": "2020-07-31T09:13:32.457Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 3,
    "publishedAt": "2020-07-31T09:13:32.457Z",
    "firstPublishedAt": "2020-07-31T09:13:29.889Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:34 GMT',
  'etag',
  'W/"15756459895754253683"',
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
  '92e0a73ac06a4b96b972b21b8b4d9b09',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:id',
  'Content-Length',
  '525',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=KsIYcA88T1qljPIS69esOb3gI18AAAAAQUIPAAAAAAAxVcatDoJAYIux+XM6p/3R; expires=Fri, 30 Jul 2021 16:27:18 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=mxI8MSNWNj5/Db6BKsJtVwAAAACnbGvFstmBAZHXPwufrUOd; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=7YBPcB7usjegslj4PoVtA73gI18AAAAAZmP2FL4zoYygWKA3t3dZtw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '10-24865504-24865506 NNNY CT(0 0 0) RT(1596186813528 34) q(0 0 0 -1) r(2 2) U5'
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
    "createdAt": "2020-07-31T09:13:30.348Z",
    "updatedAt": "2020-07-31T09:13:33.552Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 3,
    "publishedAt": "2020-07-31T09:13:33.552Z",
    "firstPublishedAt": "2020-07-31T09:13:30.720Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:34 GMT',
  'etag',
  'W/"16512635581848584191"',
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
  '66c1e1a53ead847a82b46d9ad25756be',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:id',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=Z4tz7jN7QEiY21ZDPZf0d77gI18AAAAAQUIPAAAAAAD26+UcfLYIFdZZ7ZDR/9p3; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=xVMUY4HK9jOcwUQ0KsJtVwAAAADG1PCfEEoC7whaSgV019JV; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=RZtsQNEcimTpslj4PoVtA77gI18AAAAAgZTcS5helHQEC7Azmmxjig==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '11-39457259-39457261 NNNY CT(0 0 0) RT(1596186813836 24) q(0 0 0 -1) r(2 2) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/tags/longexampletag')
  .reply(200, {
  "sys": {
    "type": "Tag",
    "id": "longexampletag",
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
    "createdAt": "2020-07-31T09:13:31.138Z",
    "updatedAt": "2020-07-31T09:13:31.138Z",
    "version": 1
  },
  "name": "long example marketing"
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:34 GMT',
  'etag',
  '"18206199727241464882"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35997',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '7',
  'X-Contentful-Request-Id',
  '6c1749f7213bea35142a1427496710a4',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/tags/:id',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=Ddxk7/N7TfO07d8QdMbl2L7gI18AAAAAQUIPAAAAAAD+OjPr1yJSoWJc6Itwx6yG; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=ND6VL0p0dUHHW8TRKsJtVwAAAAB+C4cnTJKLHDMKuzOhT0M/; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=TzyCNzw5bEoxs1j4PoVtA77gI18AAAAAYyLuVeU+flapfxEvjbCIFg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '13-65875226-65875231 NNYY CT(0 0 0) RT(1596186814148 26) q(0 0 0 -1) r(2 2) U5'
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
        "createdAt": "2020-07-31T09:13:29.482Z",
        "updatedAt": "2020-07-31T09:13:32.457Z",
        "environment": {
          "sys": {
            "id": "env-integration",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 3,
        "publishedAt": "2020-07-31T09:13:32.457Z",
        "firstPublishedAt": "2020-07-31T09:13:29.889Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:35 GMT',
  'etag',
  'W/"13503175910813419041"',
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
  '362984fe6181e9089125eb09f4e76708',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types',
  'Content-Length',
  '589',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=RUoCJcK6TeaF8atza38hzb7gI18AAAAAQUIPAAAAAADGBR4yDyyuJTrzidv/fanx; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=aHTPIhSczj4YMmCjKsJtVwAAAADZnUTf9TiX2XD2zhtMyAh2; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=ZhlsUkYOyCSqs1j4PoVtA77gI18AAAAAb6B16myVv3Rd8KNW98dglQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '12-52247153-52247159 NNNY CT(0 0 0) RT(1596186814580 34) q(0 0 0 -1) r(3 3) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/blogpost', {"name":"blog post","fields":[{"name":"title","id":"title","type":"Symbol"},{"name":"category","id":"category","type":"Symbol"}]})
  .reply(201, {"sys":{"space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"id":"blogpost","type":"ContentType","createdAt":"2020-07-31T09:13:35.683Z","updatedAt":"2020-07-31T09:13:35.683Z","environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}},"createdBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"updatedBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"publishedCounter":0,"version":1},"displayField":null,"name":"blog post","description":null,"fields":[{"id":"title","name":"title","type":"Symbol","localized":false,"required":false,"validations":[],"disabled":false,"omitted":false},{"id":"category","name":"category","type":"Symbol","localized":false,"required":false,"validations":[],"disabled":false,"omitted":false}]}, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:35 GMT',
  'etag',
  '"11236459237248880082"',
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
  '0a9f0d6f3e7e261c9d09d3d4333a1533',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:id',
  'Content-Length',
  '1255',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=B+TDixldSIW/A473iKxkR7/gI18AAAAAQUIPAAAAAADKI8nYd6X0lXmsEUbXvy5p; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=d3S9MNpE6j01KUJbKsJtVwAAAACNerQmGPALsRFxTbhbiznY; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=3DEuBLC/Nwn9s1j4PoVtA7/gI18AAAAAx4YRiZrYwHFCb3nv94DCUw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '13-65875377-65875381 NNNY CT(0 0 0) RT(1596186814990 28) q(0 0 0 -1) r(2 2) U5'
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
    "createdAt": "2020-07-31T09:13:35.683Z",
    "updatedAt": "2020-07-31T09:13:36.022Z",
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
    "firstPublishedAt": "2020-07-31T09:13:36.022Z",
    "publishedAt": "2020-07-31T09:13:36.022Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:36 GMT',
  'etag',
  'W/"17934258647560032041"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35997',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '7',
  'X-Contentful-Request-Id',
  'dd405df235698832f9f553025a456060',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:id/published',
  'Content-Length',
  '446',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=34XQVB5/TYey2fvXAZn+q7/gI18AAAAAQUIPAAAAAAAX4Z78Vq+jXjPGf6A4IEd9; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=rUNcS/49tm4xQR9vKsJtVwAAAABVdOmYN+0CrCChTgv9+Z9b; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=K3OuboqK40NFtFj4PoVtA7/gI18AAAAA/mYMLlveNbK5vFcHgQwAKA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '9-17463282-17463288 NNNY CT(0 0 0) RT(1596186815376 25) q(0 0 0 -1) r(2 2) U5'
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
    "id": "6Ax23ArJaYqn1UYRLNZBkx",
    "type": "Entry",
    "createdAt": "2020-07-31T09:13:36.623Z",
    "updatedAt": "2020-07-31T09:13:36.623Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:36 GMT',
  'etag',
  '"15714295334758848179"',
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
  '7d86dbb22ab5bf6b4f6d5a881cfd2235',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/entries',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=hQV3iyxJSa6PcDZJvbx9lMDgI18AAAAAQUIPAAAAAACLccvG6kN2OHZmVQFvriA+; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=WbIHJn4R7xfDVhK3KsJtVwAAAAAusfF//RI+2L9YvGShsuGu; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=D2LCY1WjoyTWtFj4PoVtA8DgI18AAAAAjBbWFi7UQY6c4kAALSvY5Q==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '11-39457499-39457504 NNYY CT(0 0 0) RT(1596186815800 36) q(0 0 0 -1) r(4 4) U5'
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
    "id": "4cq3btwYzYNsrF6nONRfsH",
    "type": "Entry",
    "createdAt": "2020-07-31T09:13:37.015Z",
    "updatedAt": "2020-07-31T09:13:37.015Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:37 GMT',
  'etag',
  '"10516464715104328011"',
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
  '8ed84271aeee22dac68fe7d4ae5474f5',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/entries',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=cT51dyokTDKiTpxS12EuS8DgI18AAAAAQUIPAAAAAACMjdvJxjX8T7bmfVnYIylJ; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=Qlv2fKnoyFSrh6rKKsJtVwAAAADNG7STUjjSVKpOq5bpZUj4; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=X8mXbEtLn2YrtVj4PoVtA8DgI18AAAAAlDUdTNvE9R/Mh49mWQhlGA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '13-65875671-65875679 NNYY CT(0 0 0) RT(1596186816324 32) q(0 0 0 -1) r(3 3) U5'
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
        "createdAt": "2020-07-31T09:13:35.683Z",
        "updatedAt": "2020-07-31T09:13:36.022Z",
        "environment": {
          "sys": {
            "id": "env-integration",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 1,
        "publishedAt": "2020-07-31T09:13:36.022Z",
        "firstPublishedAt": "2020-07-31T09:13:36.022Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:37 GMT',
  'etag',
  'W/"6661045817660350137"',
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
  'e895c5ae23b660ed32a39eeac1d401ae',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=VbtEnwbLQIa56Nr2NHOJe8HgI18AAAAAQUIPAAAAAAB0ZEanXrd/sMRKRnInh3i/; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=RZ7wUqNht2Rmh7dnKsJtVwAAAAAKOF9qkXk23JUa0QNbl8Rz; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=pBnob64F8yuQtVj4PoVtA8HgI18AAAAA74/u2/5RJHN2hqvupsYMqw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '2-9912021-9912022 NNNY CT(0 0 0) RT(1596186816825 27) q(0 0 0 -1) r(2 2) U5'
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
        "id": "6Ax23ArJaYqn1UYRLNZBkx",
        "type": "Entry",
        "createdAt": "2020-07-31T09:13:36.623Z",
        "updatedAt": "2020-07-31T09:13:36.623Z",
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
        "id": "4cq3btwYzYNsrF6nONRfsH",
        "type": "Entry",
        "createdAt": "2020-07-31T09:13:37.015Z",
        "updatedAt": "2020-07-31T09:13:37.015Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:37 GMT',
  'etag',
  'W/"17944526269565290195"',
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
  '1e9d9e345368fe777b58d03844cf343c',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/entries',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=nqsXtQaCSty3IOnyKDMqysHgI18AAAAAQUIPAAAAAABb4TOSwjobyw/4b3riObNl; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=0jrvMTkIuBuptygJKsJtVwAAAAA0HUeadkGZNcjIohvGncCN; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=3SrGUyZgwWXttVj4PoVtA8HgI18AAAAA0KaUioVzIMWpI+hKEf79rg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '12-52247482-52247486 NNNY CT(0 0 0) RT(1596186817110 33) q(0 0 0 -1) r(3 3) U5'
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
        "createdAt":"2020-07-31T09:12:59Z",
        "updatedAt":"2020-07-31T09:12:59Z"
      }
    }
  ]
}

, [
  'accept-ranges',
  'bytes',
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:38 GMT',
  'etag',
  'W/"3a66d930e1a85f4903a09c66833fed74"',
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
  '970b4bb95062be05958d619a03ad0709',
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
  'visid_incap_673446=i4JVGW5uQrWF3odzaUJCSsHgI18AAAAAQUIPAAAAAAAPVVmqvPGze1B/OPWopWtS; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=UR3aRdB0XB17mfU1KsJtVwAAAAAOlLhi8UqQxOU9uQgN6p7u; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=P0okCYddtnootlj4PoVtA8HgI18AAAAAg+eJQPdzm90fXzNDj7cXEA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '12-52247499-52247504 NNYY CT(0 0 0) RT(1596186817537 30) q(0 0 0 -1) r(1 1) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/entries/6Ax23ArJaYqn1UYRLNZBkx', {"sys":{"id":"6Ax23ArJaYqn1UYRLNZBkx","version":1,"contentType":{"sys":{"type":"Link","linkType":"ContentType","id":"blogpost"}}},"fields":{"title":{"en-US":"hello!"},"category":{"en-US":"hello!"}},"metadata":{"tags":[]}})
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
    "id": "6Ax23ArJaYqn1UYRLNZBkx",
    "type": "Entry",
    "createdAt": "2020-07-31T09:13:36.623Z",
    "updatedAt": "2020-07-31T09:13:38.653Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:38 GMT',
  'etag',
  'W/"8194884261535203445"',
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
  '56446826301bdadb0873f6642cee2a5c',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/entries/:id',
  'Content-Length',
  '388',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=ticCK8L/SWSUFq8ATxgnicLgI18AAAAAQUIPAAAAAACQ9lKTpU8LTrCFjLet3BLi; expires=Fri, 30 Jul 2021 16:27:18 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=XdZ5eV1CeGZ3y1jCKsJtVwAAAABhPT1LvTZeDPvJiC2f2zQN; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=se1Hbkh/6UWdtlj4PoVtA8LgI18AAAAABqQdyGI17+TbACemMxM7cA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '10-24865879-24865880 NNNN CT(93 94 0) RT(1596186817760 29) q(0 0 2 -1) r(5 5) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/entries/6Ax23ArJaYqn1UYRLNZBkx/published')
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
    "id": "6Ax23ArJaYqn1UYRLNZBkx",
    "type": "Entry",
    "createdAt": "2020-07-31T09:13:36.623Z",
    "updatedAt": "2020-07-31T09:13:39.119Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 2,
    "publishedAt": "2020-07-31T09:13:39.119Z",
    "firstPublishedAt": "2020-07-31T09:13:39.119Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:39 GMT',
  'etag',
  'W/"3565457940365142629"',
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
  'd97228f34a77ad65820f327c0624d197',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/entries/:id/published',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=H0R4Bl4GQtKvaIk80cHM0cLgI18AAAAAQUIPAAAAAADCicso7ORdayWFC2dke8Zu; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=NhlRDAb5BAZA3MsIKsJtVwAAAAAswkzQC2yQV20sqtOGm1Dt; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=CIdYBJ+wXSINt1j4PoVtA8LgI18AAAAAfM3hhkawKL/A5GhfieTtdg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '3-19364678-19364680 NNNY CT(0 0 0) RT(1596186818444 27) q(0 0 0 -1) r(3 3) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/entries/4cq3btwYzYNsrF6nONRfsH', {"sys":{"id":"4cq3btwYzYNsrF6nONRfsH","version":1,"contentType":{"sys":{"type":"Link","linkType":"ContentType","id":"blogpost"}}},"fields":{"title":{"en-US":"hello!"},"category":{"en-US":"hello!"}},"metadata":{"tags":[]}})
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
    "id": "4cq3btwYzYNsrF6nONRfsH",
    "type": "Entry",
    "createdAt": "2020-07-31T09:13:37.015Z",
    "updatedAt": "2020-07-31T09:13:39.731Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:39 GMT',
  'etag',
  'W/"5290838488865971134"',
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
  'a2db7412ebaa3818b9ab677671bea1d7',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/entries/:id',
  'Content-Length',
  '388',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=ZD7Ya+2BQWazBS96J+M6rcPgI18AAAAAQUIPAAAAAAB9qkV5vMlWIx/VhWcWat6o; expires=Fri, 30 Jul 2021 16:27:06 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=1wMNSmh0PVo9bFXKKsJtVwAAAAAJwCitbYlIE6Yqrd0XvJZ3; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=XfkNVFgy23uKt1j4PoVtA8PgI18AAAAAGh6Em+b+hqC+PrBD8jAMzw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '14-84965773-84965781 NNNN CT(94 93 0) RT(1596186818874 34) q(0 0 1 -1) r(3 3) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/entries/4cq3btwYzYNsrF6nONRfsH/published')
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
    "id": "4cq3btwYzYNsrF6nONRfsH",
    "type": "Entry",
    "createdAt": "2020-07-31T09:13:37.015Z",
    "updatedAt": "2020-07-31T09:13:40.144Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 2,
    "publishedAt": "2020-07-31T09:13:40.144Z",
    "firstPublishedAt": "2020-07-31T09:13:40.144Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:40 GMT',
  'etag',
  'W/"15647668744863767535"',
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
  '9bb2855ea574caf06d13c35a35f4fb93',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/entries/:id/published',
  'Content-Length',
  '418',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=gTAkXQ1sQ8CBjh7H7XMgLsPgI18AAAAAQUIPAAAAAADtkzKT7xvNruT0Wbtsadsi; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=qGu8dmkW6jVysAReKsJtVwAAAAByvoGQppJDPV8gAoDjH5CM; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=sNW0L9uIcTzxt1j4PoVtA8PgI18AAAAA4YAJcmY0qef4PsmAs6dRIw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '13-65876288-65876295 NNNY CT(0 0 0) RT(1596186819478 34) q(0 0 0 -1) r(3 3) U5'
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
        "id": "4cq3btwYzYNsrF6nONRfsH",
        "type": "Entry",
        "createdAt": "2020-07-31T09:13:37.015Z",
        "updatedAt": "2020-07-31T09:13:40.144Z",
        "environment": {
          "sys": {
            "id": "env-integration",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 2,
        "publishedAt": "2020-07-31T09:13:40.144Z",
        "firstPublishedAt": "2020-07-31T09:13:40.144Z",
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
        "id": "6Ax23ArJaYqn1UYRLNZBkx",
        "type": "Entry",
        "createdAt": "2020-07-31T09:13:36.623Z",
        "updatedAt": "2020-07-31T09:13:39.119Z",
        "environment": {
          "sys": {
            "id": "env-integration",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 2,
        "publishedAt": "2020-07-31T09:13:39.119Z",
        "firstPublishedAt": "2020-07-31T09:13:39.119Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:40 GMT',
  'etag',
  'W/"4728632179234390984"',
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
  '79ff69e5527267de0bea8c94c47a5d05',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/entries',
  'Content-Length',
  '560',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=pFV1/5HrQZCWOfSzNQagt8TgI18AAAAAQUIPAAAAAAC60Hi04sZBu3w/51cxPwfb; expires=Fri, 30 Jul 2021 16:27:06 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=Vq+MD9j480IJUEoTKsJtVwAAAABlV2xA2re1U+LM9LWJ51zU; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=krc9exo34RFVuFj4PoVtA8TgI18AAAAAzJqRme/oiO8rAmZpD1f6hw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '14-84966098-84966107 NNNY CT(0 0 0) RT(1596186820092 32) q(0 0 0 -1) r(1 1) U5'
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:41 GMT',
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
  '9c5668a05a3ccce02791187417892745',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=KAgfp1vSQHiR+vdzUy8x5MTgI18AAAAAQUIPAAAAAAC9qX7g/rR9zBnVnQ8BixGI; expires=Fri, 30 Jul 2021 16:27:06 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=n44bZYBcB0W5o5gXKsJtVwAAAAA3sRn87124l4k3QLT+Zl4u; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=G/q6dQ12KRuWuFj4PoVtA8TgI18AAAAA82mK0Wc5CnOMknGXrHvmaQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '14-84966188-84966201 NNYY CT(0 0 0) RT(1596186820398 62) q(0 0 0 -1) r(2 2) U5'
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
  "requestId": "743c0b74f4147bc8a9c71e1eb66e34b3"
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:41 GMT',
  'etag',
  '"18112556552502807353"',
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
  '743c0b74f4147bc8a9c71e1eb66e34b3',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:content_type/editor_interface',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=nmJI/96XQ8iEm+hH9H/4EMXgI18AAAAAQUIPAAAAAAAVpR6VGJ/TxFyfJ/dD62eW; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=FvhQasmIyED/5VcPKsJtVwAAAAC++a2aHUr158aVXtrjwX/C; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=oHULMXntMgLvuFj4PoVtA8XgI18AAAAAPEmD9bHtD1E04EXxT3oc0Q==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '2-9912126-9912131 NNYN CT(88 86 0) RT(1596186820710 40) q(0 0 2 -1) r(3 3) U5'
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
        "createdAt":"2020-07-31T09:12:59Z",
        "updatedAt":"2020-07-31T09:12:59Z"
      }
    }
  ]
}

, [
  'accept-ranges',
  'bytes',
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:42 GMT',
  'etag',
  'W/"3a66d930e1a85f4903a09c66833fed74"',
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
  '35997',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '7',
  'X-Contentful-Request-Id',
  '065898b1dacb1c37032061ab07efcac6',
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
  'visid_incap_673446=zyeJMjXpRRGpl2z6ij+NbMXgI18AAAAAQUIPAAAAAACPEK/s1tVrNdJw1dv1Gr3g; expires=Fri, 30 Jul 2021 16:27:18 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=GP8af7p6mwpd2SCAKsJtVwAAAABeuuok6o9F0/RexRRm7dGb; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=dbjUDlenkHSguVj4PoVtA8XgI18AAAAAKi51rLkSKFHdytz/31UeuA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '10-24866132-24866138 NNYY CT(0 0 0) RT(1596186821222 42) q(0 0 0 -1) r(7 7) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/blogPost', {"name":"Blog post","fields":[{"id":"slug","name":"URL Slug","type":"Symbol","required":true}],"description":"super angry"})
  .reply(201, {"sys":{"space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"id":"blogPost","type":"ContentType","createdAt":"2020-07-31T09:13:42.847Z","updatedAt":"2020-07-31T09:13:42.847Z","environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}},"createdBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"updatedBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"publishedCounter":0,"version":1},"displayField":null,"name":"Blog post","description":"super angry","fields":[{"id":"slug","name":"URL Slug","type":"Symbol","localized":false,"required":true,"validations":[],"disabled":false,"omitted":false}]}, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:42 GMT',
  'etag',
  '"17404441718917721685"',
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
  'c2a28867d22f3cc9e2b0850d8dfc2af4',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:id',
  'Content-Length',
  '1054',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=Ud+HVREqS+ictcJKwi6/C8bgI18AAAAAQUIPAAAAAADwE8tGTCcAX7qZCJGDsNa0; expires=Fri, 30 Jul 2021 16:27:06 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=uTj9ElJnIxguHTO+KsJtVwAAAAD+HomWlfaXg/Er4H6BYGEy; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=Xbj/VWKJTQI3ulj4PoVtA8bgI18AAAAApglerZp/2PNGBTQD2Bbt9Q==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '14-84966575-84966583 NNNY CT(0 0 0) RT(1596186822144 41) q(0 0 0 -1) r(5 5) U5'
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
    "createdAt": "2020-07-31T09:13:42.847Z",
    "updatedAt": "2020-07-31T09:13:43.412Z",
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
    "firstPublishedAt": "2020-07-31T09:13:43.412Z",
    "publishedAt": "2020-07-31T09:13:43.412Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:43 GMT',
  'etag',
  'W/"16125149013972234979"',
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
  'd44004e7d4322bcfc7a62748bddac7e3',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:id/published',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=Igil7MSmSlq6N/vziGy218fgI18AAAAAQUIPAAAAAADLyZAkc06wH7URCglE/UJI; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=v+xyZ8UQrXiCRyMPKsJtVwAAAADQ8s5/9xkssMtVOucV8/sF; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=Wh3iUtA1SB+Kulj4PoVtA8fgI18AAAAAHhUuGcVm7D11lJwsUI5B9A==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '4-27597797-27597798 NNNY CT(0 0 0) RT(1596186822750 31) q(0 0 0 -1) r(3 3) U5'
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
    "createdAt": "2020-07-31T09:13:43.506Z",
    "createdBy": {
      "sys": {
        "id": "1Y7O5FbAkPYgNvD0MpQoAE",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2020-07-31T09:13:44.143Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:44 GMT',
  'etag',
  'W/"10689739766342894313"',
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
  'a53ac32123a7ec962b04db1f5d4a790d',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:content_type/editor_interface',
  'Content-Length',
  '384',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=UaWNHl4PTiCCObWz0F9LRcfgI18AAAAAQUIPAAAAAADOAL47ubTmzbvB+Mdrakyw; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=ClC/Xx1UWF5OM6TXKsJtVwAAAAAqkkZzEW3R0F3Q3b1ofqTb; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=t67pFeAl81Efu1j4PoVtA8fgI18AAAAAwNxGx9lE2k9TVBQvIegY7w==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '13-65876957-65876962 NNNN CT(86 86 0) RT(1596186823168 31) q(0 0 2 -1) r(5 5) U5'
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
    "createdAt": "2020-07-31T09:13:43.506Z",
    "createdBy": {
      "sys": {
        "id": "1Y7O5FbAkPYgNvD0MpQoAE",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2020-07-31T09:13:44.143Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:44 GMT',
  'etag',
  'W/"3148013813727937247"',
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
  'be84d5dd0fb44312d4e03456d9ce51de',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:content_type/editor_interface',
  'Content-Length',
  '371',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=0VjjAll2R7CTF1SpFuxATsjgI18AAAAAQUIPAAAAAAB++KE7W/+PkxfjAbqFD6gw; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=h6HwFsrgZUsOw5xlKsJtVwAAAABl4oHOcezkpvMLZN3ThKPy; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=HZrMVaQC+k2Fu1j4PoVtA8jgI18AAAAA/CSAplauvXTZDf55kyDkrA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '12-52248301-52248304 NNNN CT(89 88 0) RT(1596186823776 24) q(0 0 1 -1) r(3 3) U5'
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
        "createdAt": "2020-07-31T09:13:42.847Z",
        "updatedAt": "2020-07-31T09:13:43.412Z",
        "environment": {
          "sys": {
            "id": "env-integration",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 1,
        "publishedAt": "2020-07-31T09:13:43.412Z",
        "firstPublishedAt": "2020-07-31T09:13:43.412Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:44 GMT',
  'etag',
  'W/"7258956714040881109"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35997',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '7',
  'X-Contentful-Request-Id',
  '4fb6f113991ea5d5b91ea84e022f7151',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types',
  'Content-Length',
  '517',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=Iae2gJlxReeNlBGyIcUi4sjgI18AAAAAQUIPAAAAAAC16a7e0Cr0FVcz68t+nSmE; expires=Fri, 30 Jul 2021 16:27:12 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=vxKzW78S6T7jA3Z7KsJtVwAAAACjRKyNEEXK5wU1cAP+EJqr; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=NsADUD3Te1q5u1j4PoVtA8jgI18AAAAAUcryb51k/guk3Ircvc6XNw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '6-14116504-14116506 NNNY CT(0 0 0) RT(1596186824198 30) q(0 0 0 -1) r(1 1) U5'
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
    "createdAt": "2020-07-31T09:13:43.506Z",
    "createdBy": {
      "sys": {
        "id": "1Y7O5FbAkPYgNvD0MpQoAE",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2020-07-31T09:13:44.143Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:45 GMT',
  'etag',
  'W/"3148013813727937247"',
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
  '04f498c44b146c302b45b736f4104e29',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:content_type/editor_interface',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=cJTkCgzTSLS+5lLp3AUJxcjgI18AAAAAQUIPAAAAAADUlFTne8vfK+lYdKxX+USh; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=lERwQNj+N1UgcPx0KsJtVwAAAACs2b/6RiIWpaf+oc640Gum; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=jOFdS548WG/1u1j4PoVtA8jgI18AAAAAn/8xWxMwQwzK+9N4n5YECw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '11-39458764-39458770 NNNY CT(0 0 0) RT(1596186824496 31) q(0 0 0 -1) r(1 1) U5'
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
        "createdAt":"2020-07-31T09:12:59Z",
        "updatedAt":"2020-07-31T09:12:59Z"
      }
    }
  ]
}

, [
  'accept-ranges',
  'bytes',
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:45 GMT',
  'etag',
  'W/"3a66d930e1a85f4903a09c66833fed74"',
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
  '12977720bfa788c22193c4e49d711abf',
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
  'visid_incap_673446=YWWYHVRjQi6lKxcvdnEw+cjgI18AAAAAQUIPAAAAAACddOydI3kGDnlnw5droc18; expires=Fri, 30 Jul 2021 16:27:06 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=zwFGIXuHmBR2ffylKsJtVwAAAACPPGOgpterASv2YDxcJ1c2; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=E1K5AxdLu3E2vFj4PoVtA8jgI18AAAAA+jlm7jQmH8OmaJwpz6d/PA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '14-84967018-84967028 NNYY CT(0 0 0) RT(1596186824800 40) q(0 0 0 -1) r(1 1) U5'
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
    "createdAt": "2020-07-31T09:13:42.847Z",
    "updatedAt": "2020-07-31T09:13:45.785Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 1,
    "publishedAt": "2020-07-31T09:13:43.412Z",
    "firstPublishedAt": "2020-07-31T09:13:43.412Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:45 GMT',
  'etag',
  'W/"9775850313453850674"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35997',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '7',
  'X-Contentful-Request-Id',
  '08c72ae7098b2f18398e61886756f965',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:id',
  'Content-Length',
  '452',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=mgiPmPlBRMegFxc8ttzLT8ngI18AAAAAQUIPAAAAAAD/Lj5prk0bzt7wvQ+3R5h2; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=iPZ4XuhyNGh0By1PKsJtVwAAAADtAZHxKT6MmhZGbkeZpVk8; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=a0PBMRQOUE6OvFj4PoVtA8ngI18AAAAA7mxFUj5dheItYpKiktj0dQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '4-27597981-27597984 NNNY CT(0 0 0) RT(1596186825102 33) q(0 0 0 -1) r(2 2) U5'
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
    "createdAt": "2020-07-31T09:13:42.847Z",
    "updatedAt": "2020-07-31T09:13:46.282Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 3,
    "publishedAt": "2020-07-31T09:13:46.282Z",
    "firstPublishedAt": "2020-07-31T09:13:43.412Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:46 GMT',
  'etag',
  'W/"15657847366254775937"',
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
  '42db17dbd58d978b20dec5a4b617f4cf',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:id/published',
  'Content-Length',
  '457',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=cokqsho2TIyR3ELCUX8aXsngI18AAAAAQUIPAAAAAADJxBzIssH5FQGZ7HsRtnOV; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=stUsbMdPrR0KRu0UKsJtVwAAAADr+2e4aUC/jqFcN5ayn8PU; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=Q9rZPNr+WlQPvVj4PoVtA8ngI18AAAAAS2bwluUdag5nS5IHl9O4wQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '7-23313106-23313110 NNNY CT(0 0 0) RT(1596186825628 40) q(0 0 0 -1) r(3 3) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/blogPost/editor_interface', {"controls":[]})
  .reply(200, {"controls":[],"sys":{"id":"default","type":"EditorInterface","space":{"sys":{"id":"bohepdihyxin","type":"Link","linkType":"Space"}},"version":4,"createdAt":"2020-07-31T09:13:43.506Z","createdBy":{"sys":{"id":"1Y7O5FbAkPYgNvD0MpQoAE","type":"Link","linkType":"User"}},"updatedAt":"2020-07-31T09:13:46.694Z","updatedBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"contentType":{"sys":{"id":"blogPost","type":"Link","linkType":"ContentType"}},"environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}}}}, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:46 GMT',
  'etag',
  '"7150781994363274646"',
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
  '3c2418c4e589382e83210b5270f34d92',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:content_type/editor_interface',
  'Content-Length',
  '880',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=MiHbaVD6QmSiCNSpYIDcvsrgI18AAAAAQUIPAAAAAABzKbcbkE2eIB4i4vJY82AQ; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=+3Q6b0RcNh9ey2bJKsJtVwAAAABmM/PM21AVITnGFrhGplUL; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=VTZ2Qw+FkSNivVj4PoVtA8rgI18AAAAAxb6kkAd1fghu0bs9aRxjOA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '7-23313127-23313129 NNNY CT(0 0 0) RT(1596186826024 40) q(0 0 0 -1) r(2 2) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/blogPost/editor_interface', {"controls":[{"fieldId":"slug","widgetId":"singleLine","widgetNamespace":"builtin"}]})
  .reply(200, {"controls":[{"fieldId":"slug","widgetId":"singleLine","widgetNamespace":"builtin"}],"sys":{"id":"default","type":"EditorInterface","space":{"sys":{"id":"bohepdihyxin","type":"Link","linkType":"Space"}},"version":5,"createdAt":"2020-07-31T09:13:43.506Z","createdBy":{"sys":{"id":"1Y7O5FbAkPYgNvD0MpQoAE","type":"Link","linkType":"User"}},"updatedAt":"2020-07-31T09:13:46.990Z","updatedBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"contentType":{"sys":{"id":"blogPost","type":"Link","linkType":"ContentType"}},"environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}}}}, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:47 GMT',
  'etag',
  '"579033314064758833"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35997',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '7',
  'X-Contentful-Request-Id',
  '7bc8f972ed7ce22ed230840811aeb2d5',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:content_type/editor_interface',
  'Content-Length',
  '987',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=qrvOFJUNSyuKmmyHOauVjcrgI18AAAAAQUIPAAAAAAALfkmPAyyuuVTVDqeRF7WJ; expires=Fri, 30 Jul 2021 16:27:06 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=6qRKN62O4XcJYJ7VKsJtVwAAAABKNyc0BN+ogqQKO/dhVE3D; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=A+O2QvUpEguSvVj4PoVtA8rgI18AAAAA1KIwyYu2wj+iYhomDqYwuw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '14-84967321-84967327 NNNY CT(0 0 0) RT(1596186826335 34) q(0 0 0 -1) r(2 2) U5'
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
    "createdAt": "2020-07-31T09:13:43.506Z",
    "createdBy": {
      "sys": {
        "id": "1Y7O5FbAkPYgNvD0MpQoAE",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2020-07-31T09:13:46.990Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:47 GMT',
  'etag',
  '"16689917362769423004"',
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
  '6cea485ee249b323f8c96f73b012b691',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:content_type/editor_interface',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=0F3AyLHYScer3K7Z6caoScrgI18AAAAAQUIPAAAAAACJ314qsPG/OR2P0g/+SH48; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=Jio8b6jSIlGlJP9yKsJtVwAAAACUZLldpAyBvY9Ao9M2Uop+; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=8fGjNf/lylfGvVj4PoVtA8rgI18AAAAArW3Tu3egxC2nBmUILEOA4g==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '7-23313169-23313175 NNYY CT(0 0 0) RT(1596186826660 34) q(0 0 0 -1) r(2 2) U5'
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
        "createdAt": "2020-07-31T09:13:42.847Z",
        "updatedAt": "2020-07-31T09:13:46.282Z",
        "environment": {
          "sys": {
            "id": "env-integration",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 3,
        "publishedAt": "2020-07-31T09:13:46.282Z",
        "firstPublishedAt": "2020-07-31T09:13:43.412Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:47 GMT',
  'etag',
  'W/"2691792155444479620"',
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
  'e53d88f42e81551db44c860d2bb8ff0d',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types',
  'Content-Length',
  '525',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=RyC4iQUjToOVWDaIc/uQ9cvgI18AAAAAQUIPAAAAAADk4+F5XGTYKbqWbg/JfnD9; expires=Fri, 30 Jul 2021 16:27:12 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=9sbgeJfP8Q70/q6BKsJtVwAAAABT3yElYLlmn6nDyBvvXnvE; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=Sm0ESmNFGmVTvlj4PoVtA8vgI18AAAAAgG8hiAANh+G8TAcotjQvKw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '6-14116691-14116694 NNNN CT(87 87 0) RT(1596186826957 33) q(0 0 2 -1) r(4 4) U5'
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
    "createdAt": "2020-07-31T09:13:43.506Z",
    "createdBy": {
      "sys": {
        "id": "1Y7O5FbAkPYgNvD0MpQoAE",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2020-07-31T09:13:46.990Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:48 GMT',
  'etag',
  '"16689917362769423004"',
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
  '8b113530660769159290680f64cbbf38',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:content_type/editor_interface',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=bWyDwkEPS7qM/u73gki4UMvgI18AAAAAQUIPAAAAAABReKZBZHdgTgaOppUN6828; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=X/2LFIkPYUMLpcpgKsJtVwAAAABewvBgEWS8XrC/DS3Xhi8z; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=RiyYSQhJFjaivlj4PoVtA8vgI18AAAAAi1bFBFb8nDbL9UaVhebK4A==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '13-65877887-65877900 NNYY CT(0 0 0) RT(1596186827460 29) q(0 0 0 -1) r(2 2) U5'
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
        "createdAt":"2020-07-31T09:12:59Z",
        "updatedAt":"2020-07-31T09:12:59Z"
      }
    }
  ]
}

, [
  'accept-ranges',
  'bytes',
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:48 GMT',
  'etag',
  'W/"3a66d930e1a85f4903a09c66833fed74"',
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
  '39211d395808dbdc20e959ccda2458a1',
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
  'visid_incap_673446=uwwDyfktSNKOHKltacjwRsvgI18AAAAAQUIPAAAAAABoT9uyb+CFn7ZBsV4YUOtn; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=efHOBGaOQk7dtmtmKsJtVwAAAABxUsaVGYoKZUN/ElF/IurO; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=8hPFDm6FwmnKvlj4PoVtA8vgI18AAAAAIgOcRHmrH4AODl4yFBWzlA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '5-40685231-40685232 NNYY CT(0 0 0) RT(1596186827724 33) q(0 0 0 -1) r(1 1) U5'
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
    "createdAt": "2020-07-31T09:13:42.847Z",
    "updatedAt": "2020-07-31T09:13:48.603Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 3,
    "publishedAt": "2020-07-31T09:13:46.282Z",
    "firstPublishedAt": "2020-07-31T09:13:43.412Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:48 GMT',
  'etag',
  'W/"5144992561997612128"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35997',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '7',
  'X-Contentful-Request-Id',
  'eb7b0cb760b88e97209de26d1b5bb896',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:id',
  'Content-Length',
  '464',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=RL6OwLNiRDy35D3A9QO4V8zgI18AAAAAQUIPAAAAAAAk524Tijs6DnQHCef3Xk8n; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=OhViDZuo/wvBiQMSKsJtVwAAAAAH/2f/BLvKhdqQyxBTIUCk; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=mjAlcyeEUxoav1j4PoVtA8zgI18AAAAAfZAFhQAtyT9fafjkLWPm0Q==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '11-39459125-39459136 NNNY CT(0 0 0) RT(1596186827926 35) q(0 0 0 -1) r(2 2) U5'
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
    "createdAt": "2020-07-31T09:13:42.847Z",
    "updatedAt": "2020-07-31T09:13:48.931Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 5,
    "publishedAt": "2020-07-31T09:13:48.931Z",
    "firstPublishedAt": "2020-07-31T09:13:43.412Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:49 GMT',
  'etag',
  'W/"1828270023429711510"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35996',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '6',
  'X-Contentful-Request-Id',
  'ceedc89e2dcfceb85030605d6cb33fb5',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:id/published',
  'Content-Length',
  '458',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=DN4LVY1LT32zC56sH1C168zgI18AAAAAQUIPAAAAAACYb6PRrlVJjMwQAQ7Bm3f3; expires=Fri, 30 Jul 2021 16:27:18 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=IBIwOTgMIlypAzydKsJtVwAAAACqZ4rCLi5fPogCzlZLEcDb; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=8WLPS75YrXd0v1j4PoVtA8zgI18AAAAA0qbIkk1OB1npJT4VoppzAQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '10-24866552-24866556 NNNY CT(0 0 0) RT(1596186828284 34) q(0 0 0 -1) r(2 2) U5'
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
    "createdAt": "2020-07-31T09:13:43.506Z",
    "createdBy": {
      "sys": {
        "id": "1Y7O5FbAkPYgNvD0MpQoAE",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2020-07-31T09:13:49.525Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:49 GMT',
  'etag',
  'W/"5547117547287708529"',
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
  'a0789aa0bd243ff1d4dd3766b43c70f4',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:content_type/editor_interface',
  'Content-Length',
  '420',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=+gwIxTNpTn2beiqZOf6bcs3gI18AAAAAQUIPAAAAAAApKJvaoPDH1yKbI87KKNbh; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=zJoYUmzo+GsyGuuPKsJtVwAAAADuZtgMK25Y+YpvIADOsy4p; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=BSGQOOumgnP8v1j4PoVtA83gI18AAAAARgM6sTmRNxnh5hjPUYRFxw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '4-27598253-27598256 NNNN CT(86 90 0) RT(1596186828692 28) q(0 0 1 -1) r(3 3) U5'
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
    "createdAt": "2020-07-31T09:13:43.506Z",
    "createdBy": {
      "sys": {
        "id": "1Y7O5FbAkPYgNvD0MpQoAE",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2020-07-31T09:13:49.525Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:49 GMT',
  'etag',
  'W/"10498026843845577422"',
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
  '3e16777473c20f8ab9210a8614498c51',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:content_type/editor_interface',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=KWm/r6cDQe20wRw4N1uOxM3gI18AAAAAQUIPAAAAAADdTX2U/a49MvstuDTERKwp; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=VgVoUUpUWRRLQO1eKsJtVwAAAAArAyk+Unc+ECNfUaJncAMb; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=28BzIIydFTo8wFj4PoVtA83gI18AAAAAqyBfeBQ1N29Aa+x/y0bMEA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '2-9912441-9912442 NNNY CT(0 0 0) RT(1596186829206 30) q(0 0 0 -1) r(2 2) U5'
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:50 GMT',
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
  'aeff730941c66ee0495dc6305361edff',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=NJKp7iShRAKxFk6VaOxdHc3gI18AAAAAQUIPAAAAAACt/3gN/NC+jOjrHnsmnvRi; expires=Fri, 30 Jul 2021 16:27:06 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=MmIeJOegVg5WKfZCKsJtVwAAAAA8OElB3hid91GomWrJcgjA; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=Xd6DJzvZ+yR0wFj4PoVtA83gI18AAAAAAYGlnvLlgbrlnM/nH7qwMQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '14-84968065-84968077 NNYY CT(0 0 0) RT(1596186829522 30) q(0 0 0 -1) r(2 2) U5'
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
  "requestId": "ec2c3c70840be5e7ca1f16f0cb4ffc5b"
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:50 GMT',
  'etag',
  '"9089602996896837533"',
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
  'ec2c3c70840be5e7ca1f16f0cb4ffc5b',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:content_type/editor_interface',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=uGDklRkRQnmzgjamedSAS83gI18AAAAAQUIPAAAAAABDIMurv5x6XBmEMu6gZMWF; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=hSZeeySanD9gHDThKsJtVwAAAAAMkKQmBNIAOHPE/cBhnyVs; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=RFwCHd3PwgulwFj4PoVtA83gI18AAAAA+Sr3GWq3imambPxnFM2g7g==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '4-27598317-27598318 NNYY CT(0 0 0) RT(1596186829816 32) q(0 0 0 -1) r(1 1) U5'
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
        "createdAt":"2020-07-31T09:12:59Z",
        "updatedAt":"2020-07-31T09:12:59Z"
      }
    }
  ]
}

, [
  'accept-ranges',
  'bytes',
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:50 GMT',
  'etag',
  'W/"3a66d930e1a85f4903a09c66833fed74"',
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
  '35997',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '7',
  'X-Contentful-Request-Id',
  'aaffd3859d1ecfa1c26aa5dcbd8d9942',
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
  'visid_incap_673446=aNFtqzAKRM6GOBy75GqZPc7gI18AAAAAQUIPAAAAAABFlOk9p5BjiVng2+5oOM8f; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=Zs5qeeiMxik7gKUaKsJtVwAAAADBh1X8JbKQRclIW1vRhWhn; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=TvsBK1E3/ibowFj4PoVtA87gI18AAAAAZrdsGOila6aXcjFfV5GH1g==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '9-17463985-17463986 NNYY CT(0 0 0) RT(1596186830130 28) q(0 0 0 -1) r(1 1) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/customSidebar', {"name":"Custom sidebar","fields":[],"description":"How to add, remove and update widgets"})
  .reply(201, {"sys":{"space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"id":"customSidebar","type":"ContentType","createdAt":"2020-07-31T09:13:51.115Z","updatedAt":"2020-07-31T09:13:51.115Z","environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}},"createdBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"updatedBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"publishedCounter":0,"version":1},"displayField":null,"name":"Custom sidebar","description":"How to add, remove and update widgets","fields":[]}, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:51 GMT',
  'etag',
  '"3367997065613629372"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35996',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '6',
  'X-Contentful-Request-Id',
  'cc4aef0b4aedcdd46d15b4c905e6e8cf',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:id',
  'Content-Length',
  '882',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=JvTlu1MeSLuEGIiP9h1IRM7gI18AAAAAQUIPAAAAAADLKvXu0UlnhTHaHQYeU5Bf; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=h7oKaXv4EVMANkEVKsJtVwAAAABQcgRx4k8EssDeIXhYmNI2; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=eAnScfrTtHJEwVj4PoVtA87gI18AAAAAyc3N+6cuww9MK6AHRPir/w==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '12-52249434-52249439 NNNY CT(0 0 0) RT(1596186830332 34) q(0 0 0 -1) r(4 4) U5'
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
    "createdAt": "2020-07-31T09:13:51.115Z",
    "updatedAt": "2020-07-31T09:13:51.580Z",
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
    "firstPublishedAt": "2020-07-31T09:13:51.580Z",
    "publishedAt": "2020-07-31T09:13:51.580Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:51 GMT',
  'etag',
  'W/"9362139955981376580"',
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
  '8545ee5f69beb8f6fb5a78105dafc253',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:id/published',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=JT24EUJqQme6mM2nJV1Mys/gI18AAAAAQUIPAAAAAAAK3yF/g8ygtMx/uYoPxIMS; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=ZcFIMrRvqBEP5D63KsJtVwAAAACWNiS6XZlwsdT+K4efsvdC; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=r8Axfv2GnnWWwVj4PoVtA8/gI18AAAAAxVYi9NAW13z9JuLrt4orPw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '13-65878764-65878769 NNNY CT(0 0 0) RT(1596186830932 30) q(0 0 0 -1) r(2 2) U5'
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
    "createdAt": "2020-07-31T09:13:51.648Z",
    "createdBy": {
      "sys": {
        "id": "1Y7O5FbAkPYgNvD0MpQoAE",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2020-07-31T09:13:52.020Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:52 GMT',
  'etag',
  'W/"11069928827567902194"',
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
  'accf1817629f9c842c6c428fb0a38a66',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:content_type/editor_interface',
  'Content-Length',
  '460',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=n8QIGCCQTY+thx2aJ7teRs/gI18AAAAAQUIPAAAAAAAUQDEr9qQh5YbYfesX1b1C; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=4g1DHllMvSYoVSRSKsJtVwAAAABTInVstItPbQbMyw1oH5Q2; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=Ctm4VUtbaCjWwVj4PoVtA8/gI18AAAAAtvAhRtFYk7nIOkR2w3o6tg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '5-40685670-40685675 NNNY CT(0 0 0) RT(1596186831355 34) q(0 0 0 -1) r(2 2) U5'
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
    "createdAt": "2020-07-31T09:13:51.648Z",
    "createdBy": {
      "sys": {
        "id": "1Y7O5FbAkPYgNvD0MpQoAE",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2020-07-31T09:13:52.334Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:52 GMT',
  'etag',
  'W/"2691051577126178862"',
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
  'a2a9031504e6205bc34a3c5a6746ff1e',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:content_type/editor_interface',
  'Content-Length',
  '461',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=0JqxHAUnTPqoL5K0GMRhJ8/gI18AAAAAQUIPAAAAAAABEdRkckSBr6kH+/xQIrOZ; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=QJ6eMYABgXQF1erKKsJtVwAAAABoEeMGxEyw7QTvufkoZ1+S; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=14PiQ42LnmQfwlj4PoVtA8/gI18AAAAAvKYinxH2AzejjJFSi60Z3w==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '12-52249633-52249640 NNNY CT(0 0 0) RT(1596186831680 33) q(0 0 0 -1) r(2 2) U5'
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
    "createdAt": "2020-07-31T09:13:51.648Z",
    "createdBy": {
      "sys": {
        "id": "1Y7O5FbAkPYgNvD0MpQoAE",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2020-07-31T09:13:53.104Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:53 GMT',
  'etag',
  'W/"2217320055497788815"',
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
  '5cd6a2dae8ce0cd186e4f80adcf27449',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:content_type/editor_interface',
  'Content-Length',
  '461',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=45i6M4FsRpiTdcrWoPI2FNDgI18AAAAAQUIPAAAAAACH12JRO/F7vEziFMDL5dLU; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=tidoCe4w5F8HtwCLKsJtVwAAAADMmQHpEVquzSB5yYwPl4Cn; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=fEvpcmWH1He1wlj4PoVtA9DgI18AAAAAB3f6kY1ksdKpG1+bckDz8A==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '13-65879106-65879115 NNNN CT(100 93 0) RT(1596186832180 46) q(0 0 2 -1) r(4 4) U5'
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
    "createdAt": "2020-07-31T09:13:51.648Z",
    "createdBy": {
      "sys": {
        "id": "1Y7O5FbAkPYgNvD0MpQoAE",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2020-07-31T09:13:53.441Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:53 GMT',
  'etag',
  'W/"3337609227361708809"',
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
  'd77a9db04a0809f37bcc61e3e7fbbe14',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:content_type/editor_interface',
  'Content-Length',
  '462',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=L+yKo5G3QPqwOcaNtOpJEdDgI18AAAAAQUIPAAAAAABBHTHGoiJ+Dm/F01v71zzk; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=OuzVHMBB12DaTjjhKsJtVwAAAAAaGbBrcx4d/LJUACuniBUs; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=yRYvJ9D7UXWZw1j4PoVtA9DgI18AAAAARSHdpmPsZ1qj1/z4ucVXzQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '5-40685900-40685903 NNNY CT(0 0 0) RT(1596186832784 33) q(0 0 0 -1) r(1 1) U5'
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
    "createdAt": "2020-07-31T09:13:51.648Z",
    "createdBy": {
      "sys": {
        "id": "1Y7O5FbAkPYgNvD0MpQoAE",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2020-07-31T09:13:53.819Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:53 GMT',
  'etag',
  'W/"14071042074916353813"',
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
  '526c69946acb55765c945f2c525737f1',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:content_type/editor_interface',
  'Content-Length',
  '449',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=Nu7OlULzQtWhON0v0pMc1dHgI18AAAAAQUIPAAAAAAC0Fa5JkNtozjhw65Ie8MEO; expires=Fri, 30 Jul 2021 16:27:06 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=YodDWEjuWSSH5Za6KsJtVwAAAAAt5lrc5yUGGX6aEUj8E3yo; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=EB6JVLeD6Uvew1j4PoVtA9HgI18AAAAA6KXUxkRo7EoJw/92rtsqFw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '14-84968897-84968923 NNNY CT(0 0 0) RT(1596186833098 57) q(0 0 0 -1) r(2 2) U5'
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
    "createdAt": "2020-07-31T09:13:51.648Z",
    "createdBy": {
      "sys": {
        "id": "1Y7O5FbAkPYgNvD0MpQoAE",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2020-07-31T09:13:53.819Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:54 GMT',
  'etag',
  'W/"17679482716585164855"',
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
  '9f9d85f537fd298e2bcf4a9bb80cbb38',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:content_type/editor_interface',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=G/kgvZWNRJyF553W1I3nHNHgI18AAAAAQUIPAAAAAAAFvzd8ei2GbXpTW2XCvVp2; expires=Fri, 30 Jul 2021 16:27:06 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=4u1ac8lE5nguxT8HKsJtVwAAAAAeYgp6fpW1PpQu8/6p3w3e; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=mV4CF85z1SYbxFj4PoVtA9HgI18AAAAAb8EHwzIelW9VUEP7FbzQoQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '14-84969064-84969081 NNNY CT(0 0 0) RT(1596186833498 48) q(0 0 0 -1) r(1 1) U5'
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:54 GMT',
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
  'dfca29ecb6c96406b79aa03c731611ab',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:content_type/editor_interface',
  'Content-Length',
  '375',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=faFU1axeR6qm1CZ5mTLMXtLgI18AAAAAQUIPAAAAAACGKuERb9bFRF2wkJw2MJ8H; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=VBx7MFjNYV4fzRi4KsJtVwAAAABBFd4naeDWQV77OZX6vs2/; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=leuyN+q8RzZTxFj4PoVtA9LgI18AAAAArq8B5v6KoB/zh4o51N9/lg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '13-65879356-65879364 NNNY CT(0 0 0) RT(1596186833822 30) q(0 0 0 -1) r(2 2) U5'
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
        "createdAt":"2020-07-31T09:12:59Z",
        "updatedAt":"2020-07-31T09:12:59Z"
      }
    }
  ]
}

, [
  'accept-ranges',
  'bytes',
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:54 GMT',
  'etag',
  'W/"3a66d930e1a85f4903a09c66833fed74"',
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
  '35997',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '7',
  'X-Contentful-Request-Id',
  '4eb97ea02075336f098fc7c383cb2ebb',
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
  'visid_incap_673446=TTNmfEIcT++adBmYXNew1NLgI18AAAAAQUIPAAAAAADLUjO2b0OBxLgAtUhMfCvB; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=EXGBNBMwtE+3idSEKsJtVwAAAABi1wUNVoxBiEZUQsdbLuAR; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=mp9pdhvP5wGqxFj4PoVtA9LgI18AAAAACMc5cgua1WF5N3TA6kvIPA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '13-65879417-65879422 NNYN CT(88 87 0) RT(1596186834112 38) q(0 0 2 -1) r(3 3) U5'
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
    "updatedAt": "2020-07-31T09:13:55.297Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:55 GMT',
  'etag',
  'W/"6247918783422995872"',
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
  '2a79c6257c54fd9701651444f871b519',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:content_type/editor_interface',
  'Content-Length',
  '541',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=ZQcmYcBaRx6M1KETsbQAJdLgI18AAAAAQUIPAAAAAADReTMYibqiuCzNeR49uAgy; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=7NOMCzbrRU5vnA8mKsJtVwAAAAD9U16JpXE5OqkmPX0NiGpA; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=FPZZSqm8mT4AxVj4PoVtA9LgI18AAAAA9UOI1ejm3uANKe4/ab9P8Q==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '5-40686146-40686152 NNNY CT(0 0 0) RT(1596186834636 34) q(0 0 0 -1) r(2 2) U5'
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
    "updatedAt": "2020-07-31T09:13:55.595Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:55 GMT',
  'etag',
  'W/"2131646096601450570"',
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
  'adea63949f936ed4d7757dfadd163cc1',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:content_type/editor_interface',
  'Content-Length',
  '540',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=g3BfNY2VQkGlYy1/+bnGyNPgI18AAAAAQUIPAAAAAAD0V9myz9G2sqngBAwQ4z+Z; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=PAQ1aOhio1wqI/o1KsJtVwAAAAA6zjNeYGjkiM8NOcNsh3si; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=iza5FBvdfxY5xVj4PoVtA9PgI18AAAAA89i4fBEEaWgzI/UhYGwlZw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '11-39460061-39460064 NNNY CT(0 0 0) RT(1596186834936 30) q(0 0 0 -1) r(2 2) U5'
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
    "updatedAt": "2020-07-31T09:13:55.898Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:55 GMT',
  'etag',
  'W/"16073784510332873861"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35997',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '7',
  'X-Contentful-Request-Id',
  '1e058c6dc255142389d9cb5d8b15a4bf',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:content_type/editor_interface',
  'Content-Length',
  '542',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=IVLGG7GsRbqg+Fr/FK6rsdPgI18AAAAAQUIPAAAAAACoST1Cp9tmO2kcKmMj7i/7; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=+DOaAGZA7QpWFQdyKsJtVwAAAADQEFeVIQo5FeX9mfTqNy0B; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=L+JVHwafjzNoxVj4PoVtA9PgI18AAAAAhGkNZrEyvtA+/ibm3W0rrQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '13-65879633-65879634 NNNY CT(0 0 0) RT(1596186835246 35) q(0 0 0 -1) r(2 2) U5'
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
    "updatedAt": "2020-07-31T09:13:56.215Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:56 GMT',
  'etag',
  'W/"3563982106479760803"',
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
  '86c6f788be69ddd2a0c3b51bc7b08ce3',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:content_type/editor_interface',
  'Content-Length',
  '541',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=E+c/L2AGTzabOkCLqiF+vtPgI18AAAAAQUIPAAAAAACgix6NR77XtHlFYI9mIaTr; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=noJ/XBgM82tpYlIYKsJtVwAAAAAudxhki9KXySQ2VsCnKH4P; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=pnN+DNVNPCeqxVj4PoVtA9PgI18AAAAAnH1LOCbT4WigJrmM3S0Wqg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '5-40686280-40686290 NNNY CT(0 0 0) RT(1596186835542 42) q(0 0 0 -1) r(2 2) U5'
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
    "updatedAt": "2020-07-31T09:13:56.696Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:56 GMT',
  'etag',
  'W/"6093262551111271421"',
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
  'e22fb56e82fbe58e7f6cfa16efe6681d',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:content_type/editor_interface',
  'Content-Length',
  '523',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=nlBrjxD2TpWMwKRR86ZYrdTgI18AAAAAQUIPAAAAAADcTPD3kXVSlSd39TQn6zE8; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=zaYKZ1ojbBcZbVWVKsJtVwAAAAAL+WhM3/fukxscIWe7JfMl; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=Dm9KWEtLClj2xVj4PoVtA9TgI18AAAAAadtAoLfghocKAbrnSR4hIQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '12-52250297-52250301 NNNN CT(93 95 0) RT(1596186835846 34) q(0 0 2 -1) r(4 4) U5'
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
    "updatedAt": "2020-07-31T09:13:56.696Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:57 GMT',
  'etag',
  'W/"4590855741726731500"',
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
  '107375b46ff09d5a99e586c11da9df41',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:content_type/editor_interface',
  'Content-Length',
  '518',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=SMUgXkuTQ2OXJJ1YLNWoNNTgI18AAAAAQUIPAAAAAADZe3rlo0QOjlP9b7ULOkFA; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=AIHWVy5QgUhi23oSKsJtVwAAAACv2zWQ6lifTKHPIZDGtVrQ; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=l1pSKGs0U35Txlj4PoVtA9TgI18AAAAAuNJMeTmOTxRq8EWf/bzFNw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '9-17464352-17464355 NNNY CT(0 0 0) RT(1596186836464 33) q(0 0 0 -1) r(4 4) U5'
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
        "id": "longexampletag",
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
        "createdAt": "2020-07-31T09:13:31.138Z",
        "updatedAt": "2020-07-31T09:13:31.138Z",
        "version": 1
      },
      "name": "long example marketing"
    }
  ]
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:57 GMT',
  'etag',
  '"17619366498763234829"',
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
  '8553b3c0a6a3477043ccf15f0357a2bb',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/tags',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=/M3cQdN8R0GcTTX1wb+zfdXgI18AAAAAQUIPAAAAAADjBXxKRWs3LJDLmfWRIQdk; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=yJhlaXqQgQQvgYOrKsJtVwAAAADjxkbCT77deU1kanM4O21v; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=ohThOeOzY3Syxlj4PoVtA9XgI18AAAAA8hCv3XLTipWP3030QwDAzA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '12-52250423-52250428 NNYY CT(0 0 0) RT(1596186837088 35) q(0 0 0 -1) r(1 1) U5'
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
        "createdAt":"2020-07-31T09:12:59Z",
        "updatedAt":"2020-07-31T09:12:59Z"
      }
    }
  ]
}

, [
  'accept-ranges',
  'bytes',
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:58 GMT',
  'etag',
  'W/"3a66d930e1a85f4903a09c66833fed74"',
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
  'd1e594ddd81d9701976616a4d2bb6ffd',
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
  'visid_incap_673446=b0JxpnQSQ4CnrDyvk/YXrtXgI18AAAAAQUIPAAAAAACS0B6Wn8mF6D3mlOD/SvRa; expires=Fri, 30 Jul 2021 16:27:06 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=bVGPfBT/GF/I6VWwKsJtVwAAAAB7OnosrD2+4WHYK4tpEstG; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=ykjYH8T0oVXZxlj4PoVtA9XgI18AAAAA9pC84jAwkNmLVzjTuW547A==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '14-84970021-84970042 NNYY CT(0 0 0) RT(1596186837398 46) q(0 0 0 -1) r(1 1) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/tags/sampletag', {"sys":{"id":"sampletag","version":0},"name":"marketing"})
  .reply(201, {"sys":{"id":"sampletag","version":1,"space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}},"type":"Tag","createdAt":"2020-07-31T09:13:58.290Z","createdBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"updatedAt":"2020-07-31T09:13:58.290Z","updatedBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}}},"name":"marketing"}, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:58 GMT',
  'etag',
  '"9127516015754683102"',
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
  '8a0ea0a9f4f0c27aebe06dee6d050b6e',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/tags/:id',
  'Content-Length',
  '740',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=FabvXCuHRSyw8UeSorkLmtXgI18AAAAAQUIPAAAAAAAJ+eheLVp885XGrVj99YdK; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=EQr+FIXm8RD/ZVbDKsJtVwAAAADnAFjAe+3JhZdn+mksSo7j; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=Swa0WN3FPnQNx1j4PoVtA9XgI18AAAAAXcV/8oGHwOI5oH0b3jZjJQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '5-40686530-40686534 NNNY CT(0 0 0) RT(1596186837632 33) q(0 0 0 -1) r(2 2) U5'
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
    "createdAt": "2020-07-31T09:13:58.290Z",
    "updatedAt": "2020-07-31T09:13:58.290Z",
    "version": 1
  },
  "name": "marketing"
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:58 GMT',
  'etag',
  '"12662971145325975304"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35997',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '7',
  'X-Contentful-Request-Id',
  'bb5ead3322f9b22a8ca40166523bb690',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/tags/:id',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=iTwwlSs/TjuL1L8Qnl9aa9bgI18AAAAAQUIPAAAAAAAIQiUfx7Oc8WxM2lhd1zG3; expires=Fri, 30 Jul 2021 16:27:18 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=apRgcQuVoUJCLUiyKsJtVwAAAACtWd2YGYYZs7bcbhyjQRlv; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=zMacNSv3XjNUx1j4PoVtA9bgI18AAAAAthX/EDy8g1IsBbzo8Wk/UQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '10-24867450-24867451 NNYY CT(0 0 0) RT(1596186838116 36) q(0 0 0 -1) r(2 2) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/tags')
  .query({"limit":"100","order":"sys.createdAt","skip":"0"})
  .reply(200, {
  "sys": {
    "type": "Array"
  },
  "total": 2,
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
        "createdAt": "2020-07-31T09:13:58.290Z",
        "updatedAt": "2020-07-31T09:13:58.290Z",
        "version": 1
      },
      "name": "marketing"
    },
    {
      "sys": {
        "type": "Tag",
        "id": "longexampletag",
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
        "createdAt": "2020-07-31T09:13:31.138Z",
        "updatedAt": "2020-07-31T09:13:31.138Z",
        "version": 1
      },
      "name": "long example marketing"
    }
  ]
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:59 GMT',
  'etag',
  'W/"447921038425870676"',
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
  '2756f009d073062ac023b00f21fc31af',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/tags',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=HzRCe6dHQOiZL7F4p+TRBdbgI18AAAAAQUIPAAAAAAC1QPkjZ9eDerP2uQzRwVJ/; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=Cp/5F1lfhw4+NiZ2KsJtVwAAAABAqqk+7bM+FiKvbY13I8ZT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=L8XOGQBOHxGUx1j4PoVtA9bgI18AAAAAyqPGooV9vLcGgn3/J1iT2A==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '5-40686635-40686639 NNNY CT(0 0 0) RT(1596186838434 32) q(0 0 0 -1) r(2 2) U5'
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
        "createdAt":"2020-07-31T09:12:59Z",
        "updatedAt":"2020-07-31T09:12:59Z"
      }
    }
  ]
}

, [
  'accept-ranges',
  'bytes',
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:59 GMT',
  'etag',
  'W/"3a66d930e1a85f4903a09c66833fed74"',
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
  '526cea2b140263df957a1e3379d72ab6',
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
  'visid_incap_673446=ty7tzfKiSiG6QygpR2RhH9bgI18AAAAAQUIPAAAAAABheTaPYajQ60Vg+z6IHqYE; expires=Fri, 30 Jul 2021 16:27:06 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=erygD3KrNQUygPMSKsJtVwAAAABR425tl1d2fJiiJJW5GKnm; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=sQlCQyFGkQfBx1j4PoVtA9bgI18AAAAAa+Vor4vEY07VpAhXMCHJ5A==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '14-84970448-84970456 NNYY CT(0 0 0) RT(1596186838723 26) q(0 0 0 -1) r(1 1) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/tags/sampletag', {"sys":{"id":"sampletag","version":1},"name":"better marketing"})
  .reply(200, {"sys":{"type":"Tag","id":"sampletag","space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}},"createdBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"updatedBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"createdAt":"2020-07-31T09:13:58.290Z","updatedAt":"2020-07-31T09:13:59.787Z","version":2},"name":"better marketing"}, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:13:59 GMT',
  'etag',
  '"347071534891432989"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35997',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '7',
  'X-Contentful-Request-Id',
  'd4c6054feb276f20123400c50e63f9e3',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/tags/:id',
  'Content-Length',
  '747',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=pG3Wugl6RSC0ji0BmpjBNdfgI18AAAAAQUIPAAAAAABzQAshi3Cs2ZVufuvy+F3/; expires=Fri, 30 Jul 2021 16:27:18 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=R9UbQbJ7kn81pcr+KsJtVwAAAACK8QNxXZvCsOlYr0l+48+B; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=8dLFGVQgZn5myFj4PoVtA9fgI18AAAAAa/WsBtfdQt0/j0WokpiQ9g==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '10-24867531-24867533 NNNY CT(0 0 0) RT(1596186839138 36) q(0 0 0 -1) r(2 2) U5'
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
    "createdAt": "2020-07-31T09:13:58.290Z",
    "updatedAt": "2020-07-31T09:13:59.787Z",
    "version": 2
  },
  "name": "better marketing"
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:14:00 GMT',
  'etag',
  '"347071534891432989"',
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
  '16e0796aa4964661cfb52aed9d075317',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/tags/:id',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=12CnIXbsRGC8K5rEvCv4EtfgI18AAAAAQUIPAAAAAAA/ER5wYEEFpLm7Qp/QlcvC; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=AuoFIq0tqVBXpEwcKsJtVwAAAAA0dRFDN4qg4QSUQPl2v7xu; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=+uzaQ3iKYw6+yFj4PoVtA9fgI18AAAAAt3qthHV1oCNVrDk0IhJzIw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '3-19366174-19366175 NNYY CT(0 0 0) RT(1596186839446 32) q(0 0 0 -1) r(2 2) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/tags')
  .query({"limit":"100","order":"sys.createdAt","skip":"0"})
  .reply(200, {
  "sys": {
    "type": "Array"
  },
  "total": 2,
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
        "createdAt": "2020-07-31T09:13:58.290Z",
        "updatedAt": "2020-07-31T09:13:59.787Z",
        "version": 2
      },
      "name": "better marketing"
    },
    {
      "sys": {
        "type": "Tag",
        "id": "longexampletag",
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
        "createdAt": "2020-07-31T09:13:31.138Z",
        "updatedAt": "2020-07-31T09:13:31.138Z",
        "version": 1
      },
      "name": "long example marketing"
    }
  ]
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:14:00 GMT',
  'etag',
  'W/"13880311131856626097"',
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
  '9e39fc4bfff57a6e5a47c1b28d464e7c',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/tags',
  'Content-Length',
  '386',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=A6S6NRvWQHC20IBpg9zJW9jgI18AAAAAQUIPAAAAAABFxcUyr38nzi805qoLKlVA; expires=Fri, 30 Jul 2021 16:27:06 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=9UUXEW6bdhbMY1g1KsJtVwAAAAAQUsNmC3aks5GGvOgVkePC; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=0jzEcvypNx5xyVj4PoVtA9jgI18AAAAAF8nmHQJoQuDK3LHKYQMTEg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '14-84970667-84970677 NNNN CT(89 86 0) RT(1596186839696 54) q(0 0 2 -1) r(3 3) U5'
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
        "createdAt":"2020-07-31T09:12:59Z",
        "updatedAt":"2020-07-31T09:12:59Z"
      }
    }
  ]
}

, [
  'accept-ranges',
  'bytes',
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:14:00 GMT',
  'etag',
  'W/"3a66d930e1a85f4903a09c66833fed74"',
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
  '35997',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '7',
  'X-Contentful-Request-Id',
  'f58a0bcad27079d17390f17785985b99',
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
  'visid_incap_673446=5+xB4ZIETNux2TEtQURXs9jgI18AAAAAQUIPAAAAAACUAD1n235xUuayJEYBqR4c; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=f5/+OPjENxE3SSg3KsJtVwAAAADpbO3V6pIeEiSVecoRG4dP; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=7juETFHV4X2gyVj4PoVtA9jgI18AAAAAncSpX2/dr/7R1Rljj0LyaA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '5-40686853-40686855 NNYY CT(0 0 0) RT(1596186840160 26) q(0 0 0 -1) r(1 1) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .delete('/spaces/bohepdihyxin/environments/env-integration/tags/sampletag')
  .reply(204, "", [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:14:01 GMT',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35996',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '6',
  'X-Contentful-Request-Id',
  '6f88b80d2edea9b12d71f454b6b88ee7',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/tags/:id',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=fEvAiNGhSW6tQmrQMrlbwtjgI18AAAAAQUIPAAAAAACtxA6IwgV+CEBISVV2BldN; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=Q/bEA3RRHCDsxdWsKsJtVwAAAACahU2JsSEtfhTB2nJCMaS4; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=8qVrB3gtjnomylj4PoVtA9jgI18AAAAAMfh1Ri6ZesWTNU0DNcrjtQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '5-40686877-40686880 NNNY CT(0 0 0) RT(1596186840354 38) q(0 0 0 -1) r(2 2) U5'
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
  "requestId": "0b2282bef6d79e49c2f2e1694680306e"
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:14:01 GMT',
  'etag',
  '"5903357166242149445"',
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
  '0b2282bef6d79e49c2f2e1694680306e',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/tags/:id',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=93pJ2b6cR6+yrZcQmJ9BlNngI18AAAAAQUIPAAAAAAD7yPlycxAixqz2/V6VD3Sa; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=a1SnGqDbolJ7Mdx9KsJtVwAAAABvyPUlL54bAqImLykAk8//; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=qWXuS4KNE2mVylj4PoVtA9ngI18AAAAAVaiLJw/9gq4MSaL964e1wQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '11-39460598-39460609 NNYY CT(0 0 0) RT(1596186840673 38) q(0 0 0 -1) r(3 3) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/article', {"name":"blog post","fields":[{"name":"title","id":"title","type":"Symbol"}]})
  .reply(201, {"sys":{"space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"id":"article","type":"ContentType","createdAt":"2020-07-31T09:14:01.867Z","updatedAt":"2020-07-31T09:14:01.867Z","environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}},"createdBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"updatedBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"publishedCounter":0,"version":1},"displayField":null,"name":"blog post","description":null,"fields":[{"id":"title","name":"title","type":"Symbol","localized":false,"required":false,"validations":[],"disabled":false,"omitted":false}]}, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:14:01 GMT',
  'etag',
  '"11142338599787054062"',
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
  'f0b7b3070a22adfac1470e88c188371f',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:id',
  'Content-Length',
  '1043',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=pFovmnc3RuGxxPT5461/UNngI18AAAAAQUIPAAAAAACbrjOOlgn5aBLIs120EPX3; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=1atab/P8UhNGEYHaKsJtVwAAAADHjhMXmxlWc4/btzng7P4t; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=hMSMaGORTALyylj4PoVtA9ngI18AAAAAGjKGhiJRwkBEg1bEdPya1g==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '11-39460736-39460740 NNNY CT(0 0 0) RT(1596186841186 29) q(0 0 0 -1) r(2 2) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/article/published')
  .reply(200, {
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "bohepdihyxin"
      }
    },
    "id": "article",
    "type": "ContentType",
    "createdAt": "2020-07-31T09:14:01.867Z",
    "updatedAt": "2020-07-31T09:14:02.246Z",
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
    "firstPublishedAt": "2020-07-31T09:14:02.246Z",
    "publishedAt": "2020-07-31T09:14:02.246Z",
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
    }
  ]
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:14:02 GMT',
  'etag',
  'W/"11202708319164726900"',
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
  'bbcac6ef35740634946afc426f4e7d27',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:id/published',
  'Content-Length',
  '429',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=bwhiy9wBREy4gHs9i/UIz9ngI18AAAAAQUIPAAAAAADJkMoXhxTwd0WJpdz8njo1; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=CFAGYaGlTSsQu3ChKsJtVwAAAAArt4zkds3VPvjXiRCjAEs8; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=ztCCaVnodhxJy1j4PoVtA9ngI18AAAAAXR3dmbBMl58uD7wMxZhHCg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '12-52251128-52251137 NNNY CT(0 0 0) RT(1596186841589 36) q(0 0 0 -1) r(2 2) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/tags/new', {"name":"new","sys":{"id":"new"}})
  .reply(201, {"name":"new","sys":{"id":"new","space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}},"type":"Tag","version":1,"createdAt":"2020-07-31T09:14:02.786Z","createdBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"updatedAt":"2020-07-31T09:14:02.786Z","updatedBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}}}}, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:14:02 GMT',
  'etag',
  '"3125681919661894708"',
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
  'f0684f9bedbdea1b26748ca64b1dd29e',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/tags/:id',
  'Content-Length',
  '728',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=BakfA36zSbeJOZiG5By/cNrgI18AAAAAQUIPAAAAAACAsPm5x3qlfh67y2JDMIQz; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=4M+lCHuZ3HKtmtVNKsJtVwAAAADBN3mvHjqPtPXypklpgev9; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=lwU0JutxW3i3y1j4PoVtA9rgI18AAAAARZFv0XrfmDMC9VIo2vpgIA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '7-23314201-23314204 NNNY CT(0 0 0) RT(1596186842000 33) q(0 0 0 -1) r(3 3) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/tags/old', {"name":"old","sys":{"id":"old"}})
  .reply(201, {"name":"old","sys":{"id":"old","space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}},"type":"Tag","version":1,"createdAt":"2020-07-31T09:14:03.430Z","createdBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"updatedAt":"2020-07-31T09:14:03.430Z","updatedBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}}}}, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:14:03 GMT',
  'etag',
  '"8288522144218914091"',
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
  'cdbe152b75d0322732dc051808e52b37',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/tags/:id',
  'Content-Length',
  '728',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=9Rj7jNJASySYfVxhh4FbhNrgI18AAAAAQUIPAAAAAABxmKiPyeKah4hfHgE5dwQD; expires=Fri, 30 Jul 2021 16:27:18 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=cAGdMT5PLmRc5JnKKsJtVwAAAABJ7ELvG3Ar2vPfH/wSMpbj; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=fbLmYmwU92oSzVj4PoVtA9rgI18AAAAAQNsDLGZaqggn2d/Ls5DU3Q==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '10-24867791-24867793 NNNN CT(86 88 0) RT(1596186842612 23) q(0 0 2 -1) r(3 3) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .post('/spaces/bohepdihyxin/environments/env-integration/entries', {"fields":{"title":{"en-US":"hello!"}},"metadata":{"tags":[{"sys":{"id":"new","type":"Link","linkType":"Tag"}}]}})
  .reply(201, {
  "metadata": {
    "tags": [
      {
        "sys": {
          "id": "new",
          "type": "Link",
          "linkType": "Tag"
        }
      }
    ]
  },
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "bohepdihyxin"
      }
    },
    "id": "2Gic6Kw7NjoMxReub15dXl",
    "type": "Entry",
    "createdAt": "2020-07-31T09:14:06.065Z",
    "updatedAt": "2020-07-31T09:14:06.065Z",
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
        "id": "article"
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:14:06 GMT',
  'etag',
  '"12311525336909965803"',
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
  '4c675540bb9846e44a82348eedcaa2d0',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/entries',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=N3rRy/YLSq6QMHiV2NfJRd3gI18AAAAAQUIPAAAAAADDuJ+eOxB33hI5UONkUXQu; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=dJ2THrXe3BLP1MueKsJtVwAAAAAsdU1FWVXKLXrYwG0UNP7b; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=stGWBaLaPwM5z1j4PoVtA93gI18AAAAArDrTDrU3n7vBfsl39PSuRw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '13-65881400-65881406 NNYN CT(1946 197 0) RT(1596186843224 28) q(0 0 21 -1) r(25 25) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/content_types')
  .query({"limit":"100","order":"sys.createdAt","sys.id%5Bin%5D":"article","skip":"0"})
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
        "id": "article",
        "type": "ContentType",
        "createdAt": "2020-07-31T09:14:01.867Z",
        "updatedAt": "2020-07-31T09:14:02.246Z",
        "environment": {
          "sys": {
            "id": "env-integration",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 1,
        "publishedAt": "2020-07-31T09:14:02.246Z",
        "firstPublishedAt": "2020-07-31T09:14:02.246Z",
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
        }
      ]
    }
  ]
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:14:06 GMT',
  'etag',
  'W/"2551291479685592496"',
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
  '5689b8093adcfec0fc04294dcc746991',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types',
  'Content-Length',
  '501',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=rvt25uEzQJWqMbbxJjbaDt7gI18AAAAAQUIPAAAAAADQuOYlhhUd5WbYgfC5bB++; expires=Fri, 30 Jul 2021 16:27:06 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=sp10I+dsNGI9PfYmKsJtVwAAAAD1L8DgmbAVYaeqLI7nDPaL; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=HHbmasRBPWW5z1j4PoVtA97gI18AAAAAS+6V8dSxhcUn6PklaoXy6Q==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '14-84971892-84971898 NNNN CT(88 90 0) RT(1596186845779 27) q(0 0 1 -1) r(5 5) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/entries')
  .query({"limit":"100","order":"sys.createdAt","sys.archivedAt%5Bexists%5D":"false","sys.contentType.sys.id%5Bin%5D":"article","skip":"0"})
  .reply(200, {
  "sys": {
    "type": "Array"
  },
  "total": 1,
  "skip": 0,
  "limit": 100,
  "items": [
    {
      "metadata": {
        "tags": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Tag",
              "id": "new"
            }
          }
        ]
      },
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "bohepdihyxin"
          }
        },
        "id": "2Gic6Kw7NjoMxReub15dXl",
        "type": "Entry",
        "createdAt": "2020-07-31T09:14:06.065Z",
        "updatedAt": "2020-07-31T09:14:06.065Z",
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
            "id": "article"
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:14:07 GMT',
  'etag',
  'W/"13648361664825308325"',
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
  '8a8f5a633c7d5cc54d01d7ef72614e61',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/entries',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=kC9T7VCNTYWisULy7cbz6t7gI18AAAAAQUIPAAAAAAD5DpSlY73Z0q55F1plOjlk; expires=Fri, 30 Jul 2021 16:27:06 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=vEbbQc275nz2DTHlKsJtVwAAAAD0DLSIkvh50M6qJyfPLE5g; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=1kJIBb0dnW1b0Fj4PoVtA97gI18AAAAAYMkNvSZ1XBfZzPlbR3zQEQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '14-84972217-84972232 NNNN CT(93 94 0) RT(1596186846494 35) q(0 0 2 -1) r(4 4) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/tags')
  .query({"limit":"100","order":"sys.createdAt","skip":"0"})
  .reply(200, {
  "sys": {
    "type": "Array"
  },
  "total": 3,
  "items": [
    {
      "sys": {
        "type": "Tag",
        "id": "old",
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
        "createdAt": "2020-07-31T09:14:03.430Z",
        "updatedAt": "2020-07-31T09:14:03.430Z",
        "version": 1
      },
      "name": "old"
    },
    {
      "sys": {
        "type": "Tag",
        "id": "new",
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
        "createdAt": "2020-07-31T09:14:02.786Z",
        "updatedAt": "2020-07-31T09:14:02.786Z",
        "version": 1
      },
      "name": "new"
    },
    {
      "sys": {
        "type": "Tag",
        "id": "longexampletag",
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
        "createdAt": "2020-07-31T09:13:31.138Z",
        "updatedAt": "2020-07-31T09:13:31.138Z",
        "version": 1
      },
      "name": "long example marketing"
    }
  ]
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:14:07 GMT',
  'etag',
  'W/"9690957610626063303"',
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
  'bc84a5aa5f60b68346b6e0803acaf17c',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/tags',
  'Content-Length',
  '410',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=TswnSnwXTw2qs41KY9hD/d/gI18AAAAAQUIPAAAAAAArdCzTn1dcC5Wzt5esNmw+; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=hHANZ/9DRievvK3LKsJtVwAAAACPkBF3ABZoLIsi6vakr6Up; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=B5VAR/fxxHaN0Fj4PoVtA9/gI18AAAAAVA2je3tnN22+rjXeg8dNPg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '4-27599826-27599828 NNNY CT(0 0 0) RT(1596186847112 33) q(0 0 0 -1) r(2 2) U5'
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
        "createdAt":"2020-07-31T09:12:59Z",
        "updatedAt":"2020-07-31T09:12:59Z"
      }
    }
  ]
}

, [
  'accept-ranges',
  'bytes',
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:14:08 GMT',
  'etag',
  'W/"3a66d930e1a85f4903a09c66833fed74"',
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
  '08e4b96af9d91771b6c3cb3f59a0a7c7',
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
  'visid_incap_673446=uNNvDdRPTW23Tm3ZnmDlHt/gI18AAAAAQUIPAAAAAAD64t8gorhnISf6Ev9P3Wmp; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=LDpEBluMcwsCGZbuKsJtVwAAAADr4QJXY7f6cLUohr2WYp4J; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=l39BRR1KS0/J0Fj4PoVtA9/gI18AAAAAekPhcHdZ8ah3/DfAFTgwQw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '1-5377268-5377269 NNYY CT(0 0 0) RT(1596186847432 32) q(0 0 0 -1) r(1 1) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/entries/2Gic6Kw7NjoMxReub15dXl', {"sys":{"id":"2Gic6Kw7NjoMxReub15dXl","version":1,"contentType":{"sys":{"type":"Link","linkType":"ContentType","id":"article"}}},"fields":{"title":{"en-US":"hello!"}},"metadata":{"tags":[{"sys":{"type":"Link","linkType":"Tag","id":"new"}},{"sys":{"id":"old","type":"Link","linkType":"Tag"}}]}})
  .reply(200, {
  "metadata": {
    "tags": [
      {
        "sys": {
          "type": "Link",
          "linkType": "Tag",
          "id": "new"
        }
      },
      {
        "sys": {
          "id": "old",
          "type": "Link",
          "linkType": "Tag"
        }
      }
    ]
  },
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "bohepdihyxin"
      }
    },
    "id": "2Gic6Kw7NjoMxReub15dXl",
    "type": "Entry",
    "createdAt": "2020-07-31T09:14:06.065Z",
    "updatedAt": "2020-07-31T09:14:08.398Z",
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
        "id": "article"
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:14:08 GMT',
  'etag',
  'W/"9533241794951771397"',
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
  '31e0f3f333f8fd58e6cc2d70a3d0c008',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/entries/:id',
  'Content-Length',
  '428',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=BCB2NxlgTueyEp1JVcIchN/gI18AAAAAQUIPAAAAAADhSwHR/zL0zF0Ed97BU0G8; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=1NUWJvKDQHmoemETKsJtVwAAAABg0lv5Z9s3OH3ls8vq1iTJ; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=/3/UPnxORQwa0Vj4PoVtA9/gI18AAAAAp5AH47GtcZfOXLSR+K4Niw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '12-52252230-52252233 NNNY CT(0 0 0) RT(1596186847738 23) q(0 0 0 -1) r(2 2) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/article', {"name":"blog post","displayField":null,"fields":[{"id":"title","name":"title","type":"Symbol","localized":false,"required":false,"validations":[],"disabled":false,"omitted":false}],"description":null})
  .reply(200, {
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "bohepdihyxin"
      }
    },
    "id": "article",
    "type": "ContentType",
    "createdAt": "2020-07-31T09:14:01.867Z",
    "updatedAt": "2020-07-31T09:14:08.826Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 1,
    "publishedAt": "2020-07-31T09:14:02.246Z",
    "firstPublishedAt": "2020-07-31T09:14:02.246Z",
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
    }
  ]
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:14:08 GMT',
  'etag',
  'W/"17115770656763158456"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35997',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '7',
  'X-Contentful-Request-Id',
  '1095bea18807ab9422c021d5c4821ceb',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:id',
  'Content-Length',
  '435',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=J+a+QI0gS02M+ZF/s4KpUuDgI18AAAAAQUIPAAAAAACuzbqSbWN/1KfgV2qQVVt+; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=tlObb3spV3elCrkKKsJtVwAAAABWS2QnWx0xMxq801Vjx6aj; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=exUQX13NlXpm0Vj4PoVtA+DgI18AAAAAakHvPB66J3D71Lika3G/2g==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '7-23314576-23314582 NNNY CT(0 0 0) RT(1596186848158 29) q(0 0 0 -1) r(2 2) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/entries')
  .query({"content_type":"article"})
  .reply(200, {
  "sys": {
    "type": "Array"
  },
  "total": 1,
  "skip": 0,
  "limit": 100,
  "items": [
    {
      "metadata": {
        "tags": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Tag",
              "id": "old"
            }
          },
          {
            "sys": {
              "type": "Link",
              "linkType": "Tag",
              "id": "new"
            }
          }
        ]
      },
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "bohepdihyxin"
          }
        },
        "id": "2Gic6Kw7NjoMxReub15dXl",
        "type": "Entry",
        "createdAt": "2020-07-31T09:14:06.065Z",
        "updatedAt": "2020-07-31T09:14:08.398Z",
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
            "id": "article"
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:14:09 GMT',
  'etag',
  'W/"18083015653529165797"',
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
  '5dd640634c93498b86d69798f7963d04',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/entries',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=Z0Ihwz7sR2ehMuSVAfysC+DgI18AAAAAQUIPAAAAAAC8t3sR78jutbuNkiDh1LBo; expires=Fri, 30 Jul 2021 16:27:18 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=hsdrPLoXVjMaW+xmKsJtVwAAAAB99+U5v50F7kiALZ1sBwAc; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=i4F5M3xdHGG10Vj4PoVtA+DgI18AAAAAl9qh+Qjm4259Buw4M2I6Nw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '10-24868223-24868228 NNNY CT(0 0 0) RT(1596186848556 30) q(0 0 0 -1) r(2 2) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/content_types')
  .query({"limit":"100","order":"sys.createdAt","sys.id%5Bin%5D":"article","skip":"0"})
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
        "id": "article",
        "type": "ContentType",
        "createdAt": "2020-07-31T09:14:01.867Z",
        "updatedAt": "2020-07-31T09:14:08.826Z",
        "environment": {
          "sys": {
            "id": "env-integration",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 1,
        "publishedAt": "2020-07-31T09:14:02.246Z",
        "firstPublishedAt": "2020-07-31T09:14:02.246Z",
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
        }
      ]
    }
  ]
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:14:09 GMT',
  'etag',
  'W/"4230751047654965742"',
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
  '3124e1e991322a7e2794878def3d5e18',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=IaDSHWU9TBGbpipE7H4/huHgI18AAAAAQUIPAAAAAACP/AGpZg6eiArkIFyGPxGF; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=Q6B3NGj8i3c27FkdKsJtVwAAAACXz3bysYWH2sErxJZOxgMk; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=bJwrVE0RNgjz0Vj4PoVtA+HgI18AAAAAllpe2ctUpMwcr2Xdk0zW4g==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '5-40687838-40687842 NNNY CT(0 0 0) RT(1596186848866 34) q(0 0 0 -1) r(1 1) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/entries')
  .query({"limit":"100","order":"sys.createdAt","sys.archivedAt%5Bexists%5D":"false","sys.contentType.sys.id%5Bin%5D":"article","skip":"0"})
  .reply(200, {
  "sys": {
    "type": "Array"
  },
  "total": 1,
  "skip": 0,
  "limit": 100,
  "items": [
    {
      "metadata": {
        "tags": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Tag",
              "id": "old"
            }
          },
          {
            "sys": {
              "type": "Link",
              "linkType": "Tag",
              "id": "new"
            }
          }
        ]
      },
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "bohepdihyxin"
          }
        },
        "id": "2Gic6Kw7NjoMxReub15dXl",
        "type": "Entry",
        "createdAt": "2020-07-31T09:14:06.065Z",
        "updatedAt": "2020-07-31T09:14:08.398Z",
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
            "id": "article"
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:14:09 GMT',
  'etag',
  'W/"18083015653529165797"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35997',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '7',
  'X-Contentful-Request-Id',
  'f1ec9a9118c61b0f478b43ed2ea57b96',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/entries',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=7PPV+7slQU6fW8CkZ6VTA+HgI18AAAAAQUIPAAAAAAAuXKaP4y36WM9RlrNRbped; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=tPfvZ7MQUWxDzVczKsJtVwAAAACCxdLt0LnE6FcRSXVhLWKA; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=v7E0A1yJsgEs0lj4PoVtA+HgI18AAAAArqKCt+/7+aIetCK8b/irwQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '5-40687868-40687876 NNNY CT(0 0 0) RT(1596186849126 42) q(0 0 0 -1) r(2 2) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/tags')
  .query({"limit":"100","order":"sys.createdAt","skip":"0"})
  .reply(200, {
  "sys": {
    "type": "Array"
  },
  "total": 3,
  "items": [
    {
      "sys": {
        "type": "Tag",
        "id": "old",
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
        "createdAt": "2020-07-31T09:14:03.430Z",
        "updatedAt": "2020-07-31T09:14:03.430Z",
        "version": 1
      },
      "name": "old"
    },
    {
      "sys": {
        "type": "Tag",
        "id": "new",
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
        "createdAt": "2020-07-31T09:14:02.786Z",
        "updatedAt": "2020-07-31T09:14:02.786Z",
        "version": 1
      },
      "name": "new"
    },
    {
      "sys": {
        "type": "Tag",
        "id": "longexampletag",
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
        "createdAt": "2020-07-31T09:13:31.138Z",
        "updatedAt": "2020-07-31T09:13:31.138Z",
        "version": 1
      },
      "name": "long example marketing"
    }
  ]
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:14:10 GMT',
  'etag',
  'W/"9690957610626063303"',
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
  '378e6fa65cd53d2862b564dcaa4daf37',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/tags',
  'Content-Length',
  '410',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=EuKWqyfOR9S314AisaR4vuHgI18AAAAAQUIPAAAAAAApPHeTcapBVnHmWHeqwc9m; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=pe34A0NDGDYBBTqNKsJtVwAAAABAsgY+lbqzoi4FLLHuG2u2; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=rdYiBc4oW1ia0lj4PoVtA+HgI18AAAAAHHLKgZaVQoeUhmafnzSHPA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '11-39461810-39461817 NNNY CT(0 0 0) RT(1596186849580 34) q(0 0 0 -1) r(1 1) U5'
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
        "createdAt":"2020-07-31T09:12:59Z",
        "updatedAt":"2020-07-31T09:12:59Z"
      }
    }
  ]
}

, [
  'accept-ranges',
  'bytes',
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:14:10 GMT',
  'etag',
  'W/"3a66d930e1a85f4903a09c66833fed74"',
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
  '304a7c020f5e23660ad8d2e451578236',
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
  'visid_incap_673446=KAtwM895Q8mJBJneDB1tteLgI18AAAAAQUIPAAAAAACoUVd6XY3xwrYqODZjN5kJ; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=xUtGcgDaGC/I5Az1KsJtVwAAAACjdvutMnBM2RRIQijvaYMQ; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=+jsteAXrpFHI0lj4PoVtA+LgI18AAAAAf5tqb6AszNzAO9gA+pnkew==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '3-19366818-19366821 NNYY CT(0 0 0) RT(1596186849886 34) q(0 0 0 -1) r(1 1) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/entries/2Gic6Kw7NjoMxReub15dXl', {"sys":{"id":"2Gic6Kw7NjoMxReub15dXl","version":2,"contentType":{"sys":{"type":"Link","linkType":"ContentType","id":"article"}}},"fields":{"title":{"en-US":"hello!"}},"metadata":{"tags":[]}})
  .reply(200, {"metadata":{"tags":[]},"sys":{"space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"id":"2Gic6Kw7NjoMxReub15dXl","type":"Entry","createdAt":"2020-07-31T09:14:06.065Z","updatedAt":"2020-07-31T09:14:10.967Z","environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}},"createdBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"updatedBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"publishedCounter":0,"version":3,"contentType":{"sys":{"type":"Link","linkType":"ContentType","id":"article"}}},"fields":{"title":{"en-US":"hello!"}}}, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:14:11 GMT',
  'etag',
  '"3683642979802934899"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35997',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '7',
  'X-Contentful-Request-Id',
  'fe4bf744e8fd4a12bca34df972b7b6f2',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/entries/:id',
  'Content-Length',
  '993',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=enWjuI1kQSKZBAOrCVqSb+LgI18AAAAAQUIPAAAAAADqC9N1Xl85IlD8eFgFP8lR; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=3zLbUixvRkxSnPeuKsJtVwAAAACd9foDksYhDzjLAS6hfA5J; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=mUl+Eej07i8001j4PoVtA+LgI18AAAAADP4569S1pVQhxQtuYQUeJA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '11-39461859-39461860 NNNN CT(93 94 0) RT(1596186850099 34) q(0 0 2 -1) r(4 4) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/article', {"name":"blog post","displayField":null,"fields":[{"id":"title","name":"title","type":"Symbol","localized":false,"required":false,"validations":[],"disabled":false,"omitted":false}],"description":null})
  .reply(200, {
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "bohepdihyxin"
      }
    },
    "id": "article",
    "type": "ContentType",
    "createdAt": "2020-07-31T09:14:01.867Z",
    "updatedAt": "2020-07-31T09:14:11.513Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 1,
    "publishedAt": "2020-07-31T09:14:02.246Z",
    "firstPublishedAt": "2020-07-31T09:14:02.246Z",
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
    }
  ]
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:14:11 GMT',
  'etag',
  'W/"5288435989951587074"',
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
  'eaf48954fed229750def5ce156408232',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:id',
  'Content-Length',
  '436',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=eQQm+cEzTrGEJSRieXbpm+PgI18AAAAAQUIPAAAAAAAgJaQanqRizIz24gt8A17O; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=eMLxVMIbdkpeuCmDKsJtVwAAAACmw7Dyx2cPy8wnGGNxBeur; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=JJJETG1BFEmh01j4PoVtA+PgI18AAAAAOoxKyDOLwC+sEHUt5KN1VA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '4-27600219-27600224 NNNY CT(0 0 0) RT(1596186850828 33) q(0 0 0 -1) r(2 2) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/entries')
  .query({"content_type":"article"})
  .reply(200, {
  "sys": {
    "type": "Array"
  },
  "total": 1,
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
        "id": "2Gic6Kw7NjoMxReub15dXl",
        "type": "Entry",
        "createdAt": "2020-07-31T09:14:06.065Z",
        "updatedAt": "2020-07-31T09:14:10.967Z",
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
        "version": 3,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "article"
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:14:12 GMT',
  'etag',
  'W/"7128273247290711745"',
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
  '9b169a1cbd0ccf40fe8fdf3ff3340247',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/entries',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=oaBmfP2TQ2KSgl7d57LnEePgI18AAAAAQUIPAAAAAADZEmEPkK22GKahC2sY+zL3; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=ei9VSt9rXkKvYkd9KsJtVwAAAADCTp4abxlq9kxdfN4pT+Kb; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=1KHcIIask3sP1Fj4PoVtA+PgI18AAAAAyzp1icWAkkje7sqfTzMArw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '5-40688157-40688162 NNNN CT(86 90 0) RT(1596186851222 35) q(0 0 2 -1) r(3 3) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .delete('/spaces/bohepdihyxin/environments/env-integration')
  .reply(204, "", [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
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
  'Fri, 31 Jul 2020 09:14:13 GMT',
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
  'f2272cc54312561d8757bbe345c472d6',
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
  'visid_incap_673446=ZKMiFYl3TmqzwRUpExC5wuTgI18AAAAAQUIPAAAAAACwSP/qwE6LvOjL7aOFlY7c; expires=Fri, 30 Jul 2021 16:27:17 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=5DbkJR/FhBvF85bpKsJtVwAAAAAbGVnH9hmKRcspAVPUG8++; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=QhrxGly0yhDQ1Fj4PoVtA+TgI18AAAAAzgkrpWIJKw9QrAJXQvdIxw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '5-40688196-40688200 NNNY CT(0 0 0) RT(1596186851658 137) q(0 0 0 -1) r(9 9) U5'
]);