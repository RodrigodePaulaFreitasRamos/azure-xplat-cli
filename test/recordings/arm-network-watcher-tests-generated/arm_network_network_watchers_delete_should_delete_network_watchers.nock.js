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
  .reply(200, "{\r\n  \"name\": \"networkWatcherName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkWatchers/networkWatcherName\",\r\n  \"etag\": \"W/\\\"d9d6c43b-199e-4fac-9cdf-42b71af6ee07\\\"\",\r\n  \"type\": \"Microsoft.Network/networkWatchers\",\r\n  \"location\": \"westcentralus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"runningOperationIds\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '429',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"d9d6c43b-199e-4fac-9cdf-42b71af6ee07"',
  'x-ms-request-id': '270b3a52-4a6d-403d-be04-c7877e6a30e4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-correlation-request-id': 'ed163205-799e-4b42-aa91-290bdb600bf6',
  'x-ms-routing-request-id': 'WESTEUROPE:20170714T073155Z:ed163205-799e-4b42-aa91-290bdb600bf6',
  date: 'Fri, 14 Jul 2017 07:31:55 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkWatchers/networkWatcherName?api-version=2017-06-01')
  .reply(200, "{\r\n  \"name\": \"networkWatcherName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkWatchers/networkWatcherName\",\r\n  \"etag\": \"W/\\\"d9d6c43b-199e-4fac-9cdf-42b71af6ee07\\\"\",\r\n  \"type\": \"Microsoft.Network/networkWatchers\",\r\n  \"location\": \"westcentralus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"runningOperationIds\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '429',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"d9d6c43b-199e-4fac-9cdf-42b71af6ee07"',
  'x-ms-request-id': '270b3a52-4a6d-403d-be04-c7877e6a30e4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-correlation-request-id': 'ed163205-799e-4b42-aa91-290bdb600bf6',
  'x-ms-routing-request-id': 'WESTEUROPE:20170714T073155Z:ed163205-799e-4b42-aa91-290bdb600bf6',
  date: 'Fri, 14 Jul 2017 07:31:55 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkWatchers/networkWatcherName?api-version=2017-06-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westcentralus/operationResults/69870cf5-874d-4d85-984f-73e10c7048b7?api-version=2017-06-01',
  'retry-after': '10',
  'x-ms-request-id': '69870cf5-874d-4d85-984f-73e10c7048b7',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westcentralus/operations/69870cf5-874d-4d85-984f-73e10c7048b7?api-version=2017-06-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '48f69761-d542-4d9c-b280-e433cf2dd812',
  'x-ms-routing-request-id': 'WESTEUROPE:20170714T073157Z:48f69761-d542-4d9c-b280-e433cf2dd812',
  date: 'Fri, 14 Jul 2017 07:31:57 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkWatchers/networkWatcherName?api-version=2017-06-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westcentralus/operationResults/69870cf5-874d-4d85-984f-73e10c7048b7?api-version=2017-06-01',
  'retry-after': '10',
  'x-ms-request-id': '69870cf5-874d-4d85-984f-73e10c7048b7',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westcentralus/operations/69870cf5-874d-4d85-984f-73e10c7048b7?api-version=2017-06-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '48f69761-d542-4d9c-b280-e433cf2dd812',
  'x-ms-routing-request-id': 'WESTEUROPE:20170714T073157Z:48f69761-d542-4d9c-b280-e433cf2dd812',
  date: 'Fri, 14 Jul 2017 07:31:57 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westcentralus/operations/69870cf5-874d-4d85-984f-73e10c7048b7?api-version=2017-06-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '01d0afd1-6479-4f71-af28-30b6b63945d0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14990',
  'x-ms-correlation-request-id': 'a8f1d391-628d-4e3d-beda-a27963f2fcc6',
  'x-ms-routing-request-id': 'WESTEUROPE:20170714T073228Z:a8f1d391-628d-4e3d-beda-a27963f2fcc6',
  date: 'Fri, 14 Jul 2017 07:32:28 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westcentralus/operations/69870cf5-874d-4d85-984f-73e10c7048b7?api-version=2017-06-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '01d0afd1-6479-4f71-af28-30b6b63945d0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14990',
  'x-ms-correlation-request-id': 'a8f1d391-628d-4e3d-beda-a27963f2fcc6',
  'x-ms-routing-request-id': 'WESTEUROPE:20170714T073228Z:a8f1d391-628d-4e3d-beda-a27963f2fcc6',
  date: 'Fri, 14 Jul 2017 07:32:28 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkWatchers/networkWatcherName?api-version=2017-06-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/networkWatchers/networkWatcherName' under resource group 'xplat-test-watcher' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'e5e30d10-704e-49a9-a0fb-9c32441c30c3',
  'x-ms-correlation-request-id': 'e5e30d10-704e-49a9-a0fb-9c32441c30c3',
  'x-ms-routing-request-id': 'WESTEUROPE:20170714T073231Z:e5e30d10-704e-49a9-a0fb-9c32441c30c3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 14 Jul 2017 07:32:30 GMT',
  connection: 'close',
  'content-length': '174' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkWatchers/networkWatcherName?api-version=2017-06-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/networkWatchers/networkWatcherName' under resource group 'xplat-test-watcher' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'e5e30d10-704e-49a9-a0fb-9c32441c30c3',
  'x-ms-correlation-request-id': 'e5e30d10-704e-49a9-a0fb-9c32441c30c3',
  'x-ms-routing-request-id': 'WESTEUROPE:20170714T073231Z:e5e30d10-704e-49a9-a0fb-9c32441c30c3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 14 Jul 2017 07:32:30 GMT',
  connection: 'close',
  'content-length': '174' });
 return result; }]];