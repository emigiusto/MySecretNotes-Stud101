var http = require('http');

http.createServer(function (req, res) {
  let newDate = new Date();
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end("Date is: " + newDate.toString());
}).listen(3001);