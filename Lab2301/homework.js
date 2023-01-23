const http = require("http");
var host = "127.0.0.1";
var port = 7777;
http.createServer(function(request, response){
    var myURL = new URL(request.url.toString(), `https://${host}:${port}/`);
    response.setHeader('Content-type', 'text/html; charset=utf-8');
    response.text = "Host: " + myURL.host + "\n" + "Path: " + myURL.pathname + "\n" + "Port: " + myURL.port + "\n" + "Search params: " + myUrl.searchParams;
    response.end(response.text);
}).listen(port, host, function()
{
    console.log(`Listening on post ${port}`);
});