// Write a program that uses two functions, add and subtract, to manipulate a running total. When you invoke either function with a number, it should add or subtract that number from the running total and log the new total to the console. It should work like this:

let runningTotal = 0;

function add(number) {
  runningTotal += number;
  console.log(runningTotal);
}

function subtract(number) {
  runningTotal -= number;
  console.log(runningTotal);
}

add(1);       // 1
add(42);      // 43
subtract(39); // 4
add(6);       // 10