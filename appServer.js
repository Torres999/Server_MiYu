var http = require('http');

var server = http.createServer(function(request,response){
    response.write("{\"name\":\"Jack\"}");
    response.end();
});

server.listen(18080,'localhost');

console.log('监听18080');

