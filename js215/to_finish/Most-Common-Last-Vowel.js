Most Common Last Vowel
Create a function that takes in a sentence as input and returns the most common last vowel in the sentence as a single character string.

For example: 
lastVowel("Hello Hello Hi!") ➞ "o"

// Happy Path: 
console.log(lastVowel("Watch the characters dance") === "e");

// Edge cases: 
// - more than one last vowel 
console.log(lastVowel('Hello World Helllo Abce Abce').join('') === ['o', 'e'].join(''));

// - case matters 
console.log(lasVowel('BCDO abco ABCO ABCE ABCE ABCE') === 'E');

// - the vowel is the last letter in a word:
console.log(lasVowel('abo o o cde cde') === 'o');

// -y won't coutn as vowel 
console.log(lasVowel('aby acy ady cde cde') === 'e');

// - the word always end up on a letter:
console.log(lasVowel("abi, abi abi aba aba.") === 'i');
console.log(lastVowel("Watch the characters dance!") === "e"); 

// - empty string as input:
console.log(lasVowel("") === ""); 

// - space as input string as input:
console.log(lasVowel(" ") === ""); 

// -double spaces:
console.log(lasVowel("aby  aby aby aba aba") === 'y');

// other data type as input:
console.log(lasVowel(undefined) === '');

// no input
console.log(lasVowel() === '');