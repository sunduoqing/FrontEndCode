var PORT = 4000;
var webRootFile = 'web-2';
var http = require('http');
var url=require('url');
var fs=require('fs');
var path=require('path');
var querystring=require('querystring');


var data = {'name':'wbb','sex':'man'};


var server = http.createServer(function (request, response) {

    var params = url.parse(request.url);
    var qs = querystring.parse(params.query);
    var json = JSON.stringify(data);

    console.log(qs)

    
    // jsonp 解决跨域问题
    var str =  qs.callback+'('+JSON.stringify(data)+')';
    
    response.writeHead(200,{'Content-Type':'application/javascript'});

    response.write(str)

    response.end();



});
server.listen(PORT);
console.log("Server runing at port: " + PORT + ".");