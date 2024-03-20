const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
const htmlFile = fs.readFileSync('index.html', 'u>
res.writeHead(200, { 'Content-Type': 'text/html' >
res.end(htmlFile);
});
server.listen(3000, '127.0.0.1');
console.log('Server running at http://127.0.0.1:3>