function printHello1() {
  console.log("Postponed!");
}

// setTimeout(printHello1, 0);
// console.log("This message is printed first.");

// setTimeout
// document
// fetch/XHR

// fetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then(response => response.json())
//     .then(data => console.log(data))

// const { LocalStorage } = require('node-localstorage');
// const localStorage = new LocalStorage('./data');
// localStorage.setItem('key-dima', 'value-dima');
// console.log(localStorage.getItem('key-dima'));

function blockingFunction() {
  const start = Date.now();
  while (Date.now() - start < 2000) {
    // Simulate a blocking operation for 2 seconds
  }
  console.log("Blocking function finished.");
}

// Will only run after the blocking function
setTimeout(printHello1, 0);

// It will block the event loop
blockingFunction();
console.log("This message is printed after the blocking function.");

// EVENT LOOP is the key
