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
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'westcentralus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkWatchers/networkWatcherName?api-version=2017-06-01')
  .reply(200, "{\r\n  \"name\": \"networkWatcherName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkWatchers/networkWatcherName\",\r\n  \"etag\": \"W/\\\"1f537137-04ce-4a5b-8697-c2396b56c56f\\\"\",\r\n  \"type\": \"Microsoft.Network/networkWatchers\",\r\n  \"location\": \"westcentralus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"runningOperationIds\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '429',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"1f537137-04ce-4a5b-8697-c2396b56c56f"',
  'x-ms-request-id': '0b03f6d8-9798-4f3a-aa28-3c5aa9a9dd53',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': 'f88a8625-a8bf-4cee-b7f1-307d7e692fcf',
  'x-ms-routing-request-id': 'WESTEUROPE:20170714T072813Z:f88a8625-a8bf-4cee-b7f1-307d7e692fcf',
  date: 'Fri, 14 Jul 2017 07:28:13 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkWatchers/networkWatcherName?api-version=2017-06-01')
  .reply(200, "{\r\n  \"name\": \"networkWatcherName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkWatchers/networkWatcherName\",\r\n  \"etag\": \"W/\\\"1f537137-04ce-4a5b-8697-c2396b56c56f\\\"\",\r\n  \"type\": \"Microsoft.Network/networkWatchers\",\r\n  \"location\": \"westcentralus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"runningOperationIds\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '429',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"1f537137-04ce-4a5b-8697-c2396b56c56f"',
  'x-ms-request-id': '0b03f6d8-9798-4f3a-aa28-3c5aa9a9dd53',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': 'f88a8625-a8bf-4cee-b7f1-307d7e692fcf',
  'x-ms-routing-request-id': 'WESTEUROPE:20170714T072813Z:f88a8625-a8bf-4cee-b7f1-307d7e692fcf',
  date: 'Fri, 14 Jul 2017 07:28:13 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkWatchers/networkWatcherName/ipFlowVerify?api-version=2017-06-01', '*')
  .reply(200, "{\r\n  \"access\": \"Allow\",\r\n  \"ruleName\": \"defaultSecurityRules/AllowVnetInBound\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '81',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westcentralus/operationResults/6d617027-ad74-472d-97ab-ac3f111b48a7?api-version=2017-06-01',
  'x-ms-request-id': '6d617027-ad74-472d-97ab-ac3f111b48a7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '09c3c412-4afe-4b4f-bdb3-3a1dced9564d',
  'x-ms-routing-request-id': 'WESTEUROPE:20170714T072820Z:09c3c412-4afe-4b4f-bdb3-3a1dced9564d',
  date: 'Fri, 14 Jul 2017 07:28:20 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkWatchers/networkWatcherName/ipFlowVerify?api-version=2017-06-01', '*')
  .reply(200, "{\r\n  \"access\": \"Allow\",\r\n  \"ruleName\": \"defaultSecurityRules/AllowVnetInBound\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '81',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westcentralus/operationResults/6d617027-ad74-472d-97ab-ac3f111b48a7?api-version=2017-06-01',
  'x-ms-request-id': '6d617027-ad74-472d-97ab-ac3f111b48a7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '09c3c412-4afe-4b4f-bdb3-3a1dced9564d',
  'x-ms-routing-request-id': 'WESTEUROPE:20170714T072820Z:09c3c412-4afe-4b4f-bdb3-3a1dced9564d',
  date: 'Fri, 14 Jul 2017 07:28:20 GMT',
  connection: 'close' });
 return result; }]];