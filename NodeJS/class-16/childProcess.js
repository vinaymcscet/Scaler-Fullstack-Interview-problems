const { exec, execFile, spawn } = require("child_process");

// list down all the files in the longer format
// ls is working for mac OS only
// exec("ls -lh", (error, stdout, stderr) => { 
// exec("dir", (error, stdout, stderr) => {
//     if(error) {
//         console.log(`exec error : ${error}`);
//     }
//     console.log(`stdout: ${stdout}`);
//     console.log(`stderr: ${stderr}`);
// });

const scriptPath = "D:/scaler/Scaler-Fullstack-Interview-problems/NodeJS/class-16/script.bat";
const agrs = ["arguement1", "arguement2"]
const options = {
    windowsVerbatimArguments: true, // Important for paths with spaces
    shell: true, //Crucial for .bat files and proper argument parsing
};
execFile(scriptPath, agrs, options, (error, stdout, stderr) => {
    if(error) {
        console.log(`exec error : ${error}`);
    }
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
})

spawn("C:/Program Files/Google/Chrome/Application/chrome.exe", ["https:www.youtube.com", "https:www.fikfis.co.uk", "--incognito"]);