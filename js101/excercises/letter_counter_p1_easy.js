/// Letter Counter (Part 1)
// Write a function that takes a string consisting of zero or more space separated words, and returns an object that shows the number of words of different sizes.

// Words consist of any sequence of non-space characters.

// Examples:

console.log(wordSizes('Four score and seven.'));                        // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));

// PEDAC
// UNDERSTAND THE PROBLEM: 
// 1.
// 2.
// 3.
// Input:
// - string
// Output:
// - 
// Rules:
// -a word is separated by a space 
// -if empty string return empty object 
// -all characters matters 
// -the output starts from smallest to biggest 
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
// DATA STRUCTURES: obj, array, string 
// ALGORYTHM: 

// - split the string to get each word as a sperate element of an array 
//sort array according to length
// - loop thorigh the array and 
// - take the first word, count length and add to obj
//if next word same length increment counter property else 
// andd new property 
//  
// 
// return the object 



// Checklist:
// - () ;
// - names
// -logic
// - return

// PSEUDOCODE:
// CODE: 


function wordSizes(string) {
  let obj = {};

  if (!string) {
    return obj;
  }

  let wordArr = string.split(' ').sort((a, b) => a.length - b.length);;

  obj[wordArr[0].length] = 1;
  for (let index = 1; index < wordArr.length; index++) {
    if (obj[wordArr[index - 1].length] === obj[wordArr[index].length]) {
      obj[wordArr[index].length] += 1;
    } else {
      obj[wordArr[index].length] = 1;
    }
  }

  return obj;
}