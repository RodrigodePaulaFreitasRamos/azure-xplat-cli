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
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-express-route-circuit-auth/providers/Microsoft.Network/expressRouteCircuits/test-circuit/authorizations/test-auth?api-version=2017-06-01')
  .reply(200, "{\r\n  \"name\": \"test-auth\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-express-route-circuit-auth/providers/Microsoft.Network/expressRouteCircuits/test-circuit/authorizations/test-auth\",\r\n  \"etag\": \"W/\\\"b57b7a95-e5f6-4e2c-8f80-5a827b60d0a6\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"authorizationKey\": \"44325fd2-e24a-4302-bc9e-0189427f897b\",\r\n    \"authorizationUseStatus\": \"Available\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '460',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '8640b3dc-e511-48f6-8faf-aa57a66219a7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': 'd63da1d4-156e-4ab4-93b7-4389a78bf1af',
  'x-ms-routing-request-id': 'WESTEUROPE:20170427T095411Z:d63da1d4-156e-4ab4-93b7-4389a78bf1af',
  date: 'Thu, 27 Apr 2017 09:54:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-express-route-circuit-auth/providers/Microsoft.Network/expressRouteCircuits/test-circuit/authorizations/test-auth?api-version=2017-06-01')
  .reply(200, "{\r\n  \"name\": \"test-auth\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-express-route-circuit-auth/providers/Microsoft.Network/expressRouteCircuits/test-circuit/authorizations/test-auth\",\r\n  \"etag\": \"W/\\\"b57b7a95-e5f6-4e2c-8f80-5a827b60d0a6\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"authorizationKey\": \"44325fd2-e24a-4302-bc9e-0189427f897b\",\r\n    \"authorizationUseStatus\": \"Available\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '460',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '8640b3dc-e511-48f6-8faf-aa57a66219a7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': 'd63da1d4-156e-4ab4-93b7-4389a78bf1af',
  'x-ms-routing-request-id': 'WESTEUROPE:20170427T095411Z:d63da1d4-156e-4ab4-93b7-4389a78bf1af',
  date: 'Thu, 27 Apr 2017 09:54:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-express-route-circuit-auth/providers/Microsoft.Network/expressRouteCircuits/test-circuit/authorizations/test-auth?api-version=2017-06-01', '*')
  .reply(200, "{\r\n  \"name\": \"test-auth\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-express-route-circuit-auth/providers/Microsoft.Network/expressRouteCircuits/test-circuit/authorizations/test-auth\",\r\n  \"etag\": \"W/\\\"f2c92118-96da-4ee5-ae1d-75518059f28d\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"authorizationKey\": \"308201B006092A864886F70D010703A08201A13082019D0201003182014930820145020100302D3019311730150603550403130E6E72702D656E6372797074696F6E02105A63B005AC7543964887A6D28260FDF4300D06092A864886F70D0101010500048201006E51628CB89D23CCD50EBE15E4E765F025C029872C2FE8BF293547A85AD10725438E4901CBF9A86BFF4750F72DC4DAC66D227D32D6D4F0A24D4EB0FA43390A39D464793F7CBD3513E15E7F5A59A9752DA8A8D7AD731944B29E4D87EC5609C6DEEF0E5FFA06462BA390608D03D2DADA2593BA6CD85CF756EF9AFDF24C8C50882A26C2308C669FA7326A689CA003850C055335B59DAC80750B585FB9C479CAF29280A29CD8C8DBE4636069D3AD2F4704B102AB088AEF5647D766B9304502E185ABDC85091D3905273E12BE5D45938380CFCEC08C11E4973EFEC34AFB2626E0BAEC38F02708205517E6BC1CB34EBD5544F9C3656115FB82458E03049631DBD8E94D304B06092A864886F70D010701301406082A864886F70D03070408AE345D25EFD4A1628028146925A5B0B6E764E7B3B3A8E38B49083FCD2EC5879532DF2F8E13566FEBFDC8E8F718112C74EAA1\",\r\n    \"authorizationUseStatus\": \"Available\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1296',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '4c72f6db-1681-4998-ba16-d034e7ce2c4f',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/4c72f6db-1681-4998-ba16-d034e7ce2c4f?api-version=2017-06-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': '4182d715-9c89-43ab-8087-f36efac7d12e',
  'x-ms-routing-request-id': 'WESTEUROPE:20170427T095412Z:4182d715-9c89-43ab-8087-f36efac7d12e',
  date: 'Thu, 27 Apr 2017 09:54:12 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-express-route-circuit-auth/providers/Microsoft.Network/expressRouteCircuits/test-circuit/authorizations/test-auth?api-version=2017-06-01', '*')
  .reply(200, "{\r\n  \"name\": \"test-auth\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-express-route-circuit-auth/providers/Microsoft.Network/expressRouteCircuits/test-circuit/authorizations/test-auth\",\r\n  \"etag\": \"W/\\\"f2c92118-96da-4ee5-ae1d-75518059f28d\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"authorizationKey\": \"308201B006092A864886F70D010703A08201A13082019D0201003182014930820145020100302D3019311730150603550403130E6E72702D656E6372797074696F6E02105A63B005AC7543964887A6D28260FDF4300D06092A864886F70D0101010500048201006E51628CB89D23CCD50EBE15E4E765F025C029872C2FE8BF293547A85AD10725438E4901CBF9A86BFF4750F72DC4DAC66D227D32D6D4F0A24D4EB0FA43390A39D464793F7CBD3513E15E7F5A59A9752DA8A8D7AD731944B29E4D87EC5609C6DEEF0E5FFA06462BA390608D03D2DADA2593BA6CD85CF756EF9AFDF24C8C50882A26C2308C669FA7326A689CA003850C055335B59DAC80750B585FB9C479CAF29280A29CD8C8DBE4636069D3AD2F4704B102AB088AEF5647D766B9304502E185ABDC85091D3905273E12BE5D45938380CFCEC08C11E4973EFEC34AFB2626E0BAEC38F02708205517E6BC1CB34EBD5544F9C3656115FB82458E03049631DBD8E94D304B06092A864886F70D010701301406082A864886F70D03070408AE345D25EFD4A1628028146925A5B0B6E764E7B3B3A8E38B49083FCD2EC5879532DF2F8E13566FEBFDC8E8F718112C74EAA1\",\r\n    \"authorizationUseStatus\": \"Available\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1296',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '4c72f6db-1681-4998-ba16-d034e7ce2c4f',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/4c72f6db-1681-4998-ba16-d034e7ce2c4f?api-version=2017-06-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': '4182d715-9c89-43ab-8087-f36efac7d12e',
  'x-ms-routing-request-id': 'WESTEUROPE:20170427T095412Z:4182d715-9c89-43ab-8087-f36efac7d12e',
  date: 'Thu, 27 Apr 2017 09:54:12 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-express-route-circuit-auth/providers/Microsoft.Network/expressRouteCircuits/test-circuit/authorizations/test-auth?api-version=2017-06-01')
  .reply(200, "{\r\n  \"name\": \"test-auth\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-express-route-circuit-auth/providers/Microsoft.Network/expressRouteCircuits/test-circuit/authorizations/test-auth\",\r\n  \"etag\": \"W/\\\"f2c92118-96da-4ee5-ae1d-75518059f28d\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"authorizationKey\": \"44325fd2-e24a-4302-bc9e-0189427f897b\",\r\n    \"authorizationUseStatus\": \"Available\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '460',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'e6bae8c0-b7cf-463a-a369-17a5b9944575',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '8e44ef10-3242-4c69-8771-c42046f62ca8',
  'x-ms-routing-request-id': 'WESTEUROPE:20170427T095414Z:8e44ef10-3242-4c69-8771-c42046f62ca8',
  date: 'Thu, 27 Apr 2017 09:54:13 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-express-route-circuit-auth/providers/Microsoft.Network/expressRouteCircuits/test-circuit/authorizations/test-auth?api-version=2017-06-01')
  .reply(200, "{\r\n  \"name\": \"test-auth\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-express-route-circuit-auth/providers/Microsoft.Network/expressRouteCircuits/test-circuit/authorizations/test-auth\",\r\n  \"etag\": \"W/\\\"f2c92118-96da-4ee5-ae1d-75518059f28d\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"authorizationKey\": \"44325fd2-e24a-4302-bc9e-0189427f897b\",\r\n    \"authorizationUseStatus\": \"Available\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '460',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'e6bae8c0-b7cf-463a-a369-17a5b9944575',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '8e44ef10-3242-4c69-8771-c42046f62ca8',
  'x-ms-routing-request-id': 'WESTEUROPE:20170427T095414Z:8e44ef10-3242-4c69-8771-c42046f62ca8',
  date: 'Thu, 27 Apr 2017 09:54:13 GMT',
  connection: 'close' });
 return result; }]];
