// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '21466899-20b2-463c-8c30-b8fb28a43248',
    name: 'Core-RP Alpha Subscription-11',
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
  .delete('/subscriptions/21466899-20b2-463c-8c30-b8fb28a43248/resourceGroups/xTestDiskCreate8553/providers/Microsoft.Compute/disks/xplatDisk5?api-version=2016-04-30-preview')
  .reply(204, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1188',
  'x-ms-request-id': '0504193e-5a94-4273-80bf-0dc9f0458398',
  'x-ms-correlation-request-id': '0504193e-5a94-4273-80bf-0dc9f0458398',
  'x-ms-routing-request-id': 'WESTUS2:20170202T030616Z:0504193e-5a94-4273-80bf-0dc9f0458398',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 02 Feb 2017 03:06:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/21466899-20b2-463c-8c30-b8fb28a43248/resourceGroups/xTestDiskCreate8553/providers/Microsoft.Compute/disks/xplatDisk5?api-version=2016-04-30-preview')
  .reply(204, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1188',
  'x-ms-request-id': '0504193e-5a94-4273-80bf-0dc9f0458398',
  'x-ms-correlation-request-id': '0504193e-5a94-4273-80bf-0dc9f0458398',
  'x-ms-routing-request-id': 'WESTUS2:20170202T030616Z:0504193e-5a94-4273-80bf-0dc9f0458398',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 02 Feb 2017 03:06:15 GMT',
  connection: 'close' });
 return result; }]];