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
  'Fri, 07 Sep 2018 15:18:52 GMT',
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
  '35582',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '10e0470ca5c19dbdde894caec5c0c82d',
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
  'visid_incap_673446=/i06CtVmSXevlTFrwQX6rtyWklsAAAAAQUIPAAAAAACZWF2Cll/jQpqky6O6JZP3; expires=Sat, 07 Sep 2019 09:11:05 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=Cw5zfVniuhs/xl6L6lKYhQAAAAA3kQeDu2OV2TVrLiKjhvvm; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=mFEcaMQH5SZgbjs+1y0oDNyWklsAAAAARJ1qGr5pRixow+JtEV6iFQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '5-3548059-3548067 NNNN CT(87 87 0) RT(1536333531681 59) q(0 0 2 -1) r(3 3) U5',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration', {"name":"env-integration"})
  .reply(201, {"name":"env-integration","sys":{"type":"Environment","id":"env-integration","version":1,"space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"status":{"sys":{"type":"Link","linkType":"Status","id":"queued"}},"createdBy":{"sys":{"type":"Link","linkType":"User","id":"33kZDXNajFNmbngiu5MvUa"}},"createdAt":"2018-09-07T15:18:52Z","updatedBy":{"sys":{"type":"Link","linkType":"User","id":"33kZDXNajFNmbngiu5MvUa"}},"updatedAt":"2018-09-07T15:18:52Z"}}, [ 'Accept-Ranges',
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
  'Fri, 07 Sep 2018 15:18:52 GMT',
  'ETag',
  'W/"c08fa77badb9999a211b8bd7f866e404"',
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
  '35581',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  'db3672cf26613cb89c2f8e7792dee770',
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
  'visid_incap_673446=C9aILhvfT2aOu5XouqWm+dyWklsAAAAAQUIPAAAAAACQIb9nXFetQkxOVP/+ij6x; expires=Sat, 07 Sep 2019 09:11:05 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=dlXZICBb53enLHEn6lKYhQAAAADqSTB/Qy1Xqx++DkrBN9Ac; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=IcwONC4MjWy8bzs+1y0oDNyWklsAAAAAGw/OGYeSWX4q20O5UYUFYA==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '12-5881630-5881640 NNNN CT(90 91 0) RT(1536333532273 32) q(0 0 1 -1) r(6 6) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration')
  .reply(200, {
  "name":"env-integration",
  "sys":{
    "type":"Environment",
    "id":"env-integration",
    "version":1,
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
        "id":"queued"
      }
    },
    "createdBy":{
      "sys":{
        "type":"Link",
        "linkType":"User",
        "id":"33kZDXNajFNmbngiu5MvUa"
      }
    },
    "createdAt":"2018-09-07T15:18:52Z",
    "updatedBy":{
      "sys":{
        "type":"Link",
        "linkType":"User",
        "id":"33kZDXNajFNmbngiu5MvUa"
      }
    },
    "updatedAt":"2018-09-07T15:18:52Z"
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
  'Fri, 07 Sep 2018 15:18:53 GMT',
  'ETag',
  'W/"c08fa77badb9999a211b8bd7f866e404"',
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
  '35580',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '1b4ddfda8050df8a750741f0d7acf089',
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
  'visid_incap_673446=IlmiHnVfRy2akB/ilY32Dd2WklsAAAAAQUIPAAAAAABn4B8jNxFkX/1bXYtq7jFX; expires=Sat, 07 Sep 2019 09:11:05 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=iyMiVyXJlFK/bsXQ6lKYhQAAAACG2fbUxsTaTGAy8iRRTqlm; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=+tmjB9F1L2YscDs+1y0oDN2WklsAAAAAS2H2w8CnHVJt0bMAYcDIfA==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '5-3548263-3548264 NNNN CT(0 0 0) RT(1536333533029 15) q(0 0 0 -1) r(2 2) U5',
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
    "createdAt":"2018-09-07T15:18:52Z",
    "updatedBy":{
      "sys":{
        "type":"Link",
        "linkType":"User",
        "id":"33kZDXNajFNmbngiu5MvUa"
      }
    },
    "updatedAt":"2018-09-07T15:18:54Z"
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
  'Fri, 07 Sep 2018 15:18:54 GMT',
  'ETag',
  'W/"d38d7bcce2b1988bdb68723e36c243cc"',
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
  '35579',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'a99fef6c3ac3b0195a55b7af48505bf7',
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
  'visid_incap_673446=2xI/GR+gS5uZzhzJcpGz3d6WklsAAAAAQUIPAAAAAACjkQh9I2K5eepcrVBT/2Se; expires=Sat, 07 Sep 2019 09:10:37 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=wtbYGpb0s2OtpnMt6lKYhQAAAAApdGTJK0KKwXD2lRuisWEI; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=7E3JcPx1Z3d4cjs+1y0oDN6WklsAAAAA1Vurz/ggTOcBZuhMuqAPcw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '14-7813104-7813119 NNNN CT(88 88 0) RT(1536333534262 25) q(0 0 2 -1) r(4 4) U5',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/content_types')
  .query({"sys.id":{"in":"dog"}})
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
  'Fri, 07 Sep 2018 15:18:55 GMT',
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
  '35578',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  '31ab15a6442466d15ee133717b7bc5f5',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=CWYc/CT3TWK1/gToj80cFd+WklsAAAAAQUIPAAAAAAArWSgd/RM4nebWxXSODUhD; expires=Sat, 07 Sep 2019 09:11:05 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=T7G0VFhkyTPEa1ns6lKYhQAAAADNEcMjjLz6aPQkH/xQi8hg; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=sBgafM5LCE87czs+1y0oDN+WklsAAAAAxwHxVxV4SSyB5srpmr3P2Q==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '13-7015050-7015062 NNNN CT(0 0 0) RT(1536333534755 30) q(0 0 0 -1) r(4 4) U5',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/locales')
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
        "createdAt":"2018-09-07T15:18:52Z",
        "updatedBy":{
          "sys":{
            "type":"Link",
            "linkType":"User",
            "id":"33kZDXNajFNmbngiu5MvUa"
          }
        },
        "updatedAt":"2018-09-07T15:18:52Z"
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
  'Fri, 07 Sep 2018 15:18:55 GMT',
  'ETag',
  'W/"e2aa390942bca26c3913575847123d35"',
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
  '35577',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'deacc61758caf8d6d45675eea37fe77f',
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
  'visid_incap_673446=j5ml/iahQeSOMCtMzcADVN+WklsAAAAAQUIPAAAAAADLDpPmeoFYyFnJX+WyhSI0; expires=Sat, 07 Sep 2019 09:11:05 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=iIyJP0av5wR7IgnV6lKYhQAAAACt4btsFgD4YVZ6iWTCIisf; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=lLi9KDnVbmSbczs+1y0oDN+WklsAAAAAvnKykTISYs0UvKqETz9gtA==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '13-7015197-7015201 NNNN CT(0 0 0) RT(1536333535158 21) q(0 0 0 -1) r(2 2) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/dog', {"name":"angry dog","fields":[{"id":"woofs","name":"woof woof","type":"Number","required":true}],"description":"super angry"})
  .reply(201, {"sys":{"space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"id":"dog","type":"ContentType","createdAt":"2018-09-07T15:18:55.812Z","updatedAt":"2018-09-07T15:18:55.812Z","environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}},"createdBy":{"sys":{"type":"Link","linkType":"User","id":"33kZDXNajFNmbngiu5MvUa"}},"updatedBy":{"sys":{"type":"Link","linkType":"User","id":"33kZDXNajFNmbngiu5MvUa"}},"version":1},"displayField":null,"name":"angry dog","description":"super angry","fields":[{"id":"woofs","name":"woof woof","type":"Number","localized":false,"required":true,"validations":[],"disabled":false,"omitted":false}]}, [ 'Access-Control-Allow-Headers',
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
  'Fri, 07 Sep 2018 15:18:55 GMT',
  'ETag',
  '"a88e544049686e3a8d5271ade3de128b"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35576',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  'f19d567cd6b8ea1902e6ef7f6aa8e708',
  'Content-Length',
  '1024',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=w5JX6gjBSZuGI2b1E4KiV9+WklsAAAAAQUIPAAAAAABQfYuD6HMeOVcV7LR2UWjB; expires=Sat, 07 Sep 2019 09:11:05 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=gEnEYoSk5w+VjEaA6lKYhQAAAABIb2JHHHICrhqHphcpz7as; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=QXjqIpK1ME1wdDs+1y0oDN+WklsAAAAA0xZa0c+QLlr3E6GHwUeCXQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '4-2260304-2260307 NNNN CT(0 0 0) RT(1536333535420 25) q(0 0 0 -1) r(5 5) U5',
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
    "createdAt": "2018-09-07T15:18:55.812Z",
    "updatedAt": "2018-09-07T15:18:56.348Z",
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
    "firstPublishedAt": "2018-09-07T15:18:56.348Z",
    "publishedCounter": 1,
    "publishedAt": "2018-09-07T15:18:56.348Z",
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
  'Fri, 07 Sep 2018 15:18:56 GMT',
  'ETag',
  'W/"42e72b0ad9cf8d9d2cbb8bea57abad86"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35575',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '0a0f28114dd784c5ffc070b1ee301a05',
  'Content-Length',
  '443',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=l+6QAudXTjejzAUEBycmG+CWklsAAAAAQUIPAAAAAAAuZLaH2ZF8TtxyP4PmbVY7; expires=Sat, 07 Sep 2019 09:11:05 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=y4VLI4hUknWPhpAD6lKYhQAAAADse9rE4qHi6M3KJO85zgUp; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=4eyTTYJF/ETPdTs+1y0oDOCWklsAAAAAMbx9FSps+RutEx2jNTwVoQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '7-2429405-2429412 NNNN CT(0 0 0) RT(1536333535971 20) q(0 0 0 -1) r(8 8) U5',
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
    "createdAt": "2018-09-07T15:18:55.812Z",
    "updatedAt": "2018-09-07T15:18:56.348Z",
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
    "firstPublishedAt": "2018-09-07T15:18:56.348Z",
    "publishedAt": "2018-09-07T15:18:56.348Z"
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
  'Fri, 07 Sep 2018 15:18:57 GMT',
  'ETag',
  'W/"09b855c75cff10fa5dbe92866c936350"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35574',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  '162bf6f8cc0e5046eb4bf93f15faf903',
  'Content-Length',
  '443',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=qKshBmBYTLOVN4XsB4SpiuGWklsAAAAAQUIPAAAAAAA0VGyb1V3FHNIxlIJep+LS; expires=Sat, 07 Sep 2019 09:11:05 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=Jp0QL751V3Qm4lYC6lKYhQAAAAC0mecmr6OrD5dpP95Uke5y; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=KQB2J/wURjVCdjs+1y0oDOGWklsAAAAAz7dW1Y0xn7p96O/dboBY3g==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '6-1521847-1521852 NNNN CT(0 0 0) RT(1536333536854 25) q(0 0 0 -1) r(2 2) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/content_types')
  .query({"sys.id":{"in":"dog"}})
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
        "createdAt": "2018-09-07T15:18:55.812Z",
        "updatedAt": "2018-09-07T15:18:56.348Z",
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
        "firstPublishedAt": "2018-09-07T15:18:56.348Z",
        "publishedAt": "2018-09-07T15:18:56.348Z"
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
  'Fri, 07 Sep 2018 15:19:02 GMT',
  'ETag',
  'W/"6e0b18050a23f0591bb7455b138a9a76"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35573',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'f21a1c80232e94a735454468a344329c',
  'Content-Length',
  '510',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=gHn95xhkQKmPk5IIzM9kGeaWklsAAAAAQUIPAAAAAAA26G1czGvpPu8vGxm/97cN; expires=Sat, 07 Sep 2019 09:11:05 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=wFZ3YVEFNm/D/lyA6lKYhQAAAAAljgkyXhqWDwvW/VHbptFE; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=lNtCWiqdHGtLfjs+1y0oDOaWklsAAAAAIjfZ6EAZSw9jc8Jc2WUqYw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '5-3549827-3549836 NNNN CT(0 0 0) RT(1536333542093 30) q(0 0 0 -1) r(2 2) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/locales')
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
        "createdAt":"2018-09-07T15:18:52Z",
        "updatedBy":{
          "sys":{
            "type":"Link",
            "linkType":"User",
            "id":"33kZDXNajFNmbngiu5MvUa"
          }
        },
        "updatedAt":"2018-09-07T15:18:52Z"
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
  'Fri, 07 Sep 2018 15:19:02 GMT',
  'ETag',
  'W/"e2aa390942bca26c3913575847123d35"',
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
  '35572',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  '98cba335570898d598cf386595570706',
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
  'visid_incap_673446=iSXgof1JT9Km/eMcge/gvOaWklsAAAAAQUIPAAAAAAB/lZn9rABA2TqvN1qydfvJ; expires=Sat, 07 Sep 2019 09:11:05 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=beJ9KiCvgTepH7Tj6lKYhQAAAADOAp+g4qlaBht6meH4iQne; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=ua88UD6lDFKsfjs+1y0oDOaWklsAAAAAb70O8ezU8Q1t/81tOd+zQQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '13-7017409-7017417 NNNN CT(0 0 0) RT(1536333542356 13) q(0 0 0 -1) r(2 2) U5',
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
    "createdAt": "2018-09-07T15:18:55.812Z",
    "updatedAt": "2018-09-07T15:19:02.777Z",
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
    "firstPublishedAt": "2018-09-07T15:18:56.348Z",
    "publishedAt": "2018-09-07T15:18:56.348Z"
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
  'Fri, 07 Sep 2018 15:19:02 GMT',
  'ETag',
  'W/"f967ba1234f6ec723ca20113b1c4b7eb"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35571',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '7',
  'X-Contentful-Request-Id',
  'fb5087d357aaa57a0eae284e01094c58',
  'Content-Length',
  '450',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=eu+4NPVCSXyxSHfkJFK7J+aWklsAAAAAQUIPAAAAAABqNfN1ynIqiB2KqKMYCF4R; expires=Sat, 07 Sep 2019 09:11:05 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=MLYiVryGImG2m7xO6lKYhQAAAADN3IXqX2WT21Jdza3ADNFD; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=mldgVhk1CBkBfzs+1y0oDOaWklsAAAAAqyBSQnsSVaUAVyJ/paiJ1w==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '13-7017473-7017479 NNNN CT(0 0 0) RT(1536333542580 27) q(0 0 0 -1) r(1 1) U5',
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
    "createdAt": "2018-09-07T15:18:55.812Z",
    "updatedAt": "2018-09-07T15:19:03.190Z",
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
    "firstPublishedAt": "2018-09-07T15:18:56.348Z",
    "publishedAt": "2018-09-07T15:19:03.190Z"
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
  'Fri, 07 Sep 2018 15:19:03 GMT',
  'ETag',
  'W/"7a84a14d941e522445c12d0254156994"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35570',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'bbd87ee2d9af1b6ef9f84bed6b664eca',
  'Content-Length',
  '453',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=oE+7GcMqS76hWdJwdcdMd+eWklsAAAAAQUIPAAAAAACPyGP1O4xQm0MR6IY0wCLw; expires=Sat, 07 Sep 2019 09:11:05 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=VE4aY4goBB1TUko36lKYhQAAAADLR2I2Hx6YQ63jQh9M/Gax; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=0RlaFAJS4SDEfzs+1y0oDOeWklsAAAAAeOksOH5cUMNVhGp9+40blA==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '12-5883900-5883905 NNNN CT(87 88 0) RT(1536333542832 29) q(0 0 2 -1) r(5 5) U5',
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
    "createdAt": "2018-09-07T15:18:55.812Z",
    "updatedAt": "2018-09-07T15:19:03.745Z",
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
    "firstPublishedAt": "2018-09-07T15:18:56.348Z",
    "publishedAt": "2018-09-07T15:19:03.190Z"
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
  'Fri, 07 Sep 2018 15:19:03 GMT',
  'ETag',
  'W/"e953fc8ae544b57f5bea86fb13d32940"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35569',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  'bd1e80bb25e4127687e826630ab15b54',
  'Content-Length',
  '373',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=FFpTJ2CEQpKzIafFjd7foueWklsAAAAAQUIPAAAAAADNsEAn1+jGu3zwwIeOFLXT; expires=Sat, 07 Sep 2019 09:10:38 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=Z2meJ32MRn1RPPyx6lKYhQAAAAAD6Eh5QN3jxH3xGQo88d4n; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=OYcbY+Y7shZtgDs+1y0oDOeWklsAAAAAbrQeJLETLTIkyK7Dn2FaiA==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '9-1577779-1577780 NNNN CT(91 91 0) RT(1536333543387 25) q(0 0 1 -1) r(3 3) U5',
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
    "createdAt": "2018-09-07T15:18:55.812Z",
    "updatedAt": "2018-09-07T15:19:03.994Z",
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
    "firstPublishedAt": "2018-09-07T15:18:56.348Z",
    "publishedAt": "2018-09-07T15:19:03.994Z"
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
  'Fri, 07 Sep 2018 15:19:06 GMT',
  'ETag',
  'W/"ea540291b81b8251e3b982c98c49c92a"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35568',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '7',
  'X-Contentful-Request-Id',
  'ea14b63d9e817fc8376d7a06b8fd9aa6',
  'Content-Length',
  '371',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=YCTDP4tJTD2uplir5ugRjuqWklsAAAAAQUIPAAAAAADcOu24VJiR9TJBeJCUCg1W; expires=Sat, 07 Sep 2019 09:11:05 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=atMLQvFXLQaOjtMA6lKYhQAAAADGVTYrStDsxJBw0B/w9rAt; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=pxDzFtJnTlPjhDs+1y0oDOqWklsAAAAASyjoNmWIBj2d5IDXK1FCtg==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '4-2261140-2261143 NNNN CT(0 0 0) RT(1536333543826 14) q(0 0 0 -1) r(28 28) U5',
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
    "createdAt": "2018-09-07T15:18:55.812Z",
    "updatedAt": "2018-09-07T15:19:03.994Z",
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
    "firstPublishedAt": "2018-09-07T15:18:56.348Z",
    "publishedAt": "2018-09-07T15:19:03.994Z"
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
  'Fri, 07 Sep 2018 15:19:06 GMT',
  'ETag',
  'W/"ea540291b81b8251e3b982c98c49c92a"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35567',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'acb2eef2b63a4687e349f1f3db7d39ee',
  'Content-Length',
  '371',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=LofTDg+ASSmYfywguu91FOqWklsAAAAAQUIPAAAAAAARLjNlPngaYXgMBFl/vEvn; expires=Sat, 07 Sep 2019 09:11:05 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=CbQgFvKbZBrl2W1P6lKYhQAAAAD5hn9kIbXnLJYMWrkgfonu; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=GBI1Ww7Pfh87hTs+1y0oDOqWklsAAAAAco+bfuLk01SDaLZdJKmBkw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '7-2430715-2430720 NNNN CT(0 0 0) RT(1536333546732 23) q(0 0 0 -1) r(1 1) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/content_types')
  .query({"sys.id":{"in":"dog"}})
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
        "createdAt": "2018-09-07T15:18:55.812Z",
        "updatedAt": "2018-09-07T15:19:03.994Z",
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
        "firstPublishedAt": "2018-09-07T15:18:56.348Z",
        "publishedAt": "2018-09-07T15:19:03.994Z"
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
  'Fri, 07 Sep 2018 15:19:07 GMT',
  'ETag',
  'W/"0092511fe342b2911c2af699645b62cd"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35566',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'f6d7b610f41673fbbeaaec19a686b534',
  'Content-Length',
  '435',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=vf7SXcljQSWV7UwotbyO6uuWklsAAAAAQUIPAAAAAACkBfJaEAkUg4yzMRuFPJzt; expires=Sat, 07 Sep 2019 09:11:05 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=hf9PfgJI5g+8hQp76lKYhQAAAAASn2jdb1V878ji1X1AzRUP; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=l5IGSSZkIAilhTs+1y0oDOuWklsAAAAApkC9zVH4BZTfoZ5cLKlUxA==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '1-500388-500389 NNNN CT(0 0 0) RT(1536333546937 19) q(0 0 0 -1) r(3 3) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/locales')
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
        "createdAt":"2018-09-07T15:18:52Z",
        "updatedBy":{
          "sys":{
            "type":"Link",
            "linkType":"User",
            "id":"33kZDXNajFNmbngiu5MvUa"
          }
        },
        "updatedAt":"2018-09-07T15:18:52Z"
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
  'Fri, 07 Sep 2018 15:19:07 GMT',
  'ETag',
  'W/"e2aa390942bca26c3913575847123d35"',
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
  '35565',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  'd34a789282a4ba3cc6da5f57980cbcf9',
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
  'visid_incap_673446=XxXlUQ9tQI2sZhd2ZtyQsuuWklsAAAAAQUIPAAAAAAAO8iWTbQH2VNEQUm4qb8bv; expires=Sat, 07 Sep 2019 09:10:37 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=C3CWT0B7o0xGmsPQ6lKYhQAAAAC+MIRh15fLSBjeI2C0nLf2; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=MGpFVc3Ea1X8hTs+1y0oDOuWklsAAAAAD/eYbJ8k82i62AYMqc+Lnw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '11-4815186-4815190 NNNN CT(0 0 0) RT(1536333547288 26) q(0 0 0 -1) r(1 1) U5',
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
    "createdAt": "2018-09-07T15:18:55.812Z",
    "updatedAt": "2018-09-07T15:19:07.642Z",
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
    "firstPublishedAt": "2018-09-07T15:18:56.348Z",
    "publishedAt": "2018-09-07T15:19:03.994Z"
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
  'Fri, 07 Sep 2018 15:19:07 GMT',
  'ETag',
  'W/"35fb99911f98a438cf05f4d7a9db8414"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35564',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '7',
  'X-Contentful-Request-Id',
  '5cf9f363f1a857693debf9775abc6746',
  'Content-Length',
  '496',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=mRisJHaPQ7qutWrueBpmz+uWklsAAAAAQUIPAAAAAABCWq/Kp5twhsnGmVTprNvl; expires=Sat, 07 Sep 2019 09:10:37 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=vNnEWtWvWn5X7BRU6lKYhQAAAADd0Q8f1N2lTMDHHeHMkDJT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=4CPcO7Hk+ixzhjs+1y0oDOuWklsAAAAAl0xMFRsQjpbbQbjnklOHRg==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '11-4815222-4815229 NNNN CT(0 0 0) RT(1536333547475 21) q(0 0 0 -1) r(2 2) U5',
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
    "createdAt": "2018-09-07T15:18:55.812Z",
    "updatedAt": "2018-09-07T15:19:07.846Z",
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
    "firstPublishedAt": "2018-09-07T15:18:56.348Z",
    "publishedAt": "2018-09-07T15:19:07.846Z"
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
  'Fri, 07 Sep 2018 15:19:08 GMT',
  'ETag',
  'W/"2cfc897a557db372abf0fa0d2c4dc5e6"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35563',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '6',
  'X-Contentful-Request-Id',
  '49e5013150952c486c5c0f2b2e6d0bc1',
  'Content-Length',
  '492',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=aQDMosWZTeWrlZTP3CatIuyWklsAAAAAQUIPAAAAAACjefCYj5M/1rxbpj5f/pYL; expires=Sat, 07 Sep 2019 09:11:05 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=hfEVdZKhSHea7koz6lKYhQAAAAAsjKSm5YXc+vlq/SfLrKX+; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=diViKJTfJGfrhjs+1y0oDOyWklsAAAAAAs9cLNMXA9K02xnwjhIJVQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '4-2261556-2261561 NNNN CT(0 0 0) RT(1536333547691 19) q(0 0 0 -1) r(3 3) U5',
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
    "createdAt": "2018-09-07T15:18:55.812Z",
    "updatedAt": "2018-09-07T15:19:07.846Z",
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
    "firstPublishedAt": "2018-09-07T15:18:56.348Z",
    "publishedAt": "2018-09-07T15:19:07.846Z"
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
  'Fri, 07 Sep 2018 15:19:08 GMT',
  'ETag',
  'W/"2cfc897a557db372abf0fa0d2c4dc5e6"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35562',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '917163f18c90840df3e865cf7534b3fa',
  'Content-Length',
  '492',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=gwJ49bS3RomqENtHUI1xg+yWklsAAAAAQUIPAAAAAAAHCKqdjsnKU6u0/valrJLC; expires=Sat, 07 Sep 2019 09:11:05 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=MLj4MF8ES1A0EVOu6lKYhQAAAACOOU/2vEls+CZYNGr0QxJC; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=K0BYCsfctiRehzs+1y0oDOyWklsAAAAA+08z9+FHqhTrcKugU6pwRw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '3-1939485-1939489 NNNN CT(0 0 0) RT(1536333548045 43) q(0 0 0 -1) r(2 2) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/content_types')
  .query({"sys.id":{"in":"dog"}})
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
        "createdAt": "2018-09-07T15:18:55.812Z",
        "updatedAt": "2018-09-07T15:19:07.846Z",
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
        "firstPublishedAt": "2018-09-07T15:18:56.348Z",
        "publishedAt": "2018-09-07T15:19:07.846Z"
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
  'Fri, 07 Sep 2018 15:19:08 GMT',
  'ETag',
  'W/"d7bf1b388b2cba1434f9baa87da74c9e"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35561',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  '4a22852408c5d11e65f9e45459b891f4',
  'Content-Length',
  '557',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=g787tffVTDmgoB7bVMr7jeyWklsAAAAAQUIPAAAAAAC9ljLrmss24S8ySBbXVIQE; expires=Sat, 07 Sep 2019 09:11:05 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=64vrIm2D81SQ/KHe6lKYhQAAAABIrHAAR+LoV50q1jYyfiUN; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=2nEFBhRreEsQiDs+1y0oDOyWklsAAAAA6zf7AePkqALUm34XiIun4w==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '13-7019091-7019107 NNNN CT(93 87 0) RT(1536333548309 27) q(0 0 2 -1) r(3 3) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/locales')
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
        "createdAt":"2018-09-07T15:18:52Z",
        "updatedBy":{
          "sys":{
            "type":"Link",
            "linkType":"User",
            "id":"33kZDXNajFNmbngiu5MvUa"
          }
        },
        "updatedAt":"2018-09-07T15:18:52Z"
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
  'Fri, 07 Sep 2018 15:19:08 GMT',
  'ETag',
  'W/"e2aa390942bca26c3913575847123d35"',
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
  '35560',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '7',
  'X-Contentful-Request-Id',
  'd97775dad9dbcad29d889d9701f0c675',
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
  'visid_incap_673446=6KZxrDqRR0+wuzhTAg7j8uyWklsAAAAAQUIPAAAAAAA42xMFZKt4tpbG/aUq/O+h; expires=Sat, 07 Sep 2019 09:11:05 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=PiuqbjHyBAxoJkXs6lKYhQAAAACMXjZ6vlK8K4ImKHKrRLEQ; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=u4uKTAOXPBVmiDs+1y0oDOyWklsAAAAAVlped3MTH4wX2PSMz2PSDA==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '4-2261709-2261712 NNNN CT(0 0 0) RT(1536333548708 23) q(0 0 0 -1) r(1 1) U5',
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
    "createdAt": "2018-09-07T15:18:55.812Z",
    "updatedAt": "2018-09-07T15:19:09.047Z",
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
    "firstPublishedAt": "2018-09-07T15:18:56.348Z",
    "publishedAt": "2018-09-07T15:19:07.846Z"
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
  'Fri, 07 Sep 2018 15:19:09 GMT',
  'ETag',
  'W/"13d788bade8e2196afa1aeb3f3e45995"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35559',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '1570cccf7e6c52c736317008208357d6',
  'Content-Length',
  '502',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=tfRB+pkLQoycIKFtEDxmZ+2WklsAAAAAQUIPAAAAAAAycAdIQkHkwburY2xbIDku; expires=Sat, 07 Sep 2019 09:11:05 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=J/avWnhB/Vm/vu3a6lKYhQAAAACDRYZ4yUuUAqKXcHswvQgU; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=8iJAZsTQYQbGiDs+1y0oDO2WklsAAAAA2UyJdISTSoBwVbikYrCQzg==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '7-2431003-2431008 NNNN CT(0 0 0) RT(1536333548878 16) q(0 0 0 -1) r(2 2) U5',
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
    "createdAt": "2018-09-07T15:18:55.812Z",
    "updatedAt": "2018-09-07T15:19:09.381Z",
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
    "firstPublishedAt": "2018-09-07T15:18:56.348Z",
    "publishedAt": "2018-09-07T15:19:09.381Z"
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
  'Fri, 07 Sep 2018 15:19:10 GMT',
  'ETag',
  'W/"06d01d7ffbff8522f581e115fb5c5b48"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35558',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  'e8d8558824b0493ba8ef04cc4aae9a1e',
  'Content-Length',
  '497',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=nMdRlgqjQGmX/tc8REH+ye6WklsAAAAAQUIPAAAAAADjm1lr9GfWhZm6BVqqFOM9; expires=Sat, 07 Sep 2019 09:11:05 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=On3mHqrWTVZUVK3V6lKYhQAAAADQM6AGUSYR+fpK10miF5vP; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=VKcBCPVKjl7Nijs+1y0oDO6WklsAAAAAiPa9gN3VokpplIKugyhZqA==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '13-7019295-7019305 NNNN CT(0 0 0) RT(1536333549110 26) q(0 0 0 -1) r(12 12) U5',
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
    "createdAt": "2018-09-07T15:18:55.812Z",
    "updatedAt": "2018-09-07T15:19:10.581Z",
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
    "firstPublishedAt": "2018-09-07T15:18:56.348Z",
    "publishedAt": "2018-09-07T15:19:09.381Z"
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
  'Fri, 07 Sep 2018 15:19:10 GMT',
  'ETag',
  'W/"10f01d0bef36e4bde42768fad67cd304"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35557',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '2306663d0735d169d6a476d6a76955bd',
  'Content-Length',
  '493',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=s89Kbp8vRQiq76OmIXLdzu6WklsAAAAAQUIPAAAAAABQy3mo8qTADDHvZb2ulz/a; expires=Sat, 07 Sep 2019 09:11:05 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=uHyvc1OaY1GCUArs6lKYhQAAAABmuREARZ3ymBtIFOQd/LLf; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=/IQFPdTiPkFyizs+1y0oDO6WklsAAAAAFYOjdX93Od0NWKOEOgqC9Q==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '2-995918-995923 NNNN CT(0 0 0) RT(1536333550424 22) q(0 0 0 -1) r(2 2) U5',
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
    "createdAt": "2018-09-07T15:18:55.812Z",
    "updatedAt": "2018-09-07T15:19:11.041Z",
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
    "firstPublishedAt": "2018-09-07T15:18:56.348Z",
    "publishedAt": "2018-09-07T15:19:11.041Z"
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
  'Fri, 07 Sep 2018 15:19:11 GMT',
  'ETag',
  'W/"6e09495b12c415747016101802e6f218"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35556',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'e9b345e6eab00768501f7942c9ef2d67',
  'Content-Length',
  '490',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=A200oRueRZ2qUwHVfhJ2ZO+WklsAAAAAQUIPAAAAAACkNbRLU7zy0sCOT0v0Pbhj; expires=Sat, 07 Sep 2019 09:11:05 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=CBW7QoyBOlcD9VP06lKYhQAAAAAWpaOagi4vxGW32Nhia6Pr; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=4jhhdpBbUjNJjDs+1y0oDO+WklsAAAAAhRg5jtfLtktOsML9873Hrw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '13-7019747-7019750 NNNN CT(91 92 0) RT(1536333550694 20) q(0 0 1 -1) r(4 4) U5',
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
    "createdAt": "2018-09-07T15:18:55.812Z",
    "updatedAt": "2018-09-07T15:19:11.041Z",
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
    "firstPublishedAt": "2018-09-07T15:18:56.348Z",
    "publishedAt": "2018-09-07T15:19:11.041Z"
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
  'Fri, 07 Sep 2018 15:19:11 GMT',
  'ETag',
  'W/"6e09495b12c415747016101802e6f218"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35555',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  '7a7fecc0258af9daccd6d6e762f67d50',
  'Content-Length',
  '490',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=3F8NIw15Szydth+64PYoi++WklsAAAAAQUIPAAAAAADRv1HOL0sXF/DB9l0/ZL9J; expires=Sat, 07 Sep 2019 09:11:05 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=O8bKAMdseXJlKmnj6lKYhQAAAABp3yqm1z5F5yi1KSxF2FeC; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=6xVLZ1E8mVOejDs+1y0oDO+WklsAAAAAv70s15P1kIka6DSE4j7hkw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '7-2431277-2431280 NNNN CT(0 0 0) RT(1536333551230 19) q(0 0 0 -1) r(1 1) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/content_types')
  .query({"sys.id":{"in":"dog"}})
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
        "createdAt": "2018-09-07T15:18:55.812Z",
        "updatedAt": "2018-09-07T15:19:11.041Z",
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
        "firstPublishedAt": "2018-09-07T15:18:56.348Z",
        "publishedAt": "2018-09-07T15:19:11.041Z"
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
  'Fri, 07 Sep 2018 15:19:11 GMT',
  'ETag',
  'W/"9bd9dbfba880550f3dc7079100e69d97"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35554',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '7',
  'X-Contentful-Request-Id',
  '96d482b11384b53c904323b2298fc326',
  'Content-Length',
  '554',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=D/qKgZCGT9y9ezJti0xP2O+WklsAAAAAQUIPAAAAAACnSiFvL59lAxROHDEw8IkH; expires=Sat, 07 Sep 2019 09:11:05 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=4me2SwSQP38LTp3K6lKYhQAAAACIkzzeLYO7a/IHGsEJ+LCN; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=Ofd9QIsb3UJGjTs+1y0oDO+WklsAAAAAHz51e4RMub9/lCibppcJJQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '7-2431298-2431301 NNNN CT(90 91 0) RT(1536333551418 21) q(0 0 2 -1) r(3 3) U5',
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
  'Fri, 07 Sep 2018 15:19:12 GMT',
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
  '35553',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '2619d0bf45b48afcbbc2f9952cd0d140',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=g+jfsmnFQFywTSIXj6gTgfCWklsAAAAAQUIPAAAAAAAZrG1xZ37Rs8yFZm4MvR8H; expires=Sat, 07 Sep 2019 09:10:37 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=ydG/Mpa2dRZqTjgY6lKYhQAAAAD+n1EVTpKer+gWMBR9UpqP; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=OGeqcX4oFRzsjTs+1y0oDPCWklsAAAAAmzMcmYPgueLxg1FmQVixHQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '14-7818150-7818167 NNNN CT(89 90 0) RT(1536333551844 31) q(0 0 2 -1) r(3 3) U5',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/locales')
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
        "createdAt":"2018-09-07T15:18:52Z",
        "updatedBy":{
          "sys":{
            "type":"Link",
            "linkType":"User",
            "id":"33kZDXNajFNmbngiu5MvUa"
          }
        },
        "updatedAt":"2018-09-07T15:18:52Z"
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
  'Fri, 07 Sep 2018 15:19:12 GMT',
  'ETag',
  'W/"e2aa390942bca26c3913575847123d35"',
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
  '35552',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  '4e122f93adf42fe792899c70221f13f9',
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
  'visid_incap_673446=6h8xULmeR36UuNQSVX2fcfCWklsAAAAAQUIPAAAAAAA833YYjTU+GWhY0yMhrj0W; expires=Sat, 07 Sep 2019 09:11:05 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=laASQe1GkUzRRSrS6lKYhQAAAAAQDFL/zxUCYWud/EQWqVOG; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=4fPkAYtgcTxAjjs+1y0oDPCWklsAAAAAlZswpYOrSxZDu6C1zryuAA==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '13-7020127-7020135 NNNN CT(0 0 0) RT(1536333552248 25) q(0 0 0 -1) r(1 1) U5',
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
    "createdAt": "2018-09-07T15:18:55.812Z",
    "updatedAt": "2018-09-07T15:19:12.582Z",
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
    "firstPublishedAt": "2018-09-07T15:18:56.348Z"
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
  'Fri, 07 Sep 2018 15:19:12 GMT',
  'ETag',
  'W/"6db4bc68e4231438c3e0199530d5a3f4"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35551',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '7',
  'X-Contentful-Request-Id',
  '0a200958d274f3f7e150f1cc30caf961',
  'Content-Length',
  '467',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=9s2FFPkDT/a3QSKuFcpS7PCWklsAAAAAQUIPAAAAAABlmeAPY82mF4a1+aR3/cxK; expires=Sat, 07 Sep 2019 09:10:38 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=GtZNXgn1KT8eiVQ86lKYhQAAAAB5bTX6M7AduNXpXf5OrIWU; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=1PSVGP0KkDvhjjs+1y0oDPCWklsAAAAAMkeNoycTVi5RSvGKDI8J0w==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '9-1578418-1578421 NNNN CT(0 0 0) RT(1536333552424 21) q(0 0 0 -1) r(3 3) U5',
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
  'Fri, 07 Sep 2018 15:19:13 GMT',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35550',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '6',
  'X-Contentful-Request-Id',
  '951e42f7873d81972c550b01fcc87b36',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=IdpicWtwSz+VG1dVAxU5PvGWklsAAAAAQUIPAAAAAAAdt5Tgynl2/doK4ziI2E1V; expires=Sat, 07 Sep 2019 09:10:37 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=H6NhLuceGXPym2O+6lKYhQAAAABrPHElWjyH8YlDCryhLjcG; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=Ap7mQFGF7XyVjzs+1y0oDPGWklsAAAAA5CCNw4jfId2CbVBG/to29w==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '11-4816393-4816398 NNNN CT(0 0 0) RT(1536333552834 28) q(0 0 0 -1) r(3 3) U5',
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
  "requestId": "48beeced06f17c28780c3232fb9f685a"
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
  'Fri, 07 Sep 2018 15:19:13 GMT',
  'ETag',
  '"4081da99ff4de56ce7f3bf91eaae6c1f"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35549',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '48beeced06f17c28780c3232fb9f685a',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=O0u8LG70S7exRSkl9cC5ufGWklsAAAAAQUIPAAAAAACkfxMPTIIbxyxWtzvcUM8C; expires=Sat, 07 Sep 2019 09:10:37 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=hvTyGvcY8z8Eo75x6lKYhQAAAAAY4UQfPM4viJlB6aPnqAHO; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=NHNIUnEQ2xHzjzs+1y0oDPGWklsAAAAA939t5e2Aeu0jf33ZyKrUPg==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '11-4816459-4816463 NNNN CT(0 0 0) RT(1536333553215 22) q(0 0 0 -1) r(1 1) U5',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/content_types')
  .query({"sys.id":{"in":"dieatary-food"}})
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
  'Fri, 07 Sep 2018 15:19:13 GMT',
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
  '35548',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  '5ee09e599a21fbd54b6b94612fcc3808',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=GjYO9hwrTka4XsmrVwV14fGWklsAAAAAQUIPAAAAAADbD/+70QtKCOLuTOo8wQpE; expires=Sat, 07 Sep 2019 09:11:05 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=C3DAHfWIjFDuVtqa6lKYhQAAAADG1ZkIeSrh4UiWlnSChb5A; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=Vw1TfTglUA9YkDs+1y0oDPGWklsAAAAAl5uBNxLTgZow+Oq9DVTgqQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '1-500556-500558 NNNN CT(0 0 0) RT(1536333553494 21) q(0 0 0 -1) r(1 1) U5',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/locales')
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
        "createdAt":"2018-09-07T15:18:52Z",
        "updatedBy":{
          "sys":{
            "type":"Link",
            "linkType":"User",
            "id":"33kZDXNajFNmbngiu5MvUa"
          }
        },
        "updatedAt":"2018-09-07T15:18:52Z"
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
  'Fri, 07 Sep 2018 15:19:13 GMT',
  'ETag',
  'W/"e2aa390942bca26c3913575847123d35"',
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
  '35547',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '7',
  'X-Contentful-Request-Id',
  '2b2b0a4a9910c2f02e2f65cac43a4c79',
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
  'visid_incap_673446=8Aa9kK+ERTuyDwWJILGhs/GWklsAAAAAQUIPAAAAAACPmkQ8k3s1lpKPdpCleLWD; expires=Sat, 07 Sep 2019 09:11:05 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=2TmnOjoWgz8kdOsZ6lKYhQAAAAAlOiIKj2bgeKw8mvt2hhWH; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=r4rHLDP31QXYkDs+1y0oDPGWklsAAAAAja+UvClhX5W3VXdkRWDC1g==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '5-3551700-3551709 NNNN CT(0 0 0) RT(1536333553711 27) q(0 0 0 -1) r(2 2) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/dieatary-food', {"name":"Dieatary Food","fields":[{"id":"name","type":"Symbol","name":"name of the food","validations":[{"unique":true}]},{"id":"calories","type":"Link","linkType":"Asset","name":"amount of calories the food contains","validations":[{"assetImageDimensions":{"width":{"min":1199,"max":null},"height":{"min":null,"max":null}}}]}],"description":"Food with up to 500 calories"})
  .reply(201, {"sys":{"space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"id":"dieatary-food","type":"ContentType","createdAt":"2018-09-07T15:19:14.169Z","updatedAt":"2018-09-07T15:19:14.169Z","environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}},"createdBy":{"sys":{"type":"Link","linkType":"User","id":"33kZDXNajFNmbngiu5MvUa"}},"updatedBy":{"sys":{"type":"Link","linkType":"User","id":"33kZDXNajFNmbngiu5MvUa"}},"version":1},"displayField":null,"name":"Dieatary Food","description":"Food with up to 500 calories","fields":[{"id":"name","name":"name of the food","type":"Symbol","localized":false,"required":false,"validations":[{"unique":true}],"disabled":false,"omitted":false},{"id":"calories","name":"amount of calories the food contains","type":"Link","localized":false,"required":false,"validations":[{"assetImageDimensions":{"width":{"min":1199,"max":null},"height":{"min":null,"max":null}}}],"disabled":false,"omitted":false,"linkType":"Asset"}]}, [ 'Access-Control-Allow-Headers',
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
  'Fri, 07 Sep 2018 15:19:14 GMT',
  'ETag',
  '"4fb72918a83837099046f1a623f4731b"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35546',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '29e7cbd4ed9f7e32c246fd4bbee2f1b0',
  'Content-Length',
  '1635',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=VxpiXnqjSR+ckAdOg/6YffKWklsAAAAAQUIPAAAAAAC4rRfTJQ/APMJ5+EmDs+9S; expires=Sat, 07 Sep 2019 09:11:05 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=/eiBH+dbOwL5e1GH6lKYhQAAAAC1yDwRs6NMsj+qfiPmGdey; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=YmBICd0FkThOkTs+1y0oDPKWklsAAAAAskIixOgjkAkUxSo2NiINEA==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '13-7020591-7020608 NNNN CT(0 0 0) RT(1536333553992 19) q(0 0 0 -1) r(2 2) U5',
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
    "createdAt": "2018-09-07T15:19:14.169Z",
    "updatedAt": "2018-09-07T15:19:14.472Z",
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
    "firstPublishedAt": "2018-09-07T15:19:14.472Z",
    "publishedCounter": 1,
    "publishedAt": "2018-09-07T15:19:14.472Z",
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
              "min": null,
              "max": null
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
  'Fri, 07 Sep 2018 15:19:14 GMT',
  'ETag',
  'W/"509900c6f1f9dc55d0c63daee717ea40"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35545',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  '9e229a3bae988365d340731d3e55f518',
  'Content-Length',
  '604',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=8W/KDrShR/+WUr8NS8MakvKWklsAAAAAQUIPAAAAAAAl14cQfoto4z0FLVxFFgGu; expires=Sat, 07 Sep 2019 09:10:38 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=eiajRnRyDjI/U2KX6lKYhQAAAAB62WnJuohSsar644rIsy8U; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=I7CZBykpMlDzkTs+1y0oDPKWklsAAAAA7B/M3qMsPeqsKJ1p8L6/Fw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '9-1578545-1578549 NNNN CT(0 0 0) RT(1536333554278 27) q(0 0 0 -1) r(3 3) U5',
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
    "createdAt": "2018-09-07T15:19:14.169Z",
    "updatedAt": "2018-09-07T15:19:14.472Z",
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
    "firstPublishedAt": "2018-09-07T15:19:14.472Z",
    "publishedAt": "2018-09-07T15:19:14.472Z"
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
              "min": null,
              "max": null
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
  'Fri, 07 Sep 2018 15:19:14 GMT',
  'ETag',
  'W/"7589c9bdec46d2ddb4c914d29d4ee1e0"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35544',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '7',
  'X-Contentful-Request-Id',
  'dd849d519cdc6b67f41e09ee7aece5a9',
  'Content-Length',
  '605',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=igepUxLSQpq8X6W9SGMpwPKWklsAAAAAQUIPAAAAAADwvSPqTdzU+gS8+UyL4A8f; expires=Sat, 07 Sep 2019 09:11:05 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=nx1MHRYdQHcboD1J6lKYhQAAAADR4x7vvbrF6LwoPnH3LWPM; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=NiDdWt+FJFVCkjs+1y0oDPKWklsAAAAABlstWtl/f73qBkVQqS9aig==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '13-7020826-7020832 NNNN CT(0 0 0) RT(1536333554671 22) q(0 0 0 -1) r(2 2) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/content_types')
  .query({"sys.id":{"in":"food"}})
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
  'Fri, 07 Sep 2018 15:19:15 GMT',
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
  '35543',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '96758eaa3011bff4c2d8be78e08061f4',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=sO/jUJlySp2CMT+xUNlhJPOWklsAAAAAQUIPAAAAAAAoARr9BgOZXnCkMPAeOMk5; expires=Sat, 07 Sep 2019 09:11:05 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=BswRUx8FCjBCgbGL6lKYhQAAAABzdnZg46HdqFpTxX84gKcg; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=nwqCc5Jn1VGHkjs+1y0oDPOWklsAAAAAhZpAc+gg4eKHMmjZ1RGPgg==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '12-5886901-5886907 NNNN CT(0 0 0) RT(1536333554897 30) q(0 0 0 -1) r(1 1) U5',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/locales')
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
        "createdAt":"2018-09-07T15:18:52Z",
        "updatedBy":{
          "sys":{
            "type":"Link",
            "linkType":"User",
            "id":"33kZDXNajFNmbngiu5MvUa"
          }
        },
        "updatedAt":"2018-09-07T15:18:52Z"
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
  'Fri, 07 Sep 2018 15:19:15 GMT',
  'ETag',
  'W/"e2aa390942bca26c3913575847123d35"',
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
  '35542',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  '3124a3124a2d71ac7253d999f3d35916',
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
  'visid_incap_673446=QoNNUCm+RuiQdxQTv4WQN/OWklsAAAAAQUIPAAAAAADwi/GV7Qs9iX0flozed7jA; expires=Sat, 07 Sep 2019 09:11:05 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=LmbIK5PDID89m4vi6lKYhQAAAADjJ7QIs1/VvZtk9hiBIjQG; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=YtuhTUfSfmfGkjs+1y0oDPOWklsAAAAAKlhcGW5W1JqW8bXT8imTBw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '13-7020934-7020936 NNNN CT(0 0 0) RT(1536333555097 22) q(0 0 0 -1) r(1 1) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/food', {"name":"foooood","displayField":"taste","fields":[{"id":"taste","type":"Symbol","name":"what it tastes like"}],"description":" well, food"})
  .reply(201, {"sys":{"space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"id":"food","type":"ContentType","createdAt":"2018-09-07T15:19:15.459Z","updatedAt":"2018-09-07T15:19:15.459Z","environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}},"createdBy":{"sys":{"type":"Link","linkType":"User","id":"33kZDXNajFNmbngiu5MvUa"}},"updatedBy":{"sys":{"type":"Link","linkType":"User","id":"33kZDXNajFNmbngiu5MvUa"}},"version":1},"displayField":"taste","name":"foooood","description":" well, food","fields":[{"id":"taste","name":"what it tastes like","type":"Symbol","localized":false,"required":false,"validations":[],"disabled":false,"omitted":false}]}, [ 'Access-Control-Allow-Headers',
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
  'Fri, 07 Sep 2018 15:19:15 GMT',
  'ETag',
  '"86d2997b0dab1bc32b8c45c9fa1c7953"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35541',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '7',
  'X-Contentful-Request-Id',
  '0612c5ad909a6bdbbf925ec1e9ddde85',
  'Content-Length',
  '1037',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=gXz03DjzQiqyyrWEvwg6ePOWklsAAAAAQUIPAAAAAADNnarALaRd+xxAi1pQ49lf; expires=Sat, 07 Sep 2019 09:10:37 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=uGOVdCVZLAVgcQCs6lKYhQAAAAB4Qcyfs9mj8MgaPWSnCTa4; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=G72VU3Y4+xI7kzs+1y0oDPOWklsAAAAASJYMupH2fqjYFOSHatOFzw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '11-4816853-4816854 NNNN CT(0 0 0) RT(1536333555273 29) q(0 0 0 -1) r(2 2) U5',
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
    "createdAt": "2018-09-07T15:19:15.459Z",
    "updatedAt": "2018-09-07T15:19:15.949Z",
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
    "firstPublishedAt": "2018-09-07T15:19:15.949Z",
    "publishedCounter": 1,
    "publishedAt": "2018-09-07T15:19:15.949Z",
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
  'Fri, 07 Sep 2018 15:19:16 GMT',
  'ETag',
  'W/"04aa32533918c77557efffc9618ade57"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35540',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '6',
  'X-Contentful-Request-Id',
  'bf10b912fa982d1ca36b372da12d4df1',
  'Content-Length',
  '446',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=87ntc3UkRxuXHQwqgV4hfPSWklsAAAAAQUIPAAAAAABLDM8NlzC9ydUDXU3QrwRU; expires=Sat, 07 Sep 2019 09:11:05 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=E1dURCj+1gc53Vy/6lKYhQAAAACwQEdG/xSFIMTl5RaVgRfP; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=JmBIMPkaSANVlDs+1y0oDPSWklsAAAAAvmlLA/xoO1B5DDDhSqIJlw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '5-3552036-3552042 NNNN CT(95 89 0) RT(1536333555581 29) q(0 0 1 -1) r(5 5) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/content_types')
  .query({"sys.id":{"in":"food"}})
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
        "createdAt": "2018-09-07T15:19:15.459Z",
        "updatedAt": "2018-09-07T15:19:15.949Z",
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
        "firstPublishedAt": "2018-09-07T15:19:15.949Z",
        "publishedAt": "2018-09-07T15:19:15.949Z"
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
  'Fri, 07 Sep 2018 15:19:16 GMT',
  'ETag',
  'W/"f0a3cf548ee2a3c78454a7b6f2cdbf6b"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35539',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '176b20d73d65a7e677c8586e5b37ac00',
  'Content-Length',
  '510',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=BQrXNBH+TDuiT5KhgwTor/SWklsAAAAAQUIPAAAAAAAjUYy64M6MzR0cHxOLIVoo; expires=Sat, 07 Sep 2019 09:11:05 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=J0RqAFA9tRlnQ9Cg6lKYhQAAAADtEB+friEtfQpOAgBfi7uO; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=pS3CDx2SvUwOlTs+1y0oDPSWklsAAAAAv6Hn0+r5vJDwB9E7nZBy8Q==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '5-3552113-3552114 NNNN CT(90 91 0) RT(1536333556173 15) q(0 0 2 -1) r(4 4) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/locales')
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
        "createdAt":"2018-09-07T15:18:52Z",
        "updatedBy":{
          "sys":{
            "type":"Link",
            "linkType":"User",
            "id":"33kZDXNajFNmbngiu5MvUa"
          }
        },
        "updatedAt":"2018-09-07T15:18:52Z"
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
  'Fri, 07 Sep 2018 15:19:16 GMT',
  'ETag',
  'W/"e2aa390942bca26c3913575847123d35"',
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
  '35538',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  'd398613d741a2bed7d4b0ffc23a76cde',
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
  'visid_incap_673446=dPc3oNEnR16TKTHsyDMZbvSWklsAAAAAQUIPAAAAAACei1xzCNQX4/DdE43baMHP; expires=Sat, 07 Sep 2019 09:11:05 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=Ft+yf2i+cDzu0ROB6lKYhQAAAADdjLNpeZkAIHykctvwX10i; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=FmKIF8pBzB12lTs+1y0oDPSWklsAAAAArAZgV83J7WMrN1KLkYmSng==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '2-996204-996207 NNNN CT(0 0 0) RT(1536333556602 15) q(0 0 0 -1) r(1 1) U5',
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
    "createdAt": "2018-09-07T15:19:15.459Z",
    "updatedAt": "2018-09-07T15:19:17.013Z",
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
    "firstPublishedAt": "2018-09-07T15:19:15.949Z",
    "publishedAt": "2018-09-07T15:19:15.949Z"
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
  'Fri, 07 Sep 2018 15:19:17 GMT',
  'ETag',
  'W/"ba2d4c861f0b2ea87158335540d283c1"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35537',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '7',
  'X-Contentful-Request-Id',
  '246c7732eba1cd1dc86fbcd02224edba',
  'Content-Length',
  '590',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=wm5M2HAcTIeD1UQ4JPIC1fWWklsAAAAAQUIPAAAAAADEYOkqEG80eUaaoXCr2n0U; expires=Sat, 07 Sep 2019 09:10:37 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=1wNIMM5CmCII9MQS6lKYhQAAAADAiwWkOkalH+W62iAt7VAG; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=FZRzCBEsSynUlTs+1y0oDPWWklsAAAAALDFsMKA+z+ZTGvXaTmH6GA==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '14-7819705-7819706 NNNN CT(0 0 0) RT(1536333556839 37) q(0 0 0 -1) r(2 2) U5',
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
    "createdAt": "2018-09-07T15:19:15.459Z",
    "updatedAt": "2018-09-07T15:19:17.279Z",
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
    "firstPublishedAt": "2018-09-07T15:19:15.949Z",
    "publishedAt": "2018-09-07T15:19:17.279Z"
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
  'Fri, 07 Sep 2018 15:19:17 GMT',
  'ETag',
  'W/"6aaf3c78efc5648bd4b5ca4f1f06ac6b"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35536',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '84494c60bcf876e6ddf93307aebe3ef7',
  'Content-Length',
  '591',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=eDRX2gfRQkyUa5QRA9jNVvWWklsAAAAAQUIPAAAAAABix2mDw8qJ1mf2AweWrCGE; expires=Sat, 07 Sep 2019 09:10:37 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=IJLXYi7hH20/oBL06lKYhQAAAAA+z8sv48kNyXULwB9subjj; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=2XrrK8us7hBtljs+1y0oDPWWklsAAAAAaaYyXrwF3azftI/vNlBONw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '14-7819751-7819754 NNNN CT(0 0 0) RT(1536333557099 32) q(0 0 0 -1) r(3 3) U5',
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
    "createdAt": "2018-09-07T15:19:15.459Z",
    "updatedAt": "2018-09-07T15:19:17.279Z",
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
    "firstPublishedAt": "2018-09-07T15:19:15.949Z",
    "publishedAt": "2018-09-07T15:19:17.279Z"
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
  'Fri, 07 Sep 2018 15:19:17 GMT',
  'ETag',
  'W/"6aaf3c78efc5648bd4b5ca4f1f06ac6b"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35535',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  'c6d7671715634d875a81746081b02763',
  'Content-Length',
  '591',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=KAo9OEwjQ46Tnk/c+zgPvvWWklsAAAAAQUIPAAAAAAD+7y3W0D6x+R69BOSOxtyr; expires=Sat, 07 Sep 2019 09:10:37 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=cCfwEXvhuQczADig6lKYhQAAAACyMaHE/aPapko70wbVKlS3; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=WZl0Qa/5hVwblzs+1y0oDPWWklsAAAAADAxOdh7DJqdnrSv5fc/9eg==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '11-4817198-4817206 NNNN CT(90 89 0) RT(1536333557543 26) q(0 0 2 -1) r(3 3) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/content_types')
  .query({"sys.id":{"in":"person%2Canimal"}})
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
  'Fri, 07 Sep 2018 15:19:18 GMT',
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
  '35534',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'd54296bbb2f71fd9acf79854136aedcd',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=ETfvW+nKQzCUWTsPDPoQ0/aWklsAAAAAQUIPAAAAAABKsAka8L3h9ynEqdkVLV/B; expires=Sat, 07 Sep 2019 09:11:05 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=n6BiWE/exj6v+qA86lKYhQAAAACFv/tkJ0N4sDEwrRZQhhOR; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=UDBDLnnMZX50lzs+1y0oDPaWklsAAAAAzvK4gaF3z9Y8swz5cBoa/Q==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '13-7021664-7021670 NNNN CT(0 0 0) RT(1536333557972 18) q(0 0 0 -1) r(2 2) U5',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/locales')
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
        "createdAt":"2018-09-07T15:18:52Z",
        "updatedBy":{
          "sys":{
            "type":"Link",
            "linkType":"User",
            "id":"33kZDXNajFNmbngiu5MvUa"
          }
        },
        "updatedAt":"2018-09-07T15:18:52Z"
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
  'Fri, 07 Sep 2018 15:19:18 GMT',
  'ETag',
  'W/"e2aa390942bca26c3913575847123d35"',
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
  '35533',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  '1ad7487bbb5b8205ab0421b5215e72aa',
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
  'visid_incap_673446=KS0VwK3oSK28wGXR/l7uh/aWklsAAAAAQUIPAAAAAAClXVdvPY0qTnrJIy/xOgU3; expires=Sat, 07 Sep 2019 09:10:37 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=A8G1BhR0UELD69RE6lKYhQAAAADVKSWPtrtz2SpZbsvUA4rt; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=ZA0TUXzFeESxlzs+1y0oDPaWklsAAAAAkwxFMyn34WwBYl8j/sZqBQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '11-4817313-4817320 NNNN CT(0 0 0) RT(1536333558161 17) q(0 0 0 -1) r(1 1) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/person', {"name":"Person","fields":[{"id":"age","name":"Age","type":"Number","required":true},{"id":"fullName","name":"Full name","type":"Symbol","required":true,"localized":true}],"description":"A content type for a person"})
  .reply(201, {"sys":{"space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"id":"person","type":"ContentType","createdAt":"2018-09-07T15:19:18.676Z","updatedAt":"2018-09-07T15:19:18.676Z","environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}},"createdBy":{"sys":{"type":"Link","linkType":"User","id":"33kZDXNajFNmbngiu5MvUa"}},"updatedBy":{"sys":{"type":"Link","linkType":"User","id":"33kZDXNajFNmbngiu5MvUa"}},"version":1},"displayField":null,"name":"Person","description":"A content type for a person","fields":[{"id":"age","name":"Age","type":"Number","localized":false,"required":true,"validations":[],"disabled":false,"omitted":false},{"id":"fullName","name":"Full name","type":"Symbol","localized":true,"required":true,"validations":[],"disabled":false,"omitted":false}]}, [ 'Access-Control-Allow-Headers',
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
  'Fri, 07 Sep 2018 15:19:18 GMT',
  'ETag',
  '"4e5bd00317bac6c5059283f0280574d9"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35532',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '7',
  'X-Contentful-Request-Id',
  '39f488c575b7dc19086710997baabea0',
  'Content-Length',
  '1242',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=wFqDTMEkRmGGXraZiZCRWvaWklsAAAAAQUIPAAAAAAAw//TeypjcowVjANX7PZTZ; expires=Sat, 07 Sep 2019 09:10:37 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=0UmyF+5ELjIPbqV+6lKYhQAAAAD9HbKbYnIDWDoJep116Clq; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=bfS+Z2o3FV5umDs+1y0oDPaWklsAAAAA0cz3jwil3fyg2mF4wLrfKQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '14-7820140-7820147 NNNN CT(89 90 0) RT(1536333558330 23) q(0 0 2 -1) r(4 4) U5',
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
    "createdAt": "2018-09-07T15:19:18.676Z",
    "updatedAt": "2018-09-07T15:19:19.017Z",
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
    "firstPublishedAt": "2018-09-07T15:19:19.017Z",
    "publishedCounter": 1,
    "publishedAt": "2018-09-07T15:19:19.017Z",
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
  'Fri, 07 Sep 2018 15:19:19 GMT',
  'ETag',
  'W/"dbf4dd0299e0773bc22539ed6f06cd86"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35531',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '6',
  'X-Contentful-Request-Id',
  'bbf083204c5bb926bde388f0237da2da',
  'Content-Length',
  '480',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=KVeI+1kYQnmsQkZdRSqByveWklsAAAAAQUIPAAAAAAB7Gg3N40KXJQ4uaYkdCm5i; expires=Sat, 07 Sep 2019 09:10:37 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=/yThOFDibwimfmGO6lKYhQAAAABdwf6uct6+0i4UM8mA2EDq; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=gDuEfevc1W0ZmTs+1y0oDPeWklsAAAAAG+5YOqqRpb/XhgBAcIgQ8A==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '11-4817467-4817476 NNNN CT(0 0 0) RT(1536333558850 20) q(0 0 0 -1) r(4 4) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/animal', {"name":"Animal","fields":[{"id":"species","name":"The species of the animal","type":"Symbol","required":true},{"id":"isFurry","name":"Is this a furry animal","type":"Boolean","required":false}],"description":"An animal"})
  .reply(201, {"sys":{"space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"id":"animal","type":"ContentType","createdAt":"2018-09-07T15:19:19.788Z","updatedAt":"2018-09-07T15:19:19.788Z","environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}},"createdBy":{"sys":{"type":"Link","linkType":"User","id":"33kZDXNajFNmbngiu5MvUa"}},"updatedBy":{"sys":{"type":"Link","linkType":"User","id":"33kZDXNajFNmbngiu5MvUa"}},"version":1},"displayField":null,"name":"Animal","description":"An animal","fields":[{"id":"species","name":"The species of the animal","type":"Symbol","localized":false,"required":true,"validations":[],"disabled":false,"omitted":false},{"id":"isFurry","name":"Is this a furry animal","type":"Boolean","localized":false,"required":false,"validations":[],"disabled":false,"omitted":false}]}, [ 'Access-Control-Allow-Headers',
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
  'Fri, 07 Sep 2018 15:19:20 GMT',
  'ETag',
  '"64600316cefe08f907fd95b3f5a8f0e8"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35530',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '842041d15d3ac9921161aa591634baad',
  'Content-Length',
  '1265',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=p4f/84Y4R4uUxya851RosviWklsAAAAAQUIPAAAAAAD00BPGL6efMIK0gjOJQRn6; expires=Sat, 07 Sep 2019 09:11:05 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=moVtNge4Y1qSYN0w6lKYhQAAAAASEb3CeRXGb+R7xerL7N2t; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=ApI+Slf8cRpnmjs+1y0oDPiWklsAAAAAcOYxqXPOTab4QVRGvbppmA==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '4-2262797-2262805 NNNN CT(87 87 0) RT(1536333559366 24) q(0 0 2 -1) r(7 7) U5',
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
    "createdAt": "2018-09-07T15:19:19.788Z",
    "updatedAt": "2018-09-07T15:19:20.321Z",
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
    "firstPublishedAt": "2018-09-07T15:19:20.321Z",
    "publishedCounter": 1,
    "publishedAt": "2018-09-07T15:19:20.321Z",
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
  'Fri, 07 Sep 2018 15:19:20 GMT',
  'ETag',
  'W/"5dee93ee9d2d4cf91bea069f0e4fcc1e"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35529',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'caed789a073a21a75970ce5f3819c09d',
  'Content-Length',
  '488',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=+qe/eEqATyWuxojYocJpNfiWklsAAAAAQUIPAAAAAACMfgNcAkPf9ivPPl72WMbI; expires=Sat, 07 Sep 2019 09:11:05 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=A64leFBfbyYJr/j96lKYhQAAAAD4fR5tKyzyoUSgpgJiEzLo; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=3UwJWJNMJxk2mzs+1y0oDPiWklsAAAAAcrhbOmtlRshIm2EhXDH7SA==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '6-1523579-1523581 NNNN CT(0 0 0) RT(1536333560131 31) q(0 0 0 -1) r(4 4) U5',
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
    "createdAt": "2018-09-07T15:19:18.676Z",
    "updatedAt": "2018-09-07T15:19:20.746Z",
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
    "firstPublishedAt": "2018-09-07T15:19:19.017Z",
    "publishedAt": "2018-09-07T15:19:19.017Z"
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
  'Fri, 07 Sep 2018 15:19:20 GMT',
  'ETag',
  'W/"06060cf853cf2e6e7858e31e9d42a591"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35528',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  'f25ed60ec5a6d4a14082c94eb8810066',
  'Content-Length',
  '522',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=fcL53mVkRiCIfe4CzLkQuPiWklsAAAAAQUIPAAAAAAD0nlgQP+b9he4jGPaso0oq; expires=Sat, 07 Sep 2019 09:11:06 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=AC0dPvRlbx9ATWHq6lKYhQAAAAB6yHZ9DmBLwNjbjaGW/4u5; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=V+xffAVRURuUmzs+1y0oDPiWklsAAAAAUpIBlsnlAfYFwaZV/1NI2w==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '8-440940-440941 NNNN CT(0 0 0) RT(1536333560566 18) q(0 0 0 -1) r(2 2) U5',
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
    "createdAt": "2018-09-07T15:19:18.676Z",
    "updatedAt": "2018-09-07T15:19:20.962Z",
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
    "firstPublishedAt": "2018-09-07T15:19:19.017Z",
    "publishedAt": "2018-09-07T15:19:20.962Z"
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
  'Fri, 07 Sep 2018 15:19:21 GMT',
  'ETag',
  'W/"6335b486e47fa8b2359907e036e982bf"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35527',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '7',
  'X-Contentful-Request-Id',
  'fdc9f50d800694d34d9a6efd4ae38962',
  'Content-Length',
  '525',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=95LpeXdvRV61xC4IE1s+C/mWklsAAAAAQUIPAAAAAADA+1U5G7bF1O6jFwAEtMK7; expires=Sat, 07 Sep 2019 09:11:05 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=RlK7J4YE9C6dmAvn6lKYhQAAAABacmlMZwCQqstmYgLyVgYY; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=coj4NClwnEfrnDs+1y0oDPmWklsAAAAAl9ee2GtctUAhdFSrf1uY3A==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '4-2262933-2262938 NNNN CT(0 0 0) RT(1536333560799 21) q(0 0 0 -1) r(6 6) U5',
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
    "createdAt": "2018-09-07T15:19:19.788Z",
    "updatedAt": "2018-09-07T15:19:21.689Z",
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
    "firstPublishedAt": "2018-09-07T15:19:20.321Z",
    "publishedAt": "2018-09-07T15:19:20.321Z"
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
  'Fri, 07 Sep 2018 15:19:21 GMT',
  'ETag',
  'W/"db4117c7f65ba158cd945d8401f235b7"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35526',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '561b095c33fffc43c2c8217381affe0e',
  'Content-Length',
  '511',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=MqyJtOm7RcONSZnGDg4VvvmWklsAAAAAQUIPAAAAAABy7jime7DWrKkJs+Bdd3Cs; expires=Sat, 07 Sep 2019 09:11:05 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=+vv7ZLTFMwY+OTho6lKYhQAAAADSW9GVPm9iWZDmCAyqT4zu; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=vVq6cJAYLUA6nTs+1y0oDPmWklsAAAAAmdJiS4zftnksp1q2v2WrmA==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '6-1523637-1523638 NNNN CT(0 0 0) RT(1536333561525 17) q(0 0 0 -1) r(1 1) U5',
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
    "createdAt": "2018-09-07T15:19:19.788Z",
    "updatedAt": "2018-09-07T15:19:21.903Z",
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
    "firstPublishedAt": "2018-09-07T15:19:20.321Z",
    "publishedAt": "2018-09-07T15:19:21.903Z"
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
  'Fri, 07 Sep 2018 15:19:22 GMT',
  'ETag',
  'W/"90e2a6b9d5ecb6ba8085adcdc145f108"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35525',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  '39d2971f145a66c6a3bc9a19c6562afa',
  'Content-Length',
  '515',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=a6UfhidARoCZZabK/ks4LvqWklsAAAAAQUIPAAAAAABBrbXzLjLQ2PXFNv1TmyY6; expires=Sat, 07 Sep 2019 09:11:05 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=RKt2fSi9cgluNkMJ6lKYhQAAAAAs7wQJ4fPpTREz/ziGQ8oU; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=8zv+MiwtJji/nTs+1y0oDPqWklsAAAAAH59TMeS2MnSk1AyBrgX4nw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '13-7022646-7022655 NNNN CT(0 0 0) RT(1536333561735 24) q(0 0 0 -1) r(3 3) U5',
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
    "createdAt": "2018-09-07T15:19:18.676Z",
    "updatedAt": "2018-09-07T15:19:20.962Z",
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
    "firstPublishedAt": "2018-09-07T15:19:19.017Z",
    "publishedAt": "2018-09-07T15:19:20.962Z"
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
  'Fri, 07 Sep 2018 15:19:22 GMT',
  'ETag',
  'W/"6335b486e47fa8b2359907e036e982bf"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35524',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '7c9737b41f32156481ec040e79c34434',
  'Content-Length',
  '525',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=OoQirW/7SaiiXOz+YB1X7vqWklsAAAAAQUIPAAAAAADTppmcpnNdqLpXI814fduI; expires=Sat, 07 Sep 2019 09:11:05 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=ioMsT27k0XOSliau6lKYhQAAAACg1ytNZ31OW/zFLKkjb1B6; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=UUYoZzaGOGJFnjs+1y0oDPqWklsAAAAAQIBx2Jr6/+W9/1BlKDw6FQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '5-3553054-3553057 NNNN CT(0 0 0) RT(1536333562071 15) q(0 0 0 -1) r(3 3) U5',
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
    "createdAt": "2018-09-07T15:19:19.788Z",
    "updatedAt": "2018-09-07T15:19:21.903Z",
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
    "firstPublishedAt": "2018-09-07T15:19:20.321Z",
    "publishedAt": "2018-09-07T15:19:21.903Z"
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
  'Fri, 07 Sep 2018 15:19:22 GMT',
  'ETag',
  'W/"90e2a6b9d5ecb6ba8085adcdc145f108"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35523',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  '69ac0c55a4ef23e0f78494f10c366c5a',
  'Content-Length',
  '515',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=kk4oSMkkReK/6fTvMHFD7/qWklsAAAAAQUIPAAAAAADRtcTmEEGej+QrIlbEVqXx; expires=Sat, 07 Sep 2019 09:10:37 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=VWbDU9Un8yqEaqJW6lKYhQAAAAAdrlpsROVbhOfd+31SGc+P; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=iPrvNFRLZGCcnjs+1y0oDPqWklsAAAAAT+YGeA73DJe6e6A3P+72Qg==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '11-4818289-4818293 NNNN CT(0 0 0) RT(1536333562427 14) q(0 0 0 -1) r(1 1) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/content_types')
  .query({"sys.id":{"in":"person%2CsomethingElse"}})
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
        "createdAt": "2018-09-07T15:19:18.676Z",
        "updatedAt": "2018-09-07T15:19:20.962Z",
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
        "firstPublishedAt": "2018-09-07T15:19:19.017Z",
        "publishedAt": "2018-09-07T15:19:20.962Z"
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
  'Fri, 07 Sep 2018 15:19:22 GMT',
  'ETag',
  'W/"1585f24eafcc6b83410122acd4c22743"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35522',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '7',
  'X-Contentful-Request-Id',
  '70e273e1f6f6dde3338b81c1d0aa7941',
  'Content-Length',
  '589',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=0f8byUUlTnGgc8xy0HX7kPqWklsAAAAAQUIPAAAAAACAsYFseRC8xWEsWBSZsEXf; expires=Sat, 07 Sep 2019 09:11:05 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=jZ5yeP795wb76Y4j6lKYhQAAAADJMuI4gKI8FnPUjGNojEVN; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=PKhzAPgRnD7xnjs+1y0oDPqWklsAAAAAj35AaquMN7SN4irHIz+SAw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '7-2432483-2432484 NNNN CT(0 0 0) RT(1536333562616 19) q(0 0 0 -1) r(1 1) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/blogpost', {"name":"blog post","fields":[{"name":"title","id":"title","type":"Symbol"},{"name":"category","id":"category","type":"Symbol"}]})
  .reply(201, {"sys":{"space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"id":"blogpost","type":"ContentType","createdAt":"2018-09-07T15:19:22.994Z","updatedAt":"2018-09-07T15:19:22.994Z","environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}},"createdBy":{"sys":{"type":"Link","linkType":"User","id":"33kZDXNajFNmbngiu5MvUa"}},"updatedBy":{"sys":{"type":"Link","linkType":"User","id":"33kZDXNajFNmbngiu5MvUa"}},"version":1},"displayField":null,"name":"blog post","description":null,"fields":[{"id":"title","name":"title","type":"Symbol","localized":false,"required":false,"validations":[],"disabled":false,"omitted":false},{"id":"category","name":"category","type":"Symbol","localized":false,"required":false,"validations":[],"disabled":false,"omitted":false}]}, [ 'Access-Control-Allow-Headers',
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
  'Fri, 07 Sep 2018 15:19:23 GMT',
  'ETag',
  '"beeb9b372253065d26c13de7f72d389a"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35521',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '6',
  'X-Contentful-Request-Id',
  '0a517bb521082bab12aa91dc7eb88c53',
  'Content-Length',
  '1228',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=A5EGRM3CQGaacNoDhO7k4vuWklsAAAAAQUIPAAAAAABIZCy42hyNLpgK3GQrQXTp; expires=Sat, 07 Sep 2019 09:10:38 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=X0DVc6R651/f/PpO6lKYhQAAAADRDx9yAu2luwQfa5ICKt11; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=mTCwIAmICXBcnzs+1y0oDPuWklsAAAAARnPK3NwDoxbHXQdPRIpc7w==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '9-1579380-1579382 NNNN CT(0 0 0) RT(1536333562821 20) q(0 0 0 -1) r(2 2) U5',
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
    "createdAt": "2018-09-07T15:19:22.994Z",
    "updatedAt": "2018-09-07T15:19:23.248Z",
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
    "firstPublishedAt": "2018-09-07T15:19:23.248Z",
    "publishedCounter": 1,
    "publishedAt": "2018-09-07T15:19:23.248Z",
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
  'Fri, 07 Sep 2018 15:19:23 GMT',
  'ETag',
  'W/"7e1a582d99b5731f0d17dc3e4bff484f"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35520',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '6786f53b94822af3770374031e0ae16e',
  'Content-Length',
  '448',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=OkoJLjnSQiewyyq0ISqBHPuWklsAAAAAQUIPAAAAAABcUrXC6AyIs5Y/r2hvu8mD; expires=Sat, 07 Sep 2019 09:11:05 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=2eDGeLSfUjmZ7OZm6lKYhQAAAACuYAtm3PM6fyMyAKiO1s0a; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=zBBMC5m+NWTpnzs+1y0oDPuWklsAAAAASqVZ/X9JXdnT4/TMW4WhfA==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '10-2978302-2978305 NNNN CT(0 0 0) RT(1536333563084 18) q(0 0 0 -1) r(3 3) U5',
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
    "id": "6BGH011KWAGs0oUI8e8WAU",
    "type": "Entry",
    "createdAt": "2018-09-07T15:19:23.662Z",
    "updatedAt": "2018-09-07T15:19:23.662Z",
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
  'Fri, 07 Sep 2018 15:19:23 GMT',
  'ETag',
  '"ff6b6a4f3336b8e4e8742056920f2ac9"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35519',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  '4736d0253492dd21508c60478eab5a65',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=sBhZ9vI+Szqm5d1qlNcFSvuWklsAAAAAQUIPAAAAAAA0iDYlQzs7JprFn7OnFHY9; expires=Sat, 07 Sep 2019 09:11:05 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=JFZ0HyIQo12HVX0k6lKYhQAAAAAmFKfe+0KdV0+kFDGexd/a; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=BOkSEoKYn21XoDs+1y0oDPuWklsAAAAATFR5BJkMMoZGn5RpfCdGAg==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '5-3553280-3553284 NNNN CT(0 0 0) RT(1536333563477 25) q(0 0 0 -1) r(1 1) U5',
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
    "id": "53gccj7wiQ8Gu4ASm0ama6",
    "type": "Entry",
    "createdAt": "2018-09-07T15:19:23.919Z",
    "updatedAt": "2018-09-07T15:19:23.919Z",
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
  'Fri, 07 Sep 2018 15:19:23 GMT',
  'ETag',
  '"8cee356b604b4f82b8f71690b5f5b28e"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35518',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '7',
  'X-Contentful-Request-Id',
  '8d0a3e6399d17084a929fa178f84add0',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=PBSKhWeoRaaQBtIP2rqGgfuWklsAAAAAQUIPAAAAAABfOGs3D3H49cTSB9/g+8WL; expires=Sat, 07 Sep 2019 09:11:05 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=ZdoYRHTxYm5qNThx6lKYhQAAAABhWoCgjN+y0k7kGmS/IOpr; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=T63Yek34XT3SoDs+1y0oDPuWklsAAAAAIHFvEbRSkrUlcwAyblXLcw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '12-5889080-5889087 NNNN CT(0 0 0) RT(1536333563746 21) q(0 0 0 -1) r(2 2) U5',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/content_types')
  .query({"sys.id":{"in":"blogpost"}})
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
        "createdAt": "2018-09-07T15:19:22.994Z",
        "updatedAt": "2018-09-07T15:19:23.248Z",
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
        "firstPublishedAt": "2018-09-07T15:19:23.248Z",
        "publishedAt": "2018-09-07T15:19:23.248Z"
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
  'Fri, 07 Sep 2018 15:19:24 GMT',
  'ETag',
  'W/"ee3b89da889a13300cac2fb372ba16c9"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35517',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '050809dd9f50032dd4392a18a1399eeb',
  'Content-Length',
  '517',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=JYjVLjLGQY2bg4Wjp5xpbfyWklsAAAAAQUIPAAAAAACxyYXxT9T8oAMxoZ0RG9C5; expires=Sat, 07 Sep 2019 09:10:37 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=F1b0Dl2OOCw1YmXD6lKYhQAAAAD/u+tf5DnGxQEHeCKNiDgC; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=yWBlEMbuwyg1oTs+1y0oDPyWklsAAAAAAt353v7d4IKHqSvSPgoRvQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '14-7821958-7821966 NNNN CT(0 0 0) RT(1536333564021 39) q(0 0 0 -1) r(2 2) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/entries')
  .query({"sys.contentType.sys.id":{"in":"blogpost"},"skip":"0"})
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
        "id": "6BGH011KWAGs0oUI8e8WAU",
        "type": "Entry",
        "createdAt": "2018-09-07T15:19:23.662Z",
        "updatedAt": "2018-09-07T15:19:23.662Z",
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
        "id": "53gccj7wiQ8Gu4ASm0ama6",
        "type": "Entry",
        "createdAt": "2018-09-07T15:19:23.919Z",
        "updatedAt": "2018-09-07T15:19:23.919Z",
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
  'Fri, 07 Sep 2018 15:19:24 GMT',
  'ETag',
  'W/"a8fe02a2910bdeb46cc7de49ce90f45e"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35516',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  'bdde2877241bd0b3c6e45a1f7feb8450',
  'Content-Length',
  '446',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=4l2K4vVqRKqpoyvv9tzOYfyWklsAAAAAQUIPAAAAAACf4/gq3cNttz5jGaWdWWIt; expires=Sat, 07 Sep 2019 09:10:38 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=jcY8Pe6Rj34LfDCt6lKYhQAAAABKDnclJBFF6pOypGxPCq6y; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=lxZRbUXIclSaoTs+1y0oDPyWklsAAAAAer0D27bfCA4HDdU+ygXIFA==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '9-1579471-1579474 NNNN CT(0 0 0) RT(1536333564249 19) q(0 0 0 -1) r(2 2) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/locales')
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
        "createdAt":"2018-09-07T15:18:52Z",
        "updatedBy":{
          "sys":{
            "type":"Link",
            "linkType":"User",
            "id":"33kZDXNajFNmbngiu5MvUa"
          }
        },
        "updatedAt":"2018-09-07T15:18:52Z"
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
  'Fri, 07 Sep 2018 15:19:24 GMT',
  'ETag',
  'W/"e2aa390942bca26c3913575847123d35"',
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
  '35515',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '7',
  'X-Contentful-Request-Id',
  '75db60f3ecbe3275881c72b4e06d5062',
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
  'visid_incap_673446=eFKoy9pGTL2UiCAiKb9xR/yWklsAAAAAQUIPAAAAAADvv1nM7bUKBTN9lZwn+BAl; expires=Sat, 07 Sep 2019 09:11:05 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=2BdnURYxFxGVCToj6lKYhQAAAACF2466MD1ZvsnEG+JZYcHB; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=iQM5DsGQll/goTs+1y0oDPyWklsAAAAA0JsR4Qf/bQa3DxTwRCSgbA==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '2-996549-996550 NNNN CT(0 0 0) RT(1536333564507 24) q(0 0 0 -1) r(1 1) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/entries/6BGH011KWAGs0oUI8e8WAU', {"sys":{"id":"6BGH011KWAGs0oUI8e8WAU","version":1,"contentType":{"sys":{"type":"Link","linkType":"ContentType","id":"blogpost"}}},"fields":{"title":{"en-US":"hello!"},"category":{"en-US":"hello!"}}})
  .reply(200, {"sys":{"space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"id":"6BGH011KWAGs0oUI8e8WAU","type":"Entry","createdAt":"2018-09-07T15:19:23.662Z","updatedAt":"2018-09-07T15:19:24.863Z","environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}},"createdBy":{"sys":{"type":"Link","linkType":"User","id":"33kZDXNajFNmbngiu5MvUa"}},"updatedBy":{"sys":{"type":"Link","linkType":"User","id":"33kZDXNajFNmbngiu5MvUa"}},"version":2,"contentType":{"sys":{"type":"Link","linkType":"ContentType","id":"blogpost"}}},"fields":{"title":{"en-US":"hello!"},"category":{"en-US":"hello!"}}}, [ 'Access-Control-Allow-Headers',
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
  'Fri, 07 Sep 2018 15:19:24 GMT',
  'ETag',
  '"da7b1c54b40f06370e6dd1e4fe838d11"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35514',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '6',
  'X-Contentful-Request-Id',
  'ab23fcccf39fac9b3badcb92a910c54e',
  'Content-Length',
  '980',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=ypK0t70hS6u4pWtNu5sAEfyWklsAAAAAQUIPAAAAAAC6b8Kos2CnkeqhIghjCCk+; expires=Sat, 07 Sep 2019 09:10:37 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=xdkeF8cSU3qApPwz6lKYhQAAAACeJ9vXOzGUV6Z0m5xWuako; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=6VJSZGJ0kDlCojs+1y0oDPyWklsAAAAALGStTEIVeJdgfZhx8iYOLg==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '11-4818855-4818862 NNNN CT(0 0 0) RT(1536333564689 18) q(0 0 0 -1) r(2 2) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/entries/6BGH011KWAGs0oUI8e8WAU/published')
  .reply(200, {
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "bohepdihyxin"
      }
    },
    "id": "6BGH011KWAGs0oUI8e8WAU",
    "type": "Entry",
    "createdAt": "2018-09-07T15:19:23.662Z",
    "updatedAt": "2018-09-07T15:19:25.322Z",
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
    "firstPublishedAt": "2018-09-07T15:19:25.322Z",
    "publishedAt": "2018-09-07T15:19:25.322Z",
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
  'Fri, 07 Sep 2018 15:19:25 GMT',
  'ETag',
  'W/"8ded307152dd099d6ca23042f7ff4fdd"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35513',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '16ca94a5f0b705a7baf03da0485f28a3',
  'Content-Length',
  '394',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=UDErq9+aSnybiTjezIx5JP2WklsAAAAAQUIPAAAAAADUrNAHU88hne/omJmg2RWk; expires=Sat, 07 Sep 2019 09:11:05 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=EUhwJ/+cuDWvKRYT6lKYhQAAAABPbO/2f4GWSf/Sv58dxetN; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=SnQzeQ7gv2seozs+1y0oDP2WklsAAAAAqqelAg2ThzF4N7Ce9N1o8g==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '7-2432699-2432700 NNNN CT(88 89 0) RT(1536333564967 28) q(0 0 2 -1) r(5 5) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/entries/53gccj7wiQ8Gu4ASm0ama6', {"sys":{"id":"53gccj7wiQ8Gu4ASm0ama6","version":1,"contentType":{"sys":{"type":"Link","linkType":"ContentType","id":"blogpost"}}},"fields":{"title":{"en-US":"hello!"},"category":{"en-US":"hello!"}}})
  .reply(200, {"sys":{"space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"id":"53gccj7wiQ8Gu4ASm0ama6","type":"Entry","createdAt":"2018-09-07T15:19:23.919Z","updatedAt":"2018-09-07T15:19:25.776Z","environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}},"createdBy":{"sys":{"type":"Link","linkType":"User","id":"33kZDXNajFNmbngiu5MvUa"}},"updatedBy":{"sys":{"type":"Link","linkType":"User","id":"33kZDXNajFNmbngiu5MvUa"}},"version":2,"contentType":{"sys":{"type":"Link","linkType":"ContentType","id":"blogpost"}}},"fields":{"title":{"en-US":"hello!"},"category":{"en-US":"hello!"}}}, [ 'Access-Control-Allow-Headers',
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
  'Fri, 07 Sep 2018 15:19:25 GMT',
  'ETag',
  '"ef50044e7ff2a4e706495ace29015fb3"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35512',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  '59a70c55e0e76290d3f7f450f0c108b0',
  'Content-Length',
  '980',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=XW0MeRhGQwuAWxjep8xfRv2WklsAAAAAQUIPAAAAAAC9+LO9HzAraHqGZGfSmG5z; expires=Sat, 07 Sep 2019 09:11:05 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=z65BYZ0njmT6gyhR6lKYhQAAAAAtDRo8GDrElunQCso6HZbK; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=7miMXS+GKGGYozs+1y0oDP2WklsAAAAA3FLwE2SrL7/oLXBj5TB20A==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '13-7023679-7023693 NNNN CT(0 0 0) RT(1536333565608 20) q(0 0 0 -1) r(1 1) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/entries/53gccj7wiQ8Gu4ASm0ama6/published')
  .reply(200, {
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "bohepdihyxin"
      }
    },
    "id": "53gccj7wiQ8Gu4ASm0ama6",
    "type": "Entry",
    "createdAt": "2018-09-07T15:19:23.919Z",
    "updatedAt": "2018-09-07T15:19:26.006Z",
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
    "firstPublishedAt": "2018-09-07T15:19:26.006Z",
    "publishedAt": "2018-09-07T15:19:26.006Z",
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
  'Fri, 07 Sep 2018 15:19:26 GMT',
  'ETag',
  'W/"13fbfdabdbdee8bacdb5ff5832d9a4f4"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35511',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '7',
  'X-Contentful-Request-Id',
  '1d2265378a6be403e6f9eced865d2851',
  'Content-Length',
  '393',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=/WyZNXO4RQm+LyZZtG69Xv6WklsAAAAAQUIPAAAAAAAfpMTTByoly+Ceh/yAoNsd; expires=Sat, 07 Sep 2019 09:11:05 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=rcUbfVoXkkB56b9/6lKYhQAAAADKKWb6z0atg8izKW349hNW; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=j8r8NXFYRDEMpDs+1y0oDP6WklsAAAAA29mJeh/q1s4il3X1wZnCfw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '13-7023722-7023723 NNNN CT(0 0 0) RT(1536333565829 19) q(0 0 0 -1) r(2 2) U5',
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
        "id": "6BGH011KWAGs0oUI8e8WAU",
        "type": "Entry",
        "createdAt": "2018-09-07T15:19:23.662Z",
        "updatedAt": "2018-09-07T15:19:25.322Z",
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
        "firstPublishedAt": "2018-09-07T15:19:25.322Z",
        "publishedAt": "2018-09-07T15:19:25.322Z",
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
        "id": "53gccj7wiQ8Gu4ASm0ama6",
        "type": "Entry",
        "createdAt": "2018-09-07T15:19:23.919Z",
        "updatedAt": "2018-09-07T15:19:26.006Z",
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
        "firstPublishedAt": "2018-09-07T15:19:26.006Z",
        "publishedAt": "2018-09-07T15:19:26.006Z",
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
  'Fri, 07 Sep 2018 15:19:26 GMT',
  'ETag',
  'W/"c1367b97565d891352d3a2710607faec"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35510',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '089bf9af7f85c1de4457bb9c3ef4e10e',
  'Content-Length',
  '531',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=pKmhB9aXRZWTbVWfwJNhwP6WklsAAAAAQUIPAAAAAAA0oO0wSPZVTy+Cds4BeG0P; expires=Sat, 07 Sep 2019 09:11:05 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=4F8xGi3qMSn9TaO36lKYhQAAAADVrP7pfo26ajR9eLFVyEyw; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=lMlGbTnfWz7wpDs+1y0oDP6WklsAAAAApyAmvq1XJ9j5FG1wPxY5hQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '12-5889722-5889729 NNNN CT(89 90 0) RT(1536333566127 24) q(0 0 2 -1) r(4 4) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/content_types')
  .query({"sys.id":{"in":"blogPost"}})
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
  'Fri, 07 Sep 2018 15:19:26 GMT',
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
  '35509',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  '68fd41d7533144870ad1b08abfd571cb',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=N7VVcvghRn6TekY5XitZZ/6WklsAAAAAQUIPAAAAAAB0T5iKG1MSAb9XPD2wwgQL; expires=Sat, 07 Sep 2019 09:11:05 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=RTc0VffNxwnFD4lS6lKYhQAAAAAxvqOfMQ1DtIHVlJfxG0yY; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=cYTsCpqtmw2TpTs+1y0oDP6WklsAAAAAQ16PyM6xtIO+s7e+SjxJ4w==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '12-5889844-5889850 NNNN CT(91 91 0) RT(1536333566599 21) q(0 0 2 -1) r(3 3) U5',
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
  "requestId": "6e742be9b9b8cdbd3ee9849034f8edd3"
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
  'Fri, 07 Sep 2018 15:19:27 GMT',
  'ETag',
  '"3ffb67f9a4ab9e305c9828fd73f2e83b"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35508',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '6e742be9b9b8cdbd3ee9849034f8edd3',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=CaOS6R7nTlel9GXBwjxAD/+WklsAAAAAQUIPAAAAAAAiTiwlQ7HFnxU4XaR0t5zC; expires=Sat, 07 Sep 2019 09:11:05 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=ZJ5cI8N/7gKNJDp76lKYhQAAAAD42HoQzeJ6UicyFZA231ds; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=gVzVfURBKkztpTs+1y0oDP+WklsAAAAAiqkid/wmEqVF4ACNn6HgIg==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '1-500853-500854 NNNN CT(0 0 0) RT(1536333567045 20) q(0 0 0 -1) r(1 1) U5',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/locales')
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
        "createdAt":"2018-09-07T15:18:52Z",
        "updatedBy":{
          "sys":{
            "type":"Link",
            "linkType":"User",
            "id":"33kZDXNajFNmbngiu5MvUa"
          }
        },
        "updatedAt":"2018-09-07T15:18:52Z"
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
  'Fri, 07 Sep 2018 15:19:27 GMT',
  'ETag',
  'W/"e2aa390942bca26c3913575847123d35"',
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
  '35507',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  'fdcf05993577957300235f1510944be1',
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
  'visid_incap_673446=wevlAjtFQwOotIMSMUIVL/+WklsAAAAAQUIPAAAAAABNrOMgm7m206g2dYCTtpvB; expires=Sat, 07 Sep 2019 09:11:05 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=n8bramx96WYAyRPd6lKYhQAAAACYFCQj/ddhIxsMwX0jy6CG; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=YErHG5Y5xAlEpjs+1y0oDP+WklsAAAAARlfZlAMUjuXCKbZDLFHCLg==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '5-3553910-3553913 NNNN CT(0 0 0) RT(1536333567234 20) q(0 0 0 -1) r(1 1) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/blogPost', {"name":"Blog post","fields":[{"id":"slug","name":"URL Slug","type":"Symbol","required":true}],"description":"super angry"})
  .reply(201, {"sys":{"space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"id":"blogPost","type":"ContentType","createdAt":"2018-09-07T15:19:27.778Z","updatedAt":"2018-09-07T15:19:27.778Z","environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}},"createdBy":{"sys":{"type":"Link","linkType":"User","id":"33kZDXNajFNmbngiu5MvUa"}},"updatedBy":{"sys":{"type":"Link","linkType":"User","id":"33kZDXNajFNmbngiu5MvUa"}},"version":1},"displayField":null,"name":"Blog post","description":"super angry","fields":[{"id":"slug","name":"URL Slug","type":"Symbol","localized":false,"required":true,"validations":[],"disabled":false,"omitted":false}]}, [ 'Access-Control-Allow-Headers',
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
  'Fri, 07 Sep 2018 15:19:27 GMT',
  'ETag',
  '"f24510b6c324a3d6fdbc8f73982f48aa"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35506',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '7',
  'X-Contentful-Request-Id',
  '4075472ba60911a22cf20afe62aa64b6',
  'Content-Length',
  '1027',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=28ESIDwITQmkhwiwxc6Clf+WklsAAAAAQUIPAAAAAADWlZJxsAwP0Zz83MGK7Dhj; expires=Sat, 07 Sep 2019 09:11:05 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=CEupU4CnaE/evyW56lKYhQAAAABKMCQORdOLAxa3cKthUWiy; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=oq7jcb3PUmU9pzs+1y0oDP+WklsAAAAAqm9EE8TQr+3Nrc5yW6yzlQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '12-5889992-5889996 NNNN CT(89 90 0) RT(1536333567415 23) q(0 0 2 -1) r(4 4) U5',
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
    "createdAt": "2018-09-07T15:19:27.778Z",
    "updatedAt": "2018-09-07T15:19:28.112Z",
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
    "firstPublishedAt": "2018-09-07T15:19:28.112Z",
    "publishedCounter": 1,
    "publishedAt": "2018-09-07T15:19:28.112Z",
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
  'Fri, 07 Sep 2018 15:19:28 GMT',
  'ETag',
  'W/"9804277a933dbd51869944ff3ee007db"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35505',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '1cc716b4c1babd6a6dab253516cec864',
  'Content-Length',
  '448',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=+e8ngqLVSgyd3c/I6qfbrwCXklsAAAAAQUIPAAAAAADuf+wTGWvlEbDNs7Hc2uB9; expires=Sat, 07 Sep 2019 09:10:37 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=slhcA6qF01pOYi3z6lKYhQAAAAA/rfIbHtxMYmaV91D8YHBn; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=v+LnX2UMHBfBpzs+1y0oDACXklsAAAAADp5ZYQXmdCBas4s+ibfofQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '14-7823246-7823255 NNNN CT(0 0 0) RT(1536333567940 26) q(0 0 0 -1) r(3 3) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/blogPost/editor_interface', {"controls":[{"fieldId":"slug","widgetId":"slugEditor"}]})
  .reply(200, {"controls":[{"fieldId":"slug","widgetId":"slugEditor"}],"sys":{"id":"default","type":"EditorInterface","space":{"sys":{"id":"bohepdihyxin","type":"Link","linkType":"Space"}},"version":2,"createdAt":"2018-09-07T15:19:28.214Z","createdBy":{"sys":{"id":"33kZDXNajFNmbngiu5MvUa","type":"Link","linkType":"User"}},"updatedAt":"2018-09-07T15:19:28.649Z","updatedBy":{"sys":{"type":"Link","linkType":"User","id":"33kZDXNajFNmbngiu5MvUa"}},"contentType":{"sys":{"id":"blogPost","type":"Link","linkType":"ContentType"}},"environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}}}}, [ 'Access-Control-Allow-Headers',
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
  'Fri, 07 Sep 2018 15:19:28 GMT',
  'ETag',
  '"731280fb669962836357a97d7b71eb8c"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35504',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  '67a60890c42a4020635e807dbdcea755',
  'Content-Length',
  '951',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=S54jlcTNSN+p+gt7ZoZNCQCXklsAAAAAQUIPAAAAAAAJ2ZnKhqQq3scH3x8ci4HQ; expires=Sat, 07 Sep 2019 09:11:05 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=y6gKJhcydzs5uKRp6lKYhQAAAACNsmXHbwVcZV3Eaxq+OoVS; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=VcD4fhFOIB3DqDs+1y0oDACXklsAAAAAlZ25gNifiQMAjBpJIib6ig==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '12-5890208-5890216 NNNN CT(87 88 0) RT(1536333568315 24) q(0 0 2 -1) r(5 5) U5',
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
    "createdAt": "2018-09-07T15:19:28.214Z",
    "createdBy": {
      "sys": {
        "id": "33kZDXNajFNmbngiu5MvUa",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2018-09-07T15:19:28.649Z",
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
  'Fri, 07 Sep 2018 15:19:29 GMT',
  'ETag',
  '"5e6dd8f772d13ebf07b734314033ff26"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35503',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '3f4d8ffd6045a2e9a289be3d98032370',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=38wec+sXRRWPAGD7LhPgxwGXklsAAAAAQUIPAAAAAABSBB7RXnozFcFp0rgnCb61; expires=Sat, 07 Sep 2019 09:11:05 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=FmDkEnl2P3KXkJmV6lKYhQAAAAC1FCfM5uQxXW4Bi3yKWXgj; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=90bRLwPGgG1TqTs+1y0oDAGXklsAAAAAYEAnz2h3jl6UvcOhdEVKlw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '10-2978928-2978932 NNNN CT(0 0 0) RT(1536333568996 25) q(0 0 0 -1) r(1 1) U5',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/content_types')
  .query({"sys.id":{"in":"blogPost"}})
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
        "createdAt": "2018-09-07T15:19:27.778Z",
        "updatedAt": "2018-09-07T15:19:28.112Z",
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
        "firstPublishedAt": "2018-09-07T15:19:28.112Z",
        "publishedAt": "2018-09-07T15:19:28.112Z"
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
  'Fri, 07 Sep 2018 15:19:29 GMT',
  'ETag',
  'W/"20fec46d1a102f4561f02b079ae7c670"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35502',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  'a397c6d8806f65d4b0e0dc690f3b0f30',
  'Content-Length',
  '516',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=L/ZcTCiwTxmCOMLFN/3TZQGXklsAAAAAQUIPAAAAAAD1LK0Y4Csaz4zrgYytF+Du; expires=Sat, 07 Sep 2019 09:10:37 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=rgRcI4yIPGioiI3u6lKYhQAAAABR6KEE6cCvSskv5pfF4npE; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=NwlcGZ/80lugqTs+1y0oDAGXklsAAAAAjImbd8mcy4EhttLAEHDYSw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '14-7823722-7823735 NNNN CT(0 0 0) RT(1536333569208 22) q(0 0 0 -1) r(1 1) U5',
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
    "createdAt": "2018-09-07T15:19:28.214Z",
    "createdBy": {
      "sys": {
        "id": "33kZDXNajFNmbngiu5MvUa",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2018-09-07T15:19:28.649Z",
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
  'Fri, 07 Sep 2018 15:19:29 GMT',
  'ETag',
  '"5e6dd8f772d13ebf07b734314033ff26"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35501',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '7',
  'X-Contentful-Request-Id',
  '1ac22ca44ba4fba4a75a58654f3ab5d0',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=ontJS8D1QtK9owkQWD6wvQGXklsAAAAAQUIPAAAAAACn2g0BvvCsl2n0JWfm+6vy; expires=Sat, 07 Sep 2019 09:11:05 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=brh7bEp7CmvLYP696lKYhQAAAADRPm02iAljVB7a+IMOuBkL; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=Dh6rQG+5jkD6qTs+1y0oDAGXklsAAAAA2hGMupbKuISXaR6VOnOt6g==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '3-1941463-1941466 NNNN CT(0 0 0) RT(1536333569422 28) q(0 0 0 -1) r(1 1) U5',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/locales')
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
        "createdAt":"2018-09-07T15:18:52Z",
        "updatedBy":{
          "sys":{
            "type":"Link",
            "linkType":"User",
            "id":"33kZDXNajFNmbngiu5MvUa"
          }
        },
        "updatedAt":"2018-09-07T15:18:52Z"
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
  'Fri, 07 Sep 2018 15:19:29 GMT',
  'ETag',
  'W/"e2aa390942bca26c3913575847123d35"',
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
  '35500',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '6',
  'X-Contentful-Request-Id',
  '174107c418e968cdb4e2ff1d6e643beb',
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
  'visid_incap_673446=N2rm6QlxQO23jSjgWg9DoQGXklsAAAAAQUIPAAAAAADIiVDhE831V52w0i2Neq6F; expires=Sat, 07 Sep 2019 09:11:05 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=8gfSdENDij4a3C9R6lKYhQAAAACCRHIHISgtqsKBy7FSKHbg; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=hK3jNa0qYhNRqjs+1y0oDAGXklsAAAAAejgmLtM9f2VWQNABvgWRaQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '6-1524180-1524181 NNNN CT(0 0 0) RT(1536333569617 18) q(0 0 0 -1) r(1 1) U5',
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
    "createdAt": "2018-09-07T15:19:27.778Z",
    "updatedAt": "2018-09-07T15:19:30.037Z",
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
    "firstPublishedAt": "2018-09-07T15:19:28.112Z",
    "publishedAt": "2018-09-07T15:19:28.112Z"
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
  'Fri, 07 Sep 2018 15:19:30 GMT',
  'ETag',
  'W/"7b8d0f84bb0528437f3a54f89338262e"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35499',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '5',
  'X-Contentful-Request-Id',
  '5d102d5cafd180d5e2b5c64ec7bfeb02',
  'Content-Length',
  '455',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=RDVMt4ZRQP6zxre6xPQq3wKXklsAAAAAQUIPAAAAAAA3ncd26sM1JuCi7zxEJEiq; expires=Sat, 07 Sep 2019 09:11:05 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=XtXkNzLIulTlXuHO6lKYhQAAAAAsfNdf4MuLBYI/cf2fCVud; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=dQFMWDPFBhPHqjs+1y0oDAKXklsAAAAAc2b1v2CuGDnoV9A6ZvDJ4w==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '10-2979039-2979044 NNNN CT(0 0 0) RT(1536333569801 22) q(0 0 0 -1) r(2 2) U5',
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
    "createdAt": "2018-09-07T15:19:27.778Z",
    "updatedAt": "2018-09-07T15:19:30.377Z",
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
    "firstPublishedAt": "2018-09-07T15:19:28.112Z",
    "publishedAt": "2018-09-07T15:19:30.377Z"
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
  'Fri, 07 Sep 2018 15:19:30 GMT',
  'ETag',
  'W/"5ae24535c7c67beb7c481b41328e23ae"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35498',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '0cbd911b65413dbe150f719a9e162d21',
  'Content-Length',
  '460',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=vi8q8RwkSsqu7QPVrnlZ7QKXklsAAAAAQUIPAAAAAAA7u1aUdmMqIX017EohQX4j; expires=Sat, 07 Sep 2019 09:11:05 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=ioByQVX0MTho6bMU6lKYhQAAAAAA8gGGDiPICIqW3hgqadu7; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=NwfHIo6lPCajqzs+1y0oDAKXklsAAAAAzN5nCtfU+0h4L4uvG32XSw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '12-5890656-5890662 NNNN CT(0 0 0) RT(1536333570112 29) q(0 0 0 -1) r(4 4) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/blogPost/editor_interface', {"controls":[{"fieldId":"slug","widgetId":"singleLine"}]})
  .reply(200, {"controls":[{"fieldId":"slug","widgetId":"singleLine"}],"sys":{"id":"default","type":"EditorInterface","space":{"sys":{"id":"bohepdihyxin","type":"Link","linkType":"Space"}},"version":4,"createdAt":"2018-09-07T15:19:28.214Z","createdBy":{"sys":{"id":"33kZDXNajFNmbngiu5MvUa","type":"Link","linkType":"User"}},"updatedAt":"2018-09-07T15:19:30.965Z","updatedBy":{"sys":{"type":"Link","linkType":"User","id":"33kZDXNajFNmbngiu5MvUa"}},"contentType":{"sys":{"id":"blogPost","type":"Link","linkType":"ContentType"}},"environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}}}}, [ 'Access-Control-Allow-Headers',
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
  'Fri, 07 Sep 2018 15:19:31 GMT',
  'ETag',
  '"578f23139cbc2dbca9a32c122cd428d0"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35497',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  '5df01fbb66366365cdce2d4d9fef5f17',
  'Content-Length',
  '951',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=W9ZazRc5TPyeAWMcVJV93AKXklsAAAAAQUIPAAAAAACLxjrkRgKeWsgn6hUlLqfx; expires=Sat, 07 Sep 2019 09:11:05 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=XQ3sAkt+8FfDI1Gj6lKYhQAAAADKHSyHV9rxwKsoZpcb34cE; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=SHTcd5RYyU9nrDs+1y0oDAKXklsAAAAAxqF6CFJSujtD4g8Q4Uw7CA==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '3-1941579-1941581 NNNN CT(86 87 0) RT(1536333570611 15) q(0 0 2 -1) r(3 3) U5',
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
    "createdAt": "2018-09-07T15:19:28.214Z",
    "createdBy": {
      "sys": {
        "id": "33kZDXNajFNmbngiu5MvUa",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2018-09-07T15:19:30.965Z",
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
  'Fri, 07 Sep 2018 15:19:31 GMT',
  'ETag',
  '"a0c4f846ed49ba422e91274d9ed20844"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35496',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'fc05788ff0b2a5db8fba3bd74a7d2bc1',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=0/XoXFjHSIie021oT9hW9wOXklsAAAAAQUIPAAAAAAAESkaxJX/3KXwjdBYQlgtb; expires=Sat, 07 Sep 2019 09:11:05 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=sZHLYY1oTj/ZR/0V6lKYhQAAAAA4LqbNmQ3G3Wsy6VRS4tFf; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=bvFoD2CpUSayrDs+1y0oDAOXklsAAAAAWA0HtuX+wUt5rGQItMI1lA==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '6-1524252-1524254 NNNN CT(0 0 0) RT(1536333571033 15) q(0 0 0 -1) r(1 1) U5',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/content_types')
  .query({"sys.id":{"in":"blogPost"}})
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
        "createdAt": "2018-09-07T15:19:27.778Z",
        "updatedAt": "2018-09-07T15:19:30.377Z",
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
        "firstPublishedAt": "2018-09-07T15:19:28.112Z",
        "publishedAt": "2018-09-07T15:19:30.377Z"
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
  'Fri, 07 Sep 2018 15:19:31 GMT',
  'ETag',
  'W/"c42df32dc628680ad0ee8a0da7d4d674"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35495',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  '45b0d7b99d067f6b64b88c3c4e55a647',
  'Content-Length',
  '525',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=moWQKejHQ0aUDkCCbptvHwOXklsAAAAAQUIPAAAAAACTNJdW9ZKdBIms3f62ZzYP; expires=Sat, 07 Sep 2019 09:10:37 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=cLChUSqjc3XZby936lKYhQAAAADNm2YgzU+icgEb96/wyxvf; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=OBvKFIp2LThLrTs+1y0oDAOXklsAAAAADJ5vsbvEUxhCgCSyTNQVGQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '14-7824459-7824469 NNNN CT(89 93 0) RT(1536333571228 31) q(0 0 2 -1) r(3 3) U5',
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
    "createdAt": "2018-09-07T15:19:28.214Z",
    "createdBy": {
      "sys": {
        "id": "33kZDXNajFNmbngiu5MvUa",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2018-09-07T15:19:30.965Z",
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
  'Fri, 07 Sep 2018 15:19:31 GMT',
  'ETag',
  '"a0c4f846ed49ba422e91274d9ed20844"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35494',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '7',
  'X-Contentful-Request-Id',
  'c849f6629cfda50b2b9005f3329c7377',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=YjBMTtHBS/eiyMv6eySzUwOXklsAAAAAQUIPAAAAAAAdefa+NElPqY1WMHK5z6yJ; expires=Sat, 07 Sep 2019 09:10:37 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=NDIMMSSBHR7zb5vq6lKYhQAAAADjyphpxqz62AsxsFxLnaXd; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=NDKeOIvp2j2zrTs+1y0oDAOXklsAAAAAO28V9JaaLXk+kDiQ9/035w==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '11-4820109-4820113 NNNN CT(0 0 0) RT(1536333571633 15) q(0 0 0 -1) r(2 2) U5',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/locales')
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
        "createdAt":"2018-09-07T15:18:52Z",
        "updatedBy":{
          "sys":{
            "type":"Link",
            "linkType":"User",
            "id":"33kZDXNajFNmbngiu5MvUa"
          }
        },
        "updatedAt":"2018-09-07T15:18:52Z"
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
  'Fri, 07 Sep 2018 15:19:32 GMT',
  'ETag',
  'W/"e2aa390942bca26c3913575847123d35"',
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
  '35493',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'b438682b6097940903627fe832661db2',
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
  'visid_incap_673446=VTEihcqgRwK+m3/w+zBsvASXklsAAAAAQUIPAAAAAAAY54O23JcUeRuDqCDdhg1v; expires=Sat, 07 Sep 2019 09:11:05 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=Cl9ZXNjaFzuUl7iD6lKYhQAAAACq4W4GgGXSmDguMzAlflmr; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=Xe3sGnr2NyX4rTs+1y0oDASXklsAAAAA6oNdDouwT7hGmECnc0V0Ww==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '5-3554565-3554569 NNNN CT(0 0 0) RT(1536333571892 17) q(0 0 0 -1) r(1 1) U5',
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
    "createdAt": "2018-09-07T15:19:27.778Z",
    "updatedAt": "2018-09-07T15:19:32.229Z",
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
    "firstPublishedAt": "2018-09-07T15:19:28.112Z",
    "publishedAt": "2018-09-07T15:19:30.377Z"
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
  'Fri, 07 Sep 2018 15:19:32 GMT',
  'ETag',
  'W/"9a700f891ae6704aaf566d1a21068c5e"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35492',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  '09b8254751f1335a2ede9599c35694aa',
  'Content-Length',
  '463',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=WQJK/gYFTGSU0pmcT1LR0QSXklsAAAAAQUIPAAAAAAAS0Fz/prBy6jIBENTInFmL; expires=Sat, 07 Sep 2019 09:10:37 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=6tX9U7psFFPqG7xq6lKYhQAAAABgHFgTOQLKFOvSyFIWeSfE; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=GvXVb6j4dnJArjs+1y0oDASXklsAAAAAulc6XG1SVMoKvAVq13k+Ow==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '11-4820190-4820195 NNNN CT(0 0 0) RT(1536333572059 21) q(0 0 0 -1) r(2 2) U5',
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
    "createdAt": "2018-09-07T15:19:27.778Z",
    "updatedAt": "2018-09-07T15:19:32.471Z",
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
    "firstPublishedAt": "2018-09-07T15:19:28.112Z",
    "publishedAt": "2018-09-07T15:19:32.471Z"
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
  'Fri, 07 Sep 2018 15:19:32 GMT',
  'ETag',
  'W/"fe388fa93e595b92f8c8ad1998c28491"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35491',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '7',
  'X-Contentful-Request-Id',
  '275441d5a60b7a8a8282021dde7dd2eb',
  'Content-Length',
  '460',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=an61bB4bQ9mwQbf/HEvqKASXklsAAAAAQUIPAAAAAACQp58bTHV0Mk/AUCPQa+0p; expires=Sat, 07 Sep 2019 09:11:05 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=gUV3TjeBwGovLw+86lKYhQAAAAAPzyRizzpoDyJ4hh4YJUgE; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=N11vNv6NdC/Irjs+1y0oDASXklsAAAAAGNoWUAnGLiIY11WbCq1JiQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '12-5891124-5891128 NNNN CT(0 0 0) RT(1536333572281 16) q(0 0 0 -1) r(4 4) U5',
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
    "createdAt": "2018-09-07T15:19:28.214Z",
    "createdBy": {
      "sys": {
        "id": "33kZDXNajFNmbngiu5MvUa",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2018-09-07T15:19:32.829Z",
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
  'Fri, 07 Sep 2018 15:19:32 GMT',
  'ETag',
  'W/"0c98a08df6c7b26be249b643e8aeee66"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35490',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '6',
  'X-Contentful-Request-Id',
  '75a2b97db2fea035b29421c10e783a03',
  'Content-Length',
  '404',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=eXqvNr9JTd6D/VkDrbiFZwSXklsAAAAAQUIPAAAAAACfV8IsOpxlQqasXxYCUEmu; expires=Sat, 07 Sep 2019 09:11:05 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=HLcNGIawTU/wHjvP6lKYhQAAAADF/KvRHRHrfIr0J/W6dEIj; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=a5JyKlVqlUUirzs+1y0oDASXklsAAAAAhpSYYgqyfLs8pcprwx/2Fg==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '2-996957-996959 NNNN CT(0 0 0) RT(1536333572659 21) q(0 0 0 -1) r(2 2) U5',
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
    "createdAt": "2018-09-07T15:19:28.214Z",
    "createdBy": {
      "sys": {
        "id": "33kZDXNajFNmbngiu5MvUa",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2018-09-07T15:19:32.829Z",
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
  'Fri, 07 Sep 2018 15:19:33 GMT',
  'ETag',
  'W/"98298acd47d1bd8108504c0cae77eca8"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35489',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '78d90bdae1ce0352c0c1012a15c18ab7',
  'Content-Length',
  '393',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=H//wgjL7QPGcHknNik24swWXklsAAAAAQUIPAAAAAADaVVA9afVns1nSxT9ETM48; expires=Sat, 07 Sep 2019 09:11:05 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=Pw0eEnNwhC0UU9Yj6lKYhQAAAAA5kD3ynExebtaByBLGSwdH; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=Kv90A0QLe0h3rzs+1y0oDAWXklsAAAAAXq7qIArLVDcyJ0svxlE2GQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '13-7025715-7025726 NNNN CT(0 0 0) RT(1536333572909 26) q(0 0 0 -1) r(1 1) U5',
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
  'Fri, 07 Sep 2018 15:19:33 GMT',
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
  '35488',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  'e9e6b6f98df2d7b3957b74752a09fafa',
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
  'visid_incap_673446=39D37yXyS8SNq+1eR74FNgWXklsAAAAAQUIPAAAAAACVff/xycQAsKHNePM4c5Gw; expires=Sat, 07 Sep 2019 09:11:06 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=kwFDd2nBzh4o5bXb6lKYhQAAAAC/umPCgCo6CoDOSpxltxiF; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=t8b8BO6XvCIfsDs+1y0oDAWXklsAAAAA7AKuO1NCAHEDywPtJ5IiSQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '8-441124-441125 NNNN CT(0 0 0) RT(1536333573120 17) q(0 0 0 -1) r(3 3) U5',
  'X-CDN',
  'Incapsula' ]);
