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
  .delete('/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/resourceGroups/xplatTstVmssGCreate2980/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5?api-version=2016-03-30')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/providers/Microsoft.Compute/locations/southeastasia/operations/65aa463e-a35e-4d1e-8e5f-86878dea98ec?monitor=true&api-version=2016-03-30',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/providers/Microsoft.Compute/locations/southeastasia/operations/65aa463e-a35e-4d1e-8e5f-86878dea98ec?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'cf8f3094-e980-4933-b4a0-1fcf396a973c_131058622357232507',
  'x-ms-request-id': '65aa463e-a35e-4d1e-8e5f-86878dea98ec',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1192',
  'x-ms-correlation-request-id': '05df3b29-90b8-475f-8694-0b020f764a52',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20160425T091406Z:05df3b29-90b8-475f-8694-0b020f764a52',
  date: 'Mon, 25 Apr 2016 09:14:05 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/resourceGroups/xplatTstVmssGCreate2980/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5?api-version=2016-03-30')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/providers/Microsoft.Compute/locations/southeastasia/operations/65aa463e-a35e-4d1e-8e5f-86878dea98ec?monitor=true&api-version=2016-03-30',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/providers/Microsoft.Compute/locations/southeastasia/operations/65aa463e-a35e-4d1e-8e5f-86878dea98ec?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'cf8f3094-e980-4933-b4a0-1fcf396a973c_131058622357232507',
  'x-ms-request-id': '65aa463e-a35e-4d1e-8e5f-86878dea98ec',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1192',
  'x-ms-correlation-request-id': '05df3b29-90b8-475f-8694-0b020f764a52',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20160425T091406Z:05df3b29-90b8-475f-8694-0b020f764a52',
  date: 'Mon, 25 Apr 2016 09:14:05 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/providers/Microsoft.Compute/locations/southeastasia/operations/65aa463e-a35e-4d1e-8e5f-86878dea98ec?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"65aa463e-a35e-4d1e-8e5f-86878dea98ec\",\r\n  \"startTime\": \"2016-04-25T09:14:06.2678602+00:00\",\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'cf8f3094-e980-4933-b4a0-1fcf396a973c_131058622357232507',
  'x-ms-request-id': 'bdec3dff-66b9-4dc3-8715-b7e0c3df19b4',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14898',
  'x-ms-correlation-request-id': '28b14bc4-207c-47b1-9acf-65774e5a0317',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20160425T091438Z:28b14bc4-207c-47b1-9acf-65774e5a0317',
  date: 'Mon, 25 Apr 2016 09:14:38 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/providers/Microsoft.Compute/locations/southeastasia/operations/65aa463e-a35e-4d1e-8e5f-86878dea98ec?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"65aa463e-a35e-4d1e-8e5f-86878dea98ec\",\r\n  \"startTime\": \"2016-04-25T09:14:06.2678602+00:00\",\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'cf8f3094-e980-4933-b4a0-1fcf396a973c_131058622357232507',
  'x-ms-request-id': 'bdec3dff-66b9-4dc3-8715-b7e0c3df19b4',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14898',
  'x-ms-correlation-request-id': '28b14bc4-207c-47b1-9acf-65774e5a0317',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20160425T091438Z:28b14bc4-207c-47b1-9acf-65774e5a0317',
  date: 'Mon, 25 Apr 2016 09:14:38 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/providers/Microsoft.Compute/locations/southeastasia/operations/65aa463e-a35e-4d1e-8e5f-86878dea98ec?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"65aa463e-a35e-4d1e-8e5f-86878dea98ec\",\r\n  \"startTime\": \"2016-04-25T09:14:06.2678602+00:00\",\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'cf8f3094-e980-4933-b4a0-1fcf396a973c_131058622357232507',
  'x-ms-request-id': '40bfc408-7368-4831-b1e2-ce10776ac2ed',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14903',
  'x-ms-correlation-request-id': 'e8bbddbc-2724-460d-a897-15d633d63558',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20160425T091509Z:e8bbddbc-2724-460d-a897-15d633d63558',
  date: 'Mon, 25 Apr 2016 09:15:09 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/providers/Microsoft.Compute/locations/southeastasia/operations/65aa463e-a35e-4d1e-8e5f-86878dea98ec?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"65aa463e-a35e-4d1e-8e5f-86878dea98ec\",\r\n  \"startTime\": \"2016-04-25T09:14:06.2678602+00:00\",\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'cf8f3094-e980-4933-b4a0-1fcf396a973c_131058622357232507',
  'x-ms-request-id': '40bfc408-7368-4831-b1e2-ce10776ac2ed',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14903',
  'x-ms-correlation-request-id': 'e8bbddbc-2724-460d-a897-15d633d63558',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20160425T091509Z:e8bbddbc-2724-460d-a897-15d633d63558',
  date: 'Mon, 25 Apr 2016 09:15:09 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/providers/Microsoft.Compute/locations/southeastasia/operations/65aa463e-a35e-4d1e-8e5f-86878dea98ec?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"65aa463e-a35e-4d1e-8e5f-86878dea98ec\",\r\n  \"startTime\": \"2016-04-25T09:14:06.2678602+00:00\",\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'cf8f3094-e980-4933-b4a0-1fcf396a973c_131058622357232507',
  'x-ms-request-id': '018ea19d-6cc8-4579-bcf9-cb47abccdb3c',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14974',
  'x-ms-correlation-request-id': '7d35ecc0-59fa-47e8-847b-09d52ebcbfa0',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20160425T091541Z:7d35ecc0-59fa-47e8-847b-09d52ebcbfa0',
  date: 'Mon, 25 Apr 2016 09:15:41 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/providers/Microsoft.Compute/locations/southeastasia/operations/65aa463e-a35e-4d1e-8e5f-86878dea98ec?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"65aa463e-a35e-4d1e-8e5f-86878dea98ec\",\r\n  \"startTime\": \"2016-04-25T09:14:06.2678602+00:00\",\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'cf8f3094-e980-4933-b4a0-1fcf396a973c_131058622357232507',
  'x-ms-request-id': '018ea19d-6cc8-4579-bcf9-cb47abccdb3c',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14974',
  'x-ms-correlation-request-id': '7d35ecc0-59fa-47e8-847b-09d52ebcbfa0',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20160425T091541Z:7d35ecc0-59fa-47e8-847b-09d52ebcbfa0',
  date: 'Mon, 25 Apr 2016 09:15:41 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/providers/Microsoft.Compute/locations/southeastasia/operations/65aa463e-a35e-4d1e-8e5f-86878dea98ec?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"65aa463e-a35e-4d1e-8e5f-86878dea98ec\",\r\n  \"startTime\": \"2016-04-25T09:14:06.2678602+00:00\",\r\n  \"endTime\": \"2016-04-25T09:16:00.3154876+00:00\",\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '191',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'cf8f3094-e980-4933-b4a0-1fcf396a973c_131058622357232507',
  'x-ms-request-id': '4eaf754d-bdbe-4a97-a3e4-8c229e982615',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14973',
  'x-ms-correlation-request-id': '6f15d2f4-576e-45fe-a3b9-e5d3c656bc00',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20160425T091613Z:6f15d2f4-576e-45fe-a3b9-e5d3c656bc00',
  date: 'Mon, 25 Apr 2016 09:16:12 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/providers/Microsoft.Compute/locations/southeastasia/operations/65aa463e-a35e-4d1e-8e5f-86878dea98ec?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"65aa463e-a35e-4d1e-8e5f-86878dea98ec\",\r\n  \"startTime\": \"2016-04-25T09:14:06.2678602+00:00\",\r\n  \"endTime\": \"2016-04-25T09:16:00.3154876+00:00\",\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '191',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'cf8f3094-e980-4933-b4a0-1fcf396a973c_131058622357232507',
  'x-ms-request-id': '4eaf754d-bdbe-4a97-a3e4-8c229e982615',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14973',
  'x-ms-correlation-request-id': '6f15d2f4-576e-45fe-a3b9-e5d3c656bc00',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20160425T091613Z:6f15d2f4-576e-45fe-a3b9-e5d3c656bc00',
  date: 'Mon, 25 Apr 2016 09:16:12 GMT',
  connection: 'close' });
 return result; }]];