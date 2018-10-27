let http = require('http');
let server = http.createServer((req, res)=>{
  res.write('Hello world!');
  res.end();
});
server.listen(8080);
