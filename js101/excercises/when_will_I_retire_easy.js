// When Will I Retire?
// Build a program that logs when the user will retire and how many more years the user has to work until retirement.

// Example:

// What is your age? 30
// At what age would you like to retire? 70

// It's 2017. You will retire in 2057.
// You have only 40 years of work to go!

const readline = require('readline-sync');

console.log('What is your age?');
let userAge = readline.question('');

console.log('At what age would you like to retire?');
let retirementAge = readline.question('');

let yearNow = new Date().getFullYear();
let yearsLeft = retirementAge - userAge;
let retirementYear = yearNow + yearsLeft;


console.log(`It's ${yearNow}. You will retire in ${retirementYear}. You have only ${yearsLeft} years to go!`);