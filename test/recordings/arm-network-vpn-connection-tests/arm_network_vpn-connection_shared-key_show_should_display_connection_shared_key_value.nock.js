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
    registeredProviders: ['mobileservice', 'website'],
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
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-1/providers/Microsoft.Network/connections/test-vpn-connection?api-version=2017-06-01')
  .reply(200, "{\r\n  \"name\": \"test-vpn-connection\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-1/providers/Microsoft.Network/connections/test-vpn-connection\",\r\n  \"etag\": \"W/\\\"eb3b8420-7179-45b6-9dc5-b7cce4ed8484\\\"\",\r\n  \"type\": \"Microsoft.Network/connections\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\",\r\n    \"tag3\": \"ccc\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"455cd08f-bbf4-4e37-b524-79ef0e66273a\",\r\n    \"virtualNetworkGateway1\": {\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway-1\"\r\n    },\r\n    \"virtualNetworkGateway2\": {\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-2/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway-2\"\r\n    },\r\n    \"connectionType\": \"Vnet2Vnet\",\r\n    \"routingWeight\": 33,\r\n    \"sharedKey\": \"3082019006092A864886F70D010703A08201813082017D0201003182014930820145020100302D3019311730150603550403130E6E72702D656E6372797074696F6E02105A63B005AC7543964887A6D28260FDF4300D06092A864886F70D0101010500048201008CD4DBAF25E232B7FE2C8D34BD84692630D5A809A4F785C047BB13EC14959223F5E9E633234BBEE1FF22B4ED9F1A04C905731DE599DB25DC2EB42234A692E1656D3B03CFB827C093BA73CFF444C2AC3648E5D74393871E1C8CA173480582367852811D513257F94983909929BFE8BC97F1879A65EB9B361A6DE6BEB942F6BB7B23DF9E3F9D27F2CB091FBE72A99C4BE29B1DAE8B4428AD4AE241B864227D0927FE6276E0F87EE3A7D52414430954F832AB6A20A826E66F03003D6A6383DDB6A37AE527D8304A40EAA155C5EE511BAAC91704D48D64EAF6446E53A3ED9AA35C51732D8598EBA5B5D1065B3C611046AE78C573E5ACCD7E24980594436401158183302B06092A864886F70D010701301406082A864886F70D03070408D8B312F3FB82C8518008378FDD66F5F88CEC\",\r\n    \"enableBgp\": true,\r\n    \"ingressBytesTransferred\": 0,\r\n    \"egressBytesTransferred\": 0\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1955',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'bbb7bba0-638e-467c-9ac5-14a2693ae2f3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14657',
  'x-ms-correlation-request-id': '82451e14-e51b-49ed-800f-1c4b2cf397ef',
  'x-ms-routing-request-id': 'WESTEUROPE:20170119T101832Z:82451e14-e51b-49ed-800f-1c4b2cf397ef',
  date: 'Thu, 19 Jan 2017 10:18:31 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-1/providers/Microsoft.Network/connections/test-vpn-connection?api-version=2017-06-01')
  .reply(200, "{\r\n  \"name\": \"test-vpn-connection\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-1/providers/Microsoft.Network/connections/test-vpn-connection\",\r\n  \"etag\": \"W/\\\"eb3b8420-7179-45b6-9dc5-b7cce4ed8484\\\"\",\r\n  \"type\": \"Microsoft.Network/connections\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\",\r\n    \"tag3\": \"ccc\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"455cd08f-bbf4-4e37-b524-79ef0e66273a\",\r\n    \"virtualNetworkGateway1\": {\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway-1\"\r\n    },\r\n    \"virtualNetworkGateway2\": {\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-2/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway-2\"\r\n    },\r\n    \"connectionType\": \"Vnet2Vnet\",\r\n    \"routingWeight\": 33,\r\n    \"sharedKey\": \"3082019006092A864886F70D010703A08201813082017D0201003182014930820145020100302D3019311730150603550403130E6E72702D656E6372797074696F6E02105A63B005AC7543964887A6D28260FDF4300D06092A864886F70D0101010500048201008CD4DBAF25E232B7FE2C8D34BD84692630D5A809A4F785C047BB13EC14959223F5E9E633234BBEE1FF22B4ED9F1A04C905731DE599DB25DC2EB42234A692E1656D3B03CFB827C093BA73CFF444C2AC3648E5D74393871E1C8CA173480582367852811D513257F94983909929BFE8BC97F1879A65EB9B361A6DE6BEB942F6BB7B23DF9E3F9D27F2CB091FBE72A99C4BE29B1DAE8B4428AD4AE241B864227D0927FE6276E0F87EE3A7D52414430954F832AB6A20A826E66F03003D6A6383DDB6A37AE527D8304A40EAA155C5EE511BAAC91704D48D64EAF6446E53A3ED9AA35C51732D8598EBA5B5D1065B3C611046AE78C573E5ACCD7E24980594436401158183302B06092A864886F70D010701301406082A864886F70D03070408D8B312F3FB82C8518008378FDD66F5F88CEC\",\r\n    \"enableBgp\": true,\r\n    \"ingressBytesTransferred\": 0,\r\n    \"egressBytesTransferred\": 0\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1955',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'bbb7bba0-638e-467c-9ac5-14a2693ae2f3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14657',
  'x-ms-correlation-request-id': '82451e14-e51b-49ed-800f-1c4b2cf397ef',
  'x-ms-routing-request-id': 'WESTEUROPE:20170119T101832Z:82451e14-e51b-49ed-800f-1c4b2cf397ef',
  date: 'Thu, 19 Jan 2017 10:18:31 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-1/providers/Microsoft.Network/connections/test-vpn-connection/sharedkey?api-version=2017-06-01')
  .reply(200, "null", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '4',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'd08164e0-23e8-41e1-8e35-65b3040fd5da',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14978',
  'x-ms-correlation-request-id': 'c4f311bf-2c8f-4dac-a9fe-17ad49282986',
  'x-ms-routing-request-id': 'WESTEUROPE:20170119T101833Z:c4f311bf-2c8f-4dac-a9fe-17ad49282986',
  date: 'Thu, 19 Jan 2017 10:18:32 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-1/providers/Microsoft.Network/connections/test-vpn-connection/sharedkey?api-version=2017-06-01')
  .reply(200, "null", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '4',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'd08164e0-23e8-41e1-8e35-65b3040fd5da',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14978',
  'x-ms-correlation-request-id': 'c4f311bf-2c8f-4dac-a9fe-17ad49282986',
  'x-ms-routing-request-id': 'WESTEUROPE:20170119T101833Z:c4f311bf-2c8f-4dac-a9fe-17ad49282986',
  date: 'Thu, 19 Jan 2017 10:18:32 GMT',
  connection: 'close' });
 return result; }]];
