var http = require('http');
//module url
var url = require('url');
var fs = require('fs');

var mime_types = {
  'js': 'text/javascript',
  'html': 'text/html',
  'css': 'text/css',
  'jpg': 'image/jpg',
  'gif': 'image/jpg',
  'png': 'image/png'
};

http.createServer(function(request, response){
   //Preguntamos si el path es / en tal caso redireccionar /index.html
   var path_name = url.parse(request.url).pathname == '/' ? '/index.html': url.parse(request.url).pathname;
   var ruta_archivos = 'app/' + path_name;
   fs.exists(ruta_archivos, function(exist) {
    if(exist) {
      fs.readFile(ruta_archivos, function (error, content_files) {
        if(error) {
          //se ha producido un error al leer el archivo
          response.writeHead(500, 'text/plain');
          response.end('Error Interno.');
        }
        else {
          //lee el archivo correctamente
          var extension = ruta_archivos.split('.').pop();
          var mime_type = mime_types[extension];
          response.writeHead(200, {'Content-type': mime_type});
          response.end(content_files)
        }
      });
    }
    else {
      //la pagina no existe
      response.writeHead(404, 'text/plain');
      response.end('Error 404 Not Found');
    }
   });
}).listen(3000, '127.0.0.1');
console.log('The server is running on http://localhost:3000/');