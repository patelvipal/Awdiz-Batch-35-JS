// Synchronous Execution

console.log("start");
console.log("processing ");
console.log("ending");

// setTimeout(function, delay in milisecond)

console.log("start");
setTimeout(
  () => {
    console.log("Hello");
  },

  5000,
);
console.log("end");

// Blocking Code

function longer() {
  for (let i = 0; i < 10000000000; i++) {}
}

console.log("start");
longer();

console.log("end");

// blocking behaviour

function longer() {
  console.log("OPeration start.");
  for (let i = 0; i < 10000000000; i++) {}
  console.log("OPeration end.");
}

console.log("start");
longer();

console.log("end");

// Non-blocking Scheduling (setTimeout)

console.log("start");
setTimeout(() => {
  console.log("OPeration start.");
  for (let i = 0; i < 10000000000; i++) {}
  console.log("OPeration end.");
}, 2000);

console.log("end");

// Event Loop (setTimeout(0))

console.log("start");
setTimeout(() => {
  console.log("OPeration start.");
  for (let i = 0; i < 10000000000; i++) {}
  console.log("OPeration end.");
}, 0);

console.log("end");

// setInterval() and clearInterval()

var counter = 0;
const intervalid = setInterval(() => {
  console.log("Hello");

  counter++;
  console.log(counter, "counter");
  if (counter == 5) {
    clearInterval(intervalid);
  }
}, 2000);

// Fetch API (Fetching Data from API)

fetch("https://fakestoreapi.com/products")
  .then((products) => products.json())
  .then((jsData) => console.log(jsData));

// Promise - Resolve (Success)

const myPromiese = new Promise((resolve, rejected) => {
  setTimeout(() => {
    resolve("Data received.");
  }, 5000);
});
myPromiese.then((res) => console.log(res));

// Promise - Reject (Failure Handling)

const myPromiese = new Promise((resolve, rejected) => {
  setTimeout(() => {
    rejected("Data received.");
  }, 5000);
});

myPromiese
  .then((res) => console.log(res))
  .catch((error) => {
    console.log(error);
  });

// Promise - finally() (Cleanup)

const myPromiese = new Promise((resolve, rejected) => {
  setTimeout(() => {
    rejected("Data received.");
  }, 5000);
});

myPromiese
  .then((res) => console.log(res))
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("always runs");
  });
