
// Problem 1: remove vowels from an array of strings
// # Write a method that takes an array of strings and returns an array of the same string values, except with the vowels removed.

console.log(removeVowels(['green', 'yellow', 'black', 'white'])) // == ['grn', 'yllw', 'blck', 'wht'])

// - iterate through arr
// - iterate through each letter in a word 
// = check if it's a vowel 
// - if not return that letter 

function removeVowels(arr) {
  let vowles = 'aieou';

  return arr.map(el => el.split('').filter(char => !vowles.includes(char)).join(''));

}

