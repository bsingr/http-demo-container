const http = require('http');
const PORT = process.env.PORT || 8000;
const VERSION = process.env.VERSION || '1.0';
const APP_NAME = process.env.APP_NAME || 'http-demo-container';

function handleRequest(request, response){
  console.log('REQUEST', request.method, request.url);
  request.on('data', (data) => {
    console.log(data.toString())
  })
  request.on('end', function() {
    response.statusCode = 200;
    response.end(JSON.stringify({
      version: VERSION,
      app_name: APP_NAME,
      url: request.url
    }, 2));
  });
}

var server = http.createServer(handleRequest);
process.on('exit', function() {
  console.log("Stopping server");
  server.close();
});
process.on('SIGINT', function() {
  console.log('SIGINT, Stopping server');
  server.close();
  process.exit(1);
});
server.listen(PORT, '0.0.0.0', function(){
  console.log("Server listening on: http://0.0.0.0:%s", PORT);
});
