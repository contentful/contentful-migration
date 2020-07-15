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
  'Wed, 15 Jul 2020 13:01:39 GMT',
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
  'f463b858894bc5c525d70b11b13fc1fb',
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
  'visid_incap_673446=XoZ8nheaQ1azEuZ4+NUa/zL+Dl8AAAAAQUIPAAAAAABtyUGHKa7kraVai4e3slVn; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=GF8NZgWm43qDzP7vKsJtVwAAAACdNLtBv11q+F+IzQLdlz8s; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=oX5VB4E6+CgWqitOOoVtAzP+Dl8AAAAAsdyh6dyWdCEocOI/mEsX4w==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '4-16156885-16156891 NNYN CT(93 93 0) RT(1594818098789 40) q(0 0 2 2) r(3 3) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration', {"name":"env-integration"})
  .reply(201, {"name":"env-integration","sys":{"type":"Environment","id":"env-integration","version":1,"space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"status":{"sys":{"type":"Link","linkType":"Status","id":"queued"}},"createdBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"createdAt":"2020-07-15T13:01:40Z","updatedBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"updatedAt":"2020-07-15T13:01:40Z"}}, [
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
  'Wed, 15 Jul 2020 13:01:40 GMT',
  'etag',
  'W/"f2f73240950f6fb6767db9ca09766d82"',
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
  '4c0f4081f38ad36770e6d0b59134777e',
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
  'visid_incap_673446=x3mhKjOGQrCubJ4WcjOs+TT+Dl8AAAAAQUIPAAAAAAAGZYQ1A0tfOjGodmH7kZet; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=MoCqBQP4wk5/PMieKsJtVwAAAAA4oRrpCe+oTLvUY98kCug8; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=1ftWKXA5ZDHQqytOOoVtAzT+Dl8AAAAA3vJnQ+x889uqYR6vJpGu2g==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '12-31839320-31839326 NNNN CT(88 89 0) RT(1594818099425 30) q(0 0 2 -1) r(11 11) U5'
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
    "createdAt":"2020-07-15T13:01:40Z",
    "updatedBy":{
      "sys":{
        "type":"Link",
        "linkType":"User",
        "id":"1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "updatedAt":"2020-07-15T13:01:41Z"
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
  'Wed, 15 Jul 2020 13:01:41 GMT',
  'etag',
  'W/"b632bea14042aae91a6c6d5419e3ecb6"',
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
  '386c023900af40b7fb6b27cd0a3b5909',
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
  'visid_incap_673446=DzEL8QrhQSGj9itxUaCazzX+Dl8AAAAAQUIPAAAAAADO8RazLh+ZISBtGXJg+nmU; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=aNEjXwL3/WQs9jZTKsJtVwAAAAAlaC3VywQyCuo5ZvA5iDai; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=8RH/DGecQSvQrCtOOoVtAzX+Dl8AAAAApwpFrGfKqCeiB3UgwiqyIA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '10-15248178-15248190 NNYN CT(87 87 0) RT(1594818100744 23) q(0 0 2 -1) r(9 9) U5'
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
  'Wed, 15 Jul 2020 13:01:42 GMT',
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
  'be6a79771bf848886a23f0250994f66d',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=01fFGjRVT/GxeJoc/UToXzb+Dl8AAAAAQUIPAAAAAABVuWn1kxyCEAqWTR22DyWh; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=kDFxV/7VXn/WW3ZWKsJtVwAAAAD658qDetb631wx7N6I16N3; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=/owdNGnZszEjritOOoVtAzb+Dl8AAAAAlNcCAgpzFVu4IeH7SYb/VQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '11-25359542-25359546 NNYN CT(111 87 0) RT(1594818101699 29) q(0 0 2 -1) r(8 8) U5'
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
        "createdAt":"2020-07-15T13:01:40Z",
        "updatedAt":"2020-07-15T13:01:40Z"
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
  'Wed, 15 Jul 2020 13:01:43 GMT',
  'etag',
  'W/"6e10216e1ac922f60100fcd077f6c626"',
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
  'a4583cfb1089f5f75738cc00fc8ffbef',
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
  'visid_incap_673446=H6t2dBUcTgm9qe3uLPWPcjf+Dl8AAAAAQUIPAAAAAACmf3A33fJ/nYWwCWnMKZPM; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=J7SVRObymFAPrJL7KsJtVwAAAACisQxEcmgK9Kajkekfs3G7; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=q2v+VFdhgibzrytOOoVtAzf+Dl8AAAAAon4LHxwmr+TtEGi21RFl/w==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '13-37638233-37638243 NNYN CT(93 95 0) RT(1594818102691 38) q(0 0 2 -1) r(9 9) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/dog', {"name":"angry dog","fields":[{"id":"woofs","name":"woof woof","type":"Number","required":true}],"description":"super angry"})
  .reply(201, {"sys":{"space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"id":"dog","type":"ContentType","createdAt":"2020-07-15T13:01:44.968Z","updatedAt":"2020-07-15T13:01:44.968Z","environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}},"createdBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"updatedBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"publishedCounter":0,"version":1},"displayField":null,"name":"angry dog","description":"super angry","fields":[{"id":"woofs","name":"woof woof","type":"Number","localized":false,"required":true,"validations":[],"disabled":false,"omitted":false}]}, [
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
  'Wed, 15 Jul 2020 13:01:45 GMT',
  'etag',
  '"8986452046298379445"',
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
  '15f70f068f00328b83c48c682f3976df',
  'Content-Length',
  '1051',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=St5Vto1pTkuP/FCRwNiiUTj+Dl8AAAAAQUIPAAAAAACLxwA6FTVWDEDSG7pMEhwS; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=LEU2fMlpF0TiA6NvKsJtVwAAAACzAI6n9IsO9F5iOYoC6Iev; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=Yf74PMl8x0dMsStOOoVtAzj+Dl8AAAAAXlo6hIlOpo2IdoJxSYA8Ow==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '8-4808157-4808162 NNNN CT(93 93 0) RT(1594818103735 28) q(0 0 2 -1) r(12 12) U5'
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
    "createdAt": "2020-07-15T13:01:44.968Z",
    "updatedAt": "2020-07-15T13:01:45.789Z",
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
    "firstPublishedAt": "2020-07-15T13:01:45.789Z",
    "publishedAt": "2020-07-15T13:01:45.789Z",
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
  'Wed, 15 Jul 2020 13:01:45 GMT',
  'etag',
  'W/"14221311967568643208"',
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
  '1f812d7a33af9a813ea76da41d3fc692',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=Js/I9uhoT+elkc2Gboqxnjn+Dl8AAAAAQUIPAAAAAAAwXHK1dgvS3Q469IDrH19K; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=XcsmHeQRC0gJmoIPKsJtVwAAAADPL7aaH2WJrg8isRXptB1C; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=joClaqTCRGkUsitOOoVtAzn+Dl8AAAAAY422JkTD1B/OaFgEy4pL5g==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '10-15248862-15248865 NNNN CT(93 94 0) RT(1594818105085 36) q(0 0 2 -1) r(5 5) U5'
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
    "createdAt": "2020-07-15T13:01:44.968Z",
    "updatedAt": "2020-07-15T13:01:45.789Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 1,
    "publishedAt": "2020-07-15T13:01:45.789Z",
    "firstPublishedAt": "2020-07-15T13:01:45.789Z",
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
  'Wed, 15 Jul 2020 13:01:46 GMT',
  'etag',
  'W/"13138777583991722542"',
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
  'b9d43cb5c33bb52e75d6e733ffba843a',
  'Content-Length',
  '444',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=t92fQdo5SKSkXITi5/puuDr+Dl8AAAAAQUIPAAAAAACKhlmdEBz6Ov8LH5baQaPK; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=IYqIW5Y4Z0PaDCJCKsJtVwAAAAB9D4LT0YBwkMdplJzBE+f9; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=RduAJQsCswP9sitOOoVtAzr+Dl8AAAAAUpP1w0BhytuLoiO4Vx/WZw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '12-31840701-31840710 NNNN CT(93 96 0) RT(1594818105851 34) q(0 0 2 -1) r(5 5) U5'
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
        "createdAt": "2020-07-15T13:01:44.968Z",
        "updatedAt": "2020-07-15T13:01:45.789Z",
        "environment": {
          "sys": {
            "id": "env-integration",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 1,
        "publishedAt": "2020-07-15T13:01:45.789Z",
        "firstPublishedAt": "2020-07-15T13:01:45.789Z",
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
  'Wed, 15 Jul 2020 13:01:52 GMT',
  'etag',
  'W/"6224799224826842910"',
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
  '7895bf9472861fecea4aa45f8a56c48b',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=Ct/ddlxlQeuUg/nA9D1CsD/+Dl8AAAAAQUIPAAAAAAApnNdP5R9iD0fQOrU8bVGj; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=tJzdKy0/vxWLjt62KsJtVwAAAAByQPu0GbBq/VIq4BOMN2Ze; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=G/HOcbLq9x9DuStOOoVtAz/+Dl8AAAAAOcE/r60zA2AAFScTdekjTg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '9-9981753-9981754 NNNN CT(93 93 0) RT(1594818111568 41) q(0 0 1 -1) r(3 3) U5'
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
        "createdAt":"2020-07-15T13:01:40Z",
        "updatedAt":"2020-07-15T13:01:40Z"
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
  'Wed, 15 Jul 2020 13:01:52 GMT',
  'etag',
  'W/"6e10216e1ac922f60100fcd077f6c626"',
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
  '08338116431bdaa6d8da2b2796d320a4',
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
  'visid_incap_673446=A2wRUyTsT4Cciqz9K5xfXUD+Dl8AAAAAQUIPAAAAAACvnHAzL/ZRBzKx7wJ0uJtq; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=2lFtJHrBQ1cg24QaKsJtVwAAAAAxzOdz79FCGHhKyHI/52A6; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=nmWOf7FcR1CruStOOoVtA0D+Dl8AAAAAA9nljKMd4oSNWUhDOOkMmg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '13-37640260-37640269 NNYN CT(87 87 0) RT(1594818112111 29) q(0 0 2 -1) r(3 3) U5'
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
    "createdAt": "2020-07-15T13:01:44.968Z",
    "updatedAt": "2020-07-15T13:01:53.194Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 1,
    "publishedAt": "2020-07-15T13:01:45.789Z",
    "firstPublishedAt": "2020-07-15T13:01:45.789Z",
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
  'Wed, 15 Jul 2020 13:01:53 GMT',
  'etag',
  'W/"16834381757727875952"',
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
  '79c1ab37571f6f854b7ec3749837af02',
  'Content-Length',
  '449',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=ifD/xGbNSMukXZPABY4Ye0D+Dl8AAAAAQUIPAAAAAAABmyLvAMKGWSsHhTc2DvOH; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=H8usSe5me0+Ugb/eKsJtVwAAAAC6KCVmbI8xifSHmtzVlaq3; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=pkjvK5K0Gk0zuitOOoVtA0D+Dl8AAAAAw7CjADeWjQx+pIlJ05LRBQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '14-49415436-49415447 NNNN CT(91 89 0) RT(1594818112511 27) q(0 0 2 -1) r(4 4) U5'
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
    "createdAt": "2020-07-15T13:01:44.968Z",
    "updatedAt": "2020-07-15T13:01:53.832Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 3,
    "publishedAt": "2020-07-15T13:01:53.832Z",
    "firstPublishedAt": "2020-07-15T13:01:45.789Z",
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
  'Wed, 15 Jul 2020 13:01:53 GMT',
  'etag',
  'W/"3496942365540704056"',
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
  '18d0b7639f968389dfb7d7ef4ae6ba43',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=iKop+TpdTuKWk7apH2nL6EH+Dl8AAAAAQUIPAAAAAAAiLqxHOdNMWyxdYsc0qL9O; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=B0C+NtKPAkIBzYJ5KsJtVwAAAADcftnr0wSHoZhaet7AzDTA; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=TBqCFZWROykAuytOOoVtA0H+Dl8AAAAAyxBoJnC9/ybX+JMpssCP5A==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '14-49415578-49415590 NNNN CT(88 92 0) RT(1594818113135 37) q(0 0 2 -1) r(5 5) U5'
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
    "createdAt": "2020-07-15T13:01:44.968Z",
    "updatedAt": "2020-07-15T13:01:54.445Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 3,
    "publishedAt": "2020-07-15T13:01:53.832Z",
    "firstPublishedAt": "2020-07-15T13:01:45.789Z",
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
  'Wed, 15 Jul 2020 13:01:54 GMT',
  'etag',
  'W/"16526455989328291084"',
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
  '8988a4acafbdc7d587ae2866b3fed7fd',
  'Content-Length',
  '375',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=Y9PUBdvuRou/yWgwSZRAuEL+Dl8AAAAAQUIPAAAAAAA21y8APB6Q29IBCRJxK697; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=7/LwEm6tli8i93t0KsJtVwAAAACotn2dVhWKI/BgG9okXQGf; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=JPvxRX2VJDumuytOOoVtA0L+Dl8AAAAAI8TDy5DoRU64H0XXcCNdzA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '14-49415750-49415758 NNNN CT(88 91 0) RT(1594818113745 36) q(0 0 2 -1) r(4 4) U5'
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
    "createdAt": "2020-07-15T13:01:44.968Z",
    "updatedAt": "2020-07-15T13:01:54.911Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 5,
    "publishedAt": "2020-07-15T13:01:54.911Z",
    "firstPublishedAt": "2020-07-15T13:01:45.789Z",
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
  'Wed, 15 Jul 2020 13:01:55 GMT',
  'etag',
  'W/"4074023039579984184"',
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
  '90fc1327f7d8d1ca26cf54d88f0a1f48',
  'Content-Length',
  '370',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=BOxBT/JfRkCaaw2abvN9b0L+Dl8AAAAAQUIPAAAAAAAySwDIvriky0H4BdKQOxR2; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=pXiYRUpW4n5+pRSpKsJtVwAAAAApl7YfjB/RWZNJwjTQ0afP; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=VAmDAjs2RDBdvCtOOoVtA0L+Dl8AAAAA4W22dBAfo6ojlXje3w3EnQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '8-4808818-4808821 NNNN CT(87 87 0) RT(1594818114263 34) q(0 0 2 -1) r(5 5) U5'
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
    "createdAt": "2020-07-15T13:01:44.968Z",
    "updatedAt": "2020-07-15T13:01:54.911Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 5,
    "publishedAt": "2020-07-15T13:01:54.911Z",
    "firstPublishedAt": "2020-07-15T13:01:45.789Z",
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
  'Wed, 15 Jul 2020 13:01:55 GMT',
  'etag',
  'W/"4074023039579984184"',
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
  '438a43d35471237922ff56d2d72cf186',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=WFHWqVkeRGaqm6HT/YV3QEP+Dl8AAAAAQUIPAAAAAABCrHM7aZ0aPx7Y3pvYjA3J; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=D40UcQCjGyejqYWxKsJtVwAAAADQnV/BOSlWvxipw7p6apvQ; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=+WZiPvm+UzE5vStOOoVtA0P+Dl8AAAAAAmW0RYd60TFhTUIOAuq55g==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '13-37640855-37640859 NNNN CT(94 105 0) RT(1594818114775 58) q(0 0 2 -1) r(4 4) U5'
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
        "createdAt": "2020-07-15T13:01:44.968Z",
        "updatedAt": "2020-07-15T13:01:54.911Z",
        "environment": {
          "sys": {
            "id": "env-integration",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 5,
        "publishedAt": "2020-07-15T13:01:54.911Z",
        "firstPublishedAt": "2020-07-15T13:01:45.789Z",
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
  'Wed, 15 Jul 2020 13:01:56 GMT',
  'etag',
  'W/"12907712256567366790"',
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
  '7f1af4f2069ae113ca53f1533e8ac9dd',
  'Content-Length',
  '435',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=WxuvKlLoQZ+kkXYndo2g00P+Dl8AAAAAQUIPAAAAAAAgnGUSTk/SEPDmiEegKHS5; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=YQoNFNvPwl6QtUNIKsJtVwAAAABhkk+7AE+EUCupL6dqAkyZ; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=nV1BYZ3YtVvovStOOoVtA0P+Dl8AAAAAxgxkTPVaBInYtnfFQ/LNxg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '14-49416227-49416242 NNNN CT(86 86 0) RT(1594818115381 34) q(0 0 1 -1) r(3 3) U5'
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
        "createdAt":"2020-07-15T13:01:40Z",
        "updatedAt":"2020-07-15T13:01:40Z"
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
  'Wed, 15 Jul 2020 13:01:57 GMT',
  'etag',
  'W/"6e10216e1ac922f60100fcd077f6c626"',
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
  '91271e364af1c8ea241c978679458485',
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
  'visid_incap_673446=oepQVzGVTOeBUow4tq9fKET+Dl8AAAAAQUIPAAAAAADEbb/bP0oTXEHKDLgdXS8h; expires=Wed, 14 Jul 2021 14:42:27 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=Iu2Tc2cBB08SLzrMKsJtVwAAAADqfhgai4u+qHHu3S9Kg/4E; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=JZ51VYoh9mRuvytOOoVtA0T+Dl8AAAAAm9YTCSBgHNEZX0cohPNBww==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '5-24171521-24171526 NNYN CT(88 88 0) RT(1594818115896 29) q(0 0 2 -1) r(8 8) U5'
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
    "createdAt": "2020-07-15T13:01:44.968Z",
    "updatedAt": "2020-07-15T13:01:58.572Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 5,
    "publishedAt": "2020-07-15T13:01:54.911Z",
    "firstPublishedAt": "2020-07-15T13:01:45.789Z",
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
  'Wed, 15 Jul 2020 13:01:58 GMT',
  'etag',
  'W/"8862070852629205290"',
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
  'fe3c49679c6baf1aa7b4b7320d8b2976',
  'Content-Length',
  '497',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=WhV41+SUTXS6hxLMSFU9QUb+Dl8AAAAAQUIPAAAAAAB10V4ibHe7Hf5GoK4D66u3; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=MgWgJpR9VSh/RkQUKsJtVwAAAAAP1UX3i+5iBT8XY84L5ZjM; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=M9UwBGomPXClwStOOoVtA0b+Dl8AAAAAW3zcmNiB6t/XExS+rE5kXQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '13-37641493-37641502 NNNN CT(94 103 0) RT(1594818117845 29) q(0 0 2 -1) r(5 5) U5'
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
    "createdAt": "2020-07-15T13:01:44.968Z",
    "updatedAt": "2020-07-15T13:01:59.143Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 7,
    "publishedAt": "2020-07-15T13:01:59.143Z",
    "firstPublishedAt": "2020-07-15T13:01:45.789Z",
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
  'Wed, 15 Jul 2020 13:01:59 GMT',
  'etag',
  'W/"17095158373423822278"',
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
  '047a0a5c18d84419633d23a340b5af61',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=d0YXoZq0R66udl1FZ5x2rkb+Dl8AAAAAQUIPAAAAAACotnmyWxabgfr7qNFPHJKC; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=R9SeBDqiKXKSEkueKsJtVwAAAAAq0xPfC12dP/20a8CtQH3n; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=RufoQtXfFi1+witOOoVtA0b+Dl8AAAAA7PHZpb7EknqN/11LTwkIFQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '6-7769731-7769733 NNNN CT(93 93 0) RT(1594818118477 32) q(0 0 1 -1) r(4 4) U5'
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
    "createdAt": "2020-07-15T13:01:44.968Z",
    "updatedAt": "2020-07-15T13:01:59.143Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 7,
    "publishedAt": "2020-07-15T13:01:59.143Z",
    "firstPublishedAt": "2020-07-15T13:01:45.789Z",
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
  'Wed, 15 Jul 2020 13:01:59 GMT',
  'etag',
  'W/"17095158373423822278"',
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
  '45775ede6145108426cc761615182d38',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=9AVEWdIoTiuPE2zhmiLrNEf+Dl8AAAAAQUIPAAAAAABGmrIUoBxkcHuHOYwI0dBR; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=X0cxf05NMjUE97ugKsJtVwAAAADQL4HgOUNATPCF1kfgfrXg; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=6LCMD263MVwCwytOOoVtA0f+Dl8AAAAALECfm9bS49/hFQydYCqF4Q==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '11-25362995-25363001 NNNN CT(87 86 0) RT(1594818119005 30) q(0 0 2 -1) r(3 3) U5'
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
        "createdAt": "2020-07-15T13:01:44.968Z",
        "updatedAt": "2020-07-15T13:01:59.143Z",
        "environment": {
          "sys": {
            "id": "env-integration",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 7,
        "publishedAt": "2020-07-15T13:01:59.143Z",
        "firstPublishedAt": "2020-07-15T13:01:45.789Z",
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
  'Wed, 15 Jul 2020 13:02:00 GMT',
  'etag',
  'W/"5462802195168047052"',
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
  '305bcc2a7b699e57e0543388f6bddc14',
  'Content-Length',
  '557',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=sexkvNhNTNeNrVqw22RGMkf+Dl8AAAAAQUIPAAAAAADol8o+LYXBQxrNdXPJWEY7; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=UWhjQr97jwGNA9dDKsJtVwAAAABJyUC2QkEGc/d/bHd7GFra; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=NeZQe7BYIj6GwytOOoVtA0f+Dl8AAAAAp6opm+O6ER3b8gcm1Pm1og==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '13-37641906-37641911 NNNN CT(98 88 0) RT(1594818119484 32) q(0 0 2 -1) r(3 3) U5'
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
    "createdAt": "2020-07-15T13:01:45.975Z",
    "createdBy": {
      "sys": {
        "id": "1Y7O5FbAkPYgNvD0MpQoAE",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2020-07-15T13:01:59.219Z",
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
  'Wed, 15 Jul 2020 13:02:00 GMT',
  'etag',
  '"10328964868745585516"',
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
  '53ba7b78acc070f212b624e2605d30b9',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=txBcVZhmQfW+1vxvI5GuL0j+Dl8AAAAAQUIPAAAAAAAG7z7IZ9DGyqkQikVfJB8Y; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=8elke7aCKTIcKrm6KsJtVwAAAACu1Yfv/6rVEIJHDrSLtTli; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=Bpc5MZgvRz51xCtOOoVtA0j+Dl8AAAAATkHxSbQDEdJu/NKg3yZQBA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '4-16158566-16158571 NNYN CT(94 96 0) RT(1594818120087 31) q(0 0 2 -1) r(3 3) U5'
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
        "createdAt":"2020-07-15T13:01:40Z",
        "updatedAt":"2020-07-15T13:01:40Z"
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
  'Wed, 15 Jul 2020 13:02:01 GMT',
  'etag',
  'W/"6e10216e1ac922f60100fcd077f6c626"',
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
  '58571a4e5b5fef787dae0b55d744a19d',
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
  'visid_incap_673446=SA43ni2LS6SRg+pk+2Rb+En+Dl8AAAAAQUIPAAAAAADLnzdXYkZYtz7ODpntdFaH; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=4rjeG+5W0AR7QxikKsJtVwAAAADjDtba3fqBaGzoXmqXShCN; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=YOZjTMztJA0JxStOOoVtA0n+Dl8AAAAAMpXyuQHkn7pVu5dycTXj2A==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '10-15250753-15250763 NNYN CT(88 91 0) RT(1594818120705 37) q(0 0 2 -1) r(3 3) U5'
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
    "createdAt": "2020-07-15T13:01:44.968Z",
    "updatedAt": "2020-07-15T13:02:01.811Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 7,
    "publishedAt": "2020-07-15T13:01:59.143Z",
    "firstPublishedAt": "2020-07-15T13:01:45.789Z",
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
  'Wed, 15 Jul 2020 13:02:01 GMT',
  'etag',
  'W/"4622327958590640074"',
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
  'aa12ddefdfba742d87700840d41f8b8b',
  'Content-Length',
  '502',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=OlSi5rrBS92gwAmNbh5o3Un+Dl8AAAAAQUIPAAAAAABm/g80+6XjryQDXEvFPo0c; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=FW8QPvxxSziOPhNMKsJtVwAAAAAvD7gPgFPWvxaKnibfnecD; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=dr1Xf9+gly6bxStOOoVtA0n+Dl8AAAAAHVL0SIPqQQzEDZ9PsnwqZQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '9-9982995-9983003 NNNN CT(86 86 0) RT(1594818121115 29) q(0 0 2 -1) r(4 4) U5'
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
    "createdAt": "2020-07-15T13:01:44.968Z",
    "updatedAt": "2020-07-15T13:02:02.423Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 9,
    "publishedAt": "2020-07-15T13:02:02.423Z",
    "firstPublishedAt": "2020-07-15T13:01:45.789Z",
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
  'Wed, 15 Jul 2020 13:02:02 GMT',
  'etag',
  'W/"14016522848545623486"',
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
  '1b5a912fb5ed2d1d9e8af6b2b2f47557',
  'Content-Length',
  '502',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=f8SFoCq8R6q0CX6V0nz1pEr+Dl8AAAAAQUIPAAAAAADympfe8P3eVTzOhHvpxAjN; expires=Wed, 14 Jul 2021 14:42:28 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=/4WAXF7wQAojZqWjKsJtVwAAAAATWm++XnUVdOuxSZrcYVxD; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=hdJbKLekXh1bxitOOoVtA0r+Dl8AAAAAklJh47rl1lbIuzjCrJR5nw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '0-1892524-1892525 NNNN CT(89 88 0) RT(1594818121765 34) q(0 1 2 -1) r(5 5) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/dog/editor_interface', {"controls":[{"fieldId":"aDifferentId"}]})
  .reply(200, {"controls":[{"fieldId":"aDifferentId"}],"sys":{"id":"default","type":"EditorInterface","space":{"sys":{"id":"bohepdihyxin","type":"Link","linkType":"Space"}},"version":6,"createdAt":"2020-07-15T13:01:45.975Z","createdBy":{"sys":{"id":"1Y7O5FbAkPYgNvD0MpQoAE","type":"Link","linkType":"User"}},"updatedAt":"2020-07-15T13:02:03.029Z","updatedBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"contentType":{"sys":{"id":"dog","type":"Link","linkType":"ContentType"}},"environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}}}}, [
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
  'Wed, 15 Jul 2020 13:02:03 GMT',
  'etag',
  '"7115631463570675073"',
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
  '1f4c13927b28a314f49ace0b775cb832',
  'Content-Length',
  '922',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=iFPtTtqWR6WtWtv0A5FlkEr+Dl8AAAAAQUIPAAAAAABvFBfcUQa3+gv3g5d14JxQ; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=14AoZjtOiWmVdnNPKsJtVwAAAAAo7tsoixwOG1f1oMxoELzH; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=IhqjZEFWKTICxytOOoVtA0r+Dl8AAAAAEudBHWJ8NWy7uhT39kLitQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '14-49418180-49418193 NNNN CT(99 97 0) RT(1594818122337 30) q(0 0 2 -1) r(4 4) U5'
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
    "createdAt": "2020-07-15T13:01:44.968Z",
    "updatedAt": "2020-07-15T13:02:03.651Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 9,
    "publishedAt": "2020-07-15T13:02:02.423Z",
    "firstPublishedAt": "2020-07-15T13:01:45.789Z",
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
  'Wed, 15 Jul 2020 13:02:03 GMT',
  'etag',
  'W/"4282600203012412214"',
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
  'c33389763781caa7c5ebf7dca968ec2f',
  'Content-Length',
  '499',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=U7e3Rfk9ThSWjFwNKR5F8Ev+Dl8AAAAAQUIPAAAAAABnlGTk7MsGjYY8aLSiryIm; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=nRllc6J483E/P7btKsJtVwAAAAAxmAVnQTR8P/Jsvp+AhGsj; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=oBTsTIu/0TPrxytOOoVtA0v+Dl8AAAAA3C/xBl4YisvdM74EM859ng==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '14-49418339-49418352 NNNN CT(89 92 0) RT(1594818122961 32) q(0 0 2 -1) r(4 4) U5'
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
    "createdAt": "2020-07-15T13:01:44.968Z",
    "updatedAt": "2020-07-15T13:02:04.213Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 11,
    "publishedAt": "2020-07-15T13:02:04.213Z",
    "firstPublishedAt": "2020-07-15T13:01:45.789Z",
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
  'Wed, 15 Jul 2020 13:02:04 GMT',
  'etag',
  'W/"13392554756622697985"',
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
  'd6cb961d6df3f45c0410f335ad2220a8',
  'Content-Length',
  '494',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=QZYb1hIVQCW8MeaXO74/GUz+Dl8AAAAAQUIPAAAAAACW82cQjCJjT3mo/KRel23A; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=srXbcUj+DTYgkSkBKsJtVwAAAACneQKGgF0v6RRwbOIZlxlC; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=nCPVNuOfM3HLyCtOOoVtA0z+Dl8AAAAAJSVK7MlUCjwAal+F3TZ06g==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '12-31844331-31844343 NNNN CT(91 87 0) RT(1594818123561 34) q(0 0 2 -1) r(5 5) U5'
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
    "createdAt": "2020-07-15T13:01:44.968Z",
    "updatedAt": "2020-07-15T13:02:04.213Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 11,
    "publishedAt": "2020-07-15T13:02:04.213Z",
    "firstPublishedAt": "2020-07-15T13:01:45.789Z",
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
  'Wed, 15 Jul 2020 13:02:04 GMT',
  'etag',
  'W/"13392554756622697985"',
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
  '538db64cdcc6756f977f0fe8df79d6f5',
  'Content-Length',
  '494',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=WrpZ4VW6TLOJGLIYKnfT30z+Dl8AAAAAQUIPAAAAAADsbn4nnRcajB8w3rVjH/Oo; expires=Wed, 14 Jul 2021 14:42:27 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=aJ1YLcmDcwdW+AjmKsJtVwAAAAAn44EFzHuviKlDk8I8JfxJ; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=L/ueGgvoIE5MyStOOoVtA0z+Dl8AAAAA4hL1EZsuMyWMbT4GYmY8eA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '5-24172410-24172417 NNNN CT(93 94 0) RT(1594818124079 29) q(0 0 1 -1) r(3 3) U5'
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
        "createdAt": "2020-07-15T13:01:44.968Z",
        "updatedAt": "2020-07-15T13:02:04.213Z",
        "environment": {
          "sys": {
            "id": "env-integration",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 11,
        "publishedAt": "2020-07-15T13:02:04.213Z",
        "firstPublishedAt": "2020-07-15T13:01:45.789Z",
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
  'Wed, 15 Jul 2020 13:02:05 GMT',
  'etag',
  'W/"7022488585122683169"',
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
  '6ac77745c3fe5717df75b34cbe23b7e2',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=MEd4D/VmQWyoKKcn8+ozTkz+Dl8AAAAAQUIPAAAAAADmKuE94yRHaEcz5SJV6hCp; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=spc1QQNj6FxIwFPAKsJtVwAAAADpm1JrzBcmvjtkWSWqQvUW; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=GdWSQ5gOnVnvyStOOoVtA0z+Dl8AAAAAl2awyRQmf+2i9r8tebpqkA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '8-4809672-4809674 NNNN CT(87 88 0) RT(1594818124537 35) q(0 0 2 -1) r(4 4) U5'
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
  'Wed, 15 Jul 2020 13:02:05 GMT',
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
  'b975e237b1b407420d7ea68ea4d66943',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=IvdeeVu4QQmAXinCV1+4iU3+Dl8AAAAAQUIPAAAAAACI7XV70wsy5+MCjlGCppz2; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=iO9fFYIpjG8ZnlP/KsJtVwAAAAD6VcCYdPGT4aVBXSqPkSt5; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=Vgr6TlKGNiuxyitOOoVtA03+Dl8AAAAA5dzPrRo4bnY74ZQgyZc+XQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '13-37643089-37643093 NNYN CT(96 93 0) RT(1594818125003 31) q(0 0 2 -1) r(4 4) U5'
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
        "createdAt":"2020-07-15T13:01:40Z",
        "updatedAt":"2020-07-15T13:01:40Z"
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
  'Wed, 15 Jul 2020 13:02:06 GMT',
  'etag',
  'W/"6e10216e1ac922f60100fcd077f6c626"',
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
  '079c6a773123d3eb123f02ddcdc05998',
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
  'visid_incap_673446=PjxxierASg+8e1FWLxZ0EU7+Dl8AAAAAQUIPAAAAAACOQE5ssjvn5qU/0SJq5GX9; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=7iumLN7p+g305nbRKsJtVwAAAACTyVXi5Pyo7ha5mly00bGz; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=aTa4RolhwSvfyytOOoVtA07+Dl8AAAAAdV/R1Z/6IDF0kvUME9RaqA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '9-9983629-9983632 NNYN CT(86 92 0) RT(1594818125527 31) q(0 0 2 -1) r(9 9) U5'
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
    "createdAt": "2020-07-15T13:01:44.968Z",
    "updatedAt": "2020-07-15T13:02:07.418Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "firstPublishedAt": "2020-07-15T13:01:45.789Z",
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
  'Wed, 15 Jul 2020 13:02:07 GMT',
  'etag',
  'W/"10785647676859928817"',
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
  '97a10d710d83138c5fb6fbf61b5754c6',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=X/JzzGRqQNS2k1/bDVBYO0/+Dl8AAAAAQUIPAAAAAACAuCWspMCwo26oPQegCYOd; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=Ik02UbvKvEXHJsnmKsJtVwAAAACME2YDjZOYqgqF0YAXNaa7; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=w3UdMFsZ5CeSzCtOOoVtA0/+Dl8AAAAAND7Q9qtCoz1cY+g5K2Bgzw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '4-16159053-16159058 NNNN CT(89 179 0) RT(1594818126657 28) q(0 0 3 -1) r(5 5) U5'
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
  'Wed, 15 Jul 2020 13:02:08 GMT',
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
  '683bfebcf190541dc1a0046535a4a907',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=bbPUKmN4R9i76QSkaytR8k/+Dl8AAAAAQUIPAAAAAAD7G0j7o8pQDUxcpGq3jduU; expires=Wed, 14 Jul 2021 14:42:27 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=AEroXaT30x5/hNS9KsJtVwAAAAAfWSYwwJTBMtOQq/N5bBph; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=9GwVC1zYngYRzStOOoVtA0/+Dl8AAAAAF5eeDdMUNzBDzFwZjAjoLg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '5-24172705-24172714 NNNN CT(86 87 0) RT(1594818127267 36) q(0 0 1 -1) r(4 4) U5'
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
  "requestId": "cf1aa9460eba598616ec6fa00068b92a"
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
  'Wed, 15 Jul 2020 13:02:08 GMT',
  'etag',
  '"15835011196402125881"',
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
  'cf1aa9460eba598616ec6fa00068b92a',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=ElCl1IHuSTSvKIibNiJqt1D+Dl8AAAAAQUIPAAAAAABI3PqJA1o+Eltksbzr2RJu; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=TIR8J1dSmhCYUVYkKsJtVwAAAAD5/fDJenrabyiPhU81FlyL; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=YzOzXDGhLl2nzStOOoVtA1D+Dl8AAAAAlK0GqGsxL0TpneQr13JR2w==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '14-49419757-49419762 NNYN CT(86 88 0) RT(1594818127877 26) q(0 0 1 -1) r(3 3) U5'
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
  'Wed, 15 Jul 2020 13:02:09 GMT',
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
  '283d761df5b02a924ea4d345da4359b2',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=ZNlkkvaHQiSIT/v3Hj8UR1D+Dl8AAAAAQUIPAAAAAADpRrM7CqhST7DMgJgkN/Ex; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=8uESMPuRsA2buvfWKsJtVwAAAAAb6JHGMzW2GpFoLwWeuvoP; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=En8fXpVBYkRNzitOOoVtA1D+Dl8AAAAA4KYz2CMr6sfpy0+tGTZ7nA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '3-11288502-11288504 NNYN CT(92 95 0) RT(1594818128377 37) q(0 0 2 -1) r(3 3) U5'
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
        "createdAt":"2020-07-15T13:01:40Z",
        "updatedAt":"2020-07-15T13:01:40Z"
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
  'Wed, 15 Jul 2020 13:02:10 GMT',
  'etag',
  'W/"6e10216e1ac922f60100fcd077f6c626"',
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
  '104bd7a7d373b53ac9586013305e6262',
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
  'visid_incap_673446=Yjqq4H85RXquJwR6rOSZT1H+Dl8AAAAAQUIPAAAAAABjdxUou7veDKrMYD0ndkM3; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=g9UCCoJOHDBtvgCtKsJtVwAAAAAqzeKXzIKbM7eVkZwuqPTU; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=pmPJcp/4ATZdzytOOoVtA1H+Dl8AAAAAgvUn9jT2kTXbJ86qEBxPJg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '14-49420007-49420023 NNYN CT(88 89 0) RT(1594818128857 31) q(0 0 2 -1) r(9 9) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/dieatary-food', {"name":"Dieatary Food","fields":[{"id":"name","type":"Symbol","name":"name of the food","validations":[{"unique":true},{"prohibitRegexp":{"pattern":"foo","flags":null},"message":"asdf"}]},{"id":"calories","type":"Link","linkType":"Asset","name":"amount of calories the food contains","validations":[{"assetImageDimensions":{"width":{"min":1199,"max":null},"height":{"min":1343}}}]}],"description":"Food with up to 500 calories"})
  .reply(201, {"sys":{"space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"id":"dieatary-food","type":"ContentType","createdAt":"2020-07-15T13:02:10.615Z","updatedAt":"2020-07-15T13:02:10.615Z","environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}},"createdBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"updatedBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"publishedCounter":0,"version":1},"displayField":null,"name":"Dieatary Food","description":"Food with up to 500 calories","fields":[{"id":"name","name":"name of the food","type":"Symbol","localized":false,"required":false,"validations":[{"unique":true},{"prohibitRegexp":{"pattern":"foo","flags":null},"message":"asdf"}],"disabled":false,"omitted":false},{"id":"calories","name":"amount of calories the food contains","type":"Link","localized":false,"required":false,"validations":[{"assetImageDimensions":{"width":{"min":1199,"max":null},"height":{"min":1343}}}],"disabled":false,"omitted":false,"linkType":"Asset"}]}, [
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
  'Wed, 15 Jul 2020 13:02:10 GMT',
  'etag',
  '"1510648745088776205"',
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
  'c354411a0cb2586d3445ffa81cc7b0c5',
  'Content-Length',
  '1783',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=qXuBWCJiRtypsIwj0YRqrVL+Dl8AAAAAQUIPAAAAAADqzSwIzNAKeN+e3X/2gbcs; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=nzDPQK35VmLHnEupKsJtVwAAAACYti7R/56hlTRarqSeHppL; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=8AZlKgGXcFIZ0CtOOoVtA1L+Dl8AAAAA7+976kyvXP1qZgAQAlXkgw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '9-9984167-9984173 NNNN CT(86 86 0) RT(1594818129819 29) q(0 0 2 -1) r(6 6) U5'
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
    "createdAt": "2020-07-15T13:02:10.615Z",
    "updatedAt": "2020-07-15T13:02:11.191Z",
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
    "firstPublishedAt": "2020-07-15T13:02:11.191Z",
    "publishedAt": "2020-07-15T13:02:11.191Z",
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
  'Wed, 15 Jul 2020 13:02:11 GMT',
  'etag',
  'W/"12601256972110782014"',
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
  'f017adc121a850118c72c25948169c7b',
  'Content-Length',
  '653',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=XER45J8hRXm6jctkXp0GA1L+Dl8AAAAAQUIPAAAAAABa7XXw20PtdcMPuLEck3Bh; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=RXn7NgsPYQ+WFuUUKsJtVwAAAACD7MPFQY1q6LJrGp1MH9S8; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=6RDIGMt5NQG00CtOOoVtA1L+Dl8AAAAADPzDovvGkTgDcPmwP7CrQw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '13-37644275-37644286 NNNN CT(88 92 0) RT(1594818130541 22) q(0 0 2 -1) r(4 4) U5'
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
    "createdAt": "2020-07-15T13:02:10.615Z",
    "updatedAt": "2020-07-15T13:02:11.191Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 1,
    "publishedAt": "2020-07-15T13:02:11.191Z",
    "firstPublishedAt": "2020-07-15T13:02:11.191Z",
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
  'Wed, 15 Jul 2020 13:02:11 GMT',
  'etag',
  'W/"412978154381311212"',
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
  '4e75d0068ac885751354a04455e70b3e',
  'Content-Length',
  '653',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=JvK2S3C2S02suydVIraKPVP+Dl8AAAAAQUIPAAAAAACev+/j4sNw8P88EY06RFKl; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=lBKPdCLce1PV9RJ/KsJtVwAAAAB6b8/QS/XABJiliBDLset3; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=nw/xaUI8ZG590StOOoVtA1P+Dl8AAAAAZT75bt571qIdZdBCpCxwIA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '14-49420719-49420741 NNNN CT(105 94 0) RT(1594818131131 89) q(0 0 2 -1) r(3 3) U5'
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
  'Wed, 15 Jul 2020 13:02:12 GMT',
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
  'dfe7cdecd72217833cd35e65fd46c90f',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=y5Vdcj77Q2GfUrpOuF8cYlT+Dl8AAAAAQUIPAAAAAABS2V3G1oxkTp0fg9eg1M4o; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=eXUdEO64GXk3/QgYKsJtVwAAAADqg2OSsYwq/D1TFeB6xens; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=d88UI6kV5whu0itOOoVtA1T+Dl8AAAAAQFIFWtGbkmn+7Tz/dtTuAA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '12-31846141-31846172 NNYN CT(86 86 0) RT(1594818131959 99) q(0 0 2 -1) r(5 5) U5'
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
        "createdAt":"2020-07-15T13:01:40Z",
        "updatedAt":"2020-07-15T13:01:40Z"
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
  'Wed, 15 Jul 2020 13:02:13 GMT',
  'etag',
  'W/"6e10216e1ac922f60100fcd077f6c626"',
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
  '00998ea69d61562589565f5ef03e069c',
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
  'visid_incap_673446=YvRTW/rJQ3Ki2EpXkYXP8lX+Dl8AAAAAQUIPAAAAAACOYSLjF33eF593Wk51NI2I; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=pz9JHNxn50YFpTOVKsJtVwAAAABOQ9txcCbmabYsB20ZOZ2U; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=Hcz4D2dWDHYm0ytOOoVtA1X+Dl8AAAAAEPE253DaKStq+r2TxgmuPA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '14-49421174-49421226 NNYN CT(87 90 0) RT(1594818132787 116) q(0 0 1 -1) r(2 2) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/food', {"name":"foooood","displayField":"taste","fields":[{"id":"taste","type":"Symbol","name":"what it tastes like"}],"description":" well, food"})
  .reply(201, {"sys":{"space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"id":"food","type":"ContentType","createdAt":"2020-07-15T13:02:14.028Z","updatedAt":"2020-07-15T13:02:14.028Z","environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}},"createdBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"updatedBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"publishedCounter":0,"version":1},"displayField":"taste","name":"foooood","description":" well, food","fields":[{"id":"taste","name":"what it tastes like","type":"Symbol","localized":false,"required":false,"validations":[],"disabled":false,"omitted":false}]}, [
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
  'Wed, 15 Jul 2020 13:02:14 GMT',
  'etag',
  '"7059500860902645450"',
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
  'b64474866c5cc72daa2b70ecf5922b07',
  'Content-Length',
  '1064',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=jWSkr0DiTG6ABroV0OovYFX+Dl8AAAAAQUIPAAAAAAAOilBakQBYj2ixjIjN93yV; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=UtKxLbydy3bzkjN7KsJtVwAAAABtoWwRINgid5I92xwyfQBw; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=/QqyHbfbeU7J0ytOOoVtA1X+Dl8AAAAAUH+kxL0nzYQCQsQUnpId9Q==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '13-37644894-37644903 NNNN CT(96 94 0) RT(1594818133301 43) q(0 0 2 -1) r(5 5) U5'
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
    "createdAt": "2020-07-15T13:02:14.028Z",
    "updatedAt": "2020-07-15T13:02:14.591Z",
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
    "firstPublishedAt": "2020-07-15T13:02:14.591Z",
    "publishedAt": "2020-07-15T13:02:14.591Z",
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
  'Wed, 15 Jul 2020 13:02:14 GMT',
  'etag',
  'W/"18227137841190198934"',
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
  '930b1e03e415cb5f9f59361aa57e8841',
  'Content-Length',
  '445',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=dp717JtaSd+cYPE0OrWAuFb+Dl8AAAAAQUIPAAAAAAD5Zm6jrUW/qxunatIhvyps; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=xPSsORNFPBosFMTFKsJtVwAAAAB3GXaYSxEmOAPV57w/Sy/Q; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=UCcYdHrKRyxv1StOOoVtA1b+Dl8AAAAAX2hoTVGmkd/RlywuFmARrA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '14-49421547-49421565 NNNN CT(96 95 0) RT(1594818133885 69) q(0 0 2 -1) r(6 6) U5'
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
        "createdAt": "2020-07-15T13:02:14.028Z",
        "updatedAt": "2020-07-15T13:02:14.591Z",
        "environment": {
          "sys": {
            "id": "env-integration",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 1,
        "publishedAt": "2020-07-15T13:02:14.591Z",
        "firstPublishedAt": "2020-07-15T13:02:14.591Z",
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
  'Wed, 15 Jul 2020 13:02:15 GMT',
  'etag',
  'W/"7289368717355929291"',
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
  '55b2baebfd47b8ce3456965d91ba641a',
  'Content-Length',
  '512',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=suYxnXpTTta/HopHugv2TVf+Dl8AAAAAQUIPAAAAAACOq5iX+QECRA1eTLdquybq; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=V9J8YEdwIQ1sp6KEKsJtVwAAAACTYH7VUK5zGo/7Bnzx9VOa; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=0VewMRLSLS721StOOoVtA1f+Dl8AAAAADoc4OLQ91UHmpa+lXeMVeg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '7-13170445-13170452 NNNN CT(86 87 0) RT(1594818134637 29) q(0 0 2 -1) r(4 4) U5'
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
        "createdAt":"2020-07-15T13:01:40Z",
        "updatedAt":"2020-07-15T13:01:40Z"
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
  'Wed, 15 Jul 2020 13:02:15 GMT',
  'etag',
  'W/"6e10216e1ac922f60100fcd077f6c626"',
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
  '6bfebc07b018880ba75b7042c314ee5c',
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
  'visid_incap_673446=fLxFiGsaQiKuOne/LVNmglf+Dl8AAAAAQUIPAAAAAABSPbsEPTD2Xdn/sxOfjFot; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=wn6mKeAw+WScqUepKsJtVwAAAACrwkhnfnSL9w9oAWBm07W7; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=TBceEc16XACM1itOOoVtA1f+Dl8AAAAAmWBfvDMKjcBfMqaN4gPRxg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '13-37645454-37645464 NNYN CT(94 94 0) RT(1594818135075 28) q(0 0 1 -1) r(3 3) U5'
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
    "createdAt": "2020-07-15T13:02:14.028Z",
    "updatedAt": "2020-07-15T13:02:16.333Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 1,
    "publishedAt": "2020-07-15T13:02:14.591Z",
    "firstPublishedAt": "2020-07-15T13:02:14.591Z",
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
  'Wed, 15 Jul 2020 13:02:16 GMT',
  'etag',
  'W/"3124554958373432794"',
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
  'e445f8932160023f36c6bc2b4484ec74',
  'Content-Length',
  '591',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=0WHSu7chSwqt+Z4wJbue/1j+Dl8AAAAAQUIPAAAAAAC7xU9CjHVjeA8lf+3FP6Fb; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=u7fZL6IkNSLxESUXKsJtVwAAAAADghUjAr3wwcxOlb94BUD4; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=snwHKiFcH11Z1ytOOoVtA1j+Dl8AAAAAd49YMJXRru5hMWP81nz3Dg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '10-15252876-15252879 NNNN CT(87 87 0) RT(1594818135657 28) q(0 0 2 -1) r(4 4) U5'
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
    "createdAt": "2020-07-15T13:02:14.028Z",
    "updatedAt": "2020-07-15T13:02:17.049Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 3,
    "publishedAt": "2020-07-15T13:02:17.049Z",
    "firstPublishedAt": "2020-07-15T13:02:14.591Z",
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
  'Wed, 15 Jul 2020 13:02:17 GMT',
  'etag',
  'W/"1667057125296310311"',
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
  'e74f7d2978837744d382864910d6ef11',
  'Content-Length',
  '597',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=dc+2fjTeR92cFqzimdLzYlj+Dl8AAAAAQUIPAAAAAABdm74nYU5IFC9SxPVuLuoN; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=WyHDOy92Lzj+uBuPKsJtVwAAAADY96PN8yb23Pc2WGIi6nvh; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=GkJWD7H07kpv2CtOOoVtA1j+Dl8AAAAAma2S/b6Qn4q5KTaCqBymwQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '14-49422299-49422312 NNNN CT(88 89 0) RT(1594818136263 33) q(0 0 2 -1) r(7 7) U5'
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
    "createdAt": "2020-07-15T13:02:14.028Z",
    "updatedAt": "2020-07-15T13:02:17.049Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 3,
    "publishedAt": "2020-07-15T13:02:17.049Z",
    "firstPublishedAt": "2020-07-15T13:02:14.591Z",
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
  'Wed, 15 Jul 2020 13:02:17 GMT',
  'etag',
  'W/"1667057125296310311"',
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
  'a485cfcd2a0ee87b0b1ccb650556ed6b',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=jIw8QDsuSpeWWNWGOhmXH1n+Dl8AAAAAQUIPAAAAAABhP4gHU0I1nnNbIvyl22XK; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=tomKJ59wNSBOpVPhKsJtVwAAAAC75LENpDkN/2TVk04xGylv; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=+aJ4KzAjmnik2StOOoVtA1n+Dl8AAAAAK7IbCCmAWZCrYFN3tec//A==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '10-15253078-15253081 NNNN CT(87 87 0) RT(1594818137028 32) q(0 0 2 -1) r(3 3) U5'
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
  'Wed, 15 Jul 2020 13:02:18 GMT',
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
  '6029a4d7a85978bb7a8eebd9eae888d3',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=soZJBPnbT1+hmZujzi2YOFn+Dl8AAAAAQUIPAAAAAABOV7vvajcSPSxpZ8bQAqWF; expires=Wed, 14 Jul 2021 14:42:27 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=QgONU8rHkTQFgNG5KsJtVwAAAAAXUgYtOHtiHbo3d59kWyai; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=jBUsd9/HKQMs2itOOoVtA1n+Dl8AAAAAXOWU4Z+c+B+v8soV4Nu8Yg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '2-5488385-5488386 NNYN CT(93 94 0) RT(1594818137467 31) q(0 0 2 -1) r(4 4) U5'
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
  'Wed, 15 Jul 2020 13:02:18 GMT',
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
  '8a6dc1eb8ad0842be5f6223396d72cf1',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=IH3qAr1OQj+iVMvrKTJIMFr+Dl8AAAAAQUIPAAAAAADQ6B1uWttKWl2r0A0Bh20A; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=n2uQZXX8/BEBf81eKsJtVwAAAABjmgFM4LLNrax8svdB8zUc; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=pkvFUdH+Phuj2itOOoVtA1r+Dl8AAAAArhYKs5WRYXiJ1wWeEPjzNg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '10-15253177-15253181 NNYN CT(89 88 0) RT(1594818137912 26) q(0 0 2 -1) r(4 4) U5'
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
        "createdAt":"2020-07-15T13:01:40Z",
        "updatedAt":"2020-07-15T13:01:40Z"
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
  'Wed, 15 Jul 2020 13:02:19 GMT',
  'etag',
  'W/"6e10216e1ac922f60100fcd077f6c626"',
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
  'de9a922c59132fa3762c5448cf0b1fcb',
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
  'visid_incap_673446=/NNGNyUeQgOgqHdHI+t4V1r+Dl8AAAAAQUIPAAAAAABHqVZX5TtVlitFb0vDW5bR; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=D7LdWhjHNWBs/cJLKsJtVwAAAABu1RVc5FTAA83h0tl/NosY; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=MWQDGJ6vJQsv2ytOOoVtA1r+Dl8AAAAAijQ/qHN0Mvaf7EXBGU3aSQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '9-9985326-9985334 NNYN CT(93 94 0) RT(1594818138525 32) q(0 0 2 -1) r(3 3) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/person', {"name":"Person","fields":[{"id":"age","name":"Age","type":"Number","required":true},{"id":"fullName","name":"Full name","type":"Symbol","required":true,"localized":true}],"description":"A content type for a person"})
  .reply(201, {"sys":{"space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"id":"person","type":"ContentType","createdAt":"2020-07-15T13:02:19.785Z","updatedAt":"2020-07-15T13:02:19.785Z","environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}},"createdBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"updatedBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"publishedCounter":0,"version":1},"displayField":null,"name":"Person","description":"A content type for a person","fields":[{"id":"age","name":"Age","type":"Number","localized":false,"required":true,"validations":[],"disabled":false,"omitted":false},{"id":"fullName","name":"Full name","type":"Symbol","localized":true,"required":true,"validations":[],"disabled":false,"omitted":false}]}, [
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
  'Wed, 15 Jul 2020 13:02:19 GMT',
  'etag',
  '"12135527368835509795"',
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
  'a228d85399ee9cf5bfee439ca1ce617c',
  'Content-Length',
  '1269',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=Z8++e75oSqmxbFoqvFD871v+Dl8AAAAAQUIPAAAAAADwDX3CahmFdVOSDVM22ZF2; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=24L6bKZjXEb0+JXAKsJtVwAAAAATZgJyGsvc41MygeP0RPo/; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=24SzZjs0zQ4O3CtOOoVtA1v+Dl8AAAAAmoj3LfWoicBAGoJRzZJNTw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '14-49422980-49422986 NNNN CT(87 86 0) RT(1594818138949 31) q(0 0 2 -1) r(7 7) U5'
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
    "createdAt": "2020-07-15T13:02:19.785Z",
    "updatedAt": "2020-07-15T13:02:20.378Z",
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
    "firstPublishedAt": "2020-07-15T13:02:20.378Z",
    "publishedAt": "2020-07-15T13:02:20.378Z",
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
  'Wed, 15 Jul 2020 13:02:20 GMT',
  'etag',
  'W/"7948984258688487659"',
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
  '691d402765ea41ca47417f540b382a84',
  'Content-Length',
  '481',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=hdYjtIjtSFmcUDNPZ9vdxlz+Dl8AAAAAQUIPAAAAAADV22o1qH3pzy67rF+pkfxd; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=13cudnKaJUeloJY5KsJtVwAAAADqERMgYGbtMDuuuiBOIEve; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=Je71AGghvGy13CtOOoVtA1z+Dl8AAAAActesMVZiDbms0ihQYIYm4Q==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '8-4811040-4811044 NNNN CT(93 93 0) RT(1594818139707 26) q(0 0 2 -1) r(4 4) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/animal', {"name":"Animal","fields":[{"id":"species","name":"The species of the animal","type":"Symbol","required":true},{"id":"isFurry","name":"Is this a furry animal","type":"Boolean","required":false}],"description":"An animal"})
  .reply(201, {"sys":{"space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"id":"animal","type":"ContentType","createdAt":"2020-07-15T13:02:20.956Z","updatedAt":"2020-07-15T13:02:20.956Z","environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}},"createdBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"updatedBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"publishedCounter":0,"version":1},"displayField":null,"name":"Animal","description":"An animal","fields":[{"id":"species","name":"The species of the animal","type":"Symbol","localized":false,"required":true,"validations":[],"disabled":false,"omitted":false},{"id":"isFurry","name":"Is this a furry animal","type":"Boolean","localized":false,"required":false,"validations":[],"disabled":false,"omitted":false}]}, [
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
  'Wed, 15 Jul 2020 13:02:21 GMT',
  'etag',
  '"7726654324493584050"',
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
  '37245f8a435d8dbfc974e7656f6aad9f',
  'Content-Length',
  '1292',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=/0Jit6B6S5GH9H4lAhcJGlz+Dl8AAAAAQUIPAAAAAAAQY0+wEiEfzZdNUXCAbAhR; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=QgIzUZ+05huFtJnZKsJtVwAAAAAe/8vFfUHVia1PvjkLtLPc; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=K/zXPONKhC9B3StOOoVtA1z+Dl8AAAAABNBW7NygF/Gq3wQPEHJ5OQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '9-9985592-9985602 NNNN CT(86 86 0) RT(1594818140269 32) q(0 0 1 -1) r(4 4) U5'
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
    "createdAt": "2020-07-15T13:02:20.956Z",
    "updatedAt": "2020-07-15T13:02:21.492Z",
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
    "firstPublishedAt": "2020-07-15T13:02:21.492Z",
    "publishedAt": "2020-07-15T13:02:21.492Z",
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
  'Wed, 15 Jul 2020 13:02:21 GMT',
  'etag',
  'W/"723265815501465976"',
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
  'bd564a6d995ec4cbeb9f97a4159655b0',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=uK10QtWrTLmCiGGy6vzynl3+Dl8AAAAAQUIPAAAAAADHvkO5+nq46HrS/c0ecOUU; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=AVRxewZCpDDSzbo+KsJtVwAAAABjOEFbLQWvGAl8l7ToAFvQ; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=0vJKQx49jj+83StOOoVtA13+Dl8AAAAAaA+9xbLOesfcj1aODXPg4Q==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '4-16160506-16160508 NNNN CT(92 88 0) RT(1594818140825 31) q(0 0 2 -1) r(4 4) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/tags/longexampletag', {"sys":{"id":"longexampletag","version":0},"name":"long example marketing"})
  .reply(201, {"sys":{"id":"longexampletag","version":1,"space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}},"type":"Tag","createdAt":"2020-07-15T13:02:22.024Z","createdBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"updatedAt":"2020-07-15T13:02:22.024Z","updatedBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}}},"name":"long example marketing"}, [
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
  'Wed, 15 Jul 2020 13:02:22 GMT',
  'etag',
  '"3415582162521720568"',
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
  '53c867dd38f3dbe60f4879cfccdbcc8a',
  'Content-Length',
  '758',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=Sh1cD3aITEeAIhShziW0ZV3+Dl8AAAAAQUIPAAAAAACJhVyzEJJXL9gFhLhx3uOO; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=IaqsEUdiy0P0tjL4KsJtVwAAAABNBqq11hKPeKCybWBwGtFh; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=rAjVcQFBiwdF3itOOoVtA13+Dl8AAAAASKxRQwW7TeB0ueLxNJ6Kvg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '12-31848122-31848127 NNNN CT(94 94 0) RT(1594818141351 27) q(0 0 2 -1) r(4 4) U5'
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
    "createdAt": "2020-07-15T13:02:19.785Z",
    "updatedAt": "2020-07-15T13:02:22.695Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 1,
    "publishedAt": "2020-07-15T13:02:20.378Z",
    "firstPublishedAt": "2020-07-15T13:02:20.378Z",
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
  'Wed, 15 Jul 2020 13:02:22 GMT',
  'etag',
  'W/"4582105973935918236"',
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
  'b78af2bdacc05ed658357892525de99a',
  'Content-Length',
  '520',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=sFFtBWXYTzWJX0uUAznt0l7+Dl8AAAAAQUIPAAAAAABKc4boe4gUdpRnZwUp9KdV; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=edi8HFNW7C09sJwsKsJtVwAAAADHuqwHk+FWfy3J7WYngd4C; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=NPbxaY7pAj4V3ytOOoVtA17+Dl8AAAAAwx5iBrXTeQBe9X0MAYoGjw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '13-37647049-37647058 NNNN CT(87 87 0) RT(1594818142017 29) q(0 0 2 -1) r(4 4) U5'
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
    "createdAt": "2020-07-15T13:02:19.785Z",
    "updatedAt": "2020-07-15T13:02:23.275Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 3,
    "publishedAt": "2020-07-15T13:02:23.275Z",
    "firstPublishedAt": "2020-07-15T13:02:20.378Z",
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
  'Wed, 15 Jul 2020 13:02:23 GMT',
  'etag',
  'W/"17602000136126885945"',
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
  'fab7a503559531c5cdda45e2f1930079',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=kwPjRuurR/CG8v1yavUBC1/+Dl8AAAAAQUIPAAAAAACBqVALYgD+4F8ZYBUNde1Z; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=yybaRFC+n1IyE6z8KsJtVwAAAABWfz763GVhSEsskyPh9EWe; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=ZWraBB1D8W3C3ytOOoVtA1/+Dl8AAAAA4+Yui2GmtxKtjMVz3+JbFg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '12-31848443-31848448 NNNN CT(86 87 0) RT(1594818142627 35) q(0 0 2 -1) r(4 4) U5'
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
    "createdAt": "2020-07-15T13:02:20.956Z",
    "updatedAt": "2020-07-15T13:02:23.852Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 1,
    "publishedAt": "2020-07-15T13:02:21.492Z",
    "firstPublishedAt": "2020-07-15T13:02:21.492Z",
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
  'Wed, 15 Jul 2020 13:02:23 GMT',
  'etag',
  'W/"11916790135775598039"',
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
  '9b976892b0b3adf505fd4eb9f98e7cf9',
  'Content-Length',
  '511',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=qxuy/QKXQtmsHHiGDY5ICF/+Dl8AAAAAQUIPAAAAAABcZ0mpDk/W7doX8xgQfQOd; expires=Wed, 14 Jul 2021 14:42:27 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=Q+X7ARJKXT158icXKsJtVwAAAACe7qm+nt2EnS/IMm/8NCwL; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=k481f5b9fRFr4CtOOoVtA1/+Dl8AAAAA5KqsIvUONlF4SNFtcrv7ng==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '5-24174390-24174401 NNNN CT(93 94 0) RT(1594818143145 39) q(0 0 2 -1) r(4 4) U5'
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
    "createdAt": "2020-07-15T13:02:20.956Z",
    "updatedAt": "2020-07-15T13:02:24.645Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 3,
    "publishedAt": "2020-07-15T13:02:24.645Z",
    "firstPublishedAt": "2020-07-15T13:02:21.492Z",
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
  'Wed, 15 Jul 2020 13:02:24 GMT',
  'etag',
  'W/"7268528354024221690"',
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
  '056d938277dfe453e9538f3448233549',
  'Content-Length',
  '517',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=nlKX06AIQfe5LkVvdT7loWD+Dl8AAAAAQUIPAAAAAACzxR/RjqCo0S5jhfHDcA14; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=b59fa/ghS3NyD3HFKsJtVwAAAAC1SKL6YrKh0EFXZ3B+Y6IH; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=oS6xMEt26C9K4StOOoVtA2D+Dl8AAAAAblea1AQ/R8AiGh8BLWtyiA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '7-13171320-13171322 NNNN CT(87 87 0) RT(1594818143992 32) q(0 0 1 -1) r(4 4) U5'
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
    "createdAt": "2020-07-15T13:02:19.785Z",
    "updatedAt": "2020-07-15T13:02:23.275Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 3,
    "publishedAt": "2020-07-15T13:02:23.275Z",
    "firstPublishedAt": "2020-07-15T13:02:20.378Z",
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
  'Wed, 15 Jul 2020 13:02:25 GMT',
  'etag',
  'W/"17602000136126885945"',
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
  '308a4d70626db24c4c25cba9c1278e7d',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=FoamjM/rQ8GMpDO6d1nUlmH+Dl8AAAAAQUIPAAAAAABhjFXvT+BI210obD2gSgaj; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=ajmqbMNMuSrkOivHKsJtVwAAAAAGCobPT5jj2NTsdJy3l1mj; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=uZR8C1ASPnza4StOOoVtA2H+Dl8AAAAARN+H9ToSGlsn779a3ywBhg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '9-9986158-9986163 NNNN CT(85 88 0) RT(1594818144671 25) q(0 0 2 -1) r(4 4) U5'
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
    "createdAt": "2020-07-15T13:02:20.956Z",
    "updatedAt": "2020-07-15T13:02:24.645Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 3,
    "publishedAt": "2020-07-15T13:02:24.645Z",
    "firstPublishedAt": "2020-07-15T13:02:21.492Z",
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
  'Wed, 15 Jul 2020 13:02:25 GMT',
  'etag',
  'W/"7268528354024221690"',
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
  'e52504831bd2055125936335280296a3',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=DS9QWFLkRruf1+30aUKZkGH+Dl8AAAAAQUIPAAAAAAAZ4hSxcyGJH3yfFPJea/0G; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=OaGUfmp5wDWO8/mPKsJtVwAAAAAwoedvp8j+VdcEmyoPk+eO; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=tJy9dr6lGG9R4itOOoVtA2H+Dl8AAAAA6Q8z55Z9B7cQbPxusiG6xw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '14-49424797-49424801 NNNN CT(96 89 0) RT(1594818145119 37) q(0 0 2 -1) r(4 4) U5'
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
    "createdAt": "2020-07-15T13:02:22.024Z",
    "updatedAt": "2020-07-15T13:02:22.024Z",
    "version": 1
  },
  "name": "long example marketing"
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
  'Wed, 15 Jul 2020 13:02:26 GMT',
  'etag',
  '"1015709951502253148"',
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
  '9ee260bb16b9459e093fb4df081b2707',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=GR4Ob/tQRuC4G19uyCMKvWL+Dl8AAAAAQUIPAAAAAAAq9EjRCcaHkjJv/lHK6frB; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=OCsjSUXNAg0WR1gOKsJtVwAAAABazxUFRI8jSLjd5HUdJyGL; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=23+/aAMlByfZ4itOOoVtA2L+Dl8AAAAAl5IH4sezi5V/CI3iirqcWA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '12-31849081-31849092 NNYN CT(86 87 0) RT(1594818145695 31) q(0 0 1 -1) r(3 3) U5'
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
        "createdAt": "2020-07-15T13:02:19.785Z",
        "updatedAt": "2020-07-15T13:02:23.275Z",
        "environment": {
          "sys": {
            "id": "env-integration",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 3,
        "publishedAt": "2020-07-15T13:02:23.275Z",
        "firstPublishedAt": "2020-07-15T13:02:20.378Z",
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
  'Wed, 15 Jul 2020 13:02:27 GMT',
  'etag',
  'W/"1748795674730001863"',
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
  'e7efd608816d78193a477ec53a4f7f9c',
  'Content-Length',
  '587',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=rHn46PYXTuy89bUsGTQG/mL+Dl8AAAAAQUIPAAAAAABZeDgv2ZY/VkKCvu8ibNBU; expires=Wed, 14 Jul 2021 14:42:27 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=W43KY6YZgWssafT4KsJtVwAAAAB7rsgVXiNetKmNI1h8xLLw; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=ACPhXzj7rFpz4ytOOoVtA2L+Dl8AAAAAyBBeUNMcpHjECKPKRAqAjg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '5-24174655-24174662 NNNN CT(94 96 0) RT(1594818146309 35) q(0 0 2 -1) r(4 4) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/blogpost', {"name":"blog post","fields":[{"name":"title","id":"title","type":"Symbol"},{"name":"category","id":"category","type":"Symbol"}]})
  .reply(201, {"sys":{"space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"id":"blogpost","type":"ContentType","createdAt":"2020-07-15T13:02:27.642Z","updatedAt":"2020-07-15T13:02:27.642Z","environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}},"createdBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"updatedBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"publishedCounter":0,"version":1},"displayField":null,"name":"blog post","description":null,"fields":[{"id":"title","name":"title","type":"Symbol","localized":false,"required":false,"validations":[],"disabled":false,"omitted":false},{"id":"category","name":"category","type":"Symbol","localized":false,"required":false,"validations":[],"disabled":false,"omitted":false}]}, [
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
  'Wed, 15 Jul 2020 13:02:27 GMT',
  'etag',
  '"8871983452790024519"',
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
  'a55ddc4c83a4c995b10b033da233fc78',
  'Content-Length',
  '1255',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=lxKw2THbT7KP2AnRUg0dGGP+Dl8AAAAAQUIPAAAAAAB02ENcJdLCOup90T3Wx5ri; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=61HOcMyO6ydPsY9+KsJtVwAAAABnJXj6mfdHzvtR4bOU5X3+; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=MSeYakHLqEkX5CtOOoVtA2P+Dl8AAAAA5bm2Br5ek9bsNu+D3dJtlA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '8-4811548-4811549 NNNN CT(86 87 0) RT(1594818146929 28) q(0 0 2 -1) r(5 5) U5'
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
    "createdAt": "2020-07-15T13:02:27.642Z",
    "updatedAt": "2020-07-15T13:02:28.204Z",
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
    "firstPublishedAt": "2020-07-15T13:02:28.204Z",
    "publishedAt": "2020-07-15T13:02:28.204Z",
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
  'Wed, 15 Jul 2020 13:02:28 GMT',
  'etag',
  'W/"18094724980261240706"',
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
  'c0920475cc63bd707d5da5f07cb8b21a',
  'Content-Length',
  '445',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=scpqwORrT+S//X4tJ3Q0omT+Dl8AAAAAQUIPAAAAAAAUqB+C/po47vCirds/U9zH; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=/bkBFY/wxEFeao4iKsJtVwAAAABvsZqIfx5e3UU+ZQe9yqcd; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=7gd4QWOzbgS+5CtOOoVtA2T+Dl8AAAAAAK6ZxSD2ItshDOjHlZjbbg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '11-25368706-25368725 NNNN CT(93 94 0) RT(1594818147541 29) q(0 0 2 -1) r(5 5) U5'
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
    "id": "6ZAsrS64KnVmoij5lpKuV7",
    "type": "Entry",
    "createdAt": "2020-07-15T13:02:28.969Z",
    "updatedAt": "2020-07-15T13:02:28.969Z",
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
  'Wed, 15 Jul 2020 13:02:29 GMT',
  'etag',
  '"4064637692568559922"',
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
  '3be1115d7e93eab8264d53e211975eb8',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=I0zB7OuEQC2qxMqBVqtSZWT+Dl8AAAAAQUIPAAAAAAAls3EW8UVR+wx7yFGzy/5m; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=JflhScQTPgCQqGh5KsJtVwAAAABuCJmFZIHHUb6SHiQqHyPU; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=1bQFaRc6uh6a5StOOoVtA2T+Dl8AAAAANNfpQcyQDTNNPt607a8Dvg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '10-15254535-15254539 NNYN CT(93 93 0) RT(1594818148152 28) q(0 0 2 -1) r(6 6) U5'
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
    "id": "Kl6v7ODtfswKoFdnMpVDI",
    "type": "Entry",
    "createdAt": "2020-07-15T13:02:29.668Z",
    "updatedAt": "2020-07-15T13:02:29.668Z",
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
  'Wed, 15 Jul 2020 13:02:29 GMT',
  'etag',
  '"154668046613230628"',
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
  'e606e5551ca5ebc13874a6b536ecd033',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=OeORsMzQTMmOq0tRq/8e5GX+Dl8AAAAAQUIPAAAAAACy1MfhZtC3iozDS58I9mVY; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=kw7qRHpRpSWamxo+KsJtVwAAAACN34D/axK4Iu0bowgTslYO; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=nm/6G44M3DZs5itOOoVtA2X+Dl8AAAAA+75nk08+T7EXgB4MdsL6ow==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '14-49425837-49425847 NNYN CT(93 94 0) RT(1594818148861 29) q(0 0 2 -1) r(6 6) U5'
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
        "createdAt": "2020-07-15T13:02:27.642Z",
        "updatedAt": "2020-07-15T13:02:28.204Z",
        "environment": {
          "sys": {
            "id": "env-integration",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 1,
        "publishedAt": "2020-07-15T13:02:28.204Z",
        "firstPublishedAt": "2020-07-15T13:02:28.204Z",
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
  'Wed, 15 Jul 2020 13:02:30 GMT',
  'etag',
  'W/"17558057478257365994"',
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
  '0e1caa8deb7b05081b464fcc8f623b65',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=qZh0JOazQX2ESHd4E5BcX2X+Dl8AAAAAQUIPAAAAAABgvHdq+lBgAyFsGY9qD+T1; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=IagidbtvjyFBmzQOKsJtVwAAAADWORzdd2hHX2idb6EgH/s2; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=ZrK6PlosyFzv5itOOoVtA2X+Dl8AAAAALkASDQ9dWtMxRgcSPchcSg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '11-25369095-25369099 NNNN CT(87 86 0) RT(1594818149529 30) q(0 0 2 -1) r(3 3) U5'
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
        "id": "6ZAsrS64KnVmoij5lpKuV7",
        "type": "Entry",
        "createdAt": "2020-07-15T13:02:28.969Z",
        "updatedAt": "2020-07-15T13:02:28.969Z",
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
        "id": "Kl6v7ODtfswKoFdnMpVDI",
        "type": "Entry",
        "createdAt": "2020-07-15T13:02:29.668Z",
        "updatedAt": "2020-07-15T13:02:29.668Z",
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
  'Wed, 15 Jul 2020 13:02:30 GMT',
  'etag',
  'W/"17886444803173761713"',
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
  'f15ea49306eadcc298f78db099270c25',
  'Content-Length',
  '478',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=be/9J4/8QQujRCTmURBKRWb+Dl8AAAAAQUIPAAAAAAArL6NOpKS21vMJVKmJ93Dd; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=Q+auVOEwbh2xsBZ7KsJtVwAAAAABG120lZPiKquWgRzWt9Yb; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=mnHKUyS5ykKN5ytOOoVtA2b+Dl8AAAAAVFeseK+67KTkK82n2ngD9w==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '14-49426146-49426158 NNNN CT(93 101 0) RT(1594818149997 60) q(0 0 2 -1) r(4 4) U5'
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
        "createdAt":"2020-07-15T13:01:40Z",
        "updatedAt":"2020-07-15T13:01:40Z"
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
  'Wed, 15 Jul 2020 13:02:31 GMT',
  'etag',
  'W/"6e10216e1ac922f60100fcd077f6c626"',
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
  '3143cc38d30cfb8f927d2c08565bb616',
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
  'visid_incap_673446=lxMxgfaQR7GJte6ZHp9CcGb+Dl8AAAAAQUIPAAAAAAALuBQectAivIT1u9OUTGkW; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=Gyz1HbcapRbr7792KsJtVwAAAABO1VfbGGHaRAiZmB1S/wsu; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=L1RIVemctgY56CtOOoVtA2b+Dl8AAAAA9PcW8OzMFdH4TtOQI4RdBw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '11-25369306-25369310 NNYN CT(93 95 0) RT(1594818150605 30) q(0 0 2 -1) r(3 3) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/entries/6ZAsrS64KnVmoij5lpKuV7', {"sys":{"id":"6ZAsrS64KnVmoij5lpKuV7","version":1,"contentType":{"sys":{"type":"Link","linkType":"ContentType","id":"blogpost"}}},"fields":{"title":{"en-US":"hello!"},"category":{"en-US":"hello!"}}})
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
    "id": "6ZAsrS64KnVmoij5lpKuV7",
    "type": "Entry",
    "createdAt": "2020-07-15T13:02:28.969Z",
    "updatedAt": "2020-07-15T13:02:31.716Z",
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
  'Wed, 15 Jul 2020 13:02:31 GMT',
  'etag',
  'W/"10969531000775168979"',
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
  '7e9ad74b492f8f7a15bbbbbb68829b80',
  'Content-Length',
  '388',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=xw13XtaJS9qcks/YKfdC/Wf+Dl8AAAAAQUIPAAAAAABZKgHiXhX8v40E12eKL/Va; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=G4smIZDmiFiNPpMrKsJtVwAAAADT2HKEnqlnjA7+qQaof8Iz; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=ikKbOgxvVwsE6StOOoVtA2f+Dl8AAAAAy5GQ3R4GAfEtSKsMTMF1oQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '13-37648961-37648977 NNNN CT(94 93 0) RT(1594818151019 35) q(0 0 2 -1) r(6 6) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/entries/6ZAsrS64KnVmoij5lpKuV7/published')
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
    "id": "6ZAsrS64KnVmoij5lpKuV7",
    "type": "Entry",
    "createdAt": "2020-07-15T13:02:28.969Z",
    "updatedAt": "2020-07-15T13:02:32.592Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 2,
    "publishedAt": "2020-07-15T13:02:32.592Z",
    "firstPublishedAt": "2020-07-15T13:02:32.592Z",
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
  'Wed, 15 Jul 2020 13:02:32 GMT',
  'etag',
  'W/"18048731619830252277"',
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
  '9fdac052e1534b41806cda632ecefe2a',
  'Content-Length',
  '417',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=sO9Xb0I4R9y4AHaWJtBSNWj+Dl8AAAAAQUIPAAAAAADEuSbbSz/MG68ztcYW3LmY; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=0R/BOXA0NEhUbbxfKsJtVwAAAABcWMViNlVF+BYLcQrct+SE; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=x3qbTwtQOSK36StOOoVtA2j+Dl8AAAAA1X/+vTrX+mtGHGpUCBB8ew==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '14-49426681-49426691 NNNN CT(92 88 0) RT(1594818151835 30) q(0 0 2 -1) r(6 6) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/entries/Kl6v7ODtfswKoFdnMpVDI', {"sys":{"id":"Kl6v7ODtfswKoFdnMpVDI","version":1,"contentType":{"sys":{"type":"Link","linkType":"ContentType","id":"blogpost"}}},"fields":{"title":{"en-US":"hello!"},"category":{"en-US":"hello!"}}})
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
    "id": "Kl6v7ODtfswKoFdnMpVDI",
    "type": "Entry",
    "createdAt": "2020-07-15T13:02:29.668Z",
    "updatedAt": "2020-07-15T13:02:33.181Z",
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
  'Wed, 15 Jul 2020 13:02:33 GMT',
  'etag',
  'W/"12404986790987890134"',
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
  '3867660c59b82e5891b68184f5413e53',
  'Content-Length',
  '389',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=wH0+8LRdQsa+9kLh+GY6+Gj+Dl8AAAAAQUIPAAAAAAAtHhLjFnf4E+l9q7YU34gJ; expires=Wed, 14 Jul 2021 14:42:27 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=0V0qeaLBnWhsZTaNKsJtVwAAAAAy+gr2xbjZ35sbhezxSoy2; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=mAhIB2FS8B1t6itOOoVtA2j+Dl8AAAAAnxleKgpT9XO2ujCX48biaA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '5-24175279-24175280 NNNN CT(94 93 0) RT(1594818152480 24) q(0 0 1 -1) r(4 4) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/entries/Kl6v7ODtfswKoFdnMpVDI/published')
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
    "id": "Kl6v7ODtfswKoFdnMpVDI",
    "type": "Entry",
    "createdAt": "2020-07-15T13:02:29.668Z",
    "updatedAt": "2020-07-15T13:02:33.758Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 2,
    "publishedAt": "2020-07-15T13:02:33.758Z",
    "firstPublishedAt": "2020-07-15T13:02:33.758Z",
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
  'Wed, 15 Jul 2020 13:02:33 GMT',
  'etag',
  'W/"1377598696055119622"',
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
  '04bc3244bad75c4cc6384ecef52467be',
  'Content-Length',
  '418',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=ng/v7wxfSjq55Q7dNdssk2n+Dl8AAAAAQUIPAAAAAADqxZWhCdiBXMdyHGWKegVt; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=8fPzHTGj1X8pNHkCKsJtVwAAAAA+0d6kk6hIdVKNNPI+Su3V; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=ZAZhTwhLm11D6ytOOoVtA2n+Dl8AAAAAf1hsPSE+7yEq3iGG5scxWA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '9-9987326-9987329 NNNN CT(93 93 0) RT(1594818153057 27) q(0 0 2 -1) r(6 6) U5'
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
        "id": "Kl6v7ODtfswKoFdnMpVDI",
        "type": "Entry",
        "createdAt": "2020-07-15T13:02:29.668Z",
        "updatedAt": "2020-07-15T13:02:33.758Z",
        "environment": {
          "sys": {
            "id": "env-integration",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 2,
        "publishedAt": "2020-07-15T13:02:33.758Z",
        "firstPublishedAt": "2020-07-15T13:02:33.758Z",
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
        "id": "6ZAsrS64KnVmoij5lpKuV7",
        "type": "Entry",
        "createdAt": "2020-07-15T13:02:28.969Z",
        "updatedAt": "2020-07-15T13:02:32.592Z",
        "environment": {
          "sys": {
            "id": "env-integration",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 2,
        "publishedAt": "2020-07-15T13:02:32.592Z",
        "firstPublishedAt": "2020-07-15T13:02:32.592Z",
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
  'Wed, 15 Jul 2020 13:02:34 GMT',
  'etag',
  'W/"14352487624285471145"',
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
  '32c8ae1361f7c086d2856f41bcb901c4',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=8X2waCrtQRuZdBCFHrR9IGr+Dl8AAAAAQUIPAAAAAAANma6w1IUQ4MIyzdYk08RO; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=9aHwPtHM0hFbB38fKsJtVwAAAACqAz011nOgqAoSv1KE7SeH; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=VD18d1OiOkPn6ytOOoVtA2r+Dl8AAAAAwXUOCXC57RSy3qbkCeO3Eg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '14-49427199-49427212 NNNN CT(85 87 0) RT(1594818153745 36) q(0 0 2 -1) r(4 4) U5'
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
  'Wed, 15 Jul 2020 13:02:34 GMT',
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
  'd121336d8f8c107c584c647aa963e137',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=cpReh0aXRaaWm01miItbSmr+Dl8AAAAAQUIPAAAAAABZ53MiGFgVYaqk3dqKtoAa; expires=Wed, 14 Jul 2021 14:42:27 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=erg2IQD6UX40XkIkKsJtVwAAAAAQWOeC2bbI1wHqZAITYfj+; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=gEEQP/3Yq3uZ7CtOOoVtA2r+Dl8AAAAAElOOJ+N8Fuid+s98HfBTsQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '5-24175467-24175469 NNYN CT(92 95 0) RT(1594818154303 38) q(0 0 2 -1) r(3 3) U5'
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
  "requestId": "822f519a392de63d87eb60f965768fb7"
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
  'Wed, 15 Jul 2020 13:02:35 GMT',
  'etag',
  '"4686608035390429265"',
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
  '822f519a392de63d87eb60f965768fb7',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=WOcCKcPmRoOyC/3BOJQGyGv+Dl8AAAAAQUIPAAAAAADBoZUd1CtNUhzSXojv9Kbg; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=KyicLTygIT9MTHJdKsJtVwAAAADOP7xbwDItXcbsbnO452hG; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=yl6tPKythQMj7StOOoVtA2v+Dl8AAAAAmTAVmo5omzVQIFJ9vNapFQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '13-37649668-37649684 NNYN CT(87 89 0) RT(1594818154761 35) q(0 0 2 -1) r(4 4) U5'
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
        "createdAt":"2020-07-15T13:01:40Z",
        "updatedAt":"2020-07-15T13:01:40Z"
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
  'Wed, 15 Jul 2020 13:02:35 GMT',
  'etag',
  'W/"6e10216e1ac922f60100fcd077f6c626"',
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
  'e6b9934f6768cb3e4a53e807edce86c5',
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
  'visid_incap_673446=rpXcjgIfQX6vHrRfcqWQp2v+Dl8AAAAAQUIPAAAAAADoR6RQzkQFXOHTDhPDV/+2; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=O9qTIGboIiy29F9rKsJtVwAAAAB4iXM7MjQLGCzieuhpKHX0; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=0Ewifq3gyi2I7StOOoVtA2v+Dl8AAAAAPMbHW99+d+6nSb39dxJdfA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '10-15255421-15255425 NNYN CT(86 86 0) RT(1594818155177 26) q(0 0 1 -1) r(2 2) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/blogPost', {"name":"Blog post","fields":[{"id":"slug","name":"URL Slug","type":"Symbol","required":true}],"description":"super angry"})
  .reply(201, {"sys":{"space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"id":"blogPost","type":"ContentType","createdAt":"2020-07-15T13:02:36.239Z","updatedAt":"2020-07-15T13:02:36.239Z","environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}},"createdBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"updatedBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"publishedCounter":0,"version":1},"displayField":null,"name":"Blog post","description":"super angry","fields":[{"id":"slug","name":"URL Slug","type":"Symbol","localized":false,"required":true,"validations":[],"disabled":false,"omitted":false}]}, [
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
  'Wed, 15 Jul 2020 13:02:36 GMT',
  'etag',
  '"13226640593104195650"',
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
  'ca16154a8ad74091075a1c6067cea4e8',
  'Content-Length',
  '1054',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=JNHmSFtBQQOPCWXXL/NngGz+Dl8AAAAAQUIPAAAAAAAn+zPrjHPHZ7DvG7CaQn95; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=+PZrHTtPDio7B8kLKsJtVwAAAABd/Do1eE0qjxgBXiyg0ExU; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=p3+pCrxCRgwA7itOOoVtA2z+Dl8AAAAALA60Kj835fr3/oMSe1K0ig==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '12-31851384-31851391 NNNN CT(87 91 0) RT(1594818155551 33) q(0 0 2 -1) r(5 5) U5'
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
    "createdAt": "2020-07-15T13:02:36.239Z",
    "updatedAt": "2020-07-15T13:02:36.791Z",
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
    "firstPublishedAt": "2020-07-15T13:02:36.791Z",
    "publishedAt": "2020-07-15T13:02:36.791Z",
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
  'Wed, 15 Jul 2020 13:02:37 GMT',
  'etag',
  'W/"5789026031312750653"',
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
  'd5f59efa0e6c3cc938e0c9093fcae03d',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=duF5ZOnuSwypT1+k+EDNfWz+Dl8AAAAAQUIPAAAAAAD2t7iQ04Soqq8FTpcD7ujC; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=oVrYCwNW/ng49cQWKsJtVwAAAAAc6l4ElHog296loAY2Yixc; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=F8BAP2JtTnm27itOOoVtA2z+Dl8AAAAAppkSgsGccvMZIleYWZmKlQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '10-15255562-15255567 NNNN CT(88 88 0) RT(1594818156139 33) q(0 0 2 -1) r(6 6) U5'
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
    "createdAt": "2020-07-15T13:02:36.862Z",
    "createdBy": {
      "sys": {
        "id": "1Y7O5FbAkPYgNvD0MpQoAE",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2020-07-15T13:02:37.484Z",
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
  'Wed, 15 Jul 2020 13:02:37 GMT',
  'etag',
  'W/"3152898801735795447"',
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
  '84c8728fb00945ea716f506e07cda9f2',
  'Content-Length',
  '385',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=mw4vx5giSAulhUgcv1bc6W3+Dl8AAAAAQUIPAAAAAAAKf3WocWL+AjJ7yhZD0SCu; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=kHCWYHfN8BNguaOmKsJtVwAAAAAOx4H0PMXtu9EGTIa1FuXg; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=TzJmZRUvejYz7ytOOoVtA23+Dl8AAAAAYhaiaqH7sTCqfoH21323NA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '4-16161669-16161673 NNNN CT(86 87 0) RT(1594818156825 29) q(0 0 2 -1) r(4 4) U5'
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
    "createdAt": "2020-07-15T13:02:36.862Z",
    "createdBy": {
      "sys": {
        "id": "1Y7O5FbAkPYgNvD0MpQoAE",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2020-07-15T13:02:37.484Z",
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
  'Wed, 15 Jul 2020 13:02:38 GMT',
  'etag',
  'W/"5395564671256997003"',
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
  '51233b69295f6877792323afea1257ff',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=CHfJH/MoT1KTP16J+7CHZG3+Dl8AAAAAQUIPAAAAAAA3jJc2Elwmt1Jr/tIYd9cO; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=3OkqSTqS/hqOCzx8KsJtVwAAAADWqiQAdjVB26E3STm4yhI3; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=f0pxJb/OVFfb7ytOOoVtA23+Dl8AAAAASdxqZzkVQUSVnykfWjcV4Q==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '11-25370520-25370528 NNNN CT(85 88 0) RT(1594818157365 28) q(0 0 2 -1) r(4 4) U5'
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
        "createdAt": "2020-07-15T13:02:36.239Z",
        "updatedAt": "2020-07-15T13:02:36.791Z",
        "environment": {
          "sys": {
            "id": "env-integration",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 1,
        "publishedAt": "2020-07-15T13:02:36.791Z",
        "firstPublishedAt": "2020-07-15T13:02:36.791Z",
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
  'Wed, 15 Jul 2020 13:02:38 GMT',
  'etag',
  'W/"13050661760497413281"',
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
  'de0ca421a9c7e37e4834ff12b75266c9',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=Ed/id6mIQTmk5Q6otsnxy27+Dl8AAAAAQUIPAAAAAACurH0m7sEB3WY209+u1wco; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=VX7BRfgp3QCMRnT/KsJtVwAAAADqelQhrdjo80g5NPUVGWOM; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=S9lCekDuNn+Q8CtOOoVtA27+Dl8AAAAAISOCafsNjCPCB4JXDAE8sw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '11-25370651-25370652 NNNN CT(85 86 0) RT(1594818157977 24) q(0 0 1 -1) r(3 3) U5'
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
    "createdAt": "2020-07-15T13:02:36.862Z",
    "createdBy": {
      "sys": {
        "id": "1Y7O5FbAkPYgNvD0MpQoAE",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2020-07-15T13:02:37.484Z",
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
  'Wed, 15 Jul 2020 13:02:39 GMT',
  'etag',
  'W/"5395564671256997003"',
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
  '11849cc226466bf848d200835b400c4f',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=AJiLhJXpThmS0fkWAzfJ027+Dl8AAAAAQUIPAAAAAACCe/zW7EvDokluOcnCDwb6; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=v3cNAdzCYy4v6109KsJtVwAAAACLSrwB3Gt5GAIRUysp6LKn; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=RHcRLibFkHNW8StOOoVtA27+Dl8AAAAA7fNdsKFq1nwqnf3Dyo1Y7Q==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '14-49428546-49428555 NNNN CT(94 95 0) RT(1594818158597 34) q(0 0 2 -1) r(3 3) U5'
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
        "createdAt":"2020-07-15T13:01:40Z",
        "updatedAt":"2020-07-15T13:01:40Z"
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
  'Wed, 15 Jul 2020 13:02:39 GMT',
  'etag',
  'W/"6e10216e1ac922f60100fcd077f6c626"',
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
  'cb9a985b72de7910419a718eefc9253d',
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
  'visid_incap_673446=EXafVpCkRi6I0sg7hVR3Im/+Dl8AAAAAQUIPAAAAAAAzb5OJ6bP2yyqcLyYa5K4x; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=StuSB1iPiUTjlBw0KsJtVwAAAABZfR4zw1mJsDQAuCT8xu1F; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=bXxmMo+LJAH18StOOoVtA2/+Dl8AAAAAl/MGrDzTPtsASTyz0aa5TQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '14-49428701-49428710 NNYN CT(94 87 0) RT(1594818159211 28) q(0 0 2 -1) r(3 3) U5'
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
    "createdAt": "2020-07-15T13:02:36.239Z",
    "updatedAt": "2020-07-15T13:02:40.281Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 1,
    "publishedAt": "2020-07-15T13:02:36.791Z",
    "firstPublishedAt": "2020-07-15T13:02:36.791Z",
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
  'Wed, 15 Jul 2020 13:02:40 GMT',
  'etag',
  'W/"16837918431733965326"',
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
  '2ee452f72516be7dcb29541c513fc05b',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=BpCEO4c1SaOHIR058lIyWnD+Dl8AAAAAQUIPAAAAAABlIHWTQN5JAmKaJor18y0N; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=k0ShOFvbRRkTC6fOKsJtVwAAAABitbYdZ1dab6utjmeD46KW; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=HxOZSZ04CmV78itOOoVtA3D+Dl8AAAAA6jHaP1HQeiOxJiftgNFFOg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '10-15255983-15255990 NNNN CT(86 87 0) RT(1594818159619 29) q(0 0 2 -1) r(4 4) U5'
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
    "createdAt": "2020-07-15T13:02:36.239Z",
    "updatedAt": "2020-07-15T13:02:40.890Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 3,
    "publishedAt": "2020-07-15T13:02:40.890Z",
    "firstPublishedAt": "2020-07-15T13:02:36.791Z",
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
  'Wed, 15 Jul 2020 13:02:40 GMT',
  'etag',
  'W/"4396864392882705478"',
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
  '6a886523a9786c08d2c58f627998215d',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=SPF/CkBTTaahsI13sSgSdHD+Dl8AAAAAQUIPAAAAAABX8TzTt+Aub9+sVktt+MDV; expires=Wed, 14 Jul 2021 14:42:27 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=4eU1QoexWCtX8IDfKsJtVwAAAADzaVwshkWskAwgvnXCgLzO; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=TwfPesAfGHZM8ytOOoVtA3D+Dl8AAAAAKPVkklXI2gCrPuaj9002ig==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '1-2967108-2967110 NNNN CT(93 93 0) RT(1594818160237 29) q(0 0 2 -1) r(4 4) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/blogPost/editor_interface', {"controls":[]})
  .reply(200, {"controls":[],"sys":{"id":"default","type":"EditorInterface","space":{"sys":{"id":"bohepdihyxin","type":"Link","linkType":"Space"}},"version":4,"createdAt":"2020-07-15T13:02:36.862Z","createdBy":{"sys":{"id":"1Y7O5FbAkPYgNvD0MpQoAE","type":"Link","linkType":"User"}},"updatedAt":"2020-07-15T13:02:41.411Z","updatedBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"contentType":{"sys":{"id":"blogPost","type":"Link","linkType":"ContentType"}},"environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}}}}, [
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
  'Wed, 15 Jul 2020 13:02:41 GMT',
  'etag',
  '"4756794946749869277"',
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
  '6e24ae61446638a7d4d10c0122023b83',
  'Content-Length',
  '880',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=PAOkoyFOQiq47WMHQDdgmHH+Dl8AAAAAQUIPAAAAAABYIuOIf4zpxvxJo9mpPuiv; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=3Q0eRDTOpldHdE8fKsJtVwAAAABvuXnbNef/wqLddCMZhMQG; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=v88AFwPJIDPG8ytOOoVtA3H+Dl8AAAAAn+7rllTMGWbQkwCp4dc02g==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '6-7771340-7771341 NNNN CT(85 87 0) RT(1594818160753 31) q(0 0 2 -1) r(4 4) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/blogPost/editor_interface', {"controls":[{"fieldId":"slug","widgetId":"singleLine","widgetNamespace":"builtin"}]})
  .reply(200, {"controls":[{"fieldId":"slug","widgetId":"singleLine","widgetNamespace":"builtin"}],"sys":{"id":"default","type":"EditorInterface","space":{"sys":{"id":"bohepdihyxin","type":"Link","linkType":"Space"}},"version":5,"createdAt":"2020-07-15T13:02:36.862Z","createdBy":{"sys":{"id":"1Y7O5FbAkPYgNvD0MpQoAE","type":"Link","linkType":"User"}},"updatedAt":"2020-07-15T13:02:41.897Z","updatedBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"contentType":{"sys":{"id":"blogPost","type":"Link","linkType":"ContentType"}},"environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}}}}, [
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
  'Wed, 15 Jul 2020 13:02:41 GMT',
  'etag',
  '"16335014643602120978"',
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
  '882611b3b96792ce947830b27fe1ff2e',
  'Content-Length',
  '987',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=6U6CfShqToizCGrsUJ01xHH+Dl8AAAAAQUIPAAAAAADqVQY0SIMYZWCQ8nZ0nj9/; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=pzQQB+DBbl3OicjlKsJtVwAAAADecN00XV//+N0YYHCBPQH+; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=QQSzad3W8gJI9CtOOoVtA3H+Dl8AAAAAjWVswNu8IkcrWp1xuVhxJA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '14-49429271-49429277 NNNN CT(88 86 0) RT(1594818161254 30) q(0 0 2 -1) r(4 4) U5'
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
    "createdAt": "2020-07-15T13:02:36.862Z",
    "createdBy": {
      "sys": {
        "id": "1Y7O5FbAkPYgNvD0MpQoAE",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2020-07-15T13:02:41.897Z",
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
  'Wed, 15 Jul 2020 13:02:42 GMT',
  'etag',
  '"16275241546395941231"',
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
  '89f395c22e83da59ac0e819b8906bfea',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=vD7nJwYFT6uVFBrVV29ocXL+Dl8AAAAAQUIPAAAAAAACx0sxZ1Uh8Rlsq108cwcd; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=3jiaF+14/H8PGwKMKsJtVwAAAACumyyBdVURmtONZMUteu+1; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=evI2We/6lwhl9StOOoVtA3L+Dl8AAAAAgErgeaoDlrNZ7I4AMWr+jQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '13-37651292-37651304 NNYN CT(88 87 0) RT(1594818161871 34) q(0 0 1 -1) r(8 8) U5'
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
        "createdAt": "2020-07-15T13:02:36.239Z",
        "updatedAt": "2020-07-15T13:02:40.890Z",
        "environment": {
          "sys": {
            "id": "env-integration",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 3,
        "publishedAt": "2020-07-15T13:02:40.890Z",
        "firstPublishedAt": "2020-07-15T13:02:36.791Z",
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
  'Wed, 15 Jul 2020 13:02:43 GMT',
  'etag',
  'W/"1021600620937472081"',
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
  '0874c943c3fcca6ed352c0f81c3dbac1',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=JqefCtbkRvKJTVjaqzPWAXP+Dl8AAAAAQUIPAAAAAACX+osF1zfqQg1UwWSQK8BI; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=tfUfEKAfBVYSz92HKsJtVwAAAAByGC+mE4/VHZPud0q8dj27; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=NJ7RZ36+JHUA9itOOoVtA3P+Dl8AAAAATQJg02GZu0N8tdffM8Fviw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '10-15256452-15256456 NNNN CT(95 94 0) RT(1594818162777 23) q(0 1 2 -1) r(4 4) U5'
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
    "createdAt": "2020-07-15T13:02:36.862Z",
    "createdBy": {
      "sys": {
        "id": "1Y7O5FbAkPYgNvD0MpQoAE",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2020-07-15T13:02:41.897Z",
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
  'Wed, 15 Jul 2020 13:02:45 GMT',
  'etag',
  '"16275241546395941231"',
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
  '4d15ae709702019a091d880406e96c14',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=PnOcir8DQeOO/iIKIeP9jXT+Dl8AAAAAQUIPAAAAAACPDi/UvdrnknAfcjJfOSnq; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=TwJYC/IGBQav8WWIKsJtVwAAAAA+YTk28m+r1axIfbRDIuIG; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=vY/vF+kLonB7+CtOOoVtA3T+Dl8AAAAAUt0LbTTfSd+5viBTsbvWUA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '12-31853337-31853345 NNYN CT(93 105 0) RT(1594818164202 32) q(0 0 2 -1) r(5 5) U5'
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
        "createdAt":"2020-07-15T13:01:40Z",
        "updatedAt":"2020-07-15T13:01:40Z"
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
  'Wed, 15 Jul 2020 13:02:45 GMT',
  'etag',
  'W/"6e10216e1ac922f60100fcd077f6c626"',
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
  '0d0c1dbea1c806fa19983725ff4043e6',
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
  'visid_incap_673446=hyXrDPFxT7ehstF4SWBFmHX+Dl8AAAAAQUIPAAAAAACbzUj5RqcWyqyaKAOiyexr; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=IzTDYKJjs11014uGKsJtVwAAAAD3K6c/cwJrmTSEpR8xfh3h; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=ViE4MQ4BmQgY+StOOoVtA3X+Dl8AAAAAoX9sChDNHN6rPl7PWoJToA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '9-9989104-9989107 NNYN CT(93 159 0) RT(1594818164977 37) q(0 0 2 -1) r(3 3) U5'
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
    "createdAt": "2020-07-15T13:02:36.239Z",
    "updatedAt": "2020-07-15T13:02:46.333Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 3,
    "publishedAt": "2020-07-15T13:02:40.890Z",
    "firstPublishedAt": "2020-07-15T13:02:36.791Z",
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
  'Wed, 15 Jul 2020 13:02:46 GMT',
  'etag',
  'W/"5473761643140320502"',
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
  '57d0dfe4370451d161863f283f7cdf1f',
  'Content-Length',
  '463',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=v52/hqqsQ66nfvQBRi1lz3b+Dl8AAAAAQUIPAAAAAABbLMb89/Mm/XdXLaqcq5aO; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=1E7yCSYOISjITpOFKsJtVwAAAADjFgNiysrkht4qhfVueMRI; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=WkMCSD9qVHrp+StOOoVtA3b+Dl8AAAAANHVgU7fw9labbuqazwk8Pw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '7-13172810-13172811 NNNN CT(87 87 0) RT(1594818165569 27) q(0 0 2 -1) r(5 5) U5'
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
    "createdAt": "2020-07-15T13:02:36.239Z",
    "updatedAt": "2020-07-15T13:02:46.842Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 5,
    "publishedAt": "2020-07-15T13:02:46.842Z",
    "firstPublishedAt": "2020-07-15T13:02:36.791Z",
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
  'Wed, 15 Jul 2020 13:02:46 GMT',
  'etag',
  'W/"7539973064405296740"',
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
  '12f02758921b4be6c524aecb2836d90c',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=ntZTLup7QEO+ZhIVtIa95Hb+Dl8AAAAAQUIPAAAAAAC2LdrhrxMH9FfCCfIp9B4m; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=Rhfwe4uEiQ5XYgWCKsJtVwAAAAA1/lqfBYcxPB/b537dhqha; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=o4+1S2K/JH95+itOOoVtA3b+Dl8AAAAA8iSvyi/MGn0Bj4vo3cEfPA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '13-37652338-37652346 NNNN CT(98 94 0) RT(1594818166175 31) q(0 0 1 -1) r(4 4) U5'
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
    "createdAt": "2020-07-15T13:02:36.862Z",
    "createdBy": {
      "sys": {
        "id": "1Y7O5FbAkPYgNvD0MpQoAE",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2020-07-15T13:02:47.575Z",
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
  'Wed, 15 Jul 2020 13:02:47 GMT',
  'etag',
  'W/"15214381151367520415"',
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
  'c740c6a4481869b2ac60497eaf50735e',
  'Content-Length',
  '422',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=SERIzGvfSjunT7MUjxqUBHf+Dl8AAAAAQUIPAAAAAAA/hPe68DQnPypt0yKBedBY; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=968qAJ5vThIRDAOPKsJtVwAAAAAnW73f/OCx57yNAV/3mq+i; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=UgUXFp0wrAEa+ytOOoVtA3f+Dl8AAAAAM7FC1G5An6rV5Gf1wGDWHA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '6-7771554-7771556 NNNN CT(93 93 0) RT(1594818166795 30) q(0 0 2 -1) r(4 4) U5'
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
    "createdAt": "2020-07-15T13:02:36.862Z",
    "createdBy": {
      "sys": {
        "id": "1Y7O5FbAkPYgNvD0MpQoAE",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2020-07-15T13:02:47.575Z",
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
  'Wed, 15 Jul 2020 13:02:48 GMT',
  'etag',
  'W/"15118307305043613106"',
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
  '89289d5e9c26ecbda53932145eccad02',
  'Content-Length',
  '408',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=tHJsqeTRReuXk6FXbUM+UXf+Dl8AAAAAQUIPAAAAAAAl8DrzNJVsOMFwvr28g402; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=+hI9QLkQ3QCBB/GQKsJtVwAAAADHNLl9NVtOWe2Z484+eTkb; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=dbm4N62K1TZW/CtOOoVtA3f+Dl8AAAAA8ZvxkkxcL00U/7aeFCELRg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '14-49430802-49430807 NNNN CT(86 86 0) RT(1594818167405 26) q(0 0 2 -1) r(3 3) U5'
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
  'Wed, 15 Jul 2020 13:02:48 GMT',
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
  'abb228d91f758cc8b5b99ec41da3c744',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=iTzJWhyUQ/mBxKm6uqeF4nj+Dl8AAAAAQUIPAAAAAAB4buHdJ/FTqVgWcZaJtpqi; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=Y4pJQnUyQwXNbdEFKsJtVwAAAABjEYXmFlO03C0BbfIN8vBi; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=zy+kIhWA0Rk0/StOOoVtA3j+Dl8AAAAA6Ig0iFjVtpJXJazhBO8gvg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '14-49430960-49430966 NNYN CT(88 98 0) RT(1594818168021 37) q(0 0 2 -1) r(6 6) U5'
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
  "requestId": "675a3c25d63a26dcd565a1e0d8af63e8"
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
  'Wed, 15 Jul 2020 13:02:49 GMT',
  'etag',
  '"5755000378900739830"',
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
  '675a3c25d63a26dcd565a1e0d8af63e8',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=EAuiFpOIT1G+FG3AmGK6Bnn+Dl8AAAAAQUIPAAAAAABucZ2BOMm8j38ZAzY0x5Xd; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=0pyVeaSk0iftWPkxKsJtVwAAAABaXCDeNEz5HE+quXbiS+El; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=MVe+G4D4/mXF/StOOoVtA3n+Dl8AAAAAWZeJUSI2a1YSoVKo3uulHg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '12-31854319-31854327 NNYN CT(87 88 0) RT(1594818168839 35) q(0 0 2 -1) r(3 3) U5'
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
        "createdAt":"2020-07-15T13:01:40Z",
        "updatedAt":"2020-07-15T13:01:40Z"
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
  'Wed, 15 Jul 2020 13:02:50 GMT',
  'etag',
  'W/"6e10216e1ac922f60100fcd077f6c626"',
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
  '7548dda37b941cd00033e54ffd39c3fd',
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
  'visid_incap_673446=ulvQAPpORhKy45wzrSYDnXn+Dl8AAAAAQUIPAAAAAADnXTCTPEC9X+/IMMMWJsj6; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=MYsxYJxxVRjXbI31KsJtVwAAAAD9w4AFcDhWfKOUxd3z5v85; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=v4WuGBY2HydZ/itOOoVtA3n+Dl8AAAAAe2o/7MepTwfPBwhrXV45Qg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '14-49431350-49431360 NNYN CT(95 94 0) RT(1594818169449 30) q(0 0 2 -1) r(3 3) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/customSidebar', {"name":"Custom sidebar","fields":[],"description":"How to add, remove and update widgets"})
  .reply(201, {"sys":{"space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"id":"customSidebar","type":"ContentType","createdAt":"2020-07-15T13:02:50.587Z","updatedAt":"2020-07-15T13:02:50.587Z","environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}},"createdBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"updatedBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"publishedCounter":0,"version":1},"displayField":null,"name":"Custom sidebar","description":"How to add, remove and update widgets","fields":[]}, [
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
  'Wed, 15 Jul 2020 13:02:50 GMT',
  'etag',
  '"10801311369350471948"',
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
  'da54ea8ce11080ec2f8c3a6708716069',
  'Content-Length',
  '882',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=hUy3F7l0Qpe+UZkaNG2Nvnr+Dl8AAAAAQUIPAAAAAACFI9Y/s8x4qdOel32y/xyw; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=NmDGQBOxcTVpqSY1KsJtVwAAAABMPg3dCRgIuBw0UAouL4KP; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=F21YcP9J6Q32/itOOoVtA3r+Dl8AAAAAqCOSc3GKXk2VoFBdEH8fTA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '10-15257482-15257492 NNNN CT(93 97 0) RT(1594818169869 36) q(0 0 1 -1) r(4 4) U5'
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
    "createdAt": "2020-07-15T13:02:50.587Z",
    "updatedAt": "2020-07-15T13:02:51.123Z",
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
    "firstPublishedAt": "2020-07-15T13:02:51.123Z",
    "publishedAt": "2020-07-15T13:02:51.123Z",
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
  'Wed, 15 Jul 2020 13:02:51 GMT',
  'etag',
  'W/"1138045804777501759"',
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
  '3a529bb5b7cb0391206930ec8fc6fc67',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=5Z4O55yHQ+yPacCt0YRPbXr+Dl8AAAAAQUIPAAAAAADdqxh0+JXc/og7G6ZPLnvC; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=58q8RyV1XXNB6J4/KsJtVwAAAAC4IIBhBe2HoBDnODXb0AhQ; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=nlhgclVgkRWh/ytOOoVtA3r+Dl8AAAAAtkXqVWmmKoG2CwcIucqWMQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '11-25373369-25373376 NNNN CT(89 89 0) RT(1594818170479 26) q(0 0 1 -1) r(4 4) U5'
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
    "createdAt": "2020-07-15T13:02:51.189Z",
    "createdBy": {
      "sys": {
        "id": "1Y7O5FbAkPYgNvD0MpQoAE",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2020-07-15T13:02:51.654Z",
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
  'Wed, 15 Jul 2020 13:02:51 GMT',
  'etag',
  'W/"16416250126289607297"',
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
  '7c49bf159bfffa2add659cee3f0390eb',
  'Content-Length',
  '459',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=kUihL+daTcSbpplP71W/sXv+Dl8AAAAAQUIPAAAAAAADTGN8ajlVmWmW8WrLsiQt; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=sNd8P1c01FiSmE84KsJtVwAAAADva4Yd6Q0tqey/utfWYaoj; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=H6HgSM5USx8NACxOOoVtA3v+Dl8AAAAAmAHlUBfAe5llTI+DNRp8Aw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '14-49431713-49431721 NNNN CT(94 93 0) RT(1594818170985 25) q(0 0 1 -1) r(3 3) U5'
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
    "createdAt": "2020-07-15T13:02:51.189Z",
    "createdBy": {
      "sys": {
        "id": "1Y7O5FbAkPYgNvD0MpQoAE",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2020-07-15T13:02:52.183Z",
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
  'Wed, 15 Jul 2020 13:02:52 GMT',
  'etag',
  'W/"10866200904573003277"',
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
  '0a21e263b5557386550180829f40fe2b',
  'Content-Length',
  '459',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=loarlxhfR0yztIin9YIGnHv+Dl8AAAAAQUIPAAAAAAA5v01prizvykbgJ7oymekU; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=mDL/RTcjVTFtLSiZKsJtVwAAAADEvURFk0AjIBsk28tbkh2T; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=ivYoFrFQokedACxOOoVtA3v+Dl8AAAAAxx4Lp2YKRzYFtv0Qxnm1qQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '7-13173203-13173205 NNNN CT(94 94 0) RT(1594818171500 35) q(0 0 2 -1) r(4 4) U5'
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
    "createdAt": "2020-07-15T13:02:51.189Z",
    "createdBy": {
      "sys": {
        "id": "1Y7O5FbAkPYgNvD0MpQoAE",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2020-07-15T13:02:52.659Z",
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
  'Wed, 15 Jul 2020 13:02:52 GMT',
  'etag',
  'W/"7699653855840119255"',
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
  '6e4aa0ebcfa89626d3b01551b0cb78ef',
  'Content-Length',
  '460',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=b98OlC0oQlWLjj0VlgaN2Xz+Dl8AAAAAQUIPAAAAAACoslyGWMxCtWEk1pVMZUEj; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=0SbVKWEeLlQthHrlKsJtVwAAAADSszzNjdX2tOOQpBBE+uqS; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=+3+zKzQpnlowASxOOoVtA3z+Dl8AAAAAfNZfEZieHx1qpF8dNEQzZQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '14-49432042-49432058 NNNN CT(88 86 0) RT(1594818172008 37) q(0 0 2 -1) r(3 3) U5'
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
    "createdAt": "2020-07-15T13:02:51.189Z",
    "createdBy": {
      "sys": {
        "id": "1Y7O5FbAkPYgNvD0MpQoAE",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2020-07-15T13:02:53.273Z",
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
  'Wed, 15 Jul 2020 13:02:53 GMT',
  'etag',
  'W/"11447616930947989638"',
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
  '0d7323f5817d2fd55f0eb6023bbfe33f',
  'Content-Length',
  '460',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=sP3PYtBQQviPZqY6QAAUjHz+Dl8AAAAAQUIPAAAAAAAp54FjEkIkY1o3Rkybktsz; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=LW7TVJMx8Hj/fSlDKsJtVwAAAAApXMtzxL8CgBlMx255rp4P; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=AqugPpSr+HPkASxOOoVtA3z+Dl8AAAAA/tcmEcauOg2HiJEI5uIqAQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '14-49432200-49432203 NNNN CT(91 88 0) RT(1594818172537 30) q(0 0 2 -1) r(4 4) U5'
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
    "createdAt": "2020-07-15T13:02:51.189Z",
    "createdBy": {
      "sys": {
        "id": "1Y7O5FbAkPYgNvD0MpQoAE",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2020-07-15T13:02:53.778Z",
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
  'Wed, 15 Jul 2020 13:02:53 GMT',
  'etag',
  'W/"3762647122089499610"',
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
  'c615d48b7f4858b4c9bb895024caec28',
  'Content-Length',
  '448',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=pgrkkTj6Q+ebNKmQ4oFgCH3+Dl8AAAAAQUIPAAAAAADCm9L12K1VD+xR8m1cV97Z; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=Ad8PMmcrnXoDqfD4KsJtVwAAAAC0K5xnvMWr767VWlmROLiK; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=kkoTAbBtNQV+AixOOoVtA33+Dl8AAAAA6ial13xAr5EzWgJuUCIg4A==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '12-31855211-31855216 NNNN CT(92 87 0) RT(1594818173131 27) q(0 0 2 -1) r(3 3) U5'
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
    "createdAt": "2020-07-15T13:02:51.189Z",
    "createdBy": {
      "sys": {
        "id": "1Y7O5FbAkPYgNvD0MpQoAE",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2020-07-15T13:02:53.778Z",
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
  'Wed, 15 Jul 2020 13:02:54 GMT',
  'etag',
  'W/"818393047346919624"',
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
  '78798bd839a09118d18504ca02a703fd',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=LfyEbH9eSJuXqgWhPC94N37+Dl8AAAAAQUIPAAAAAAB08gsj+uNbr5BxMy0uIzm4; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=VmGGMsJzckTD5PnDKsJtVwAAAAAm0L2bcNc0hBGEyoAy/d9P; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=TxZWavG7CyFPAyxOOoVtA37+Dl8AAAAA4WTF3usMQXIVQqUuUHMG+w==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '14-49432473-49432476 NNNN CT(93 94 0) RT(1594818173755 41) q(0 0 2 -1) r(4 4) U5'
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
  'Wed, 15 Jul 2020 13:02:55 GMT',
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
  'ec64020b0afeb80eda6c592a0adec8f1',
  'Content-Length',
  '375',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=MkVAGg4zSpK/G1701M0XM37+Dl8AAAAAQUIPAAAAAABRKPz90FpL669EFkV6UBvc; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=cp7YGS4lTmGarWzeKsJtVwAAAAC1qoLiEkAG+TwQ/ZRkWj2c; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=m+sFRy4XnGfZAyxOOoVtA37+Dl8AAAAAZioJejL8mZvexZV/3Ez/zw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '11-25374217-25374220 NNNN CT(85 88 0) RT(1594818174375 30) q(0 0 1 -1) r(3 3) U5'
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
        "createdAt":"2020-07-15T13:01:40Z",
        "updatedAt":"2020-07-15T13:01:40Z"
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
  'Wed, 15 Jul 2020 13:02:55 GMT',
  'etag',
  'W/"6e10216e1ac922f60100fcd077f6c626"',
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
  'c0ef4fafdc9f824339acfe47c7197145',
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
  'visid_incap_673446=tcxy18tWS5e34/U7SwXf23/+Dl8AAAAAQUIPAAAAAADHjTRmp0rCZibp02etfY+B; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=zImJEbqyK03awwhbKsJtVwAAAACvFVJyiezS9XrFlsgSiCpL; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=cgSkdNyTqWJLBCxOOoVtA3/+Dl8AAAAAiqbSS8o7FZEr1oP1a02vbQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '10-15258221-15258229 NNYN CT(88 89 0) RT(1594818174791 27) q(0 0 1 -1) r(3 3) U5'
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
    "updatedAt": "2020-07-15T13:02:55.852Z",
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
  'Wed, 15 Jul 2020 13:02:55 GMT',
  'etag',
  'W/"4499226611754722291"',
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
  'd66591ee8c278ba6c62a0b1e2cf87d5a',
  'Content-Length',
  '540',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=J7Y6HtF3S++mYe6wxV4Ak3/+Dl8AAAAAQUIPAAAAAAD/Lda+pth3nq4k9Al4OTXz; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=buDjbFLBokZjZ7keKsJtVwAAAADOM1S5ZBnJg/vz1Onwa7AN; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=3gTaChTiZRPQBCxOOoVtA3/+Dl8AAAAAig/WqT7e2bdeZcbCPurJ7A==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '12-31855633-31855642 NNNN CT(88 88 0) RT(1594818175193 36) q(0 0 2 -1) r(3 3) U5'
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
    "updatedAt": "2020-07-15T13:02:56.486Z",
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
  'Wed, 15 Jul 2020 13:02:56 GMT',
  'etag',
  'W/"13568929678516717374"',
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
  '2f1659858326c472a533be369d58aa6f',
  'Content-Length',
  '541',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=QRusJu9jTQGtC0Z9BnySq4D+Dl8AAAAAQUIPAAAAAAC4+p70EsE2X6iCAQNvIstj; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=77lbWoxxBWQ8iBLQKsJtVwAAAADN7wEXdTD07NPSDW0gis8M; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=ovH9chVwXUihBSxOOoVtA4D+Dl8AAAAAyMLEH40O/mQaI4lxdji2XA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '11-25374435-25374442 NNNN CT(93 95 0) RT(1594818175799 39) q(0 0 2 -1) r(4 4) U5'
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
    "updatedAt": "2020-07-15T13:02:57.031Z",
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
  'Wed, 15 Jul 2020 13:02:57 GMT',
  'etag',
  'W/"10619391741830936985"',
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
  'd5d02aef6808ffa2ea51676b19852b8a',
  'Content-Length',
  '540',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=3oR1QdXORhaW3wnFP8yhP4D+Dl8AAAAAQUIPAAAAAAAWPOrAKBmyvwtvsPE/OCFY; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=dLuLCciTiAP+5RaPKsJtVwAAAADOcXS8B6xmRz5LCkTQa2to; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=zIuzeIwCkUREBixOOoVtA4D+Dl8AAAAAE3etneJJ1YrrBTTojKn4hg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '7-13173528-13173529 NNNN CT(88 89 0) RT(1594818176383 25) q(0 0 1 -1) r(3 3) U5'
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
    "updatedAt": "2020-07-15T13:02:57.575Z",
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
  'Wed, 15 Jul 2020 13:02:57 GMT',
  'etag',
  'W/"12597896201008085464"',
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
  '0865e1e7b402c4603bf3e93eca74d997',
  'Content-Length',
  '540',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=VwzGZ9upQq6Hti0SeLoxfoH+Dl8AAAAAQUIPAAAAAACI6DdiJsFOAdvpleTH11OR; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=BbiVUqkgETmIkfvRKsJtVwAAAACA2m00+wFUbJ/5anUpdt7z; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=yoHFEJ+i0CnDBixOOoVtA4H+Dl8AAAAAKK0+b56jODW0dctiSIoM1g==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '10-15258547-15258553 NNNN CT(86 86 0) RT(1594818176929 33) q(0 0 2 -1) r(3 3) U5'
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
    "updatedAt": "2020-07-15T13:02:58.077Z",
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
  'Wed, 15 Jul 2020 13:02:58 GMT',
  'etag',
  'W/"14419499485752191714"',
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
  'f883237bd979d9a2b991626618b66233',
  'Content-Length',
  '524',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=fEMc+CzJQyqzqdFP7Dg954H+Dl8AAAAAQUIPAAAAAACGLyHfwP/xqHRCub7vgnrE; expires=Wed, 14 Jul 2021 14:42:27 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=8clSdK3xoSdcDcRlKsJtVwAAAADqYPgXsf85QKfJz7AmZh6C; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=AlnWQUvf5iVcByxOOoVtA4H+Dl8AAAAAXy5mLSskSSeH2p3+WtronQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '5-24178048-24178050 NNNN CT(87 86 0) RT(1594818177432 30) q(0 0 2 -1) r(3 3) U5'
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
    "updatedAt": "2020-07-15T13:02:58.077Z",
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
  'Wed, 15 Jul 2020 13:02:59 GMT',
  'etag',
  'W/"13101617569297844199"',
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
  '28a2cbd4dcf941b15ebd231c0efe2c8b',
  'Content-Length',
  '519',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=GRVZNx2HTnixQYc3RB0MEYP+Dl8AAAAAQUIPAAAAAAAwCmR/1aV2ORU5eb4Yqys3; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=O12ZKNkvKRJFSKtVKsJtVwAAAAA+YXQSJ8jJTU0LeKTAbQpS; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=Y7ZTfdpN+HrACCxOOoVtA4P+Dl8AAAAAiYCqzL/emRzT66HeLoviTQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '13-37655234-37655240 NNNN CT(88 88 0) RT(1594818178845 28) q(0 0 2 -1) r(4 4) U5'
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
        "createdAt": "2020-07-15T13:02:22.024Z",
        "updatedAt": "2020-07-15T13:02:22.024Z",
        "version": 1
      },
      "name": "long example marketing"
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
  'Wed, 15 Jul 2020 13:03:00 GMT',
  'etag',
  '"6384273142753892014"',
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
  '84cca67e85dba96cb57cade33a84ba4c',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=WwrnIJFyQkKV9wrUmtGbsoP+Dl8AAAAAQUIPAAAAAAAwI2+oflyv+5orBljHKmAI; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=/6LJNWECPz0aBWYKKsJtVwAAAAA5fUGdbBC8isZvOwISTiQW; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=l2tOWISpDyVdCSxOOoVtA4P+Dl8AAAAAtTffpAI3vkt2PdmrxXbMhQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '9-9991236-9991241 NNYN CT(93 107 0) RT(1594818179499 32) q(0 0 2 -1) r(3 3) U5'
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
        "createdAt":"2020-07-15T13:01:40Z",
        "updatedAt":"2020-07-15T13:01:40Z"
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
  'Wed, 15 Jul 2020 13:03:00 GMT',
  'etag',
  'W/"6e10216e1ac922f60100fcd077f6c626"',
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
  'fbf94f8c89f9c28c70ef175e6a10fa65',
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
  'visid_incap_673446=QmDkS5+JQoy7IHp2BBe8vIT+Dl8AAAAAQUIPAAAAAABVTTtMKweGaONNYLxZHtI3; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=4iEEXbszM2r2+SzuKsJtVwAAAAAKKwZheY9KibPIUSHbFTjH; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=htZCXEd5NCeyCSxOOoVtA4T+Dl8AAAAAHIrG4ynoNkn239G9x4fdAA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '11-25375242-25375251 NNYN CT(94 94 0) RT(1594818179947 28) q(0 0 2 -1) r(3 3) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/tags/sampletag', {"sys":{"id":"sampletag","version":0},"name":"marketing"})
  .reply(201, {"sys":{"id":"sampletag","version":1,"space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}},"type":"Tag","createdAt":"2020-07-15T13:03:01.197Z","createdBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"updatedAt":"2020-07-15T13:03:01.197Z","updatedBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}}},"name":"marketing"}, [
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
  'Wed, 15 Jul 2020 13:03:01 GMT',
  'etag',
  '"7287126510657505518"',
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
  '2aaec2638815d4e9902414a29ee6db97',
  'Content-Length',
  '740',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=/cea3GXVScOoh1K8DOq45IT+Dl8AAAAAQUIPAAAAAAB1EhFFnkuGCbvvM8pqmdlB; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=zvK4DLkrJSmKoaFyKsJtVwAAAACiO2ArtOZsrFoZZxohhLvR; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=qHquC5CdIVpiCixOOoVtA4T+Dl8AAAAAlsvDWeQrZuJOOx1O2k9RZg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '8-4813525-4813529 NNNN CT(86 87 0) RT(1594818180542 28) q(0 0 2 -1) r(4 4) U5'
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
    "createdAt": "2020-07-15T13:03:01.197Z",
    "updatedAt": "2020-07-15T13:03:01.197Z",
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
  'Wed, 15 Jul 2020 13:03:01 GMT',
  'etag',
  '"10814838849760543173"',
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
  '49022b8f554df176ec12e1e1ad90b776',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=OKJCM6ewTb2buWMuu9JZvIX+Dl8AAAAAQUIPAAAAAAA7JjFESbCsTl9X5yQRK6Iu; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=5Ap9StPSHkosujmpKsJtVwAAAACNNUHCdK5ZpXxEveZ32YZG; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=sEv6KXfpuBIkCyxOOoVtA4X+Dl8AAAAA1SozcReIlgezSVhjwo+O3A==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '13-37655779-37655789 NNYN CT(101 95 0) RT(1594818181133 42) q(0 0 2 -1) r(4 4) U5'
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
        "createdAt": "2020-07-15T13:03:01.197Z",
        "updatedAt": "2020-07-15T13:03:01.197Z",
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
        "createdAt": "2020-07-15T13:02:22.024Z",
        "updatedAt": "2020-07-15T13:02:22.024Z",
        "version": 1
      },
      "name": "long example marketing"
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
  'Wed, 15 Jul 2020 13:03:02 GMT',
  'etag',
  'W/"10463404004260034275"',
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
  'd8121d5e0a8d637d5aafaddc2b116fd3',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=83oC0UMpQfaTEqirfSylXoX+Dl8AAAAAQUIPAAAAAACwTCzmeTQSq5kAFbYbgvYv; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=AM0fC+lNlHQFyTaiKsJtVwAAAAA6mDCvaoj/IR4WWajuF6f0; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=0ifxNnK0VFDqCyxOOoVtA4X+Dl8AAAAAhe+n49WJKfWRI49Kb4qT7A==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '8-4813599-4813603 NNNN CT(89 88 0) RT(1594818181617 29) q(0 0 2 -1) r(3 3) U5'
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
        "createdAt":"2020-07-15T13:01:40Z",
        "updatedAt":"2020-07-15T13:01:40Z"
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
  'Wed, 15 Jul 2020 13:03:02 GMT',
  'etag',
  'W/"6e10216e1ac922f60100fcd077f6c626"',
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
  'a9ca7809dbaba640d65099f2a51089b7',
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
  'visid_incap_673446=aPTAbhlSSROuG2ibaj1jI4b+Dl8AAAAAQUIPAAAAAADnp5dQjqSZsHGcCTkPSV7i; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=GQRzdeWc4mtPcTZkKsJtVwAAAACg6skgZoXqRzI28sgxd6eX; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=4pR7CfSOR3eUDCxOOoVtA4b+Dl8AAAAA079pzfB7NbdJu3zoT0BMgg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '12-31857017-31857019 NNYN CT(87 89 0) RT(1594818182153 36) q(0 0 2 -1) r(3 3) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/tags/sampletag', {"sys":{"id":"sampletag","version":1},"name":"better marketing"})
  .reply(200, {"sys":{"type":"Tag","id":"sampletag","space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}},"createdBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"updatedBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"createdAt":"2020-07-15T13:03:01.197Z","updatedAt":"2020-07-15T13:03:03.438Z","version":2},"name":"better marketing"}, [
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
  'Wed, 15 Jul 2020 13:03:03 GMT',
  'etag',
  '"4858739171092033580"',
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
  '41ba3ba920b835dc3c2b08902177d69f',
  'Content-Length',
  '747',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=lZhzM9uVRde82WEY6/VuSof+Dl8AAAAAQUIPAAAAAACci1cRS/9hGKMI0kwULnCp; expires=Wed, 14 Jul 2021 14:42:27 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=wQZfIWHgbGoeBOo7KsJtVwAAAAALYdhzo/dbwWnVy4YLS/sh; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=Lyj1SGx3uzSBDSxOOoVtA4f+Dl8AAAAAns1pfit09FesaAFEJciIAg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '5-24178588-24178590 NNNN CT(93 94 0) RT(1594818182779 28) q(0 0 1 -1) r(3 3) U5'
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
    "createdAt": "2020-07-15T13:03:01.197Z",
    "updatedAt": "2020-07-15T13:03:03.438Z",
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
  'Wed, 15 Jul 2020 13:03:04 GMT',
  'etag',
  '"4858739171092033580"',
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
  'd8d3e499f5de64b8aca6f35db9ac5965',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=MPo6b8mcTWOKS2YwBGb6Jof+Dl8AAAAAQUIPAAAAAABmmWUtnYRtQU217bOMeVLz; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=q7hPAeucwiGm5KasKsJtVwAAAADayZEvxUs6GhckEO1TGPJ9; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=c+C+WnpjUzUyDixOOoVtA4f+Dl8AAAAA4gJGFsSt+9r6WccKfu4+FA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '14-49435010-49435023 NNYN CT(93 97 0) RT(1594818183373 35) q(0 0 1 -1) r(3 3) U5'
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
        "createdAt": "2020-07-15T13:03:01.197Z",
        "updatedAt": "2020-07-15T13:03:03.438Z",
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
        "createdAt": "2020-07-15T13:02:22.024Z",
        "updatedAt": "2020-07-15T13:02:22.024Z",
        "version": 1
      },
      "name": "long example marketing"
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
  'Wed, 15 Jul 2020 13:03:04 GMT',
  'etag',
  'W/"313427910239614299"',
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
  '216aecc3b6e8dccbdbce1f2f279ab775',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=e4HQpYVBRhSQUEYid39Sc4j+Dl8AAAAAQUIPAAAAAABm1p5wT+U2ucYB6m+OGnKY; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=5ZTNWtdKPyJXu18nKsJtVwAAAADeIRWnPuyW4gr8PYpMBaxq; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=1uaqRH1FYWy5DixOOoVtA4j+Dl8AAAAAoAKAY2mJYFR9VePNQC/Y1A==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '11-25375986-25376012 NNNN CT(88 89 0) RT(1594818183873 34) q(0 0 1 -1) r(3 3) U5'
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
        "createdAt":"2020-07-15T13:01:40Z",
        "updatedAt":"2020-07-15T13:01:40Z"
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
  'Wed, 15 Jul 2020 13:03:04 GMT',
  'etag',
  'W/"6e10216e1ac922f60100fcd077f6c626"',
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
  'c891a8f0f7f1fef0ef6a442079e3f977',
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
  'visid_incap_673446=wWOIh0TMQymiNbkqGz6kQIj+Dl8AAAAAQUIPAAAAAADNQ0HvECmISGEAuv7BvwAo; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=KbhlQJ3K60JnAoZNKsJtVwAAAAARPhWPU8gtImgpCC8xvFhX; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=gm5pNHELLh40DyxOOoVtA4j+Dl8AAAAAGLQ0gQGoSOdZtwZt9sxLvg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '13-37656461-37656468 NNYN CT(86 87 0) RT(1594818184398 30) q(0 0 2 -1) r(3 3) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .delete('/spaces/bohepdihyxin/environments/env-integration/tags/sampletag')
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
  'Wed, 15 Jul 2020 13:03:05 GMT',
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
  '100ec466d7e1a657fbd50ce48e1f3a33',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=G4FbljwqQj2Hz/pntuzJEIn+Dl8AAAAAQUIPAAAAAABJtQXMO0X0vAExhY54istQ; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=d39UTqjPGgdYAes7KsJtVwAAAAAU1rkVk9PPC2UQSgHX9YXt; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=WjL/Twn9LDGpDyxOOoVtA4n+Dl8AAAAAShLSSX4qM/yEzejHfd049A==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '7-13174144-13174146 NNNN CT(88 88 0) RT(1594818184807 29) q(0 0 2 -1) r(3 3) U5'
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
  "requestId": "fea5a7f4298604f1f1e4e62dcbfba3a8"
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
  'Wed, 15 Jul 2020 13:03:06 GMT',
  'etag',
  '"2679286926505558565"',
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
  'fea5a7f4298604f1f1e4e62dcbfba3a8',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=BWKeSA6yRv6XHmOonyi2ZYn+Dl8AAAAAQUIPAAAAAACXuJtTzT5aikDJmQzgprfi; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=iZOCWKCTnj75Ny/SKsJtVwAAAAA5GPsOg5QBxQA3OxfP1ksG; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=uptUWf9tOnE5ECxOOoVtA4n+Dl8AAAAAEQyFFQeDxXw2iRkq2Lr44g==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '4-16163701-16163704 NNYN CT(85 87 0) RT(1594818185429 30) q(0 0 2 -1) r(3 3) U5'
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
  'Wed, 15 Jul 2020 13:03:07 GMT',
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
  '0e047fb06f48618be659fd9b0ab3b264',
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
  'visid_incap_673446=Ur1u/LCNRgqvZtq6jmejnIv+Dl8AAAAAQUIPAAAAAAC8XEEnru1SWjWSLckEvK3E; expires=Wed, 14 Jul 2021 14:42:26 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=AEN1K3XfUwXubG9aKsJtVwAAAAD3XySpeGH9lwL2ZTk6s5TQ; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_247_673446=xOVTOA+sGEEMEixOOoVtA4v+Dl8AAAAA56AVISorSkat16OiPJdB4Q==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '13-37656770-37656774 NNNN CT(88 89 0) RT(1594818186055 32) q(0 0 2 -1) r(10 10) U5'
]);