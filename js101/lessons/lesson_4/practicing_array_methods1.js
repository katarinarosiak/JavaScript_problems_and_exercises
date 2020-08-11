let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
let obj2 = {};
flintstones.forEach((element, index) => {
  obj2[element] = index;
}
);
console.log(obj2);