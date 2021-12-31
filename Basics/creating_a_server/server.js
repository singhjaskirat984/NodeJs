const http = require('http');



// function reqListener(req, res){

// }

// create Server and please look for reqListener function
// and execute it for every incoming function
// http.createServer(reqListener);

// or

// http.createServer(function(req, res){

// });

// or

const server = http.createServer((req, res) => {
    console.log(req);
});

server.listen(3000);