var http = require('http'),
	fs = require('fs'),
	url = require('url');

var header_img = {'Access-Control-Allow-Origin':'*', "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
  "Content-Type": "image/jpeg", "etag": new Date().getTime()};

function handler (req, res) {
	console.log("Request received");

/*
fs.readFile('./10.jpg', 'base64', (err, base64Image) => {
		// 2. Create a data URL
		const dataUrl = 'data:image/jpeg;base64, ${base64Image}'
		return response.end('<img src=${dataUrl}>'); 
	}
);*/
var img = fs.readFileSync('./10.jpg');
res.writeHead(200,{'Content-type':'image/jpeg'});
//res.write("<img src='http://localhost:3000/10.jpg'>");
res.end(img, 'binary');

};

http.createServer(handler).listen(3000);