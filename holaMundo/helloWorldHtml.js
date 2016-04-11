//module http
var http = require('http');
//event createServer
http.createServer(function(request, response){
   response.writeHead(200, 'text/html');
   var codigo_html = "<html><head><title>Hello World by html</title></head><body><h1>Hello World</h1></body></html>"
   //server output
   response.end(codigo_html);
   //port and host
}).listen(3000, '127.0.0.1');
console.log('The server is running on http://localhost:3000/');