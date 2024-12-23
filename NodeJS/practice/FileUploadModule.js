const http = require('http');
const formidable = require('formidable');
var fs = require('fs');

const server = http.createServer((req, res) => {
    if(req.url === '/fileupload' && req.method.toLowerCase() === 'post') {
        const form  = new formidable.IncomingForm();
        form.parse(req, (err, fields, files) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.write('Error parsing the file upload');
                res.end();
                return;
            }
            // Check and log files object for debugging
            console.log('Uploaded File Details:', files);
            // Accessing the uploaded file details
            const uploadedFile = files.filetoupload[0].PersistentFile;
            console.log("uploadedFile", uploadedFile);
            
            if (!uploadedFile) {
                res.writeHead(400, { 'Content-Type': 'text/plain' });
                res.write('No file uploaded');
                res.end();
                return;
            }

            var oldpath = uploadedFile.filepath;
            console.log("oldpath", oldpath);
            
            var newpath = `D:/scaler/Scaler-Fullstack-Interview-problems/NodeJS/practice/${uploadedFile.originalFilename}`;
            fs.rename(oldpath, newpath, (err) => {
                if(err) {
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.write('Error moving the file');
                    res.end();
                    return;
                };
                res.write('File Uploaded and moved!')
                res.end();
                // console.log(req);
            })
        })
    } else {
        res.setHeader('Content-Type', 'text/html');
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="filetoupload"><br>');
        res.write('<input type="submit">');
        res.write('</form>');
        res.end();
    }
})

const host = 'localhost';
const port = '8081';
server.listen(port, host,() => {
    console.log(`Server is listening on http://${host}:${port}`);
})
