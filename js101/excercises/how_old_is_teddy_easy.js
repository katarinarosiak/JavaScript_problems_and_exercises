// How old is Teddy?
// Build a program that randomly generates Teddy's age, 
//and logs it to the console.
// Have the age be a random number between 20 and 120 
//(inclusive).

// Example Output:

// Teddy is 69 years old!

function randomAge(name, max, min) {

  let age = Math.floor(Math.random() * (max - min + 1) + min);

  console.log(`${name} is ${age} years old.`);
}


randomAge("Teddy", 20, 120);
