// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: ['mobileservice'],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'westus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkWatchers?api-version=2017-06-01')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"networkWatchersName\",\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkWatchers/networkWatchersName\",\r\n      \"etag\": \"W/\\\"7c65e236-ea63-40fb-945b-a5591262a604\\\"\",\r\n      \"type\": \"Microsoft.Network/networkWatchers\",\r\n      \"location\": \"westcentralus\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"runningOperationIds\": []\r\n      }\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '500',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'd5022252-c8b2-48ba-962b-efae2a683183',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14990',
  'x-ms-correlation-request-id': 'c02b578c-49be-412f-bea5-14bf95548599',
  'x-ms-routing-request-id': 'WESTEUROPE:20170215T104049Z:c02b578c-49be-412f-bea5-14bf95548599',
  date: 'Wed, 15 Feb 2017 10:40:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkWatchers?api-version=2017-06-01')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"networkWatchersName\",\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkWatchers/networkWatchersName\",\r\n      \"etag\": \"W/\\\"7c65e236-ea63-40fb-945b-a5591262a604\\\"\",\r\n      \"type\": \"Microsoft.Network/networkWatchers\",\r\n      \"location\": \"westcentralus\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"runningOperationIds\": []\r\n      }\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '500',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'd5022252-c8b2-48ba-962b-efae2a683183',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14990',
  'x-ms-correlation-request-id': 'c02b578c-49be-412f-bea5-14bf95548599',
  'x-ms-routing-request-id': 'WESTEUROPE:20170215T104049Z:c02b578c-49be-412f-bea5-14bf95548599',
  date: 'Wed, 15 Feb 2017 10:40:49 GMT',
  connection: 'close' });
 return result; }]];
