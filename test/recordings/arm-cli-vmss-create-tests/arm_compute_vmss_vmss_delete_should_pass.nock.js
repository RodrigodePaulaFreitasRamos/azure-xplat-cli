// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '45b60d85-fd72-427a-a708-f994d26e593e',
    name: 'Azure Storage DM Staging',
    user: {
      name: 'user@domain.example',
      type: 'servicePrincipal'
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
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/resourceGroups/xplatTestVMSSCreate4555/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss?api-version=2016-03-30')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/providers/Microsoft.Compute/locations/southeastasia/operations/751203b1-f661-47d4-bfde-fd310c6b58e3?monitor=true&api-version=2016-03-30',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/providers/Microsoft.Compute/locations/southeastasia/operations/751203b1-f661-47d4-bfde-fd310c6b58e3?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'cf8f3094-e980-4933-b4a0-1fcf396a973c_131057061372552247',
  'x-ms-request-id': '751203b1-f661-47d4-bfde-fd310c6b58e3',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1190',
  'x-ms-correlation-request-id': '61fb7f3e-5133-426a-b866-a888ab4a3865',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20160425T083249Z:61fb7f3e-5133-426a-b866-a888ab4a3865',
  date: 'Mon, 25 Apr 2016 08:32:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/resourceGroups/xplatTestVMSSCreate4555/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss?api-version=2016-03-30')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/providers/Microsoft.Compute/locations/southeastasia/operations/751203b1-f661-47d4-bfde-fd310c6b58e3?monitor=true&api-version=2016-03-30',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/providers/Microsoft.Compute/locations/southeastasia/operations/751203b1-f661-47d4-bfde-fd310c6b58e3?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'cf8f3094-e980-4933-b4a0-1fcf396a973c_131057061372552247',
  'x-ms-request-id': '751203b1-f661-47d4-bfde-fd310c6b58e3',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1190',
  'x-ms-correlation-request-id': '61fb7f3e-5133-426a-b866-a888ab4a3865',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20160425T083249Z:61fb7f3e-5133-426a-b866-a888ab4a3865',
  date: 'Mon, 25 Apr 2016 08:32:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/providers/Microsoft.Compute/locations/southeastasia/operations/751203b1-f661-47d4-bfde-fd310c6b58e3?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"751203b1-f661-47d4-bfde-fd310c6b58e3\",\r\n  \"startTime\": \"2016-04-25T08:32:49.2865822+00:00\",\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'cf8f3094-e980-4933-b4a0-1fcf396a973c_131057061372552247',
  'x-ms-request-id': 'cb8d0e55-fd84-4d0c-bbda-e3c7486d96fd',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14958',
  'x-ms-correlation-request-id': '26b31c30-398f-4fd1-b586-6d82272d4185',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20160425T083321Z:26b31c30-398f-4fd1-b586-6d82272d4185',
  date: 'Mon, 25 Apr 2016 08:33:21 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/providers/Microsoft.Compute/locations/southeastasia/operations/751203b1-f661-47d4-bfde-fd310c6b58e3?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"751203b1-f661-47d4-bfde-fd310c6b58e3\",\r\n  \"startTime\": \"2016-04-25T08:32:49.2865822+00:00\",\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'cf8f3094-e980-4933-b4a0-1fcf396a973c_131057061372552247',
  'x-ms-request-id': 'cb8d0e55-fd84-4d0c-bbda-e3c7486d96fd',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14958',
  'x-ms-correlation-request-id': '26b31c30-398f-4fd1-b586-6d82272d4185',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20160425T083321Z:26b31c30-398f-4fd1-b586-6d82272d4185',
  date: 'Mon, 25 Apr 2016 08:33:21 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/providers/Microsoft.Compute/locations/southeastasia/operations/751203b1-f661-47d4-bfde-fd310c6b58e3?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"751203b1-f661-47d4-bfde-fd310c6b58e3\",\r\n  \"startTime\": \"2016-04-25T08:32:49.2865822+00:00\",\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'cf8f3094-e980-4933-b4a0-1fcf396a973c_131057061372552247',
  'x-ms-request-id': 'd4b1f031-d95d-4854-be09-ed4faee8cb40',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14966',
  'x-ms-correlation-request-id': 'fdca3e7e-8889-470b-9740-bc43a6c7cc44',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20160425T083353Z:fdca3e7e-8889-470b-9740-bc43a6c7cc44',
  date: 'Mon, 25 Apr 2016 08:33:52 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/providers/Microsoft.Compute/locations/southeastasia/operations/751203b1-f661-47d4-bfde-fd310c6b58e3?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"751203b1-f661-47d4-bfde-fd310c6b58e3\",\r\n  \"startTime\": \"2016-04-25T08:32:49.2865822+00:00\",\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'cf8f3094-e980-4933-b4a0-1fcf396a973c_131057061372552247',
  'x-ms-request-id': 'd4b1f031-d95d-4854-be09-ed4faee8cb40',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14966',
  'x-ms-correlation-request-id': 'fdca3e7e-8889-470b-9740-bc43a6c7cc44',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20160425T083353Z:fdca3e7e-8889-470b-9740-bc43a6c7cc44',
  date: 'Mon, 25 Apr 2016 08:33:52 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/providers/Microsoft.Compute/locations/southeastasia/operations/751203b1-f661-47d4-bfde-fd310c6b58e3?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"751203b1-f661-47d4-bfde-fd310c6b58e3\",\r\n  \"startTime\": \"2016-04-25T08:32:49.2865822+00:00\",\r\n  \"endTime\": \"2016-04-25T08:34:12.0990849+00:00\",\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '191',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'cf8f3094-e980-4933-b4a0-1fcf396a973c_131057061372552247',
  'x-ms-request-id': 'ef6508cb-8d3e-4999-9600-28fd9f357374',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14968',
  'x-ms-correlation-request-id': '31bfdef3-ead0-44df-a776-ac74165c7957',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20160425T083425Z:31bfdef3-ead0-44df-a776-ac74165c7957',
  date: 'Mon, 25 Apr 2016 08:34:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/providers/Microsoft.Compute/locations/southeastasia/operations/751203b1-f661-47d4-bfde-fd310c6b58e3?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"751203b1-f661-47d4-bfde-fd310c6b58e3\",\r\n  \"startTime\": \"2016-04-25T08:32:49.2865822+00:00\",\r\n  \"endTime\": \"2016-04-25T08:34:12.0990849+00:00\",\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '191',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'cf8f3094-e980-4933-b4a0-1fcf396a973c_131057061372552247',
  'x-ms-request-id': 'ef6508cb-8d3e-4999-9600-28fd9f357374',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14968',
  'x-ms-correlation-request-id': '31bfdef3-ead0-44df-a776-ac74165c7957',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20160425T083425Z:31bfdef3-ead0-44df-a776-ac74165c7957',
  date: 'Mon, 25 Apr 2016 08:34:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/resourceGroups/xplatTestVMSSCreate4555/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss1?api-version=2016-03-30')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/providers/Microsoft.Compute/locations/southeastasia/operations/a5245172-e44e-4235-b27b-1f0170320560?monitor=true&api-version=2016-03-30',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/providers/Microsoft.Compute/locations/southeastasia/operations/a5245172-e44e-4235-b27b-1f0170320560?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'cf8f3094-e980-4933-b4a0-1fcf396a973c_131057061372552247',
  'x-ms-request-id': 'a5245172-e44e-4235-b27b-1f0170320560',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1189',
  'x-ms-correlation-request-id': '84daf158-f4e8-4c3e-98ac-da0011759202',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20160425T083427Z:84daf158-f4e8-4c3e-98ac-da0011759202',
  date: 'Mon, 25 Apr 2016 08:34:27 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/resourceGroups/xplatTestVMSSCreate4555/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss1?api-version=2016-03-30')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/providers/Microsoft.Compute/locations/southeastasia/operations/a5245172-e44e-4235-b27b-1f0170320560?monitor=true&api-version=2016-03-30',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/providers/Microsoft.Compute/locations/southeastasia/operations/a5245172-e44e-4235-b27b-1f0170320560?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'cf8f3094-e980-4933-b4a0-1fcf396a973c_131057061372552247',
  'x-ms-request-id': 'a5245172-e44e-4235-b27b-1f0170320560',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1189',
  'x-ms-correlation-request-id': '84daf158-f4e8-4c3e-98ac-da0011759202',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20160425T083427Z:84daf158-f4e8-4c3e-98ac-da0011759202',
  date: 'Mon, 25 Apr 2016 08:34:27 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/providers/Microsoft.Compute/locations/southeastasia/operations/a5245172-e44e-4235-b27b-1f0170320560?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"a5245172-e44e-4235-b27b-1f0170320560\",\r\n  \"startTime\": \"2016-04-25T08:34:27.3178357+00:00\",\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'cf8f3094-e980-4933-b4a0-1fcf396a973c_131057061372552247',
  'x-ms-request-id': 'ae850a10-4af7-4a3e-aa48-77a9534d341c',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14959',
  'x-ms-correlation-request-id': 'ddccd6c3-598e-4bf6-92b7-69abe82619c6',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20160425T083459Z:ddccd6c3-598e-4bf6-92b7-69abe82619c6',
  date: 'Mon, 25 Apr 2016 08:34:58 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/providers/Microsoft.Compute/locations/southeastasia/operations/a5245172-e44e-4235-b27b-1f0170320560?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"a5245172-e44e-4235-b27b-1f0170320560\",\r\n  \"startTime\": \"2016-04-25T08:34:27.3178357+00:00\",\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'cf8f3094-e980-4933-b4a0-1fcf396a973c_131057061372552247',
  'x-ms-request-id': 'ae850a10-4af7-4a3e-aa48-77a9534d341c',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14959',
  'x-ms-correlation-request-id': 'ddccd6c3-598e-4bf6-92b7-69abe82619c6',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20160425T083459Z:ddccd6c3-598e-4bf6-92b7-69abe82619c6',
  date: 'Mon, 25 Apr 2016 08:34:58 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/providers/Microsoft.Compute/locations/southeastasia/operations/a5245172-e44e-4235-b27b-1f0170320560?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"a5245172-e44e-4235-b27b-1f0170320560\",\r\n  \"startTime\": \"2016-04-25T08:34:27.3178357+00:00\",\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'cf8f3094-e980-4933-b4a0-1fcf396a973c_131057061372552247',
  'x-ms-request-id': 'd297d6ea-2865-4655-98ee-6748dbc1b48e',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14909',
  'x-ms-correlation-request-id': '9c8888b4-38e1-4b7c-b823-6175f9ebed1c',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20160425T083531Z:9c8888b4-38e1-4b7c-b823-6175f9ebed1c',
  date: 'Mon, 25 Apr 2016 08:35:31 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/providers/Microsoft.Compute/locations/southeastasia/operations/a5245172-e44e-4235-b27b-1f0170320560?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"a5245172-e44e-4235-b27b-1f0170320560\",\r\n  \"startTime\": \"2016-04-25T08:34:27.3178357+00:00\",\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'cf8f3094-e980-4933-b4a0-1fcf396a973c_131057061372552247',
  'x-ms-request-id': 'd297d6ea-2865-4655-98ee-6748dbc1b48e',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14909',
  'x-ms-correlation-request-id': '9c8888b4-38e1-4b7c-b823-6175f9ebed1c',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20160425T083531Z:9c8888b4-38e1-4b7c-b823-6175f9ebed1c',
  date: 'Mon, 25 Apr 2016 08:35:31 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/providers/Microsoft.Compute/locations/southeastasia/operations/a5245172-e44e-4235-b27b-1f0170320560?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"a5245172-e44e-4235-b27b-1f0170320560\",\r\n  \"startTime\": \"2016-04-25T08:34:27.3178357+00:00\",\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'cf8f3094-e980-4933-b4a0-1fcf396a973c_131049109310595223',
  'x-ms-request-id': '33522c38-1cc5-4c95-8882-68431e7fd2a0',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14957',
  'x-ms-correlation-request-id': 'd4367b42-3218-46cb-b23e-42ca9a973703',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20160425T083603Z:d4367b42-3218-46cb-b23e-42ca9a973703',
  date: 'Mon, 25 Apr 2016 08:36:03 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/providers/Microsoft.Compute/locations/southeastasia/operations/a5245172-e44e-4235-b27b-1f0170320560?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"a5245172-e44e-4235-b27b-1f0170320560\",\r\n  \"startTime\": \"2016-04-25T08:34:27.3178357+00:00\",\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'cf8f3094-e980-4933-b4a0-1fcf396a973c_131049109310595223',
  'x-ms-request-id': '33522c38-1cc5-4c95-8882-68431e7fd2a0',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14957',
  'x-ms-correlation-request-id': 'd4367b42-3218-46cb-b23e-42ca9a973703',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20160425T083603Z:d4367b42-3218-46cb-b23e-42ca9a973703',
  date: 'Mon, 25 Apr 2016 08:36:03 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/providers/Microsoft.Compute/locations/southeastasia/operations/a5245172-e44e-4235-b27b-1f0170320560?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"a5245172-e44e-4235-b27b-1f0170320560\",\r\n  \"startTime\": \"2016-04-25T08:34:27.3178357+00:00\",\r\n  \"endTime\": \"2016-04-25T08:36:27.9323078+00:00\",\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '191',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'cf8f3094-e980-4933-b4a0-1fcf396a973c_131049109310595223',
  'x-ms-request-id': 'f0bb3888-5ac1-4bc9-8d98-dc0fd1afb52c',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14907',
  'x-ms-correlation-request-id': '6cbd82f2-1fda-4a8e-a622-3ab97a10649e',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20160425T083635Z:6cbd82f2-1fda-4a8e-a622-3ab97a10649e',
  date: 'Mon, 25 Apr 2016 08:36:34 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/providers/Microsoft.Compute/locations/southeastasia/operations/a5245172-e44e-4235-b27b-1f0170320560?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"a5245172-e44e-4235-b27b-1f0170320560\",\r\n  \"startTime\": \"2016-04-25T08:34:27.3178357+00:00\",\r\n  \"endTime\": \"2016-04-25T08:36:27.9323078+00:00\",\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '191',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'cf8f3094-e980-4933-b4a0-1fcf396a973c_131049109310595223',
  'x-ms-request-id': 'f0bb3888-5ac1-4bc9-8d98-dc0fd1afb52c',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14907',
  'x-ms-correlation-request-id': '6cbd82f2-1fda-4a8e-a622-3ab97a10649e',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20160425T083635Z:6cbd82f2-1fda-4a8e-a622-3ab97a10649e',
  date: 'Mon, 25 Apr 2016 08:36:34 GMT',
  connection: 'close' });
 return result; }]];