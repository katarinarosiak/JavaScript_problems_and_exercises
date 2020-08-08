//- check if there is any element > 10

let arr = [1, 3, -1, undefined, NaN, 0, { 1: 20 }, "11"];

function biggerThanTen(array) {
  return array.some(element => element > 10);
}

console.log(biggerThanTen(arr));
