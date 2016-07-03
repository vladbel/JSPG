
function WebServer(hostname, port) {

  this.http = require('http');
  this.hostname = hostname;
  this.port = port;
};

WebServer.prototype.launchServer = function(){
    const server = this.http.createServer((req, res) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Hello World 01\n');
    });

    server.listen(this.port, this.hostname, () => {
      console.log(`Server running at http://${this.hostname}:${this.port}/`);
    });
}

module.exports =  WebServer;