var assert = require('assert');
const https = require('https');
const url = require('url');
const util = require('util');


var options = {
    hostname: 'dashboard.meraki.com',
    port: 443,
    path: '',
    method: 'GET',
    followAllRedirects: true
};

function _getPath(apikey, path, response ) {

    options.path = path;
    options.headers = {
        'x-cisco-meraki-api-key': apikey,
        'Content-Type': 'application/json'
    };
    https.get(options,(res) => {
        var body = '';
        if (res.statusCode == 302) {
            console.log('Redirected');
            console.log(url.parse(res.headers.location).host);
            options.hostname = url.parse(res.headers.location).host;
           _getPath(apikey, path, response);
        } else {
            res.on('data', (d) => {
                //process.stdout.write(d);
                body += d;
            });
            res.on('end', () => {
                //process.stdout.write(d);

                response(JSON.parse(body));

            });
        }
        }).on('error', (e) => {
            console.error(e);
        });

}

function _postPath (apikey, postdata, path, response){
    options.path = path;
    options.headers = {
        'x-cisco-meraki-api-key': apikey,
        'Content-Type': 'application/json'
    };
    options.method = 'POST';

    req = https.request(options,(res) => {
        var body = '';
        if (res.status == 302) {
            console.log ('302 encountered');
            options.hostname = url.parse(res.headers.location).host;
            _postPath(apikey, data, path, response);
        } else {
            res.on('data', (d) => {
                //process.stdout.write(d);
                body += d;
            });
            res.on('end', () => {
                //process.stdout.write(d);
                response(JSON.parse(body));
            });
        }
    }).on('error', (e) => {
        console.error(e);
    });
    req.write(JSON.stringify(postdata));
    response(req.end());
}

exports.getOrg = (apikey, response) => {
    _getPath(apikey, '/api/v0/organizations', response)
};
exports.getOrgDevices = (apikey,organizationid, response) => {
    _getPath(apikey, util.format('/api/v0/organizations/%s/inventory', organizationid), response);
};
exports.getNetworkDevices = (apikey,networkid, response) => {
    _getPath(apikey, util.format('/api/v0/networks/%s/devices', networkid), response);
};
exports.getOrgAdmins = (apikey,organizationid, response) => {
    _getPath(apikey, util.format('/api/v0/organizations/%s/admins', organizationid), response);
};
exports.getNetworkList = (apikey,organizationid, response) => {
    _getPath(apikey, util.format('/api/v0/organizations/%s/networks', organizationid), response);
};
exports.getDeviceDetail = (apikey,networkid, serial, response) => {
    _getPath(apikey, util.format('/api/v0/networks/%s/devices/%s', networkid, serial), response);
};
exports.getNetworkDetail = (apikey,networkid, response) => {
    _getPath(apikey, util.format('/api/v0/networks/%s', networkid), response);
};
exports.getConfigTemplates = (apikey,organizationid, response) => {
    _getPath(apikey, util.format('/api/v0/organizations/%s/configTemplates', organizationid), response);
};
exports.getSnmpSettings = (apikey,organizationid, response) => {
    _getPath(apikey, util.format('/api/v0/organizations/%s/snmp', organizationid), response);
};
exports.getVpnPeers = (apikey,networkid, response) => {
    _getPath(apikey, util.format('/api/v0/networks/%s/siteToSiteVpn', networkid), response);
};
exports.getSamlRoles = (apikey,organizationid, response) => {
    _getPath(apikey, util.format('/api/v0/organizations/%s/samlRoles', organizationid), response);
};
exports.getSwitchStacks = (apikey,networkid, response) => {
    _getPath(apikey, util.format('/api/v0/networks/%s/switchStacks', networkid), response);
};
exports.getSwitchStackMembers = (apikey,networkid,stackid, response) => {
    _getPath(apikey, util.format('/api/v0/networks/%s/switchStacks/%s', networkid, stackid), response);
};
exports.getVlans = (apikey,networkid, response) => {
    _getPath(apikey, util.format('/api/v0/networks/%s/vlans', networkid), response);
};
exports.getVlanDetail = (apikey,networkid,vlanid, response) => {
    _getPath(apikey, util.format('/api/v0/networks/%s/vlans/%s', networkid, vlanid), response);
};
exports.getTemplates = (apikey,organizationid, response) => {
    _getPath(apikey, util.format('/api/v0/organizations/%s/configTemplates', organizationid), response);
};
exports.getNonMerakiVpnPeers = (apikey,organizationid, response) => {
    _getPath(apikey, util.format('/api/v0/organizations/%s/thirdPartyVPNPeers', organizationid), response);
};
exports.getAdmins = (apikey,organizationid, response) => {
    _getPath(apikey, util.format('/api/v0/organizations/%s/admins', organizationid), response);
};
exports.getNetworkByName = (apikey, organizationid, name, response) => {
    _getPath(apikey, util.format('/api/v0/organizations/%s/networks', organizationid), (data) => {
        for(i=0;i < data.length; i++){
            if (data[i]['name']==name) {
                response(data[i]['id'].toString());
            }
        }
    });
};

exports.addVlan = (apikey, networkid, vlanid, vlanname, mxip, subnetip, response ) => {
    data = {
        'id': vlanid,
        'name': vlanname,
        'applianceIp': mxip,
        'subnet': subnetip
    };

    path = util.format('/api/v0/networks/%s/vlans', networkid);
    _postPath(apikey, data, path, response);
};
