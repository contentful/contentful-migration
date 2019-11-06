const nock = require('nock');

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin')
  .reply(200, {
  "name":"Migrations CLI Test",
  "sys":{
    "type":"Space",
    "id":"bohepdihyxin",
    "version":3,
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
    "updatedAt":"2019-10-09T10:37:31Z"
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
  'Tue, 05 Nov 2019 16:20:10 GMT',
  'ETag',
  'W/"92bb29443f92068412aae2767f7b589f"',
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
  '094b536c86ecc70e2fe229293899e57d',
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
  'visid_incap_673446=WhWKDXrKTCmIi4HMMaFhZDmhwV0AAAAAQUIPAAAAAACN75y2LHkFcRoMB60yDgUi; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=Cl1xCuhdNzhnwxOPYMlkBAAAAAB6VhT1PwjIlATqytLkWxIZ; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=9vANHwLt+ksnc9Wu+yiYAzmhwV0AAAAA6HZoiOn9eYYrHVzFVpIT5w==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '9-13640740-13640750 NNNN CT(90 89 0) RT(1572970809218 41) q(0 0 2 -1) r(3 3) U5',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration', {"name":"env-integration"})
  .reply(201, {"sys":{"type":"Environment","id":"env-integration","version":1,"space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"status":{"sys":{"type":"Link","linkType":"Status","id":"queued"}},"createdBy":{"sys":{"type":"Link","linkType":"User","id":"33kZDXNajFNmbngiu5MvUa"}},"createdAt":"2019-11-05T16:20:10Z","updatedBy":{"sys":{"type":"Link","linkType":"User","id":"33kZDXNajFNmbngiu5MvUa"}},"updatedAt":"2019-11-05T16:20:10Z"},"name":"env-integration"}, [ 'Access-Control-Allow-Headers',
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
  'Tue, 05 Nov 2019 16:20:11 GMT',
  'ETag',
  'W/"c85a36f11f69e8f1e96c8455c0a74f84"',
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
  'fa0df6f24aa2adcfb3c88e2df6593b06',
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
  'visid_incap_673446=1+ZGQOjrQ2GJghw71FXO+TqhwV0AAAAAQUIPAAAAAADqJ+VStsJrqtpfiJjFhbZi; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=YrJ4E2FOj2ZsrlL9YMlkBAAAAABABgfthAWef9Jrp0MUAInY; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=axBoV/OXOk0AdNWu+yiYAzqhwV0AAAAAGXPlmKWRO8jjic+gDXH/vQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '8-11671911-11671915 NNNN CT(88 90 0) RT(1572970809657 15) q(0 0 2 -1) r(9 9) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration')
  .reply(200, {
  "sys":{
    "type":"Environment",
    "id":"env-integration",
    "version":4,
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
    "createdAt":"2019-11-05T16:20:10Z",
    "updatedBy":{
      "sys":{
        "type":"Link",
        "linkType":"User",
        "id":"33kZDXNajFNmbngiu5MvUa"
      }
    },
    "updatedAt":"2019-11-05T16:20:11Z"
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
  'Tue, 05 Nov 2019 16:20:11 GMT',
  'ETag',
  'W/"c2ca1a7634aff67eaaf8904754a6e36c"',
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
  '7b8a8e76bd0ef3e89c036bbe7695046e',
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
  'visid_incap_673446=alV+pPbVSha+n+7cHm3CgjuhwV0AAAAAQUIPAAAAAACluqIXjKw4iCEE+x/PlZiM; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=88Q2LcQmCnJv50gcYMlkBAAAAABc65TJJNyvYPBemnHwaHjK; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=LeteJPXlxBDRdNWu+yiYAzuhwV0AAAAA8XNufj9vGs2e2mQ63fYPDg==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '8-11672178-11672184 NNNN CT(93 88 0) RT(1572970810642 14) q(0 0 2 -1) r(7 7) U5',
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
    "createdAt":"2019-11-05T16:20:10Z",
    "updatedBy":{
      "sys":{
        "type":"Link",
        "linkType":"User",
        "id":"33kZDXNajFNmbngiu5MvUa"
      }
    },
    "updatedAt":"2019-11-05T16:20:12Z"
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
  'Tue, 05 Nov 2019 16:20:13 GMT',
  'ETag',
  'W/"825b2ba9f630eb32166d287bf3ef906d"',
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
  '307ff025addefd51d6cd004cb9206238',
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
  'visid_incap_673446=za/80w4xS/efbDUZLjWAJT2hwV0AAAAAQUIPAAAAAAAnsuSetCATU5xBmYPpHMTQ; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=YxzbEdAp62mtRtOeYMlkBAAAAADEzw2CdfZpXOwSFgzcLlED; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=8pALLHY4AWCEdtWu+yiYAz2hwV0AAAAAZsWOkpFYe99nKkJk0h/9rw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '7-7485891-7485899 NNNN CT(93 93 0) RT(1572970812420 26) q(0 0 2 -1) r(6 6) U5',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/content_types')
  .query({"limit":"100","order":"sys.createdAt","sys.id":{"in":"dog"},"skip":"0"})
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
  'f788b7db-100b-472e-9585-bbfc282372e9',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 05 Nov 2019 16:20:14 GMT',
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
  'e42baec02e0b4c03177d0236a8f6295d',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=hlnrjPpJQouqztjZpTh70z2hwV0AAAAAQUIPAAAAAADIOCkGvgwdXHXpwziYU9u+; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=83tOfZcDZG8/kvTKYMlkBAAAAAC/1JyYD1HRg5okXKcrmyfh; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=ECGNdG4cbhg0d9Wu+yiYAz2hwV0AAAAAaUyW62zGwKWnhTx9XVAUXA==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '10-18140244-18140249 NNNN CT(100 96 0) RT(1572970813224 23) q(0 0 2 -1) r(5 5) U5',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked' ]);


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
        "createdAt":"2019-11-05T16:20:10Z",
        "updatedAt":"2019-11-05T16:20:10Z"
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
  'Tue, 05 Nov 2019 16:20:15 GMT',
  'ETag',
  'W/"2b0c8e96e339dccd6df23362e7011c06"',
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
  'b03d95b6caa93feeb9ef05ac1155dbed',
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
  'visid_incap_673446=L/YheqVXSDifd2CazcN04T6hwV0AAAAAQUIPAAAAAACR5nusWNJLuQvDKbHs0lRU; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=zQipdad/8g+rBN24YMlkBAAAAAAKTy4+lKK9t95U4KVUZ1sz; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=mSmCJNlltEb7d9Wu+yiYAz6hwV0AAAAAxbFeBGE5FGSW3qcz22wIAg==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '9-13642357-13642373 NNNN CT(89 88 0) RT(1572970813915 25) q(0 0 2 -1) r(6 6) U5',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/dog', {"name":"angry dog","fields":[{"id":"woofs","name":"woof woof","type":"Number","required":true}],"description":"super angry"})
  .reply(201, {"sys":{"space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"id":"dog","type":"ContentType","createdAt":"2019-11-05T16:20:15.622Z","updatedAt":"2019-11-05T16:20:15.622Z","environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}},"createdBy":{"sys":{"type":"Link","linkType":"User","id":"33kZDXNajFNmbngiu5MvUa"}},"updatedBy":{"sys":{"type":"Link","linkType":"User","id":"33kZDXNajFNmbngiu5MvUa"}},"publishedCounter":0,"version":1},"displayField":null,"name":"angry dog","description":"super angry","fields":[{"id":"woofs","name":"woof woof","type":"Number","localized":false,"required":true,"validations":[],"disabled":false,"omitted":false}]}, [ 'Access-Control-Allow-Headers',
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
  'f788b7db-100b-472e-9585-bbfc282372e9',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 05 Nov 2019 16:20:15 GMT',
  'ETag',
  '"12962619644679763750"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '08ba1ebda715c32df1124f9bfa6a6f6e',
  'Content-Length',
  '1051',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=0uLt7iHHT5+YRr9X8XM4+T+hwV0AAAAAQUIPAAAAAACi6ZjXR8Ri4WJyUeXDh0zq; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=qKWtYBijOQq1EJaxYMlkBAAAAAD5D61m8SK5tJUCRlfzJox+; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=pnQBMQ2h2W6YeNWu+yiYAz+hwV0AAAAAfUICFz+cNn73w+sVCoCO0A==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '7-7486456-7486465 NNNN CT(93 92 0) RT(1572970814716 26) q(0 0 2 -1) r(4 4) U5',
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
    "createdAt": "2019-11-05T16:20:15.622Z",
    "updatedAt": "2019-11-05T16:20:16.312Z",
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
    "firstPublishedAt": "2019-11-05T16:20:16.312Z",
    "publishedAt": "2019-11-05T16:20:16.312Z",
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
  'f788b7db-100b-472e-9585-bbfc282372e9',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 05 Nov 2019 16:20:16 GMT',
  'ETag',
  'W/"9524034748724308101"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '923258c53fa503e9c90802136f0c0412',
  'Content-Length',
  '440',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=8lPyTxcWRRK3VGOcdPelhD+hwV0AAAAAQUIPAAAAAADpuhmbChaEtHqjhUUOgfxP; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=QAqPNVYQYhlMqjqYYMlkBAAAAAAUfFCrv2WHwPkhNd1JXjuz; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=8nerCOJg+mNbedWu+yiYAz+hwV0AAAAAEedQu1DihA9b0+Q+IZ0onQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '10-18140914-18140923 NNNN CT(88 95 0) RT(1572970815278 15) q(0 0 2 -1) r(7 7) U5',
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
    "createdAt": "2019-11-05T16:20:15.622Z",
    "updatedAt": "2019-11-05T16:20:16.312Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 1,
    "publishedAt": "2019-11-05T16:20:16.312Z",
    "firstPublishedAt": "2019-11-05T16:20:16.312Z",
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
  'f788b7db-100b-472e-9585-bbfc282372e9',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 05 Nov 2019 16:20:17 GMT',
  'ETag',
  'W/"4868193169714981617"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  '686a35028849cef4ab3c89c9905aaf92',
  'Content-Length',
  '441',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=kCC4kU52RNecNsrHh2pSNkChwV0AAAAAQUIPAAAAAAB595YvV4SaIAc30KO5Qj1h; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=DM6DKHnDdDaMmshPYMlkBAAAAAAaJhxtg4K3jOg+AFbeycxH; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=ejYZLHse2nLeedWu+yiYA0ChwV0AAAAAWzONXMTz7hrpaCiEPu4Z3w==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '5-9429103-9429109 NNNN CT(89 88 0) RT(1572970816107 25) q(0 0 2 -1) r(4 4) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/content_types')
  .query({"limit":"100","order":"sys.createdAt","sys.id":{"in":"dog"},"skip":"0"})
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
        "createdAt": "2019-11-05T16:20:15.622Z",
        "updatedAt": "2019-11-05T16:20:16.312Z",
        "environment": {
          "sys": {
            "id": "env-integration",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 1,
        "publishedAt": "2019-11-05T16:20:16.312Z",
        "firstPublishedAt": "2019-11-05T16:20:16.312Z",
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
  'f788b7db-100b-472e-9585-bbfc282372e9',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 05 Nov 2019 16:20:22 GMT',
  'ETag',
  'W/"6637110882764532988"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'fe3f1cb3744e21b3f5fbdbcdbf0b6444',
  'Content-Length',
  '511',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=JgMKn1pNTWynAGPCD6k9bEahwV0AAAAAQUIPAAAAAAAqqTqhO8BwDXW/Hqomocnf; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=oRhKP6wXQF764sgoYMlkBAAAAACmburInJLKZ5Mah0MBZByV; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=TxfWUfJAnTg9f9Wu+yiYA0ahwV0AAAAA66WEw6LNBN85D2qplvLJ6A==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '0-1020823-1020824 NNNN CT(87 87 0) RT(1572970821674 18) q(0 0 2 -1) r(4 4) U5',
  'X-CDN',
  'Incapsula' ]);


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
        "createdAt":"2019-11-05T16:20:10Z",
        "updatedAt":"2019-11-05T16:20:10Z"
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
  'Tue, 05 Nov 2019 16:20:23 GMT',
  'ETag',
  'W/"2b0c8e96e339dccd6df23362e7011c06"',
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
  '65529a2e089a704d2df327f5664ae91c',
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
  'visid_incap_673446=qorcS4aXT2aJqWRdf2mAVkahwV0AAAAAQUIPAAAAAACaoNfWIKB05pXo5mrnM3Ld; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=MIodMw2LG39dvM+qYMlkBAAAAAC73wH8WVfjE2PQ0y2k5MMv; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=+WITYDb013f3f9Wu+yiYA0ahwV0AAAAAHgHDeekskw5FK5EX/hnY0g==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '10-18143175-18143185 NNNN CT(88 105 0) RT(1572970822097 19) q(0 0 2 -1) r(6 6) U5',
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
    "createdAt": "2019-11-05T16:20:15.622Z",
    "updatedAt": "2019-11-05T16:20:23.717Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 1,
    "publishedAt": "2019-11-05T16:20:16.312Z",
    "firstPublishedAt": "2019-11-05T16:20:16.312Z",
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
  'f788b7db-100b-472e-9585-bbfc282372e9',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 05 Nov 2019 16:20:23 GMT',
  'ETag',
  'W/"12163634237776956089"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'e29c65b2ee914034389b62ff541e7480',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=vHM2WWeZQge7DOkSjniuVUehwV0AAAAAQUIPAAAAAAASOgudqRKxOOaUB/T/NxCY; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=hvGvA9zFcUOx8CLLYMlkBAAAAAByz+n09VrQeJrUCKT+RMR0; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=+ZpjR0Qo3TRpgNWu+yiYA0ehwV0AAAAAu4Zcs5d8p3WlLXdBaR594g==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '8-11675222-11675225 NNNN CT(87 88 0) RT(1572970822876 14) q(0 0 2 -1) r(4 4) U5',
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
    "createdAt": "2019-11-05T16:20:15.622Z",
    "updatedAt": "2019-11-05T16:20:24.189Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 3,
    "publishedAt": "2019-11-05T16:20:24.189Z",
    "firstPublishedAt": "2019-11-05T16:20:16.312Z",
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
  'f788b7db-100b-472e-9585-bbfc282372e9',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 05 Nov 2019 16:20:24 GMT',
  'ETag',
  'W/"17609365849083545484"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '94ab96481a103e5938964dc58aa85114',
  'Content-Length',
  '452',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=/mj6VLq4QriaP5iC1prwT0ehwV0AAAAAQUIPAAAAAAB/E8MRdBq+++vG919gyTY2; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=2FFjOceJywz/GYJcYMlkBAAAAAC/P3nzXaxGlwmdxQjA5Ep4; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=vP/QfNEmRwvbgNWu+yiYA0ehwV0AAAAAHIObKrbBLV4YAcNdH1K90g==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '10-18143625-18143639 NNNN CT(90 87 0) RT(1572970823354 31) q(0 0 2 -1) r(5 5) U5',
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
    "createdAt": "2019-11-05T16:20:15.622Z",
    "updatedAt": "2019-11-05T16:20:24.843Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 3,
    "publishedAt": "2019-11-05T16:20:24.189Z",
    "firstPublishedAt": "2019-11-05T16:20:16.312Z",
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
  'f788b7db-100b-472e-9585-bbfc282372e9',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 05 Nov 2019 16:20:24 GMT',
  'ETag',
  'W/"16390700027657021635"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  '1c2ca7018b6a62951e233cf7fba29c8e',
  'Content-Length',
  '373',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=ICWVsIKGTDuFQfCNUobPgUihwV0AAAAAQUIPAAAAAAAubtNywieyzSSnRxSYZLfw; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=MDD6XdkFWkwl0FAeYMlkBAAAAADzho6RbMDDwdn9h/CwSQIe; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=hk+lF6cfVWdjgdWu+yiYA0ihwV0AAAAAS/tl7nQ3qgpxCfa4BRCaeA==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '9-13645857-13645861 NNNN CT(115 89 0) RT(1572970823959 14) q(0 0 2 -1) r(4 4) U5',
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
    "createdAt": "2019-11-05T16:20:15.622Z",
    "updatedAt": "2019-11-05T16:20:25.320Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 5,
    "publishedAt": "2019-11-05T16:20:25.320Z",
    "firstPublishedAt": "2019-11-05T16:20:16.312Z",
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
  'f788b7db-100b-472e-9585-bbfc282372e9',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 05 Nov 2019 16:20:25 GMT',
  'ETag',
  'W/"14809083269083419049"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '92faa34569b06c642114d5efa2d9649d',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=8HSnaNQARf633pWt36+4NEmhwV0AAAAAQUIPAAAAAAAAq22VB5mTiXkwxx07qNeZ; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=e2vUIF/uJE3IUMJ1YMlkBAAAAAAEMxpcp50XM/PnsHI5vxMo; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=jO8YFAMzUCg+gtWu+yiYA0mhwV0AAAAAaUme64diAlb5Vj0K9xO+iA==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '9-13645973-13645979 NNNN CT(95 94 0) RT(1572970824483 24) q(0 0 1 -1) r(6 6) U5',
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
    "createdAt": "2019-11-05T16:20:15.622Z",
    "updatedAt": "2019-11-05T16:20:25.320Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 5,
    "publishedAt": "2019-11-05T16:20:25.320Z",
    "firstPublishedAt": "2019-11-05T16:20:16.312Z",
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
  'f788b7db-100b-472e-9585-bbfc282372e9',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 05 Nov 2019 16:20:26 GMT',
  'ETag',
  'W/"14809083269083419049"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '222489d6dadc4f137ebc983968e6f9a7',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=9lBMEKykQoCqRn1ofqx+HUmhwV0AAAAAQUIPAAAAAACV6RG1/huupj1KKeSGBca0; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=Yv5lXyuA30/v1Y1ZYMlkBAAAAACtDQenUxsBCgYswoxpLwls; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=+3+tFG4433i0gtWu+yiYA0mhwV0AAAAA4ikvdzFefAMsahI+Gj1/gQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '7-7489059-7489064 NNNN CT(87 89 0) RT(1572970825217 25) q(0 0 2 -1) r(3 3) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/content_types')
  .query({"limit":"100","order":"sys.createdAt","sys.id":{"in":"dog"},"skip":"0"})
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
        "createdAt": "2019-11-05T16:20:15.622Z",
        "updatedAt": "2019-11-05T16:20:25.320Z",
        "environment": {
          "sys": {
            "id": "env-integration",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 5,
        "publishedAt": "2019-11-05T16:20:25.320Z",
        "firstPublishedAt": "2019-11-05T16:20:16.312Z",
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
  'f788b7db-100b-472e-9585-bbfc282372e9',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 05 Nov 2019 16:20:26 GMT',
  'ETag',
  'W/"6575383707525444667"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  'c4682175e48062854cbb185b571f8e4d',
  'Content-Length',
  '433',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=PA5t9V5KSnujg8LO+WuZnEqhwV0AAAAAQUIPAAAAAACDaUbE3WwV6TpEvnmAap8T; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=aJxHbvdd4HcvFME4YMlkBAAAAADAHBByC45Igo91K5zCLP6u; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=O48qJMHuH0wjg9Wu+yiYA0qhwV0AAAAA5ygi/LQCNDCL1UP43IvAKg==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '8-11676010-11676015 NNNN CT(89 89 0) RT(1572970825683 24) q(0 0 1 -1) r(3 3) U5',
  'X-CDN',
  'Incapsula' ]);


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
        "createdAt":"2019-11-05T16:20:10Z",
        "updatedAt":"2019-11-05T16:20:10Z"
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
  'Tue, 05 Nov 2019 16:20:26 GMT',
  'ETag',
  'W/"2b0c8e96e339dccd6df23362e7011c06"',
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
  '358b5457fde2916608d186e3982e673a',
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
  'visid_incap_673446=+Dl7BpCyQauT580W39eFC0qhwV0AAAAAQUIPAAAAAADlAJj3BD5cQrH85vIUYoQT; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=U/QUBlcoNUJKrLi1YMlkBAAAAAAqjhJpMeHZ36Lry2/Umn4h; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=t0xGOrPGfh2Wg9Wu+yiYA0qhwV0AAAAA0G28PoxJ0qTEREGlAKyJSQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '6-6359370-6359376 NNNN CT(88 88 0) RT(1572970826143 19) q(0 0 2 -1) r(3 3) U5',
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
    "createdAt": "2019-11-05T16:20:15.622Z",
    "updatedAt": "2019-11-05T16:20:27.427Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 5,
    "publishedAt": "2019-11-05T16:20:25.320Z",
    "firstPublishedAt": "2019-11-05T16:20:16.312Z",
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
  'f788b7db-100b-472e-9585-bbfc282372e9',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 05 Nov 2019 16:20:27 GMT',
  'ETag',
  'W/"12633089930600592226"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'ae1c283bb01ce6ae9536e27e3c2a6fb7',
  'Content-Length',
  '494',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=1m/qE3R7QdmNOuCEec1fyEqhwV0AAAAAQUIPAAAAAADkFIbx5vMBd4wOOg2WOTbx; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=khq3FOTi9W4aJVUYYMlkBAAAAADlB18wIO7BQSCbLor+WULA; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=1EfwBx154zgUhNWu+yiYA0qhwV0AAAAAPY8duCj1sso7i/oE1124IA==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '8-11676305-11676321 NNNN CT(89 87 0) RT(1572970826560 21) q(0 0 2 -1) r(4 4) U5',
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
    "createdAt": "2019-11-05T16:20:15.622Z",
    "updatedAt": "2019-11-05T16:20:27.895Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 7,
    "publishedAt": "2019-11-05T16:20:27.895Z",
    "firstPublishedAt": "2019-11-05T16:20:16.312Z",
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
  'f788b7db-100b-472e-9585-bbfc282372e9',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 05 Nov 2019 16:20:28 GMT',
  'ETag',
  'W/"9529355661713415291"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  'decc865da9049192969a252e25d3d8c7',
  'Content-Length',
  '491',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=HmF9dOGFTvyANXX27x2ysUuhwV0AAAAAQUIPAAAAAADnipunkI/eRbv7oLyjrpdS; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=U2/vOL239zjYyUS4YMlkBAAAAAC8ov0Ird4dvbrBvYRnzZI7; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=tqRTW1rNhibChNWu+yiYA0uhwV0AAAAAuGCMB9cRIhfWymmMRBxt3A==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '5-9430936-9430938 NNNN CT(87 88 0) RT(1572970827079 25) q(0 0 1 -1) r(5 5) U5',
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
    "createdAt": "2019-11-05T16:20:15.622Z",
    "updatedAt": "2019-11-05T16:20:27.895Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 7,
    "publishedAt": "2019-11-05T16:20:27.895Z",
    "firstPublishedAt": "2019-11-05T16:20:16.312Z",
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
  'f788b7db-100b-472e-9585-bbfc282372e9',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 05 Nov 2019 16:20:28 GMT',
  'ETag',
  'W/"9529355661713415291"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '95c79a7a30b0d9be53c80d43ba9d4707',
  'Content-Length',
  '491',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=HxQDhj5IRFeQb5RVlxzvukyhwV0AAAAAQUIPAAAAAAB9RxAoncnCgJ+ELpL1JK59; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=fcCeD8i/9AXkf10MYMlkBAAAAABsbRUySMxaaZHeASYq+lhK; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=91hyfRyu6RtPhdWu+yiYA0yhwV0AAAAAFDGbYIy2ItFYIH0PLri0jQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '6-6359919-6359924 NNNN CT(88 88 0) RT(1572970827735 20) q(0 0 2 -1) r(5 5) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/content_types')
  .query({"limit":"100","order":"sys.createdAt","sys.id":{"in":"dog"},"skip":"0"})
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
        "createdAt": "2019-11-05T16:20:15.622Z",
        "updatedAt": "2019-11-05T16:20:27.895Z",
        "environment": {
          "sys": {
            "id": "env-integration",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 7,
        "publishedAt": "2019-11-05T16:20:27.895Z",
        "firstPublishedAt": "2019-11-05T16:20:16.312Z",
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
  'f788b7db-100b-472e-9585-bbfc282372e9',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 05 Nov 2019 16:20:29 GMT',
  'ETag',
  'W/"17077442393617552096"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'a51ad9bedc979c3b7042330033499cd9',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=UE2HbHT5TnawjvnEX0bY00yhwV0AAAAAQUIPAAAAAACxc6azo+7EZZ2B6KlJSw32; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=uYBnZq6N42oOefYmYMlkBAAAAADSzkcI5lmg9UKORyJCc8dP; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=y4J2d/sFoxOyhdWu+yiYA0yhwV0AAAAAkZB1hHWXKNQNrPlUTCj3mw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '10-18144952-18144960 NNNN CT(92 93 0) RT(1572970828334 13) q(0 0 2 -1) r(3 3) U5',
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
    "createdAt": "2019-11-05T16:20:16.424Z",
    "createdBy": {
      "sys": {
        "id": "33kZDXNajFNmbngiu5MvUa",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2019-11-05T16:20:28.043Z",
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
  'f788b7db-100b-472e-9585-bbfc282372e9',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 05 Nov 2019 16:20:29 GMT',
  'ETag',
  '"1592446739154269959"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  '516f386c5ea6fde1be6b13557f422536',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=pGHQjlR4SFarqDrf/OLbw02hwV0AAAAAQUIPAAAAAABZL4XxlmeClE4JMwhHXcfV; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=B+C+eJbrmy/NXt5lYMlkBAAAAAB9o/FkbsuHcuKxyQj2a8RZ; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=jSH0IY759HgPhtWu+yiYA02hwV0AAAAAnZ6MAk2/qW3RLdeBTdwjpA==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '8-11676796-11676801 NNNN CT(96 94 0) RT(1572970828792 21) q(0 0 2 -1) r(3 3) U5',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked' ]);


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
        "createdAt":"2019-11-05T16:20:10Z",
        "updatedAt":"2019-11-05T16:20:10Z"
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
  'Tue, 05 Nov 2019 16:20:30 GMT',
  'ETag',
  'W/"2b0c8e96e339dccd6df23362e7011c06"',
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
  'b665f6df362eadf00b69bb0f2b00a596',
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
  'visid_incap_673446=+679LdTKSay1uIOWuPbJpk2hwV0AAAAAQUIPAAAAAABBWXJSErTEBTv3rpubWPLT; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=Pf+daJtKtG5o2QIKYMlkBAAAAABqjPFGR1CBkTTlU0wrIAn3; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=EKpKRuBsOR9zhtWu+yiYA02hwV0AAAAAFCANKmd/jcYPPtxGmO4i0g==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '8-11676936-11676948 NNNN CT(92 98 0) RT(1572970829241 25) q(0 0 2 -1) r(3 3) U5',
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
    "createdAt": "2019-11-05T16:20:15.622Z",
    "updatedAt": "2019-11-05T16:20:30.600Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 7,
    "publishedAt": "2019-11-05T16:20:27.895Z",
    "firstPublishedAt": "2019-11-05T16:20:16.312Z",
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
  'f788b7db-100b-472e-9585-bbfc282372e9',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 05 Nov 2019 16:20:30 GMT',
  'ETag',
  'W/"16002315784271656987"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  '414dc86f452b48b4f1db5269b7b5e54e',
  'Content-Length',
  '501',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=GcYH7SP7T6ejN5Zq/L3ixU6hwV0AAAAAQUIPAAAAAADVgyjF5vFojaeNymJ23a2c; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=Q0ShC+hWAFD4ZswLYMlkBAAAAACO6qNN9I4JHTXaT2TFFGsG; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=XYsOAQcZ+ArohtWu+yiYA06hwV0AAAAAqT2Ud/zPyOmaCpowgBMT1g==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '9-13647377-13647387 NNNN CT(106 88 0) RT(1572970829703 29) q(0 0 2 -1) r(4 4) U5',
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
    "createdAt": "2019-11-05T16:20:15.622Z",
    "updatedAt": "2019-11-05T16:20:31.060Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 9,
    "publishedAt": "2019-11-05T16:20:31.060Z",
    "firstPublishedAt": "2019-11-05T16:20:16.312Z",
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
  'f788b7db-100b-472e-9585-bbfc282372e9',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 05 Nov 2019 16:20:31 GMT',
  'ETag',
  'W/"5890040816903168454"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'aceda81252b842ed197603bf1d4ef26d',
  'Content-Length',
  '495',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=XBe7fl6XQki5Sa3t3+zSVk6hwV0AAAAAQUIPAAAAAAAT2wntT8NeH/1rBulsywoR; expires=Wed, 04 Nov 2020 00:28:36 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=DjOkXqBqg1M6Q8GcYMlkBAAAAAC04RhlVoONwBaA1KK4c5xS; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=y/XgT3f5Jj6Dh9Wu+yiYA06hwV0AAAAARoOcm/YiXS6wMaau6GUZvg==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '3-5188909-5188910 NNNN CT(90 88 0) RT(1572970830238 23) q(0 0 2 -1) r(5 5) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/dog/editor_interface', {"controls":[{"fieldId":"aDifferentId"}]})
  .reply(200, {"controls":[{"fieldId":"aDifferentId"}],"sys":{"id":"default","type":"EditorInterface","space":{"sys":{"id":"bohepdihyxin","type":"Link","linkType":"Space"}},"version":6,"createdAt":"2019-11-05T16:20:16.424Z","createdBy":{"sys":{"id":"33kZDXNajFNmbngiu5MvUa","type":"Link","linkType":"User"}},"updatedAt":"2019-11-05T16:20:31.731Z","updatedBy":{"sys":{"type":"Link","linkType":"User","id":"33kZDXNajFNmbngiu5MvUa"}},"contentType":{"sys":{"id":"dog","type":"Link","linkType":"ContentType"}},"environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}}}}, [ 'Access-Control-Allow-Headers',
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
  'f788b7db-100b-472e-9585-bbfc282372e9',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 05 Nov 2019 16:20:31 GMT',
  'ETag',
  '"1621902335021413480"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  'cded9b11507bf649a53c8bbb281d6b09',
  'Content-Length',
  '922',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=UiC3SAcITZKOcAIiKTkD3U+hwV0AAAAAQUIPAAAAAADbpUZAP0ptuDa7ezndoylG; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=uY7lb7it/VphLiDOYMlkBAAAAADGy6DE77uOkQx2EsUo5KVW; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=hYd6ZFDPX0Q6iNWu+yiYA0+hwV0AAAAAaXV7ypouUfYEWOECaetwXw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '5-9431746-9431749 NNNN CT(89 88 0) RT(1572970830913 19) q(0 0 2 -1) r(5 5) U5',
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
    "createdAt": "2019-11-05T16:20:15.622Z",
    "updatedAt": "2019-11-05T16:20:32.378Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 9,
    "publishedAt": "2019-11-05T16:20:31.060Z",
    "firstPublishedAt": "2019-11-05T16:20:16.312Z",
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
  'f788b7db-100b-472e-9585-bbfc282372e9',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 05 Nov 2019 16:20:32 GMT',
  'ETag',
  'W/"1261326868655186004"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '3efe11bd18007bed7a1bc42ce8be932f',
  'Content-Length',
  '493',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=wMKIJqucS92/f0t59zhPPU+hwV0AAAAAQUIPAAAAAAABlhFOSBajMCjfmItph2fG; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=hMX8Zovh92M/VvtAYMlkBAAAAABEL/VjVzNg3ilVy6FdLUCA; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=ZS2DK+38yg2piNWu+yiYA0+hwV0AAAAAf591U4TGJTqRPBJjWFF9Cw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '5-9431858-9431867 NNNN CT(86 87 0) RT(1572970831518 28) q(0 0 2 -1) r(4 4) U5',
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
    "createdAt": "2019-11-05T16:20:15.622Z",
    "updatedAt": "2019-11-05T16:20:32.829Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 11,
    "publishedAt": "2019-11-05T16:20:32.829Z",
    "firstPublishedAt": "2019-11-05T16:20:16.312Z",
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
  'f788b7db-100b-472e-9585-bbfc282372e9',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 05 Nov 2019 16:20:33 GMT',
  'ETag',
  'W/"5746095605217356820"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  '69f32403489f22d5fafabaec60418e40',
  'Content-Length',
  '488',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=JAOsiAniQh2JSljd9na2DFChwV0AAAAAQUIPAAAAAADRIQoXO6bfSnj+aisXaLGi; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=y+jwBfn57Dib3BdQYMlkBAAAAABmti8FtEGYzJy7G5j9gNwe; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=zSCfdlOkM3ByidWu+yiYA1ChwV0AAAAA4QBgRYgptIHwSaMdGzrIVw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '10-18145750-18145759 NNNN CT(98 94 0) RT(1572970831982 26) q(0 0 2 -1) r(6 6) U5',
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
    "createdAt": "2019-11-05T16:20:15.622Z",
    "updatedAt": "2019-11-05T16:20:32.829Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 11,
    "publishedAt": "2019-11-05T16:20:32.829Z",
    "firstPublishedAt": "2019-11-05T16:20:16.312Z",
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
  'f788b7db-100b-472e-9585-bbfc282372e9',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 05 Nov 2019 16:20:33 GMT',
  'ETag',
  'W/"5746095605217356820"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '3df8ee4d6fc8d47cd5fe541c736c9da5',
  'Content-Length',
  '488',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=PPe+Rfl5TvS8NScI4V0rWVGhwV0AAAAAQUIPAAAAAAAO31hBVoBNQ9XHLhbWIffc; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=5bZ2WWK5ZwAT4G5RYMlkBAAAAACQ8Y281OF6co0LRFvuhG5u; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=ADVdEO2Jggn4idWu+yiYA1GhwV0AAAAAbynR5Q9AF6J9m+D6m/eDSQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '7-7491210-7491217 NNNN CT(90 88 0) RT(1572970832716 24) q(0 0 2 -1) r(3 3) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/content_types')
  .query({"limit":"100","order":"sys.createdAt","sys.id":{"in":"dog"},"skip":"0"})
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
        "createdAt": "2019-11-05T16:20:15.622Z",
        "updatedAt": "2019-11-05T16:20:32.829Z",
        "environment": {
          "sys": {
            "id": "env-integration",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 11,
        "publishedAt": "2019-11-05T16:20:32.829Z",
        "firstPublishedAt": "2019-11-05T16:20:16.312Z",
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
  'f788b7db-100b-472e-9585-bbfc282372e9',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 05 Nov 2019 16:20:33 GMT',
  'ETag',
  'W/"17914018137546611488"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  'f2e2ba43ecd40f7612989f4bdadbad9a',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=gNVWLP2oSRGxcxh/7sL0yFGhwV0AAAAAQUIPAAAAAAAvqGoZ6cOp2NcuDZwPpWNI; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=SRmoJzb50iGiV+AcYMlkBAAAAADD32zP5s7KgRYlxvhKeOmZ; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=ij7oWH94ikBmitWu+yiYA1GhwV0AAAAAbOEBGGa+fhG8nixmDPyhgQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '9-13648654-13648658 NNNN CT(92 93 0) RT(1572970833134 19) q(0 0 2 -1) r(3 3) U5',
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
  'f788b7db-100b-472e-9585-bbfc282372e9',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 05 Nov 2019 16:20:34 GMT',
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
  '02728672df60630f9b27b4553f01b372',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=w9IBGGeGSha+/eRdz75mmFGhwV0AAAAAQUIPAAAAAAB4bXY8DbH7BVWUYMDE4Sng; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=TJQxHKJgs17PdkkGYMlkBAAAAAC6RXgMi0DCPj4ZDupJbq6F; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=KNr0FaMcoz7XitWu+yiYA1GhwV0AAAAA2cY0Ou9kNBtG4npbLKycSQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '8-11678306-11678312 NNNN CT(88 95 0) RT(1572970833594 22) q(0 0 2 -1) r(3 3) U5',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked' ]);


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
        "createdAt":"2019-11-05T16:20:10Z",
        "updatedAt":"2019-11-05T16:20:10Z"
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
  'Tue, 05 Nov 2019 16:20:35 GMT',
  'ETag',
  'W/"2b0c8e96e339dccd6df23362e7011c06"',
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
  '00aa396975dc35bbe5a8d0b92da53916',
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
  'visid_incap_673446=wHNXcRk4RJ2+UKch8OygW1KhwV0AAAAAQUIPAAAAAADX3aqXrx4dSTC303jgysYa; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=4vycLisO1ltTO683YMlkBAAAAABP1QO+al4H/SGwJpFZHH04; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=pkBrPjRnvHKei9Wu+yiYA1KhwV0AAAAA2Yz5hMO2764Kbj3a94+M5w==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '7-7491582-7491584 NNNN CT(88 88 0) RT(1572970834125 37) q(0 0 2 -1) r(6 6) U5',
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
    "createdAt": "2019-11-05T16:20:15.622Z",
    "updatedAt": "2019-11-05T16:20:35.732Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "firstPublishedAt": "2019-11-05T16:20:16.312Z",
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
  'f788b7db-100b-472e-9585-bbfc282372e9',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 05 Nov 2019 16:20:35 GMT',
  'ETag',
  'W/"3702147259736897604"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'e1cd2366ef3852f9f0b0bcde35a21eff',
  'Content-Length',
  '462',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=kvqzKDzJSkCQNeiiNE2lqVOhwV0AAAAAQUIPAAAAAABX4ITptGDm2DaeMBYVXaDm; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=ejaQQ6YyGkRFD4WcYMlkBAAAAACBP8JfZ3/QaVAcoxmkIsUk; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=DM5zHONmpAUWjNWu+yiYA1OhwV0AAAAAi+ulr8up/QpnpRD10d4o0Q==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '10-18146863-18146875 NNNN CT(90 87 0) RT(1572970834892 23) q(0 0 1 -1) r(4 4) U5',
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
  'f788b7db-100b-472e-9585-bbfc282372e9',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 05 Nov 2019 16:20:36 GMT',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '71c707df6bdf4e6ac4135c8fa49246ec',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=f26oOnsjRJqwG33Qnt0LXFOhwV0AAAAAQUIPAAAAAAADqBTGdo6L+SZwhFwdBg2h; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=jaBcPH8XA3trzdIdYMlkBAAAAABi0Px1cpzzOWLjw2Wqwyay; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=aylTWqpSyQuSjNWu+yiYA1OhwV0AAAAAi9SrOcUGjmQ0iO0hwf/s/w==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '9-13649408-13649412 NNNN CT(92 94 0) RT(1572970835440 14) q(0 0 2 -1) r(4 4) U5',
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
  "requestId": "43d3991480c84405efc322b86b314ac0"
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
  'f788b7db-100b-472e-9585-bbfc282372e9',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 05 Nov 2019 16:20:36 GMT',
  'ETag',
  '"976945998619611180"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  '43d3991480c84405efc322b86b314ac0',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=K3k3iWQdTjOPlR7T6GlenVShwV0AAAAAQUIPAAAAAADm09SejcTtTWoZz1HDSkj2; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=H1+KVie2rXCi1XWHYMlkBAAAAABB3y9wJhX0wOOvJzVGLawe; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=+nvLbnP4ZHj6jNWu+yiYA1ShwV0AAAAAAvnyDqhimwmUDUEd5D4fEA==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '10-18147228-18147229 NNNN CT(89 108 0) RT(1572970835966 14) q(0 0 2 -1) r(4 4) U5',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/content_types')
  .query({"limit":"100","order":"sys.createdAt","sys.id":{"in":"dieatary-food"},"skip":"0"})
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
  'f788b7db-100b-472e-9585-bbfc282372e9',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 05 Nov 2019 16:20:37 GMT',
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
  'ea9b3830238b54628001abf526feaff8',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=mbJWtfTBQ2Sb4Xp3J24xElShwV0AAAAAQUIPAAAAAABMiQBbcrcd2ong3HciJJV1; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=4yhQMK3nxxxzB+z0YMlkBAAAAADcsXzFG3nXU1fHcaWqyIes; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=InHsBLLNi1uHjdWu+yiYA1ShwV0AAAAAAv35j6kQkx6t+FWN8NRVhA==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '10-18147385-18147396 NNNN CT(88 88 0) RT(1572970836542 25) q(0 0 2 -1) r(3 3) U5',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked' ]);


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
        "createdAt":"2019-11-05T16:20:10Z",
        "updatedAt":"2019-11-05T16:20:10Z"
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
  'Tue, 05 Nov 2019 16:20:37 GMT',
  'ETag',
  'W/"2b0c8e96e339dccd6df23362e7011c06"',
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
  'e9608937585e4fcec2e952503565a216',
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
  'visid_incap_673446=PSx7LPGqQzGSSvwiCjk9DlWhwV0AAAAAQUIPAAAAAAA2JhYTtNDcxh9ku6T3e0T9; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=zXjRDfmYdil+FL4BYMlkBAAAAACNt1ix81hfm0f9xOZG9gEc; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=nydSSD3xDSrojdWu+yiYA1WhwV0AAAAA8o0hWYupcfasbve7anNq2Q==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '10-18147577-18147581 NNNN CT(110 90 0) RT(1572970836981 20) q(0 0 2 -1) r(3 3) U5',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/dieatary-food', {"name":"Dieatary Food","fields":[{"id":"name","type":"Symbol","name":"name of the food","validations":[{"unique":true},{"prohibitRegexp":{"pattern":"foo","flags":null},"message":"asdf"}]},{"id":"calories","type":"Link","linkType":"Asset","name":"amount of calories the food contains","validations":[{"assetImageDimensions":{"width":{"min":1199,"max":null},"height":{"min":1343}}}]}],"description":"Food with up to 500 calories"})
  .reply(201, {"sys":{"space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"id":"dieatary-food","type":"ContentType","createdAt":"2019-11-05T16:20:38.282Z","updatedAt":"2019-11-05T16:20:38.282Z","environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}},"createdBy":{"sys":{"type":"Link","linkType":"User","id":"33kZDXNajFNmbngiu5MvUa"}},"updatedBy":{"sys":{"type":"Link","linkType":"User","id":"33kZDXNajFNmbngiu5MvUa"}},"publishedCounter":0,"version":1},"displayField":null,"name":"Dieatary Food","description":"Food with up to 500 calories","fields":[{"id":"name","name":"name of the food","type":"Symbol","localized":false,"required":false,"validations":[{"unique":true},{"prohibitRegexp":{"pattern":"foo","flags":null},"message":"asdf"}],"disabled":false,"omitted":false},{"id":"calories","name":"amount of calories the food contains","type":"Link","localized":false,"required":false,"validations":[{"assetImageDimensions":{"width":{"min":1199,"max":null},"height":{"min":1343}}}],"disabled":false,"omitted":false,"linkType":"Asset"}]}, [ 'Access-Control-Allow-Headers',
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
  'f788b7db-100b-472e-9585-bbfc282372e9',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 05 Nov 2019 16:20:38 GMT',
  'ETag',
  '"13357418379765496473"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '92b55cbc6a590b9e3dce9ac08e51a786',
  'Content-Length',
  '1783',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=W0AJEZnIRyyyDLvsD4Hep1ahwV0AAAAAQUIPAAAAAABfyEfFjbyMUB9WEo5EYNEl; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=YP3qTiDX63L1UZsoYMlkBAAAAADFJu/XT9rYZ35YZijGWClx; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=z5krFQopESHMjtWu+yiYA1ahwV0AAAAAJ22qXEnWqJJmc1QT8AWtPw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '8-11679546-11679557 NNNN CT(89 89 0) RT(1572970837429 29) q(0 0 2 -1) r(10 10) U5',
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
    "createdAt": "2019-11-05T16:20:38.282Z",
    "updatedAt": "2019-11-05T16:20:39.444Z",
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
    "firstPublishedAt": "2019-11-05T16:20:39.444Z",
    "publishedAt": "2019-11-05T16:20:39.444Z",
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
  'f788b7db-100b-472e-9585-bbfc282372e9',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 05 Nov 2019 16:20:39 GMT',
  'ETag',
  'W/"10025360256274751785"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '2bbd3fedf245ab34e31403a881d0efe9',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=sbF+2ZCHT5mLYi30V/eiL1ehwV0AAAAAQUIPAAAAAAC4V0PA7M+vGtgRJvZTKrXS; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=/67DTM7IeC19Z7KKYMlkBAAAAADEyaTTkAdIbvcCkOdVTCwp; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=n0eOGsd+0Hhkj9Wu+yiYA1ehwV0AAAAAM0+iqmLCL2D592HSsTd9Ng==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '7-7492851-7492859 NNNN CT(87 89 0) RT(1572970838615 23) q(0 0 2 -1) r(5 5) U5',
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
    "createdAt": "2019-11-05T16:20:38.282Z",
    "updatedAt": "2019-11-05T16:20:39.444Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 1,
    "publishedAt": "2019-11-05T16:20:39.444Z",
    "firstPublishedAt": "2019-11-05T16:20:39.444Z",
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
  'f788b7db-100b-472e-9585-bbfc282372e9',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 05 Nov 2019 16:20:40 GMT',
  'ETag',
  'W/"8119870340547497853"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'a183d30666ff6d9c3d06c459b70836fc',
  'Content-Length',
  '653',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=0sVRT8+sTrSfPC+Z1S2kflihwV0AAAAAQUIPAAAAAADu+PTnTcgZmkc7TllaouFB; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=IJlGEPVpvk9f1tv+YMlkBAAAAABcyWHuO748M1xRRnY4BxbH; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=kjh3R0kvJFtDkNWu+yiYA1ihwV0AAAAAjtYQUBnp2/SUQPI9LcStEg==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '8-11679999-11680010 NNNN CT(88 565 0) RT(1572970839225 21) q(0 0 6 -1) r(8 8) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/content_types')
  .query({"limit":"100","order":"sys.createdAt","sys.id":{"in":"food"},"skip":"0"})
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
  'f788b7db-100b-472e-9585-bbfc282372e9',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 05 Nov 2019 16:20:41 GMT',
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
  '67c35e92e4c7f867bef2960862b27e36',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=byNQDZxNSZSW8PJK07Ven1ihwV0AAAAAQUIPAAAAAAA31o6tt1KOwx4YkSOUM95l; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=CUYzC+cGzxVQ3dbIYMlkBAAAAADI+bT1seP2aBOBOis2PAcn; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=AUMiUJa9CTiskNWu+yiYA1ihwV0AAAAAVF8amdH3Ca7HUfvBi3xwHw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '9-13651175-13651186 NNNN CT(92 99 0) RT(1572970840163 18) q(0 0 2 -1) r(4 4) U5',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked' ]);


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
        "createdAt":"2019-11-05T16:20:10Z",
        "updatedAt":"2019-11-05T16:20:10Z"
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
  'Tue, 05 Nov 2019 16:20:41 GMT',
  'ETag',
  'W/"2b0c8e96e339dccd6df23362e7011c06"',
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
  'd8c1845533bccf41b23581c504de5942',
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
  'visid_incap_673446=Zg6OXRYUSOWl97Y++GT6AVihwV0AAAAAQUIPAAAAAACMA315nwzFMX+BWhIylvgV; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=eYz8b2wF9ggnOF2kYMlkBAAAAAA5pnTBCKgvSnpKUom7oKkt; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=18JJbjSpVRoMkdWu+yiYA1ihwV0AAAAATPdLXYPfd9t3D8Qf3Qe3Xw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '10-18148758-18148772 NNNN CT(87 88 0) RT(1572970840617 20) q(0 0 2 -1) r(3 3) U5',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/food', {"name":"foooood","displayField":"taste","fields":[{"id":"taste","type":"Symbol","name":"what it tastes like"}],"description":" well, food"})
  .reply(201, {"sys":{"space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"id":"food","type":"ContentType","createdAt":"2019-11-05T16:20:41.849Z","updatedAt":"2019-11-05T16:20:41.849Z","environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}},"createdBy":{"sys":{"type":"Link","linkType":"User","id":"33kZDXNajFNmbngiu5MvUa"}},"updatedBy":{"sys":{"type":"Link","linkType":"User","id":"33kZDXNajFNmbngiu5MvUa"}},"publishedCounter":0,"version":1},"displayField":"taste","name":"foooood","description":" well, food","fields":[{"id":"taste","name":"what it tastes like","type":"Symbol","localized":false,"required":false,"validations":[],"disabled":false,"omitted":false}]}, [ 'Access-Control-Allow-Headers',
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
  'f788b7db-100b-472e-9585-bbfc282372e9',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 05 Nov 2019 16:20:41 GMT',
  'ETag',
  '"13767956857413729766"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  '67dedaefcd45d2d229c97df5325fa24c',
  'Content-Length',
  '1064',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=T/EpxFXgS4mDE0Oxm3NMIlmhwV0AAAAAQUIPAAAAAACeqnvTvGg3bmKYVhphKcgH; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=12zDc/96B1B33sj1YMlkBAAAAACWaNyJDo/rZueDk2CUNl7a; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=i7wPQ9PDExuHkdWu+yiYA1mhwV0AAAAA+p2De1nFqlsIx59XzLCo4g==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '10-18148932-18148938 NNNN CT(92 95 0) RT(1572970840999 14) q(0 0 2 -1) r(4 4) U5',
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
    "createdAt": "2019-11-05T16:20:41.849Z",
    "updatedAt": "2019-11-05T16:20:42.364Z",
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
    "firstPublishedAt": "2019-11-05T16:20:42.364Z",
    "publishedAt": "2019-11-05T16:20:42.364Z",
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
  'f788b7db-100b-472e-9585-bbfc282372e9',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 05 Nov 2019 16:20:42 GMT',
  'ETag',
  'W/"6241066929298131352"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'ac0d3d8992c35976897c70ba700e5137',
  'Content-Length',
  '446',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=xnbr6aNhRCuQegjL19E6RlqhwV0AAAAAQUIPAAAAAAAv4D2OEeZF58H6wOiLkwFz; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=Uk1kHxN17nex8bIdYMlkBAAAAAAzN25PXCB6NZtg78X3GXwu; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=kvOePE399XkGktWu+yiYA1qhwV0AAAAAT7q4U8vot0UCzUu/SqctfQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '9-13651629-13651642 NNNN CT(88 89 0) RT(1572970841533 27) q(0 0 2 -1) r(5 5) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/content_types')
  .query({"limit":"100","order":"sys.createdAt","sys.id":{"in":"food"},"skip":"0"})
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
        "createdAt": "2019-11-05T16:20:41.849Z",
        "updatedAt": "2019-11-05T16:20:42.364Z",
        "environment": {
          "sys": {
            "id": "env-integration",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 1,
        "publishedAt": "2019-11-05T16:20:42.364Z",
        "firstPublishedAt": "2019-11-05T16:20:42.364Z",
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
  'f788b7db-100b-472e-9585-bbfc282372e9',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 05 Nov 2019 16:20:43 GMT',
  'ETag',
  'W/"5269443926569798819"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  'e8f31c216f5cb323c5dc9ce30a6e0434',
  'Content-Length',
  '514',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=8BXQ/cJORwaohzN/BUExO1qhwV0AAAAAQUIPAAAAAAAIjj7twG8jGg75XFzF/cED; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=Cr5LascYRnmq5ne1YMlkBAAAAAC5JFSbRb/hIDwXg6L/jHdi; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=k1vgcQ4q42dSktWu+yiYA1qhwV0AAAAAWeONabJAvxKyHpqWrd3AwQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '9-13651892-13651896 NNNN CT(90 88 0) RT(1572970842186 19) q(0 0 1 -1) r(3 3) U5',
  'X-CDN',
  'Incapsula' ]);


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
        "createdAt":"2019-11-05T16:20:10Z",
        "updatedAt":"2019-11-05T16:20:10Z"
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
  'Tue, 05 Nov 2019 16:20:43 GMT',
  'ETag',
  'W/"2b0c8e96e339dccd6df23362e7011c06"',
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
  'eb73c9d011abf14a09ec53d60841e71d',
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
  'visid_incap_673446=28Ioa/W2S4yuKKCXVR1XhluhwV0AAAAAQUIPAAAAAABC4qp9BbGCx8HnBfU9hGOl; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=THHcZZdxgHT+dKImYMlkBAAAAAB8tHERKUHDZoTZbD2dHjPs; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=NhhtB+FvmlP7ktWu+yiYA1uhwV0AAAAAOhbtuhu1dlFm1niKC9vAwQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '6-6363416-6363423 NNNN CT(92 92 0) RT(1572970842634 22) q(0 0 2 -1) r(6 6) U5',
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
    "createdAt": "2019-11-05T16:20:41.849Z",
    "updatedAt": "2019-11-05T16:20:44.272Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 1,
    "publishedAt": "2019-11-05T16:20:42.364Z",
    "firstPublishedAt": "2019-11-05T16:20:42.364Z",
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
  'f788b7db-100b-472e-9585-bbfc282372e9',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 05 Nov 2019 16:20:44 GMT',
  'ETag',
  'W/"4258325192240387430"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'a753e80b4bfb915c4d19c708729fcb65',
  'Content-Length',
  '591',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=vxPWUm2RT0yyUUEjZflA/luhwV0AAAAAQUIPAAAAAADZj67UeLBqYiglQcxLZwBu; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=Eig+cOmqP2z1D/OHYMlkBAAAAAA8FGwdwJJWQ77oSxphniTD; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=VuSvV8SgIT2Dk9Wu+yiYA1uhwV0AAAAAOmUWkovBsOR9DFeDLrw7FA==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '10-18149940-18149959 NNNN CT(88 89 0) RT(1572970843420 20) q(0 0 2 -1) r(4 4) U5',
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
    "createdAt": "2019-11-05T16:20:41.849Z",
    "updatedAt": "2019-11-05T16:20:44.749Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 3,
    "publishedAt": "2019-11-05T16:20:44.749Z",
    "firstPublishedAt": "2019-11-05T16:20:42.364Z",
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
  'f788b7db-100b-472e-9585-bbfc282372e9',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 05 Nov 2019 16:20:44 GMT',
  'ETag',
  'W/"13896433938272912125"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  '17be5a47e5fad4a627eeb4abf24cf70c',
  'Content-Length',
  '595',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=NmxHfUk7QXGVOffJdh4a61yhwV0AAAAAQUIPAAAAAACCrYJuPHAniCZarqUcLncu; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=o523XeNEVWxB4syzYMlkBAAAAADRvmp8RIc0cx4zd6pf5QkH; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=diK5YH6VEwoJlNWu+yiYA1yhwV0AAAAAlkIF+SmqGFW3J+wjPRa8OQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '7-7494293-7494303 NNNN CT(87 89 0) RT(1572970843916 30) q(0 0 2 -1) r(5 5) U5',
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
    "createdAt": "2019-11-05T16:20:41.849Z",
    "updatedAt": "2019-11-05T16:20:44.749Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 3,
    "publishedAt": "2019-11-05T16:20:44.749Z",
    "firstPublishedAt": "2019-11-05T16:20:42.364Z",
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
  'f788b7db-100b-472e-9585-bbfc282372e9',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 05 Nov 2019 16:20:45 GMT',
  'ETag',
  'W/"13896433938272912125"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '6752baac2f192954ca3859de933e6a90',
  'Content-Length',
  '595',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=HbIlsmwASeWoCNwPPpO7eV2hwV0AAAAAQUIPAAAAAAAgaVkp5oPVDbNA9yznz1De; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=enCHESdDyX/7XNzVYMlkBAAAAAAH05t+5wWrZgL9YaVfMBL0; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=nZadCGcGAQt2lNWu+yiYA12hwV0AAAAAJ3nNe8mOpKGFbWCtnCEjOA==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '5-9433666-9433669 NNNN CT(90 88 0) RT(1572970844660 25) q(0 0 2 -1) r(4 4) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/content_types')
  .query({"limit":"100","order":"sys.createdAt","sys.id":{"in":"person%2Canimal"},"skip":"0"})
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
  'f788b7db-100b-472e-9585-bbfc282372e9',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 05 Nov 2019 16:20:45 GMT',
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
  '83a01078db507b5b68940211dab48846',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=Z8gnmAxMRsSc7iCsOGrq212hwV0AAAAAQUIPAAAAAACPmYMb2axCxzP6DzdVumFQ; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=JZwDTTEwPTNhqpOWYMlkBAAAAACcXbrrFErwDoPjwLcNQ6Z7; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=vB6OahRAF2XllNWu+yiYA12hwV0AAAAAqsYuIa8ozIzHXp9aCViGRw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '9-13652824-13652840 NNNN CT(88 91 0) RT(1572970845148 29) q(0 0 2 -1) r(3 3) U5',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked' ]);


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
        "createdAt":"2019-11-05T16:20:10Z",
        "updatedAt":"2019-11-05T16:20:10Z"
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
  'Tue, 05 Nov 2019 16:20:46 GMT',
  'ETag',
  'W/"2b0c8e96e339dccd6df23362e7011c06"',
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
  'd9d9b613386de657435ac365e97b2d80',
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
  'visid_incap_673446=tw3dvB1xS+m3k4R1HLd4HF2hwV0AAAAAQUIPAAAAAAAfyfrGaNmcR2MJF+N5WjJV; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=BFiUZoDMFERZoaWwYMlkBAAAAAA3jcoENoXUAXjlogBSqBx+; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=aZUlfOJjwQlOldWu+yiYA12hwV0AAAAAznLWkcDtuu9Z2OY7MwGviA==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '4-7909767-7909770 NNNN CT(88 88 0) RT(1572970845611 19) q(0 0 2 -1) r(3 3) U5',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/person', {"name":"Person","fields":[{"id":"age","name":"Age","type":"Number","required":true},{"id":"fullName","name":"Full name","type":"Symbol","required":true,"localized":true}],"description":"A content type for a person"})
  .reply(201, {"sys":{"space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"id":"person","type":"ContentType","createdAt":"2019-11-05T16:20:46.880Z","updatedAt":"2019-11-05T16:20:46.880Z","environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}},"createdBy":{"sys":{"type":"Link","linkType":"User","id":"33kZDXNajFNmbngiu5MvUa"}},"updatedBy":{"sys":{"type":"Link","linkType":"User","id":"33kZDXNajFNmbngiu5MvUa"}},"publishedCounter":0,"version":1},"displayField":null,"name":"Person","description":"A content type for a person","fields":[{"id":"age","name":"Age","type":"Number","localized":false,"required":true,"validations":[],"disabled":false,"omitted":false},{"id":"fullName","name":"Full name","type":"Symbol","localized":true,"required":true,"validations":[],"disabled":false,"omitted":false}]}, [ 'Access-Control-Allow-Headers',
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
  'f788b7db-100b-472e-9585-bbfc282372e9',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 05 Nov 2019 16:20:46 GMT',
  'ETag',
  '"16410780724989377548"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  'ecae2a68c680f057994d42ec7ce043ab',
  'Content-Length',
  '1269',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=22wMO+rmTTqLTyAsNsdvy16hwV0AAAAAQUIPAAAAAADM+nnpNsdNIWr3HAg7t0nl; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=Nd+WTuQVqBxcm13oYMlkBAAAAADvWJSTgbUKz0N9BzLW8Yy+; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=LWNRLAqss0zIldWu+yiYA16hwV0AAAAABLu6gpvEQY3AYrwpjVjZrA==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '6-6364173-6364176 NNNN CT(86 91 0) RT(1572970846019 26) q(0 0 2 -1) r(4 4) U5',
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
    "createdAt": "2019-11-05T16:20:46.880Z",
    "updatedAt": "2019-11-05T16:20:47.404Z",
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
    "firstPublishedAt": "2019-11-05T16:20:47.404Z",
    "publishedAt": "2019-11-05T16:20:47.404Z",
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
  'f788b7db-100b-472e-9585-bbfc282372e9',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 05 Nov 2019 16:20:47 GMT',
  'ETag',
  'W/"11546959788497846080"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '970bbe668bc69a7e8a7ad44c92041456',
  'Content-Length',
  '477',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=qTfYLc5JRNaSRCPPFRPzgV+hwV0AAAAAQUIPAAAAAADDPk2hYXxQuC3jOeyg2V4S; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=CnnvSqmkvy1tXjLWYMlkBAAAAAAfz0bx0I7H3HyLiRt/e7W5; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=XjRxVt//rwVSltWu+yiYA1+hwV0AAAAANmPwXzy+vEVJ5sNZ6mHxkw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '5-9433856-9433861 NNNN CT(88 89 0) RT(1572970846572 31) q(0 0 1 -1) r(4 4) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/animal', {"name":"Animal","fields":[{"id":"species","name":"The species of the animal","type":"Symbol","required":true},{"id":"isFurry","name":"Is this a furry animal","type":"Boolean","required":false}],"description":"An animal"})
  .reply(201, {"sys":{"space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"id":"animal","type":"ContentType","createdAt":"2019-11-05T16:20:48.064Z","updatedAt":"2019-11-05T16:20:48.064Z","environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}},"createdBy":{"sys":{"type":"Link","linkType":"User","id":"33kZDXNajFNmbngiu5MvUa"}},"updatedBy":{"sys":{"type":"Link","linkType":"User","id":"33kZDXNajFNmbngiu5MvUa"}},"publishedCounter":0,"version":1},"displayField":null,"name":"Animal","description":"An animal","fields":[{"id":"species","name":"The species of the animal","type":"Symbol","localized":false,"required":true,"validations":[],"disabled":false,"omitted":false},{"id":"isFurry","name":"Is this a furry animal","type":"Boolean","localized":false,"required":false,"validations":[],"disabled":false,"omitted":false}]}, [ 'Access-Control-Allow-Headers',
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
  'f788b7db-100b-472e-9585-bbfc282372e9',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 05 Nov 2019 16:20:48 GMT',
  'ETag',
  '"8113377807237308524"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  'f39823af4c7a520b355227d2eb72d10f',
  'Content-Length',
  '1292',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=jXCC6QURRmW1VnAbXZEyA1+hwV0AAAAAQUIPAAAAAAAmLDPkQWSXnDmNoPJF0c4I; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=KDFtUaRNAyKth5s0YMlkBAAAAAAVzrpdtzMJ0d4QxLwKQ5Lb; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=+0/CPf98E3TRltWu+yiYA1+hwV0AAAAA0H/ExxbDU0PEUPQEfFKuRQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '8-11681803-11681813 NNNN CT(87 90 0) RT(1572970847201 27) q(0 0 2 -1) r(4 4) U5',
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
    "createdAt": "2019-11-05T16:20:48.064Z",
    "updatedAt": "2019-11-05T16:20:48.539Z",
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
    "firstPublishedAt": "2019-11-05T16:20:48.539Z",
    "publishedAt": "2019-11-05T16:20:48.539Z",
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
  'f788b7db-100b-472e-9585-bbfc282372e9',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 05 Nov 2019 16:20:48 GMT',
  'ETag',
  'W/"11143594652986074515"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '99bf3325a39526024efb2241260b49f9',
  'Content-Length',
  '481',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=nqhBAdwuSn2KxU/KZauyemChwV0AAAAAQUIPAAAAAAB4tOfeXo9qP9AQ7QsBi3Sp; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=uTZKIsNeU1608QeZYMlkBAAAAAChMqm+iyazZ1ndr4oELbfL; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=KIIzfu0YEWB6l9Wu+yiYA2ChwV0AAAAAl6eg+LrJF9qyCtg1j8Pmaw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '9-13653580-13653586 NNNN CT(88 88 0) RT(1572970847728 14) q(0 0 2 -1) r(7 7) U5',
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
    "createdAt": "2019-11-05T16:20:46.880Z",
    "updatedAt": "2019-11-05T16:20:49.409Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 1,
    "publishedAt": "2019-11-05T16:20:47.404Z",
    "firstPublishedAt": "2019-11-05T16:20:47.404Z",
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
  'f788b7db-100b-472e-9585-bbfc282372e9',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 05 Nov 2019 16:20:49 GMT',
  'ETag',
  'W/"14003367309602288550"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'f9f50f27f18b1fa5540e04f9a72b91c4',
  'Content-Length',
  '518',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=XwpbVIh4QUGcSfxJHklsmmChwV0AAAAAQUIPAAAAAADotVaTIpBH0VLqyCvzSQGu; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=/J0wANaq7UM3zyUeYMlkBAAAAAB2X/rBNfZ27VP12dSlLWYa; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=jOYHHdhzyDbOl9Wu+yiYA2ChwV0AAAAAyaGoq+nfg0F3MPC93pki6A==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '7-7495426-7495433 NNNN CT(96 93 0) RT(1572970848551 13) q(0 0 2 -1) r(4 4) U5',
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
    "createdAt": "2019-11-05T16:20:46.880Z",
    "updatedAt": "2019-11-05T16:20:49.876Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 3,
    "publishedAt": "2019-11-05T16:20:49.876Z",
    "firstPublishedAt": "2019-11-05T16:20:47.404Z",
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
  'f788b7db-100b-472e-9585-bbfc282372e9',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 05 Nov 2019 16:20:50 GMT',
  'ETag',
  'W/"2445600132755422731"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  '765bccaf1014b3680354bfc33caeaf8d',
  'Content-Length',
  '524',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=LWOm/sx2RFOYbOSkzMREDGGhwV0AAAAAQUIPAAAAAAACKUvOne2H9NlazBlR3U1L; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=dcrCIInAdA4ndGgFYMlkBAAAAABr1zVNJGEeH1E8mYYZ+98D; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=IC/bZx31lEN6mNWu+yiYA2GhwV0AAAAAR9cKmAnVYK+NdrPwXGiLQA==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '4-7910170-7910173 NNNN CT(87 89 0) RT(1572970849047 22) q(0 0 2 -1) r(6 6) U5',
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
    "createdAt": "2019-11-05T16:20:48.064Z",
    "updatedAt": "2019-11-05T16:20:50.609Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 1,
    "publishedAt": "2019-11-05T16:20:48.539Z",
    "firstPublishedAt": "2019-11-05T16:20:48.539Z",
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
  'f788b7db-100b-472e-9585-bbfc282372e9',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 05 Nov 2019 16:20:50 GMT',
  'ETag',
  'W/"12079422966469702394"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '9b01028619ae797cbc8da23b8975e00a',
  'Content-Length',
  '508',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=5AMCVNtuR9mthU4udJtRj2KhwV0AAAAAQUIPAAAAAADCk5G8NVC++lu3hXNx3JLz; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=zBT9cHrgTjm8Ds6cYMlkBAAAAADAOFbR2i5FcFoSZmPiXzYS; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=hFPyNFWOvn3mmNWu+yiYA2KhwV0AAAAAYQNjetf85LJNzD8h7YjaDw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '5-9434426-9434429 NNNN CT(92 93 0) RT(1572970849730 25) q(0 0 2 -1) r(4 4) U5',
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
    "createdAt": "2019-11-05T16:20:48.064Z",
    "updatedAt": "2019-11-05T16:20:51.093Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 3,
    "publishedAt": "2019-11-05T16:20:51.093Z",
    "firstPublishedAt": "2019-11-05T16:20:48.539Z",
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
  'f788b7db-100b-472e-9585-bbfc282372e9',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 05 Nov 2019 16:20:51 GMT',
  'ETag',
  'W/"12783893155580783165"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '07fbd5ca898cbfa4e52652bc38ddd4e9',
  'Content-Length',
  '516',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=KJGUkWX9RvSwbf1rt/o73GKhwV0AAAAAQUIPAAAAAAD/CZVGgR4PgwLPmSDwVWGi; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=9a2eDQZ57SqV799MYMlkBAAAAADl4uaIWLkem5+kqYbGANNg; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=y/M9La1wPh2OmdWu+yiYA2KhwV0AAAAAg9HCxweScSbP9ht4KMyV9Q==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '9-13654456-13654470 NNNN CT(92 93 0) RT(1572970850250 25) q(0 0 2 -1) r(6 6) U5',
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
    "createdAt": "2019-11-05T16:20:46.880Z",
    "updatedAt": "2019-11-05T16:20:49.876Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 3,
    "publishedAt": "2019-11-05T16:20:49.876Z",
    "firstPublishedAt": "2019-11-05T16:20:47.404Z",
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
  'f788b7db-100b-472e-9585-bbfc282372e9',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 05 Nov 2019 16:20:51 GMT',
  'ETag',
  'W/"2445600132755422731"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  '4d67f9c111fbd9b2b6b7159019af4b68',
  'Content-Length',
  '524',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=WgVz7YOsSOGs2ADmGYWhyWOhwV0AAAAAQUIPAAAAAAAxft+F4r3KfghbKd3br2GX; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=op7NWhGy3kUwfb9XYMlkBAAAAAAVPq+wrh0xzwOBXXn/uR+Z; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=B5zjLGeAxA74mdWu+yiYA2OhwV0AAAAAa/o9oV1RfDiNqi9OeAd+SA==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '10-18152785-18152793 NNNN CT(92 88 0) RT(1572970850964 26) q(0 0 2 -1) r(4 4) U5',
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
    "createdAt": "2019-11-05T16:20:48.064Z",
    "updatedAt": "2019-11-05T16:20:51.093Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 3,
    "publishedAt": "2019-11-05T16:20:51.093Z",
    "firstPublishedAt": "2019-11-05T16:20:48.539Z",
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
  'f788b7db-100b-472e-9585-bbfc282372e9',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 05 Nov 2019 16:20:52 GMT',
  'ETag',
  'W/"12783893155580783165"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '7ce9ffb9a21c34a0368e231119ff6240',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=1rg8ZnUcS2u9R1+oEhhpuWOhwV0AAAAAQUIPAAAAAAAimGMb1Wz7tWOCNbiRSNIF; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=Fd4PbZN8pha8YQRBYMlkBAAAAAA6EbPFE+o81PuGO9YD9R5j; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=vgwHGmIJ8yxTmtWu+yiYA2OhwV0AAAAAre3CLjnwWOlqqXHZ8zzatA==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '9-13654786-13654792 NNNN CT(96 88 0) RT(1572970851491 21) q(0 0 1 -1) r(3 3) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/content_types')
  .query({"limit":"100","order":"sys.createdAt","sys.id":{"in":"person%2CsomethingElse"},"skip":"0"})
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
        "createdAt": "2019-11-05T16:20:46.880Z",
        "updatedAt": "2019-11-05T16:20:49.876Z",
        "environment": {
          "sys": {
            "id": "env-integration",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 3,
        "publishedAt": "2019-11-05T16:20:49.876Z",
        "firstPublishedAt": "2019-11-05T16:20:47.404Z",
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
  'f788b7db-100b-472e-9585-bbfc282372e9',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 05 Nov 2019 16:20:52 GMT',
  'ETag',
  'W/"13870533653979968433"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  '1981e02c9a248a7548330297fb62eb87',
  'Content-Length',
  '588',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=rigupCD9ShaB3CCiUvjBymShwV0AAAAAQUIPAAAAAADuvAR0glK5xdB6HpR553G8; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=XMztWUx9VUCwuyyMYMlkBAAAAAC+h0SsR68+HNayhulbAQIE; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=9PbwIClfn1fCmtWu+yiYA2ShwV0AAAAApNo6fi7EXEqiPgw4A2EIqQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '9-13654942-13654951 NNNN CT(90 92 0) RT(1572970851969 26) q(0 0 2 -1) r(4 4) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/blogpost', {"name":"blog post","fields":[{"name":"title","id":"title","type":"Symbol"},{"name":"category","id":"category","type":"Symbol"}]})
  .reply(201, {"sys":{"space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"id":"blogpost","type":"ContentType","createdAt":"2019-11-05T16:20:53.277Z","updatedAt":"2019-11-05T16:20:53.277Z","environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}},"createdBy":{"sys":{"type":"Link","linkType":"User","id":"33kZDXNajFNmbngiu5MvUa"}},"updatedBy":{"sys":{"type":"Link","linkType":"User","id":"33kZDXNajFNmbngiu5MvUa"}},"publishedCounter":0,"version":1},"displayField":null,"name":"blog post","description":null,"fields":[{"id":"title","name":"title","type":"Symbol","localized":false,"required":false,"validations":[],"disabled":false,"omitted":false},{"id":"category","name":"category","type":"Symbol","localized":false,"required":false,"validations":[],"disabled":false,"omitted":false}]}, [ 'Access-Control-Allow-Headers',
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
  'f788b7db-100b-472e-9585-bbfc282372e9',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 05 Nov 2019 16:20:53 GMT',
  'ETag',
  '"10867292020020171105"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '3d6d78d33e5027b9b4d595d382dbebab',
  'Content-Length',
  '1255',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=Y/kyPdCPS8+1wSY3XRHM/mShwV0AAAAAQUIPAAAAAACpuSe6E5Rw1DRFeaN2c+pQ; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=Q+HAQOPHIxz648K3YMlkBAAAAAA2m2lL+BjdpNheV8huHUdo; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=Ey9dHuC3Z2Uwm9Wu+yiYA2ShwV0AAAAA6fDso6t3LfjtMJJNZsEU6A==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '7-7496432-7496439 NNNN CT(93 112 0) RT(1572970852374 19) q(0 0 2 -1) r(5 5) U5',
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
    "createdAt": "2019-11-05T16:20:53.277Z",
    "updatedAt": "2019-11-05T16:20:53.795Z",
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
    "firstPublishedAt": "2019-11-05T16:20:53.795Z",
    "publishedAt": "2019-11-05T16:20:53.795Z",
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
  'f788b7db-100b-472e-9585-bbfc282372e9',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 05 Nov 2019 16:20:53 GMT',
  'ETag',
  'W/"7809722925627716293"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  'a491c9c5e39bd1354d0ec18990e1618d',
  'Content-Length',
  '443',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=EupaGyEKQze6IKVGt6m9jGWhwV0AAAAAQUIPAAAAAAD+bmSSZTurfXvcIVHBQB8a; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=jGabddBcFCAXczrHYMlkBAAAAACQM+8pFRkqBUKWWbld4Iee; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=ucdmPgJpVQ6pm9Wu+yiYA2WhwV0AAAAA5UXmLQvDo5SfSnAeZMgXWw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '9-13655196-13655209 NNNN CT(90 92 0) RT(1572970852951 24) q(0 0 2 -1) r(5 5) U5',
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
    "id": "6RqHguPWehx07TrYsvzyiJ",
    "type": "Entry",
    "createdAt": "2019-11-05T16:20:54.422Z",
    "updatedAt": "2019-11-05T16:20:54.422Z",
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
  'f788b7db-100b-472e-9585-bbfc282372e9',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 05 Nov 2019 16:20:54 GMT',
  'ETag',
  '"32823649264670378"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '8609508688543ac44719c547a7701520',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=94l0wnYAQmOUswDIgkHm2mahwV0AAAAAQUIPAAAAAADtRMivv1U7Lf7wmfkL0Th+; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=t+Ape/bihWUbCpmEYMlkBAAAAAA0L7c3EM/WyF3MSTStreMO; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=uVV5Ch6fyRMQnNWu+yiYA2ahwV0AAAAAjE8NpFPpIkHZYFw0QjOcCg==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '7-7496736-7496742 NNNN CT(92 94 0) RT(1572970853575 15) q(0 0 2 -1) r(5 5) U5',
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
    "id": "2RYQQ309H2gpDolBG3JBjk",
    "type": "Entry",
    "createdAt": "2019-11-05T16:20:54.937Z",
    "updatedAt": "2019-11-05T16:20:54.937Z",
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
  'f788b7db-100b-472e-9585-bbfc282372e9',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 05 Nov 2019 16:20:55 GMT',
  'ETag',
  '"14440508450707794111"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  '3307b8963969dccae35cf6b2c38cbbb4',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=N8QhmCxzTECh5yOWhzKo82ehwV0AAAAAQUIPAAAAAABHKPsAlESJZyqdJR9WrmtS; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=csziT1I4gTH0MF2lYMlkBAAAAAAwqjmQSV7VZCsY9UxTKHhz; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=VtapAN/m6F4undWu+yiYA2ehwV0AAAAAJRXZ7Am/KCt7dwaCgKv3Hg==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '9-13655543-13655555 NNNN CT(88 101 0) RT(1572970854087 22) q(0 0 1 -1) r(13 13) U5',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/content_types')
  .query({"limit":"100","order":"sys.createdAt","sys.id":{"in":"blogpost"},"skip":"0"})
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
        "createdAt": "2019-11-05T16:20:53.277Z",
        "updatedAt": "2019-11-05T16:20:53.795Z",
        "environment": {
          "sys": {
            "id": "env-integration",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 1,
        "publishedAt": "2019-11-05T16:20:53.795Z",
        "firstPublishedAt": "2019-11-05T16:20:53.795Z",
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
  'f788b7db-100b-472e-9585-bbfc282372e9',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 05 Nov 2019 16:20:56 GMT',
  'ETag',
  'W/"11829571110569958847"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'bb5764a47b016c61fc06e0ee754f4e1d',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=Q7n7rVKQSVuV6vPSTt+sjWehwV0AAAAAQUIPAAAAAACZ0gCUsn4HO8X6TkYKu2y5; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=CSzRSp63NU6BpCvgYMlkBAAAAACpBpefXAQ75E+uODho/tge; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=swLNDs0ZiUKqndWu+yiYA2ehwV0AAAAAUs9Dw0JeD3cUoXSkLfZFeg==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '8-11684050-11684059 NNNN CT(89 109 0) RT(1572970855580 19) q(0 1 2 -1) r(4 4) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/entries')
  .query({"limit":"100","order":"sys.createdAt","sys.archivedAt":{"exists":"false"},"sys.contentType.sys.id":{"in":"blogpost"},"skip":"0"})
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
        "id": "6RqHguPWehx07TrYsvzyiJ",
        "type": "Entry",
        "createdAt": "2019-11-05T16:20:54.422Z",
        "updatedAt": "2019-11-05T16:20:54.422Z",
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
        "id": "2RYQQ309H2gpDolBG3JBjk",
        "type": "Entry",
        "createdAt": "2019-11-05T16:20:54.937Z",
        "updatedAt": "2019-11-05T16:20:54.937Z",
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
  'f788b7db-100b-472e-9585-bbfc282372e9',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 05 Nov 2019 16:20:56 GMT',
  'ETag',
  'W/"7396370684867916612"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  '9bcc98ea3ff1596dbfbdfe89b39a0a2a',
  'Content-Length',
  '462',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=f5KyRjIjSe+D17QOYfYoSWihwV0AAAAAQUIPAAAAAAAZRYIPsZYKzaNoE1/NGtcc; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=jLn8PPwGODtfNP/fYMlkBAAAAADvtEuTeyDSrSvE5fJqUiZ8; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=3pVXVr+GY1ocntWu+yiYA2ihwV0AAAAAdfqFyP3JSL0+5w8S847mgg==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '10-18154371-18154378 NNNN CT(88 89 0) RT(1572970856063 21) q(0 0 2 -1) r(3 3) U5',
  'X-CDN',
  'Incapsula' ]);


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
        "createdAt":"2019-11-05T16:20:10Z",
        "updatedAt":"2019-11-05T16:20:10Z"
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
  'Tue, 05 Nov 2019 16:20:57 GMT',
  'ETag',
  'W/"2b0c8e96e339dccd6df23362e7011c06"',
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
  'eac29c3fca954623357d0c30b635e697',
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
  'visid_incap_673446=dU70rk1wQT+yOZ8eTtj9M2ihwV0AAAAAQUIPAAAAAAAvVHGk6LMhMrw4+zzC/Fpm; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=fMnQdQ+1rkTV67kCYMlkBAAAAAC7xCHjJf353DejDgNTp3z0; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=h1I6N1QERBR6ntWu+yiYA2ihwV0AAAAAOvHaP785IfaL+x9QzYlDEA==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '7-7497508-7497514 NNNN CT(88 89 0) RT(1572970856453 14) q(0 0 2 -1) r(3 3) U5',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/entries/6RqHguPWehx07TrYsvzyiJ', {"sys":{"id":"6RqHguPWehx07TrYsvzyiJ","version":1,"contentType":{"sys":{"type":"Link","linkType":"ContentType","id":"blogpost"}}},"fields":{"title":{"en-US":"hello!"},"category":{"en-US":"hello!"}}})
  .reply(200, {
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "bohepdihyxin"
      }
    },
    "id": "6RqHguPWehx07TrYsvzyiJ",
    "type": "Entry",
    "createdAt": "2019-11-05T16:20:54.422Z",
    "updatedAt": "2019-11-05T16:20:57.699Z",
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
  'f788b7db-100b-472e-9585-bbfc282372e9',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 05 Nov 2019 16:20:57 GMT',
  'ETag',
  'W/"16160452366056161589"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  'e53765aafee8302e9173522ce5859ea9',
  'Content-Length',
  '366',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=uYdXvUb/RKqVwJp1XZGnY2mhwV0AAAAAQUIPAAAAAAA/Bs1tylJdVZEbIROfMfLo; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=AM65DOk3j3y49OhEYMlkBAAAAADeYTf6enfGe29cjZfInoNF; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=fphtA+Vcgnz6ntWu+yiYA2mhwV0AAAAAEPvXb9UyUnRMcSbJtsSJhQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '6-6366538-6366549 NNNN CT(87 88 0) RT(1572970856871 24) q(0 0 2 -1) r(4 4) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/entries/6RqHguPWehx07TrYsvzyiJ/published')
  .reply(200, {
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "bohepdihyxin"
      }
    },
    "id": "6RqHguPWehx07TrYsvzyiJ",
    "type": "Entry",
    "createdAt": "2019-11-05T16:20:54.422Z",
    "updatedAt": "2019-11-05T16:20:58.156Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 2,
    "publishedAt": "2019-11-05T16:20:58.156Z",
    "firstPublishedAt": "2019-11-05T16:20:58.156Z",
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
  'f788b7db-100b-472e-9585-bbfc282372e9',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 05 Nov 2019 16:20:58 GMT',
  'ETag',
  'W/"4577364934473481974"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'a4ba7b079b9f979661fca2b9feaf0299',
  'Content-Length',
  '395',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=fqCgjf0lTDWmRMIY1ZHTNGmhwV0AAAAAQUIPAAAAAABG160dziRgPArUJsTBh83L; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=uJI6TKJ1539fVDvWYMlkBAAAAAADSdHKeBItc6a9M7XlNhvv; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=hjAkEQm9J0xrn9Wu+yiYA2mhwV0AAAAAZeeDFP7e+m+9/9nfM66vkg==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '6-6366626-6366629 NNNN CT(88 89 0) RT(1572970857336 25) q(0 0 2 -1) r(5 5) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/entries/2RYQQ309H2gpDolBG3JBjk', {"sys":{"id":"2RYQQ309H2gpDolBG3JBjk","version":1,"contentType":{"sys":{"type":"Link","linkType":"ContentType","id":"blogpost"}}},"fields":{"title":{"en-US":"hello!"},"category":{"en-US":"hello!"}}})
  .reply(200, {
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "bohepdihyxin"
      }
    },
    "id": "2RYQQ309H2gpDolBG3JBjk",
    "type": "Entry",
    "createdAt": "2019-11-05T16:20:54.937Z",
    "updatedAt": "2019-11-05T16:20:58.745Z",
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
  'f788b7db-100b-472e-9585-bbfc282372e9',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 05 Nov 2019 16:20:58 GMT',
  'ETag',
  'W/"18021462921535967987"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  'f835b53095520d5894eed2c7f34bb6b2',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=Xt7pgoqPTB+o/w0rtmqx4GqhwV0AAAAAQUIPAAAAAACsN/IkRZFu2ng2CW67nLyd; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=KboyB4hDgF6Ybh++YMlkBAAAAAD4BDnx5jILZ3aPmR4dTEF9; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=UWA5X3NPVRzUn9Wu+yiYA2qhwV0AAAAAIUjsYZ/8gVyMiRjDbQS4DA==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '9-13656552-13656563 NNNN CT(87 87 0) RT(1572970857907 26) q(0 0 2 -1) r(3 3) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/entries/2RYQQ309H2gpDolBG3JBjk/published')
  .reply(200, {
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "bohepdihyxin"
      }
    },
    "id": "2RYQQ309H2gpDolBG3JBjk",
    "type": "Entry",
    "createdAt": "2019-11-05T16:20:54.937Z",
    "updatedAt": "2019-11-05T16:20:59.190Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 2,
    "publishedAt": "2019-11-05T16:20:59.190Z",
    "firstPublishedAt": "2019-11-05T16:20:59.190Z",
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
  'f788b7db-100b-472e-9585-bbfc282372e9',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 05 Nov 2019 16:20:59 GMT',
  'ETag',
  'W/"15574793836205484011"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '55ae74bf49d176f745112b2d02c01ec0',
  'Content-Length',
  '395',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=GayQq221RB+K/XcSA8CMxGqhwV0AAAAAQUIPAAAAAAC0KxED7q+rwJWcOIxQu6wm; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=2lQuJa5T6UdNArxnYMlkBAAAAAABW6vcl4P44CHC3FZcghbr; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=YTozawoykTVeoNWu+yiYA2qhwV0AAAAA5aRRmikhGO+dwb7lnIqqhw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '5-9435777-9435782 NNNN CT(88 110 0) RT(1572970858360 18) q(0 0 2 -1) r(5 5) U5',
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
        "id": "2RYQQ309H2gpDolBG3JBjk",
        "type": "Entry",
        "createdAt": "2019-11-05T16:20:54.937Z",
        "updatedAt": "2019-11-05T16:20:59.190Z",
        "environment": {
          "sys": {
            "id": "env-integration",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 2,
        "publishedAt": "2019-11-05T16:20:59.190Z",
        "firstPublishedAt": "2019-11-05T16:20:59.190Z",
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
        "id": "6RqHguPWehx07TrYsvzyiJ",
        "type": "Entry",
        "createdAt": "2019-11-05T16:20:54.422Z",
        "updatedAt": "2019-11-05T16:20:58.156Z",
        "environment": {
          "sys": {
            "id": "env-integration",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 2,
        "publishedAt": "2019-11-05T16:20:58.156Z",
        "firstPublishedAt": "2019-11-05T16:20:58.156Z",
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
  'f788b7db-100b-472e-9585-bbfc282372e9',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 05 Nov 2019 16:20:59 GMT',
  'ETag',
  'W/"16571812403589475843"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  'efba57bcf4fedea85139d198642694a0',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=oICSxLNcS1GafXL97NR3emuhwV0AAAAAQUIPAAAAAADYnwKYFFtMYwANyFOHV21K; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=sU1JclGDRhh3Nr8qYMlkBAAAAAAtD7koQ+eZgX0uSDnde0oz; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=f35SVt6CPTnIoNWu+yiYA2uhwV0AAAAAOgGhI/qf6S1c4XvwG42c/w==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '10-18155463-18155470 NNNN CT(88 89 0) RT(1572970858980 21) q(0 0 1 -1) r(3 3) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/content_types')
  .query({"limit":"100","order":"sys.createdAt","sys.id":{"in":"blogPost"},"skip":"0"})
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
  'f788b7db-100b-472e-9585-bbfc282372e9',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 05 Nov 2019 16:21:00 GMT',
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
  'c9b7930f12a551f2424e2bbce5327a35',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=JOVn0RwOQWyqB0L15WYHbGuhwV0AAAAAQUIPAAAAAAD4IDbWDnNx/hPNLdsfc2bA; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=AqWefnYzi2iv542fYMlkBAAAAACqyUFtF+XkXx99gJxOxuh5; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=39djRgLGkXcoodWu+yiYA2uhwV0AAAAAPD6UdgAcpKz6ih+a2EAj4A==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '8-11685077-11685093 NNNN CT(88 90 0) RT(1572970859451 28) q(0 0 2 -1) r(3 3) U5',
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
  "requestId": "f5ba39f56b928361b6ccfce62471e208"
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
  'f788b7db-100b-472e-9585-bbfc282372e9',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 05 Nov 2019 16:21:00 GMT',
  'ETag',
  '"6077420216214942805"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  'f5ba39f56b928361b6ccfce62471e208',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=i55DXC73RTGIcVZjVKRUDWyhwV0AAAAAQUIPAAAAAAAVdJxMHIEEAnFUddKVUPC7; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=ssWsOstwxgOE4YOMYMlkBAAAAABsbwfHyN+FSWLvfW8GBg4/; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=XaQfScEt0QhkodWu+yiYA2yhwV0AAAAAhe4ti+pvYBi1db7C9x55XQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '10-18155764-18155776 NNNN CT(88 92 0) RT(1572970859840 19) q(0 0 2 -1) r(3 3) U5',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked' ]);


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
        "createdAt":"2019-11-05T16:20:10Z",
        "updatedAt":"2019-11-05T16:20:10Z"
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
  'Tue, 05 Nov 2019 16:21:01 GMT',
  'ETag',
  'W/"2b0c8e96e339dccd6df23362e7011c06"',
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
  '1f209a12de7c5b04f98e33e9be404133',
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
  'visid_incap_673446=rY+6n14HT5uhCfnFT78KEG2hwV0AAAAAQUIPAAAAAADGmXGMOMVdPaBjOnupeIzt; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=NWm3AsmHqXoaVk/FYMlkBAAAAABCJJ9VBTAtusXTHulfZQws; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=IPffPgAb5ljCotWu+yiYA22hwV0AAAAA2DTKzdOhxDILFG2e1spo9Q==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '8-11685354-11685356 NNNN CT(88 88 0) RT(1572970860211 19) q(0 0 2 -1) r(14 14) U5',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/blogPost', {"name":"Blog post","fields":[{"id":"slug","name":"URL Slug","type":"Symbol","required":true}],"description":"super angry"})
  .reply(201, {"sys":{"space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"id":"blogPost","type":"ContentType","createdAt":"2019-11-05T16:21:02.558Z","updatedAt":"2019-11-05T16:21:02.558Z","environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}},"createdBy":{"sys":{"type":"Link","linkType":"User","id":"33kZDXNajFNmbngiu5MvUa"}},"updatedBy":{"sys":{"type":"Link","linkType":"User","id":"33kZDXNajFNmbngiu5MvUa"}},"publishedCounter":0,"version":1},"displayField":null,"name":"Blog post","description":"super angry","fields":[{"id":"slug","name":"URL Slug","type":"Symbol","localized":false,"required":true,"validations":[],"disabled":false,"omitted":false}]}, [ 'Access-Control-Allow-Headers',
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
  'f788b7db-100b-472e-9585-bbfc282372e9',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 05 Nov 2019 16:21:02 GMT',
  'ETag',
  '"5966466492553518144"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '3b51d4fc24e2be4ebafd89913249b184',
  'Content-Length',
  '1054',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=PjOuxOlRRHW7nSgawR/CUG6hwV0AAAAAQUIPAAAAAAAcJNdyjYFNFOMB6oSjJn5j; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=6oRZValazHseIpy0YMlkBAAAAADdqY7UCQ1vqC35YsGJhDVF; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=aab1B4oraXFto9Wu+yiYA26hwV0AAAAAVgEpEAZ9cbGzn6/lIbb9pg==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '4-7911465-7911470 NNNN CT(88 88 0) RT(1572970861706 26) q(0 0 2 -1) r(4 4) U5',
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
    "createdAt": "2019-11-05T16:21:02.558Z",
    "updatedAt": "2019-11-05T16:21:03.066Z",
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
    "firstPublishedAt": "2019-11-05T16:21:03.066Z",
    "publishedAt": "2019-11-05T16:21:03.066Z",
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
  'f788b7db-100b-472e-9585-bbfc282372e9',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 05 Nov 2019 16:21:03 GMT',
  'ETag',
  'W/"1893164064375712190"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '73c81c108cc78f71502ae2a87f52d608',
  'Content-Length',
  '446',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=j2kDhQwtSHS51WikfSzpC26hwV0AAAAAQUIPAAAAAAAQuFVfpkBb3b6WR3ROH/pN; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=MoYbOCH6dyLBcuizYMlkBAAAAADs0fMc00P4D6k2z4GSbtur; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=TTk6BMJ+zmUWpNWu+yiYA26hwV0AAAAASddLJ7V73YyfRvsHl1CYUA==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '10-18156666-18156670 NNNN CT(90 100 0) RT(1572970862238 21) q(0 0 2 -1) r(5 5) U5',
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
    "createdAt": "2019-11-05T16:21:03.187Z",
    "createdBy": {
      "sys": {
        "id": "33kZDXNajFNmbngiu5MvUa",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2019-11-05T16:21:03.721Z",
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
  'f788b7db-100b-472e-9585-bbfc282372e9',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 05 Nov 2019 16:21:03 GMT',
  'ETag',
  'W/"9568272707336328647"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  '06507dceb50e7b2a82f327917fb01321',
  'Content-Length',
  '382',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=gIbtlRXGQeyhJYdACzk+NG+hwV0AAAAAQUIPAAAAAACJnAZxCABO/PQVQ3yo5/TQ; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=NwriWCa2My6dWb6PYMlkBAAAAACEq1b25I/Z5B0Ss1yzn7bZ; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=pTQgdLgV0hyhpNWu+yiYA2+hwV0AAAAARhO8xvID6u45o2tBnvN8NQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '9-13657637-13657648 NNNN CT(88 95 0) RT(1572970862886 27) q(0 0 1 -1) r(4 4) U5',
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
    "createdAt": "2019-11-05T16:21:03.187Z",
    "createdBy": {
      "sys": {
        "id": "33kZDXNajFNmbngiu5MvUa",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2019-11-05T16:21:03.721Z",
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
  'f788b7db-100b-472e-9585-bbfc282372e9',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 05 Nov 2019 16:21:04 GMT',
  'ETag',
  'W/"13401807411898547272"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'dcc2e7f054a70a62bec63b589da9c3d3',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=BJXL4fhYRO+jAOdp63hHTW+hwV0AAAAAQUIPAAAAAABvxw5QnKpDJVagyTUwdWr4; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=k3cwEfK2og/KnKMKYMlkBAAAAAAFcqhsGqNJlwb7MWnuBmwx; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=/LF9VL7tqWIqpdWu+yiYA2+hwV0AAAAA1QTqT3K++JHMVdo0PR9b1w==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '9-13657807-13657814 NNNN CT(93 89 0) RT(1572970863392 22) q(0 0 1 -1) r(5 5) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/content_types')
  .query({"limit":"100","order":"sys.createdAt","sys.id":{"in":"blogPost"},"skip":"0"})
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
        "createdAt": "2019-11-05T16:21:02.558Z",
        "updatedAt": "2019-11-05T16:21:03.066Z",
        "environment": {
          "sys": {
            "id": "env-integration",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 1,
        "publishedAt": "2019-11-05T16:21:03.066Z",
        "firstPublishedAt": "2019-11-05T16:21:03.066Z",
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
  'f788b7db-100b-472e-9585-bbfc282372e9',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 05 Nov 2019 16:21:04 GMT',
  'ETag',
  'W/"3832544744283885238"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  '0b1055271e952b1a314d8f14a03908c9',
  'Content-Length',
  '516',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=GLfYBGo5Th6/1aXEhTMpSHChwV0AAAAAQUIPAAAAAAAmNu3KK+/KmucLGG3mJYV5; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=KGKmRVg8hSv6zhRaYMlkBAAAAADZot3DPLhpHxGaHrXlLhXY; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=iyZcG/f2yEqNpdWu+yiYA3ChwV0AAAAAbszrR+LivNyTYVxzqBj4dw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '6-6368132-6368137 NNNN CT(87 91 0) RT(1572970863999 22) q(0 0 1 -1) r(3 3) U5',
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
    "createdAt": "2019-11-05T16:21:03.187Z",
    "createdBy": {
      "sys": {
        "id": "33kZDXNajFNmbngiu5MvUa",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2019-11-05T16:21:03.721Z",
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
  'f788b7db-100b-472e-9585-bbfc282372e9',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 05 Nov 2019 16:21:05 GMT',
  'ETag',
  'W/"13401807411898547272"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '6fcf1402c200582539f3a092ee1cecfa',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=uflr2I36RPiqx7+6uGuwFnChwV0AAAAAQUIPAAAAAAAj7gQh1GkmJ8iO4OebNPd4; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=8k/oJRg5rA5vGZpBYMlkBAAAAAAGyRHzqPWZTtkhZSghOyPY; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=qim2KS1NPHb0pdWu+yiYA3ChwV0AAAAAw032TwNxqr4kjxqFjnGAxA==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '6-6368202-6368205 NNNN CT(93 93 0) RT(1572970864455 32) q(0 0 2 -1) r(4 4) U5',
  'X-CDN',
  'Incapsula' ]);


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
        "createdAt":"2019-11-05T16:20:10Z",
        "updatedAt":"2019-11-05T16:20:10Z"
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
  'Tue, 05 Nov 2019 16:21:05 GMT',
  'ETag',
  'W/"2b0c8e96e339dccd6df23362e7011c06"',
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
  'd59bc0df5a99af2571d4c544426fca8b',
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
  'visid_incap_673446=4idLLaf2SK68BQxmdLrRO3GhwV0AAAAAQUIPAAAAAAAqR7MLFjE4A0gtmdD+fISN; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=wUK/WiKOLhMyTH3qYMlkBAAAAACLYvOENMFW7cSB2HPNkyvO; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=UhevdOlWkn88ptWu+yiYA3GhwV0AAAAAPxN9TGssy4iOg5tV65ui1Q==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '7-7499544-7499549 NNNN CT(90 90 0) RT(1572970864903 13) q(0 0 1 -1) r(2 2) U5',
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
    "createdAt": "2019-11-05T16:21:02.558Z",
    "updatedAt": "2019-11-05T16:21:06.181Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 1,
    "publishedAt": "2019-11-05T16:21:03.066Z",
    "firstPublishedAt": "2019-11-05T16:21:03.066Z",
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
  'f788b7db-100b-472e-9585-bbfc282372e9',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 05 Nov 2019 16:21:06 GMT',
  'ETag',
  'W/"1754987741559547938"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '23e77325c667713cbccb7409451dc08f',
  'Content-Length',
  '450',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=h04KDUR9TWyzeH3ZBy1wi3GhwV0AAAAAQUIPAAAAAABAzqU9jgOnfoNhsyyOMJNe; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=/VFDKTVY3UJT2RKkYMlkBAAAAACr5gU3+d0HEGALeuknEg0Q; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=RV8vAWKQT3alptWu+yiYA3GhwV0AAAAAW+unbRya/ef8ILyKZo1XEw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '5-9436958-9436962 NNNN CT(93 94 0) RT(1572970865312 20) q(0 0 2 -1) r(4 4) U5',
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
    "createdAt": "2019-11-05T16:21:02.558Z",
    "updatedAt": "2019-11-05T16:21:06.686Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 3,
    "publishedAt": "2019-11-05T16:21:06.686Z",
    "firstPublishedAt": "2019-11-05T16:21:03.066Z",
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
  'f788b7db-100b-472e-9585-bbfc282372e9',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 05 Nov 2019 16:21:07 GMT',
  'ETag',
  'W/"2348713788322344520"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  'a349aeaa7892bf941631ad2f952b8e5d',
  'Content-Length',
  '459',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=ZLTsITSDTz2qzTqc3L0DBHKhwV0AAAAAQUIPAAAAAACNUekskR9R9UxxX6EpCsKb; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=3sPKfo8HiV+gCHNkYMlkBAAAAADTRvcj+295uOjybCsMMYT+; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=5/g8QoM+7DJ+p9Wu+yiYA3KhwV0AAAAAgtX9/aPWBcI/ANN85Q3W8A==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '10-18157753-18157767 NNNN CT(105 102 0) RT(1572970865830 24) q(0 0 2 -1) r(9 9) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/blogPost/editor_interface', {"controls":[]})
  .reply(200, {"controls":[],"sys":{"id":"default","type":"EditorInterface","space":{"sys":{"id":"bohepdihyxin","type":"Link","linkType":"Space"}},"version":4,"createdAt":"2019-11-05T16:21:03.187Z","createdBy":{"sys":{"id":"33kZDXNajFNmbngiu5MvUa","type":"Link","linkType":"User"}},"updatedAt":"2019-11-05T16:21:07.702Z","updatedBy":{"sys":{"type":"Link","linkType":"User","id":"33kZDXNajFNmbngiu5MvUa"}},"contentType":{"sys":{"id":"blogPost","type":"Link","linkType":"ContentType"}},"environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}}}}, [ 'Access-Control-Allow-Headers',
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
  'f788b7db-100b-472e-9585-bbfc282372e9',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 05 Nov 2019 16:21:07 GMT',
  'ETag',
  '"3979422963773069239"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '874f4bfb1e67d69a258c615d041d08fa',
  'Content-Length',
  '880',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=a+yzgL2QQ1GSBqQ8FbuRT3OhwV0AAAAAQUIPAAAAAAAXkYZ/xWPubLdZaAVo7aCW; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=/P2ZM3F67CegxbrrYMlkBAAAAACq2FmyoNa9MfGHQyWd0v7v; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=LbzuAzKgexn7p9Wu+yiYA3OhwV0AAAAAy/8QsrPA0uzPsqKJYHODLA==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '7-7500024-7500034 NNNN CT(87 88 0) RT(1572970866876 27) q(0 0 1 -1) r(3 3) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/blogPost/editor_interface', {"controls":[{"fieldId":"slug","widgetId":"singleLine","widgetNamespace":"builtin"}]})
  .reply(200, {"controls":[{"fieldId":"slug","widgetId":"singleLine","widgetNamespace":"builtin"}],"sys":{"id":"default","type":"EditorInterface","space":{"sys":{"id":"bohepdihyxin","type":"Link","linkType":"Space"}},"version":5,"createdAt":"2019-11-05T16:21:03.187Z","createdBy":{"sys":{"id":"33kZDXNajFNmbngiu5MvUa","type":"Link","linkType":"User"}},"updatedAt":"2019-11-05T16:21:08.200Z","updatedBy":{"sys":{"type":"Link","linkType":"User","id":"33kZDXNajFNmbngiu5MvUa"}},"contentType":{"sys":{"id":"blogPost","type":"Link","linkType":"ContentType"}},"environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}}}}, [ 'Access-Control-Allow-Headers',
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
  'f788b7db-100b-472e-9585-bbfc282372e9',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 05 Nov 2019 16:21:08 GMT',
  'ETag',
  '"18254740540287187645"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '3a2dbc9fdeeaf1cffe839f0eea635414',
  'Content-Length',
  '987',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=O7b5yHTBTCygpDeI6HbYzXOhwV0AAAAAQUIPAAAAAAAWyI6FvX+1yXGo9qlzEiFB; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=fY+sUzwq/x04LMzkYMlkBAAAAACx9TH91vJx41FzXDAClVuJ; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=m/uYNWG8njF7qNWu+yiYA3OhwV0AAAAAIuKLLzSGDRVk7I/ypowkBg==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '6-6368960-6368966 NNNN CT(90 88 0) RT(1572970867388 19) q(0 0 1 -1) r(3 3) U5',
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
    "createdAt": "2019-11-05T16:21:03.187Z",
    "createdBy": {
      "sys": {
        "id": "33kZDXNajFNmbngiu5MvUa",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2019-11-05T16:21:08.200Z",
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
  'f788b7db-100b-472e-9585-bbfc282372e9',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 05 Nov 2019 16:21:08 GMT',
  'ETag',
  '"2963440886246009329"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  '1ff1ea9efb49429cd6f0a95a297d76b8',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=PYGpOIStRf+F5iOPmL4pvnShwV0AAAAAQUIPAAAAAABBcxuZI1VtXV8aWYCSj5Z/; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=gQvEDhELrFkARQ47YMlkBAAAAAD8Ku8/pqQOdyxJ7Xob23LK; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=W9FHNsi2JRffqNWu+yiYA3ShwV0AAAAATF/ZQtWn9UtjMZSEe4hhNg==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '9-13659230-13659239 NNNN CT(87 100 0) RT(1572970867871 24) q(0 0 2 -1) r(4 4) U5',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/content_types')
  .query({"limit":"100","order":"sys.createdAt","sys.id":{"in":"blogPost"},"skip":"0"})
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
        "createdAt": "2019-11-05T16:21:02.558Z",
        "updatedAt": "2019-11-05T16:21:06.686Z",
        "environment": {
          "sys": {
            "id": "env-integration",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 3,
        "publishedAt": "2019-11-05T16:21:06.686Z",
        "firstPublishedAt": "2019-11-05T16:21:03.066Z",
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
  'f788b7db-100b-472e-9585-bbfc282372e9',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 05 Nov 2019 16:21:09 GMT',
  'ETag',
  'W/"17675815769293167743"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'b813273f586a601c5aad4ca7f87aaedc',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=uK84wMpdSaG9+6at7ZKfsHShwV0AAAAAQUIPAAAAAAA61oWhu6gn1kGLXx2eo5WT; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=QmUeWesm4SN1Ufa7YMlkBAAAAAD8uKppr71tP/1OxceA/rPa; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=8LXlEPXl3RJGqdWu+yiYA3ShwV0AAAAALjyprnaIUufaaPX7mqE5OA==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '8-11687357-11687364 NNNN CT(88 88 0) RT(1572970868288 27) q(0 0 1 -1) r(3 3) U5',
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
    "createdAt": "2019-11-05T16:21:03.187Z",
    "createdBy": {
      "sys": {
        "id": "33kZDXNajFNmbngiu5MvUa",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2019-11-05T16:21:08.200Z",
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
  'f788b7db-100b-472e-9585-bbfc282372e9',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 05 Nov 2019 16:21:09 GMT',
  'ETag',
  '"2963440886246009329"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  'b94930258e3d8a10f02b30784577d748',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=4EhALvAwStS2ntmCw1Ql73WhwV0AAAAAQUIPAAAAAAAg7ZOCsbXl6uBFciCffRla; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=BVbeGDLvzB71Pu7pYMlkBAAAAAB1jxfLL0gtzgfkE/eSvo/V; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=sapncMl0PgmrqdWu+yiYA3WhwV0AAAAA/7QSv96IhHVL896Jcr7EHA==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '9-13659560-13659567 NNNN CT(93 94 0) RT(1572970868746 19) q(0 0 2 -1) r(3 3) U5',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked' ]);


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
        "createdAt":"2019-11-05T16:20:10Z",
        "updatedAt":"2019-11-05T16:20:10Z"
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
  'Tue, 05 Nov 2019 16:21:10 GMT',
  'ETag',
  'W/"2b0c8e96e339dccd6df23362e7011c06"',
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
  '4b4a89140106986b427a9d4e4cfb36d6',
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
  'visid_incap_673446=qOIj+g25RG2UjMFl2NV5o3WhwV0AAAAAQUIPAAAAAAAO8Rk2P56htscRgFdHfqsl; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=/d3EQLpnVUhpxhLZYMlkBAAAAAAMpK7mtnKAl7DuYAbgSLsx; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=hBATalL0Ux4AqtWu+yiYA3WhwV0AAAAAAE3eUzBtGajUfY68V1jHJA==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '10-18158835-18158853 NNNN CT(95 119 0) RT(1572970869184 20) q(0 0 2 -1) r(3 3) U5',
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
    "createdAt": "2019-11-05T16:21:02.558Z",
    "updatedAt": "2019-11-05T16:21:10.484Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 3,
    "publishedAt": "2019-11-05T16:21:06.686Z",
    "firstPublishedAt": "2019-11-05T16:21:03.066Z",
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
  'f788b7db-100b-472e-9585-bbfc282372e9',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 05 Nov 2019 16:21:10 GMT',
  'ETag',
  'W/"3345389454310460919"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  '885de791a4c9469084308ed66a0def3d',
  'Content-Length',
  '464',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=GK9nSgiQRYeT1FrTXgwa3XahwV0AAAAAQUIPAAAAAABTm79rl07j/NSuLktfdoZJ; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=jFRofk/RSmoUn5QLYMlkBAAAAADX/Lk+M6GuWLzrG++8WZxL; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=o7CsSJd86TJaqtWu+yiYA3ahwV0AAAAAkl82TbfjoMTeTFe1qJAEbA==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '5-9437590-9437593 NNNN CT(91 89 0) RT(1572970869640 20) q(0 0 2 -1) r(4 4) U5',
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
    "createdAt": "2019-11-05T16:21:02.558Z",
    "updatedAt": "2019-11-05T16:21:10.920Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 5,
    "publishedAt": "2019-11-05T16:21:10.920Z",
    "firstPublishedAt": "2019-11-05T16:21:03.066Z",
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
  'f788b7db-100b-472e-9585-bbfc282372e9',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 05 Nov 2019 16:21:11 GMT',
  'ETag',
  'W/"17059626389973286821"',
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
  'cba5c06ab6795489966d7d5bfe45e102',
  'Content-Length',
  '459',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=/uOIGqXnQFWM4vvUZDI88XahwV0AAAAAQUIPAAAAAABQvluQg3GihRCucrwkKc4+; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=5S/kLkfA8hP4yP3dYMlkBAAAAAChCDvdoilBQEh7unzzg/hD; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=m8EdZYIE7G3lqtWu+yiYA3ahwV0AAAAAjj6Q4CN0+PZcItL2tO+7Dg==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '5-9437662-9437667 NNNN CT(88 88 0) RT(1572970870110 14) q(0 0 2 -1) r(4 4) U5',
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
    "createdAt": "2019-11-05T16:21:03.187Z",
    "createdBy": {
      "sys": {
        "id": "33kZDXNajFNmbngiu5MvUa",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2019-11-05T16:21:11.487Z",
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
  'f788b7db-100b-472e-9585-bbfc282372e9',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 05 Nov 2019 16:21:11 GMT',
  'ETag',
  'W/"1560097939295585775"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '1dd879fcd30b4d4ad54e4b0dcad445ad',
  'Content-Length',
  '419',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=rM3mCJ5pTmS/v3fa0Kg8KHehwV0AAAAAQUIPAAAAAAAerqa5Fh+kb3k32/ROt6/K; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=Xcm6d6G/emquL0EBYMlkBAAAAACmIH0x5H3c1YHsV9aijpUz; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=33QGakm3AlBiq9Wu+yiYA3ehwV0AAAAACKYd9yfpTBRNhuX8Y3fTtw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '10-18159375-18159388 NNNN CT(88 88 0) RT(1572970870668 19) q(0 0 2 -1) r(4 4) U5',
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
    "createdAt": "2019-11-05T16:21:03.187Z",
    "createdBy": {
      "sys": {
        "id": "33kZDXNajFNmbngiu5MvUa",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2019-11-05T16:21:11.487Z",
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
  'f788b7db-100b-472e-9585-bbfc282372e9',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 05 Nov 2019 16:21:11 GMT',
  'ETag',
  'W/"12887561123313323026"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  '91b7ae3f2c2be8982f6f36f82d4b35c0',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=ZGYqV10qTheGc7/J3l7j7nehwV0AAAAAQUIPAAAAAAAG1pRpyIFSE1vTkG30KuJ5; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=IaihdoVnJVpXBXlOYMlkBAAAAADW0D+4mscjg9t+iybwPmMJ; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=f6riK9O2n1i+q9Wu+yiYA3ehwV0AAAAATbGdRFC/jw1+Zczw6vFNzQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '6-6369676-6369689 NNNN CT(88 88 0) RT(1572970871154 22) q(0 0 2 -1) r(3 3) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/content_types')
  .query({"limit":"100","order":"sys.createdAt","sys.id":{"in":"customSidebar"},"skip":"0"})
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
  'f788b7db-100b-472e-9585-bbfc282372e9',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 05 Nov 2019 16:21:12 GMT',
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
  '7b584f2dd8fa9341b89135a6291cda22',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=9SGwz+SCQji5tomWnTmBTXehwV0AAAAAQUIPAAAAAACfp243PpwBwheTquPBT5QD; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=XI7GVOOuqDH5PxPSYMlkBAAAAAC7dPbS7mZpnRm0uxKYFn/U; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=al1CAJh6BgYQrNWu+yiYA3ehwV0AAAAARhVUdwkoqiUWM+1RuvmCvQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '10-18159746-18159754 NNNN CT(88 88 0) RT(1572970871620 22) q(0 0 2 -1) r(3 3) U5',
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
  "requestId": "cac95e164a512d5cb82b7881a832d7a7"
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
  'f788b7db-100b-472e-9585-bbfc282372e9',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 05 Nov 2019 16:21:12 GMT',
  'ETag',
  '"4602871645078240918"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  'cac95e164a512d5cb82b7881a832d7a7',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=z93tnvX1Qzi3Qiy76Ijwu3ihwV0AAAAAQUIPAAAAAAAparpU9ehPrTZk04V6Vb4e; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=9Sa1Cwp1WDEdAqytYMlkBAAAAAAmtJnU58g/zwQvGZjKe8GE; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=GMNiJ2COvWhtrNWu+yiYA3ihwV0AAAAAmH0XBhXA8JjFC2TkjCsEow==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '6-6369957-6369961 NNNN CT(88 88 0) RT(1572970872053 19) q(0 0 2 -1) r(3 3) U5',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked' ]);


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
        "createdAt":"2019-11-05T16:20:10Z",
        "updatedAt":"2019-11-05T16:20:10Z"
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
  'Tue, 05 Nov 2019 16:21:13 GMT',
  'ETag',
  'W/"2b0c8e96e339dccd6df23362e7011c06"',
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
  'e2db5ce3fa41152c0cdcc2612d30c6da',
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
  'visid_incap_673446=KukZYfuiQzuuU0RDgUmmyHihwV0AAAAAQUIPAAAAAADtmWhHplAg2G+RqQ891Fb6; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=BTAxDyczkBSwRGWaYMlkBAAAAAABLgmqS3SXl+sqTEPMksUf; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=aQLjeCFypjXFrNWu+yiYA3ihwV0AAAAAB0tQ+v5HFqaB2paYRnbvlA==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '2-3059014-3059016 NNNN CT(87 88 0) RT(1572970872423 14) q(0 0 2 -1) r(3 3) U5',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/customSidebar', {"name":"Custom sidebar","fields":[],"description":"How to add, remove and update widgets"})
  .reply(201, {"sys":{"space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"id":"customSidebar","type":"ContentType","createdAt":"2019-11-05T16:21:13.660Z","updatedAt":"2019-11-05T16:21:13.660Z","environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}},"createdBy":{"sys":{"type":"Link","linkType":"User","id":"33kZDXNajFNmbngiu5MvUa"}},"updatedBy":{"sys":{"type":"Link","linkType":"User","id":"33kZDXNajFNmbngiu5MvUa"}},"publishedCounter":0,"version":1},"displayField":null,"name":"Custom sidebar","description":"How to add, remove and update widgets","fields":[]}, [ 'Access-Control-Allow-Headers',
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
  'f788b7db-100b-472e-9585-bbfc282372e9',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 05 Nov 2019 16:21:13 GMT',
  'ETag',
  '"17042039074719520073"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  '87153dc577392bbc7d815265300e7431',
  'Content-Length',
  '882',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=Kx9ZZnwUTMWep+Swmu9Pl3mhwV0AAAAAQUIPAAAAAACr/HtL5JNhZoBlQCKPhxIh; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=+H0BKndRoGmf2LN5YMlkBAAAAAC31RdGRR3Ox7s2ukSpqjz2; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=x6eUCxuYdkU7rdWu+yiYA3mhwV0AAAAACII2p4Keks3FxmuhH+IwbA==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '7-7501631-7501635 NNNN CT(88 90 0) RT(1572970872813 16) q(0 0 2 -1) r(4 4) U5',
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
    "createdAt": "2019-11-05T16:21:13.660Z",
    "updatedAt": "2019-11-05T16:21:14.166Z",
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
    "firstPublishedAt": "2019-11-05T16:21:14.166Z",
    "publishedAt": "2019-11-05T16:21:14.166Z",
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
  'f788b7db-100b-472e-9585-bbfc282372e9',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 05 Nov 2019 16:21:14 GMT',
  'ETag',
  'W/"14220580194205826946"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '9fb4348d30fccddd69877227581c59f9',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=d8DH20vRSHK8UK7b/xFS+nmhwV0AAAAAQUIPAAAAAABS1fo7zjV+nSWhSnwArVre; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=hcj6cDvRzWe77GFzYMlkBAAAAAB/FgwMHzjXleGZkQcusJKS; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=zXgsDrk/iXvSrdWu+yiYA3mhwV0AAAAATJKwyNcXFyBND7f3cYKu+g==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '7-7501758-7501763 NNNN CT(93 94 0) RT(1572970873335 19) q(0 0 2 -1) r(5 5) U5',
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
    "createdAt": "2019-11-05T16:21:14.265Z",
    "createdBy": {
      "sys": {
        "id": "33kZDXNajFNmbngiu5MvUa",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2019-11-05T16:21:14.784Z",
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
  'f788b7db-100b-472e-9585-bbfc282372e9',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 05 Nov 2019 16:21:14 GMT',
  'ETag',
  'W/"900211857213613403"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  'd7bb3e44e80ac881272590b10f2ec4f2',
  'Content-Length',
  '458',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=rXeZf531Q0a7VdQXQ5z0cHqhwV0AAAAAQUIPAAAAAAAV43eZaVIphFurC9nXH8I+; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=x+sOZySA+3vTpXRLYMlkBAAAAADiuLI5omvkBbHAnipF4GPl; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=WbD8Z//yfjNJrtWu+yiYA3qhwV0AAAAAJPEk/kiomybzKDbGu+bUqw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '10-18160696-18160701 NNNN CT(92 93 0) RT(1572970873944 21) q(0 0 2 -1) r(4 4) U5',
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
    "createdAt": "2019-11-05T16:21:14.265Z",
    "createdBy": {
      "sys": {
        "id": "33kZDXNajFNmbngiu5MvUa",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2019-11-05T16:21:15.273Z",
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
  'f788b7db-100b-472e-9585-bbfc282372e9',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 05 Nov 2019 16:21:15 GMT',
  'ETag',
  'W/"2372654067431556096"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'd3e019d83e65b88a1cdcffee9039a343',
  'Content-Length',
  '459',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=OtIkDasQSCGLcSJ6f/0MBnqhwV0AAAAAQUIPAAAAAACjH3QwYRpsL+9c6yMuM6Wb; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=xp4zfHsSLm4K1i1RYMlkBAAAAACVxrWeYrxqWICMgofU8NDX; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=6wO+RJEUihalrtWu+yiYA3qhwV0AAAAAJ8uzq4LE0Nk4aKihGVLfNg==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '8-11689013-11689018 NNNN CT(97 93 0) RT(1572970874440 19) q(0 0 2 -1) r(4 4) U5',
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
    "createdAt": "2019-11-05T16:21:14.265Z",
    "createdBy": {
      "sys": {
        "id": "33kZDXNajFNmbngiu5MvUa",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2019-11-05T16:21:15.775Z",
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
  'f788b7db-100b-472e-9585-bbfc282372e9',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 05 Nov 2019 16:21:15 GMT',
  'ETag',
  'W/"13854415818951501776"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  '7fa1146daca52b4cde2048a1b43ef754',
  'Content-Length',
  '458',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=Y6I9P7fiR6iIe0Q8StCs8nuhwV0AAAAAQUIPAAAAAAAgCF5GYLgYvXE7sGgkq5nz; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=umXaPFpq+CMloyS7YMlkBAAAAAAm6xo1xw93ILLcs2sH+KOl; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=2m1dL41052cHr9Wu+yiYA3uhwV0AAAAA97l9JFOGZLE4vl8//aXT2Q==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '8-11689144-11689148 NNNN CT(90 89 0) RT(1572970874960 20) q(0 0 2 -1) r(4 4) U5',
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
    "createdAt": "2019-11-05T16:21:14.265Z",
    "createdBy": {
      "sys": {
        "id": "33kZDXNajFNmbngiu5MvUa",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2019-11-05T16:21:16.314Z",
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
  'f788b7db-100b-472e-9585-bbfc282372e9',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 05 Nov 2019 16:21:16 GMT',
  'ETag',
  'W/"7395899588297249580"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '1ca38061931916edb5b59a65e8d02e8d',
  'Content-Length',
  '459',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=ysrsi2ghTnqijmctyvau0HuhwV0AAAAAQUIPAAAAAABwulv4NI2CMPLf7kqqEEtP; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=HkZ/YHUzBnJ28u51YMlkBAAAAAChPAmlEXnFZc4UfSYW3aPY; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=JPRsNVARZHqNr9Wu+yiYA3uhwV0AAAAAPgfO0PJoBwOClQqKS5nFew==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '9-13661276-13661286 NNNN CT(89 90 0) RT(1572970875487 24) q(0 0 1 -1) r(3 3) U5',
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
    "createdAt": "2019-11-05T16:21:14.265Z",
    "createdBy": {
      "sys": {
        "id": "33kZDXNajFNmbngiu5MvUa",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2019-11-05T16:21:16.795Z",
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
  'f788b7db-100b-472e-9585-bbfc282372e9',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 05 Nov 2019 16:21:16 GMT',
  'ETag',
  'W/"14849391663753137384"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  '51f9f42fe1c027ec91962d46796be15e',
  'Content-Length',
  '446',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=m/uoMwOAQdWhctG881GeN3yhwV0AAAAAQUIPAAAAAACic4eHYlwjpklC6IzNKDUA; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=EK/BX0KreRhnXRipYMlkBAAAAACrhp/VayKFN95zSlKGgGyr; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=e0l0SaRxRUYVsNWu+yiYA3yhwV0AAAAAQ6iR7nM8hg1Bz/Xi0Q/8QQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '10-18161361-18161366 NNNN CT(88 89 0) RT(1572970875984 15) q(0 0 2 -1) r(4 4) U5',
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
    "createdAt": "2019-11-05T16:21:14.265Z",
    "createdBy": {
      "sys": {
        "id": "33kZDXNajFNmbngiu5MvUa",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2019-11-05T16:21:16.795Z",
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
  'f788b7db-100b-472e-9585-bbfc282372e9',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 05 Nov 2019 16:21:17 GMT',
  'ETag',
  'W/"7198198014190912004"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'a1d0fb7d68875bc6f5ef9397cb64d0b1',
  'Content-Length',
  '434',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=hXB99pP7SDG2ydTOZgZvhXyhwV0AAAAAQUIPAAAAAADtzFgwkXoEuXPK6B3gocEz; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=AP9wHazKdHSTPLI8YMlkBAAAAAD+a4qxCZooF2zbsd07HEiZ; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=6VYXNZYHOjpusNWu+yiYA3yhwV0AAAAAGbvWSgAezrLjYHU6FEJO+Q==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '8-11689526-11689533 NNNN CT(87 89 0) RT(1572970876459 18) q(0 0 2 -1) r(3 3) U5',
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
  'f788b7db-100b-472e-9585-bbfc282372e9',
  'CF-Space-Id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 05 Nov 2019 16:21:17 GMT',
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
  '1cabfb64238808dc28aadb2a57ed5a54',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=3MsUdTe7TIWFWU2cqCPG8H2hwV0AAAAAQUIPAAAAAACtQzhj8aA9f+G1kutLvSII; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=MAAjGt0DvlVttMDQYMlkBAAAAACB7LNxlfljc6Px7HJh9Qi9; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=SVYKBMXcSQvTsNWu+yiYA32hwV0AAAAAgtzt8yckhw+c7fdU+nr22A==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '10-18161729-18161740 NNNN CT(94 93 0) RT(1572970876935 25) q(0 0 2 -1) r(3 3) U5',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked' ]);


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
        "createdAt":"2019-11-05T16:20:10Z",
        "updatedAt":"2019-11-05T16:20:10Z"
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
  'Tue, 05 Nov 2019 16:21:18 GMT',
  'ETag',
  'W/"2b0c8e96e339dccd6df23362e7011c06"',
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
  '790b6f86b9c019b52723376f0713e237',
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
  'visid_incap_673446=PJq92r8ORJGUEh3mgnRr6H2hwV0AAAAAQUIPAAAAAABJejNaXFhzZ9iQUCvJxjNu; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=JX6UWLfiOEpvJH2hYMlkBAAAAABGXbuKMKJ9YPXZvFpBU8gP; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=k+L6CYvT0n0psdWu+yiYA32hwV0AAAAA7hXNAJ2b1ghwEZM30+LopQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '10-18161882-18161893 NNNN CT(87 88 0) RT(1572970877389 21) q(0 0 1 -1) r(2 2) U5',
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
    "updatedAt": "2019-11-05T16:21:18.639Z",
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
  'f788b7db-100b-472e-9585-bbfc282372e9',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 05 Nov 2019 16:21:18 GMT',
  'ETag',
  'W/"7612182098699855421"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  '1c9e798b5892dca4bd977130c8a3c560',
  'Content-Length',
  '472',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=boQy5pUdRfSS3GDtKm8e+H6hwV0AAAAAQUIPAAAAAACibuqogBYHciLhYkZddjcJ; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=pIl1CuB6kipHn5irYMlkBAAAAADRBGa6vTlb+hPqBvml7sJ4; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=NOixE3OCLwiosdWu+yiYA36hwV0AAAAARStw2aI4jpa9/GIOeJtHog==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '9-13661933-13661943 NNNN CT(88 89 0) RT(1572970877822 24) q(0 0 2 -1) r(4 4) U5',
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
    "updatedAt": "2019-11-05T16:21:19.123Z",
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
  'f788b7db-100b-472e-9585-bbfc282372e9',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 05 Nov 2019 16:21:19 GMT',
  'ETag',
  'W/"335809934014856261"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '70915a4dbe1fc9077f1712aae8692939',
  'Content-Length',
  '471',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=G9m59N7VTmGzHy8zGfGaUn6hwV0AAAAAQUIPAAAAAAA2urBYEYY+SyjSw+GdOVzu; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=vkowWI6g5TVQyoDMYMlkBAAAAABwD5SpovZ7aWh58pFTqN2d; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=h8GSEO8ZhgkNstWu+yiYA36hwV0AAAAAbJCSRi2RwERwYy3LKmdWZg==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '10-18162205-18162219 NNNN CT(96 89 0) RT(1572970878306 15) q(0 0 2 -1) r(3 3) U5',
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
    "updatedAt": "2019-11-05T16:21:19.613Z",
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
  'f788b7db-100b-472e-9585-bbfc282372e9',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 05 Nov 2019 16:21:19 GMT',
  'ETag',
  'W/"1396964265548584084"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  '008bb147c57d434745f01eebc711103f',
  'Content-Length',
  '471',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=h00D59LPQgqUQPh35wNsPX+hwV0AAAAAQUIPAAAAAAA4Qe4Hu2818762XDCfx4Iq; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=upXZMRdbTVRfGIbnYMlkBAAAAAB2UhxesEoLFwCDmB7GXpqu; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=m6kcbzy6QV2astWu+yiYA3+hwV0AAAAA4URtPSmlcE/uGI8j1x94ng==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '5-9439056-9439059 NNNN CT(87 88 0) RT(1572970878789 21) q(0 0 1 -1) r(3 3) U5',
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
    "updatedAt": "2019-11-05T16:21:20.121Z",
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
  'f788b7db-100b-472e-9585-bbfc282372e9',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 05 Nov 2019 16:21:20 GMT',
  'ETag',
  'W/"10778357487839311562"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'b3cb7ba27d5f954b3b73fd7475f0e06d',
  'Content-Length',
  '471',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=mCRNiUIHRfqa1reu560Cl3+hwV0AAAAAQUIPAAAAAABwm4RWMqht2rIAWj9Zeg82; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=9QEBR/m1809g0uT+YMlkBAAAAAByTFsYprzwsfl3iTPX/XWE; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=ORHTLkLLE0r+stWu+yiYA3+hwV0AAAAA2f2Vop2acZQL86G/b1EkfQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '7-7503111-7503121 NNNN CT(87 89 0) RT(1572970879305 21) q(0 0 2 -1) r(3 3) U5',
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
    "updatedAt": "2019-11-05T16:21:20.637Z",
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
  'f788b7db-100b-472e-9585-bbfc282372e9',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 05 Nov 2019 16:21:20 GMT',
  'ETag',
  'W/"949302046888871246"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  '93bf6d2758b0e5eb0b9829fb0f7396bf',
  'Content-Length',
  '458',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=yPFzppc+TEGZX/iAv9QDoIChwV0AAAAAQUIPAAAAAAB6RISqpoRxUrBWqMYQQBtu; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=6z8TYw0awVJity3zYMlkBAAAAAAqNLPjeNg+J1zhg4XB3Gi1; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=gB2fQr+sTml/s9Wu+yiYA4ChwV0AAAAAUrUJDk2PqOD7oAAghGAs9A==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '10-18162821-18162829 NNNN CT(88 88 0) RT(1572970879812 24) q(0 0 2 -1) r(3 3) U5',
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
    "updatedAt": "2019-11-05T16:21:20.637Z",
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
  'f788b7db-100b-472e-9585-bbfc282372e9',
  'CF-Space-Id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Date',
  'Tue, 05 Nov 2019 16:21:21 GMT',
  'ETag',
  'W/"15463302615234817477"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'c36cd3e7d06e42c142fab338d3591c2a',
  'Content-Length',
  '447',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=3fQH7MaJQnymtwguaVJ9bYChwV0AAAAAQUIPAAAAAADzqhoMgBGbmwgeQ4U0eb+/; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=nHHUGey1MWrJLPXxYMlkBAAAAADj9Qvl0tAQlXa6kSAqw3dR; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=Ly5HFKoRCVzus9Wu+yiYA4ChwV0AAAAAaGVatIMDyGDWJbWiNpII5g==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '7-7503328-7503332 NNNN CT(87 91 0) RT(1572970880260 14) q(0 0 2 -1) r(3 3) U5',
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
  'Tue, 05 Nov 2019 16:21:21 GMT',
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
  'fcc879d8485736caadcf7a0067197e12',
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
  'visid_incap_673446=U0sPSnx3TdyV5U0UALSDroGhwV0AAAAAQUIPAAAAAABdqhkbEnEq+RMAdvF73ZJa; expires=Wed, 04 Nov 2020 00:28:35 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=yU6/avjivCbq/hSGYMlkBAAAAAD+1vnWTmrAeksdrXhUAt00; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_259_673446=E4b5KK+tMkjBtNWu+yiYA4GhwV0AAAAAAPDTxhAQ5b1zIIppn4l+Aw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '9-13662838-13662848 NNNN CT(88 90 0) RT(1572970880673 21) q(0 0 2 -1) r(8 8) U5',
  'X-CDN',
  'Incapsula' ]);
