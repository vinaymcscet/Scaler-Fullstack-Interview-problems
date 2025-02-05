const fs = require('fs');
// const content = Math.random().toString(36).repeat(10000000);

// fs.writeFileSync(
//     "D:/scaler/Scaler-Fullstack-Interview-problems/NodeJS/InterviewPreparations/Problem-1/BigFile.txt",
//     content
// );

// version - 1
// const http = require('http');
// const server = http.createServer();

// server.on("request", (req, res) => {
//     console.log("before");
//     fs.readFile("./BigFile.txt", (err, data) => {
//         if(err) throw err;
//         res.end(data);
//         console.log("file reading completed");
//     })
//     console.log("After");
// })
// server.listen(3000, () => {
//     console.log("server started at port 3000");
// })

// streams
const http = require('http');
const server = http.createServer();
const path  = require("path");

// const filePath = path.join(__dirname, "BigFile.txt");
// const readableStream = fs.createReadStream(filePath);
// const writableStream = fs.createWriteStream("copyOfBigFile.txt");
// // event driven
// readableStream.on('data', (chunk) => {
//     console.log(`Received ${chunk.length} bytes of data`);
//     writableStream.write(chunk);
// }) 

// readableStream.on("end", () => {
//     writableStream.end();
//     console.log("Finished Reading  and Writing File");
// });

// readableStream.on("error", (err) => {
//     console.log("Error while reading", err);
// });
// writableStream.on("error", (err) => {
//     console.log("Error while writing", err);
// });

server.on("request", (req, res) => {
    console.log("before");
    const src = fs.createReadStream(filePath);
    src.pipe(res);
    console.log("After");
})
server.listen(3000, () => {
    console.log("server started at port 3000");
})

