// Most Common Last Vowel
// Create a function that takes in a sentence as input and returns the most common last vowel in the sentence as a single character string.

// algo: 
// - split string into arr of words
// - create an obect and store counters for all of the last vowles of each word 
// - return thevowel with the higest counter  [['a', 'a'], ['A'], ['e']] 
//   - sort by length 
//   - if first two arr are the same length return firt el of each [arr1[0], arr2[0]]
//   - else arr[0]
36857050

function lastVowel(str) {
  let words = str.split(' ');
  let vowels = [];

  words.forEach(word => {
    let lastChar = word[word.length - 1];
    let allVowels = 'aoeui';

    if (allVowels.includes(lastChar)) {
      vowels = sortVowels(lastChar, vowels);
    }
  })
  vowels.sort((a, b) => b.length - a.length);
  if (vowels.length === 1) return vowels[0][0];

  return getAllEqualArr(vowels);

}

function getAllEqualArr(vowels) {
  let lastVowels = [];
  lastVowels.push(vowels[0][0]);

  if (vowels[0].length !== vowels[1].length) {
    return vowels[0][0];
  } else {
    for (let i = 1; i < vowels.length; i++) {
      if (vowels[i - 1].length !== vowels[i].length) {
        return lastVowels;
      } else {
        lastVowels.push(vowels[i][0])
      }
    }
  }

  return lastVowels;
}

function sortVowels(vowel, arr) {
  if (arr.length === 0) {
    arr.push([vowel]);
    return arr;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[0].includes(vowel)) {
      arr[0].push(vowel);
      return arr;
    }
  }
  arr.push([vowel]);
  return arr;
}
// For example: 
// console.log(lastVowel("Hello Hello Hi! haa")) // ➞ "o"

// Happy Path: 
// console.log(lastVowel("Watch the characters dance") === "e");

// // Edge cases: 
// // - more than one last vowel 
console.log(lastVowel('Hello World Helllo Abce Abce')) //.join('') === ['o', 'e'].join(''));

// // // - case matters 
// console.log(lasVowel('BCDO abco ABCO ABCE ABCE ABCE') === 'E');

// // // - the vowel is the last letter in a word:
// console.log(lasVowel('abo o o cde cde') === 'o');

// // // -y won't coutn as vowel 
// console.log(lasVowel('aby acy ady cde cde') === 'e');

// // // - the word always end up on a letter:
// console.log(lasVowel("abi, abi abi aba aba.") === 'i');
// console.log(lastVowel("Watch the characters dance!") === "e");

// // - empty string as input:
// console.log(lasVowel("") === "");

// // - space as input string as input:
// console.log(lasVowel(" ") === "");

// // -double spaces:
// console.log(lasVowel("aby  aby aby aba aba") === 'y');

// // other data type as input:
// console.log(lasVowel(undefined) === '');

// // no input
// console.log(lasVowel() === '');