let http = require('http');
let url = require('url');


let server = http.createServer((req, res)=>{
	let parsedUrl = url.parse(req.url, true);
	console.log(parsedUrl);
	res.writeHead(200, 'Content-Type', 'text/plain')
	res.write(parsedUrl.pathname.toString())
	res.end()
});
server.listen(8080)
