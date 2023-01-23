const http = require("http");
const address = 'http://localhost:8080/default.htm?year=2017&month=february';

http.createServer(function(request, response){
    const url = require("url");
    let myUrl = new URL(request.url);
    let host = myUrl.host;
    let path = myUrl.href;
    let search = myUrl.search;
    console.log(host);
    console.log(path);
    console.log(search);
}).listen(7777, "127.0.0.1", function()
{
    console.log("Listening on post 7777");
});