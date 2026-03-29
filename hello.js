const getResource = async (name) => {
  const req = await fetch("https://jsonplaceholder.typicode.com/users");
  const resource = await req.json(); //parse
  console.log("Our resouce ", resource);
};

getResource();

// Event Loop
// manage every async operations

// setTimeout , setInterval
setTimeout(() => {
  console.log("This will print later");
}, 10); //ms

console.log("My first NodeJs app");
console.log("I am working on node version", process.version);

function addNumber(a, b, callbackFn) {
  const sum = a + b;
  callbackFn(sum);
}

const printSum = (sth) => {
  console.log(sth);
};

addNumber(3, 5, printSum);
