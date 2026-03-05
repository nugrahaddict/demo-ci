const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, CICD World v3 wow skibidi !');
});

server.listen(3000);

