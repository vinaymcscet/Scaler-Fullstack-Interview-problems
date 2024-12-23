const http = require('http');

// const server = http.createServer((req, res) => {
//     res.setHeader('Content-Type', 'text/plain');
//     res.write('Hello World!');
//     res.end();
// })

// const server = http.createServer((req, res) => {
//     res.setHeader('Content-Type', 'text/html');
//     res.write('<html><head><title>Node.js HTTP Server</title></head><body>');
//     res.write('<h1>Node.js HTTP Server</h1>');
//     res.write('</body></html>');
//     res.end();
// })

// const server = http.createServer((req, res) => {
//     res.setHeader('Content-Type', 'application/json');
//     const jsonData = {
//         message: 'Hello, World!',
//         date: new Date(),
//     }
//     const jsonResponse = JSON.stringify(jsonData);
//     res.write(jsonResponse);
//     res.end();
// })

// const server = http.createServer((req, res) => {
//     res.setHeader('Content-Type', 'text/html');
//     res.write(req.url);
//     res.end();
// })

// retreive month and year from url
// const url = require('url');
// const server = http.createServer((req, res) => {
//     res.setHeader('Content-Type', 'text/html');
//     const queryStr = url.parse(req.url, true).query;
//     const queryText = queryStr.year + " " + queryStr.month;
//     res.end(queryText);
// })

// (async () => {
//     const uc = await import('upper-case'); // Dynamic import

//     const server = http.createServer((req, res) => { 
//         res.setHeader('Content-Type', 'text/html');
//         res.write(uc.upperCase("hello world!"));
//         res.end();
//     });

// const port = 8081;
// const host = 'localhost';
// server.listen(port, host,() => {
//     console.log(`Server is listening on http://${host}:${port}`);
// })
// })();