var http = require('http');
const axios = require('axios');
const API_Key = 'cf9c2c22-086d-4227-883a-878bfe22aad0';

http.createServer(function (req, res) {
  let newDate = new Date();
  res.writeHead(200, {'Content-Type': 'text/plain'});
  
  let response = null;
  new Promise(async (resolve, reject) => {
    try {
      response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
        headers: {
          'X-CMC_PRO_API_KEY': API_Key,
        },
      });
    } catch(ex) {
      response = null;
      // error
      console.log(ex);
      reject(ex);
    }
    if (response) {
      // success
      const json = response.data;
      res.end("Current BTC/USD price is: " + json.data[0].quote.USD.price);
    }
  });
  
}).listen(3001);




