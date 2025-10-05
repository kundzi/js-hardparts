/* CHALLENGE 1 */

function sayHowdy() {
  console.log("Howdy");
}

function testMe() {
  setTimeout(sayHowdy, 0);
  console.log("Partnah");
}
// After thinking it through, uncomment the following line to check your guess!
// testMe(); // what order should these log out? Howdy or Partnah first?

/* CHALLENGE 2 */

function delayedGreet() {
  const print = () => console.log("welcome");
  setTimeout(print, 3000);
}
// Uncomment the following line to check your work!
// delayedGreet(); // should log (after 3 seconds): welcome

/* CHALLENGE 3 */

function helloGoodbye() {
  console.log("hello");
  const print = () => console.log("good bye");
  setTimeout(print, 3000);
}
// Uncomment the following line to check your work!
// helloGoodbye(); // should log: hello // should also log (after 3 seconds): good bye

/* CHALLENGE 4 */

function brokenRecord() {
  const print = () => console.log("hi again");
  setInterval(print, 1000);
}
// Uncomment the following line to check your work!
// brokenRecord(); // should log (every second): hi again

/* CHALLENGE 5 */

function limitedRepeat() {
  let count = 0;
  // this value is available even inside the interval function
  const interval = setInterval(() => {
    if (count < 5) {
      console.log("hi for now");
      count++;
    } else {
      clearInterval(interval);
    }
  }, 1000);
}
// Uncomment the following line to check your work!
// limitedRepeat(); // should log (every second, for 5 seconds): hi for now

/* CHALLENGE 6 */

function everyXsecsForYsecs(callback, interval, duration) {
  const endTimeSecond = Math.floor(Date.now() / 1000) + duration;
  let count = 0;
  const handle = setInterval(() => {
    const currentSecond = Math.floor(Date.now() / 1000);
    if (currentSecond < endTimeSecond) {
      console.log(++count + " This is the end! " + currentSecond);
      callback();
    } else {
      clearInterval(handle);
    }
  }, interval * 1000);
}
// Uncomment the following lines to check your work!
function theEnd() {
  console.log("This is the end!");
}
// everyXsecsForYsecs(theEnd, 2, 20); // should invoke theEnd function every 2 seconds, for 20 seconds): This is the end!

/* CHALLENGE 7 */

function delayCounter(target, wait) {
  return () => {
    let count = 0;
    const interval = setInterval(() => {
      if (count < target) {
        console.log(++count);
      } else {
        clearInterval(interval);
      }
    }, wait);
  };
}

// UNCOMMENT THESE TO TEST YOUR WORK!
const countLogger = delayCounter(3, 1000);
// countLogger();
// After 1 second, log 1
// After 2 seconds, log 2
// After 3 seconds, log 3

/* CHALLENGE 8 */

function promised(val) {
  return new Promise((resolve, reject) => {
    if (val == undefined || val == null) {
      reject("Error: No value provided");
    } else {
      setTimeout(() => {
        resolve(val);
      }, 2000);
    }
  });
}

// UNCOMMENT THESE TO TEST YOUR WORK!
const createPromise = promised("wait for it...");
// createPromise
//   .then((val) => console.log(val))
//   .then(() => console.log("second then"));

// promised(null)
//   .then((val) => console.log(val))
//   .catch((err) => console.error(err))
//   .finally(() => console.log("finally"));
// will log "wait for it..." to the console after 2 seconds

/* CHALLENGE 9 */

class SecondClock {
  constructor(cb) {
    this.callback = cb;
  }
  // ADD METHODS HERE
  start() {
    this.interval = setInterval(() => {
      this.callback(Math.floor(Date.now() / 1000));
    }, 1000);
  }

  reset() {
    clearInterval(this.interval);
  }
}

// UNCOMMENT THESE TO TEST YOUR WORK!
// const clock = new SecondClock((val) => {
//   console.log(val);
// });
// console.log("Started Clock.");
// clock.start();
// setTimeout(() => {
//   clock.reset();
//   console.log("Stopped Clock after 6 seconds.");
// }, 6000);

/* CHALLENGE 10 */

function debounce(callback, interval) {
  let timerId = undefined;
  return () => {
    if (timerId === undefined) {
      timerId = setTimeout(() => {
        timerId = undefined;
      }, interval);
      return callback();
    } else {
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        timerId = undefined;
      }, interval);
      return undefined;
    }
  };
}

// UNCOMMENT THESE TO TEST YOUR WORK!
function giveHi() {
  return "hi";
}
const giveHiSometimes = debounce(giveHi, 3000);
console.log(giveHiSometimes()); // -> 'hi'
setTimeout(function () {
  console.log(giveHiSometimes());
}, 2000); // -> undefined
setTimeout(function () {
  console.log(giveHiSometimes());
}, 4000); // -> undefined
setTimeout(function () {
  console.log(giveHiSometimes());
}, 8000); // -> 'hi'
