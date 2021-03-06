// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '9532a63e-f2eb-4649-bb23-5ed01077ce80',
    name: 'franks-official-test-sub',
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
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/createSubnetWithoutNsgAndRouteTableName?api-version=2017-06-01')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"Resource /subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/createSubnetWithoutNsgAndRouteTableName not found.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '302',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '6a6a95d5-3b75-4b9b-ae5c-27540977da10',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': 'bbf0ddc1-010f-4977-9ccf-d44dc652c74f',
  'x-ms-routing-request-id': 'WESTEUROPE:20170728T091330Z:bbf0ddc1-010f-4977-9ccf-d44dc652c74f',
  date: 'Fri, 28 Jul 2017 09:13:29 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/createSubnetWithoutNsgAndRouteTableName?api-version=2017-06-01')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"Resource /subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/createSubnetWithoutNsgAndRouteTableName not found.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '302',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '6a6a95d5-3b75-4b9b-ae5c-27540977da10',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': 'bbf0ddc1-010f-4977-9ccf-d44dc652c74f',
  'x-ms-routing-request-id': 'WESTEUROPE:20170728T091330Z:bbf0ddc1-010f-4977-9ccf-d44dc652c74f',
  date: 'Fri, 28 Jul 2017 09:13:29 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/createSubnetWithoutNsgAndRouteTableName?api-version=2017-06-01', '*')
  .reply(201, "{\r\n  \"name\": \"createSubnetWithoutNsgAndRouteTableName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/createSubnetWithoutNsgAndRouteTableName\",\r\n  \"etag\": \"W/\\\"33780e5d-438a-42b2-92f7-bcbd9e93cff7\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"addressPrefix\": \"10.0.0.0/16\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '421',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '3',
  'x-ms-request-id': '49b7c62b-e564-40dc-b6f1-a1948220d4a8',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/westus/operations/49b7c62b-e564-40dc-b6f1-a1948220d4a8?api-version=2017-06-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'edab38de-fa84-4ad6-a9d2-53d1f7ea8f00',
  'x-ms-routing-request-id': 'WESTEUROPE:20170728T091332Z:edab38de-fa84-4ad6-a9d2-53d1f7ea8f00',
  date: 'Fri, 28 Jul 2017 09:13:31 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/createSubnetWithoutNsgAndRouteTableName?api-version=2017-06-01', '*')
  .reply(201, "{\r\n  \"name\": \"createSubnetWithoutNsgAndRouteTableName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/createSubnetWithoutNsgAndRouteTableName\",\r\n  \"etag\": \"W/\\\"33780e5d-438a-42b2-92f7-bcbd9e93cff7\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"addressPrefix\": \"10.0.0.0/16\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '421',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '3',
  'x-ms-request-id': '49b7c62b-e564-40dc-b6f1-a1948220d4a8',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/westus/operations/49b7c62b-e564-40dc-b6f1-a1948220d4a8?api-version=2017-06-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'edab38de-fa84-4ad6-a9d2-53d1f7ea8f00',
  'x-ms-routing-request-id': 'WESTEUROPE:20170728T091332Z:edab38de-fa84-4ad6-a9d2-53d1f7ea8f00',
  date: 'Fri, 28 Jul 2017 09:13:31 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/westus/operations/49b7c62b-e564-40dc-b6f1-a1948220d4a8?api-version=2017-06-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '3ad541c0-076a-4deb-ab9a-a7c428081d0e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '97b2ce38-baed-4668-b5c2-0a657ce67978',
  'x-ms-routing-request-id': 'WESTEUROPE:20170728T091403Z:97b2ce38-baed-4668-b5c2-0a657ce67978',
  date: 'Fri, 28 Jul 2017 09:14:02 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/westus/operations/49b7c62b-e564-40dc-b6f1-a1948220d4a8?api-version=2017-06-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '3ad541c0-076a-4deb-ab9a-a7c428081d0e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '97b2ce38-baed-4668-b5c2-0a657ce67978',
  'x-ms-routing-request-id': 'WESTEUROPE:20170728T091403Z:97b2ce38-baed-4668-b5c2-0a657ce67978',
  date: 'Fri, 28 Jul 2017 09:14:02 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/createSubnetWithoutNsgAndRouteTableName?api-version=2017-06-01')
  .reply(200, "{\r\n  \"name\": \"createSubnetWithoutNsgAndRouteTableName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/createSubnetWithoutNsgAndRouteTableName\",\r\n  \"etag\": \"W/\\\"36d79562-487e-4c23-a6b3-4511d34e05a8\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressPrefix\": \"10.0.0.0/16\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '422',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"36d79562-487e-4c23-a6b3-4511d34e05a8"',
  'x-ms-request-id': 'd2823b92-2c83-46e1-ae65-48049d41be8a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '450c760c-d127-4536-ab66-fc01f79c052e',
  'x-ms-routing-request-id': 'WESTEUROPE:20170728T091404Z:450c760c-d127-4536-ab66-fc01f79c052e',
  date: 'Fri, 28 Jul 2017 09:14:03 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/createSubnetWithoutNsgAndRouteTableName?api-version=2017-06-01')
  .reply(200, "{\r\n  \"name\": \"createSubnetWithoutNsgAndRouteTableName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/createSubnetWithoutNsgAndRouteTableName\",\r\n  \"etag\": \"W/\\\"36d79562-487e-4c23-a6b3-4511d34e05a8\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressPrefix\": \"10.0.0.0/16\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '422',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"36d79562-487e-4c23-a6b3-4511d34e05a8"',
  'x-ms-request-id': 'd2823b92-2c83-46e1-ae65-48049d41be8a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '450c760c-d127-4536-ab66-fc01f79c052e',
  'x-ms-routing-request-id': 'WESTEUROPE:20170728T091404Z:450c760c-d127-4536-ab66-fc01f79c052e',
  date: 'Fri, 28 Jul 2017 09:14:03 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/createSubnetWithoutNsgAndRouteTableName?api-version=2017-06-01')
  .reply(200, "{\r\n  \"name\": \"createSubnetWithoutNsgAndRouteTableName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/createSubnetWithoutNsgAndRouteTableName\",\r\n  \"etag\": \"W/\\\"36d79562-487e-4c23-a6b3-4511d34e05a8\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressPrefix\": \"10.0.0.0/16\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '422',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"36d79562-487e-4c23-a6b3-4511d34e05a8"',
  'x-ms-request-id': '83d54db1-eb76-4b23-90c4-a39c3a7bf6f4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': 'e7c4f8a0-dae6-4ffd-8618-027d1b44ffa5',
  'x-ms-routing-request-id': 'WESTEUROPE:20170728T091405Z:e7c4f8a0-dae6-4ffd-8618-027d1b44ffa5',
  date: 'Fri, 28 Jul 2017 09:14:05 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/createSubnetWithoutNsgAndRouteTableName?api-version=2017-06-01')
  .reply(200, "{\r\n  \"name\": \"createSubnetWithoutNsgAndRouteTableName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/createSubnetWithoutNsgAndRouteTableName\",\r\n  \"etag\": \"W/\\\"36d79562-487e-4c23-a6b3-4511d34e05a8\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressPrefix\": \"10.0.0.0/16\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '422',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"36d79562-487e-4c23-a6b3-4511d34e05a8"',
  'x-ms-request-id': '83d54db1-eb76-4b23-90c4-a39c3a7bf6f4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': 'e7c4f8a0-dae6-4ffd-8618-027d1b44ffa5',
  'x-ms-routing-request-id': 'WESTEUROPE:20170728T091405Z:e7c4f8a0-dae6-4ffd-8618-027d1b44ffa5',
  date: 'Fri, 28 Jul 2017 09:14:05 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/createSubnetWithoutNsgAndRouteTableName?api-version=2017-06-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/westus/operationResults/8dfa5f67-80dd-4475-8b6f-73f9ff13cc8e?api-version=2017-06-01',
  'retry-after': '10',
  'x-ms-request-id': '8dfa5f67-80dd-4475-8b6f-73f9ff13cc8e',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/westus/operations/8dfa5f67-80dd-4475-8b6f-73f9ff13cc8e?api-version=2017-06-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '3d0be09f-d2b9-4477-918f-c40ffde58d21',
  'x-ms-routing-request-id': 'WESTEUROPE:20170728T091407Z:3d0be09f-d2b9-4477-918f-c40ffde58d21',
  date: 'Fri, 28 Jul 2017 09:14:07 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/createSubnetWithoutNsgAndRouteTableName?api-version=2017-06-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/westus/operationResults/8dfa5f67-80dd-4475-8b6f-73f9ff13cc8e?api-version=2017-06-01',
  'retry-after': '10',
  'x-ms-request-id': '8dfa5f67-80dd-4475-8b6f-73f9ff13cc8e',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/westus/operations/8dfa5f67-80dd-4475-8b6f-73f9ff13cc8e?api-version=2017-06-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '3d0be09f-d2b9-4477-918f-c40ffde58d21',
  'x-ms-routing-request-id': 'WESTEUROPE:20170728T091407Z:3d0be09f-d2b9-4477-918f-c40ffde58d21',
  date: 'Fri, 28 Jul 2017 09:14:07 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/westus/operations/8dfa5f67-80dd-4475-8b6f-73f9ff13cc8e?api-version=2017-06-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'f378cead-a103-49c0-9449-ef57933d40cb',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': 'b00d1647-87a5-4809-b696-585464e8a2a5',
  'x-ms-routing-request-id': 'WESTEUROPE:20170728T091438Z:b00d1647-87a5-4809-b696-585464e8a2a5',
  date: 'Fri, 28 Jul 2017 09:14:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/westus/operations/8dfa5f67-80dd-4475-8b6f-73f9ff13cc8e?api-version=2017-06-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'f378cead-a103-49c0-9449-ef57933d40cb',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': 'b00d1647-87a5-4809-b696-585464e8a2a5',
  'x-ms-routing-request-id': 'WESTEUROPE:20170728T091438Z:b00d1647-87a5-4809-b696-585464e8a2a5',
  date: 'Fri, 28 Jul 2017 09:14:37 GMT',
  connection: 'close' });
 return result; }]];