
const readline = require('readline-sync');
console.log("What is the bil?");
let bil = Number.parseInt(readline.prompt(), 10);
console.log("what is the tip percentage?");
let tipRate = Number.parseInt(readline.prompt(), 10);
let tip = ((tipRate / 100) * bil);
let totalBil = (bil + tip).toFixed(2);
console.log(`The tip will be $${tip}`);
console.log(`The total bill wil be $${totalBil}`);