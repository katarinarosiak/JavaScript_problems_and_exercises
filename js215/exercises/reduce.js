function myReduce(array, func, initial) {
  let acc;
  if (initial !== undefined) {
    acc = initial;
    for (let i = 0; i < array.length; i++) {
      acc = func(acc, array[i]);
    }
  } else {
    for (let i = 0; i < array.length; i++) {
      acc = func(acc, array[i]);
    }
  }
  return acc;
}

let smallest = (result, value) => (result <= value ? result : value);
let sum = (result, value) => result + value;

myReduce([5, 12, 15, 1, 6], smallest);           // 1
myReduce([5, 12, 15, 1, 6], sum, 10);            // 49