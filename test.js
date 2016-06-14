var merakiapi = require('./merakiapi.js');
//Change below values to actual apikey and orgid.
// example:
// apikey = '35635643643563634634'
// orgid = 12345'

apikey = process.env.apikey;
orgid = process.env.orgid;

//The below function will return your orgid.

merakiapi.getOrg(apikey, (data) => {
    for(i=0;i < data.length; i++){
            console.log(data[i])
    }
    //console.log(data);
});

//Example below gets the Meraki network by the name, 'Home' and then calls the inner function, 'getNetworkDevices'.
// The network id is passed through the response object.

merakiapi.getNetworkByName(apikey,orgid,'Home', (response) => {
    merakiapi.getNetworkDevices(apikey,response, (data) => {
        console.log(data);
    });
});
