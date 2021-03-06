var assert = require('assert');
const https = require('https');
const url = require('url');
const util = require('util');

tzlist = ['Africa/Abidjan',
    'Africa/Accra',
    'Africa/Addis_Ababa',
    'Africa/Algiers',
    'Africa/Asmara',
    'Africa/Asmera',
    'Africa/Bamako',
    'Africa/Bangui',
    'Africa/Banjul',
    'Africa/Bissau',
    'Africa/Blantyre',
    'Africa/Brazzaville',
    'Africa/Bujumbura',
    'Africa/Cairo',
    'Africa/Casablanca',
    'Africa/Ceuta',
    'Africa/Conakry',
    'Africa/Dakar',
    'Africa/Dar_es_Salaam',
    'Africa/Djibouti',
    'Africa/Douala',
    'Africa/El_Aaiun',
    'Africa/Freetown',
    'Africa/Gaborone',
    'Africa/Harare',
    'Africa/Johannesburg',
    'Africa/Juba',
    'Africa/Kampala',
    'Africa/Khartoum',
    'Africa/Kigali',
    'Africa/Kinshasa',
    'Africa/Lagos',
    'Africa/Libreville',
    'Africa/Lome',
    'Africa/Luanda',
    'Africa/Lubumbashi',
    'Africa/Lusaka',
    'Africa/Malabo',
    'Africa/Maputo',
    'Africa/Maseru',
    'Africa/Mbabane',
    'Africa/Mogadishu',
    'Africa/Monrovia',
    'Africa/Nairobi',
    'Africa/Ndjamena',
    'Africa/Niamey',
    'Africa/Nouakchott',
    'Africa/Ouagadougou',
    'Africa/Porto-Novo',
    'Africa/Sao_Tome',
    'Africa/Timbuktu',
    'Africa/Tripoli',
    'Africa/Tunis',
    'Africa/Windhoek',
    'America/Adak',
    'America/Anchorage',
    'America/Anguilla',
    'America/Antigua',
    'America/Araguaina',
    'America/Argentina/Buenos_Aires',
    'America/Argentina/Catamarca',
    'America/Argentina/ComodRivadavia',
    'America/Argentina/Cordoba',
    'America/Argentina/Jujuy',
    'America/Argentina/La_Rioja',
    'America/Argentina/Mendoza',
    'America/Argentina/Rio_Gallegos',
    'America/Argentina/Salta',
    'America/Argentina/San_Juan',
    'America/Argentina/San_Luis',
    'America/Argentina/Tucuman',
    'America/Argentina/Ushuaia',
    'America/Aruba',
    'America/Asuncion',
    'America/Atikokan',
    'America/Atka',
    'America/Bahia',
    'America/Bahia_Banderas',
    'America/Barbados',
    'America/Belem',
    'America/Belize',
    'America/Blanc-Sablon',
    'America/Boa_Vista',
    'America/Bogota',
    'America/Boise',
    'America/Buenos_Aires',
    'America/Cambridge_Bay',
    'America/Campo_Grande',
    'America/Cancun',
    'America/Caracas',
    'America/Catamarca',
    'America/Cayenne',
    'America/Cayman',
    'America/Chicago',
    'America/Chihuahua',
    'America/Coral_Harbour',
    'America/Cordoba',
    'America/Costa_Rica',
    'America/Creston',
    'America/Cuiaba',
    'America/Curacao',
    'America/Danmarkshavn',
    'America/Dawson',
    'America/Dawson_Creek',
    'America/Denver',
    'America/Detroit',
    'America/Dominica',
    'America/Edmonton',
    'America/Eirunepe',
    'America/El_Salvador',
    'America/Ensenada',
    'America/Fort_Nelson',
    'America/Fort_Wayne',
    'America/Fortaleza',
    'America/Glace_Bay',
    'America/Godthab',
    'America/Goose_Bay',
    'America/Grand_Turk',
    'America/Grenada',
    'America/Guadeloupe',
    'America/Guatemala',
    'America/Guayaquil',
    'America/Guyana',
    'America/Halifax',
    'America/Havana',
    'America/Hermosillo',
    'America/Indiana/Indianapolis',
    'America/Indiana/Knox',
    'America/Indiana/Marengo',
    'America/Indiana/Petersburg',
    'America/Indiana/Tell_City',
    'America/Indiana/Vevay',
    'America/Indiana/Vincennes',
    'America/Indiana/Winamac',
    'America/Indianapolis',
    'America/Inuvik',
    'America/Iqaluit',
    'America/Jamaica',
    'America/Jujuy',
    'America/Juneau',
    'America/Kentucky/Louisville',
    'America/Kentucky/Monticello',
    'America/Knox_IN',
    'America/Kralendijk',
    'America/La_Paz',
    'America/Lima',
    'America/Los_Angeles',
    'America/Louisville',
    'America/Lower_Princes',
    'America/Maceio',
    'America/Managua',
    'America/Manaus',
    'America/Marigot',
    'America/Martinique',
    'America/Matamoros',
    'America/Mazatlan',
    'America/Mendoza',
    'America/Menominee',
    'America/Merida',
    'America/Metlakatla',
    'America/Mexico_City',
    'America/Miquelon',
    'America/Moncton',
    'America/Monterrey',
    'America/Montevideo',
    'America/Montreal',
    'America/Montserrat',
    'America/Nassau',
    'America/New_York',
    'America/Nipigon',
    'America/Nome',
    'America/Noronha',
    'America/North_Dakota/Beulah',
    'America/North_Dakota/Center',
    'America/North_Dakota/New_Salem',
    'America/Ojinaga',
    'America/Panama',
    'America/Pangnirtung',
    'America/Paramaribo',
    'America/Phoenix',
    'America/Port_of_Spain',
    'America/Port-au-Prince',
    'America/Porto_Acre',
    'America/Porto_Velho',
    'America/Puerto_Rico',
    'America/Rainy_River',
    'America/Rankin_Inlet',
    'America/Recife',
    'America/Regina',
    'America/Resolute',
    'America/Rio_Branco',
    'America/Rosario',
    'America/Santa_Isabel',
    'America/Santarem',
    'America/Santiago',
    'America/Santo_Domingo',
    'America/Sao_Paulo',
    'America/Scoresbysund',
    'America/Shiprock',
    'America/Sitka',
    'America/St_Barthelemy',
    'America/St_Johns',
    'America/St_Kitts',
    'America/St_Lucia',
    'America/St_Thomas',
    'America/St_Vincent',
    'America/Swift_Current',
    'America/Tegucigalpa',
    'America/Thule',
    'America/Thunder_Bay',
    'America/Tijuana',
    'America/Toronto',
    'America/Tortola',
    'America/Vancouver',
    'America/Virgin',
    'America/Whitehorse',
    'America/Winnipeg',
    'America/Yakutat',
    'America/Yellowknife',
    'Antarctica/Casey',
    'Antarctica/Davis',
    'Antarctica/DumontDUrville',
    'Antarctica/Macquarie',
    'Antarctica/Mawson',
    'Antarctica/McMurdo',
    'Antarctica/Palmer',
    'Antarctica/Rothera',
    'Antarctica/South_Pole',
    'Antarctica/Syowa',
    'Antarctica/Troll',
    'Antarctica/Vostok',
    'Arctic/Longyearbyen',
    'Asia/Aden',
    'Asia/Almaty',
    'Asia/Amman',
    'Asia/Anadyr',
    'Asia/Aqtau',
    'Asia/Aqtobe',
    'Asia/Ashgabat',
    'Asia/Ashkhabad',
    'Asia/Baghdad',
    'Asia/Bahrain',
    'Asia/Baku',
    'Asia/Bangkok',
    'Asia/Barnaul',
    'Asia/Beirut',
    'Asia/Bishkek',
    'Asia/Brunei',
    'Asia/Calcutta',
    'Asia/Chita',
    'Asia/Choibalsan',
    'Asia/Chongqing',
    'Asia/Chungking',
    'Asia/Colombo',
    'Asia/Dacca',
    'Asia/Damascus',
    'Asia/Dhaka',
    'Asia/Dili',
    'Asia/Dubai',
    'Asia/Dushanbe',
    'Asia/Gaza',
    'Asia/Harbin',
    'Asia/Hebron',
    'Asia/Ho_Chi_Minh',
    'Asia/Hong_Kong',
    'Asia/Hovd',
    'Asia/Irkutsk',
    'Asia/Istanbul',
    'Asia/Jakarta',
    'Asia/Jayapura',
    'Asia/Jerusalem',
    'Asia/Kabul',
    'Asia/Kamchatka',
    'Asia/Karachi',
    'Asia/Kashgar',
    'Asia/Kathmandu',
    'Asia/Katmandu',
    'Asia/Khandyga',
    'Asia/Kolkata',
    'Asia/Krasnoyarsk',
    'Asia/Kuala_Lumpur',
    'Asia/Kuching',
    'Asia/Kuwait',
    'Asia/Macao',
    'Asia/Macau',
    'Asia/Magadan',
    'Asia/Makassar',
    'Asia/Manila',
    'Asia/Muscat',
    'Asia/Nicosia',
    'Asia/Novokuznetsk',
    'Asia/Novosibirsk',
    'Asia/Omsk',
    'Asia/Oral',
    'Asia/Phnom_Penh',
    'Asia/Pontianak',
    'Asia/Pyongyang',
    'Asia/Qatar',
    'Asia/Qyzylorda',
    'Asia/Rangoon',
    'Asia/Riyadh',
    'Asia/Saigon',
    'Asia/Sakhalin',
    'Asia/Samarkand',
    'Asia/Seoul',
    'Asia/Shanghai',
    'Asia/Singapore',
    'Asia/Srednekolymsk',
    'Asia/Taipei',
    'Asia/Tashkent',
    'Asia/Tbilisi',
    'Asia/Tehran',
    'Asia/Tel_Aviv',
    'Asia/Thimbu',
    'Asia/Thimphu',
    'Asia/Tokyo',
    'Asia/Tomsk',
    'Asia/Ujung_Pandang',
    'Asia/Ulaanbaatar',
    'Asia/Ulan_Bator',
    'Asia/Urumqi',
    'Asia/Ust-Nera',
    'Asia/Vientiane',
    'Asia/Vladivostok',
    'Asia/Yakutsk',
    'Asia/Yekaterinburg',
    'Asia/Yerevan',
    'Atlantic/Azores',
    'Atlantic/Bermuda',
    'Atlantic/Canary',
    'Atlantic/Cape_Verde',
    'Atlantic/Faeroe',
    'Atlantic/Faroe',
    'Atlantic/Jan_Mayen',
    'Atlantic/Madeira',
    'Atlantic/Reykjavik',
    'Atlantic/South_Georgia',
    'Atlantic/St_Helena',
    'Atlantic/Stanley',
    'Australia/ACT',
    'Australia/Adelaide',
    'Australia/Brisbane',
    'Australia/Broken_Hill',
    'Australia/Canberra',
    'Australia/Currie',
    'Australia/Darwin',
    'Australia/Eucla',
    'Australia/Hobart',
    'Australia/LHI',
    'Australia/Lindeman',
    'Australia/Lord_Howe',
    'Australia/Melbourne',
    'Australia/North',
    'Australia/NSW',
    'Australia/Perth',
    'Australia/Queensland',
    'Australia/South',
    'Australia/Sydney',
    'Australia/Tasmania',
    'Australia/Victoria',
    'Australia/West',
    'Australia/Yancowinna',
    'Brazil/Acre',
    'Brazil/DeNoronha',
    'Brazil/East',
    'Brazil/West',
    'Canada/Atlantic',
    'Canada/Central',
    'Canada/Eastern',
    'Canada/East-Saskatchewan',
    'Canada/Mountain',
    'Canada/Newfoundland',
    'Canada/Pacific',
    'Canada/Saskatchewan',
    'Canada/Yukon',
    'CET',
    'Chile/Continental',
    'Chile/EasterIsland',
    'CST6CDT',
    'Cuba',
    'EET',
    'Egypt',
    'Eire',
    'EST',
    'EST5EDT',
    'Etc/GMT',
    'Etc/GMT+0',
    'Etc/GMT+1',
    'Etc/GMT+10',
    'Etc/GMT+11',
    'Etc/GMT+12',
    'Etc/GMT+2',
    'Etc/GMT+3',
    'Etc/GMT+4',
    'Etc/GMT+5',
    'Etc/GMT+6',
    'Etc/GMT+7',
    'Etc/GMT+8',
    'Etc/GMT+9',
    'Etc/GMT0',
    'Etc/GMT-0',
    'Etc/GMT-1',
    'Etc/GMT-10',
    'Etc/GMT-11',
    'Etc/GMT-12',
    'Etc/GMT-13',
    'Etc/GMT-14',
    'Etc/GMT-2',
    'Etc/GMT-3',
    'Etc/GMT-4',
    'Etc/GMT-5',
    'Etc/GMT-6',
    'Etc/GMT-7',
    'Etc/GMT-8',
    'Etc/GMT-9',
    'Etc/Greenwich',
    'Etc/UCT',
    'Etc/Universal',
    'Etc/UTC',
    'Etc/Zulu',
    'Europe/Amsterdam',
    'Europe/Andorra',
    'Europe/Astrakhan',
    'Europe/Athens',
    'Europe/Belfast',
    'Europe/Belgrade',
    'Europe/Berlin',
    'Europe/Bratislava',
    'Europe/Brussels',
    'Europe/Bucharest',
    'Europe/Budapest',
    'Europe/Busingen',
    'Europe/Chisinau',
    'Europe/Copenhagen',
    'Europe/Dublin',
    'Europe/Gibraltar',
    'Europe/Guernsey',
    'Europe/Helsinki',
    'Europe/Isle_of_Man',
    'Europe/Istanbul',
    'Europe/Jersey',
    'Europe/Kaliningrad',
    'Europe/Kiev',
    'Europe/Kirov',
    'Europe/Lisbon',
    'Europe/Ljubljana',
    'Europe/London',
    'Europe/Luxembourg',
    'Europe/Madrid',
    'Europe/Malta',
    'Europe/Mariehamn',
    'Europe/Minsk',
    'Europe/Monaco',
    'Europe/Moscow',
    'Europe/Nicosia',
    'Europe/Oslo',
    'Europe/Paris',
    'Europe/Podgorica',
    'Europe/Prague',
    'Europe/Riga',
    'Europe/Rome',
    'Europe/Samara',
    'Europe/San_Marino',
    'Europe/Sarajevo',
    'Europe/Simferopol',
    'Europe/Skopje',
    'Europe/Sofia',
    'Europe/Stockholm',
    'Europe/Tallinn',
    'Europe/Tirane',
    'Europe/Tiraspol',
    'Europe/Ulyanovsk',
    'Europe/Uzhgorod',
    'Europe/Vaduz',
    'Europe/Vatican',
    'Europe/Vienna',
    'Europe/Vilnius',
    'Europe/Volgograd',
    'Europe/Warsaw',
    'Europe/Zagreb',
    'Europe/Zaporozhye',
    'Europe/Zurich',
    'GB',
    'GB-Eire',
    'GMT',
    'GMT+0',
    'GMT0',
    'GMT-0',
    'Greenwich',
    'Hongkong',
    'HST',
    'Iceland',
    'Indian/Antananarivo',
    'Indian/Chagos',
    'Indian/Christmas',
    'Indian/Cocos',
    'Indian/Comoro',
    'Indian/Kerguelen',
    'Indian/Mahe',
    'Indian/Maldives',
    'Indian/Mauritius',
    'Indian/Mayotte',
    'Indian/Reunion',
    'Iran',
    'Israel',
    'Jamaica',
    'Japan',
    'Kwajalein',
    'Libya',
    'MET',
    'Mexico/BajaNorte',
    'Mexico/BajaSur',
    'Mexico/General',
    'MST',
    'MST7MDT',
    'Navajo',
    'NZ',
    'NZ-CHAT',
    'Pacific/Apia',
    'Pacific/Auckland',
    'Pacific/Bougainville',
    'Pacific/Chatham',
    'Pacific/Chuuk',
    'Pacific/Easter',
    'Pacific/Efate',
    'Pacific/Enderbury',
    'Pacific/Fakaofo',
    'Pacific/Fiji',
    'Pacific/Funafuti',
    'Pacific/Galapagos',
    'Pacific/Gambier',
    'Pacific/Guadalcanal',
    'Pacific/Guam',
    'Pacific/Honolulu',
    'Pacific/Johnston',
    'Pacific/Kiritimati',
    'Pacific/Kosrae',
    'Pacific/Kwajalein',
    'Pacific/Majuro',
    'Pacific/Marquesas',
    'Pacific/Midway',
    'Pacific/Nauru',
    'Pacific/Niue',
    'Pacific/Norfolk',
    'Pacific/Noumea',
    'Pacific/Pago_Pago',
    'Pacific/Palau',
    'Pacific/Pitcairn',
    'Pacific/Pohnpei',
    'Pacific/Ponape',
    'Pacific/Port_Moresby',
    'Pacific/Rarotonga',
    'Pacific/Saipan',
    'Pacific/Samoa',
    'Pacific/Tahiti',
    'Pacific/Tarawa',
    'Pacific/Tongatapu',
    'Pacific/Truk',
    'Pacific/Wake',
    'Pacific/Wallis',
    'Pacific/Yap',
    'Poland',
    'Portugal',
    'PRC',
    'PST8PDT',
    'ROC',
    'ROK',
    'Singapore',
    'Turkey',
    'UCT',
    'Universal',
    'US/Alaska',
    'US/Aleutian',
    'US/Arizona',
    'US/Central',
    'US/Eastern',
    'US/East-Indiana',
    'US/Hawaii',
    'US/Indiana-Starke',
    'US/Michigan',
    'US/Mountain',
    'US/Pacific',
    'US/Pacific-New',
    'US/Samoa',
    'UTC',
    'WET',
    'W-SU',
    'Zulu'
];

var getOptions = {
    hostname: 'dashboard.meraki.com',
    port: 443,
    path: '',
    method: 'GET',
    followAllRedirects: true
};
var postOptions = {
    hostname: 'dashboard.meraki.com',
    port: 443,
    path: '',
    method: 'POST'
};
var delOptions = {
    hostname: 'dashboard.meraki.com',
    port: 443,
    path: '',
    method: 'DELETE'
};
function _getPath(apikey, getpath, response ) {

    getOptions.path = getpath;
    getOptions.headers = {
        'x-cisco-meraki-api-key': apikey,
        'Content-Type': 'application/json'
    };
    https.get(getOptions,(res) => {
        var body = '';
        if (res.statusCode == 302) {
            console.log('Redirected');
            console.log(url.parse(res.headers.location).host);
            getOptions.hostname = url.parse(res.headers.location).host;
           _getPath(apikey, getpath, response);
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

function _postPath (apikey, postdata, postpath, response){

    postOptions.path = postpath;
    postOptions.headers = {
        'x-cisco-meraki-api-key': apikey,
        'Content-Type': 'application/json'
    };
    req = https.request(postOptions,(res) => {
        var body = '';


        if (res.statusCode > 300 && res.statusCode < 400) {
            postOptions.hostname = url.parse(res.headers.location).host;

            _postPath(apikey, postdata, postpath, response);
        } else {
            res.on('data', (d) => {
                //process.stdout.write(d);
                body += d;
            });
            res.on('end', () => {
                //process.stdout.write(d);

                response(res.statusCode);
            });
        }
    }).on('error', (e) => {
        console.error('Request error: '+e);
    });
    req.write(JSON.stringify(postdata));
    req.end();
    response();
}

function _delPath (apikey, path, response){
    delOptions.path = path;
    delOptions.headers = {
        'x-cisco-meraki-api-key': apikey,
        'Content-Type': 'application/json'
    };

    req = https.request(delOptions,(res) => {
        var body = '';
        if (res.statusCode > 300 && res.statusCode < 400) {
            console.log ('302 encountered');
            delOptions.hostname = url.parse(res.headers.location).host.trim();
            _delPath(apikey, path, response);
        } else {
            res.on('data', (d) => {
                //process.stdout.write(d);
                body += d;
            });
            res.on('end', () => {
                //process.stdout.write(d);
                response(res.statusCode);
            });
        }
    }).on('error', (e) => {
        console.error(e);
    });
    req.end();
}

function _putPath (apikey, putdata, putpath, response){

    postOptions.path = putpath;
    postOptions.headers = {
        'x-cisco-meraki-api-key': apikey,
        'Content-Type': 'application/json'
    };
    postOptions.method = 'PUT';
    req = https.request(postOptions,(res) => {
        var body = '';


        if (res.statusCode > 300 && res.statusCode < 400) {
            postOptions.hostname = url.parse(res.headers.location).host;

            _putPath(apikey, putdata, putpath, response);
        } else {
            res.on('data', (d) => {
                //process.stdout.write(d);
                body += d;
            });
            res.on('end', () => {
                //process.stdout.write(d);

                response(res.statusCode);
            });
        }
    }).on('error', (e) => {
        console.error('Request error: '+e);
    });
    req.write(JSON.stringify(putdata));
    req.end();
    response();
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

    var path = util.format('/api/v0/networks/%s/vlans', networkid);
    _postPath(apikey, data, path, (status_code) => {
        if (status_code == 201) {
            response(util.format('Added VLAN %s to MX', vlanid.toString()));
            return;
        }
        else if (status_code == 400) {
            response('Network is bound to a template - Unable to delete VLAN');
            return;
        }
        else if (status_code > 400 || status_code <= 500) {
            print(util.format('An error has occurred accessing the Meraki Dashboard API - HTTP Status Code: %s',statuscode.toString()));
            return;
        }
        else {
            response(status_code);
            return;
        }

    });
};
exports.addNetwork = (apikey, organizationid,name, nettype, tags, tz, response ) => {
    var path = '';
    var validtz = false;
    postdata = {
        'name': name,
        'type': nettype,
        'tags': tags,
        'timeZone': tz
    };
    for (i=0; i < tzlist.length; i++){
        if (validtz == false && tz.toString() == tzlist[i]){
            validtz = true;
            break;
        } else {
            validtz = false;
        }
    }
    if (validtz == false) {
        response('Please enter a valid tz value from https://en.wikipedia.org/wiki/List_of_tz_database_time_zones');
    } else {

        path = util.format('/api/v0/organizations/%s/networks', organizationid);
        _postPath(apikey, postdata, path, (status_code) => {
            if (status_code == 201) {
                response(util.format('Added Network %s to Organization', name));
            }
            else if (status_code == 400)
            {
                response(util.format('A network with the name %s already exists in the organization',name));
            }
            else if (status_code > 400 || status_code < 500 ){
            response('An error has occurred accessing the Meraki Dashboard API - HTTP Status Code: ');
            }


        });
    }
};

exports.addAdmin = (apikey, organizationid, email, name, orgaccess, tags, tagaccess, networks, netaccess, response ) => {
    posttags = [];
    postnets = [];
    postdata = [];
    var path = util.format('/api/v0/organizations/%s/admins', organizationid);
    if (orgaccess==undefined && tags==undefined && networks==undefined)
    {
        response("Administrator accounts must be granted access to either the Organization, Networks, or Tags");
        return undefined;
    } else if ( tags != undefined && tagaccess == undefined ) {
        response("If tags are defined you must define matching access arguments.\nFor example, tags = ['tag1', 'tag2'], must have matching access arguments: tagaccess = 'full', 'read-only'");
        return undefined;
    } else if (tagaccess != undefined && tags == undefined) {
        response("If tag access levels are defined you must define matching tag arguments\nFor example, tags = ['tag1', 'tag2'] must have matching access arguments: tagaccess = 'full', 'read-only'");
        return undefined;
    } else if (tags.length != tagaccess.length) {
        response("The number of tags and access arguments must match.\n For example, tags = ['tag1', 'tag2'] must have matching access arguments: tagaccess = ['full', 'read-only']");
        return undefined;
    } else if (tags != undefined && tagaccess != undefined) {
         for (var x in tags)
        {
            posttags.push({'tag': tags[x], 'access': tagaccess[x]});
        }
    }
    else
        {
            return undefined;
        }

    if (networks != undefined && netaccess == undefined) {
        response("If networks are defined you must define matching access arguments\nFor example networks = ['net1', 'net2'] must have matching access arguments: netaccess = 'full', 'read-only'");
        return undefined;
    }else if (netaccess != undefined && networks == undefined) {
        response("If network access levels are defined you must define matching network arguments\nFor example, networks = ['net1', 'net2'] must have matching access arguments: netaccess = 'full', 'read-only'");
        return undefined;
    } else if (networks.length != netaccess.length) {
        response("The number of networks and access arguments must match.\n For example, networks = ['net1', 'net2'] must have matching access arguments: netaccess = ['full', 'read-only']");
        return undefined;
    } else if (networks != undefined && netaccess != undefined)
    {
        for (var x in networks) {
            postnets.push({'id': networks[x], 'access': netaccess[x]});
        }
    }

    if (posttags.length == 0 && postnets.length == 0) {
        postdata = {
            'orgAccess': orgaccess,
            'email': email.toString(),
            'name': name.toString()
        }
    } else if (posttags.length > 0 && postnets.length == 0) {
        postdata = {
            'name': name.toString(),
            'email': email.toString(),
            'orgAccess': orgaccess,
            'tags': posttags
        }
    } else if (postnets.length > 0 && posttags.length == 0) {
        postdata = {
            'name': name.toString(),
            'email': email.toString(),
            'orgAccess': orgaccess,
            'networks': postnets
        }
    } else if (postnets.length > 0 && posttags.length > 0)
    {
        postdata = {
            'name': name.toString(),
            'email': email.toString(),
            'orgAccess': orgaccess,
            'tags': posttags,
            'networks': postnets
        }
    }
    console.log(postdata);
    _postPath(apikey, postdata, path, (status_code) => {
        if (status_code == 201) {
            response(util.format('Added Administrator %s to Organization ID %s', email.toString(), organizationid.toString()));
            return undefined;
        } else if (status_code == 400) {
            response('Unable to add Administrator');
            return undefined;
        } else if (status_code > 400 || status_code  <= 500) {
            response(util.format( 'An error has occurred accessing the Meraki Dashboard API - HTTP Status Code: %s',status_code.toString()));
            return undefined;
        }
    });

};

exports.bindToTemplate = (apikey, networkid, templateid, autobind='false', response) => {
    var path = util.format('/api/v0/networks/%s/bind', networkid.toString());
    headers = {
        'x-cisco-meraki-api-key': apikey.toString(),
        'Content-Type': 'application/json'
    };
    postdata = {
        'configTemplateId': templateid.toString(),
        'autobind': autobind.toString()
    };
    _postPath(apikey, postdata, path, (status_code) =>
    {
        if (status_code > 400 || status_code  <= 500) {
            response(util.format('An error has occurred accessing the Meraki Dashboard API - HTTP Status Code: %s', status_code));
        }
        else if (status_code == '200')
        {
            response(util.format('Network ID %s bound to configuration template ID %s',networkid.toString(), templateid.toString()));
        }
    });
};

exports.unbindFromTemplate = (apikey, networkid, templateid, autobind='false', response) => {
    var path = util.format('/api/v0/networks/%s/unbind', networkid.toString());
    headers = {
        'x-cisco-meraki-api-key': apikey.toString(),
        'Content-Type': 'application/json'
    };
    postdata = {
        'configTemplateId': templateid.toString(),
        'autobind': autobind.toString()
    };
    _postPath(apikey, postdata, path, (status_code) =>
    {

        if (status_code > 400 || status_code  <= 500) {
            response(util.format('An error has occurred accessing the Meraki Dashboard API - HTTP Status Code: %s', status_code));
        }
        else if (status_code == 200)
        {
            response(util.format('Network ID %s unbound from configuration template ID %s',networkid.toString(), templateid.toString()));
        }
    });
};

exports.delTemplate = (apikey, organizationid, templateid,  response) => {
    var path = util.format('/api/v0/organizations/%s/configTemplates/%s', organizationid.toString(), templateid.toString());
    headers = {
        'x-cisco-meraki-api-key': apikey.toString(),
        'Content-Type': 'application/json'
    };
    _delPath(apikey, path, (status_code) =>
    {
        console.log('status code: '+status_code);
        if (status_code == 204)
        {
            response(util.format('Deleted template %s from Organization ID %s', templateid.toString(), organizationid.toString()));
        }else if (status_code == 404)
        {
            response(util.format('Configuration Template ID %s cannot be found, please confirm ID', templateid.toString()));
        }
        else if (status_code > 400 || status_code  <= 500) {
            response(util.format('An error has occurred accessing the Meraki Dashboard API - HTTP Status Code: %s', status_code));
        }
        else
        {
            response(util.format('Deletion of Template ID %s unsuccessful - HTTP Status Code: %s',templateid.toString(), status_code));
        }
    });
};

exports.updateVlan = (apikey, networkid, vlanid, vlanname, mxip, subnetip, response) => {
    var path = util.format('/api/v0/networks/%s/vlans/%s', networkid.toString(), vlanid.toString());
    headers = {
        'x-cisco-meraki-api-key': apikey.toString(),
        'Content-Type': 'application/json'
    };
    putdata = {
        'name': vlanname.toString(),
        'applianceIp': mxip.toString(),
        'subnet': subnetip.toString()
    };
    _putPath(apikey, putdata, path, (status_code) => {
        if (status_code == 200) {
            response(util.format('VLAN %s has been updated', vlanid.toString()));
        }
        else if (status_code > 400 || status_code  <= 500) {
            response(util.format('An error has occurred accessing the Meraki Dashboard API - HTTP Status Code: %s', status_code));
        } else {
            response(status_code);
            response(putdata);
        }
    });
};

exports.delVlan = (apikey, networkid, vlanid, response) => {
    var path = util.format('/api/v0/networks/%s/vlans/%s', networkid.toString(), vlanid.toString());
    headers = {
        'x-cisco-meraki-api-key': apikey.toString(),
        'Content-Type': 'application/json'
    };
    _delPath(apikey,path,(status_code) => {
        if (status_code == 204) {
            response(util.format('Deleted VLAN %s from MX', vlanid.toString()));
        }  else if (status_code == 400) {
            response('Network is bound to a template - Unable to delete VLAN');
        }  else if (status_code > 400 || status_code  <= 500) {
            response(util.format('An error has occurred accessing the Meraki Dashboard API - HTTP Status Code: %s', status_code));
        }
    });
};

exports.delAdmin = (apikey, organizationid, adminid, response) => {
    var path = util.format('/api/v0/organizations/%s/admins/%s', organizationid.toString(), adminid.toString());
    headers = {
        'x-cisco-meraki-api-key': apikey.toString(),
        'Content-Type': 'application/json'
    };
    _delPath(apikey,path,(status_code) => {
        if (status_code == 204) {
            response(util.format('Deleted Admin ID %s from Organization ID %s', adminid.toString(), organizationid.toString()));
        } else if (status_code > 400 || status_code  <= 500) {
            response(util.format('An error has occurred accessing the Meraki Dashboard API - HTTP Status Code: %s', status_code));
        }
    });
};

exports.delNetwork = (apikey, networkid, response) => {
    var path = util.format('/api/v0/networks/%s', networkid.toString());
    headers = {
        'x-cisco-meraki-api-key': apikey.toString(),
        'Content-Type': 'application/json'
    };
    _delPath(apikey,path,(status_code) => {
        if (status_code == 204)
        {
            response(util.format('Deleted Network ID %s from Organization', networkid.toString()));
        }else if (status_code == 404)
        {
            response(util.format('Network ID %s does not exist, please enter a valid network ID',networkid.toString()));
        }
        else if (status_code > 400 || status_code  <= 500) {
            response(util.format('An error has occurred accessing the Meraki Dashboard API - HTTP Status Code: %s', status_code));
        }
    });
};

exports.updateAdmin = (apikey, organizationid, email, name, orgaccess, tags, tagaccess, networks, netaccess, response ) => {
    puttags = [];
    putnets = [];
    putdata = [];
    var path = util.format('/api/v0/organizations/%s/admins', organizationid);
    headers = {
        'x-cisco-meraki-api-key': apikey.toString(),
        'Content-Type': 'application/json'
    };

    if (orgaccess==undefined && tags==undefined && networks==undefined && name==undefined)
    {
        response("Administrator account updates must include Organization, Networks, or Tags permission changes or an updated name attribute");
        return undefined;
    } else if ( tags != undefined && tagaccess == undefined ) {
        response("If tags are defined you must define matching access arguments.\nFor example, tags = ['tag1', 'tag2'], must have matching access arguments: tagaccess = 'full', 'read-only'");
        return undefined;
    } else if (tagaccess != undefined && tags == undefined) {
        response("If tag access levels are defined you must define matching tag arguments\nFor example, tags = ['tag1', 'tag2'] must have matching access arguments: tagaccess = 'full', 'read-only'");
        return undefined;
    } else if (tags.length != tagaccess.length) {
        response("The number of tags and access arguments must match.\n For example, tags = ['tag1', 'tag2'] must have matching access arguments: tagaccess = ['full', 'read-only']");
        return undefined;
    } else if (tags != undefined && tagaccess != undefined) {
        for (var x in tags)
        {
            puttags.push({'tag': tags[x], 'access': tagaccess[x]});
        }
    }
    else
    {
        return undefined;
    }

    if (networks != undefined && netaccess == undefined) {
        response("If networks are defined you must define matching access arguments\nFor example networks = ['net1', 'net2'] must have matching access arguments: netaccess = 'full', 'read-only'");
        return undefined;
    }else if (netaccess != undefined && networks == undefined) {
        response("If network access levels are defined you must define matching network arguments\nFor example, networks = ['net1', 'net2'] must have matching access arguments: netaccess = 'full', 'read-only'");
        return undefined;
    } else if (networks.length != netaccess.length) {
        response("The number of networks and access arguments must match.\n For example, networks = ['net1', 'net2'] must have matching access arguments: netaccess = ['full', 'read-only']");
        return undefined;
    } else if (networks != undefined && netaccess != undefined)
    {
        for (var x in networks) {
            putnets.push({'id': networks[x], 'access': netaccess[x]});
        }
    }

    if (puttags.length == 0 && putnets.length == 0) {
        putdata = {
            'orgAccess': orgaccess,
            'email': email.toString(),
            'name': name.toString()
        }
    } else if (puttags.length > 0 && putnets.length == 0) {
        putdata = {
            'name': name.toString(),
            'email': email.toString(),
            'orgAccess': orgaccess,
            'tags': puttags
        }
    } else if (putnets.length > 0 && puttags.length == 0) {
        putdata = {
            'name': name.toString(),
            'email': email.toString(),
            'orgAccess': orgaccess,
            'networks': putnets
        }
    } else if (putnets.length > 0 && puttags.length > 0)
    {
        putdata = {
            'name': name.toString(),
            'email': email.toString(),
            'orgAccess': orgaccess,
            'tags': puttags,
            'networks': putnets
        }
    }
    console.log(putdata);
    _putPath(apikey, putdata, path, (status_code) => {
        if (status_code == 200) {
            response(util.format('Successfully Modified Administrator %s to Organization ID %s', email.toString(), organizationid.toString()));
            return undefined;
        } else if (status_code == 400) {
            response('Unable to modify Administrator');
            return undefined;
        } else if (status_code > 400 || status_code  <= 500) {
            response(util.format( 'An error has occurred accessing the Meraki Dashboard API - HTTP Status Code: %s',status_code.toString()));
            return undefined;
        }
    });

};

exports.updateNonMerakiVpn = (apikey, orgid, peername, peerip, secret, remotenets, tags) => {
    var path = util.format('/api/v0/organizations/%s/thirdPartyVPNPeers', organizationid);
    headers = {
        'x-cisco-meraki-api-key': apikey.toString(),
        'Content-Type': 'application/json'
    };
    putdata = {
        'name': peername.toString(),
        'publicIp': peerip.toString(),
        'privateSubnets': remotenets,
        'secret': secret.toString(),
        'tags': tags
    };
    _putPath(apikey, putdata, path, (status_code) => {
        if (status_code > 400 || status_code  <= 500) {
            response(util.format('An error has occurred accessing the Meraki Dashboard API - HTTP Status Code: %s', status_code));
        } else {
            response(status_code);
            response(JSON.parse(putdata));
        }
    });
};