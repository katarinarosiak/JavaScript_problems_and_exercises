let flintstones = ["Fred", "Wilma"];
let ar1 = (["Barney", "Betty"]);
let ar2 = (["Bambam", "Pebbles"]);

let flintstones1 = flintstones.concat(["Barney", "Betty"], ["Bambam", "Pebbles"]);

flintstones.push(...ar1, ...ar2);

console.log(flintstones);
console.log(flintstones1);