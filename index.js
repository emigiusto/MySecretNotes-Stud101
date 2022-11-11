var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  let newDate = new Date();
  res.send("Date is: " + newDate.toString());
}).listen(3001);