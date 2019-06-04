const nock = require('nock');

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/4z7mp4ioxvmh/environments/env-integration', {"name":"env-integration"})
  .reply(201, {"name":"env-integration","sys":{"type":"Environment","id":"env-integration","version":1,"space":{"sys":{"type":"Link","linkType":"Space","id":"4z7mp4ioxvmh"}},"status":{"sys":{"type":"Link","linkType":"Status","id":"queued"}},"createdBy":{"sys":{"type":"Link","linkType":"User","id":"29B6zorz8plUCN1auThiVH"}},"createdAt":"2019-06-04T08:23:32Z","updatedBy":{"sys":{"type":"Link","linkType":"User","id":"29B6zorz8plUCN1auThiVH"}},"updatedAt":"2019-06-04T08:23:32Z"}}, [ 'Accept-Ranges',
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
  'Tue, 04 Jun 2019 08:23:32 GMT',
  'ETag',
  'W/"e20151f349414267483a45ef6b772a29"',
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
  '6bef57fe69c7558d1819c51042d0739c',
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
  'visid_incap_673446=9W646KlTRTC9+dBrLaU+JYMq9lwAAAAAQUIPAAAAAAB1x8CBxojCpUn29eYluN4u; expires=Wed, 03 Jun 2020 07:03:19 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=mDxMWHhPqHBcsn1TYMlkBAAAAACjUjI0p9DZOWAanLnQid8X; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=csXAQPlhTH5XyOBdIUbyDoMq9lwAAAAAgUZFKFXx21Me+Ws4SH7foA==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '2-4337020-4337021 NNNN CT(0 0 0) RT(1559636611188 48) q(0 0 0 -1) r(3 3) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/4z7mp4ioxvmh/environments/env-integration')
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
    "createdAt":"2019-06-04T08:23:32Z",
    "updatedBy":{
      "sys":{
        "type":"Link",
        "linkType":"User",
        "id":"29B6zorz8plUCN1auThiVH"
      }
    },
    "updatedAt":"2019-06-04T08:23:32Z"
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
  'Tue, 04 Jun 2019 08:23:32 GMT',
  'ETag',
  'W/"c837aca914473ba4cff472d64d43be96"',
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
  '3c45e0bde78c9efde9f313804ee006b2',
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
  'visid_incap_673446=R85UEj9nRtuwUft3+Irs6IMq9lwAAAAAQUIPAAAAAAA0rmUvktnFQw279zOB55Cm; expires=Wed, 03 Jun 2020 07:03:17 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=4oiLfzfgfzNrz5quYMlkBAAAAAA9d9JZ3f7gRQ9P19BE5xmu; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=eMJjUJQnYzlayOBdIUbyDoMq9lwAAAAAg9u8ZvyMIBsh0FdQHWP/DA==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '6-4967396-4967397 NNNN CT(0 0 0) RT(1559636611602 25) q(0 0 0 -1) r(1 1) U5',
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
    "createdAt":"2019-06-04T08:23:32Z",
    "updatedBy":{
      "sys":{
        "type":"Link",
        "linkType":"User",
        "id":"29B6zorz8plUCN1auThiVH"
      }
    },
    "updatedAt":"2019-06-04T08:23:32Z"
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
  'Tue, 04 Jun 2019 08:23:33 GMT',
  'ETag',
  'W/"0cb2a01ebc12f60d054f86c60a8ef21a"',
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
  'f9bb65b93d3b648fb428f345c5ab9c7c',
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
  'visid_incap_673446=PHlbxf4gQqO/3qD2OBzPioUq9lwAAAAAQUIPAAAAAAByk5FsAkTsY3BRHsml0jrA; expires=Wed, 03 Jun 2020 07:03:48 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=1AlQQv4SJl79ez+VYMlkBAAAAAByDTThauKjtYZ5McpsRNfN; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=CZPjTfcvQW1syOBdIUbyDoUq9lwAAAAAaKg8dSJprcMGmvXbAXR+9Q==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '7-7071540-7071541 NNNN CT(0 0 0) RT(1559636612842 20) q(0 0 0 -1) r(2 2) U5',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/4z7mp4ioxvmh/environments/env-integration/content_types')
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
  'Tue, 04 Jun 2019 08:23:34 GMT',
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
  'af385bb61e19782c96978620898472c4',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=22kwyTmsTlepQaLygK3pS4Uq9lwAAAAAQUIPAAAAAADS2Pb4HUqxo+B/rJHA3kiG; expires=Wed, 03 Jun 2020 07:03:19 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=fEedPnCHOjXsJGmnYMlkBAAAAABSLW6YXODRL5vuybh1/lPa; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=de1UDxEtqS11yOBdIUbyDoUq9lwAAAAAY7uBJq21W8HKP8Y/5KKq4A==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '3-5987722-5987723 NNNN CT(0 0 0) RT(1559636613086 17) q(0 0 0 -1) r(3 3) U5',
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
        "createdAt":"2019-06-04T08:23:32Z",
        "updatedBy":{
          "sys":{
            "type":"Link",
            "linkType":"User",
            "id":"29B6zorz8plUCN1auThiVH"
          }
        },
        "updatedAt":"2019-06-04T08:23:32Z"
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
  'Tue, 04 Jun 2019 08:23:34 GMT',
  'ETag',
  'W/"43ade1f02d7df04f7668b3794fa9501d"',
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
  'f864d892a1b1329e626525359603ebae',
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
  'visid_incap_673446=7WiORDeNT7+RrhYyqqSsCIUq9lwAAAAAQUIPAAAAAACP262TTG5T3Ri+mrvepVZx; expires=Wed, 03 Jun 2020 07:03:26 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=Rb4nZhi/TFYXFaaXYMlkBAAAAADGzJdfUzqyPapx5gc0udid; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=3m4qWSJAvg17yOBdIUbyDoUq9lwAAAAARw1kPYoN42n+Z8FPndZMWw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '0-2885012-2885013 NNNN CT(0 0 0) RT(1559636613535 19) q(0 0 0 -1) r(2 2) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/4z7mp4ioxvmh/environments/env-integration/content_types/dog', {"name":"angry dog","fields":[{"id":"woofs","name":"woof woof","type":"Number","required":true}],"description":"super angry"})
  .reply(201, {"sys":{"space":{"sys":{"type":"Link","linkType":"Space","id":"4z7mp4ioxvmh"}},"id":"dog","type":"ContentType","createdAt":"2019-06-04T08:23:34.832Z","updatedAt":"2019-06-04T08:23:34.832Z","environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}},"createdBy":{"sys":{"type":"Link","linkType":"User","id":"29B6zorz8plUCN1auThiVH"}},"updatedBy":{"sys":{"type":"Link","linkType":"User","id":"29B6zorz8plUCN1auThiVH"}},"publishedCounter":0,"version":1},"displayField":null,"name":"angry dog","description":"super angry","fields":[{"id":"woofs","name":"woof woof","type":"Number","localized":false,"required":true,"validations":[],"disabled":false,"omitted":false}]}, [ 'Access-Control-Allow-Headers',
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
  'Tue, 04 Jun 2019 08:23:34 GMT',
  'ETag',
  '"839e54ec142367aca9271538bcfd83f6"',
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
  'dc7349da6335de8221c1d817010bbda7',
  'Content-Length',
  '1051',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=kaGU2TYARh+YfuDMSOzzxYYq9lwAAAAAQUIPAAAAAAAHGmhka1LQsMAE/FttxwpF; expires=Wed, 03 Jun 2020 07:03:18 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=15kLJD9os2PAUqaUYMlkBAAAAACZbPXsMAb6KGqsCpyJ/9sK; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=wka2AmcTVHCGyOBdIUbyDoYq9lwAAAAAF6n+F/fQ46QMo/ZyXmPWIw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '1-3550614-3550615 NNNN CT(0 0 0) RT(1559636613771 17) q(0 0 0 -1) r(4 4) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/4z7mp4ioxvmh/environments/env-integration/content_types/dog/published')
  .reply(200, {
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "4z7mp4ioxvmh"
      }
    },
    "id": "dog",
    "type": "ContentType",
    "createdAt": "2019-06-04T08:23:34.832Z",
    "updatedAt": "2019-06-04T08:23:35.199Z",
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
    "firstPublishedAt": "2019-06-04T08:23:35.199Z",
    "publishedAt": "2019-06-04T08:23:35.199Z",
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
  'Tue, 04 Jun 2019 08:23:35 GMT',
  'ETag',
  'W/"470ebe8a1ede03d59224973bb4ece1d4"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '0b7fa95b609e8459f9fef4d97004a956',
  'Content-Length',
  '442',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=3FtQxO15QUSETiMMtNBCb4Yq9lwAAAAAQUIPAAAAAAD+fWqoRHI1WP/wF5QBFshX; expires=Wed, 03 Jun 2020 07:03:48 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=hx5TIanntDc3JQpOYMlkBAAAAAD6+tUAzE5uJrMWLUi6S3WM; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=ISBuGcO7TReOyOBdIUbyDoYq9lwAAAAAO4RWAWcGn99+QwVSDtcqJg==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '7-7071551-7071552 NNNN CT(0 0 0) RT(1559636614222 21) q(0 0 0 -1) r(4 4) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/4z7mp4ioxvmh/environments/env-integration/content_types/dog')
  .reply(200, {
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "4z7mp4ioxvmh"
      }
    },
    "id": "dog",
    "type": "ContentType",
    "createdAt": "2019-06-04T08:23:34.832Z",
    "updatedAt": "2019-06-04T08:23:35.199Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 1,
    "publishedAt": "2019-06-04T08:23:35.199Z",
    "firstPublishedAt": "2019-06-04T08:23:35.199Z",
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
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "29B6zorz8plUCN1auThiVH"
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
  'Tue, 04 Jun 2019 08:23:35 GMT',
  'ETag',
  'W/"eb6a02d89bf7caa69b58d73d43b15fce"',
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
  'd2b8f012e16674f4526ffe62275d646c',
  'Content-Length',
  '443',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=59SFgeuJRXW/Su6T/jUGSIYq9lwAAAAAQUIPAAAAAAAq9Bytmyid8mEc8UzLY8xe; expires=Wed, 03 Jun 2020 07:03:18 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=vWBILZT8XzCFG4B/YMlkBAAAAAD8EezU5fCTL+9WBLLg8Hfq; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=6DxTAWwU32WRyOBdIUbyDoYq9lwAAAAAb7FdVoXYB0zaXmrASzaYSw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '1-3550625-3550626 NNNN CT(0 0 0) RT(1559636614712 16) q(0 0 0 -1) r(1 1) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/4z7mp4ioxvmh/environments/env-integration/content_types')
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
            "id": "4z7mp4ioxvmh"
          }
        },
        "id": "dog",
        "type": "ContentType",
        "createdAt": "2019-06-04T08:23:34.832Z",
        "updatedAt": "2019-06-04T08:23:35.199Z",
        "environment": {
          "sys": {
            "id": "env-integration",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 1,
        "publishedAt": "2019-06-04T08:23:35.199Z",
        "firstPublishedAt": "2019-06-04T08:23:35.199Z",
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
        "publishedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "29B6zorz8plUCN1auThiVH"
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
  'Tue, 04 Jun 2019 08:23:41 GMT',
  'ETag',
  'W/"514dfcb20c9068c7b91b8c3d1c9b6986"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'd3722977bc28cda5527ad1b34170928f',
  'Content-Length',
  '513',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=YTV5/cKkQ/WJi6ztiRmB84wq9lwAAAAAQUIPAAAAAACA+fPH9pPCSaTXupyRQZUi; expires=Wed, 03 Jun 2020 07:03:17 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=BdtWc+tkFmKE52LhYMlkBAAAAAB8jMhzvRNScSqtUAUBvUBQ; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=8ijvYpnJxR3lyOBdIUbyDowq9lwAAAAAW/9HD6q3OhGwgwocHdUhjg==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '4-7398485-7398486 NNNN CT(97 98 0) RT(1559636619942 19) q(0 0 2 -1) r(4 4) U5',
  'X-CDN',
  'Incapsula' ]);


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
        "createdAt":"2019-06-04T08:23:32Z",
        "updatedBy":{
          "sys":{
            "type":"Link",
            "linkType":"User",
            "id":"29B6zorz8plUCN1auThiVH"
          }
        },
        "updatedAt":"2019-06-04T08:23:32Z"
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
  'Tue, 04 Jun 2019 08:23:41 GMT',
  'ETag',
  'W/"43ade1f02d7df04f7668b3794fa9501d"',
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
  '6036dce70654cc4d4a9dd5853277792c',
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
  'visid_incap_673446=RsW6RdVzSJ25jQ0m7YYMHowq9lwAAAAAQUIPAAAAAAAQNyb8pDGUg7hdLSFf2ldK; expires=Wed, 03 Jun 2020 07:03:17 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=RBzIN/5lO0997m8bYMlkBAAAAAA6m0LWYC49Be7mirizgIHB; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=2N5NVSC8FHDuyOBdIUbyDowq9lwAAAAAJ6q6mZoImtKptYdL01AjqQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '4-7398493-7398494 NNNN CT(100 101 0) RT(1559636620457 27) q(0 0 2 -1) r(4 4) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/4z7mp4ioxvmh/environments/env-integration/content_types/dog', {"name":"angry dog","displayField":null,"fields":[{"id":"woofs","name":"woof woof","type":"Number","localized":false,"required":true,"validations":[],"disabled":false,"omitted":true}],"description":"super angry"})
  .reply(200, {
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "4z7mp4ioxvmh"
      }
    },
    "id": "dog",
    "type": "ContentType",
    "createdAt": "2019-06-04T08:23:34.832Z",
    "updatedAt": "2019-06-04T08:23:41.823Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 1,
    "publishedAt": "2019-06-04T08:23:35.199Z",
    "firstPublishedAt": "2019-06-04T08:23:35.199Z",
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
    "version": 3,
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "29B6zorz8plUCN1auThiVH"
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
  'Tue, 04 Jun 2019 08:23:41 GMT',
  'ETag',
  'W/"100bd4765d0d6e3da6481c625beff2e2"',
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
  '0eba2e13b022765f9cffb95b25812ec3',
  'Content-Length',
  '447',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=AAri3SU9QL6F7KAU2nnalI0q9lwAAAAAQUIPAAAAAABSEja2UPfbv+Pfl8bRtlYg; expires=Wed, 03 Jun 2020 07:04:20 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=0rOMHSAEhm7S1yyaYMlkBAAAAAAkk0XvZMxiUY+m3aKb7uhf; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=sr4fE4c+7hzxyOBdIUbyDo0q9lwAAAAAMb8vhFp2i9tcKWJc619TDQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '9-1206564-1206565 NNNN CT(0 0 0) RT(1559636620891 15) q(0 0 0 -1) r(2 2) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/4z7mp4ioxvmh/environments/env-integration/content_types/dog/published')
  .reply(200, {
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "4z7mp4ioxvmh"
      }
    },
    "id": "dog",
    "type": "ContentType",
    "createdAt": "2019-06-04T08:23:34.832Z",
    "updatedAt": "2019-06-04T08:23:42.041Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 3,
    "publishedAt": "2019-06-04T08:23:42.041Z",
    "firstPublishedAt": "2019-06-04T08:23:35.199Z",
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
    "publishedCounter": 2,
    "version": 4,
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "29B6zorz8plUCN1auThiVH"
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
  'Tue, 04 Jun 2019 08:23:42 GMT',
  'ETag',
  'W/"cdc81b366a9af832ad5b072bc071b63e"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '1b737b81ca9adf8ab9f43af9d8d70b63',
  'Content-Length',
  '453',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=RxS00eLhTz2M/hR5/fJbfo0q9lwAAAAAQUIPAAAAAADqFAECpBSiJbLQpgx/QPL8; expires=Wed, 03 Jun 2020 07:03:17 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=niTZTbuaak8yivRWYMlkBAAAAAAhLG4+LYNDPIGFZcVb1ETa; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=T7tSLHEJ60D2yOBdIUbyDo0q9lwAAAAAAo5/88UnIOfv6nl0fPoK6Q==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '6-4967473-4967475 NNNN CT(0 0 0) RT(1559636621157 18) q(0 0 0 -1) r(4 4) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/4z7mp4ioxvmh/environments/env-integration/content_types/dog', {"name":"angry dog","displayField":null,"fields":[{"id":"woofs","name":"woof woof","type":"Number","localized":false,"required":true,"validations":[],"disabled":false,"omitted":true,"deleted":true}],"description":"super angry"})
  .reply(200, {
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "4z7mp4ioxvmh"
      }
    },
    "id": "dog",
    "type": "ContentType",
    "createdAt": "2019-06-04T08:23:34.832Z",
    "updatedAt": "2019-06-04T08:23:42.475Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 3,
    "publishedAt": "2019-06-04T08:23:42.041Z",
    "firstPublishedAt": "2019-06-04T08:23:35.199Z",
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
    "publishedCounter": 2,
    "version": 5,
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "29B6zorz8plUCN1auThiVH"
      }
    }
  },
  "displayField": null,
  "name": "angry dog",
  "description": "super angry",
  "fields": []
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
  'Tue, 04 Jun 2019 08:23:42 GMT',
  'ETag',
  'W/"78d897cafe7b9a91f0b61c56181b02c0"',
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
  '5d4dd83ae23202a4a895b92c16e423a1',
  'Content-Length',
  '374',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=OdAzz/NDSb+o7JCVVGLVjI0q9lwAAAAAQUIPAAAAAABuvwIscHjivma/kB8ImLhT; expires=Wed, 03 Jun 2020 07:03:48 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=UT91XUuQTjZoNsFlYMlkBAAAAAC0WsmNPDYmtWg45tlIQ9Ex; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=vnGoIvYgXlr6yOBdIUbyDo0q9lwAAAAAm2EVJrhypZ1S6+MSyz5kgg==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '7-7071603-7071604 NNNN CT(0 0 0) RT(1559636621556 18) q(0 0 0 -1) r(2 2) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/4z7mp4ioxvmh/environments/env-integration/content_types/dog/published')
  .reply(200, {
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "4z7mp4ioxvmh"
      }
    },
    "id": "dog",
    "type": "ContentType",
    "createdAt": "2019-06-04T08:23:34.832Z",
    "updatedAt": "2019-06-04T08:23:42.906Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 5,
    "publishedAt": "2019-06-04T08:23:42.906Z",
    "firstPublishedAt": "2019-06-04T08:23:35.199Z",
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
    "publishedCounter": 3,
    "version": 6,
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "29B6zorz8plUCN1auThiVH"
      }
    }
  },
  "displayField": null,
  "name": "angry dog",
  "description": "super angry",
  "fields": []
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
  'Tue, 04 Jun 2019 08:23:43 GMT',
  'ETag',
  'W/"dd8b4ea80ecd062896356e7f9c6272bb"',
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
  '51e4042b5331b20cacb3ae79666143f7',
  'Content-Length',
  '370',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=X/4m/7YoRGmIpI3ihEg1xI4q9lwAAAAAQUIPAAAAAAB0Yh7gQfcV9LhpuKm2nni0; expires=Wed, 03 Jun 2020 07:03:17 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=jr59KHGNjwgQAaJoYMlkBAAAAADl/Wdl2APOVIszdhq4sDVR; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=IBbFcIb582cJyeBdIUbyDo4q9lwAAAAA2rCIEaocKSuq59GoMHnisw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '5-8672822-8672823 NNNN CT(99 100 0) RT(1559636621822 18) q(0 0 2 -1) r(6 6) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/4z7mp4ioxvmh/environments/env-integration/content_types/dog')
  .reply(200, {
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "4z7mp4ioxvmh"
      }
    },
    "id": "dog",
    "type": "ContentType",
    "createdAt": "2019-06-04T08:23:34.832Z",
    "updatedAt": "2019-06-04T08:23:42.906Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 5,
    "publishedAt": "2019-06-04T08:23:42.906Z",
    "firstPublishedAt": "2019-06-04T08:23:35.199Z",
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
    "publishedCounter": 3,
    "version": 6,
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "29B6zorz8plUCN1auThiVH"
      }
    }
  },
  "displayField": null,
  "name": "angry dog",
  "description": "super angry",
  "fields": []
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
  'Tue, 04 Jun 2019 08:23:43 GMT',
  'ETag',
  'W/"dd8b4ea80ecd062896356e7f9c6272bb"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'c0f2c98db16a3455737be4d80d5c82c2',
  'Content-Length',
  '370',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=IPG+wbfGSOu3jwKXhdQ/1o4q9lwAAAAAQUIPAAAAAAAtKRK1IE9pxNWGioJmS2qe; expires=Wed, 03 Jun 2020 07:04:38 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=w8HOMb8V3hENOXhHYMlkBAAAAABhndO71+YCeVhV6jdEMBW+; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=8ak/ZSzpDVgNyeBdIUbyDo4q9lwAAAAAiCPc+aNbEWBkJFkYcuGTqw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '8-1004502-1004503 NNNN CT(0 0 0) RT(1559636622445 19) q(0 0 0 -1) r(2 2) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/4z7mp4ioxvmh/environments/env-integration/content_types')
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
            "id": "4z7mp4ioxvmh"
          }
        },
        "id": "dog",
        "type": "ContentType",
        "createdAt": "2019-06-04T08:23:34.832Z",
        "updatedAt": "2019-06-04T08:23:42.906Z",
        "environment": {
          "sys": {
            "id": "env-integration",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 5,
        "publishedAt": "2019-06-04T08:23:42.906Z",
        "firstPublishedAt": "2019-06-04T08:23:35.199Z",
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
        "publishedCounter": 3,
        "version": 6,
        "publishedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "29B6zorz8plUCN1auThiVH"
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
  'Tue, 04 Jun 2019 08:23:43 GMT',
  'ETag',
  'W/"95defaef190096e568fdafc9fd6bf259"',
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
  '59da993ad03bc18166cac1477a99cc90',
  'Content-Length',
  '435',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=KMR9OhaETl+CKf2oGst/6o4q9lwAAAAAQUIPAAAAAABbm1nZwC+ZipJsNR9wYTgB; expires=Wed, 03 Jun 2020 07:03:48 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=jlBpburzz1eeOgqcYMlkBAAAAACagtnKfe481TmXzAvWZUnk; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=N8tQEgYLvFsSyeBdIUbyDo4q9lwAAAAAw/8SS4q1coKE+L12e704OQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '7-7071615-7071619 NNNN CT(0 0 0) RT(1559636622676 18) q(0 0 0 -1) r(2 2) U5',
  'X-CDN',
  'Incapsula' ]);


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
        "createdAt":"2019-06-04T08:23:32Z",
        "updatedBy":{
          "sys":{
            "type":"Link",
            "linkType":"User",
            "id":"29B6zorz8plUCN1auThiVH"
          }
        },
        "updatedAt":"2019-06-04T08:23:32Z"
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
  'Tue, 04 Jun 2019 08:23:43 GMT',
  'ETag',
  'W/"43ade1f02d7df04f7668b3794fa9501d"',
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
  '525b7fe8b50676ffd63d3f6f61f109cc',
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
  'visid_incap_673446=OQFYfioPTBGE7Bs6xJfPMI8q9lwAAAAAQUIPAAAAAABee5k8GlEaKlSM3XCndzRo; expires=Wed, 03 Jun 2020 07:03:21 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=uMDTaMfM8W8RaDX9YMlkBAAAAADKTqKEoPeQKhdzBb4I9M8Q; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=k1GdSzXLpQAYyeBdIUbyDo8q9lwAAAAA/KHjL5wGqW/AfoX2vASYUA==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '14-7340455-7340458 NNNN CT(0 0 0) RT(1559636622893 18) q(0 0 0 -1) r(1 1) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/4z7mp4ioxvmh/environments/env-integration/content_types/dog', {"name":"Friendly dog","displayField":null,"fields":[{"id":"goodboys","type":"Number","name":"number of times he has been called a good boy","required":false}],"description":"Who's a good boy? He is!"})
  .reply(200, {
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "4z7mp4ioxvmh"
      }
    },
    "id": "dog",
    "type": "ContentType",
    "createdAt": "2019-06-04T08:23:34.832Z",
    "updatedAt": "2019-06-04T08:23:44.245Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 5,
    "publishedAt": "2019-06-04T08:23:42.906Z",
    "firstPublishedAt": "2019-06-04T08:23:35.199Z",
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
    "publishedCounter": 3,
    "version": 7,
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "29B6zorz8plUCN1auThiVH"
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
  'Tue, 04 Jun 2019 08:23:44 GMT',
  'ETag',
  'W/"289482b9671e5c967435bd3561925a94"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'dd2335401d035a9349ac0654900739e2',
  'Content-Length',
  '496',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=ABEfT9RnS1ODKbvMX6O4/Y8q9lwAAAAAQUIPAAAAAACDgc5sVJXrRbEsOF+SWs13; expires=Wed, 03 Jun 2020 07:03:26 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=811GB6naPmE8DK0KYMlkBAAAAABlk41Lco86HvWX7SOSOnWC; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=8N/QOa5ArEIoyeBdIUbyDo8q9lwAAAAAlyKCgMXARdjT7VPAhClmxw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '0-2885043-2885044 NNNN CT(104 105 0) RT(1559636623077 19) q(0 0 3 -1) r(5 5) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/4z7mp4ioxvmh/environments/env-integration/content_types/dog/published')
  .reply(200, {
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "4z7mp4ioxvmh"
      }
    },
    "id": "dog",
    "type": "ContentType",
    "createdAt": "2019-06-04T08:23:34.832Z",
    "updatedAt": "2019-06-04T08:23:44.512Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 7,
    "publishedAt": "2019-06-04T08:23:44.512Z",
    "firstPublishedAt": "2019-06-04T08:23:35.199Z",
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
    "publishedCounter": 4,
    "version": 8,
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "29B6zorz8plUCN1auThiVH"
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
  'Tue, 04 Jun 2019 08:23:44 GMT',
  'ETag',
  'W/"a6fd9bb30715ff229dab773900612824"',
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
  'e87ebb2a1b760af2aceea1ef360bef04',
  'Content-Length',
  '491',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=VeDs3ff0QjaTxOLRF9ioN48q9lwAAAAAQUIPAAAAAACt2J0sVda2O3VUBVV+6SIT; expires=Wed, 03 Jun 2020 07:03:17 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=7rO/VUVgsVbP3DBMYMlkBAAAAABF33RMCcRYfVWyK/tuarQC; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=q7wZEvSfqRgsyeBdIUbyDo8q9lwAAAAAr9IF7PussevtuxHB3dVTyw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '5-8672850-8672851 NNNN CT(0 0 0) RT(1559636623604 26) q(0 0 0 -1) r(3 3) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/4z7mp4ioxvmh/environments/env-integration/content_types/dog')
  .reply(200, {
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "4z7mp4ioxvmh"
      }
    },
    "id": "dog",
    "type": "ContentType",
    "createdAt": "2019-06-04T08:23:34.832Z",
    "updatedAt": "2019-06-04T08:23:44.512Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 7,
    "publishedAt": "2019-06-04T08:23:44.512Z",
    "firstPublishedAt": "2019-06-04T08:23:35.199Z",
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
    "publishedCounter": 4,
    "version": 8,
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "29B6zorz8plUCN1auThiVH"
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
  'Tue, 04 Jun 2019 08:23:44 GMT',
  'ETag',
  'W/"a6fd9bb30715ff229dab773900612824"',
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
  '2bd42704b36ff005a50fbfcada63427c',
  'Content-Length',
  '491',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=yTzNB+hFRnG9ntDWlxHA9ZAq9lwAAAAAQUIPAAAAAAALBQxJVm37yv75s7tVjtCo; expires=Wed, 03 Jun 2020 07:03:17 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=RjK2AwNJa3dWWhV1YMlkBAAAAADGyX0ZdoM7JVtPrFBU9yX/; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=yBchRIAYGzszyeBdIUbyDpAq9lwAAAAAjf1napikii/5DjhEfudUuQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '5-8672854-8672855 NNNN CT(0 0 0) RT(1559636624052 24) q(0 0 0 -1) r(2 2) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/4z7mp4ioxvmh/environments/env-integration/content_types')
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
            "id": "4z7mp4ioxvmh"
          }
        },
        "id": "dog",
        "type": "ContentType",
        "createdAt": "2019-06-04T08:23:34.832Z",
        "updatedAt": "2019-06-04T08:23:44.512Z",
        "environment": {
          "sys": {
            "id": "env-integration",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 7,
        "publishedAt": "2019-06-04T08:23:44.512Z",
        "firstPublishedAt": "2019-06-04T08:23:35.199Z",
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
        "publishedCounter": 4,
        "version": 8,
        "publishedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "29B6zorz8plUCN1auThiVH"
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
  'Tue, 04 Jun 2019 08:23:45 GMT',
  'ETag',
  'W/"67af6359087602de01e9dd7989580949"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '7713cde0bc5a76c3d55adaaef9b8344b',
  'Content-Length',
  '554',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=4c8IOC4uQ2q2i5DoPhTy8JAq9lwAAAAAQUIPAAAAAACsFsG2MKBeFIEll+WtpQ49; expires=Wed, 03 Jun 2020 07:03:17 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=J8BcMH/8iTLaXK+UYMlkBAAAAABTCC06oLELiWMSBFlpcljc; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=Rho3VpRClVU/yeBdIUbyDpAq9lwAAAAAFLvrz9rOj/hPXl77oqRQbw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '6-4967523-4967524 NNNN CT(107 106 0) RT(1559636624300 27) q(0 0 2 -1) r(3 3) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/4z7mp4ioxvmh/environments/env-integration/content_types/dog/editor_interface')
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
    "version": 4,
    "createdAt": "2019-06-04T08:23:35.296Z",
    "createdBy": {
      "sys": {
        "id": "29B6zorz8plUCN1auThiVH",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2019-06-04T08:23:44.651Z",
    "updatedBy": {
      "sys": {
        "id": "29B6zorz8plUCN1auThiVH",
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
  'Tue, 04 Jun 2019 08:23:45 GMT',
  'ETag',
  '"a2ac771c9983339fcb1d038bdeab93c1"',
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
  '9765bbdbcf2538379607825744a7c063',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=Y2PBmmNySd2fG6HWXthJrZEq9lwAAAAAQUIPAAAAAAB1b32J7E7KpdRsqnnladPK; expires=Wed, 03 Jun 2020 07:03:19 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=pIBycWO7/gzfira6YMlkBAAAAADRfzZ8FbV9CZQ9iI269/hC; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=KqesUzjC6AdGyeBdIUbyDpEq9lwAAAAAz0LUp+wL22DwEpJ1L9PpWQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '2-4337136-4337139 NNNN CT(104 103 0) RT(1559636624754 24) q(0 0 2 -1) r(4 4) U5',
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
        "createdAt":"2019-06-04T08:23:32Z",
        "updatedBy":{
          "sys":{
            "type":"Link",
            "linkType":"User",
            "id":"29B6zorz8plUCN1auThiVH"
          }
        },
        "updatedAt":"2019-06-04T08:23:32Z"
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
  'Tue, 04 Jun 2019 08:23:46 GMT',
  'ETag',
  'W/"43ade1f02d7df04f7668b3794fa9501d"',
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
  'ea4ce1c0a74687dc4f2ae7d469ee731e',
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
  'visid_incap_673446=nZb7aktwTiWRMI+9ThcfE5Eq9lwAAAAAQUIPAAAAAADXlt/xUB0XLN6syi6BlH6D; expires=Wed, 03 Jun 2020 07:04:06 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=DkeDFsQW/AeONg4KYMlkBAAAAADjvkNsozbzVMxgRdpSDLS5; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=saygaX8lP0VJyeBdIUbyDpEq9lwAAAAAjFaCGe4HBG/O5wq0s6WC4g==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '11-1828068-1828069 NNNN CT(0 0 0) RT(1559636625188 19) q(0 0 0 -1) r(1 1) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/4z7mp4ioxvmh/environments/env-integration/content_types/dog', {"name":"Friendly dog","displayField":null,"fields":[{"id":"goodboys","name":"number of times he has been called a good boy","type":"Number","localized":false,"required":false,"validations":[],"disabled":false,"omitted":false,"newId":"aDifferentId"}],"description":"Who's a good boy? He is!"})
  .reply(200, {
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "4z7mp4ioxvmh"
      }
    },
    "id": "dog",
    "type": "ContentType",
    "createdAt": "2019-06-04T08:23:34.832Z",
    "updatedAt": "2019-06-04T08:23:46.288Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 7,
    "publishedAt": "2019-06-04T08:23:44.512Z",
    "firstPublishedAt": "2019-06-04T08:23:35.199Z",
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
    "publishedCounter": 4,
    "version": 9,
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "29B6zorz8plUCN1auThiVH"
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
  'Tue, 04 Jun 2019 08:23:46 GMT',
  'ETag',
  'W/"a77b42e92d0a797ddb35928adf199ce3"',
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
  '573daeca69ed5090d7701d41fab4c5b5',
  'Content-Length',
  '501',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=Bm33QaGiRv6Jw85/jJJ6gJEq9lwAAAAAQUIPAAAAAAAkSnhX0WDQfliHwI5v+pNz; expires=Wed, 03 Jun 2020 07:03:17 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=sbYlFnDxkjBbtGbbYMlkBAAAAAD2m6rr5CUc7yFFN8UY8exx; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=VIlAP1QPTFRPyeBdIUbyDpEq9lwAAAAAuqsayr4MiYUH9v9JtFu1JQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '5-8672874-8672877 NNNN CT(0 0 0) RT(1559636625376 22) q(0 0 0 -1) r(2 2) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/4z7mp4ioxvmh/environments/env-integration/content_types/dog/published')
  .reply(200, {
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "4z7mp4ioxvmh"
      }
    },
    "id": "dog",
    "type": "ContentType",
    "createdAt": "2019-06-04T08:23:34.832Z",
    "updatedAt": "2019-06-04T08:23:46.539Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 9,
    "publishedAt": "2019-06-04T08:23:46.539Z",
    "firstPublishedAt": "2019-06-04T08:23:35.199Z",
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
    "publishedCounter": 5,
    "version": 10,
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "29B6zorz8plUCN1auThiVH"
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
  'Tue, 04 Jun 2019 08:23:46 GMT',
  'ETag',
  'W/"6ba59ccad23da824ed055cb48b21870a"',
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
  'eb62c1c3f1a4bc91c615c4a5adb67238',
  'Content-Length',
  '497',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=VnC4+cDWT6Cxa0zc+iDADJEq9lwAAAAAQUIPAAAAAACAUTStllCa5+OaqxXuOs+x; expires=Wed, 03 Jun 2020 07:03:48 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=fu+qYqFKyiHHHyP+YMlkBAAAAAD/BMRGP/9qEO0qxkCIVxOD; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=KcA6LaADu3NTyeBdIUbyDpEq9lwAAAAAM0x+ZTvsVH8PMQEALe9Ilg==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '7-7071661-7071662 NNNN CT(0 0 0) RT(1559636625634 17) q(0 0 0 -1) r(3 3) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/4z7mp4ioxvmh/environments/env-integration/content_types/dog/editor_interface', {"controls":[{"fieldId":"aDifferentId","widgetId":"numberEditor"}]})
  .reply(200, {"controls":[{"fieldId":"aDifferentId","widgetId":"numberEditor"}],"sys":{"id":"default","type":"EditorInterface","space":{"sys":{"id":"4z7mp4ioxvmh","type":"Link","linkType":"Space"}},"version":6,"createdAt":"2019-06-04T08:23:35.296Z","createdBy":{"sys":{"id":"29B6zorz8plUCN1auThiVH","type":"Link","linkType":"User"}},"updatedAt":"2019-06-04T08:23:46.918Z","updatedBy":{"sys":{"type":"Link","linkType":"User","id":"29B6zorz8plUCN1auThiVH"}},"contentType":{"sys":{"id":"dog","type":"Link","linkType":"ContentType"}},"environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}}}}, [ 'Access-Control-Allow-Headers',
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
  'Tue, 04 Jun 2019 08:23:47 GMT',
  'ETag',
  '"cf89a4e556f03cae48d362fbbdc8ccc5"',
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
  'd6f38d77d6c7b93240eafb6290d1c7d1',
  'Content-Length',
  '956',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=PQCPzPOGTM2RqiSMwIMc2ZIq9lwAAAAAQUIPAAAAAABUmj54OtVW+jrWaIyCr/IN; expires=Wed, 03 Jun 2020 07:04:20 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=6gAkZsqkhAYJM1HGYMlkBAAAAADMC2uArM4wy/NpBcNVFOJE; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=RuNNAz9mtCtbyeBdIUbyDpIq9lwAAAAAkAIDi9ozWFRCnvvkv6TmqA==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '9-1206605-1206607 NNNN CT(0 0 0) RT(1559636626029 16) q(0 0 0 -1) r(3 3) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/4z7mp4ioxvmh/environments/env-integration/content_types/dog', {"name":"Friendly dog","displayField":null,"fields":[{"id":"aDifferentId","name":"ID switching is fun!","type":"Number","localized":false,"required":false,"validations":[],"disabled":false,"omitted":false}],"description":"Who's a good boy? He is!"})
  .reply(200, {
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "4z7mp4ioxvmh"
      }
    },
    "id": "dog",
    "type": "ContentType",
    "createdAt": "2019-06-04T08:23:34.832Z",
    "updatedAt": "2019-06-04T08:23:47.298Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 9,
    "publishedAt": "2019-06-04T08:23:46.539Z",
    "firstPublishedAt": "2019-06-04T08:23:35.199Z",
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
    "publishedCounter": 5,
    "version": 11,
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "29B6zorz8plUCN1auThiVH"
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
  'Tue, 04 Jun 2019 08:23:47 GMT',
  'ETag',
  'W/"7cec9c5d3429f8a4046677e1a15ff42d"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '20f18a9f6030a845823872432a90c5d2',
  'Content-Length',
  '495',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=yl2teXoAQyq+jRfMw/XoHZIq9lwAAAAAQUIPAAAAAACXY9DKaY6Exl9e3LODPWNN; expires=Wed, 03 Jun 2020 07:03:17 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=ovaSN3X7mBlCFlAZYMlkBAAAAABfqzYB35/bugJqsDTrbti6; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=TEQHNyfblmhdyeBdIUbyDpIq9lwAAAAASzMHH49LOmdvgh9AhkHIYQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '4-7398565-7398566 NNNN CT(0 0 0) RT(1559636626379 16) q(0 0 0 -1) r(2 2) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/4z7mp4ioxvmh/environments/env-integration/content_types/dog/published')
  .reply(200, {
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "4z7mp4ioxvmh"
      }
    },
    "id": "dog",
    "type": "ContentType",
    "createdAt": "2019-06-04T08:23:34.832Z",
    "updatedAt": "2019-06-04T08:23:47.531Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 11,
    "publishedAt": "2019-06-04T08:23:47.531Z",
    "firstPublishedAt": "2019-06-04T08:23:35.199Z",
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
    "publishedCounter": 6,
    "version": 12,
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "29B6zorz8plUCN1auThiVH"
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
  'Tue, 04 Jun 2019 08:23:47 GMT',
  'ETag',
  'W/"fcd105afaa520f3c9bb161f803bffb2a"',
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
  'cf561a8ed8bd6feaaf4b002201e63858',
  'Content-Length',
  '491',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=V48+ktjLSHq11Cu/bP4jxpIq9lwAAAAAQUIPAAAAAADkea35B2Waibyrs2lGc2Sk; expires=Wed, 03 Jun 2020 07:03:17 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=389WXh0bt0IqB8DFYMlkBAAAAADj6k0L7cRFjjxQKVTlIb9d; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=+7v9WjQiaGFjyeBdIUbyDpIq9lwAAAAAhWEkPZqK4Mmp+5+M5LHOUQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '4-7398567-7398568 NNNN CT(0 0 0) RT(1559636626644 20) q(0 0 0 -1) r(3 3) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/4z7mp4ioxvmh/environments/env-integration/content_types/dog')
  .reply(200, {
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "4z7mp4ioxvmh"
      }
    },
    "id": "dog",
    "type": "ContentType",
    "createdAt": "2019-06-04T08:23:34.832Z",
    "updatedAt": "2019-06-04T08:23:47.531Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 11,
    "publishedAt": "2019-06-04T08:23:47.531Z",
    "firstPublishedAt": "2019-06-04T08:23:35.199Z",
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
    "publishedCounter": 6,
    "version": 12,
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "29B6zorz8plUCN1auThiVH"
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
  'Tue, 04 Jun 2019 08:23:47 GMT',
  'ETag',
  'W/"fcd105afaa520f3c9bb161f803bffb2a"',
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
  '8ad3cb231ff210bc1e446abd11b512e2',
  'Content-Length',
  '491',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=tlDU232YR3mx4nNJYzmyh5Mq9lwAAAAAQUIPAAAAAAB5GUsQlH0Ig0qkOcP3gESk; expires=Wed, 03 Jun 2020 07:03:48 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=lQfyP9htvCychA1BYMlkBAAAAADxV62wxKYh16/6e8nWJwML; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=X+ecGywkhj5myeBdIUbyDpMq9lwAAAAAB17mW/rjtHXav4eJs9VBDQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '7-7071671-7071673 NNNN CT(0 0 0) RT(1559636627057 21) q(0 0 0 -1) r(2 2) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/4z7mp4ioxvmh/environments/env-integration/content_types')
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
            "id": "4z7mp4ioxvmh"
          }
        },
        "id": "dog",
        "type": "ContentType",
        "createdAt": "2019-06-04T08:23:34.832Z",
        "updatedAt": "2019-06-04T08:23:47.531Z",
        "environment": {
          "sys": {
            "id": "env-integration",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 11,
        "publishedAt": "2019-06-04T08:23:47.531Z",
        "firstPublishedAt": "2019-06-04T08:23:35.199Z",
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
        "publishedCounter": 6,
        "version": 12,
        "publishedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "29B6zorz8plUCN1auThiVH"
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
  'Tue, 04 Jun 2019 08:23:48 GMT',
  'ETag',
  'W/"31fae6b52d223b7f4e49fd231d177c19"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '652e377d1667f0f72f1a3d76ab278e6a',
  'Content-Length',
  '556',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=Ua3t7dS9SNSRc6l28f8BhJMq9lwAAAAAQUIPAAAAAAA2LivowMjDe9ncKwGR7w5E; expires=Wed, 03 Jun 2020 07:03:18 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=7gSjHK5isjAmlVroYMlkBAAAAADkXAi8KGjU7wfQD/qhBnQK; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=ASIgZZ/UHmJpyeBdIUbyDpMq9lwAAAAAxPtU1KyzupbcEG1RJdnyOg==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '1-3550706-3550707 NNNN CT(0 0 0) RT(1559636627295 20) q(0 0 0 -1) r(1 1) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/4z7mp4ioxvmh/environments/env-integration/entries')
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
  'Tue, 04 Jun 2019 08:23:48 GMT',
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
  'a956c7be929d6f008f6849b4dd7995ee',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=ET40z5Z0Qlia0XwRajaOi5Mq9lwAAAAAQUIPAAAAAADwyf/Vjg01/IyFDsSouCcG; expires=Wed, 03 Jun 2020 07:03:17 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=K7ohDduiJHg8AHsXYMlkBAAAAABvAyLcrXUoRsMAusACJUCo; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=aRS6RLDDVlltyeBdIUbyDpMq9lwAAAAAFK9f8ajw0J2vHdUZzTCrqQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '4-7398575-7398577 NNNN CT(0 0 0) RT(1559636627521 17) q(0 0 0 -1) r(1 1) U5',
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
        "createdAt":"2019-06-04T08:23:32Z",
        "updatedBy":{
          "sys":{
            "type":"Link",
            "linkType":"User",
            "id":"29B6zorz8plUCN1auThiVH"
          }
        },
        "updatedAt":"2019-06-04T08:23:32Z"
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
  'Tue, 04 Jun 2019 08:23:48 GMT',
  'ETag',
  'W/"43ade1f02d7df04f7668b3794fa9501d"',
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
  '0ea01ce0cb06fee809a76f5909613730',
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
  'visid_incap_673446=zqFHVj0eQrCCoxaeaQuqAZMq9lwAAAAAQUIPAAAAAABVItUTdyy9+GUiSB4hGWUE; expires=Wed, 03 Jun 2020 07:04:00 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=aU33ZpzE/QOoGtJwYMlkBAAAAADlqUugQ6liIzB7ti+rluK+; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=R4BOLeRqXz1xyeBdIUbyDpMq9lwAAAAAWzTXVcW9b/M2oeKh+EwSTg==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '10-1536958-1536959 NNNN CT(0 0 0) RT(1559636627731 19) q(0 0 0 -1) r(1 1) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .delete('/spaces/4z7mp4ioxvmh/environments/env-integration/content_types/dog/published')
  .reply(200, {
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "4z7mp4ioxvmh"
      }
    },
    "id": "dog",
    "type": "ContentType",
    "createdAt": "2019-06-04T08:23:34.832Z",
    "updatedAt": "2019-06-04T08:23:48.821Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "firstPublishedAt": "2019-06-04T08:23:35.199Z",
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
  'Tue, 04 Jun 2019 08:23:49 GMT',
  'ETag',
  'W/"5a3ead0c433bd95ce44b1797fb0a1a10"',
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
  '6f92dd157455173177b1d7a51dcd3839',
  'Content-Length',
  '465',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=TEnf8ctoSc+SzeocP4NizZQq9lwAAAAAQUIPAAAAAAC33dnwr2D3cPp9aMlCkwS+; expires=Wed, 03 Jun 2020 07:03:48 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=HihvFlUFXjPLrd9uYMlkBAAAAADjKCBO0aTAw53H3I9sH3kq; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=RZITN6N3lip7yeBdIUbyDpQq9lwAAAAAZyIGRgOuOl+9BQu4XhN8fA==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '7-7071694-7071695 NNNN CT(0 0 0) RT(1559636627917 16) q(0 0 0 -1) r(3 3) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .delete('/spaces/4z7mp4ioxvmh/environments/env-integration/content_types/dog')
  .reply(204, "", [ 'Access-Control-Allow-Headers',
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
  'Tue, 04 Jun 2019 08:23:49 GMT',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'b207ddad07ef675cf13fdca8a662b057',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=DmhLibNCSb6DTyAkS3kSxZQq9lwAAAAAQUIPAAAAAAC6UZB9py0XggGbeMVnawBk; expires=Wed, 03 Jun 2020 07:03:17 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=wEBFY8eMWhL+2441YMlkBAAAAACCNwaM3TEIewpUZdqrfDP3; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=9YcVLGl5rFaNyeBdIUbyDpQq9lwAAAAAj+gUr4a2sJuwZ2BWkFRuUQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '5-8672944-8672946 NNNN CT(0 0 0) RT(1559636628327 21) q(0 0 0 -1) r(4 4) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/4z7mp4ioxvmh/environments/env-integration/content_types/dog')
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
    "space": "4z7mp4ioxvmh"
  },
  "requestId": "5f9c2603d9bc85abb8e654686ceff604"
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
  'Tue, 04 Jun 2019 08:23:49 GMT',
  'ETag',
  '"0f390ea997f4ad9ab1a2443a7f33ac1f"',
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
  '5f9c2603d9bc85abb8e654686ceff604',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=86MQeQZxRw2JraKmVgBZRJQq9lwAAAAAQUIPAAAAAACgeCL/F9B0B6mErZGK5Z1f; expires=Wed, 03 Jun 2020 07:03:17 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=ZaG/Sh17rgRdz85NYMlkBAAAAAB4OWpbvPZbBmplJSMwdrz1; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=+8vzcZYuzHyXyeBdIUbyDpQq9lwAAAAAdQecBuYqOkwzu3Q5ncb19g==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '4-7398586-7398587 NNNN CT(0 0 0) RT(1559636628795 21) q(0 0 0 -1) r(1 1) U5',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/4z7mp4ioxvmh/environments/env-integration/content_types')
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
  'Tue, 04 Jun 2019 08:23:50 GMT',
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
  'cb8492d6425f1b3d12aab8e1635d75ea',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=1UQ4RrzIQyeNR4ECrc2plJUq9lwAAAAAQUIPAAAAAAANtbbJhoRhiAO1Wzzu6QSJ; expires=Wed, 03 Jun 2020 07:03:17 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=nkAOZMlCBTjlPB/XYMlkBAAAAAAU2dT/t3vhS4jZWoag6mhU; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=C2wBWbHN4RmeyeBdIUbyDpUq9lwAAAAALT/lr6Tp3NnqCkuVCOTmtA==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '6-4967573-4967575 NNNN CT(100 99 0) RT(1559636629017 24) q(0 0 2 -1) r(3 3) U5',
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
        "createdAt":"2019-06-04T08:23:32Z",
        "updatedBy":{
          "sys":{
            "type":"Link",
            "linkType":"User",
            "id":"29B6zorz8plUCN1auThiVH"
          }
        },
        "updatedAt":"2019-06-04T08:23:32Z"
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
  'Tue, 04 Jun 2019 08:23:50 GMT',
  'ETag',
  'W/"43ade1f02d7df04f7668b3794fa9501d"',
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
  'e5dedb5ae82d98cf0df29d77acff2ccd',
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
  'visid_incap_673446=TblbSE8wRPO0qluCZokyU5Uq9lwAAAAAQUIPAAAAAADUH1/w3hwc4oMti5tno4wp; expires=Wed, 03 Jun 2020 07:03:19 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=s5uzCpSHkBV6NPmIYMlkBAAAAAAU+Sqn5eT7wKksjhOsbJgF; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=zIAZTjSNlEmiyeBdIUbyDpUq9lwAAAAA36owT6zktQw3UT94rB/uJw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '3-5988128-5988130 NNNN CT(0 0 0) RT(1559636629444 15) q(0 0 0 -1) r(2 2) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/4z7mp4ioxvmh/environments/env-integration/content_types/dieatary-food', {"name":"Dieatary Food","fields":[{"id":"name","type":"Symbol","name":"name of the food","validations":[{"unique":true}]},{"id":"calories","type":"Link","linkType":"Asset","name":"amount of calories the food contains","validations":[{"assetImageDimensions":{"width":{"min":1199,"max":null},"height":{"min":1343}}}]}],"description":"Food with up to 500 calories"})
  .reply(201, {"sys":{"space":{"sys":{"type":"Link","linkType":"Space","id":"4z7mp4ioxvmh"}},"id":"dieatary-food","type":"ContentType","createdAt":"2019-06-04T08:23:50.571Z","updatedAt":"2019-06-04T08:23:50.571Z","environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}},"createdBy":{"sys":{"type":"Link","linkType":"User","id":"29B6zorz8plUCN1auThiVH"}},"updatedBy":{"sys":{"type":"Link","linkType":"User","id":"29B6zorz8plUCN1auThiVH"}},"publishedCounter":0,"version":1},"displayField":null,"name":"Dieatary Food","description":"Food with up to 500 calories","fields":[{"id":"name","name":"name of the food","type":"Symbol","localized":false,"required":false,"validations":[{"unique":true}],"disabled":false,"omitted":false},{"id":"calories","name":"amount of calories the food contains","type":"Link","localized":false,"required":false,"validations":[{"assetImageDimensions":{"width":{"min":1199,"max":null},"height":{"min":1343}}}],"disabled":false,"omitted":false,"linkType":"Asset"}]}, [ 'Access-Control-Allow-Headers',
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
  'Tue, 04 Jun 2019 08:23:50 GMT',
  'ETag',
  '"5c806e8c36850c269fc013cdfb218bce"',
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
  '4d92c572b69d221201a714098d2c5934',
  'Content-Length',
  '1635',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=Vj6sA6f+Q2STtT0K3JUSL5Uq9lwAAAAAQUIPAAAAAABSp58LLvujr3OZt7cDKbTH; expires=Wed, 03 Jun 2020 07:03:17 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=+0tnY+X9WFilkviTYMlkBAAAAAClwIQyv8mZ9K+QKSimq9Dj; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=EM71X1ILnmGpyeBdIUbyDpUq9lwAAAAAmHXMf+KIWW1ppmHDpYrngg==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '4-7398591-7398594 NNNN CT(0 0 0) RT(1559636629656 21) q(0 0 0 -1) r(3 3) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/4z7mp4ioxvmh/environments/env-integration/content_types/dieatary-food/published')
  .reply(200, {
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "4z7mp4ioxvmh"
      }
    },
    "id": "dieatary-food",
    "type": "ContentType",
    "createdAt": "2019-06-04T08:23:50.571Z",
    "updatedAt": "2019-06-04T08:23:50.858Z",
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
    "firstPublishedAt": "2019-06-04T08:23:50.858Z",
    "publishedAt": "2019-06-04T08:23:50.858Z",
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
  'Tue, 04 Jun 2019 08:23:51 GMT',
  'ETag',
  'W/"43061483c79a5ca9020b5865cf524b14"',
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
  '57846ad588a8d32ca46d1082c270e8cb',
  'Content-Length',
  '597',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=sge1ufG2Qkeukc63Gdw7iZYq9lwAAAAAQUIPAAAAAADHR+7qgQdwarJDHBwl6PHL; expires=Wed, 03 Jun 2020 07:04:38 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=IKMCEw1Y+zQa9F7NYMlkBAAAAABzadn68WKj6KzPre3CjeXH; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=5OMaI832/j2wyeBdIUbyDpYq9lwAAAAAyW7CjzPb2/cpTvpY+Ugm+Q==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '8-1004508-1004509 NNNN CT(0 0 0) RT(1559636629959 14) q(0 0 0 -1) r(4 4) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/4z7mp4ioxvmh/environments/env-integration/content_types/dieatary-food')
  .reply(200, {
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "4z7mp4ioxvmh"
      }
    },
    "id": "dieatary-food",
    "type": "ContentType",
    "createdAt": "2019-06-04T08:23:50.571Z",
    "updatedAt": "2019-06-04T08:23:50.858Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 1,
    "publishedAt": "2019-06-04T08:23:50.858Z",
    "firstPublishedAt": "2019-06-04T08:23:50.858Z",
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
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "29B6zorz8plUCN1auThiVH"
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
  'Tue, 04 Jun 2019 08:23:51 GMT',
  'ETag',
  'W/"5b0ea3df73155f7180d80f0a3d5ec028"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'f1f3164e4106792d491dc89b59e63565',
  'Content-Length',
  '597',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=RWT8OcD0TD6f1ursWIAJX5Yq9lwAAAAAQUIPAAAAAABUTa7AhwE3LIoxWOMG/Sau; expires=Wed, 03 Jun 2020 07:03:49 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=kf7rDNZVZE4rAS4yYMlkBAAAAAAM1cDM1bnLsOUw9L3UqGON; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=bB/ZHmoNswO9yeBdIUbyDpYq9lwAAAAAPR2OY3aBabmF8Nuz9jk6jw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '13-3275673-3275674 NNNN CT(106 107 0) RT(1559636630407 16) q(0 0 2 -1) r(3 3) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/4z7mp4ioxvmh/environments/env-integration/content_types')
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
  'Tue, 04 Jun 2019 08:23:51 GMT',
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
  'ccab9501d2913c738959f1f975206ec0',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=wwrvxzBwQyqxNTySY/boWpcq9lwAAAAAQUIPAAAAAAB+NXwIpkUCxohR6D2ObMET; expires=Wed, 03 Jun 2020 07:04:20 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=UD/QWKcGrCDrdei+YMlkBAAAAACcOOCvnHg+itp0QVtiwuq7; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=c7dhQYvJgzXHyeBdIUbyDpcq9lwAAAAArgN3sja0u82wB+9ELElNtg==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '9-1206623-1206624 NNNN CT(0 0 0) RT(1559636630844 15) q(0 0 0 -1) r(2 2) U5',
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
        "createdAt":"2019-06-04T08:23:32Z",
        "updatedBy":{
          "sys":{
            "type":"Link",
            "linkType":"User",
            "id":"29B6zorz8plUCN1auThiVH"
          }
        },
        "updatedAt":"2019-06-04T08:23:32Z"
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
  'Tue, 04 Jun 2019 08:23:52 GMT',
  'ETag',
  'W/"43ade1f02d7df04f7668b3794fa9501d"',
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
  'd3c167c3858f4aa6771d96712e602d96',
  'X-Download-Options',
  'noopen',
  'X-Frame-Options',
  'ALLOWALL',
  'X-Permitted-Cross-Domain-Policies',
  'none',
  'X-XSS-Protection',
  '1; mode=block',
  'Content-Length',
  '423',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=zSiWeRQURdSIIkB+6Tjjmpcq9lwAAAAAQUIPAAAAAAB6s1LgWnFOAXREWH2Uh1RF; expires=Wed, 03 Jun 2020 07:03:48 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=rJd6DneQgka3Pyn9YMlkBAAAAAC70cvqeNyoHQYTtXw5dBcr; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=RYyULz4U6XnMyeBdIUbyDpcq9lwAAAAAdDodSrgoUaC+843qPMfvTw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '7-7071734-7071735 NNNN CT(111 110 0) RT(1559636631046 15) q(0 0 2 -1) r(4 4) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/4z7mp4ioxvmh/environments/env-integration/content_types/food', {"name":"foooood","displayField":"taste","fields":[{"id":"taste","type":"Symbol","name":"what it tastes like"}],"description":" well, food"})
  .reply(201, {"sys":{"space":{"sys":{"type":"Link","linkType":"Space","id":"4z7mp4ioxvmh"}},"id":"food","type":"ContentType","createdAt":"2019-06-04T08:23:52.386Z","updatedAt":"2019-06-04T08:23:52.386Z","environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}},"createdBy":{"sys":{"type":"Link","linkType":"User","id":"29B6zorz8plUCN1auThiVH"}},"updatedBy":{"sys":{"type":"Link","linkType":"User","id":"29B6zorz8plUCN1auThiVH"}},"publishedCounter":0,"version":1},"displayField":"taste","name":"foooood","description":" well, food","fields":[{"id":"taste","name":"what it tastes like","type":"Symbol","localized":false,"required":false,"validations":[],"disabled":false,"omitted":false}]}, [ 'Access-Control-Allow-Headers',
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
  'Tue, 04 Jun 2019 08:23:53 GMT',
  'ETag',
  '"24410faabf49540fbdc37eec55dc5b29"',
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
  'a8a20c6f26f62aba50ee750ce75c1087',
  'Content-Length',
  '1064',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=UG4lMtrZS1abI0XdeGbCtpgq9lwAAAAAQUIPAAAAAABr8Iyo6Rzlr/xRkNHCj4m2; expires=Wed, 03 Jun 2020 07:03:17 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=w//cPvZ3HHmpGf4BYMlkBAAAAABdHr5bk5zPKPxbUmPZFMZV; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=QQ4YJQL6VFbgyeBdIUbyDpgq9lwAAAAAEBtOLV/vuhB7/c3HG8s+Sg==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '5-8673095-8673096 NNNN CT(0 0 0) RT(1559636631453 15) q(0 0 0 -1) r(11 11) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/4z7mp4ioxvmh/environments/env-integration/content_types/food/published')
  .reply(200, {
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "4z7mp4ioxvmh"
      }
    },
    "id": "food",
    "type": "ContentType",
    "createdAt": "2019-06-04T08:23:52.386Z",
    "updatedAt": "2019-06-04T08:23:53.447Z",
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
    "firstPublishedAt": "2019-06-04T08:23:53.447Z",
    "publishedAt": "2019-06-04T08:23:53.447Z",
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "29B6zorz8plUCN1auThiVH"
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
  'Tue, 04 Jun 2019 08:23:53 GMT',
  'ETag',
  'W/"3dd66ced60d7403dee87e843e2c4ac65"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '5f310d71fc0d1c8bd848e012cef9b140',
  'Content-Length',
  '447',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=cn81/aw+TWeXO3kgzdVeqJgq9lwAAAAAQUIPAAAAAAAgfpaBZE/AZkbYl87myBZ1; expires=Wed, 03 Jun 2020 07:03:17 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=3BviQB6O5R38cZksYMlkBAAAAADSCrz+kAH96VFUn7scnFS0; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=THU3AWzVgWPlyeBdIUbyDpgq9lwAAAAAdrlxj+UPiaaYCN6kS+bcxg==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '4-7398636-7398637 NNNN CT(0 0 0) RT(1559636632554 15) q(0 0 0 -1) r(4 4) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/4z7mp4ioxvmh/environments/env-integration/content_types')
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
            "id": "4z7mp4ioxvmh"
          }
        },
        "id": "food",
        "type": "ContentType",
        "createdAt": "2019-06-04T08:23:52.386Z",
        "updatedAt": "2019-06-04T08:23:53.447Z",
        "environment": {
          "sys": {
            "id": "env-integration",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 1,
        "publishedAt": "2019-06-04T08:23:53.447Z",
        "firstPublishedAt": "2019-06-04T08:23:53.447Z",
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
        "publishedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "29B6zorz8plUCN1auThiVH"
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
  'Tue, 04 Jun 2019 08:23:54 GMT',
  'ETag',
  'W/"da62725e980445ca7e552819cbe2be40"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'b3c4eefa8b3f490318a1b7ae794d6921',
  'Content-Length',
  '515',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=30EPweQrTB+FzcfykcmH5pkq9lwAAAAAQUIPAAAAAACsSvxzWs0JCtfQPyaFG1tB; expires=Wed, 03 Jun 2020 07:03:21 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=RwksNYA5CH4cVm80YMlkBAAAAACyxuQK81QniGquQbuNZmER; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=0VrOFRdD4nXuyeBdIUbyDpkq9lwAAAAAXa25BYiUn+4O/Q2EwrzYhA==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '14-7340578-7340579 NNNN CT(104 105 0) RT(1559636632975 19) q(0 0 3 -1) r(4 4) U5',
  'X-CDN',
  'Incapsula' ]);


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
        "createdAt":"2019-06-04T08:23:32Z",
        "updatedBy":{
          "sys":{
            "type":"Link",
            "linkType":"User",
            "id":"29B6zorz8plUCN1auThiVH"
          }
        },
        "updatedAt":"2019-06-04T08:23:32Z"
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
  'Tue, 04 Jun 2019 08:23:54 GMT',
  'ETag',
  'W/"43ade1f02d7df04f7668b3794fa9501d"',
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
  '3dfc99864ef8b5e6df1bfbd2d9be0872',
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
  'visid_incap_673446=5fz3KAszT8Wrw6ypA6b8NZkq9lwAAAAAQUIPAAAAAADHSBUsVYTbb6gm8KBSS4VR; expires=Wed, 03 Jun 2020 07:03:19 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=E/NxcR/tAyxQgdqNYMlkBAAAAADsyASRWwGq+v42n4ESiPi7; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=hbg4T5JrkwD1yeBdIUbyDpkq9lwAAAAA1L9ISmOjdRJoII++X4ftSQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '3-5988239-5988240 NNNN CT(0 0 0) RT(1559636633413 16) q(0 0 0 -1) r(1 1) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/4z7mp4ioxvmh/environments/env-integration/content_types/food', {"name":"foooood","displayField":"taste","fields":[{"id":"calories","type":"Number","name":"How many calories does it have?"},{"id":"taste","name":"what it tastes like","type":"Symbol","localized":false,"required":false,"validations":[],"disabled":false,"omitted":false},{"id":"producer","type":"Symbol","name":"Food producer"},{"id":"vegan","type":"Boolean","name":"Vegan friendly"},{"id":"gmo","type":"Boolean","name":"Genetically modified food"},{"id":"sugar","type":"Number","name":"Amount of sugar"}],"description":" well, food"})
  .reply(200, {
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "4z7mp4ioxvmh"
      }
    },
    "id": "food",
    "type": "ContentType",
    "createdAt": "2019-06-04T08:23:52.386Z",
    "updatedAt": "2019-06-04T08:23:54.557Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 1,
    "publishedAt": "2019-06-04T08:23:53.447Z",
    "firstPublishedAt": "2019-06-04T08:23:53.447Z",
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
    "version": 3,
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "29B6zorz8plUCN1auThiVH"
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
  'Tue, 04 Jun 2019 08:23:54 GMT',
  'ETag',
  'W/"3f161d066ad84879484e0b47a56cfbdd"',
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
  '174d24823a55e559410cbcc43d100f14',
  'Content-Length',
  '590',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=qSDm44T1QBegcnF66DeEgZkq9lwAAAAAQUIPAAAAAAARg53qgFUq4czJdmVK5t09; expires=Wed, 03 Jun 2020 07:03:21 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=nyFZNcJ+tWxxgSl+YMlkBAAAAACHJrxgvRighXHYRs2NvEMv; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=ilrZUa7Kkgz/yeBdIUbyDpkq9lwAAAAAvkZddN7/LuAwMLbhHnGtHw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '14-7340583-7340584 NNNN CT(0 0 0) RT(1559636633629 15) q(0 0 0 -1) r(2 2) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/4z7mp4ioxvmh/environments/env-integration/content_types/food/published')
  .reply(200, {
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "4z7mp4ioxvmh"
      }
    },
    "id": "food",
    "type": "ContentType",
    "createdAt": "2019-06-04T08:23:52.386Z",
    "updatedAt": "2019-06-04T08:23:54.814Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 3,
    "publishedAt": "2019-06-04T08:23:54.814Z",
    "firstPublishedAt": "2019-06-04T08:23:53.447Z",
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
    "publishedCounter": 2,
    "version": 4,
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "29B6zorz8plUCN1auThiVH"
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
  'Tue, 04 Jun 2019 08:23:55 GMT',
  'ETag',
  'W/"eff6f0361d234e81107328b8a489ffdc"',
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
  'ff5006ac6df7adfd388f24b9c776a254',
  'Content-Length',
  '595',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=04qFxmk5S/mSYBu40N8y5Zoq9lwAAAAAQUIPAAAAAACzHWsmhuCudY4mSMrRpbxI; expires=Wed, 03 Jun 2020 07:04:20 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=kQPqX2XnhwD1NQ8CYMlkBAAAAABpswxK3SYAWzU5HoO6XZxc; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=X0fRM97GWE8OyuBdIUbyDpoq9lwAAAAAxgRXYz4BIyPmVH0zA7pSAA==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '9-1206646-1206648 NNNN CT(0 0 0) RT(1559636633918 22) q(0 0 0 -1) r(4 4) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/4z7mp4ioxvmh/environments/env-integration/content_types/food')
  .reply(200, {
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "4z7mp4ioxvmh"
      }
    },
    "id": "food",
    "type": "ContentType",
    "createdAt": "2019-06-04T08:23:52.386Z",
    "updatedAt": "2019-06-04T08:23:54.814Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 3,
    "publishedAt": "2019-06-04T08:23:54.814Z",
    "firstPublishedAt": "2019-06-04T08:23:53.447Z",
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
    "publishedCounter": 2,
    "version": 4,
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "29B6zorz8plUCN1auThiVH"
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
  'Tue, 04 Jun 2019 08:23:55 GMT',
  'ETag',
  'W/"eff6f0361d234e81107328b8a489ffdc"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '000d17a56e51672b85ff4ab211a24428',
  'Content-Length',
  '595',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=QjvGG9B3RN6u2Yl26lEKwZoq9lwAAAAAQUIPAAAAAAB9Ku/uR+R4Q9omhiqzHBak; expires=Wed, 03 Jun 2020 07:03:17 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=0haISp1n6BdXsSVpYMlkBAAAAAD3NPqqsMyF3ozMvfrqi3BU; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=YD/eUcEQ9QEYyuBdIUbyDpoq9lwAAAAAWK22pZO3VrXZVp4vNlPaFg==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '4-7398689-7398691 NNNN CT(0 0 0) RT(1559636634382 15) q(0 0 0 -1) r(2 2) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/4z7mp4ioxvmh/environments/env-integration/content_types')
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
  'Tue, 04 Jun 2019 08:23:55 GMT',
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
  '0f66a890f76e3509a94448f1a173ae11',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=tI3JRzXXTcGECFY6iGgQr5sq9lwAAAAAQUIPAAAAAABSnSxmDsLPWhZrP1J7qtSG; expires=Wed, 03 Jun 2020 07:03:21 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=7fI3fBJPKx+KpfUnYMlkBAAAAAApCO/iDt4A1YQ4SV7q2/W0; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=2uRHbolceg8hyuBdIUbyDpsq9lwAAAAAH5Mic+z1U1k5UqilDxGG4w==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '14-7340606-7340607 NNNN CT(100 99 0) RT(1559636634639 23) q(0 0 2 -1) r(4 4) U5',
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
        "createdAt":"2019-06-04T08:23:32Z",
        "updatedBy":{
          "sys":{
            "type":"Link",
            "linkType":"User",
            "id":"29B6zorz8plUCN1auThiVH"
          }
        },
        "updatedAt":"2019-06-04T08:23:32Z"
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
  'Tue, 04 Jun 2019 08:23:55 GMT',
  'ETag',
  'W/"43ade1f02d7df04f7668b3794fa9501d"',
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
  '84090280276b66d2b0d96733ecda8d5b',
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
  'visid_incap_673446=yASopijwS/CGu++p4J+zzZsq9lwAAAAAQUIPAAAAAACqJ1t6wfZHpeRYo0vy3dkD; expires=Wed, 03 Jun 2020 07:03:17 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=wkEeXlpMeXJzqw8SYMlkBAAAAABKIIvqUsrefQURneXq4XNc; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=O33cbMnJYwgnyuBdIUbyDpsq9lwAAAAAQDAHmXJcbuWTf4XDFhJI2Q==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '6-4967645-4967646 NNNN CT(0 0 0) RT(1559636635055 16) q(0 0 0 -1) r(1 1) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/4z7mp4ioxvmh/environments/env-integration/content_types/person', {"name":"Person","fields":[{"id":"age","name":"Age","type":"Number","required":true},{"id":"fullName","name":"Full name","type":"Symbol","required":true,"localized":true}],"description":"A content type for a person"})
  .reply(201, {"sys":{"space":{"sys":{"type":"Link","linkType":"Space","id":"4z7mp4ioxvmh"}},"id":"person","type":"ContentType","createdAt":"2019-06-04T08:23:56.143Z","updatedAt":"2019-06-04T08:23:56.143Z","environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}},"createdBy":{"sys":{"type":"Link","linkType":"User","id":"29B6zorz8plUCN1auThiVH"}},"updatedBy":{"sys":{"type":"Link","linkType":"User","id":"29B6zorz8plUCN1auThiVH"}},"publishedCounter":0,"version":1},"displayField":null,"name":"Person","description":"A content type for a person","fields":[{"id":"age","name":"Age","type":"Number","localized":false,"required":true,"validations":[],"disabled":false,"omitted":false},{"id":"fullName","name":"Full name","type":"Symbol","localized":true,"required":true,"validations":[],"disabled":false,"omitted":false}]}, [ 'Access-Control-Allow-Headers',
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
  'Tue, 04 Jun 2019 08:23:56 GMT',
  'ETag',
  '"a58b9b9dbe751e23a746b85e0e5f13e6"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'c7678fcf05cbbc9e78409e8fc5072a65',
  'Content-Length',
  '1269',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=omqAYavISua+2DF8JfwmeZsq9lwAAAAAQUIPAAAAAAB/TtrSPks/+VE4j1+o223t; expires=Wed, 03 Jun 2020 07:03:17 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=/zB4cO+MilgNcsfMYMlkBAAAAAC1O+X8l4S15MhteRXtjd1B; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=1x00dIZGwRgryuBdIUbyDpsq9lwAAAAASxZmgcm01paJv/B6bgFmaQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '5-8673251-8673252 NNNN CT(0 0 0) RT(1559636635227 18) q(0 0 0 -1) r(2 2) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/4z7mp4ioxvmh/environments/env-integration/content_types/person/published')
  .reply(200, {
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "4z7mp4ioxvmh"
      }
    },
    "id": "person",
    "type": "ContentType",
    "createdAt": "2019-06-04T08:23:56.143Z",
    "updatedAt": "2019-06-04T08:23:56.448Z",
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
    "firstPublishedAt": "2019-06-04T08:23:56.448Z",
    "publishedAt": "2019-06-04T08:23:56.448Z",
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
  'Tue, 04 Jun 2019 08:23:56 GMT',
  'ETag',
  'W/"b1881b600a50fac11f15d4788e872f52"',
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
  '70fb3a1dcc1c5cceb8177e018bb95164',
  'Content-Length',
  '475',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=KYll0hGcSYOYMZSkJqfFrZsq9lwAAAAAQUIPAAAAAADGMDR+YsEU2wgNS07gnNuP; expires=Wed, 03 Jun 2020 07:03:17 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=9WJ+Lg/m4BdQDj4XYMlkBAAAAAAOVWqYM2HcMq+0fvu6AXoe; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=UyZ8PatolQI8yuBdIUbyDpsq9lwAAAAAuod5l4CHMujIBxi3Cl+cow==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '4-7398706-7398707 NNNN CT(0 0 0) RT(1559636635552 17) q(0 0 0 -1) r(4 4) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/4z7mp4ioxvmh/environments/env-integration/content_types/animal', {"name":"Animal","fields":[{"id":"species","name":"The species of the animal","type":"Symbol","required":true},{"id":"isFurry","name":"Is this a furry animal","type":"Boolean","required":false}],"description":"An animal"})
  .reply(201, {"sys":{"space":{"sys":{"type":"Link","linkType":"Space","id":"4z7mp4ioxvmh"}},"id":"animal","type":"ContentType","createdAt":"2019-06-04T08:23:56.956Z","updatedAt":"2019-06-04T08:23:56.956Z","environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}},"createdBy":{"sys":{"type":"Link","linkType":"User","id":"29B6zorz8plUCN1auThiVH"}},"updatedBy":{"sys":{"type":"Link","linkType":"User","id":"29B6zorz8plUCN1auThiVH"}},"publishedCounter":0,"version":1},"displayField":null,"name":"Animal","description":"An animal","fields":[{"id":"species","name":"The species of the animal","type":"Symbol","localized":false,"required":true,"validations":[],"disabled":false,"omitted":false},{"id":"isFurry","name":"Is this a furry animal","type":"Boolean","localized":false,"required":false,"validations":[],"disabled":false,"omitted":false}]}, [ 'Access-Control-Allow-Headers',
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
  'Tue, 04 Jun 2019 08:23:57 GMT',
  'ETag',
  '"7dcb06e7337d53635ae67b5da2a6a059"',
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
  '1254b0bf989d519f9422b36b43fabbd5',
  'Content-Length',
  '1292',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=BVvfYWNbRKS2BFIAiQkwKJwq9lwAAAAAQUIPAAAAAADLDJ8EwY/L3D+bE22VW30A; expires=Wed, 03 Jun 2020 07:03:19 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=LM34XM817Guh/rU8YMlkBAAAAAByWJWx0EsCAaJOJ/KZ+Akb; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=g+s8cqumTXRByuBdIUbyDpwq9lwAAAAAAvCMtJ6bcEaj/ygRsCXV9g==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '3-5988324-5988325 NNNN CT(0 0 0) RT(1559636636032 15) q(0 0 0 -1) r(2 2) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/4z7mp4ioxvmh/environments/env-integration/content_types/animal/published')
  .reply(200, {
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "4z7mp4ioxvmh"
      }
    },
    "id": "animal",
    "type": "ContentType",
    "createdAt": "2019-06-04T08:23:56.956Z",
    "updatedAt": "2019-06-04T08:23:57.225Z",
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
    "firstPublishedAt": "2019-06-04T08:23:57.225Z",
    "publishedAt": "2019-06-04T08:23:57.225Z",
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
  'Tue, 04 Jun 2019 08:23:57 GMT',
  'ETag',
  'W/"6a8a616c1741fe9c080089b828d1a0cf"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '4d4d37b56c18711b5937dd9c566c60fa',
  'Content-Length',
  '486',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=ZFktpvwOTCqEyWEx3zdsNJwq9lwAAAAAQUIPAAAAAACPCu/PZh7rBBo/oH3yFEv4; expires=Wed, 03 Jun 2020 07:03:17 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=uFC4cMd33ikCeaLBYMlkBAAAAAC0nh1G8AiVKXrESsawUEss; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=U6bPScPv4HZLyuBdIUbyDpwq9lwAAAAA8KpBkJJCze5vIKjcHQpeRQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '4-7398716-7398717 NNNN CT(0 0 0) RT(1559636636325 15) q(0 0 0 -1) r(4 4) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/4z7mp4ioxvmh/environments/env-integration/content_types/person', {"name":"Person","fields":[{"id":"age","name":"Age","type":"Number","required":true},{"id":"fullName","name":"Full name","type":"Symbol","required":true,"localized":true},{"id":"pet","name":"Their pet","type":"Link","linkType":"Entry","required":false}],"description":"A content type for a person"})
  .reply(200, {
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "4z7mp4ioxvmh"
      }
    },
    "id": "person",
    "type": "ContentType",
    "createdAt": "2019-06-04T08:23:56.143Z",
    "updatedAt": "2019-06-04T08:23:57.673Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 1,
    "publishedAt": "2019-06-04T08:23:56.448Z",
    "firstPublishedAt": "2019-06-04T08:23:56.448Z",
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
    "version": 3,
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "29B6zorz8plUCN1auThiVH"
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
  'Tue, 04 Jun 2019 08:23:57 GMT',
  'ETag',
  'W/"a80268d581a2fcf3a702e8b490b6ef73"',
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
  '655dcd54e908c7318b9d1d6ec2084e00',
  'Content-Length',
  '517',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=7Jd4RlpjQYeYeZtJVkWx/Zwq9lwAAAAAQUIPAAAAAACDi6dLXgj0bebPYnuVcSLL; expires=Wed, 03 Jun 2020 07:03:19 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=sMGDLyqmVB1p8nMpYMlkBAAAAAD9iIHKrnWnHP0SG1ASqQYM; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=otxSSwiJHW9UyuBdIUbyDpwq9lwAAAAAG1ZIdC7FOyhyB+RNtiWu2w==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '3-5988330-5988331 NNNN CT(0 0 0) RT(1559636636747 16) q(0 0 0 -1) r(2 2) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/4z7mp4ioxvmh/environments/env-integration/content_types/person/published')
  .reply(200, {
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "4z7mp4ioxvmh"
      }
    },
    "id": "person",
    "type": "ContentType",
    "createdAt": "2019-06-04T08:23:56.143Z",
    "updatedAt": "2019-06-04T08:23:57.896Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 3,
    "publishedAt": "2019-06-04T08:23:57.896Z",
    "firstPublishedAt": "2019-06-04T08:23:56.448Z",
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
    "publishedCounter": 2,
    "version": 4,
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "29B6zorz8plUCN1auThiVH"
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
  'Tue, 04 Jun 2019 08:23:58 GMT',
  'ETag',
  'W/"ea7196dccc6dcce1e61dc0835e274853"',
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
  '1b0fb1ffc73bd3819eaa40d9338c72be',
  'Content-Length',
  '523',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=fVmUpJj0SWO5T57M31IOY50q9lwAAAAAQUIPAAAAAAArBGQPKtdPeZVEXEiqP4t7; expires=Wed, 03 Jun 2020 07:03:48 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=CGr2TvMpwHnbFIBwYMlkBAAAAAB4bAB/vJRa8P8ps0iRuRcO; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=94cQJPL9LEhayuBdIUbyDp0q9lwAAAAAMlFilp5eT+izd8gUtH0QzQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '7-7071801-7071802 NNNN CT(0 0 0) RT(1559636637007 16) q(0 0 0 -1) r(3 3) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/4z7mp4ioxvmh/environments/env-integration/content_types/animal', {"name":"Animal","fields":[{"id":"species","name":"The species of the animal","type":"Symbol","required":true},{"id":"isFurry","name":"Is this a furry animal","type":"Boolean","required":false},{"id":"name","name":"The name of the animal","type":"Symbol","required":true,"localized":true}],"description":"An animal"})
  .reply(200, {
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "4z7mp4ioxvmh"
      }
    },
    "id": "animal",
    "type": "ContentType",
    "createdAt": "2019-06-04T08:23:56.956Z",
    "updatedAt": "2019-06-04T08:23:58.355Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 1,
    "publishedAt": "2019-06-04T08:23:57.225Z",
    "firstPublishedAt": "2019-06-04T08:23:57.225Z",
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
    "version": 3,
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "29B6zorz8plUCN1auThiVH"
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
  'Tue, 04 Jun 2019 08:23:58 GMT',
  'ETag',
  'W/"580bbf76abfd15ca9283618aabaad276"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '60a89b5170feacbca17f4feb489fc3b0',
  'Content-Length',
  '509',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=eWFqHAb3RIGVjHRZYggHeJ0q9lwAAAAAQUIPAAAAAAA543dlrEfyGvi2sxLKgExm; expires=Wed, 03 Jun 2020 07:03:17 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=oRJ5VV+hNjmd1TZAYMlkBAAAAAAw+Zs4LlEdpNErt745K2op; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=AJPgT0tDsQ1cyuBdIUbyDp0q9lwAAAAAlyeedGz74sOSR9k5ey2Idw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '6-4967655-4967656 NNNN CT(0 0 0) RT(1559636637410 20) q(0 0 0 -1) r(2 2) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/4z7mp4ioxvmh/environments/env-integration/content_types/animal/published')
  .reply(200, {
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "4z7mp4ioxvmh"
      }
    },
    "id": "animal",
    "type": "ContentType",
    "createdAt": "2019-06-04T08:23:56.956Z",
    "updatedAt": "2019-06-04T08:23:58.797Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 3,
    "publishedAt": "2019-06-04T08:23:58.797Z",
    "firstPublishedAt": "2019-06-04T08:23:57.225Z",
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
    "publishedCounter": 2,
    "version": 4,
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "29B6zorz8plUCN1auThiVH"
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
  'Tue, 04 Jun 2019 08:23:59 GMT',
  'ETag',
  'W/"5d7a2f9b32e4567cd5608d296c40bffd"',
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
  '2b5c0ba70e9d6d3e57014bcc9de6c11d',
  'Content-Length',
  '514',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=jxn77jI9Q/WoK+8unOzpyp4q9lwAAAAAQUIPAAAAAAAOOdhbmQrqevXMxjF8Nksa; expires=Wed, 03 Jun 2020 07:03:17 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=AmLDWidx1SuAFnZeYMlkBAAAAACm4ayQo6JJm1HAgYhQ2z2U; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=02YjcTf9zFBkyuBdIUbyDp4q9lwAAAAA0dMDjcHAIZ/66qhZMFPuuQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '4-7398749-7398750 NNNN CT(103 104 0) RT(1559636637688 20) q(0 0 2 -1) r(6 6) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/4z7mp4ioxvmh/environments/env-integration/content_types/person')
  .reply(200, {
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "4z7mp4ioxvmh"
      }
    },
    "id": "person",
    "type": "ContentType",
    "createdAt": "2019-06-04T08:23:56.143Z",
    "updatedAt": "2019-06-04T08:23:57.896Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 3,
    "publishedAt": "2019-06-04T08:23:57.896Z",
    "firstPublishedAt": "2019-06-04T08:23:56.448Z",
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
    "publishedCounter": 2,
    "version": 4,
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "29B6zorz8plUCN1auThiVH"
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
  'Tue, 04 Jun 2019 08:23:59 GMT',
  'ETag',
  'W/"ea7196dccc6dcce1e61dc0835e274853"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'ff8f1aca169b076d66ef05d4438c14d9',
  'Content-Length',
  '523',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=pks7NrUqR4Cf8ye/uYsDa54q9lwAAAAAQUIPAAAAAACHP8G6+mgOOKs5aycjSxOm; expires=Wed, 03 Jun 2020 07:03:48 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=PSbyRvAdnE7YoHiiYMlkBAAAAADKOKwuzrhWMRhRStcOAwF8; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=H/l9H3oLSldoyuBdIUbyDp4q9lwAAAAAb9EVhyNfcaN/KASLxrzzoA==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '7-7071811-7071812 NNNN CT(0 0 0) RT(1559636638403 18) q(0 0 0 -1) r(1 1) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/4z7mp4ioxvmh/environments/env-integration/content_types/animal')
  .reply(200, {
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "4z7mp4ioxvmh"
      }
    },
    "id": "animal",
    "type": "ContentType",
    "createdAt": "2019-06-04T08:23:56.956Z",
    "updatedAt": "2019-06-04T08:23:58.797Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 3,
    "publishedAt": "2019-06-04T08:23:58.797Z",
    "firstPublishedAt": "2019-06-04T08:23:57.225Z",
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
    "publishedCounter": 2,
    "version": 4,
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "29B6zorz8plUCN1auThiVH"
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
  'Tue, 04 Jun 2019 08:23:59 GMT',
  'ETag',
  'W/"5d7a2f9b32e4567cd5608d296c40bffd"',
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
  '99a07b1bf8e34da8139868a3561148c8',
  'Content-Length',
  '514',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=Kk8gTF5qTHqcqKkog+l6Op4q9lwAAAAAQUIPAAAAAACGMNpeBYdLT5wp8VJYkwbo; expires=Wed, 03 Jun 2020 07:03:19 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=m5BtWmI9OiygpRfQYMlkBAAAAAAZmkuy8OHyElpViCLqeZEF; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=gbZ4NhQGVkZryuBdIUbyDp4q9lwAAAAAqfZUvySS6QfE9OBRq7bqfw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '3-5988403-5988404 NNNN CT(0 0 0) RT(1559636638620 19) q(0 0 0 -1) r(1 1) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/4z7mp4ioxvmh/environments/env-integration/content_types')
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
            "id": "4z7mp4ioxvmh"
          }
        },
        "id": "person",
        "type": "ContentType",
        "createdAt": "2019-06-04T08:23:56.143Z",
        "updatedAt": "2019-06-04T08:23:57.896Z",
        "environment": {
          "sys": {
            "id": "env-integration",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 3,
        "publishedAt": "2019-06-04T08:23:57.896Z",
        "firstPublishedAt": "2019-06-04T08:23:56.448Z",
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
        "publishedCounter": 2,
        "version": 4,
        "publishedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "29B6zorz8plUCN1auThiVH"
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
  'Tue, 04 Jun 2019 08:23:59 GMT',
  'ETag',
  'W/"f5972069c08ff07b98e20561db7a4e5e"',
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
  '6647c0cd46f30ccfdfb888493024d501',
  'Content-Length',
  '587',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=52F6SSAOSVijm8259UTBtZ8q9lwAAAAAQUIPAAAAAABBnYyptGpAxLBHqgUHa0Ro; expires=Wed, 03 Jun 2020 07:03:17 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=I4PDMwKW7z8+44w7YMlkBAAAAADb+H8nC5vuVjXgoVndti3U; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=B1ybHUkNMhNxyuBdIUbyDp8q9lwAAAAABoy4AOgz/nrMh97JnZZAcw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '5-8673292-8673293 NNNN CT(107 108 0) RT(1559636638851 17) q(0 0 2 -1) r(4 4) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/4z7mp4ioxvmh/environments/env-integration/content_types/blogpost', {"name":"blog post","fields":[{"name":"title","id":"title","type":"Symbol"},{"name":"category","id":"category","type":"Symbol"}]})
  .reply(201, {"sys":{"space":{"sys":{"type":"Link","linkType":"Space","id":"4z7mp4ioxvmh"}},"id":"blogpost","type":"ContentType","createdAt":"2019-06-04T08:24:00.201Z","updatedAt":"2019-06-04T08:24:00.201Z","environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}},"createdBy":{"sys":{"type":"Link","linkType":"User","id":"29B6zorz8plUCN1auThiVH"}},"updatedBy":{"sys":{"type":"Link","linkType":"User","id":"29B6zorz8plUCN1auThiVH"}},"publishedCounter":0,"version":1},"displayField":null,"name":"blog post","description":null,"fields":[{"id":"title","name":"title","type":"Symbol","localized":false,"required":false,"validations":[],"disabled":false,"omitted":false},{"id":"category","name":"category","type":"Symbol","localized":false,"required":false,"validations":[],"disabled":false,"omitted":false}]}, [ 'Access-Control-Allow-Headers',
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
  'Tue, 04 Jun 2019 08:24:00 GMT',
  'ETag',
  '"90b624ca520006cc9e82f36404f00036"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '970aabd0a6de88dc3e55a3e3ef1229f5',
  'Content-Length',
  '1255',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=QzcxLCqwTK21lP45pReWh58q9lwAAAAAQUIPAAAAAADIyWIvJpcYQgFuOlgqDEEn; expires=Wed, 03 Jun 2020 07:03:49 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=+RSOdAHX73YAr2iQYMlkBAAAAABAbgX9K29m3oRspFP2ftP6; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=QRHALsJfjDh1yuBdIUbyDp8q9lwAAAAAgaF34u3w3taH7l2RZ5uXKQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '13-3275847-3275849 NNNN CT(0 0 0) RT(1559636639288 18) q(0 0 0 -1) r(2 2) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/4z7mp4ioxvmh/environments/env-integration/content_types/blogpost/published')
  .reply(200, {
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "4z7mp4ioxvmh"
      }
    },
    "id": "blogpost",
    "type": "ContentType",
    "createdAt": "2019-06-04T08:24:00.201Z",
    "updatedAt": "2019-06-04T08:24:00.507Z",
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
    "firstPublishedAt": "2019-06-04T08:24:00.507Z",
    "publishedAt": "2019-06-04T08:24:00.507Z",
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
  'Tue, 04 Jun 2019 08:24:00 GMT',
  'ETag',
  'W/"edd2dce5c592d14aecceac5cf3482332"',
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
  'c1fb01f831cab04916ca4fb8f4433cd6',
  'Content-Length',
  '443',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=7Tybx8gMTXCZaziPTPY7M58q9lwAAAAAQUIPAAAAAACs15Hv/O1eKhkRDF5ohadG; expires=Wed, 03 Jun 2020 07:03:28 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=2eQfZeJqlzJlqpYDYMlkBAAAAADhaxte/2h7XYt0rhK3VCjb; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=SRa7NvYJn3t9yuBdIUbyDp8q9lwAAAAAWDw+tps/CS6FKzu62iHRCw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '12-2296903-2296904 NNNN CT(0 0 0) RT(1559636639609 26) q(0 0 0 -1) r(3 3) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .post('/spaces/4z7mp4ioxvmh/environments/env-integration/entries', {"fields":{"title":{"en-US":"hello!"}}})
  .reply(201, {
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "4z7mp4ioxvmh"
      }
    },
    "id": "KIGVySrTpbiGtFvNrltDM",
    "type": "Entry",
    "createdAt": "2019-06-04T08:24:00.942Z",
    "updatedAt": "2019-06-04T08:24:00.942Z",
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
  'Tue, 04 Jun 2019 08:24:01 GMT',
  'ETag',
  '"e8b62441e35ac358f88b680a691a7252"',
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
  '3c72ea627c0d3c1bba4e47e626731944',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=EwqZb5QOT9KGlzRLnWQdxqAq9lwAAAAAQUIPAAAAAAA/qPSi3VUp6pivHQBjb3XK; expires=Wed, 03 Jun 2020 07:03:17 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=IFcxOX2mYCnqD2xeYMlkBAAAAADshphXIeEUo0ax9DR3vth1; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=+gnHMEhyAHmLyuBdIUbyDqAq9lwAAAAALmEEqfHKqpOaAVaeyV4TOw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '5-8673305-8673306 NNNN CT(0 0 0) RT(1559636640026 19) q(0 0 0 -1) r(2 2) U5',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .post('/spaces/4z7mp4ioxvmh/environments/env-integration/entries', {"fields":{"title":{"en-US":"hello!"}}})
  .reply(201, {
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "4z7mp4ioxvmh"
      }
    },
    "id": "2po1z5yYLYzZXKWeWAzGXE",
    "type": "Entry",
    "createdAt": "2019-06-04T08:24:01.243Z",
    "updatedAt": "2019-06-04T08:24:01.243Z",
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
  'Tue, 04 Jun 2019 08:24:01 GMT',
  'ETag',
  '"33a91fe3478feff455fb93af678f2ffd"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '7c94c665b92ba52d3d6076efc85c0d30',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=57HbU1/1RmmQ14jCWokC3qAq9lwAAAAAQUIPAAAAAABuEGwubPTXRlP0JTY1DqQ8; expires=Wed, 03 Jun 2020 07:03:21 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=DPTQMqpNiEu4P0M1YMlkBAAAAAAB5+iufZlcIbbua6hLspqb; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=KAyJKNJ0TW6XyuBdIUbyDqAq9lwAAAAAjdiJN8+7uU0YI4bVLpoh+A==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '14-7340681-7340682 NNNN CT(0 0 0) RT(1559636640338 22) q(0 0 0 -1) r(2 2) U5',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/4z7mp4ioxvmh/environments/env-integration/content_types')
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
            "id": "4z7mp4ioxvmh"
          }
        },
        "id": "blogpost",
        "type": "ContentType",
        "createdAt": "2019-06-04T08:24:00.201Z",
        "updatedAt": "2019-06-04T08:24:00.507Z",
        "environment": {
          "sys": {
            "id": "env-integration",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 1,
        "publishedAt": "2019-06-04T08:24:00.507Z",
        "firstPublishedAt": "2019-06-04T08:24:00.507Z",
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
        "publishedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "29B6zorz8plUCN1auThiVH"
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
  'Tue, 04 Jun 2019 08:24:01 GMT',
  'ETag',
  'W/"5f30137244396ae98b398d6b57090cb0"',
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
  '610e040b7649a55fa1d42e6a669fafe9',
  'Content-Length',
  '512',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=YC3ItlJIQROlFRKowIhr4aEq9lwAAAAAQUIPAAAAAAC68E+v6aC+5CvztebKd2Gh; expires=Wed, 03 Jun 2020 07:03:19 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=KdmVcOzQmXohXovSYMlkBAAAAABwpMWUL7PqODhT1chC3SD0; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=hvLjB9x8BWuoyuBdIUbyDqEq9lwAAAAAEYO9cA9svnSnPgFmbuOHPQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '2-4337280-4337281 NNNN CT(98 98 0) RT(1559636640637 21) q(0 0 2 -1) r(4 4) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/4z7mp4ioxvmh/environments/env-integration/entries')
  .query({"sys.archivedAt":{"exists":"false"},"sys.contentType.sys.id":{"in":"blogpost"},"skip":"0"})
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
            "id": "4z7mp4ioxvmh"
          }
        },
        "id": "2po1z5yYLYzZXKWeWAzGXE",
        "type": "Entry",
        "createdAt": "2019-06-04T08:24:01.243Z",
        "updatedAt": "2019-06-04T08:24:01.243Z",
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
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "4z7mp4ioxvmh"
          }
        },
        "id": "KIGVySrTpbiGtFvNrltDM",
        "type": "Entry",
        "createdAt": "2019-06-04T08:24:00.942Z",
        "updatedAt": "2019-06-04T08:24:00.942Z",
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
  'Tue, 04 Jun 2019 08:24:01 GMT',
  'ETag',
  'W/"f2f492506c55fb0095a7d667f3c9131f"',
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
  'b36128a83bf0eb5b49cc70491cfca90b',
  'Content-Length',
  '460',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=b+htUSIGSx2ex7U2xS8WT6Eq9lwAAAAAQUIPAAAAAADTyZHMwZiyhbLilad6mOrg; expires=Wed, 03 Jun 2020 07:03:17 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=vjlmChIxZX9xqv8+YMlkBAAAAACuW7PNB78DPQsOEJRM2+M4; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=XkJzP4dI+nyuyuBdIUbyDqEq9lwAAAAAJ7uFVc+rLXaECuZgXd+RuQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '5-8673320-8673321 NNNN CT(0 0 0) RT(1559636641057 22) q(0 0 0 -1) r(2 2) U5',
  'X-CDN',
  'Incapsula' ]);


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
        "createdAt":"2019-06-04T08:23:32Z",
        "updatedBy":{
          "sys":{
            "type":"Link",
            "linkType":"User",
            "id":"29B6zorz8plUCN1auThiVH"
          }
        },
        "updatedAt":"2019-06-04T08:23:32Z"
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
  'Tue, 04 Jun 2019 08:24:02 GMT',
  'ETag',
  'W/"43ade1f02d7df04f7668b3794fa9501d"',
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
  'f47a6e12bd0b6bbfbc60cb036af7acd8',
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
  'visid_incap_673446=gWISW8+pQqyOdXfVo9Qv4qEq9lwAAAAAQUIPAAAAAADa6bMX9shQe6/oE/ZqErL0; expires=Wed, 03 Jun 2020 07:03:49 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=5Dg6AOImLX50tP7dYMlkBAAAAADldE/nTDpm0fIkZnrO68Y2; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=Sk+LPKR/4x6zyuBdIUbyDqEq9lwAAAAAuiEwYccwjF0QJR169Ng2cg==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '13-3275870-3275871 NNNN CT(0 0 0) RT(1559636641291 26) q(0 0 0 -1) r(1 1) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/4z7mp4ioxvmh/environments/env-integration/entries/2po1z5yYLYzZXKWeWAzGXE', {"sys":{"id":"2po1z5yYLYzZXKWeWAzGXE","version":1,"contentType":{"sys":{"type":"Link","linkType":"ContentType","id":"blogpost"}}},"fields":{"title":{"en-US":"hello!"},"category":{"en-US":"hello!"}}})
  .reply(200, {
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "4z7mp4ioxvmh"
      }
    },
    "id": "2po1z5yYLYzZXKWeWAzGXE",
    "type": "Entry",
    "createdAt": "2019-06-04T08:24:01.243Z",
    "updatedAt": "2019-06-04T08:24:02.436Z",
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
  'Tue, 04 Jun 2019 08:24:02 GMT',
  'ETag',
  'W/"fc200ac88d3e48ab0f657bbfe0d2725f"',
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
  '96a4461f8b8966d253beef4923f9ff5a',
  'Content-Length',
  '366',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=+qcPO6j/Qy6S31yei8U0GqEq9lwAAAAAQUIPAAAAAACjcFuGbgQoozMVtBj1EwTF; expires=Wed, 03 Jun 2020 07:03:21 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=PdA4X3Nhdw+YAQNXYMlkBAAAAAAqeWVUNwabG9dDMUALIswS; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=G7JSHxxcLVe6yuBdIUbyDqEq9lwAAAAAKFbk+GdRf/TyzemJ8Nt0pw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '14-7340697-7340700 NNNN CT(0 0 0) RT(1559636641508 29) q(0 0 0 -1) r(2 2) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/4z7mp4ioxvmh/environments/env-integration/entries/2po1z5yYLYzZXKWeWAzGXE/published')
  .reply(200, {
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "4z7mp4ioxvmh"
      }
    },
    "id": "2po1z5yYLYzZXKWeWAzGXE",
    "type": "Entry",
    "createdAt": "2019-06-04T08:24:01.243Z",
    "updatedAt": "2019-06-04T08:24:02.686Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 2,
    "publishedAt": "2019-06-04T08:24:02.686Z",
    "firstPublishedAt": "2019-06-04T08:24:02.686Z",
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
    "version": 3,
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "29B6zorz8plUCN1auThiVH"
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
  'Tue, 04 Jun 2019 08:24:02 GMT',
  'ETag',
  'W/"d2a1e6c6c57620f14c8875e024913251"',
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
  'f810f5977287f48d6e960225923c3547',
  'Content-Length',
  '394',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=KOFKeoHvQ4mOLeo4u8TlJ6Iq9lwAAAAAQUIPAAAAAAD8Ve75WANziF0v1oKLYrYB; expires=Wed, 03 Jun 2020 07:03:48 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=+1une/bjrnd9yRl9YMlkBAAAAACy/XZTby3tWjkY+gkA5nqN; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=VmsXKA8o/BHEyuBdIUbyDqIq9lwAAAAAYm/X/qsqRfBZEuiSybPiBg==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '7-7071911-7071913 NNNN CT(0 0 0) RT(1559636641795 28) q(0 0 0 -1) r(2 2) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/4z7mp4ioxvmh/environments/env-integration/entries/KIGVySrTpbiGtFvNrltDM', {"sys":{"id":"KIGVySrTpbiGtFvNrltDM","version":1,"contentType":{"sys":{"type":"Link","linkType":"ContentType","id":"blogpost"}}},"fields":{"title":{"en-US":"hello!"},"category":{"en-US":"hello!"}}})
  .reply(200, {
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "4z7mp4ioxvmh"
      }
    },
    "id": "KIGVySrTpbiGtFvNrltDM",
    "type": "Entry",
    "createdAt": "2019-06-04T08:24:00.942Z",
    "updatedAt": "2019-06-04T08:24:03.037Z",
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
  'Tue, 04 Jun 2019 08:24:03 GMT',
  'ETag',
  'W/"b428d9ccfcf8968db56b3406c4c85af8"',
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
  '5d2d06a10d6d0c1fa56cb1be53d5091e',
  'Content-Length',
  '363',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=A/WEK6BNSoGhJ890Lan/jqIq9lwAAAAAQUIPAAAAAAC05+I23ctSP/ZrAb/7kJFB; expires=Wed, 03 Jun 2020 07:04:06 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=N66JKD+k6mY/ZVpKYMlkBAAAAAAQRCgpFcyelppnZX9Y8ofV; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=SjxRRvVWWADJyuBdIUbyDqIq9lwAAAAA/BPT1pabLGOMmSriDkdUtw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '11-1828105-1828106 NNNN CT(0 0 0) RT(1559636642138 21) q(0 0 0 -1) r(2 2) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/4z7mp4ioxvmh/environments/env-integration/entries/KIGVySrTpbiGtFvNrltDM/published')
  .reply(200, {
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "4z7mp4ioxvmh"
      }
    },
    "id": "KIGVySrTpbiGtFvNrltDM",
    "type": "Entry",
    "createdAt": "2019-06-04T08:24:00.942Z",
    "updatedAt": "2019-06-04T08:24:03.275Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 2,
    "publishedAt": "2019-06-04T08:24:03.275Z",
    "firstPublishedAt": "2019-06-04T08:24:03.275Z",
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
    "version": 3,
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "29B6zorz8plUCN1auThiVH"
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
  'Tue, 04 Jun 2019 08:24:03 GMT',
  'ETag',
  'W/"b8df87e3773ab40f6fecb83c5737ac18"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '4b0477aa7ebd9139a1d9a40d0bef0473',
  'Content-Length',
  '393',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=IWWcTaQVTUygm/5/r8Pdm6Iq9lwAAAAAQUIPAAAAAACrOLwBcO0SSk/yMRBQUglN; expires=Wed, 03 Jun 2020 07:04:00 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=Oit8E3e4bSTxyjZgYMlkBAAAAABBBo1YOFi2xpU46iKOYoXf; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=Ai0HRut9/S7VyuBdIUbyDqIq9lwAAAAA6QT7IM6zHfCs5jWM1erS3Q==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '10-1536996-1536997 NNNN CT(0 0 0) RT(1559636642383 19) q(0 0 0 -1) r(3 3) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/4z7mp4ioxvmh/environments/env-integration/entries')
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
            "id": "4z7mp4ioxvmh"
          }
        },
        "id": "KIGVySrTpbiGtFvNrltDM",
        "type": "Entry",
        "createdAt": "2019-06-04T08:24:00.942Z",
        "updatedAt": "2019-06-04T08:24:03.275Z",
        "environment": {
          "sys": {
            "id": "env-integration",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 2,
        "publishedAt": "2019-06-04T08:24:03.275Z",
        "firstPublishedAt": "2019-06-04T08:24:03.275Z",
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
        "version": 3,
        "publishedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "29B6zorz8plUCN1auThiVH"
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
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "4z7mp4ioxvmh"
          }
        },
        "id": "2po1z5yYLYzZXKWeWAzGXE",
        "type": "Entry",
        "createdAt": "2019-06-04T08:24:01.243Z",
        "updatedAt": "2019-06-04T08:24:02.686Z",
        "environment": {
          "sys": {
            "id": "env-integration",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 2,
        "publishedAt": "2019-06-04T08:24:02.686Z",
        "firstPublishedAt": "2019-06-04T08:24:02.686Z",
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
        "version": 3,
        "publishedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "29B6zorz8plUCN1auThiVH"
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
  'Tue, 04 Jun 2019 08:24:03 GMT',
  'ETag',
  'W/"19763616fe86bae33065b4d46cd9c739"',
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
  '6632e6e47bb85ebc11178b06933600d7',
  'Content-Length',
  '540',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=HyYAXfyXRzW0rtgQ/cTsUaMq9lwAAAAAQUIPAAAAAAATs6/Z8NtUluHqs12qqQ4w; expires=Wed, 03 Jun 2020 07:03:18 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=LaePFkxOUzpsRzRQYMlkBAAAAAAr0wXWi77PB0B9ZKGrq8jn; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=itcjMTCuezjcyuBdIUbyDqMq9lwAAAAAoDiw6g4hss4EzkiYuLmH4A==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '1-3550829-3550830 NNNN CT(99 100 0) RT(1559636642822 21) q(0 0 2 -1) r(3 3) U5',
  'X-CDN',
  'Incapsula' ]);


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
  'Tue, 04 Jun 2019 08:24:04 GMT',
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
  '9e7ee5fe2cda6674c63e2fbc8485e08b',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=wZ0jUMx7QFm6KNWg+iFEjKMq9lwAAAAAQUIPAAAAAAAD1KW5TDTNH8E6HHHJe9vI; expires=Wed, 03 Jun 2020 07:03:26 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=nUdkCGkpiWBauiwZYMlkBAAAAADNquvmm0+hGJL7YJoryiJ/; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=3diKVzesPkHmyuBdIUbyDqMq9lwAAAAA8ULNNwnmlGcYWM4tObxdrA==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '0-2885106-2885107 NNNN CT(0 0 0) RT(1559636643271 24) q(0 0 0 -1) r(2 2) U5',
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
  "requestId": "6331d689cc9050a6e9b6388a5099884d"
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
  'Tue, 04 Jun 2019 08:24:04 GMT',
  'ETag',
  '"84cff66cfa5f62699091cff23a7f8dd6"',
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
  '6331d689cc9050a6e9b6388a5099884d',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=ulNclUBYRHemo9NDiDEeoqMq9lwAAAAAQUIPAAAAAAB7/fH+5+tRyLZH3s6FEMwj; expires=Wed, 03 Jun 2020 07:04:06 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=v8uBdoAn5w5ezDArYMlkBAAAAABS3g1Xt5XXafncD06zCmXu; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=v6RnWdbON23ryuBdIUbyDqMq9lwAAAAAS/mhDt61pT3K+egyhvU5OQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '11-1828113-1828114 NNNN CT(0 0 0) RT(1559636643491 24) q(0 0 0 -1) r(1 1) U5',
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
        "createdAt":"2019-06-04T08:23:32Z",
        "updatedBy":{
          "sys":{
            "type":"Link",
            "linkType":"User",
            "id":"29B6zorz8plUCN1auThiVH"
          }
        },
        "updatedAt":"2019-06-04T08:23:32Z"
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
  'Tue, 04 Jun 2019 08:24:04 GMT',
  'ETag',
  'W/"43ade1f02d7df04f7668b3794fa9501d"',
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
  'd27ca3a3047e8f120af7e23c97864e1b',
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
  'visid_incap_673446=13NyU5JpR2y+7cGII1I0/KMq9lwAAAAAQUIPAAAAAABhAV8h/THIc0EXo1bdeTLV; expires=Wed, 03 Jun 2020 07:03:19 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=2Nb+F6NH5QqmZhRaYMlkBAAAAABj0bBtPWRPvDOSdngS+2+j; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=XvIXfOO+d0zvyuBdIUbyDqMq9lwAAAAAC0cFA090XvNIvyeG6qasPQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '2-4337347-4337348 NNNN CT(0 0 0) RT(1559636643727 22) q(0 0 0 -1) r(1 1) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/4z7mp4ioxvmh/environments/env-integration/content_types/blogPost', {"name":"Blog post","fields":[{"id":"slug","name":"URL Slug","type":"Symbol","required":true}],"description":"super angry"})
  .reply(201, {"sys":{"space":{"sys":{"type":"Link","linkType":"Space","id":"4z7mp4ioxvmh"}},"id":"blogPost","type":"ContentType","createdAt":"2019-06-04T08:24:04.847Z","updatedAt":"2019-06-04T08:24:04.847Z","environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}},"createdBy":{"sys":{"type":"Link","linkType":"User","id":"29B6zorz8plUCN1auThiVH"}},"updatedBy":{"sys":{"type":"Link","linkType":"User","id":"29B6zorz8plUCN1auThiVH"}},"publishedCounter":0,"version":1},"displayField":null,"name":"Blog post","description":"super angry","fields":[{"id":"slug","name":"URL Slug","type":"Symbol","localized":false,"required":true,"validations":[],"disabled":false,"omitted":false}]}, [ 'Access-Control-Allow-Headers',
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
  'Tue, 04 Jun 2019 08:24:04 GMT',
  'ETag',
  '"1d04203948b3ac40dc176c8d20350530"',
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
  'ab491cfe387255fe87cc2e87192748ea',
  'Content-Length',
  '1054',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=F7uaVgFRRC2BM4Q1xegqEaQq9lwAAAAAQUIPAAAAAAB8bvqY0gbyxq53psv8guL/; expires=Wed, 03 Jun 2020 07:03:19 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=UFRAKRiN3yE4IjT0YMlkBAAAAAB0oY8vK1IMrTTRE4BCV3CA; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=9s01C6QO8G3xyuBdIUbyDqQq9lwAAAAA4uDvMDkCF1/CQIHcFM4lqQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '2-4337351-4337352 NNNN CT(0 0 0) RT(1559636643928 19) q(0 0 0 -1) r(2 2) U5',
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
    "createdAt": "2019-06-04T08:24:04.847Z",
    "updatedAt": "2019-06-04T08:24:05.323Z",
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
    "firstPublishedAt": "2019-06-04T08:24:05.323Z",
    "publishedAt": "2019-06-04T08:24:05.323Z",
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
  'Tue, 04 Jun 2019 08:24:05 GMT',
  'ETag',
  'W/"049d32237a56c3381f46c15be36cba12"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '6ef6de4616cc613e016d9b9a433034d2',
  'Content-Length',
  '448',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=axkWX0+CQsawVZP4dDC7MaQq9lwAAAAAQUIPAAAAAADX8x9fCgRfrV12mA4mBbid; expires=Wed, 03 Jun 2020 07:03:17 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=pe8/JAhHT3fYwV07YMlkBAAAAAAeATRP9SCs4tEc6/aakvws; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=1+MZezJ5yU78yuBdIUbyDqQq9lwAAAAAPNqg6vVjt37rCe0G/vGxig==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '5-8673377-8673378 NNNN CT(99 100 0) RT(1559636644232 17) q(0 0 2 -1) r(5 5) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/4z7mp4ioxvmh/environments/env-integration/content_types/blogPost/editor_interface', {"controls":[{"fieldId":"slug","widgetId":"slugEditor"}]})
  .reply(200, {"controls":[{"fieldId":"slug","widgetId":"slugEditor"}],"sys":{"id":"default","type":"EditorInterface","space":{"sys":{"id":"4z7mp4ioxvmh","type":"Link","linkType":"Space"}},"version":2,"createdAt":"2019-06-04T08:24:05.448Z","createdBy":{"sys":{"id":"29B6zorz8plUCN1auThiVH","type":"Link","linkType":"User"}},"updatedAt":"2019-06-04T08:24:05.724Z","updatedBy":{"sys":{"type":"Link","linkType":"User","id":"29B6zorz8plUCN1auThiVH"}},"contentType":{"sys":{"id":"blogPost","type":"Link","linkType":"ContentType"}},"environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}}}}, [ 'Access-Control-Allow-Headers',
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
  'Tue, 04 Jun 2019 08:24:05 GMT',
  'ETag',
  '"ba4ccf0e4d0b6b041116b666e7ed87ea"',
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
  '89fa3336e9cd85f9a00b57807c7d0e3c',
  'Content-Length',
  '951',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=CQ3qbEhxRN2RGPvJ3vGIt6Uq9lwAAAAAQUIPAAAAAAB/AjTs7vvKzMVo80BEfhIt; expires=Wed, 03 Jun 2020 07:03:26 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=EuydQ+iG/gSFbs7qYMlkBAAAAABWMnelhxajDIfBP2NvFsxq; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=sCxMHZeNsikAy+BdIUbyDqUq9lwAAAAAtZs7Ba8GuIkW64N8zeMTHg==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '0-2885109-2885110 NNNN CT(0 0 0) RT(1559636644834 21) q(0 0 0 -1) r(2 2) U5',
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
    "createdAt": "2019-06-04T08:24:05.448Z",
    "createdBy": {
      "sys": {
        "id": "29B6zorz8plUCN1auThiVH",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2019-06-04T08:24:05.724Z",
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
      "widgetId": "slugEditor"
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
  'Tue, 04 Jun 2019 08:24:06 GMT',
  'ETag',
  '"c29129a2f432951b87f526906c41f153"',
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
  'ddcdce58c9431734ff34553c16ecbaf6',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=swf2uew3TQi7TCnaxvb+L6Uq9lwAAAAAQUIPAAAAAABf89xKr9UU4cRqfykbc3Rj; expires=Wed, 03 Jun 2020 07:03:18 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=jzrdV0UsYi799V3rYMlkBAAAAABSV+c7WlfTbRAfF6IpAD/+; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=T9PnfbGXMAoEy+BdIUbyDqUq9lwAAAAAr0Cuk9MHCUxWb9/Usy9WsA==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '1-3550840-3550841 NNNN CT(0 0 0) RT(1559636645111 18) q(0 0 0 -1) r(1 1) U5',
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
            "id": "4z7mp4ioxvmh"
          }
        },
        "id": "blogPost",
        "type": "ContentType",
        "createdAt": "2019-06-04T08:24:04.847Z",
        "updatedAt": "2019-06-04T08:24:05.323Z",
        "environment": {
          "sys": {
            "id": "env-integration",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 1,
        "publishedAt": "2019-06-04T08:24:05.323Z",
        "firstPublishedAt": "2019-06-04T08:24:05.323Z",
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
        "publishedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "29B6zorz8plUCN1auThiVH"
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
  'Tue, 04 Jun 2019 08:24:06 GMT',
  'ETag',
  'W/"849abdae412d45dc84a6e13cbe118fa0"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'c5929c7fca33c5fcaaffe3fdd56c44dc',
  'Content-Length',
  '518',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=JoWc05kcQseyuobDHsJ11KUq9lwAAAAAQUIPAAAAAAApRXnV9+VpA5FMdX0rlPdW; expires=Wed, 03 Jun 2020 07:03:48 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=9h+OMsD6bAM9yvuVYMlkBAAAAADclvMuTRRmxjAOK6UYNq8+; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=SgvuKvHBZUIPy+BdIUbyDqUq9lwAAAAAPZ5eKblS/8Fpc89p8yFuvg==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '7-7071983-7071984 NNNN CT(113 107 0) RT(1559636645328 22) q(0 0 2 -1) r(4 4) U5',
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
    "createdAt": "2019-06-04T08:24:05.448Z",
    "createdBy": {
      "sys": {
        "id": "29B6zorz8plUCN1auThiVH",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2019-06-04T08:24:05.724Z",
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
      "widgetId": "slugEditor"
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
  'Tue, 04 Jun 2019 08:24:06 GMT',
  'ETag',
  '"c29129a2f432951b87f526906c41f153"',
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
  'cd28fdb52172b860694c63295e29f491',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=gcAuxhATRYCh879SUn15VqUq9lwAAAAAQUIPAAAAAAB+RSaecH2a/fG/MVlBdR+V; expires=Wed, 03 Jun 2020 07:03:19 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=uHcdMDOuQwX71hYgYMlkBAAAAACFvoO4P4GMo0NOzBzVe5EG; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=eXw8P5pXv38Yy+BdIUbyDqUq9lwAAAAARfnFk1bfzD47Cc4uc2mzZw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '3-5988592-5988593 NNNN CT(0 0 0) RT(1559636645780 22) q(0 0 0 -1) r(1 1) U5',
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
        "createdAt":"2019-06-04T08:23:32Z",
        "updatedBy":{
          "sys":{
            "type":"Link",
            "linkType":"User",
            "id":"29B6zorz8plUCN1auThiVH"
          }
        },
        "updatedAt":"2019-06-04T08:23:32Z"
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
  'Tue, 04 Jun 2019 08:24:06 GMT',
  'ETag',
  'W/"43ade1f02d7df04f7668b3794fa9501d"',
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
  'af709774952e96aa55adde2dc719043e',
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
  'visid_incap_673446=jKXxhccgSnylvvCFPRKpgKYq9lwAAAAAQUIPAAAAAAC8KVRb9zhUNv9bN7eAklWp; expires=Wed, 03 Jun 2020 07:03:28 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=BzBmPMksQhnfeAtjYMlkBAAAAAAx180vEuRPM3gRIVRPGMgs; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=3ENEAYWu6CEfy+BdIUbyDqYq9lwAAAAAGOqisa/yEcRbJW4qkVK0Ow==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '12-2296910-2296911 NNNN CT(0 0 0) RT(1559636646009 27) q(0 0 0 -1) r(1 1) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/4z7mp4ioxvmh/environments/env-integration/content_types/blogPost', {"name":"Blog post","displayField":null,"fields":[{"id":"slug","name":"URL Slug","type":"Symbol","localized":false,"required":true,"validations":[],"disabled":false,"omitted":false}],"description":"super angry"})
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
    "createdAt": "2019-06-04T08:24:04.847Z",
    "updatedAt": "2019-06-04T08:24:07.146Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 1,
    "publishedAt": "2019-06-04T08:24:05.323Z",
    "firstPublishedAt": "2019-06-04T08:24:05.323Z",
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
    "version": 3,
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "29B6zorz8plUCN1auThiVH"
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
  'Tue, 04 Jun 2019 08:24:07 GMT',
  'ETag',
  'W/"fd34fcf704b9dd7f07ae594da951e52a"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '6d8d690abf6db14f2db3a1d9eb42555c',
  'Content-Length',
  '452',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=NSw5JMVdRv6RJXZag10V86Yq9lwAAAAAQUIPAAAAAAAF4Pwqcww0e9RaVXHGnlhm; expires=Wed, 03 Jun 2020 07:03:17 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=vug/dRlWIRwDJznBYMlkBAAAAABq/UXn0roAMUv9++bCwf5+; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=M+xiOJRkOAQny+BdIUbyDqYq9lwAAAAAIJV28bvuA5XPZyAGWMcDcQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '4-7398859-7398863 NNNN CT(0 0 0) RT(1559636646238 23) q(0 0 0 -1) r(2 2) U5',
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
    "createdAt": "2019-06-04T08:24:04.847Z",
    "updatedAt": "2019-06-04T08:24:07.413Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 3,
    "publishedAt": "2019-06-04T08:24:07.413Z",
    "firstPublishedAt": "2019-06-04T08:24:05.323Z",
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
    "publishedCounter": 2,
    "version": 4,
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "29B6zorz8plUCN1auThiVH"
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
  'Tue, 04 Jun 2019 08:24:07 GMT',
  'ETag',
  'W/"f3a100edb2a050a5f4c8be315a4a1fb8"',
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
  'b0546753e08565787e76c08b664e7d32',
  'Content-Length',
  '456',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=7AL+qI2VQBu7BcbW2+vtNaYq9lwAAAAAQUIPAAAAAAC6esga8NnHTXoMdp+JUJJF; expires=Wed, 03 Jun 2020 07:03:18 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=fMDjTPnZSj/SGwYsYMlkBAAAAACpsojgN0VYDb87+I2ywjrB; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=3sVQZTLLEXcty+BdIUbyDqYq9lwAAAAA4fqcvjD3sAL0lpSdPb+iZQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '1-3550845-3550846 NNNN CT(0 0 0) RT(1559636646509 28) q(0 0 0 -1) r(4 4) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/4z7mp4ioxvmh/environments/env-integration/content_types/blogPost/editor_interface', {"controls":[{"fieldId":"slug","widgetId":"singleLine"}]})
  .reply(200, {"controls":[{"fieldId":"slug","widgetId":"singleLine"}],"sys":{"id":"default","type":"EditorInterface","space":{"sys":{"id":"4z7mp4ioxvmh","type":"Link","linkType":"Space"}},"version":4,"createdAt":"2019-06-04T08:24:05.448Z","createdBy":{"sys":{"id":"29B6zorz8plUCN1auThiVH","type":"Link","linkType":"User"}},"updatedAt":"2019-06-04T08:24:07.866Z","updatedBy":{"sys":{"type":"Link","linkType":"User","id":"29B6zorz8plUCN1auThiVH"}},"contentType":{"sys":{"id":"blogPost","type":"Link","linkType":"ContentType"}},"environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}}}}, [ 'Access-Control-Allow-Headers',
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
  'Tue, 04 Jun 2019 08:24:07 GMT',
  'ETag',
  '"ad0258cc72f85d2fbc1c91e4f07d0797"',
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
  'f987b487b01e39195ac2fe802f5e9f08',
  'Content-Length',
  '951',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=LliwVPhoR0qVgjGdnO4Yk6cq9lwAAAAAQUIPAAAAAABw7gQKLrvmdd76wPMu9feS; expires=Wed, 03 Jun 2020 07:03:19 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=8WSIBJTtLWeZSzigYMlkBAAAAAAjHh524Bni6BJA4ihIV2yg; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=d9aWbvMV1zUzy+BdIUbyDqcq9lwAAAAATXg3JFHTEWV9CIBxvXT5Gw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '3-5988601-5988602 NNNN CT(0 0 0) RT(1559636646969 25) q(0 0 0 -1) r(3 3) U5',
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
    "version": 4,
    "createdAt": "2019-06-04T08:24:05.448Z",
    "createdBy": {
      "sys": {
        "id": "29B6zorz8plUCN1auThiVH",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2019-06-04T08:24:07.866Z",
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
      "widgetId": "singleLine"
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
  'Tue, 04 Jun 2019 08:24:08 GMT',
  'ETag',
  '"cd78d5c7a42cb0b541857bd7fa244401"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '01ecd12eb7fa9e024084aca1ecc3288a',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=32ha3v9MRXuzBPaCQuNE36cq9lwAAAAAQUIPAAAAAACavtB9XYYSr5LMK3DHh7wB; expires=Wed, 03 Jun 2020 07:03:17 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=3HpsV4mQViiruTCSYMlkBAAAAAAXwgOmvg77FS7+vbA7tUzX; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=Ai3Xaoyz3k01y+BdIUbyDqcq9lwAAAAAemR1OLm7GrXtZgaF4B0w5Q==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '4-7398881-7398884 NNNN CT(0 0 0) RT(1559636647252 23) q(0 0 0 -1) r(2 2) U5',
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
            "id": "4z7mp4ioxvmh"
          }
        },
        "id": "blogPost",
        "type": "ContentType",
        "createdAt": "2019-06-04T08:24:04.847Z",
        "updatedAt": "2019-06-04T08:24:07.413Z",
        "environment": {
          "sys": {
            "id": "env-integration",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 3,
        "publishedAt": "2019-06-04T08:24:07.413Z",
        "firstPublishedAt": "2019-06-04T08:24:05.323Z",
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
        "publishedCounter": 2,
        "version": 4,
        "publishedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "29B6zorz8plUCN1auThiVH"
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
  'Tue, 04 Jun 2019 08:24:08 GMT',
  'ETag',
  'W/"705b5c47f3c7ae0c23519eadfab399ee"',
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
  'a9d5a4f4419cf776d7b73618d13a5fa9',
  'Content-Length',
  '523',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=J2jRiC5MRyCTCzCSlDt/hqcq9lwAAAAAQUIPAAAAAAAokTCNWoNcHUJ836F97FQ1; expires=Wed, 03 Jun 2020 07:03:18 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=E8xQWa04qnFUdN+mYMlkBAAAAACCk4yBM8bq7lT2XLeURv9D; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=hsoMFkOIPFY7y+BdIUbyDqcq9lwAAAAAFPh7J7yYEew0Sa1cuywYGw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '1-3550857-3550859 NNNN CT(100 102 0) RT(1559636647456 24) q(0 0 2 -1) r(4 4) U5',
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
    "version": 4,
    "createdAt": "2019-06-04T08:24:05.448Z",
    "createdBy": {
      "sys": {
        "id": "29B6zorz8plUCN1auThiVH",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2019-06-04T08:24:07.866Z",
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
      "widgetId": "singleLine"
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
  'Tue, 04 Jun 2019 08:24:08 GMT',
  'ETag',
  '"cd78d5c7a42cb0b541857bd7fa244401"',
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
  '814c1a174db5447257db4a8e4f95ea72',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=mg+VPepeTRqPboRTziYrcKgq9lwAAAAAQUIPAAAAAACvGVK4BHtdTM4+OTgDpPNT; expires=Wed, 03 Jun 2020 07:03:17 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=9GFwQSElXFbTofGdYMlkBAAAAAB7QGcqAOayZT3BmWfuL2RY; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=3dtpMy86eko+y+BdIUbyDqgq9lwAAAAAJaxHrz6y1XZ0ZrL22GYxuQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '5-8673449-8673451 NNNN CT(0 0 0) RT(1559636647884 21) q(0 0 0 -1) r(1 1) U5',
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
        "createdAt":"2019-06-04T08:23:32Z",
        "updatedBy":{
          "sys":{
            "type":"Link",
            "linkType":"User",
            "id":"29B6zorz8plUCN1auThiVH"
          }
        },
        "updatedAt":"2019-06-04T08:23:32Z"
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
  'Tue, 04 Jun 2019 08:24:09 GMT',
  'ETag',
  'W/"43ade1f02d7df04f7668b3794fa9501d"',
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
  '5fbce04416ea36c49928e30654fc95f4',
  'X-Download-Options',
  'noopen',
  'X-Frame-Options',
  'ALLOWALL',
  'X-Permitted-Cross-Domain-Policies',
  'none',
  'X-XSS-Protection',
  '1; mode=block',
  'Content-Length',
  '423',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=/ZcqF4TpQD2brODghIcuHqgq9lwAAAAAQUIPAAAAAAAsrDlW0iH1ozm5cRYeknjh; expires=Wed, 03 Jun 2020 07:03:48 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=0rNBD5vli0M0A2eFYMlkBAAAAACTOgBxphWzh+DTl+BKa+no; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=WlT9STw8rCVEy+BdIUbyDqgq9lwAAAAAfljx/hbIANn0Gk+F/9k/1Q==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '7-7072034-7072035 NNNN CT(98 99 0) RT(1559636648138 21) q(0 0 2 -1) r(3 3) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/4z7mp4ioxvmh/environments/env-integration/content_types/blogPost', {"name":"Blog post","displayField":null,"fields":[{"id":"slug","name":"URL Slug","type":"Symbol","localized":false,"required":true,"validations":[],"disabled":false,"omitted":false}],"description":"super angry"})
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
    "createdAt": "2019-06-04T08:24:04.847Z",
    "updatedAt": "2019-06-04T08:24:09.437Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 3,
    "publishedAt": "2019-06-04T08:24:07.413Z",
    "firstPublishedAt": "2019-06-04T08:24:05.323Z",
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
    "publishedCounter": 2,
    "version": 5,
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "29B6zorz8plUCN1auThiVH"
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
  'Tue, 04 Jun 2019 08:24:09 GMT',
  'ETag',
  'W/"def73261554585fb36a1d08d58a2d838"',
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
  '1c30fa4d6e01ccef1b525ec9a9f6e20d',
  'Content-Length',
  '461',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=lGNuTblITGGm0fypEGdShagq9lwAAAAAQUIPAAAAAADMFWbgczMYJQLB3aiq27w5; expires=Wed, 03 Jun 2020 07:03:28 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=wMqeWIy/LE1vA7DXYMlkBAAAAABQLeoGy8QRGTCH88CcWnKH; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=hE7ZIVFjqD1Ky+BdIUbyDqgq9lwAAAAA3KMQ7kbOCcmSfh8ugYHonw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '12-2296917-2296918 NNNN CT(0 0 0) RT(1559636648530 20) q(0 0 0 -1) r(2 2) U5',
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
    "createdAt": "2019-06-04T08:24:04.847Z",
    "updatedAt": "2019-06-04T08:24:09.897Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 5,
    "publishedAt": "2019-06-04T08:24:09.897Z",
    "firstPublishedAt": "2019-06-04T08:24:05.323Z",
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
    "publishedCounter": 3,
    "version": 6,
    "publishedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "29B6zorz8plUCN1auThiVH"
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
  'Tue, 04 Jun 2019 08:24:10 GMT',
  'ETag',
  'W/"a52f1ed5a82b25af3fc997f4fec63605"',
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
  'b729c6e43e7286617bae183ae49f5345',
  'Content-Length',
  '457',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=BpPKJBmeQS+MP86YghKLhakq9lwAAAAAQUIPAAAAAABwS+PG0Vl2aL/BgNBjzZKG; expires=Wed, 03 Jun 2020 07:03:17 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=fAAhHKGz+izIdXhrYMlkBAAAAADldkooTHEoSku6H0Swwyr9; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=VY/SS5z22Vhcy+BdIUbyDqkq9lwAAAAA5wMPgKvCIqyjDqQQhTA8cg==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '4-7398904-7398906 NNNN CT(0 0 0) RT(1559636648827 28) q(0 0 0 -1) r(5 5) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/4z7mp4ioxvmh/environments/env-integration/content_types/blogPost/editor_interface', {"controls":[{"fieldId":"slug","widgetId":"slugEditor","settings":{"helpText":"This is the slug for the entry, it will be used for the URL"}}]})
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
        "id": "4z7mp4ioxvmh",
        "type": "Link",
        "linkType": "Space"
      }
    },
    "version": 6,
    "createdAt": "2019-06-04T08:24:05.448Z",
    "createdBy": {
      "sys": {
        "id": "29B6zorz8plUCN1auThiVH",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2019-06-04T08:24:10.327Z",
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
  'Tue, 04 Jun 2019 08:24:10 GMT',
  'ETag',
  'W/"9e6b7122b2e8e27beca943a9a8f68b1d"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '2863307db2dc1e804a2330898f321773',
  'Content-Length',
  '404',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=dib+O6uqQQqMB7rwpHNe0Kkq9lwAAAAAQUIPAAAAAADU5OCmUs13+Q/xr9O1vY5Y; expires=Wed, 03 Jun 2020 07:03:18 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=JRL1X9MKeSixlbITYMlkBAAAAADnV+uKQ+gAmAMaDsJ8+sva; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=jLpTYDTDijphy+BdIUbyDqkq9lwAAAAAjTQAMZu/iatLCggFYWwQFw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '1-3550865-3550866 NNNN CT(0 0 0) RT(1559636649424 20) q(0 0 0 -1) r(2 2) U5',
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
    "version": 6,
    "createdAt": "2019-06-04T08:24:05.448Z",
    "createdBy": {
      "sys": {
        "id": "29B6zorz8plUCN1auThiVH",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2019-06-04T08:24:10.327Z",
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
        "helpText": "This is the slug for the entry, it will be used for the URL"
      },
      "widgetId": "slugEditor"
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
  'Tue, 04 Jun 2019 08:24:10 GMT',
  'ETag',
  'W/"92fc9317befa2c55d7e7719f9100ec65"',
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
  '3cd166a3615fa4d424c62a5d943c4755',
  'Content-Length',
  '394',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=PPTOpA4eSz+Ys9mjrPU39Koq9lwAAAAAQUIPAAAAAAAFD4KPTfrRgB0urh9sUG8V; expires=Wed, 03 Jun 2020 07:03:48 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=Z8OSU17cIh28uk0yYMlkBAAAAAAlNPbsLmNCU3Dmjyn9RTOs; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=UKmYYK1xTzVoy+BdIUbyDqoq9lwAAAAAezsx8rPj4ici2hfjp1AyAQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '7-7072044-7072045 NNNN CT(102 102 0) RT(1559636649737 23) q(0 0 2 -1) r(4 4) U5',
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
    "version": 6,
    "createdAt": "2019-06-04T08:24:05.448Z",
    "createdBy": {
      "sys": {
        "id": "29B6zorz8plUCN1auThiVH",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2019-06-04T08:24:10.327Z",
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
        "helpText": "This is the slug for the entry, it will be used for the URL"
      },
      "widgetId": "slugEditor"
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
  'Tue, 04 Jun 2019 08:24:11 GMT',
  'ETag',
  'W/"92fc9317befa2c55d7e7719f9100ec65"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'f323c80c6b80cf74cf556e00bef5406e',
  'Content-Length',
  '394',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=l1A316lFR7uMpYDUeW1Daaoq9lwAAAAAQUIPAAAAAADTh4EzMngznzPq/sybQyOe; expires=Wed, 03 Jun 2020 07:03:48 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=UxQeVHNkB1Ktr14tYMlkBAAAAAD/ESYXbeR9L0Qqf9IvLeC5; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=wFXkTFL/DSdqy+BdIUbyDqoq9lwAAAAALziwWYN07ovbE8jhlBmAkQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '7-7072048-7072051 NNNN CT(0 0 0) RT(1559636650154 21) q(0 0 0 -1) r(2 2) U5',
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
  'Tue, 04 Jun 2019 08:24:11 GMT',
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
  'fbb820e8d102d206d908db3c7e5cf31a',
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
  'visid_incap_673446=ExcM1bpPQU2gvOv/u2Hy6aoq9lwAAAAAQUIPAAAAAACyz+Tqqtx5Xa927Np8vFw4; expires=Wed, 03 Jun 2020 07:03:17 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=SOuuCANnEX3flOkAYMlkBAAAAABDF3D0ofd/DytUrvzySEdT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=T9TQBk+BnUFxy+BdIUbyDqoq9lwAAAAAYftYyswbRremWxSqN/9K1Q==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '4-7398926-7398932 NNNN CT(0 0 0) RT(1559636650393 22) q(0 0 0 -1) r(2 2) U5',
  'X-CDN',
  'Incapsula' ]);
