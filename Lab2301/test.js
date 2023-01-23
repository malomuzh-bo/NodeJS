const http = require("http");

http.createServer(function(request, response){
    response.statusCode = 200;
    response.setHeader("Content-Type", 'text/plain');
    switch (request.url.split("/")[1].toLowerCase()) {
        case "second_page":
            response.text = "Welcome to second page";
            break;
        case "index":
            response.text = "Welcome to index page";
            break;
        case "jump":
            response.text = "Nice page";
            break;
        default:
            response.statusCode = 404;
            response.text = "Not found"
            break;
    }
    response.end(response.text);
}).listen(7777, "127.0.0.1", function()
{
    console.log("Listening on post 7777");
});

const OS = require("os");
let userName = OS.userInfo().username;
console.log(userName);

const second = require("./second");
console.log(second.getAll(userName));
console.log(second.date);

const person = require("./Person.js");
let personchik = new person(userName, "123456789", 35);
personchik.Hello();

//cd Shag\NodeJS