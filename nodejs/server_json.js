const http = require('http');
http.createServer(function(request, response) {  
	console.log("Request received");
	response.writeHeader(200, {"Content-Type": "application/json"}); 
	request.on('dades.json', function (chunk) {
		console.log(chunk.toString('utf8'));
        //consol.log(result);
		response.write(JSON.stringify({data : result}));
		console.log(chunk.toString('utf8'));
	});     
    response.end();  
}).listen(3000);