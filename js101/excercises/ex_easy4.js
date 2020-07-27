
const readline = require('readline-sync');

const SQMETERS_TO_SQFEET = 10.7639;

console.log("what is the length of the room?");
let length = readline.question();

console.log('what is the width of the room?');
let width = readline.question();
let squareResult = parseInt(length) * parseInt(width);
let feetResult =  squareResult * SQMETERS_TO_SQFEET;
console.log(`The has room ${squareResult} square meters, which is ${feetResult} square feet.`);