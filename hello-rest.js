var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World for Fabric8 JS App 2');
}).listen(8080);
console.log('Server running at http://localhost:8080/');