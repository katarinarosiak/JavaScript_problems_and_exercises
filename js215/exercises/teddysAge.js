// How Old is Teddy
// Build a program that randomly generates Teddy's age, and logs it to the console. Have the age be a random number between 20 and 200 (inclusive).

// Example Output:

function teddysAge() {
  let max = 200;
  let min = 20;
  let age = Math.floor(Math.random() *(max - min+1)+min);
  return `Teddy is ${age} years old!`;
}

console.log(teddysAge());


// Copy Code
// Teddy is 69 years old!
