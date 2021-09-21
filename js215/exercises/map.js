function myMap(array, func) {
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    arr.push(func(array[i]));
  }
  return arr;
}

let plusOne = n => n + 1;
myMap([1, 2, 3, 4], plusOne);       // [ 2, 3, 4, 5 ]