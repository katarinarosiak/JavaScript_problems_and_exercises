let numbers = [1, 2, 3, 4];

do {
  numbers.pop()
}
while (numbers.length > 0);
console.log(numbers);

let numbers2 = [1, 2, 3, 4];

do {
  numbers2.shift()
}
while (numbers2.length > 0);
console.log(numbers2);

let numbers3 = [1, 2, 3, 4];
numbers3 = [];
console.log(numbers3);

let numbers4 = [1, 2, 3, 4];

numbers4.length = 0;
console.log(numbers4);