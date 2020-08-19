// /Practice Problem 10
// Perform the same transformation of sorting the subarrays we did in the previous exercise with one difference; sort the elements in descending order.



let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

let answer = arr.map(array => {
  if (!array.some(el => Number(el))) {
    return (array.slice().sort()).reverse();
  } else {
    return (array.slice().sort((a, b) => a - b)).reverse();
  }
});


console.log(arr);
console.log(answer);
