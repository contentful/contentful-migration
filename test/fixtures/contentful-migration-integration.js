const nock = require('nock');

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin')
  .reply(200, {
  "name":"Migrations CLI Test",
  "sys":{
    "type":"Space",
    "id":"bohepdihyxin",
    "version":1,
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
    "updatedAt":"2017-09-04T10:02:24Z"
  }
}

, [ 'Accept-Ranges',
  'bytes',
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature',
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
  '33lrAejsx0jnNQeRJgZ3EO',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Thu, 03 Jan 2019 15:10:11 GMT',
  'ETag',
  'W/"9794e7fe9bac8cf325815d01b4053837"',
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
  '18811b0fb0b2a2fc37a6151bf31189fc',
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
  'visid_incap_673446=sJMqD3UlRSavbwOTHlSfoNIlLlwAAAAAQUIPAAAAAAAiW5GnrMQEIDTKw0Qe3rsL; expires=Fri, 03 Jan 2020 10:03:36 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=YSv6dOEM93mm6Occ6lKYhQAAAABL7Bvxv0DD87bjLutyH2kp; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1079_673446=DPHyRM5esX1WdDm+9GD5DtIlLlwAAAAA+iBxpqHhFl/C7HYAOMMehw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '7-14748826-14748828 NNNN CT(107 217 0) RT(1546528210086 48) q(0 0 3 -1) r(5 5) U5',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration', {"name":"env-integration"})
  .reply(201, {"name":"env-integration","sys":{"type":"Environment","id":"env-integration","version":1,"space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"status":{"sys":{"type":"Link","linkType":"Status","id":"queued"}},"createdBy":{"sys":{"type":"Link","linkType":"User","id":"33kZDXNajFNmbngiu5MvUa"}},"createdAt":"2019-01-03T15:10:11Z","updatedBy":{"sys":{"type":"Link","linkType":"User","id":"33kZDXNajFNmbngiu5MvUa"}},"updatedAt":"2019-01-03T15:10:11Z"}}, [ 'Accept-Ranges',
  'bytes',
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature',
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
  '33lrAejsx0jnNQeRJgZ3EO',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Thu, 03 Jan 2019 15:10:11 GMT',
  'ETag',
  'W/"29c589277ef31130645f76f2906b0432"',
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
  'aae5945032fff802fb2fd07bf454bdb4',
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
  'visid_incap_673446=Fk2Yt1koSfCqBcVpbibz69MlLlwAAAAAQUIPAAAAAACu5Nl5BI2MLgsv9PXzAlLg; expires=Fri, 03 Jan 2020 10:04:47 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=CSHDB+CY7VrLd2SW6lKYhQAAAACFemgH/rTL/vgu9uUlmv/5; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1079_673446=TkNXRAqH7jpZdDm+9GD5DtMlLlwAAAAAOLrXoh9AGwChWhwIUaaxAA==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '13-5854694-5854695 NNNN CT(0 0 0) RT(1546528210714 18) q(0 0 0 -1) r(3 3) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration')
  .reply(200, {
  "name":"env-integration",
  "sys":{
    "type":"Environment",
    "id":"env-integration",
    "version":2,
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
        "id":"inProgress"
      }
    },
    "createdBy":{
      "sys":{
        "type":"Link",
        "linkType":"User",
        "id":"33kZDXNajFNmbngiu5MvUa"
      }
    },
    "createdAt":"2019-01-03T15:10:11Z",
    "updatedBy":{
      "sys":{
        "type":"Link",
        "linkType":"User",
        "id":"33kZDXNajFNmbngiu5MvUa"
      }
    },
    "updatedAt":"2019-01-03T15:10:11Z"
  }
}

, [ 'Accept-Ranges',
  'bytes',
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature',
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
  '33lrAejsx0jnNQeRJgZ3EO',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Thu, 03 Jan 2019 15:10:11 GMT',
  'ETag',
  'W/"f717c2d3f3dae6788f492db18dba70bb"',
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
  '5430cd8954cc60e54381c155a10ee19d',
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
  'visid_incap_673446=yG8PmgkIS1mkwBfLGFVGlNMlLlwAAAAAQUIPAAAAAACMDGeDowqkNGl+qaiSUi2d; expires=Fri, 03 Jan 2020 10:03:33 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=pH+aD/pNGwzqkrxN6lKYhQAAAADpGEMXZjsqy3YIS0D7mIsq; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1079_673446=qaarUatMcxpbdDm+9GD5DtMlLlwAAAAAkXqKwZWjGa3i9HP/KpJe6w==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '6-10941626-10941627 NNNN CT(0 0 0) RT(1546528211095 16) q(0 0 0 -1) r(1 1) U5',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration')
  .reply(200, {
  "name":"env-integration",
  "sys":{
    "type":"Environment",
    "id":"env-integration",
    "version":6,
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
        "id":"33kZDXNajFNmbngiu5MvUa"
      }
    },
    "createdAt":"2019-01-03T15:10:11Z",
    "updatedBy":{
      "sys":{
        "type":"Link",
        "linkType":"User",
        "id":"33kZDXNajFNmbngiu5MvUa"
      }
    },
    "updatedAt":"2019-01-03T15:10:12Z"
  }
}

, [ 'Accept-Ranges',
  'bytes',
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature',
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
  '33lrAejsx0jnNQeRJgZ3EO',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Thu, 03 Jan 2019 15:10:13 GMT',
  'ETag',
  'W/"d26abc397cd5f971c8e88bc5acf1e378"',
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
  'e492d35bfba2ea388ddc081c7eafbb03',
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
  'visid_incap_673446=3p0QfGrzR9i+7ZUfNje39NQlLlwAAAAAQUIPAAAAAADkSKB4NSADyjESarLhzQjz; expires=Fri, 03 Jan 2020 10:03:30 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=O0s6GTFK60l5pYcs6lKYhQAAAAADi/LZdJ6SLE8OP6rj2sr1; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1079_673446=/UYoFl7GmTtkdDm+9GD5DtQlLlwAAAAAmZR/jeQFXzciVlpaC/IEsw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '2-11880456-11880458 NNNN CT(105 106 0) RT(1546528212333 19) q(0 0 2 -1) r(5 5) U5',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/content_types')
  .query({"sys.id":{"in":"dog"},"skip":"0"})
  .reply(200, {
  "sys": {
    "type": "Array"
  },
  "total": 0,
  "skip": 0,
  "limit": 100,
  "items": []
}
, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Thu, 03 Jan 2019 15:10:13 GMT',
  'ETag',
  '"29f2c21be26360c424f617d8592cf6f9"',
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
  '1ed8f174370464d7172ecdff37b3d80c',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=gRJw1PXfQSa0xlopa/YTeNUlLlwAAAAAQUIPAAAAAADVSyTmBqIhbBjSbbPu1mcc; expires=Fri, 03 Jan 2020 10:03:55 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=VBIycYlaTm2MNiNE6lKYhQAAAAAL8daPb8SlFe5apsfgjq6f; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1079_673446=bXRtfx7VDEJqdDm+9GD5DtUlLlwAAAAAxRxdiE+z3eUp5tdxljHziA==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '1-8937034-8937036 NNNN CT(98 99 0) RT(1546528212880 38) q(0 0 2 -1) r(4 4) U5',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/locales')
  .query({"skip":"0"})
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
        "createdBy":{
          "sys":{
            "type":"Link",
            "linkType":"User",
            "id":"33kZDXNajFNmbngiu5MvUa"
          }
        },
        "createdAt":"2019-01-03T15:10:11Z",
        "updatedBy":{
          "sys":{
            "type":"Link",
            "linkType":"User",
            "id":"33kZDXNajFNmbngiu5MvUa"
          }
        },
        "updatedAt":"2019-01-03T15:10:11Z"
      }
    }
  ]
}

, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature',
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
  '33lrAejsx0jnNQeRJgZ3EO',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Thu, 03 Jan 2019 15:10:14 GMT',
  'ETag',
  'W/"b07cce46a981fab8fe72a0554f5de2b5"',
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
  '495541fe49f3c890a3131f476e190a74',
  'X-Download-Options',
  'noopen',
  'X-Frame-Options',
  'ALLOWALL',
  'X-Permitted-Cross-Domain-Policies',
  'none',
  'X-XSS-Protection',
  '1; mode=block',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=qVweNogaQwyhniyG8oIf29UlLlwAAAAAQUIPAAAAAACzlyyoO7cxjl+aa+Uvhbqo; expires=Fri, 03 Jan 2020 10:03:36 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=cbWeKgc1Yjs58BFd6lKYhQAAAACUxVJFikpgHKFLWU3ctO8B; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1079_673446=84dWJmEnOEFudDm+9GD5DtUlLlwAAAAAVj83sx0kUjFYt3CFJxml1g==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '7-14748840-14748841 NNNN CT(114 115 0) RT(1546528213429 22) q(0 0 2 -1) r(4 4) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/dog', {"name":"angry dog","fields":[{"id":"woofs","name":"woof woof","type":"Number","required":true}],"description":"super angry"})
  .reply(201, {"sys":{"space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"id":"dog","type":"ContentType","createdAt":"2019-01-03T15:10:14.660Z","updatedAt":"2019-01-03T15:10:14.660Z","environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}},"createdBy":{"sys":{"type":"Link","linkType":"User","id":"33kZDXNajFNmbngiu5MvUa"}},"updatedBy":{"sys":{"type":"Link","linkType":"User","id":"33kZDXNajFNmbngiu5MvUa"}},"version":1},"displayField":null,"name":"angry dog","description":"super angry","fields":[{"id":"woofs","name":"woof woof","type":"Number","localized":false,"required":true,"validations":[],"disabled":false,"omitted":false}]}, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Thu, 03 Jan 2019 15:10:14 GMT',
  'ETag',
  '"4c10dc2eb478624b614f5f85cbb0686c"',
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
  '1a114726e9ed07f362681a525ac52b61',
  'Content-Length',
  '1024',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=xeyInhS2RC6gZwOG7scqu9YlLlwAAAAAQUIPAAAAAADDD5WWNBfqCvEywLZbyQZC; expires=Fri, 03 Jan 2020 10:03:12 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=Mo6hDH55p1Qun6+K6lKYhQAAAAAp6n+SfhjR7TxbgJ6CD0ly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1079_673446=On5sQlyPn3J6dDm+9GD5DtYlLlwAAAAAsVAVnZDZzUPIyy3Yu8Gq1Q==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '3-12874489-12874491 NNNN CT(0 0 0) RT(1546528213920 20) q(0 0 0 -1) r(3 3) U5',
  'X-CDN',
  'Incapsula' ]);


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
    "createdAt": "2019-01-03T15:10:14.660Z",
    "updatedAt": "2019-01-03T15:10:15.267Z",
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
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
    "version": 2,
    "firstPublishedAt": "2019-01-03T15:10:15.267Z",
    "publishedCounter": 1,
    "publishedAt": "2019-01-03T15:10:15.267Z",
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "33kZDXNajFNmbngiu5MvUa"
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
, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Thu, 03 Jan 2019 15:10:15 GMT',
  'ETag',
  'W/"b212e3e4f9cfa8e217367fe9f5971a33"',
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
  '57fe9e132f35c2f3729b09a89063efcd',
  'Content-Length',
  '443',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=NK8EkURPQ3SycgcB0SS1hdYlLlwAAAAAQUIPAAAAAACTU9orRUyEXTJ8R3MnPViA; expires=Fri, 03 Jan 2020 10:04:47 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=2B+oOUtEPhnF4qjp6lKYhQAAAADTLBsfJ76IGRjKlXJkRTAk; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1079_673446=NgBoNnyuCxGDdDm+9GD5DtYlLlwAAAAAyi5tWhdk+9OhjySBEIFlGA==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '13-5854712-5854714 NNNN CT(106 106 0) RT(1546528214329 19) q(0 0 2 -1) r(6 6) U5',
  'X-CDN',
  'Incapsula' ]);


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
    "createdAt": "2019-01-03T15:10:14.660Z",
    "updatedAt": "2019-01-03T15:10:15.267Z",
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
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
    "publishedCounter": 1,
    "version": 2,
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
    "publishedVersion": 1,
    "firstPublishedAt": "2019-01-03T15:10:15.267Z",
    "publishedAt": "2019-01-03T15:10:15.267Z"
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
, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Thu, 03 Jan 2019 15:10:15 GMT',
  'ETag',
  'W/"1e6596d24961a0d06c5ddd25ab27c214"',
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
  '2302a38d56fb7c9eaf5efbc9d95c7fc5',
  'Content-Length',
  '443',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=juK8wE+RR5quOWHKeK6tqNclLlwAAAAAQUIPAAAAAAAnIfXYTwsGu/6UnykZLU9D; expires=Fri, 03 Jan 2020 10:03:41 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=2RW1C2GVVVxsSJHQ6lKYhQAAAACqgL8rVgizNeqAVMVOzKsS; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1079_673446=ieE9bVATAk2JdDm+9GD5DtclLlwAAAAACqiNDE7m2E8ridgC9gxdvg==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '0-9046403-9046404 NNNN CT(0 0 0) RT(1546528215065 19) q(0 0 0 -1) r(3 3) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/content_types')
  .query({"sys.id":{"in":"dog"},"skip":"0"})
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
        "createdAt": "2019-01-03T15:10:14.660Z",
        "updatedAt": "2019-01-03T15:10:15.267Z",
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
            "id": "33kZDXNajFNmbngiu5MvUa"
          }
        },
        "updatedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "33kZDXNajFNmbngiu5MvUa"
          }
        },
        "publishedCounter": 1,
        "version": 2,
        "publishedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "33kZDXNajFNmbngiu5MvUa"
          }
        },
        "publishedVersion": 1,
        "firstPublishedAt": "2019-01-03T15:10:15.267Z",
        "publishedAt": "2019-01-03T15:10:15.267Z"
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
, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Thu, 03 Jan 2019 15:10:21 GMT',
  'ETag',
  'W/"a07370d86f14952d012018065c585122"',
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
  'b4bdd905031696837ff653687a7f1efe',
  'Content-Length',
  '509',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=aNto/MXWQAmgQajvME1l7twlLlwAAAAAQUIPAAAAAACc12V2eb0xphwSNgcQmUlG; expires=Fri, 03 Jan 2020 10:06:00 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=48ebOhtLtn55VkqT6lKYhQAAAAAdmaZtmfTjNfMjMCPvCcGe; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1079_673446=PjaZK1f/YWerdDm+9GD5DtwlLlwAAAAAh4Ii2dC6CUbaBsUyhls24Q==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '11-4291084-4291085 NNNN CT(105 106 0) RT(1546528220372 19) q(0 0 3 -1) r(4 4) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/locales')
  .query({"skip":"0"})
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
        "createdBy":{
          "sys":{
            "type":"Link",
            "linkType":"User",
            "id":"33kZDXNajFNmbngiu5MvUa"
          }
        },
        "createdAt":"2019-01-03T15:10:11Z",
        "updatedBy":{
          "sys":{
            "type":"Link",
            "linkType":"User",
            "id":"33kZDXNajFNmbngiu5MvUa"
          }
        },
        "updatedAt":"2019-01-03T15:10:11Z"
      }
    }
  ]
}

, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature',
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
  '33lrAejsx0jnNQeRJgZ3EO',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Thu, 03 Jan 2019 15:10:21 GMT',
  'ETag',
  'W/"b07cce46a981fab8fe72a0554f5de2b5"',
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
  '4042e6574e9051cbbad0b52234cc5ac6',
  'X-Download-Options',
  'noopen',
  'X-Frame-Options',
  'ALLOWALL',
  'X-Permitted-Cross-Domain-Policies',
  'none',
  'X-XSS-Protection',
  '1; mode=block',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=GIhlkp7WScONQZqh6CNDLN0lLlwAAAAAQUIPAAAAAAB/ie6hfrswmKF25Z5G94uY; expires=Fri, 03 Jan 2020 10:03:33 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=8gupC0QuGn8qojzo6lKYhQAAAADqoHAV/NWNnhKP2hv7Dy1l; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1079_673446=Sa8BPimnxm6xdDm+9GD5Dt0lLlwAAAAA1OEjW4ED2Hnl+7R4OcvHmQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '6-10941660-10941661 NNNN CT(106 106 0) RT(1546528220801 21) q(0 0 2 -1) r(4 4) U5',
  'X-CDN',
  'Incapsula' ]);


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
    "createdAt": "2019-01-03T15:10:14.660Z",
    "updatedAt": "2019-01-03T15:10:22.191Z",
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
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
    "publishedCounter": 1,
    "version": 3,
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
    "publishedVersion": 1,
    "firstPublishedAt": "2019-01-03T15:10:15.267Z",
    "publishedAt": "2019-01-03T15:10:15.267Z"
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
, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Thu, 03 Jan 2019 15:10:22 GMT',
  'ETag',
  'W/"182ae78c9de5bdf17a60f6961c6d041c"',
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
  '4a3062c80e6ae23710bafc6a99a0a03c',
  'Content-Length',
  '447',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=pm9DWHmhQOqahnrGHhvfi90lLlwAAAAAQUIPAAAAAAAHN++O2hwgBL2MFFl4l+Fq; expires=Fri, 03 Jan 2020 10:05:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=Y1hORw65cW82q0Hx6lKYhQAAAADIhNYq2lJbYiYwytk4lyc9; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1079_673446=BNx+ORXoajW0dDm+9GD5Dt0lLlwAAAAA0jY8FBkVUk7mCz8l+CFfFQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '12-4982460-4982461 NNNN CT(105 106 0) RT(1546528221263 18) q(0 0 2 -1) r(4 4) U5',
  'X-CDN',
  'Incapsula' ]);


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
    "createdAt": "2019-01-03T15:10:14.660Z",
    "updatedAt": "2019-01-03T15:10:22.796Z",
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
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
    "publishedCounter": 2,
    "version": 4,
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
    "publishedVersion": 3,
    "firstPublishedAt": "2019-01-03T15:10:15.267Z",
    "publishedAt": "2019-01-03T15:10:22.796Z"
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
, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Thu, 03 Jan 2019 15:10:24 GMT',
  'ETag',
  'W/"f07e864634abc2519f11e6a519e023e5"',
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
  '83ecdb18dcf0f63afa3b2ef3409f1730',
  'Content-Length',
  '451',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=qcxKu8JgR12TwAAhybY+ht8lLlwAAAAAQUIPAAAAAACTuOWySc9A7ITrvrPxaana; expires=Fri, 03 Jan 2020 10:03:36 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=JHNHYA82OxP5zPUu6lKYhQAAAAAYttLz6AztrR7zoQ4msNIG; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1079_673446=CqMlcTmiQnTFdDm+9GD5Dt8lLlwAAAAAS31OODwAxaMcEKWDZwE9Ig==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '7-14748918-14748919 NNNN CT(97 98 0) RT(1546528221721 17) q(0 0 2 -1) r(19 19) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/dog', {"name":"angry dog","displayField":null,"fields":[{"id":"woofs","name":"woof woof","type":"Number","localized":false,"required":true,"validations":[],"disabled":false,"omitted":true,"deleted":true}],"description":"super angry"})
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
    "createdAt": "2019-01-03T15:10:14.660Z",
    "updatedAt": "2019-01-03T15:10:24.502Z",
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
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
    "publishedCounter": 2,
    "version": 5,
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
    "publishedVersion": 3,
    "firstPublishedAt": "2019-01-03T15:10:15.267Z",
    "publishedAt": "2019-01-03T15:10:22.796Z"
  },
  "displayField": null,
  "name": "angry dog",
  "description": "super angry",
  "fields": []
}
, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Thu, 03 Jan 2019 15:10:24 GMT',
  'ETag',
  'W/"c88ff01f2fb019bfd15b31042ecb44d5"',
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
  'b18ad4ef18012d2e5b98003e9ae84db8',
  'Content-Length',
  '371',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=J4pbRuXaRFqp6VKbDWu/u98lLlwAAAAAQUIPAAAAAABNBNv+IqfuT27jhriwFXQk; expires=Fri, 03 Jan 2020 10:03:36 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=WyrEF0AhDwfTfUUg6lKYhQAAAADtoxH4EsQa/2K3qMlVl3Qk; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1079_673446=Vnfrad/FxALHdDm+9GD5Dt8lLlwAAAAA6p20YxavGVo+8rEiQly5fA==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '7-14748934-14748935 NNNN CT(0 0 0) RT(1546528223775 19) q(0 0 0 -1) r(2 2) U5',
  'X-CDN',
  'Incapsula' ]);


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
    "createdAt": "2019-01-03T15:10:14.660Z",
    "updatedAt": "2019-01-03T15:10:24.971Z",
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
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
    "publishedCounter": 3,
    "version": 6,
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
    "publishedVersion": 5,
    "firstPublishedAt": "2019-01-03T15:10:15.267Z",
    "publishedAt": "2019-01-03T15:10:24.971Z"
  },
  "displayField": null,
  "name": "angry dog",
  "description": "super angry",
  "fields": []
}
, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Thu, 03 Jan 2019 15:10:25 GMT',
  'ETag',
  'W/"354da510f3ef53b289ae4966322c2d8c"',
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
  '28e5e0fab526228992f329e3a55d20d9',
  'Content-Length',
  '368',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=fAAcNouyQz6BuWknr1yD3eAlLlwAAAAAQUIPAAAAAAB4qG6lU+zZ/n/ocwp88GRm; expires=Fri, 03 Jan 2020 10:03:30 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=gnWocSwr2wHQs0/66lKYhQAAAABMVtunbhQmSBRdw0BZTNOl; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1079_673446=x3G6coVyeT7NdDm+9GD5DuAlLlwAAAAAoVPsvYdP3KCjFeziqwrogw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '2-11880527-11880528 NNNN CT(107 106 0) RT(1546528224019 16) q(0 0 2 -1) r(5 5) U5',
  'X-CDN',
  'Incapsula' ]);


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
    "createdAt": "2019-01-03T15:10:14.660Z",
    "updatedAt": "2019-01-03T15:10:24.971Z",
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
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
    "publishedCounter": 3,
    "version": 6,
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
    "publishedVersion": 5,
    "firstPublishedAt": "2019-01-03T15:10:15.267Z",
    "publishedAt": "2019-01-03T15:10:24.971Z"
  },
  "displayField": null,
  "name": "angry dog",
  "description": "super angry",
  "fields": []
}
, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Thu, 03 Jan 2019 15:10:25 GMT',
  'ETag',
  'W/"354da510f3ef53b289ae4966322c2d8c"',
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
  '6ba01acda716659602f304cd7befdb27',
  'Content-Length',
  '368',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=U9CwJdvATHq1bZJqEGwd5+ElLlwAAAAAQUIPAAAAAABVrjxaQRV2oRD6JRyCIMjL; expires=Fri, 03 Jan 2020 10:03:22 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=XztbbNXf+WZBgbbO6lKYhQAAAAA9eZrHXFd6JaEYSsmwsGMg; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1079_673446=chQRO0+/ZzLQdDm+9GD5DuElLlwAAAAAv1fORx3gSQ0pYpnVptWo0Q==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '5-17025224-17025225 NNNN CT(107 107 0) RT(1546528224617 16) q(0 0 2 -1) r(4 4) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/content_types')
  .query({"sys.id":{"in":"dog"},"skip":"0"})
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
        "createdAt": "2019-01-03T15:10:14.660Z",
        "updatedAt": "2019-01-03T15:10:24.971Z",
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
            "id": "33kZDXNajFNmbngiu5MvUa"
          }
        },
        "updatedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "33kZDXNajFNmbngiu5MvUa"
          }
        },
        "publishedCounter": 3,
        "version": 6,
        "publishedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "33kZDXNajFNmbngiu5MvUa"
          }
        },
        "publishedVersion": 5,
        "firstPublishedAt": "2019-01-03T15:10:15.267Z",
        "publishedAt": "2019-01-03T15:10:24.971Z"
      },
      "displayField": null,
      "name": "angry dog",
      "description": "super angry",
      "fields": []
    }
  ]
}
, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Thu, 03 Jan 2019 15:10:25 GMT',
  'ETag',
  'W/"99457cfa6631600793b31d7fdb82e047"',
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
  'e337b27bf827c95683ca233c93ceb8f9',
  'Content-Length',
  '434',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=8gOUaTVVSUOiIuzOh2+4AuElLlwAAAAAQUIPAAAAAAA6qXflcmMffyxGHcp0bXfj; expires=Fri, 03 Jan 2020 10:03:59 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=xRIUDhBCHWbd04Vf6lKYhQAAAACz1F3DpBkj/78mGru2r5u+; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1079_673446=Ip0pKXF5QnPTdDm+9GD5DuElLlwAAAAA5GivnN+tbcAqZ+kOP39Q5w==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '14-10901491-10901492 NNNN CT(0 0 0) RT(1546528225157 24) q(0 0 0 -1) r(3 3) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/locales')
  .query({"skip":"0"})
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
        "createdBy":{
          "sys":{
            "type":"Link",
            "linkType":"User",
            "id":"33kZDXNajFNmbngiu5MvUa"
          }
        },
        "createdAt":"2019-01-03T15:10:11Z",
        "updatedBy":{
          "sys":{
            "type":"Link",
            "linkType":"User",
            "id":"33kZDXNajFNmbngiu5MvUa"
          }
        },
        "updatedAt":"2019-01-03T15:10:11Z"
      }
    }
  ]
}

, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature',
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
  '33lrAejsx0jnNQeRJgZ3EO',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Thu, 03 Jan 2019 15:10:26 GMT',
  'ETag',
  'W/"b07cce46a981fab8fe72a0554f5de2b5"',
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
  'f23f558a825370d1b8955d9e9a27c1cd',
  'X-Download-Options',
  'noopen',
  'X-Frame-Options',
  'ALLOWALL',
  'X-Permitted-Cross-Domain-Policies',
  'none',
  'X-XSS-Protection',
  '1; mode=block',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=w4TMqlACQdakjr1XYzkFCOElLlwAAAAAQUIPAAAAAACYV2TtVMwGCtnuC66ncdaU; expires=Fri, 03 Jan 2020 10:03:12 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=EVTfPRauj0vG1cDF6lKYhQAAAACAXWhmiUwO1IHO0vpC7BTK; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1079_673446=CjQMRCfTc1HUdDm+9GD5DuElLlwAAAAAQPbzBgpInDMaDmtMSoI4Zw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '3-12874611-12874612 NNNN CT(0 0 0) RT(1546528225441 17) q(0 0 0 -1) r(2 2) U5',
  'X-CDN',
  'Incapsula' ]);


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
    "createdAt": "2019-01-03T15:10:14.660Z",
    "updatedAt": "2019-01-03T15:10:26.393Z",
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
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
    "publishedCounter": 3,
    "version": 7,
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
    "publishedVersion": 5,
    "firstPublishedAt": "2019-01-03T15:10:15.267Z",
    "publishedAt": "2019-01-03T15:10:24.971Z"
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
, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Thu, 03 Jan 2019 15:10:26 GMT',
  'ETag',
  'W/"ca3eec011394abe5993a3dd1f053129f"',
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
  '93f8699de62aeefafaab74c7389b082d',
  'Content-Length',
  '493',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=e8duChgCTbu5Ic5lv8071uElLlwAAAAAQUIPAAAAAAAZC2Km58kNpOeKIdsk3aCC; expires=Fri, 03 Jan 2020 10:03:33 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=0ERuA7VAJQtBLHyl6lKYhQAAAAAd21VUVGWVD/PcCGDtIzbO; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1079_673446=65PYI6K5VXbYdDm+9GD5DuElLlwAAAAAfPEI0s+syYlRzHdzmcvP8A==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '6-10941674-10941675 NNNN CT(0 0 0) RT(1546528225671 21) q(0 0 0 -1) r(2 2) U5',
  'X-CDN',
  'Incapsula' ]);


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
    "createdAt": "2019-01-03T15:10:14.660Z",
    "updatedAt": "2019-01-03T15:10:26.829Z",
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
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
    "publishedCounter": 4,
    "version": 8,
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
    "publishedVersion": 7,
    "firstPublishedAt": "2019-01-03T15:10:15.267Z",
    "publishedAt": "2019-01-03T15:10:26.829Z"
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
, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Thu, 03 Jan 2019 15:10:27 GMT',
  'ETag',
  'W/"afd509d55cda31a4fff22595e31aed69"',
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
  'c4a53b57e7da69d2a4eda208cc638982',
  'Content-Length',
  '490',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=UbFkNdN1SSK2oi9cplOifeIlLlwAAAAAQUIPAAAAAAC3pAH7MFdrbTGA2Za7M9AC; expires=Fri, 03 Jan 2020 10:03:30 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=L9nNHnQ/n0mE0sKS6lKYhQAAAAC47AQEBGun2ajq+neAPQPk; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1079_673446=cAe1fIxXiiDbdDm+9GD5DuIlLlwAAAAAix1h/Dh9lMy11uLUHWJWkQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '2-11880557-11880558 NNNN CT(106 107 0) RT(1546528225912 17) q(0 0 2 -1) r(5 5) U5',
  'X-CDN',
  'Incapsula' ]);


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
    "createdAt": "2019-01-03T15:10:14.660Z",
    "updatedAt": "2019-01-03T15:10:26.829Z",
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
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
    "publishedCounter": 4,
    "version": 8,
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
    "publishedVersion": 7,
    "firstPublishedAt": "2019-01-03T15:10:15.267Z",
    "publishedAt": "2019-01-03T15:10:26.829Z"
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
, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Thu, 03 Jan 2019 15:10:27 GMT',
  'ETag',
  'W/"afd509d55cda31a4fff22595e31aed69"',
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
  '6d8cadf2f17d91c58ab8067e228e9ace',
  'Content-Length',
  '490',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=o8Mgsz5ZRF2sRi0YM648LuIlLlwAAAAAQUIPAAAAAAC15riwd/zDEdo8XvucgmWB; expires=Fri, 03 Jan 2020 10:03:41 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=CAmgVlj+3B2LpI7F6lKYhQAAAADMmNjMM9GKPefWz99I5nfO; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1079_673446=rvLYKJE9jnTkdDm+9GD5DuIlLlwAAAAAwuShprvHLrXAJmw7LlrpoA==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '0-9046474-9046476 NNNN CT(99 99 0) RT(1546528226498 18) q(0 0 2 -1) r(4 4) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/content_types')
  .query({"sys.id":{"in":"dog"},"skip":"0"})
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
        "createdAt": "2019-01-03T15:10:14.660Z",
        "updatedAt": "2019-01-03T15:10:26.829Z",
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
            "id": "33kZDXNajFNmbngiu5MvUa"
          }
        },
        "updatedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "33kZDXNajFNmbngiu5MvUa"
          }
        },
        "publishedCounter": 4,
        "version": 8,
        "publishedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "33kZDXNajFNmbngiu5MvUa"
          }
        },
        "publishedVersion": 7,
        "firstPublishedAt": "2019-01-03T15:10:15.267Z",
        "publishedAt": "2019-01-03T15:10:26.829Z"
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
, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Thu, 03 Jan 2019 15:10:27 GMT',
  'ETag',
  'W/"5aac3cfe90ad597b9d66c5817d747952"',
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
  '363a6278bc104a3f26a704806e036d70',
  'Content-Length',
  '555',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=8E11Dp+TQnS+72McLXFup+MlLlwAAAAAQUIPAAAAAACbCZf2uRdGa1/tAeXWCj/W; expires=Fri, 03 Jan 2020 10:03:41 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=LtyNOTORy1xaL0fS6lKYhQAAAADAiDXllN+9RLpYSN2y1XIf; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1079_673446=NcRiEzGPb3XpdDm+9GD5DuMlLlwAAAAAt+HXrmN2Ciah/yqAk12aCQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '0-9046477-9046478 NNNN CT(0 0 0) RT(1546528227008 17) q(0 0 0 -1) r(1 1) U5',
  'X-CDN',
  'Incapsula' ]);


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
    "createdAt": "2019-01-03T15:10:15.405Z",
    "createdBy": {
      "sys": {
        "id": "33kZDXNajFNmbngiu5MvUa",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2019-01-03T15:10:26.919Z",
    "updatedBy": {
      "sys": {
        "id": "33kZDXNajFNmbngiu5MvUa",
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
      "fieldId": "goodboys",
      "widgetId": "numberEditor"
    }
  ]
}
, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Thu, 03 Jan 2019 15:10:27 GMT',
  'ETag',
  '"4af7e80e06a0f3730c99c78cf8091150"',
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
  '780fa838f0485abf4cacd68f03107405',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=n6MbleLLRhqNnFM231nYF+MlLlwAAAAAQUIPAAAAAAAxFUQEKK+W3CaY1lJ6g3+g; expires=Fri, 03 Jan 2020 10:03:12 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=MWMKa4q5l0VhBfVX6lKYhQAAAAAqh8sRv1tBD3oxuEP92L9m; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1079_673446=VdqdUkhX2A/tdDm+9GD5DuMlLlwAAAAAiHcI3cM/zGbX7ovGaw5DJQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '3-12874617-12874618 NNNN CT(0 0 0) RT(1546528227216 34) q(0 0 0 -1) r(1 1) U5',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/locales')
  .query({"skip":"0"})
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
        "createdBy":{
          "sys":{
            "type":"Link",
            "linkType":"User",
            "id":"33kZDXNajFNmbngiu5MvUa"
          }
        },
        "createdAt":"2019-01-03T15:10:11Z",
        "updatedBy":{
          "sys":{
            "type":"Link",
            "linkType":"User",
            "id":"33kZDXNajFNmbngiu5MvUa"
          }
        },
        "updatedAt":"2019-01-03T15:10:11Z"
      }
    }
  ]
}

, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature',
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
  '33lrAejsx0jnNQeRJgZ3EO',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Thu, 03 Jan 2019 15:10:28 GMT',
  'ETag',
  'W/"b07cce46a981fab8fe72a0554f5de2b5"',
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
  '239f49d7d3c2eda7bb03c5f2b3434dd4',
  'X-Download-Options',
  'noopen',
  'X-Frame-Options',
  'ALLOWALL',
  'X-Permitted-Cross-Domain-Policies',
  'none',
  'X-XSS-Protection',
  '1; mode=block',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=2QKW+g/uSnSRkzRieSXYjuMlLlwAAAAAQUIPAAAAAAAcnaajp6Dvla1J7ZV1jJQw; expires=Fri, 03 Jan 2020 10:03:33 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=tdziDzJDkgTT80eu6lKYhQAAAAAhPuvSfDKFgo8Q6L2rJ+5u; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1079_673446=BnS1SZOoM2PxdDm+9GD5DuMlLlwAAAAAzZPC9VNHs8TY6r1aUyPSfw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '6-10941679-10941680 NNNN CT(114 114 0) RT(1546528227441 19) q(0 0 2 -1) r(4 4) U5',
  'X-CDN',
  'Incapsula' ]);


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
    "createdAt": "2019-01-03T15:10:14.660Z",
    "updatedAt": "2019-01-03T15:10:28.700Z",
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
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
    "publishedCounter": 4,
    "version": 9,
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
    "publishedVersion": 7,
    "firstPublishedAt": "2019-01-03T15:10:15.267Z",
    "publishedAt": "2019-01-03T15:10:26.829Z"
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
, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Thu, 03 Jan 2019 15:10:28 GMT',
  'ETag',
  'W/"c3f5bb7dbea82bd12e882e9e93f11193"',
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
  '1a611da7c9a8817410340722bad0da96',
  'Content-Length',
  '499',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=oY79unW4QLGILVt6lQctouQlLlwAAAAAQUIPAAAAAACu4ZHuaLBg8NFatd6YhDpi; expires=Fri, 03 Jan 2020 10:07:21 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=9YEgGq5Kt3sS12p26lKYhQAAAAD2JBalnBLuxTm29Zyvy7b9; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1079_673446=NcPDM11w2h7zdDm+9GD5DuQlLlwAAAAA8O4+cDodu5OxF9zvAGxfgg==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '8-3872067-3872068 NNNN CT(0 0 0) RT(1546528227989 19) q(0 0 0 -1) r(1 1) U5',
  'X-CDN',
  'Incapsula' ]);


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
    "createdAt": "2019-01-03T15:10:14.660Z",
    "updatedAt": "2019-01-03T15:10:29.127Z",
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
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
    "publishedCounter": 5,
    "version": 10,
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
    "publishedVersion": 9,
    "firstPublishedAt": "2019-01-03T15:10:15.267Z",
    "publishedAt": "2019-01-03T15:10:29.127Z"
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
, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Thu, 03 Jan 2019 15:10:29 GMT',
  'ETag',
  'W/"2adb42366986e9409c7f2bdb76989350"',
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
  'a6f4a5bcbccecacbf7505357503880ff',
  'Content-Length',
  '494',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=lEvgxaTBTTeeDC1MDrT0PeQlLlwAAAAAQUIPAAAAAACENojM2PFFWo3clj3YrF1J; expires=Fri, 03 Jan 2020 10:03:26 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=77/eMTB5RCP16dB56lKYhQAAAADEC9ltGAn/Pa2T9ttbxqEZ; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1079_673446=N5sBHy4sTk/2dDm+9GD5DuQlLlwAAAAAO8UGM2p2xIVQiZQIJ9YGbw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '4-15565826-15565827 NNNN CT(98 99 0) RT(1546528228227 17) q(0 0 2 -1) r(6 6) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/dog/editor_interface', {"controls":[{"fieldId":"aDifferentId","widgetId":"numberEditor"}]})
  .reply(200, {"controls":[{"fieldId":"aDifferentId","widgetId":"numberEditor"}],"sys":{"id":"default","type":"EditorInterface","space":{"sys":{"id":"bohepdihyxin","type":"Link","linkType":"Space"}},"version":6,"createdAt":"2019-01-03T15:10:15.405Z","createdBy":{"sys":{"id":"33kZDXNajFNmbngiu5MvUa","type":"Link","linkType":"User"}},"updatedAt":"2019-01-03T15:10:29.774Z","updatedBy":{"sys":{"type":"Link","linkType":"User","id":"33kZDXNajFNmbngiu5MvUa"}},"contentType":{"sys":{"id":"dog","type":"Link","linkType":"ContentType"}},"environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}}}}, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Thu, 03 Jan 2019 15:10:29 GMT',
  'ETag',
  '"8075fc5521d9b20d7403a845932b8ef6"',
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
  '396b0d1aad2ae45dfddc6ca3b6c1dcfb',
  'Content-Length',
  '956',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=CLDQ/eQuS+COObcqlDevNOUlLlwAAAAAQUIPAAAAAADBtpDduSa2flydsKYXc/bW; expires=Fri, 03 Jan 2020 10:03:59 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=UfB/FfBhXjuqzElu6lKYhQAAAACRsbJ2jXTZUFkBoPxS7QBM; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1079_673446=pTlkBzHayir7dDm+9GD5DuUlLlwAAAAAy3/Nrv6Nug4WvAQlNc8gvw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '14-10901500-10901502 NNNN CT(114 115 0) RT(1546528228841 17) q(0 0 2 -1) r(5 5) U5',
  'X-CDN',
  'Incapsula' ]);


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
    "createdAt": "2019-01-03T15:10:14.660Z",
    "updatedAt": "2019-01-03T15:10:30.152Z",
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
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
    "publishedCounter": 5,
    "version": 11,
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
    "publishedVersion": 9,
    "firstPublishedAt": "2019-01-03T15:10:15.267Z",
    "publishedAt": "2019-01-03T15:10:29.127Z"
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
, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Thu, 03 Jan 2019 15:10:30 GMT',
  'ETag',
  'W/"500b110573ffb4ddb2d6ddf8e753c00a"',
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
  '918b7df7440793beb4fc96046c4cafe8',
  'Content-Length',
  '490',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=y4Z26avfSNyZ2222LgxPFOUlLlwAAAAAQUIPAAAAAACxarieuxIM2N+QNqQCU27I; expires=Fri, 03 Jan 2020 10:03:36 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=ZYhyF7ox3DiKcZjQ6lKYhQAAAADzrwRdKf1J/lwkm6joKg1l; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1079_673446=eMKXYB7ZJAz+dDm+9GD5DuUlLlwAAAAAFsNT4jYG6LqzC47DesrU7g==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '7-14748993-14748994 NNNN CT(0 0 0) RT(1546528229404 19) q(0 0 0 -1) r(2 2) U5',
  'X-CDN',
  'Incapsula' ]);


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
    "createdAt": "2019-01-03T15:10:14.660Z",
    "updatedAt": "2019-01-03T15:10:30.615Z",
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
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
    "publishedCounter": 6,
    "version": 12,
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
    "publishedVersion": 11,
    "firstPublishedAt": "2019-01-03T15:10:15.267Z",
    "publishedAt": "2019-01-03T15:10:30.615Z"
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
, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Thu, 03 Jan 2019 15:10:30 GMT',
  'ETag',
  'W/"eb7ad09b1634ceb580ce0324114f25d4"',
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
  'de26591d97ae164c935ee4d24ee8144a',
  'Content-Length',
  '487',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=vDu2lhq0T+WOFrC/lIrbSeYlLlwAAAAAQUIPAAAAAAB35exLRE6WfJ3xlYrNZeAB; expires=Fri, 03 Jan 2020 10:08:03 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=At0DKkfVom6kBls36lKYhQAAAADM9eVmmhL66nHDNdv3DqCn; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1079_673446=BS//X3mT6h4CdTm+9GD5DuYlLlwAAAAA7MoupwYc/nHe/vrhHyC1Ow==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '9-3641202-3641203 NNNN CT(113 114 0) RT(1546528229686 17) q(0 0 2 -1) r(6 6) U5',
  'X-CDN',
  'Incapsula' ]);


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
    "createdAt": "2019-01-03T15:10:14.660Z",
    "updatedAt": "2019-01-03T15:10:30.615Z",
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
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
    "publishedCounter": 6,
    "version": 12,
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
    "publishedVersion": 11,
    "firstPublishedAt": "2019-01-03T15:10:15.267Z",
    "publishedAt": "2019-01-03T15:10:30.615Z"
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
, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Thu, 03 Jan 2019 15:10:31 GMT',
  'ETag',
  'W/"eb7ad09b1634ceb580ce0324114f25d4"',
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
  '8c5311485048bb567b99b560897e96a7',
  'Content-Length',
  '487',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=8/7cguMKTnuDWA00GsTQG+YlLlwAAAAAQUIPAAAAAADgqNw37064CPtju+xCNh01; expires=Fri, 03 Jan 2020 10:03:30 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=ICW7FDFEdkf9aTgu6lKYhQAAAACu9kcE5chqPEfAyTGLKFRz; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1079_673446=tbsoW7qj/QoHdTm+9GD5DuYlLlwAAAAA3S9cErDpz6FjH6+n0nlDww==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '2-11880589-11880590 NNNN CT(98 99 0) RT(1546528230407 16) q(0 0 2 -1) r(3 3) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/content_types')
  .query({"sys.id":{"in":"dog"},"skip":"0"})
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
        "createdAt": "2019-01-03T15:10:14.660Z",
        "updatedAt": "2019-01-03T15:10:30.615Z",
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
            "id": "33kZDXNajFNmbngiu5MvUa"
          }
        },
        "updatedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "33kZDXNajFNmbngiu5MvUa"
          }
        },
        "publishedCounter": 6,
        "version": 12,
        "publishedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "33kZDXNajFNmbngiu5MvUa"
          }
        },
        "publishedVersion": 11,
        "firstPublishedAt": "2019-01-03T15:10:15.267Z",
        "publishedAt": "2019-01-03T15:10:30.615Z"
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
, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Thu, 03 Jan 2019 15:10:31 GMT',
  'ETag',
  'W/"f867f4c824365fe324f548a401c6dd12"',
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
  '06170f9f688cbdbce5d0974271e28dcb',
  'Content-Length',
  '551',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=QOQeoWXnRo+3P+Nmtjh5M+clLlwAAAAAQUIPAAAAAAB2ibWbcFImqW8KAYD0Q7fo; expires=Fri, 03 Jan 2020 10:03:12 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=irpjXIt7HGbxoA7Z6lKYhQAAAAAGVGoZgcygWQxfsbUtTI0j; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1079_673446=UPmhCELuqD8OdTm+9GD5DuclLlwAAAAA/jNYyeXtRpsfgR3MKpYnKg==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '3-12874640-12874642 NNNN CT(106 106 0) RT(1546528230934 17) q(0 0 2 -1) r(4 4) U5',
  'X-CDN',
  'Incapsula' ]);


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
, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Thu, 03 Jan 2019 15:10:32 GMT',
  'ETag',
  '"29f2c21be26360c424f617d8592cf6f9"',
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
  '9317238c83f63f033c860068449f3a07',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=CQb+LrPgQoqvFTuRgARdiOclLlwAAAAAQUIPAAAAAADELrwcxDYG9KGcLOKAW5SA; expires=Fri, 03 Jan 2020 10:03:30 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=7CSaA8UN6mKks74B6lKYhQAAAADIGtrvDGJIDfkXQJobpggN; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1079_673446=y9jmHN4UsGIPdTm+9GD5DuclLlwAAAAAZuu/nI5VJrCjCwcbspPXRw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '2-11880598-11880599 NNNN CT(0 0 0) RT(1546528231390 19) q(0 0 0 -1) r(1 1) U5',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/locales')
  .query({"skip":"0"})
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
        "createdBy":{
          "sys":{
            "type":"Link",
            "linkType":"User",
            "id":"33kZDXNajFNmbngiu5MvUa"
          }
        },
        "createdAt":"2019-01-03T15:10:11Z",
        "updatedBy":{
          "sys":{
            "type":"Link",
            "linkType":"User",
            "id":"33kZDXNajFNmbngiu5MvUa"
          }
        },
        "updatedAt":"2019-01-03T15:10:11Z"
      }
    }
  ]
}

, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature',
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
  '33lrAejsx0jnNQeRJgZ3EO',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Thu, 03 Jan 2019 15:10:32 GMT',
  'ETag',
  'W/"b07cce46a981fab8fe72a0554f5de2b5"',
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
  '0b209fc49375d4c45bcff8fed9c7e42f',
  'X-Download-Options',
  'noopen',
  'X-Frame-Options',
  'ALLOWALL',
  'X-Permitted-Cross-Domain-Policies',
  'none',
  'X-XSS-Protection',
  '1; mode=block',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=GoGqe8qcQBeLxQlKdrFFJ+clLlwAAAAAQUIPAAAAAADaovI/X0VXjORqZ4+JuqSv; expires=Fri, 03 Jan 2020 10:03:26 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=wR/mSGlogHTEjiql6lKYhQAAAACv0z/95KlXgVA+Xla+YZdq; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1079_673446=0xLbEUQhMFwQdTm+9GD5DuclLlwAAAAAKCEBK6SUJ4/R3wCWBc2x/Q==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '4-15565847-15565848 NNNN CT(0 0 0) RT(1546528231607 17) q(0 0 0 -1) r(1 1) U5',
  'X-CDN',
  'Incapsula' ]);


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
    "createdAt": "2019-01-03T15:10:14.660Z",
    "updatedAt": "2019-01-03T15:10:32.723Z",
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
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
    "publishedCounter": 6,
    "version": 13,
    "firstPublishedAt": "2019-01-03T15:10:15.267Z"
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
, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Thu, 03 Jan 2019 15:10:32 GMT',
  'ETag',
  'W/"a8f2a36175f1738eebf6bc4c45a742c5"',
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
  '84a4c1083473c392639002ec161f805f',
  'Content-Length',
  '465',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=mBk6UvBAQOa5woDl4QjyueglLlwAAAAAQUIPAAAAAACmlH3v3xOobshZHvGNGTOA; expires=Fri, 03 Jan 2020 10:05:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=2v90bbmiwUr8MuN06lKYhQAAAABhwBHpktFbRshHbEuSQWt/; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1079_673446=RO/1JJcaPGEVdTm+9GD5DuglLlwAAAAAJbkbM/6B9kjJveIXoS+E9Q==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '12-4982487-4982488 NNNN CT(97 97 0) RT(1546528231782 18) q(0 0 1 -1) r(5 5) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .delete('/spaces/bohepdihyxin/environments/env-integration/content_types/dog')
  .reply(204, "", [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Thu, 03 Jan 2019 15:10:33 GMT',
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
  '711d4f44f8bc4ca7280cb3f52c3bd721',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=mlFlIHQ5Srae75+RscE16uglLlwAAAAAQUIPAAAAAACBhg3PQsZHyiwiPbyuSrWG; expires=Fri, 03 Jan 2020 10:06:54 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=Y0JVIwPx52Xnyo1M6lKYhQAAAABx/sWmhVCH6sqJav5ALvqA; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1079_673446=c2q1PoD/HW0XdTm+9GD5DuglLlwAAAAAtvIBbQxxC5agPr7r1FVnSg==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '10-3790577-3790578 NNNN CT(0 0 0) RT(1546528232407 21) q(0 0 0 -1) r(3 3) U5',
  'X-CDN',
  'Incapsula' ]);


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
  "requestId": "1eab618f90e51de45ed43e57062dfbd7"
}
, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Thu, 03 Jan 2019 15:10:33 GMT',
  'ETag',
  '"40c5873c190ad2cef71177b678774761"',
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
  '1eab618f90e51de45ed43e57062dfbd7',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=+FGViRvpSCO/oNo1Gjt5QOklLlwAAAAAQUIPAAAAAADC2V9WyovPKLPUgFfKQ2GD; expires=Fri, 03 Jan 2020 10:03:22 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=hTANa+7/TxFDcaIH6lKYhQAAAADc3DUinONQp9OOUstC3Q7B; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1079_673446=Kl53OgcrtnYbdTm+9GD5DuklLlwAAAAAYKsvzz30EVe9JWY2P5vooA==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '5-17025277-17025278 NNNN CT(115 117 0) RT(1546528232786 17) q(0 0 2 -1) r(4 4) U5',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/content_types')
  .query({"sys.id":{"in":"dieatary-food"},"skip":"0"})
  .reply(200, {
  "sys": {
    "type": "Array"
  },
  "total": 0,
  "skip": 0,
  "limit": 100,
  "items": []
}
, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Thu, 03 Jan 2019 15:10:34 GMT',
  'ETag',
  '"29f2c21be26360c424f617d8592cf6f9"',
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
  'ab295f1d7cc7fb2203b8d5a98570a973',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=vUzx8ufoTPuvtK1a7ztTleklLlwAAAAAQUIPAAAAAACYouWVdGK/Xy4cTFzIgWds; expires=Fri, 03 Jan 2020 10:03:30 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=mDS8HooAlnSnTaJE6lKYhQAAAABSP8qCGXOETu0C7tAv4EnK; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1079_673446=7JWGRpwtymYddTm+9GD5DuklLlwAAAAAAp2cmAvNqzBp8+QfOVLvQw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '2-11880617-11880618 NNNN CT(97 98 0) RT(1546528233355 17) q(0 0 2 -1) r(4 4) U5',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/locales')
  .query({"skip":"0"})
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
        "createdBy":{
          "sys":{
            "type":"Link",
            "linkType":"User",
            "id":"33kZDXNajFNmbngiu5MvUa"
          }
        },
        "createdAt":"2019-01-03T15:10:11Z",
        "updatedBy":{
          "sys":{
            "type":"Link",
            "linkType":"User",
            "id":"33kZDXNajFNmbngiu5MvUa"
          }
        },
        "updatedAt":"2019-01-03T15:10:11Z"
      }
    }
  ]
}

, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature',
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
  '33lrAejsx0jnNQeRJgZ3EO',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Thu, 03 Jan 2019 15:10:34 GMT',
  'ETag',
  'W/"b07cce46a981fab8fe72a0554f5de2b5"',
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
  '735f3d0f72a9f08b2539f8a3dfc0820d',
  'X-Download-Options',
  'noopen',
  'X-Frame-Options',
  'ALLOWALL',
  'X-Permitted-Cross-Domain-Policies',
  'none',
  'X-XSS-Protection',
  '1; mode=block',
  'Content-Length',
  '413',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=/Jb6uZVRSm2VkFAo+sxGjOolLlwAAAAAQUIPAAAAAAAaZyDsFerniUCR3ranvlYo; expires=Fri, 03 Jan 2020 10:03:41 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=YiOqOs7zDXOkVl6C6lKYhQAAAADOk3H0cPSVkyfAcprjyuEt; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1079_673446=IJDNRcLSUz4gdTm+9GD5DuolLlwAAAAARLqkxNRfMrYwL6iGij+Krg==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '0-9046508-9046509 NNNN CT(105 106 0) RT(1546528233748 17) q(0 0 2 -1) r(3 3) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/dieatary-food', {"name":"Dieatary Food","fields":[{"id":"name","type":"Symbol","name":"name of the food","validations":[{"unique":true}]},{"id":"calories","type":"Link","linkType":"Asset","name":"amount of calories the food contains","validations":[{"assetImageDimensions":{"width":{"min":1199,"max":null},"height":{"min":1343}}}]}],"description":"Food with up to 500 calories"})
  .reply(201, {"sys":{"space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"id":"dieatary-food","type":"ContentType","createdAt":"2019-01-03T15:10:35.051Z","updatedAt":"2019-01-03T15:10:35.051Z","environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}},"createdBy":{"sys":{"type":"Link","linkType":"User","id":"33kZDXNajFNmbngiu5MvUa"}},"updatedBy":{"sys":{"type":"Link","linkType":"User","id":"33kZDXNajFNmbngiu5MvUa"}},"version":1},"displayField":null,"name":"Dieatary Food","description":"Food with up to 500 calories","fields":[{"id":"name","name":"name of the food","type":"Symbol","localized":false,"required":false,"validations":[{"unique":true}],"disabled":false,"omitted":false},{"id":"calories","name":"amount of calories the food contains","type":"Link","localized":false,"required":false,"validations":[{"assetImageDimensions":{"width":{"min":1199,"max":null},"height":{"min":1343}}}],"disabled":false,"omitted":false,"linkType":"Asset"}]}, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Thu, 03 Jan 2019 15:10:35 GMT',
  'ETag',
  '"f1681013cc81f4600d40c32df96b6619"',
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
  '6beadfdf857cfedc8d741413d8ba45a3',
  'Content-Length',
  '1608',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=yskA/aVhQwOC/SHkgi/sBuolLlwAAAAAQUIPAAAAAACKAX46TYix+kar2pIYUnmZ; expires=Fri, 03 Jan 2020 10:03:22 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=K3M7J50eNQF2zjNG6lKYhQAAAAAUmn59R0UmMkVPx1P06SK7; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1079_673446=zc/FaWL0XwsmdTm+9GD5DuolLlwAAAAAu4if1qdKq6Y2bv1vVYo5xw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '5-17025287-17025289 NNNN CT(105 105 0) RT(1546528234134 16) q(0 0 2 -1) r(4 4) U5',
  'X-CDN',
  'Incapsula' ]);


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
    "createdAt": "2019-01-03T15:10:35.051Z",
    "updatedAt": "2019-01-03T15:10:35.363Z",
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
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
    "version": 2,
    "firstPublishedAt": "2019-01-03T15:10:35.363Z",
    "publishedCounter": 1,
    "publishedAt": "2019-01-03T15:10:35.363Z",
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "33kZDXNajFNmbngiu5MvUa"
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
, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Thu, 03 Jan 2019 15:10:35 GMT',
  'ETag',
  'W/"847a6c21c37f337cb3fef9b58d42e2e7"',
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
  'eb55bcbea62fcfd34003d9215d03b236',
  'Content-Length',
  '596',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=ab5RUJzLQoKUm4iYRJDkfuslLlwAAAAAQUIPAAAAAAA0fAcmhvW0l64ggv38031j; expires=Fri, 03 Jan 2020 10:03:59 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=oRbJI7TYtFSUk8as6lKYhQAAAAAFUjBZNILdlBcwoiXmdQod; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1079_673446=dw53Zhq3wX4odTm+9GD5DuslLlwAAAAAotQjvUPwatgL6r+MqyNaoQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '14-10901522-10901523 NNNN CT(0 0 0) RT(1546528234614 18) q(0 0 0 -1) r(4 4) U5',
  'X-CDN',
  'Incapsula' ]);


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
    "createdAt": "2019-01-03T15:10:35.051Z",
    "updatedAt": "2019-01-03T15:10:35.363Z",
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
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
    "publishedCounter": 1,
    "version": 2,
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
    "publishedVersion": 1,
    "firstPublishedAt": "2019-01-03T15:10:35.363Z",
    "publishedAt": "2019-01-03T15:10:35.363Z"
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
, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Thu, 03 Jan 2019 15:10:35 GMT',
  'ETag',
  'W/"a655c0ca1655ce429ef3749d3bc683eb"',
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
  '9c62a29c2415a86a460f370cbe3eaac9',
  'Content-Length',
  '599',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=Gru3TowIS0qdR4xg7pkR/uslLlwAAAAAQUIPAAAAAAAFW445EeSVjhPE7VDZAxJJ; expires=Fri, 03 Jan 2020 10:03:33 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=Qm+FA7jiHy0Q35Sm6lKYhQAAAAAYewhTSwiMwcsFaAVyn1jn; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1079_673446=Fs7RU2jXWzIqdTm+9GD5DuslLlwAAAAAte6ppmKpUS1/QReue6cCQQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '6-10941705-10941706 NNNN CT(105 105 0) RT(1546528235059 17) q(0 0 2 -1) r(4 4) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/content_types')
  .query({"sys.id":{"in":"food"},"skip":"0"})
  .reply(200, {
  "sys": {
    "type": "Array"
  },
  "total": 0,
  "skip": 0,
  "limit": 100,
  "items": []
}
, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Thu, 03 Jan 2019 15:10:36 GMT',
  'ETag',
  '"29f2c21be26360c424f617d8592cf6f9"',
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
  '36d09061944f2873b49a249321337a40',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=sfzKtB+lRECxZJlPWONENOslLlwAAAAAQUIPAAAAAACKoEKEiEpLa2pwq/JYWOMB; expires=Fri, 03 Jan 2020 10:03:30 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=yFUeVNBxlnYDJwI26lKYhQAAAACU4SC0S/dy2C1WTzOADLCP; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1079_673446=ec0sLIirjmQrdTm+9GD5DuslLlwAAAAARhSu9DQVss1PNisN5eGl5g==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '2-11880635-11880636 NNNN CT(0 0 0) RT(1546528235476 18) q(0 0 0 -1) r(2 2) U5',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/locales')
  .query({"skip":"0"})
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
        "createdBy":{
          "sys":{
            "type":"Link",
            "linkType":"User",
            "id":"33kZDXNajFNmbngiu5MvUa"
          }
        },
        "createdAt":"2019-01-03T15:10:11Z",
        "updatedBy":{
          "sys":{
            "type":"Link",
            "linkType":"User",
            "id":"33kZDXNajFNmbngiu5MvUa"
          }
        },
        "updatedAt":"2019-01-03T15:10:11Z"
      }
    }
  ]
}

, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature',
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
  '33lrAejsx0jnNQeRJgZ3EO',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Thu, 03 Jan 2019 15:10:36 GMT',
  'ETag',
  'W/"b07cce46a981fab8fe72a0554f5de2b5"',
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
  'bf539893c5b75ae5fc698d8bfca57c9d',
  'X-Download-Options',
  'noopen',
  'X-Frame-Options',
  'ALLOWALL',
  'X-Permitted-Cross-Domain-Policies',
  'none',
  'X-XSS-Protection',
  '1; mode=block',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=MdYjVLq1T+Ssh6cVtkjONeslLlwAAAAAQUIPAAAAAADoVBpwQOfZYQNobmrcNfUn; expires=Fri, 03 Jan 2020 10:03:12 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=U5oAfqc2EzIkRl2O6lKYhQAAAACLE/MM1GNWQbvDDTifypLf; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1079_673446=63sNedgI2losdTm+9GD5DuslLlwAAAAA+RPxU3rTv+K8VNnzuTKq7A==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '3-12874667-12874668 NNNN CT(0 0 0) RT(1546528235716 19) q(0 0 0 -1) r(1 1) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/food', {"name":"foooood","displayField":"taste","fields":[{"id":"taste","type":"Symbol","name":"what it tastes like"}],"description":" well, food"})
  .reply(201, {"sys":{"space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"id":"food","type":"ContentType","createdAt":"2019-01-03T15:10:36.881Z","updatedAt":"2019-01-03T15:10:36.881Z","environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}},"createdBy":{"sys":{"type":"Link","linkType":"User","id":"33kZDXNajFNmbngiu5MvUa"}},"updatedBy":{"sys":{"type":"Link","linkType":"User","id":"33kZDXNajFNmbngiu5MvUa"}},"version":1},"displayField":"taste","name":"foooood","description":" well, food","fields":[{"id":"taste","name":"what it tastes like","type":"Symbol","localized":false,"required":false,"validations":[],"disabled":false,"omitted":false}]}, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Thu, 03 Jan 2019 15:10:37 GMT',
  'ETag',
  '"00a7660c7799b87830025fb55770c252"',
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
  'd4b2dead6f76387f28c718e237aa59d0',
  'Content-Length',
  '1037',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=xShZ0/j3RWiDNmfD+cj67OwlLlwAAAAAQUIPAAAAAABOoJpD1nS12vR1I+hxHQib; expires=Fri, 03 Jan 2020 10:03:26 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=xgc/em5VIW0ngPLC6lKYhQAAAADU+YyR6y6Kw71oR7rj1eMm; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1079_673446=8N8udHb7BQs0dTm+9GD5DuwlLlwAAAAAMNDK/0rGjLpTmCVEyW9WOQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '4-15565867-15565868 NNNN CT(113 113 0) RT(1546528235892 17) q(0 0 2 -1) r(5 5) U5',
  'X-CDN',
  'Incapsula' ]);


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
    "createdAt": "2019-01-03T15:10:36.881Z",
    "updatedAt": "2019-01-03T15:10:37.444Z",
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
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
    "version": 2,
    "firstPublishedAt": "2019-01-03T15:10:37.444Z",
    "publishedCounter": 1,
    "publishedAt": "2019-01-03T15:10:37.444Z",
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "33kZDXNajFNmbngiu5MvUa"
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
, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Thu, 03 Jan 2019 15:10:37 GMT',
  'ETag',
  'W/"567d607159ba423972fb7c3c01dab1ac"',
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
  '89ed2812345f3bf4b67de5f2bbe6edb6',
  'Content-Length',
  '449',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=qhXiqpC/RRamEtj9BXi0ku0lLlwAAAAAQUIPAAAAAACL1hVjbT27VPEhHhyTncYX; expires=Fri, 03 Jan 2020 10:03:12 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=SYl5XcyXvRARrqOr6lKYhQAAAACUAWS3KxZp0Mq/SB6qfNZW; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1079_673446=POicWizziHY3dTm+9GD5Du0lLlwAAAAADAPsPsyzRFpv8oPYBHNvaQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '3-12874673-12874674 NNNN CT(105 105 0) RT(1546528236523 19) q(0 0 2 -1) r(6 6) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/content_types')
  .query({"sys.id":{"in":"food"},"skip":"0"})
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
        "createdAt": "2019-01-03T15:10:36.881Z",
        "updatedAt": "2019-01-03T15:10:37.444Z",
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
            "id": "33kZDXNajFNmbngiu5MvUa"
          }
        },
        "updatedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "33kZDXNajFNmbngiu5MvUa"
          }
        },
        "publishedCounter": 1,
        "version": 2,
        "publishedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "33kZDXNajFNmbngiu5MvUa"
          }
        },
        "publishedVersion": 1,
        "firstPublishedAt": "2019-01-03T15:10:37.444Z",
        "publishedAt": "2019-01-03T15:10:37.444Z"
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
, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Thu, 03 Jan 2019 15:10:38 GMT',
  'ETag',
  'W/"0764d0144add7785dbd914b7f2599be8"',
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
  '53ffea3641b9547c3f16e93af535253d',
  'Content-Length',
  '513',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=bPV5WbHMTAiucA7rHm3kn+0lLlwAAAAAQUIPAAAAAABb51nig6qbO4AEPUWsQDqo; expires=Fri, 03 Jan 2020 10:04:47 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=dbDfYQllkX/f3hLW6lKYhQAAAAC2Py9yOq3NVr3ET7LcCW8I; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1079_673446=6+a9E83b60k6dTm+9GD5Du0lLlwAAAAAvKoBfGvJnIOAyHgdDsRAYA==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '13-5854760-5854761 NNNN CT(107 107 0) RT(1546528237201 19) q(0 0 2 -1) r(3 3) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/locales')
  .query({"skip":"0"})
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
        "createdBy":{
          "sys":{
            "type":"Link",
            "linkType":"User",
            "id":"33kZDXNajFNmbngiu5MvUa"
          }
        },
        "createdAt":"2019-01-03T15:10:11Z",
        "updatedBy":{
          "sys":{
            "type":"Link",
            "linkType":"User",
            "id":"33kZDXNajFNmbngiu5MvUa"
          }
        },
        "updatedAt":"2019-01-03T15:10:11Z"
      }
    }
  ]
}

, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature',
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
  '33lrAejsx0jnNQeRJgZ3EO',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Thu, 03 Jan 2019 15:10:38 GMT',
  'ETag',
  'W/"b07cce46a981fab8fe72a0554f5de2b5"',
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
  'deaacf3127845965f066613af9558f9a',
  'X-Download-Options',
  'noopen',
  'X-Frame-Options',
  'ALLOWALL',
  'X-Permitted-Cross-Domain-Policies',
  'none',
  'X-XSS-Protection',
  '1; mode=block',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=OIJ6LrfhTri7ecJdG2xKWu4lLlwAAAAAQUIPAAAAAACEcECSAW9FGcjg/cYO/lVb; expires=Fri, 03 Jan 2020 10:03:33 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=84mxQbPZZC1+8/c66lKYhQAAAABiCUCbTQfqCO7VuRVByBAS; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1079_673446=268eRbU4S2lAdTm+9GD5Du4lLlwAAAAA9RpCC5WXgTiRj1Bhwv0Qtw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '6-10941727-10941728 NNNN CT(105 106 0) RT(1546528237693 16) q(0 0 2 -1) r(3 3) U5',
  'X-CDN',
  'Incapsula' ]);


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
    "createdAt": "2019-01-03T15:10:36.881Z",
    "updatedAt": "2019-01-03T15:10:39.050Z",
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
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
    "publishedCounter": 1,
    "version": 3,
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
    "publishedVersion": 1,
    "firstPublishedAt": "2019-01-03T15:10:37.444Z",
    "publishedAt": "2019-01-03T15:10:37.444Z"
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
, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Thu, 03 Jan 2019 15:10:39 GMT',
  'ETag',
  'W/"ae1bc511bed84b4b6b68148fe0734bc3"',
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
  '8562227ff3b11e5767739bfc2a07ac48',
  'Content-Length',
  '592',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=xSoUtT62TjWxR7AiK4xhpe4lLlwAAAAAQUIPAAAAAACK0ZX+CW6/IvFmf+xJl7cF; expires=Fri, 03 Jan 2020 10:03:33 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=MTIMakYoIUoqFvOS6lKYhQAAAAAOlmZ2aoBlZsIVMf4ME2q4; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1079_673446=KrcpdnuX7EdHdTm+9GD5Du4lLlwAAAAAP7fwA7hI91RMXH/G15LOzw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '6-10941731-10941732 NNNN CT(103 104 0) RT(1546528238113 18) q(0 0 2 -1) r(4 4) U5',
  'X-CDN',
  'Incapsula' ]);


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
    "createdAt": "2019-01-03T15:10:36.881Z",
    "updatedAt": "2019-01-03T15:10:39.286Z",
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
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
    "publishedCounter": 2,
    "version": 4,
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
    "publishedVersion": 3,
    "firstPublishedAt": "2019-01-03T15:10:37.444Z",
    "publishedAt": "2019-01-03T15:10:39.286Z"
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
, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Thu, 03 Jan 2019 15:10:39 GMT',
  'ETag',
  'W/"b1d0e83339585736bd143620bb4161ac"',
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
  'fce81604ba0370fb528a98d3f74a5fe0',
  'Content-Length',
  '595',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=pOrWGepoTyymgQPraTJUKO4lLlwAAAAAQUIPAAAAAADXCkZeKYU5yQVDwotMxfov; expires=Fri, 03 Jan 2020 10:03:33 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=B1k+SP7+fBbdH1vs6lKYhQAAAADHlIS83A5idiGFm5oEvjBZ; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1079_673446=kTA1W6AaNx1MdTm+9GD5Du4lLlwAAAAAYUOWVeAHT+b0ZbTF+2mDyg==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '6-10941734-10941735 NNNN CT(0 0 0) RT(1546528238572 23) q(0 0 0 -1) r(4 4) U5',
  'X-CDN',
  'Incapsula' ]);


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
    "createdAt": "2019-01-03T15:10:36.881Z",
    "updatedAt": "2019-01-03T15:10:39.286Z",
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
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
    "publishedCounter": 2,
    "version": 4,
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
    "publishedVersion": 3,
    "firstPublishedAt": "2019-01-03T15:10:37.444Z",
    "publishedAt": "2019-01-03T15:10:39.286Z"
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
, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Thu, 03 Jan 2019 15:10:39 GMT',
  'ETag',
  'W/"b1d0e83339585736bd143620bb4161ac"',
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
  '1eb6a69737a3b7564b23e7655e228af2',
  'Content-Length',
  '595',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=E62SIvWHTpqDRKWMRRtFsO8lLlwAAAAAQUIPAAAAAACaMraWd4j8c+JpDT/P7oFa; expires=Fri, 03 Jan 2020 10:05:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=aT37Q0ngmh7fxoGy6lKYhQAAAAAcJ519o504+uU6fJFuat8H; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1079_673446=lO/8aRXXQQhPdTm+9GD5Du8lLlwAAAAA4kv2jY8in0DhOPB9nB6mzA==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '12-4982500-4982501 NNNN CT(112 111 0) RT(1546528238983 31) q(0 0 2 -1) r(4 4) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/content_types')
  .query({"sys.id":{"in":"person%2Canimal"},"skip":"0"})
  .reply(200, {
  "sys": {
    "type": "Array"
  },
  "total": 0,
  "skip": 0,
  "limit": 100,
  "items": []
}
, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Thu, 03 Jan 2019 15:10:40 GMT',
  'ETag',
  '"29f2c21be26360c424f617d8592cf6f9"',
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
  '2f8b489a6942f2e18ba9b536556c9708',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=pCiKKzI0RFqfnfkpV/DiE+8lLlwAAAAAQUIPAAAAAAC+TY5ERbUaSL8b287PcV1b; expires=Fri, 03 Jan 2020 10:03:33 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=1e+6fUzJZV0+LQi96lKYhQAAAABLP2eRHziWR8+PCD5PQbw/; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1079_673446=fGBBDaPR4SBTdTm+9GD5Du8lLlwAAAAA5KPpFAO/u6s/xc6ewUJaIw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '6-10941741-10941742 NNNN CT(113 114 0) RT(1546528239467 17) q(0 0 3 -1) r(5 5) U5',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/locales')
  .query({"skip":"0"})
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
        "createdBy":{
          "sys":{
            "type":"Link",
            "linkType":"User",
            "id":"33kZDXNajFNmbngiu5MvUa"
          }
        },
        "createdAt":"2019-01-03T15:10:11Z",
        "updatedBy":{
          "sys":{
            "type":"Link",
            "linkType":"User",
            "id":"33kZDXNajFNmbngiu5MvUa"
          }
        },
        "updatedAt":"2019-01-03T15:10:11Z"
      }
    }
  ]
}

, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature',
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
  '33lrAejsx0jnNQeRJgZ3EO',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Thu, 03 Jan 2019 15:10:40 GMT',
  'ETag',
  'W/"b07cce46a981fab8fe72a0554f5de2b5"',
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
  '20dcf35316e2fa4ef1a07f94e8b75ba8',
  'X-Download-Options',
  'noopen',
  'X-Frame-Options',
  'ALLOWALL',
  'X-Permitted-Cross-Domain-Policies',
  'none',
  'X-XSS-Protection',
  '1; mode=block',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=osV4BERqSV+PQHvEah+fo/AlLlwAAAAAQUIPAAAAAACZtd+7CRMJ+pQjX2a9l+gm; expires=Fri, 03 Jan 2020 10:03:26 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=ydsFRPfI20fGf+gg6lKYhQAAAABuKlyAx9xvWZHarnK6YfFT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1079_673446=DIBfbLA8iExXdTm+9GD5DvAlLlwAAAAAoGj+ruoc4/VAdma3uBz8Kg==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '4-15565900-15565901 NNNN CT(0 0 0) RT(1546528239952 18) q(0 0 0 -1) r(3 3) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/person', {"name":"Person","fields":[{"id":"age","name":"Age","type":"Number","required":true},{"id":"fullName","name":"Full name","type":"Symbol","required":true,"localized":true}],"description":"A content type for a person"})
  .reply(201, {"sys":{"space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"id":"person","type":"ContentType","createdAt":"2019-01-03T15:10:41.193Z","updatedAt":"2019-01-03T15:10:41.193Z","environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}},"createdBy":{"sys":{"type":"Link","linkType":"User","id":"33kZDXNajFNmbngiu5MvUa"}},"updatedBy":{"sys":{"type":"Link","linkType":"User","id":"33kZDXNajFNmbngiu5MvUa"}},"version":1},"displayField":null,"name":"Person","description":"A content type for a person","fields":[{"id":"age","name":"Age","type":"Number","localized":false,"required":true,"validations":[],"disabled":false,"omitted":false},{"id":"fullName","name":"Full name","type":"Symbol","localized":true,"required":true,"validations":[],"disabled":false,"omitted":false}]}, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Thu, 03 Jan 2019 15:10:41 GMT',
  'ETag',
  '"5945bb39b6ab987906ad76f43fd3cfae"',
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
  'd7c3f1cb49619658d10a4b0e5467273c',
  'Content-Length',
  '1242',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=LuD+Xl7OTNSJc/kxapwE1vAlLlwAAAAAQUIPAAAAAAA06cJ1RrzRgfgwZX+qbXQF; expires=Fri, 03 Jan 2020 10:03:36 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=Y0a0DhcBi2OvljLF6lKYhQAAAAC3nNzVF3E9gNw034620UOh; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1079_673446=f0DeHFAaFEBbdTm+9GD5DvAlLlwAAAAAyOsvAbxw4PbnM/qNddogyQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '7-14749079-14749080 NNNN CT(113 114 0) RT(1546528240251 16) q(0 0 2 -1) r(5 5) U5',
  'X-CDN',
  'Incapsula' ]);


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
    "createdAt": "2019-01-03T15:10:41.193Z",
    "updatedAt": "2019-01-03T15:10:41.712Z",
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
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
    "version": 2,
    "firstPublishedAt": "2019-01-03T15:10:41.712Z",
    "publishedCounter": 1,
    "publishedAt": "2019-01-03T15:10:41.712Z",
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "33kZDXNajFNmbngiu5MvUa"
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
, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Thu, 03 Jan 2019 15:10:41 GMT',
  'ETag',
  'W/"9aeafb5efe2f3de42be7a9a65284c280"',
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
  'fc98e414489795f14a743ba3fe2b1ad1',
  'Content-Length',
  '476',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=gGXL4FcLSluOMRI7Jo8wnfElLlwAAAAAQUIPAAAAAAAoSs/SubvwRzavlJxbAqOj; expires=Fri, 03 Jan 2020 10:03:30 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=89txfZfdpDuDI0g56lKYhQAAAACS7VXPqgPZMcucLc0BGBjf; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1079_673446=vMu+EPuEwmVhdTm+9GD5DvElLlwAAAAAiualsFGL12ZFkOQhMJ9Ppw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '2-11880687-11880688 NNNN CT(114 114 0) RT(1546528240765 17) q(0 0 3 -1) r(6 6) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/animal', {"name":"Animal","fields":[{"id":"species","name":"The species of the animal","type":"Symbol","required":true},{"id":"isFurry","name":"Is this a furry animal","type":"Boolean","required":false}],"description":"An animal"})
  .reply(201, {"sys":{"space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"id":"animal","type":"ContentType","createdAt":"2019-01-03T15:10:42.285Z","updatedAt":"2019-01-03T15:10:42.285Z","environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}},"createdBy":{"sys":{"type":"Link","linkType":"User","id":"33kZDXNajFNmbngiu5MvUa"}},"updatedBy":{"sys":{"type":"Link","linkType":"User","id":"33kZDXNajFNmbngiu5MvUa"}},"version":1},"displayField":null,"name":"Animal","description":"An animal","fields":[{"id":"species","name":"The species of the animal","type":"Symbol","localized":false,"required":true,"validations":[],"disabled":false,"omitted":false},{"id":"isFurry","name":"Is this a furry animal","type":"Boolean","localized":false,"required":false,"validations":[],"disabled":false,"omitted":false}]}, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Thu, 03 Jan 2019 15:10:42 GMT',
  'ETag',
  '"e5545b8ed2d1978c323adc360e8373af"',
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
  '87517f5bc27bb660b75c878c7295172d',
  'Content-Length',
  '1265',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=5ZUq5DeJQsysO7My3PnFXvElLlwAAAAAQUIPAAAAAADZOQ6DwKFKcqx7Dhkstt+7; expires=Fri, 03 Jan 2020 10:03:12 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=ug8ZTUAJESWRJN7H6lKYhQAAAAADKD7ieH+ajC8ziijR71kz; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1079_673446=4JADLwkHvz1kdTm+9GD5DvElLlwAAAAAB7TxdyPGXbKR3Fudei23YQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '3-12874788-12874789 NNNN CT(97 97 0) RT(1546528241373 21) q(0 0 2 -1) r(4 4) U5',
  'X-CDN',
  'Incapsula' ]);


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
    "createdAt": "2019-01-03T15:10:42.285Z",
    "updatedAt": "2019-01-03T15:10:42.762Z",
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
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
    "version": 2,
    "firstPublishedAt": "2019-01-03T15:10:42.762Z",
    "publishedCounter": 1,
    "publishedAt": "2019-01-03T15:10:42.762Z",
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "33kZDXNajFNmbngiu5MvUa"
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
, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Thu, 03 Jan 2019 15:10:43 GMT',
  'ETag',
  'W/"070233c355569c223d2e57c0714cf090"',
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
  '65d34ae17615d0b38f3d65c8a9f453e2',
  'Content-Length',
  '486',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=fExu5MTcSGGers9Kr7cquvIlLlwAAAAAQUIPAAAAAAAYge5ynyoUm1ONqTuwAKS1; expires=Fri, 03 Jan 2020 10:03:36 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=Ge4VDVJlB3hN8+yx6lKYhQAAAADL6hTGZaRRnBbJIB0wsCj7; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1079_673446=ZBHqKffYX3FpdTm+9GD5DvIlLlwAAAAAbBTArUBEJZNq9zGjp6Itsw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '7-14749102-14749103 NNNN CT(111 111 0) RT(1546528241834 17) q(0 0 2 -1) r(6 6) U5',
  'X-CDN',
  'Incapsula' ]);


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
    "createdAt": "2019-01-03T15:10:41.193Z",
    "updatedAt": "2019-01-03T15:10:43.583Z",
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
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
    "publishedCounter": 1,
    "version": 3,
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
    "publishedVersion": 1,
    "firstPublishedAt": "2019-01-03T15:10:41.712Z",
    "publishedAt": "2019-01-03T15:10:41.712Z"
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
, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Thu, 03 Jan 2019 15:10:43 GMT',
  'ETag',
  'W/"a5110d3562693419712c79ebfab56d8b"',
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
  'a5b617899780074763f90b871555aa6d',
  'Content-Length',
  '518',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=FeBPXzRiTzW4QjqUzB+p3fMlLlwAAAAAQUIPAAAAAADg011vyAQhiEI4jDiMRUjI; expires=Fri, 03 Jan 2020 10:03:12 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=S12CUp5lBhGEmqnD6lKYhQAAAAAD2BZnY1G91dncbZtjJqZb; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1079_673446=cWhdJdMJoQludTm+9GD5DvMlLlwAAAAA/auJ0eptp5gFLgOEcKK/Hw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '3-12874817-12874818 NNNN CT(112 113 0) RT(1546528242623 20) q(0 0 2 -1) r(4 4) U5',
  'X-CDN',
  'Incapsula' ]);


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
    "createdAt": "2019-01-03T15:10:41.193Z",
    "updatedAt": "2019-01-03T15:10:44.067Z",
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
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
    "publishedCounter": 2,
    "version": 4,
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
    "publishedVersion": 3,
    "firstPublishedAt": "2019-01-03T15:10:41.712Z",
    "publishedAt": "2019-01-03T15:10:44.067Z"
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
, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Thu, 03 Jan 2019 15:10:44 GMT',
  'ETag',
  'W/"98f0db58a8e7ed801053b0b3c818de72"',
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
  '9c25634b2f13501e722b6f7b5a4940a0',
  'Content-Length',
  '522',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=uABBwBuMRYaLqR9Kr8z/lfMlLlwAAAAAQUIPAAAAAACf0hYHYYs6KYQNDH7yj6V1; expires=Fri, 03 Jan 2020 10:03:22 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=OZ9yJmtVAk0VaeSq6lKYhQAAAADWvdK6xURNwBTzemeIOSa4; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1079_673446=mRXHPf2yDT50dTm+9GD5DvMlLlwAAAAA5BwfTOeVK7kpa8TmNxYJnw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '5-17025336-17025337 NNNN CT(103 104 0) RT(1546528243115 18) q(0 0 2 -1) r(7 7) U5',
  'X-CDN',
  'Incapsula' ]);


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
    "createdAt": "2019-01-03T15:10:42.285Z",
    "updatedAt": "2019-01-03T15:10:44.784Z",
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
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
    "publishedCounter": 1,
    "version": 3,
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
    "publishedVersion": 1,
    "firstPublishedAt": "2019-01-03T15:10:42.762Z",
    "publishedAt": "2019-01-03T15:10:42.762Z"
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
, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Thu, 03 Jan 2019 15:10:44 GMT',
  'ETag',
  'W/"80354bdde9b32361bd2e448c66966663"',
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
  '2ffe9527e7ab548db522756b9b3527d7',
  'Content-Length',
  '508',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=zNKgm/66RaaIlDaoFSNdN/QlLlwAAAAAQUIPAAAAAADfSaevMxzIO5qd4tX0Qpu9; expires=Fri, 03 Jan 2020 10:03:59 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=EmMAYof27QL35mRN6lKYhQAAAAA1RM3R9dGgtDXEzHCPtkEG; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1079_673446=l5HYAw3u+iR2dTm+9GD5DvQlLlwAAAAADqRPKvl+MAgoH6bATT7AHA==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '14-10901542-10901543 NNNN CT(107 106 0) RT(1546528243842 19) q(0 0 2 -1) r(4 4) U5',
  'X-CDN',
  'Incapsula' ]);


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
    "createdAt": "2019-01-03T15:10:42.285Z",
    "updatedAt": "2019-01-03T15:10:45.260Z",
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
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
    "publishedCounter": 2,
    "version": 4,
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
    "publishedVersion": 3,
    "firstPublishedAt": "2019-01-03T15:10:42.762Z",
    "publishedAt": "2019-01-03T15:10:45.260Z"
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
, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Thu, 03 Jan 2019 15:10:45 GMT',
  'ETag',
  'W/"bb2946a6cf27b7f58ecbbcc02df2f799"',
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
  'eb67ef7f7a84b0a99f50117967e649cf',
  'Content-Length',
  '512',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=J+lwVUEpSBqsDRgH/zekc/QlLlwAAAAAQUIPAAAAAADo7tE43dheUkyVVRkYfa/G; expires=Fri, 03 Jan 2020 10:03:22 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=QuNRU9PhZG/auVET6lKYhQAAAACBO/N0A7MSVpResHc/+xT8; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1079_673446=jaITa+Nb6Bt7dTm+9GD5DvQlLlwAAAAAiJqiuLAKHsYqHJD50F5ZKw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '5-17025346-17025348 NNNN CT(105 106 0) RT(1546528244352 17) q(0 0 2 -1) r(6 6) U5',
  'X-CDN',
  'Incapsula' ]);


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
    "createdAt": "2019-01-03T15:10:41.193Z",
    "updatedAt": "2019-01-03T15:10:44.067Z",
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
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
    "publishedCounter": 2,
    "version": 4,
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
    "publishedVersion": 3,
    "firstPublishedAt": "2019-01-03T15:10:41.712Z",
    "publishedAt": "2019-01-03T15:10:44.067Z"
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
, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Thu, 03 Jan 2019 15:10:45 GMT',
  'ETag',
  'W/"98f0db58a8e7ed801053b0b3c818de72"',
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
  '7182703e26ff174f8cc3e8f28b7ace37',
  'Content-Length',
  '522',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=IvPw/xG+SaiIyqAU/QqcXfUlLlwAAAAAQUIPAAAAAADSosrjRmkegOmQYMSprTxu; expires=Fri, 03 Jan 2020 10:03:36 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=JAm2fO8RnwucitCt6lKYhQAAAACOZKkUqEYQtXitLG2hK8kn; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1079_673446=TcJ/DnLvnXN9dTm+9GD5DvUlLlwAAAAAjw8yx6wex3I2Be8X6E14zw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '7-14749135-14749136 NNNN CT(0 0 0) RT(1546528244996 19) q(0 0 0 -1) r(1 1) U5',
  'X-CDN',
  'Incapsula' ]);


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
    "createdAt": "2019-01-03T15:10:42.285Z",
    "updatedAt": "2019-01-03T15:10:45.260Z",
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
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
    "publishedCounter": 2,
    "version": 4,
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
    "publishedVersion": 3,
    "firstPublishedAt": "2019-01-03T15:10:42.762Z",
    "publishedAt": "2019-01-03T15:10:45.260Z"
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
, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Thu, 03 Jan 2019 15:10:45 GMT',
  'ETag',
  'W/"bb2946a6cf27b7f58ecbbcc02df2f799"',
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
  '87bc8d9a855dfb3610dbc616046bc5ef',
  'Content-Length',
  '512',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=1RrWOYxoRTSpOEOc5EPA1/UlLlwAAAAAQUIPAAAAAAD4GPE4fYJrqGNWR1eZrIvA; expires=Fri, 03 Jan 2020 10:04:47 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=rjQCXZ1JPnORAHVt6lKYhQAAAABIcpQfA1+KZxmyAl5ECSan; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1079_673446=TSM+KZmqSyGAdTm+9GD5DvUlLlwAAAAAWFB9pu429ynECo6bh3Pg5w==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '13-5854779-5854780 NNNN CT(0 0 0) RT(1546528245207 16) q(0 0 0 -1) r(2 2) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/content_types')
  .query({"sys.id":{"in":"person%2CsomethingElse"},"skip":"0"})
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
        "createdAt": "2019-01-03T15:10:41.193Z",
        "updatedAt": "2019-01-03T15:10:44.067Z",
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
            "id": "33kZDXNajFNmbngiu5MvUa"
          }
        },
        "updatedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "33kZDXNajFNmbngiu5MvUa"
          }
        },
        "publishedCounter": 2,
        "version": 4,
        "publishedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "33kZDXNajFNmbngiu5MvUa"
          }
        },
        "publishedVersion": 3,
        "firstPublishedAt": "2019-01-03T15:10:41.712Z",
        "publishedAt": "2019-01-03T15:10:44.067Z"
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
, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Thu, 03 Jan 2019 15:10:46 GMT',
  'ETag',
  'W/"fa09e0c41e45db8d2b558f635db2a542"',
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
  '94d26162ffccc57e7c56a616267b1caa',
  'Content-Length',
  '586',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=MbVjwGFpSbuNTdVH1aUaTPUlLlwAAAAAQUIPAAAAAAC4WJmkhWhH9KEZODp85FVN; expires=Fri, 03 Jan 2020 10:03:26 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=hXsXZJ89TxZ4RpvJ6lKYhQAAAACGyjvIa/UU2U/eTp8cG95F; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1079_673446=hQK+R9IbLEeFdTm+9GD5DvUlLlwAAAAAppIGU6a9RSA6W7Z3VhjJCw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '4-15565933-15565934 NNNN CT(106 105 0) RT(1546528245469 18) q(0 0 2 -1) r(4 4) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/blogpost', {"name":"blog post","fields":[{"name":"title","id":"title","type":"Symbol"},{"name":"category","id":"category","type":"Symbol"}]})
  .reply(201, {"sys":{"space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"id":"blogpost","type":"ContentType","createdAt":"2019-01-03T15:10:46.676Z","updatedAt":"2019-01-03T15:10:46.676Z","environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}},"createdBy":{"sys":{"type":"Link","linkType":"User","id":"33kZDXNajFNmbngiu5MvUa"}},"updatedBy":{"sys":{"type":"Link","linkType":"User","id":"33kZDXNajFNmbngiu5MvUa"}},"version":1},"displayField":null,"name":"blog post","description":null,"fields":[{"id":"title","name":"title","type":"Symbol","localized":false,"required":false,"validations":[],"disabled":false,"omitted":false},{"id":"category","name":"category","type":"Symbol","localized":false,"required":false,"validations":[],"disabled":false,"omitted":false}]}, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Thu, 03 Jan 2019 15:10:46 GMT',
  'ETag',
  '"1848d50a254bb10881a46e89cd579d42"',
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
  '0bf8e68e957305da6bd22d8803a9f8a5',
  'Content-Length',
  '1228',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=2xtsr7vvSMyjho+ZYPmRq/YlLlwAAAAAQUIPAAAAAABH+w5ttXj0FsDCRJcamRwY; expires=Fri, 03 Jan 2020 10:03:30 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=yV5uOD5g6A09nsMQ6lKYhQAAAACJruOTJ6gyIPWP0iwTgzEW; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1079_673446=qojkGh1dWCSKdTm+9GD5DvYlLlwAAAAAEuc5y+LsGkn1F0Sa8/NBdg==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '2-11880731-11880732 NNNN CT(0 0 0) RT(1546528245899 17) q(0 0 0 -1) r(3 3) U5',
  'X-CDN',
  'Incapsula' ]);


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
    "createdAt": "2019-01-03T15:10:46.676Z",
    "updatedAt": "2019-01-03T15:10:47.128Z",
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
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
    "version": 2,
    "firstPublishedAt": "2019-01-03T15:10:47.128Z",
    "publishedCounter": 1,
    "publishedAt": "2019-01-03T15:10:47.128Z",
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "33kZDXNajFNmbngiu5MvUa"
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
, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Thu, 03 Jan 2019 15:10:47 GMT',
  'ETag',
  'W/"3779bbc441c6e670304caab597389271"',
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
  'afd2695e91a776b154d2aa45198f769a',
  'Content-Length',
  '448',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=MpOlRE4kQSOZEkRHvA1YtfYlLlwAAAAAQUIPAAAAAAA/tabVxKdimFOyYKJcFL1b; expires=Fri, 03 Jan 2020 10:03:26 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=WtyhYv/iTzDhBa8L6lKYhQAAAAB8QQW196yUCZrBnL6Tjkp2; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1079_673446=cgqmPsoyUG6QdTm+9GD5DvYlLlwAAAAAT01iaL4LX4lHfiqAL+r0Gg==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '4-15565946-15565947 NNNN CT(0 0 0) RT(1546528246262 27) q(0 0 0 -1) r(5 5) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .post('/spaces/bohepdihyxin/environments/env-integration/entries', {"fields":{"title":{"en-US":"hello!"}}})
  .reply(201, {
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "bohepdihyxin"
      }
    },
    "id": "pAZDBayTbaGCiyckMwWe8",
    "type": "Entry",
    "createdAt": "2019-01-03T15:10:47.818Z",
    "updatedAt": "2019-01-03T15:10:47.818Z",
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
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
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
, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Thu, 03 Jan 2019 15:10:47 GMT',
  'ETag',
  '"1ce1aa66135559f3409f82baaff8d366"',
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
  '0962b3b53378faf852469ece83cc698b',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=VFTeYY3xR56gwbzswv6OyfclLlwAAAAAQUIPAAAAAAB6BKBDZIpOSbmdhoZxGU8r; expires=Fri, 03 Jan 2020 10:08:03 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=aKrbLYVzJjsH03Qx6lKYhQAAAACHD3ijKZ1NQnc6tYCUxsN7; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1079_673446=UEzzHHLMo1qSdTm+9GD5DvclLlwAAAAAaDHePI/hURvEF3GCfeMdew==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '9-3641229-3641231 NNNN CT(104 210 0) RT(1546528246800 19) q(0 0 3 -1) r(5 5) U5',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .post('/spaces/bohepdihyxin/environments/env-integration/entries', {"fields":{"title":{"en-US":"hello!"}}})
  .reply(201, {
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "bohepdihyxin"
      }
    },
    "id": "2HyLWVo9agCKI4ksM8I0kq",
    "type": "Entry",
    "createdAt": "2019-01-03T15:10:48.139Z",
    "updatedAt": "2019-01-03T15:10:48.139Z",
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
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
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
, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Thu, 03 Jan 2019 15:10:48 GMT',
  'ETag',
  '"d6f6e8e757d9faa83bc051b1018ebb34"',
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
  '40721e820c7d74a19cb703575c2a61b2',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=VG6kehdjTY+MXYoUPIhvxvclLlwAAAAAQUIPAAAAAAA9/6dFQcC+8XTi8HH5xxk2; expires=Fri, 03 Jan 2020 10:03:36 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=bOBLbqcjyXopMXB66lKYhQAAAADyMNfLwVNJ1XWE7fJY+qZc; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1079_673446=Ju6HP24+N1uUdTm+9GD5DvclLlwAAAAApsFMmn2Rdbf++alL5PGf4Q==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '7-14749154-14749155 NNNN CT(0 0 0) RT(1546528247425 16) q(0 0 0 -1) r(2 2) U5',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/content_types')
  .query({"sys.id":{"in":"blogpost"},"skip":"0"})
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
        "createdAt": "2019-01-03T15:10:46.676Z",
        "updatedAt": "2019-01-03T15:10:47.128Z",
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
            "id": "33kZDXNajFNmbngiu5MvUa"
          }
        },
        "updatedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "33kZDXNajFNmbngiu5MvUa"
          }
        },
        "publishedCounter": 1,
        "version": 2,
        "publishedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "33kZDXNajFNmbngiu5MvUa"
          }
        },
        "publishedVersion": 1,
        "firstPublishedAt": "2019-01-03T15:10:47.128Z",
        "publishedAt": "2019-01-03T15:10:47.128Z"
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
, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Thu, 03 Jan 2019 15:10:48 GMT',
  'ETag',
  'W/"1f21e4bbcff82461711cad9f3269470c"',
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
  '5eb3c991b45776516f8a5ef619b36b56',
  'Content-Length',
  '517',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=Qi/VSBrmR7SYYvtcXPvF//clLlwAAAAAQUIPAAAAAAAHDnXOccMAre4HZayyGnfp; expires=Fri, 03 Jan 2020 10:03:22 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=swg/awRFXAKEdGM96lKYhQAAAABYDmGSq2GQEWVBD0dyXc3W; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1079_673446=inLGbNr0MXGXdTm+9GD5DvclLlwAAAAAIMgJ75lgseTRdlnKEmrFXg==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '5-17025392-17025393 NNNN CT(0 0 0) RT(1546528247722 16) q(0 0 0 -1) r(1 1) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/entries')
  .query({"sys.contentType.sys.id":{"in":"blogpost"},"sys.archivedAt":{"exists":"false"},"skip":"0"})
  .reply(200, {
  "sys": {
    "type": "Array"
  },
  "total": 2,
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
        "id": "2HyLWVo9agCKI4ksM8I0kq",
        "type": "Entry",
        "createdAt": "2019-01-03T15:10:48.139Z",
        "updatedAt": "2019-01-03T15:10:48.139Z",
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
            "id": "33kZDXNajFNmbngiu5MvUa"
          }
        },
        "updatedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "33kZDXNajFNmbngiu5MvUa"
          }
        },
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
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "bohepdihyxin"
          }
        },
        "id": "pAZDBayTbaGCiyckMwWe8",
        "type": "Entry",
        "createdAt": "2019-01-03T15:10:47.818Z",
        "updatedAt": "2019-01-03T15:10:47.818Z",
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
            "id": "33kZDXNajFNmbngiu5MvUa"
          }
        },
        "updatedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "33kZDXNajFNmbngiu5MvUa"
          }
        },
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
, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Thu, 03 Jan 2019 15:10:48 GMT',
  'ETag',
  'W/"0ce998e0072bbcc994f164884d5102f0"',
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
  'cc5da320ef646ef8f1bab3d6d9632054',
  'Content-Length',
  '446',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=N/hTtVg3Rm6nnSuFgqlXEfglLlwAAAAAQUIPAAAAAADxRD9oDE0EmBCdhbO3izzN; expires=Fri, 03 Jan 2020 10:03:30 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=mKKxVmeGL2DyzELN6lKYhQAAAACPu2p358l0aSKJ4WcE9ICF; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1079_673446=NC1FJTy1lHmZdTm+9GD5DvglLlwAAAAACk2PHRNda8UpdH+AXNtJ7g==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '2-11880744-11880745 NNNN CT(0 0 0) RT(1546528247935 17) q(0 0 0 -1) r(2 2) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/locales')
  .query({"skip":"0"})
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
        "createdBy":{
          "sys":{
            "type":"Link",
            "linkType":"User",
            "id":"33kZDXNajFNmbngiu5MvUa"
          }
        },
        "createdAt":"2019-01-03T15:10:11Z",
        "updatedBy":{
          "sys":{
            "type":"Link",
            "linkType":"User",
            "id":"33kZDXNajFNmbngiu5MvUa"
          }
        },
        "updatedAt":"2019-01-03T15:10:11Z"
      }
    }
  ]
}

, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature',
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
  '33lrAejsx0jnNQeRJgZ3EO',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Thu, 03 Jan 2019 15:10:49 GMT',
  'ETag',
  'W/"b07cce46a981fab8fe72a0554f5de2b5"',
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
  '71200fb25557030f6cb7015619181998',
  'X-Download-Options',
  'noopen',
  'X-Frame-Options',
  'ALLOWALL',
  'X-Permitted-Cross-Domain-Policies',
  'none',
  'X-XSS-Protection',
  '1; mode=block',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=mqfNFSiNQfOWqqKe4WD2EfglLlwAAAAAQUIPAAAAAAC6/wiwRexh7MhDmLBj8SWb; expires=Fri, 03 Jan 2020 10:03:30 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=KIxdZKGjxH2lZytS6lKYhQAAAACyauPPM0ugmZ9DVdjwqYb/; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1079_673446=Nh3gT0TCOCWcdTm+9GD5DvglLlwAAAAAGnfUofCPkQbRBod4VxDLPw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '2-11880747-11880748 NNNN CT(105 106 0) RT(1546528248224 22) q(0 0 2 -1) r(3 3) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/entries/2HyLWVo9agCKI4ksM8I0kq', {"sys":{"id":"2HyLWVo9agCKI4ksM8I0kq","version":1,"contentType":{"sys":{"type":"Link","linkType":"ContentType","id":"blogpost"}}},"fields":{"title":{"en-US":"hello!"},"category":{"en-US":"hello!"}}})
  .reply(200, {"sys":{"space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"id":"2HyLWVo9agCKI4ksM8I0kq","type":"Entry","createdAt":"2019-01-03T15:10:48.139Z","updatedAt":"2019-01-03T15:10:49.584Z","environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}},"createdBy":{"sys":{"type":"Link","linkType":"User","id":"33kZDXNajFNmbngiu5MvUa"}},"updatedBy":{"sys":{"type":"Link","linkType":"User","id":"33kZDXNajFNmbngiu5MvUa"}},"version":2,"contentType":{"sys":{"type":"Link","linkType":"ContentType","id":"blogpost"}}},"fields":{"title":{"en-US":"hello!"},"category":{"en-US":"hello!"}}}, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Thu, 03 Jan 2019 15:10:49 GMT',
  'ETag',
  '"8c55128ff7fcc80abd395de212f348d8"',
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
  '88a94834a152172e860dbcc531d29acf',
  'Content-Length',
  '980',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=LxUr703wQfaVcwZ1ZYWrB/klLlwAAAAAQUIPAAAAAADhDFF4X/RNjHez8ELLIWVF; expires=Fri, 03 Jan 2020 10:03:55 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=+O0kXn7ytX5laLsx6lKYhQAAAABqtxhQb9G/laT2R52cCk74; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1079_673446=NlIiSus9NymhdTm+9GD5DvklLlwAAAAAQu5bG+n6ZFtgGu7HNf1jYw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '1-8937280-8937281 NNNN CT(114 115 0) RT(1546528248613 17) q(0 0 2 -1) r(4 4) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/entries/2HyLWVo9agCKI4ksM8I0kq/published')
  .reply(200, {
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "bohepdihyxin"
      }
    },
    "id": "2HyLWVo9agCKI4ksM8I0kq",
    "type": "Entry",
    "createdAt": "2019-01-03T15:10:48.139Z",
    "updatedAt": "2019-01-03T15:10:50.105Z",
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
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
    "publishedCounter": 1,
    "version": 3,
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
    "publishedVersion": 2,
    "firstPublishedAt": "2019-01-03T15:10:50.105Z",
    "publishedAt": "2019-01-03T15:10:50.105Z",
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
, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Thu, 03 Jan 2019 15:10:50 GMT',
  'ETag',
  'W/"59a38ad54b3c4e4e19f26df8134f12cc"',
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
  '63c1102752e02fe21fb5bb26a3f9b2dc',
  'Content-Length',
  '395',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=CsB+Qv6ITn6hKH/dCj9yVPklLlwAAAAAQUIPAAAAAACy02KS1eFJP3XzPotqOSU+; expires=Fri, 03 Jan 2020 10:03:36 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=YvFAVk1HKGnxnO0j6lKYhQAAAADqRnBpFxAxN+ZMD6V8lokp; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1079_673446=zUPIe5dJkVGjdTm+9GD5DvklLlwAAAAATqQGYDW7D6ByUDkSkZtoeA==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '7-14749164-14749165 NNNN CT(106 107 0) RT(1546528249180 19) q(0 0 3 -1) r(5 5) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/entries/pAZDBayTbaGCiyckMwWe8', {"sys":{"id":"pAZDBayTbaGCiyckMwWe8","version":1,"contentType":{"sys":{"type":"Link","linkType":"ContentType","id":"blogpost"}}},"fields":{"title":{"en-US":"hello!"},"category":{"en-US":"hello!"}}})
  .reply(200, {"sys":{"space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"id":"pAZDBayTbaGCiyckMwWe8","type":"Entry","createdAt":"2019-01-03T15:10:47.818Z","updatedAt":"2019-01-03T15:10:50.470Z","environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}},"createdBy":{"sys":{"type":"Link","linkType":"User","id":"33kZDXNajFNmbngiu5MvUa"}},"updatedBy":{"sys":{"type":"Link","linkType":"User","id":"33kZDXNajFNmbngiu5MvUa"}},"version":2,"contentType":{"sys":{"type":"Link","linkType":"ContentType","id":"blogpost"}}},"fields":{"title":{"en-US":"hello!"},"category":{"en-US":"hello!"}}}, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Thu, 03 Jan 2019 15:10:50 GMT',
  'ETag',
  '"e49ca02adbe2910f3f15b911a72db976"',
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
  '25697fb869f0722058b311e107c783ea',
  'Content-Length',
  '979',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=gtxvZp3dSWuCjGLI/YmI5vklLlwAAAAAQUIPAAAAAABhaJuWpfhF3L8HBXrViyWl; expires=Fri, 03 Jan 2020 10:03:26 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=HpLcQ0DxJizojXU16lKYhQAAAABSl6vu+N7TeBlKZ/nbNp0F; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1079_673446=jNyXC9HUkB6ldTm+9GD5DvklLlwAAAAAD4+ncgkb1SEAcGGwoyorfg==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '4-15565976-15565977 NNNN CT(0 0 0) RT(1546528249727 17) q(0 0 0 -1) r(2 2) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/entries/pAZDBayTbaGCiyckMwWe8/published')
  .reply(200, {
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "bohepdihyxin"
      }
    },
    "id": "pAZDBayTbaGCiyckMwWe8",
    "type": "Entry",
    "createdAt": "2019-01-03T15:10:47.818Z",
    "updatedAt": "2019-01-03T15:10:50.730Z",
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
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
    "publishedCounter": 1,
    "version": 3,
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
    "publishedVersion": 2,
    "firstPublishedAt": "2019-01-03T15:10:50.730Z",
    "publishedAt": "2019-01-03T15:10:50.730Z",
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
, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Thu, 03 Jan 2019 15:10:50 GMT',
  'ETag',
  'W/"bb6f4617fa9e9d0c97ef653f0c7c8e53"',
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
  '27e55612816cbbd4ea84be42e7dd9394',
  'Content-Length',
  '393',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=/XoO0CyuT5ipkU3oihknwvolLlwAAAAAQUIPAAAAAACy2W/jey5iF0IlhgOBkePM; expires=Fri, 03 Jan 2020 10:03:41 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=xmEseIyBOnSRcCAT6lKYhQAAAAD1SlojhC8Oydxo5Dz8icFM; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1079_673446=9okZWimUbwCodTm+9GD5DvolLlwAAAAA1tEPVJsBRu/FQN6jk1SgYw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '0-9046590-9046591 NNNN CT(0 0 0) RT(1546528249994 16) q(0 0 0 -1) r(3 3) U5',
  'X-CDN',
  'Incapsula' ]);


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
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "bohepdihyxin"
          }
        },
        "id": "pAZDBayTbaGCiyckMwWe8",
        "type": "Entry",
        "createdAt": "2019-01-03T15:10:47.818Z",
        "updatedAt": "2019-01-03T15:10:50.730Z",
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
            "id": "33kZDXNajFNmbngiu5MvUa"
          }
        },
        "updatedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "33kZDXNajFNmbngiu5MvUa"
          }
        },
        "publishedCounter": 1,
        "version": 3,
        "publishedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "33kZDXNajFNmbngiu5MvUa"
          }
        },
        "publishedVersion": 2,
        "firstPublishedAt": "2019-01-03T15:10:50.730Z",
        "publishedAt": "2019-01-03T15:10:50.730Z",
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
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "bohepdihyxin"
          }
        },
        "id": "2HyLWVo9agCKI4ksM8I0kq",
        "type": "Entry",
        "createdAt": "2019-01-03T15:10:48.139Z",
        "updatedAt": "2019-01-03T15:10:50.105Z",
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
            "id": "33kZDXNajFNmbngiu5MvUa"
          }
        },
        "updatedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "33kZDXNajFNmbngiu5MvUa"
          }
        },
        "publishedCounter": 1,
        "version": 3,
        "publishedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "33kZDXNajFNmbngiu5MvUa"
          }
        },
        "publishedVersion": 2,
        "firstPublishedAt": "2019-01-03T15:10:50.105Z",
        "publishedAt": "2019-01-03T15:10:50.105Z",
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
, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Thu, 03 Jan 2019 15:10:51 GMT',
  'ETag',
  'W/"5f562a22f878da26195a8db930be1098"',
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
  'aaea100780e23db0f20ec65c97b75e96',
  'Content-Length',
  '535',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=SbCxZ5EnRrS1OpN2JX4fl/olLlwAAAAAQUIPAAAAAAB/mbXWpMHcU7Pd1Jr9DHXg; expires=Fri, 03 Jan 2020 10:03:30 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=yRb5ArVuskl3Lrv26lKYhQAAAACSUcccp0bQJsb7LUdDcTbM; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1079_673446=BYfKeJRjTn2rdTm+9GD5DvolLlwAAAAAPVxENjCpK1yf2L2ZLxXRrA==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '2-11880771-11880774 NNNN CT(0 0 0) RT(1546528250361 17) q(0 0 0 -1) r(2 2) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/content_types')
  .query({"sys.id":{"in":"blogPost"},"skip":"0"})
  .reply(200, {
  "sys": {
    "type": "Array"
  },
  "total": 0,
  "skip": 0,
  "limit": 100,
  "items": []
}
, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Thu, 03 Jan 2019 15:10:51 GMT',
  'ETag',
  '"29f2c21be26360c424f617d8592cf6f9"',
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
  '2e46e6622be17f07991dd98d6a72d670',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=MJZTLT9pQoepxTJyDDMLUvslLlwAAAAAQUIPAAAAAADz2cifvtJwveBJOlG/4Ijc; expires=Fri, 03 Jan 2020 10:03:55 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=76VjUZnAdlcjK6yH6lKYhQAAAAAfn7SAi0dYgNTnPZgJHu3Q; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1079_673446=YM0VUfIwRjytdTm+9GD5DvslLlwAAAAAGH4OaRQAs0Ygb3q/6/NE4w==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '1-8937300-8937301 NNNN CT(115 116 0) RT(1546528250615 17) q(0 0 2 -1) r(4 4) U5',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked' ]);


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
  "requestId": "b641e5690dab16a624788a91530d3201"
}
, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Thu, 03 Jan 2019 15:10:51 GMT',
  'ETag',
  '"659127c1e1b8060cff6912300f27acf5"',
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
  'b641e5690dab16a624788a91530d3201',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=n8GkD03eRt2T/tSHPKBFMvslLlwAAAAAQUIPAAAAAABeQjVt0uKTJTW5DapYNboT; expires=Fri, 03 Jan 2020 10:03:22 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=I4gpN97b6xahwSAq6lKYhQAAAACAAMewadZSwsLrSg/UAWKB; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1079_673446=m0BWFd/87CavdTm+9GD5DvslLlwAAAAAfyLdD2HUxquPEmOVIMn3RA==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '5-17025410-17025411 NNNN CT(0 0 0) RT(1546528251057 18) q(0 0 0 -1) r(2 2) U5',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/locales')
  .query({"skip":"0"})
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
        "createdBy":{
          "sys":{
            "type":"Link",
            "linkType":"User",
            "id":"33kZDXNajFNmbngiu5MvUa"
          }
        },
        "createdAt":"2019-01-03T15:10:11Z",
        "updatedBy":{
          "sys":{
            "type":"Link",
            "linkType":"User",
            "id":"33kZDXNajFNmbngiu5MvUa"
          }
        },
        "updatedAt":"2019-01-03T15:10:11Z"
      }
    }
  ]
}

, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature',
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
  '33lrAejsx0jnNQeRJgZ3EO',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Thu, 03 Jan 2019 15:10:52 GMT',
  'ETag',
  'W/"b07cce46a981fab8fe72a0554f5de2b5"',
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
  'f6b31af9e53ae7e4527787198522bbc2',
  'X-Download-Options',
  'noopen',
  'X-Frame-Options',
  'ALLOWALL',
  'X-Permitted-Cross-Domain-Policies',
  'none',
  'X-XSS-Protection',
  '1; mode=block',
  'Content-Length',
  '413',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=UZlxWDiQTq+/sgBnrlm/ifslLlwAAAAAQUIPAAAAAAB1X7qSw14NcvaXqqlT49rz; expires=Fri, 03 Jan 2020 10:03:41 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=Qz1dENLvXCIYxncA6lKYhQAAAABSDRo4uhVbXGgovky2dsQs; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1079_673446=9Q3dAeaXQBS1dTm+9GD5DvslLlwAAAAA8XSMCEVKBGO+tQ/sxJKB5Q==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '0-9046601-9046602 NNNN CT(99 99 0) RT(1546528251255 16) q(0 0 2 -1) r(3 3) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/blogPost', {"name":"Blog post","fields":[{"id":"slug","name":"URL Slug","type":"Symbol","required":true}],"description":"super angry"})
  .reply(201, {"sys":{"space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"id":"blogPost","type":"ContentType","createdAt":"2019-01-03T15:10:52.445Z","updatedAt":"2019-01-03T15:10:52.445Z","environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}},"createdBy":{"sys":{"type":"Link","linkType":"User","id":"33kZDXNajFNmbngiu5MvUa"}},"updatedBy":{"sys":{"type":"Link","linkType":"User","id":"33kZDXNajFNmbngiu5MvUa"}},"version":1},"displayField":null,"name":"Blog post","description":"super angry","fields":[{"id":"slug","name":"URL Slug","type":"Symbol","localized":false,"required":true,"validations":[],"disabled":false,"omitted":false}]}, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Thu, 03 Jan 2019 15:10:52 GMT',
  'ETag',
  '"fc6eb7c2f3ed472bbd1741b0274cdbbd"',
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
  '563434df9580950ce45442a761419f95',
  'Content-Length',
  '1027',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=vGxkfWY8R0COHgO84eN+CvslLlwAAAAAQUIPAAAAAAA6seoSRc4g7Ddm/EBSIMIb; expires=Fri, 03 Jan 2020 10:04:47 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=3IFOS4KcfDpzsIAO6lKYhQAAAAAX3ckptT0d8n2zyghEfGR9; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1079_673446=S6zAalJiPE+3dTm+9GD5DvslLlwAAAAAyzu+arM49H/4B2auWj5QxA==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '13-5854802-5854803 NNNN CT(0 0 0) RT(1546528251632 17) q(0 0 0 -1) r(3 3) U5',
  'X-CDN',
  'Incapsula' ]);


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
    "createdAt": "2019-01-03T15:10:52.445Z",
    "updatedAt": "2019-01-03T15:10:52.994Z",
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
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
    "version": 2,
    "firstPublishedAt": "2019-01-03T15:10:52.994Z",
    "publishedCounter": 1,
    "publishedAt": "2019-01-03T15:10:52.994Z",
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "33kZDXNajFNmbngiu5MvUa"
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
, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Thu, 03 Jan 2019 15:10:53 GMT',
  'ETag',
  'W/"46f3ea6d514c717e915f5ace5b9ea093"',
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
  '998c11d5728181cfc6a8f74dc63cc233',
  'Content-Length',
  '446',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=dES/a9exQDCelnXnf+l+V/wlLlwAAAAAQUIPAAAAAACKJXdBHLKNOuOBYfGe/XC/; expires=Fri, 03 Jan 2020 10:03:22 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=8wuVCcv9fwnwLmTy6lKYhQAAAAA5zi39IDDOXHIqFmkdXuH+; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1079_673446=iebnMMXKmju5dTm+9GD5DvwlLlwAAAAA5t0YNPq/9Nn4K9DK8MMj0A==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '5-17025422-17025423 NNNN CT(104 103 0) RT(1546528252027 18) q(0 0 2 -1) r(7 7) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/blogPost/editor_interface', {"controls":[{"fieldId":"slug","widgetId":"slugEditor"}]})
  .reply(200, {"controls":[{"fieldId":"slug","widgetId":"slugEditor"}],"sys":{"id":"default","type":"EditorInterface","space":{"sys":{"id":"bohepdihyxin","type":"Link","linkType":"Space"}},"version":2,"createdAt":"2019-01-03T15:10:53.213Z","createdBy":{"sys":{"id":"33kZDXNajFNmbngiu5MvUa","type":"Link","linkType":"User"}},"updatedAt":"2019-01-03T15:10:53.605Z","updatedBy":{"sys":{"type":"Link","linkType":"User","id":"33kZDXNajFNmbngiu5MvUa"}},"contentType":{"sys":{"id":"blogPost","type":"Link","linkType":"ContentType"}},"environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}}}}, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Thu, 03 Jan 2019 15:10:53 GMT',
  'ETag',
  '"ba7a6c5a036fc7ae68276746d4cdf596"',
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
  '10aee37bff103da7b5ea8b3a3871ba34',
  'Content-Length',
  '951',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=hxR2HEjMSBW8/IH+3TBAY/0lLlwAAAAAQUIPAAAAAADZQX/GCrQqFgEfUPV6fEoo; expires=Fri, 03 Jan 2020 10:03:59 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=ed+aCLUYfE8T107z6lKYhQAAAABJKGSQk0wjthMkmHXWZC2d; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1079_673446=xKgof6wqYlG6dTm+9GD5Dv0lLlwAAAAAK5TPyAAvX33tfnMQxopVLg==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '14-10901573-10901574 NNNN CT(0 0 0) RT(1546528252837 17) q(0 0 0 -1) r(3 3) U5',
  'X-CDN',
  'Incapsula' ]);


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
    "createdAt": "2019-01-03T15:10:53.213Z",
    "createdBy": {
      "sys": {
        "id": "33kZDXNajFNmbngiu5MvUa",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2019-01-03T15:10:53.605Z",
    "updatedBy": {
      "sys": {
        "id": "33kZDXNajFNmbngiu5MvUa",
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
      "widgetId": "slugEditor"
    }
  ]
}
, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Thu, 03 Jan 2019 15:10:53 GMT',
  'ETag',
  '"ba364cb40d4ce1f943cbb10de377f687"',
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
  '8b474cc97bfac6761a46af3fc9c1970b',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=pJJ2AxKYTt+2a+ADDfFiNf0lLlwAAAAAQUIPAAAAAADkWK/8LXQr9/X7RwW/RXbs; expires=Fri, 03 Jan 2020 10:03:41 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=vKIJVjo8fydAjQ9g6lKYhQAAAACsQC5uwJcspdPlzQTFRkiO; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1079_673446=n39qQq93OTO7dTm+9GD5Dv0lLlwAAAAAL+5nvPo48kYYCR/3KHT5iw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '0-9046609-9046610 NNNN CT(0 0 0) RT(1546528253165 16) q(0 0 0 -1) r(3 3) U5',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/content_types')
  .query({"sys.id":{"in":"blogPost"},"skip":"0"})
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
        "createdAt": "2019-01-03T15:10:52.445Z",
        "updatedAt": "2019-01-03T15:10:52.994Z",
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
            "id": "33kZDXNajFNmbngiu5MvUa"
          }
        },
        "updatedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "33kZDXNajFNmbngiu5MvUa"
          }
        },
        "publishedCounter": 1,
        "version": 2,
        "publishedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "33kZDXNajFNmbngiu5MvUa"
          }
        },
        "publishedVersion": 1,
        "firstPublishedAt": "2019-01-03T15:10:52.994Z",
        "publishedAt": "2019-01-03T15:10:52.994Z"
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
, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Thu, 03 Jan 2019 15:10:54 GMT',
  'ETag',
  'W/"ef6d34f5d51c0231216244a6a2d66bc8"',
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
  'b9ccefb9f3d7ea17f045947d8ae06627',
  'Content-Length',
  '513',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=djU03d1pQLScgzR9MQPRfP0lLlwAAAAAQUIPAAAAAABF7eMXi2BYq808urdtNiiG; expires=Fri, 03 Jan 2020 10:03:22 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=qCUaCCC27SBhTtQ76lKYhQAAAABcN3BxC0hKbsVI/y6zbU57; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1079_673446=/bR5S5fu2CC/dTm+9GD5Dv0lLlwAAAAAc+wVTG15YqdvQewSKm1Muw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '5-17025434-17025435 NNNN CT(113 112 0) RT(1546528253462 16) q(0 0 3 -1) r(4 4) U5',
  'X-CDN',
  'Incapsula' ]);


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
    "createdAt": "2019-01-03T15:10:53.213Z",
    "createdBy": {
      "sys": {
        "id": "33kZDXNajFNmbngiu5MvUa",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2019-01-03T15:10:53.605Z",
    "updatedBy": {
      "sys": {
        "id": "33kZDXNajFNmbngiu5MvUa",
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
      "widgetId": "slugEditor"
    }
  ]
}
, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Thu, 03 Jan 2019 15:10:54 GMT',
  'ETag',
  '"ba364cb40d4ce1f943cbb10de377f687"',
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
  '776dd4b23a6ac08af09baebcbce9a3c7',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=4bDTPwadRLOTwQwXa9ceiP4lLlwAAAAAQUIPAAAAAADkwPTKnAAdfcsDncxFqbSz; expires=Fri, 03 Jan 2020 10:03:55 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=TVEWXmOz9Q99WmYf6lKYhQAAAABwDu07Gfx417+J5F1eRWBC; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1079_673446=juuyfWdzQVfBdTm+9GD5Dv4lLlwAAAAAvKO2rC0P4ukRmMVvTlPoWA==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '1-8937327-8937328 NNNN CT(107 107 0) RT(1546528253892 16) q(0 0 2 -1) r(3 3) U5',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/locales')
  .query({"skip":"0"})
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
        "createdBy":{
          "sys":{
            "type":"Link",
            "linkType":"User",
            "id":"33kZDXNajFNmbngiu5MvUa"
          }
        },
        "createdAt":"2019-01-03T15:10:11Z",
        "updatedBy":{
          "sys":{
            "type":"Link",
            "linkType":"User",
            "id":"33kZDXNajFNmbngiu5MvUa"
          }
        },
        "updatedAt":"2019-01-03T15:10:11Z"
      }
    }
  ]
}

, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature',
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
  '33lrAejsx0jnNQeRJgZ3EO',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Thu, 03 Jan 2019 15:10:55 GMT',
  'ETag',
  'W/"b07cce46a981fab8fe72a0554f5de2b5"',
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
  '98d4bf182d4c4290db9f49092721b689',
  'X-Download-Options',
  'noopen',
  'X-Frame-Options',
  'ALLOWALL',
  'X-Permitted-Cross-Domain-Policies',
  'none',
  'X-XSS-Protection',
  '1; mode=block',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=4mA+RgG9SZKgwKo+XRJmj/4lLlwAAAAAQUIPAAAAAABeTqfG/sHHnnH6ZKYP0RU3; expires=Fri, 03 Jan 2020 10:03:12 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=mYOjIB02vH6mB2yJ6lKYhQAAAAAr3JqdxseWO0dEeqHCg2RB; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1079_673446=QWfBKrwiVGzCdTm+9GD5Dv4lLlwAAAAA8gOhtwDwUjIaUmv8eWTRxg==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '3-12874987-12874988 NNNN CT(96 97 0) RT(1546528254309 19) q(0 0 2 -1) r(3 3) U5',
  'X-CDN',
  'Incapsula' ]);


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
    "createdAt": "2019-01-03T15:10:52.445Z",
    "updatedAt": "2019-01-03T15:10:56.778Z",
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
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
    "publishedCounter": 1,
    "version": 3,
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
    "publishedVersion": 1,
    "firstPublishedAt": "2019-01-03T15:10:52.994Z",
    "publishedAt": "2019-01-03T15:10:52.994Z"
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
, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Thu, 03 Jan 2019 15:10:56 GMT',
  'ETag',
  'W/"0dbc9b7557f04dbb1877774dc8cafa7b"',
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
  '9e98cccd35eb8d441c6f05bda6ec6a37',
  'Content-Length',
  '451',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=IJ9gFe98Tsa4XYXnfSj/TQAmLlwAAAAAQUIPAAAAAAD3gf3zxSptBcgHrrnk/+Xn; expires=Fri, 03 Jan 2020 10:03:33 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=mKrnf+Hoqm1GQhRn6lKYhQAAAAB9Uv9/P/Cw1q74ufc4cH7h; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1079_673446=5NBZZCcNInbKdTm+9GD5DgAmLlwAAAAAxyYyI/wvUcSzkasTlwZQJQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '6-10941817-10941818 NNNN CT(105 106 0) RT(1546528254671 17) q(0 0 2 -1) r(16 16) U5',
  'X-CDN',
  'Incapsula' ]);


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
    "createdAt": "2019-01-03T15:10:52.445Z",
    "updatedAt": "2019-01-03T15:10:57.352Z",
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
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
    "publishedCounter": 2,
    "version": 4,
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
    "publishedVersion": 3,
    "firstPublishedAt": "2019-01-03T15:10:52.994Z",
    "publishedAt": "2019-01-03T15:10:57.352Z"
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
, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Thu, 03 Jan 2019 15:10:57 GMT',
  'ETag',
  'W/"fdeb46e1655d4948e64b540887de9b78"',
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
  '68d8adcdda9951e609c11922e6c7cecc',
  'Content-Length',
  '454',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=5NSUjIDDR3OKPRmXcMqY5AAmLlwAAAAAQUIPAAAAAAC4cS4nNiRcNrCg31mR4m/u; expires=Fri, 03 Jan 2020 10:03:26 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=htYgMInoxWyqjkEz6lKYhQAAAAAcTI1uL5FsbmhMaSQYHqEH; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1079_673446=uwiRNsV4IgfQdTm+9GD5DgAmLlwAAAAAW5QRTbr+Flgp6gO0POgbAg==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '4-15566054-15566055 NNNN CT(112 112 0) RT(1546528256432 16) q(0 0 2 -1) r(5 5) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/blogPost/editor_interface', {"controls":[{"fieldId":"slug","widgetId":"singleLine"}]})
  .reply(200, {"controls":[{"fieldId":"slug","widgetId":"singleLine"}],"sys":{"id":"default","type":"EditorInterface","space":{"sys":{"id":"bohepdihyxin","type":"Link","linkType":"Space"}},"version":4,"createdAt":"2019-01-03T15:10:53.213Z","createdBy":{"sys":{"id":"33kZDXNajFNmbngiu5MvUa","type":"Link","linkType":"User"}},"updatedAt":"2019-01-03T15:10:57.938Z","updatedBy":{"sys":{"type":"Link","linkType":"User","id":"33kZDXNajFNmbngiu5MvUa"}},"contentType":{"sys":{"id":"blogPost","type":"Link","linkType":"ContentType"}},"environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}}}}, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Thu, 03 Jan 2019 15:10:57 GMT',
  'ETag',
  '"af9955c566c6e66cbcc523b584eb2074"',
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
  '4abe4a1e7f7922e6147a2c9b2b8447aa',
  'Content-Length',
  '951',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=1SoGzLBLSvKaodXPj4rgfwEmLlwAAAAAQUIPAAAAAAB+3pPDuPsHv9TFZ3eIbd70; expires=Fri, 03 Jan 2020 10:03:41 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=2DICWRlcBixmuMod6lKYhQAAAADAwkQX5zkOpvnsalow++Ub; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1079_673446=7yarIRvoBSvSdTm+9GD5DgEmLlwAAAAAkh9v2UcGMwehyZFSvFqYOw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '0-9046630-9046631 NNNN CT(114 115 0) RT(1546528257009 17) q(0 0 2 -1) r(4 4) U5',
  'X-CDN',
  'Incapsula' ]);


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
    "version": 4,
    "createdAt": "2019-01-03T15:10:53.213Z",
    "createdBy": {
      "sys": {
        "id": "33kZDXNajFNmbngiu5MvUa",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2019-01-03T15:10:57.938Z",
    "updatedBy": {
      "sys": {
        "id": "33kZDXNajFNmbngiu5MvUa",
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
      "widgetId": "singleLine"
    }
  ]
}
, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Thu, 03 Jan 2019 15:10:58 GMT',
  'ETag',
  '"5a615a86123778a766773ea002495006"',
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
  '49471616c285bedb8a14db9300e90769',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=r80S4m+XSr2WaCQyCtd1RwEmLlwAAAAAQUIPAAAAAACxjfPI0w1QXv1FpEVtVZP7; expires=Fri, 03 Jan 2020 10:03:59 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=cjj8U00j7F9vwUo86lKYhQAAAACxScK67FlHclzce6GVU5VA; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1079_673446=S/nILDL7jn3UdTm+9GD5DgEmLlwAAAAAzy2Xf3zYLOvCI5kyiffGjQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '14-10901583-10901584 NNNN CT(0 0 0) RT(1546528257500 18) q(0 0 0 -1) r(1 1) U5',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/content_types')
  .query({"sys.id":{"in":"blogPost"},"skip":"0"})
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
        "createdAt": "2019-01-03T15:10:52.445Z",
        "updatedAt": "2019-01-03T15:10:57.352Z",
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
            "id": "33kZDXNajFNmbngiu5MvUa"
          }
        },
        "updatedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "33kZDXNajFNmbngiu5MvUa"
          }
        },
        "publishedCounter": 2,
        "version": 4,
        "publishedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "33kZDXNajFNmbngiu5MvUa"
          }
        },
        "publishedVersion": 3,
        "firstPublishedAt": "2019-01-03T15:10:52.994Z",
        "publishedAt": "2019-01-03T15:10:57.352Z"
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
, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Thu, 03 Jan 2019 15:10:58 GMT',
  'ETag',
  'W/"2246d5d3c0685ecc2e2ea803a2c4ac93"',
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
  '3d4140169bf308104a1eb1076a5733a4',
  'Content-Length',
  '522',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=uzdmR5p1Sce0mAuAgyOyUgEmLlwAAAAAQUIPAAAAAAAScGo2FjtmEnzUrHKrjXvH; expires=Fri, 03 Jan 2020 10:03:55 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=MNN5ceSkRTbt8vRs6lKYhQAAAAD2AihyEyjqziNn9NYxdG9I; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1079_673446=ScZtQAj3qgbYdTm+9GD5DgEmLlwAAAAAIki2n1zN1kZh+sl3y1HLXA==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '1-8937345-8937346 NNNN CT(0 0 0) RT(1546528257706 16) q(0 0 0 -1) r(2 2) U5',
  'X-CDN',
  'Incapsula' ]);


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
    "version": 4,
    "createdAt": "2019-01-03T15:10:53.213Z",
    "createdBy": {
      "sys": {
        "id": "33kZDXNajFNmbngiu5MvUa",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2019-01-03T15:10:57.938Z",
    "updatedBy": {
      "sys": {
        "id": "33kZDXNajFNmbngiu5MvUa",
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
      "widgetId": "singleLine"
    }
  ]
}
, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Thu, 03 Jan 2019 15:10:58 GMT',
  'ETag',
  '"5a615a86123778a766773ea002495006"',
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
  '255c4b42d378ce40acb48ed8a5adccca',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=Wnz0tCarTS64O24rp5qPVgImLlwAAAAAQUIPAAAAAABHbre88I0JjmXDvRrh5KM0; expires=Fri, 03 Jan 2020 10:03:41 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=ZzFAE0LsHkBQNF9r6lKYhQAAAADjy2b6VVMAiYr+IYmuso/+; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1079_673446=M/yRCC/XYR7bdTm+9GD5DgImLlwAAAAA9PSk3DpLfkmAH69f9dyNkA==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '0-9046636-9046637 NNNN CT(0 0 0) RT(1546528257977 16) q(0 0 0 -1) r(2 2) U5',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/locales')
  .query({"skip":"0"})
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
        "createdBy":{
          "sys":{
            "type":"Link",
            "linkType":"User",
            "id":"33kZDXNajFNmbngiu5MvUa"
          }
        },
        "createdAt":"2019-01-03T15:10:11Z",
        "updatedBy":{
          "sys":{
            "type":"Link",
            "linkType":"User",
            "id":"33kZDXNajFNmbngiu5MvUa"
          }
        },
        "updatedAt":"2019-01-03T15:10:11Z"
      }
    }
  ]
}

, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature',
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
  '33lrAejsx0jnNQeRJgZ3EO',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Thu, 03 Jan 2019 15:10:59 GMT',
  'ETag',
  'W/"b07cce46a981fab8fe72a0554f5de2b5"',
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
  'ea810f88bccbc2f43e20416d849a6cef',
  'X-Download-Options',
  'noopen',
  'X-Frame-Options',
  'ALLOWALL',
  'X-Permitted-Cross-Domain-Policies',
  'none',
  'X-XSS-Protection',
  '1; mode=block',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=K9//8S/5Qsu4XJ0DVBbG4gImLlwAAAAAQUIPAAAAAACW5TJGrSgM4mD5IbJQtBv5; expires=Fri, 03 Jan 2020 10:03:36 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=Z9BcKjyX1USzM3Wr6lKYhQAAAAArqSJ6nZIV36+Nw/ycgptl; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1079_673446=rUCtGCr2gF/hdTm+9GD5DgImLlwAAAAALdxQebTldhL1QY3ug6PaqA==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '7-14749308-14749311 NNNN CT(107 107 0) RT(1546528258198 16) q(0 0 2 -1) r(3 3) U5',
  'X-CDN',
  'Incapsula' ]);


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
    "createdAt": "2019-01-03T15:10:52.445Z",
    "updatedAt": "2019-01-03T15:10:59.576Z",
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
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
    "publishedCounter": 2,
    "version": 5,
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
    "publishedVersion": 3,
    "firstPublishedAt": "2019-01-03T15:10:52.994Z",
    "publishedAt": "2019-01-03T15:10:57.352Z"
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
, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Thu, 03 Jan 2019 15:10:59 GMT',
  'ETag',
  'W/"d195be9c48acfa42270f920fcda7c532"',
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
  '2f50c7a5314b7df5204814abc31e5591',
  'Content-Length',
  '459',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=vIvK5xIwTa2NBKUoTTWxEQMmLlwAAAAAQUIPAAAAAAAlk2vIRT3Gx//4j2w4pNqP; expires=Fri, 03 Jan 2020 10:03:55 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=Z3mkcdpksxitFxcz6lKYhQAAAADzVJ/h2xceQlQvWaUHsboA; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1079_673446=WH0vAzf0Kw3ldTm+9GD5DgMmLlwAAAAAPEmnLeg2c/yBAQG7Y+EnlQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '1-8937351-8937352 NNNN CT(116 116 0) RT(1546528258588 17) q(0 0 2 -1) r(4 4) U5',
  'X-CDN',
  'Incapsula' ]);


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
    "createdAt": "2019-01-03T15:10:52.445Z",
    "updatedAt": "2019-01-03T15:11:00.082Z",
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
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
    "publishedCounter": 3,
    "version": 6,
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "33kZDXNajFNmbngiu5MvUa"
      }
    },
    "publishedVersion": 5,
    "firstPublishedAt": "2019-01-03T15:10:52.994Z",
    "publishedAt": "2019-01-03T15:11:00.082Z"
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
, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Thu, 03 Jan 2019 15:11:00 GMT',
  'ETag',
  'W/"17dae903300c8949fcb10b9f6bb14828"',
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
  '8aec29ca956e333008cc1bf8627e7d6c',
  'Content-Length',
  '459',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=aV6ZYfPtTIq+NCHMHr1CRQMmLlwAAAAAQUIPAAAAAABGNOQv8ZA2aBcqMHxpJP0g; expires=Fri, 03 Jan 2020 10:03:22 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=N8XdGGHEyTTGxods6lKYhQAAAADHg4Brpwq3v+0wPObkbgMH; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1079_673446=YqZHP25R7XLodTm+9GD5DgMmLlwAAAAAfJN+3RcZp4X3e/X+eGm4lg==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '5-17025466-17025467 NNNN CT(98 99 0) RT(1546528259105 18) q(0 0 2 -1) r(6 6) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/blogPost/editor_interface', {"controls":[{"fieldId":"slug","widgetId":"slugEditor","settings":{"helpText":"This is the slug for the entry, it will be used for the URL"}}]})
  .reply(200, {
  "controls": [
    {
      "fieldId": "slug",
      "widgetId": "slugEditor",
      "settings": {
        "helpText": "This is the slug for the entry, it will be used for the URL"
      }
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
    "createdAt": "2019-01-03T15:10:53.213Z",
    "createdBy": {
      "sys": {
        "id": "33kZDXNajFNmbngiu5MvUa",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2019-01-03T15:11:00.503Z",
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "33kZDXNajFNmbngiu5MvUa"
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
, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Thu, 03 Jan 2019 15:11:00 GMT',
  'ETag',
  'W/"df9fc4988eada408c44df4a495210866"',
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
  'a1a260ce45cb44285daeef4a92b24535',
  'Content-Length',
  '403',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=xA3kLKx9SDqhp0eLYuuDTQQmLlwAAAAAQUIPAAAAAADqrC8dFM0XH184R0kE4CeA; expires=Fri, 03 Jan 2020 10:05:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=BtivPB5l02Gpq3eA6lKYhQAAAACCHdnom+0VaryACw0TpDRq; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1079_673446=3YamFeqBf2rqdTm+9GD5DgQmLlwAAAAA4M1m0kaWQaB7MxPkhEnz9g==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '12-4982580-4982581 NNNN CT(0 0 0) RT(1546528259759 16) q(0 0 0 -1) r(3 3) U5',
  'X-CDN',
  'Incapsula' ]);


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
    "version": 6,
    "createdAt": "2019-01-03T15:10:53.213Z",
    "createdBy": {
      "sys": {
        "id": "33kZDXNajFNmbngiu5MvUa",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2019-01-03T15:11:00.503Z",
    "updatedBy": {
      "sys": {
        "id": "33kZDXNajFNmbngiu5MvUa",
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
      "widgetId": "slugEditor"
    }
  ]
}
, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Thu, 03 Jan 2019 15:11:00 GMT',
  'ETag',
  'W/"db679075de20c2b60a22422a3ac3b5ea"',
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
  '0fae2dcf93506a7ee081924f951a7e4f',
  'Content-Length',
  '392',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=kFhbm9MtSCSU731rb94dHgQmLlwAAAAAQUIPAAAAAACJboDr2jPbHBaobUovLw6B; expires=Fri, 03 Jan 2020 10:03:41 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=PmhXTDph1VqzrUGd6lKYhQAAAAByTC5pacF1yOCfBoJiCjfF; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1079_673446=qs1XX5ZKxhHsdTm+9GD5DgQmLlwAAAAAYyQWSBIzkO7D9EnoXB5o7Q==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '0-9046649-9046650 NNNN CT(0 0 0) RT(1546528260097 16) q(0 0 0 -1) r(1 1) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .delete('/spaces/bohepdihyxin/environments/env-integration')
  .reply(204, "", [ 'Accept-Ranges',
  'bytes',
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature',
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
  '33lrAejsx0jnNQeRJgZ3EO',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/octet-stream',
  'Contentful-Api',
  'cma',
  'Date',
  'Thu, 03 Jan 2019 15:11:01 GMT',
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
  'e84ba637baa74df4b8d9112da7b67113',
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
  'visid_incap_673446=bfm5Hi4EReq1jLoMOfcRSAQmLlwAAAAAQUIPAAAAAADftjreTS68f1XyvMgDIqhH; expires=Fri, 03 Jan 2020 10:03:26 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=uLSrc2dMXS3vUalg6lKYhQAAAADpWZ5teYZhzS88HfMTEm0Y; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1079_673446=OPGGS76w22LwdTm+9GD5DgQmLlwAAAAAq8Qbt2USm1q4FQcQb82U/Q==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '4-15566098-15566099 NNNN CT(0 0 0) RT(1546528260304 17) q(0 0 0 -1) r(3 3) U5',
  'X-CDN',
  'Incapsula' ]);
