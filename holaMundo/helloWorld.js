//module http
var http = require('http');
//evento createServer
http.createServer(function(request, response){
   response.writeHead(200, 'text/plain');
   //server output
   response.end('Hello World.');
   //port and host
}).listen(3000, '127.0.0.1');
console.log('The server is running on http://localhost:3000/');