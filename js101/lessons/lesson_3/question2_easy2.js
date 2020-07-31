let numbers = [1, 2, 3, 4, 5];
let reversed = numbers;
reversed.reverse();
console.log(reversed); // [ 5, 4, 3, 2, 1 ]

numbers = [1, 2, 3, 4, 5];
let sorted = numbers;
sorted.sort((num1, num2) => num2 - num1);
console.log(sorted); // [ 5, 4, 3, 2, 1 ]

let reversedArr = [];
numbers.forEach(element => {
  reversedArr.unshift(element);
  return reversedArr;
});

console.log(reversedArr);

