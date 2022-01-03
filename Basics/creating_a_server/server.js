const fs = require('fs');
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
    // === means string and contains
    var url=req.url;
    var method=req.method;
    // routing requests
    if(url === '/'){
        res.write('<html>');
        res.write('<head><title>Enter message</title><head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        // return used here in this line bcoz we do't want to run 
        // the line which are outside this if
        return res.end();
    }

    // Redirecting requests
    if(url === '/message' && method==='POST'){
        fs.writeFileSync('message.txt', 'DUMMY');
        res.statusCode=302;
        res.setHeader('Location', '/');
        return res.end();
    }


    res.setHeader('content-type','text/html');
    res.write('<html>');
    res.write('<head><title>My firts page</title><head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    res.end();
});

server.listen(3000);