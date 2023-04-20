var http = require("http");
var server = http.createServer((request, response) => {
  response.writeHead(200, { "Content-type": "text/plain" });
  response.end("Hello World!");
}); // <-----------
server.listen(8000);
console.log("Server running on port 8000");
