const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

var fs = require('fs');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  fs.readFile('DATA', 'utf8', function(err, contents){
	res.setHeader('Content-Type', 'text/html');
	res.writeHead(200);
	res.write("<html><body><h1>Hello</h1></body></html>");    
	res.end();
  });
  
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});