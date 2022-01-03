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
    console.log(req.url, req.method, req.headers);
    // process.exit();
    res.setHeader('content-type','text/html');
    res.write('<html>');
    res.write('<head><title>My firts page</title><head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    res.end();
});

server.listen(3000);