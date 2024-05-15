const http = require('http');

http.createServer((req, res) => {
    console.log("between");
    console.log(req.url, req.method, req.headers);
    console.log("between");
    res.setHeader('Content-Type', 'text/html');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello From Node.js</h1></body>');
    res.end();
}).listen(3000);
