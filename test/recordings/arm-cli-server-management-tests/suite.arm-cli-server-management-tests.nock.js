// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '3e82a90d-d19e-42f9-bb43-9112945846ef',
    name: 'Remote Server Management Dev',
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
  process.env['AZURE_ARM_SMT_TEST_LOCATION'] = 'centralus';
  process.env['AZURE_ARM_SMT_TEST_RESOURCE_GROUP'] = 'sdktest';
  process.env['AZURE_ARM_SMT_GATEWAY_PREFIX'] = 'sdk_test';
  process.env['AZURE_ARM_SMT_NODE_PREFIX'] = 'sdk_test_node';
  process.env['AZURE_ARM_SMT_NODE_USERNAME'] = 'gsAdmin';
  process.env['AZURE_ARM_SMT_NODE_PASSWORD'] = 'S0meP@sswerd!';
};

exports.scopes = [];