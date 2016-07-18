var merakiapi = require('./merakiapi.js');
//Change below values to actual apikey and orgid.
// If using Webstorm then you can add apikey and orgid to the environment variables.
// example:
// apikey = '35635643643563634634'
// orgid = 12345'

apikey = process.env.apikey || '[REPLACE WITH APIKEY]';
orgid = process.env.orgid || '[REPLACE WITH ORGID]';

//The below function will return your orgid.

// merakiapi.getOrg(apikey, (data) => {
//     for(i=0;i < data.length; i++){
//             console.log(data[i])
//     }
//     //console.log(data);
// });
//
// //Example below gets the Meraki network by the name, 'Home' and then calls the inner function, 'getNetworkDevices'.
// //The network id is passed through the response object.
// merakiapi.getNetworkByName(apikey,orgid,'Home', (response) => {
//     merakiapi.getNetworkDevices(apikey,response, (data) => {
//         console.log(data);
//     });
// });

//Example below gets the Meraki network by the name, 'Home' and then calls the inner function, 'addVlan'
//the format of addVlan is apikey, networkid, vlanid, vlanname, mxid, subnet

// merakiapi.getNetworkByName(apikey,orgid,'Home', (response) => {
//     merakiapi.addVlan(apikey,response, '6', 'TestVlan2','192.168.13.1','192.168.13.0/24',(data) => {
//         console.log(data);
//     });
// });

// merakiapi.getNetworkList(apikey,orgid,(response) => {
//     console.log(response);
// });

// merakiapi.addNetwork(apikey,orgid, 'testnet2', 'wireless', 'test', 'America/New_York', (response) => {
//     console.log(response);
// });

//Meraki getAdmins example:
//merakiapi.getAdmins(apikey,orgid, (response) => {console.log(response); });

//Add Admin example below:
// if you need to associate with tags or networks then you must format those fields as a list in brackets
// example: merakiapi.addAdmin(apikey, orgid, 'test@test.net', 'test user','full',['tag'],['full'],['network'],['full'], (response) => {}

//merakiapi.addAdmin(apikey, orgid, 'test@test.net', 'test user','full','','','','', (response) => {
//   console.log(response);
//});

