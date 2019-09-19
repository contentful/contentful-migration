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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'Mon, 23 Sep 2019 14:31:21 GMT',
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
  'd67a9e7d0e016aeb870cc13bc13e960f',
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
  'visid_incap_673446=3YrXomuWRce/HLp3SlDavDnXiF0AAAAAQUIPAAAAAAB/VwkYDbq5hZO6EPoSdFht; expires=Tue, 22 Sep 2020 07:18:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=dConaIvfAUtBouEHYMlkBAAAAAAX+0TKa9ol+Y6bNY1wM3iq; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=jSe2BgGeEx8XpvBJREbyDjnXiF0AAAAAOSV2L85aDkrESDwrC7t+Wg==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '5-6481072-6481074 NNNN CT(0 0 0) RT(1569249081234 54) q(0 0 0 -1) r(2 2) U5',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration', {"name":"env-integration"})
  .reply(201, {"sys":{"type":"Environment","id":"env-integration","version":1,"space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"status":{"sys":{"type":"Link","linkType":"Status","id":"queued"}},"createdBy":{"sys":{"type":"Link","linkType":"User","id":"33kZDXNajFNmbngiu5MvUa"}},"createdAt":"2019-09-23T14:31:22Z","updatedBy":{"sys":{"type":"Link","linkType":"User","id":"33kZDXNajFNmbngiu5MvUa"}},"updatedAt":"2019-09-23T14:31:22Z"},"name":"env-integration"}, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'Mon, 23 Sep 2019 14:31:22 GMT',
  'ETag',
  'W/"31c64e40dddf74857f45473dd4476c9a"',
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
  'c508dded1b7bff59f0323c5f14e470dc',
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
  'visid_incap_673446=Cgmi14ueSaOsX9fQXCDfDTrXiF0AAAAAQUIPAAAAAADEEq9bd+41wgD5hIBogg7v; expires=Tue, 22 Sep 2020 07:18:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=5eviJWE39FY0gE0fYMlkBAAAAAB9Gv6SCcrHoYPUJ90qCdhp; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=MiJ8ExpYwg49pvBJREbyDjrXiF0AAAAAfMXQJF/kWrTI05Q8TQg+/w==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '5-6481080-6481081 NNNN CT(0 0 0) RT(1569249081526 19) q(0 0 0 -1) r(9 9) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration')
  .reply(200, {
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
    "createdAt":"2019-09-23T14:31:22Z",
    "updatedBy":{
      "sys":{
        "type":"Link",
        "linkType":"User",
        "id":"33kZDXNajFNmbngiu5MvUa"
      }
    },
    "updatedAt":"2019-09-23T14:31:23Z"
  },
  "name":"env-integration"
}

, [ 'Accept-Ranges',
  'bytes',
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'Mon, 23 Sep 2019 14:31:25 GMT',
  'ETag',
  'W/"25f93800e96d050f6a35ad134f6d46ac"',
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
  '1a24fc80fa8b7b67baccfb110340a3fe',
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
  'visid_incap_673446=/uQQ+vThTeqy7Nq59tSIKjzXiF0AAAAAQUIPAAAAAACUN7ESvVWtoO7pkDTAvI6x; expires=Tue, 22 Sep 2020 07:18:36 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=lhx6KCVB0XJnQUYDYMlkBAAAAAAypJmzlTbGmLfCrGoBtC9k; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=GB/ZTpA4onRppvBJREbyDjzXiF0AAAAAvgGQZ4TfGBrZfYLpqDffMA==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '4-5146188-5146189 NNNN CT(97 99 0) RT(1569249082464 22) q(0 0 2 -1) r(24 24) U5',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration')
  .reply(200, {
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
    "createdAt":"2019-09-23T14:31:22Z",
    "updatedBy":{
      "sys":{
        "type":"Link",
        "linkType":"User",
        "id":"33kZDXNajFNmbngiu5MvUa"
      }
    },
    "updatedAt":"2019-09-23T14:31:25Z"
  },
  "name":"env-integration"
}

, [ 'Accept-Ranges',
  'bytes',
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'Mon, 23 Sep 2019 14:31:30 GMT',
  'ETag',
  'W/"95988933998b9655bd7f07579923bf01"',
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
  'e17b6c7d7d12fae165caf8d340db575d',
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
  'visid_incap_673446=/0WIJvtYTXmdfZ0YoPXWkkLXiF0AAAAAQUIPAAAAAADT+TBhy0GMhcCSPmmnyov1; expires=Tue, 22 Sep 2020 07:18:11 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=aR9MUbWkjVkWcAMYYMlkBAAAAADNLeKK2e+G+BUJThELvJuI; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=4lMgMwd7FETtpvBJREbyDkLXiF0AAAAAjEZJKcBfmT1cYrrV3xmG5w==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '7-5440297-5440298 NNNN CT(103 104 0) RT(1569249085913 18) q(0 0 2 -1) r(45 45) U5',
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'ab4c47b4-c642-4ea9-b50c-5ff9f9ab6a60',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Mon, 23 Sep 2019 14:31:31 GMT',
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
  'fb835142c00af7484c3426b208467a93',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=aOcPuuNrTqeWKiGZu9DyGUPXiF0AAAAAQUIPAAAAAAAoSYJlGcjJkQMFN3MnEOUL; expires=Tue, 22 Sep 2020 07:18:36 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=fSP1YIApZBWK82FbYMlkBAAAAAA/FVVYjbL2EK1zFQkCKLAE; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=Cl5iFEruEyH7pvBJREbyDkPXiF0AAAAA41uyhI9cW3I+o22cyiEEiw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '1-3097698-3097699 NNNN CT(0 0 0) RT(1569249090479 19) q(0 0 0 -1) r(6 6) U5',
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
        "createdAt":"2019-09-23T14:31:22Z",
        "updatedAt":"2019-09-23T14:31:22Z"
      }
    }
  ]
}

, [ 'Accept-Ranges',
  'bytes',
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'Mon, 23 Sep 2019 14:31:32 GMT',
  'ETag',
  'W/"ab72d22aec43abe7eccc4f8dcafb1136"',
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
  'babdde3058dfbd84b7e9d4f354bad9b7',
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
  'visid_incap_673446=i6GLsdIgRVeicln3cftKRETXiF0AAAAAQUIPAAAAAADiA7+YLln3J3Av1jFN4S1u; expires=Tue, 22 Sep 2020 07:18:36 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=igqeMoFFQWo5T5ViYMlkBAAAAADnUCxu23X82guj+3Jzz/jD; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=pvSxJm9KGHASp/BJREbyDkTXiF0AAAAAF3UDjtvyRn1QlvGYzdB1fw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '4-5146296-5146297 NNNN CT(103 210 0) RT(1569249091062 17) q(0 0 3 -1) r(11 11) U5',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/dog', {"name":"angry dog","fields":[{"id":"woofs","name":"woof woof","type":"Number","required":true}],"description":"super angry"})
  .reply(201, {"sys":{"space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"id":"dog","type":"ContentType","createdAt":"2019-09-23T14:31:33.229Z","updatedAt":"2019-09-23T14:31:33.229Z","environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}},"createdBy":{"sys":{"type":"Link","linkType":"User","id":"33kZDXNajFNmbngiu5MvUa"}},"updatedBy":{"sys":{"type":"Link","linkType":"User","id":"33kZDXNajFNmbngiu5MvUa"}},"publishedCounter":0,"version":1},"displayField":null,"name":"angry dog","description":"super angry","fields":[{"id":"woofs","name":"woof woof","type":"Number","localized":false,"required":true,"validations":[],"disabled":false,"omitted":false}]}, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'ab4c47b4-c642-4ea9-b50c-5ff9f9ab6a60',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Mon, 23 Sep 2019 14:31:33 GMT',
  'ETag',
  '"10047454802775827615"',
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
  '859ac717fa5784fe2cddac2aa9a393fc',
  'Content-Length',
  '1051',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=PlTKpJb3SuO5YCRjAmkdT0TXiF0AAAAAQUIPAAAAAADDY/5QFKEyo83cSFTGQhvP; expires=Tue, 22 Sep 2020 07:18:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=jKX2VhqStXPaSDckYMlkBAAAAAAXme4FlJRlq4aCXm4qwtwe; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=ONYBDn06xCkdp/BJREbyDkTXiF0AAAAABXr7sL0JWzsdFCNPqnzEsw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '5-6481358-6481359 NNNN CT(0 0 0) RT(1569249092218 17) q(0 0 0 -1) r(5 5) U5',
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
    "createdAt": "2019-09-23T14:31:33.229Z",
    "updatedAt": "2019-09-23T14:31:33.771Z",
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
    "firstPublishedAt": "2019-09-23T14:31:33.771Z",
    "publishedAt": "2019-09-23T14:31:33.771Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'ab4c47b4-c642-4ea9-b50c-5ff9f9ab6a60',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Mon, 23 Sep 2019 14:31:34 GMT',
  'ETag',
  'W/"1992807404976726000"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'b8e164a9a006c337c83106a8ec359aa3',
  'Content-Length',
  '439',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=LFwj7d3lR0qjigL3v2BzYUXXiF0AAAAAQUIPAAAAAAD/0x/i3O1aL204t3tmQWKP; expires=Tue, 22 Sep 2020 07:18:36 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=0SsddH72AAAd6I+EYMlkBAAAAABfD+6LbtzhVTM+lwPe6pEl; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=dRZFOZiLmSUmp/BJREbyDkXXiF0AAAAAE2lr0wRLt9if6yUDf5C+3Q==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '3-4959757-4959758 NNNN CT(0 0 0) RT(1569249092850 19) q(0 0 0 -1) r(8 8) U5',
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
    "createdAt": "2019-09-23T14:31:33.229Z",
    "updatedAt": "2019-09-23T14:31:33.771Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 1,
    "publishedAt": "2019-09-23T14:31:33.771Z",
    "firstPublishedAt": "2019-09-23T14:31:33.771Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'ab4c47b4-c642-4ea9-b50c-5ff9f9ab6a60',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Mon, 23 Sep 2019 14:31:34 GMT',
  'ETag',
  'W/"17204288223235259799"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '990e44c7dd24e30892c95b66cf80aa88',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=JXp29iTMSPW1c0GLlGykgkbXiF0AAAAAQUIPAAAAAACAMeGDlI3xzpC4OWZ/zX5r; expires=Tue, 22 Sep 2020 07:18:11 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=nEuddQbQ1Gj3VSV+YMlkBAAAAABjPRP3/IjCWAhJlAK1ve2R; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=7fReY2VHZSorp/BJREbyDkbXiF0AAAAAXWSv9VsQ8Kms7auiSTDAUQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '7-5440423-5440424 NNNN CT(0 0 0) RT(1569249093708 18) q(0 0 0 -1) r(3 3) U5',
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
        "createdAt": "2019-09-23T14:31:33.229Z",
        "updatedAt": "2019-09-23T14:31:33.771Z",
        "environment": {
          "sys": {
            "id": "env-integration",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 1,
        "publishedAt": "2019-09-23T14:31:33.771Z",
        "firstPublishedAt": "2019-09-23T14:31:33.771Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'ab4c47b4-c642-4ea9-b50c-5ff9f9ab6a60',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Mon, 23 Sep 2019 14:31:39 GMT',
  'ETag',
  'W/"9490135591901876006"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '4aab2503033a9513d115f2af0feaf339',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=z7BnvjrHSAOXwZ/X6GerVUvXiF0AAAAAQUIPAAAAAACv0CPscYh4aOtV4wRrBtyF; expires=Tue, 22 Sep 2020 07:18:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=2lkWbzYRbGuzCrlbYMlkBAAAAAB0P/9vLUfTdS2WGlQfK1Tw; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=gALRQSqo2Cyvp/BJREbyDkvXiF0AAAAAlU7rFXHgDwOQgh0WFNWivg==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '5-6481537-6481539 NNNN CT(0 0 0) RT(1569249099153 19) q(0 0 0 -1) r(2 2) U5',
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
        "createdAt":"2019-09-23T14:31:22Z",
        "updatedAt":"2019-09-23T14:31:22Z"
      }
    }
  ]
}

, [ 'Accept-Ranges',
  'bytes',
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'Mon, 23 Sep 2019 14:31:41 GMT',
  'ETag',
  'W/"ab72d22aec43abe7eccc4f8dcafb1136"',
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
  '80776232d6abd6e8aa4c0909e6a85fee',
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
  'visid_incap_673446=9XA2tcPBTIG3DsX1XDEhNkzXiF0AAAAAQUIPAAAAAAAjRMDIuXsREUz5LVtXY8yR; expires=Tue, 22 Sep 2020 07:18:59 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=+M0hZm6+a31JBOTbYMlkBAAAAACljtBGnVapjh3IuA9Ra8JZ; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=W1ayGTiQ4xXBp/BJREbyDkzXiF0AAAAAE8EsJYjJfyKi4h/xrDz4PQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '13-2257873-2257874 NNNN CT(102 103 0) RT(1569249099405 18) q(0 0 2 -1) r(11 11) U5',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked' ]);


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
    "createdAt": "2019-09-23T14:31:33.229Z",
    "updatedAt": "2019-09-23T14:31:41.358Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 1,
    "publishedAt": "2019-09-23T14:31:33.771Z",
    "firstPublishedAt": "2019-09-23T14:31:33.771Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'ab4c47b4-c642-4ea9-b50c-5ff9f9ab6a60',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Mon, 23 Sep 2019 14:31:41 GMT',
  'ETag',
  'W/"12712977177994258274"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '893a554053db69937ddd652a733db5b7',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=hXYMBNTfSXKnsiHBjk2bikzXiF0AAAAAQUIPAAAAAAA40CiumM2vEEaMLi/n9f8W; expires=Tue, 22 Sep 2020 07:18:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=FZX/EE9NU0DPRCMzYMlkBAAAAACLN6wpdVzgciNOCOW8iJRx; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=MX5IUqUJ1gTDp/BJREbyDkzXiF0AAAAAuG07W725ipzTlhaGJzqk1Q==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '5-6481585-6481586 NNNN CT(0 0 0) RT(1569249100624 17) q(0 0 0 -1) r(2 2) U5',
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
    "createdAt": "2019-09-23T14:31:33.229Z",
    "updatedAt": "2019-09-23T14:31:41.601Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 3,
    "publishedAt": "2019-09-23T14:31:41.601Z",
    "firstPublishedAt": "2019-09-23T14:31:33.771Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'ab4c47b4-c642-4ea9-b50c-5ff9f9ab6a60',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Mon, 23 Sep 2019 14:31:41 GMT',
  'ETag',
  'W/"2396796112136925624"',
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
  '9f40da5242953cd28244bfb9ddd3bfad',
  'Content-Length',
  '451',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=OHwUMYR+Qo+8Leurrczc+k3XiF0AAAAAQUIPAAAAAAD+poiNhlnn59kk13cMkJQd; expires=Tue, 22 Sep 2020 07:18:36 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=vUZAHUz/chh9/BsfYMlkBAAAAABAGQRBBpbqLd8kygLaRyC0; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=lUiZOoA4JCPKp/BJREbyDk3XiF0AAAAAN8CHdIbRiPz9Foejfp33mg==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '4-5146392-5146395 NNNN CT(0 0 0) RT(1569249100908 18) q(0 0 0 -1) r(5 5) U5',
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
    "createdAt": "2019-09-23T14:31:33.229Z",
    "updatedAt": "2019-09-23T14:31:42.172Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 3,
    "publishedAt": "2019-09-23T14:31:41.601Z",
    "firstPublishedAt": "2019-09-23T14:31:33.771Z",
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
    }
  },
  "displayField": null,
  "name": "angry dog",
  "description": "super angry",
  "fields": []
}
, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'ab4c47b4-c642-4ea9-b50c-5ff9f9ab6a60',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Mon, 23 Sep 2019 14:31:42 GMT',
  'ETag',
  'W/"6268811848991868843"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '2ec28f1220b193da5038e710c4fa99dc',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=jiQ7QI1LRViG0SnBXkiBnU3XiF0AAAAAQUIPAAAAAADmI1bTNiHEMN1CXGl1dVdZ; expires=Tue, 22 Sep 2020 07:18:36 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=vlo4a6LYtkyolKk6YMlkBAAAAABb31jQpcis3NgoLuFyvEBY; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=DnErPvTMfi7Op/BJREbyDk3XiF0AAAAAO7xiDPnRfagGwwXOdSoTLQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '4-5146402-5146403 NNNN CT(0 0 0) RT(1569249101464 18) q(0 0 0 -1) r(2 2) U5',
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
    "createdAt": "2019-09-23T14:31:33.229Z",
    "updatedAt": "2019-09-23T14:31:42.422Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 5,
    "publishedAt": "2019-09-23T14:31:42.422Z",
    "firstPublishedAt": "2019-09-23T14:31:33.771Z",
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
    }
  },
  "displayField": null,
  "name": "angry dog",
  "description": "super angry",
  "fields": []
}
, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'ab4c47b4-c642-4ea9-b50c-5ff9f9ab6a60',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Mon, 23 Sep 2019 14:31:42 GMT',
  'ETag',
  'W/"7118842869673436696"',
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
  '1e0ae7d32a43baf3ce80ef4cc800e1fd',
  'Content-Length',
  '369',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=mUlvqU2KRzedwPuhbJKtqU7XiF0AAAAAQUIPAAAAAACmFhN34r3OgMAb6ivbJdDd; expires=Tue, 22 Sep 2020 07:18:11 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=8TSmPTlKMWeFxQXyYMlkBAAAAABEfma2wP+yZC3tuGTjcScM; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=Fu/iNL2A3CDhp/BJREbyDk7XiF0AAAAAMSDERD5OGdQ9+pOvQ889AA==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '7-5440533-5440534 NNNN CT(0 0 0) RT(1569249101747 17) q(0 0 0 -1) r(3 3) U5',
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
    "createdAt": "2019-09-23T14:31:33.229Z",
    "updatedAt": "2019-09-23T14:31:42.422Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 5,
    "publishedAt": "2019-09-23T14:31:42.422Z",
    "firstPublishedAt": "2019-09-23T14:31:33.771Z",
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
    }
  },
  "displayField": null,
  "name": "angry dog",
  "description": "super angry",
  "fields": []
}
, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'ab4c47b4-c642-4ea9-b50c-5ff9f9ab6a60',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Mon, 23 Sep 2019 14:31:42 GMT',
  'ETag',
  'W/"7118842869673436696"',
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
  '714116e773c5a7d53b88075da0c21dd3',
  'Content-Length',
  '369',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=vzy1cNvlQ8GEnxbaSoiRSU7XiF0AAAAAQUIPAAAAAACkuwqp/WELLJFjdhJtq/C8; expires=Tue, 22 Sep 2020 07:18:38 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=7eosIBgVM2XG/RC7YMlkBAAAAACxYJUPi9j8Ius1crPpPYmL; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=lL4MIdTKzSTpp/BJREbyDk7XiF0AAAAAp6LKyWDrqq+6J/qcARVxZA==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '6-3857510-3857511 NNNN CT(0 0 0) RT(1569249102151 19) q(0 0 0 -1) r(2 2) U5',
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
        "createdAt": "2019-09-23T14:31:33.229Z",
        "updatedAt": "2019-09-23T14:31:42.422Z",
        "environment": {
          "sys": {
            "id": "env-integration",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 5,
        "publishedAt": "2019-09-23T14:31:42.422Z",
        "firstPublishedAt": "2019-09-23T14:31:33.771Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'ab4c47b4-c642-4ea9-b50c-5ff9f9ab6a60',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Mon, 23 Sep 2019 14:31:43 GMT',
  'ETag',
  'W/"6508402513701451852"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'b6f6ac438b2d11782389d1d83274d2f8',
  'Content-Length',
  '434',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=K3tU4e08TsKzyKtAPLW3o07XiF0AAAAAQUIPAAAAAABI1Olq6TJtzD8mIn5qrz/A; expires=Tue, 22 Sep 2020 07:18:36 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=xp90d/NUPHPCYdYEYMlkBAAAAADTUy277fd2Pd9G9pLOst+h; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=5sfNWXp1ZT7sp/BJREbyDk7XiF0AAAAAiYdnO5FhRue/aAMGHUpMjA==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '4-5146411-5146412 NNNN CT(0 0 0) RT(1569249102394 17) q(0 0 0 -1) r(1 1) U5',
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
        "createdAt":"2019-09-23T14:31:22Z",
        "updatedAt":"2019-09-23T14:31:22Z"
      }
    }
  ]
}

, [ 'Accept-Ranges',
  'bytes',
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'Mon, 23 Sep 2019 14:31:43 GMT',
  'ETag',
  'W/"ab72d22aec43abe7eccc4f8dcafb1136"',
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
  '4b9b90348df1b04843293c944d73fc67',
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
  'visid_incap_673446=nGsbkrqmTzSuuwNzU+ieUU7XiF0AAAAAQUIPAAAAAADc0tuvwuX1Lcueg8HXbZ93; expires=Tue, 22 Sep 2020 07:18:36 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=363OTEBs3BAS1dqgYMlkBAAAAAAt6fySjiRDkrB25rVWWe1X; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=r4PjLsmeJCXvp/BJREbyDk7XiF0AAAAAMStTjX2kcXy2RZvQascALg==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '3-4959863-4959864 NNNN CT(0 0 0) RT(1569249102640 35) q(0 0 0 -1) r(1 1) U5',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked' ]);


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
    "createdAt": "2019-09-23T14:31:33.229Z",
    "updatedAt": "2019-09-23T14:31:43.590Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 5,
    "publishedAt": "2019-09-23T14:31:42.422Z",
    "firstPublishedAt": "2019-09-23T14:31:33.771Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'ab4c47b4-c642-4ea9-b50c-5ff9f9ab6a60',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Mon, 23 Sep 2019 14:31:43 GMT',
  'ETag',
  'W/"8700961925516479226"',
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
  '3c6031a8cb8b0c9c1c71e1bebe3e870b',
  'Content-Length',
  '494',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=2iaG+PL2Ruii24YqKan9Y0/XiF0AAAAAQUIPAAAAAACdOYds94rBHsBtYsPDBwWm; expires=Tue, 22 Sep 2020 07:18:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=LZwZONqdcwNWRErGYMlkBAAAAADNdtsF/UKkRxSkQ9au2JV9; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=WQz2PAw+inzzp/BJREbyDk/XiF0AAAAA6Jv4R4X69FFILwedDOQpSg==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '5-6481644-6481646 NNNN CT(0 0 0) RT(1569249102856 25) q(0 0 0 -1) r(2 2) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/dog/published')
  .reply(504, "", [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Contentful-Api',
  'cma',
  'Date',
  'Mon, 23 Sep 2019 14:31:43 GMT',
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
  'e93afed3901aa58bdef2078156fbbfa1',
  'Content-Length',
  '0',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=WkNEDFkvSWipgYhgKbuM2k/XiF0AAAAAQUIPAAAAAAAfCE5QCa5opyUF35kVZZ1m; expires=Tue, 22 Sep 2020 07:18:59 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=HhkaFhC0nTz8iELpYMlkBAAAAAD3SVBGiPriR64/nkJgqnTb; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=xsAfHiyA6nb3p/BJREbyDk/XiF0AAAAAkEpjCyg4dcJ8WkpPEem9Iw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '13-2257899-2257900 NNNN CT(0 0 0) RT(1569249103144 17) q(0 0 0 -1) r(1 1) U5',
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
    "createdAt": "2019-09-23T14:31:33.229Z",
    "updatedAt": "2019-09-23T14:31:46.070Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 7,
    "publishedAt": "2019-09-23T14:31:46.070Z",
    "firstPublishedAt": "2019-09-23T14:31:33.771Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'ab4c47b4-c642-4ea9-b50c-5ff9f9ab6a60',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Mon, 23 Sep 2019 14:31:46 GMT',
  'ETag',
  'W/"1731249818457612622"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'f9a029edd671d04bcf5fa4c4e53ccd9f',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=nTjHwNkkRJWCvQ+zgEUCWVHXiF0AAAAAQUIPAAAAAAA70oUAfuRQzO4xjI2kueV3; expires=Tue, 22 Sep 2020 07:19:09 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=ZtrMLX62FQSA32kQYMlkBAAAAAASR4Ncv+qo1JAFEUE9qGb4; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=o96nDtppNCZnqPBJREbyDlHXiF0AAAAA4KZzZOOuHHDJQs9fPDwMYw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '10-1230245-1230246 NNNN CT(0 0 0) RT(1569249105388 17) q(0 0 0 -1) r(3 3) U5',
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
    "createdAt": "2019-09-23T14:31:33.229Z",
    "updatedAt": "2019-09-23T14:31:46.070Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 7,
    "publishedAt": "2019-09-23T14:31:46.070Z",
    "firstPublishedAt": "2019-09-23T14:31:33.771Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'ab4c47b4-c642-4ea9-b50c-5ff9f9ab6a60',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Mon, 23 Sep 2019 14:31:46 GMT',
  'ETag',
  'W/"1731249818457612622"',
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
  'b6f6e9132890ee2a31fbd44c5416fac9',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=gSSMHW4uQUqEC3IGeEXXHVLXiF0AAAAAQUIPAAAAAACjfIAbHSXBq/6dlUO+umTr; expires=Tue, 22 Sep 2020 07:18:11 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=xCvkXVajkFYpScwHYMlkBAAAAABs0SArQnL5yXP1uy1VriC3; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=7xIGBQHuRgR7qPBJREbyDlLXiF0AAAAAoZ8oBmtwijLitIn7AI2Dtw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '7-5440595-5440597 NNNN CT(0 0 0) RT(1569249105893 17) q(0 0 0 -1) r(1 1) U5',
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
        "createdAt": "2019-09-23T14:31:33.229Z",
        "updatedAt": "2019-09-23T14:31:46.070Z",
        "environment": {
          "sys": {
            "id": "env-integration",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 7,
        "publishedAt": "2019-09-23T14:31:46.070Z",
        "firstPublishedAt": "2019-09-23T14:31:33.771Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'ab4c47b4-c642-4ea9-b50c-5ff9f9ab6a60',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Mon, 23 Sep 2019 14:31:47 GMT',
  'ETag',
  'W/"7050176978902506103"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '1092f9ab4f1e96c680c2e99d14bdfe2f',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=S4vM8TgSRwS+Y5dVTuaNBlLXiF0AAAAAQUIPAAAAAAA6oU+/OAd8w5U0aBr7VJ0d; expires=Tue, 22 Sep 2020 07:18:36 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=U6knahQC4hrKu2UwYMlkBAAAAABKU4ry8WJJXxcz6Q7wywv2; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=DeHuNiO2sR2mqPBJREbyDlLXiF0AAAAAFG05YXVedXfZxj1wwlh4Hg==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '2-4108808-4108809 NNNN CT(96 96 0) RT(1569249106213 17) q(0 0 2 -1) r(3 3) U5',
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
    "createdAt": "2019-09-23T14:31:34.108Z",
    "createdBy": {
      "sys": {
        "id": "33kZDXNajFNmbngiu5MvUa",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2019-09-23T14:31:46.202Z",
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
      "fieldId": "goodboys"
    }
  ]
}
, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'ab4c47b4-c642-4ea9-b50c-5ff9f9ab6a60',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Mon, 23 Sep 2019 14:31:47 GMT',
  'ETag',
  '"16864421162958839628"',
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
  '75592e304f150f03da2beaec652cce25',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=2T7ZEKt2RMafg1QK0htQ3lLXiF0AAAAAQUIPAAAAAAA36YPvcOgWZB1NVALIq+d6; expires=Tue, 22 Sep 2020 07:18:51 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=Iah7IC5WfUcSnVZxYMlkBAAAAACuETqOMMU/LdQkcNbO0OKx; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=I7RKbsQ3kji3qPBJREbyDlLXiF0AAAAARYgkj4c5orz6GbHpeKaSjg==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '12-1910212-1910213 NNNN CT(0 0 0) RT(1569249106621 17) q(0 0 0 -1) r(1 1) U5',
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
        "createdAt":"2019-09-23T14:31:22Z",
        "updatedAt":"2019-09-23T14:31:22Z"
      }
    }
  ]
}

, [ 'Accept-Ranges',
  'bytes',
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'Mon, 23 Sep 2019 14:31:47 GMT',
  'ETag',
  'W/"ab72d22aec43abe7eccc4f8dcafb1136"',
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
  '24460230a4dc1956883ee40cced5a78c',
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
  'visid_incap_673446=4FYra+7WSeaG6hQkdZqzFlLXiF0AAAAAQUIPAAAAAABg1GL/5EJurO7HqzjY88lX; expires=Tue, 22 Sep 2020 07:18:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=LHK0bbPNmEy6po4rYMlkBAAAAAAGpYKTygXqiBEq8j45bawz; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=KL19K7KQMTnHqPBJREbyDlLXiF0AAAAAxexQBv+tEOT3Cjsf+qgWQQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '5-6481766-6481767 NNNN CT(0 0 0) RT(1569249106816 17) q(0 0 0 -1) r(1 1) U5',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked' ]);


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
    "createdAt": "2019-09-23T14:31:33.229Z",
    "updatedAt": "2019-09-23T14:31:47.707Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 7,
    "publishedAt": "2019-09-23T14:31:46.070Z",
    "firstPublishedAt": "2019-09-23T14:31:33.771Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'ab4c47b4-c642-4ea9-b50c-5ff9f9ab6a60',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Mon, 23 Sep 2019 14:31:47 GMT',
  'ETag',
  'W/"16162020502641120501"',
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
  '3a55facb5249d644e3f5eb37ae344845',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=rCpKw/vuRTWaWdjPTbMm2VPXiF0AAAAAQUIPAAAAAAD6py0hWtkPrkuNV+Mp8lLF; expires=Tue, 22 Sep 2020 07:18:36 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=XJndTKAk4UyCLfvHYMlkBAAAAACpKJjdYV5c/tRbGo19nlAB; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=dd8UT2KgqC7ZqPBJREbyDlPXiF0AAAAAx3MJx6Lo/Jk97Z5Aw56zJg==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '4-5146458-5146459 NNNN CT(0 0 0) RT(1569249107007 19) q(0 0 0 -1) r(2 2) U5',
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
    "createdAt": "2019-09-23T14:31:33.229Z",
    "updatedAt": "2019-09-23T14:31:47.947Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 9,
    "publishedAt": "2019-09-23T14:31:47.947Z",
    "firstPublishedAt": "2019-09-23T14:31:33.771Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'ab4c47b4-c642-4ea9-b50c-5ff9f9ab6a60',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Mon, 23 Sep 2019 14:31:48 GMT',
  'ETag',
  'W/"7272494755398583158"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35995',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '5',
  'X-Contentful-Request-Id',
  '44087d72e48f2fe150ac3a16c6ffb15e',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=4T9vL9I6R864z1EFqozyXVPXiF0AAAAAQUIPAAAAAACNYVPeN736kEA5kvp68DM2; expires=Tue, 22 Sep 2020 07:18:36 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=1Vi8FDUYT2Z7lNmyYMlkBAAAAACpoKjFC2it+FdgOqUT8k5H; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=FdvvHwWMARTiqPBJREbyDlPXiF0AAAAAOvrDv9CwmgxdpWekUqQo5A==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '1-3097815-3097816 NNNN CT(0 0 0) RT(1569249107250 23) q(0 0 0 -1) r(3 3) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/dog/editor_interface', {"controls":[{"fieldId":"aDifferentId"}]})
  .reply(200, {"controls":[{"fieldId":"aDifferentId"}],"sys":{"id":"default","type":"EditorInterface","space":{"sys":{"id":"bohepdihyxin","type":"Link","linkType":"Space"}},"version":6,"createdAt":"2019-09-23T14:31:34.108Z","createdBy":{"sys":{"id":"33kZDXNajFNmbngiu5MvUa","type":"Link","linkType":"User"}},"updatedAt":"2019-09-23T14:31:48.516Z","updatedBy":{"sys":{"type":"Link","linkType":"User","id":"33kZDXNajFNmbngiu5MvUa"}},"contentType":{"sys":{"id":"dog","type":"Link","linkType":"ContentType"}},"environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}}}}, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'ab4c47b4-c642-4ea9-b50c-5ff9f9ab6a60',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Mon, 23 Sep 2019 14:31:48 GMT',
  'ETag',
  '"10845387787638254358"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '2b4466f92668e1d1d3b7328ad34e1613',
  'Content-Length',
  '922',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=5PnWpHoNRt+0Km3LuTKBKVTXiF0AAAAAQUIPAAAAAABr08MSYT6RtJTbYUs5mVJe; expires=Tue, 22 Sep 2020 07:18:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=fyBneVdm6UoY1QRqYMlkBAAAAADUg85cec1pMOS6yUf1OQq4; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=/A7+MvMtgCXuqPBJREbyDlTXiF0AAAAAlULNK3v1Liefo71W3AvC5w==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '5-6481799-6481800 NNNN CT(100 100 0) RT(1569249107625 17) q(0 0 2 -1) r(4 4) U5',
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
    "createdAt": "2019-09-23T14:31:33.229Z",
    "updatedAt": "2019-09-23T14:31:48.821Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 9,
    "publishedAt": "2019-09-23T14:31:47.947Z",
    "firstPublishedAt": "2019-09-23T14:31:33.771Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'ab4c47b4-c642-4ea9-b50c-5ff9f9ab6a60',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Mon, 23 Sep 2019 14:31:48 GMT',
  'ETag',
  'W/"11998789684428907359"',
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
  '3b9212f2de0d09cd62a59f069c2a8a8a',
  'Content-Length',
  '493',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=GtfhwfNuToyrDfNjZa6EHlTXiF0AAAAAQUIPAAAAAAB0d8oW9bF+qDhJ5xT9TZZa; expires=Tue, 22 Sep 2020 07:18:11 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=S7ofUSZmXSfdkDjWYMlkBAAAAADhav+GGwYHUX41eykkoS9h; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=WJvkfthak2b2qPBJREbyDlTXiF0AAAAAA5MnDnnAGXu9y5hP2AtsNg==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '7-5440636-5440639 NNNN CT(0 0 0) RT(1569249108114 22) q(0 0 0 -1) r(2 2) U5',
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
    "createdAt": "2019-09-23T14:31:33.229Z",
    "updatedAt": "2019-09-23T14:31:49.250Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 11,
    "publishedAt": "2019-09-23T14:31:49.250Z",
    "firstPublishedAt": "2019-09-23T14:31:33.771Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'ab4c47b4-c642-4ea9-b50c-5ff9f9ab6a60',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Mon, 23 Sep 2019 14:31:49 GMT',
  'ETag',
  'W/"11372314548210769648"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '7b0542c8c5f5a92ebf224b65d3d3eaf0',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=glPxEKA+TNqR02xVYtnbUVTXiF0AAAAAQUIPAAAAAAD8t0S0z5trfd5pRrv7jdAH; expires=Tue, 22 Sep 2020 07:18:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=cr14NeP5lADYqjMKYMlkBAAAAABoCWArqZS4Ezaj4CGyAXf2; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=hEAkTrZ9hQT+qPBJREbyDlTXiF0AAAAAinlItSKpJ9N86tht5V6i/Q==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '5-6481823-6481824 NNNN CT(99 100 0) RT(1569249108362 20) q(0 0 2 -1) r(5 5) U5',
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
    "createdAt": "2019-09-23T14:31:33.229Z",
    "updatedAt": "2019-09-23T14:31:49.250Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 11,
    "publishedAt": "2019-09-23T14:31:49.250Z",
    "firstPublishedAt": "2019-09-23T14:31:33.771Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'ab4c47b4-c642-4ea9-b50c-5ff9f9ab6a60',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Mon, 23 Sep 2019 14:31:49 GMT',
  'ETag',
  'W/"11372314548210769648"',
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
  '55971552275fd6a788cf39ca7300827a',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=8tfN5lSxS9K4qz0kt/EoT1XXiF0AAAAAQUIPAAAAAADQ0gV5UKqePsT7k1qvcqmx; expires=Tue, 22 Sep 2020 07:18:36 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=y374VY6MQ0MBJ0VHYMlkBAAAAAB2ro5vUL6XlA12zUjnteaY; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=659vDjfR30AEqfBJREbyDlXXiF0AAAAADvegDhrXnwfZZ1Xvfnc5gw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '3-4959921-4959923 NNNN CT(0 0 0) RT(1569249108934 17) q(0 0 0 -1) r(1 1) U5',
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
        "createdAt": "2019-09-23T14:31:33.229Z",
        "updatedAt": "2019-09-23T14:31:49.250Z",
        "environment": {
          "sys": {
            "id": "env-integration",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 11,
        "publishedAt": "2019-09-23T14:31:49.250Z",
        "firstPublishedAt": "2019-09-23T14:31:33.771Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'ab4c47b4-c642-4ea9-b50c-5ff9f9ab6a60',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Mon, 23 Sep 2019 14:31:49 GMT',
  'ETag',
  'W/"8968202833007498029"',
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
  '6599693c970ed7f17a6e10c943cf927b',
  'Content-Length',
  '554',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=XRKcSCkrTzm+nJXnKTMttVXXiF0AAAAAQUIPAAAAAACXJPrs3tLdtIIzWFnO2Tro; expires=Tue, 22 Sep 2020 07:18:11 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=WVtZesz6Phjg/98aYMlkBAAAAABnbfrn3W8PBKlQ3YaV1eJl; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=8lQJH7jNwSYOqfBJREbyDlXXiF0AAAAAFAPbLzrZLiWZ3G1rMxMRIA==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '7-5440652-5440653 NNNN CT(0 0 0) RT(1569249109145 17) q(0 0 0 -1) r(2 2) U5',
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'ab4c47b4-c642-4ea9-b50c-5ff9f9ab6a60',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Mon, 23 Sep 2019 14:31:50 GMT',
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
  'ef374cfbdf91cc7391e3297e8e0506fc',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=ECgPHk3XRGmmjhLvHhCFKVXXiF0AAAAAQUIPAAAAAABU35gMDKaMf3iH4N8odSG0; expires=Tue, 22 Sep 2020 07:18:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=rbkbJwcMCgz/Q0zRYMlkBAAAAAC+F77xj0aNmn3GOoMwDQsv; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=+BkDAb239mEXqfBJREbyDlXXiF0AAAAAHjJJb3/WZR9oGIRLzL7Rug==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '5-6481850-6481851 NNNN CT(0 0 0) RT(1569249109359 17) q(0 0 0 -1) r(2 2) U5',
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
        "createdAt":"2019-09-23T14:31:22Z",
        "updatedAt":"2019-09-23T14:31:22Z"
      }
    }
  ]
}

, [ 'Accept-Ranges',
  'bytes',
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'Mon, 23 Sep 2019 14:31:52 GMT',
  'ETag',
  'W/"ab72d22aec43abe7eccc4f8dcafb1136"',
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
  '7c74bb00c4ded7806ff1eb49801125ed',
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
  'visid_incap_673446=DtMR8r9bSf66Csky2Dte/1jXiF0AAAAAQUIPAAAAAABaqxwsAHpTf09YxcjI3Ssx; expires=Tue, 22 Sep 2020 07:18:36 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=/XrpEQ7l23biKgUcYMlkBAAAAAAQvk9RB2X+SA7Tv1MQPBFS; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=MQIkJnoRVGxZqfBJREbyDljXiF0AAAAAHvR5xvGOAHVtVqK9tAjRTA==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '4-5146486-5146487 NNNN CT(0 0 0) RT(1569249109589 20) q(0 0 0 -1) r(28 28) U5',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked' ]);


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
    "createdAt": "2019-09-23T14:31:33.229Z",
    "updatedAt": "2019-09-23T14:31:53.150Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "firstPublishedAt": "2019-09-23T14:31:33.771Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'ab4c47b4-c642-4ea9-b50c-5ff9f9ab6a60',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Mon, 23 Sep 2019 14:31:53 GMT',
  'ETag',
  'W/"1805606817211898776"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '0b4147fd13dab623b5a9cc46f84eed68',
  'Content-Length',
  '461',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=JaOdy+aVQlq0ryS5zCw7RljXiF0AAAAAQUIPAAAAAACykJeOKq+ZYyKuwxr4FiMI; expires=Tue, 22 Sep 2020 07:18:36 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=VsuUannAdTVvZcWiYMlkBAAAAACvOkphhfeAS2WtDKpJlTGO; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=RP8AVW6KTiljqfBJREbyDljXiF0AAAAAJ1LJnRLNeBoHsuztt+6iqA==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '3-4959957-4959958 NNNN CT(0 0 0) RT(1569249112450 18) q(0 0 0 -1) r(4 4) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .delete('/spaces/bohepdihyxin/environments/env-integration/content_types/dog')
  .reply(204, "", [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'ab4c47b4-c642-4ea9-b50c-5ff9f9ab6a60',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Mon, 23 Sep 2019 14:31:53 GMT',
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
  '49e34649feccfc96b7fa9bc2f2be5c8f',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=nlPfqg2iRPWhWuT2Xm9/GVnXiF0AAAAAQUIPAAAAAAAAXB5r/2pyUXWtt8+/Hun/; expires=Tue, 22 Sep 2020 07:18:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=lUm4YtvZNCQTH6a1YMlkBAAAAAC46m2/7etc2G85luQCOuo8; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=tyNPLUkXDnBsqfBJREbyDlnXiF0AAAAA+G4+gaKIQAI6yEvWRP0UVA==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '5-6481979-6481986 NNNN CT(103 104 0) RT(1569249112903 17) q(0 0 2 -1) r(5 5) U5',
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
  "requestId": "e901083828ec7e038e911d0edd607298"
}
, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'ab4c47b4-c642-4ea9-b50c-5ff9f9ab6a60',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Mon, 23 Sep 2019 14:31:54 GMT',
  'ETag',
  '"18245299125054127302"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'e901083828ec7e038e911d0edd607298',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=AYPGzd1qTZSyzwTbBzhfWFnXiF0AAAAAQUIPAAAAAAA4xc2gufXtmT5snIEixuaG; expires=Tue, 22 Sep 2020 07:18:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=oAC7W1k94wCudRa7YMlkBAAAAABP1Gz3tot51aIzUwCdfaVn; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=/9l+XRhob3dxqfBJREbyDlnXiF0AAAAANLXxzGPtv7ePrOC7/h5jiw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '5-6482002-6482003 NNNN CT(0 0 0) RT(1569249113493 17) q(0 0 0 -1) r(1 1) U5',
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'ab4c47b4-c642-4ea9-b50c-5ff9f9ab6a60',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Mon, 23 Sep 2019 14:31:54 GMT',
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
  '52bf006071e09d786f2035cb992fe3b1',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=gv30rNbzSJWgC4A6NBQXI1rXiF0AAAAAQUIPAAAAAAA3lD/QsXQ/h8coYbH2YVsd; expires=Tue, 22 Sep 2020 07:18:36 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=JodPOUGL+GT+B0uBYMlkBAAAAADBf/7an9p3Af1NVOfFCZhL; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=iVpHPILq/RN4qfBJREbyDlrXiF0AAAAAKJPYNM7wYRo8kHxdQkAiYw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '4-5146544-5146545 NNNN CT(0 0 0) RT(1569249113831 18) q(0 0 0 -1) r(2 2) U5',
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
        "createdAt":"2019-09-23T14:31:22Z",
        "updatedAt":"2019-09-23T14:31:22Z"
      }
    }
  ]
}

, [ 'Accept-Ranges',
  'bytes',
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'Mon, 23 Sep 2019 14:31:54 GMT',
  'ETag',
  'W/"ab72d22aec43abe7eccc4f8dcafb1136"',
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
  '6e1aa454f3dbf61f72712922c2df51fb',
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
  'visid_incap_673446=RUUcBPF8TImVpeO20o/owFrXiF0AAAAAQUIPAAAAAABs70LsIiHuPF1Ig0GO5bfD; expires=Tue, 22 Sep 2020 07:18:51 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=V2aIMtOFTQqR/j+lYMlkBAAAAADuGvkiBDw+nTWc2vObu8cw; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=B2A0YuyeJzJ6qfBJREbyDlrXiF0AAAAAB78Wrqn2NxHdJDRRh1CXIg==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '12-1910258-1910259 NNNN CT(0 0 0) RT(1569249114068 17) q(0 0 0 -1) r(1 1) U5',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/dieatary-food', {"name":"Dieatary Food","fields":[{"id":"name","type":"Symbol","name":"name of the food","validations":[{"unique":true},{"prohibitRegexp":{"pattern":"foo","flags":null},"message":"asdf"}]},{"id":"calories","type":"Link","linkType":"Asset","name":"amount of calories the food contains","validations":[{"assetImageDimensions":{"width":{"min":1199,"max":null},"height":{"min":1343}}}]}],"description":"Food with up to 500 calories"})
  .reply(201, {"sys":{"space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"id":"dieatary-food","type":"ContentType","createdAt":"2019-09-23T14:31:55.220Z","updatedAt":"2019-09-23T14:31:55.220Z","environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}},"createdBy":{"sys":{"type":"Link","linkType":"User","id":"33kZDXNajFNmbngiu5MvUa"}},"updatedBy":{"sys":{"type":"Link","linkType":"User","id":"33kZDXNajFNmbngiu5MvUa"}},"publishedCounter":0,"version":1},"displayField":null,"name":"Dieatary Food","description":"Food with up to 500 calories","fields":[{"id":"name","name":"name of the food","type":"Symbol","localized":false,"required":false,"validations":[{"unique":true},{"prohibitRegexp":{"pattern":"foo","flags":null},"message":"asdf"}],"disabled":false,"omitted":false},{"id":"calories","name":"amount of calories the food contains","type":"Link","localized":false,"required":false,"validations":[{"assetImageDimensions":{"width":{"min":1199,"max":null},"height":{"min":1343}}}],"disabled":false,"omitted":false,"linkType":"Asset"}]}, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'ab4c47b4-c642-4ea9-b50c-5ff9f9ab6a60',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Mon, 23 Sep 2019 14:31:55 GMT',
  'ETag',
  '"13187096326675513797"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '55c8171859f170513139c59af53717cb',
  'Content-Length',
  '1783',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=PLO2F2PYQ7uioj8jttR//VrXiF0AAAAAQUIPAAAAAAD61V18cV4+P4SS77GeCI6m; expires=Tue, 22 Sep 2020 07:18:36 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=y9p8A4Y3EgCJJaVeYMlkBAAAAABcqpDIUdW/j6orvBw+0sme; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=o0WzZevuw1iHqfBJREbyDlrXiF0AAAAAStC0YeeNLqNl8+xTeNC7Ow==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '3-4959964-4959965 NNNN CT(103 104 0) RT(1569249114253 20) q(0 0 2 -1) r(5 5) U5',
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
    "createdAt": "2019-09-23T14:31:55.220Z",
    "updatedAt": "2019-09-23T14:31:55.690Z",
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
    "firstPublishedAt": "2019-09-23T14:31:55.690Z",
    "publishedAt": "2019-09-23T14:31:55.690Z",
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
, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'ab4c47b4-c642-4ea9-b50c-5ff9f9ab6a60',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Mon, 23 Sep 2019 14:31:55 GMT',
  'ETag',
  'W/"6139091138664167971"',
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
  '4ba1b9cf7564e0df0e4dc62cac0b76f6',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=3ycfDLkvR7ywXOyn5TzI91vXiF0AAAAAQUIPAAAAAABWONXYN3h6uqVBbd2cZx4b; expires=Tue, 22 Sep 2020 07:18:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=aNv8QWypm10P6ktsYMlkBAAAAABLtmYKJI2wGELVl+1TRTsy; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=CQSVStwXoSeWqfBJREbyDlvXiF0AAAAAEQtj7eo1oJxxww9ygLiThw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '5-6482030-6482032 NNNN CT(104 104 0) RT(1569249114791 18) q(0 0 2 -1) r(5 5) U5',
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
    "createdAt": "2019-09-23T14:31:55.220Z",
    "updatedAt": "2019-09-23T14:31:55.690Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 1,
    "publishedAt": "2019-09-23T14:31:55.690Z",
    "firstPublishedAt": "2019-09-23T14:31:55.690Z",
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
, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'ab4c47b4-c642-4ea9-b50c-5ff9f9ab6a60',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Mon, 23 Sep 2019 14:31:56 GMT',
  'ETag',
  'W/"5537937472927208390"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '373bf156181e154dda76ffeda9950d1c',
  'Content-Length',
  '649',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=QLUnlfr6TvWDpMjzD6BrRVvXiF0AAAAAQUIPAAAAAAD/UGqJhV1Apswfst3zMmeP; expires=Tue, 22 Sep 2020 07:18:36 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=ioTkQMvsw3UAXNDbYMlkBAAAAADE4U2ImS9uvXdIj8r37m6Q; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=4uj4dsYIcHmbqfBJREbyDlvXiF0AAAAAcBVPbVG9eGeeT+166kuHAQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '4-5146558-5146559 NNNN CT(0 0 0) RT(1569249115405 18) q(0 0 0 -1) r(2 2) U5',
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'ab4c47b4-c642-4ea9-b50c-5ff9f9ab6a60',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Mon, 23 Sep 2019 14:31:56 GMT',
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
  'c88a16e0b066a0db3016d1319bb4bbf7',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=h1oo65XsRh2gCVUmj37KO1vXiF0AAAAAQUIPAAAAAABmbUQCxO4P6ER6n85g4lob; expires=Tue, 22 Sep 2020 07:18:36 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=KtOJV9lI81t2czVMYMlkBAAAAACPuYFb3ppYuNmmRb6E0eRq; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=S7eTKmfSEzWeqfBJREbyDlvXiF0AAAAAlmE0ZWt8Ff32hNcpbqtdKw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '3-4959972-4959974 NNNN CT(0 0 0) RT(1569249115688 18) q(0 0 0 -1) r(1 1) U5',
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
        "createdAt":"2019-09-23T14:31:22Z",
        "updatedAt":"2019-09-23T14:31:22Z"
      }
    }
  ]
}

, [ 'Accept-Ranges',
  'bytes',
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'Mon, 23 Sep 2019 14:31:56 GMT',
  'ETag',
  'W/"ab72d22aec43abe7eccc4f8dcafb1136"',
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
  '7fc5fdf261e3c28e75d73c90552223ac',
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
  'visid_incap_673446=yH4h6GB0Q3GH/SZvjqCkTFzXiF0AAAAAQUIPAAAAAABM7/6NaM0/05Jvcs4mr6je; expires=Tue, 22 Sep 2020 07:18:36 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=TcmXaAGxmh1N2CUwYMlkBAAAAAC/monm9Ww8ZmBNlT+On6NI; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=C+uKKmvfxgyjqfBJREbyDlzXiF0AAAAATFtdbemY0qRvR2WDvoMhfg==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '4-5146564-5146565 NNNN CT(0 0 0) RT(1569249115898 16) q(0 0 0 -1) r(1 1) U5',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/food', {"name":"foooood","displayField":"taste","fields":[{"id":"taste","type":"Symbol","name":"what it tastes like"}],"description":" well, food"})
  .reply(201, {"sys":{"space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"id":"food","type":"ContentType","createdAt":"2019-09-23T14:31:56.796Z","updatedAt":"2019-09-23T14:31:56.796Z","environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}},"createdBy":{"sys":{"type":"Link","linkType":"User","id":"33kZDXNajFNmbngiu5MvUa"}},"updatedBy":{"sys":{"type":"Link","linkType":"User","id":"33kZDXNajFNmbngiu5MvUa"}},"publishedCounter":0,"version":1},"displayField":"taste","name":"foooood","description":" well, food","fields":[{"id":"taste","name":"what it tastes like","type":"Symbol","localized":false,"required":false,"validations":[],"disabled":false,"omitted":false}]}, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'ab4c47b4-c642-4ea9-b50c-5ff9f9ab6a60',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Mon, 23 Sep 2019 14:31:56 GMT',
  'ETag',
  '"6267660303971904085"',
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
  '274b60da49e7012efefc24fa4502c812',
  'Content-Length',
  '1064',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=/c6jmxmPQ6u7yoa3YoJNAlzXiF0AAAAAQUIPAAAAAACPV8OpXiJboSX/PENFonRT; expires=Tue, 22 Sep 2020 07:18:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=7DjZYt/cQWk2YtTMYMlkBAAAAACufPH9VRcPfOB58AmTZ+Xr; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=mbZrXfBwIgymqfBJREbyDlzXiF0AAAAARwhLR10uS/AZcORvxeL1ZQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '5-6482053-6482054 NNNN CT(0 0 0) RT(1569249116078 17) q(0 0 0 -1) r(3 3) U5',
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
    "createdAt": "2019-09-23T14:31:56.796Z",
    "updatedAt": "2019-09-23T14:31:57.071Z",
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
    "firstPublishedAt": "2019-09-23T14:31:57.071Z",
    "publishedAt": "2019-09-23T14:31:57.071Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'ab4c47b4-c642-4ea9-b50c-5ff9f9ab6a60',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Mon, 23 Sep 2019 14:31:57 GMT',
  'ETag',
  'W/"13064219647660745086"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'd9ebe11b57e60359256702898fdae27b',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=X6OSwfUAS2WUss87oUB/lVzXiF0AAAAAQUIPAAAAAACZlP0Nqvcm9xhMdTbVnoln; expires=Tue, 22 Sep 2020 07:18:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=WzsFS60gpyeBuiSjYMlkBAAAAACtlrkKoUjsNg3ow+DWuvP/; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=Z7mvebDoBS+sqfBJREbyDlzXiF0AAAAAixbdoF4pK8XvuOhA7hFT5g==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '5-6482058-6482059 NNNN CT(0 0 0) RT(1569249116380 17) q(0 0 0 -1) r(6 6) U5',
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
        "createdAt": "2019-09-23T14:31:56.796Z",
        "updatedAt": "2019-09-23T14:31:57.071Z",
        "environment": {
          "sys": {
            "id": "env-integration",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 1,
        "publishedAt": "2019-09-23T14:31:57.071Z",
        "firstPublishedAt": "2019-09-23T14:31:57.071Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'ab4c47b4-c642-4ea9-b50c-5ff9f9ab6a60',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Mon, 23 Sep 2019 14:31:57 GMT',
  'ETag',
  'W/"14405198871159312701"',
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
  '9f88f475a2af60b8702fb68d8e7dcb53',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=hmijAdeQQx6+zoCXhHuXVl3XiF0AAAAAQUIPAAAAAACNRuIXPIiBG7AnvO5d/hQh; expires=Tue, 22 Sep 2020 07:18:38 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=p5GfP5/F2wIgfh4nYMlkBAAAAAAWWMmnym2RqKKB+pRifIuk; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=ZMxQDD3W2zWyqfBJREbyDl3XiF0AAAAApatkWA2Syie+KBtJrz7dQQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '6-3857602-3857603 NNNN CT(0 0 0) RT(1569249116974 16) q(0 0 0 -1) r(2 2) U5',
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
        "createdAt":"2019-09-23T14:31:22Z",
        "updatedAt":"2019-09-23T14:31:22Z"
      }
    }
  ]
}

, [ 'Accept-Ranges',
  'bytes',
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'Mon, 23 Sep 2019 14:31:58 GMT',
  'ETag',
  'W/"ab72d22aec43abe7eccc4f8dcafb1136"',
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
  '9be9ff050564e11b73801ddf86841f42',
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
  'visid_incap_673446=LmxV1hmISZqAFruTv0acrV7XiF0AAAAAQUIPAAAAAADmwQVmZgHGsoEHUCyZjprb; expires=Tue, 22 Sep 2020 07:18:11 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=Ivo/LRFCX33IemzZYMlkBAAAAAA4nTA0Rsj/KdYqt9AYo+Hc; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=QSSPNKAhSgC7qfBJREbyDl7XiF0AAAAARJNGtYZPSBJ0AvLdcV1Umg==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '7-5440813-5440814 NNNN CT(0 0 0) RT(1569249117200 18) q(0 0 0 -1) r(9 9) U5',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked' ]);


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
    "createdAt": "2019-09-23T14:31:56.796Z",
    "updatedAt": "2019-09-23T14:31:58.854Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 1,
    "publishedAt": "2019-09-23T14:31:57.071Z",
    "firstPublishedAt": "2019-09-23T14:31:57.071Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'ab4c47b4-c642-4ea9-b50c-5ff9f9ab6a60',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Mon, 23 Sep 2019 14:31:58 GMT',
  'ETag',
  'W/"13989621406355424881"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '84ee87d64b6b814bea369a0f37c33329',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=phh5pMvRRzuWw0l7g+YtbV7XiF0AAAAAQUIPAAAAAADqNMNzVxaiSqtv8W6qr+kH; expires=Tue, 22 Sep 2020 07:18:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=GWg/VJrXoFwp/PDqYMlkBAAAAAANGOgnxTt2X8FRrv26Y3B+; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=zgnnI5syDim/qfBJREbyDl7XiF0AAAAAYn6OkXxg7/9miLWGLiD6Ow==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '5-6482074-6482076 NNNN CT(0 0 0) RT(1569249118150 18) q(0 0 0 -1) r(2 2) U5',
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
    "createdAt": "2019-09-23T14:31:56.796Z",
    "updatedAt": "2019-09-23T14:31:59.279Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 3,
    "publishedAt": "2019-09-23T14:31:59.279Z",
    "firstPublishedAt": "2019-09-23T14:31:57.071Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'ab4c47b4-c642-4ea9-b50c-5ff9f9ab6a60',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Mon, 23 Sep 2019 14:31:59 GMT',
  'ETag',
  'W/"10939116933604381989"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '358fa9da8a0ea51af662761a2f63ea4b',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=xcqcfzv+RxWScJ4cCsacKV7XiF0AAAAAQUIPAAAAAACYJ5h1cRIcLOwl7rTOCnsC; expires=Tue, 22 Sep 2020 07:18:42 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=qQeOBAIg3ngubDE2YMlkBAAAAAA+wnXEsPLofq4o6a2fnse5; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=3teiEhIfYQXGqfBJREbyDl7XiF0AAAAAQqSLazoksoT4jqlvtHxhzA==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '0-2355652-2355653 NNNN CT(96 97 0) RT(1569249118407 18) q(0 0 2 -1) r(5 5) U5',
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
    "createdAt": "2019-09-23T14:31:56.796Z",
    "updatedAt": "2019-09-23T14:31:59.279Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 3,
    "publishedAt": "2019-09-23T14:31:59.279Z",
    "firstPublishedAt": "2019-09-23T14:31:57.071Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'ab4c47b4-c642-4ea9-b50c-5ff9f9ab6a60',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Mon, 23 Sep 2019 14:31:59 GMT',
  'ETag',
  'W/"10939116933604381989"',
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
  '36015ea00faf71fa0b1c4ab835f78429',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=erLgwf59RESLYm9UjAhjq1/XiF0AAAAAQUIPAAAAAAB7j4yHQKh2aAj02uRSoBOe; expires=Tue, 22 Sep 2020 07:18:42 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=7J3iLwHHGlBNZsz8YMlkBAAAAADD9hS8EBlWKCTNDxrFc/Ys; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=54SnE2nV6UfKqfBJREbyDl/XiF0AAAAAWpD4jclSZ6YkjuBc7EPn9Q==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '0-2355656-2355657 NNNN CT(0 0 0) RT(1569249118975 17) q(0 0 0 -1) r(2 2) U5',
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'ab4c47b4-c642-4ea9-b50c-5ff9f9ab6a60',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Mon, 23 Sep 2019 14:31:59 GMT',
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
  '1b7f6195b10e3257ecf0abd44b3a528b',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=4YNCSlIsQ+SZfmTydC+GCF/XiF0AAAAAQUIPAAAAAACZtrok/FCSIom3WNN8/1oe; expires=Tue, 22 Sep 2020 07:18:36 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=A8hoRt/aByTZFRL/YMlkBAAAAABJvDYSuxtir8PQsY0Qbh/1; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=SRCcPqYhcD/PqfBJREbyDl/XiF0AAAAAEy6NNfCME0UK/0Sox0A31Q==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '2-4108949-4108951 NNNN CT(0 0 0) RT(1569249119206 17) q(0 0 0 -1) r(1 1) U5',
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
        "createdAt":"2019-09-23T14:31:22Z",
        "updatedAt":"2019-09-23T14:31:22Z"
      }
    }
  ]
}

, [ 'Accept-Ranges',
  'bytes',
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'Mon, 23 Sep 2019 14:32:00 GMT',
  'ETag',
  'W/"ab72d22aec43abe7eccc4f8dcafb1136"',
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
  '2f8e5d7045f523a962270bb07222a969',
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
  'visid_incap_673446=3eCq8mnvTPGjjTI8fCwTs1/XiF0AAAAAQUIPAAAAAABab1Fvx9516Fd2jS8OBpAU; expires=Tue, 22 Sep 2020 07:18:39 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=0cLwdAC6pQZ0KA13YMlkBAAAAADeDHTHY7gizG/NPIp+zXU5; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=fncAbeDKEDjSqfBJREbyDl/XiF0AAAAA4YKIpZ2nM2+W0fS+LaBYFw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '9-1024715-1024716 NNNN CT(0 0 0) RT(1569249119420 17) q(0 0 0 -1) r(1 1) U5',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/person', {"name":"Person","fields":[{"id":"age","name":"Age","type":"Number","required":true},{"id":"fullName","name":"Full name","type":"Symbol","required":true,"localized":true}],"description":"A content type for a person"})
  .reply(201, {"sys":{"space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"id":"person","type":"ContentType","createdAt":"2019-09-23T14:32:00.355Z","updatedAt":"2019-09-23T14:32:00.355Z","environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}},"createdBy":{"sys":{"type":"Link","linkType":"User","id":"33kZDXNajFNmbngiu5MvUa"}},"updatedBy":{"sys":{"type":"Link","linkType":"User","id":"33kZDXNajFNmbngiu5MvUa"}},"publishedCounter":0,"version":1},"displayField":null,"name":"Person","description":"A content type for a person","fields":[{"id":"age","name":"Age","type":"Number","localized":false,"required":true,"validations":[],"disabled":false,"omitted":false},{"id":"fullName","name":"Full name","type":"Symbol","localized":true,"required":true,"validations":[],"disabled":false,"omitted":false}]}, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'ab4c47b4-c642-4ea9-b50c-5ff9f9ab6a60',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Mon, 23 Sep 2019 14:32:00 GMT',
  'ETag',
  '"5278960308482661083"',
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
  '70cabae5ae1cd5997042085551bb8161',
  'Content-Length',
  '1269',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=VEtt+NkJRuSbsCsVmgTW9l/XiF0AAAAAQUIPAAAAAABHPN/cIdzbpKPPWGnGju/Y; expires=Tue, 22 Sep 2020 07:18:36 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=8Ie0ZCKeZQ2nLsa0YMlkBAAAAABtpK5dkA6qVd8vX9POjWUO; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=pznidyhq2zLaqfBJREbyDl/XiF0AAAAAiox6oseqtOl44aC9u13IVA==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '1-3097895-3097896 NNNN CT(0 0 0) RT(1569249119614 19) q(0 0 0 -1) r(3 3) U5',
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
    "createdAt": "2019-09-23T14:32:00.355Z",
    "updatedAt": "2019-09-23T14:32:00.638Z",
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
    "firstPublishedAt": "2019-09-23T14:32:00.638Z",
    "publishedAt": "2019-09-23T14:32:00.638Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'ab4c47b4-c642-4ea9-b50c-5ff9f9ab6a60',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Mon, 23 Sep 2019 14:32:00 GMT',
  'ETag',
  'W/"6044170180877342207"',
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
  '9ef8cf5ac9ef470dfd506dcfd135fa12',
  'Content-Length',
  '474',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=UpCTsNC5Tp6HjBN9aQuCiGDXiF0AAAAAQUIPAAAAAADMz7lyMMK3PYY+BmIp26Qw; expires=Tue, 22 Sep 2020 07:19:09 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=lzm8Hkf+TnADzT2sYMlkBAAAAACnGpfseZNtBlMyhCc4vEV0; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=cD7FV/jQLCfpqfBJREbyDmDXiF0AAAAAEzcnsQbnHAhZNlCZlKOs+w==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '10-1230421-1230423 NNNN CT(0 0 0) RT(1569249119945 17) q(0 0 0 -1) r(4 4) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/animal', {"name":"Animal","fields":[{"id":"species","name":"The species of the animal","type":"Symbol","required":true},{"id":"isFurry","name":"Is this a furry animal","type":"Boolean","required":false}],"description":"An animal"})
  .reply(201, {"sys":{"space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"id":"animal","type":"ContentType","createdAt":"2019-09-23T14:32:01.136Z","updatedAt":"2019-09-23T14:32:01.136Z","environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}},"createdBy":{"sys":{"type":"Link","linkType":"User","id":"33kZDXNajFNmbngiu5MvUa"}},"updatedBy":{"sys":{"type":"Link","linkType":"User","id":"33kZDXNajFNmbngiu5MvUa"}},"publishedCounter":0,"version":1},"displayField":null,"name":"Animal","description":"An animal","fields":[{"id":"species","name":"The species of the animal","type":"Symbol","localized":false,"required":true,"validations":[],"disabled":false,"omitted":false},{"id":"isFurry","name":"Is this a furry animal","type":"Boolean","localized":false,"required":false,"validations":[],"disabled":false,"omitted":false}]}, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'ab4c47b4-c642-4ea9-b50c-5ff9f9ab6a60',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Mon, 23 Sep 2019 14:32:01 GMT',
  'ETag',
  '"5805419352471340509"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'c91c067225c6b39ef3cab3a362e14c8b',
  'Content-Length',
  '1292',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=p7+M78PyQoObdkFWnNVt62DXiF0AAAAAQUIPAAAAAACI48Qptzpn5L+ciYrp5Izg; expires=Tue, 22 Sep 2020 07:18:59 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=9G/2O6Em/zvLxByDYMlkBAAAAACnEwkhNtUL5SEoW+lsBSkT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=7jUYMS8OlCr3qfBJREbyDmDXiF0AAAAAEEbDvp+YH3Fc6grCT6AVFg==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '13-2258104-2258105 NNNN CT(0 0 0) RT(1569249120419 17) q(0 0 0 -1) r(2 2) U5',
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
    "createdAt": "2019-09-23T14:32:01.136Z",
    "updatedAt": "2019-09-23T14:32:01.771Z",
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
    "firstPublishedAt": "2019-09-23T14:32:01.771Z",
    "publishedAt": "2019-09-23T14:32:01.771Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'ab4c47b4-c642-4ea9-b50c-5ff9f9ab6a60',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Mon, 23 Sep 2019 14:32:01 GMT',
  'ETag',
  'W/"12364869287926935658"',
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
  'daf6d3fa5430cc534d30924d033c0dcf',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=2rKEl6IQTvmqqsxFlIRHh2HXiF0AAAAAQUIPAAAAAADlJF0GNJmx/GuY+zukq8XO; expires=Tue, 22 Sep 2020 07:18:36 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=WFi9FH1CDHVsBRb2YMlkBAAAAACb0tQPBiY2wmFwU5cw6u93; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=QkClCASuzmMIqvBJREbyDmHXiF0AAAAAW2bFxRGymqNMNsgUzMWy8A==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '1-3097902-3097903 NNNN CT(108 219 0) RT(1569249120747 17) q(0 0 3 -1) r(7 7) U5',
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
    "createdAt": "2019-09-23T14:32:00.355Z",
    "updatedAt": "2019-09-23T14:32:02.420Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 1,
    "publishedAt": "2019-09-23T14:32:00.638Z",
    "firstPublishedAt": "2019-09-23T14:32:00.638Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'ab4c47b4-c642-4ea9-b50c-5ff9f9ab6a60',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Mon, 23 Sep 2019 14:32:02 GMT',
  'ETag',
  'W/"11204544517640269968"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'fe6153aae00ca16814f0dfcab8c9c50c',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=yh3WBJ1DRb+BaXZe9M9O22HXiF0AAAAAQUIPAAAAAAA7Wxocaz+T4GqnGpGav8Iz; expires=Tue, 22 Sep 2020 07:18:59 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=KTzlPLxbHGeXiMgZYMlkBAAAAAAjrwSisHn4Ce/eUsI8zlyP; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=6EbNV3xofQwiqvBJREbyDmHXiF0AAAAALE9KdpvdNfJFdLOyDq9LZw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '13-2258120-2258121 NNNN CT(101 101 0) RT(1569249121500 17) q(0 0 2 -1) r(4 4) U5',
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
    "createdAt": "2019-09-23T14:32:00.355Z",
    "updatedAt": "2019-09-23T14:32:02.925Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 3,
    "publishedAt": "2019-09-23T14:32:02.925Z",
    "firstPublishedAt": "2019-09-23T14:32:00.638Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'ab4c47b4-c642-4ea9-b50c-5ff9f9ab6a60',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Mon, 23 Sep 2019 14:32:03 GMT',
  'ETag',
  'W/"10368250829348467050"',
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
  '6ea25be43ea501f400952828c70fd30b',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=3f8e/eG8RHe6j8shZAj2IGLXiF0AAAAAQUIPAAAAAADUbY5Tg1yw3PFKlDMsbRM9; expires=Tue, 22 Sep 2020 07:18:44 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=fDTSWjrWmmOTpNVrYMlkBAAAAACRxULaFL02Xe3xlfSpBIK9; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=5K3xHa6KjiQxqvBJREbyDmLXiF0AAAAA9iGmudfCKzxfiHTvt2vFlw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '14-3948654-3948655 NNNN CT(107 107 0) RT(1569249121985 27) q(0 0 2 -1) r(6 6) U5',
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
    "createdAt": "2019-09-23T14:32:01.136Z",
    "updatedAt": "2019-09-23T14:32:03.430Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 1,
    "publishedAt": "2019-09-23T14:32:01.771Z",
    "firstPublishedAt": "2019-09-23T14:32:01.771Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'ab4c47b4-c642-4ea9-b50c-5ff9f9ab6a60',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Mon, 23 Sep 2019 14:32:03 GMT',
  'ETag',
  'W/"1327572836504683527"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '70bd43c83f8be45d42f553e43c699eeb',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=aBaisG9oQ2umszWGQRtPlmLXiF0AAAAAQUIPAAAAAADE2EjunPMGbCWcrAwH6bCh; expires=Tue, 22 Sep 2020 07:18:11 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=si8LI96OpD2cg2pjYMlkBAAAAAD3zlWnhc7kzn7L+vk/STt4; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=wD9hKjdcoFA4qvBJREbyDmLXiF0AAAAAnWQ4mR8/qmx9B3Ps35cJIg==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '7-5440908-5440909 NNNN CT(0 0 0) RT(1569249122708 24) q(0 0 0 -1) r(2 2) U5',
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
    "createdAt": "2019-09-23T14:32:01.136Z",
    "updatedAt": "2019-09-23T14:32:03.703Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 3,
    "publishedAt": "2019-09-23T14:32:03.703Z",
    "firstPublishedAt": "2019-09-23T14:32:01.771Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'ab4c47b4-c642-4ea9-b50c-5ff9f9ab6a60',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Mon, 23 Sep 2019 14:32:03 GMT',
  'ETag',
  'W/"16393224069727713311"',
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
  '839520e6789cb7355b53d347ec28cca6',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=lCBklhAFSJaF6svlUJmNNGPXiF0AAAAAQUIPAAAAAACV0szQl6EvsPaHwEPpFvxF; expires=Tue, 22 Sep 2020 07:19:09 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=XXTgU7o3TFTQHI7/YMlkBAAAAACzWNVUxUZb/z/znkQrwsP4; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=pRMAQMUefxY+qvBJREbyDmPXiF0AAAAAVi3Pj3UrjEUcVrEVYUiNig==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '10-1230511-1230513 NNNN CT(0 0 0) RT(1569249122995 19) q(0 0 0 -1) r(3 3) U5',
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
    "createdAt": "2019-09-23T14:32:00.355Z",
    "updatedAt": "2019-09-23T14:32:02.925Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 3,
    "publishedAt": "2019-09-23T14:32:02.925Z",
    "firstPublishedAt": "2019-09-23T14:32:00.638Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'ab4c47b4-c642-4ea9-b50c-5ff9f9ab6a60',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Mon, 23 Sep 2019 14:32:04 GMT',
  'ETag',
  'W/"10368250829348467050"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'bc5fe8e93231caf3f346404cc5f9724a',
  'Content-Length',
  '522',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=A3FSfLNRTbS4TATiq7typGPXiF0AAAAAQUIPAAAAAAAxLw47//+smkrwpn7KzvSo; expires=Tue, 22 Sep 2020 07:18:44 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=EiNTNnpgqByx4JHAYMlkBAAAAADG1z92xW/LPUMavGXGQm++; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=D0+3IkpWZ0tCqvBJREbyDmPXiF0AAAAAZOo8ax8D1/tCga5wOh2zgA==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '14-3948689-3948690 NNNN CT(0 0 0) RT(1569249123405 17) q(0 0 0 -1) r(1 1) U5',
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
    "createdAt": "2019-09-23T14:32:01.136Z",
    "updatedAt": "2019-09-23T14:32:03.703Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 3,
    "publishedAt": "2019-09-23T14:32:03.703Z",
    "firstPublishedAt": "2019-09-23T14:32:01.771Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'ab4c47b4-c642-4ea9-b50c-5ff9f9ab6a60',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Mon, 23 Sep 2019 14:32:04 GMT',
  'ETag',
  'W/"16393224069727713311"',
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
  '933aaf08545ac1f56fdb683e05fdc7bb',
  'Content-Length',
  '515',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=nyLj1JR5RLu7t3gFw6o8emPXiF0AAAAAQUIPAAAAAAAFi17hrfbUaj2H7dzhTZG5; expires=Tue, 22 Sep 2020 07:18:38 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=mQiZFNEMElP+O01gYMlkBAAAAADq8853vz4M4h3hT9iwBSHB; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=8u0HB5LkvAdLqvBJREbyDmPXiF0AAAAAPcuSiYEm2ghgL0S+tK1BLw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '6-3857682-3857683 NNNN CT(0 0 0) RT(1569249123635 19) q(0 0 0 -1) r(2 2) U5',
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
        "createdAt": "2019-09-23T14:32:00.355Z",
        "updatedAt": "2019-09-23T14:32:02.925Z",
        "environment": {
          "sys": {
            "id": "env-integration",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 3,
        "publishedAt": "2019-09-23T14:32:02.925Z",
        "firstPublishedAt": "2019-09-23T14:32:00.638Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'ab4c47b4-c642-4ea9-b50c-5ff9f9ab6a60',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Mon, 23 Sep 2019 14:32:04 GMT',
  'ETag',
  'W/"7645804035843445783"',
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
  'c3ea4f34d577d5e9b6cfc7c3669cc684',
  'Content-Length',
  '586',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=7Ya9khimSCy/QcIUJ6ksdmTXiF0AAAAAQUIPAAAAAAB733aurDr9Q4IOkspT2Mcm; expires=Tue, 22 Sep 2020 07:19:09 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=C+ObVl623WUpQ2V/YMlkBAAAAADYL+hRe2qAenArifKrBG/w; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=eT3NMvy0nUBUqvBJREbyDmTXiF0AAAAAOBYjGQxagV2o4mmTILBqmA==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '10-1230529-1230530 NNNN CT(0 0 0) RT(1569249123889 18) q(0 0 0 -1) r(1 1) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/blogpost', {"name":"blog post","fields":[{"name":"title","id":"title","type":"Symbol"},{"name":"category","id":"category","type":"Symbol"}]})
  .reply(201, {"sys":{"space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"id":"blogpost","type":"ContentType","createdAt":"2019-09-23T14:32:04.832Z","updatedAt":"2019-09-23T14:32:04.832Z","environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}},"createdBy":{"sys":{"type":"Link","linkType":"User","id":"33kZDXNajFNmbngiu5MvUa"}},"updatedBy":{"sys":{"type":"Link","linkType":"User","id":"33kZDXNajFNmbngiu5MvUa"}},"publishedCounter":0,"version":1},"displayField":null,"name":"blog post","description":null,"fields":[{"id":"title","name":"title","type":"Symbol","localized":false,"required":false,"validations":[],"disabled":false,"omitted":false},{"id":"category","name":"category","type":"Symbol","localized":false,"required":false,"validations":[],"disabled":false,"omitted":false}]}, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'ab4c47b4-c642-4ea9-b50c-5ff9f9ab6a60',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Mon, 23 Sep 2019 14:32:04 GMT',
  'ETag',
  '"14047254492059941281"',
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
  '6cb9e8625e3f1ef002ff6177a8fec766',
  'Content-Length',
  '1255',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=TRpKe7vSSeyihzIePGWvNGTXiF0AAAAAQUIPAAAAAADlSmdQJwJsS+XTXdQl4bO6; expires=Tue, 22 Sep 2020 07:19:09 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=RfdGRSXPZ0ukqbwiYMlkBAAAAADb4j8CxMRGzwoevM0wz6bn; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=RB6Ddqeta0RYqvBJREbyDmTXiF0AAAAAC/kICf00BiyuA/G8OykMig==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '10-1230543-1230546 NNNN CT(0 0 0) RT(1569249124128 17) q(0 0 0 -1) r(2 2) U5',
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
    "createdAt": "2019-09-23T14:32:04.832Z",
    "updatedAt": "2019-09-23T14:32:05.335Z",
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
    "firstPublishedAt": "2019-09-23T14:32:05.335Z",
    "publishedAt": "2019-09-23T14:32:05.335Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'ab4c47b4-c642-4ea9-b50c-5ff9f9ab6a60',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Mon, 23 Sep 2019 14:32:05 GMT',
  'ETag',
  'W/"9462306342291938149"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '4d3a8a9d967fd783a3eedf295f574e23',
  'Content-Length',
  '445',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=YIufB4unTu6NSW7SK5rbWWTXiF0AAAAAQUIPAAAAAAA1gAe/mzMg2cOjupPjGvCY; expires=Tue, 22 Sep 2020 07:18:58 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=B0HmFltGyCQVTMDYYMlkBAAAAADAfF5Ple+7elrfnERtZz41; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=puXIVoBnJnNhqvBJREbyDmTXiF0AAAAAwxgm5GXJ2v/y7YapbmF61w==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '8-1105705-1105707 NNNN CT(104 104 0) RT(1569249124439 17) q(0 0 2 -1) r(5 5) U5',
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
    "id": "1c9l1WWtlWazXP0Xj0OIgD",
    "type": "Entry",
    "createdAt": "2019-09-23T14:32:05.714Z",
    "updatedAt": "2019-09-23T14:32:05.714Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'ab4c47b4-c642-4ea9-b50c-5ff9f9ab6a60',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Mon, 23 Sep 2019 14:32:05 GMT',
  'ETag',
  '"5591371770792567376"',
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
  'bdbcf0a89ff420aac76116d73e742a34',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=NzpaKUXEQ2671y3oIr3NdmXXiF0AAAAAQUIPAAAAAAA/L5XN8ONgfL2DN72Fwgb5; expires=Tue, 22 Sep 2020 07:18:42 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=KZSWY/LD3DHSAiWtYMlkBAAAAADlzszdsCtkKMAFrFmvCng0; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=B8y7PH7qIVlpqvBJREbyDmXXiF0AAAAAIsKFj3EOZtAPQn+K8/F38A==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '0-2355678-2355679 NNNN CT(0 0 0) RT(1569249125012 17) q(0 0 0 -1) r(2 2) U5',
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
    "id": "19a7oG9jvoiXqK4sfeCLc1",
    "type": "Entry",
    "createdAt": "2019-09-23T14:32:06.028Z",
    "updatedAt": "2019-09-23T14:32:06.028Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'ab4c47b4-c642-4ea9-b50c-5ff9f9ab6a60',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Mon, 23 Sep 2019 14:32:06 GMT',
  'ETag',
  '"12330096039333169789"',
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
  '1679a27d1b7e4336051f3b58e5dc0142',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=x6K+KXrSQkuSMil/WgnOV2XXiF0AAAAAQUIPAAAAAAC3qPRzg0IKysSmpx5noZQZ; expires=Tue, 22 Sep 2020 07:18:44 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=dNHaczophSTCwPFiYMlkBAAAAACTMLR22Z0kNM63wlOtuLmg; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=+bhRDAbWpQKmqvBJREbyDmXXiF0AAAAA16f0Xjnr653+zDLLgzX9Eg==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '14-3948703-3948704 NNNN CT(0 0 0) RT(1569249125325 20) q(0 0 0 -1) r(2 2) U5',
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
        "createdAt": "2019-09-23T14:32:04.832Z",
        "updatedAt": "2019-09-23T14:32:05.335Z",
        "environment": {
          "sys": {
            "id": "env-integration",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 1,
        "publishedAt": "2019-09-23T14:32:05.335Z",
        "firstPublishedAt": "2019-09-23T14:32:05.335Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'ab4c47b4-c642-4ea9-b50c-5ff9f9ab6a60',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Mon, 23 Sep 2019 14:32:06 GMT',
  'ETag',
  'W/"4272746943706964272"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '36794f518f191c0dab0370de05e44b9b',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=Z6qwlAUJQpuMg0kzPSEKbWXXiF0AAAAAQUIPAAAAAABA4+d5z9fA+dGVVOOZM0YF; expires=Tue, 22 Sep 2020 07:18:59 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=zVfNZNy6cHEf9yFoYMlkBAAAAACwtDKP9sbYTH61wZ4Xn2+/; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=PdwMKqVKcnGsqvBJREbyDmXXiF0AAAAAq+CF/6bxyaZE27iW3Dqw0g==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '13-2258181-2258183 NNNN CT(0 0 0) RT(1569249125643 17) q(0 0 0 -1) r(2 2) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/entries')
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
            "id": "bohepdihyxin"
          }
        },
        "id": "1c9l1WWtlWazXP0Xj0OIgD",
        "type": "Entry",
        "createdAt": "2019-09-23T14:32:05.714Z",
        "updatedAt": "2019-09-23T14:32:05.714Z",
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
            "id": "bohepdihyxin"
          }
        },
        "id": "19a7oG9jvoiXqK4sfeCLc1",
        "type": "Entry",
        "createdAt": "2019-09-23T14:32:06.028Z",
        "updatedAt": "2019-09-23T14:32:06.028Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'ab4c47b4-c642-4ea9-b50c-5ff9f9ab6a60',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Mon, 23 Sep 2019 14:32:06 GMT',
  'ETag',
  'W/"2962551926023610504"',
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
  'c1d1291fdfd34ff0ea022b5d81af9ee3',
  'Content-Length',
  '460',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=yuWmSRPmSh+6Ls5gO5Ud0GbXiF0AAAAAQUIPAAAAAAAzPY90rv0QYc1NtYiPqk7l; expires=Tue, 22 Sep 2020 07:19:09 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=kZhfH2sWw3LWcEgUYMlkBAAAAAADnl5qhjV/TMevPY+AXaat; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=2DvjJiDZlyOwqvBJREbyDmbXiF0AAAAApJdkjcBrzd6WP8tKNSaXPQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '10-1230553-1230554 NNNN CT(0 0 0) RT(1569249125898 16) q(0 0 0 -1) r(1 1) U5',
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
        "createdAt":"2019-09-23T14:31:22Z",
        "updatedAt":"2019-09-23T14:31:22Z"
      }
    }
  ]
}

, [ 'Accept-Ranges',
  'bytes',
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'Mon, 23 Sep 2019 14:32:06 GMT',
  'ETag',
  'W/"ab72d22aec43abe7eccc4f8dcafb1136"',
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
  'a1ddd1aebc9fc8347aa77929a28c9d62',
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
  'visid_incap_673446=Xn59PHxlQ8KXE2CnVXo6jmbXiF0AAAAAQUIPAAAAAACq3hacq5iBLDi8dKlltM0+; expires=Tue, 22 Sep 2020 07:18:36 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=45jaAswWwk19hcAtYMlkBAAAAAAeTuF1mWQVF/pR7Wv/ggKJ; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=v9qmKLbzn2i0qvBJREbyDmbXiF0AAAAAhmaqXJLHcnv6VevDzJoeTw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '4-5146632-5146633 NNNN CT(0 0 0) RT(1569249126147 17) q(0 0 0 -1) r(1 1) U5',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/entries/1c9l1WWtlWazXP0Xj0OIgD', {"sys":{"id":"1c9l1WWtlWazXP0Xj0OIgD","version":1,"contentType":{"sys":{"type":"Link","linkType":"ContentType","id":"blogpost"}}},"fields":{"title":{"en-US":"hello!"},"category":{"en-US":"hello!"}}})
  .reply(200, {
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "bohepdihyxin"
      }
    },
    "id": "1c9l1WWtlWazXP0Xj0OIgD",
    "type": "Entry",
    "createdAt": "2019-09-23T14:32:05.714Z",
    "updatedAt": "2019-09-23T14:32:07.049Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'ab4c47b4-c642-4ea9-b50c-5ff9f9ab6a60',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Mon, 23 Sep 2019 14:32:07 GMT',
  'ETag',
  'W/"369011947345385406"',
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
  '2bbb5650275d01a5da6942f7188a5d16',
  'Content-Length',
  '365',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=dR+4ZT+rTo25E7iGmVwKNWbXiF0AAAAAQUIPAAAAAAB2VvESme5m9PXGaUCfHZAp; expires=Tue, 22 Sep 2020 07:18:36 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=Kd9PQ6JBs1aSk5lbYMlkBAAAAABuNx6PNTjozNwvUHnXAYp1; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=tKLHSsMVyWa4qvBJREbyDmbXiF0AAAAA+CrcjqYka3DvDNveEMIyqw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '2-4109026-4109027 NNNN CT(0 0 0) RT(1569249126350 17) q(0 0 0 -1) r(2 2) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/entries/1c9l1WWtlWazXP0Xj0OIgD/published')
  .reply(200, {
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "bohepdihyxin"
      }
    },
    "id": "1c9l1WWtlWazXP0Xj0OIgD",
    "type": "Entry",
    "createdAt": "2019-09-23T14:32:05.714Z",
    "updatedAt": "2019-09-23T14:32:07.289Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 2,
    "publishedAt": "2019-09-23T14:32:07.289Z",
    "firstPublishedAt": "2019-09-23T14:32:07.289Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'ab4c47b4-c642-4ea9-b50c-5ff9f9ab6a60',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Mon, 23 Sep 2019 14:32:07 GMT',
  'ETag',
  'W/"17200929867849179085"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '1124348aee1ce7fc5a5d30f360fec4a5',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=BIWn3lO7ROewRkJ6T5dXIGbXiF0AAAAAQUIPAAAAAAC+7NgO0SKLrId3S5Rip8VQ; expires=Tue, 22 Sep 2020 07:18:44 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=aC0nZ2SF0xB6Xgk3YMlkBAAAAAB/G2QU2M/1OBTiyx9/ow82; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=NFupYc74ZnDJqvBJREbyDmbXiF0AAAAAQ41DS0RDH7W6cjjaMelLxA==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '14-3948812-3948814 NNNN CT(0 0 0) RT(1569249126600 19) q(0 0 0 -1) r(2 2) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/entries/19a7oG9jvoiXqK4sfeCLc1', {"sys":{"id":"19a7oG9jvoiXqK4sfeCLc1","version":1,"contentType":{"sys":{"type":"Link","linkType":"ContentType","id":"blogpost"}}},"fields":{"title":{"en-US":"hello!"},"category":{"en-US":"hello!"}}})
  .reply(200, {
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "bohepdihyxin"
      }
    },
    "id": "19a7oG9jvoiXqK4sfeCLc1",
    "type": "Entry",
    "createdAt": "2019-09-23T14:32:06.028Z",
    "updatedAt": "2019-09-23T14:32:07.636Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'ab4c47b4-c642-4ea9-b50c-5ff9f9ab6a60',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Mon, 23 Sep 2019 14:32:07 GMT',
  'ETag',
  'W/"10330655902633672776"',
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
  '55fbbefd4871c205bab8a5d3a5c12682',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=Skz9FuD3QyaCFrB3SMKqrGfXiF0AAAAAQUIPAAAAAAD57Mj4ScfRzOdNDOeBeLLw; expires=Tue, 22 Sep 2020 07:18:36 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=4DEtBNbgF3EPssWJYMlkBAAAAAA7y0qWOYj1zC9j+lJRgMh/; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=J31IMDy4BHzLqvBJREbyDmfXiF0AAAAA3Dk49YJToyeON3YeUF9Y8A==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '4-5146648-5146650 NNNN CT(0 0 0) RT(1569249126935 16) q(0 0 0 -1) r(2 2) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/entries/19a7oG9jvoiXqK4sfeCLc1/published')
  .reply(200, {
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "bohepdihyxin"
      }
    },
    "id": "19a7oG9jvoiXqK4sfeCLc1",
    "type": "Entry",
    "createdAt": "2019-09-23T14:32:06.028Z",
    "updatedAt": "2019-09-23T14:32:07.862Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 2,
    "publishedAt": "2019-09-23T14:32:07.862Z",
    "firstPublishedAt": "2019-09-23T14:32:07.862Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'ab4c47b4-c642-4ea9-b50c-5ff9f9ab6a60',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Mon, 23 Sep 2019 14:32:08 GMT',
  'ETag',
  'W/"8337661788869385664"',
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
  '804516a36e18858062e436f8356aaaea',
  'Content-Length',
  '393',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=1oFbP+eZR/CDuJv9CPUqtGfXiF0AAAAAQUIPAAAAAAB1EmghCFJgrpsBpy/VnZKa; expires=Tue, 22 Sep 2020 07:18:59 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=hOuABiitnR8zGOfkYMlkBAAAAAAk/MSJhknWRsMTrc12Swr8; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=38DASkAw+mrjqvBJREbyDmfXiF0AAAAALCx6gmQVDcRR7caq6lh41A==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '13-2258191-2258192 NNNN CT(0 0 0) RT(1569249127181 18) q(0 0 0 -1) r(4 4) U5',
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
        "id": "1c9l1WWtlWazXP0Xj0OIgD",
        "type": "Entry",
        "createdAt": "2019-09-23T14:32:05.714Z",
        "updatedAt": "2019-09-23T14:32:07.289Z",
        "environment": {
          "sys": {
            "id": "env-integration",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 2,
        "publishedAt": "2019-09-23T14:32:07.289Z",
        "firstPublishedAt": "2019-09-23T14:32:07.289Z",
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
        "id": "19a7oG9jvoiXqK4sfeCLc1",
        "type": "Entry",
        "createdAt": "2019-09-23T14:32:06.028Z",
        "updatedAt": "2019-09-23T14:32:07.862Z",
        "environment": {
          "sys": {
            "id": "env-integration",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 2,
        "publishedAt": "2019-09-23T14:32:07.862Z",
        "firstPublishedAt": "2019-09-23T14:32:07.862Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'ab4c47b4-c642-4ea9-b50c-5ff9f9ab6a60',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Mon, 23 Sep 2019 14:32:08 GMT',
  'ETag',
  'W/"5807151609484674485"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '1e4b2bcd4ff73b73f98bfcc6f7927888',
  'Content-Length',
  '538',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=yHwW9c95Tgqq+wfKToz8/GfXiF0AAAAAQUIPAAAAAAArgiM9Uwh7iKOJHtuTy73q; expires=Tue, 22 Sep 2020 07:18:36 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=Gx78JWs4hjjQhVBbYMlkBAAAAAC5mf8Iz0DhLqx3CI1GavYG; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=E8QNA5HMtkz7qvBJREbyDmfXiF0AAAAA6WJF7SuQm69Zb52r6kXvfQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '1-3097943-3097944 NNNN CT(0 0 0) RT(1569249127696 18) q(0 0 0 -1) r(1 1) U5',
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'ab4c47b4-c642-4ea9-b50c-5ff9f9ab6a60',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Mon, 23 Sep 2019 14:32:08 GMT',
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
  '97532131d8b06a0f396cb66ffe28df10',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=4GKCQr66QAytg+T2D2ipLGjXiF0AAAAAQUIPAAAAAABhrGibqWmsYUL4tiBYa74t; expires=Tue, 22 Sep 2020 07:18:59 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=dovaN7LtLFfENnwPYMlkBAAAAAD2WcJUV3/BoxrEbqBbi0Wp; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=FDH7HF7E4UEYq/BJREbyDmjXiF0AAAAAh3mB6KCAHgb8D4Wde7tmDg==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '11-1452131-1452132 NNNN CT(0 0 0) RT(1569249128008 17) q(0 0 0 -1) r(1 1) U5',
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
  "requestId": "f13442ebaac7ea067782ff4fb737592a"
}
, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'ab4c47b4-c642-4ea9-b50c-5ff9f9ab6a60',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Mon, 23 Sep 2019 14:32:08 GMT',
  'ETag',
  '"5168661169725045322"',
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
  'f13442ebaac7ea067782ff4fb737592a',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=0ufFwOQgRhKOy7MTsz2M0WjXiF0AAAAAQUIPAAAAAADar4xHaUFUhi9OD79v+qKn; expires=Tue, 22 Sep 2020 07:18:36 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=pAPhVFuhvV0nysEFYMlkBAAAAAA7dz5q4nmyl1/CFs8QUpH5; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=uduKHaaiykYiq/BJREbyDmjXiF0AAAAAYJ3JlBrKEn6k+h6qMjN3tA==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '3-4960143-4960144 NNNN CT(0 0 0) RT(1569249128249 63) q(0 0 0 -1) r(1 1) U5',
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
        "createdAt":"2019-09-23T14:31:22Z",
        "updatedAt":"2019-09-23T14:31:22Z"
      }
    }
  ]
}

, [ 'Accept-Ranges',
  'bytes',
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'Mon, 23 Sep 2019 14:32:09 GMT',
  'ETag',
  'W/"ab72d22aec43abe7eccc4f8dcafb1136"',
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
  'ae1b53572d78dfe7b7fa95fa843fc401',
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
  'visid_incap_673446=q9hDKJ7GStGdNcPlaUSr5mjXiF0AAAAAQUIPAAAAAABhkzFdRQtgBs5+R3kiZOiu; expires=Tue, 22 Sep 2020 07:18:36 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=UhqDB1CuHwjUpx89YMlkBAAAAADauLtF1XzaOttpyjrIjT36; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=N1gCeRbZ9BIxq/BJREbyDmjXiF0AAAAAB87emhpBgpaME8cJPo3AZg==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '4-5146670-5146671 NNNN CT(104 104 0) RT(1569249128611 19) q(0 0 2 -1) r(3 3) U5',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/blogPost', {"name":"Blog post","fields":[{"id":"slug","name":"URL Slug","type":"Symbol","required":true}],"description":"super angry"})
  .reply(201, {"sys":{"space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"id":"blogPost","type":"ContentType","createdAt":"2019-09-23T14:32:09.836Z","updatedAt":"2019-09-23T14:32:09.837Z","environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}},"createdBy":{"sys":{"type":"Link","linkType":"User","id":"33kZDXNajFNmbngiu5MvUa"}},"updatedBy":{"sys":{"type":"Link","linkType":"User","id":"33kZDXNajFNmbngiu5MvUa"}},"publishedCounter":0,"version":1},"displayField":null,"name":"Blog post","description":"super angry","fields":[{"id":"slug","name":"URL Slug","type":"Symbol","localized":false,"required":true,"validations":[],"disabled":false,"omitted":false}]}, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'ab4c47b4-c642-4ea9-b50c-5ff9f9ab6a60',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Mon, 23 Sep 2019 14:32:09 GMT',
  'ETag',
  '"5118377729003956968"',
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
  'ad61db2a1de2af4aed5cb697d12bf36a',
  'Content-Length',
  '1054',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=Z3qxzKCiQxeNZuwQDENOk2nXiF0AAAAAQUIPAAAAAAACbOBn4ufjdApDqF8KVv83; expires=Tue, 22 Sep 2020 07:18:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=RFywE5FVHkgiSb/yYMlkBAAAAAB3a3qm1EL/p85HLwZAnU7E; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=XkuVNn3F6U88q/BJREbyDmnXiF0AAAAATxqWFJK6c5XsByM6wL11sA==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '5-6482264-6482265 NNNN CT(0 0 0) RT(1569249129130 17) q(0 0 0 -1) r(2 2) U5',
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
    "createdAt": "2019-09-23T14:32:09.836Z",
    "updatedAt": "2019-09-23T14:32:10.205Z",
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
    "firstPublishedAt": "2019-09-23T14:32:10.204Z",
    "publishedAt": "2019-09-23T14:32:10.204Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'ab4c47b4-c642-4ea9-b50c-5ff9f9ab6a60',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Mon, 23 Sep 2019 14:32:10 GMT',
  'ETag',
  'W/"9796130238860732147"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '08d6568d704c39312e386ef194950e77',
  'Content-Length',
  '453',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=BDM1pkmsQqaKRvXWARWsNWnXiF0AAAAAQUIPAAAAAAB2sFsrxHi6Wq3YffapBpby; expires=Tue, 22 Sep 2020 07:18:11 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=i5WXYIuXOhnm5zZCYMlkBAAAAAAG+e9cpyVWiBAWV2ann1dR; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=TGeSGfS1VFxFq/BJREbyDmnXiF0AAAAAOBnVcXyih+ByjUWp36Jm/g==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '7-5441001-5441002 NNNN CT(0 0 0) RT(1569249129471 74) q(0 0 0 -1) r(3 3) U5',
  'X-CDN',
  'Incapsula' ]);


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
    "createdAt": "2019-09-23T14:32:10.298Z",
    "createdBy": {
      "sys": {
        "id": "33kZDXNajFNmbngiu5MvUa",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2019-09-23T14:32:10.614Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'ab4c47b4-c642-4ea9-b50c-5ff9f9ab6a60',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Mon, 23 Sep 2019 14:32:10 GMT',
  'ETag',
  'W/"14244123274943696221"',
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
  '2319e265beee40f4acf08063a14e7322',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=it1Ra0p9ShGAViY5B6ImuWrXiF0AAAAAQUIPAAAAAAAjiWVLQHFiMbQkAuf2npLG; expires=Tue, 22 Sep 2020 07:18:38 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=IxHxAE5OjSbT+llZYMlkBAAAAACeAHIL1GhDUdOh/rqrMedI; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=DybVYgH9cVJTq/BJREbyDmrXiF0AAAAAfcchu7WdKvLlIcCS2IC6gQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '6-3857715-3857716 NNNN CT(0 0 0) RT(1569249129926 18) q(0 0 0 -1) r(2 2) U5',
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
    "createdAt": "2019-09-23T14:32:10.298Z",
    "createdBy": {
      "sys": {
        "id": "33kZDXNajFNmbngiu5MvUa",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2019-09-23T14:32:10.614Z",
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
        "setting": "value"
      },
      "widgetId": "slugEditor",
      "widgetNamespace": "builtin"
    }
  ]
}
, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'ab4c47b4-c642-4ea9-b50c-5ff9f9ab6a60',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Mon, 23 Sep 2019 14:32:10 GMT',
  'ETag',
  'W/"13520087381067039631"',
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
  '50164fd62abb607946f0fb4ccab9f7fc',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=gVafRD8AS02ci8yunD4FkGrXiF0AAAAAQUIPAAAAAACLcdR9qUBkJZJUIeJrBHg5; expires=Tue, 22 Sep 2020 07:18:11 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=ni2fUSzzxi4NZB7jYMlkBAAAAACgIfadzZpBoRPIikkntS4I; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=Pm4RW0zlSShYq/BJREbyDmrXiF0AAAAAh5SFqwHeVVyRfHaDrFGMNw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '7-5441019-5441020 NNNN CT(0 0 0) RT(1569249130231 18) q(0 0 0 -1) r(1 1) U5',
  'X-CDN',
  'Incapsula' ]);


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
        "createdAt": "2019-09-23T14:32:09.836Z",
        "updatedAt": "2019-09-23T14:32:10.205Z",
        "environment": {
          "sys": {
            "id": "env-integration",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 1,
        "publishedAt": "2019-09-23T14:32:10.204Z",
        "firstPublishedAt": "2019-09-23T14:32:10.204Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'ab4c47b4-c642-4ea9-b50c-5ff9f9ab6a60',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Mon, 23 Sep 2019 14:32:11 GMT',
  'ETag',
  'W/"14436547477129734488"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '266cf45ccd14199732f78e30e8aaaac3',
  'Content-Length',
  '520',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=lB2q/6nNT7a1znB6g/wzoGrXiF0AAAAAQUIPAAAAAAD9p9vcYI/LwazF3dkq4clN; expires=Tue, 22 Sep 2020 07:18:36 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=wAz7bUr54g9gqBW4YMlkBAAAAACY17v1bXgTWGtAnRWqHZOZ; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=SALTK9Q9+UZfq/BJREbyDmrXiF0AAAAA+3gjcSv+uLy8ug6sh13T5w==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '1-3097971-3097972 NNNN CT(0 0 0) RT(1569249130444 19) q(0 0 0 -1) r(2 2) U5',
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
    "createdAt": "2019-09-23T14:32:10.298Z",
    "createdBy": {
      "sys": {
        "id": "33kZDXNajFNmbngiu5MvUa",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2019-09-23T14:32:10.614Z",
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
        "setting": "value"
      },
      "widgetId": "slugEditor",
      "widgetNamespace": "builtin"
    }
  ]
}
, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'ab4c47b4-c642-4ea9-b50c-5ff9f9ab6a60',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Mon, 23 Sep 2019 14:32:11 GMT',
  'ETag',
  'W/"13520087381067039631"',
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
  '85f3e2e5c0b5f48e0edb3966059a79c9',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=MFchVLmxQDmeijuuzzcbQ2vXiF0AAAAAQUIPAAAAAAByuZd8rqx4R3sFROYI3dsP; expires=Tue, 22 Sep 2020 07:18:36 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=892EA7Kg1x82Ig+bYMlkBAAAAACidF+Dn0TZjexbInXyoxM5; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=SH+iCZGIWAlnq/BJREbyDmvXiF0AAAAA04fCFsnX6cQj+WNCLiInhQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '4-5146712-5146713 NNNN CT(101 108 0) RT(1569249130683 18) q(0 0 2 -1) r(3 3) U5',
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
        "createdAt":"2019-09-23T14:31:22Z",
        "updatedAt":"2019-09-23T14:31:22Z"
      }
    }
  ]
}

, [ 'Accept-Ranges',
  'bytes',
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'Mon, 23 Sep 2019 14:32:11 GMT',
  'ETag',
  'W/"ab72d22aec43abe7eccc4f8dcafb1136"',
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
  'e7f38cce251f01d9a265c5f7b7918e20',
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
  'visid_incap_673446=NCIpVLb0SCKmBHa63y+KJGvXiF0AAAAAQUIPAAAAAAArlHkRsi1ZKSDlDCv7q5cf; expires=Tue, 22 Sep 2020 07:18:42 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=3ARPBVz0TVGEfenZYMlkBAAAAABCv5lgDJMMz049P+6/CGda; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=A3HSKrvUJUZuq/BJREbyDmvXiF0AAAAAnX0KeurP3dh1dvhDokHkhw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '0-2355710-2355712 NNNN CT(103 104 0) RT(1569249131121 19) q(0 0 2 -1) r(3 3) U5',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked' ]);


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
    "createdAt": "2019-09-23T14:32:09.836Z",
    "updatedAt": "2019-09-23T14:32:12.459Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 1,
    "publishedAt": "2019-09-23T14:32:10.204Z",
    "firstPublishedAt": "2019-09-23T14:32:10.204Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'ab4c47b4-c642-4ea9-b50c-5ff9f9ab6a60',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Mon, 23 Sep 2019 14:32:12 GMT',
  'ETag',
  'W/"6526653340288097851"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '590c5368c16a21115fb868ae5b3c52bc',
  'Content-Length',
  '452',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=nmsOQw0TRBSrZzwA2lgcH2vXiF0AAAAAQUIPAAAAAAAPbCWeWCLxlCYdHYCOrPT5; expires=Tue, 22 Sep 2020 07:18:11 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=RwJ+HOtWLRyV9owSYMlkBAAAAAAvUe9dZPJH1vg+tf1sgUIU; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=6DSXDhEd/AJzq/BJREbyDmvXiF0AAAAAslDQtM8bvc4UPP3ZiRz1PA==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '7-5441046-5441047 NNNN CT(106 105 0) RT(1569249131545 17) q(0 0 2 -1) r(4 4) U5',
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
    "createdAt": "2019-09-23T14:32:09.836Z",
    "updatedAt": "2019-09-23T14:32:12.746Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 3,
    "publishedAt": "2019-09-23T14:32:12.746Z",
    "firstPublishedAt": "2019-09-23T14:32:10.204Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'ab4c47b4-c642-4ea9-b50c-5ff9f9ab6a60',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Mon, 23 Sep 2019 14:32:13 GMT',
  'ETag',
  'W/"13334317562083246110"',
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
  'd6893fee095aa11a9a7b703d5fd99caf',
  'Content-Length',
  '459',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=WN7GVGBySHux4EHs2BkWCWzXiF0AAAAAQUIPAAAAAAAJk5O7dbLmVzWBpq6ZdkBr; expires=Tue, 22 Sep 2020 07:19:09 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=SrKlYDmMInSpQJBzYMlkBAAAAACbJYJ2XOTjSqqzYVHylwW8; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=VlgYGvXo4mN7q/BJREbyDmzXiF0AAAAAh5NcwPyjZC8ZeFk1cJ+Tiw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '10-1230594-1230596 NNNN CT(0 0 0) RT(1569249132030 40) q(0 0 0 -1) r(4 4) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/blogPost/editor_interface', {"controls":[]})
  .reply(200, {"controls":[],"sys":{"id":"default","type":"EditorInterface","space":{"sys":{"id":"bohepdihyxin","type":"Link","linkType":"Space"}},"version":4,"createdAt":"2019-09-23T14:32:10.298Z","createdBy":{"sys":{"id":"33kZDXNajFNmbngiu5MvUa","type":"Link","linkType":"User"}},"updatedAt":"2019-09-23T14:32:13.261Z","updatedBy":{"sys":{"type":"Link","linkType":"User","id":"33kZDXNajFNmbngiu5MvUa"}},"contentType":{"sys":{"id":"blogPost","type":"Link","linkType":"ContentType"}},"environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}}}}, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'ab4c47b4-c642-4ea9-b50c-5ff9f9ab6a60',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Mon, 23 Sep 2019 14:32:13 GMT',
  'ETag',
  '"14050864996808059876"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '537007bbfe07d252a67880d9d39b05f6',
  'Content-Length',
  '880',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=m9A0t9ebSz6ymkq+TWm78G3XiF0AAAAAQUIPAAAAAACp6z+otn9zAJIYY9k2g1Lf; expires=Tue, 22 Sep 2020 07:18:44 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=HXyRG0iI1EAuYRdNYMlkBAAAAAD7NOrEOB/1dL+FdfDBUPOd; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=H3AjRbvdx1OJq/BJREbyDm3XiF0AAAAAwwXx4JHJkjNr+6DCflqxsw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '14-3948857-3948859 NNNN CT(0 0 0) RT(1569249132566 19) q(0 0 0 -1) r(5 5) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/blogPost/editor_interface', {"controls":[{"fieldId":"slug","widgetId":"singleLine","widgetNamespace":"builtin"}]})
  .reply(200, {"controls":[{"fieldId":"slug","widgetId":"singleLine","widgetNamespace":"builtin"}],"sys":{"id":"default","type":"EditorInterface","space":{"sys":{"id":"bohepdihyxin","type":"Link","linkType":"Space"}},"version":5,"createdAt":"2019-09-23T14:32:10.298Z","createdBy":{"sys":{"id":"33kZDXNajFNmbngiu5MvUa","type":"Link","linkType":"User"}},"updatedAt":"2019-09-23T14:32:13.808Z","updatedBy":{"sys":{"type":"Link","linkType":"User","id":"33kZDXNajFNmbngiu5MvUa"}},"contentType":{"sys":{"id":"blogPost","type":"Link","linkType":"ContentType"}},"environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}}}}, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'ab4c47b4-c642-4ea9-b50c-5ff9f9ab6a60',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Mon, 23 Sep 2019 14:32:13 GMT',
  'ETag',
  '"5566547442584747196"',
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
  '6bb0ba0fc903f346e4e1a14a89cc348b',
  'Content-Length',
  '987',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=jyD8nnhrSWi6sr+uEAcqKG3XiF0AAAAAQUIPAAAAAAAc07R62KCBgi0w7AjuxbhL; expires=Tue, 22 Sep 2020 07:18:36 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=Q1+4SzNY6Ubvn5woYMlkBAAAAABlgkIetHmzpRQQ7wps5rlb; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=k50rfCDj/iWOq/BJREbyDm3XiF0AAAAAQ1x2+yy1EMc4y+yHkMsTVA==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '1-3098024-3098029 NNNN CT(0 0 0) RT(1569249133112 17) q(0 0 0 -1) r(2 2) U5',
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
    "version": 5,
    "createdAt": "2019-09-23T14:32:10.298Z",
    "createdBy": {
      "sys": {
        "id": "33kZDXNajFNmbngiu5MvUa",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2019-09-23T14:32:13.808Z",
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
      "widgetId": "singleLine",
      "widgetNamespace": "builtin"
    }
  ]
}
, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'ab4c47b4-c642-4ea9-b50c-5ff9f9ab6a60',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Mon, 23 Sep 2019 14:32:14 GMT',
  'ETag',
  '"4789566700218909722"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '6e6a871cb91c3b5dae1bb2dab6a15f66',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=dhAGRsD6Q1OQ+diykFUUyW3XiF0AAAAAQUIPAAAAAACfw7SJGC3Z696U9QSarZWa; expires=Tue, 22 Sep 2020 07:18:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=E+CsCxSUi0tkM06TYMlkBAAAAAAuOuaCMEc39ZVYBOSSQL6J; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=wU2wVK9QdjeWq/BJREbyDm3XiF0AAAAAsVeF45sGzZM8z2U2iXcpWQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '5-6482321-6482323 NNNN CT(106 109 0) RT(1569249133436 19) q(0 0 2 -1) r(4 4) U5',
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
        "createdAt": "2019-09-23T14:32:09.836Z",
        "updatedAt": "2019-09-23T14:32:12.746Z",
        "environment": {
          "sys": {
            "id": "env-integration",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 3,
        "publishedAt": "2019-09-23T14:32:12.746Z",
        "firstPublishedAt": "2019-09-23T14:32:10.204Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'ab4c47b4-c642-4ea9-b50c-5ff9f9ab6a60',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Mon, 23 Sep 2019 14:32:14 GMT',
  'ETag',
  'W/"14451301358012536276"',
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
  '5e196cc22371acf9f2db018de27895a8',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=UZdXmUrtTeaYSxYA53bZnW7XiF0AAAAAQUIPAAAAAABZ4K6zfBV3tsVmQDMU9bFK; expires=Tue, 22 Sep 2020 07:18:44 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=xjypCrynMAiTV8njYMlkBAAAAAB0bq7udhOxH3/qcW0pGDLI; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=FbmMTYgalEOYq/BJREbyDm7XiF0AAAAAk49/fW1McyeAeHDtDJod3w==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '14-3948865-3948866 NNNN CT(0 0 0) RT(1569249133926 18) q(0 0 0 -1) r(1 1) U5',
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
    "version": 5,
    "createdAt": "2019-09-23T14:32:10.298Z",
    "createdBy": {
      "sys": {
        "id": "33kZDXNajFNmbngiu5MvUa",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2019-09-23T14:32:13.808Z",
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
      "widgetId": "singleLine",
      "widgetNamespace": "builtin"
    }
  ]
}
, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'ab4c47b4-c642-4ea9-b50c-5ff9f9ab6a60',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Mon, 23 Sep 2019 14:32:14 GMT',
  'ETag',
  '"4789566700218909722"',
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
  '70b62f5fc1c0c2e8025846953f741836',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=Pq5tsutDRXCXzOexFVoK/27XiF0AAAAAQUIPAAAAAACEyMEq5Etmk5VAtDdDRWSc; expires=Tue, 22 Sep 2020 07:18:11 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=mKNFAaJ/a0avKvH3YMlkBAAAAABHE8A6RWsa+BjdZGGzmM9n; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=8JS0U9CSFzSgq/BJREbyDm7XiF0AAAAA8cAFdt0b75XkUWz7/rbC9g==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '7-5441072-5441073 NNNN CT(0 0 0) RT(1569249134159 17) q(0 0 0 -1) r(2 2) U5',
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
        "createdAt":"2019-09-23T14:31:22Z",
        "updatedAt":"2019-09-23T14:31:22Z"
      }
    }
  ]
}

, [ 'Accept-Ranges',
  'bytes',
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'Mon, 23 Sep 2019 14:32:15 GMT',
  'ETag',
  'W/"ab72d22aec43abe7eccc4f8dcafb1136"',
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
  '7e5a6acae2c38cc433f822b57f9bb438',
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
  'visid_incap_673446=yoaPBrUqTpKxZmsTKuIdSW7XiF0AAAAAQUIPAAAAAADHpBdvvieaAuNloIp2Egsm; expires=Tue, 22 Sep 2020 07:18:36 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=ZkdvR4sLLifYN0cSYMlkBAAAAABDuXg7ILnVriuGCD9WRtx8; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=eNd2DGkmdgumq/BJREbyDm7XiF0AAAAAHtILGAl9RXvX/ebzIjJqNA==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '4-5146768-5146769 NNNN CT(0 0 0) RT(1569249134388 22) q(0 0 0 -1) r(1 1) U5',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked' ]);


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
    "createdAt": "2019-09-23T14:32:09.836Z",
    "updatedAt": "2019-09-23T14:32:15.329Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 3,
    "publishedAt": "2019-09-23T14:32:12.746Z",
    "firstPublishedAt": "2019-09-23T14:32:10.204Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'ab4c47b4-c642-4ea9-b50c-5ff9f9ab6a60',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Mon, 23 Sep 2019 14:32:15 GMT',
  'ETag',
  'W/"52057611384071832"',
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
  'fd45862be7b4260906ddbd69635fd185',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=vabUSqtbRgWbki+j8F184W7XiF0AAAAAQUIPAAAAAADb/uvhc08lO73EpDfvaKGd; expires=Tue, 22 Sep 2020 07:18:36 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=hbnkPzrqaj79xt51YMlkBAAAAACZ2wLn9C34AP5Jf9TQljUe; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=pNaFT/7iyzaqq/BJREbyDm7XiF0AAAAARwbg8HSroRJ2kAiBOSD+3w==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '2-4109076-4109077 NNNN CT(0 0 0) RT(1569249134595 27) q(0 0 0 -1) r(2 2) U5',
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
    "createdAt": "2019-09-23T14:32:09.836Z",
    "updatedAt": "2019-09-23T14:32:15.612Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 5,
    "publishedAt": "2019-09-23T14:32:15.612Z",
    "firstPublishedAt": "2019-09-23T14:32:10.204Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'ab4c47b4-c642-4ea9-b50c-5ff9f9ab6a60',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Mon, 23 Sep 2019 14:32:15 GMT',
  'ETag',
  'W/"7134860715028539960"',
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
  '71a5ff2de0f19733c1b185c62ceac68f',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=/S4rRgmjRSOrAyQ4LnTnPm/XiF0AAAAAQUIPAAAAAAAV4wFwNp/JsoxfS2XhlgLa; expires=Tue, 22 Sep 2020 07:18:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=5LUncAIm4CeBYvCCYMlkBAAAAAD1gPfzp3OY4gr01w5hqu2n; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=oUK3L83W2229q/BJREbyDm/XiF0AAAAAtGXtUBzEII7XGuyMt6NITA==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '5-6482348-6482349 NNNN CT(0 0 0) RT(1569249134883 26) q(0 0 0 -1) r(4 4) U5',
  'X-CDN',
  'Incapsula' ]);


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
    "createdAt": "2019-09-23T14:32:10.298Z",
    "createdBy": {
      "sys": {
        "id": "33kZDXNajFNmbngiu5MvUa",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2019-09-23T14:32:16.084Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'ab4c47b4-c642-4ea9-b50c-5ff9f9ab6a60',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Mon, 23 Sep 2019 14:32:16 GMT',
  'ETag',
  'W/"8729134116805376377"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '85543fd6c9c91a04c0717ac0834f8c36',
  'Content-Length',
  '420',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=RsPkfW2BQYyJwHCv78yiTW/XiF0AAAAAQUIPAAAAAABnnw+5NiDI8OqLHblJQkgg; expires=Tue, 22 Sep 2020 07:18:36 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=jLSeaB16fW2s8BqBYMlkBAAAAAAKiDsm+J/ngrJ3Jw7bctuV; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=z5eMThShej/Fq/BJREbyDm/XiF0AAAAAw6N80eIPQmgwRn3hhc5hKg==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '2-4109085-4109086 NNNN CT(0 0 0) RT(1569249135389 17) q(0 0 0 -1) r(2 2) U5',
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
    "version": 7,
    "createdAt": "2019-09-23T14:32:10.298Z",
    "createdBy": {
      "sys": {
        "id": "33kZDXNajFNmbngiu5MvUa",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2019-09-23T14:32:16.084Z",
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
      "widgetId": "slugEditor",
      "widgetNamespace": "builtin"
    }
  ]
}
, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'ab4c47b4-c642-4ea9-b50c-5ff9f9ab6a60',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Mon, 23 Sep 2019 14:32:16 GMT',
  'ETag',
  'W/"11855140753410569932"',
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
  '004989546601e0c0c28b787fcdcfefe5',
  'Content-Length',
  '406',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=f4Qv+lqxQ/a3E3hrXd+xwG/XiF0AAAAAQUIPAAAAAADRTCbm8J0fS3yX1Ymfa/Rm; expires=Tue, 22 Sep 2020 07:18:11 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=jsLTBeqpmi2MRmApYMlkBAAAAAC0caPLX85P+NQMePVQSy4P; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=ZPleI+1BJWjPq/BJREbyDm/XiF0AAAAAoGUpzoTioAXfTQmIDvDCGg==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '7-5441095-5441097 NNNN CT(0 0 0) RT(1569249135717 46) q(0 0 0 -1) r(2 2) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/content_types')
  .query({"sys.id":{"in":"customSidebar"},"skip":"0"})
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'ab4c47b4-c642-4ea9-b50c-5ff9f9ab6a60',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Mon, 23 Sep 2019 14:32:16 GMT',
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
  '1077be9ff83d50e9f2362c9e1acb810c',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=yvVW3DVjQdm1oqr9/4U2r3DXiF0AAAAAQUIPAAAAAADrYINFrmdnUBVqMqM9mWrm; expires=Tue, 22 Sep 2020 07:18:36 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=jTiGFwg7l2hzods3YMlkBAAAAACE1NJKeGnLdtNeR2YQN1wE; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=+BJqHty1Fmzeq/BJREbyDnDXiF0AAAAAFOHmeVQ+Dv3TRReaN9qmcQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '4-5146789-5146791 NNNN CT(104 104 0) RT(1569249135980 17) q(0 0 3 -1) r(4 4) U5',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked' ]);


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
  "requestId": "9449e2ece3679a82f5461a5604269b7a"
}
, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'ab4c47b4-c642-4ea9-b50c-5ff9f9ab6a60',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Mon, 23 Sep 2019 14:32:17 GMT',
  'ETag',
  '"5358694734259471701"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '9449e2ece3679a82f5461a5604269b7a',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=tJYduZqjQUekWWm5SLziQnDXiF0AAAAAQUIPAAAAAABdqJIsI7uPCQf//pLUGAtT; expires=Tue, 22 Sep 2020 07:18:36 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=hc4UabZJr23xalOoYMlkBAAAAADAd+S0svh7aejJ4G9X2p+G; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=P8aUcg34zUzoq/BJREbyDnDXiF0AAAAAoTZ/yi2I6xTZVnOQ1AW6GA==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '4-5146804-5146805 NNNN CT(0 0 0) RT(1569249136406 18) q(0 0 0 -1) r(1 1) U5',
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
        "createdAt":"2019-09-23T14:31:22Z",
        "updatedAt":"2019-09-23T14:31:22Z"
      }
    }
  ]
}

, [ 'Accept-Ranges',
  'bytes',
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'Mon, 23 Sep 2019 14:32:17 GMT',
  'ETag',
  'W/"ab72d22aec43abe7eccc4f8dcafb1136"',
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
  '58583db030dfd3af34d36942d0da529f',
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
  'visid_incap_673446=FzZPzjMwSFu8zcudiHjz6HDXiF0AAAAAQUIPAAAAAACU38YsFnsBvc91z9PI7Q7m; expires=Tue, 22 Sep 2020 07:18:36 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=yGIQZda5DU8hIZlUYMlkBAAAAAAS1ATN5X/e3f1jqA5M0z6H; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=3zYnYMFeUUX7q/BJREbyDnDXiF0AAAAAIOGBInFdS7G3zrai9/H6cQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '3-4960266-4960267 NNNN CT(107 107 0) RT(1569249136635 19) q(0 0 2 -1) r(3 3) U5',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/customSidebar', {"name":"Custom sidebar","fields":[],"description":"How to add, remove and update widgets"})
  .reply(201, {"sys":{"space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"id":"customSidebar","type":"ContentType","createdAt":"2019-09-23T14:32:17.759Z","updatedAt":"2019-09-23T14:32:17.759Z","environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}},"createdBy":{"sys":{"type":"Link","linkType":"User","id":"33kZDXNajFNmbngiu5MvUa"}},"updatedBy":{"sys":{"type":"Link","linkType":"User","id":"33kZDXNajFNmbngiu5MvUa"}},"publishedCounter":0,"version":1},"displayField":null,"name":"Custom sidebar","description":"How to add, remove and update widgets","fields":[]}, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'ab4c47b4-c642-4ea9-b50c-5ff9f9ab6a60',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Mon, 23 Sep 2019 14:32:17 GMT',
  'ETag',
  '"8154440019950037267"',
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
  '977e8e92466f22f72f39c7197590dc2d',
  'Content-Length',
  '882',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=gtxY3LATTKiNgDfECaFq6HHXiF0AAAAAQUIPAAAAAADHgGAHeS7kk4U/PMkBSEDF; expires=Tue, 22 Sep 2020 07:18:36 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=SM2JTYwtWnTNsdO+YMlkBAAAAABXRzj5JQOzlzQl8f+Yc3Vl; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=LwaFVpw97RACrPBJREbyDnHXiF0AAAAAcasfJWpEp2cUSY6sEqGsKw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '1-3098072-3098074 NNNN CT(0 0 0) RT(1569249137050 19) q(0 0 0 -1) r(2 2) U5',
  'X-CDN',
  'Incapsula' ]);


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
    "createdAt": "2019-09-23T14:32:17.759Z",
    "updatedAt": "2019-09-23T14:32:18.031Z",
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
    "firstPublishedAt": "2019-09-23T14:32:18.031Z",
    "publishedAt": "2019-09-23T14:32:18.031Z",
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
  "name": "Custom sidebar",
  "description": "How to add, remove and update widgets",
  "fields": []
}
, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'ab4c47b4-c642-4ea9-b50c-5ff9f9ab6a60',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Mon, 23 Sep 2019 14:32:18 GMT',
  'ETag',
  'W/"11510806935088561009"',
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
  'cd9d28f44a33a5b67f36be6f6248f408',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=Mucqffs2SJWPUc9IW2D/kHHXiF0AAAAAQUIPAAAAAAB8Y55QbgHqJOY6Sj+gakTt; expires=Tue, 22 Sep 2020 07:18:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=4lR5ILGHAlIGmwBUYMlkBAAAAAD97CCw8ag2DeDvFTUet/uG; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=ibniD8+iWAQNrPBJREbyDnHXiF0AAAAAd/tJ0ifr/CeciDurm5y47A==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '5-6482451-6482452 NNNN CT(0 0 0) RT(1569249137347 18) q(0 0 0 -1) r(3 3) U5',
  'X-CDN',
  'Incapsula' ]);


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
    "createdAt": "2019-09-23T14:32:18.124Z",
    "createdBy": {
      "sys": {
        "id": "33kZDXNajFNmbngiu5MvUa",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2019-09-23T14:32:18.468Z",
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "33kZDXNajFNmbngiu5MvUa"
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
, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'ab4c47b4-c642-4ea9-b50c-5ff9f9ab6a60',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Mon, 23 Sep 2019 14:32:18 GMT',
  'ETag',
  'W/"10540348824985986427"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '6142c14dff0a83534b97f991051bcdd1',
  'Content-Length',
  '458',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=Es3Y50hcRrCOMQuVBjWFzHHXiF0AAAAAQUIPAAAAAABppvd+eMMs7U4wKz8FO3pf; expires=Tue, 22 Sep 2020 07:18:38 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=jvbte4wP+TorUsz0YMlkBAAAAABKnJrN7XQOQCDCgjKVYc9T; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=dqyMKDHVsx8WrPBJREbyDnHXiF0AAAAA2u5MxzoZKnkh28Pr+x+B+A==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '6-3857772-3857773 NNNN CT(0 0 0) RT(1569249137737 18) q(0 0 0 -1) r(2 2) U5',
  'X-CDN',
  'Incapsula' ]);


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
    "createdAt": "2019-09-23T14:32:18.124Z",
    "createdBy": {
      "sys": {
        "id": "33kZDXNajFNmbngiu5MvUa",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2019-09-23T14:32:18.740Z",
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "33kZDXNajFNmbngiu5MvUa"
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
, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'ab4c47b4-c642-4ea9-b50c-5ff9f9ab6a60',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Mon, 23 Sep 2019 14:32:18 GMT',
  'ETag',
  'W/"7447831988541584998"',
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
  '1ac2667ee59eb37c4ddab71cefaaf1c6',
  'Content-Length',
  '458',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=bFwUP0/lRpqogYbP4+VCDHLXiF0AAAAAQUIPAAAAAACNdDBW95lYRwAy4okxfelH; expires=Tue, 22 Sep 2020 07:18:38 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=SjSFeIWehkA1CS57YMlkBAAAAACHokiZW0nVb566NV7042kb; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=s+nCMNGyPA4XrPBJREbyDnLXiF0AAAAAkEtZM03vukKgN6CjGzvLSw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '6-3857775-3857776 NNNN CT(0 0 0) RT(1569249138045 17) q(0 0 0 -1) r(2 2) U5',
  'X-CDN',
  'Incapsula' ]);


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
    "createdAt": "2019-09-23T14:32:18.124Z",
    "createdBy": {
      "sys": {
        "id": "33kZDXNajFNmbngiu5MvUa",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2019-09-23T14:32:19.226Z",
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "33kZDXNajFNmbngiu5MvUa"
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
, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'ab4c47b4-c642-4ea9-b50c-5ff9f9ab6a60',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Mon, 23 Sep 2019 14:32:19 GMT',
  'ETag',
  'W/"8474087943059135499"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '04114671cd8dc888bff706f63201d9c4',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=YfZ9TTkPR/+cVei0J7RgTXLXiF0AAAAAQUIPAAAAAABkMhHUVGz2BkrAB0kNn8Dm; expires=Tue, 22 Sep 2020 07:18:36 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=Q0vKXyoQMmZUhsQhYMlkBAAAAADDo7P/98wcBfJuqgZshPoi; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=eFNlK55UckIirPBJREbyDnLXiF0AAAAAoR+QG25fxBKnTjl6VRMEfw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '4-5146821-5146822 NNNN CT(100 100 0) RT(1569249138343 17) q(0 0 2 -1) r(4 4) U5',
  'X-CDN',
  'Incapsula' ]);


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
    "createdAt": "2019-09-23T14:32:18.124Z",
    "createdBy": {
      "sys": {
        "id": "33kZDXNajFNmbngiu5MvUa",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2019-09-23T14:32:19.491Z",
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "33kZDXNajFNmbngiu5MvUa"
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
, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'ab4c47b4-c642-4ea9-b50c-5ff9f9ab6a60',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Mon, 23 Sep 2019 14:32:19 GMT',
  'ETag',
  'W/"8315927984837972515"',
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
  'de11af00a5ff334b83c46508317fd4b6',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=KWKmz3VtQT2W1+bM+MFpkHPXiF0AAAAAQUIPAAAAAABoqPCQVjWeVUHVubG1HOAM; expires=Tue, 22 Sep 2020 07:18:36 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=5I0zNvcYF10eGsKfYMlkBAAAAABS5r0NBaXNgi4O7LoxmKox; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=QWn+QXX7zU8lrPBJREbyDnPXiF0AAAAA2Pm3QV82qFoaDj+//WgkBQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '3-4960279-4960280 NNNN CT(0 0 0) RT(1569249138816 17) q(0 0 0 -1) r(2 2) U5',
  'X-CDN',
  'Incapsula' ]);


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
    "createdAt": "2019-09-23T14:32:18.124Z",
    "createdBy": {
      "sys": {
        "id": "33kZDXNajFNmbngiu5MvUa",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2019-09-23T14:32:19.767Z",
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "33kZDXNajFNmbngiu5MvUa"
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
, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'ab4c47b4-c642-4ea9-b50c-5ff9f9ab6a60',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Mon, 23 Sep 2019 14:32:19 GMT',
  'ETag',
  'W/"6793155127906235587"',
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
  '58971b4e99214a7b4f56068fbcc112d2',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=4pLmz5RwR6uR2PYY6/HhZHPXiF0AAAAAQUIPAAAAAACUlUN0Irn6ss/UbFL+aF1y; expires=Tue, 22 Sep 2020 07:19:09 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=znPNU2rRHlZjc5CYYMlkBAAAAADreS8vMfR4+AxMcSUEbkdU; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=z87/FJ7glRgsrPBJREbyDnPXiF0AAAAAujWmgkGWmEbIluC4jKJawQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '10-1230663-1230664 NNNN CT(0 0 0) RT(1569249139086 20) q(0 0 0 -1) r(2 2) U5',
  'X-CDN',
  'Incapsula' ]);


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
    "createdAt": "2019-09-23T14:32:18.124Z",
    "createdBy": {
      "sys": {
        "id": "33kZDXNajFNmbngiu5MvUa",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2019-09-23T14:32:19.767Z",
    "updatedBy": {
      "sys": {
        "id": "33kZDXNajFNmbngiu5MvUa",
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
, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'ab4c47b4-c642-4ea9-b50c-5ff9f9ab6a60',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Mon, 23 Sep 2019 14:32:20 GMT',
  'ETag',
  'W/"4485944852292258297"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '2ac1d0fb32630c15f90f9e88622e6244',
  'Content-Length',
  '435',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=ehXx12cRSgKXAONgTlsif3PXiF0AAAAAQUIPAAAAAABqTUD1HjmL2WABQkiGrL6D; expires=Tue, 22 Sep 2020 07:18:59 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=zWVmG9md+HOkRERHYMlkBAAAAAC7gcwHIwILnuBgrRMAff/b; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=PJpkScbuLhwyrPBJREbyDnPXiF0AAAAA4CSLTWmP8I3Kh2itxJ2Kaw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '11-1452152-1452153 NNNN CT(0 0 0) RT(1569249139387 18) q(0 0 0 -1) r(1 1) U5',
  'X-CDN',
  'Incapsula' ]);


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
    "version": 1,
    "createdAt": "2018-11-08T12:21:01.434Z",
    "createdBy": {
      "sys": {
        "id": "33kZDXNajFNmbngiu5MvUa",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2018-11-08T12:21:01.434Z",
    "updatedBy": {
      "sys": {
        "id": "33kZDXNajFNmbngiu5MvUa",
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
  "controls": []
}
, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'ab4c47b4-c642-4ea9-b50c-5ff9f9ab6a60',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Mon, 23 Sep 2019 14:32:20 GMT',
  'ETag',
  '"9037171847149547060"',
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
  '0924793cc6965f5327a08d387c1f9322',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=Jiz2rycvSVOQvBBfg2UgSnPXiF0AAAAAQUIPAAAAAABmMvv0gUItoLxnn9Lq3Qsi; expires=Tue, 22 Sep 2020 07:18:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=1oZhVdBzNxucsMgDYMlkBAAAAADslDRXHrARcysHgQfH+sP0; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=XXGrXMK1TBI4rPBJREbyDnPXiF0AAAAAGuosc5P4r/wcb2CMr88Kbg==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '5-6482482-6482484 NNNN CT(0 0 0) RT(1569249139614 45) q(0 0 0 -1) r(1 1) U5',
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
        "createdAt":"2019-09-23T14:31:22Z",
        "updatedAt":"2019-09-23T14:31:22Z"
      }
    }
  ]
}

, [ 'Accept-Ranges',
  'bytes',
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'Mon, 23 Sep 2019 14:32:20 GMT',
  'ETag',
  'W/"ab72d22aec43abe7eccc4f8dcafb1136"',
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
  'b7f84f5b543f4ce1389fcff51978a769',
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
  'visid_incap_673446=qA80FPPdS6G6yMSU6XoFuXPXiF0AAAAAQUIPAAAAAACmajHjW7wjBpvx+GRhyQc4; expires=Tue, 22 Sep 2020 07:19:09 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=a9mCX7jbdE9SHQQNYMlkBAAAAADTfPaFXQ1QrXGxoGvPMedv; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=c4MbdqwNHxE7rPBJREbyDnPXiF0AAAAALSQD92zuO/WH2tn1lXoj7A==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '10-1230672-1230674 NNNN CT(0 0 0) RT(1569249139849 17) q(0 0 0 -1) r(1 1) U5',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/richTextTest/editor_interface', {"controls":[],"sidebar":[{"disabled":false,"settings":{},"widgetId":"not-needed","widgetNamespace":"sidebar-builtin"},{"disabled":false,"settings":{},"widgetId":"publication-widget","widgetNamespace":"sidebar-builtin"},{"disabled":false,"settings":{"tagField":"tags","imageField":"image"},"widgetId":"imageTaggingExtensionId","widgetNamespace":"extension"}]})
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
    "createdAt": "2018-11-08T12:21:01.434Z",
    "createdBy": {
      "sys": {
        "id": "33kZDXNajFNmbngiu5MvUa",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2019-09-23T14:32:20.942Z",
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "33kZDXNajFNmbngiu5MvUa"
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
, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'ab4c47b4-c642-4ea9-b50c-5ff9f9ab6a60',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Mon, 23 Sep 2019 14:32:21 GMT',
  'ETag',
  'W/"10304425192911923250"',
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
  '7e7e900d03d3c902078e08af83501c75',
  'Content-Length',
  '473',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=OpuJs8dLQHmwCswyxOwqdHTXiF0AAAAAQUIPAAAAAAAXbZv2ILYWSAfnsQjIXjnf; expires=Tue, 22 Sep 2020 07:18:36 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=LaVgBhZf+hpWFF+qYMlkBAAAAAAxbs1ZDrDvftS143TV0w3o; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=91nrQTaLEThGrPBJREbyDnTXiF0AAAAAy4fQ+g/18+z5K9T5RNz1Vg==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '1-3098109-3098110 NNNN CT(104 104 0) RT(1569249140046 18) q(0 0 2 -1) r(5 5) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/richTextTest/editor_interface', {"controls":[],"sidebar":[{"disabled":false,"settings":{},"widgetId":"not-needed","widgetNamespace":"sidebar-builtin"},{"disabled":false,"settings":{},"widgetId":"publication-widget","widgetNamespace":"sidebar-builtin"},{"disabled":false,"settings":{"tagField":"tags","imageField":"image"},"widgetId":"imageTaggingExtensionId","widgetNamespace":"extension"}]})
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
    "createdAt": "2018-11-08T12:21:01.434Z",
    "createdBy": {
      "sys": {
        "id": "33kZDXNajFNmbngiu5MvUa",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2019-09-23T14:32:21.269Z",
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "33kZDXNajFNmbngiu5MvUa"
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
, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'ab4c47b4-c642-4ea9-b50c-5ff9f9ab6a60',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Mon, 23 Sep 2019 14:32:21 GMT',
  'ETag',
  'W/"2059439161858956435"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '4b6d27f28493ac98b9079cfbee5a9885',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=PUv4/wiATJuDWeaxdE/ug3TXiF0AAAAAQUIPAAAAAABtuZPZleWM/FWbUAhb3/YR; expires=Tue, 22 Sep 2020 07:18:11 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=Rrj7KrjuwkvbDzzpYMlkBAAAAACm2AlQII7OsbB3vDAlTCaD; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=z4ZcaTwy2x5QrPBJREbyDnTXiF0AAAAAfIbcnU3AN+js3u1nAMi9kw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '7-5441140-5441141 NNNN CT(0 0 0) RT(1569249140582 17) q(0 0 0 -1) r(3 3) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/richTextTest/editor_interface', {"controls":[],"sidebar":[{"disabled":false,"settings":{},"widgetId":"not-needed","widgetNamespace":"sidebar-builtin"},{"disabled":false,"settings":{},"widgetId":"publication-widget","widgetNamespace":"sidebar-builtin"},{"disabled":false,"settings":{"tagField":"tags","imageField":"image"},"widgetId":"imageTaggingExtensionId","widgetNamespace":"extension"}]})
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
    "createdAt": "2018-11-08T12:21:01.434Z",
    "createdBy": {
      "sys": {
        "id": "33kZDXNajFNmbngiu5MvUa",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2019-09-23T14:32:21.587Z",
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "33kZDXNajFNmbngiu5MvUa"
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
, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'ab4c47b4-c642-4ea9-b50c-5ff9f9ab6a60',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Mon, 23 Sep 2019 14:32:21 GMT',
  'ETag',
  'W/"10687799721547124113"',
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
  '1fc562dde18c6580be97dfeb4ee8f545',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=Or1YSFnfQ+67LAviUYArTHXXiF0AAAAAQUIPAAAAAADfsnyvvNJsTMSiXFdAH0wg; expires=Tue, 22 Sep 2020 07:18:51 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=U7OIL1VReimwTGqOYMlkBAAAAABvpv0501oS6oCcuM5Vv9oG; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=2M8uU1HQq25ZrPBJREbyDnXXiF0AAAAAt2ootSnbq2ko8MBe4yrSvQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '12-1910322-1910323 NNNN CT(0 0 0) RT(1569249140905 17) q(0 0 0 -1) r(2 2) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/richTextTest/editor_interface', {"controls":[],"sidebar":[{"disabled":false,"settings":{},"widgetId":"not-needed","widgetNamespace":"sidebar-builtin"},{"disabled":false,"settings":{},"widgetId":"publication-widget","widgetNamespace":"sidebar-builtin"},{"disabled":false,"settings":{"tagField":"tags","imageField":"image"},"widgetId":"imageTaggingExtensionId","widgetNamespace":"extension"}]})
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
    "createdAt": "2018-11-08T12:21:01.434Z",
    "createdBy": {
      "sys": {
        "id": "33kZDXNajFNmbngiu5MvUa",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2019-09-23T14:32:21.868Z",
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "33kZDXNajFNmbngiu5MvUa"
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
, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'ab4c47b4-c642-4ea9-b50c-5ff9f9ab6a60',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Mon, 23 Sep 2019 14:32:21 GMT',
  'ETag',
  'W/"12480623716414141346"',
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
  'de784e39aa2d532c60ecc4da7f14eb96',
  'Content-Length',
  '474',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=StKtuz/QSWywZrTUnuEDDnXXiF0AAAAAQUIPAAAAAACOXVQ2+/OSuS7fJMc5MvGS; expires=Tue, 22 Sep 2020 07:18:36 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=jmFXQFq4MTANNfjWYMlkBAAAAABXPEWr4i8WI603xcmPX84M; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=84lUUZK1PhJirPBJREbyDnXXiF0AAAAAbSolNcRH5HjIYqaDM3qlTQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '3-4960310-4960311 NNNN CT(0 0 0) RT(1569249141189 17) q(0 0 0 -1) r(2 2) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/richTextTest/editor_interface', {"controls":[],"sidebar":[{"disabled":false,"settings":{},"widgetId":"publication-widget","widgetNamespace":"sidebar-builtin"},{"disabled":false,"settings":{"tagField":"tags","imageField":"image"},"widgetId":"imageTaggingExtensionId","widgetNamespace":"extension"}]})
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
    "createdAt": "2018-11-08T12:21:01.434Z",
    "createdBy": {
      "sys": {
        "id": "33kZDXNajFNmbngiu5MvUa",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2019-09-23T14:32:22.158Z",
    "updatedBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "33kZDXNajFNmbngiu5MvUa"
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
, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'ab4c47b4-c642-4ea9-b50c-5ff9f9ab6a60',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Mon, 23 Sep 2019 14:32:22 GMT',
  'ETag',
  'W/"208198450313754157"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '7571c230531bc603c7bc869715c91620',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=QJ+8TjSkTQWyLlrorfbOs3XXiF0AAAAAQUIPAAAAAACjtbYyfrGhMk6DbR5/ngxA; expires=Tue, 22 Sep 2020 07:18:36 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=xsXiDYpQQSDjImtPYMlkBAAAAABIPjVXEy6PnjbXZTuqzEFb; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=jPeQOnllJkdnrPBJREbyDnXXiF0AAAAAUchA4vEZuU05DhdMFi8LFw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '4-5146835-5146836 NNNN CT(0 0 0) RT(1569249141473 17) q(0 0 0 -1) r(3 3) U5',
  'X-CDN',
  'Incapsula' ]);


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
    "version": 6,
    "createdAt": "2018-11-08T12:21:01.434Z",
    "createdBy": {
      "sys": {
        "id": "33kZDXNajFNmbngiu5MvUa",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2019-09-23T14:32:22.158Z",
    "updatedBy": {
      "sys": {
        "id": "33kZDXNajFNmbngiu5MvUa",
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
  "controls": []
}
, [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'ab4c47b4-c642-4ea9-b50c-5ff9f9ab6a60',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Mon, 23 Sep 2019 14:32:22 GMT',
  'ETag',
  'W/"15261751110458685470"',
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
  'eba6e0c1c14bbde96d4d027014534b6f',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=na8B7lSBQgCJnrO215uLR3XXiF0AAAAAQUIPAAAAAABd2xlRhnwXDaUOXSvSZoGN; expires=Tue, 22 Sep 2020 07:18:11 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=l4O4KU6aYiBy+zJ/YMlkBAAAAADcrVsV/63puAyw8gZ2MTED; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=k5QqH1VP6ENsrPBJREbyDnXXiF0AAAAAg2RAlJOqzAlyF4PUnXNetg==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '7-5441155-5441156 NNNN CT(0 0 0) RT(1569249141784 17) q(0 0 0 -1) r(1 1) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .delete('/spaces/bohepdihyxin/environments/env-integration')
  .reply(204, "", [ 'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only',
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
  'Contentful-Api',
  'cma',
  'Date',
  'Mon, 23 Sep 2019 14:32:23 GMT',
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
  'c3b763841787cefa13950c56e65c0ef0',
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
  'visid_incap_673446=/LwjGJgaRXOq9peVHCnCO3bXiF0AAAAAQUIPAAAAAACd1z7bWxSQbs/km2gdKp/l; expires=Tue, 22 Sep 2020 07:18:51 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=U8kcEjuqLyE+yIXeYMlkBAAAAABEtsgwRy9LjcwmcR+WSoUg; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_1077_673446=3uakJFCeSm6XrPBJREbyDnbXiF0AAAAAgDbOVGWVhYfAesunRq3eVQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '12-1910326-1910327 NNNN CT(0 0 0) RT(1569249142002 17) q(0 0 0 -1) r(9 9) U5',
  'X-CDN',
  'Incapsula' ]);
