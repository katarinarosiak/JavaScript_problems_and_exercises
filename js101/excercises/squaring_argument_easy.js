// Squaring an Argument
// Using the multiply() function from the "Multiplying Two Numbers" problem, write a function that computes the square of its argument (the square is the result of multiplying a number by itself).

// Example:

console.log(square(5) === 25); // logs true
console.log(square(-8) == 64); // logs true
console.log(square(2) == 4); // logs true

//i: comparison operator, that compares return value of square function and a number
// o: boolean true/false 
// rules: use miltuple function from the lat excercise 
// - square function takes an argument and multiply it by itself 


// A:
// - take a given number
// - multiply it by itself 
// - return 

// c:

function square(number) {
  return multiply(number, number);
}

function cubed(number) {
  return multiply(number, number) * multiply(number, number);
}

function multiply(number, number) {
  return number * number;
}

console.log(multiply(2, 2));
console.log(square(2));