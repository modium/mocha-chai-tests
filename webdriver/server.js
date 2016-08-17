//you can also use Apache, NGINX, etc.
var http = require('http'),
	fs = require('fs');
	
fs.readFile('./index.html', function(err, html) {
	if(err) {
		throw err;
		//return console.log('An error occurred', err)
	}

	http.createServer(function(request, response) {
		response.writeHeader(200, {
			"Content-Type": "text/html"
		});
		response.write(html);
		
		response.end();
	}).listen(8000);
});

console.log('Server running at localhost:8000');

// const http = require('http')
// const port = 3000

// const requestHandler = (request, response) => {
	// console.log(request.url)
	// response.end('Hello Node.js server')
// }

// const server = http.createServer(requestHandler)

// server.listen(port, (err) -> {
	// if (err) {
		// return console.log('An error occurred', err)
	// }
	
	// console.log('Server is listening on port ${3000}')
// })