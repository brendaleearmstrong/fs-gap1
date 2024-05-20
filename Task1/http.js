/**
 * 2a.1
 * http:
 * The http module is used to create an HTTP server that listens for requests on specified ports.
 * It can handle HTTP requests and responses, making it essential for web applications.
 * You can create a server, handle routes, and manage responses with this module.
 * 
 * 2b.1
 */

// http.js
const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Write a response
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

// Server listens on port 3000
server.listen(3000, () => {
  console.log('Server running at http://127.0.0.1:3000/');
});
