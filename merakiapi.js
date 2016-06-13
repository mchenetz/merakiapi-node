var assert = require('assert');
const https = require('follow-redirects').https;
const url = require('url');
const util = require('util');


var options = {
    hostname: 'dashboard.meraki.com',
    port: 443,
    path: '',
    method: 'GET',
    followAllRedirects: true
};

function getPath(apikey, path, response ) {

    options.path = path;
    options.headers = {
        'x-cisco-meraki-api-key': apikey,
        'Content-Type': 'application/json'
    };

    https.get(options,(res) => {
        var body = '';

        res.on('data', (d) => {
            //process.stdout.write(d);
            body += d;
        });
        res.on('end', () => {
            //process.stdout.write(d);
            response(JSON.parse(body));
        });
        }).on('error', (e) => {
            console.error(e);
        });

}

exports.getOrg = (apikey, response) => {
    getPath(apikey, '/api/v0/organizations', response)
};
exports.getOrgDevices = (apikey,organizationid, response) => {
    getPath(apikey, util.format('/api/v0/organizations/%s/inventory', organizationid), response);
};
exports.getNetworkDevices = (apikey,networkid, response) => {
    getPath(apikey, util.format('/api/v0/networks/%s/devices', networkid), response);
};
exports.getOrgAdmins = (apikey,organizationid, response) => {
    getPath(apikey, util.format('/api/v0/organizations/%s/admins', organizationid), response);
};
exports.getNetworkList = (apikey,organizationid, response) => {
    getPath(apikey, util.format('/api/v0/organizations/%s/networks', organizationid), response);
};
exports.getDeviceDetail = (apikey,networkid, serial, response) => {
    getPath(apikey, util.format('/api/v0/networks/%s/devices/%s', networkid, serial), response);
};
exports.getNetworkDetail = (apikey,networkid, response) => {
    getPath(apikey, util.format('/api/v0/networks/%s', networkid), response);
};
exports.getConfigTemplates = (apikey,organizationid, response) => {
    getPath(apikey, util.format('/api/v0/organizations/%s/configTemplates', organizationid), response);
};
exports.getSnmpSettings = (apikey,organizationid, response) => {
    getPath(apikey, util.format('/api/v0/organizations/%s/snmp', organizationid), response);
};
exports.getVpnPeers = (apikey,networkid, response) => {
    getPath(apikey, util.format('/api/v0/networks/%s/siteToSiteVpn', networkid), response);
};
exports.getSamlRoles = (apikey,organizationid, response) => {
    getPath(apikey, util.format('/api/v0/organizations/%s/samlRoles', organizationid), response);
};
exports.getSwitchStacks = (apikey,networkid, response) => {
    getPath(apikey, util.format('/api/v0/networks/%s/switchStacks', networkid), response);
};
exports.getSwitchStackMembers = (apikey,networkid,stackid, response) => {
    getPath(apikey, util.format('/api/v0/networks/%s/switchStacks/%s', networkid, stackid), response);
};
exports.getVlans = (apikey,networkid, response) => {
    getPath(apikey, util.format('/api/v0/networks/%s/vlans', networkid), response);
};
exports.getVlanDetail = (apikey,networkid,vlanid, response) => {
    getPath(apikey, util.format('/api/v0/networks/%s/vlans/%s', networkid, vlanid), response);
};
exports.getTemplates = (apikey,organizationid, response) => {
    getPath(apikey, util.format('/api/v0/organizations/%s/configTemplates', organizationid), response);
};
exports.getNonMerakiVpnPeers = (apikey,organizationid, response) => {
    getPath(apikey, util.format('/api/v0/organizations/%s/thirdPartyVPNPeers', organizationid), response);
};
exports.getAdmins = (apikey,organizationid, response) => {
    getPath(apikey, util.format('/api/v0/organizations/%s/admins', organizationid), response);
};

