// Create web server that listens for incoming requests and returns comments data
// Comments data should be stored in a separate file called comments.json
// Use the fs module to read the comments.json file and return the data to the client
// Use the http module to create the server

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  fs.readFile('./comments.json', 'utf8', (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.end(JSON.stringify({ error: 'Internal Server Error' }));
    } else {
      res.end(data);
    }
  });
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

// In comments.json:

// {
//   "comments": [
//     {
//       "id": 1,
//       "name": "John",
//       "message": "Hello, world!"
//     },
//     {
//       "id": 2,
//       "name": "Jane",
//       "message": "Hi, there!"
//     }
//   ]
// }

// To test this server, run node comments.js and then open a browser and navigate to http://localhost:3000.
// You should see the contents of comments.json displayed in the browser.
// If you don't see the comments, make sure that comments.json exists and that it contains valid JSON data.
// You can also test the server using curl or Postman.
// For example, you can run curl http://localhost:3000 from the command line to see the comments data.

// To stop the server, press Ctrl + C in the terminal where the server is running.
// This will stop the server and you will be able to run other commands in the terminal.

// Here's what the comments.js file does:

// 1. It imports the http and fs modules.
// 2. It creates an HTTP server using the http.createServer() method.
// 3. The server listens for incoming requests and responds with the comments data stored in comments.json.
// 4. The server reads the comments.json file using fs.readFile().
// 5. If an error occurs while reading the file, the server responds with a 500 status code and an error message.
// 6