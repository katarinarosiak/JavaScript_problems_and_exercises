let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

let counter = 0;
let counter2 = 0;
statement1.split("").forEach(letter => { if (letter === "t") { counter++; } });
statement2.split("").forEach(letter => { if (letter === "t") { counter2++; } });
console.log(counter);
console.log(counter2);



