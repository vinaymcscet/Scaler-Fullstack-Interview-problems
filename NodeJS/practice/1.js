const fs = require('fs');

// Create file using node file system
// let stream = fs.createWriteStream('file.txt');
// stream.write('This is demo file created by Node JS.')
// stream.write('Thank You!')
// stream.end();

// Reading file using node file system(if we remove character-set(utf-8), then it print file in binary output)
// fs.readFile('file.txt', 'utf-8', (err, data) => {
//     if(err) {
//         console.err(err);
//         return;
//     }
//     console.log(data);
// })

// Writing file using node file system
// const content = "new File";
// fs.writeFile('file.txt', content, 'utf-8', (err, data) => {
//     if(err) {
//         console.err(err);
//         return;
//     }
//     console.log(data);
// })

//  rename the file name
// fs.rename('file.txt', 'demo.txt', (err) => {
//     if (err) throw err;
//     console.log('Rename complete!');
// });

// unlink - delete the file
// fs.unlink('demo.txt', (err) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log('File has been deleted.');
// });

// get File statistics
// fs.stat('file.txt', (err, stats) => {
//     if(err) {
//         console.error(err);
//         return;
//     }
//     console.log("File Size: " , stats.size);
//     console.log("File Directory: " , stats.isDirectory());
// })

// make directory using file system
// let directory = "my-directory";
// fs.mkdir(directory, err => {
//     if (err) {
//         console.error(`Error creating directory: ${err}`);
//     } else {
//         console.log(`Directory "${directory}" created successfully.`);
//     }
// })

// remove directory
// fs.rmdir(directory, { recursive: true }, (err) => {
//     if (err) {
//         console.error(`Error deleting directory: ${err}`);
//     } else {
//         console.log(`Directory "${directory}" deleted successfully.`);
//     }
// });

// check if Directory Exists
// const directoryPath = './my-directory';
// if(fs.existsSync(directoryPath)) {
//     console.log(`The directory ${directoryPath} exists`);
// }
// else {
//     console.log(`The directory ${directoryPath} does not exists`);
// }

// // Check if any file exist
// const filePath = './file.txt';
// if(fs.existsSync(filePath)) {
//     console.log(`The file ${filePath} exists`);
// }
// else {
//     console.log(`The file ${filePath} does not exists`);
// }

// Check if any file exist via asynchronous way
// const filePath = './file.txt';
// fs.access(filePath, fs.constants.F_OK, err => {
//     if(!err) {
//         console.log(`The file ${filePath} exists`);
//     }
//     else {
//         console.log(`The file ${filePath} does not exists`);
//     }
// })
// fs.constants.F_OK is used as a in the fs.access method to check
// the existence of a file or directory at the specied path (filePath)

const path = require('path');
// const fullPath = path.join('folder', 'subfolder', 'file.txt');

// const absolutePath = path.resolve('folder', 'subfolder', 'file.txt');
// const basePath = path.basename('./file.txt');
// const dirName = path.dirname('../../NodeJS/practice/file.txt');
// const dirName = path.dirname('../../NodeJS/practice/file.txt');
// const extName = path.extname('../../NodeJS/practice/file.txt');
// const pathName = path.parse('../../NodeJS/practice/file.txt');
// const normalizeName = path.normalize('../../NodeJS/../file.txt');
// const normalizeName = path.isAbsolute('../../NodeJS/practice/file.txt');
const relativePath = path.relative('../../NodeJS/practice', '../../NodeJS/practice/1.js');

console.log(relativePath);
