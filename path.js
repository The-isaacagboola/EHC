const path = require("path");
const os = require("os");

console.log("Platform:", os.freemem()); // linux, darwin (mac), win32

const fullPath = path.join(__dirname, "week2", "students.jpg");

console.log(fullPath);

console.log(path.basename(fullPath));

console.log(`The file extension name is ${path.extname(fullPath)}`);
