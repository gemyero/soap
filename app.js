const tmp = require('tmp');
const fs = require('fs');
const soap = require('soap');

// create tmp file
const tmpobj = tmp.fileSync({ postfix: '.wsdl' });

// read xml and write it to the tmp file
const xml = fs.readFileSync('DictService.wsdl', 'utf8');
fs.writeFileSync(tmpobj.name, xml, 'utf8');

// use createClient as usual given url of local path of tmp file and describe it
soap.createClient(tmpobj.name, (err, client) => {
  console.log(client.describe());
});

// remove tmp file
tmpobj.removeCallback();