var merakiapi = require('./merakiapi.js');
//Change below values to actual apikey and orgid.
// example:
// apikey = '35635643643563634634'
// orgid = 12345'

apikey = process.env.apikey;
orgid = process.env.orgid;


merakiapi.getOrgDevices(apikey,orgid, (data) => {
    for(i=0;i < data.length; i++){
            console.log(data[i]['mac'])
    }
    //console.log(data);
});
