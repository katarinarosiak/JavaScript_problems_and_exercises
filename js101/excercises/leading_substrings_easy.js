// /Leading Substrings
// Write a function that takes a string argument, and returns a list of all substrings that start from the beginning of the string, ordered from shortest to longest.

// Examples:

// Copy Code
console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]


function leadingSubstrings(string) {
  let arr = [];

  for (let index = 0; index < string.length; index++) {
    arr.push(string.slice(0, index + 1));
  }



  return arr;
}


//further exploration:
// function leadingSubstrings(string) {
//   let arr = []; 

//   for(let index = 0; index < string.length; index++) {
//     arr.push(string.slice(0, index+1));
//   }



//   return arr; 
// }


// function leadingSubstrings(string) {
//   let arr = string.split(''); 

//    return  arr.map((el, index) => arr.slice(0, index +1).join('')
//   )}

