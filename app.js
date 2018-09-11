const soap = require('soap');
const url = 'http://services.aonaware.com/DictService/DictService.asmx?WSDL';

(async () => {
  try {
    const client = await soap.createClientAsync(url);
    const desc = await client.describe();
    console.log(desc);

  } catch(error) {
    console.log(error.message);
  }
})();
