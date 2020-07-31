let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

let arr = [];

for (let i in flintstones) {
  if (i === "Barney") {
    arr.push(i, flintstones[i]);
  }
}
console.log(arr);


let answer = Object.defineProperties(flintstones).filter();

console.log(answer);