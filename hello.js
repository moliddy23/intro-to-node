let http = require('http'); // to create http server
let url = require('url') // In order to parse the url string query parameters

// Pulling query parameters off the url and displaying on the webpage

http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type' : 'text/html'}); // return a server response (200), returning a response of content type text/html
    let queryParams = url.parse(req.url, true).query; //Store query params
    let dates = queryParams.month + ',' + queryParams.year; // create text string from params to display
    res.write(dates);
    res.end() // Return a text response
}).listen(8080);