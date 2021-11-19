// 1. Write a function named startCounting that logs a number to the console every second, starting with 1. Each number should be one greater than the previous number.

// function count() {
//   let counter = 0; 
//   return function () {
//     counter++;
//     console.log(counter); 
//   }
// }

// function startCounting() {
//   let func = count();
//   setInterval(func, 1000)
// }

// startCounting(); 


//2. Extend the code from the previous problem with a stopCounting function that stops the logger when called.

let keepGoing = true;

function stopCountting() {
  keepGoing = false;
};

function count() {
  let counter = 0;
  return function () {
    counter++;
    if (keepGoing) {
      console.log(counter);
    }
  }
}

function startCounting() {
  let func = count();
  setInterval(func, 1000)
}

startCounting();

stopCountting();