// Anti Array
// Given two arrays, return whether the two arrays are opposites of each other. That means both arrays are comprised only from elements a and b and the occurrences of these elements are swapped between the two arrays.

// Examples
// isAntiArray(["1", "0", "0", "1"], ["0", "1", "1", "0"]) ➞ true

// isAntiArray(["apples", "bananas", "bananas"], ["bananas", "apples", "apples"]) ➞ true

// isAntiArray([3.14, true, 3.14], [3.14, false, 3.14]) ➞ false
// Notes
// All tests will include only two different elements.


// i: 2 arr
// o: boolean (t o f) 


// R: 
// - the two arrays are opposite when:
// - two elements in each array (a, b) 
// - any data type
// - element a in one array will be on idx 1 while on second array it will be el b on idx 1
// - elements will always be different
// - not obj data type 


// - numbers can be 0 or negative 
// - no empty str 
// - the length of the array wioll be the same

// - they are not 
// - tehre are more than 2 data types in both arrays 
// - the length is different 
// - when the places are not switched (when they are the same ) 
// - if one or both are empty 



// D: arrays (strings, numbers, boolean other primitvies) arr => str

// A:
// - if any of arr is empty return false
// - if the length diffenretnt  return false 
// - if they are the same => false 
// - get two elements:
// - ewmove duplicates from both 
// - if  any array has length > 2 return false 
// - choose idx 0 from arr1, and idx 2 from arr 1 and save 
// - check if the elemnts are switched 
// - iterate through the both arrays incremnt by 1
// - take on ele eahc from each array 
// - check if elements are the same 
//   - if yes return false 
// - return true


function isAntiArray(arr1, arr2) {
  if ((arr1.length === 0 || arr2.length === 0) || (arr1.length !== arr2.length)) return false;
  let remvedDupl1 = removeDupli(arr1);
  if (remvedDupl1.sort().join('') !== removeDupli(arr2).sort().join('')) return false

  return arr1.every((el, idx) => el !== arr2[idx]);
}

function removeDupli(arr) {
  return arr.filter((el, idx) => arr.indexOf(el) === idx);
}



//Happy Path: 
console.log(isAntiArray(["1", "0", "0", "1"], ["0", "1", "1", "0"]) === true);
console.log(isAntiArray(["apples", "bananas", "bananas"], ["bananas", "apples", "apples"]))// === true);

//return new arrays
let arr1 = [1, 0, 1];
let arr2 = [0, 1, 0];
console.log(isAntiArray(arr1, arr2));
console.log('this shoud return true:');
console.log(arr1.join('') === [1, 0, 1].join(''));
console.log(arr2.join('') === [0, 1, 0].join(''));


//different data types:
console.log(isAntiArray([undefined, NaN, undefined], [NaN, undefined, NaN]))// === true);
console.log(isAntiArray([-0, null, -0], [null, -0, null]))// === true);
console.log(isAntiArray([undefined, NaN, undefined], [NaN, undefined, undefined]))// === false);

//case sensitive
console.log(isAntiArray(['A', 'B', 'A'], ['a', 'b', 'a']) === false);

// //more than two data types 
console.log(isAntiArray([3.14, true, 3.14], [3.14, false, 3.14]) === false);
console.log(isAntiArray([true, false, 0], [false, true, 1]) === false);

// // //length is different 
console.log(isAntiArray(["1", "0", "0", "1", "0"], ["0", "1", "1", "0"]) === false);

// // //one or more empty arr 
console.log(isAntiArray([], []) === false);
console.log(isAntiArray([], [1, 2, 3]) === false);

// // //places are not switched
console.log(isAntiArray([3.14, true, 3.14], [3.14, true, 3.14]) === false);
console.log(isAntiArray([1, 2, 1], [1, 1, 2]) === false);

//other data types:
console.log(isAntiArray({}, 1) === null);
console.log(isAntiArray(null, null) === null);
console.log(isAntiArray(undefined, NaN) === null);
console.log(isAntiArray('hello', '1') === null);
console.log(isAntiArray(' ', true) === null);
console.log(isAntiArray(false, false) === null);
console.log(isAntiArray('[]', false) === null);

//just one data type :
console.log(isAntiArray([1], [2]) === false);
console.log(isAntiArray([1, 1], [1, 1]) === false);





function walk(node, callback) {
  callback(node);

  for (let index = 0; index < node.childNodes.length; index += 1) {
    walk(node.childNodes[index], callback);
  }
};

function countChildren(arrOfNodes) {
  if (!Array.isArray(arrOfNodes)) {
    arrOfNodes = Array.prototype.slice.call(arrOfNodes);
  }
  let counters = []; 
  
  arrOfNodes.forEach(el => {
    let nodeName = el.toString();
    let allNodes = 0; 
    let indirectChildren = 0; 
    let directChildren = 0; 
    
    walk(el, (node) => {
      if (node !== el) {
        allNodes++;
        if (node.parentNode !== el) indirectChildren++;
        if (node.parentNode === el ) directChildren++; 
      }
    });

  counters.push({nodeName, allNodes, indirectChildren, directChildren});
  }); 
  return counters; 
 };

let nodeList = Array(11).fill(keys).map(el => {
  return document.getElementById(el);
})
console.log(nodeList);
console.log(countChildren(nodeList));