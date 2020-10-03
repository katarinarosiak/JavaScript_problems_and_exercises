// Find the longest substring in alphabetical order.

// Example: the longest alphabetical substring in "asdfaaaabbbbcttavvfffffdf" is "aaaabbbbctt".

// There are tests with strings up to 10 000 characters long so your code will need to be efficient.

// The input will only consist of lowercase characters and will be at least one letter long.

// If there are multiple solutions, return the one that appears first.

// const sampleTests = [
//   ['asd', 'as'],
//   ['nab', 'ab'],
//   ['abcdeapbcdef', 'abcde'],
//   ['asdfaaaabbbbcttavvfffffdf', 'aaaabbbbctt'],
//   ['asdfbyfgiklag', 'fgikl'],
//   ['z', 'z'],
//   ['zyba', 'z']
// ]



// PEDAC
// UNDERSTAND THE PROBLEM: 
// 1.
// 2.
// 3.
// Input:
// - string
// Output:
// - string
// Rules:
// - find longest alphabetical 
// - at least one letter and not case sensitive 
// - if multiple solution choose the first one 
// -
// - 
// Questions: 
// -

// EXAMPLES/TEST CASES:
// i:
// =>
// o:
// =>
// MENTAL MODEL: 
// *
// DATA STRUCTURES: 
// ALGORYTHM: 
// - extract all the substring from a string 
// - iterate through substrings and choose the first one that is alphabetical  //    - check if a substring is alphabetical
//    - compare it with substring sortet alphabetically and return true o false
//    -  retrun all the alpbateical 
//    -  sort the substrings by length and return the first 
// - return the first alphabetical substring 
// -
// -
// -

// Checklist:
// - () ;
// - names
// -logic
// - return

// PSEUDOCODE:
// CODE: 


function longest(str) {
  let arrOfSubs = allSubStr(str);

  arrOfSubs = arrOfSubs.filter(isAlphabetical);

  return arrOfSubs.sort((a, b) => b.length - a.length)[0];
  return arrOfSubs;
}


function allSubStr(string) {
  let arr = [];
  for (let index1 = 0; index1 < string.length; index1++) {
    for (let index2 = index1 + 1; index2 < string.length + 1; index2++) {
      arr.push(string.slice(index1, index2))
    }
  }
  return arr;
}

function isAlphabetical(substring) {
  return substring.split('').sort().join('') === substring;
}



