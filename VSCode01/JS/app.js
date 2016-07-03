(function (){
    var ws = require('./WebServer');
    var server = new ws( '127.0.0.1', 3000);
    server.launchServer();
})();