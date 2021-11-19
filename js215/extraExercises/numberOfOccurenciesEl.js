// You are getting an array of elements.Create a function that returns an array of objects where in each object the key represents the number of occurencies of that element in an array and the value is the element.The elements will be primitives only.
// For example:
// [1, 'Hello', 0, 'abc', 1] => [{ 2: 1}, {1: 'Hello'}, {1: 0}, {1: 1}];

//sort : [['hello'], [1,1]... ]
// iterate through an array 
// get the value and check if any of the arrays contains that value 
// if yes push teh el there
// else create a new array with this el and push it to the arr  
// iterate and create an object key: first el, val: sec el {}
//return {}


function countOccurencies(arr) {
  if (!Array.isArray(arr)) return [];
  if (arr.length < 1) return [];
  let final = [];

  arr.forEach((el) => {
    let idx = elExist(el, final)
    if (idx !== -1) {
      final[idx].push(el);
    } else {
      final.push([el]);
    }
  })

  return final.map(arr => {
    let obj = {};
    obj[arr.length] = arr[0];
    return obj;
  })
}

function elExist(el, final) {
  if (final.length === 0) return -1;
  for (let i = 0; i < final.length; i++) {
    if (final[i].includes(el)) {
      return i;
    }
  }
  return -1;
}

//Test Cases:
//Happy Path: 
console.log(countOccurencies([1, 2, 2, 3, 3, 3])); // [ { '1': 1 }, { '2': 2 }, { '3': 3 } ];
console.log(countOccurencies(['a', 'b', 'a'])); // [ { '2': 'a' }, { '1': 'b' } ]
// // //invalid input: 
console.log(countOccurencies({})); // []

// // //empty array
console.log(countOccurencies([])); //[]

// //different data types:
console.log(countOccurencies([undefined, undefined, NaN, NaN, '3', '3', 'a', 1, 1, 1, null])); // {2: undefined, 2: NaN, 2: '3', 1:'a', 3:1, 1:null}

// //stringified numbers 
console.log(countOccurencies(['1', '2', '2', '3', '3', '3'])); //[ { '1': '1' }, { '2': '2' }, { '3': '3' } ]