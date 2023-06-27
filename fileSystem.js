let http = require('http');
let fileSystem = require('fs');
let url = require('url');
const PORT = process.env.PORT || 5000;

http.createServer(function(req,res){
    let incomingQuery = url.parse(req.url,true);
    let pathName = '.' + incomingQuery.pathname;

    // Check for no fileName passed in url(localhost:8081)
    if(pathName == './') pathName = './index';

    // Accept urls without .html => localhost:8080/index
    pathName = pathName + '.html';

    fileSystem.readFile(pathName,function(err,data){
        if(err){
            res.writeHead(404,{'Content-type': 'text/html'});
            return res.end("404 not found bitches!");
        }

        res.writeHead(200,{'Content-type': 'text/html'})
        res.write(data);
        res.end();

    });
}).listen(PORT);

console.log("Server listening on Port 8081")