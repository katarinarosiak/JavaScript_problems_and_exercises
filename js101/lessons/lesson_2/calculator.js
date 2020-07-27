const readline = require('readline-sync');

console.log('Hello, Welcome to Calculator!');

console.log("What's the first number?");
let number1 = readline.question();

console.log("what is the second number?");
let number2 = readline.question();

console.log('what operation would you like to perform?\n1) Add 2) Substract 3) Miltiply 4) Divide');
let operation = readline.question();

let output;
if (operation === '1') {
  output = Number(number1) + Number(number2);
} else if (operation === '2') {
  output = Number(number1) - Number(number2);
} else if (operation === '3') {
  output = Number(number1) * Number(number2);
} else if (operation === '4') {
  output = Number(number1) / Number(number2);
}
console.log(`The result is: ${output}`);