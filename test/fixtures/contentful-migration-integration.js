const nock = require('nock');

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/4z7mp4ioxvmh/environments/env-integration', {"name":"env-integration"})
  .reply(201, {"name":"env-integration","sys":{"type":"Environment","id":"env-integration","version":1,"space":{"sys":{"type":"Link","linkType":"Space","id":"4z7mp4ioxvmh"}},"status":{"sys":{"type":"Link","linkType":"Status","id":"queued"}},"createdBy":{"sys":{"type":"Link","linkType":"User","id":"29B6zorz8plUCN1auThiVH"}},"createdAt":"2019-06-06T09:13:40Z","updatedBy":{"sys":{"type":"Link","linkType":"User","id":"29B6zorz8plUCN1auThiVH"}},"updatedAt":"2019-06-06T09:13:40Z"}}, [ 'Accept-Ranges',
  'bytes',
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id',
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
  '3K455q89UYoPpaqfDF2erz',
  'CF-Space-Id',
  '4z7mp4ioxvmh',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Thu, 06 Jun 2019 09:13:40 GMT',
  'ETag',
  'W/"e568597c6c6b2c59e9044ff30ff29539"',
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
  '8cd7fb85507c6ee55ff88d98c9dffe62',
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
  'visid_incap_673446=2wpflgd0Rz6rq57Kp/WIFkPZ+FwAAAAAQUIPAAAAAAB2eAjOEgfW89QIQdvESGoW; expires=Fri, 05 Jun 2020 08:50:56 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=34R1XepSRmknnHDrYMlkBAAAAADcjmgTI+3XLzoOm+LqWKKz; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=BzYXCkf5JQ7k8wmxI0byDkPZ+FwAAAAAeXaTN3C9Q5aHqpYj71ovcw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '7-2020400-2020402 NNNN CT(0 0 0) RT(1559812419615 51) q(0 0 0 -1) r(3 3) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/4z7mp4ioxvmh/environments/env-integration')
  .reply(200, {
  "name":"env-integration",
  "sys":{
    "type":"Environment",
    "id":"env-integration",
    "version":4,
    "space":{
      "sys":{
        "type":"Link",
        "linkType":"Space",
        "id":"4z7mp4ioxvmh"
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
        "id":"29B6zorz8plUCN1auThiVH"
      }
    },
    "createdAt":"2019-06-06T09:13:40Z",
    "updatedBy":{
      "sys":{
        "type":"Link",
        "linkType":"User",
        "id":"29B6zorz8plUCN1auThiVH"
      }
    },
    "updatedAt":"2019-06-06T09:13:40Z"
  }
}

, [ 'Accept-Ranges',
  'bytes',
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id',
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
  '3K455q89UYoPpaqfDF2erz',
  'CF-Space-Id',
  '4z7mp4ioxvmh',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Thu, 06 Jun 2019 09:13:40 GMT',
  'ETag',
  'W/"cb2e2e47a71f96018ca87f28b5c09f54"',
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
  '16eb3f9d6fba5e545cef7c4d868d8e60',
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
  'visid_incap_673446=ZuLYMoFlS8q8fgculP1TH0TZ+FwAAAAAQUIPAAAAAACkmgZUDUnHYFpaiAfRIsSt; expires=Fri, 05 Jun 2020 08:51:16 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=OVPfG1D1syeiUZ3PYMlkBAAAAAAYRCvcvZjZVAJRCc0wkjaQ; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=1qfLRFQnkGrq8wmxI0byDkTZ+FwAAAAAbqWD2cl2/03mSRuKuqD0vA==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '3-1630098-1630102 NNNN CT(101 101 0) RT(1559812420009 25) q(0 0 2 -1) r(4 4) U5',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/4z7mp4ioxvmh/environments/env-integration')
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
        "id":"4z7mp4ioxvmh"
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
        "id":"29B6zorz8plUCN1auThiVH"
      }
    },
    "createdAt":"2019-06-06T09:13:40Z",
    "updatedBy":{
      "sys":{
        "type":"Link",
        "linkType":"User",
        "id":"29B6zorz8plUCN1auThiVH"
      }
    },
    "updatedAt":"2019-06-06T09:13:41Z"
  }
}

, [ 'Accept-Ranges',
  'bytes',
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id',
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
  '3K455q89UYoPpaqfDF2erz',
  'CF-Space-Id',
  '4z7mp4ioxvmh',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Thu, 06 Jun 2019 09:13:42 GMT',
  'ETag',
  'W/"82e2fbbf1259b3f20d79056cfb88eb0d"',
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
  'cfcd77e5bd12c037ba05c637ba3cca37',
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
  'visid_incap_673446=mwXwSs+BTAq+RRqOfHmhHkXZ+FwAAAAAQUIPAAAAAAA7LrdPPwCFi3EZAyNytbjK; expires=Fri, 05 Jun 2020 08:50:56 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=/8yUCGR1CnLSfyVWYMlkBAAAAADVmd36uw/ukJSN1CSjZZyn; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=5n1ZOqrFXhUE9AmxI0byDkXZ+FwAAAAAMMazpIR5PNm7qtQSqjbSJg==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '5-2595633-2595634 NNNN CT(0 0 0) RT(1559812421467 26) q(0 0 0 -1) r(2 2) U5',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/4z7mp4ioxvmh/environments/env-integration/content_types')
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id',
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
  'CF-Space-Id',
  '4z7mp4ioxvmh',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Thu, 06 Jun 2019 09:13:42 GMT',
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
  '59b6557bb548c6347ab49d9e57252163',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=2Kx1aSaETJiUlZsQ8RWPmkbZ+FwAAAAAQUIPAAAAAADwj65PedqDJJZWD+6Voffk; expires=Fri, 05 Jun 2020 08:50:56 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=USFJPXndv0vGNEePYMlkBAAAAADwwk5FuU29JAUzEIo7hlyt; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=Ererah5wvF0R9AmxI0byDkbZ+FwAAAAABlxQ3m6i32eUy7Wd5BZZmw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '5-2595642-2595643 NNNN CT(0 0 0) RT(1559812421750 22) q(0 0 0 -1) r(4 4) U5',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/4z7mp4ioxvmh/environments/env-integration/content_types/blogPost/editor_interface')
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
    "space": "4z7mp4ioxvmh"
  },
  "requestId": "e2e865db382bfdd386b54523895086d0"
}
, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id',
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
  'CF-Space-Id',
  '4z7mp4ioxvmh',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Thu, 06 Jun 2019 09:13:43 GMT',
  'ETag',
  '"3c145547d6a9eedaf3dfea14f732237d"',
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
  'e2e865db382bfdd386b54523895086d0',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=niw9m+l3QuiTdQsuqoazYUbZ+FwAAAAAQUIPAAAAAACYGD4hILkM5MZovi3eUmUN; expires=Fri, 05 Jun 2020 08:50:56 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=s/SiH7hLozMHez+oYMlkBAAAAAAVYLrpXd7FgXrwPU11Njs0; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=AM5ma+z4WHQj9AmxI0byDkbZ+FwAAAAAS56gFTHatOlPateR1QvL3g==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '7-2020457-2020458 NNNN CT(0 0 0) RT(1559812422180 23) q(0 0 0 -1) r(4 4) U5',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/4z7mp4ioxvmh/environments/env-integration/locales')
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
      "name":"English (United States)",
      "internal_code":"en-US",
      "code":"en-US",
      "fallbackCode":null,
      "default":true,
      "contentManagementApi":true,
      "contentDeliveryApi":true,
      "optional":false,
      "sys":{
        "type":"Locale",
        "id":"2l2w2vNt0QIsSwmm05aYRA",
        "version":1,
        "space":{
          "sys":{
            "type":"Link",
            "linkType":"Space",
            "id":"4z7mp4ioxvmh"
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
            "id":"29B6zorz8plUCN1auThiVH"
          }
        },
        "createdAt":"2019-06-06T09:13:40Z",
        "updatedBy":{
          "sys":{
            "type":"Link",
            "linkType":"User",
            "id":"29B6zorz8plUCN1auThiVH"
          }
        },
        "updatedAt":"2019-06-06T09:13:40Z"
      }
    }
  ]
}

, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id',
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
  '3K455q89UYoPpaqfDF2erz',
  'CF-Space-Id',
  '4z7mp4ioxvmh',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Thu, 06 Jun 2019 09:13:43 GMT',
  'ETag',
  'W/"41b1ec81ce25ad605c894062ea31e8b0"',
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
  '36829517268f4cdc9dc31263eb4bb648',
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
  'visid_incap_673446=0IbHi61uQMqfv23cYmTTrUbZ+FwAAAAAQUIPAAAAAABIoreugvjXC7yjsDAag5BR; expires=Fri, 05 Jun 2020 08:51:43 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=yLIGSIeulkV/XbxjYMlkBAAAAADMuPd4Kebk5nQjIJXNcgZI; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=dKAhWsEyO3Eu9AmxI0byDkbZ+FwAAAAAU9fE0WlMRYSu2Ag9hnx/zg==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '10-455410-455411 NNNN CT(0 0 0) RT(1559812422758 27) q(0 0 0 -1) r(2 2) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/4z7mp4ioxvmh/environments/env-integration/content_types/blogPost', {"name":"Blog post","fields":[{"id":"slug","name":"URL Slug","type":"Symbol","required":true}],"description":"super angry"})
  .reply(201, {"sys":{"space":{"sys":{"type":"Link","linkType":"Space","id":"4z7mp4ioxvmh"}},"id":"blogPost","type":"ContentType","createdAt":"2019-06-06T09:13:43.555Z","updatedAt":"2019-06-06T09:13:43.555Z","environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}},"createdBy":{"sys":{"type":"Link","linkType":"User","id":"29B6zorz8plUCN1auThiVH"}},"updatedBy":{"sys":{"type":"Link","linkType":"User","id":"29B6zorz8plUCN1auThiVH"}},"publishedCounter":0,"version":1},"displayField":null,"name":"Blog post","description":"super angry","fields":[{"id":"slug","name":"URL Slug","type":"Symbol","localized":false,"required":true,"validations":[],"disabled":false,"omitted":false}]}, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id',
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
  'CF-Space-Id',
  '4z7mp4ioxvmh',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Thu, 06 Jun 2019 09:13:43 GMT',
  'ETag',
  '"5f6987bd9d0ff9fa37a95eb610226862"',
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
  '0a71b4337026732a70819c08bde75174',
  'Content-Length',
  '1054',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=FwpD46JnSjK9OjEsi7SRR0fZ+FwAAAAAQUIPAAAAAAB/0JPwFriI6Pr/IDqmSKS+; expires=Fri, 05 Jun 2020 08:50:56 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=wxoDbfOHxiR7KF/4YMlkBAAAAABDhQ8wFRoXZoKZlNwk1sSc; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=u6LjY1k3+GI59AmxI0byDkfZ+FwAAAAATRS6Lhwhjf5B2GgqMtwmKQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '7-2020478-2020480 NNNN CT(0 0 0) RT(1559812423007 23) q(0 0 0 -1) r(2 2) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/4z7mp4ioxvmh/environments/env-integration/content_types/blogPost/published')
  .reply(200, {
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "4z7mp4ioxvmh"
      }
    },
    "id": "blogPost",
    "type": "ContentType",
    "createdAt": "2019-06-06T09:13:43.555Z",
    "updatedAt": "2019-06-06T09:13:44.064Z",
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
        "id": "29B6zorz8plUCN1auThiVH"
      }
    },
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "29B6zorz8plUCN1auThiVH"
      }
    },
    "publishedCounter": 1,
    "version": 2,
    "firstPublishedAt": "2019-06-06T09:13:44.064Z",
    "publishedAt": "2019-06-06T09:13:44.064Z",
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "29B6zorz8plUCN1auThiVH"
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id',
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
  'CF-Space-Id',
  '4z7mp4ioxvmh',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Thu, 06 Jun 2019 09:13:44 GMT',
  'ETag',
  'W/"849d9bc0aac246201c5492c5e61b8d63"',
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
  'cf8872cc0a29bf2050a147c6bda97648',
  'Content-Length',
  '446',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=G3OaGCOyRmWCZsXspv5630fZ+FwAAAAAQUIPAAAAAADENLJiwHt8mRwawl4QSL6U; expires=Fri, 05 Jun 2020 08:50:56 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=TuaiPibKLFv2OCzMYMlkBAAAAABlNtD9v0L9nNgukApcNWsW; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=va6DJCXf9nJP9AmxI0byDkfZ+FwAAAAAu99s6m+7rJpkmtyiPLYxdw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '7-2020566-2020567 NNNN CT(104 104 0) RT(1559812423310 22) q(0 0 2 -1) r(6 6) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/4z7mp4ioxvmh/environments/env-integration/content_types/blogPost/editor_interface', {"controls":[{"fieldId":"slug","widgetId":"slugEditor","settings":{"setting":"value"},"widgetNamespace":"extension"}]})
  .reply(200, {
  "controls": [
    {
      "fieldId": "slug",
      "widgetId": "slugEditor",
      "settings": {
        "setting": "value"
      },
      "widgetNamespace": "extension"
    }
  ],
  "sys": {
    "id": "default",
    "type": "EditorInterface",
    "space": {
      "sys": {
        "id": "4z7mp4ioxvmh",
        "type": "Link",
        "linkType": "Space"
      }
    },
    "version": 2,
    "createdAt": "2019-06-06T09:13:44.183Z",
    "createdBy": {
      "sys": {
        "id": "29B6zorz8plUCN1auThiVH",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2019-06-06T09:13:44.561Z",
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "29B6zorz8plUCN1auThiVH"
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id',
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
  'CF-Space-Id',
  '4z7mp4ioxvmh',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Thu, 06 Jun 2019 09:13:44 GMT',
  'ETag',
  'W/"75e34155beb754501d963d63e7aae6a1"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'c9f1ced8f191e3edfddd167e590f07e0',
  'Content-Length',
  '386',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=k6EPSznoSMSQNKswbz1gZUjZ+FwAAAAAQUIPAAAAAAACMGJaDvgfjvYne2vBs0TV; expires=Fri, 05 Jun 2020 08:50:56 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=V9BOdAyR6l5zIdYSYMlkBAAAAAA2aLQ0Yv9RLLqw6JH562Wc; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=anvEdgtMfQdV9AmxI0byDkjZ+FwAAAAAO2+y/NM8LcwCDYKI6h376Q==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '7-2020632-2020633 NNNN CT(0 0 0) RT(1559812424030 24) q(0 0 0 -1) r(2 2) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/4z7mp4ioxvmh/environments/env-integration/content_types/blogPost/editor_interface')
  .reply(200, {
  "sys": {
    "id": "default",
    "type": "EditorInterface",
    "space": {
      "sys": {
        "id": "4z7mp4ioxvmh",
        "type": "Link",
        "linkType": "Space"
      }
    },
    "version": 2,
    "createdAt": "2019-06-06T09:13:44.183Z",
    "createdBy": {
      "sys": {
        "id": "29B6zorz8plUCN1auThiVH",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2019-06-06T09:13:44.561Z",
    "updatedBy": {
      "sys": {
        "id": "29B6zorz8plUCN1auThiVH",
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
      "widgetNamespace": "extension"
    }
  ]
}
, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id',
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
  'CF-Space-Id',
  '4z7mp4ioxvmh',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Thu, 06 Jun 2019 09:13:45 GMT',
  'ETag',
  'W/"32c0dc65ad30313db6a1012f3e290c58"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '2b79b773643034b1162bbd00f2b079ad',
  'Content-Length',
  '372',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=X/u0XjEOQ76sL63WPQcPkUjZ+FwAAAAAQUIPAAAAAADSi7vQIHdKxLsejx7D2QXJ; expires=Fri, 05 Jun 2020 08:50:56 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=wxX7IiC5E33K8Z5IYMlkBAAAAAC8t0c0nEKZFAa4klZ/a9yV; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=bvHLMRfN3kFj9AmxI0byDkjZ+FwAAAAAoiWjANQSVe95LbQRqtLJng==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '7-2020637-2020638 NNNN CT(101 207 0) RT(1559812424317 26) q(0 0 3 -1) r(4 4) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .delete('/spaces/4z7mp4ioxvmh/environments/env-integration')
  .reply(204, "", [ 'Accept-Ranges',
  'bytes',
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id',
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
  '3K455q89UYoPpaqfDF2erz',
  'CF-Space-Id',
  '4z7mp4ioxvmh',
  'Contentful-Api',
  'cma',
  'Date',
  'Thu, 06 Jun 2019 09:13:45 GMT',
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
  '5f4a74661c7d81f0b1bab83ef3a3b4c1',
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
  'visid_incap_673446=/EcEecQCTx6BRW9fEInZaUnZ+FwAAAAAQUIPAAAAAADvb3GstNRHTmSsfhzFOGUm; expires=Fri, 05 Jun 2020 08:50:58 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=rd/yf4LCRi1R0g+7YMlkBAAAAABeQt+HIEyQJaLeYeoB/sGc; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=KWVkXMNeAmts9AmxI0byDknZ+FwAAAAAnTiui0bhZ97KSR5yVBwWNQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '4-2017544-2017545 NNNN CT(0 0 0) RT(1559812424857 26) q(0 0 0 -1) r(3 3) U5',
  'X-CDN',
  'Incapsula' ]);
