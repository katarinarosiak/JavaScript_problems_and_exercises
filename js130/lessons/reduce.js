

function reduce(array, callback, initialVal) {
  let result;
  let acc;
  let index = 0;

  if (initialVal) {
    acc = initialVal;
  } else {
    acc = array[0];
    index = 1;
  }

  for (index = index; index < array.length; index++) {
    acc = callback(acc, array[index]);
  }
  return acc;
}


let numbers = [1, 2, 3, 4, 5];
console.log(reduce(numbers, (accum, number) => accum + number));   // => 15
console.log(reduce(numbers, (prod, number) => prod * number));     // => 120
console.log(reduce(numbers, (prod, number) => prod * number, 3));  // => 360
console.log(reduce([], (accum, number) => accum + number, 10));    // => 10
console.log(reduce([], (accum, number) => accum + number));
// // => undefined

let stooges = ["Mo", "Larry", "Curly"];
console.log(reduce(stooges, (reversedStooges, stooge) => {
  reversedStooges.unshift(stooge);
  return reversedStooges;
}, []));
// // => ["Curly", "Larry", "Mo"]