// /Grocery List
// Write a function that takes a grocery list (a two-dimensional array) with each element containing a fruit and a quantity, and returns a one-dimensional array of fruits, in which each fruit appears a number of times equal to its quantity.

// Example:

// Copy Code
console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// // returns ["apple", "apple", "apple", "orange", "banana", "banana"]


function buyFruit(arr) {

  let finalArr = [];

  for (let subArr = 0; subArr < arr.length; subArr++) {
    for (let el = 0; el < arr[subArr][1]; el++) {
      finalArr.push(arr[subArr][0]);
    }
  }


  return finalArr;
}