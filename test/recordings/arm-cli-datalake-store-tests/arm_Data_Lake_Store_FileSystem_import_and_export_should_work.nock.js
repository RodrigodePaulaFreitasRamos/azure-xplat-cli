// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '46153750-fa3b-4140-bf57-8beb7d5c971a',
    name: 'KonaMDI3_697842',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_ARM_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_ARM_TEST_RESOURCE_GROUP'] = 'xplattestadlsrg01';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://xplattestadls9026.azuredatalakestore.net:443')
  .put('/webhdfs/v1/adlsclifolder01%2Fimportfile.txt?op=CREATE&overwrite=false&api-version=2015-10-01-preview')
  .reply(307, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://xplattestadls9026.azuredatalakestore.net/webhdfs/v1/adlsclifolder01/importfile.txt?op=CREATE&overwrite=false&api-version=2015-10-01-preview&write=true',
  'x-ms-request-id': '13c1e781-83be-4d9b-85ee-3d7cf522ea29',
  'set-cookie': [ 'UserPrincipalSession=69aace0b-fa89-4940-a8e5-7bbcf9ef83b5; path=/; secure; HttpOnly' ],
  contentlength: '0',
  'server-perf': '[13c1e78183be4d9b85ee3d7cf522ea29][ AuthTime::1922.91735988921::PostAuthTime::1350736.10610945 ][CREATE :: 00:00:000 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Mon, 09 Nov 2015 19:30:53 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls9026.azuredatalakestore.net:443')
  .put('/webhdfs/v1/adlsclifolder01%2Fimportfile.txt?op=CREATE&overwrite=false&api-version=2015-10-01-preview')
  .reply(307, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://xplattestadls9026.azuredatalakestore.net/webhdfs/v1/adlsclifolder01/importfile.txt?op=CREATE&overwrite=false&api-version=2015-10-01-preview&write=true',
  'x-ms-request-id': '13c1e781-83be-4d9b-85ee-3d7cf522ea29',
  'set-cookie': [ 'UserPrincipalSession=69aace0b-fa89-4940-a8e5-7bbcf9ef83b5; path=/; secure; HttpOnly' ],
  contentlength: '0',
  'server-perf': '[13c1e78183be4d9b85ee3d7cf522ea29][ AuthTime::1922.91735988921::PostAuthTime::1350736.10610945 ][CREATE :: 00:00:000 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Mon, 09 Nov 2015 19:30:53 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls9026.azuredatalakestore.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/webhdfs/v1/adlsclifolder01/importfile.txt?op=CREATE&overwrite=false&api-version=2015-10-01-preview&write=true', '*')
  .reply(201, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://xplattestadls9026.azuredatalakestore.net/webhdfs/v1/adlsclifolder01/importfile.txt?op=CREATE&overwrite=false&api-version=2015-10-01-preview&write=true',
  'x-ms-request-id': 'a90bee16-a198-4064-951e-916db9473b37',
  'set-cookie': [ 'UserPrincipalSession=1e7a731d-668c-4419-a5f5-9fce7beb53df; path=/; secure; HttpOnly' ],
  contentlength: '0',
  'server-perf': '[a90bee16a1984064951e916db9473b37][ AuthTime::1876.72548185183::PostAuthTime::1740174.8844689 ][Open :: 00:00:126 ms]%0a[Write :: 00:00:164 ms]%0a[FlushWrite :: 00:00:070 ms]%0a[CREATE :: 00:00:363 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Mon, 09 Nov 2015 19:30:55 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls9026.azuredatalakestore.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/webhdfs/v1/adlsclifolder01/importfile.txt?op=CREATE&overwrite=false&api-version=2015-10-01-preview&write=true', '*')
  .reply(201, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://xplattestadls9026.azuredatalakestore.net/webhdfs/v1/adlsclifolder01/importfile.txt?op=CREATE&overwrite=false&api-version=2015-10-01-preview&write=true',
  'x-ms-request-id': 'a90bee16-a198-4064-951e-916db9473b37',
  'set-cookie': [ 'UserPrincipalSession=1e7a731d-668c-4419-a5f5-9fce7beb53df; path=/; secure; HttpOnly' ],
  contentlength: '0',
  'server-perf': '[a90bee16a1984064951e916db9473b37][ AuthTime::1876.72548185183::PostAuthTime::1740174.8844689 ][Open :: 00:00:126 ms]%0a[Write :: 00:00:164 ms]%0a[FlushWrite :: 00:00:070 ms]%0a[CREATE :: 00:00:363 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Mon, 09 Nov 2015 19:30:55 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls9026.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlsclifolder01%2Fimportfile.txt?op=GETFILESTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"FileStatus\":{\"length\":22,\"pathSuffix\":\"\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1447097456360,\"modificationTime\":1447097456650,\"replication\":0,\"permission\":\"777\",\"owner\":\"NotSupportYet\",\"group\":\"NotSupportYet\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '77f66761-8bcf-4a33-9002-29ee189adede',
  'set-cookie': [ 'UserPrincipalSession=c2782439-4634-4488-8178-d74ee5449bc5; path=/; secure; HttpOnly' ],
  'server-perf': '[77f667618bcf4a33900229ee189adede][ AuthTime::1731.7331873471::PostAuthTime::1455857.26994337 ][IsExist :: 00:00:000 ms]%0a[SS Response Process :: 00:00:000 ms]%0a[GETFILESTATUS :: 00:00:207 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Mon, 09 Nov 2015 19:30:58 GMT',
  connection: 'close',
  'content-length': '223' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls9026.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlsclifolder01%2Fimportfile.txt?op=GETFILESTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"FileStatus\":{\"length\":22,\"pathSuffix\":\"\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1447097456360,\"modificationTime\":1447097456650,\"replication\":0,\"permission\":\"777\",\"owner\":\"NotSupportYet\",\"group\":\"NotSupportYet\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '77f66761-8bcf-4a33-9002-29ee189adede',
  'set-cookie': [ 'UserPrincipalSession=c2782439-4634-4488-8178-d74ee5449bc5; path=/; secure; HttpOnly' ],
  'server-perf': '[77f667618bcf4a33900229ee189adede][ AuthTime::1731.7331873471::PostAuthTime::1455857.26994337 ][IsExist :: 00:00:000 ms]%0a[SS Response Process :: 00:00:000 ms]%0a[GETFILESTATUS :: 00:00:207 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Mon, 09 Nov 2015 19:30:58 GMT',
  connection: 'close',
  'content-length': '223' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls9026.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlsclifolder01%2Fimportfile.txt?op=GETFILESTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"FileStatus\":{\"length\":22,\"pathSuffix\":\"\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1447097456360,\"modificationTime\":1447097456650,\"replication\":0,\"permission\":\"777\",\"owner\":\"NotSupportYet\",\"group\":\"NotSupportYet\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'eb98e009-33a1-4b73-b0ec-ec482d678a59',
  'set-cookie': [ 'UserPrincipalSession=798fe4fc-df56-4370-8932-ab1a5ccd994f; path=/; secure; HttpOnly' ],
  'server-perf': '[eb98e00933a14b73b0ecec482d678a59][ AuthTime::1806.152723621::PostAuthTime::2054348.38859784 ][IsExist :: 00:00:000 ms]%0a[SS Response Process :: 00:00:000 ms]%0a[GETFILESTATUS :: 00:00:081 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Mon, 09 Nov 2015 19:31:00 GMT',
  connection: 'close',
  'content-length': '223' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls9026.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlsclifolder01%2Fimportfile.txt?op=GETFILESTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"FileStatus\":{\"length\":22,\"pathSuffix\":\"\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1447097456360,\"modificationTime\":1447097456650,\"replication\":0,\"permission\":\"777\",\"owner\":\"NotSupportYet\",\"group\":\"NotSupportYet\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'eb98e009-33a1-4b73-b0ec-ec482d678a59',
  'set-cookie': [ 'UserPrincipalSession=798fe4fc-df56-4370-8932-ab1a5ccd994f; path=/; secure; HttpOnly' ],
  'server-perf': '[eb98e00933a14b73b0ecec482d678a59][ AuthTime::1806.152723621::PostAuthTime::2054348.38859784 ][IsExist :: 00:00:000 ms]%0a[SS Response Process :: 00:00:000 ms]%0a[GETFILESTATUS :: 00:00:081 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Mon, 09 Nov 2015 19:31:00 GMT',
  connection: 'close',
  'content-length': '223' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls9026.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlsclifolder01%2Fimportfile.txt?op=OPEN&offset=0&length=22&api-version=2015-10-01-preview')
  .reply(307, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://xplattestadls9026.azuredatalakestore.net/webhdfs/v1/adlsclifolder01/importfile.txt?op=OPEN&offset=0&length=22&api-version=2015-10-01-preview&read=true',
  'x-ms-request-id': '2961e420-9fa9-4313-ac2a-4ac46a4f212d',
  'set-cookie': [ 'UserPrincipalSession=cc47d3cd-5a3d-42b0-a1ad-1718532172ab; path=/; secure; HttpOnly' ],
  contentlength: '0',
  'server-perf': '[2961e4209fa94313ac2a4ac46a4f212d][ AuthTime::1931.46713234014::PostAuthTime::1187254.36985885 ][OPEN :: 00:00:000 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Mon, 09 Nov 2015 19:31:02 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls9026.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlsclifolder01%2Fimportfile.txt?op=OPEN&offset=0&length=22&api-version=2015-10-01-preview')
  .reply(307, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://xplattestadls9026.azuredatalakestore.net/webhdfs/v1/adlsclifolder01/importfile.txt?op=OPEN&offset=0&length=22&api-version=2015-10-01-preview&read=true',
  'x-ms-request-id': '2961e420-9fa9-4313-ac2a-4ac46a4f212d',
  'set-cookie': [ 'UserPrincipalSession=cc47d3cd-5a3d-42b0-a1ad-1718532172ab; path=/; secure; HttpOnly' ],
  contentlength: '0',
  'server-perf': '[2961e4209fa94313ac2a4ac46a4f212d][ AuthTime::1931.46713234014::PostAuthTime::1187254.36985885 ][OPEN :: 00:00:000 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Mon, 09 Nov 2015 19:31:02 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls9026.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlsclifolder01/importfile.txt?op=OPEN&offset=0&length=22&api-version=2015-10-01-preview&read=true')
  .reply(200, "adls cli test content!", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/octet-stream',
  expires: '-1',
  'x-ms-request-id': '10dd0078-f588-425c-88c4-580a97eb64b3',
  'set-cookie': [ 'UserPrincipalSession=f87bdddd-a2c2-4277-a9f0-59fa9acfce3f; path=/; secure; HttpOnly' ],
  'server-perf': '[10dd0078f588425c88c4580a97eb64b3][ AuthTime::1903.6702642941::PostAuthTime::1683352.18755279 ][GetCacheEntry :: 00:00:000 ms]%0a[OpenNewHandle :: 00:00:056 ms]%0a[CreateCacheEntry :: 00:00:000 ms]%0a[GetOrCreateHandle :: 00:00:057 ms]%0a[Open :: 00:00:057 ms]%0a[OPEN :: 00:00:105 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Mon, 09 Nov 2015 19:31:05 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls9026.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlsclifolder01/importfile.txt?op=OPEN&offset=0&length=22&api-version=2015-10-01-preview&read=true')
  .reply(200, "adls cli test content!", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/octet-stream',
  expires: '-1',
  'x-ms-request-id': '10dd0078-f588-425c-88c4-580a97eb64b3',
  'set-cookie': [ 'UserPrincipalSession=f87bdddd-a2c2-4277-a9f0-59fa9acfce3f; path=/; secure; HttpOnly' ],
  'server-perf': '[10dd0078f588425c88c4580a97eb64b3][ AuthTime::1903.6702642941::PostAuthTime::1683352.18755279 ][GetCacheEntry :: 00:00:000 ms]%0a[OpenNewHandle :: 00:00:056 ms]%0a[CreateCacheEntry :: 00:00:000 ms]%0a[GetOrCreateHandle :: 00:00:057 ms]%0a[Open :: 00:00:057 ms]%0a[OPEN :: 00:00:105 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Mon, 09 Nov 2015 19:31:05 GMT',
  connection: 'close' });
 return result; }]];