const readline = require('readline-sync')

console.log("What is your name?");
let name = readline.question();
console.log(`Hello ${name}`);
console.log("what is your name?");
let uppername = readline.question();
uppername = uppername.toUpperCase();
console.log(`HELLO ${uppername.slice(0, uppername.length - 1)}. WHY ARE WE SCREAMING ? `);