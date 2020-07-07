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
  'Accept-Ranges',
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
  'Cache-Control',
  'max-age=0',
  'CF-Organization-Id',
  '3ubGFD1MWA6VgVYbIwSBg8',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:47:54 GMT',
  'ETag',
  'W/"9f8886bb475af980f12a1a32fbc74d55"',
  'Referrer-Policy',
  'strict-origin-when-cross-origin',
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
  '7ca70778e765b9a792ac4e0804ef1192',
  'X-Download-Options',
  'noopen',
  'X-Frame-Options',
  'ALLOWALL',
  'X-Permitted-Cross-Domain-Policies',
  'none',
  'X-XSS-Protection',
  '1; mode=block',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=IQHxKJo/RhSVz92sX/98NRmLBF8AAAAAQUIPAAAAAADwQU/C6J+foCS6NIK61S2r; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=FZwbLJ1Wswx1MBosYMlkBAAAAABNa6t01bknRQhgbOeK1JqE; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=E0iOChDVYXFGC4gDPWpmAxmLBF8AAAAANYFppoFRi+2rbR8ES4yERg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '7-9947327-9947333 NNYY CT(0 0 0) RT(1594133273428 33) q(0 0 0 -1) r(2 2) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration', {"name":"env-integration"})
  .reply(201, {"name":"env-integration","sys":{"type":"Environment","id":"env-integration","version":1,"space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"status":{"sys":{"type":"Link","linkType":"Status","id":"queued"}},"createdBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"createdAt":"2020-07-07T14:47:55Z","updatedBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"updatedAt":"2020-07-07T14:47:55Z"}}, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'max-age=0',
  'CF-Organization-Id',
  '3ubGFD1MWA6VgVYbIwSBg8',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:47:55 GMT',
  'ETag',
  'W/"505a7f87bbb4294849b9d8136840769a"',
  'Referrer-Policy',
  'strict-origin-when-cross-origin',
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
  '774304e98c31b94b16d68e0205305e54',
  'X-Download-Options',
  'noopen',
  'X-Frame-Options',
  'ALLOWALL',
  'X-Permitted-Cross-Domain-Policies',
  'none',
  'X-XSS-Protection',
  '1; mode=block',
  'Content-Length',
  '707',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=7mH7n5eiRB+QCrZpHudvMxqLBF8AAAAAQUIPAAAAAADgSkVwSEIbREFAHb61/0p0; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=mitiTepCTzv83lfMYMlkBAAAAAApTT75X/Rq7lg9nW2oL7d7; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=/katWf1dxXluDIgDPWpmAxqLBF8AAAAA+hauHMs7BlMwa8LJlM7niA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '3-7907442-7907444 NNNY CT(0 0 0) RT(1594133273794 33) q(0 0 0 -1) r(9 9) U5'
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
    "createdAt":"2020-07-07T14:47:55Z",
    "updatedBy":{
      "sys":{
        "type":"Link",
        "linkType":"User",
        "id":"1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "updatedAt":"2020-07-07T14:47:55Z"
  }
}

, [
  'Accept-Ranges',
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
  'Cache-Control',
  'max-age=0',
  'CF-Organization-Id',
  '3ubGFD1MWA6VgVYbIwSBg8',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:47:56 GMT',
  'ETag',
  'W/"0762554d2cc348587f0c01ac86364f67"',
  'Referrer-Policy',
  'strict-origin-when-cross-origin',
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
  '084355f6a30ad03dcad0ac837d7c4d9f',
  'X-Download-Options',
  'noopen',
  'X-Frame-Options',
  'ALLOWALL',
  'X-Permitted-Cross-Domain-Policies',
  'none',
  'X-XSS-Protection',
  '1; mode=block',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=xsZ53BMnQaGDf3/jSJyQzhuLBF8AAAAAQUIPAAAAAADSR+usc/md8b0I3V5V3ogN; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=O/BSANwtJjyXl+jEYMlkBAAAAACyjUKVZd5fsbuFB80ycn7H; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=f66eXLnc9FRMDYgDPWpmAxuLBF8AAAAAmDBiKPA+Fuoisc+Tmp76oQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '10-10023472-10023476 NNYY CT(0 0 0) RT(1594133274994 29) q(0 0 0 -1) r(7 7) U5'
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
  'CF-Environment-Id',
  'env-integration',
  'CF-Environment-Uuid',
  'env-integration',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:47:57 GMT',
  'ETag',
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
  '86fcebe908f7264855d59d0d6751c0fa',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=R2KxWif1SqeUb7MOdoCrDhyLBF8AAAAAQUIPAAAAAAAh0WPfhGeetlLbRppaCgpZ; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=27mxKyOy6BhtRHm6YMlkBAAAAAAMPHOS8MOByuioPN55qkSX; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=NtcsFlU0S1H3DYgDPWpmAxyLBF8AAAAAqNVNfQ5opUhKzB2vH2hHEw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '13-23766006-23766016 NNYN CT(108 89 0) RT(1594133275913 28) q(0 0 2 -1) r(5 5) U5'
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
        "createdAt":"2020-07-07T14:47:55Z",
        "updatedAt":"2020-07-07T14:47:55Z"
      }
    }
  ]
}

, [
  'Accept-Ranges',
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
  'Cache-Control',
  'max-age=0',
  'CF-Organization-Id',
  '3ubGFD1MWA6VgVYbIwSBg8',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:47:57 GMT',
  'ETag',
  'W/"96e0963a663b69679983632bbc95ae04"',
  'Referrer-Policy',
  'strict-origin-when-cross-origin',
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
  '50a1ee215b8983357f0a6d46229df6ad',
  'X-Download-Options',
  'noopen',
  'X-Frame-Options',
  'ALLOWALL',
  'X-Permitted-Cross-Domain-Policies',
  'none',
  'X-XSS-Protection',
  '1; mode=block',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=4RWfinj9SxaFhqlaBU4oUB2LBF8AAAAAQUIPAAAAAABeL2aabrOFw/q5Ysu6xdB8; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=IZ//JRQ2DkrrcwDEYMlkBAAAAAA6NC64Y8mL8xpabnt67zxn; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=cxPcbt7rgAvzDogDPWpmAx2LBF8AAAAARrSZrWm9K1bOz+hbTobjpA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '3-7907703-7907707 NNYY CT(0 0 0) RT(1594133276733 32) q(0 0 0 -1) r(7 7) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/dog', {"name":"angry dog","fields":[{"id":"woofs","name":"woof woof","type":"Number","required":true}],"description":"super angry"})
  .reply(201, {"sys":{"space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"id":"dog","type":"ContentType","createdAt":"2020-07-07T14:47:58.796Z","updatedAt":"2020-07-07T14:47:58.796Z","environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}},"createdBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"updatedBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"publishedCounter":0,"version":1},"displayField":null,"name":"angry dog","description":"super angry","fields":[{"id":"woofs","name":"woof woof","type":"Number","localized":false,"required":true,"validations":[],"disabled":false,"omitted":false}]}, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'CF-Environment-Id',
  'env-integration',
  'CF-Environment-Uuid',
  'env-integration',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:47:59 GMT',
  'ETag',
  '"12885753083641531642"',
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
  '382eefa324d4d0b1064f5167d971aa1a',
  'Content-Length',
  '1051',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=a0Y9RTpmRVmH30ua78echh6LBF8AAAAAQUIPAAAAAACn9//cnl0IWMR600+8FQuf; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=zREeR8I15RzroRwLYMlkBAAAAAB8BAkv28t6rXIPhx4YWEST; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=lUxRXxawzCNMEIgDPWpmAx6LBF8AAAAAPwtVGnndQrubaHFbTttDtw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '14-29665879-29665893 NNNY CT(0 0 0) RT(1594133277567 49) q(0 0 0 -1) r(9 9) U5'
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
    "createdAt": "2020-07-07T14:47:58.796Z",
    "updatedAt": "2020-07-07T14:47:59.995Z",
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
    "firstPublishedAt": "2020-07-07T14:47:59.995Z",
    "publishedAt": "2020-07-07T14:47:59.995Z",
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
  'CF-Environment-Id',
  'env-integration',
  'CF-Environment-Uuid',
  'env-integration',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:00 GMT',
  'ETag',
  'W/"11402434593036861755"',
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
  'f103eaac12cee1234e9552ffae362c39',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=/+UC9jctRa6UkmuBzcCheR+LBF8AAAAAQUIPAAAAAABBppA2F64gGsfvTeDBGfHr; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=5bU1BI+eoTH0OnZ8YMlkBAAAAAAbbPL6CZhubbWPBppO4Z7w; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=0sVfL9csvjSjEYgDPWpmAx+LBF8AAAAAyBuDS7RUPiywoo5vvqxWoA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '5-15467585-15467588 NNNN CT(119 183 0) RT(1594133278678 30) q(0 0 3 -1) r(9 9) U5'
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
    "createdAt": "2020-07-07T14:47:58.796Z",
    "updatedAt": "2020-07-07T14:47:59.995Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 1,
    "publishedAt": "2020-07-07T14:47:59.995Z",
    "firstPublishedAt": "2020-07-07T14:47:59.995Z",
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
  'CF-Environment-Id',
  'env-integration',
  'CF-Environment-Uuid',
  'env-integration',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:00 GMT',
  'ETag',
  'W/"14190664572482515730"',
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
  'b298c32fe2925d8b667f24433fa6f2e7',
  'Content-Length',
  '443',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=dl+Gih91T/aUxQ5KXoCmRSCLBF8AAAAAQUIPAAAAAADRoIrA+jhudiXMt7IBZnbZ; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=nLOPScrJ7leW3BovYMlkBAAAAABwwtzu6XMdzBkUihSgoBFj; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=UJw9AL46qShYEogDPWpmAyCLBF8AAAAAZEoNOcriBhAT0VpsEJ4JAw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '14-29666592-29666604 NNNY CT(0 0 0) RT(1594133279797 30) q(0 0 0 -1) r(3 3) U5'
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
        "createdAt": "2020-07-07T14:47:58.796Z",
        "updatedAt": "2020-07-07T14:47:59.995Z",
        "environment": {
          "sys": {
            "id": "env-integration",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 1,
        "publishedAt": "2020-07-07T14:47:59.995Z",
        "firstPublishedAt": "2020-07-07T14:47:59.995Z",
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
  'CF-Environment-Id',
  'env-integration',
  'CF-Environment-Uuid',
  'env-integration',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:06 GMT',
  'ETag',
  'W/"5826917841942823937"',
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
  'e6d9e5bf3c476e84a5a05226fe993b79',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=A+gfM+laQr6axZSjyZi+myWLBF8AAAAAQUIPAAAAAAAIKd94nWrCtd+o47sPvyLr; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=5rNeIjXtfBaKZXEvYMlkBAAAAADQV/px4bhFSEAe/Bq3H6Tt; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=rmwoFPQ4twQwGYgDPWpmAyWLBF8AAAAAbe5o5iZF57sshSr5i/jEkA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '11-15007091-15007097 NNNY CT(0 0 0) RT(1594133285399 28) q(0 0 0 -1) r(1 1) U5'
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
        "createdAt":"2020-07-07T14:47:55Z",
        "updatedAt":"2020-07-07T14:47:55Z"
      }
    }
  ]
}

, [
  'Accept-Ranges',
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
  'Cache-Control',
  'max-age=0',
  'CF-Organization-Id',
  '3ubGFD1MWA6VgVYbIwSBg8',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:06 GMT',
  'ETag',
  'W/"96e0963a663b69679983632bbc95ae04"',
  'Referrer-Policy',
  'strict-origin-when-cross-origin',
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
  '58da1b65b1ff1c8be6568609f0c6db3f',
  'X-Download-Options',
  'noopen',
  'X-Frame-Options',
  'ALLOWALL',
  'X-Permitted-Cross-Domain-Policies',
  'none',
  'X-XSS-Protection',
  '1; mode=block',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=edH+CzYAR7edBNN39hFMJyaLBF8AAAAAQUIPAAAAAABmeVlgbLcn4DXgAFOz8ThG; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=yX3qF6ZCOSl4Ebc7YMlkBAAAAADcvAFCfCW4+nfLQcbCDOkl; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=dcI0H6NVcXknGogDPWpmAyaLBF8AAAAA3KlgVRrdAdoVQBVW9G8jPA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '14-29668276-29668295 NNYY CT(0 0 0) RT(1594133285737 34) q(0 0 0 -1) r(7 7) U5'
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
    "createdAt": "2020-07-07T14:47:58.796Z",
    "updatedAt": "2020-07-07T14:48:07.313Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 1,
    "publishedAt": "2020-07-07T14:47:59.995Z",
    "firstPublishedAt": "2020-07-07T14:47:59.995Z",
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
  'CF-Environment-Id',
  'env-integration',
  'CF-Environment-Uuid',
  'env-integration',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:07 GMT',
  'ETag',
  'W/"375510933161695687"',
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
  'de550fee8976a1dc4dbd61611105d48b',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=QzktwYgCQhCZLLyMnolDiyaLBF8AAAAAQUIPAAAAAACB792U0AdfhIXzb8aSQw7f; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=vErKYLVUaQE1yl21YMlkBAAAAAAFmsaNh8llaMsXqsJBQmSq; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=wL8OaYBU3xyFGogDPWpmAyaLBF8AAAAAlwpHA22XWByLjpM3LIoITQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '6-5057130-5057137 NNNY CT(0 0 0) RT(1594133286567 32) q(0 1 1 -1) r(3 3) U5'
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
    "createdAt": "2020-07-07T14:47:58.796Z",
    "updatedAt": "2020-07-07T14:48:07.687Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 3,
    "publishedAt": "2020-07-07T14:48:07.687Z",
    "firstPublishedAt": "2020-07-07T14:47:59.995Z",
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
  'CF-Environment-Id',
  'env-integration',
  'CF-Environment-Uuid',
  'env-integration',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:07 GMT',
  'ETag',
  'W/"12218847386282655590"',
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
  'd39a69418198136abdef86bde98dccea',
  'Content-Length',
  '457',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=l8Q1nLi+RKaZN7Ku6wRtPieLBF8AAAAAQUIPAAAAAAC5IrrBnbfltA3xHZ5lP7J/; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=aaOaE9csWU2oNmH4YMlkBAAAAAA2DLghU9WEUXgu0z3cHyqv; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=44euN1Pb9gUFG4gDPWpmAyeLBF8AAAAAOAMdAPAGkKL5KTBcWifBLw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '12-19954324-19954338 NNNY CT(0 0 0) RT(1594133286965 32) q(0 0 0 -1) r(3 3) U5'
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
    "createdAt": "2020-07-07T14:47:58.796Z",
    "updatedAt": "2020-07-07T14:48:08.291Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 3,
    "publishedAt": "2020-07-07T14:48:07.687Z",
    "firstPublishedAt": "2020-07-07T14:47:59.995Z",
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
  'CF-Environment-Id',
  'env-integration',
  'CF-Environment-Uuid',
  'env-integration',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:08 GMT',
  'ETag',
  'W/"8397170952605519949"',
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
  '259716a68b5f98b7f7959955a26fdfa7',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=7CFgcpdjTX2q95XNu73YKieLBF8AAAAAQUIPAAAAAACnse01N3YBj7qRvGey+8Me; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=IM7DL0fP4Eh7tSCoYMlkBAAAAABiZezTgw+op+DLOh/8hadL; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=b4wgXk7CSFSnG4gDPWpmAyeLBF8AAAAAv0c7d0GQR15zx5a2yknHow==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '13-23768624-23768627 NNNN CT(93 98 0) RT(1594133287316 29) q(0 0 2 -1) r(4 4) U5'
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
    "createdAt": "2020-07-07T14:47:58.796Z",
    "updatedAt": "2020-07-07T14:48:08.622Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 5,
    "publishedAt": "2020-07-07T14:48:08.622Z",
    "firstPublishedAt": "2020-07-07T14:47:59.995Z",
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
  'CF-Environment-Id',
  'env-integration',
  'CF-Environment-Uuid',
  'env-integration',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:08 GMT',
  'ETag',
  'W/"8462841141743554830"',
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
  '3daf9c8ac04c13a5b427b8b0a8e95c73',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=SnOJHWKBQDqDKvhnz8+gviiLBF8AAAAAQUIPAAAAAABduc7WjvRf5U8UAziqTkN5; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=HZ6cfLkJWRNvSY5dYMlkBAAAAACYS1mzw2uKEgbQWYH6DXsN; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=LoKAPIRA2WRcHIgDPWpmAyiLBF8AAAAAOo+hK34RKFMobETUIuuiSQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '14-29668930-29668952 NNNY CT(0 0 0) RT(1594133287886 36) q(0 0 0 -1) r(3 3) U5'
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
    "createdAt": "2020-07-07T14:47:58.796Z",
    "updatedAt": "2020-07-07T14:48:08.622Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 5,
    "publishedAt": "2020-07-07T14:48:08.622Z",
    "firstPublishedAt": "2020-07-07T14:47:59.995Z",
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
  'CF-Environment-Id',
  'env-integration',
  'CF-Environment-Uuid',
  'env-integration',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:09 GMT',
  'ETag',
  'W/"8462841141743554830"',
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
  '1b1ff236846c522cff7e9e9b903c75f3',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=70Ww29fRRVG+3DspWskSLCiLBF8AAAAAQUIPAAAAAADlevSuPhRdUCS9/PnbhsWp; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=GpIKcn0Vv3SxoC7RYMlkBAAAAACSm+xIH90ftbFgzJp2Ww8N; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=dR5+dm9/Sm3XHIgDPWpmAyiLBF8AAAAA6d/uu928TKdyCu+ZKJAPwA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '9-7917780-7917785 NNNY CT(0 0 0) RT(1594133288395 32) q(0 0 0 -1) r(1 1) U5'
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
        "createdAt": "2020-07-07T14:47:58.796Z",
        "updatedAt": "2020-07-07T14:48:08.622Z",
        "environment": {
          "sys": {
            "id": "env-integration",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 5,
        "publishedAt": "2020-07-07T14:48:08.622Z",
        "firstPublishedAt": "2020-07-07T14:47:59.995Z",
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
  'CF-Environment-Id',
  'env-integration',
  'CF-Environment-Uuid',
  'env-integration',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:09 GMT',
  'ETag',
  'W/"14329878987274718173"',
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
  'b95f26400cf28038b0513148289807b0',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=f8DG2+0NQRqjuEHUTduHpyiLBF8AAAAAQUIPAAAAAACbWj93LIu3W1Hpc01aDEdk; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=XH4oTxSlqU96OZzzYMlkBAAAAACZXFW3h6nAndq7Z8r8M3vV; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=djZiWi3YRAk3HYgDPWpmAyiLBF8AAAAAVwwNInxsXDjdU93BFkWiSA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '5-15469060-15469064 NNNY CT(0 0 0) RT(1594133288713 28) q(0 0 0 -1) r(1 1) U5'
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
        "createdAt":"2020-07-07T14:47:55Z",
        "updatedAt":"2020-07-07T14:47:55Z"
      }
    }
  ]
}

, [
  'Accept-Ranges',
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
  'Cache-Control',
  'max-age=0',
  'CF-Organization-Id',
  '3ubGFD1MWA6VgVYbIwSBg8',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:09 GMT',
  'ETag',
  'W/"96e0963a663b69679983632bbc95ae04"',
  'Referrer-Policy',
  'strict-origin-when-cross-origin',
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
  '34120a6d3335e7007c174d55e32c0a78',
  'X-Download-Options',
  'noopen',
  'X-Frame-Options',
  'ALLOWALL',
  'X-Permitted-Cross-Domain-Policies',
  'none',
  'X-XSS-Protection',
  '1; mode=block',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=7xSaQ1TdRg6sYjuKnecdCCmLBF8AAAAAQUIPAAAAAADXg3rlB4cq0TcijEtIpEqt; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=sKldecTiPBLT+aCQYMlkBAAAAABuGfJjSC4wVXLioto/AgUB; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=4RdGZ1i8hACCHYgDPWpmAymLBF8AAAAASWGje8EwJa7ncJn3NT+yKg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '13-23769072-23769080 NNYY CT(0 0 0) RT(1594133289019 33) q(0 0 0 -1) r(1 1) U5'
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
    "createdAt": "2020-07-07T14:47:58.796Z",
    "updatedAt": "2020-07-07T14:48:09.974Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 5,
    "publishedAt": "2020-07-07T14:48:08.622Z",
    "firstPublishedAt": "2020-07-07T14:47:59.995Z",
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
  'CF-Environment-Id',
  'env-integration',
  'CF-Environment-Uuid',
  'env-integration',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:10 GMT',
  'ETag',
  'W/"3092343423206653270"',
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
  'b6680d64aa08f0117cde343b67f43161',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=w5SRnNhzR2yGZG4/MqO1jSmLBF8AAAAAQUIPAAAAAAD5LNiaEs570No1B4MMhyL5; expires=Wed, 07 Jul 2021 11:06:41 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=WZFCZv9tDjcG8Wa3YMlkBAAAAAC+eSFhm40miWs+7LL+MlPG; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=N/HnK6aP70cGHogDPWpmAymLBF8AAAAARe6o8yCy3J4dFQ3wUdp3rw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '4-9751075-9751087 NNNY CT(0 0 0) RT(1594133289233 28) q(0 0 0 -1) r(2 2) U5'
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
    "createdAt": "2020-07-07T14:47:58.796Z",
    "updatedAt": "2020-07-07T14:48:10.359Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 7,
    "publishedAt": "2020-07-07T14:48:10.359Z",
    "firstPublishedAt": "2020-07-07T14:47:59.995Z",
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
  'CF-Environment-Id',
  'env-integration',
  'CF-Environment-Uuid',
  'env-integration',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:10 GMT',
  'ETag',
  'W/"12794206698362576411"',
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
  '408ae092a09743999654f3e2ba12f9c6',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=1QRLwqgwSaO5kkQLj5RPLCmLBF8AAAAAQUIPAAAAAACFBtPTmhNxyp2wGUDbRmdZ; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=Me5yZekOtwD3At9gYMlkBAAAAAAiZbhwbpDem+WYi7czqibE; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=nHe/dR6M7iKQHogDPWpmAymLBF8AAAAAfRk3519idetweYPuMaTfbg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '13-23769277-23769291 NNNY CT(0 0 0) RT(1594133289633 36) q(0 0 0 -1) r(3 3) U5'
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
    "createdAt": "2020-07-07T14:47:58.796Z",
    "updatedAt": "2020-07-07T14:48:10.359Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 7,
    "publishedAt": "2020-07-07T14:48:10.359Z",
    "firstPublishedAt": "2020-07-07T14:47:59.995Z",
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
  'CF-Environment-Id',
  'env-integration',
  'CF-Environment-Uuid',
  'env-integration',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:10 GMT',
  'ETag',
  'W/"12794206698362576411"',
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
  'f8fb8456024528f29438b47d23a99a72',
  'Content-Length',
  '495',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=bcAbHK2zQWGyPBajq2tlQyqLBF8AAAAAQUIPAAAAAACpRHi0d4FCI+JMRf0T5RrH; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=GlI+LVabCXtW2CybYMlkBAAAAADK6c502Bt+fRczQaIlqiZP; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=fwq5SjHR6HX2HogDPWpmAyqLBF8AAAAAIM2WBsbVEpGIrVJ7gB6ypA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '14-29669494-29669500 NNNY CT(0 0 0) RT(1594133290035 32) q(0 0 0 -1) r(2 2) U5'
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
        "createdAt": "2020-07-07T14:47:58.796Z",
        "updatedAt": "2020-07-07T14:48:10.359Z",
        "environment": {
          "sys": {
            "id": "env-integration",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 7,
        "publishedAt": "2020-07-07T14:48:10.359Z",
        "firstPublishedAt": "2020-07-07T14:47:59.995Z",
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
  'CF-Environment-Id',
  'env-integration',
  'CF-Environment-Uuid',
  'env-integration',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:11 GMT',
  'ETag',
  'W/"16022513718354885958"',
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
  '4d06372d724994acf66daeff1d5a98e5',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=/VmGWuF1Qy2W8KZM+3KbliqLBF8AAAAAQUIPAAAAAACiLL4BNvEBk7PM58RIEtzh; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=8JgXNoe2lA9s8yn5YMlkBAAAAABQ1O6dfy6bW1UCsyxenvYG; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=ScXoGqwmIyU9H4gDPWpmAyqLBF8AAAAALdutiPH4rO2nEi1vs2bOyg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '3-7908845-7908850 NNNY CT(0 0 0) RT(1594133290301 30) q(0 0 0 -1) r(1 1) U5'
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
    "createdAt": "2020-07-07T14:48:00.194Z",
    "createdBy": {
      "sys": {
        "id": "1Y7O5FbAkPYgNvD0MpQoAE",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2020-07-07T14:48:10.439Z",
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
  'CF-Environment-Id',
  'env-integration',
  'CF-Environment-Uuid',
  'env-integration',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:11 GMT',
  'ETag',
  '"5651328369849574918"',
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
  '45bae82529a51cbfea82299f565652a6',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=kwJjzejtQ9KWvakPtFO4viqLBF8AAAAAQUIPAAAAAABV3Cvay6CwNq6n1WC8wTB7; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=jKc9bAQiUxe8c/GcYMlkBAAAAAAgYUDi8o7ioQwK1wU6kQLC; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=XFRpPAzXsQuFH4gDPWpmAyqLBF8AAAAAkWzU3AcrsGSqfXm05tQt6Q==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '14-29669656-29669663 NNYY CT(0 0 0) RT(1594133290571 28) q(0 1 1 -1) r(2 2) U5'
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
        "createdAt":"2020-07-07T14:47:55Z",
        "updatedAt":"2020-07-07T14:47:55Z"
      }
    }
  ]
}

, [
  'Accept-Ranges',
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
  'Cache-Control',
  'max-age=0',
  'CF-Organization-Id',
  '3ubGFD1MWA6VgVYbIwSBg8',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:12 GMT',
  'ETag',
  'W/"96e0963a663b69679983632bbc95ae04"',
  'Referrer-Policy',
  'strict-origin-when-cross-origin',
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
  '4157196c55b60996cd1e6c3b8f818cb2',
  'X-Download-Options',
  'noopen',
  'X-Frame-Options',
  'ALLOWALL',
  'X-Permitted-Cross-Domain-Policies',
  'none',
  'X-XSS-Protection',
  '1; mode=block',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=ISXLUHynTlulVu+8dtvxwSuLBF8AAAAAQUIPAAAAAAD1sUQJH8XdMI3UN1wz6PTI; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=4iJuIKAvFVbiqJWhYMlkBAAAAABhvNAuc3LvaG+G7SHIrwvz; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=qO91EjY6aTZpIIgDPWpmAyuLBF8AAAAAi0hOR/Guzp8mGHOezdiNqw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '13-23769535-23769549 NNYY CT(0 0 0) RT(1594133290861 27) q(0 0 0 -1) r(7 7) U5'
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
    "createdAt": "2020-07-07T14:47:58.796Z",
    "updatedAt": "2020-07-07T14:48:12.442Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 7,
    "publishedAt": "2020-07-07T14:48:10.359Z",
    "firstPublishedAt": "2020-07-07T14:47:59.995Z",
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
  'CF-Environment-Id',
  'env-integration',
  'CF-Environment-Uuid',
  'env-integration',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:12 GMT',
  'ETag',
  'W/"6092359043957840034"',
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
  '2482caab926337ddfca552e5b2d5596c',
  'Content-Length',
  '505',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=dpxJ1jl3Q2KQNBpu2Yh1jiuLBF8AAAAAQUIPAAAAAAD0eHzVVJUTSyvq4jHNTVvL; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=vSu/dKxhohV8n/nRYMlkBAAAAACELQO4wJulPhfc6hNovZGB; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=J3LTGIaa+jbJIIgDPWpmAyuLBF8AAAAAAzdina74RJuM4ruvuis4nw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '13-23769693-23769701 NNNY CT(0 0 0) RT(1594133291689 36) q(0 0 0 -1) r(2 2) U5'
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
    "createdAt": "2020-07-07T14:47:58.796Z",
    "updatedAt": "2020-07-07T14:48:12.816Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 9,
    "publishedAt": "2020-07-07T14:48:12.816Z",
    "firstPublishedAt": "2020-07-07T14:47:59.995Z",
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
  'CF-Environment-Id',
  'env-integration',
  'CF-Environment-Uuid',
  'env-integration',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:12 GMT',
  'ETag',
  'W/"6391776725965570541"',
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
  '002ecfaf4b179579999215986dc17aab',
  'Content-Length',
  '500',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=Xu/U8xelSEyKNLOyq3YjrSyLBF8AAAAAQUIPAAAAAABunD8lFqm/twtxfmbqxX9E; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=h7lYCSeGYRAwO6L2YMlkBAAAAAC6jz1cZ2J9wUzljksz5r4A; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=yegHVrf5mTMvIYgDPWpmAyyLBF8AAAAAvszrtSwK43uZjGGe9YCMdA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '13-23769832-23769843 NNNY CT(0 0 0) RT(1594133292094 32) q(0 0 0 -1) r(2 2) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/dog/editor_interface', {"controls":[{"fieldId":"aDifferentId"}]})
  .reply(200, {"controls":[{"fieldId":"aDifferentId"}],"sys":{"id":"default","type":"EditorInterface","space":{"sys":{"id":"bohepdihyxin","type":"Link","linkType":"Space"}},"version":6,"createdAt":"2020-07-07T14:48:00.194Z","createdBy":{"sys":{"id":"1Y7O5FbAkPYgNvD0MpQoAE","type":"Link","linkType":"User"}},"updatedAt":"2020-07-07T14:48:13.579Z","updatedBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"contentType":{"sys":{"id":"dog","type":"Link","linkType":"ContentType"}},"environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}}}}, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'CF-Environment-Id',
  'env-integration',
  'CF-Environment-Uuid',
  'env-integration',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:13 GMT',
  'ETag',
  '"7969889164715354335"',
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
  '5585252afde87cd0ee30370448f80a92',
  'Content-Length',
  '922',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=hGm3TF4CQhOOw3/vPjGgay2LBF8AAAAAQUIPAAAAAAANYVGLPwyIymxyrsttaHP2; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=H4dQZu1esnax3nNmYMlkBAAAAACzE9i5swMxmxspgVVRE+7x; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=HrDMTRYSryb5IYgDPWpmAy2LBF8AAAAAZZKOZwflNNOLe7+K9YG84w==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '9-7918285-7918287 NNNN CT(93 93 0) RT(1594133292667 32) q(0 1 2 -1) r(4 4) U5'
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
    "createdAt": "2020-07-07T14:47:58.796Z",
    "updatedAt": "2020-07-07T14:48:13.875Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 9,
    "publishedAt": "2020-07-07T14:48:12.816Z",
    "firstPublishedAt": "2020-07-07T14:47:59.995Z",
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
  'CF-Environment-Id',
  'env-integration',
  'CF-Environment-Uuid',
  'env-integration',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:13 GMT',
  'ETag',
  'W/"7945205757236405359"',
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
  '688a7d8a73ba89b3539e6c5bef4cf3cb',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=mo21b/8GTPiMAq7feTLbky2LBF8AAAAAQUIPAAAAAADO+dlQs2SMHiEuiRfvCBs2; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=mNYrMRpm2Ekke+TNYMlkBAAAAAAKnss/MrzpG1TKdpzq+xWc; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=Gu0kOdSkoUpRIogDPWpmAy2LBF8AAAAAVKeKndTR7gxvSWt2fbBarQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '1-1583220-1583221 NNNY CT(0 0 0) RT(1594133293143 34) q(0 0 0 -1) r(2 2) U5'
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
    "createdAt": "2020-07-07T14:47:58.796Z",
    "updatedAt": "2020-07-07T14:48:14.358Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 11,
    "publishedAt": "2020-07-07T14:48:14.358Z",
    "firstPublishedAt": "2020-07-07T14:47:59.995Z",
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
  'CF-Environment-Id',
  'env-integration',
  'CF-Environment-Uuid',
  'env-integration',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:14 GMT',
  'ETag',
  'W/"12239403481553728596"',
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
  '747af4361cd7c3217b1643ec1f2ac5fa',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=36HRS8AzTci7f+wFatsVXi2LBF8AAAAAQUIPAAAAAAAx0jvBUf5TvZDn91/ksoRf; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=J8WkRXhI5jsT2FB2YMlkBAAAAAAs80xDJ228IO7/svJkxedW; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=x0NYa81U8XTYIogDPWpmAy2LBF8AAAAA9R/uv90QoYJlShzdX32K6Q==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '3-7909106-7909109 NNNN CT(87 88 0) RT(1594133293441 35) q(0 0 2 -1) r(5 5) U5'
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
    "createdAt": "2020-07-07T14:47:58.796Z",
    "updatedAt": "2020-07-07T14:48:14.358Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 11,
    "publishedAt": "2020-07-07T14:48:14.358Z",
    "firstPublishedAt": "2020-07-07T14:47:59.995Z",
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
  'CF-Environment-Id',
  'env-integration',
  'CF-Environment-Uuid',
  'env-integration',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:14 GMT',
  'ETag',
  'W/"12239403481553728596"',
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
  '2b263800b96deb5fa7421d7c67b14088',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=0KkMuTNrSOOyiJly8MfQRi6LBF8AAAAAQUIPAAAAAACleCgR/Ye/SzC2RcVi6q/O; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=/u/uUjEvTRcwwktwYMlkBAAAAAChqp71YwkKNVPXc+72f2b3; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=AxNQKbhimkJoI4gDPWpmAy6LBF8AAAAAENtmgdB5eaAjD3KI5B1P4Q==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '14-29670652-29670659 NNNY CT(0 0 0) RT(1594133294133 26) q(0 0 0 -1) r(3 3) U5'
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
        "createdAt": "2020-07-07T14:47:58.796Z",
        "updatedAt": "2020-07-07T14:48:14.358Z",
        "environment": {
          "sys": {
            "id": "env-integration",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 11,
        "publishedAt": "2020-07-07T14:48:14.358Z",
        "firstPublishedAt": "2020-07-07T14:47:59.995Z",
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
  'CF-Environment-Id',
  'env-integration',
  'CF-Environment-Uuid',
  'env-integration',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:15 GMT',
  'ETag',
  'W/"16230030495469160733"',
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
  '750e007749e35c83de26cf14e81cb448',
  'Content-Length',
  '558',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=6Aj24Wo5SNWInK7yM/klQS6LBF8AAAAAQUIPAAAAAABVthfcvIb1uTLP4DHvR06+; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=n/8yDr1OQhH220BpYMlkBAAAAABfP4Gi8aYFz4EPwUa+si2w; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=xOPpV9/MRxC3I4gDPWpmAy6LBF8AAAAAWfrogbLthaEf93/L6a7XBQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '12-19956055-19956069 NNNY CT(0 0 0) RT(1594133294539 33) q(0 0 0 -1) r(2 2) U5'
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
  'CF-Environment-Id',
  'env-integration',
  'CF-Environment-Uuid',
  'env-integration',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:15 GMT',
  'ETag',
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
  '4367ff2758e0ecf52bf3457c72aba076',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=DDvgiMSIRfmPM++nWS0/RS+LBF8AAAAAQUIPAAAAAAAOstVY4L+Av+IwuNnjC14e; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=QKY/WkXQTj/ew25oYMlkBAAAAABXNTEvFquBEtF/2dI3dcON; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=j+MIerMMOyosJIgDPWpmAy+LBF8AAAAAESSuQfY2Fof5yxoW5dxFSg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '12-19956123-19956129 NNYY CT(0 0 0) RT(1594133294857 34) q(0 0 0 -1) r(2 2) U5'
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
        "createdAt":"2020-07-07T14:47:55Z",
        "updatedAt":"2020-07-07T14:47:55Z"
      }
    }
  ]
}

, [
  'Accept-Ranges',
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
  'Cache-Control',
  'max-age=0',
  'CF-Organization-Id',
  '3ubGFD1MWA6VgVYbIwSBg8',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:16 GMT',
  'ETag',
  'W/"96e0963a663b69679983632bbc95ae04"',
  'Referrer-Policy',
  'strict-origin-when-cross-origin',
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
  '5817330bcd9b5341152630c0f566f6ab',
  'X-Download-Options',
  'noopen',
  'X-Frame-Options',
  'ALLOWALL',
  'X-Permitted-Cross-Domain-Policies',
  'none',
  'X-XSS-Protection',
  '1; mode=block',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=bR74k1azRryxu1Y9xo551zGLBF8AAAAAQUIPAAAAAAAXqr+DEMTPCqnG1z0CqCzU; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=+0svD2jzpSPdBr4kYMlkBAAAAADgxdY33xfSx8KiE3sWexLg; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=JMT+QENVsD2BJogDPWpmAzGLBF8AAAAAPBsJdX//MgTzC50jqbtRxQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '7-9949533-9949536 NNYY CT(0 0 0) RT(1594133295359 30) q(0 0 0 -1) r(18 18) U5'
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
    "createdAt": "2020-07-07T14:47:58.796Z",
    "updatedAt": "2020-07-07T14:48:17.954Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "firstPublishedAt": "2020-07-07T14:47:59.995Z",
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
  'CF-Environment-Id',
  'env-integration',
  'CF-Environment-Uuid',
  'env-integration',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:18 GMT',
  'ETag',
  'W/"7460324335119724093"',
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
  '77834e98846f799499ec79906a39d0bb',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=Vrnj2+alQj+yGtGUKNqPhzGLBF8AAAAAQUIPAAAAAACjibvy4ilzcRLvFhmHY6wF; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=6hqQNH38xg2Mn08+YMlkBAAAAADRewdh7wwbCec1L6LpZfBw; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=jt02UVB2R3H+JogDPWpmAzGLBF8AAAAAiWTIKclpmoARXYKJGs41jA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '7-9949600-9949607 NNNY CT(0 0 0) RT(1594133297201 34) q(0 0 0 -1) r(2 2) U5'
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
  'CF-Environment-Id',
  'env-integration',
  'CF-Environment-Uuid',
  'env-integration',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:18 GMT',
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
  'd9d57a0eeeafb64519985dd4c5a540d2',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=o6H4o+KERPmQ7D72uDQM6TGLBF8AAAAAQUIPAAAAAAADMGZguVPT5UzQQya1kaGl; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=7xHhHnrwHlIPZg7wYMlkBAAAAADLA6MEyStblhkMihW77Tdf; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=K5PKGiTjPVhgJ4gDPWpmAzGLBF8AAAAACMilVMLNBFFVQiGjnqb0vw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '13-23771208-23771222 NNNY CT(0 0 0) RT(1594133297621 27) q(0 0 0 -1) r(3 3) U5'
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
  "requestId": "23566fbad7538fe04c70eda6c9373566"
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
  'CF-Environment-Id',
  'env-integration',
  'CF-Environment-Uuid',
  'env-integration',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:18 GMT',
  'ETag',
  '"2655770966283765394"',
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
  '23566fbad7538fe04c70eda6c9373566',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=P3P1li3EQLqWrzcKW+7apzKLBF8AAAAAQUIPAAAAAACnOC6HXM3AZ8OevO3NhFUB; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=EieTYFmP9SlYrLn/YMlkBAAAAACbAQVknfe4poaua+IdRSff; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=XgOMCuXSOTa6J4gDPWpmAzKLBF8AAAAAV4ZeMxN6vuACN8ZDXiwqnA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '13-23771308-23771318 NNYY CT(0 0 0) RT(1594133298017 27) q(0 0 0 -1) r(1 1) U5'
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
  'CF-Environment-Id',
  'env-integration',
  'CF-Environment-Uuid',
  'env-integration',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:19 GMT',
  'ETag',
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
  '603996a5f5f1e4194dfbcb407c8938cd',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=WEBEYdcQSm6eYtEy70zyOzKLBF8AAAAAQUIPAAAAAADzl1SNxnPQd4oxcuqeJ7qD; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=9JC/csPdyXofVcVTYMlkBAAAAADH0bOWvl+868KkTCS18CpC; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=0FOJF0e/vyVYKIgDPWpmAzKLBF8AAAAA+i49G9oIvw48LfSa9udX8A==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '13-23771437-23771450 NNYY CT(0 0 0) RT(1594133298543 26) q(0 0 0 -1) r(2 2) U5'
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
        "createdAt":"2020-07-07T14:47:55Z",
        "updatedAt":"2020-07-07T14:47:55Z"
      }
    }
  ]
}

, [
  'Accept-Ranges',
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
  'Cache-Control',
  'max-age=0',
  'CF-Organization-Id',
  '3ubGFD1MWA6VgVYbIwSBg8',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:19 GMT',
  'ETag',
  'W/"96e0963a663b69679983632bbc95ae04"',
  'Referrer-Policy',
  'strict-origin-when-cross-origin',
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
  'fe7c771cefb8814f001af3e5c2fabc88',
  'X-Download-Options',
  'noopen',
  'X-Frame-Options',
  'ALLOWALL',
  'X-Permitted-Cross-Domain-Policies',
  'none',
  'X-XSS-Protection',
  '1; mode=block',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=wen89DxRTtGkrKjtC0naZjKLBF8AAAAAQUIPAAAAAAAaHNaYZhTPk+97K9NMukKD; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=30chBmmHYh1r0PgQYMlkBAAAAAD/Xn/m0gQ2NLRdKrvS97eX; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=yZzGLj6R7hWjKIgDPWpmAzKLBF8AAAAAaFsginSVVKa8tOUd4D8hUg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '12-19957051-19957059 NNYY CT(0 0 0) RT(1594133298849 37) q(0 0 0 -1) r(1 1) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/dieatary-food', {"name":"Dieatary Food","fields":[{"id":"name","type":"Symbol","name":"name of the food","validations":[{"unique":true},{"prohibitRegexp":{"pattern":"foo","flags":null},"message":"asdf"}]},{"id":"calories","type":"Link","linkType":"Asset","name":"amount of calories the food contains","validations":[{"assetImageDimensions":{"width":{"min":1199,"max":null},"height":{"min":1343}}}]}],"description":"Food with up to 500 calories"})
  .reply(201, {"sys":{"space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"id":"dieatary-food","type":"ContentType","createdAt":"2020-07-07T14:48:19.911Z","updatedAt":"2020-07-07T14:48:19.911Z","environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}},"createdBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"updatedBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"publishedCounter":0,"version":1},"displayField":null,"name":"Dieatary Food","description":"Food with up to 500 calories","fields":[{"id":"name","name":"name of the food","type":"Symbol","localized":false,"required":false,"validations":[{"unique":true},{"prohibitRegexp":{"pattern":"foo","flags":null},"message":"asdf"}],"disabled":false,"omitted":false},{"id":"calories","name":"amount of calories the food contains","type":"Link","localized":false,"required":false,"validations":[{"assetImageDimensions":{"width":{"min":1199,"max":null},"height":{"min":1343}}}],"disabled":false,"omitted":false,"linkType":"Asset"}]}, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'CF-Environment-Id',
  'env-integration',
  'CF-Environment-Uuid',
  'env-integration',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:19 GMT',
  'ETag',
  '"11466772541416763577"',
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
  'd8f7c513aea334f948894e2cf17af274',
  'Content-Length',
  '1783',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=plbNJakFRbiEPi+s+1REOjOLBF8AAAAAQUIPAAAAAAClyO0YhEX+/cdEVXsd1Tv9; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=D1+0Ds6WHUlNqBsaYMlkBAAAAAC3dcxh9DV8zqvlK5S7Mplu; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=1mf3d5AAKDEZKYgDPWpmAzOLBF8AAAAAk6FDLzlb/xrzqqFw8peIUQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '10-10026599-10026601 NNNY CT(0 0 0) RT(1594133299065 34) q(0 1 1 -1) r(4 4) U5'
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
    "createdAt": "2020-07-07T14:48:19.911Z",
    "updatedAt": "2020-07-07T14:48:20.542Z",
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
    "firstPublishedAt": "2020-07-07T14:48:20.542Z",
    "publishedAt": "2020-07-07T14:48:20.542Z",
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
  'CF-Environment-Id',
  'env-integration',
  'CF-Environment-Uuid',
  'env-integration',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:20 GMT',
  'ETag',
  'W/"14187699071978417102"',
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
  '6c38192afca10eda8be30b6b91f808e0',
  'Content-Length',
  '654',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=L3U9HfsYROmb/wVJVygtRzSLBF8AAAAAQUIPAAAAAABW4WKHuA/kFPGegZXnuZ2m; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=t9gvck+UM06KhIiBYMlkBAAAAADThxukNm8E7dotWPRZBWIE; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=HZbYUEHO4RzgKYgDPWpmAzSLBF8AAAAACGBn4tdaUAKgXJZ1wvtsmw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '13-23771733-23771750 NNNN CT(89 90 0) RT(1594133299653 32) q(0 0 2 -1) r(4 4) U5'
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
    "createdAt": "2020-07-07T14:48:19.911Z",
    "updatedAt": "2020-07-07T14:48:20.542Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 1,
    "publishedAt": "2020-07-07T14:48:20.542Z",
    "firstPublishedAt": "2020-07-07T14:48:20.542Z",
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
  'CF-Environment-Id',
  'env-integration',
  'CF-Environment-Uuid',
  'env-integration',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:21 GMT',
  'ETag',
  'W/"2302342854465975660"',
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
  '7351e264a1379579597e560844268159',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=CgXUdBDPSCmjg9FMnYjTajSLBF8AAAAAQUIPAAAAAAASAHh/1a7eC+kzSeha4Fii; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=dVvkLF6ahW9YGaWgYMlkBAAAAABfN2ChzbWnmQsdjDPDhFSc; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=0Z52TCrZY0NEKogDPWpmAzSLBF8AAAAAwHGUzf6QX2+YzPcbZhUusA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '10-10026709-10026713 NNNY CT(0 0 0) RT(1594133300281 28) q(0 0 0 -1) r(1 1) U5'
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
  'CF-Environment-Id',
  'env-integration',
  'CF-Environment-Uuid',
  'env-integration',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:21 GMT',
  'ETag',
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
  '0c893d9733c48df77eb5866d34de5a98',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=Hsp21dLeTEqEhkjTQfBXQTSLBF8AAAAAQUIPAAAAAABt3lyJ/hIiJteJJ+tKqbIp; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=yIrfBuCZCAI5lfX7YMlkBAAAAACeWRM7fhCv7r03eD6A3q42; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=QmaSUCtU9AmLKogDPWpmAzSLBF8AAAAALIMjftfPM0M9GE6hmP7YNg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '9-7918812-7918813 NNYY CT(0 0 0) RT(1594133300553 32) q(0 0 0 -1) r(2 2) U5'
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
        "createdAt":"2020-07-07T14:47:55Z",
        "updatedAt":"2020-07-07T14:47:55Z"
      }
    }
  ]
}

, [
  'Accept-Ranges',
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
  'Cache-Control',
  'max-age=0',
  'CF-Organization-Id',
  '3ubGFD1MWA6VgVYbIwSBg8',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:21 GMT',
  'ETag',
  'W/"96e0963a663b69679983632bbc95ae04"',
  'Referrer-Policy',
  'strict-origin-when-cross-origin',
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
  'df6ee628eb9da88d03d652682c9b945e',
  'X-Download-Options',
  'noopen',
  'X-Frame-Options',
  'ALLOWALL',
  'X-Permitted-Cross-Domain-Policies',
  'none',
  'X-XSS-Protection',
  '1; mode=block',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=YRzFl2I5TzO66ggQICszuDWLBF8AAAAAQUIPAAAAAAAsSBUvlwEjIFf1NnIFXWtz; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=cHdCB4R/tB/DGoqvYMlkBAAAAAAmkbh3LqHy1DnaNYp8sZH0; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=w7e9E3lEDlvVKogDPWpmAzWLBF8AAAAAlOC1IZeJqeVS7LxrjjP3PQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '12-19957667-19957681 NNYY CT(0 0 0) RT(1594133300887 36) q(0 0 0 -1) r(1 1) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/food', {"name":"foooood","displayField":"taste","fields":[{"id":"taste","type":"Symbol","name":"what it tastes like"}],"description":" well, food"})
  .reply(201, {"sys":{"space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"id":"food","type":"ContentType","createdAt":"2020-07-07T14:48:21.991Z","updatedAt":"2020-07-07T14:48:21.991Z","environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}},"createdBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"updatedBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"publishedCounter":0,"version":1},"displayField":"taste","name":"foooood","description":" well, food","fields":[{"id":"taste","name":"what it tastes like","type":"Symbol","localized":false,"required":false,"validations":[],"disabled":false,"omitted":false}]}, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'CF-Environment-Id',
  'env-integration',
  'CF-Environment-Uuid',
  'env-integration',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:22 GMT',
  'ETag',
  '"4962361659163125863"',
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
  'cec48461d5b15e34bebe5899d05da476',
  'Content-Length',
  '1064',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=T1Ri14tUSmOIslLdFIUQ2zWLBF8AAAAAQUIPAAAAAABmBlXlN1TeCawoo5kC2wDn; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=XrabQ5ymsgcDA3DWYMlkBAAAAADl4UnYJaXrlRwsJyFN7eAM; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=F/HyVLPAqyJcK4gDPWpmAzWLBF8AAAAAjnN1A6AVCZpl00zyPyGWaQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '13-23772098-23772103 NNNY CT(0 0 0) RT(1594133301104 37) q(0 0 0 -1) r(4 4) U5'
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
    "createdAt": "2020-07-07T14:48:21.991Z",
    "updatedAt": "2020-07-07T14:48:22.655Z",
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
    "firstPublishedAt": "2020-07-07T14:48:22.655Z",
    "publishedAt": "2020-07-07T14:48:22.655Z",
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
  'CF-Environment-Id',
  'env-integration',
  'CF-Environment-Uuid',
  'env-integration',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:22 GMT',
  'ETag',
  'W/"8495783866381609836"',
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
  'adc01a316dee5f1fa0837421ea766c57',
  'Content-Length',
  '447',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=gKbJeXr7St6GqS03kvrcljaLBF8AAAAAQUIPAAAAAADH3gKN0sNbabDrA3phE85J; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=GPhiKPXcjCj2Un+NYMlkBAAAAADFRi7EjQ7Fg3JOQ6mUwih+; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=gPxmO1Sdr0UpLIgDPWpmAzaLBF8AAAAAvQ9nHnysksCumHoSGRZ6Yg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '12-19957924-19957929 NNNN CT(99 94 0) RT(1594133301716 35) q(0 0 2 -1) r(5 5) U5'
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
        "createdAt": "2020-07-07T14:48:21.991Z",
        "updatedAt": "2020-07-07T14:48:22.655Z",
        "environment": {
          "sys": {
            "id": "env-integration",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 1,
        "publishedAt": "2020-07-07T14:48:22.655Z",
        "firstPublishedAt": "2020-07-07T14:48:22.655Z",
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
  'CF-Environment-Id',
  'env-integration',
  'CF-Environment-Uuid',
  'env-integration',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:23 GMT',
  'ETag',
  'W/"3904264837328589042"',
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
  'ee5ae0305d92aef644c766cd213b2e7a',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=Gw9iViTeTaGxEXhK0Vt+YTaLBF8AAAAAQUIPAAAAAAA4n9hk+hagU9ny0Cp4nXfe; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=ChEkC5OkN0xoN0FhYMlkBAAAAACXyF7ptLqNKN0L6DMq31Lc; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=ttOEN7Ug/G2gLIgDPWpmAzaLBF8AAAAAQc2tPYBWz7/xPdsVWlaKxw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '14-29672911-29672919 NNNY CT(0 0 0) RT(1594133302553 24) q(0 0 0 -1) r(2 2) U5'
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
        "createdAt":"2020-07-07T14:47:55Z",
        "updatedAt":"2020-07-07T14:47:55Z"
      }
    }
  ]
}

, [
  'Accept-Ranges',
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
  'Cache-Control',
  'max-age=0',
  'CF-Organization-Id',
  '3ubGFD1MWA6VgVYbIwSBg8',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:23 GMT',
  'ETag',
  'W/"96e0963a663b69679983632bbc95ae04"',
  'Referrer-Policy',
  'strict-origin-when-cross-origin',
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
  '71e62c861d6418c64febb021458ea254',
  'X-Download-Options',
  'noopen',
  'X-Frame-Options',
  'ALLOWALL',
  'X-Permitted-Cross-Domain-Policies',
  'none',
  'X-XSS-Protection',
  '1; mode=block',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=m56PUDINTn2TkzedD9+vqTaLBF8AAAAAQUIPAAAAAADPIfXfLi5uZYa/nEluVAzC; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=ZcgUZ8c2UF+7qYkkYMlkBAAAAADRj3RWyXvOYR/Pby3mh3nQ; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=aWuBC1Fmb3vOLIgDPWpmAzaLBF8AAAAAqXvwtDHI5lrJZMTiS2L6vA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '5-15471456-15471461 NNYY CT(0 0 0) RT(1594133302817 26) q(0 0 0 -1) r(1 1) U5'
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
    "createdAt": "2020-07-07T14:48:21.991Z",
    "updatedAt": "2020-07-07T14:48:23.784Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 1,
    "publishedAt": "2020-07-07T14:48:22.655Z",
    "firstPublishedAt": "2020-07-07T14:48:22.655Z",
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
  'CF-Environment-Id',
  'env-integration',
  'CF-Environment-Uuid',
  'env-integration',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:23 GMT',
  'ETag',
  'W/"5884178339909049403"',
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
  '38a9181e4e165e4b790394e28b5b2faf',
  'Content-Length',
  '592',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=u5UwRPudToWi2ZeqnAMAYzeLBF8AAAAAQUIPAAAAAAAyvNFkOnrsrHNc+R7Z2iVC; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=jhdNYAu/BSMNBZXsYMlkBAAAAAAtU1XX/46uXi6SgKdbyf0m; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=3qyHDjid8XIbLYgDPWpmAzeLBF8AAAAAajZajWgbtYjVazzfDWgWCw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '5-15471490-15471500 NNNY CT(0 0 0) RT(1594133303023 37) q(0 0 0 -1) r(3 3) U5'
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
    "createdAt": "2020-07-07T14:48:21.991Z",
    "updatedAt": "2020-07-07T14:48:24.266Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 3,
    "publishedAt": "2020-07-07T14:48:24.266Z",
    "firstPublishedAt": "2020-07-07T14:48:22.655Z",
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
  'CF-Environment-Id',
  'env-integration',
  'CF-Environment-Uuid',
  'env-integration',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:24 GMT',
  'ETag',
  'W/"2027803170029089183"',
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
  'a51b9a98df1c949a43722573da90a7c0',
  'Content-Length',
  '597',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=H6s5K/PWRViFfhpZiO6O9jeLBF8AAAAAQUIPAAAAAAChFjm8eXU9eTf8HpzMRTJ1; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=FYQbOFHhhwWZlQH0YMlkBAAAAAC0HesaeAyZzf/paBGYHHEf; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=dNKUNYUcoHCaLYgDPWpmAzeLBF8AAAAAjCV5JnaKL2jFhaoKHXfv3A==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '13-23772680-23772696 NNNY CT(0 0 0) RT(1594133303549 30) q(0 0 0 -1) r(3 3) U5'
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
    "createdAt": "2020-07-07T14:48:21.991Z",
    "updatedAt": "2020-07-07T14:48:24.266Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 3,
    "publishedAt": "2020-07-07T14:48:24.266Z",
    "firstPublishedAt": "2020-07-07T14:48:22.655Z",
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
  'CF-Environment-Id',
  'env-integration',
  'CF-Environment-Uuid',
  'env-integration',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:24 GMT',
  'ETag',
  'W/"2027803170029089183"',
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
  'c6e138335f93ce3ceef4fcebe4f1b4f6',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=RhNqdr2KSK6aD1Nz/RCiGTiLBF8AAAAAQUIPAAAAAABE4rmlqjT4e2led7QJEN+i; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=mHoIW6hO6wCur/06YMlkBAAAAADYZu67e/p5q7XS9FF981uJ; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=Pp5RQOVPwT7vLYgDPWpmAziLBF8AAAAAhbylAFIaPoiW4fYNpWRqqA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '14-29673264-29673272 NNNY CT(0 0 0) RT(1594133303957 29) q(0 0 0 -1) r(2 2) U5'
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
  'CF-Environment-Id',
  'env-integration',
  'CF-Environment-Uuid',
  'env-integration',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:24 GMT',
  'ETag',
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
  '35997',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '7',
  'X-Contentful-Request-Id',
  'c2ac0d5169d152172482015a53e1f2f9',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=88We/H7ISja06oX76nCbAziLBF8AAAAAQUIPAAAAAACPV/0JNzOir0Bp9HiOoXN5; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=56WdailaRV4jHoJpYMlkBAAAAACxhsmC3zTXd9vwv3A259Tt; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=REOAMsGzjjxDLogDPWpmAziLBF8AAAAAT6pn5z2J+1s5cVSMJSdhMg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '13-23772882-23772890 NNYY CT(0 0 0) RT(1594133304245 26) q(0 0 0 -1) r(2 2) U5'
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
        "createdAt":"2020-07-07T14:47:55Z",
        "updatedAt":"2020-07-07T14:47:55Z"
      }
    }
  ]
}

, [
  'Accept-Ranges',
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
  'Cache-Control',
  'max-age=0',
  'CF-Organization-Id',
  '3ubGFD1MWA6VgVYbIwSBg8',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:25 GMT',
  'ETag',
  'W/"96e0963a663b69679983632bbc95ae04"',
  'Referrer-Policy',
  'strict-origin-when-cross-origin',
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
  '46a6d3abb539b588de2cf3c3577396d6',
  'X-Download-Options',
  'noopen',
  'X-Frame-Options',
  'ALLOWALL',
  'X-Permitted-Cross-Domain-Policies',
  'none',
  'X-XSS-Protection',
  '1; mode=block',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=ajsK62x9Tz6AYrCNrJUDRTiLBF8AAAAAQUIPAAAAAACtEPoltZQhdBgz4M8wf0uk; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=25hZTIeS/00aSoNqYMlkBAAAAABr6TkPXlEz4S0NvdE/lkQC; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=LxA8DgNEQ2KcLogDPWpmAziLBF8AAAAAkSTxa2ccQq14H2TrfHnAKQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '14-29673446-29673458 NNYY CT(0 0 0) RT(1594133304567 34) q(0 0 0 -1) r(1 1) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/person', {"name":"Person","fields":[{"id":"age","name":"Age","type":"Number","required":true},{"id":"fullName","name":"Full name","type":"Symbol","required":true,"localized":true}],"description":"A content type for a person"})
  .reply(201, {"sys":{"space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"id":"person","type":"ContentType","createdAt":"2020-07-07T14:48:25.758Z","updatedAt":"2020-07-07T14:48:25.758Z","environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}},"createdBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"updatedBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"publishedCounter":0,"version":1},"displayField":null,"name":"Person","description":"A content type for a person","fields":[{"id":"age","name":"Age","type":"Number","localized":false,"required":true,"validations":[],"disabled":false,"omitted":false},{"id":"fullName","name":"Full name","type":"Symbol","localized":true,"required":true,"validations":[],"disabled":false,"omitted":false}]}, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'CF-Environment-Id',
  'env-integration',
  'CF-Environment-Uuid',
  'env-integration',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:25 GMT',
  'ETag',
  '"8232555093152883035"',
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
  'e6a68414b1380643edc5b77077d6643e',
  'Content-Length',
  '1269',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=o98aEXTbSqCj4UkiUiGZXzmLBF8AAAAAQUIPAAAAAADVMFBBRajVSNHdDTIKqkOU; expires=Wed, 07 Jul 2021 11:06:41 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=MH/BYNsWh2WVYN8tYMlkBAAAAAA1crF+UkauCDn6lyFamOMR; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=bjtFXJdgrD5LL4gDPWpmAzmLBF8AAAAASlwjsDNbo0A3l9CLh790gA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '4-9752646-9752649 NNNY CT(0 0 0) RT(1594133304994 31) q(0 0 0 -1) r(2 2) U5'
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
    "createdAt": "2020-07-07T14:48:25.758Z",
    "updatedAt": "2020-07-07T14:48:26.099Z",
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
    "firstPublishedAt": "2020-07-07T14:48:26.099Z",
    "publishedAt": "2020-07-07T14:48:26.099Z",
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
  'CF-Environment-Id',
  'env-integration',
  'CF-Environment-Uuid',
  'env-integration',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:26 GMT',
  'ETag',
  'W/"17675974435194801284"',
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
  '48f538ef380c7a73845ea2653577dfc2',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=llOhKErkS0+jOgvlVgWfQDmLBF8AAAAAQUIPAAAAAAAm8WZTMFlVfIrxahUlr9bz; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=l+uLC1wXVUunuwHUYMlkBAAAAADiFwZ/UyGKlgfnM3Wl2kNh; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=ZjYzStLsgHK2L4gDPWpmAzmLBF8AAAAAm9J+h2X4a/1X130aln4bHA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '12-19958958-19958972 NNNY CT(0 0 0) RT(1594133305400 31) q(0 0 0 -1) r(2 2) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/animal', {"name":"Animal","fields":[{"id":"species","name":"The species of the animal","type":"Symbol","required":true},{"id":"isFurry","name":"Is this a furry animal","type":"Boolean","required":false}],"description":"An animal"})
  .reply(201, {"sys":{"space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"id":"animal","type":"ContentType","createdAt":"2020-07-07T14:48:26.570Z","updatedAt":"2020-07-07T14:48:26.570Z","environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}},"createdBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"updatedBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"publishedCounter":0,"version":1},"displayField":null,"name":"Animal","description":"An animal","fields":[{"id":"species","name":"The species of the animal","type":"Symbol","localized":false,"required":true,"validations":[],"disabled":false,"omitted":false},{"id":"isFurry","name":"Is this a furry animal","type":"Boolean","localized":false,"required":false,"validations":[],"disabled":false,"omitted":false}]}, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'CF-Environment-Id',
  'env-integration',
  'CF-Environment-Uuid',
  'env-integration',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:26 GMT',
  'ETag',
  '"8329646594005424212"',
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
  'aabc7c9f05d3db135273ffcef84a1e97',
  'Content-Length',
  '1292',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=tNT0NFkOQPOXjsjk59FO9zqLBF8AAAAAQUIPAAAAAACYkP9FG7DhCohVCkNUOIq0; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=UTskAWHMt1pr8MBJYMlkBAAAAABWsx0EpljveKp9VVFhY8vt; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=qxZuIuAKFw86MIgDPWpmAzqLBF8AAAAATq4xNSwRivcgrUBvC1AXOQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '12-19959033-19959043 NNNY CT(0 0 0) RT(1594133305806 39) q(0 0 0 -1) r(3 3) U5'
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
    "createdAt": "2020-07-07T14:48:26.570Z",
    "updatedAt": "2020-07-07T14:48:26.924Z",
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
    "firstPublishedAt": "2020-07-07T14:48:26.924Z",
    "publishedAt": "2020-07-07T14:48:26.924Z",
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
  'CF-Environment-Id',
  'env-integration',
  'CF-Environment-Uuid',
  'env-integration',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:27 GMT',
  'ETag',
  'W/"11462346948538056008"',
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
  '7cd8788deb2b1c80b9ec6c2cba36d00c',
  'Content-Length',
  '485',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=6QRud2BeQtuK6O6PEJCq0TqLBF8AAAAAQUIPAAAAAADPxq+NweC36Vs9TZKID3iW; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=zqcpRZQ1Ok7LF0YTYMlkBAAAAAAj7+8AORv60KwzjHBThJPn; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=Oe3mFXRSfjW1MIgDPWpmAzqLBF8AAAAAkLMMZedZ5RAv4VGBqxyOFQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '14-29673882-29673894 NNNY CT(0 0 0) RT(1594133306205 43) q(0 0 0 -1) r(2 2) U5'
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
    "createdAt": "2020-07-07T14:48:25.758Z",
    "updatedAt": "2020-07-07T14:48:27.400Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 1,
    "publishedAt": "2020-07-07T14:48:26.099Z",
    "firstPublishedAt": "2020-07-07T14:48:26.099Z",
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
  'CF-Environment-Id',
  'env-integration',
  'CF-Environment-Uuid',
  'env-integration',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:27 GMT',
  'ETag',
  'W/"6840595218250733441"',
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
  '64cf3d5d98d72c8913762b9af5869181',
  'Content-Length',
  '520',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=AX10r3YDQ4KycFQEGPSnGTqLBF8AAAAAQUIPAAAAAAA5YEcuBvEqLN39hriZv65k; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=1DNVXli+3jQ2Rz2CYMlkBAAAAADAYvS+R4eucGGeq3v5VzVI; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=mLc+HxHY7VcgMYgDPWpmAzqLBF8AAAAA9RWwtmyWdYptLhMWEM2uvg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '14-29673979-29673988 NNNY CT(0 0 0) RT(1594133306543 40) q(0 0 0 -1) r(4 4) U5'
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
    "createdAt": "2020-07-07T14:48:25.758Z",
    "updatedAt": "2020-07-07T14:48:27.763Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 3,
    "publishedAt": "2020-07-07T14:48:27.763Z",
    "firstPublishedAt": "2020-07-07T14:48:26.099Z",
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
  'CF-Environment-Id',
  'env-integration',
  'CF-Environment-Uuid',
  'env-integration',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:27 GMT',
  'ETag',
  'W/"16710093950957766646"',
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
  '5b5aff6fbf09a96711b18044c3cd6922',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=xtgERz1iQmms9p8/cmfRczuLBF8AAAAAQUIPAAAAAAAwqT1KctBLbq6mpIwAv8/t; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=tAGTNjuHxDhou3E7YMlkBAAAAAAlNU+oezcKGThOR2dwhi13; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=/bTwOqgNQxWKMYgDPWpmAzuLBF8AAAAA5B20320gv7vVty7lfm3E7g==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '1-1583504-1583506 NNNY CT(0 0 0) RT(1594133307033 28) q(0 0 0 -1) r(3 3) U5'
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
    "createdAt": "2020-07-07T14:48:26.570Z",
    "updatedAt": "2020-07-07T14:48:28.503Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 1,
    "publishedAt": "2020-07-07T14:48:26.924Z",
    "firstPublishedAt": "2020-07-07T14:48:26.924Z",
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
  'CF-Environment-Id',
  'env-integration',
  'CF-Environment-Uuid',
  'env-integration',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:28 GMT',
  'ETag',
  'W/"8767367034976120168"',
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
  'a5a1a60e61d9f5199e92b851f63253d9',
  'Content-Length',
  '510',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=YUnykG5fRgKwORaY/GakxDyLBF8AAAAAQUIPAAAAAAAF34MXl+1yilIXjmWZJcQa; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=SYnfM22ylSfqThOwYMlkBAAAAAA18fRI/qDpYMmZZn7hZMjz; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=xsu+c11maEDCMogDPWpmAzyLBF8AAAAA2b8DLB3l2gYHhKrpyUrQsw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '12-19959452-19959459 NNNN CT(93 91 0) RT(1594133307375 41) q(0 0 2 -1) r(6 6) U5'
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
    "createdAt": "2020-07-07T14:48:26.570Z",
    "updatedAt": "2020-07-07T14:48:29.155Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 3,
    "publishedAt": "2020-07-07T14:48:29.155Z",
    "firstPublishedAt": "2020-07-07T14:48:26.924Z",
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
  'CF-Environment-Id',
  'env-integration',
  'CF-Environment-Uuid',
  'env-integration',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:29 GMT',
  'ETag',
  'W/"10054106647362557008"',
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
  '914dcedc2ad1eec016e5090f7f3bd986',
  'Content-Length',
  '517',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=0LPG0E8IQoeoz6K4Dx1SrDyLBF8AAAAAQUIPAAAAAAAZVbn5Cp4Ndq35WJeBKkAi; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=2HaaaTzBHz8e41HNYMlkBAAAAABqsQrEhGuCKylxMdym2W/l; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=EzZ/RF9RxmLCM4gDPWpmAzyLBF8AAAAArizNn/yasD+MnjHZ+mpoHQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '9-7919412-7919416 NNNN CT(88 89 0) RT(1594133308267 30) q(0 0 2 -1) r(5 5) U5'
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
    "createdAt": "2020-07-07T14:48:25.758Z",
    "updatedAt": "2020-07-07T14:48:27.763Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 3,
    "publishedAt": "2020-07-07T14:48:27.763Z",
    "firstPublishedAt": "2020-07-07T14:48:26.099Z",
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
  'CF-Environment-Id',
  'env-integration',
  'CF-Environment-Uuid',
  'env-integration',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:29 GMT',
  'ETag',
  'W/"16710093950957766646"',
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
  'bd421427c2ddad4f6401bb832be1e8ad',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=NYOzPUCqQL+iCZNT9MKNNT2LBF8AAAAAQUIPAAAAAADGi65siaWMaVyi5bFSn+9w; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=TT+nPoKAQkjesjqHYMlkBAAAAAByGfuENgV9wBGNq6awz6b1; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=Olg6Fp9fy0NQNIgDPWpmAz2LBF8AAAAAsWKZDlx7H7hmT+GCP1YRTg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '14-29674732-29674743 NNNN CT(85 96 0) RT(1594133308797 32) q(0 0 2 -1) r(3 3) U5'
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
    "createdAt": "2020-07-07T14:48:26.570Z",
    "updatedAt": "2020-07-07T14:48:29.155Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 3,
    "publishedAt": "2020-07-07T14:48:29.155Z",
    "firstPublishedAt": "2020-07-07T14:48:26.924Z",
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
  'CF-Environment-Id',
  'env-integration',
  'CF-Environment-Uuid',
  'env-integration',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:30 GMT',
  'ETag',
  'W/"10054106647362557008"',
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
  '09a0ceb4b5daabe02474ed0d4bd17822',
  'Content-Length',
  '517',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=AOWL3GKySEiRlDOYkKBqdj2LBF8AAAAAQUIPAAAAAADIUrm3TA+uabTpBgf5d5a+; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=zlGXL0+lGTa2xcrQYMlkBAAAAACha4j99zFIJ7MV1nUgChE3; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=buEfXGA7s2QKNYgDPWpmAz2LBF8AAAAAgbDZVNNljB6h5elO3vp9xw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '11-15011324-15011335 NNNN CT(93 93 0) RT(1594133309286 25) q(0 0 1 -1) r(4 4) U5'
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
        "createdAt": "2020-07-07T14:48:25.758Z",
        "updatedAt": "2020-07-07T14:48:27.763Z",
        "environment": {
          "sys": {
            "id": "env-integration",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 3,
        "publishedAt": "2020-07-07T14:48:27.763Z",
        "firstPublishedAt": "2020-07-07T14:48:26.099Z",
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
  'CF-Environment-Id',
  'env-integration',
  'CF-Environment-Uuid',
  'env-integration',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:30 GMT',
  'ETag',
  'W/"16003721172528386404"',
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
  '81edea2362aab1872001e6c5c0771b2d',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=/Wm9bGA4QZS1tsZ/ePsLWj6LBF8AAAAAQUIPAAAAAAAK0iIkBkbHEZ/HiPc888jt; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=OTSuX2TdX1m0UptIYMlkBAAAAADyXtXap7FDu12vVF2ZA5oO; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=X3/Rc/bXfjp0NYgDPWpmAz6LBF8AAAAAQWE94hf/yKr+0MFd6iQZWw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '3-7910417-7910422 NNNY CT(0 0 0) RT(1594133309912 27) q(0 0 0 -1) r(1 1) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/blogpost', {"name":"blog post","fields":[{"name":"title","id":"title","type":"Symbol"},{"name":"category","id":"category","type":"Symbol"}]})
  .reply(201, {"sys":{"space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"id":"blogpost","type":"ContentType","createdAt":"2020-07-07T14:48:31.142Z","updatedAt":"2020-07-07T14:48:31.142Z","environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}},"createdBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"updatedBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"publishedCounter":0,"version":1},"displayField":null,"name":"blog post","description":null,"fields":[{"id":"title","name":"title","type":"Symbol","localized":false,"required":false,"validations":[],"disabled":false,"omitted":false},{"id":"category","name":"category","type":"Symbol","localized":false,"required":false,"validations":[],"disabled":false,"omitted":false}]}, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'CF-Environment-Id',
  'env-integration',
  'CF-Environment-Uuid',
  'env-integration',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:31 GMT',
  'ETag',
  '"11520263798163012743"',
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
  'dfaa515d8541455f642515a2213f6443',
  'Content-Length',
  '1255',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=yOWqpuMwTEelm3k2MIJrIj6LBF8AAAAAQUIPAAAAAABd3Z4j/bppTNqy14XeUvze; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=ugclQsQW5n6RqhEHYMlkBAAAAADqKGMy0D22WknEuobngGSo; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=Eq49bKvBxAYrNogDPWpmAz6LBF8AAAAAKyifV31NL6xU/bQP7X3Oww==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '11-15011501-15011509 NNNY CT(0 0 0) RT(1594133310220 34) q(0 0 0 -1) r(4 4) U5'
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
    "createdAt": "2020-07-07T14:48:31.142Z",
    "updatedAt": "2020-07-07T14:48:31.855Z",
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
    "firstPublishedAt": "2020-07-07T14:48:31.855Z",
    "publishedAt": "2020-07-07T14:48:31.855Z",
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
  'CF-Environment-Id',
  'env-integration',
  'CF-Environment-Uuid',
  'env-integration',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:31 GMT',
  'ETag',
  'W/"1932291513288722444"',
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
  'aa1df67b7bae41c4d2e69b6ab3f85da6',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=/FSjlxOvSkiu1Ic49Wps7D+LBF8AAAAAQUIPAAAAAAB2tYtiuHtBwcEChtgcLd9p; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=vnH1Z8k6EFkwyc9lYMlkBAAAAACzRfFuLO01atajp/1fhGE1; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=9olAfVXyH3rtNogDPWpmAz+LBF8AAAAA4ebuobfMVHSFt64hVaaX0w==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '13-23774463-23774474 NNNN CT(86 87 0) RT(1594133310820 35) q(0 0 2 -1) r(5 5) U5'
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
    "id": "2chdRueDfNMEXjo8HV83Yh",
    "type": "Entry",
    "createdAt": "2020-07-07T14:48:32.385Z",
    "updatedAt": "2020-07-07T14:48:32.385Z",
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
  'CF-Environment-Id',
  'env-integration',
  'CF-Environment-Uuid',
  'env-integration',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:32 GMT',
  'ETag',
  '"5344650216818124520"',
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
  'ae1f16e3e31da8c8a6e87387df9b7f89',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=ZjUuwUkKSliUC0GI/Za5Kz+LBF8AAAAAQUIPAAAAAACb3kh++cRB/BH+BDIcMTAI; expires=Wed, 07 Jul 2021 11:06:41 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=qK0NKIFcA1sKsGvVYMlkBAAAAAAomoPpV333pPaX52+f4dc8; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=a9twWK7lUjm1N4gDPWpmAz+LBF8AAAAAS3NluiTXmGegBaWXf1va6Q==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '4-9753448-9753453 NNYY CT(0 0 0) RT(1594133311483 31) q(0 0 0 -1) r(4 4) U5'
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
    "id": "3f6vhFLPnoZdedMCAF2OFq",
    "type": "Entry",
    "createdAt": "2020-07-07T14:48:32.931Z",
    "updatedAt": "2020-07-07T14:48:32.931Z",
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
  'CF-Environment-Id',
  'env-integration',
  'CF-Environment-Uuid',
  'env-integration',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:33 GMT',
  'ETag',
  '"18371860141799934647"',
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
  'b081429a65d155024e2db80bb41aad6c',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=G9we8BK2QGmv71OMawLeP0CLBF8AAAAAQUIPAAAAAADwBZpu0QU8uENc4dz5cDtY; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=ScGyJldMHjpH7PPYYMlkBAAAAACVojyJkHh0bz7dBxIdBBKt; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=zVsWN6+tDWGKOIgDPWpmA0CLBF8AAAAACluDtBSCykS+JBJx7uVb4g==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '12-19960477-19960496 NNYY CT(0 0 0) RT(1594133312053 33) q(0 0 0 -1) r(4 4) U5'
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
        "createdAt": "2020-07-07T14:48:31.142Z",
        "updatedAt": "2020-07-07T14:48:31.855Z",
        "environment": {
          "sys": {
            "id": "env-integration",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 1,
        "publishedAt": "2020-07-07T14:48:31.855Z",
        "firstPublishedAt": "2020-07-07T14:48:31.855Z",
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
  'CF-Environment-Id',
  'env-integration',
  'CF-Environment-Uuid',
  'env-integration',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:33 GMT',
  'ETag',
  'W/"5829523060185692984"',
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
  'f77deff993cdbc90544c973fa178c005',
  'Content-Length',
  '512',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=hmQGiQ6WS2Cbw8EqeCE0U0CLBF8AAAAAQUIPAAAAAAAIboN9Jk6eJkcXspHvnxN7; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=9EQ9W277+3Zz3S47YMlkBAAAAAB80EYnE3Ga0NF0Mnn4/ftM; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=koTCMgwNRm4vOYgDPWpmA0CLBF8AAAAARg9AI/jrk1qlzsOFtg68zg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '11-15012029-15012033 NNNY CT(0 0 0) RT(1594133312773 29) q(0 0 0 -1) r(1 1) U5'
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
        "id": "2chdRueDfNMEXjo8HV83Yh",
        "type": "Entry",
        "createdAt": "2020-07-07T14:48:32.385Z",
        "updatedAt": "2020-07-07T14:48:32.385Z",
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
        "id": "3f6vhFLPnoZdedMCAF2OFq",
        "type": "Entry",
        "createdAt": "2020-07-07T14:48:32.931Z",
        "updatedAt": "2020-07-07T14:48:32.931Z",
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
  'CF-Environment-Id',
  'env-integration',
  'CF-Environment-Uuid',
  'env-integration',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:33 GMT',
  'ETag',
  'W/"18190048000968341892"',
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
  'd699d5dcf5f0b96db841a848ccb2e9c9',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=eP1VVHj6QaqfodIKw8bHFUGLBF8AAAAAQUIPAAAAAACsckU0kC4FjsGs9IZrlRkX; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=Rl2NRckoB0ZiT/NlYMlkBAAAAAC2zkwUZsMNLq3gsQPqgXGz; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=ru3SZUa3CGCBOYgDPWpmA0GLBF8AAAAAdMfzpELGLv21Hh9YCHQpqA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '7-9951176-9951180 NNNY CT(0 0 0) RT(1594133313085 28) q(0 0 0 -1) r(1 1) U5'
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
        "createdAt":"2020-07-07T14:47:55Z",
        "updatedAt":"2020-07-07T14:47:55Z"
      }
    }
  ]
}

, [
  'Accept-Ranges',
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
  'Cache-Control',
  'max-age=0',
  'CF-Organization-Id',
  '3ubGFD1MWA6VgVYbIwSBg8',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:34 GMT',
  'ETag',
  'W/"96e0963a663b69679983632bbc95ae04"',
  'Referrer-Policy',
  'strict-origin-when-cross-origin',
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
  '8a1194da43b734e5f2ff4d1bae450b31',
  'X-Download-Options',
  'noopen',
  'X-Frame-Options',
  'ALLOWALL',
  'X-Permitted-Cross-Domain-Policies',
  'none',
  'X-XSS-Protection',
  '1; mode=block',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=mDU+6f+fTamIsCSNa7zWQ0GLBF8AAAAAQUIPAAAAAADAWzPcKlydzyMBWvFy+xNm; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=ItzgbsFySE6OjhjBYMlkBAAAAAARVynL04RiEMsmj8Vg3ALq; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=AEa1Y1cxFmrCOYgDPWpmA0GLBF8AAAAAhWL4cFjkDJuEM/jLLiU8FA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '7-9951209-9951217 NNYY CT(0 0 0) RT(1594133313387 35) q(0 0 0 -1) r(1 1) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/entries/2chdRueDfNMEXjo8HV83Yh', {"sys":{"id":"2chdRueDfNMEXjo8HV83Yh","version":1,"contentType":{"sys":{"type":"Link","linkType":"ContentType","id":"blogpost"}}},"fields":{"title":{"en-US":"hello!"},"category":{"en-US":"hello!"}}})
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
    "id": "2chdRueDfNMEXjo8HV83Yh",
    "type": "Entry",
    "createdAt": "2020-07-07T14:48:32.385Z",
    "updatedAt": "2020-07-07T14:48:34.426Z",
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
  'CF-Environment-Id',
  'env-integration',
  'CF-Environment-Uuid',
  'env-integration',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:34 GMT',
  'ETag',
  'W/"6226664182236598680"',
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
  'f7da2fcb1cddca6060168671ec8ce984',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=ssQomoOQRHy4bnw4qljPKEGLBF8AAAAAQUIPAAAAAADnAly4eDnsV4WWg0hrKEZP; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=732FFzQ4HCq3zvRDYMlkBAAAAACPIiwz69Pk8MFaeZSVnJ7r; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=oEfiOtnh4FQzOogDPWpmA0GLBF8AAAAAkxdOUijKyoIv/lXEtQptuA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '5-15473098-15473101 NNNY CT(0 0 0) RT(1594133313695 35) q(0 0 0 -1) r(2 2) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/entries/2chdRueDfNMEXjo8HV83Yh/published')
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
    "id": "2chdRueDfNMEXjo8HV83Yh",
    "type": "Entry",
    "createdAt": "2020-07-07T14:48:32.385Z",
    "updatedAt": "2020-07-07T14:48:34.939Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 2,
    "publishedAt": "2020-07-07T14:48:34.939Z",
    "firstPublishedAt": "2020-07-07T14:48:34.939Z",
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
  'CF-Environment-Id',
  'env-integration',
  'CF-Environment-Uuid',
  'env-integration',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:35 GMT',
  'ETag',
  'W/"6236328911555943865"',
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
  '49f8956d6cd3f6092c69dd5ad65f34d9',
  'Content-Length',
  '417',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=T6wgQVJJSrKlL3txuWUsd0KLBF8AAAAAQUIPAAAAAABXcdcAHJA78NKIuzuRZ3QP; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=IUQSbZOGfmOQkDl4YMlkBAAAAADtO7WMfWKStuYLGhLSaTVm; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=gd5TB2oH71XKOogDPWpmA0KLBF8AAAAAL4pjgC65vb30bwJnuekesQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '14-29676471-29676489 NNNY CT(0 0 0) RT(1594133314200 33) q(0 0 0 -1) r(3 3) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/entries/3f6vhFLPnoZdedMCAF2OFq', {"sys":{"id":"3f6vhFLPnoZdedMCAF2OFq","version":1,"contentType":{"sys":{"type":"Link","linkType":"ContentType","id":"blogpost"}}},"fields":{"title":{"en-US":"hello!"},"category":{"en-US":"hello!"}}})
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
    "id": "3f6vhFLPnoZdedMCAF2OFq",
    "type": "Entry",
    "createdAt": "2020-07-07T14:48:32.931Z",
    "updatedAt": "2020-07-07T14:48:35.330Z",
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
  'CF-Environment-Id',
  'env-integration',
  'CF-Environment-Uuid',
  'env-integration',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:35 GMT',
  'ETag',
  'W/"16776092430678394637"',
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
  '57b42cd560518ba2980e6297a13bf2d7',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=XVx0bMOlT96hBWkgr1e3hkKLBF8AAAAAQUIPAAAAAACVY9zIZjGf/VwgzKwc8Upd; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=NHy0Fex/fEDXIDQUYMlkBAAAAAAoT9eHuzSAy4Nl88STtIVB; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=8p+Rf1MnzncLO4gDPWpmA0KLBF8AAAAA6PZVL3S9SLpNs7MngC6gtw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '5-15473221-15473226 NNNY CT(0 0 0) RT(1594133314590 35) q(0 0 0 -1) r(2 2) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/entries/3f6vhFLPnoZdedMCAF2OFq/published')
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
    "id": "3f6vhFLPnoZdedMCAF2OFq",
    "type": "Entry",
    "createdAt": "2020-07-07T14:48:32.931Z",
    "updatedAt": "2020-07-07T14:48:35.639Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 2,
    "publishedAt": "2020-07-07T14:48:35.639Z",
    "firstPublishedAt": "2020-07-07T14:48:35.639Z",
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
  'CF-Environment-Id',
  'env-integration',
  'CF-Environment-Uuid',
  'env-integration',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:35 GMT',
  'ETag',
  'W/"12124062115390890423"',
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
  'e4fd8e5c87a280061289bbfde0c7060b',
  'Content-Length',
  '416',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=j+kmxiMtR4W9q4WwCEtGXUOLBF8AAAAAQUIPAAAAAACnSia6jxaLKLoPVRUrbndo; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=RFAuUDK+YH0RGKdiYMlkBAAAAACqDDkn1HAhxj61RQu6IiAm; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=rmL3MnlWWU52O4gDPWpmA0OLBF8AAAAAjEdNTKQBLcpXwMNDjgZDNg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '14-29676654-29676659 NNNY CT(0 0 0) RT(1594133314914 41) q(0 0 0 -1) r(3 3) U5'
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
        "id": "3f6vhFLPnoZdedMCAF2OFq",
        "type": "Entry",
        "createdAt": "2020-07-07T14:48:32.931Z",
        "updatedAt": "2020-07-07T14:48:35.639Z",
        "environment": {
          "sys": {
            "id": "env-integration",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 2,
        "publishedAt": "2020-07-07T14:48:35.639Z",
        "firstPublishedAt": "2020-07-07T14:48:35.639Z",
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
        "id": "2chdRueDfNMEXjo8HV83Yh",
        "type": "Entry",
        "createdAt": "2020-07-07T14:48:32.385Z",
        "updatedAt": "2020-07-07T14:48:34.939Z",
        "environment": {
          "sys": {
            "id": "env-integration",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 2,
        "publishedAt": "2020-07-07T14:48:34.939Z",
        "firstPublishedAt": "2020-07-07T14:48:34.939Z",
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
  'CF-Environment-Id',
  'env-integration',
  'CF-Environment-Uuid',
  'env-integration',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:36 GMT',
  'ETag',
  'W/"11443494998112756194"',
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
  '8b1f6faf6c9402426552ae524c0bf1b0',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=KUa+ZmZdQVCxLqO2vWqxP0OLBF8AAAAAQUIPAAAAAAD8pD2VaZW8PYhqSsnyvejQ; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=MDGXAEEQO1QtcryfYMlkBAAAAAAcCGdA5GVuHNiWy8ksacyX; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=K3UOPhtUjXXjO4gDPWpmA0OLBF8AAAAAeyzur31HdA5o2Wg4/KsfPg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '14-29676793-29676802 NNNY CT(1 0 0) RT(1594133315335 33) q(0 0 0 -1) r(2 2) U5'
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
  'CF-Environment-Id',
  'env-integration',
  'CF-Environment-Uuid',
  'env-integration',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:36 GMT',
  'ETag',
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
  '133f963054ef55b0cc9a2c796ef95d92',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=gD7mrawJRJGl1avElJqDbUOLBF8AAAAAQUIPAAAAAAAfcpLMIQBf4LWeFRvfT35k; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=mEhxLHCrZjNej3IrYMlkBAAAAAACerFIAcVoDdpSqbUK6Tca; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=03D6Zm/oGzpDPIgDPWpmA0OLBF8AAAAAbl7TC2Lr9YohLPbZkUsE2Q==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '12-19961266-19961269 NNYY CT(0 0 0) RT(1594133315641 26) q(0 0 0 -1) r(2 2) U5'
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
  "requestId": "fca089a9e1ff51760c1d162403000594"
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
  'CF-Environment-Id',
  'env-integration',
  'CF-Environment-Uuid',
  'env-integration',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:36 GMT',
  'ETag',
  '"4250821387888335632"',
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
  'fca089a9e1ff51760c1d162403000594',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=gmHBjp+/QI6XNQveZNldkUSLBF8AAAAAQUIPAAAAAAAJbYHhtlfy7c5gIfsi9EOO; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=UjIfclVZbEInVibWYMlkBAAAAABKHGYFiaUQOm2JNmLM4KTs; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=3Dg9P6epbTwEPYgDPWpmA0SLBF8AAAAAShi0m4+m2zD2NjnL243eCw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '9-7920102-7920108 NNYY CT(0 0 0) RT(1594133316255 32) q(0 0 0 -1) r(2 2) U5'
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
        "createdAt":"2020-07-07T14:47:55Z",
        "updatedAt":"2020-07-07T14:47:55Z"
      }
    }
  ]
}

, [
  'Accept-Ranges',
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
  'Cache-Control',
  'max-age=0',
  'CF-Organization-Id',
  '3ubGFD1MWA6VgVYbIwSBg8',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:37 GMT',
  'ETag',
  'W/"96e0963a663b69679983632bbc95ae04"',
  'Referrer-Policy',
  'strict-origin-when-cross-origin',
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
  'c7c2889be877dc2c33b184eeba8e2035',
  'X-Download-Options',
  'noopen',
  'X-Frame-Options',
  'ALLOWALL',
  'X-Permitted-Cross-Domain-Policies',
  'none',
  'X-XSS-Protection',
  '1; mode=block',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=CedmU4DYQeq037E9oI1v6USLBF8AAAAAQUIPAAAAAADxp4ihQebxpOxT9qP2E7FR; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=A+KHSmE/nErfKn+7YMlkBAAAAACDCr5SKXzBBGh+bThzCUsB; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=fAu+Aiv9m0CWPYgDPWpmA0SLBF8AAAAAISF1PGTQpV5J92L1gxHLaQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '10-10028268-10028269 NNYN CT(91 90 0) RT(1594133316529 30) q(0 0 2 -1) r(3 3) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/blogPost', {"name":"Blog post","fields":[{"id":"slug","name":"URL Slug","type":"Symbol","required":true}],"description":"super angry"})
  .reply(201, {"sys":{"space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"id":"blogPost","type":"ContentType","createdAt":"2020-07-07T14:48:37.827Z","updatedAt":"2020-07-07T14:48:37.827Z","environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}},"createdBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"updatedBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"publishedCounter":0,"version":1},"displayField":null,"name":"Blog post","description":"super angry","fields":[{"id":"slug","name":"URL Slug","type":"Symbol","localized":false,"required":true,"validations":[],"disabled":false,"omitted":false}]}, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'CF-Environment-Id',
  'env-integration',
  'CF-Environment-Uuid',
  'env-integration',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:37 GMT',
  'ETag',
  '"8325344170749254916"',
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
  '261660058e0ac31192f80f2cb2529137',
  'Content-Length',
  '1054',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=Uho0SLmgR72tzgTxVG5YaUWLBF8AAAAAQUIPAAAAAAAqHHu4oTRFaRFvRe7ycfp9; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=cuIrFTll1xeSxUZXYMlkBAAAAADRfV/6S7EcyO7xHKDRfXGq; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=J96bLRTnWQ5mPogDPWpmA0WLBF8AAAAAOmkwoocXiS6jSuZpIu7FeA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '11-15012970-15012975 NNNY CT(0 0 0) RT(1594133316925 27) q(0 0 0 -1) r(4 4) U5'
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
    "createdAt": "2020-07-07T14:48:37.827Z",
    "updatedAt": "2020-07-07T14:48:38.184Z",
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
    "firstPublishedAt": "2020-07-07T14:48:38.184Z",
    "publishedAt": "2020-07-07T14:48:38.184Z",
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
  'CF-Environment-Id',
  'env-integration',
  'CF-Environment-Uuid',
  'env-integration',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:38 GMT',
  'ETag',
  'W/"521788125638803441"',
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
  '6b3628225fe694cfd8c4ac386edd4abc',
  'Content-Length',
  '446',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=61BhZZI7Q6upI1Bk+S1q+kWLBF8AAAAAQUIPAAAAAAAtk+OogmMaNPV9Rs8RIq/D; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=xsyQV5/W/VXmb7DsYMlkBAAAAADn4/TQycS+4t9knNTSouSb; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=SP1ZPSZDlCHtPogDPWpmA0WLBF8AAAAAu4xSBmE2D1sRYamfj1cZqg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '11-15013039-15013043 NNNY CT(0 0 0) RT(1594133317477 29) q(0 0 0 -1) r(2 2) U5'
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
    "createdAt": "2020-07-07T14:48:38.255Z",
    "createdBy": {
      "sys": {
        "id": "1Y7O5FbAkPYgNvD0MpQoAE",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2020-07-07T14:48:38.620Z",
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
  'CF-Environment-Id',
  'env-integration',
  'CF-Environment-Uuid',
  'env-integration',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:38 GMT',
  'ETag',
  'W/"4071381461937087343"',
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
  '8aa7a5e2bc421f5459eb58682d180ac6',
  'Content-Length',
  '382',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=AqSaKXsTS7+SU6O++u8NCUaLBF8AAAAAQUIPAAAAAACjS+UI+u3buXzKkMN5ywv3; expires=Wed, 07 Jul 2021 11:06:41 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=y5KuPJXPvBUuU/7/YMlkBAAAAADw51tJtKakHVfFJ9XmR41e; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=9oygWyh1WhmNP4gDPWpmA0aLBF8AAAAAFxc300V88NS7o/mgYJY2tw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '4-9754151-9754155 NNNY CT(0 0 0) RT(1594133317875 36) q(0 0 0 -1) r(2 2) U5'
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
    "createdAt": "2020-07-07T14:48:38.255Z",
    "createdBy": {
      "sys": {
        "id": "1Y7O5FbAkPYgNvD0MpQoAE",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2020-07-07T14:48:38.620Z",
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
  'CF-Environment-Id',
  'env-integration',
  'CF-Environment-Uuid',
  'env-integration',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:39 GMT',
  'ETag',
  'W/"10806310662147274389"',
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
  '73013bd909124b01d044f2831aad7e2d',
  'Content-Length',
  '369',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=oEpMbuxdSCSPqq7y2tjHuUaLBF8AAAAAQUIPAAAAAABsWODtjksboJWNDk2UsweR; expires=Wed, 07 Jul 2021 11:06:41 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=z7iqbbvbuFk5QWfzYMlkBAAAAADtMGTbHdugOxuCDQfixkkf; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=n3IfFbWt8iD9P4gDPWpmA0aLBF8AAAAAvTFCtRt2ytgTTUzXFgyviQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '4-9754213-9754214 NNNY CT(0 0 0) RT(1594133318287 32) q(0 0 0 -1) r(1 1) U5'
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
        "createdAt": "2020-07-07T14:48:37.827Z",
        "updatedAt": "2020-07-07T14:48:38.184Z",
        "environment": {
          "sys": {
            "id": "env-integration",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 1,
        "publishedAt": "2020-07-07T14:48:38.184Z",
        "firstPublishedAt": "2020-07-07T14:48:38.184Z",
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
  'CF-Environment-Id',
  'env-integration',
  'CF-Environment-Uuid',
  'env-integration',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:39 GMT',
  'ETag',
  'W/"5035996322073896446"',
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
  'c4498283d24564aa1175503390892e64',
  'Content-Length',
  '517',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=p3vNfnMUQK+elj04Pud8hkeLBF8AAAAAQUIPAAAAAADx2d7V5eaX34UExFM87N9f; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=gQoYXmmI1Ft6IfZ+YMlkBAAAAAA9Kqkp7ZNFHbJuvXzPESb6; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=TWnaDKwfgH/ZQIgDPWpmA0eLBF8AAAAAPXrFR6+84TFALiF/vCMg4A==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '11-15013261-15013280 NNNN CT(100 94 0) RT(1594133318709 30) q(0 0 2 -1) r(4 4) U5'
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
    "createdAt": "2020-07-07T14:48:38.255Z",
    "createdBy": {
      "sys": {
        "id": "1Y7O5FbAkPYgNvD0MpQoAE",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2020-07-07T14:48:38.620Z",
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
  'CF-Environment-Id',
  'env-integration',
  'CF-Environment-Uuid',
  'env-integration',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:40 GMT',
  'ETag',
  'W/"10806310662147274389"',
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
  '90d3a06f8ed4930d4f7c7ce521ffdc62',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=00GNmm/eT2i1v/1GUoYSTEeLBF8AAAAAQUIPAAAAAABL+CtFz9AraJ8yi3xpKZGs; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=Fr2SUotw7kIQs5tnYMlkBAAAAABPzXUx8JfdLZhpENU8rOPN; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=0ThcZtv0XwNLQYgDPWpmA0eLBF8AAAAAeMukmGkWLle8yExN3+krdg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '10-10029031-10029035 NNNY CT(0 0 0) RT(1594133319328 35) q(0 0 0 -1) r(2 2) U5'
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
        "createdAt":"2020-07-07T14:47:55Z",
        "updatedAt":"2020-07-07T14:47:55Z"
      }
    }
  ]
}

, [
  'Accept-Ranges',
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
  'Cache-Control',
  'max-age=0',
  'CF-Organization-Id',
  '3ubGFD1MWA6VgVYbIwSBg8',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:40 GMT',
  'ETag',
  'W/"96e0963a663b69679983632bbc95ae04"',
  'Referrer-Policy',
  'strict-origin-when-cross-origin',
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
  'c4b26d41444bf315c883319045e5890b',
  'X-Download-Options',
  'noopen',
  'X-Frame-Options',
  'ALLOWALL',
  'X-Permitted-Cross-Domain-Policies',
  'none',
  'X-XSS-Protection',
  '1; mode=block',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=ZZccTX0qTMiGHOKIr8PwLkeLBF8AAAAAQUIPAAAAAAA+HAB+RftRriRrkKOy9E00; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=b83KDZ/LK1+ROg50YMlkBAAAAABaDKxWTwq/bqbfJRuiG7t4; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=g5IVHHgym2DbQYgDPWpmA0eLBF8AAAAAm3Xcjd587KMruhq/EToQfA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '5-15474030-15474037 NNYN CT(88 90 0) RT(1594133319634 29) q(0 0 2 -1) r(3 3) U5'
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
    "createdAt": "2020-07-07T14:48:37.827Z",
    "updatedAt": "2020-07-07T14:48:40.876Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 1,
    "publishedAt": "2020-07-07T14:48:38.184Z",
    "firstPublishedAt": "2020-07-07T14:48:38.184Z",
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
  'CF-Environment-Id',
  'env-integration',
  'CF-Environment-Uuid',
  'env-integration',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:40 GMT',
  'ETag',
  'W/"10271462256142831724"',
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
  '03a883ee9e8ee42534270793a5a5a94d',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=WcSvv1aoQ4mnsZDv3aDgBkiLBF8AAAAAQUIPAAAAAAAIvY1IaZOzQuf5O8HxiYeq; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=/4daHyUhJWvNhnuwYMlkBAAAAACxHQK5Bg34dJ25dKMpf4Nj; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=809sRnWl7G5nQogDPWpmA0iLBF8AAAAAQYUpRwmKEFRFSSjtwx3aaQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '11-15013512-15013517 NNNY CT(0 0 0) RT(1594133320149 25) q(0 0 0 -1) r(2 2) U5'
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
    "createdAt": "2020-07-07T14:48:37.827Z",
    "updatedAt": "2020-07-07T14:48:41.159Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 3,
    "publishedAt": "2020-07-07T14:48:41.159Z",
    "firstPublishedAt": "2020-07-07T14:48:38.184Z",
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
  'CF-Environment-Id',
  'env-integration',
  'CF-Environment-Uuid',
  'env-integration',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:41 GMT',
  'ETag',
  'W/"2156585223730583623"',
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
  '8ff0c1c0ac95fbddbe1f63fde3027635',
  'Content-Length',
  '459',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=c4xIY+AcQwazQhmej9wxfkiLBF8AAAAAQUIPAAAAAAB65m96v3eH7QlDXut1ua56; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=AjGKZbmZHA/OcsfMYMlkBAAAAADRfQQKX02uYv0XEHhNBjIn; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=g4i6V0xDmH4GQ4gDPWpmA0iLBF8AAAAA6pkF2s0MNkjzjz7t/0Ax/A==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '11-15013555-15013557 NNNY CT(0 0 0) RT(1594133320446 31) q(0 0 0 -1) r(3 3) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/blogPost/editor_interface', {"controls":[]})
  .reply(200, {"controls":[],"sys":{"id":"default","type":"EditorInterface","space":{"sys":{"id":"bohepdihyxin","type":"Link","linkType":"Space"}},"version":4,"createdAt":"2020-07-07T14:48:38.255Z","createdBy":{"sys":{"id":"1Y7O5FbAkPYgNvD0MpQoAE","type":"Link","linkType":"User"}},"updatedAt":"2020-07-07T14:48:41.963Z","updatedBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"contentType":{"sys":{"id":"blogPost","type":"Link","linkType":"ContentType"}},"environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}}}}, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'CF-Environment-Id',
  'env-integration',
  'CF-Environment-Uuid',
  'env-integration',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:41 GMT',
  'ETag',
  '"17421564028704447246"',
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
  '048312f99231c80ac09e209cae461b31',
  'Content-Length',
  '880',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=hiqkYL4zQKSpH6KEaj3Wy0mLBF8AAAAAQUIPAAAAAAA4gJHdsLTqv5okPM0HHAJ7; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=yGuuGLj9m0wgmQqcYMlkBAAAAAAynYnycE/P7BRet9PQBaJZ; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=N1pHSDIJvHa/Q4gDPWpmA0mLBF8AAAAAn1L4JUAiIXbUx38WrmwqGQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '13-23777075-23777080 NNNN CT(93 189 0) RT(1594133320961 28) q(0 0 3 -1) r(5 5) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/blogPost/editor_interface', {"controls":[{"fieldId":"slug","widgetId":"singleLine","widgetNamespace":"builtin"}]})
  .reply(200, {"controls":[{"fieldId":"slug","widgetId":"singleLine","widgetNamespace":"builtin"}],"sys":{"id":"default","type":"EditorInterface","space":{"sys":{"id":"bohepdihyxin","type":"Link","linkType":"Space"}},"version":5,"createdAt":"2020-07-07T14:48:38.255Z","createdBy":{"sys":{"id":"1Y7O5FbAkPYgNvD0MpQoAE","type":"Link","linkType":"User"}},"updatedAt":"2020-07-07T14:48:42.304Z","updatedBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"contentType":{"sys":{"id":"blogPost","type":"Link","linkType":"ContentType"}},"environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}}}}, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'CF-Environment-Id',
  'env-integration',
  'CF-Environment-Uuid',
  'env-integration',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:42 GMT',
  'ETag',
  '"7646598708573874861"',
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
  'f110b2eb2951b25aaa4b347124c20c4c',
  'Content-Length',
  '987',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=CY/S1NY0QJ2Z/Nax39jAQEmLBF8AAAAAQUIPAAAAAAC/BKVRRKNZDXssqVtgsYPe; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=7/qIEz+0FBjGh3+PYMlkBAAAAACPtJPHPMXbJXESe0U/aw4w; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=4LSLRA1MI0EmRIgDPWpmA0mLBF8AAAAAFBRlgxifzlI/3s0cZ2dL0w==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '12-19962518-19962523 NNNY CT(0 0 0) RT(1594133321587 28) q(0 0 0 -1) r(1 1) U5'
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
    "createdAt": "2020-07-07T14:48:38.255Z",
    "createdBy": {
      "sys": {
        "id": "1Y7O5FbAkPYgNvD0MpQoAE",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2020-07-07T14:48:42.304Z",
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
  'CF-Environment-Id',
  'env-integration',
  'CF-Environment-Uuid',
  'env-integration',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:42 GMT',
  'ETag',
  '"2820332687925511425"',
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
  'ed7c3a53b5da38a8bb3b94b438a00153',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=HBAP5MqJRky2Rc5rZbLiQEqLBF8AAAAAQUIPAAAAAADf4+uhEx4TQKXTl7NOBtjA; expires=Wed, 07 Jul 2021 11:06:41 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=LYyFAS+BVDSWUunNYMlkBAAAAABlmwAvUJyN921GcdBgX3YI; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=IaOYH91PegtjRIgDPWpmA0qLBF8AAAAAq1USNHyI+9hQ4xXnqRFMnA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '4-9754533-9754538 NNYY CT(0 0 0) RT(1594133321883 28) q(0 0 0 -1) r(1 1) U5'
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
        "createdAt": "2020-07-07T14:48:37.827Z",
        "updatedAt": "2020-07-07T14:48:41.159Z",
        "environment": {
          "sys": {
            "id": "env-integration",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 3,
        "publishedAt": "2020-07-07T14:48:41.159Z",
        "firstPublishedAt": "2020-07-07T14:48:38.184Z",
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
  'CF-Environment-Id',
  'env-integration',
  'CF-Environment-Uuid',
  'env-integration',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:42 GMT',
  'ETag',
  'W/"2419548324684544117"',
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
  'a6ab1c3ad481a88c0c1e9ad474a35009',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=vO23v48ES/a/SfKaCHk9M0qLBF8AAAAAQUIPAAAAAACK9RtZKooMx2cin/At7CqZ; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=DG85engaw1I/1lnzYMlkBAAAAAAEe/wmqQrOPyL6xxyjwJXr; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=kDOgchA5ITywRIgDPWpmA0qLBF8AAAAA5nujsaZj1IjU1rwtLfeyEw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '14-29678600-29678604 NNNY CT(0 0 0) RT(1594133322187 26) q(0 0 0 -1) r(1 1) U5'
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
    "createdAt": "2020-07-07T14:48:38.255Z",
    "createdBy": {
      "sys": {
        "id": "1Y7O5FbAkPYgNvD0MpQoAE",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2020-07-07T14:48:42.304Z",
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
  'CF-Environment-Id',
  'env-integration',
  'CF-Environment-Uuid',
  'env-integration',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:43 GMT',
  'ETag',
  '"2820332687925511425"',
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
  '0bdafe55dc853680fbf4526912ec07f4',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=k365GJiSRHakvvUieY8o9kqLBF8AAAAAQUIPAAAAAAC0dScPdFLmtEr8WkC9yiRl; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=SbArHUgyngL/vvBJYMlkBAAAAAAlHfTwxO0t/ITZO04Uq4oY; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=MjogDq0X/WoxRYgDPWpmA0qLBF8AAAAAJG0TC6kskwwAtTgQ9q37EQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '3-7911653-7911655 NNYY CT(0 0 0) RT(1594133322605 28) q(0 0 0 -1) r(1 1) U5'
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
        "createdAt":"2020-07-07T14:47:55Z",
        "updatedAt":"2020-07-07T14:47:55Z"
      }
    }
  ]
}

, [
  'Accept-Ranges',
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
  'Cache-Control',
  'max-age=0',
  'CF-Organization-Id',
  '3ubGFD1MWA6VgVYbIwSBg8',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:43 GMT',
  'ETag',
  'W/"96e0963a663b69679983632bbc95ae04"',
  'Referrer-Policy',
  'strict-origin-when-cross-origin',
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
  '0ac1a28bf5e69c4b5cedf3853487580a',
  'X-Download-Options',
  'noopen',
  'X-Frame-Options',
  'ALLOWALL',
  'X-Permitted-Cross-Domain-Policies',
  'none',
  'X-XSS-Protection',
  '1; mode=block',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=SCGtLR0oQB2RQtirXr6RUkuLBF8AAAAAQUIPAAAAAAB93ce5r0v5Fs3YclNgrKzZ; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=XLRHbuIJNwZQIxc1YMlkBAAAAAAiU4sNNRrKJ+oFOe9DX6RJ; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=sAEGMudp0T98RYgDPWpmA0uLBF8AAAAAhAcUrIYDUzc2uwUYHaD3nA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '12-19962901-19962921 NNYY CT(0 0 0) RT(1594133322904 29) q(0 0 0 -1) r(1 1) U5'
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
    "createdAt": "2020-07-07T14:48:37.827Z",
    "updatedAt": "2020-07-07T14:48:43.953Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 3,
    "publishedAt": "2020-07-07T14:48:41.159Z",
    "firstPublishedAt": "2020-07-07T14:48:38.184Z",
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
  'CF-Environment-Id',
  'env-integration',
  'CF-Environment-Uuid',
  'env-integration',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:43 GMT',
  'ETag',
  'W/"9065491677727439578"',
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
  '12f7a72234ecd7f9155b6dbc5d8969ec',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=RgBjJKZASV6amguUp4vHGEuLBF8AAAAAQUIPAAAAAABwfjd5tVBl9ds/qIbmbQvT; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=/KLbdsbWtg9lmEXMYMlkBAAAAAA/5Mk7i5KExOXuB52yK7m4; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=ERz9GXyBVkzuRYgDPWpmA0uLBF8AAAAArI0pO/MwlbvXYF/79ipX1A==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '14-29678864-29678882 NNNY CT(0 0 0) RT(1594133323214 37) q(0 0 0 -1) r(2 2) U5'
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
    "createdAt": "2020-07-07T14:48:37.827Z",
    "updatedAt": "2020-07-07T14:48:44.348Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 5,
    "publishedAt": "2020-07-07T14:48:44.348Z",
    "firstPublishedAt": "2020-07-07T14:48:38.184Z",
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
  'CF-Environment-Id',
  'env-integration',
  'CF-Environment-Uuid',
  'env-integration',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:44 GMT',
  'ETag',
  'W/"13072126175858284147"',
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
  'd66627097d7bb3a1272e9ebf9f78db28',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=8rdNyilBSredo9mlM4JDb0uLBF8AAAAAQUIPAAAAAABaZLqaR96KUl0N236LCkSE; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=XuJeN1oAzW8ZG5dAYMlkBAAAAAD152gVWVN94O30NBKjIM+F; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=KAnVEswigi5uRogDPWpmA0uLBF8AAAAAdhSumXD5t8eQxWNeT92b/A==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '5-15474669-15474674 NNNY CT(0 0 0) RT(1594133323626 35) q(0 0 0 -1) r(3 3) U5'
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
    "createdAt": "2020-07-07T14:48:38.255Z",
    "createdBy": {
      "sys": {
        "id": "1Y7O5FbAkPYgNvD0MpQoAE",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2020-07-07T14:48:44.757Z",
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
  'CF-Environment-Id',
  'env-integration',
  'CF-Environment-Uuid',
  'env-integration',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:44 GMT',
  'ETag',
  'W/"9635429859861286925"',
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
  '8521b7d10fcf5c2e44b592bc794417f4',
  'Content-Length',
  '419',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=T63sAdDTQW6BvDx+zFSgJkyLBF8AAAAAQUIPAAAAAAC1XEvQXMCE+Gtjbl+95xgW; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=jD0ZdWI1OFwSTRQxYMlkBAAAAAAEpdGCAlVTAZ0ZxKdRshIB; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=iCcIdkO4ZQjTRogDPWpmA0yLBF8AAAAALEcukW+jCp0+CmdVs6Hapg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '13-23777696-23777702 NNNY CT(0 0 0) RT(1594133324035 27) q(0 0 0 -1) r(2 2) U5'
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
    "createdAt": "2020-07-07T14:48:38.255Z",
    "createdBy": {
      "sys": {
        "id": "1Y7O5FbAkPYgNvD0MpQoAE",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2020-07-07T14:48:44.757Z",
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
  'CF-Environment-Id',
  'env-integration',
  'CF-Environment-Uuid',
  'env-integration',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:45 GMT',
  'ETag',
  'W/"10153143669196749524"',
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
  'c335c45680341c55364c602ebadfc2d5',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=F/iNJ+AdR4mGW7NJixKOm0yLBF8AAAAAQUIPAAAAAADHKuv1ysdhVwuXpe+B8fsz; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=SCIhfIXEtjfD1/wlYMlkBAAAAAB7qCYJtbvKLruMuPRfF+hS; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=BybAXBPnbUwgR4gDPWpmA0yLBF8AAAAAwc+pSIQL8dgtb2I0t1DYcg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '12-19963132-19963138 NNNY CT(0 0 0) RT(1594133324343 31) q(0 0 0 -1) r(2 2) U5'
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
  'CF-Environment-Id',
  'env-integration',
  'CF-Environment-Uuid',
  'env-integration',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:45 GMT',
  'ETag',
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
  '22547fd3667e97b42736770a74da9f48',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=kyJ32Yp9TL6y9YPLJn0Ou02LBF8AAAAAQUIPAAAAAAC6tpIRzi+0qEafftW7HFCl; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=i3aSOk8I3Tb6tnnyYMlkBAAAAACyMbcmpzRmqx8yoeoyGozz; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=o5dLQsF9BxmkR4gDPWpmA02LBF8AAAAAMY1WQhGj9FlcVKbYtISVPQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '14-29679308-29679316 NNYN CT(90 89 0) RT(1594133324659 30) q(0 0 2 -1) r(4 4) U5'
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
  "requestId": "a605f0c06df53c8ba2fca3008f3c0fca"
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
  'CF-Environment-Id',
  'env-integration',
  'CF-Environment-Uuid',
  'env-integration',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:46 GMT',
  'ETag',
  '"5819668110279275894"',
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
  'a605f0c06df53c8ba2fca3008f3c0fca',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=cqUK/9KMRwGJrQNaimmcY02LBF8AAAAAQUIPAAAAAADdjzDA2YGJCzjJZKmeVWdF; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=1bnzfpDPS0yeA2NaYMlkBAAAAAB8gcaB1oDrDewr6kLcP1Ma; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=9i0TGL/xQl49SIgDPWpmA02LBF8AAAAAbCmE3uM9m+xgi9rVtgKDFQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '12-19963328-19963338 NNYN CT(85 86 0) RT(1594133325267 33) q(0 1 2 -1) r(3 3) U5'
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
        "createdAt":"2020-07-07T14:47:55Z",
        "updatedAt":"2020-07-07T14:47:55Z"
      }
    }
  ]
}

, [
  'Accept-Ranges',
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
  'Cache-Control',
  'max-age=0',
  'CF-Organization-Id',
  '3ubGFD1MWA6VgVYbIwSBg8',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:46 GMT',
  'ETag',
  'W/"96e0963a663b69679983632bbc95ae04"',
  'Referrer-Policy',
  'strict-origin-when-cross-origin',
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
  'e6c3b7985ae9f5832c6282f822af786f',
  'X-Download-Options',
  'noopen',
  'X-Frame-Options',
  'ALLOWALL',
  'X-Permitted-Cross-Domain-Policies',
  'none',
  'X-XSS-Protection',
  '1; mode=block',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=zfpfJ0dTQZWfYJkSP1k8xk6LBF8AAAAAQUIPAAAAAAA0m2umqZqBYOV2b7Zh50Jf; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=AU6Aag+22z3txjlXYMlkBAAAAABGmA5bR5Vl5DtdDEwFFgv7; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=yDAKdo4HKhybSIgDPWpmA06LBF8AAAAAAbUJ0eGf5dwXuPnTTBHU1w==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '5-15475001-15475003 NNYY CT(0 0 0) RT(1594133325879 34) q(0 0 0 -1) r(1 1) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/customSidebar', {"name":"Custom sidebar","fields":[],"description":"How to add, remove and update widgets"})
  .reply(201, {"sys":{"space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"id":"customSidebar","type":"ContentType","createdAt":"2020-07-07T14:48:46.862Z","updatedAt":"2020-07-07T14:48:46.862Z","environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}},"createdBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"updatedBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"publishedCounter":0,"version":1},"displayField":null,"name":"Custom sidebar","description":"How to add, remove and update widgets","fields":[]}, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'CF-Environment-Id',
  'env-integration',
  'CF-Environment-Uuid',
  'env-integration',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:46 GMT',
  'ETag',
  '"6086061798582643216"',
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
  'e0fada7251aa0091b81288c570ca6280',
  'Content-Length',
  '882',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=MNl4o11iQK+sjuvT7ctbM06LBF8AAAAAQUIPAAAAAABvpzZP2d8NJyymnpl75VUQ; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=t2n/OTsgRROyhm8pYMlkBAAAAAAVubMSBaEeqvP3YdivvRPU; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=Q4LFEqYgsVn4SIgDPWpmA06LBF8AAAAARD2JuLmOBksIKReux27n4g==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '14-29679735-29679740 NNNY CT(0 0 0) RT(1594133326101 35) q(0 0 0 -1) r(2 2) U5'
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
    "createdAt": "2020-07-07T14:48:46.862Z",
    "updatedAt": "2020-07-07T14:48:47.206Z",
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
    "firstPublishedAt": "2020-07-07T14:48:47.206Z",
    "publishedAt": "2020-07-07T14:48:47.206Z",
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
  'CF-Environment-Id',
  'env-integration',
  'CF-Environment-Uuid',
  'env-integration',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:47 GMT',
  'ETag',
  'W/"148098409657970585"',
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
  '4b3c8ed71cef9ff712f95b7ce7e3c3ca',
  'Content-Length',
  '389',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=PPapzOEGQKWiSsALrj+pBU6LBF8AAAAAQUIPAAAAAAAAkzizxvX3uOoOUxrbuGte; expires=Wed, 07 Jul 2021 11:06:41 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=n8h4DNacLFfHnd8lYMlkBAAAAAB8rGTP3FOqsEJ0S1O4PYzC; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=yBiAF3TRv1xLSYgDPWpmA06LBF8AAAAAmu3nEP8DXe4eO/FceeLeow==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '4-9755081-9755085 NNNY CT(0 0 0) RT(1594133326499 32) q(0 0 0 -1) r(2 2) U5'
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
    "createdAt": "2020-07-07T14:48:47.276Z",
    "createdBy": {
      "sys": {
        "id": "1Y7O5FbAkPYgNvD0MpQoAE",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2020-07-07T14:48:47.626Z",
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
  'CF-Environment-Id',
  'env-integration',
  'CF-Environment-Uuid',
  'env-integration',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:47 GMT',
  'ETag',
  'W/"8585888736275594181"',
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
  'f8595a000dc47b1d5374403877841534',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=dBQTOJDDQKOi0/RsbvlkZ0+LBF8AAAAAQUIPAAAAAADnk7YHtR0JsETE+O5rl9Gi; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=Pqm3etyUtmGAxYnmYMlkBAAAAABOq3RLxo0l2xZ1pSG4aLAK; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=S9KwVJsVjwiZSYgDPWpmA0+LBF8AAAAAJ8AhjpgsoTEH+R+0/cJyXw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '7-9952836-9952838 NNNY CT(0 0 0) RT(1594133326897 29) q(0 0 0 -1) r(2 2) U5'
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
    "createdAt": "2020-07-07T14:48:47.276Z",
    "createdBy": {
      "sys": {
        "id": "1Y7O5FbAkPYgNvD0MpQoAE",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2020-07-07T14:48:47.919Z",
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
  'CF-Environment-Id',
  'env-integration',
  'CF-Environment-Uuid',
  'env-integration',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:47 GMT',
  'ETag',
  'W/"1798614988707452959"',
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
  '5dc808640235cf0c5cce2b8da22c5984',
  'Content-Length',
  '459',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=evMGGNJ1Qd6FTtoljOFnuU+LBF8AAAAAQUIPAAAAAADXAe0HhrWwn7459QksCAuu; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=OWl/XglmklUnJE9XYMlkBAAAAACnY4EKVWApZQ3Q7QE9XEtH; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=76a1W2F45C/eSYgDPWpmA0+LBF8AAAAAYbB41lwhUKMkfmu+YV9Eng==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '14-29680044-29680048 NNNY CT(0 0 0) RT(1594133327179 34) q(0 0 0 -1) r(1 1) U5'
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
    "createdAt": "2020-07-07T14:48:47.276Z",
    "createdBy": {
      "sys": {
        "id": "1Y7O5FbAkPYgNvD0MpQoAE",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2020-07-07T14:48:48.233Z",
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
  'CF-Environment-Id',
  'env-integration',
  'CF-Environment-Uuid',
  'env-integration',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:48 GMT',
  'ETag',
  'W/"9548990013289315874"',
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
  'f86c56b8c2f2873cc954eed40be1b3cb',
  'Content-Length',
  '460',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=AYj2kB73QDecsQBE3cUva0+LBF8AAAAAQUIPAAAAAAB6vffOVQfchkwFRNEGXtkL; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=llGdXx23QloGuzBhYMlkBAAAAAACuwzhIYtILT3okiTiE8i8; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=bTsNVtp2Fx0zSogDPWpmA0+LBF8AAAAAN+RxS2NO2//gYFIkgIFj6Q==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '14-29680135-29680148 NNNY CT(0 0 0) RT(1594133327517 33) q(0 0 0 -1) r(2 2) U5'
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
    "createdAt": "2020-07-07T14:48:47.276Z",
    "createdBy": {
      "sys": {
        "id": "1Y7O5FbAkPYgNvD0MpQoAE",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2020-07-07T14:48:48.544Z",
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
  'CF-Environment-Id',
  'env-integration',
  'CF-Environment-Uuid',
  'env-integration',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:48 GMT',
  'ETag',
  'W/"7014400508027810478"',
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
  '78bf69551243fffdb218c3cfbff4fd08',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=7flKhf54SuOPRZAy2TeMN1CLBF8AAAAAQUIPAAAAAADD4CUkpKuLjuMorZD3e6qT; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=YlPQd6J9JEC2ZLESYMlkBAAAAAB2Qb6g79KOiG0ypnwRSflP; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=1IMgQNkwPkp9SogDPWpmA1CLBF8AAAAAJYxf6X9JNQdv0tvxM/TcMg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '10-10030058-10030064 NNNY CT(0 0 0) RT(1594133327820 33) q(0 0 0 -1) r(2 2) U5'
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
    "createdAt": "2020-07-07T14:48:47.276Z",
    "createdBy": {
      "sys": {
        "id": "1Y7O5FbAkPYgNvD0MpQoAE",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2020-07-07T14:48:48.980Z",
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
  'CF-Environment-Id',
  'env-integration',
  'CF-Environment-Uuid',
  'env-integration',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:48 GMT',
  'ETag',
  'W/"15055355341088656675"',
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
  '060f4b335f22eaf949555cfeb231712a',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=Cz7Oev+fQoiurF04avsWmVCLBF8AAAAAQUIPAAAAAAAorzWDC0cofyLq8ybSjrLL; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=KvOdWBvZoDWKC7TIYMlkBAAAAACniSf3UC2dVZ39cCZD/f39; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=i4oNIxDRemMLS4gDPWpmA1CLBF8AAAAAoAKBF7DhW0Ul2AfNbZL8nA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '10-10030089-10030090 NNNN CT(86 86 0) RT(1594133328102 27) q(0 0 2 -1) r(3 3) U5'
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
    "createdAt": "2020-07-07T14:48:47.276Z",
    "createdBy": {
      "sys": {
        "id": "1Y7O5FbAkPYgNvD0MpQoAE",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2020-07-07T14:48:48.980Z",
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
  'CF-Environment-Id',
  'env-integration',
  'CF-Environment-Uuid',
  'env-integration',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:49 GMT',
  'ETag',
  'W/"14429148329460278787"',
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
  '6c56b74f3eea5db0d8607adc17764c41',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=+ZZdhYCRRauV0WOSHA/oY1CLBF8AAAAAQUIPAAAAAADYG+NL5OnsSj4bTNhTXt07; expires=Wed, 07 Jul 2021 11:06:41 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=5Le4SBBZHTblGMOLYMlkBAAAAACK3oUYmePxANnOU2qztlY2; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=E74GGhQQLx9WS4gDPWpmA1CLBF8AAAAA3G9R0ci/L0v2g41yCPwGjg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '4-9755290-9755293 NNNY CT(0 0 0) RT(1594133328536 29) q(0 0 0 -1) r(1 1) U5'
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
  'CF-Environment-Id',
  'env-integration',
  'CF-Environment-Uuid',
  'env-integration',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:49 GMT',
  'ETag',
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
  '0d3ed2736598cf6f46eba0c5474c9f54',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=0bUxNThkTc6C+XAmmUwYLlGLBF8AAAAAQUIPAAAAAAC87b0BO3vGOweSd169HlcX; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=oYWWMWrKOhYpF6N8YMlkBAAAAABZ8b7aIrV8cosXvNE9Kw9e; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=yIbULFo1nm44TIgDPWpmA1GLBF8AAAAAjovW10IxZNltcOEF8pLh3g==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '12-19964100-19964107 NNNN CT(90 89 0) RT(1594133328946 30) q(0 0 2 -1) r(3 3) U5'
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
        "createdAt":"2020-07-07T14:47:55Z",
        "updatedAt":"2020-07-07T14:47:55Z"
      }
    }
  ]
}

, [
  'Accept-Ranges',
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
  'Cache-Control',
  'max-age=0',
  'CF-Organization-Id',
  '3ubGFD1MWA6VgVYbIwSBg8',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:50 GMT',
  'ETag',
  'W/"96e0963a663b69679983632bbc95ae04"',
  'Referrer-Policy',
  'strict-origin-when-cross-origin',
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
  '02aef2d868110716e359b46048564e42',
  'X-Download-Options',
  'noopen',
  'X-Frame-Options',
  'ALLOWALL',
  'X-Permitted-Cross-Domain-Policies',
  'none',
  'X-XSS-Protection',
  '1; mode=block',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=BvoNEjXcQPuUieTaUUt57lGLBF8AAAAAQUIPAAAAAAC2/Mq4Sx72cPN9PuvlMrdZ; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=16WXA82D4UYwkNQ9YMlkBAAAAADOkUrmuws4VdWTGSpQ4qJ7; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=1wV3Gxnz7x4WTYgDPWpmA1GLBF8AAAAA4Ib6rOWzi5VGskMhZKEMkA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '6-5059130-5059132 NNYY CT(0 0 0) RT(1594133329561 30) q(0 0 0 -1) r(2 2) U5'
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
    "updatedAt": "2020-07-07T14:48:50.489Z",
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
  'CF-Environment-Id',
  'env-integration',
  'CF-Environment-Uuid',
  'env-integration',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:50 GMT',
  'ETag',
  'W/"8692200339733854539"',
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
  'eeb8841ff4f0bb6d9329baa2a41288eb',
  'Content-Length',
  '541',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=GAEytHDjQkyI6kq4k2sJ+lGLBF8AAAAAQUIPAAAAAAADyI+MnqbmEt/Bv7ODeJGM; expires=Wed, 07 Jul 2021 11:06:41 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=nT8uEp+BBk/mvN/AYMlkBAAAAABW73MDbYntGA8xonPwE4Gg; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=paZIGZIYEnl9TYgDPWpmA1GLBF8AAAAAlUb23yxeIN756PujKWqxJw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '4-9755545-9755556 NNNY CT(0 0 0) RT(1594133329771 32) q(0 0 0 -1) r(1 1) U5'
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
    "updatedAt": "2020-07-07T14:48:50.786Z",
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
  'CF-Environment-Id',
  'env-integration',
  'CF-Environment-Uuid',
  'env-integration',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:50 GMT',
  'ETag',
  'W/"1480531829657594450"',
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
  'e1189921d436311f508ccc2693124949',
  'Content-Length',
  '541',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=BOvU/OyuRga1dVJmyER29lKLBF8AAAAAQUIPAAAAAACYM8nwkWRk0VnbPIkmfD3c; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=BwfVOPcIGX2c9UtLYMlkBAAAAAB+vx5Yxah6bHB27OBbTRD5; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=SexQffRW/CbuTYgDPWpmA1KLBF8AAAAAYKkd6DovdFVUNDsTv7Vntg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '2-3408516-3408517 NNNY CT(0 0 0) RT(1594133330069 31) q(0 1 1 -1) r(2 2) U5'
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
    "updatedAt": "2020-07-07T14:48:51.294Z",
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
  'CF-Environment-Id',
  'env-integration',
  'CF-Environment-Uuid',
  'env-integration',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:51 GMT',
  'ETag',
  'W/"17653442505662181487"',
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
  'edaac2906c58c4af620722fa0e7a1e5b',
  'Content-Length',
  '541',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=AeJ4jv6EShe8jNepl1WpJlKLBF8AAAAAQUIPAAAAAADyNXD5NarOp+f1UoT4VICN; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=VBWUBqrYQGC6t2A3YMlkBAAAAADQ6bIwDIH6WRPkn/wn8gaU; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=I3P5DKePYFS4TogDPWpmA1KLBF8AAAAASH4qWn/zzPHjPwWbJN459g==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '5-15475779-15475783 NNNN CT(93 94 0) RT(1594133330383 34) q(0 0 2 -1) r(3 3) U5'
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
    "updatedAt": "2020-07-07T14:48:51.700Z",
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
  'CF-Environment-Id',
  'env-integration',
  'CF-Environment-Uuid',
  'env-integration',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:51 GMT',
  'ETag',
  'W/"3183298340608892537"',
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
  '9800091f57d765c635f74d994176ca38',
  'Content-Length',
  '541',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=d2I+136yQd6ZYPZ8w21rnFOLBF8AAAAAQUIPAAAAAABK8JOJfXSxL24gcHO0RrWk; expires=Wed, 07 Jul 2021 11:06:41 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=WAXCbs4uSk7Q4IzVYMlkBAAAAAB+2sLUqe7lUj2JUgK5cxWC; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=rdx1EUy34DVFT4gDPWpmA1OLBF8AAAAAtNyd2y4gcoftmkOefCD8mg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '4-9755777-9755786 NNNY CT(0 0 0) RT(1594133330989 32) q(0 0 0 -1) r(1 1) U5'
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
    "updatedAt": "2020-07-07T14:48:52.023Z",
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
  'CF-Environment-Id',
  'env-integration',
  'CF-Environment-Uuid',
  'env-integration',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:52 GMT',
  'ETag',
  'W/"17775148085067398438"',
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
  'e377998957c90cfdc23719a9742458bb',
  'Content-Length',
  '524',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=GyR6BK4pQ7GSa0KZ/OPjC1OLBF8AAAAAQUIPAAAAAADtL2qaaAYRci5eWhpBbzkQ; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=vgVAWBkb2E8IOs+LYMlkBAAAAAD5z75+OPwU8G5QMxNaa5CN; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=r92vDEWegAW8T4gDPWpmA1OLBF8AAAAA/U7jheJSjKnnx+xQqay3JQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '10-10030463-10030465 NNNY CT(0 0 0) RT(1594133331309 30) q(0 0 0 -1) r(2 2) U5'
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
    "updatedAt": "2020-07-07T14:48:52.023Z",
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
  'CF-Environment-Id',
  'env-integration',
  'CF-Environment-Uuid',
  'env-integration',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:52 GMT',
  'ETag',
  'W/"12819206243944309660"',
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
  '2dcea94529675adcc5f19c1d08aaf32a',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=/J9JBDM6SKuyyRr9Nct4ElOLBF8AAAAAQUIPAAAAAADc6rbhnezW+aZsg9CabzNM; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=I9WABRjTTRc+vTgJYMlkBAAAAACVA/DUdjtiFziS++fnfSXx; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=ajt9f56ZbFBPUIgDPWpmA1OLBF8AAAAA8CztA1f6+vvNuf0J1hyeHA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '13-23779647-23779654 NNNY CT(0 0 0) RT(1594133331619 34) q(0 0 0 -1) r(2 2) U5'
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
  'CF-Environment-Id',
  'env-integration',
  'CF-Environment-Uuid',
  'env-integration',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:52 GMT',
  'ETag',
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
  '0336dc2e35f20e63212ffb348aa6283d',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=L8mT7yIiTditQnfAd8ptkVSLBF8AAAAAQUIPAAAAAABqNFS88Qo+5ViqcRWP2uBH; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=fH6INNefFyROsIGbYMlkBAAAAACjmEKlEBHIeI4CTDkN7mxM; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=t2LSH9xFxHjxUIgDPWpmA1SLBF8AAAAA0r7VfHK7OVe0yEEEHFif5Q==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '12-19964925-19964936 NNYY CT(0 0 0) RT(1594133332034 35) q(0 0 0 -1) r(2 2) U5'
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
        "createdAt":"2020-07-07T14:47:55Z",
        "updatedAt":"2020-07-07T14:47:55Z"
      }
    }
  ]
}

, [
  'Accept-Ranges',
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
  'Cache-Control',
  'max-age=0',
  'CF-Organization-Id',
  '3ubGFD1MWA6VgVYbIwSBg8',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:53 GMT',
  'ETag',
  'W/"96e0963a663b69679983632bbc95ae04"',
  'Referrer-Policy',
  'strict-origin-when-cross-origin',
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
  '455f494fc00f10c7295b5335d3123950',
  'X-Download-Options',
  'noopen',
  'X-Frame-Options',
  'ALLOWALL',
  'X-Permitted-Cross-Domain-Policies',
  'none',
  'X-XSS-Protection',
  '1; mode=block',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=WXYK/s4UTLGpLUBMMvlWw1SLBF8AAAAAQUIPAAAAAADCp5XKAVE5cbjb7rIaLPIb; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=5bbvKsXQ3WA+rEClYMlkBAAAAADAlWQpnaIIw39GcCyBAyB3; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=tnRpT0yJRWJVUYgDPWpmA1SLBF8AAAAAgRaePTJX0s4eXIyeadY/Kw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '12-19965019-19965026 NNYY CT(0 0 0) RT(1594133332437 37) q(0 0 0 -1) r(1 1) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/tags/sampletag', {"sys":{"id":"sampletag","version":0},"name":"marketing"})
  .reply(201, {"sys":{"id":"sampletag","version":1,"space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}},"type":"Tag","createdAt":"2020-07-07T14:48:53.374Z","createdBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"updatedAt":"2020-07-07T14:48:53.374Z","updatedBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}}},"name":"marketing"}, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'CF-Environment-Id',
  'env-integration',
  'CF-Environment-Uuid',
  'env-integration',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:53 GMT',
  'ETag',
  '"2256810934820027606"',
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
  'a688f1261fa5926a1100df9a4ebbc952',
  'Content-Length',
  '740',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=1mg6GMZhRZu03vjzhHtSglSLBF8AAAAAQUIPAAAAAAC0QHNj6gnLotjTrXbz+ycj; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=+T+3YKWIzGEBixAdYMlkBAAAAACZm9pNFe6L33gZwgLz+uYS; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=/h+ZK//4Dl23UYgDPWpmA1SLBF8AAAAAjKAVN76H7SvWROybge2Jdw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '7-9953452-9953456 NNNY CT(0 0 0) RT(1594133332648 37) q(0 0 0 -1) r(2 2) U5'
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
    "createdAt": "2020-07-07T14:48:53.374Z",
    "updatedAt": "2020-07-07T14:48:53.374Z",
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
  'CF-Environment-Id',
  'env-integration',
  'CF-Environment-Uuid',
  'env-integration',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:53 GMT',
  'ETag',
  '"16383778977629567981"',
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
  'aeded2d8a7f0f434a0746c265e4df7bb',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=g7BGOJTSRc+Prr0gsbpHClWLBF8AAAAAQUIPAAAAAACZ2TFgKfMKcguYioEgaRHn; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=7iLbHAPFgEcdI0qRYMlkBAAAAACdL0149vEySKlcYguT/+jW; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=RGgaHoijB3sOUogDPWpmA1WLBF8AAAAAve8lQtQadPt/WlBlC3J5ZQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '14-29681787-29681791 NNYY CT(0 0 0) RT(1594133333042 30) q(0 0 0 -1) r(2 2) U5'
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
  'Cache-Control',
  'max-age=0',
  'CF-Organization-Id',
  '3ubGFD1MWA6VgVYbIwSBg8',
  'CF-Space-Id',
  'bohepdihyxin',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 07 Jul 2020 14:48:54 GMT',
  'Referrer-Policy',
  'strict-origin-when-cross-origin',
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
  '3ac8894980854d96be38a471d8a05cd6',
  'X-Download-Options',
  'noopen',
  'X-Frame-Options',
  'ALLOWALL',
  'X-Permitted-Cross-Domain-Policies',
  'none',
  'X-XSS-Protection',
  '1; mode=block',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=AIqf7PV6Sx65UpgY01z0tlaLBF8AAAAAQUIPAAAAAACT+eEl0+fMcbUgkEjw3azA; expires=Wed, 07 Jul 2021 11:06:42 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=icaFHdvTEnwfycu1YMlkBAAAAAAWTkxR7CY/yJguljja29gp; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_245_673446=0pyRdEFwynZvU4gDPWpmA1aLBF8AAAAA0tYz1io7/KL8Ndi5JKSNJg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Incapsula',
  'X-Iinfo',
  '11-15015936-15015940 NNNY CT(0 0 0) RT(1594133333357 29) q(0 0 0 -1) r(9 9) U5'
]);