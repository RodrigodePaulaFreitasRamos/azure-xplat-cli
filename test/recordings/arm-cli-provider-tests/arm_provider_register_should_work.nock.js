// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '0b1f6471-1bf0-4dda-aec3-cb9272f09590',
    name: 'AzureSDKADGraph2',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '54826b22-38d6-4fb2-bad9-b7b93a3e9c5a',
    state: 'Enabled',
    registeredProviders: ['website', 'mobileservice'],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .post('/subscriptions/0b1f6471-1bf0-4dda-aec3-cb9272f09590/providers/Microsoft.BingMaps/register?api-version=2014-04-01-preview')
  .reply(200, "{\"id\":\"/subscriptions/0b1f6471-1bf0-4dda-aec3-cb9272f09590/providers/Microsoft.BingMaps\",\"namespace\":\"Microsoft.BingMaps\",\"resourceTypes\":[{\"resourceType\":\"mapApis\",\"locations\":[\"West US\"],\"apiVersions\":[\"2015-07-02\"]},{\"resourceType\":\"operations\",\"locations\":[],\"apiVersions\":[\"2015-07-02\"]},{\"resourceType\":\"listCommunicationPreference\",\"locations\":[],\"apiVersions\":[\"2015-07-02\"]},{\"resourceType\":\"updateCommunicationPreference\",\"locations\":[],\"apiVersions\":[\"2015-07-02\"]}],\"registrationState\":\"Registering\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': '477efefd-6dc9-4644-b563-3148ef1c7fd7',
  'x-ms-correlation-request-id': '477efefd-6dc9-4644-b563-3148ef1c7fd7',
  'x-ms-routing-request-id': 'WESTUS:20160124T045319Z:477efefd-6dc9-4644-b563-3148ef1c7fd7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sun, 24 Jan 2016 04:53:18 GMT',
  connection: 'close',
  'content-length': '512' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/0b1f6471-1bf0-4dda-aec3-cb9272f09590/providers/Microsoft.BingMaps/register?api-version=2014-04-01-preview')
  .reply(200, "{\"id\":\"/subscriptions/0b1f6471-1bf0-4dda-aec3-cb9272f09590/providers/Microsoft.BingMaps\",\"namespace\":\"Microsoft.BingMaps\",\"resourceTypes\":[{\"resourceType\":\"mapApis\",\"locations\":[\"West US\"],\"apiVersions\":[\"2015-07-02\"]},{\"resourceType\":\"operations\",\"locations\":[],\"apiVersions\":[\"2015-07-02\"]},{\"resourceType\":\"listCommunicationPreference\",\"locations\":[],\"apiVersions\":[\"2015-07-02\"]},{\"resourceType\":\"updateCommunicationPreference\",\"locations\":[],\"apiVersions\":[\"2015-07-02\"]}],\"registrationState\":\"Registering\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': '477efefd-6dc9-4644-b563-3148ef1c7fd7',
  'x-ms-correlation-request-id': '477efefd-6dc9-4644-b563-3148ef1c7fd7',
  'x-ms-routing-request-id': 'WESTUS:20160124T045319Z:477efefd-6dc9-4644-b563-3148ef1c7fd7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sun, 24 Jan 2016 04:53:18 GMT',
  connection: 'close',
  'content-length': '512' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/0b1f6471-1bf0-4dda-aec3-cb9272f09590/providers/Microsoft.BingMaps?api-version=2014-04-01-preview')
  .reply(200, "{\"id\":\"/subscriptions/0b1f6471-1bf0-4dda-aec3-cb9272f09590/providers/Microsoft.BingMaps\",\"namespace\":\"Microsoft.BingMaps\",\"resourceTypes\":[{\"resourceType\":\"mapApis\",\"locations\":[\"West US\"],\"apiVersions\":[\"2015-07-02\"]},{\"resourceType\":\"operations\",\"locations\":[],\"apiVersions\":[\"2015-07-02\"]},{\"resourceType\":\"listCommunicationPreference\",\"locations\":[],\"apiVersions\":[\"2015-07-02\"]},{\"resourceType\":\"updateCommunicationPreference\",\"locations\":[],\"apiVersions\":[\"2015-07-02\"]}],\"registrationState\":\"Registering\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14979',
  'x-ms-request-id': '759997dc-719f-4342-b841-a6ed3e540776',
  'x-ms-correlation-request-id': '759997dc-719f-4342-b841-a6ed3e540776',
  'x-ms-routing-request-id': 'WESTUS:20160124T045319Z:759997dc-719f-4342-b841-a6ed3e540776',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sun, 24 Jan 2016 04:53:18 GMT',
  connection: 'close',
  'content-length': '512' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/0b1f6471-1bf0-4dda-aec3-cb9272f09590/providers/Microsoft.BingMaps?api-version=2014-04-01-preview')
  .reply(200, "{\"id\":\"/subscriptions/0b1f6471-1bf0-4dda-aec3-cb9272f09590/providers/Microsoft.BingMaps\",\"namespace\":\"Microsoft.BingMaps\",\"resourceTypes\":[{\"resourceType\":\"mapApis\",\"locations\":[\"West US\"],\"apiVersions\":[\"2015-07-02\"]},{\"resourceType\":\"operations\",\"locations\":[],\"apiVersions\":[\"2015-07-02\"]},{\"resourceType\":\"listCommunicationPreference\",\"locations\":[],\"apiVersions\":[\"2015-07-02\"]},{\"resourceType\":\"updateCommunicationPreference\",\"locations\":[],\"apiVersions\":[\"2015-07-02\"]}],\"registrationState\":\"Registering\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14979',
  'x-ms-request-id': '759997dc-719f-4342-b841-a6ed3e540776',
  'x-ms-correlation-request-id': '759997dc-719f-4342-b841-a6ed3e540776',
  'x-ms-routing-request-id': 'WESTUS:20160124T045319Z:759997dc-719f-4342-b841-a6ed3e540776',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sun, 24 Jan 2016 04:53:18 GMT',
  connection: 'close',
  'content-length': '512' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/0b1f6471-1bf0-4dda-aec3-cb9272f09590/providers/Microsoft.BingMaps?api-version=2014-04-01-preview')
  .reply(200, "{\"id\":\"/subscriptions/0b1f6471-1bf0-4dda-aec3-cb9272f09590/providers/Microsoft.BingMaps\",\"namespace\":\"Microsoft.BingMaps\",\"resourceTypes\":[{\"resourceType\":\"mapApis\",\"locations\":[\"West US\"],\"apiVersions\":[\"2015-07-02\"]},{\"resourceType\":\"operations\",\"locations\":[],\"apiVersions\":[\"2015-07-02\"]},{\"resourceType\":\"listCommunicationPreference\",\"locations\":[],\"apiVersions\":[\"2015-07-02\"]},{\"resourceType\":\"updateCommunicationPreference\",\"locations\":[],\"apiVersions\":[\"2015-07-02\"]}],\"registrationState\":\"Registered\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14981',
  'x-ms-request-id': '37045bb0-d3cb-4535-94a0-7c433aec2063',
  'x-ms-correlation-request-id': '37045bb0-d3cb-4535-94a0-7c433aec2063',
  'x-ms-routing-request-id': 'WESTUS:20160124T045329Z:37045bb0-d3cb-4535-94a0-7c433aec2063',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sun, 24 Jan 2016 04:53:28 GMT',
  connection: 'close',
  'content-length': '511' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/0b1f6471-1bf0-4dda-aec3-cb9272f09590/providers/Microsoft.BingMaps?api-version=2014-04-01-preview')
  .reply(200, "{\"id\":\"/subscriptions/0b1f6471-1bf0-4dda-aec3-cb9272f09590/providers/Microsoft.BingMaps\",\"namespace\":\"Microsoft.BingMaps\",\"resourceTypes\":[{\"resourceType\":\"mapApis\",\"locations\":[\"West US\"],\"apiVersions\":[\"2015-07-02\"]},{\"resourceType\":\"operations\",\"locations\":[],\"apiVersions\":[\"2015-07-02\"]},{\"resourceType\":\"listCommunicationPreference\",\"locations\":[],\"apiVersions\":[\"2015-07-02\"]},{\"resourceType\":\"updateCommunicationPreference\",\"locations\":[],\"apiVersions\":[\"2015-07-02\"]}],\"registrationState\":\"Registered\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14981',
  'x-ms-request-id': '37045bb0-d3cb-4535-94a0-7c433aec2063',
  'x-ms-correlation-request-id': '37045bb0-d3cb-4535-94a0-7c433aec2063',
  'x-ms-routing-request-id': 'WESTUS:20160124T045329Z:37045bb0-d3cb-4535-94a0-7c433aec2063',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sun, 24 Jan 2016 04:53:28 GMT',
  connection: 'close',
  'content-length': '511' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/0b1f6471-1bf0-4dda-aec3-cb9272f09590/providers/Microsoft.BingMaps?api-version=2014-04-01-preview')
  .reply(200, "{\"id\":\"/subscriptions/0b1f6471-1bf0-4dda-aec3-cb9272f09590/providers/Microsoft.BingMaps\",\"namespace\":\"Microsoft.BingMaps\",\"resourceTypes\":[{\"resourceType\":\"mapApis\",\"locations\":[\"West US\"],\"apiVersions\":[\"2015-07-02\"]},{\"resourceType\":\"operations\",\"locations\":[],\"apiVersions\":[\"2015-07-02\"]},{\"resourceType\":\"listCommunicationPreference\",\"locations\":[],\"apiVersions\":[\"2015-07-02\"]},{\"resourceType\":\"updateCommunicationPreference\",\"locations\":[],\"apiVersions\":[\"2015-07-02\"]}],\"registrationState\":\"Registered\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14980',
  'x-ms-request-id': 'f291e2aa-0ab1-49bf-8b0a-2e9f9f394d05',
  'x-ms-correlation-request-id': 'f291e2aa-0ab1-49bf-8b0a-2e9f9f394d05',
  'x-ms-routing-request-id': 'WESTUS:20160124T045329Z:f291e2aa-0ab1-49bf-8b0a-2e9f9f394d05',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sun, 24 Jan 2016 04:53:29 GMT',
  connection: 'close',
  'content-length': '511' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/0b1f6471-1bf0-4dda-aec3-cb9272f09590/providers/Microsoft.BingMaps?api-version=2014-04-01-preview')
  .reply(200, "{\"id\":\"/subscriptions/0b1f6471-1bf0-4dda-aec3-cb9272f09590/providers/Microsoft.BingMaps\",\"namespace\":\"Microsoft.BingMaps\",\"resourceTypes\":[{\"resourceType\":\"mapApis\",\"locations\":[\"West US\"],\"apiVersions\":[\"2015-07-02\"]},{\"resourceType\":\"operations\",\"locations\":[],\"apiVersions\":[\"2015-07-02\"]},{\"resourceType\":\"listCommunicationPreference\",\"locations\":[],\"apiVersions\":[\"2015-07-02\"]},{\"resourceType\":\"updateCommunicationPreference\",\"locations\":[],\"apiVersions\":[\"2015-07-02\"]}],\"registrationState\":\"Registered\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14980',
  'x-ms-request-id': 'f291e2aa-0ab1-49bf-8b0a-2e9f9f394d05',
  'x-ms-correlation-request-id': 'f291e2aa-0ab1-49bf-8b0a-2e9f9f394d05',
  'x-ms-routing-request-id': 'WESTUS:20160124T045329Z:f291e2aa-0ab1-49bf-8b0a-2e9f9f394d05',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sun, 24 Jan 2016 04:53:29 GMT',
  connection: 'close',
  'content-length': '511' });
 return result; }]];