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
  process.env['AZURE_VM_TEST_LOCATION'] = 'westus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip/providers/Microsoft.Network/publicIPAddresses/idleTimeoutOverRangeName?api-version=2017-06-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/publicIPAddresses/idleTimeoutOverRangeName' under resource group 'xplat-test-public-ip' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '2805c2f7-f5fc-4603-a9e2-63b9f450ee00',
  'x-ms-correlation-request-id': '2805c2f7-f5fc-4603-a9e2-63b9f450ee00',
  'x-ms-routing-request-id': 'WESTEUROPE:20170707T141908Z:2805c2f7-f5fc-4603-a9e2-63b9f450ee00',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 07 Jul 2017 14:19:07 GMT',
  connection: 'close',
  'content-length': '184' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip/providers/Microsoft.Network/publicIPAddresses/idleTimeoutOverRangeName?api-version=2017-06-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/publicIPAddresses/idleTimeoutOverRangeName' under resource group 'xplat-test-public-ip' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '2805c2f7-f5fc-4603-a9e2-63b9f450ee00',
  'x-ms-correlation-request-id': '2805c2f7-f5fc-4603-a9e2-63b9f450ee00',
  'x-ms-routing-request-id': 'WESTEUROPE:20170707T141908Z:2805c2f7-f5fc-4603-a9e2-63b9f450ee00',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 07 Jul 2017 14:19:07 GMT',
  connection: 'close',
  'content-length': '184' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip/providers/Microsoft.Network/publicIPAddresses/idleTimeoutOverRangeName?api-version=2017-06-01', '*')
  .reply(400, "{\r\n  \"error\": {\r\n    \"code\": \"PublicIPIdleTimeoutIsOutOfRange\",\r\n    \"message\": \"Public IP address idleTimeoutOverRangeName has invalid Idle Timeout. The value must be between 4 and 30.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '214',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '74d7956e-ffb4-4938-83e8-17c7982b07bd',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '7d7b9461-c9b7-4e83-93ef-a8ef4283d51b',
  'x-ms-routing-request-id': 'WESTEUROPE:20170707T141914Z:7d7b9461-c9b7-4e83-93ef-a8ef4283d51b',
  date: 'Fri, 07 Jul 2017 14:19:14 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip/providers/Microsoft.Network/publicIPAddresses/idleTimeoutOverRangeName?api-version=2017-06-01', '*')
  .reply(400, "{\r\n  \"error\": {\r\n    \"code\": \"PublicIPIdleTimeoutIsOutOfRange\",\r\n    \"message\": \"Public IP address idleTimeoutOverRangeName has invalid Idle Timeout. The value must be between 4 and 30.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '214',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '74d7956e-ffb4-4938-83e8-17c7982b07bd',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '7d7b9461-c9b7-4e83-93ef-a8ef4283d51b',
  'x-ms-routing-request-id': 'WESTEUROPE:20170707T141914Z:7d7b9461-c9b7-4e83-93ef-a8ef4283d51b',
  date: 'Fri, 07 Jul 2017 14:19:14 GMT',
  connection: 'close' });
 return result; }]];