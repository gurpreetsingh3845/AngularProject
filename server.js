var http = require('http');
var fs = require('fs');
var index = fs.readFileSync('index.html');

http.createServer(function (req, res) {
 // res.writeHead(200, {'Content-Type': 'text/javascript'});
  res.end(index);
}).listen(3001);