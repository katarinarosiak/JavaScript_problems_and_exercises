// Arithmetic Integer
// Write a program that prompts the user for two positive integers, and then prints the results of the following operations on those two numbers: addition, subtraction, product, quotient, remainder, and power.Do not worry about validating the input.

//   Example

//   ==> Enter the first number:
// 23
//   ==> Enter the second number:
// 17
//   ==> 23 + 17 = 40
//     ==> 23 - 17 = 6
//       ==> 23 * 17 = 391
//         ==> 23 / 17 = 1
//           ==> 23 % 17 = 6
//             ==> 23 ** 17 = 141050039560662968926103

let readline = require('readline-sync');

function prompt(sentence, result) {
  console.log(`=> ${sentence} ${result}`);
}

function addition(firstNum, secNum) {
  return firstNum * secNum;
}

function substraction(firstNum, secNum) {
  return firstNum - secNum;
}

function multiplication(firstNum, secNum) {
  return firstNum * secNum;
}

function division(firstNum, secNum) {
  return firstNum / secNum;
}

function modulo(firstNum, secNum) {
  return firstNum % secNum;
}

function power(firstNum, secondNum) {
  return firstNum ** secondNum;
}


prompt("Enter the first number", "");
let firstNumber = readline.question('');

prompt("Enter the second number", "");
let secondNumber = readline.question('');

prompt(`${firstNumber} + ${secondNumber} =`, addition(firstNumber, secondNumber));
prompt(`${firstNumber} - ${secondNumber} =`, substraction(firstNumber, secondNumber));
prompt(`${firstNumber} * ${secondNumber} =`, multiplication(firstNumber, secondNumber));
prompt(`${firstNumber} / ${secondNumber} =`, division(firstNumber, secondNumber));
prompt(`${firstNumber} % ${secondNumber} =`, modulo(firstNumber, secondNumber));
prompt(`${firstNumber} ** ${secondNumber} =`, power(firstNumber, secondNumber));