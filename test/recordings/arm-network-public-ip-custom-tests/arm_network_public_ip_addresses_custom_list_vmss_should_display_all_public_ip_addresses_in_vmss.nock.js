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
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip-custom/providers/Microsoft.Compute/virtualMachineScaleSets/publicIPAddressName/publicipaddresses?api-version=2017-03-30')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"xplattestip\",\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip-custom/providers/Microsoft.Compute/virtualMachineScaleSets/publicIPAddressName/virtualMachines/0/networkInterfaces/test/ipConfigurations/test/publicIPAddresses/xplattestip\",\r\n      \"etag\": \"W/\\\"b7985ff2-2ee0-4b24-8fc5-950dce6aa62d\\\"\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"resourceGuid\": \"a3670256-3214-449e-822e-c302e0612f7c\",\r\n        \"ipAddress\": \"52.187.44.30\",\r\n        \"publicIPAddressVersion\": \"IPv4\",\r\n        \"publicIPAllocationMethod\": \"Dynamic\",\r\n        \"idleTimeoutInMinutes\": 30,\r\n        \"dnsSettings\": {\r\n          \"domainNameLabel\": \"vm0.vmssiplabel\",\r\n          \"fqdn\": \"vm0.vmssiplabel.southeastasia.cloudapp.azure.com\"\r\n        },\r\n        \"ipConfiguration\": {\r\n          \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip-custom/providers/Microsoft.Compute/virtualMachineScaleSets/publicIPAddressName/virtualMachines/0/networkInterfaces/test/ipConfigurations/test\"\r\n        }\r\n      }\r\n    },\r\n    {\r\n      \"name\": \"xplattestip\",\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip-custom/providers/Microsoft.Compute/virtualMachineScaleSets/publicIPAddressName/virtualMachines/1/networkInterfaces/test/ipConfigurations/test/publicIPAddresses/xplattestip\",\r\n      \"etag\": \"W/\\\"48c4d015-a99f-4a5b-b234-edd27e84da95\\\"\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"resourceGuid\": \"c038df9c-daf3-405a-b671-b6909b251330\",\r\n        \"ipAddress\": \"52.163.63.12\",\r\n        \"publicIPAddressVersion\": \"IPv4\",\r\n        \"publicIPAllocationMethod\": \"Dynamic\",\r\n        \"idleTimeoutInMinutes\": 30,\r\n        \"dnsSettings\": {\r\n          \"domainNameLabel\": \"vm1.vmssiplabel\",\r\n          \"fqdn\": \"vm1.vmssiplabel.southeastasia.cloudapp.azure.com\"\r\n        },\r\n        \"ipConfiguration\": {\r\n          \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip-custom/providers/Microsoft.Compute/virtualMachineScaleSets/publicIPAddressName/virtualMachines/1/networkInterfaces/test/ipConfigurations/test\"\r\n        }\r\n      }\r\n    },\r\n    {\r\n      \"name\": \"xplattestip\",\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip-custom/providers/Microsoft.Compute/virtualMachineScaleSets/publicIPAddressName/virtualMachines/2/networkInterfaces/test/ipConfigurations/test/publicIPAddresses/xplattestip\",\r\n      \"etag\": \"W/\\\"e862470c-46d9-4542-be9c-32cbde926a4d\\\"\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"resourceGuid\": \"82b187ba-1a55-4b3b-8cb1-6a895d3d4112\",\r\n        \"ipAddress\": \"52.163.62.38\",\r\n        \"publicIPAddressVersion\": \"IPv4\",\r\n        \"publicIPAllocationMethod\": \"Dynamic\",\r\n        \"idleTimeoutInMinutes\": 30,\r\n        \"dnsSettings\": {\r\n          \"domainNameLabel\": \"vm2.vmssiplabel\",\r\n          \"fqdn\": \"vm2.vmssiplabel.southeastasia.cloudapp.azure.com\"\r\n        },\r\n        \"ipConfiguration\": {\r\n          \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip-custom/providers/Microsoft.Compute/virtualMachineScaleSets/publicIPAddressName/virtualMachines/2/networkInterfaces/test/ipConfigurations/test\"\r\n        }\r\n      }\r\n    },\r\n    {\r\n      \"name\": \"xplattestip\",\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip-custom/providers/Microsoft.Compute/virtualMachineScaleSets/publicIPAddressName/virtualMachines/3/networkInterfaces/test/ipConfigurations/test/publicIPAddresses/xplattestip\",\r\n      \"etag\": \"W/\\\"c879e205-d6fa-4240-bba2-095597b59611\\\"\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"resourceGuid\": \"99774b9d-a34d-4212-aa8f-cf921c69c59e\",\r\n        \"ipAddress\": \"52.163.58.224\",\r\n        \"publicIPAddressVersion\": \"IPv4\",\r\n        \"publicIPAllocationMethod\": \"Dynamic\",\r\n        \"idleTimeoutInMinutes\": 30,\r\n        \"dnsSettings\": {\r\n          \"domainNameLabel\": \"vm3.vmssiplabel\",\r\n          \"fqdn\": \"vm3.vmssiplabel.southeastasia.cloudapp.azure.com\"\r\n        },\r\n        \"ipConfiguration\": {\r\n          \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip-custom/providers/Microsoft.Compute/virtualMachineScaleSets/publicIPAddressName/virtualMachines/3/networkInterfaces/test/ipConfigurations/test\"\r\n        }\r\n      }\r\n    },\r\n    {\r\n      \"name\": \"xplattestip\",\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip-custom/providers/Microsoft.Compute/virtualMachineScaleSets/publicIPAddressName/virtualMachines/4/networkInterfaces/test/ipConfigurations/test/publicIPAddresses/xplattestip\",\r\n      \"etag\": \"W/\\\"dc176800-355b-4640-8927-eb9b46e8d975\\\"\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"resourceGuid\": \"f8488e89-649c-407d-9435-3debb85511ff\",\r\n        \"ipAddress\": \"52.163.56.47\",\r\n        \"publicIPAddressVersion\": \"IPv4\",\r\n        \"publicIPAllocationMethod\": \"Dynamic\",\r\n        \"idleTimeoutInMinutes\": 30,\r\n        \"dnsSettings\": {\r\n          \"domainNameLabel\": \"vm4.vmssiplabel\",\r\n          \"fqdn\": \"vm4.vmssiplabel.southeastasia.cloudapp.azure.com\"\r\n        },\r\n        \"ipConfiguration\": {\r\n          \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip-custom/providers/Microsoft.Compute/virtualMachineScaleSets/publicIPAddressName/virtualMachines/4/networkInterfaces/test/ipConfigurations/test\"\r\n        }\r\n      }\r\n    },\r\n    {\r\n      \"name\": \"xplattestip\",\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip-custom/providers/Microsoft.Compute/virtualMachineScaleSets/publicIPAddressName/virtualMachines/5/networkInterfaces/test/ipConfigurations/test/publicIPAddresses/xplattestip\",\r\n      \"etag\": \"W/\\\"b51793ba-acd7-4127-8d9e-c8d9d4c62dd5\\\"\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"resourceGuid\": \"e6457414-0066-46db-b525-32a6f41fd711\",\r\n        \"ipAddress\": \"52.163.91.90\",\r\n        \"publicIPAddressVersion\": \"IPv4\",\r\n        \"publicIPAllocationMethod\": \"Dynamic\",\r\n        \"idleTimeoutInMinutes\": 30,\r\n        \"dnsSettings\": {\r\n          \"domainNameLabel\": \"vm5.vmssiplabel\",\r\n          \"fqdn\": \"vm5.vmssiplabel.southeastasia.cloudapp.azure.com\"\r\n        },\r\n        \"ipConfiguration\": {\r\n          \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip-custom/providers/Microsoft.Compute/virtualMachineScaleSets/publicIPAddressName/virtualMachines/5/networkInterfaces/test/ipConfigurations/test\"\r\n        }\r\n      }\r\n    },\r\n    {\r\n      \"name\": \"xplattestip\",\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip-custom/providers/Microsoft.Compute/virtualMachineScaleSets/publicIPAddressName/virtualMachines/6/networkInterfaces/test/ipConfigurations/test/publicIPAddresses/xplattestip\",\r\n      \"etag\": \"W/\\\"206d36a8-6ab4-46f7-b32e-3537eff24e14\\\"\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"resourceGuid\": \"919a2f1d-b31f-44e5-9659-4ecd357a17ce\",\r\n        \"ipAddress\": \"52.163.95.145\",\r\n        \"publicIPAddressVersion\": \"IPv4\",\r\n        \"publicIPAllocationMethod\": \"Dynamic\",\r\n        \"idleTimeoutInMinutes\": 30,\r\n        \"dnsSettings\": {\r\n          \"domainNameLabel\": \"vm6.vmssiplabel\",\r\n          \"fqdn\": \"vm6.vmssiplabel.southeastasia.cloudapp.azure.com\"\r\n        },\r\n        \"ipConfiguration\": {\r\n          \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip-custom/providers/Microsoft.Compute/virtualMachineScaleSets/publicIPAddressName/virtualMachines/6/networkInterfaces/test/ipConfigurations/test\"\r\n        }\r\n      }\r\n    },\r\n    {\r\n      \"name\": \"xplattestip\",\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip-custom/providers/Microsoft.Compute/virtualMachineScaleSets/publicIPAddressName/virtualMachines/7/networkInterfaces/test/ipConfigurations/test/publicIPAddresses/xplattestip\",\r\n      \"etag\": \"W/\\\"75a416d1-4e18-497a-ab04-f0b357d30cc1\\\"\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"resourceGuid\": \"6def25b4-ea7b-4562-b815-c07cedfa178b\",\r\n        \"ipAddress\": \"52.163.89.246\",\r\n        \"publicIPAddressVersion\": \"IPv4\",\r\n        \"publicIPAllocationMethod\": \"Dynamic\",\r\n        \"idleTimeoutInMinutes\": 30,\r\n        \"dnsSettings\": {\r\n          \"domainNameLabel\": \"vm7.vmssiplabel\",\r\n          \"fqdn\": \"vm7.vmssiplabel.southeastasia.cloudapp.azure.com\"\r\n        },\r\n        \"ipConfiguration\": {\r\n          \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip-custom/providers/Microsoft.Compute/virtualMachineScaleSets/publicIPAddressName/virtualMachines/7/networkInterfaces/test/ipConfigurations/test\"\r\n        }\r\n      }\r\n    },\r\n    {\r\n      \"name\": \"xplattestip\",\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip-custom/providers/Microsoft.Compute/virtualMachineScaleSets/publicIPAddressName/virtualMachines/8/networkInterfaces/test/ipConfigurations/test/publicIPAddresses/xplattestip\",\r\n      \"etag\": \"W/\\\"a69f4b91-9981-4e6d-aad1-32c6813ee609\\\"\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"resourceGuid\": \"c96d0331-2331-48ea-986e-65c00bfcc851\",\r\n        \"ipAddress\": \"52.163.95.222\",\r\n        \"publicIPAddressVersion\": \"IPv4\",\r\n        \"publicIPAllocationMethod\": \"Dynamic\",\r\n        \"idleTimeoutInMinutes\": 30,\r\n        \"dnsSettings\": {\r\n          \"domainNameLabel\": \"vm8.vmssiplabel\",\r\n          \"fqdn\": \"vm8.vmssiplabel.southeastasia.cloudapp.azure.com\"\r\n        },\r\n        \"ipConfiguration\": {\r\n          \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip-custom/providers/Microsoft.Compute/virtualMachineScaleSets/publicIPAddressName/virtualMachines/8/networkInterfaces/test/ipConfigurations/test\"\r\n        }\r\n      }\r\n    },\r\n    {\r\n      \"name\": \"xplattestip\",\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip-custom/providers/Microsoft.Compute/virtualMachineScaleSets/publicIPAddressName/virtualMachines/9/networkInterfaces/test/ipConfigurations/test/publicIPAddresses/xplattestip\",\r\n      \"etag\": \"W/\\\"aebb595e-a103-4f09-8204-6eec30cd91a4\\\"\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"resourceGuid\": \"67521a9e-9f8c-4924-9db2-514f1022ba2e\",\r\n        \"ipAddress\": \"13.76.142.172\",\r\n        \"publicIPAddressVersion\": \"IPv4\",\r\n        \"publicIPAllocationMethod\": \"Dynamic\",\r\n        \"idleTimeoutInMinutes\": 30,\r\n        \"dnsSettings\": {\r\n          \"domainNameLabel\": \"vm9.vmssiplabel\",\r\n          \"fqdn\": \"vm9.vmssiplabel.southeastasia.cloudapp.azure.com\"\r\n        },\r\n        \"ipConfiguration\": {\r\n          \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip-custom/providers/Microsoft.Compute/virtualMachineScaleSets/publicIPAddressName/virtualMachines/9/networkInterfaces/test/ipConfigurations/test\"\r\n        }\r\n      }\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '11377',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '466fda43-5c96-4cfc-b311-c19ccb915db7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14989',
  'x-ms-correlation-request-id': '5bffbf48-777e-4e59-bb63-98b4cd641e6d',
  'x-ms-routing-request-id': 'WESTEUROPE:20170707T141026Z:5bffbf48-777e-4e59-bb63-98b4cd641e6d',
  date: 'Fri, 07 Jul 2017 14:10:26 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip-custom/providers/Microsoft.Compute/virtualMachineScaleSets/publicIPAddressName/publicipaddresses?api-version=2017-03-30')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"xplattestip\",\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip-custom/providers/Microsoft.Compute/virtualMachineScaleSets/publicIPAddressName/virtualMachines/0/networkInterfaces/test/ipConfigurations/test/publicIPAddresses/xplattestip\",\r\n      \"etag\": \"W/\\\"b7985ff2-2ee0-4b24-8fc5-950dce6aa62d\\\"\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"resourceGuid\": \"a3670256-3214-449e-822e-c302e0612f7c\",\r\n        \"ipAddress\": \"52.187.44.30\",\r\n        \"publicIPAddressVersion\": \"IPv4\",\r\n        \"publicIPAllocationMethod\": \"Dynamic\",\r\n        \"idleTimeoutInMinutes\": 30,\r\n        \"dnsSettings\": {\r\n          \"domainNameLabel\": \"vm0.vmssiplabel\",\r\n          \"fqdn\": \"vm0.vmssiplabel.southeastasia.cloudapp.azure.com\"\r\n        },\r\n        \"ipConfiguration\": {\r\n          \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip-custom/providers/Microsoft.Compute/virtualMachineScaleSets/publicIPAddressName/virtualMachines/0/networkInterfaces/test/ipConfigurations/test\"\r\n        }\r\n      }\r\n    },\r\n    {\r\n      \"name\": \"xplattestip\",\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip-custom/providers/Microsoft.Compute/virtualMachineScaleSets/publicIPAddressName/virtualMachines/1/networkInterfaces/test/ipConfigurations/test/publicIPAddresses/xplattestip\",\r\n      \"etag\": \"W/\\\"48c4d015-a99f-4a5b-b234-edd27e84da95\\\"\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"resourceGuid\": \"c038df9c-daf3-405a-b671-b6909b251330\",\r\n        \"ipAddress\": \"52.163.63.12\",\r\n        \"publicIPAddressVersion\": \"IPv4\",\r\n        \"publicIPAllocationMethod\": \"Dynamic\",\r\n        \"idleTimeoutInMinutes\": 30,\r\n        \"dnsSettings\": {\r\n          \"domainNameLabel\": \"vm1.vmssiplabel\",\r\n          \"fqdn\": \"vm1.vmssiplabel.southeastasia.cloudapp.azure.com\"\r\n        },\r\n        \"ipConfiguration\": {\r\n          \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip-custom/providers/Microsoft.Compute/virtualMachineScaleSets/publicIPAddressName/virtualMachines/1/networkInterfaces/test/ipConfigurations/test\"\r\n        }\r\n      }\r\n    },\r\n    {\r\n      \"name\": \"xplattestip\",\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip-custom/providers/Microsoft.Compute/virtualMachineScaleSets/publicIPAddressName/virtualMachines/2/networkInterfaces/test/ipConfigurations/test/publicIPAddresses/xplattestip\",\r\n      \"etag\": \"W/\\\"e862470c-46d9-4542-be9c-32cbde926a4d\\\"\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"resourceGuid\": \"82b187ba-1a55-4b3b-8cb1-6a895d3d4112\",\r\n        \"ipAddress\": \"52.163.62.38\",\r\n        \"publicIPAddressVersion\": \"IPv4\",\r\n        \"publicIPAllocationMethod\": \"Dynamic\",\r\n        \"idleTimeoutInMinutes\": 30,\r\n        \"dnsSettings\": {\r\n          \"domainNameLabel\": \"vm2.vmssiplabel\",\r\n          \"fqdn\": \"vm2.vmssiplabel.southeastasia.cloudapp.azure.com\"\r\n        },\r\n        \"ipConfiguration\": {\r\n          \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip-custom/providers/Microsoft.Compute/virtualMachineScaleSets/publicIPAddressName/virtualMachines/2/networkInterfaces/test/ipConfigurations/test\"\r\n        }\r\n      }\r\n    },\r\n    {\r\n      \"name\": \"xplattestip\",\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip-custom/providers/Microsoft.Compute/virtualMachineScaleSets/publicIPAddressName/virtualMachines/3/networkInterfaces/test/ipConfigurations/test/publicIPAddresses/xplattestip\",\r\n      \"etag\": \"W/\\\"c879e205-d6fa-4240-bba2-095597b59611\\\"\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"resourceGuid\": \"99774b9d-a34d-4212-aa8f-cf921c69c59e\",\r\n        \"ipAddress\": \"52.163.58.224\",\r\n        \"publicIPAddressVersion\": \"IPv4\",\r\n        \"publicIPAllocationMethod\": \"Dynamic\",\r\n        \"idleTimeoutInMinutes\": 30,\r\n        \"dnsSettings\": {\r\n          \"domainNameLabel\": \"vm3.vmssiplabel\",\r\n          \"fqdn\": \"vm3.vmssiplabel.southeastasia.cloudapp.azure.com\"\r\n        },\r\n        \"ipConfiguration\": {\r\n          \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip-custom/providers/Microsoft.Compute/virtualMachineScaleSets/publicIPAddressName/virtualMachines/3/networkInterfaces/test/ipConfigurations/test\"\r\n        }\r\n      }\r\n    },\r\n    {\r\n      \"name\": \"xplattestip\",\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip-custom/providers/Microsoft.Compute/virtualMachineScaleSets/publicIPAddressName/virtualMachines/4/networkInterfaces/test/ipConfigurations/test/publicIPAddresses/xplattestip\",\r\n      \"etag\": \"W/\\\"dc176800-355b-4640-8927-eb9b46e8d975\\\"\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"resourceGuid\": \"f8488e89-649c-407d-9435-3debb85511ff\",\r\n        \"ipAddress\": \"52.163.56.47\",\r\n        \"publicIPAddressVersion\": \"IPv4\",\r\n        \"publicIPAllocationMethod\": \"Dynamic\",\r\n        \"idleTimeoutInMinutes\": 30,\r\n        \"dnsSettings\": {\r\n          \"domainNameLabel\": \"vm4.vmssiplabel\",\r\n          \"fqdn\": \"vm4.vmssiplabel.southeastasia.cloudapp.azure.com\"\r\n        },\r\n        \"ipConfiguration\": {\r\n          \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip-custom/providers/Microsoft.Compute/virtualMachineScaleSets/publicIPAddressName/virtualMachines/4/networkInterfaces/test/ipConfigurations/test\"\r\n        }\r\n      }\r\n    },\r\n    {\r\n      \"name\": \"xplattestip\",\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip-custom/providers/Microsoft.Compute/virtualMachineScaleSets/publicIPAddressName/virtualMachines/5/networkInterfaces/test/ipConfigurations/test/publicIPAddresses/xplattestip\",\r\n      \"etag\": \"W/\\\"b51793ba-acd7-4127-8d9e-c8d9d4c62dd5\\\"\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"resourceGuid\": \"e6457414-0066-46db-b525-32a6f41fd711\",\r\n        \"ipAddress\": \"52.163.91.90\",\r\n        \"publicIPAddressVersion\": \"IPv4\",\r\n        \"publicIPAllocationMethod\": \"Dynamic\",\r\n        \"idleTimeoutInMinutes\": 30,\r\n        \"dnsSettings\": {\r\n          \"domainNameLabel\": \"vm5.vmssiplabel\",\r\n          \"fqdn\": \"vm5.vmssiplabel.southeastasia.cloudapp.azure.com\"\r\n        },\r\n        \"ipConfiguration\": {\r\n          \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip-custom/providers/Microsoft.Compute/virtualMachineScaleSets/publicIPAddressName/virtualMachines/5/networkInterfaces/test/ipConfigurations/test\"\r\n        }\r\n      }\r\n    },\r\n    {\r\n      \"name\": \"xplattestip\",\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip-custom/providers/Microsoft.Compute/virtualMachineScaleSets/publicIPAddressName/virtualMachines/6/networkInterfaces/test/ipConfigurations/test/publicIPAddresses/xplattestip\",\r\n      \"etag\": \"W/\\\"206d36a8-6ab4-46f7-b32e-3537eff24e14\\\"\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"resourceGuid\": \"919a2f1d-b31f-44e5-9659-4ecd357a17ce\",\r\n        \"ipAddress\": \"52.163.95.145\",\r\n        \"publicIPAddressVersion\": \"IPv4\",\r\n        \"publicIPAllocationMethod\": \"Dynamic\",\r\n        \"idleTimeoutInMinutes\": 30,\r\n        \"dnsSettings\": {\r\n          \"domainNameLabel\": \"vm6.vmssiplabel\",\r\n          \"fqdn\": \"vm6.vmssiplabel.southeastasia.cloudapp.azure.com\"\r\n        },\r\n        \"ipConfiguration\": {\r\n          \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip-custom/providers/Microsoft.Compute/virtualMachineScaleSets/publicIPAddressName/virtualMachines/6/networkInterfaces/test/ipConfigurations/test\"\r\n        }\r\n      }\r\n    },\r\n    {\r\n      \"name\": \"xplattestip\",\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip-custom/providers/Microsoft.Compute/virtualMachineScaleSets/publicIPAddressName/virtualMachines/7/networkInterfaces/test/ipConfigurations/test/publicIPAddresses/xplattestip\",\r\n      \"etag\": \"W/\\\"75a416d1-4e18-497a-ab04-f0b357d30cc1\\\"\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"resourceGuid\": \"6def25b4-ea7b-4562-b815-c07cedfa178b\",\r\n        \"ipAddress\": \"52.163.89.246\",\r\n        \"publicIPAddressVersion\": \"IPv4\",\r\n        \"publicIPAllocationMethod\": \"Dynamic\",\r\n        \"idleTimeoutInMinutes\": 30,\r\n        \"dnsSettings\": {\r\n          \"domainNameLabel\": \"vm7.vmssiplabel\",\r\n          \"fqdn\": \"vm7.vmssiplabel.southeastasia.cloudapp.azure.com\"\r\n        },\r\n        \"ipConfiguration\": {\r\n          \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip-custom/providers/Microsoft.Compute/virtualMachineScaleSets/publicIPAddressName/virtualMachines/7/networkInterfaces/test/ipConfigurations/test\"\r\n        }\r\n      }\r\n    },\r\n    {\r\n      \"name\": \"xplattestip\",\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip-custom/providers/Microsoft.Compute/virtualMachineScaleSets/publicIPAddressName/virtualMachines/8/networkInterfaces/test/ipConfigurations/test/publicIPAddresses/xplattestip\",\r\n      \"etag\": \"W/\\\"a69f4b91-9981-4e6d-aad1-32c6813ee609\\\"\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"resourceGuid\": \"c96d0331-2331-48ea-986e-65c00bfcc851\",\r\n        \"ipAddress\": \"52.163.95.222\",\r\n        \"publicIPAddressVersion\": \"IPv4\",\r\n        \"publicIPAllocationMethod\": \"Dynamic\",\r\n        \"idleTimeoutInMinutes\": 30,\r\n        \"dnsSettings\": {\r\n          \"domainNameLabel\": \"vm8.vmssiplabel\",\r\n          \"fqdn\": \"vm8.vmssiplabel.southeastasia.cloudapp.azure.com\"\r\n        },\r\n        \"ipConfiguration\": {\r\n          \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip-custom/providers/Microsoft.Compute/virtualMachineScaleSets/publicIPAddressName/virtualMachines/8/networkInterfaces/test/ipConfigurations/test\"\r\n        }\r\n      }\r\n    },\r\n    {\r\n      \"name\": \"xplattestip\",\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip-custom/providers/Microsoft.Compute/virtualMachineScaleSets/publicIPAddressName/virtualMachines/9/networkInterfaces/test/ipConfigurations/test/publicIPAddresses/xplattestip\",\r\n      \"etag\": \"W/\\\"aebb595e-a103-4f09-8204-6eec30cd91a4\\\"\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"resourceGuid\": \"67521a9e-9f8c-4924-9db2-514f1022ba2e\",\r\n        \"ipAddress\": \"13.76.142.172\",\r\n        \"publicIPAddressVersion\": \"IPv4\",\r\n        \"publicIPAllocationMethod\": \"Dynamic\",\r\n        \"idleTimeoutInMinutes\": 30,\r\n        \"dnsSettings\": {\r\n          \"domainNameLabel\": \"vm9.vmssiplabel\",\r\n          \"fqdn\": \"vm9.vmssiplabel.southeastasia.cloudapp.azure.com\"\r\n        },\r\n        \"ipConfiguration\": {\r\n          \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip-custom/providers/Microsoft.Compute/virtualMachineScaleSets/publicIPAddressName/virtualMachines/9/networkInterfaces/test/ipConfigurations/test\"\r\n        }\r\n      }\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '11377',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '466fda43-5c96-4cfc-b311-c19ccb915db7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14989',
  'x-ms-correlation-request-id': '5bffbf48-777e-4e59-bb63-98b4cd641e6d',
  'x-ms-routing-request-id': 'WESTEUROPE:20170707T141026Z:5bffbf48-777e-4e59-bb63-98b4cd641e6d',
  date: 'Fri, 07 Jul 2017 14:10:26 GMT',
  connection: 'close' });
 return result; }]];