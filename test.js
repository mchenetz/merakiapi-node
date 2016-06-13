var merakiapi = require('./merakiapi.js')

var org = merakiapi.getOrgDevices('Apikey','Org', (data) => {
    for(i=0;i < data.length; i++){
            console.log(data[i]['mac'])
    }
    //console.log(data);
});
