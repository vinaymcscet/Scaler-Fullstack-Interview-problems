const os = require("os");

console.log("architecture", os.arch());
console.log("cpus", os.cpus());
console.log("freemem", os.freemem());
console.log("platform", os.platform());
console.log("release", os.release());
console.log(os.networkInterfaces());