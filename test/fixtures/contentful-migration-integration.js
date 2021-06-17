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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-organization-id',
  '3ubGFD1MWA6VgVYbIwSBg8',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'gatekeeper',
  'Date',
  'Mon, 19 Apr 2021 15:36:29 GMT',
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
  '648ef34d815aa90d23deb81081f01f31',
  'x-contentful-route',
  '/spaces/:id',
  'x-download-options',
  'noopen',
  'x-permitted-cross-domain-policies',
  'none',
  'x-xss-protection',
  '1; mode=block',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=WeEWAw5kQ/CM5/lzrpezaHyjfWAAAAAAQUIPAAAAAACv1gLNi2FfU4MTc0+ODUl1; expires=Tue, 19 Apr 2022 07:59:36 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=+WmpVRlxAX1ZE4mtKsJtVwAAAAB96OQATm9ooGlvcQwONe2W; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=dJVFFLk11xBIUY3RfEFwB3yjfWAAAAAAatnvLEANQPc4X2Jngms2ww==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '9-2613976-2613983 NNYY CT(91 184 0) RT(1618846588774 36) q(0 0 0 -1) r(1 1) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration', {"name":"env-integration"})
  .reply(201, {"name":"env-integration","sys":{"type":"Environment","id":"env-integration","version":1,"space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"status":{"sys":{"type":"Link","linkType":"Status","id":"queued"}},"createdBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"createdAt":"2021-04-19T15:36:31Z","updatedBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"updatedAt":"2021-04-19T15:36:31Z"}}, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-organization-id',
  '3ubGFD1MWA6VgVYbIwSBg8',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'gatekeeper',
  'Date',
  'Mon, 19 Apr 2021 15:36:31 GMT',
  'etag',
  'W/"9d7a3a7e570ea18e43b539bcb5b1b9ec"',
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
  '7bfa607785ea615aa08ceb1b532ac326',
  'x-contentful-route',
  '/spaces/:space_id/environments/:id',
  'x-download-options',
  'noopen',
  'x-permitted-cross-domain-policies',
  'none',
  'x-xss-protection',
  '1; mode=block',
  'Content-Length',
  '707',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=4Biyjv5YTTOSLzBx2ufyz3+jfWAAAAAAQUIPAAAAAADrhyg0OOnGzxlGTBkNuwLf; expires=Tue, 19 Apr 2022 07:59:36 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=veFXNHWNxWyjCP8DKsJtVwAAAACtoI95Al0dEEIECHg6zOgX; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=8HsQPffhdCo2Uo3RfEFwB3+jfWAAAAAAdqJBBip1YgeRhL3P1p6syA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  'X-Iinfo',
  '1-2645023-2645024 NNNN CT(97 97 0) RT(1618846589009 39) q(0 0 2 -1) r(21 21) U5'
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
    "createdAt":"2021-04-19T15:36:31Z",
    "updatedBy":{
      "sys":{
        "type":"Link",
        "linkType":"User",
        "id":"1Y7O5FbAkPYgNvD0MpQoAE"
      }
    },
    "updatedAt":"2021-04-19T15:36:32Z"
  }
}

, [
  'accept-ranges',
  'bytes',
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-organization-id',
  '3ubGFD1MWA6VgVYbIwSBg8',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'gatekeeper',
  'Date',
  'Mon, 19 Apr 2021 15:36:33 GMT',
  'etag',
  'W/"2211cca97a6a9b64243173dc3f281e74"',
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
  'b202e70eba13a04f5a5de0bdada514bb',
  'x-contentful-route',
  '/spaces/:space_id/environments/:id',
  'x-download-options',
  'noopen',
  'x-permitted-cross-domain-policies',
  'none',
  'x-xss-protection',
  '1; mode=block',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=BBdv6sN+QYSXqk30ewc1R4CjfWAAAAAAQUIPAAAAAADv4u3dM8WpbiIMqSuBDQFH; expires=Tue, 19 Apr 2022 07:59:36 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=p4cRVh20LU7Y9utUKsJtVwAAAADtKsURglPLsbuzFofD27Or; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=fhi2dXh/cx0DU43RfEFwB4CjfWAAAAAABRM+KMdNKsvIA4bnrrSXiw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '1-2645204-2645213 NNYN CT(98 215 0) RT(1618846591186 60) q(0 0 3 -1) r(13 13) U5'
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:36:34 GMT',
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
  '85bee0f17efedbaada5388979e5f5f69',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=NHk14uXiQNqGxzUXydm8wIGjfWAAAAAAQUIPAAAAAADHYWgDV2U/dBjlzIhiMm80; expires=Tue, 19 Apr 2022 07:59:36 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=pbISCg6u0y4oXRXLKsJtVwAAAABuZgenfWj9yjpMvkCSXeUq; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=s1xHbt5tgwKCU43RfEFwB4GjfWAAAAAAb8Xbm51cCf0I4tqYdkCB1A==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '1-2645349-2645352 NNYY CT(97 98 0) RT(1618846592590 29) q(0 0 0 -1) r(7 7) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/locales')
  .query({"limit":"100","order":"sys.createdAt","skip":"0"})
  .reply(200, {
  "sys": {
    "type": "Array"
  },
  "total": 1,
  "skip": 0,
  "limit": 100,
  "items": [
    {
      "name": "U.S. English",
      "internal_code": "en-US",
      "code": "en-US",
      "fallbackCode": null,
      "default": true,
      "contentManagementApi": true,
      "contentDeliveryApi": true,
      "optional": false,
      "sys": {
        "type": "Locale",
        "id": "0zK7OynpqVdcSetOBfe5P8",
        "version": 1,
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "bohepdihyxin"
          }
        },
        "environment": {
          "sys": {
            "type": "Link",
            "linkType": "Environment",
            "id": "env-integration",
            "uuid": "f9178c19-de73-40a3-bcd8-6104e54364f3"
          }
        },
        "createdAt": "2021-04-19T15:36:31Z",
        "updatedAt": "2021-04-19T15:36:31Z"
      }
    }
  ]
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:36:34 GMT',
  'etag',
  '"3933806265352844587"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '014f1a928e7c7e3444e9eed754d043c4',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/locales',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=YwbG1OpNRM2DxehgXw1IaYGjfWAAAAAAQUIPAAAAAABxh6ASsZIBjU7nT9ZgNFfQ; expires=Tue, 19 Apr 2022 07:59:36 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=nyJ2YWv0SHIO+9YUKsJtVwAAAACbkgOJ5JWouh12wbKww/6q; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=7FN1cZ6WFjarU43RfEFwB4GjfWAAAAAAOelYWIu8fAgV7ECsHIU9PQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '1-2645418-2645422 NNYY CT(88 183 0) RT(1618846593423 33) q(0 0 0 -1) r(2 2) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/dog', {"name":"angry dog","fields":[{"id":"woofs","name":"woof woof","type":"Number","required":true}],"description":"super angry"})
  .reply(201, {"sys":{"space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"id":"dog","type":"ContentType","createdAt":"2021-04-19T15:36:35.371Z","updatedAt":"2021-04-19T15:36:35.371Z","environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}},"createdBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"updatedBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"publishedCounter":0,"version":1},"displayField":null,"name":"angry dog","description":"super angry","fields":[{"id":"woofs","name":"woof woof","type":"Number","localized":false,"required":true,"validations":[],"disabled":false,"omitted":false}]}, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:36:35 GMT',
  'etag',
  '"6074897308001272279"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  '3b7416157a120d31109a8d9d88e5ccd8',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:id',
  'Content-Length',
  '1051',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=LaIdEqO4TZS6qA4F5La364KjfWAAAAAAQUIPAAAAAADbbtHMoZqRJec7zrE2tnve; expires=Tue, 19 Apr 2022 07:59:36 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=FUN1bIGeyx0HknwzKsJtVwAAAAAqKgx/EoxFfoNkPYOTVHuM; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=vc8rKTv5h2NIVI3RfEFwB4KjfWAAAAAAp0zPeApsmsmGzIwT6vewuA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  'X-Iinfo',
  '0-1400126-1400129 NNNY CT(97 215 0) RT(1618846593729 31) q(0 0 0 -1) r(10 10) U5'
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
    "createdAt": "2021-04-19T15:36:35.371Z",
    "updatedAt": "2021-04-19T15:36:36.189Z",
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
    "firstPublishedAt": "2021-04-19T15:36:36.189Z",
    "publishedAt": "2021-04-19T15:36:36.189Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:36:36 GMT',
  'etag',
  'W/"12564102961141423258"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '147c64ac49129501d89663565d0b01a9',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:id/published',
  'Content-Length',
  '442',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=d2I89HaiQrWem/ZKDCYAXoOjfWAAAAAAQUIPAAAAAAAnObFd2Mfgdpb1B3IGlOaX; expires=Tue, 19 Apr 2022 07:59:36 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=aGMULfgzd0grn047KsJtVwAAAADfDFtKdQW15MILvgE8Ngi1; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=6mcBUGgTi3rHVI3RfEFwB4OjfWAAAAAAaxiVbaCkh/yMrsn7lgUE6Q==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  'X-Iinfo',
  '1-2645567-2645571 NNNY CT(97 97 0) RT(1618846594764 30) q(0 0 0 -1) r(8 8) U5'
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
    "createdAt": "2021-04-19T15:36:35.371Z",
    "updatedAt": "2021-04-19T15:36:36.189Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 1,
    "publishedAt": "2021-04-19T15:36:36.189Z",
    "firstPublishedAt": "2021-04-19T15:36:36.189Z",
    "createdBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:36:36 GMT',
  'etag',
  'W/"5422781104980762728"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '04d974ceabd6a4af8b4768108cff9b3b',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:id',
  'Content-Length',
  '444',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=3uqMGKa7TG6tyxV9ykLQxYOjfWAAAAAAQUIPAAAAAADC4pFk8HYRWa9rELptLXTy; expires=Tue, 19 Apr 2022 07:59:35 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=IwIQJ5SnwUGp0bckKsJtVwAAAAAVuwPQH7TMyuE5WFG9Ig1T; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=Iyq9JUFCgCsYVY3RfEFwB4OjfWAAAAAAL7uKmWx7CUY3HnoRMHAptg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  'X-Iinfo',
  '5-3051613-3051620 NNNY CT(94 202 0) RT(1618846595596 60) q(0 0 0 -1) r(3 3) U5'
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
        "createdAt": "2021-04-19T15:36:35.371Z",
        "updatedAt": "2021-04-19T15:36:36.189Z",
        "environment": {
          "sys": {
            "id": "env-integration",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 1,
        "publishedAt": "2021-04-19T15:36:36.189Z",
        "firstPublishedAt": "2021-04-19T15:36:36.189Z",
        "createdBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "1Y7O5FbAkPYgNvD0MpQoAE"
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:36:42 GMT',
  'etag',
  'W/"11678742117362329937"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '16fe3d51cab73c547f4b25fd0034bd8d',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types',
  'Content-Length',
  '514',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=Hb9vxICFQqaRqAPRmUmupomjfWAAAAAAQUIPAAAAAABHR6gP4/nssHd/cN4/yxil; expires=Tue, 19 Apr 2022 07:59:36 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=jXYyAN1lMm+S70vSKsJtVwAAAADGD7Ztyu4THb6GBzggdswH; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=kTztEZqjoj9aWI3RfEFwB4mjfWAAAAAA0rW0bG4ONuu1Wb27u7PEgA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  'X-Iinfo',
  '9-2614924-2614927 NNNY CT(88 180 0) RT(1618846601069 39) q(0 0 0 -1) r(5 5) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/locales')
  .query({"limit":"100","order":"sys.createdAt","skip":"0"})
  .reply(200, {
  "sys": {
    "type": "Array"
  },
  "total": 1,
  "skip": 0,
  "limit": 100,
  "items": [
    {
      "name": "U.S. English",
      "internal_code": "en-US",
      "code": "en-US",
      "fallbackCode": null,
      "default": true,
      "contentManagementApi": true,
      "contentDeliveryApi": true,
      "optional": false,
      "sys": {
        "type": "Locale",
        "id": "0zK7OynpqVdcSetOBfe5P8",
        "version": 1,
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "bohepdihyxin"
          }
        },
        "environment": {
          "sys": {
            "type": "Link",
            "linkType": "Environment",
            "id": "env-integration",
            "uuid": "f9178c19-de73-40a3-bcd8-6104e54364f3"
          }
        },
        "createdAt": "2021-04-19T15:36:31Z",
        "updatedAt": "2021-04-19T15:36:31Z"
      }
    }
  ]
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:36:43 GMT',
  'etag',
  '"3933806265352844587"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '27e361afb758eddf8a618a711ab18999',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/locales',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=1rr2jEt2SeuyVBFJggLIT4qjfWAAAAAAQUIPAAAAAADog7FaCkfOn/aQCATbWZ+W; expires=Tue, 19 Apr 2022 07:59:37 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=Uzxtcfk73SnmP4MuKsJtVwAAAAD1J4duCnfh2eqsU086q9M6; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=czgDLtKH8ym+WI3RfEFwB4qjfWAAAAAAH3de1E80dgefBPlzW78dJA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '6-1174178-1174186 NNYN CT(89 96 0) RT(1618846601976 45) q(0 0 2 -1) r(3 3) U5'
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
    "createdAt": "2021-04-19T15:36:35.371Z",
    "updatedAt": "2021-04-19T15:36:43.720Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 1,
    "publishedAt": "2021-04-19T15:36:36.189Z",
    "firstPublishedAt": "2021-04-19T15:36:36.189Z",
    "createdBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:36:43 GMT',
  'etag',
  'W/"13989767104426340474"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  'fccaf2a8fc3f8d2f3366d5084feda9c0',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:id',
  'Content-Length',
  '448',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=leAKiGK7S8+ME8IVOYPHcoqjfWAAAAAAQUIPAAAAAACp74xXFS398fDQ8Th71GGI; expires=Tue, 19 Apr 2022 07:59:36 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=4siHBh050xetoA0qKsJtVwAAAABHIAKOeDaJJXbZ62PhWOAZ; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=HsNgD9tN1REJWY3RfEFwB4qjfWAAAAAAfP6X1YxMfHVApRgjiepS8w==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  'X-Iinfo',
  '1-2646361-2646373 NNNN CT(92 93 0) RT(1618846602453 51) q(0 0 1 -1) r(4 4) U5'
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
    "createdAt": "2021-04-19T15:36:35.371Z",
    "updatedAt": "2021-04-19T15:36:44.150Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 3,
    "publishedAt": "2021-04-19T15:36:44.150Z",
    "firstPublishedAt": "2021-04-19T15:36:36.189Z",
    "createdBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:36:44 GMT',
  'etag',
  'W/"15948545799204004645"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '72a2048065ca85c871ec3059a3a44e6c',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:id/published',
  'Content-Length',
  '455',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=Ws37eDyFQXKMPIDBZ6DPxoujfWAAAAAAQUIPAAAAAAALHJXfw8chfleXXym4lLcn; expires=Tue, 19 Apr 2022 07:59:35 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=ZJxmGcomQmLI3ikbKsJtVwAAAACtO1YzNXoQoIbfrOzMkcMF; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=caafarJxQCZHWY3RfEFwB4ujfWAAAAAAcEUfHECiRNGA0DDtSYMhQQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  'X-Iinfo',
  '5-3052333-3052340 NNNY CT(97 97 0) RT(1618846603121 42) q(0 0 0 -1) r(3 3) U5'
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
    "createdAt": "2021-04-19T15:36:35.371Z",
    "updatedAt": "2021-04-19T15:36:45.449Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 3,
    "publishedAt": "2021-04-19T15:36:44.150Z",
    "firstPublishedAt": "2021-04-19T15:36:36.189Z",
    "createdBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:36:45 GMT',
  'etag',
  'W/"16733299341229630598"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  '2882c44fd1953f4bcd729e3852e6d91f',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:id',
  'Content-Length',
  '375',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=wYxkxm+XReO69zNCXuHztYyjfWAAAAAAQUIPAAAAAAAy6wAD6dF8+U8P1J+evLME; expires=Tue, 19 Apr 2022 07:59:36 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=bAL+WkNzHXaxt0V2KsJtVwAAAABo0OyXkFm9Qq43QKu46qqN; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=ROZvYLfmyDIRWo3RfEFwB4yjfWAAAAAAemOZ7nEZBAJrEKaThFrFGg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  'X-Iinfo',
  '7-1681841-1681844 NNNY CT(94 95 0) RT(1618846603829 39) q(0 0 0 -1) r(9 9) U5'
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
    "createdAt": "2021-04-19T15:36:35.371Z",
    "updatedAt": "2021-04-19T15:36:46.405Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 5,
    "publishedAt": "2021-04-19T15:36:46.405Z",
    "firstPublishedAt": "2021-04-19T15:36:36.189Z",
    "createdBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:36:47 GMT',
  'etag',
  'W/"7313988473839330542"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '5f8cf49922b86d11c77416712a9416b1',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:id/published',
  'Content-Length',
  '371',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=IvAqKN4pT8S8bFjNn9GuM46jfWAAAAAAQUIPAAAAAADJBiCFWT8TT0k9JrjjxH1n; expires=Tue, 19 Apr 2022 07:59:36 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=WZVHAxRjmCyOh5ogKsJtVwAAAAAh3QodDa0YFyUf28TcOMrh; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=7kJ5BuhRHzcDW43RfEFwB46jfWAAAAAAniZRfjJkrYw3aKBMte8qvA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  'X-Iinfo',
  '2-3350799-3350802 NNNN CT(97 97 0) RT(1618846604769 37) q(0 0 2 -1) r(16 16) U5'
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
    "createdAt": "2021-04-19T15:36:35.371Z",
    "updatedAt": "2021-04-19T15:36:46.405Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 5,
    "publishedAt": "2021-04-19T15:36:46.405Z",
    "firstPublishedAt": "2021-04-19T15:36:36.189Z",
    "createdBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:36:47 GMT',
  'etag',
  'W/"7313988473839330542"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '1c4de0e11a035b7cfcdb6c3a2b27ad9d',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:id',
  'Content-Length',
  '371',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=jloihcSMRv6VP/RlEiS/kY6jfWAAAAAAQUIPAAAAAADreDAj+ZjfM88Ot7zfh618; expires=Tue, 19 Apr 2022 07:59:36 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=/xLwEQdPDyHoZSNSKsJtVwAAAADwfhdyGlwZnxb6kaIcuKHA; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=4MRZO6cCJDsuW43RfEFwB46jfWAAAAAAlXoVu25+l3mDlqsHFxdUKQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  'X-Iinfo',
  '4-1533036-1533039 NNNY CT(97 98 0) RT(1618846606563 42) q(0 0 0 -1) r(2 2) U5'
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
        "createdAt": "2021-04-19T15:36:35.371Z",
        "updatedAt": "2021-04-19T15:36:46.405Z",
        "environment": {
          "sys": {
            "id": "env-integration",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 5,
        "publishedAt": "2021-04-19T15:36:46.405Z",
        "firstPublishedAt": "2021-04-19T15:36:36.189Z",
        "createdBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "1Y7O5FbAkPYgNvD0MpQoAE"
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:36:48 GMT',
  'etag',
  'W/"12330812163208935580"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  '9772e93c334dd60adfbad58ad0252101',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types',
  'Content-Length',
  '436',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=yw3L2p1zSsy+UYtT233OVo+jfWAAAAAAQUIPAAAAAAANN46WIpozzqP6XqIzLeEg; expires=Tue, 19 Apr 2022 07:59:36 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=q444Six3wmmawzttKsJtVwAAAABHJPxIkrqx3G+Rn+TbV40e; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=C+PjQ3uw8RCIW43RfEFwB4+jfWAAAAAAlN15kJo2vwspBgcI5tDrSg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  'X-Iinfo',
  '7-1682009-1682012 NNNY CT(88 178 0) RT(1618846606908 39) q(0 0 0 -1) r(4 4) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/locales')
  .query({"limit":"100","order":"sys.createdAt","skip":"0"})
  .reply(200, {
  "sys": {
    "type": "Array"
  },
  "total": 1,
  "skip": 0,
  "limit": 100,
  "items": [
    {
      "name": "U.S. English",
      "internal_code": "en-US",
      "code": "en-US",
      "fallbackCode": null,
      "default": true,
      "contentManagementApi": true,
      "contentDeliveryApi": true,
      "optional": false,
      "sys": {
        "type": "Locale",
        "id": "0zK7OynpqVdcSetOBfe5P8",
        "version": 1,
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "bohepdihyxin"
          }
        },
        "environment": {
          "sys": {
            "type": "Link",
            "linkType": "Environment",
            "id": "env-integration",
            "uuid": "f9178c19-de73-40a3-bcd8-6104e54364f3"
          }
        },
        "createdAt": "2021-04-19T15:36:31Z",
        "updatedAt": "2021-04-19T15:36:31Z"
      }
    }
  ]
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:36:48 GMT',
  'etag',
  '"3933806265352844587"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'e65912bfd8c876745afe54a3237fa519',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/locales',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=Kpv+n4XbTLuuf6SBA3TaT4+jfWAAAAAAQUIPAAAAAADu28sd6gwJ4bvn/zgwkM5r; expires=Tue, 19 Apr 2022 07:59:36 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=F/CbMXsASSMk+TVpKsJtVwAAAAB5+Xwu37xXRMUwPUesqzXm; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=j0uiCWiPnwLqW43RfEFwB4+jfWAAAAAAVMAMd9AT48r38vtx6SjTnQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '0-1400807-1400808 NNYN CT(93 187 0) RT(1618846607417 26) q(0 0 3 -1) r(5 5) U5'
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
    "createdAt": "2021-04-19T15:36:35.371Z",
    "updatedAt": "2021-04-19T15:36:49.634Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 5,
    "publishedAt": "2021-04-19T15:36:46.405Z",
    "firstPublishedAt": "2021-04-19T15:36:36.189Z",
    "createdBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:36:49 GMT',
  'etag',
  'W/"10433708283156547741"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '0265e69d7dcdf38e1c7dd32daf4d2a89',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:id',
  'Content-Length',
  '498',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=Hw2QI2UIRjyVRmmlguWi95GjfWAAAAAAQUIPAAAAAABb7XzgBviAbcZ7ReKV0BLZ; expires=Tue, 19 Apr 2022 07:59:36 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=aGwxfnMR0S4QPMpkKsJtVwAAAABn/uZpXqHGwOh86557yMi+; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=Dy4FKWTI1AuMXI3RfEFwB5GjfWAAAAAAejTq2+WGCssxuG0f2G2dlw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  'X-Iinfo',
  '3-994446-994447 NNNN CT(94 95 0) RT(1618846608027 28) q(0 0 2 -1) r(11 11) U5'
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
    "createdAt": "2021-04-19T15:36:35.371Z",
    "updatedAt": "2021-04-19T15:36:50.708Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 7,
    "publishedAt": "2021-04-19T15:36:50.708Z",
    "firstPublishedAt": "2021-04-19T15:36:36.189Z",
    "createdBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:36:51 GMT',
  'etag',
  'W/"15222939371409526493"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '60f50c1be622e9c83cde3653084b44ba',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:id/published',
  'Content-Length',
  '494',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=il8Yd456TZ2IqiZu5ZiE/ZKjfWAAAAAAQUIPAAAAAAAjwKHaxW0xwEGKHAFymXCO; expires=Tue, 19 Apr 2022 07:59:36 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=PRRaHciHHHP4HnBtKsJtVwAAAACKyWWRQYAphDZcHwoUvDzG; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=q6vuRNJIuAswXY3RfEFwB5KjfWAAAAAANtjVfAXp20aqEajJUfX8Yg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  'X-Iinfo',
  '4-1533150-1533156 NNNY CT(94 95 0) RT(1618846609246 38) q(0 0 0 -1) r(11 11) U5'
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
    "createdAt": "2021-04-19T15:36:35.371Z",
    "updatedAt": "2021-04-19T15:36:50.708Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 7,
    "publishedAt": "2021-04-19T15:36:50.708Z",
    "firstPublishedAt": "2021-04-19T15:36:36.189Z",
    "createdBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:36:51 GMT',
  'etag',
  'W/"15222939371409526493"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'c28cde6042f1cdb7ffd3f248e3bb29a3',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:id',
  'Content-Length',
  '494',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=pCg6r4ZwRCuwjFXl8zX77JKjfWAAAAAAQUIPAAAAAADZCegDjFtqGcaXcj0qyue+; expires=Tue, 19 Apr 2022 07:59:36 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=8gtyUDLJPyIRl3oLKsJtVwAAAACkDyg5APkrKOgen0Dp7mnX; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=sKAxZ1rO8zlZXY3RfEFwB5KjfWAAAAAAouqxFJ2gJQPGKnpjyUSCMw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  'X-Iinfo',
  '2-3351319-3351322 NNNY CT(91 91 0) RT(1618846610406 35) q(0 0 0 -1) r(2 2) U5'
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
        "createdAt": "2021-04-19T15:36:35.371Z",
        "updatedAt": "2021-04-19T15:36:50.708Z",
        "environment": {
          "sys": {
            "id": "env-integration",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 7,
        "publishedAt": "2021-04-19T15:36:50.708Z",
        "firstPublishedAt": "2021-04-19T15:36:36.189Z",
        "createdBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "1Y7O5FbAkPYgNvD0MpQoAE"
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:36:51 GMT',
  'etag',
  'W/"7164446802684345610"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  '8d5abf43f20a3f64b189ab9709504b0a',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types',
  'Content-Length',
  '557',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=gLPKRWGtSPmmh9sgNpwXeZOjfWAAAAAAQUIPAAAAAABLBGszUyDNTvyNNaS2DMRg; expires=Tue, 19 Apr 2022 07:59:36 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=1UsLc5tu02T1y/jhKsJtVwAAAADotqTROPbDCZBUGjFkdxAa; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=PHS1XtgVDTWTXY3RfEFwB5OjfWAAAAAAXJNgh+zVoI1xj3muaYL6xA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  'X-Iinfo',
  '10-6809612-6809620 NNNN CT(89 92 0) RT(1618846610726 34) q(0 0 2 -1) r(4 4) U5'
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
    "createdAt": "2021-04-19T15:36:36.277Z",
    "createdBy": {
      "sys": {
        "id": "1Y7O5FbAkPYgNvD0MpQoAE",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2021-04-19T15:36:51.081Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:36:52 GMT',
  'etag',
  '"10914776104721653193"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'f545c5117941450a38d38dc1b272bdcc',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:content_type/editor_interface',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=PoJ7TtKZRsOGtGw452nogJOjfWAAAAAAQUIPAAAAAAD1gXbQ9A+reXmnQaXdkthh; expires=Tue, 19 Apr 2022 07:59:36 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=ozVCeBJQWnD4IoEOKsJtVwAAAAB2/JIqsuqe1VjT1fTdRQWj; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=fyrdVwi+VgDRXY3RfEFwB5OjfWAAAAAAzVn2Z9HN2KvWWy1HUFziVg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '4-1533243-1533246 NNYY CT(91 90 0) RT(1618846611190 26) q(0 0 0 -1) r(1 1) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/locales')
  .query({"limit":"100","order":"sys.createdAt","skip":"0"})
  .reply(200, {
  "sys": {
    "type": "Array"
  },
  "total": 1,
  "skip": 0,
  "limit": 100,
  "items": [
    {
      "name": "U.S. English",
      "internal_code": "en-US",
      "code": "en-US",
      "fallbackCode": null,
      "default": true,
      "contentManagementApi": true,
      "contentDeliveryApi": true,
      "optional": false,
      "sys": {
        "type": "Locale",
        "id": "0zK7OynpqVdcSetOBfe5P8",
        "version": 1,
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "bohepdihyxin"
          }
        },
        "environment": {
          "sys": {
            "type": "Link",
            "linkType": "Environment",
            "id": "env-integration",
            "uuid": "f9178c19-de73-40a3-bcd8-6104e54364f3"
          }
        },
        "createdAt": "2021-04-19T15:36:31Z",
        "updatedAt": "2021-04-19T15:36:31Z"
      }
    }
  ]
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:36:52 GMT',
  'etag',
  '"3933806265352844587"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  'a8cfa286417fd45ddb30f25a1aba4b11',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/locales',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=cJw1BS7oRr2SD06yqCISWpOjfWAAAAAAQUIPAAAAAAAS9RpKtTRfoEwyBbqfdiyk; expires=Tue, 19 Apr 2022 07:59:36 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=XfMrR4CPxnTdJFwmKsJtVwAAAAAVE46R6wBSc4yUvXWE4NR2; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=4IkZULcy/DAdXo3RfEFwB5OjfWAAAAAAAtrxEact4SXWQXMS77Xbkw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '1-2647134-2647138 NNYN CT(97 98 0) RT(1618846611436 40) q(0 0 2 -1) r(4 4) U5'
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
    "createdAt": "2021-04-19T15:36:35.371Z",
    "updatedAt": "2021-04-19T15:36:53.033Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 7,
    "publishedAt": "2021-04-19T15:36:50.708Z",
    "firstPublishedAt": "2021-04-19T15:36:36.189Z",
    "createdBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:36:53 GMT',
  'etag',
  'W/"719761621368242258"',
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
  '286623c530e58c813c24646774f0278e',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:id',
  'Content-Length',
  '503',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=fUYbhzh9Q1CS5wD+MAbxfpSjfWAAAAAAQUIPAAAAAAC+z0HSJurnriTpVe8f5ClR; expires=Tue, 19 Apr 2022 07:59:36 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=USYQY7uB4HlnlannKsJtVwAAAACdRBD2spGr1zVmWWdvDW7h; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=2PCCMShVaFFtXo3RfEFwB5SjfWAAAAAAxbn7xOfCa9ZTZmoC0p7Oqg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  'X-Iinfo',
  '2-3351488-3351495 NNNY CT(94 95 0) RT(1618846611930 38) q(0 0 0 -1) r(3 3) U5'
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
    "createdAt": "2021-04-19T15:36:35.371Z",
    "updatedAt": "2021-04-19T15:36:53.852Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 9,
    "publishedAt": "2021-04-19T15:36:53.852Z",
    "firstPublishedAt": "2021-04-19T15:36:36.189Z",
    "createdBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:36:53 GMT',
  'etag',
  'W/"11350542152114028222"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'ca984ac7156ed2769c7031be100998fd',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:id/published',
  'Content-Length',
  '499',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=aGbegHRWTgOnqNcohBLTVJWjfWAAAAAAQUIPAAAAAABZCUgCseYLViErbWZ+uvwi; expires=Tue, 19 Apr 2022 07:59:35 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=Q32RGkIdt2jO8CydKsJtVwAAAAA4/bYG44MfpXf2zyxl6/m7; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=2PSkY/6jCQE9X43RfEFwB5WjfWAAAAAAI8+lgFalMINRSPMwYvpSzA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  'X-Iinfo',
  '5-3053174-3053188 NNNN CT(95 94 0) RT(1618846612684 36) q(0 0 2 -1) r(4 4) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/dog/editor_interface', {"controls":[{"fieldId":"aDifferentId"}]})
  .reply(200, {"controls":[{"fieldId":"aDifferentId"}],"sys":{"id":"default","type":"EditorInterface","space":{"sys":{"id":"bohepdihyxin","type":"Link","linkType":"Space"}},"version":6,"createdAt":"2021-04-19T15:36:36.277Z","createdBy":{"sys":{"id":"1Y7O5FbAkPYgNvD0MpQoAE","type":"Link","linkType":"User"}},"updatedAt":"2021-04-19T15:36:54.459Z","updatedBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"contentType":{"sys":{"id":"dog","type":"Link","linkType":"ContentType"}},"environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}}}}, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:36:54 GMT',
  'etag',
  '"8527829756692612313"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '5ed2c1654237b2688ff8c21659a2f313',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:content_type/editor_interface',
  'Content-Length',
  '922',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=18LP/MDkTTGmFrWEKWOu4pWjfWAAAAAAQUIPAAAAAAAhPZq5w2Wpl5cRP30MnIm8; expires=Tue, 19 Apr 2022 07:59:35 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=1x99XryWk2gQ0H9aKsJtVwAAAAA1aO+9D1uTkIlBiO01aauF; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=M4GFYL7vf3idX43RfEFwB5WjfWAAAAAAEQWgD94woLDZhgqknrpClA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  'X-Iinfo',
  '8-1948419-1948428 NNNN CT(94 117 0) RT(1618846613255 36) q(0 0 3 -1) r(4 4) U5'
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
    "createdAt": "2021-04-19T15:36:35.371Z",
    "updatedAt": "2021-04-19T15:36:54.775Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 9,
    "publishedAt": "2021-04-19T15:36:53.852Z",
    "firstPublishedAt": "2021-04-19T15:36:36.189Z",
    "createdBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:36:54 GMT',
  'etag',
  'W/"16433078203113347624"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  '9453e96597d45be26f7a753798e80836',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:id',
  'Content-Length',
  '496',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=L26d/EgISEGlSP5korsJjJajfWAAAAAAQUIPAAAAAABC3DeHtaBhu5XEaSMveBG0; expires=Tue, 19 Apr 2022 07:59:36 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=ztjNVddwBFr04jwAKsJtVwAAAAD1OT28wSJB/fP7U7E2cycr; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=acC/N2ZKhArfX43RfEFwB5ajfWAAAAAA0YIeK19peGQrRfI2vZzGjg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  'X-Iinfo',
  '10-6810472-6810480 NNNY CT(91 87 0) RT(1618846613769 31) q(0 0 0 -1) r(2 2) U5'
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
    "createdAt": "2021-04-19T15:36:35.371Z",
    "updatedAt": "2021-04-19T15:36:55.282Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 11,
    "publishedAt": "2021-04-19T15:36:55.282Z",
    "firstPublishedAt": "2021-04-19T15:36:36.189Z",
    "createdBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:36:55 GMT',
  'etag',
  'W/"6525880788283376918"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '1b9941735e7c7aebdb3d6a37d5ee6227',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:id/published',
  'Content-Length',
  '492',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=BGDzaPeqTv+goujj4pikOJajfWAAAAAAQUIPAAAAAABrD3yN/oGkB9XDMuk0DWFI; expires=Tue, 19 Apr 2022 07:59:36 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=nFw1f+CnzAEx425rKsJtVwAAAAA8hEeOpoelmESC6wz/4bvv; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=aWZdBG3+Nh5OYI3RfEFwB5ajfWAAAAAAJr68umUNcxPxvZ/Qzf26fA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  'X-Iinfo',
  '4-1533354-1533356 NNNN CT(90 90 0) RT(1618846614110 45) q(0 0 2 -1) r(5 5) U5'
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
    "createdAt": "2021-04-19T15:36:35.371Z",
    "updatedAt": "2021-04-19T15:36:55.282Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 11,
    "publishedAt": "2021-04-19T15:36:55.282Z",
    "firstPublishedAt": "2021-04-19T15:36:36.189Z",
    "createdBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:36:55 GMT',
  'etag',
  'W/"6525880788283376918"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  'b50b5e69e238954bb3ffa3ca083d55c3',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:id',
  'Content-Length',
  '492',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=gkwJNhRcQ8+Ab9X1bnNI/JejfWAAAAAAQUIPAAAAAAD1CYhvEXsSvuWM44Tm0+p2; expires=Tue, 19 Apr 2022 07:59:36 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=ItAAZr6stx1O6SsRKsJtVwAAAAD/aYYhUH8AEHfb4d/dAp9W; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=8icJLl3IZ2adYI3RfEFwB5ejfWAAAAAAAQY4Bc0YAqPNaPsJg5HaEw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  'X-Iinfo',
  '0-1401113-1401121 NNNN CT(90 89 0) RT(1618846614663 33) q(0 0 2 -1) r(4 4) U5'
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
        "createdAt": "2021-04-19T15:36:35.371Z",
        "updatedAt": "2021-04-19T15:36:55.282Z",
        "environment": {
          "sys": {
            "id": "env-integration",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 11,
        "publishedAt": "2021-04-19T15:36:55.282Z",
        "firstPublishedAt": "2021-04-19T15:36:36.189Z",
        "createdBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "1Y7O5FbAkPYgNvD0MpQoAE"
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:36:56 GMT',
  'etag',
  'W/"5597308970130354234"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'b2fad39a91b6e1ce4cfdbc57e6a060ac',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types',
  'Content-Length',
  '557',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=qCdNf0I1SIGqEco9ydFA9pejfWAAAAAAQUIPAAAAAABwKVWFKgad843H3OzfZgMF; expires=Tue, 19 Apr 2022 07:59:36 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=BFaCM7f0dwJV+Ec3KsJtVwAAAAAkd/Uo8/twVF/fzuO0ZtbZ; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=iEzMFiMhAFrUYI3RfEFwB5ejfWAAAAAAjX6Xj8s6AC8o7atmEf41aQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  'X-Iinfo',
  '10-6810797-6810810 NNNY CT(87 91 0) RT(1618846615146 33) q(0 0 0 -1) r(3 3) U5'
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:36:56 GMT',
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
  '09ec869a1b74e3fc7ea2a9185bddd9fc',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/entries',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=h/0vJzVdT6mV8KtcGnhb/pejfWAAAAAAQUIPAAAAAAD6NwUfmn7JcQxq8y4Jz1Rn; expires=Tue, 19 Apr 2022 07:59:35 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=WB1rUsaJaBJEZeVMKsJtVwAAAAABHbIcGN0XfhRJAMR+aBAS; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=i7vBCQn0R2oiYY3RfEFwB5ejfWAAAAAAAgb/R8Ue8ytGwvsrK8qpTw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '5-3053424-3053429 NNYN CT(92 93 0) RT(1618846615470 45) q(0 0 2 -1) r(3 3) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/locales')
  .query({"limit":"100","order":"sys.createdAt","skip":"0"})
  .reply(200, {
  "sys": {
    "type": "Array"
  },
  "total": 1,
  "skip": 0,
  "limit": 100,
  "items": [
    {
      "name": "U.S. English",
      "internal_code": "en-US",
      "code": "en-US",
      "fallbackCode": null,
      "default": true,
      "contentManagementApi": true,
      "contentDeliveryApi": true,
      "optional": false,
      "sys": {
        "type": "Locale",
        "id": "0zK7OynpqVdcSetOBfe5P8",
        "version": 1,
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "bohepdihyxin"
          }
        },
        "environment": {
          "sys": {
            "type": "Link",
            "linkType": "Environment",
            "id": "env-integration",
            "uuid": "f9178c19-de73-40a3-bcd8-6104e54364f3"
          }
        },
        "createdAt": "2021-04-19T15:36:31Z",
        "updatedAt": "2021-04-19T15:36:31Z"
      }
    }
  ]
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:36:57 GMT',
  'etag',
  '"3933806265352844587"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '9a5c42e1739cdd1aa7842c995fff6e9d',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/locales',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=7reaBIgBTeu24LiS3rWt1JijfWAAAAAAQUIPAAAAAACEmlmUyEHi1eKVPKbSbezL; expires=Tue, 19 Apr 2022 07:59:36 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=yZFGfQMLen1JsDn2KsJtVwAAAAAsFA0qI3Yb0RO4bb55MVqW; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=BCkoUZxdYTlgYY3RfEFwB5ijfWAAAAAA8IdrP5usUawR3GFjHqZ1Cw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '9-2615924-2615939 NNYN CT(93 93 0) RT(1618846615947 41) q(0 0 2 -1) r(4 4) U5'
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
    "createdAt": "2021-04-19T15:36:35.371Z",
    "updatedAt": "2021-04-19T15:36:57.632Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "firstPublishedAt": "2021-04-19T15:36:36.189Z",
    "createdBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:36:57 GMT',
  'etag',
  'W/"7446118712777185642"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  '250f4d2d1d03cc6243c608f35e1d1cf8',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:id/published',
  'Content-Length',
  '466',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=L/K0/wRSQiOqTeUsCDkRL5mjfWAAAAAAQUIPAAAAAAB0zdEawPGy/3zwLGhY4j1i; expires=Tue, 19 Apr 2022 07:59:36 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=W7w0YVPEoU4VhJMKKsJtVwAAAABC7mZqOFH3icnkvgmPNy6S; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=eopobNt5aXazYY3RfEFwB5mjfWAAAAAAGKF8FoaqwltHWn3iL06jQw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  'X-Iinfo',
  '0-1401223-1401226 NNNN CT(97 97 0) RT(1618846616412 62) q(0 0 2 -1) r(7 7) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .delete('/spaces/bohepdihyxin/environments/env-integration/content_types/dog')
  .reply(204, "", [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:36:58 GMT',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'd55953d3b2dda47974fe5b80a459bce1',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:id',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=dZZEAxTRRhmiLvEuDaz9CZmjfWAAAAAAQUIPAAAAAAAr1Mx3WYn3ArQ11aNm8gag; expires=Tue, 19 Apr 2022 07:59:36 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=KjsJNO56fU2bSt9KKsJtVwAAAADUTtvKzypcqK5NmKdLig7r; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=nDCPUKtaRBQEYo3RfEFwB5mjfWAAAAAA42mRN/Hf5fIQ8m5KInWlgw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  'X-Iinfo',
  '2-3352411-3352416 NNNY CT(90 90 0) RT(1618846617227 30) q(0 0 0 -1) r(3 3) U5'
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
  "requestId": "bec032ad185e41809ff0c940ee5bb67d"
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:36:58 GMT',
  'etag',
  '"3733673347936308600"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  'bec032ad185e41809ff0c940ee5bb67d',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:id',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=fZnx4b0cSZarvtBPnPba05mjfWAAAAAAQUIPAAAAAACLccSdCAxKR06QlABypyNg; expires=Tue, 19 Apr 2022 07:59:36 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=QnYcHlFYsjZ8Z2yCKsJtVwAAAADIoiZqcbdEnPTU8dcKMTAi; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=AVgpAw7QBmgqYo3RfEFwB5mjfWAAAAAAiSsMuFHOuQFtw7U7kpC2kg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '10-6811324-6811333 NNYY CT(90 90 0) RT(1618846617705 40) q(0 0 0 -1) r(2 2) U5'
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:36:59 GMT',
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
  '87254f6ae70c6f59e9faf9133c03c185',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=Bd7IrJE2R0Wnyw7bXIb67ZqjfWAAAAAAQUIPAAAAAAB9iDYJa2b28/CErQYDnp9p; expires=Tue, 19 Apr 2022 07:59:36 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=69zeMjfNNmB6xMmwKsJtVwAAAACTP99oW3iErZQwFa/bh1P2; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=ZPPwf9NWk3JQYo3RfEFwB5qjfWAAAAAA6A0JVgLnaZxROYWW71jTOw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '2-3352545-3352549 NNYY CT(90 90 0) RT(1618846618101 34) q(0 0 0 -1) r(2 2) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/locales')
  .query({"limit":"100","order":"sys.createdAt","skip":"0"})
  .reply(200, {
  "sys": {
    "type": "Array"
  },
  "total": 1,
  "skip": 0,
  "limit": 100,
  "items": [
    {
      "name": "U.S. English",
      "internal_code": "en-US",
      "code": "en-US",
      "fallbackCode": null,
      "default": true,
      "contentManagementApi": true,
      "contentDeliveryApi": true,
      "optional": false,
      "sys": {
        "type": "Locale",
        "id": "0zK7OynpqVdcSetOBfe5P8",
        "version": 1,
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "bohepdihyxin"
          }
        },
        "environment": {
          "sys": {
            "type": "Link",
            "linkType": "Environment",
            "id": "env-integration",
            "uuid": "f9178c19-de73-40a3-bcd8-6104e54364f3"
          }
        },
        "createdAt": "2021-04-19T15:36:31Z",
        "updatedAt": "2021-04-19T15:36:31Z"
      }
    }
  ]
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:36:59 GMT',
  'etag',
  '"3933806265352844587"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  'c5ce1d4a9459dae395142d5e0085163b',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/locales',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=Ukfzc1qsR7mAJhVdqN5hEJqjfWAAAAAAQUIPAAAAAACDMMaPpPxkvGNpv+DqCiqQ; expires=Tue, 19 Apr 2022 07:59:37 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=U7fRXD0F5nUbBWMtKsJtVwAAAAAnP4v+ZafsrGiW1tJHQwcw; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=FtF8eqFjpEGAYo3RfEFwB5qjfWAAAAAAUIKyL6EuJEz3Rn7Y96eq9A==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '6-1175174-1175179 NNYY CT(97 97 0) RT(1618846618380 42) q(0 0 0 -1) r(2 2) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/dieatary-food', {"name":"Dieatary Food","fields":[{"id":"name","type":"Symbol","name":"name of the food","validations":[{"unique":true},{"prohibitRegexp":{"pattern":"foo","flags":null},"message":"asdf"}]},{"id":"calories","type":"Link","linkType":"Asset","name":"amount of calories the food contains","validations":[{"assetImageDimensions":{"width":{"min":1199,"max":null},"height":{"min":1343}}}]}],"description":"Food with up to 500 calories"})
  .reply(201, {"sys":{"space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"id":"dieatary-food","type":"ContentType","createdAt":"2021-04-19T15:37:00.209Z","updatedAt":"2021-04-19T15:37:00.209Z","environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}},"createdBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"updatedBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"publishedCounter":0,"version":1},"displayField":null,"name":"Dieatary Food","description":"Food with up to 500 calories","fields":[{"id":"name","name":"name of the food","type":"Symbol","localized":false,"required":false,"validations":[{"unique":true},{"prohibitRegexp":{"pattern":"foo","flags":null},"message":"asdf"}],"disabled":false,"omitted":false},{"id":"calories","name":"amount of calories the food contains","type":"Link","localized":false,"required":false,"validations":[{"assetImageDimensions":{"width":{"min":1199,"max":null},"height":{"min":1343}}}],"disabled":false,"omitted":false,"linkType":"Asset"}]}, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:37:00 GMT',
  'etag',
  '"6847214549170984179"',
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
  'd5ae8640fd8ee5d4f37b0ae200ff75f9',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:id',
  'Content-Length',
  '1783',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=GcbSo8LiRkWqEpg0QhGpY5ujfWAAAAAAQUIPAAAAAAABpfficYl7ZahhVsShxZ+J; expires=Tue, 19 Apr 2022 07:59:37 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=eow0K05/8UxizBmaKsJtVwAAAAAgetZiyQPdlBPeCTF9GcjS; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=oZAeJuMfdkz7Yo3RfEFwB5ujfWAAAAAAtX2iULy/Wyo75f3zNwSsYQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  'X-Iinfo',
  '6-1175203-1175207 NNNN CT(95 94 0) RT(1618846618736 32) q(0 0 2 -1) r(8 8) U5'
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
    "createdAt": "2021-04-19T15:37:00.209Z",
    "updatedAt": "2021-04-19T15:37:00.608Z",
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
    "firstPublishedAt": "2021-04-19T15:37:00.608Z",
    "publishedAt": "2021-04-19T15:37:00.608Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:37:00 GMT',
  'etag',
  'W/"3336599682922107392"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'dd130dc24a8dac5ccbb249609ea71466',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:id/published',
  'Content-Length',
  '652',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=it+ziZLuSjOknnjuyFhi8JujfWAAAAAAQUIPAAAAAAAz6HaGyrJ5/eaSNThCR27s; expires=Tue, 19 Apr 2022 07:59:36 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=EKofVC9PPioZXlJgKsJtVwAAAACj/mCrq79YQfMaI+vomrzh; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=V0MrBSV/3XgyY43RfEFwB5ujfWAAAAAAozbMeIUAO81KqU9Z11CKMA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  'X-Iinfo',
  '10-6811692-6811694 NNNY CT(94 97 0) RT(1618846619629 42) q(0 0 0 -1) r(3 3) U5'
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
    "createdAt": "2021-04-19T15:37:00.209Z",
    "updatedAt": "2021-04-19T15:37:00.608Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 1,
    "publishedAt": "2021-04-19T15:37:00.608Z",
    "firstPublishedAt": "2021-04-19T15:37:00.608Z",
    "createdBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:37:01 GMT',
  'etag',
  'W/"13565522388098166444"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '37f7b140e376c7829abbc58697412dcf',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:id',
  'Content-Length',
  '652',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=l6c6FA2FSC+JVE876JA+npyjfWAAAAAAQUIPAAAAAAA9azcanSuDxvqZVVvamfli; expires=Tue, 19 Apr 2022 07:59:36 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=TUv0DswxIx47MtuoKsJtVwAAAABOhp8KbZrvI4lw6IXaW/YG; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=+POtFJWoeENpY43RfEFwB5yjfWAAAAAAQ1EP9EyBH4NigZnHjpxl2g==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  'X-Iinfo',
  '10-6811734-6811736 NNNN CT(94 97 0) RT(1618846619986 38) q(0 0 2 -1) r(3 3) U5'
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:37:01 GMT',
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
  '98b746fa67c9d7feca4c6d13a0240ae4',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=H/5nIM4SRhyzdPvkLvdiVpyjfWAAAAAAQUIPAAAAAAAKdlvkDC90hSx7u+j4a+G3; expires=Tue, 19 Apr 2022 07:59:36 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=32EoInfM7n6QyQF+KsJtVwAAAAATJFo07h5jyHAkOClfkdfX; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=slzqFxHLS2uIY43RfEFwB5yjfWAAAAAAKL+iBo9MctDZJ4oT7cwEJg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '2-3352810-3352816 NNYY CT(87 87 0) RT(1618846620456 35) q(0 0 0 -1) r(2 2) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/locales')
  .query({"limit":"100","order":"sys.createdAt","skip":"0"})
  .reply(200, {
  "sys": {
    "type": "Array"
  },
  "total": 1,
  "skip": 0,
  "limit": 100,
  "items": [
    {
      "name": "U.S. English",
      "internal_code": "en-US",
      "code": "en-US",
      "fallbackCode": null,
      "default": true,
      "contentManagementApi": true,
      "contentDeliveryApi": true,
      "optional": false,
      "sys": {
        "type": "Locale",
        "id": "0zK7OynpqVdcSetOBfe5P8",
        "version": 1,
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "bohepdihyxin"
          }
        },
        "environment": {
          "sys": {
            "type": "Link",
            "linkType": "Environment",
            "id": "env-integration",
            "uuid": "f9178c19-de73-40a3-bcd8-6104e54364f3"
          }
        },
        "createdAt": "2021-04-19T15:36:31Z",
        "updatedAt": "2021-04-19T15:36:31Z"
      }
    }
  ]
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:37:01 GMT',
  'etag',
  '"3933806265352844587"',
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
  'a74e510deeb4634e7a5bc2bba1945264',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/locales',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=Z+9kGGz+Tp6hshfrAqzQ6Z2jfWAAAAAAQUIPAAAAAABr2vcyvVqjF7z8i1Iu8hYR; expires=Tue, 19 Apr 2022 07:59:36 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=SLSTPOZmIROOwlicKsJtVwAAAAC2R5cZTjnH7nXCBY4aMKyq; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=AUU0J9r4kA3OY43RfEFwB52jfWAAAAAANKxVd1xJG/fdvYlJhzuwvg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '9-2616574-2616579 NNYN CT(93 93 0) RT(1618846620721 60) q(0 0 2 -1) r(4 4) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/food', {"name":"foooood","displayField":"taste","fields":[{"id":"taste","type":"Symbol","name":"what it tastes like"}],"description":" well, food"})
  .reply(201, {"sys":{"space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"id":"food","type":"ContentType","createdAt":"2021-04-19T15:37:02.830Z","updatedAt":"2021-04-19T15:37:02.830Z","environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}},"createdBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"updatedBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"publishedCounter":0,"version":1},"displayField":"taste","name":"foooood","description":" well, food","fields":[{"id":"taste","name":"what it tastes like","type":"Symbol","localized":false,"required":false,"validations":[],"disabled":false,"omitted":false}]}, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:37:02 GMT',
  'etag',
  '"6109479645327430637"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '73ce5d37756d42f78dca0c45978dcd8c',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:id',
  'Content-Length',
  '1064',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=pXCGaP75S62SajYOY3OLvp6jfWAAAAAAQUIPAAAAAAA1CXtAN9RSZrUMT+MJdaDA; expires=Tue, 19 Apr 2022 07:59:36 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=TjDvTK2ADk/mndTmKsJtVwAAAAA+w/qR9Z9aP3g5DYgNCpLj; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=omDsY1aS7is9ZI3RfEFwB56jfWAAAAAAnJKfAw6VsFgFkPGPg80lEA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  'X-Iinfo',
  '3-994835-994836 NNNN CT(94 122 0) RT(1618846621279 29) q(0 0 2 -1) r(8 8) U5'
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
    "createdAt": "2021-04-19T15:37:02.830Z",
    "updatedAt": "2021-04-19T15:37:03.177Z",
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
    "firstPublishedAt": "2021-04-19T15:37:03.177Z",
    "publishedAt": "2021-04-19T15:37:03.177Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:37:03 GMT',
  'etag',
  'W/"2906120730005650332"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '97ba8c8d01aff0b75f7bfa269e56058f',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:id/published',
  'Content-Length',
  '447',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=GxWQfOTKT7STotaiHBLvLJ6jfWAAAAAAQUIPAAAAAADgnyvEhc7a9riqO5vrZdx9; expires=Tue, 19 Apr 2022 07:59:35 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=qdEfW04uzxaYaNogKsJtVwAAAABfLRJzXRIFma8jd8rxXspH; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=NW5fWRLPrF9yZI3RfEFwB56jfWAAAAAAj/n1T3HrM+NpJHxBzuGnCg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  'X-Iinfo',
  '5-3054113-3054116 NNNY CT(95 95 0) RT(1618846622192 37) q(0 0 0 -1) r(2 2) U5'
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
        "createdAt": "2021-04-19T15:37:02.830Z",
        "updatedAt": "2021-04-19T15:37:03.177Z",
        "environment": {
          "sys": {
            "id": "env-integration",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 1,
        "publishedAt": "2021-04-19T15:37:03.177Z",
        "firstPublishedAt": "2021-04-19T15:37:03.177Z",
        "createdBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "1Y7O5FbAkPYgNvD0MpQoAE"
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:37:04 GMT',
  'etag',
  'W/"10296715398593645024"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '45816a15f84c3e932fbabc4923faf739',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=8oP/SsRXS56rPaMDT5WX3p+jfWAAAAAAQUIPAAAAAAAPY+Lp+1RE3kHhaLJTivCE; expires=Tue, 19 Apr 2022 07:59:36 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=d2MsTRbXEFr3QX39KsJtVwAAAABP7h8yt1PjVjBlcRx3dIFg; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=rqy/ZsC15hwkZY3RfEFwB5+jfWAAAAAAgmQLvpU+ltCZdhPRMkto7w==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  'X-Iinfo',
  '9-2616678-2616742 NNNY CT(94 96 0) RT(1618846622591 978) q(0 0 0 -1) r(3 3) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/locales')
  .query({"limit":"100","order":"sys.createdAt","skip":"0"})
  .reply(200, {
  "sys": {
    "type": "Array"
  },
  "total": 1,
  "skip": 0,
  "limit": 100,
  "items": [
    {
      "name": "U.S. English",
      "internal_code": "en-US",
      "code": "en-US",
      "fallbackCode": null,
      "default": true,
      "contentManagementApi": true,
      "contentDeliveryApi": true,
      "optional": false,
      "sys": {
        "type": "Locale",
        "id": "0zK7OynpqVdcSetOBfe5P8",
        "version": 1,
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "bohepdihyxin"
          }
        },
        "environment": {
          "sys": {
            "type": "Link",
            "linkType": "Environment",
            "id": "env-integration",
            "uuid": "f9178c19-de73-40a3-bcd8-6104e54364f3"
          }
        },
        "createdAt": "2021-04-19T15:36:31Z",
        "updatedAt": "2021-04-19T15:36:31Z"
      }
    }
  ]
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:37:05 GMT',
  'etag',
  '"3933806265352844587"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  '0b016bc12b4e676740ee2aa6ea09bdd4',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/locales',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=3O8Q9Yp4SDazdB5pBVqOBaCjfWAAAAAAQUIPAAAAAACE6PBdCCWlpeBBU5wyvq/7; expires=Tue, 19 Apr 2022 07:59:36 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=cs/FVCpez3/Fn8VlKsJtVwAAAADUpv4Db1NwmOJMPLYXMCUZ; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=x7yfXJfS7BxhZY3RfEFwB6CjfWAAAAAATlKya/X0MNiwwYjyXkqpSA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '1-2648036-2648042 NNYN CT(92 93 0) RT(1618846623878 31) q(0 0 1 -1) r(3 3) U5'
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
    "createdAt": "2021-04-19T15:37:02.830Z",
    "updatedAt": "2021-04-19T15:37:05.533Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 1,
    "publishedAt": "2021-04-19T15:37:03.177Z",
    "firstPublishedAt": "2021-04-19T15:37:03.177Z",
    "createdBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:37:05 GMT',
  'etag',
  'W/"9394890839099169643"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '316bf1300bcfc6622017832464c8f4c1',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:id',
  'Content-Length',
  '592',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=tfbhRHlZT1KXINjE1IGJi6CjfWAAAAAAQUIPAAAAAAAlZf1QqR91903YxZcxFgTg; expires=Tue, 19 Apr 2022 07:59:36 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=yaANBWS3tw8H9x08KsJtVwAAAACzJYSjIPmAxCfegeLK0Ac/; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=o/RTaW0nZ2KmZY3RfEFwB6CjfWAAAAAAPfM5YayfBo+4866nStTtIA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  'X-Iinfo',
  '9-2616778-2616783 NNNN CT(95 94 0) RT(1618846624329 29) q(0 0 2 -1) r(5 5) U5'
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
    "createdAt": "2021-04-19T15:37:02.830Z",
    "updatedAt": "2021-04-19T15:37:06.218Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 3,
    "publishedAt": "2021-04-19T15:37:06.218Z",
    "firstPublishedAt": "2021-04-19T15:37:03.177Z",
    "createdBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:37:06 GMT',
  'etag',
  'W/"6680600154188121202"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '38c27cae43e04bc1cfda8b1aa3f6e496',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:id/published',
  'Content-Length',
  '598',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=oIqF2fxOT3SwwS/JnPfuo6GjfWAAAAAAQUIPAAAAAABJ/Vq9j7JqT69YUyq4pqhB; expires=Tue, 19 Apr 2022 07:59:37 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=n/KoEMQxZx6qBAfrKsJtVwAAAACtryj5Zaek0/uPyq5Cpxg/; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=tWWBIuWDpUEaZo3RfEFwB6GjfWAAAAAA9ixSiinO9ksnBIVo0SWtbg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  'X-Iinfo',
  '6-1175400-1175403 NNNN CT(112 106 0) RT(1618846624921 40) q(0 0 2 -1) r(6 6) U5'
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
    "createdAt": "2021-04-19T15:37:02.830Z",
    "updatedAt": "2021-04-19T15:37:06.218Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 3,
    "publishedAt": "2021-04-19T15:37:06.218Z",
    "firstPublishedAt": "2021-04-19T15:37:03.177Z",
    "createdBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:37:06 GMT',
  'etag',
  'W/"6680600154188121202"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  '77eaf04f26840ebc04c5bbde0c7dc094',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:id',
  'Content-Length',
  '598',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=BLeACSc+RAio5/HQ9/X/fqGjfWAAAAAAQUIPAAAAAADjUsh7gQwBg2UL0fC1toIk; expires=Tue, 19 Apr 2022 07:59:37 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=wBl1eE2lfkgQ5v9+KsJtVwAAAACuNkWi+CymjbSCaqkdjKhO; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=ApULLkFP5XZAZo3RfEFwB6GjfWAAAAAAQJ1UtblI+2MjY74tWdFUZA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  'X-Iinfo',
  '6-1175461-1175465 NNNY CT(95 95 0) RT(1618846625634 28) q(0 0 0 -1) r(2 2) U5'
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:37:07 GMT',
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
  '504c863ee1b81301ba34832c1a2b4779',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=FN2j0UBJR5iSiiHZu3Q106KjfWAAAAAAQUIPAAAAAACQDr/um7jQ7TE5Q4IV/sWB; expires=Tue, 19 Apr 2022 07:59:36 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=50/jZlfw6Qt7/cK9KsJtVwAAAAByxWiSw7BxWDOhPB9FL6pY; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=iGseKZLa3gTPZo3RfEFwB6KjfWAAAAAALAe+9CKt06fkeSqA6dBCdQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '4-1533815-1533820 NNYN CT(97 98 0) RT(1618846626269 62) q(0 0 2 -1) r(4 4) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/tags')
  .query({"limit":"100","order":"sys.createdAt","skip":"0"})
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:37:08 GMT',
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
  'f7c201d6a59a95ff73db9d4e336c0406',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/tags',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=xpKgzhR3Tu6F0CgdNx4SxaOjfWAAAAAAQUIPAAAAAABTiFtJHC/8trMZfqgbia7s; expires=Tue, 19 Apr 2022 07:59:35 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=4knndPPwN2bDYc+LKsJtVwAAAAAit8gbeZN0BN3bg8Ri/AEI; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=DyXjMW9P1ThAZ43RfEFwB6OjfWAAAAAAgCUku8EEasIMP0tm0HIvkA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '5-3054825-3054832 NNYN CT(92 93 0) RT(1618846627168 39) q(0 0 1 -1) r(3 3) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/locales')
  .query({"limit":"100","order":"sys.createdAt","skip":"0"})
  .reply(200, {
  "sys": {
    "type": "Array"
  },
  "total": 1,
  "skip": 0,
  "limit": 100,
  "items": [
    {
      "name": "U.S. English",
      "internal_code": "en-US",
      "code": "en-US",
      "fallbackCode": null,
      "default": true,
      "contentManagementApi": true,
      "contentDeliveryApi": true,
      "optional": false,
      "sys": {
        "type": "Locale",
        "id": "0zK7OynpqVdcSetOBfe5P8",
        "version": 1,
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "bohepdihyxin"
          }
        },
        "environment": {
          "sys": {
            "type": "Link",
            "linkType": "Environment",
            "id": "env-integration",
            "uuid": "f9178c19-de73-40a3-bcd8-6104e54364f3"
          }
        },
        "createdAt": "2021-04-19T15:36:31Z",
        "updatedAt": "2021-04-19T15:36:31Z"
      }
    }
  ]
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:37:09 GMT',
  'etag',
  '"3933806265352844587"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '1f4a0df4f894711221e8d3e0d4255494',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/locales',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=lvGABhjZReSWvKwX7hQiX6SjfWAAAAAAQUIPAAAAAACFiIOxzQjuxkIr2DnD2S6/; expires=Tue, 19 Apr 2022 07:59:35 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=9EcJfKSMmXbG70XaKsJtVwAAAABuJPZdWiEs5kwr/Qw3AMqC; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=OILWQpLT91vYZ43RfEFwB6SjfWAAAAAAzrVlka6BjosHICG+O/IhMQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '5-3054917-3054959 NNYN CT(88 87 0) RT(1618846627982 436) q(0 0 1 -1) r(3 3) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/person', {"name":"Person","fields":[{"id":"age","name":"Age","type":"Number","required":true},{"id":"fullName","name":"Full name","type":"Symbol","required":true,"localized":true}],"description":"A content type for a person"})
  .reply(201, {"sys":{"space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"id":"person","type":"ContentType","createdAt":"2021-04-19T15:37:10.754Z","updatedAt":"2021-04-19T15:37:10.754Z","environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}},"createdBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"updatedBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"publishedCounter":0,"version":1},"displayField":null,"name":"Person","description":"A content type for a person","fields":[{"id":"age","name":"Age","type":"Number","localized":false,"required":true,"validations":[],"disabled":false,"omitted":false},{"id":"fullName","name":"Full name","type":"Symbol","localized":true,"required":true,"validations":[],"disabled":false,"omitted":false}]}, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:37:10 GMT',
  'etag',
  '"8069992281866921830"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '968ac420d030e00a57dc0ca7f9b343c8',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:id',
  'Content-Length',
  '1269',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=tnfYr9iMRXa5ECj6bmVWgKajfWAAAAAAQUIPAAAAAACwBLuL5CwkAnTSxLOm0k7B; expires=Tue, 19 Apr 2022 07:59:36 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=u4yiF5BKJlCgK0S3KsJtVwAAAABDFXitRiQVfK1qyBvJ8+rd; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=ZLZCAm1pjHuTaI3RfEFwB6ajfWAAAAAAlAZPpbTTVC2tsXxNgRyQYg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  'X-Iinfo',
  '0-1401776-1401784 NNNN CT(92 93 0) RT(1618846629231 359) q(0 0 2 -1) r(5 5) U5'
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
    "createdAt": "2021-04-19T15:37:10.754Z",
    "updatedAt": "2021-04-19T15:37:11.320Z",
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
    "firstPublishedAt": "2021-04-19T15:37:11.320Z",
    "publishedAt": "2021-04-19T15:37:11.320Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:37:11 GMT',
  'etag',
  'W/"12659861139402264356"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'bbaac1b7cce4e92266f546295b4f739d',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:id/published',
  'Content-Length',
  '479',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=wZiMR+F9R5mKE2CZBmut5KajfWAAAAAAQUIPAAAAAABsrVP2AAOe+kf+x7LPI9r6; expires=Tue, 19 Apr 2022 07:59:36 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=x87DSA77XRxaZAEpKsJtVwAAAAAoRJ8dhIPSUDcsP8DQM4d5; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=BvNzJwKMVkHXaI3RfEFwB6ajfWAAAAAA3OPCc18yUWLAJ1JITSne2Q==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  'X-Iinfo',
  '1-2648508-2648512 NNNN CT(92 95 0) RT(1618846630149 28) q(0 0 2 -1) r(5 5) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/animal', {"name":"Animal","fields":[{"id":"species","name":"The species of the animal","type":"Symbol","required":true},{"id":"isFurry","name":"Is this a furry animal","type":"Boolean","required":false}],"description":"An animal"})
  .reply(201, {"sys":{"space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"id":"animal","type":"ContentType","createdAt":"2021-04-19T15:37:12.366Z","updatedAt":"2021-04-19T15:37:12.366Z","environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}},"createdBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"updatedBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"publishedCounter":0,"version":1},"displayField":null,"name":"Animal","description":"An animal","fields":[{"id":"species","name":"The species of the animal","type":"Symbol","localized":false,"required":true,"validations":[],"disabled":false,"omitted":false},{"id":"isFurry","name":"Is this a furry animal","type":"Boolean","localized":false,"required":false,"validations":[],"disabled":false,"omitted":false}]}, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:37:12 GMT',
  'etag',
  '"6154805521412576335"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  'f8aebba4b0e75692e5187823bff9ef76',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:id',
  'Content-Length',
  '1292',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=22TqpdWgS1uNen8xwAPYzqejfWAAAAAAQUIPAAAAAAD+4H+FVovxcb0TbxzE3XQH; expires=Tue, 19 Apr 2022 07:59:36 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=b3BsKqd80gLfcBMuKsJtVwAAAAD1ZNtzHV7Y1l3WjSBNMRFB; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=jDDQBNR/tRhwaY3RfEFwB6ejfWAAAAAA1N8ucH9rW1IZzhqOXE10Ng==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  'X-Iinfo',
  '1-2648566-2648572 NNNY CT(95 94 0) RT(1618846630716 36) q(0 0 0 -1) r(12 12) U5'
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
    "createdAt": "2021-04-19T15:37:12.366Z",
    "updatedAt": "2021-04-19T15:37:13.507Z",
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
    "firstPublishedAt": "2021-04-19T15:37:13.506Z",
    "publishedAt": "2021-04-19T15:37:13.506Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:37:13 GMT',
  'etag',
  'W/"3702243535737925578"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'a73f6f4f2faa44378883a65d5a156ca9',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:id/published',
  'Content-Length',
  '489',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=himf4rJOQGyx2AcrlGT2q6ijfWAAAAAAQUIPAAAAAADt/89QDzXAcVqf4oxmWkVY; expires=Tue, 19 Apr 2022 07:59:36 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=XAdyE5w+4ToO8DU8KsJtVwAAAACwOcH8hhEIX7XkJQ0/1c5Y; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=rnBVQxBrdkjVaY3RfEFwB6ijfWAAAAAA0JyeLjgyXP+UudRSqkxq2w==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  'X-Iinfo',
  '10-6814334-6814343 NNNN CT(92 97 0) RT(1618846632037 36) q(0 0 2 -1) r(8 8) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/tags/longexampletag', {"sys":{"id":"longexampletag","version":0},"name":"long example marketing"})
  .reply(201, {"sys":{"id":"longexampletag","version":1,"space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}},"type":"Tag","createdAt":"2021-04-19T15:37:14.149Z","createdBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"visibility":"private","updatedAt":"2021-04-19T15:37:14.149Z","updatedBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}}},"name":"long example marketing"}, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:37:14 GMT',
  'etag',
  '"7944060464124167048"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '074ef8ea899a51f39b632fd9d42021e2',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/tags/:id',
  'Content-Length',
  '787',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=8SHRnGCrQ+GWlfmnJk9r/amjfWAAAAAAQUIPAAAAAAAMlBxtc5xQ4Z6n0m8M/TUL; expires=Tue, 19 Apr 2022 07:59:37 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=lb/tIBsnIQlu7hncKsJtVwAAAAC/ig7zxlReIh1aOnLlFvkp; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=1TQkXHWv8Gcgao3RfEFwB6mjfWAAAAAAxi9RcJ2tQoH0FUwXfVJMCg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  'X-Iinfo',
  '6-1175744-1175751 NNNN CT(92 94 0) RT(1618846632957 35) q(0 0 2 -1) r(5 5) U5'
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
    "createdAt": "2021-04-19T15:37:10.754Z",
    "updatedAt": "2021-04-19T15:37:15.096Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 1,
    "publishedAt": "2021-04-19T15:37:11.320Z",
    "firstPublishedAt": "2021-04-19T15:37:11.320Z",
    "createdBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:37:15 GMT',
  'etag',
  'W/"12396251403268093617"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  '112585f64107c2a4c78e193f4c986de9',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:id',
  'Content-Length',
  '519',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=27N34rQXRDCMX8fWs11H46qjfWAAAAAAQUIPAAAAAAC2QKxEOUrC8/n/Fj6Ry4LN; expires=Tue, 19 Apr 2022 07:59:37 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=Xe+GXDwxpW5mdj8MKsJtVwAAAAApJi/TvygIhi1hVfcgjNii; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=GPLcY1NQl3ikao3RfEFwB6qjfWAAAAAAWWrLimx0yMo5H2PwSTCbJw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  'X-Iinfo',
  '6-1175807-1175812 NNNN CT(90 90 0) RT(1618846633532 45) q(0 0 2 -1) r(8 8) U5'
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
    "createdAt": "2021-04-19T15:37:10.754Z",
    "updatedAt": "2021-04-19T15:37:16.206Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 3,
    "publishedAt": "2021-04-19T15:37:16.206Z",
    "firstPublishedAt": "2021-04-19T15:37:11.320Z",
    "createdBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:37:16 GMT',
  'etag',
  'W/"17811444992852154951"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '9d5348450577e3e0486aa746ab842818',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:id/published',
  'Content-Length',
  '524',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=PT9CO4dNQTKax3P779pllayjfWAAAAAAQUIPAAAAAADRvBhArwNXozJVu9KKkJcC; expires=Tue, 19 Apr 2022 07:59:37 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=VAA9YhwUIhT5B0qyKsJtVwAAAAC2BKznTrZuk1zzD1jlSReB; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=73QaU8mdi0nAa43RfEFwB6yjfWAAAAAAuFQVk4VfjuQulGQFL4ERZA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  'X-Iinfo',
  '6-1175892-1175896 NNNN CT(92 105 0) RT(1618846634454 29) q(0 0 2 -1) r(16 16) U5'
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
    "createdAt": "2021-04-19T15:37:12.366Z",
    "updatedAt": "2021-04-19T15:37:19.320Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 1,
    "publishedAt": "2021-04-19T15:37:13.506Z",
    "firstPublishedAt": "2021-04-19T15:37:13.506Z",
    "createdBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:37:19 GMT',
  'etag',
  'W/"13716322445154162509"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '06ad8364dc6d11ba36f69e7e7d69354d',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:id',
  'Content-Length',
  '511',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=qErOr2c6SHuY4Y8NI80qYq6jfWAAAAAAQUIPAAAAAADZOM7prlC77ciLZwHV4JzO; expires=Tue, 19 Apr 2022 07:59:36 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=WV51BpujYHiEgUTZKsJtVwAAAABTZjyaENZEHUHpc5SQkxiI; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=pwaxEstQ1ToTbY3RfEFwB66jfWAAAAAAziKFNXA1dczt+Fi9Zpt0tA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  'X-Iinfo',
  '2-3354747-3354819 NNNN CT(97 100 0) RT(1618846637613 349) q(0 0 2 -1) r(6 6) U5'
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
    "createdAt": "2021-04-19T15:37:12.366Z",
    "updatedAt": "2021-04-19T15:37:19.760Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 3,
    "publishedAt": "2021-04-19T15:37:19.760Z",
    "firstPublishedAt": "2021-04-19T15:37:13.506Z",
    "createdBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:37:19 GMT',
  'etag',
  'W/"10624388396138527734"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  '84da1df4e1a70f9f3a9402add5572295',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:id/published',
  'Content-Length',
  '516',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=KgZCXv5hTrqFwaqvyJOpu6+jfWAAAAAAQUIPAAAAAADn5xClM1ZeswTM2rGKcQXd; expires=Tue, 19 Apr 2022 07:59:36 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=T5ZWPHJviRwvwvmiKsJtVwAAAACoqdGNaaNm02Jwa27Goks2; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=a0mCauDghx9YbY3RfEFwB6+jfWAAAAAAtWnCvf/Z76XHO5GVENPRWQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  'X-Iinfo',
  '10-6815837-6815849 NNNY CT(94 95 0) RT(1618846638693 43) q(0 0 0 -1) r(3 3) U5'
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
    "createdAt": "2021-04-19T15:37:10.754Z",
    "updatedAt": "2021-04-19T15:37:16.206Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 3,
    "publishedAt": "2021-04-19T15:37:16.206Z",
    "firstPublishedAt": "2021-04-19T15:37:11.320Z",
    "createdBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:37:20 GMT',
  'etag',
  'W/"17811444992852154951"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '4370c4b7002694d37dbf5b1c2a8f2ff1',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:id',
  'Content-Length',
  '524',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=aizdEeJ2QqiQmLpBSbXi0K+jfWAAAAAAQUIPAAAAAADESvhVI246mBaesOl0u9e5; expires=Tue, 19 Apr 2022 07:59:36 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=nxazd0wXAgbMQdQwKsJtVwAAAAD4/yfDVfAU83isHoMiOFa3; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=EWpmfcWRPzqXbY3RfEFwB6+jfWAAAAAA3TXIjlSi+5g17yrXg9Mz/g==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  'X-Iinfo',
  '3-995342-995344 NNNN CT(94 95 0) RT(1618846639167 31) q(0 0 2 -1) r(4 4) U5'
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
    "createdAt": "2021-04-19T15:37:12.366Z",
    "updatedAt": "2021-04-19T15:37:19.760Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 3,
    "publishedAt": "2021-04-19T15:37:19.760Z",
    "firstPublishedAt": "2021-04-19T15:37:13.506Z",
    "createdBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:37:25 GMT',
  'etag',
  'W/"10624388396138527734"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '0ecf06c9689abac50c3dada4af9f64b5',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:id',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=gSJx/CrPRT+XktxvN/44LbSjfWAAAAAAQUIPAAAAAAAEXRS9LX3Pm/7/8g76hIfM; expires=Tue, 19 Apr 2022 07:59:36 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=ZkQBEG6tlBtK2lvvKsJtVwAAAABhDiECh9GipgwIyVhELIP9; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=WdoyXQ5RICbqcI3RfEFwB7SjfWAAAAAAleXeumHgIzkxHH+8k8R6Lg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  'X-Iinfo',
  '10-6816298-6817038 NNNY CT(87 87 0) RT(1618846640648 3392) q(0 0 0 -1) r(9 9) U5'
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
    "createdAt": "2021-04-19T15:37:14.149Z",
    "updatedAt": "2021-04-19T15:37:14.149Z",
    "version": 1,
    "visibility": "private"
  },
  "name": "long example marketing"
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:37:26 GMT',
  'etag',
  '"1794053179253801396"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'aa9efa58d148864823578251ab4dbb39',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/tags/:id',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=W1/anRFTQFeFSIqVASos87WjfWAAAAAAQUIPAAAAAAAE8mQPXHDtp+Z2NfjfO5q3; expires=Tue, 19 Apr 2022 07:59:36 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=IjVQQZBBTXnD3ajUKsJtVwAAAAC+nYFQPyqasltiWMt1vYTN; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=KdDmNsM4FmCEcY3RfEFwB7WjfWAAAAAA76T9j/m3m5Uf6JVczBk/wA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '2-3355721-3355729 NNYN CT(90 95 0) RT(1618846645011 83) q(0 0 2 -1) r(9 9) U5'
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
        "createdAt": "2021-04-19T15:37:10.754Z",
        "updatedAt": "2021-04-19T15:37:16.206Z",
        "environment": {
          "sys": {
            "id": "env-integration",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 3,
        "publishedAt": "2021-04-19T15:37:16.206Z",
        "firstPublishedAt": "2021-04-19T15:37:11.320Z",
        "createdBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "1Y7O5FbAkPYgNvD0MpQoAE"
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:37:27 GMT',
  'etag',
  'W/"11894420162580793115"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  'f025e8e6f9436065672f94df18e573ba',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types',
  'Content-Length',
  '587',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=v1orwyLFQ4aetrNFHptN4bajfWAAAAAAQUIPAAAAAACp4FCA6MXxD3qMZlsQpYmF; expires=Tue, 19 Apr 2022 07:59:36 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=9b5OS5+7fXUBrv4NKsJtVwAAAADYrGIoQXNc5Py6zK4iBhet; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=KUYfEQzR/GKucY3RfEFwB7ajfWAAAAAAkCiqjkS1FlMbBGhirguqag==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  'X-Iinfo',
  '9-2618419-2618425 NNNY CT(87 87 0) RT(1618846646038 34) q(0 0 0 -1) r(2 2) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/blogpost', {"name":"blog post","fields":[{"name":"title","id":"title","type":"Symbol"},{"name":"category","id":"category","type":"Symbol"}]})
  .reply(201, {"sys":{"space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"id":"blogpost","type":"ContentType","createdAt":"2021-04-19T15:37:28.176Z","updatedAt":"2021-04-19T15:37:28.176Z","environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}},"createdBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"updatedBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"publishedCounter":0,"version":1},"displayField":null,"name":"blog post","description":null,"fields":[{"id":"title","name":"title","type":"Symbol","localized":false,"required":false,"validations":[],"disabled":false,"omitted":false},{"id":"category","name":"category","type":"Symbol","localized":false,"required":false,"validations":[],"disabled":false,"omitted":false}]}, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:37:28 GMT',
  'etag',
  '"3122528295163599636"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '15ccfba176ff5c3c187d96b514ab4403',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:id',
  'Content-Length',
  '1255',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=MRbkjF3eS8WFgiuY96YWNrejfWAAAAAAQUIPAAAAAAAHoqwlqlnDLo1AYPpH3G3O; expires=Tue, 19 Apr 2022 07:59:36 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=24ihLXMQvg5QtIEDKsJtVwAAAAB01UXpglYwbXk9XPqSkL65; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=PKA4FHqFHgFoco3RfEFwB7ejfWAAAAAAkj49qwZM/2iGiygN2wgczQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  'X-Iinfo',
  '10-6817583-6817597 NNNN CT(97 97 0) RT(1618846646323 44) q(0 0 2 -1) r(12 12) U5'
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
    "createdAt": "2021-04-19T15:37:28.176Z",
    "updatedAt": "2021-04-19T15:37:28.639Z",
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
    "firstPublishedAt": "2021-04-19T15:37:28.639Z",
    "publishedAt": "2021-04-19T15:37:28.639Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:37:28 GMT',
  'etag',
  'W/"2030716330310013658"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'a48c5a098b7d0cec26c2947c8face06b',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:id/published',
  'Content-Length',
  '444',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=O6zMoUJOT7K1ZVZ7EkIOUbejfWAAAAAAQUIPAAAAAAC2vQaRgFVY9MGQL3YAkTz/; expires=Tue, 19 Apr 2022 07:59:36 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=CQ5SS0nut0cQ6nraKsJtVwAAAACLAEKXEcXjGr1fOadTz8Rd; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=gzeqZm/x40a/co3RfEFwB7ejfWAAAAAAzhHMLkj65VmawmF0SoIdDA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  'X-Iinfo',
  '2-3355960-3355965 NNNY CT(98 97 0) RT(1618846647659 38) q(0 0 0 -1) r(3 3) U5'
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
    "id": "oQx64E6BtEIiQacfLBYLU",
    "type": "Entry",
    "createdAt": "2021-04-19T15:37:29.678Z",
    "updatedAt": "2021-04-19T15:37:29.678Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:37:29 GMT',
  'etag',
  '"9773205882852185235"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'a4cd425d39b8270d661f3f6eeaf674f2',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/entries',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=TJbYoKXVQNWjFuFmsytqTLmjfWAAAAAAQUIPAAAAAAC/WfGkNlUbjakD+CRAqAmj; expires=Tue, 19 Apr 2022 07:59:35 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=npVPVAFr+kFRHp1bKsJtVwAAAABnCGf/qjmdczk2KvrrM06Z; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=u+SNcWUDwQGkc43RfEFwB7mjfWAAAAAAhT8jqtj/2crWNRkctCdPAA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '5-3056945-3056948 NNYY CT(87 88 0) RT(1618846648118 33) q(0 0 0 -1) r(11 11) U5'
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
    "id": "5MaccYbV9dGqpvjEK5A39k",
    "type": "Entry",
    "createdAt": "2021-04-19T15:37:31.258Z",
    "updatedAt": "2021-04-19T15:37:31.258Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:37:31 GMT',
  'etag',
  '"16688803728738343219"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '7107254673f5bfaa672829acf4905499',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/entries',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=9/lNqKFWRxuEhFOsSfeknLqjfWAAAAAAQUIPAAAAAABUXb7KaOR79bf+0ww/vMys; expires=Tue, 19 Apr 2022 07:59:36 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=w21id7IZNnHG2NppKsJtVwAAAADEdeU4F3TkdT3bY91Q7fRy; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=EWFEFglitWaTdI3RfEFwB7qjfWAAAAAAHuKRrTAEuwpcAJFVgrmQsw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '3-995561-995562 NNYN CT(92 93 0) RT(1618846649272 25) q(0 0 2 -1) r(14 14) U5'
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
        "createdAt": "2021-04-19T15:37:28.176Z",
        "updatedAt": "2021-04-19T15:37:28.639Z",
        "environment": {
          "sys": {
            "id": "env-integration",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 1,
        "publishedAt": "2021-04-19T15:37:28.639Z",
        "firstPublishedAt": "2021-04-19T15:37:28.639Z",
        "createdBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "1Y7O5FbAkPYgNvD0MpQoAE"
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:37:31 GMT',
  'etag',
  'W/"6696644188928408745"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '98d678d76f8ee081da4a607e010f777e',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types',
  'Content-Length',
  '515',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=lpXJ5pqLROmTo+s0kJGbdbujfWAAAAAAQUIPAAAAAAAwLsehXw9XVAa/6+5jrhPS; expires=Tue, 19 Apr 2022 07:59:36 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=9x0SXzEaiRFDFzcNKsJtVwAAAAD+AH8nFlTSV7nQqNlvYCc0; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=XJJGS6JD9jO8dI3RfEFwB7ujfWAAAAAA6mHDmXhbHOIrTacJX3zvyA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  'X-Iinfo',
  '0-1402484-1402487 NNNN CT(90 90 0) RT(1618846650714 40) q(0 0 2 -1) r(4 4) U5'
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
        "id": "oQx64E6BtEIiQacfLBYLU",
        "type": "Entry",
        "createdAt": "2021-04-19T15:37:29.678Z",
        "updatedAt": "2021-04-19T15:37:29.678Z",
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
        "id": "5MaccYbV9dGqpvjEK5A39k",
        "type": "Entry",
        "createdAt": "2021-04-19T15:37:31.258Z",
        "updatedAt": "2021-04-19T15:37:31.258Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:37:32 GMT',
  'etag',
  'W/"15722199192695333049"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '434a2b65b9a1a032f92d6bac33a0f84c',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/entries',
  'Content-Length',
  '480',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=doMyLKyWRJiKXlI84XRgkrujfWAAAAAAQUIPAAAAAAB4hE2fREfxibLNR+xuvOgZ; expires=Tue, 19 Apr 2022 07:59:36 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=T+MnMwZWnG56P48SKsJtVwAAAACTSzMmBtImwtM/LpARsRBr; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=wn8+JFnSxlkkdY3RfEFwB7ujfWAAAAAAojZrjPj6c5QZXCUa+WL4nQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  'X-Iinfo',
  '1-2650143-2650145 NNNN CT(94 95 0) RT(1618846651211 31) q(0 0 2 -1) r(7 7) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/tags')
  .query({"limit":"100","order":"sys.createdAt","skip":"0"})
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
        "id": "longexampletag",
        "type": "Tag",
        "createdAt": "2021-04-19T15:37:14.149Z",
        "updatedAt": "2021-04-19T15:37:14.149Z",
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
        "version": 1,
        "visibility": "private"
      },
      "name": "long example marketing"
    }
  ]
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:37:35 GMT',
  'etag',
  'W/"16447136838785737400"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'ac85cbc5899aacf61f2bef6e40efac80',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/tags',
  'Content-Length',
  '357',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=n2KQxbqQRman7ZDy43Dbqb6jfWAAAAAAQUIPAAAAAAAq5Rc6sJdQ9HDeWpkIbT6h; expires=Tue, 19 Apr 2022 07:59:36 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=UecsB75avTg5Yo04KsJtVwAAAAC2DbiVT0whebdXU0mfIxmy; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=liTnQGBezWpTdo3RfEFwB76jfWAAAAAAoElYtUJvITkMxPBLXJkWBQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  'X-Iinfo',
  '10-6819305-6819316 NNNN CT(89 90 0) RT(1618846653829 39) q(0 0 2 -1) r(4 4) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/locales')
  .query({"limit":"100","order":"sys.createdAt","skip":"0"})
  .reply(200, {
  "sys": {
    "type": "Array"
  },
  "total": 1,
  "skip": 0,
  "limit": 100,
  "items": [
    {
      "name": "U.S. English",
      "internal_code": "en-US",
      "code": "en-US",
      "fallbackCode": null,
      "default": true,
      "contentManagementApi": true,
      "contentDeliveryApi": true,
      "optional": false,
      "sys": {
        "type": "Locale",
        "id": "0zK7OynpqVdcSetOBfe5P8",
        "version": 1,
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "bohepdihyxin"
          }
        },
        "environment": {
          "sys": {
            "type": "Link",
            "linkType": "Environment",
            "id": "env-integration",
            "uuid": "f9178c19-de73-40a3-bcd8-6104e54364f3"
          }
        },
        "createdAt": "2021-04-19T15:36:31Z",
        "updatedAt": "2021-04-19T15:36:31Z"
      }
    }
  ]
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:37:35 GMT',
  'etag',
  '"3933806265352844587"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '985b8830564e856af02b8825f041618f',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/locales',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=xQomUqKbTaCBYP/EgAcZXL6jfWAAAAAAQUIPAAAAAADeXKTVJqP9TubEhLX1kBaL; expires=Tue, 19 Apr 2022 07:59:36 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=YZs3WZ76iDrz6o10KsJtVwAAAABBIwnvb9o0kCKo8aTScJOL; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=SAKiIljUZWqZdo3RfEFwB76jfWAAAAAAfa14Td2MBQMUKnLutKf8fQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '2-3356629-3356636 NNYN CT(89 91 0) RT(1618846654326 38) q(0 0 2 -1) r(4 4) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/entries/oQx64E6BtEIiQacfLBYLU', {"sys":{"id":"oQx64E6BtEIiQacfLBYLU","version":1,"contentType":{"sys":{"type":"Link","linkType":"ContentType","id":"blogpost"}}},"fields":{"title":{"en-US":"hello!"},"category":{"en-US":"hello!"}},"metadata":{"tags":[]}})
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
    "id": "oQx64E6BtEIiQacfLBYLU",
    "type": "Entry",
    "createdAt": "2021-04-19T15:37:29.678Z",
    "updatedAt": "2021-04-19T15:37:36.028Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:37:36 GMT',
  'etag',
  'W/"3151316927592055104"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  'dc7c9d592dfe5b16859d169ac28b9260',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/entries/:id',
  'Content-Length',
  '388',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=FSSNJ1ICQjaaho7Ld5sflb+jfWAAAAAAQUIPAAAAAABBBNGjHKQDVOJ6eDgMNL9r; expires=Tue, 19 Apr 2022 07:59:36 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=CyDidpblFS0Q11UMKsJtVwAAAAD3uDGMy25ma4p+fWwHCjmg; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=IIySG7kXRGffdo3RfEFwB7+jfWAAAAAA755jQ22VE5x2lxi88QA/HA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  'X-Iinfo',
  '7-1684712-1684714 NNNN CT(94 96 0) RT(1618846654830 37) q(0 0 2 -1) r(4 4) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/entries/5MaccYbV9dGqpvjEK5A39k', {"sys":{"id":"5MaccYbV9dGqpvjEK5A39k","version":1,"contentType":{"sys":{"type":"Link","linkType":"ContentType","id":"blogpost"}}},"fields":{"title":{"en-US":"hello!"},"category":{"en-US":"hello!"}},"metadata":{"tags":[]}})
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
    "id": "5MaccYbV9dGqpvjEK5A39k",
    "type": "Entry",
    "createdAt": "2021-04-19T15:37:31.258Z",
    "updatedAt": "2021-04-19T15:37:37.372Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:37:37 GMT',
  'etag',
  'W/"4473575136545870327"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '3b67ff61a8c3cd64a46cee5a9b31b957',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/entries/:id',
  'Content-Length',
  '389',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=qhK+lWfvTd2MdYmFRxbIA8CjfWAAAAAAQUIPAAAAAADR04MgzgFYruIE8e5QVuhO; expires=Tue, 19 Apr 2022 07:59:36 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=mWlXORT8OAUIxhk4KsJtVwAAAADtFrP/2fV/VvQ22pc5JUp7; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=taoTaJJOWV/4d43RfEFwB8CjfWAAAAAAm7sCJacNHRuZUE9fmTfmWg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  'X-Iinfo',
  '10-6819740-6819921 NNNN CT(97 97 0) RT(1618846655501 707) q(0 0 2 -1) r(4 4) U5'
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
        "id": "5MaccYbV9dGqpvjEK5A39k",
        "type": "Entry",
        "createdAt": "2021-04-19T15:37:31.258Z",
        "updatedAt": "2021-04-19T15:37:37.372Z",
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
        "id": "oQx64E6BtEIiQacfLBYLU",
        "type": "Entry",
        "createdAt": "2021-04-19T15:37:29.678Z",
        "updatedAt": "2021-04-19T15:37:36.028Z",
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
  ]
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:37:42 GMT',
  'etag',
  'W/"4481871221655935934"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'ac7c47e73073bb947700d6fea1b2878d',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/entries',
  'Content-Length',
  '511',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=WkTwRkrQTVWH0tY2QEPHHMWjfWAAAAAAQUIPAAAAAADoVwSs4K4ceInkQjLv0Ouo; expires=Tue, 19 Apr 2022 07:59:36 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=yupKOWGmEiF++X+4KsJtVwAAAAAGY/LMSUOMB4Bn83Yb+Yu0; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=hcKzPVJ8s2uceo3RfEFwB8WjfWAAAAAAOrmr6sBww081p7+UsdGhug==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  'X-Iinfo',
  '3-995890-995892 NNNY CT(97 98 0) RT(1618846661084 38) q(0 0 0 -1) r(2 2) U5'
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:37:42 GMT',
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
  '5280c69707995329cad253e1a21d0fb2',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=qiF/cqlQTNmwNxxgdqtRD8ajfWAAAAAAQUIPAAAAAAB/De/TTijgbrLgasF94Dda; expires=Tue, 19 Apr 2022 07:59:36 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=lFD4Da5BnT3ozNiKKsJtVwAAAAAM4Q6yuvwgyYLnYpViIq0v; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=oki7bcY+BBcfe43RfEFwB8ajfWAAAAAA5kFNw5XuPXnPInUUvv6MNQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '7-1685330-1685348 NNYN CT(92 93 0) RT(1618846661418 325) q(0 0 2 -1) r(4 4) U5'
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
  "requestId": "e51a8905b2cd3c7894cf7682a0893e5d"
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:37:43 GMT',
  'etag',
  '"13889031123098289435"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'e51a8905b2cd3c7894cf7682a0893e5d',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:content_type/editor_interface',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=RGL6PoOxSmKZwaue0gYfFMejfWAAAAAAQUIPAAAAAAAI21eJcKwOPA04Mg0A5lpn; expires=Tue, 19 Apr 2022 07:59:36 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=JcSwcc4DdFcWK7zhKsJtVwAAAAAA1ruf+yzfd8pjU5XkItYQ; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=UD55NW9KWSGne43RfEFwB8ejfWAAAAAABBqke3v3JCU1LHD7ZxQwsQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '1-2651416-2651419 NNYN CT(100 125 0) RT(1618846662546 57) q(0 0 2 -1) r(5 5) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/locales')
  .query({"limit":"100","order":"sys.createdAt","skip":"0"})
  .reply(200, {
  "sys": {
    "type": "Array"
  },
  "total": 1,
  "skip": 0,
  "limit": 100,
  "items": [
    {
      "name": "U.S. English",
      "internal_code": "en-US",
      "code": "en-US",
      "fallbackCode": null,
      "default": true,
      "contentManagementApi": true,
      "contentDeliveryApi": true,
      "optional": false,
      "sys": {
        "type": "Locale",
        "id": "0zK7OynpqVdcSetOBfe5P8",
        "version": 1,
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "bohepdihyxin"
          }
        },
        "environment": {
          "sys": {
            "type": "Link",
            "linkType": "Environment",
            "id": "env-integration",
            "uuid": "f9178c19-de73-40a3-bcd8-6104e54364f3"
          }
        },
        "createdAt": "2021-04-19T15:36:31Z",
        "updatedAt": "2021-04-19T15:36:31Z"
      }
    }
  ]
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:37:44 GMT',
  'etag',
  '"3933806265352844587"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '146e24c284f2eeeb6fe7f0528e23b855',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/locales',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=M2oyLtfySyuvILQRAlJAtMejfWAAAAAAQUIPAAAAAACw+yGRMpT0RaoxXBVURJKd; expires=Tue, 19 Apr 2022 07:59:36 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=ORbSPydBEXetS4GcKsJtVwAAAAAjX9AiH+O1Mfvvlig9EdhJ; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=DZPIcmIPcREIfI3RfEFwB8ejfWAAAAAAqq6ID79JErn66kJk1KUkMw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '4-1535627-1535629 NNYN CT(93 92 0) RT(1618846663236 38) q(0 0 2 -1) r(7 7) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/blogPost', {"name":"Blog post","fields":[{"id":"slug","name":"URL Slug","type":"Symbol","required":true}],"description":"super angry"})
  .reply(201, {"sys":{"space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"id":"blogPost","type":"ContentType","createdAt":"2021-04-19T15:37:46.209Z","updatedAt":"2021-04-19T15:37:46.209Z","environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}},"createdBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"updatedBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"publishedCounter":0,"version":1},"displayField":null,"name":"Blog post","description":"super angry","fields":[{"id":"slug","name":"URL Slug","type":"Symbol","localized":false,"required":true,"validations":[],"disabled":false,"omitted":false}]}, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:37:46 GMT',
  'etag',
  '"8480842614885513465"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '019c697f62775acfc9dc389ccddece2c',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:id',
  'Content-Length',
  '1054',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=JN6KIvGzTkKSk70vItrajsmjfWAAAAAAQUIPAAAAAAAi1sW7VgS79jXW7C84pp/E; expires=Tue, 19 Apr 2022 07:59:36 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=LgGJYbu7EHx2H5C9KsJtVwAAAABODoMDda8CnbJn6D0tMhel; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=KsL8afqq8zzafI3RfEFwB8mjfWAAAAAAomTyZQaLihbJChnfJUtEow==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  'X-Iinfo',
  '10-6821617-6821625 NNNN CT(90 92 0) RT(1618846664048 29) q(0 0 2 -1) r(16 16) U5'
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
    "createdAt": "2021-04-19T15:37:46.209Z",
    "updatedAt": "2021-04-19T15:37:47.307Z",
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
    "firstPublishedAt": "2021-04-19T15:37:47.307Z",
    "publishedAt": "2021-04-19T15:37:47.307Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:37:47 GMT',
  'etag',
  'W/"9399433938460018790"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'd2e214e15a88b3ae46959234abc797d1',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:id/published',
  'Content-Length',
  '448',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=xC/VVs2eSh+AwSIe3TWdUcqjfWAAAAAAQUIPAAAAAABjbGGwQx/DMuOL6nTYgpk0; expires=Tue, 19 Apr 2022 07:59:37 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=txxlKEy8OSe52yLjKsJtVwAAAAChxAJkNTYBGHfMJFcAAtk1; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=pilEPHWQRRVtfY3RfEFwB8qjfWAAAAAABNx5tXmw5CqfNVjqsohIyQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  'X-Iinfo',
  '6-1177131-1177132 NNNN CT(94 95 0) RT(1618846665712 43) q(0 0 2 -1) r(9 9) U5'
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
    "createdAt": "2021-04-19T15:37:47.414Z",
    "createdBy": {
      "sys": {
        "id": "1Y7O5FbAkPYgNvD0MpQoAE",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2021-04-19T15:37:47.821Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:37:47 GMT',
  'etag',
  'W/"10308659344580337600"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '180beedb4e034d8b7993901339b24317',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:content_type/editor_interface',
  'Content-Length',
  '382',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=Z/+a5WFlTTKL2K7BiEwu9cujfWAAAAAAQUIPAAAAAABoPWE8cLPprabD17lTnWQ+; expires=Tue, 19 Apr 2022 07:59:36 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=JVC1D4WSY0ye8s7fKsJtVwAAAADQui3QdzRN/s7diLaaobRh; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=Ha3KQqfedUCvfY3RfEFwB8ujfWAAAAAADOrIFoYcCm0t5LtLDSeu9w==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  'X-Iinfo',
  '10-6822274-6822290 NNNY CT(97 98 0) RT(1618846666730 46) q(0 0 0 -1) r(3 3) U5'
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
    "createdAt": "2021-04-19T15:37:47.414Z",
    "createdBy": {
      "sys": {
        "id": "1Y7O5FbAkPYgNvD0MpQoAE",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2021-04-19T15:37:47.821Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:37:48 GMT',
  'etag',
  'W/"18276248937297430944"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '1d8d29c07bb7db10d4a6e54e2eca8bef',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:content_type/editor_interface',
  'Content-Length',
  '369',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=D2vSk/FjSR6/yzV9SJ+jisujfWAAAAAAQUIPAAAAAAB1VKB4dUWrGV87OxbktOch; expires=Tue, 19 Apr 2022 07:59:37 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=lthzEOvfVhN8S9VFKsJtVwAAAADZnS7LRYbbq/b+8vmWIsMt; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=FNdIQnFVpQPvfY3RfEFwB8ujfWAAAAAAoyhUeIMcN6LZKt1Uemd0tQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  'X-Iinfo',
  '6-1177169-1177171 NNNN CT(98 97 0) RT(1618846667123 36) q(0 0 2 -1) r(4 4) U5'
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
        "createdAt": "2021-04-19T15:37:46.209Z",
        "updatedAt": "2021-04-19T15:37:47.307Z",
        "environment": {
          "sys": {
            "id": "env-integration",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 1,
        "publishedAt": "2021-04-19T15:37:47.307Z",
        "firstPublishedAt": "2021-04-19T15:37:47.307Z",
        "createdBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "1Y7O5FbAkPYgNvD0MpQoAE"
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:37:49 GMT',
  'etag',
  'W/"13382073195537094491"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  '75d0618dada21b4b53385c1d2e63db80',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types',
  'Content-Length',
  '518',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=aGt/UegXSNeOX7BPZoDYzMyjfWAAAAAAQUIPAAAAAAAsZrs+G4tGV8qqSBjUimw4; expires=Tue, 19 Apr 2022 07:59:36 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=TYVcXmxSqlz8Pbu4KsJtVwAAAABGQNFLWRMZnM59ipCesGZf; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=1k2fVDAWdhVafo3RfEFwB8yjfWAAAAAAinWv/SXVHTY8vGEO8cx9TA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  'X-Iinfo',
  '9-2620142-2620150 NNNN CT(92 93 0) RT(1618846667620 41) q(0 0 2 -1) r(6 6) U5'
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
    "createdAt": "2021-04-19T15:37:47.414Z",
    "createdBy": {
      "sys": {
        "id": "1Y7O5FbAkPYgNvD0MpQoAE",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2021-04-19T15:37:47.821Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:37:49 GMT',
  'etag',
  'W/"18276248937297430944"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'bf61359f6e4aee9ff2ca15ef919366e5',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:content_type/editor_interface',
  'Content-Length',
  '369',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=zoQsXV/lRGWXcxL89P6uF8yjfWAAAAAAQUIPAAAAAADc3q/lVID5jZM1MVHjq+xZ; expires=Tue, 19 Apr 2022 07:59:36 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=mXAPR3hOFTYjZxCMKsJtVwAAAADcIX76Zzo9zmwPYHRk03wn; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=dVKsFIGhlDCTfo3RfEFwB8yjfWAAAAAAAmylXESIPO8QhWyhgU6eyQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  'X-Iinfo',
  '0-1403272-1403279 NNNN CT(94 95 0) RT(1618846668369 47) q(0 0 2 -1) r(4 4) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/locales')
  .query({"limit":"100","order":"sys.createdAt","skip":"0"})
  .reply(200, {
  "sys": {
    "type": "Array"
  },
  "total": 1,
  "skip": 0,
  "limit": 100,
  "items": [
    {
      "name": "U.S. English",
      "internal_code": "en-US",
      "code": "en-US",
      "fallbackCode": null,
      "default": true,
      "contentManagementApi": true,
      "contentDeliveryApi": true,
      "optional": false,
      "sys": {
        "type": "Locale",
        "id": "0zK7OynpqVdcSetOBfe5P8",
        "version": 1,
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "bohepdihyxin"
          }
        },
        "environment": {
          "sys": {
            "type": "Link",
            "linkType": "Environment",
            "id": "env-integration",
            "uuid": "f9178c19-de73-40a3-bcd8-6104e54364f3"
          }
        },
        "createdAt": "2021-04-19T15:36:31Z",
        "updatedAt": "2021-04-19T15:36:31Z"
      }
    }
  ]
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:37:50 GMT',
  'etag',
  '"3933806265352844587"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  'd38dba580d9b749a63dfc98bf5338716',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/locales',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=dtU6caxSS02yqt78EeGUL82jfWAAAAAAQUIPAAAAAABxwd8Y4yIj1k+e2rgiSEHs; expires=Tue, 19 Apr 2022 07:59:36 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=k5fSfzx0OTDbq4WvKsJtVwAAAABsEyQ4p6EbpGl7MbKv4HIR; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=FvgfBjhiRgfgfo3RfEFwB82jfWAAAAAAArojXAaOtZEAXKlIN31dVg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '4-1535850-1535854 NNYN CT(98 98 0) RT(1618846668880 33) q(0 0 2 -1) r(3 3) U5'
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
    "createdAt": "2021-04-19T15:37:46.209Z",
    "updatedAt": "2021-04-19T15:37:50.420Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 1,
    "publishedAt": "2021-04-19T15:37:47.307Z",
    "firstPublishedAt": "2021-04-19T15:37:47.307Z",
    "createdBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:37:50 GMT',
  'etag',
  'W/"10409733318682520458"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'dc3907bc2809fd4d939802bfa64d836c',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:id',
  'Content-Length',
  '453',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=PF2R7KavREWBy0KJAP2N582jfWAAAAAAQUIPAAAAAADLf8061T2vxktUFRjfv8Nt; expires=Tue, 19 Apr 2022 07:59:36 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=LIEYCvezbQwmqRzUKsJtVwAAAACM/F3P87pKKMJ3hfFkbU1+; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=K3oYZ1xul1MSf43RfEFwB82jfWAAAAAAzW4TslpALoCdhy4pYIPsNQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  'X-Iinfo',
  '1-2651965-2651969 NNNY CT(99 105 0) RT(1618846669364 46) q(0 0 0 -1) r(2 2) U5'
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
    "createdAt": "2021-04-19T15:37:46.209Z",
    "updatedAt": "2021-04-19T15:37:51.488Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 3,
    "publishedAt": "2021-04-19T15:37:51.488Z",
    "firstPublishedAt": "2021-04-19T15:37:47.307Z",
    "createdBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:37:52 GMT',
  'etag',
  'W/"7839238307958838956"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  '7ce225d6d364b6ff7344ac9918f0eeb6',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:id/published',
  'Content-Length',
  '463',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=/jyqlaJgQeiAiSP04o8HP8+jfWAAAAAAQUIPAAAAAADgUfEfobopKrs0dtZIXs3A; expires=Tue, 19 Apr 2022 07:59:36 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=j6GeLaw6yWJn/yA5KsJtVwAAAADDX5Ja0qEKEaw9U1gazpsN; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=opizLWtWrRdAgI3RfEFwB8+jfWAAAAAAWLFXRfNklzpx05NJwliQ3g==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  'X-Iinfo',
  '7-1685806-1685808 NNNN CT(90 90 0) RT(1618846669774 37) q(0 0 1 -1) r(16 16) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/blogPost/editor_interface', {"controls":[]})
  .reply(200, {"controls":[],"sys":{"id":"default","type":"EditorInterface","space":{"sys":{"id":"bohepdihyxin","type":"Link","linkType":"Space"}},"version":4,"createdAt":"2021-04-19T15:37:47.414Z","createdBy":{"sys":{"id":"1Y7O5FbAkPYgNvD0MpQoAE","type":"Link","linkType":"User"}},"updatedAt":"2021-04-19T15:37:53.811Z","updatedBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"contentType":{"sys":{"id":"blogPost","type":"Link","linkType":"ContentType"}},"environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}}}}, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:37:53 GMT',
  'etag',
  '"9666242981242234459"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '2ba0e019fe0dca745b6c9e3ef7e240fb',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:content_type/editor_interface',
  'Content-Length',
  '880',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=1JKUlWo0R5qhEiOXOEV6UdGjfWAAAAAAQUIPAAAAAAAX2eJ2D/RTWnlyBBHdGUvg; expires=Tue, 19 Apr 2022 07:59:35 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=p1/6Mf8xHE6FhL0gKsJtVwAAAAAj+GoVs3B1/mFDjS0grhoV; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=wpDBK+hk0xUygY3RfEFwB9GjfWAAAAAAZmbJCY7qySTfxAe7LUHuVg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  'X-Iinfo',
  '5-3058975-3058976 NNNN CT(113 93 0) RT(1618846671551 32) q(0 0 2 -1) r(15 15) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/blogPost/editor_interface', {"controls":[{"fieldId":"slug","widgetId":"singleLine","widgetNamespace":"builtin"}]})
  .reply(200, {"controls":[{"fieldId":"slug","widgetId":"singleLine","widgetNamespace":"builtin"}],"sys":{"id":"default","type":"EditorInterface","space":{"sys":{"id":"bohepdihyxin","type":"Link","linkType":"Space"}},"version":5,"createdAt":"2021-04-19T15:37:47.414Z","createdBy":{"sys":{"id":"1Y7O5FbAkPYgNvD0MpQoAE","type":"Link","linkType":"User"}},"updatedAt":"2021-04-19T15:37:54.491Z","updatedBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"contentType":{"sys":{"id":"blogPost","type":"Link","linkType":"ContentType"}},"environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}}}}, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:37:54 GMT',
  'etag',
  '"6260784592376977643"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'b1baef0061fd17de032db3c962ce4bec',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:content_type/editor_interface',
  'Content-Length',
  '987',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=QooVqjiuReOAtS/QxnI9qNGjfWAAAAAAQUIPAAAAAACyuti6yHwqXwucWeU9+3JT; expires=Tue, 19 Apr 2022 07:59:36 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=9fBXK4ffrGdCQAyAKsJtVwAAAADunQm0VxKI/yAe5/FjdDhS; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=1DgZdlWT/B2qgY3RfEFwB9GjfWAAAAAAxdPTu3c23CHQd4wCLe/mWA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  'X-Iinfo',
  '0-1403440-1403441 NNNN CT(105 98 0) RT(1618846673123 29) q(0 0 2 -1) r(6 6) U5'
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
    "createdAt": "2021-04-19T15:37:47.414Z",
    "createdBy": {
      "sys": {
        "id": "1Y7O5FbAkPYgNvD0MpQoAE",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2021-04-19T15:37:54.491Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:37:54 GMT',
  'etag',
  '"18282841651743217678"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  '86c31e7e3d70aae03472a0b7dfc1a294',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:content_type/editor_interface',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=Z9b1ICqtTQutpXi6jVFnDtKjfWAAAAAAQUIPAAAAAADJXrop2bmbXCFL9TbVnf2Y; expires=Tue, 19 Apr 2022 07:59:36 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=e5mdVa/63x56PZPJKsJtVwAAAADWDtsZ9v1JmgeNpMcOQW0C; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=KCpfVb4w7nzbgY3RfEFwB9KjfWAAAAAAkeeUMon1xQysr4wCZfH1+A==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '0-1403463-1403465 NNYN CT(90 92 0) RT(1618846673799 32) q(0 0 2 -1) r(4 4) U5'
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
        "createdAt": "2021-04-19T15:37:46.209Z",
        "updatedAt": "2021-04-19T15:37:51.488Z",
        "environment": {
          "sys": {
            "id": "env-integration",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 3,
        "publishedAt": "2021-04-19T15:37:51.488Z",
        "firstPublishedAt": "2021-04-19T15:37:47.307Z",
        "createdBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "1Y7O5FbAkPYgNvD0MpQoAE"
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:37:55 GMT',
  'etag',
  'W/"314571417508767128"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'f9507418df8757ae7e5c048b081e4318',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types',
  'Content-Length',
  '527',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=B9kk+5fOS8OUt8601cjUe9KjfWAAAAAAQUIPAAAAAAB4ZL4qaaMNKkEfrI+HJKXR; expires=Tue, 19 Apr 2022 07:59:37 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=SNs7d16nVDw7pJZ4KsJtVwAAAADUV7NKFzb6sa7nE4iQxCIh; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=gWQFHgLhJE8Wgo3RfEFwB9KjfWAAAAAAx6zEUne7uvP13Z6MoBX9ZQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  'X-Iinfo',
  '6-1177497-1177498 NNNN CT(89 90 0) RT(1618846674287 30) q(0 0 1 -1) r(3 3) U5'
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
    "createdAt": "2021-04-19T15:37:47.414Z",
    "createdBy": {
      "sys": {
        "id": "1Y7O5FbAkPYgNvD0MpQoAE",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2021-04-19T15:37:54.491Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:37:55 GMT',
  'etag',
  '"18282841651743217678"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  '55e6641d3e7a9163f81dc8dadb658bb1',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:content_type/editor_interface',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=lNeJ9fOPSfGpv1dNnWKSNtOjfWAAAAAAQUIPAAAAAACSWfEaNx74gB1fr41Jbyjv; expires=Tue, 19 Apr 2022 07:59:35 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=31KJFPOrNVlHBbp9KsJtVwAAAABxdzn+valh3QvcmWzBmlW7; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=73U6YNo7BQ9bgo3RfEFwB9OjfWAAAAAA8qy0yeLQTX4A+umyabXXaA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '5-3059325-3059329 NNYN CT(92 93 0) RT(1618846674773 45) q(0 0 2 -1) r(3 3) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/locales')
  .query({"limit":"100","order":"sys.createdAt","skip":"0"})
  .reply(200, {
  "sys": {
    "type": "Array"
  },
  "total": 1,
  "skip": 0,
  "limit": 100,
  "items": [
    {
      "name": "U.S. English",
      "internal_code": "en-US",
      "code": "en-US",
      "fallbackCode": null,
      "default": true,
      "contentManagementApi": true,
      "contentDeliveryApi": true,
      "optional": false,
      "sys": {
        "type": "Locale",
        "id": "0zK7OynpqVdcSetOBfe5P8",
        "version": 1,
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "bohepdihyxin"
          }
        },
        "environment": {
          "sys": {
            "type": "Link",
            "linkType": "Environment",
            "id": "env-integration",
            "uuid": "f9178c19-de73-40a3-bcd8-6104e54364f3"
          }
        },
        "createdAt": "2021-04-19T15:36:31Z",
        "updatedAt": "2021-04-19T15:36:31Z"
      }
    }
  ]
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:37:56 GMT',
  'etag',
  '"3933806265352844587"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '7bd1055a45715a5dc1b80bbd2d6f86cf',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/locales',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=/YuQol6YQPqs8ayG7VT4odOjfWAAAAAAQUIPAAAAAACoNJAivJztvOVg3N0HXPtY; expires=Tue, 19 Apr 2022 07:59:36 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=wYKUV3gdeW7dYozIKsJtVwAAAADEKnjRObkFihuEE+XXzZ84; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=MulNWAhcyQqwgo3RfEFwB9OjfWAAAAAAI6YO61J40auTJhxhxLkEeA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '2-3359063-3359064 NNYN CT(89 90 0) RT(1618846675232 29) q(0 0 2 -1) r(4 4) U5'
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
    "createdAt": "2021-04-19T15:37:46.209Z",
    "updatedAt": "2021-04-19T15:37:57.096Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 3,
    "publishedAt": "2021-04-19T15:37:51.488Z",
    "firstPublishedAt": "2021-04-19T15:37:47.307Z",
    "createdBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:37:57 GMT',
  'etag',
  'W/"5653352173520270956"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  'f565335600e92dd93059b3b846f49dad',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:id',
  'Content-Length',
  '467',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=xNRqrQcHSQuOZO2lxj2VjNSjfWAAAAAAQUIPAAAAAAAIjcafiWGPDEc2MWLMyEbT; expires=Tue, 19 Apr 2022 07:59:36 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=KaAkVljGoVqivSodKsJtVwAAAADA8F+xB9QvoopaaLlxo5N5; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=ydOxLsUwDg8zg43RfEFwB9SjfWAAAAAAaa1exmsYYKI+TDQd/guK8Q==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  'X-Iinfo',
  '7-1686092-1686096 NNNN CT(97 98 0) RT(1618846675700 32) q(0 0 2 -1) r(6 6) U5'
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
    "createdAt": "2021-04-19T15:37:46.209Z",
    "updatedAt": "2021-04-19T15:37:57.491Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 5,
    "publishedAt": "2021-04-19T15:37:57.491Z",
    "firstPublishedAt": "2021-04-19T15:37:47.307Z",
    "createdBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:37:57 GMT',
  'etag',
  'W/"16120012666600388172"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'dde64ec90d68f192cb2199314d496d8b',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:id/published',
  'Content-Length',
  '462',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=WpDEgBNbRjugAzOPJ1hF3tSjfWAAAAAAQUIPAAAAAAAXfnLcrvkv2XK3u7jgFSB9; expires=Tue, 19 Apr 2022 07:59:36 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=Xf5QQ9bioRg1Qb4UKsJtVwAAAADQcDkx1tWp8HV+/INNbg8g; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=DOW0EIidvnaCg43RfEFwB9SjfWAAAAAA4Pz8YfQK8kXSxVBiFVZ1Wg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  'X-Iinfo',
  '9-2620812-2620814 NNNY CT(97 97 0) RT(1618846676430 29) q(0 0 0 -1) r(4 4) U5'
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
    "createdAt": "2021-04-19T15:37:47.414Z",
    "createdBy": {
      "sys": {
        "id": "1Y7O5FbAkPYgNvD0MpQoAE",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2021-04-19T15:37:58.014Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:37:58 GMT',
  'etag',
  'W/"6879580386841301117"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  '897315501170a601ac3911329a6a59b8',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:content_type/editor_interface',
  'Content-Length',
  '419',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=1lRuPUo1Rh+85RU/oNUkl9WjfWAAAAAAQUIPAAAAAAB/iprWnd0QPgf/boS6JqB0; expires=Tue, 19 Apr 2022 07:59:36 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=8nD4DjC4dTdFONbjKsJtVwAAAACDYZRV2Sf5f/OkZdugPbO2; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=z7OPckefujK5g43RfEFwB9WjfWAAAAAA7vPy0lBBzuGcVLkwSLes8Q==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  'X-Iinfo',
  '2-3359270-3359278 NNNY CT(99 105 0) RT(1618846676935 43) q(0 0 0 -1) r(3 3) U5'
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
    "createdAt": "2021-04-19T15:37:47.414Z",
    "createdBy": {
      "sys": {
        "id": "1Y7O5FbAkPYgNvD0MpQoAE",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2021-04-19T15:37:58.014Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:37:58 GMT',
  'etag',
  'W/"5746429783414625777"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'f0f9d8bbd46e6fd7fef8318265a7981e',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:content_type/editor_interface',
  'Content-Length',
  '406',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=7GSx6kKJSlmGSEmCZpCGStWjfWAAAAAAQUIPAAAAAAA5sDzdWbws3GXofEAoHTVd; expires=Tue, 19 Apr 2022 07:59:36 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=ip9VdnUdRT7fnDmeKsJtVwAAAABiL+ha4aUczo08YO90X1by; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=+99+ZTJr40b+g43RfEFwB9WjfWAAAAAAALDxe7lMLFh6eZopu56sQg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  'X-Iinfo',
  '10-6824816-6824825 NNNN CT(97 109 0) RT(1618846677323 38) q(0 0 2 -1) r(5 5) U5'
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:37:59 GMT',
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
  '6086301604e820354d803240236577e3',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=WTHb5F+OR6WP1oFz5iNHm9ajfWAAAAAAQUIPAAAAAABN02wsiuqc0/+6Bhw7gcBK; expires=Tue, 19 Apr 2022 07:59:36 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=hXf3bXXDYRwA3E42KsJtVwAAAACH9vUHqP1LScii/sIwJzxi; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=naT0d5KbKzZThI3RfEFwB9ajfWAAAAAAmxrvjQiTrDMw01uic1iTxw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '2-3359370-3359375 NNYN CT(97 97 0) RT(1618846677889 29) q(0 0 2 -1) r(3 3) U5'
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
  "requestId": "bc730acd81bec3bcbb326129e0d1f1e1"
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:37:59 GMT',
  'etag',
  '"9562854356634478735"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'bc730acd81bec3bcbb326129e0d1f1e1',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:content_type/editor_interface',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=j6xEpGYMTTeJU67bJDSCu9ajfWAAAAAAQUIPAAAAAAB1URSlwZGwNNB04TuuOHUA; expires=Tue, 19 Apr 2022 07:59:36 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=JecGVHthxBDS1xeeKsJtVwAAAAAQIUV+bG+PuWQUt9xqxY9O; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=4LVTI0cHQgiGhI3RfEFwB9ajfWAAAAAAjT6QMaVxhdZY9WhxSGdmqg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '10-6825097-6825101 NNYN CT(90 91 0) RT(1618846678344 25) q(0 0 2 -1) r(4 4) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/locales')
  .query({"limit":"100","order":"sys.createdAt","skip":"0"})
  .reply(200, {
  "sys": {
    "type": "Array"
  },
  "total": 1,
  "skip": 0,
  "limit": 100,
  "items": [
    {
      "name": "U.S. English",
      "internal_code": "en-US",
      "code": "en-US",
      "fallbackCode": null,
      "default": true,
      "contentManagementApi": true,
      "contentDeliveryApi": true,
      "optional": false,
      "sys": {
        "type": "Locale",
        "id": "0zK7OynpqVdcSetOBfe5P8",
        "version": 1,
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "bohepdihyxin"
          }
        },
        "environment": {
          "sys": {
            "type": "Link",
            "linkType": "Environment",
            "id": "env-integration",
            "uuid": "f9178c19-de73-40a3-bcd8-6104e54364f3"
          }
        },
        "createdAt": "2021-04-19T15:36:31Z",
        "updatedAt": "2021-04-19T15:36:31Z"
      }
    }
  ]
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:38:00 GMT',
  'etag',
  '"3933806265352844587"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  '3e1cb23db5658dcf9a905c567db63b35',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/locales',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=bxCqy80pQiyz2L/tBkVGiNejfWAAAAAAQUIPAAAAAAC3jOEVjTR5GxP0ReHFCBTU; expires=Tue, 19 Apr 2022 07:59:35 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=Vh7tcBCz+He41rldKsJtVwAAAACYfchK331JbLz5BFOpvBoN; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=+382ZVwdZUQWhY3RfEFwB9ejfWAAAAAAZ3cVEpe8/oJah6IXohjk8A==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '8-1951870-1951871 NNYN CT(92 94 0) RT(1618846678781 36) q(0 0 2 -1) r(9 9) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/customSidebar', {"name":"Custom sidebar","fields":[],"description":"How to add, remove and update widgets"})
  .reply(201, {"sys":{"space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"id":"customSidebar","type":"ContentType","createdAt":"2021-04-19T15:38:02.315Z","updatedAt":"2021-04-19T15:38:02.315Z","environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}},"createdBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"updatedBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"publishedCounter":0,"version":1},"displayField":null,"name":"Custom sidebar","description":"How to add, remove and update widgets","fields":[]}, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:38:02 GMT',
  'etag',
  '"17111754655704188120"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '1d65742889d6cdab85634bf4278a1400',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:id',
  'Content-Length',
  '882',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=jlG3JgLIQj+OWQn5z7ey+tqjfWAAAAAAQUIPAAAAAACG1f0km6y+sNOtAAnaroWq; expires=Tue, 19 Apr 2022 07:59:35 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=2kE1YJvgcGjKECyWKsJtVwAAAACwvlBQeJzCcDIdG9YTYvx/; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=F+n5euL59Bljho3RfEFwB9qjfWAAAAAALf87AcN45JIN+qMWoWdvhA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  'X-Iinfo',
  '8-1951920-1951921 NNNN CT(90 90 0) RT(1618846679814 31) q(0 0 2 -1) r(22 22) U5'
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
    "createdAt": "2021-04-19T15:38:02.315Z",
    "updatedAt": "2021-04-19T15:38:03.708Z",
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
    "firstPublishedAt": "2021-04-19T15:38:03.708Z",
    "publishedAt": "2021-04-19T15:38:03.708Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:38:04 GMT',
  'etag',
  'W/"16408692380105804498"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'd510c7b3dc82c55b0b578e455d9ffc85',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:id/published',
  'Content-Length',
  '389',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=c/7ZGslITiCDQmI+nD8U1dujfWAAAAAAQUIPAAAAAAB8a8UIpMlmUdT+YzZoBsFa; expires=Tue, 19 Apr 2022 07:59:35 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=f4RODmUKEUVWQXVWKsJtVwAAAAB6EDDbvJaicdVfr8V62r8f; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=ssi+T1bYeG4ah43RfEFwB9ujfWAAAAAAkPmkGz0oUk3Mb18tObNH9g==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  'X-Iinfo',
  '5-3059969-3059976 NNNN CT(94 95 0) RT(1618846682078 32) q(0 0 2 -1) r(12 12) U5'
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
    "createdAt": "2021-04-19T15:38:04.100Z",
    "createdBy": {
      "sys": {
        "id": "1Y7O5FbAkPYgNvD0MpQoAE",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2021-04-19T15:38:04.716Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:38:04 GMT',
  'etag',
  'W/"5263419172371029966"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'a19383818bf8e92d4ebe3dec241103e0',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:content_type/editor_interface',
  'Content-Length',
  '459',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=FHRgeNT6TnmncUf5rd8M9NujfWAAAAAAQUIPAAAAAACSNXdh2Ez1aEGVd1e5SCvI; expires=Tue, 19 Apr 2022 07:59:35 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=iWxhP3X2/XC3BujdKsJtVwAAAABtCu3MsD+stFbG9i4UY4ey; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=+q05ZL1KREtrh43RfEFwB9ujfWAAAAAA/mEy0uoQUNthIe6wuJooug==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  'X-Iinfo',
  '5-3060098-3060104 NNNN CT(94 96 0) RT(1618846683395 32) q(0 0 2 -1) r(5 5) U5'
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
    "createdAt": "2021-04-19T15:38:04.100Z",
    "createdBy": {
      "sys": {
        "id": "1Y7O5FbAkPYgNvD0MpQoAE",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2021-04-19T15:38:05.298Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:38:05 GMT',
  'etag',
  'W/"1584759706462592706"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'b12137789d17e75c16fbbd699f9756d8',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:content_type/editor_interface',
  'Content-Length',
  '461',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=WRNW24mgSMC/pbQh9BvMlNyjfWAAAAAAQUIPAAAAAAB2nZ9sAbyLngB+JjR8jSW/; expires=Tue, 19 Apr 2022 07:59:36 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=cvjWGNdOv2KJBzVyKsJtVwAAAAAN0OboK+PYXpjlpcJe68vv; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=klTkSbWN0lW3h43RfEFwB9yjfWAAAAAAez9DxA+e4yi8dm7kgDrilA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  'X-Iinfo',
  '7-1686553-1686555 NNNN CT(94 95 0) RT(1618846684012 27) q(0 0 2 -1) r(5 5) U5'
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
    "createdAt": "2021-04-19T15:38:04.100Z",
    "createdBy": {
      "sys": {
        "id": "1Y7O5FbAkPYgNvD0MpQoAE",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2021-04-19T15:38:05.826Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:38:05 GMT',
  'etag',
  'W/"2599705841377978634"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  '6d938dfe913408fff3c675700924a939',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:content_type/editor_interface',
  'Content-Length',
  '461',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=fpQuNdYhRoSfWAcpo3Z4GN2jfWAAAAAAQUIPAAAAAAD/8ye80GHOZB3tEVShLi1d; expires=Tue, 19 Apr 2022 07:59:35 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=xY5IOjo6n34CC+g4KsJtVwAAAABRHhGWZNGe6CQrEGuSSeDE; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=/oK5NCXNrTLzh43RfEFwB92jfWAAAAAAh0gO1kG6eo8NtUuyDdGJfQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  'X-Iinfo',
  '5-3060259-3060261 NNNY CT(97 97 0) RT(1618846684602 37) q(0 0 0 -1) r(4 4) U5'
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
    "createdAt": "2021-04-19T15:38:04.100Z",
    "createdBy": {
      "sys": {
        "id": "1Y7O5FbAkPYgNvD0MpQoAE",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2021-04-19T15:38:07.175Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:38:07 GMT',
  'etag',
  'W/"16764038336904489183"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '3fd6cde1014cbafa43a262775b8a29a1',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:content_type/editor_interface',
  'Content-Length',
  '460',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=NG9NUx9kTR+HpMc+Z+kzLt6jfWAAAAAAQUIPAAAAAADmBIVfGr89hKPPZQkemWoh; expires=Tue, 19 Apr 2022 07:59:36 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=4cFmc6EiIXODpW7KKsJtVwAAAAAjBIGkbiQk98FNthaeK8xC; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=QIGwCzMDBQ67iI3RfEFwB96jfWAAAAAA/MeyoowI8VPwt5bSRGezCA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  'X-Iinfo',
  '10-6826506-6826514 NNNN CT(94 97 0) RT(1618846685133 34) q(0 0 2 -1) r(14 14) U5'
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
    "createdAt": "2021-04-19T15:38:04.100Z",
    "createdBy": {
      "sys": {
        "id": "1Y7O5FbAkPYgNvD0MpQoAE",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2021-04-19T15:38:08.606Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:38:08 GMT',
  'etag',
  'W/"1213500252103986439"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '7fe6abbb6d63cf17102197d2747fddfc',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:content_type/editor_interface',
  'Content-Length',
  '447',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=4cGlpnOESNSAbVvIHXv7Xt+jfWAAAAAAQUIPAAAAAADIbkew+iCL5g77ZTsbgGDF; expires=Tue, 19 Apr 2022 07:59:36 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=EUCfCYAvJADyKzXFKsJtVwAAAADb4z6ZDE0yvhMbBK1Qmtiz; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=PdGoU3km0GZriY3RfEFwB9+jfWAAAAAATMORQv+23ESo2lcDZVdd6A==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  'X-Iinfo',
  '9-2621439-2621440 NNNN CT(91 96 0) RT(1618846686654 42) q(0 0 2 -1) r(12 12) U5'
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
    "createdAt": "2021-04-19T15:38:04.100Z",
    "createdBy": {
      "sys": {
        "id": "1Y7O5FbAkPYgNvD0MpQoAE",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2021-04-19T15:38:08.606Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:38:09 GMT',
  'etag',
  'W/"18380367584970511109"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '4d0d21b6b743442f427033fcf1f5286f',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:content_type/editor_interface',
  'Content-Length',
  '436',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=Jl1cCHq2ScypS1xge97pleCjfWAAAAAAQUIPAAAAAACA2AXpbuK1V3Hd1nhfjXzT; expires=Tue, 19 Apr 2022 07:59:36 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=NOQ/F+eR+wVPK7ZSKsJtVwAAAADwJ+J3w8J1nIJ03PbIv0vm; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=EaU0CPgWeXLwiY3RfEFwB+CjfWAAAAAAT8zVGggc3f1SuruMG/Vakw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  'X-Iinfo',
  '2-3360595-3360597 NNNN CT(93 94 0) RT(1618846687909 31) q(0 0 2 -1) r(8 8) U5'
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:38:10 GMT',
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
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '376fe3d53e4b086af9265969c1008a37',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:content_type/editor_interface',
  'Content-Length',
  '375',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=idnPisB+QkSnGMs3uURW2eGjfWAAAAAAQUIPAAAAAAAYLOxYtFXX/nO34z+DUnC2; expires=Tue, 19 Apr 2022 07:59:35 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=FGeZRxisZzsVjt4mKsJtVwAAAADoqJWtHnUUzO9diOCz6sVe; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=4NqGBDd/Sz96io3RfEFwB+GjfWAAAAAABGY2EkfPC/jUTX/Li/pQTA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  'X-Iinfo',
  '8-1952375-1952384 NNNN CT(93 95 0) RT(1618846688776 26) q(0 0 1 -1) r(9 9) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/locales')
  .query({"limit":"100","order":"sys.createdAt","skip":"0"})
  .reply(200, {
  "sys": {
    "type": "Array"
  },
  "total": 1,
  "skip": 0,
  "limit": 100,
  "items": [
    {
      "name": "U.S. English",
      "internal_code": "en-US",
      "code": "en-US",
      "fallbackCode": null,
      "default": true,
      "contentManagementApi": true,
      "contentDeliveryApi": true,
      "optional": false,
      "sys": {
        "type": "Locale",
        "id": "0zK7OynpqVdcSetOBfe5P8",
        "version": 1,
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "bohepdihyxin"
          }
        },
        "environment": {
          "sys": {
            "type": "Link",
            "linkType": "Environment",
            "id": "env-integration",
            "uuid": "f9178c19-de73-40a3-bcd8-6104e54364f3"
          }
        },
        "createdAt": "2021-04-19T15:36:31Z",
        "updatedAt": "2021-04-19T15:36:31Z"
      }
    }
  ]
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:38:11 GMT',
  'etag',
  '"3933806265352844587"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'c18097b054cc19e0218ed220da9861dc',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/locales',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=erv2A4zYTcmj/yxsUWwWNOKjfWAAAAAAQUIPAAAAAADMCe5f8A0PPnrA9oimgvVj; expires=Tue, 19 Apr 2022 07:59:35 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=6KF7Uq3jWzh0TjGbKsJtVwAAAACj/1521xbmcz/sqDWLX2Je; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=0vcfLm35QUsji43RfEFwB+KjfWAAAAAA/YFb0T9syqZdGKX4j0SPLA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '8-1952529-1952535 NNYN CT(89 90 0) RT(1618846689790 28) q(0 0 1 -1) r(8 8) U5'
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
    "updatedAt": "2021-04-19T15:38:12.072Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:38:12 GMT',
  'etag',
  'W/"13212472447616713294"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'f27f0fbc3503b6c2092f1b9b7766ab10',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:content_type/editor_interface',
  'Content-Length',
  '541',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=C9EwPKqBS+K2wDpOgcIaZeOjfWAAAAAAQUIPAAAAAACMQF8wOFq1As75Yv7pkVdO; expires=Tue, 19 Apr 2022 07:59:35 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=8MzHXuXpMCjAG77fKsJtVwAAAAAfIQpV5Ouws/28mkiiojRE; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=yPNtWFWlinRpi43RfEFwB+OjfWAAAAAAO8AOs63CcMc2AteEmvFTmA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  'X-Iinfo',
  '5-3061053-3061063 NNNN CT(94 95 0) RT(1618846690732 50) q(0 0 2 -1) r(6 6) U5'
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
    "updatedAt": "2021-04-19T15:38:12.676Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:38:12 GMT',
  'etag',
  'W/"1721228422010567849"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '6d06cb8656e94fa3f283a78c77fe11a5',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:content_type/editor_interface',
  'transfer-encoding',
  'chunked',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=b/GJ2DJERp6QAhvDBOZ4XeOjfWAAAAAAQUIPAAAAAAAzLPeDitntKR8YSVxbVCEh; expires=Tue, 19 Apr 2022 07:59:36 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=37ovIvmzVx2QQs2gKsJtVwAAAADKUW/x1rR9yclrOEVka4NR; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=lG5FUQspNwrUi43RfEFwB+OjfWAAAAAAZs4qFQI1mgONdU1ART5enw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  'X-Iinfo',
  '9-2621718-2621725 NNNN CT(95 94 0) RT(1618846691402 48) q(0 0 2 -1) r(5 5) U5'
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
    "updatedAt": "2021-04-19T15:38:13.331Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:38:13 GMT',
  'etag',
  'W/"8713508747537139246"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'd71c50d8afe88386b96fcd73d5b7c019',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:content_type/editor_interface',
  'Content-Length',
  '541',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=82Ivy9/FRcW/BskfeMPpWeSjfWAAAAAAQUIPAAAAAABKmRXDHTqNaODg+nXqFYmi; expires=Tue, 19 Apr 2022 07:59:36 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=RigMb9gKxDQllnvVKsJtVwAAAAC3ImvDDVKx/bBfKkvM07rF; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=GGCPSbP/KAgWjI3RfEFwB+SjfWAAAAAAx0IPgNDTdcnrtKQ3B3izAQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  'X-Iinfo',
  '10-6827885-6827889 NNNN CT(87 152 0) RT(1618846691988 31) q(0 0 2 -1) r(5 5) U5'
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
    "updatedAt": "2021-04-19T15:38:13.702Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:38:13 GMT',
  'etag',
  'W/"16799027389585832855"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  '3aedfcf4b7e723a5258acaaa068454f7',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:content_type/editor_interface',
  'Content-Length',
  '542',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=CKmuMKpgRNeN+eIWmqOOCuSjfWAAAAAAQUIPAAAAAACWuf2752dBsDOWPwQozd94; expires=Tue, 19 Apr 2022 07:59:35 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=MKu0IC7NYT5TpK8TKsJtVwAAAACX5jELNgJ8+iO4TZQ/cW8A; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=Rt6VXXi6ghpGjI3RfEFwB+SjfWAAAAAAURMvqkpy8mOYekj1Rzjxdg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  'X-Iinfo',
  '8-1952814-1952816 NNNY CT(95 105 0) RT(1618846692630 27) q(0 0 0 -1) r(3 3) U5'
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
    "updatedAt": "2021-04-19T15:38:14.289Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:38:14 GMT',
  'etag',
  'W/"1933538913194270476"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '22d8ec06b4f53f5075117f13e84c6e4f',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:content_type/editor_interface',
  'Content-Length',
  '528',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=SLQmJyLVT2qs8kUNbcrfjuWjfWAAAAAAQUIPAAAAAADAFZNHOLgU6iYUvr+wJS++; expires=Tue, 19 Apr 2022 07:59:37 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=sHyiVdRAngriv0FuKsJtVwAAAAAXfTqrnra3sBeVXCnP5Rr3; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=lHPHdXNrs2qWjI3RfEFwB+WjfWAAAAAA+HuBlVyEz8mAY8vozK1HTw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  'X-Iinfo',
  '6-1178106-1178107 NNNN CT(93 92 0) RT(1618846693016 41) q(0 0 2 -1) r(5 5) U5'
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
    "updatedAt": "2021-04-19T15:38:14.289Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:38:14 GMT',
  'etag',
  'W/"11317106784872455083"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  '0934d7b253fc33fdc8646ce0fdc5c56b',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:content_type/editor_interface',
  'Content-Length',
  '521',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=D7AJg1hiSWaLK8x7wmGuH+ajfWAAAAAAQUIPAAAAAABGlAvGAUHIGHHP1i5tudh6; expires=Tue, 19 Apr 2022 07:59:36 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=ErpsapcVCzvVpbT1KsJtVwAAAAB/aXUHPPCAIE0wXey1zcO/; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=Dt8nIV5dTXPcjI3RfEFwB+ajfWAAAAAAHhlCKi7G2entVv+5xdJfVg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  'X-Iinfo',
  '10-6828224-6828228 NNNY CT(90 91 0) RT(1618846693609 33) q(0 0 0 -1) r(5 5) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/tags')
  .query({"limit":"100","order":"sys.createdAt","skip":"0"})
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
        "id": "longexampletag",
        "type": "Tag",
        "createdAt": "2021-04-19T15:37:14.149Z",
        "updatedAt": "2021-04-19T15:37:14.149Z",
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
        "version": 1,
        "visibility": "private"
      },
      "name": "long example marketing"
    }
  ]
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:38:15 GMT',
  'etag',
  'W/"16447136838785737400"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'a2f845e1656460887a14f8241105842c',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/tags',
  'Content-Length',
  '357',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=1AE5B84cS3GpzCXUCNYjMOajfWAAAAAAQUIPAAAAAADBMsdpWd9lDYu3GwTS69L1; expires=Tue, 19 Apr 2022 07:59:36 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=FqvSZvnKKR96tU7SKsJtVwAAAABgRASe8TeMPq0I53CLSD6j; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=V27mfkpbqngMjY3RfEFwB+ajfWAAAAAAJ9EZYDxgVxF8t7wpw+m9oQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  'X-Iinfo',
  '4-1536889-1536892 NNNN CT(97 98 0) RT(1618846694244 51) q(0 0 2 -1) r(4 4) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/locales')
  .query({"limit":"100","order":"sys.createdAt","skip":"0"})
  .reply(200, {
  "sys": {
    "type": "Array"
  },
  "total": 1,
  "skip": 0,
  "limit": 100,
  "items": [
    {
      "name": "U.S. English",
      "internal_code": "en-US",
      "code": "en-US",
      "fallbackCode": null,
      "default": true,
      "contentManagementApi": true,
      "contentDeliveryApi": true,
      "optional": false,
      "sys": {
        "type": "Locale",
        "id": "0zK7OynpqVdcSetOBfe5P8",
        "version": 1,
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "bohepdihyxin"
          }
        },
        "environment": {
          "sys": {
            "type": "Link",
            "linkType": "Environment",
            "id": "env-integration",
            "uuid": "f9178c19-de73-40a3-bcd8-6104e54364f3"
          }
        },
        "createdAt": "2021-04-19T15:36:31Z",
        "updatedAt": "2021-04-19T15:36:31Z"
      }
    }
  ]
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:38:15 GMT',
  'etag',
  '"3933806265352844587"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  'c30ef0dd968b71facfd9f78a750213a6',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/locales',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=7cggXZJETXuw2J4jFA/rsOejfWAAAAAAQUIPAAAAAABZfCX5tP0L61ro0Xtk5SQR; expires=Tue, 19 Apr 2022 07:59:37 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=Fw8NNqSV+Bd7dS3wKsJtVwAAAAAuK18oCwfFkgqSJkHp8FOK; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=1FqWfCw6m2hAjY3RfEFwB+ejfWAAAAAAAHHlrm2ITDjlXCRuCavL9g==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '6-1178141-1178142 NNYN CT(95 95 0) RT(1618846694749 37) q(0 0 2 -1) r(4 4) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/tags/sampletag', {"sys":{"id":"sampletag","version":0},"name":"marketing"})
  .reply(201, {"sys":{"id":"sampletag","version":1,"space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}},"type":"Tag","createdAt":"2021-04-19T15:38:16.426Z","createdBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"visibility":"private","updatedAt":"2021-04-19T15:38:16.426Z","updatedBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}}},"name":"marketing"}, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:38:16 GMT',
  'etag',
  '"14667464546742581967"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'c3352c7a761fcb7335dc1d91e84b569e',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/tags/:id',
  'Content-Length',
  '769',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=VWPWJI8QQDCUG8nZD9R87uejfWAAAAAAQUIPAAAAAAAx4UU+6aqx1CibKEIJmSQe; expires=Tue, 19 Apr 2022 07:59:37 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=AU5veAQdoi8KnesLKsJtVwAAAAAYxrg4XQ30S7a0HNapOa9c; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=A4qkHRNutXt2jY3RfEFwB+ejfWAAAAAAbOFs/0ZUyDl79gfAN9EV5Q==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  'X-Iinfo',
  '6-1178149-1178150 NNNN CT(95 94 0) RT(1618846695227 36) q(0 0 2 -1) r(5 5) U5'
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
    "createdAt": "2021-04-19T15:38:16.426Z",
    "updatedAt": "2021-04-19T15:38:16.426Z",
    "version": 1,
    "visibility": "private"
  },
  "name": "marketing"
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:38:16 GMT',
  'etag',
  '"9785621473264267232"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  '0626bca30c58bf085cbc3a0949ad9b80',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/tags/:id',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=FAbIBBWJSYiI+qvrexL2veijfWAAAAAAQUIPAAAAAACmWdSyYFjQ0z+lKpfyr97s; expires=Tue, 19 Apr 2022 07:59:36 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=kiCbay7StQQjwY1PKsJtVwAAAAAIA5ApIQD88FTZSIQJE7pM; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=4w8xJ47+yRXGjY3RfEFwB+ijfWAAAAAAUvZQt8lsZx2YoVMNOptDEw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '10-6828693-6828706 NNYN CT(97 97 0) RT(1618846695820 34) q(0 0 2 -1) r(4 4) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/tags')
  .query({"limit":"100","order":"sys.createdAt","skip":"0"})
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
        "id": "longexampletag",
        "type": "Tag",
        "createdAt": "2021-04-19T15:37:14.149Z",
        "updatedAt": "2021-04-19T15:37:14.149Z",
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
        "version": 1,
        "visibility": "private"
      },
      "name": "long example marketing"
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
        "id": "sampletag",
        "type": "Tag",
        "createdAt": "2021-04-19T15:38:16.426Z",
        "updatedAt": "2021-04-19T15:38:16.426Z",
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
        "version": 1,
        "visibility": "private"
      },
      "name": "marketing"
    }
  ]
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:38:17 GMT',
  'etag',
  'W/"7860344361510403231"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '1cae9a40ae3cb678b49c3722f3f5ede8',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/tags',
  'Content-Length',
  '393',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=XO/k3+p5QkCnel7DTW8ysuijfWAAAAAAQUIPAAAAAADxrTvzavxhPG9pxQ7RPy+U; expires=Tue, 19 Apr 2022 07:59:36 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=a+xdEyjWiWB+E9k0KsJtVwAAAABIpY4YWHyvKh5iQ7Hua2Mo; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=8uLLJ1o8QS4Pjo3RfEFwB+ijfWAAAAAAicSd69bHRHfEKWm/e48VDQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  'X-Iinfo',
  '4-1536953-1536954 NNNN CT(97 98 0) RT(1618846696279 37) q(0 0 2 -1) r(4 4) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/locales')
  .query({"limit":"100","order":"sys.createdAt","skip":"0"})
  .reply(200, {
  "sys": {
    "type": "Array"
  },
  "total": 1,
  "skip": 0,
  "limit": 100,
  "items": [
    {
      "name": "U.S. English",
      "internal_code": "en-US",
      "code": "en-US",
      "fallbackCode": null,
      "default": true,
      "contentManagementApi": true,
      "contentDeliveryApi": true,
      "optional": false,
      "sys": {
        "type": "Locale",
        "id": "0zK7OynpqVdcSetOBfe5P8",
        "version": 1,
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "bohepdihyxin"
          }
        },
        "environment": {
          "sys": {
            "type": "Link",
            "linkType": "Environment",
            "id": "env-integration",
            "uuid": "f9178c19-de73-40a3-bcd8-6104e54364f3"
          }
        },
        "createdAt": "2021-04-19T15:36:31Z",
        "updatedAt": "2021-04-19T15:36:31Z"
      }
    }
  ]
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:38:17 GMT',
  'etag',
  '"3933806265352844587"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  'f2ba4fbedc4225fa3ca4ff0b0b021647',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/locales',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=5unk0/79REG1o0B7H4fKwumjfWAAAAAAQUIPAAAAAABXkkRsn+mwDdsqaZ4cy4U2; expires=Tue, 19 Apr 2022 07:59:36 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=HhsTTQaO4A3nGSLNKsJtVwAAAAAF8NQVfCyma4kgoExIogsb; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=l7qgDofX3g5Vjo3RfEFwB+mjfWAAAAAAgr+oGUcUdcKwfByOGx5KkA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '10-6828911-6828922 NNYN CT(90 90 0) RT(1618846696781 33) q(0 0 1 -1) r(3 3) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/tags/sampletag', {"sys":{"id":"sampletag","version":1},"name":"better marketing"})
  .reply(200, {"sys":{"type":"Tag","id":"sampletag","space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}},"createdBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"updatedBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"createdAt":"2021-04-19T15:38:16.426Z","updatedAt":"2021-04-19T15:38:18.238Z","version":2,"visibility":"private"},"name":"better marketing"}, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:38:18 GMT',
  'etag',
  '"5686727295242992245"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '248114c88a20f7dbac2572b3356e372f',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/tags/:id',
  'Content-Length',
  '776',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=8R1wiuvhTAek2TjsomVyXOmjfWAAAAAAQUIPAAAAAAAcfrnGRRji9Q9k02Q23mhe; expires=Tue, 19 Apr 2022 07:59:35 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=ZncCSn24NndgYtL5KsJtVwAAAABQRdHpjTa79mBCryJATPG1; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=hyJdM7fYAkZ3jo3RfEFwB+mjfWAAAAAAbl6ySkqiS3oGbtJtLow1Sw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  'X-Iinfo',
  '8-1953174-1953176 NNNY CT(97 97 0) RT(1618846697234 27) q(0 0 0 -1) r(3 3) U5'
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
    "createdAt": "2021-04-19T15:38:16.426Z",
    "updatedAt": "2021-04-19T15:38:18.238Z",
    "version": 2,
    "visibility": "private"
  },
  "name": "better marketing"
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:38:18 GMT',
  'etag',
  '"5686727295242992245"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  '807965c4cebd48b1f9ca0b3536e08f50',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/tags/:id',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=6Iyi5IUWSiyFK1C62l5e1OmjfWAAAAAAQUIPAAAAAAChCaG1zP5MI63Ye8gaVFV5; expires=Tue, 19 Apr 2022 07:59:36 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=XtFULHyPejBiwnZ4KsJtVwAAAABgWGcuFJnYgImMpE74ELik; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=Ni5LZ9KtnACojo3RfEFwB+mjfWAAAAAAbB2X6eVMVwf7zxUPkczGog==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '1-2654451-2654454 NNYY CT(94 94 0) RT(1618846697600 30) q(0 0 0 -1) r(1 1) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/tags')
  .query({"limit":"100","order":"sys.createdAt","skip":"0"})
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
        "id": "longexampletag",
        "type": "Tag",
        "createdAt": "2021-04-19T15:37:14.149Z",
        "updatedAt": "2021-04-19T15:37:14.149Z",
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
        "version": 1,
        "visibility": "private"
      },
      "name": "long example marketing"
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
        "id": "sampletag",
        "type": "Tag",
        "createdAt": "2021-04-19T15:38:16.426Z",
        "updatedAt": "2021-04-19T15:38:18.238Z",
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
        "version": 2,
        "visibility": "private"
      },
      "name": "better marketing"
    }
  ]
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:38:19 GMT',
  'etag',
  'W/"5808921878992049889"',
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
  '28495b004a5cb1054f817c03b4c0df7a',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/tags',
  'Content-Length',
  '407',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=7eg1yZB1Ssat+mZmHIYoueqjfWAAAAAAQUIPAAAAAAAX2dwt+eoR6SZWOcxqw/gc; expires=Tue, 19 Apr 2022 07:59:36 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=9UT/C/qlvxC7zU2AKsJtVwAAAAABOtxSGdaE/hD1B0Qs1YI9; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=bBx6OTAUtXzijo3RfEFwB+qjfWAAAAAAMGlkgoQKa8vAibEUJCTy5w==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  'X-Iinfo',
  '2-3361966-3361972 NNNN CT(98 97 0) RT(1618846697876 33) q(0 0 2 -1) r(3 3) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/locales')
  .query({"limit":"100","order":"sys.createdAt","skip":"0"})
  .reply(200, {
  "sys": {
    "type": "Array"
  },
  "total": 1,
  "skip": 0,
  "limit": 100,
  "items": [
    {
      "name": "U.S. English",
      "internal_code": "en-US",
      "code": "en-US",
      "fallbackCode": null,
      "default": true,
      "contentManagementApi": true,
      "contentDeliveryApi": true,
      "optional": false,
      "sys": {
        "type": "Locale",
        "id": "0zK7OynpqVdcSetOBfe5P8",
        "version": 1,
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "bohepdihyxin"
          }
        },
        "environment": {
          "sys": {
            "type": "Link",
            "linkType": "Environment",
            "id": "env-integration",
            "uuid": "f9178c19-de73-40a3-bcd8-6104e54364f3"
          }
        },
        "createdAt": "2021-04-19T15:36:31Z",
        "updatedAt": "2021-04-19T15:36:31Z"
      }
    }
  ]
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:38:19 GMT',
  'etag',
  '"3933806265352844587"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'c823991e35f98659402baacc41326d71',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/locales',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=Tm8+U1b/ToWOZVvG9ihhc+qjfWAAAAAAQUIPAAAAAABXa51ipm9C4xKBExEn1eUu; expires=Tue, 19 Apr 2022 07:59:36 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=dwSJWUdz2UaioGn1KsJtVwAAAACREupvBUGm6q3wXOCDena9; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=1fyocb7Iih0Rj43RfEFwB+qjfWAAAAAAbEswBU71EGV3vxklfuglXQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '10-6829241-6829248 NNYN CT(90 89 0) RT(1618846698344 43) q(0 0 2 -1) r(4 4) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .delete('/spaces/bohepdihyxin/environments/env-integration/tags/sampletag')
  .reply(204, "", [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:38:19 GMT',
  'etag',
  '"5686727295242992245"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  '48fa76bfcfc27c02385e9df0ca4838b1',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/tags/:id',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=3j+cFh21QjaDIZgKML9gTeujfWAAAAAAQUIPAAAAAAAMk1gr3rKUpdvN3Emkqu6k; expires=Tue, 19 Apr 2022 07:59:36 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=Xrw8FnhEcl6dLYN5KsJtVwAAAACYGd7h1d2V0X+O4hZHSCTx; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=mFv6C74SBylGj43RfEFwB+ujfWAAAAAALlcYhboqJhLvJQvDeu4KOg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  'X-Iinfo',
  '10-6829338-6829344 NNNN CT(90 90 0) RT(1618846698794 28) q(0 0 2 -1) r(3 3) U5'
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
  "requestId": "345016b706c808f48ca72efbdc0b0d7e"
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:38:20 GMT',
  'etag',
  '"7093105572963480791"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '345016b706c808f48ca72efbdc0b0d7e',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/tags/:id',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=X7XuGzg4TY6z+U308X1II+ujfWAAAAAAQUIPAAAAAADGqnQDdHZ+U6Ki7D7ZCFp5; expires=Tue, 19 Apr 2022 07:59:35 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=L6PVSTegClwr5zAZKsJtVwAAAABLdGLXY+WClZBcbHqqt6Oh; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=/WZfQPnqSHdoj43RfEFwB+ujfWAAAAAAzAHzHhZNO1KTExkgUxkzTA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '5-3062202-3062210 NNYY CT(98 97 0) RT(1618846699236 42) q(0 0 0 -1) r(2 2) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/content_types/article', {"name":"blog post","fields":[{"name":"title","id":"title","type":"Symbol"}]})
  .reply(201, {"sys":{"space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"id":"article","type":"ContentType","createdAt":"2021-04-19T15:38:20.667Z","updatedAt":"2021-04-19T15:38:20.667Z","environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}},"createdBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"updatedBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"publishedCounter":0,"version":1},"displayField":null,"name":"blog post","description":null,"fields":[{"id":"title","name":"title","type":"Symbol","localized":false,"required":false,"validations":[],"disabled":false,"omitted":false}]}, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:38:20 GMT',
  'etag',
  '"7947276024254987814"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  'ad93737c3f17bd6ff4db967c8ec0ebee',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:id',
  'Content-Length',
  '1043',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=mDIsDSvvSpi6WCtGn/LclOujfWAAAAAAQUIPAAAAAADCrJYh0zKMtyx7sVe/W/eu; expires=Tue, 19 Apr 2022 07:59:36 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=mf5nKHu2Kn8WBabaKsJtVwAAAAAqs/e+h44LZXJ2aJrgRUcl; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=xpdgVsB6/hG7j43RfEFwB+ujfWAAAAAAw45LOv0BqwVgGYRXC33wUg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  'X-Iinfo',
  '9-2622296-2622303 NNNY CT(90 91 0) RT(1618846699500 34) q(0 0 0 -1) r(4 4) U5'
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
    "createdAt": "2021-04-19T15:38:20.667Z",
    "updatedAt": "2021-04-19T15:38:21.028Z",
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
    "firstPublishedAt": "2021-04-19T15:38:21.028Z",
    "publishedAt": "2021-04-19T15:38:21.028Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:38:21 GMT',
  'etag',
  'W/"151589746245216849"',
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
  '2a2a17791f99c3d438ee2e3335c4e5fb',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:id/published',
  'Content-Length',
  '430',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=ye6Fnuo5R0qp4BoUVOenjOyjfWAAAAAAQUIPAAAAAAAkFSB3hG1oYc527n2D5m0p; expires=Tue, 19 Apr 2022 07:59:36 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=wmYUOE7iUkjV13/VKsJtVwAAAACKNB7CQHYQ9/iLJ0OhGMYb; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=pkUzbahrQHn7j43RfEFwB+yjfWAAAAAA8Cg5KHqYk30KvsWkvTtRug==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  'X-Iinfo',
  '9-2622344-2622348 NNNY CT(90 90 0) RT(1618846700060 35) q(0 0 0 -1) r(3 3) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/tags/new', {"name":"new","sys":{"id":"new"}})
  .reply(201, {"name":"new","sys":{"id":"new","space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}},"type":"Tag","version":1,"createdAt":"2021-04-19T15:38:21.421Z","createdBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"visibility":"private","updatedAt":"2021-04-19T15:38:21.421Z","updatedBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}}}}, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:38:21 GMT',
  'etag',
  '"3798894002129728493"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '82840aa8eb742d5a5f1f49b070ecea78',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/tags/:id',
  'Content-Length',
  '757',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=NLFnc6xWQtqk2hLx4k9pn+yjfWAAAAAAQUIPAAAAAABEpgcfA2l1/lcGcM8FlNiW; expires=Tue, 19 Apr 2022 07:59:36 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=UlG6OhJpojAMrHwHKsJtVwAAAAD0rjLW/vYVZx5m5p+A5XXA; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=A2COTvREfEMZkI3RfEFwB+yjfWAAAAAActSSBpaBQUVcjT8M6mdOnw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  'X-Iinfo',
  '1-2654786-2654791 NNNY CT(94 95 0) RT(1618846700452 40) q(0 0 0 -1) r(2 2) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/tags/old', {"name":"old","sys":{"id":"old"}})
  .reply(201, {"name":"old","sys":{"id":"old","space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}},"type":"Tag","version":1,"createdAt":"2021-04-19T15:38:21.752Z","createdBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"visibility":"private","updatedAt":"2021-04-19T15:38:21.752Z","updatedBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}}}}, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:38:21 GMT',
  'etag',
  '"7546060651092292824"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  '5b3ce4012fcaf2f8a3199603cd4dbbfa',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/tags/:id',
  'Content-Length',
  '757',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=lArZp4/BQIKauuYm0tOU2e2jfWAAAAAAQUIPAAAAAAAD8nuhq7RiboCdBcTrXXF+; expires=Tue, 19 Apr 2022 07:59:36 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=n5N5cP2hn2HEkjxLKsJtVwAAAABPCtiXq8lpOWX7hOgrk0yK; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=9t+gVqOkbFg+kI3RfEFwB+2jfWAAAAAAJHhQLH4gsiY7wTUBnPKZ+g==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  'X-Iinfo',
  '10-6829781-6829803 NNNY CT(94 95 0) RT(1618846700750 64) q(0 0 0 -1) r(2 2) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .post('/spaces/bohepdihyxin/environments/env-integration/entries', {"fields":{"title":{"en-US":"hello!"}},"metadata":{"tags":[{"sys":{"id":"old","type":"Link","linkType":"Tag"}}]}})
  .reply(201, {
  "metadata": {
    "tags": [
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
    "id": "6l1DmbV1sawNcjrXeOeMfv",
    "type": "Entry",
    "createdAt": "2021-04-19T15:38:22.873Z",
    "updatedAt": "2021-04-19T15:38:22.873Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:38:23 GMT',
  'etag',
  '"17370842925404450742"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'fa094e7761f6238cd2bc64117c417421',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/entries',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=1MjOxK1uQpeWx8IgFqbnse6jfWAAAAAAQUIPAAAAAADG2PzK0Vd36masgDfX4Mgx; expires=Tue, 19 Apr 2022 07:59:36 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=sMp3Ki6knEUkMzlTKsJtVwAAAAAIc3l7NlZUPqdKESU5dPKv; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=V8MWCFFi3xEBkY3RfEFwB+6jfWAAAAAAvun2ROXPvuFA+F0D/untfA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '2-3362406-3362409 NNYN CT(94 95 0) RT(1618846701109 25) q(0 0 2 -1) r(13 13) U5'
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
        "createdAt": "2021-04-19T15:38:20.667Z",
        "updatedAt": "2021-04-19T15:38:21.028Z",
        "environment": {
          "sys": {
            "id": "env-integration",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 1,
        "publishedAt": "2021-04-19T15:38:21.028Z",
        "firstPublishedAt": "2021-04-19T15:38:21.028Z",
        "createdBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "1Y7O5FbAkPYgNvD0MpQoAE"
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:38:24 GMT',
  'etag',
  'W/"12606043144503439512"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '8135ad638bb43d838f2f08409d3e4f17',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types',
  'Content-Length',
  '500',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=zWD8YreQSFGoUmxLAGBXKu+jfWAAAAAAQUIPAAAAAAC3bCslb8mROJj68cXfWHwY; expires=Tue, 19 Apr 2022 07:59:36 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=HT/6fCVaYjZed4cYKsJtVwAAAAC2/0Dmn9IcFpUFWqmT6NIW; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=vwYQJZr5ulLSkY3RfEFwB++jfWAAAAAAPEy5sq7j3ETvbdFz6fD62w==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  'X-Iinfo',
  '2-3362585-3362591 NNNN CT(89 91 0) RT(1618846702562 37) q(0 0 1 -1) r(12 12) U5'
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
        "id": "6l1DmbV1sawNcjrXeOeMfv",
        "type": "Entry",
        "createdAt": "2021-04-19T15:38:22.873Z",
        "updatedAt": "2021-04-19T15:38:22.873Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:38:25 GMT',
  'etag',
  'W/"9682876346378094243"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'b7c1b23811d9a87a8c71f0b23f5c4ac4',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/entries',
  'Content-Length',
  '461',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=5vNgK97GRjuZ1CoTy7HBofCjfWAAAAAAQUIPAAAAAABqAZ4bMv04wOXVju8bm2Fd; expires=Tue, 19 Apr 2022 07:59:36 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=5UiYKle91gR5AnHeKsJtVwAAAAA9IbTdpWFcD88P2zi4f4G0; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=bFEBaKdi10hqko3RfEFwB/CjfWAAAAAAESDbQsVW55A+zPgDYJaWKw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  'X-Iinfo',
  '2-3362757-3362762 NNNN CT(94 97 0) RT(1618846703895 40) q(0 0 2 -1) r(9 9) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/tags')
  .query({"limit":"100","order":"sys.createdAt","skip":"0"})
  .reply(200, {
  "sys": {
    "type": "Array"
  },
  "total": 3,
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
        "id": "longexampletag",
        "type": "Tag",
        "createdAt": "2021-04-19T15:37:14.149Z",
        "updatedAt": "2021-04-19T15:37:14.149Z",
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
        "version": 1,
        "visibility": "private"
      },
      "name": "long example marketing"
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
        "id": "new",
        "type": "Tag",
        "createdAt": "2021-04-19T15:38:21.421Z",
        "updatedAt": "2021-04-19T15:38:21.421Z",
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
        "version": 1,
        "visibility": "private"
      },
      "name": "new"
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
        "id": "old",
        "type": "Tag",
        "createdAt": "2021-04-19T15:38:21.752Z",
        "updatedAt": "2021-04-19T15:38:21.752Z",
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
        "version": 1,
        "visibility": "private"
      },
      "name": "old"
    }
  ]
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:38:26 GMT',
  'etag',
  'W/"4445545325445011369"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  'd770e9527df89ed08bc2e65accea14b6',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/tags',
  'Content-Length',
  '422',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=AzOLOiLHRRGWsxR8pRuBsvGjfWAAAAAAQUIPAAAAAAAP5AvWuqdtQ9FCkK+lCQE8; expires=Tue, 19 Apr 2022 07:59:35 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=zz8wUGO4PRCXRksnKsJtVwAAAAB3tXMfKLh8B9zNJ2DJVdxc; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=ns+/CZx6Ihm9ko3RfEFwB/GjfWAAAAAAQvNeHit4aWasWV5vLFDwyg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  'X-Iinfo',
  '5-3063081-3063083 NNNN CT(92 90 0) RT(1618846704904 31) q(0 0 2 -1) r(5 5) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/locales')
  .query({"limit":"100","order":"sys.createdAt","skip":"0"})
  .reply(200, {
  "sys": {
    "type": "Array"
  },
  "total": 1,
  "skip": 0,
  "limit": 100,
  "items": [
    {
      "name": "U.S. English",
      "internal_code": "en-US",
      "code": "en-US",
      "fallbackCode": null,
      "default": true,
      "contentManagementApi": true,
      "contentDeliveryApi": true,
      "optional": false,
      "sys": {
        "type": "Locale",
        "id": "0zK7OynpqVdcSetOBfe5P8",
        "version": 1,
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "bohepdihyxin"
          }
        },
        "environment": {
          "sys": {
            "type": "Link",
            "linkType": "Environment",
            "id": "env-integration",
            "uuid": "f9178c19-de73-40a3-bcd8-6104e54364f3"
          }
        },
        "createdAt": "2021-04-19T15:36:31Z",
        "updatedAt": "2021-04-19T15:36:31Z"
      }
    }
  ]
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:38:26 GMT',
  'etag',
  '"3933806265352844587"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '813b3cc5af66f8933938f9dec4def07a',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/locales',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=/OQ+SqDoQ4WwA1DlQM215/KjfWAAAAAAQUIPAAAAAACnUaAQf4ucBZxOdaWYGKCA; expires=Tue, 19 Apr 2022 07:59:36 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=sI9WQS2i4X7B0sKgKsJtVwAAAADcBSvlNdE6f5zpangwmEEr; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=IB/kbLp5VXEIk43RfEFwB/KjfWAAAAAA47fA0ub6CWZUNieJN0kBwQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '2-3362971-3362980 NNYN CT(104 103 0) RT(1618846705569 32) q(0 0 2 -1) r(4 4) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/entries/6l1DmbV1sawNcjrXeOeMfv', {"sys":{"id":"6l1DmbV1sawNcjrXeOeMfv","version":1,"contentType":{"sys":{"type":"Link","linkType":"ContentType","id":"article"}}},"fields":{"title":{"en-US":"hello!"}},"metadata":{"tags":[{"sys":{"type":"Link","linkType":"Tag","id":"old"}},{"sys":{"id":"new","type":"Link","linkType":"Tag"}}]}})
  .reply(200, {
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
    "id": "6l1DmbV1sawNcjrXeOeMfv",
    "type": "Entry",
    "createdAt": "2021-04-19T15:38:22.873Z",
    "updatedAt": "2021-04-19T15:38:27.549Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:38:27 GMT',
  'etag',
  'W/"1355880750499189346"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '9f846638512c97d921307e1f9a66db49',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/entries/:id',
  'Content-Length',
  '427',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=xGrucEKOQIq74eoMzyacBPKjfWAAAAAAQUIPAAAAAADI6MiQNvoml7WI10HYBHEK; expires=Tue, 19 Apr 2022 07:59:36 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=XZuGOqCckWR+LpJcKsJtVwAAAABf469uVYyRUqiQyhEmjUBd; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=t+rMYWRYIxWAk43RfEFwB/KjfWAAAAAAK17kGeuFHD/EXc1SdERP1w==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  'X-Iinfo',
  '10-6831010-6831021 NNNY CT(97 98 0) RT(1618846706129 29) q(0 0 0 -1) r(7 7) U5'
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
    "createdAt": "2021-04-19T15:38:20.667Z",
    "updatedAt": "2021-04-19T15:38:28.206Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 1,
    "publishedAt": "2021-04-19T15:38:21.028Z",
    "firstPublishedAt": "2021-04-19T15:38:21.028Z",
    "createdBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:38:28 GMT',
  'etag',
  'W/"15554814977089181869"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'e3250f597a30d5ad4e7bd328ed1cdd40',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:id',
  'Content-Length',
  '435',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=iLefcXhFTH28re1c5pwk5vOjfWAAAAAAQUIPAAAAAADyoYDB5Dx4ioz31mh9AEhZ; expires=Tue, 19 Apr 2022 07:59:36 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=2PNNWKzu0GTaqUgfKsJtVwAAAADoyqTP0F8cSF1x0LIqJ9C2; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=nS9RM7aPdxnhk43RfEFwB/OjfWAAAAAAqVH69d44W00ZeYjGqYeZkw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  'X-Iinfo',
  '0-1404831-1404834 NNNN CT(92 93 0) RT(1618846706897 47) q(0 0 2 -1) r(5 5) U5'
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
              "id": "new"
            }
          },
          {
            "sys": {
              "type": "Link",
              "linkType": "Tag",
              "id": "old"
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
        "id": "6l1DmbV1sawNcjrXeOeMfv",
        "type": "Entry",
        "createdAt": "2021-04-19T15:38:22.873Z",
        "updatedAt": "2021-04-19T15:38:27.549Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:38:28 GMT',
  'etag',
  'W/"9871360877387997135"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  '4bcea5d99bfc1308c74f2931ed271e80',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/entries',
  'Content-Length',
  '486',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=4Jhv0PqJRz2NabMchArUafOjfWAAAAAAQUIPAAAAAADvtKjJ2W3YjMD02hg/CE0Q; expires=Tue, 19 Apr 2022 07:59:36 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=O+wuMFN4ZCkPMUzNKsJtVwAAAABWk7rGaISDnXTP1N+o7TM2; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=JeBrK80H/loFlI3RfEFwB/OjfWAAAAAAeLbVwL3XpJ9hHFtqTbwrJg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  'X-Iinfo',
  '10-6831351-6831360 NNNY CT(97 98 0) RT(1618846707533 28) q(0 0 0 -1) r(2 2) U5'
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
        "createdAt": "2021-04-19T15:38:20.667Z",
        "updatedAt": "2021-04-19T15:38:28.206Z",
        "environment": {
          "sys": {
            "id": "env-integration",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 1,
        "publishedAt": "2021-04-19T15:38:21.028Z",
        "firstPublishedAt": "2021-04-19T15:38:21.028Z",
        "createdBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "1Y7O5FbAkPYgNvD0MpQoAE"
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:38:28 GMT',
  'etag',
  'W/"8450622702565939349"',
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
  'db1734217c8faf8ad2371658c6f79e6d',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types',
  'Content-Length',
  '506',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=tLQCol2AQ6u++ISOdDh5WvSjfWAAAAAAQUIPAAAAAAADd7YJSGQi/7UV/8BLrZY8; expires=Tue, 19 Apr 2022 07:59:35 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=PTw6FJkgO2/L2jIOKsJtVwAAAADSUW4NUU48BjkluUvUGSbJ; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=OkWiQPiKbjsjlI3RfEFwB/SjfWAAAAAArdvGBo4BRubCZpffky3cXw==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  'X-Iinfo',
  '5-3063500-3063503 NNNY CT(97 97 0) RT(1618846707798 40) q(0 0 0 -1) r(2 2) U5'
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
          },
          {
            "sys": {
              "type": "Link",
              "linkType": "Tag",
              "id": "old"
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
        "id": "6l1DmbV1sawNcjrXeOeMfv",
        "type": "Entry",
        "createdAt": "2021-04-19T15:38:22.873Z",
        "updatedAt": "2021-04-19T15:38:27.549Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:38:29 GMT',
  'etag',
  'W/"9871360877387997135"',
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
  '57a6bfb292710465d713d63f82d6c53d',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/entries',
  'Content-Length',
  '486',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=7gAwzwi5SS2Psul8yfo+zvSjfWAAAAAAQUIPAAAAAAD/9BeyIjLxdHgcaOIZF47n; expires=Tue, 19 Apr 2022 07:59:36 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=5H8fTPoYDQpbx+SOKsJtVwAAAAAWqA7MR5U22uDi3Hsw88IC; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=05hpE78pMAKNlI3RfEFwB/SjfWAAAAAAPe26eB/PDhckiZWZIjnoAA==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  'X-Iinfo',
  '2-3363253-3363258 NNNY CT(97 98 0) RT(1618846708071 41) q(0 0 0 -1) r(6 6) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/tags')
  .query({"limit":"100","order":"sys.createdAt","skip":"0"})
  .reply(200, {
  "sys": {
    "type": "Array"
  },
  "total": 3,
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
        "id": "longexampletag",
        "type": "Tag",
        "createdAt": "2021-04-19T15:37:14.149Z",
        "updatedAt": "2021-04-19T15:37:14.149Z",
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
        "version": 1,
        "visibility": "private"
      },
      "name": "long example marketing"
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
        "id": "new",
        "type": "Tag",
        "createdAt": "2021-04-19T15:38:21.421Z",
        "updatedAt": "2021-04-19T15:38:21.421Z",
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
        "version": 1,
        "visibility": "private"
      },
      "name": "new"
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
        "id": "old",
        "type": "Tag",
        "createdAt": "2021-04-19T15:38:21.752Z",
        "updatedAt": "2021-04-19T15:38:21.752Z",
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
        "version": 1,
        "visibility": "private"
      },
      "name": "old"
    }
  ]
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:38:30 GMT',
  'etag',
  'W/"4445545325445011369"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '532c1b3637ebbd239a0f1badbceac9f4',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/tags',
  'Content-Length',
  '422',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=hb3Z4ZAkQWmPZ7D16ZGcGfWjfWAAAAAAQUIPAAAAAACdeClhDTis22qclvwOmxse; expires=Tue, 19 Apr 2022 07:59:35 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=GOqIf6JbmxP5G7TyKsJtVwAAAAAJTLXOzD+HgeAI3adfyt+A; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=jrIvaJVvvFDflI3RfEFwB/WjfWAAAAAAvOCIQAhzBpoJuJ6rS064eQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  'X-Iinfo',
  '8-1953700-1953701 NNNY CT(95 95 0) RT(1618846708793 36) q(0 0 0 -1) r(6 6) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/env-integration/locales')
  .query({"limit":"100","order":"sys.createdAt","skip":"0"})
  .reply(200, {
  "sys": {
    "type": "Array"
  },
  "total": 1,
  "skip": 0,
  "limit": 100,
  "items": [
    {
      "name": "U.S. English",
      "internal_code": "en-US",
      "code": "en-US",
      "fallbackCode": null,
      "default": true,
      "contentManagementApi": true,
      "contentDeliveryApi": true,
      "optional": false,
      "sys": {
        "type": "Locale",
        "id": "0zK7OynpqVdcSetOBfe5P8",
        "version": 1,
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "bohepdihyxin"
          }
        },
        "environment": {
          "sys": {
            "type": "Link",
            "linkType": "Environment",
            "id": "env-integration",
            "uuid": "f9178c19-de73-40a3-bcd8-6104e54364f3"
          }
        },
        "createdAt": "2021-04-19T15:36:31Z",
        "updatedAt": "2021-04-19T15:36:31Z"
      }
    }
  ]
}
, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:38:30 GMT',
  'etag',
  '"3933806265352844587"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '188250eebdd0dc730ac31a70d0e6976d',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/locales',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=AZ0JICmPRZiQwqdYP0fKVfajfWAAAAAAQUIPAAAAAAD2OmrTCVet1EHMCSj6fHQi; expires=Tue, 19 Apr 2022 07:59:36 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=8+CEEnCskwoLF51YKsJtVwAAAADS1kSku3ZnuN9LAcfMkPf1; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=oX/lU7Ow4SFKlY3RfEFwB/ajfWAAAAAAWQhZXPn6bo7HbIQ+sBIKCQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  
  
  'Transfer-Encoding',
  'chunked',
  'X-Iinfo',
  '1-2655611-2655615 NNYY CT(90 90 0) RT(1618846709537 33) q(0 0 0 -1) r(6 6) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/env-integration/entries/6l1DmbV1sawNcjrXeOeMfv', {"sys":{"id":"6l1DmbV1sawNcjrXeOeMfv","version":2,"contentType":{"sys":{"type":"Link","linkType":"ContentType","id":"article"}}},"fields":{"title":{"en-US":"hello!"}},"metadata":{"tags":[]}})
  .reply(200, {"metadata":{"tags":[]},"sys":{"space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"id":"6l1DmbV1sawNcjrXeOeMfv","type":"Entry","createdAt":"2021-04-19T15:38:22.873Z","updatedAt":"2021-04-19T15:38:31.545Z","environment":{"sys":{"id":"env-integration","type":"Link","linkType":"Environment"}},"createdBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"updatedBy":{"sys":{"type":"Link","linkType":"User","id":"1Y7O5FbAkPYgNvD0MpQoAE"}},"publishedCounter":0,"version":3,"contentType":{"sys":{"type":"Link","linkType":"ContentType","id":"article"}}},"fields":{"title":{"en-US":"hello!"}}}, [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:38:31 GMT',
  'etag',
  '"12488163430594044364"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '3e06ffcc1864318e94ce048e68ef0d3b',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/entries/:id',
  'Content-Length',
  '993',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=xNl9fMFKRfWIY96vTvBr8/ajfWAAAAAAQUIPAAAAAACY6CEixdF6jVA+ZBm/eXzf; expires=Tue, 19 Apr 2022 07:59:36 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=Rc5DL1rUF3beIbV8KsJtVwAAAAD+GThqVVk44RvtHJ51mChj; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=jD3YK+bPtD+tlY3RfEFwB/ajfWAAAAAA9qQfLPwC0CvLw5UKxXD7VQ==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  'X-Iinfo',
  '10-6831881-6831893 NNNN CT(97 97 0) RT(1618846710197 34) q(0 0 2 -1) r(6 6) U5'
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
    "createdAt": "2021-04-19T15:38:20.667Z",
    "updatedAt": "2021-04-19T15:38:32.550Z",
    "environment": {
      "sys": {
        "id": "env-integration",
        "type": "Link",
        "linkType": "Environment"
      }
    },
    "publishedVersion": 1,
    "publishedAt": "2021-04-19T15:38:21.028Z",
    "firstPublishedAt": "2021-04-19T15:38:21.028Z",
    "createdBy": {
      "sys": {
        "type": "Link",
        "linkType": "User",
        "id": "1Y7O5FbAkPYgNvD0MpQoAE"
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:38:32 GMT',
  'etag',
  'W/"18175876460119728566"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35998',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  '80c9cc72549a9db55c66121fe8856724',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/content_types/:id',
  'Content-Length',
  '436',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=NAsd1wn5Q4ay040KSITPrfejfWAAAAAAQUIPAAAAAAA2H0IKaCSL/fWC7Yd/AU58; expires=Tue, 19 Apr 2022 07:59:37 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=+gyjP7YVcBAaNcrcKsJtVwAAAABAYPgFkKw5LinzrA1ojp6W; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=B5zcFdB+5EUvlo3RfEFwB/ejfWAAAAAA9MnAsgNtAZ190hhPekN59Q==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  'X-Iinfo',
  '6-1178671-1178682 NNNN CT(92 93 0) RT(1618846710877 29) q(0 0 1 -1) r(9 9) U5'
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
        "id": "6l1DmbV1sawNcjrXeOeMfv",
        "type": "Entry",
        "createdAt": "2021-04-19T15:38:22.873Z",
        "updatedAt": "2021-04-19T15:38:31.545Z",
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
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-environment-id',
  'env-integration',
  'cf-environment-uuid',
  'env-integration',
  'cf-space-id',
  'bohepdihyxin',
  
  
  'Content-Type',
  'application/vnd.contentful.management.v1+json',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'content-api',
  'Date',
  'Mon, 19 Apr 2021 15:38:33 GMT',
  'etag',
  'W/"10143886835559440551"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35999',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '05311da61684b4fd5bf48e879fc7f715',
  'x-contentful-route',
  '/spaces/:space/environments/:environment/entries',
  'Content-Length',
  '437',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=qhpd4boTRGmrS6lZPGEiZvijfWAAAAAAQUIPAAAAAADJIAXq4tiauN2QPW/DRJXq; expires=Tue, 19 Apr 2022 07:59:37 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=jIHlV4h0Si6izC7FKsJtVwAAAADaPQ1Tuo87AVv8deyUwNFG; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=2He5KjL7xzDIlo3RfEFwB/ijfWAAAAAAcruqZ8qryS+SWHe9vtmVFg==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  'X-Iinfo',
  '6-1178776-1178777 NNNN CT(93 93 0) RT(1618846711881 28) q(0 0 1 -1) r(8 8) U5'
]);

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .delete('/spaces/bohepdihyxin/environments/env-integration')
  .reply(204, "", [
  'Access-Control-Allow-Headers',
  'Accept,Accept-Language,Authorization,Cache-Control,Content-Length,Content-Range,Content-Type,DNT,Destination,Expires,If-Match,If-Modified-Since,If-None-Match,Keep-Alive,Last-Modified,Origin,Pragma,Range,User-Agent,X-Http-Method-Override,X-Mx-ReqToken,X-Requested-With,X-Contentful-Version,X-Contentful-Content-Type,X-Contentful-Organization,X-Contentful-Skip-Transformation,X-Contentful-Tag-Visibility,X-Contentful-User-Agent,X-Contentful-Enable-Alpha-Feature,X-Contentful-Source-Environment,X-Contentful-Team,X-Contentful-Parent-Id,x-contentful-validate-only,X-Contentful-Skip-UI-Draft-Validation,X-Contentful-Marketplace,X-Contentful-UI-Content-Auto-Save,cf-trace',
  'Access-Control-Allow-Methods',
  'DELETE,GET,HEAD,POST,PUT,PATCH,OPTIONS',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'Etag',
  'Access-Control-Max-Age',
  '1728000',
  'Cache-Control',
  'no-store',
  'cf-organization-id',
  '3ubGFD1MWA6VgVYbIwSBg8',
  'cf-space-id',
  'bohepdihyxin',
  'Contentful-Api',
  'cma',
  'Contentful-Upstream',
  'gatekeeper',
  'Date',
  'Mon, 19 Apr 2021 15:38:34 GMT',
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
  'e103f93689c2707b66bec8e5d5512bf0',
  'x-contentful-route',
  '/spaces/:space_id/environments/:id',
  'x-download-options',
  'noopen',
  'x-permitted-cross-domain-policies',
  'none',
  'x-xss-protection',
  '1; mode=block',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=nTj+Qq3TQPihOlHsrchmQvqjfWAAAAAAQUIPAAAAAACpzvlVpBtiYTJrS5etz1Nj; expires=Tue, 19 Apr 2022 07:59:36 GMT; HttpOnly; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=alWNIl6zhUWOI3p+KsJtVwAAAAArTt9SDKkOO+d2QcHcLTO9; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_536_673446=Eok+BB44Y1iCl43RfEFwB/qjfWAAAAAAn1iyqkVyKNXy4kRB40QQ1g==; path=/; Domain=.contentful.com',
  'X-CDN',
  'Imperva',
  'X-Iinfo',
  '9-2623226-2623230 NNNY CT(90 90 0) RT(1618846712830 40) q(0 0 0 -1) r(13 13) U5'
]);