const fs = require("fs");

// const data = fs.readFileSync("hello.js", "utf8");

/*
fs.readFile("hello.js", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file", err.message);
  }

  //do whatever you want
  console.log(data);
});

fs.readFile("hello.js", "base64", (err, data) => {
  if (err) {
    console.error("Error reading file", err.message);
  }

  console.log(data);
});
*/

fs.writeFile("my-file", "Hello Ladies", (err, data) => {
  if (err) throw err;

  //do whatever you want
  console.log("File created!");
});

fs.appendFile("hello.js", "This is my new line", (err) => {
  if (err) console.log(err);
  console.log("Appended");
});
