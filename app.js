const app = require('express')();

const soap = require('soap');
const url = 'http://services.aonaware.com/DictService/DictService.asmx?WSDL';


app.get('/', async (req, res) => {
  const client = await soap.createClientAsync(url, { overridePromiseSuffix: 'AsyncFunction' });
  const desc = await client.describe();
  res.send(desc);
});

app.listen(7000);