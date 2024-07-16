// Load the http module to create an HTTP server.
const http = require('http');

// Define the port on which the server will listen.
const port = 3000;

// Create an HTTP server that handles requests.
const server = http.createServer((req, res) => {
  // Set the response HTTP header with HTTP status and Content type.
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Send the response body "Hello World".
  res.end('Hello World\n');
});

// Make the server listen on the specified port.
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
