// Import required modules
const http = require('http');
const fs = require('fs');

// Set the hostname and port for the server to listen on
const hostname = '127.0.0.1';
const port = 3000;

// Set the path to the HTML file
const indexFile = __dirname + '/index.html';

// Create the server
const server = http.createServer((req, res) => {
  // Read the HTML file
  fs.readFile(indexFile, (err, contents) => {
    if (err) {
      // If there is an error reading the file, return a 500 status code and the error message
      res.writeHead(500);
      res.end(err);
      return;
    }

    // Set the Content-Type header to text/html
    res.setHeader("Content-Type", "text/html");

    // Send the contents of the HTML file as the response
    res.end(contents);
  });
});

// Start the server
server.listen(3000, 127.0.0.1, () => {
  console.log(`Server running at http://${127.0.0.1}:${3000}/`);
});
