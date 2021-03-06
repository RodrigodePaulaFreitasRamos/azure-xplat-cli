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
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table/providers/Microsoft.Network/routeTables/routeTableName?api-version=2017-06-01')
  .reply(200, "{\r\n  \"name\": \"routeTableName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table/providers/Microsoft.Network/routeTables/routeTableName\",\r\n  \"etag\": \"W/\\\"eba2b72b-179c-4b0d-8f8e-0a4105f15d65\\\"\",\r\n  \"type\": \"Microsoft.Network/routeTables\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"bfa5db31-40d3-46ff-b64e-056773c9a0c3\",\r\n    \"routes\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '458',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"eba2b72b-179c-4b0d-8f8e-0a4105f15d65"',
  'x-ms-request-id': '6b5ef364-5808-4aa8-a7b7-10df64906da2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': 'cc165f90-7729-4fa6-850a-db2d0936dd34',
  'x-ms-routing-request-id': 'WESTEUROPE:20170602T142702Z:cc165f90-7729-4fa6-850a-db2d0936dd34',
  date: 'Fri, 02 Jun 2017 14:27:01 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table/providers/Microsoft.Network/routeTables/routeTableName?api-version=2017-06-01')
  .reply(200, "{\r\n  \"name\": \"routeTableName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table/providers/Microsoft.Network/routeTables/routeTableName\",\r\n  \"etag\": \"W/\\\"eba2b72b-179c-4b0d-8f8e-0a4105f15d65\\\"\",\r\n  \"type\": \"Microsoft.Network/routeTables\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"bfa5db31-40d3-46ff-b64e-056773c9a0c3\",\r\n    \"routes\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '458',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"eba2b72b-179c-4b0d-8f8e-0a4105f15d65"',
  'x-ms-request-id': '6b5ef364-5808-4aa8-a7b7-10df64906da2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': 'cc165f90-7729-4fa6-850a-db2d0936dd34',
  'x-ms-routing-request-id': 'WESTEUROPE:20170602T142702Z:cc165f90-7729-4fa6-850a-db2d0936dd34',
  date: 'Fri, 02 Jun 2017 14:27:01 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table/providers/Microsoft.Network/routeTables/routeTableName?api-version=2017-06-01', '*')
  .reply(200, "{\r\n  \"name\": \"routeTableName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table/providers/Microsoft.Network/routeTables/routeTableName\",\r\n  \"etag\": \"W/\\\"eba2b72b-179c-4b0d-8f8e-0a4105f15d65\\\"\",\r\n  \"type\": \"Microsoft.Network/routeTables\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"bfa5db31-40d3-46ff-b64e-056773c9a0c3\",\r\n    \"routes\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '458',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '11415978-76b1-44fd-a538-4642337c539c',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/11415978-76b1-44fd-a538-4642337c539c?api-version=2017-06-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': '5b71bedc-7aac-40c0-a90a-3b9d68c4e83e',
  'x-ms-routing-request-id': 'WESTEUROPE:20170602T142703Z:5b71bedc-7aac-40c0-a90a-3b9d68c4e83e',
  date: 'Fri, 02 Jun 2017 14:27:02 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table/providers/Microsoft.Network/routeTables/routeTableName?api-version=2017-06-01', '*')
  .reply(200, "{\r\n  \"name\": \"routeTableName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table/providers/Microsoft.Network/routeTables/routeTableName\",\r\n  \"etag\": \"W/\\\"eba2b72b-179c-4b0d-8f8e-0a4105f15d65\\\"\",\r\n  \"type\": \"Microsoft.Network/routeTables\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"bfa5db31-40d3-46ff-b64e-056773c9a0c3\",\r\n    \"routes\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '458',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '11415978-76b1-44fd-a538-4642337c539c',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/11415978-76b1-44fd-a538-4642337c539c?api-version=2017-06-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': '5b71bedc-7aac-40c0-a90a-3b9d68c4e83e',
  'x-ms-routing-request-id': 'WESTEUROPE:20170602T142703Z:5b71bedc-7aac-40c0-a90a-3b9d68c4e83e',
  date: 'Fri, 02 Jun 2017 14:27:02 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table/providers/Microsoft.Network/routeTables/routeTableName?api-version=2017-06-01')
  .reply(200, "{\r\n  \"name\": \"routeTableName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table/providers/Microsoft.Network/routeTables/routeTableName\",\r\n  \"etag\": \"W/\\\"eba2b72b-179c-4b0d-8f8e-0a4105f15d65\\\"\",\r\n  \"type\": \"Microsoft.Network/routeTables\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"bfa5db31-40d3-46ff-b64e-056773c9a0c3\",\r\n    \"routes\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '458',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"eba2b72b-179c-4b0d-8f8e-0a4105f15d65"',
  'x-ms-request-id': '5c2b1dbf-e17b-43b4-8406-d49486217f11',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': '11331732-b49f-4d54-88b2-b5fab6f5d485',
  'x-ms-routing-request-id': 'WESTEUROPE:20170602T142704Z:11331732-b49f-4d54-88b2-b5fab6f5d485',
  date: 'Fri, 02 Jun 2017 14:27:03 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table/providers/Microsoft.Network/routeTables/routeTableName?api-version=2017-06-01')
  .reply(200, "{\r\n  \"name\": \"routeTableName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table/providers/Microsoft.Network/routeTables/routeTableName\",\r\n  \"etag\": \"W/\\\"eba2b72b-179c-4b0d-8f8e-0a4105f15d65\\\"\",\r\n  \"type\": \"Microsoft.Network/routeTables\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"bfa5db31-40d3-46ff-b64e-056773c9a0c3\",\r\n    \"routes\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '458',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"eba2b72b-179c-4b0d-8f8e-0a4105f15d65"',
  'x-ms-request-id': '5c2b1dbf-e17b-43b4-8406-d49486217f11',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': '11331732-b49f-4d54-88b2-b5fab6f5d485',
  'x-ms-routing-request-id': 'WESTEUROPE:20170602T142704Z:11331732-b49f-4d54-88b2-b5fab6f5d485',
  date: 'Fri, 02 Jun 2017 14:27:03 GMT',
  connection: 'close' });
 return result; }]];
