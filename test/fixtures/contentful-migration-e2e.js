const nock = require('nock');

nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/end-to-end-env', {"name":"end-to-end-env"})
  .reply(201, {"name":"end-to-end-env","sys":{"type":"Environment","id":"end-to-end-env","version":1,"space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"status":{"sys":{"type":"Link","linkType":"Status","id":"queued"}},"createdBy":{"sys":{"type":"Link","linkType":"User","id":"33kZDXNajFNmbngiu5MvUa"}},"createdAt":"2018-07-24T08:14:14Z","updatedBy":{"sys":{"type":"Link","linkType":"User","id":"33kZDXNajFNmbngiu5MvUa"}},"updatedAt":"2018-07-24T08:14:14Z"}}, [ 'Accept-Ranges',
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
  'Tue, 24 Jul 2018 08:14:15 GMT',
  'ETag',
  'W/"84f3311d46e1706a4834fc6c6a242e58"',
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
  '3af629afa24ea8a515d498cd491bd3bb',
  'X-Download-Options',
  'noopen',
  'X-Frame-Options',
  'ALLOWALL',
  'X-Permitted-Cross-Domain-Policies',
  'none',
  'X-XSS-Protection',
  '1; mode=block',
  'Content-Length',
  '705',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=ysZpuCjSQO6IcGdg+nAtsNbfVlsAAAAAQUIPAAAAAABzccL18Hx+oXIpVzuOlx+K; expires=Tue, 23 Jul 2019 15:56:06 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=s7FCUSDQAitOaiXN6lKYhQAAAAC/kOQSjuWvhJAT4I6c4JiI; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=203dAOTYklWb89VGyS0oDNbfVlsAAAAAwRm6CviIaN0JPy2xuow1gA==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '12-7859139-7859151 NNNN CT(87 87 0) RT(1532420053658 46) q(0 0 1 -1) r(5 5) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/end-to-end-env')
  .reply(200, {
  "name":"end-to-end-env",
  "sys":{
    "type":"Environment",
    "id":"end-to-end-env",
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
    "createdAt":"2018-07-24T08:14:14Z",
    "updatedBy":{
      "sys":{
        "type":"Link",
        "linkType":"User",
        "id":"33kZDXNajFNmbngiu5MvUa"
      }
    },
    "updatedAt":"2018-07-24T08:14:15Z"
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
  'Tue, 24 Jul 2018 08:14:15 GMT',
  'ETag',
  'W/"b812add5b478d8bac1eaafc07fd83915"',
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
  '9',
  'X-Contentful-Request-Id',
  '191f9cb99f6aa3a29e855bde798971f3',
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
  'visid_incap_673446=aoeowKQGTIWYIWJptn0X6dbfVlsAAAAAQUIPAAAAAACdwfZ0t4T7sqiWLaXRbkDh; expires=Tue, 23 Jul 2019 15:56:06 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=Bq0pKEv7+306dbbr6lKYhQAAAACRdBd6+s7vw1kBMANfrkZ0; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=sTQqRnEflRBG9NVGyS0oDNbfVlsAAAAAIMD7/LKCkewF8Cmnfa6wNQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '13-11912093-11912103 NNNN CT(87 87 0) RT(1532420054290 25) q(0 0 1 -1) r(3 3) U5',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/end-to-end-env')
  .reply(200, {
  "name":"end-to-end-env",
  "sys":{
    "type":"Environment",
    "id":"end-to-end-env",
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
    "createdAt":"2018-07-24T08:14:14Z",
    "updatedBy":{
      "sys":{
        "type":"Link",
        "linkType":"User",
        "id":"33kZDXNajFNmbngiu5MvUa"
      }
    },
    "updatedAt":"2018-07-24T08:14:15Z"
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
  'Tue, 24 Jul 2018 08:14:17 GMT',
  'ETag',
  'W/"c4dbf3b61b4e1bcd2a699fdee13d304f"',
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
  '9',
  'X-Contentful-Request-Id',
  'ca49b297e3ae3fab1364cc34ec58a6d2',
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
  'visid_incap_673446=QKf9IFjXSiWJblXwdyjKbtjfVlsAAAAAQUIPAAAAAACe4bUnwGsDJPl83temNHx5; expires=Tue, 23 Jul 2019 15:56:01 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=njW8E2t2WS00xH+X6lKYhQAAAAABjel5m6vHyZbg9qSdeoMw; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=s29oXpSyyCCd9tVGyS0oDNjfVlsAAAAAABl3066IyCey6aYjbpMiZA==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '10-2372559-2372561 NNNN CT(86 176 0) RT(1532420055710 12) q(0 0 2 -1) r(4 4) U5',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/end-to-end-env/content_types/newsArticle', {"name":"news article","fields":[{"name":"author","id":"author","type":"Symbol"},{"name":"authorCity","id":"authorCity","type":"Symbol"},{"name":"byline","id":"byline","type":"Symbol"}]})
  .reply(201, {"sys":{"space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"id":"newsArticle","type":"ContentType","createdAt":"2018-07-24T08:14:17.513Z","updatedAt":"2018-07-24T08:14:17.513Z","environment":{"sys":{"id":"end-to-end-env","type":"Link","linkType":"Environment"}},"createdBy":{"sys":{"type":"Link","linkType":"User","id":"33kZDXNajFNmbngiu5MvUa"}},"updatedBy":{"sys":{"type":"Link","linkType":"User","id":"33kZDXNajFNmbngiu5MvUa"}},"version":1},"displayField":null,"name":"news article","description":null,"fields":[{"id":"author","name":"author","type":"Symbol","localized":false,"required":false,"validations":[],"disabled":false,"omitted":false},{"id":"authorCity","name":"authorCity","type":"Symbol","localized":false,"required":false,"validations":[],"disabled":false,"omitted":false},{"id":"byline","name":"byline","type":"Symbol","localized":false,"required":false,"validations":[],"disabled":false,"omitted":false}]}, [ 'Access-Control-Allow-Headers',
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
  'Tue, 24 Jul 2018 08:14:17 GMT',
  'ETag',
  '"ea20e87830f8ceccd1e201b3770a9f1a"',
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
  '9',
  'X-Contentful-Request-Id',
  'afafaadcc9160c0a5b2ccaff6c937bb5',
  'Content-Length',
  '1446',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=S1QiRdiUQhG5ukwbnpd8V9jfVlsAAAAAQUIPAAAAAADkXbklvX8OG9Ol8/vR4wus; expires=Tue, 23 Jul 2019 15:56:06 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=R2OER+sv2W9NkIcc6lKYhQAAAACatHIASnbcbkY27f31b+Au; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=e1IXL5atKWFb99VGyS0oDNjfVlsAAAAASc7B3Eq4bs1OrooBGeK9YA==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '14-15668765-15668771 NNNN CT(0 0 0) RT(1532420056239 17) q(0 0 0 -1) r(4 4) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/end-to-end-env/content_types/newsArticle/published')
  .reply(200, {
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "bohepdihyxin"
      }
    },
    "id": "newsArticle",
    "type": "ContentType",
    "createdAt": "2018-07-24T08:14:17.513Z",
    "updatedAt": "2018-07-24T08:14:18.077Z",
    "environment": {
      "sys": {
        "id": "end-to-end-env",
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
    "firstPublishedAt": "2018-07-24T08:14:18.077Z",
    "publishedCounter": 1,
    "publishedAt": "2018-07-24T08:14:18.077Z",
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
  "name": "news article",
  "description": null,
  "fields": [
    {
      "id": "author",
      "name": "author",
      "type": "Symbol",
      "localized": false,
      "required": false,
      "validations": [],
      "disabled": false,
      "omitted": false
    },
    {
      "id": "authorCity",
      "name": "authorCity",
      "type": "Symbol",
      "localized": false,
      "required": false,
      "validations": [],
      "disabled": false,
      "omitted": false
    },
    {
      "id": "byline",
      "name": "byline",
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
  'Tue, 24 Jul 2018 08:14:18 GMT',
  'ETag',
  'W/"b20e701ba5d54e1114330382bbc78782"',
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
  '8',
  'X-Contentful-Request-Id',
  '257f06620dac1d3bc75ece6707e1808e',
  'Content-Length',
  '463',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=vRk5pam4QomBE+kQpHd6jNnfVlsAAAAAQUIPAAAAAAAmlvThwkku53hNfBNMUp9Z; expires=Tue, 23 Jul 2019 15:56:06 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=GWgOfhg2NgAlUuvC6lKYhQAAAABUGG2hVQEsCBnue+Y54L06; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=4Z+/XOulW0Ji+NVGyS0oDNnfVlsAAAAAnFS2bRC6pGyx53vx+eJFGw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '7-3855277-3855278 NNNN CT(89 89 0) RT(1532420056715 18) q(0 0 2 -1) r(6 6) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .post('/spaces/bohepdihyxin/environments/end-to-end-env/entries', {"fields":{"author":{"en-US":"Jane Austen"},"authorCity":{"en-US":"Steventon"}}})
  .reply(201, {
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "bohepdihyxin"
      }
    },
    "id": "68Lf8yTL9YEisYUKU4iQaa",
    "type": "Entry",
    "createdAt": "2018-07-24T08:14:18.574Z",
    "updatedAt": "2018-07-24T08:14:18.574Z",
    "environment": {
      "sys": {
        "id": "end-to-end-env",
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
        "id": "newsArticle"
      }
    }
  },
  "fields": {
    "author": {
      "en-US": "Jane Austen"
    },
    "authorCity": {
      "en-US": "Steventon"
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
  'Tue, 24 Jul 2018 08:14:18 GMT',
  'ETag',
  '"1711a85663bcc4cc2d6d740c7dd03d2e"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35994',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '9f9f5b8baae2e1bd7c54bb55ce4476af',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=naBOM3wYQVqb5T9dkJY8RdnfVlsAAAAAQUIPAAAAAAAqd4NXxlHcpxK/UcVsaxIT; expires=Tue, 23 Jul 2019 15:56:06 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=BFgcEf7T+ndZqg866lKYhQAAAADXg1VmsQlj+NUb/0FuV4uw; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=j6bFRb51YkAF+dVGyS0oDNnfVlsAAAAAJRULb/zzwvMa9QtjKpaK6w==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '7-3855316-3855318 NNNN CT(0 0 0) RT(1532420057381 18) q(0 0 0 -1) r(5 5) U5',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/end-to-end-env/entries')
  .query({"content_type":"newsArticle"})
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
        "id": "68Lf8yTL9YEisYUKU4iQaa",
        "type": "Entry",
        "createdAt": "2018-07-24T08:14:18.574Z",
        "updatedAt": "2018-07-24T08:14:22.762Z",
        "environment": {
          "sys": {
            "id": "end-to-end-env",
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
        "firstPublishedAt": "2018-07-24T08:14:22.762Z",
        "publishedAt": "2018-07-24T08:14:22.762Z",
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "newsArticle"
          }
        }
      },
      "fields": {
        "author": {
          "en-US": "Jane Austen"
        },
        "authorCity": {
          "en-US": "Steventon"
        },
        "byline": {
          "en-US": "Jane Austen Steventon"
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
  'Tue, 24 Jul 2018 08:14:23 GMT',
  'ETag',
  'W/"107f5f8e5796f550c71c474cba01c2f5"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35985',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '94b6dcd2893381793ebfcc9131c661cd',
  'Content-Length',
  '491',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=IQG1RSraT0OqSkOEAyplCN7fVlsAAAAAQUIPAAAAAABpnOdckgJdq2agks/Agcsw; expires=Tue, 23 Jul 2019 15:56:06 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=4/TJVnSZGxcif1qi6lKYhQAAAAAqvks2elLCQYAj1dN6kwe8; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=XgTqT0T/1Rf6/9VGyS0oDN7fVlsAAAAAtAU+U1aZ1WfxpXSP2iRXTQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '11-4545713-4545717 NNNN CT(89 89 0) RT(1532420062533 22) q(0 0 2 -1) r(3 3) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .delete('/spaces/bohepdihyxin/environments/end-to-end-env')
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
  'Tue, 24 Jul 2018 08:14:25 GMT',
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
  '35981',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '8db542cb9295fd23c6d3876ada5d57a1',
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
  'visid_incap_673446=++1JGACwTiS7wQIEUz208ODfVlsAAAAAQUIPAAAAAAB3Dzc74MhBLq34qvhRkOPF; expires=Tue, 23 Jul 2019 15:56:06 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=vfdjAdnlUFjRmaH26lKYhQAAAADEX63L1f2e9SDjqzBue+Iy; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=HKBGGNHFtCC3AdZGyS0oDODfVlsAAAAAiPAEogph5bhulAYZkJStjg==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '13-11914679-11914689 NNNN CT(0 0 0) RT(1532420064043 24) q(0 0 0 -1) r(3 3) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/end-to-end-env', {"name":"end-to-end-env"})
  .reply(201, {"name":"end-to-end-env","sys":{"type":"Environment","id":"end-to-end-env","version":1,"space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"status":{"sys":{"type":"Link","linkType":"Status","id":"queued"}},"createdBy":{"sys":{"type":"Link","linkType":"User","id":"33kZDXNajFNmbngiu5MvUa"}},"createdAt":"2018-07-24T08:14:25Z","updatedBy":{"sys":{"type":"Link","linkType":"User","id":"33kZDXNajFNmbngiu5MvUa"}},"updatedAt":"2018-07-24T08:14:25Z"}}, [ 'Accept-Ranges',
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
  'Tue, 24 Jul 2018 08:14:25 GMT',
  'ETag',
  'W/"b524ce67a03b43d3aae9a40c21b828ae"',
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
  '35980',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  'df419c5c18febe5ef7c8708377fb788f',
  'X-Download-Options',
  'noopen',
  'X-Frame-Options',
  'ALLOWALL',
  'X-Permitted-Cross-Domain-Policies',
  'none',
  'X-XSS-Protection',
  '1; mode=block',
  'Content-Length',
  '705',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=E1PP5en0Q3e0HQWFeaRYKeDfVlsAAAAAQUIPAAAAAAAFc+F0ekx23wvQOu3X6Hes; expires=Tue, 23 Jul 2019 15:56:06 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=NVn4WW9FjzaIsDHz6lKYhQAAAAAsZ7wcrhc+8n7wCfHnEQPk; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=lUEIRXIvOFR2AtZGyS0oDODfVlsAAAAAEyCU1DUvnv4DStpuY4bNPw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '8-473849-473852 NNNN CT(87 88 0) RT(1532420064381 21) q(0 0 1 -1) r(4 4) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/end-to-end-env')
  .reply(200, {
  "name":"end-to-end-env",
  "sys":{
    "type":"Environment",
    "id":"end-to-end-env",
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
    "createdAt":"2018-07-24T08:14:25Z",
    "updatedBy":{
      "sys":{
        "type":"Link",
        "linkType":"User",
        "id":"33kZDXNajFNmbngiu5MvUa"
      }
    },
    "updatedAt":"2018-07-24T08:14:25Z"
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
  'Tue, 24 Jul 2018 08:14:25 GMT',
  'ETag',
  'W/"e82e6501b091f313f557885af2851687"',
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
  '35979',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '7',
  'X-Contentful-Request-Id',
  '2558b388cda0426b60c4324c9c679b1e',
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
  'visid_incap_673446=rx5gF2TkR9m1W4HWLOCl8uHfVlsAAAAAQUIPAAAAAAAVBQlglMmRW96z4bL5Pi47; expires=Tue, 23 Jul 2019 15:56:06 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=3SWRHiVdJA2Xkta06lKYhQAAAAB9T03ULBuUX/9QR0clBNp0; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=yUbyUG3KKRPTAtZGyS0oDOHfVlsAAAAAb9xgB3AACZxB53bv7foyLA==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '14-15671165-15671171 NNNN CT(0 0 0) RT(1532420064889 18) q(0 0 0 -1) r(1 1) U5',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/end-to-end-env')
  .reply(200, {
  "name":"end-to-end-env",
  "sys":{
    "type":"Environment",
    "id":"end-to-end-env",
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
    "createdAt":"2018-07-24T08:14:25Z",
    "updatedBy":{
      "sys":{
        "type":"Link",
        "linkType":"User",
        "id":"33kZDXNajFNmbngiu5MvUa"
      }
    },
    "updatedAt":"2018-07-24T08:14:26Z"
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
  'Tue, 24 Jul 2018 08:14:27 GMT',
  'ETag',
  'W/"17b54ea0ec4fdc13b6a42ce36d6e4b13"',
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
  '35978',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '5f153178ceb6df858253d7b07ba1a337',
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
  'visid_incap_673446=fVWhJuLpR5mXiJMwqiBvteLfVlsAAAAAQUIPAAAAAABKG39wtdtr/7tdhhfgS1XJ; expires=Tue, 23 Jul 2019 15:56:06 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=ETfxeokqtyXfpsWN6lKYhQAAAAAz6Ub/sFziDL94tDxbI1yV; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=8QK8Y+g3/Qy3BNZGyS0oDOLfVlsAAAAAtERhj86nK5MpEniAb6aTWw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '14-15671662-15671672 NNNN CT(0 0 0) RT(1532420066110 15) q(0 0 0 -1) r(1 1) U5',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/end-to-end-env/content_types/dog')
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
    "createdAt": "2018-07-24T08:14:29.707Z",
    "updatedAt": "2018-07-24T08:14:29.955Z",
    "environment": {
      "sys": {
        "id": "end-to-end-env",
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
    "firstPublishedAt": "2018-07-24T08:14:29.955Z",
    "publishedAt": "2018-07-24T08:14:29.955Z"
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
  'Tue, 24 Jul 2018 08:14:30 GMT',
  'ETag',
  'W/"65a40e3c161a6c04c411918042744e6f"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35971',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '35a5790266529327e7012524e988a223',
  'Content-Length',
  '440',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=fPMqC0zuQt+BurL9UWDPTuXfVlsAAAAAQUIPAAAAAADd5mweS2nx1+i3qO7CwqL0; expires=Tue, 23 Jul 2019 15:56:06 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=paXyHIp9fyrTDgXn6lKYhQAAAADIf8CqmtV8efIwlozcCJ0p; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=fHIUdFb95U6CCdZGyS0oDOXfVlsAAAAAbnk6OLsHQDg9JYDO8FdAow==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '12-7862571-7862573 NNNN CT(0 0 0) RT(1532420069269 17) q(0 0 0 -1) r(3 3) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/end-to-end-env/content_types/dog')
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
    "createdAt": "2018-07-24T08:14:29.707Z",
    "updatedAt": "2018-07-24T08:14:33.099Z",
    "environment": {
      "sys": {
        "id": "end-to-end-env",
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
    "firstPublishedAt": "2018-07-24T08:14:29.955Z",
    "publishedAt": "2018-07-24T08:14:33.099Z"
  },
  "displayField": null,
  "name": "Friendly dog",
  "description": "Who's a good boy? He is!",
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
    },
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
  'Tue, 24 Jul 2018 08:14:33 GMT',
  'ETag',
  'W/"6a9153497e6a4d5f2e48885f48039a62"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35964',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  'f450780c60315066e8043a178f944c84',
  'Content-Length',
  '510',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=B3Jj3M4NQs6Jh/fPerzuOujfVlsAAAAAQUIPAAAAAADyW2wGyRXeQcOaqqcM1cy4; expires=Tue, 23 Jul 2019 15:56:06 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=5bUpExNi/GzwFSgL6lKYhQAAAACjsQVTbElN1yOXdVpI+Z7H; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=Pac5Ca7JM0nyDdZGyS0oDOjfVlsAAAAAK5WmFWe1yY1acYHCesZHSw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '9-1063726-1063730 NNNN CT(0 0 0) RT(1532420072404 19) q(0 0 0 -1) r(1 1) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/end-to-end-env/content_types/person')
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
    "createdAt": "2018-07-24T08:14:35.935Z",
    "updatedAt": "2018-07-24T08:14:37.562Z",
    "environment": {
      "sys": {
        "id": "end-to-end-env",
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
    "firstPublishedAt": "2018-07-24T08:14:36.288Z",
    "publishedAt": "2018-07-24T08:14:37.562Z"
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
  'Tue, 24 Jul 2018 08:14:38 GMT',
  'ETag',
  'W/"6c092af23ac82cf3acde34172e9a35b5"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35951',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '7',
  'X-Contentful-Request-Id',
  '6b17e13f462969b33a1a0ba7cdd3645d',
  'Content-Length',
  '523',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=BQkUKvQVT32E7ap7ChQKUu7fVlsAAAAAQUIPAAAAAABEb+TPOCO3yqqhR1PEWSSV; expires=Tue, 23 Jul 2019 15:56:06 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=eRvdWO1KoAbHgYR86lKYhQAAAAC+iXD6SaRoOmg7Vzcr8Wof; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=a/r5F2mIFGjTFtZGyS0oDO7fVlsAAAAAjJGk02PWYw8cuQn2lGdYIg==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '13-11918415-11918424 NNNN CT(0 0 0) RT(1532420077904 25) q(0 0 0 -1) r(1 1) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/end-to-end-env/content_types/animal')
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
    "createdAt": "2018-07-24T08:14:36.616Z",
    "updatedAt": "2018-07-24T08:14:38.565Z",
    "environment": {
      "sys": {
        "id": "end-to-end-env",
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
    "firstPublishedAt": "2018-07-24T08:14:37.002Z",
    "publishedAt": "2018-07-24T08:14:38.565Z"
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
  'Tue, 24 Jul 2018 08:14:39 GMT',
  'ETag',
  'W/"c72333bdcbfd2090e03fcfaf02c58ca8"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35950',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '412decb91793975707550c60ab0c3b57',
  'Content-Length',
  '511',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=CZqcKIvjRLyaYiuavTpasu7fVlsAAAAAQUIPAAAAAABknAGzqpqqFgVc9B2CuoVl; expires=Tue, 23 Jul 2019 15:56:06 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=XVkudSELbTDHZL0+6lKYhQAAAADEurZKC+AdRTPq3DFUAhC1; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=HxiMLapi91sZF9ZGyS0oDO7fVlsAAAAAYEvMoJNZ6SogvdB1UJCDpg==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '3-4978627-4978628 NNNN CT(0 0 0) RT(1532420078125 19) q(0 0 0 -1) r(1 1) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/end-to-end-env/content_types/dog')
  .reply(404, {
  "sys": {
    "type": "Error",
    "id": "NotFound"
  },
  "message": "The resource could not be found.",
  "details": {
    "id": "dog",
    "type": "ContentType",
    "space": "bohepdihyxin",
    "environment": "end-to-end-env"
  },
  "requestId": "d6397993268e0ec0a9fb20904ba6cc28"
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
  'Tue, 24 Jul 2018 08:14:41 GMT',
  'ETag',
  '"05c4d54cd0021925e9b7800a48b84192"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35944',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'd6397993268e0ec0a9fb20904ba6cc28',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=tPDxFcteTv6yHv/WZTd0wfDfVlsAAAAAQUIPAAAAAAAthZ8BTbPVAgn50oXqB/5W; expires=Tue, 23 Jul 2019 15:56:06 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=y/b2NMO6TzqbYF5o6lKYhQAAAADJ4wLe3H1tb13hV4rO5fgf; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=n6c8Q/Fc832UGtZGyS0oDPDfVlsAAAAAJj69gK6VjSS3OAQqu0KsbA==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '13-11919065-11919072 NNNN CT(0 0 0) RT(1532420080392 24) q(0 0 0 -1) r(1 1) U5',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .delete('/spaces/bohepdihyxin/environments/end-to-end-env')
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
  'Tue, 24 Jul 2018 08:14:41 GMT',
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
  '35943',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  '1801410ef83847dbd1e17317e9d3ac12',
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
  'visid_incap_673446=h0N8ArTwSFO02qfGMpZBa/HfVlsAAAAAQUIPAAAAAAAmzclh55UIwWsJ7rFN4dM6; expires=Tue, 23 Jul 2019 15:56:00 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=V8DjG4UVsjH/8B/s6lKYhQAAAADog9S+8FLVku+wyq6IT0BF; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=ZX25CYspmCaVG9ZGyS0oDPHfVlsAAAAAZacFhzZOaiypE603D2R+PA==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '5-7260298-7260303 NNNN CT(85 87 0) RT(1532420080624 18) q(0 0 2 -1) r(4 4) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/end-to-end-env', {"name":"end-to-end-env"})
  .reply(201, {"name":"end-to-end-env","sys":{"type":"Environment","id":"end-to-end-env","version":1,"space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"status":{"sys":{"type":"Link","linkType":"Status","id":"queued"}},"createdBy":{"sys":{"type":"Link","linkType":"User","id":"33kZDXNajFNmbngiu5MvUa"}},"createdAt":"2018-07-24T08:14:42Z","updatedBy":{"sys":{"type":"Link","linkType":"User","id":"33kZDXNajFNmbngiu5MvUa"}},"updatedAt":"2018-07-24T08:14:42Z"}}, [ 'Accept-Ranges',
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
  'Tue, 24 Jul 2018 08:14:42 GMT',
  'ETag',
  'W/"0561be7d8534fbc6f12a49eb37cb642b"',
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
  '35942',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'd25b0259bc286aa4f13801e81210b447',
  'X-Download-Options',
  'noopen',
  'X-Frame-Options',
  'ALLOWALL',
  'X-Permitted-Cross-Domain-Policies',
  'none',
  'X-XSS-Protection',
  '1; mode=block',
  'Content-Length',
  '705',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=AAkU1XN5RY2nlCgnG8PdVvHfVlsAAAAAQUIPAAAAAACDGED+j/pc7sxuD5QrMVf6; expires=Tue, 23 Jul 2019 15:56:06 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=446jDP8UI1yhPZZd6lKYhQAAAAB3Jup4UUGG31YEFvCXIAAr; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=LAJQWcD2tUwgHNZGyS0oDPHfVlsAAAAAgVkKSUzv8pE2S/ndkcw81w==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '14-15675671-15675681 NNNN CT(0 0 0) RT(1532420081128 19) q(0 0 0 -1) r(3 3) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/end-to-end-env')
  .reply(200, {
  "name":"end-to-end-env",
  "sys":{
    "type":"Environment",
    "id":"end-to-end-env",
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
    "createdAt":"2018-07-24T08:14:42Z",
    "updatedBy":{
      "sys":{
        "type":"Link",
        "linkType":"User",
        "id":"33kZDXNajFNmbngiu5MvUa"
      }
    },
    "updatedAt":"2018-07-24T08:14:42Z"
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
  'Tue, 24 Jul 2018 08:14:42 GMT',
  'ETag',
  'W/"7e8f5a88ec6686e10af2aef4f25ab7a0"',
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
  '35941',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  'f3770f8d4a8e2ed9603729b013973883',
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
  'visid_incap_673446=HhRmjCZ7R/W9G9dKIohrivHfVlsAAAAAQUIPAAAAAAB9/vQ1U36bOelYgWmoswv7; expires=Tue, 23 Jul 2019 15:56:06 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=+m0DUZa1hUm/aSBj6lKYhQAAAACoFdv0LT4HEsaFFnjblWIj; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=T3o3ZU9nBn55HNZGyS0oDPHfVlsAAAAAl1+HiZ0PDOAJaApHk7CXeA==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '12-7865383-7865387 NNNN CT(0 0 0) RT(1532420081478 14) q(0 0 0 -1) r(2 2) U5',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/end-to-end-env')
  .reply(200, {
  "name":"end-to-end-env",
  "sys":{
    "type":"Environment",
    "id":"end-to-end-env",
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
    "createdAt":"2018-07-24T08:14:42Z",
    "updatedBy":{
      "sys":{
        "type":"Link",
        "linkType":"User",
        "id":"33kZDXNajFNmbngiu5MvUa"
      }
    },
    "updatedAt":"2018-07-24T08:14:42Z"
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
  'Tue, 24 Jul 2018 08:14:43 GMT',
  'ETag',
  'W/"2847773d0ea42fca071c35810ddc5be3"',
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
  '35940',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'bfe0b0576fd7b9803f13e67c8106f385',
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
  'visid_incap_673446=kOXiKAm1Q7SHbqU3Jci7evLfVlsAAAAAQUIPAAAAAACCAStXwLn9T1KH/OeWY8Ds; expires=Tue, 23 Jul 2019 15:56:06 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=v80GbZJ+jUSElrer6lKYhQAAAAAbwqR0A64B02yLmg1AyvGa; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=ySEfYkztiAtFHtZGyS0oDPLfVlsAAAAA15GbHyTuMQVpSxVs7680KQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '12-7865627-7865629 NNNN CT(0 0 0) RT(1532420082688 12) q(0 1 1 -1) r(2 2) U5',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/end-to-end-env/content_types/dog', {"name":"Angry dog","fields":[{"name":"Name","type":"Symbol","id":"name"},{"name":"Breed","type":"Symbol","id":"breed"},{"name":"Owner","type":"Symbol","id":"owner"}]})
  .reply(201, {"sys":{"space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"id":"dog","type":"ContentType","createdAt":"2018-07-24T08:14:44.117Z","updatedAt":"2018-07-24T08:14:44.117Z","environment":{"sys":{"id":"end-to-end-env","type":"Link","linkType":"Environment"}},"createdBy":{"sys":{"type":"Link","linkType":"User","id":"33kZDXNajFNmbngiu5MvUa"}},"updatedBy":{"sys":{"type":"Link","linkType":"User","id":"33kZDXNajFNmbngiu5MvUa"}},"version":1},"displayField":null,"name":"Angry dog","description":null,"fields":[{"id":"name","name":"Name","type":"Symbol","localized":false,"required":false,"validations":[],"disabled":false,"omitted":false},{"id":"breed","name":"Breed","type":"Symbol","localized":false,"required":false,"validations":[],"disabled":false,"omitted":false},{"id":"owner","name":"Owner","type":"Symbol","localized":false,"required":false,"validations":[],"disabled":false,"omitted":false}]}, [ 'Access-Control-Allow-Headers',
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
  'Tue, 24 Jul 2018 08:14:44 GMT',
  'ETag',
  '"315cadab11b9c64048587d73f5d65a9f"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35939',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  'cd93b3cad034f8a80f97b1ed0b5b8df5',
  'Content-Length',
  '1419',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=dGrLZI36QLK/GgZlEWPSFPPfVlsAAAAAQUIPAAAAAAAHAR10j/GQe2VVr4eb7esJ; expires=Tue, 23 Jul 2019 15:56:00 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=Gl0/KVyGqEtuz0fe6lKYhQAAAADQC5HkBeCjD7kAD1vuSKbt; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=P7duGmLzu1W5HtZGyS0oDPPfVlsAAAAAZKPQ8E3SfHmDUq0zPvXRDg==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '5-7260699-7260703 NNNN CT(0 0 0) RT(1532420082915 18) q(0 0 0 -1) r(3 3) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/end-to-end-env/content_types/dog/published')
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
    "createdAt": "2018-07-24T08:14:44.117Z",
    "updatedAt": "2018-07-24T08:14:44.494Z",
    "environment": {
      "sys": {
        "id": "end-to-end-env",
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
    "firstPublishedAt": "2018-07-24T08:14:44.494Z",
    "publishedCounter": 1,
    "publishedAt": "2018-07-24T08:14:44.494Z",
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
  "name": "Angry dog",
  "description": null,
  "fields": [
    {
      "id": "name",
      "name": "Name",
      "type": "Symbol",
      "localized": false,
      "required": false,
      "validations": [],
      "disabled": false,
      "omitted": false
    },
    {
      "id": "breed",
      "name": "Breed",
      "type": "Symbol",
      "localized": false,
      "required": false,
      "validations": [],
      "disabled": false,
      "omitted": false
    },
    {
      "id": "owner",
      "name": "Owner",
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
  'Tue, 24 Jul 2018 08:14:44 GMT',
  'ETag',
  'W/"5fcde64221450874c66d25c57e97dff0"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35938',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'fcbbca838cefb9d365f7497bc66c2f16',
  'Content-Length',
  '450',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=CBsqz2iASriJBBgm94GWO/PfVlsAAAAAQUIPAAAAAAAhNjPEi5olKz2chIF8DyNm; expires=Tue, 23 Jul 2019 15:56:06 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=wJEEU87XZks6Og8f6lKYhQAAAABGVsd8ih4RSR/Z90XqO2J1; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=OBeBNPIHuW9TH9ZGyS0oDPPfVlsAAAAASzj/6B8KZH39ZawPqHgaEw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '6-2437579-2437581 NNNN CT(0 0 0) RT(1532420083300 12) q(0 0 0 -1) r(4 4) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .post('/spaces/bohepdihyxin/environments/end-to-end-env/entries', {"fields":{"name":{"en-US":"Moses"},"breed":{"en-US":"Poodle"},"owner":{"en-US":"Contentful Office"}}})
  .reply(201, {
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "bohepdihyxin"
      }
    },
    "id": "4jCi8VWmLSyI6oawYUEiEo",
    "type": "Entry",
    "createdAt": "2018-07-24T08:14:44.967Z",
    "updatedAt": "2018-07-24T08:14:44.967Z",
    "environment": {
      "sys": {
        "id": "end-to-end-env",
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
        "id": "dog"
      }
    }
  },
  "fields": {
    "name": {
      "en-US": "Moses"
    },
    "breed": {
      "en-US": "Poodle"
    },
    "owner": {
      "en-US": "Contentful Office"
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
  'Tue, 24 Jul 2018 08:14:45 GMT',
  'ETag',
  '"42d31854550ed97087af6b2cae5aa887"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35937',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  '41e460dac7d88a1775d7b6a7bb61ec16',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=M4JeoXkXSYifcgroazCJRPTfVlsAAAAAQUIPAAAAAABVi9KDPk4oVm/Mvjqu9zUV; expires=Tue, 23 Jul 2019 15:56:06 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=Rn5IXBIQcE6KbyPN6lKYhQAAAAB/ifyJHdzPEL5+uHrKuMCo; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=xt62JK4OFC7EH9ZGyS0oDPTfVlsAAAAAQAkas6/VAbrgvPrmR8bBcQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '13-11919807-11919813 NNNN CT(0 0 0) RT(1532420083801 13) q(0 0 0 -1) r(3 3) U5',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .post('/spaces/bohepdihyxin/environments/end-to-end-env/entries', {"fields":{"name":{"en-US":"Luna"},"breed":{"en-US":"Something"},"owner":{"en-US":"Contentful Office"}}})
  .reply(201, {
  "sys": {
    "space": {
      "sys": {
        "type": "Link",
        "linkType": "Space",
        "id": "bohepdihyxin"
      }
    },
    "id": "gM3bHeLvIk8gsiIyEq88O",
    "type": "Entry",
    "createdAt": "2018-07-24T08:14:45.320Z",
    "updatedAt": "2018-07-24T08:14:45.320Z",
    "environment": {
      "sys": {
        "id": "end-to-end-env",
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
        "id": "dog"
      }
    }
  },
  "fields": {
    "name": {
      "en-US": "Luna"
    },
    "breed": {
      "en-US": "Something"
    },
    "owner": {
      "en-US": "Contentful Office"
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
  'Tue, 24 Jul 2018 08:14:45 GMT',
  'ETag',
  '"7b8221ba7192714105f0956cb0613ea0"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35936',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '28d81b26ce9dd0b76b97dd88cbe4b7d9',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=EgFOodWLQh+58mFMccxjyfTfVlsAAAAAQUIPAAAAAACd8Z4U8tB0vonF7NggD4PB; expires=Tue, 23 Jul 2019 15:56:06 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=oX0wRXagugrLHcvZ6lKYhQAAAACTKlZCmTXMaCFyCpycJ5QI; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=qfbIHnUdYRViINZGyS0oDPTfVlsAAAAAYtobA+hTVTui+wkozjoS2A==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '14-15676603-15676609 NNNN CT(0 0 0) RT(1532420084139 12) q(0 0 0 -1) r(4 4) U5',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/end-to-end-env/entries')
  .query({"content_type":"dog"})
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
        "id": "gM3bHeLvIk8gsiIyEq88O",
        "type": "Entry",
        "createdAt": "2018-07-24T08:14:45.320Z",
        "updatedAt": "2018-07-24T08:14:51.609Z",
        "environment": {
          "sys": {
            "id": "end-to-end-env",
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
        "firstPublishedAt": "2018-07-24T08:14:51.609Z",
        "publishedAt": "2018-07-24T08:14:51.609Z",
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "dog"
          }
        }
      },
      "fields": {
        "name": {
          "en-US": "Luna"
        },
        "breed": {
          "en-US": "Something"
        },
        "owner": {
          "en-US": {
            "sys": {
              "type": "Link",
              "linkType": "Entry",
              "id": "contentful-office"
            }
          }
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
        "id": "4jCi8VWmLSyI6oawYUEiEo",
        "type": "Entry",
        "createdAt": "2018-07-24T08:14:44.967Z",
        "updatedAt": "2018-07-24T08:14:51.084Z",
        "environment": {
          "sys": {
            "id": "end-to-end-env",
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
        "firstPublishedAt": "2018-07-24T08:14:51.084Z",
        "publishedAt": "2018-07-24T08:14:51.084Z",
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "dog"
          }
        }
      },
      "fields": {
        "name": {
          "en-US": "Moses"
        },
        "breed": {
          "en-US": "Poodle"
        },
        "owner": {
          "en-US": {
            "sys": {
              "type": "Link",
              "linkType": "Entry",
              "id": "contentful-office"
            }
          }
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
  'Tue, 24 Jul 2018 08:14:53 GMT',
  'ETag',
  'W/"0cd6fc43ac0c97c73f06e3e5fc85c779"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35913',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '7',
  'X-Contentful-Request-Id',
  '7e1800baff843d7ae999245796e24868',
  'Content-Length',
  '597',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=WzFiMXmES2SoSNPsP91cHP3fVlsAAAAAQUIPAAAAAACMyJs4bNQsJl4q+1AJem4M; expires=Tue, 23 Jul 2019 15:56:06 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=5hggEbk5UD47aWw06lKYhQAAAABQEmmKs6lD+9ERgBslwWR1; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=y6mcH3t3zwN4LtZGyS0oDP3fVlsAAAAAoGe9B5DXxsJpWZzAC3VI9w==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '12-7867682-7867692 NNNN CT(0 0 0) RT(1532420092918 20) q(0 0 0 -1) r(1 1) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/end-to-end-env/entries')
  .query({"content_type":"owner"})
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
        "id": "contentful-office",
        "type": "Entry",
        "createdAt": "2018-07-24T08:14:49.866Z",
        "updatedAt": "2018-07-24T08:14:50.279Z",
        "environment": {
          "sys": {
            "id": "end-to-end-env",
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
        "firstPublishedAt": "2018-07-24T08:14:50.279Z",
        "publishedAt": "2018-07-24T08:14:50.279Z",
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "owner"
          }
        }
      },
      "fields": {
        "firstName": {
          "en-US": "Contentful"
        },
        "lastName": {
          "en-US": "Office"
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
  'Tue, 24 Jul 2018 08:14:54 GMT',
  'ETag',
  'W/"de0bb32bc46dadc6ecd7861f371bd262"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35912',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '49bd84715dc3dcb70ed39c4456bcc053',
  'Content-Length',
  '446',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=82raNbAfRKybEa/DQjTb6P3fVlsAAAAAQUIPAAAAAAAAakG+5Fwobiz34AtpE9ML; expires=Tue, 23 Jul 2019 15:56:07 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=raCZcspgg3Jolntl6lKYhQAAAABIcDqCT8qAa+4hDk0J+UYP; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=GJvdYdA3gxLGLtZGyS0oDP3fVlsAAAAACs58/btsDqpo4ZjaZBAKFQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '0-915772-915773 NNNN CT(0 0 0) RT(1532420093112 14) q(0 0 0 -1) r(1 1) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .delete('/spaces/bohepdihyxin/environments/end-to-end-env')
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
  'Tue, 24 Jul 2018 08:14:54 GMT',
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
  '35911',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  '2eaec0b1dcc7863cea3814922342a8b5',
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
  'visid_incap_673446=nARnXg5WRXWivMMqwgpbjf3fVlsAAAAAQUIPAAAAAADztQ0PlGLHz6kHOWkOPW73; expires=Tue, 23 Jul 2019 15:56:06 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=hARXQRiIswXbtqln6lKYhQAAAAAkHUESP3G7V3tw2Xyst2oC; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=AWTiKlkFZQUoL9ZGyS0oDP3fVlsAAAAA6m4s7LWx4AiGeHiMwosNIg==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '6-2437969-2437971 NNNN CT(0 0 0) RT(1532420093305 19) q(0 0 0 -1) r(2 2) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/end-to-end-env', {"name":"end-to-end-env"})
  .reply(201, {"name":"end-to-end-env","sys":{"type":"Environment","id":"end-to-end-env","version":1,"space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"status":{"sys":{"type":"Link","linkType":"Status","id":"queued"}},"createdBy":{"sys":{"type":"Link","linkType":"User","id":"33kZDXNajFNmbngiu5MvUa"}},"createdAt":"2018-07-24T08:14:54Z","updatedBy":{"sys":{"type":"Link","linkType":"User","id":"33kZDXNajFNmbngiu5MvUa"}},"updatedAt":"2018-07-24T08:14:54Z"}}, [ 'Accept-Ranges',
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
  'Tue, 24 Jul 2018 08:14:55 GMT',
  'ETag',
  'W/"3c3cc2020e582ee439d3c5eddae9f0e7"',
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
  '35910',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '7',
  'X-Contentful-Request-Id',
  '6d18a30431060ff21968460b070a541a',
  'X-Download-Options',
  'noopen',
  'X-Frame-Options',
  'ALLOWALL',
  'X-Permitted-Cross-Domain-Policies',
  'none',
  'X-XSS-Protection',
  '1; mode=block',
  'Content-Length',
  '705',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=lR7XykaWRf681SV1Ah1WEP7fVlsAAAAAQUIPAAAAAABrrgDxzniMxi3iaqGgoI0y; expires=Tue, 23 Jul 2019 15:56:06 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=ljuTC3wn/SipWior6lKYhQAAAACjVvCBknd3jIuEaHXjoTVa; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=mSKMOrB4hGv2L9ZGyS0oDP7fVlsAAAAAIoGobpUbTdhok6V/XO9qAA==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '14-15679383-15679386 NNNN CT(86 87 0) RT(1532420093626 15) q(0 0 2 -1) r(5 5) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/end-to-end-env')
  .reply(200, {
  "name":"end-to-end-env",
  "sys":{
    "type":"Environment",
    "id":"end-to-end-env",
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
    "createdAt":"2018-07-24T08:14:54Z",
    "updatedBy":{
      "sys":{
        "type":"Link",
        "linkType":"User",
        "id":"33kZDXNajFNmbngiu5MvUa"
      }
    },
    "updatedAt":"2018-07-24T08:14:55Z"
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
  'Tue, 24 Jul 2018 08:14:55 GMT',
  'ETag',
  'W/"f608a8bc5efe987d728c2997499bbc5a"',
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
  '35909',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '18017c79ae75901e5b50d453e1ee4a0d',
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
  'visid_incap_673446=U2Z7o3BySsSf24U97adWs/7fVlsAAAAAQUIPAAAAAACkX+/W/BbCFE6SsMm6F3Eb; expires=Tue, 23 Jul 2019 15:56:06 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=dgw1Nux+qW7pblOY6lKYhQAAAACGA0klE55jGoXbNIoduRtu; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=hC5aSd9fngNVMNZGyS0oDP7fVlsAAAAAnLNzLzN2MJcDiHGoWUMZqw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '11-4548959-4548962 NNNN CT(0 0 0) RT(1532420094228 14) q(0 0 0 -1) r(1 1) U5',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/end-to-end-env')
  .reply(200, {
  "name":"end-to-end-env",
  "sys":{
    "type":"Environment",
    "id":"end-to-end-env",
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
    "createdAt":"2018-07-24T08:14:54Z",
    "updatedBy":{
      "sys":{
        "type":"Link",
        "linkType":"User",
        "id":"33kZDXNajFNmbngiu5MvUa"
      }
    },
    "updatedAt":"2018-07-24T08:14:55Z"
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
  'Tue, 24 Jul 2018 08:14:56 GMT',
  'ETag',
  'W/"61588bf516079ef82275515dbf51d5c6"',
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
  '35908',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'bb5ca2dc1ad06821aa14628be3bfc135',
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
  'visid_incap_673446=0HW5vyxaRV2zRdhJLTO6X//fVlsAAAAAQUIPAAAAAACMj1wROdG+TulefSp6CzEv; expires=Tue, 23 Jul 2019 15:56:06 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=KSlCW1WaLGSX+Hcj6lKYhQAAAABRDwJFOYi4gfCMEcXjtKtB; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=0+11Tfhn+hsJMtZGyS0oDP/fVlsAAAAAYtBO0iXW/UYhRBQyuPtWxQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '13-11922800-11922805 NNNN CT(0 0 0) RT(1532420095431 19) q(0 0 0 -1) r(2 2) U5',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/end-to-end-env/content_types/blogPost/editor_interface')
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
    "createdAt": "2018-07-24T08:15:00.463Z",
    "createdBy": {
      "sys": {
        "id": "33kZDXNajFNmbngiu5MvUa",
        "type": "Link",
        "linkType": "User"
      }
    },
    "updatedAt": "2018-07-24T08:15:00.686Z",
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
        "id": "end-to-end-env",
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
  'Tue, 24 Jul 2018 08:15:00 GMT',
  'ETag',
  '"a185c17d715a4fb20f335629fdf9f84c"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35898',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '7',
  'X-Contentful-Request-Id',
  '261dfcbc8dc987e24e46999db62a3fda',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=nHwxKMy8SJmNDsoAGljpawTgVlsAAAAAQUIPAAAAAAAYW6xHatG6BZAF+pb2o3CC; expires=Tue, 23 Jul 2019 15:56:06 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=xxNRWAflBk7N1esE6lKYhQAAAAB4f8/fx1pmj5GEOhKyqc7u; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=XC8oFg5HJXewONZGyS0oDATgVlsAAAAAYxAo6zsn/FiXR2/4e3/3zQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '11-4549596-4549599 NNNN CT(0 0 0) RT(1532420099871 13) q(0 0 0 -1) r(2 2) U5',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .delete('/spaces/bohepdihyxin/environments/end-to-end-env')
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
  'Tue, 24 Jul 2018 08:15:01 GMT',
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
  '35897',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '579a672ee4541a288c0d295ce87f72c2',
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
  'visid_incap_673446=sW+8HZyCTrW6okr6b8svBgTgVlsAAAAAQUIPAAAAAAA2usbgDhnif7IcHsZGyDTU; expires=Tue, 23 Jul 2019 15:56:06 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=BfcCBZstImp2521Z6lKYhQAAAADRhck7WEEne2MEdZ2P5nGE; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=UktVdBLSxj9oOdZGyS0oDATgVlsAAAAA+mfxujEXfhRwIPfgkaGM0Q==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '12-7869205-7869213 NNNN CT(0 0 0) RT(1532420100070 18) q(0 0 0 -1) r(4 4) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/end-to-end-env', {"name":"end-to-end-env"})
  .reply(201, {"name":"end-to-end-env","sys":{"type":"Environment","id":"end-to-end-env","version":1,"space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"status":{"sys":{"type":"Link","linkType":"Status","id":"queued"}},"createdBy":{"sys":{"type":"Link","linkType":"User","id":"33kZDXNajFNmbngiu5MvUa"}},"createdAt":"2018-07-24T08:15:03Z","updatedBy":{"sys":{"type":"Link","linkType":"User","id":"33kZDXNajFNmbngiu5MvUa"}},"updatedAt":"2018-07-24T08:15:03Z"}}, [ 'Accept-Ranges',
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
  'Tue, 24 Jul 2018 08:15:03 GMT',
  'ETag',
  'W/"91175daec51ed72328f7a8e57c2a1283"',
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
  '35895',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  'f9626590ff98b4abc244e437e26beee6',
  'X-Download-Options',
  'noopen',
  'X-Frame-Options',
  'ALLOWALL',
  'X-Permitted-Cross-Domain-Policies',
  'none',
  'X-XSS-Protection',
  '1; mode=block',
  'Content-Length',
  '705',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=7xYYsP7/RzOokyMyQZ4bpAbgVlsAAAAAQUIPAAAAAAAuMWNoQf3sGoHcTlt3H5YH; expires=Tue, 23 Jul 2019 15:56:06 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=3ViHANnLuXdAtOat6lKYhQAAAADNzy/AveEXGS2aepw14NCf; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=iIKzbQvUygx4PNZGyS0oDAbgVlsAAAAABTaIiKYy8ni3x31HNaRkFQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '14-15681829-15681838 NNNN CT(89 87 0) RT(1532420101781 15) q(0 0 2 -1) r(5 5) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/end-to-end-env')
  .reply(200, {
  "name":"end-to-end-env",
  "sys":{
    "type":"Environment",
    "id":"end-to-end-env",
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
    "createdAt":"2018-07-24T08:15:03Z",
    "updatedBy":{
      "sys":{
        "type":"Link",
        "linkType":"User",
        "id":"33kZDXNajFNmbngiu5MvUa"
      }
    },
    "updatedAt":"2018-07-24T08:15:03Z"
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
  'Tue, 24 Jul 2018 08:15:03 GMT',
  'ETag',
  'W/"de21e4e1737699df9646f0f5ffb72a17"',
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
  '35894',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'a7a3d048f08132be129dd29c3b042607',
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
  'visid_incap_673446=5TbMn7L+QJG79+Izbe17KgbgVlsAAAAAQUIPAAAAAABlsE7vsaS+SXR5HtJukcm8; expires=Tue, 23 Jul 2019 15:56:06 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=EeuKXtET0XDaqoVq6lKYhQAAAAAN15KtGOv5XT753MS9eOxA; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=juXLMLlY71nrPNZGyS0oDAbgVlsAAAAActz30I/vc7YTTPSKc1RIxA==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '4-4208209-4208210 NNNN CT(0 0 0) RT(1532420102292 13) q(0 0 0 -1) r(1 1) U5',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/end-to-end-env')
  .reply(200, {
  "name":"end-to-end-env",
  "sys":{
    "type":"Environment",
    "id":"end-to-end-env",
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
    "createdAt":"2018-07-24T08:15:03Z",
    "updatedBy":{
      "sys":{
        "type":"Link",
        "linkType":"User",
        "id":"33kZDXNajFNmbngiu5MvUa"
      }
    },
    "updatedAt":"2018-07-24T08:15:03Z"
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
  'Tue, 24 Jul 2018 08:15:04 GMT',
  'ETag',
  'W/"33715d7f6740137cea732a5b659ea219"',
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
  '35893',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'ab4b36392cd994eaf3c89da52e786fdd',
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
  'visid_incap_673446=qreRL9eYSDuQM7koQY9+EwfgVlsAAAAAQUIPAAAAAAB0eLPYlYYavk0ZX/ZFqJoG; expires=Tue, 23 Jul 2019 15:56:06 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=+h2mJvPxIUHdewTK6lKYhQAAAADP55V9AAPfHlnRcxBq8xyg; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=LYqENZfKd2P3PtZGyS0oDAfgVlsAAAAAQCtnpoutWMdG1eJ7XyHajA==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '13-11924788-11924792 NNNN CT(0 0 0) RT(1532420103505 19) q(0 0 0 -1) r(1 1) U5',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/end-to-end-env/content_types/dog')
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
    "createdAt": "2018-07-24T08:15:07.373Z",
    "updatedAt": "2018-07-24T08:15:09.648Z",
    "environment": {
      "sys": {
        "id": "end-to-end-env",
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
    "firstPublishedAt": "2018-07-24T08:15:07.846Z",
    "publishedAt": "2018-07-24T08:15:09.648Z"
  },
  "displayField": null,
  "name": "Angry dog",
  "description": "Who's got mad? He is!",
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
  'Tue, 24 Jul 2018 08:15:09 GMT',
  'ETag',
  'W/"9f0f7f885100fb84bf38ba56d5787423"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35882',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '7',
  'X-Contentful-Request-Id',
  '9e21b1b9ec8c67ccef1fc840a1529c74',
  'Content-Length',
  '486',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=NFf+l3/CTBefoI7LCM6bcg3gVlsAAAAAQUIPAAAAAABzOKJC/MHdqAA6Y3JiJKX1; expires=Tue, 23 Jul 2019 15:56:06 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=A27Xd1fVzH3rt2YH6lKYhQAAAACsG7fSkCK/F/Pe0mLrOPYT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=YuDwFKDTiVIWR9ZGyS0oDA3gVlsAAAAA6d79V5ZfxBBVfyg2DvCqwA==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '12-7870980-7870985 NNNN CT(0 0 0) RT(1532420108917 17) q(0 0 0 -1) r(1 1) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/end-to-end-env/content_types/dog')
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
    "createdAt": "2018-07-24T08:15:07.373Z",
    "updatedAt": "2018-07-24T08:15:13.113Z",
    "environment": {
      "sys": {
        "id": "end-to-end-env",
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
    "firstPublishedAt": "2018-07-24T08:15:07.846Z",
    "publishedAt": "2018-07-24T08:15:13.113Z"
  },
  "displayField": null,
  "name": "Angry dog",
  "description": "Who's got mad? He is!",
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
  'Tue, 24 Jul 2018 08:15:13 GMT',
  'ETag',
  'W/"49f1f5d5d192f519ff0eaef855c02bb4"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35873',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  '368116a50a3b534524b776680853392e',
  'Content-Length',
  '480',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=KZj8wTM8S8eNOVEaWeajPRDgVlsAAAAAQUIPAAAAAAAuuScxOO81RisGGE3a/VDQ; expires=Tue, 23 Jul 2019 15:56:06 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=ygczH1QtUC7MG/xq6lKYhQAAAACHb/PKbreVhrXgzZHXiZb0; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=48/nfZCvji28S9ZGyS0oDBDgVlsAAAAAlBtEhrIwZ4zBE7CGBMHTEQ==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '14-15684868-15684876 NNNN CT(0 0 0) RT(1532420112393 20) q(0 0 0 -1) r(1 1) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/end-to-end-env/content_types/food')
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
    "createdAt": "2018-07-24T08:15:16.006Z",
    "updatedAt": "2018-07-24T08:15:16.244Z",
    "environment": {
      "sys": {
        "id": "end-to-end-env",
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
    "firstPublishedAt": "2018-07-24T08:15:16.244Z",
    "publishedAt": "2018-07-24T08:15:16.244Z"
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
  'Tue, 24 Jul 2018 08:15:16 GMT',
  'ETag',
  'W/"b21714eeaf6e913e5135b01b724dc5d4"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35866',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  '49ebd4c3bc9c29b98cc11700dc5ca880',
  'Content-Length',
  '445',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=hWmdCcKeSCKqLJ55z16epxPgVlsAAAAAQUIPAAAAAACSGZd0zTWtZNHBHbvHcQLS; expires=Tue, 23 Jul 2019 15:56:06 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=wvNYSsAoixDsue8h6lKYhQAAAADZEv8FPEHlgrEIJtlZeJ4A; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=iqBYP7iTYxxmUNZGyS0oDBPgVlsAAAAAfSUlX79oMN29w9/IpqwXNA==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '6-2439153-2439154 NNNN CT(0 0 0) RT(1532420115499 18) q(0 0 0 -1) r(1 1) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/end-to-end-env/content_types/food')
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
    "createdAt": "2018-07-24T08:15:16.006Z",
    "updatedAt": "2018-07-24T08:15:18.707Z",
    "environment": {
      "sys": {
        "id": "end-to-end-env",
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
    "firstPublishedAt": "2018-07-24T08:15:16.244Z",
    "publishedAt": "2018-07-24T08:15:18.707Z"
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
  'Tue, 24 Jul 2018 08:15:19 GMT',
  'ETag',
  'W/"e06c111ceb083a14fee431e30da44bb5"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35859',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '6',
  'X-Contentful-Request-Id',
  'a91c69026f46ce9db98715cdb6277409',
  'Content-Length',
  '590',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=QMde+1oCTlSuolTNdyWh9hbgVlsAAAAAQUIPAAAAAABsRTZH9xKNylAqE+Q5DU5Y; expires=Tue, 23 Jul 2019 15:56:00 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=UrOWcLohnzIw7BdZ6lKYhQAAAAAkxCr4tFmlGjXv3vX4waNa; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=ZS5uaKXQYVnJVNZGyS0oDBbgVlsAAAAAGkNqRqf3zK6H6Zuuh9+a0g==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '5-7267139-7267145 NNNN CT(0 0 0) RT(1532420117992 14) q(0 0 0 -1) r(1 1) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .delete('/spaces/bohepdihyxin/environments/end-to-end-env')
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
  'Tue, 24 Jul 2018 08:15:19 GMT',
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
  '35858',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '405dc4d9588805429db3571206243069',
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
  'visid_incap_673446=GWIB78KuRF+0E2793/WAOBbgVlsAAAAAQUIPAAAAAADd/Q+WgfKh8MO53u5p9Jku; expires=Tue, 23 Jul 2019 15:56:00 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=6cShei1ReCgIW8116lKYhQAAAAAEpO4qrcYG4aMK6TI3DK+C; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=LYoZXmZXGwNNVdZGyS0oDBbgVlsAAAAAijMGeJCfhRjTAKVkn47v3Q==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '5-7267183-7267187 NNNN CT(0 0 0) RT(1532420118189 17) q(0 0 0 -1) r(3 3) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .put('/spaces/bohepdihyxin/environments/end-to-end-env', {"name":"end-to-end-env"})
  .reply(201, {"name":"end-to-end-env","sys":{"type":"Environment","id":"end-to-end-env","version":1,"space":{"sys":{"type":"Link","linkType":"Space","id":"bohepdihyxin"}},"status":{"sys":{"type":"Link","linkType":"Status","id":"queued"}},"createdBy":{"sys":{"type":"Link","linkType":"User","id":"33kZDXNajFNmbngiu5MvUa"}},"createdAt":"2018-07-24T08:15:22Z","updatedBy":{"sys":{"type":"Link","linkType":"User","id":"33kZDXNajFNmbngiu5MvUa"}},"updatedAt":"2018-07-24T08:15:22Z"}}, [ 'Accept-Ranges',
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
  'Tue, 24 Jul 2018 08:15:22 GMT',
  'ETag',
  'W/"b0bd8c5d1dff867dde44c73c33789ac9"',
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
  '35854',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'e78847246da14699c18e111514b24293',
  'X-Download-Options',
  'noopen',
  'X-Frame-Options',
  'ALLOWALL',
  'X-Permitted-Cross-Domain-Policies',
  'none',
  'X-XSS-Protection',
  '1; mode=block',
  'Content-Length',
  '705',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=OV0npayGTleAhbm36u5q9hngVlsAAAAAQUIPAAAAAADUTG8KdjtSlb7eBYiocxJd; expires=Tue, 23 Jul 2019 15:56:00 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=Q8/mL3ZJbGqOj1oM6lKYhQAAAADE0sfbNzgYZ4YM0Mkp0iE/; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=04hlX2n+LmbvWdZGyS0oDBngVlsAAAAAN36Jm7gF+Xl2hbd9QMnufw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '5-7267697-7267700 NNNN CT(0 0 0) RT(1532420121274 13) q(0 0 0 -1) r(4 4) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/end-to-end-env')
  .reply(200, {
  "name":"end-to-end-env",
  "sys":{
    "type":"Environment",
    "id":"end-to-end-env",
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
    "createdAt":"2018-07-24T08:15:22Z",
    "updatedBy":{
      "sys":{
        "type":"Link",
        "linkType":"User",
        "id":"33kZDXNajFNmbngiu5MvUa"
      }
    },
    "updatedAt":"2018-07-24T08:15:22Z"
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
  'Tue, 24 Jul 2018 08:15:22 GMT',
  'ETag',
  'W/"1e5b870192321b7d85314b2d0748d616"',
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
  '35853',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  '49abdf25bbfb448fd803c99e0e7317e0',
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
  'visid_incap_673446=KDY+MAfyRSmY4KLdLaEr9xngVlsAAAAAQUIPAAAAAADJwB7DjjMBRXK+E9cxo6Ky; expires=Tue, 23 Jul 2019 15:56:06 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=gSwjRrMLnDzBO+Qm6lKYhQAAAACGRdryenaP/HxHAu3+fjeh; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=FYOvHatb80Y7WtZGyS0oDBngVlsAAAAA996cuOf9E/0I73hRiQi7Iw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '13-11929747-11929752 NNNN CT(0 0 0) RT(1532420121654 17) q(0 0 0 -1) r(2 2) U5',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/end-to-end-env')
  .reply(200, {
  "name":"end-to-end-env",
  "sys":{
    "type":"Environment",
    "id":"end-to-end-env",
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
    "createdAt":"2018-07-24T08:15:22Z",
    "updatedBy":{
      "sys":{
        "type":"Link",
        "linkType":"User",
        "id":"33kZDXNajFNmbngiu5MvUa"
      }
    },
    "updatedAt":"2018-07-24T08:15:23Z"
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
  'Tue, 24 Jul 2018 08:15:23 GMT',
  'ETag',
  'W/"287cac61473d3753056ac54a9ea51181"',
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
  '35852',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  '794ab37dbf14f5af67c647b3c59834f1',
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
  'visid_incap_673446=aK8TgucWTcCLoKyEOtD9nhvgVlsAAAAAQUIPAAAAAACwDrfoPbaN4UZEFnaLM671; expires=Tue, 23 Jul 2019 15:56:06 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=rnS9JN26IEH/zW0i6lKYhQAAAABapK3UauYgioHNM7+MroMw; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=eAH+NIgP2GMzXNZGyS0oDBvgVlsAAAAAOwTT+ePLnfgT00FV/yCaHA==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '7-3859648-3859652 NNNN CT(0 0 0) RT(1532420122879 13) q(0 0 0 -1) r(2 2) U5',
  'X-CDN',
  'Incapsula',
  
  
  'Transfer-Encoding',
  'chunked' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .get('/spaces/bohepdihyxin/environments/end-to-end-env/content_types/dieatary-food')
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
    "createdAt": "2018-07-24T08:15:26.682Z",
    "updatedAt": "2018-07-24T08:15:27.163Z",
    "environment": {
      "sys": {
        "id": "end-to-end-env",
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
    "firstPublishedAt": "2018-07-24T08:15:27.163Z",
    "publishedAt": "2018-07-24T08:15:27.163Z"
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
      "type": "Number",
      "localized": false,
      "required": false,
      "validations": [
        {
          "range": {
            "max": 500
          }
        }
      ],
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
  'Tue, 24 Jul 2018 08:15:27 GMT',
  'ETag',
  'W/"7d4425768c3d56b2de18d1701ca9f5fe"',
  'Server',
  'Contentful',
  'Strict-Transport-Security',
  'max-age=15768000',
  'X-Content-Type-Options',
  'nosniff',
  'X-Contentful-RateLimit-Hour-Limit',
  '36000',
  'X-Contentful-RateLimit-Hour-Remaining',
  '35845',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '9',
  'X-Contentful-Request-Id',
  'aa05b175d6d02f652972b017b94394ce',
  'Content-Length',
  '546',
  'Connection',
  'Close',
  'Set-Cookie',
  'visid_incap_673446=/ZzcHdUpRjKJeNT7y+rWuB7gVlsAAAAAQUIPAAAAAACHKI2zqzBscN/EMSZmL7v9; expires=Tue, 23 Jul 2019 15:56:00 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=jsGFWSYWpjyzEzl66lKYhQAAAADSPZQ941qpKIndQ/RBofF4; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=o1M0R/vngReYYdZGyS0oDB7gVlsAAAAAf5EMs8C0kk6hemrU+fhCSg==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '2-2695054-2695056 NNNN CT(0 0 0) RT(1532420126469 14) q(0 0 0 -1) r(2 2) U5',
  'X-CDN',
  'Incapsula' ]);


nock('https://api.contentful.com:443', {"encodedQueryParams":true})
  .delete('/spaces/bohepdihyxin/environments/end-to-end-env')
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
  'Tue, 24 Jul 2018 08:15:27 GMT',
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
  '35844',
  'X-Contentful-RateLimit-Reset',
  '0',
  'X-Contentful-RateLimit-Second-Limit',
  '10',
  'X-Contentful-RateLimit-Second-Remaining',
  '8',
  'X-Contentful-Request-Id',
  '889cde95ef51a488d572d9e392616874',
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
  'visid_incap_673446=FAoZlTOyTpyroemjRjUZAR7gVlsAAAAAQUIPAAAAAADVfex8ulhebdmeLn1DJ5BS; expires=Tue, 23 Jul 2019 15:56:06 GMT; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'nlbi_673446=0oskRvL2wwhculE86lKYhQAAAAAkkjv+5Mz7qmRM6etZsCM8; path=/; Domain=.contentful.com',
  'Set-Cookie',
  'incap_ses_876_673446=Q6NsGWdaaA8nYtZGyS0oDB7gVlsAAAAApNcflOQpzi8kcL81/tLUkw==; path=/; Domain=.contentful.com',
  'X-Iinfo',
  '13-11931141-11931144 NNNN CT(0 0 0) RT(1532420126677 13) q(0 0 0 -1) r(3 3) U5',
  'X-CDN',
  'Incapsula' ]);
