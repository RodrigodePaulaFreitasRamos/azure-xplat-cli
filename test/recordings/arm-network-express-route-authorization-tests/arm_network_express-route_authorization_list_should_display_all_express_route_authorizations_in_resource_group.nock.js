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
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-express-route-circuit-auth/providers/Microsoft.Network/expressRouteCircuits/test-circuit/authorizations?api-version=2017-06-01')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"test-auth\",\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-express-route-circuit-auth/providers/Microsoft.Network/expressRouteCircuits/test-circuit/authorizations/test-auth\",\r\n      \"etag\": \"W/\\\"f2c92118-96da-4ee5-ae1d-75518059f28d\\\"\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"authorizationKey\": \"44325fd2-e24a-4302-bc9e-0189427f897b\",\r\n        \"authorizationUseStatus\": \"Available\"\r\n      }\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '525',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '826babb4-ec59-4d24-bb6d-802543e15a4b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '7f5fc213-3bbb-44f9-a18f-a9624a784ee7',
  'x-ms-routing-request-id': 'WESTEUROPE:20170427T095417Z:7f5fc213-3bbb-44f9-a18f-a9624a784ee7',
  date: 'Thu, 27 Apr 2017 09:54:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-express-route-circuit-auth/providers/Microsoft.Network/expressRouteCircuits/test-circuit/authorizations?api-version=2017-06-01')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"test-auth\",\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-express-route-circuit-auth/providers/Microsoft.Network/expressRouteCircuits/test-circuit/authorizations/test-auth\",\r\n      \"etag\": \"W/\\\"f2c92118-96da-4ee5-ae1d-75518059f28d\\\"\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"authorizationKey\": \"44325fd2-e24a-4302-bc9e-0189427f897b\",\r\n        \"authorizationUseStatus\": \"Available\"\r\n      }\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '525',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '826babb4-ec59-4d24-bb6d-802543e15a4b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '7f5fc213-3bbb-44f9-a18f-a9624a784ee7',
  'x-ms-routing-request-id': 'WESTEUROPE:20170427T095417Z:7f5fc213-3bbb-44f9-a18f-a9624a784ee7',
  date: 'Thu, 27 Apr 2017 09:54:16 GMT',
  connection: 'close' });
 return result; }]];
