
const readline = require('readline-sync');

const SQMETERS_TO_SQFEET = 10.7639;

console.log("would you like to input length and width in: \n1)meters or 2)feet ? ");
let feetOrMeters = readline.prompt();

console.log('would you like to count it to: \n1)square meters 2)square feet');
let countTo = readline.prompt();

console.log('what is the length of the room?');
let length = readline.prompt();

console.log('What is the width of the room?');
let width = readline.prompt();

let squareResult;
let feetResult;
if (feetOrMeters === '1' && countTo === '1') {
  squareResult = (parseInt(length) * parseInt(width)).toFixed(2);
  console.log(`The room has ${squareResult} square meters`);

} else if (feetOrMeters === '2' && countTo === '2') {
  feetResult = (parseInt(length) * parseInt(width)).toFixed(2);
  console.log(`The room has ${feetResult} square feet`);

} else if (feetOrMeters === '1' && countTo === '2') {
  squareResult = (parseInt(length) * parseInt(width));
  feetResult = (squareResult * SQMETERS_TO_SQFEET).toFixed(2);
  console.log(`The room has ${feetResult} square feet`);

} else if (feetOrMeters === '2' && countTo === '1') {
  feetResult = ((parseInt(length, 10) * parseInt(width, 10)) / SQMETERS_TO_SQFEET).toFixed(2);
  
  console.log(`The room has ${feetResult} square feet`);
} else {
  console.log('Please, only input natural numbers.');
}
