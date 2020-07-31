// Question 3
// Determine whether the following object of people and their age contains an entry for 'Spot':

let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

let answer;

for (let i in ages) {
  if (i !== "Spot") {
    answer = false;
  }
}

console.log(answer);
console.log(ages.hasOwnProperty("Spot"));

